import { FC, MouseEvent, useState } from 'react'
import {
  Button,
  Fab,
  IconButton,
  InputAdornment,
  InputBase
} from '@material-ui/core'
import {
  CloudUpload,
  Home,
  Visibility,
  VisibilityOff
} from '@material-ui/icons'
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { DropzoneArea } from 'material-ui-dropzone'
import Swal from 'sweetalert2'

import './index.css'
import { Loader } from '../Loader'
import { callApi } from '../../utils'

const theme = createTheme({
  overrides: {
    MuiDropzoneArea: {
      root: {
        backgroundColor: '#282c34',
        borderColor: '#d5d5d5',
        color: '#d5d5d5',
        minHeight: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '90vw',
        minWidth: '50vw'
      },
      icon: {
        color: '#d5d5d5'
      }
    },
    MuiDropzonePreviewList: {
      root: {
        alignItems: 'center',
        color: '#d5d5d5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 15
      }
    },
    MuiChip: {
      root: {
        color: '#d5d5d5'
      },
      outlined: {
        border: '1px solid #d5d5d5'
      },
      deleteIcon: {
        color: '#d5d5d5'
      }
    }
  }
})

interface BodyProps {
  setIsUploadSelected: (value: boolean) => void
}

const Body: FC<BodyProps> = ({ setIsUploadSelected }) => {
  const [file, setFile] = useState<File | null>(null)
  const [apiKey, setApiKey] = useState('')
  const [showApiKey, setShowApiKey] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onChange = (files: File[]) => {
    if (files.length === 0) setFile(null)
    else setFile(files[0])
  }

  const handleSubmit = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()

    if (!file)
      return Swal.fire({
        background: '#d5d5d5',
        icon      : 'error',
        title     : 'Missing csv!'
      })

    if (!apiKey)
      return Swal.fire({
        background: '#d5d5d5',
        icon      : 'error',
        title     : 'Missing apiKey!'
      })

    setIsLoading(true)
    const body = new FormData()
    body.append('file', file as File)
    const { response, error } = await callApi({
      body,
      headers: {
        'api-key': apiKey
      }
    })
    setIsLoading(false)

    if (error)
      Swal.fire({
        background: '#d5d5d5',
        icon      : 'error',
        text      : error,
        title     : 'Error!'
      })
    else
      Swal.fire({
        background        : '#d5d5d5',
        confirmButtonColor: '#5e7ce2',
        icon              : 'success',
        iconColor         : '#5e7ce2',
        text              : response as string,
        title             : 'Success!'
      })
  }

  return (
    <>
      <section className='section'>
        <form>
          <MuiThemeProvider theme={theme}>
            <DropzoneArea
              showPreviewsInDropzone={true}
              useChipsForPreview
              acceptedFiles={['.csv', 'text/csv']}
              dropzoneText='Drag and drop your csv here or click'
              filesLimit={1}
              maxFileSize={500_000_000}
              onChange={onChange}
              dropzoneProps={{
                disabled: isLoading
              }}
              previewChipProps={{
                disabled: isLoading
              }}
            />
          </MuiThemeProvider>
          <div className='form-control'>
            <label htmlFor='apiKey'>apiKey: </label>
            <InputBase
              style={{
                background  : '#87898c',
                color       : '#282c34',
                borderColor : 'transparent',
                borderRadius: '0.25rem',
                margin      : 'auto 1rem',
                padding     : '0.25rem 0.5rem 0rem'
              }}
              required
              type={showApiKey ? 'text' : 'password'}
              id='apiKey'
              name='apiKey'
              value={apiKey}
              onChange={e => setApiKey(e.target.value)}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    onClick={() => setShowApiKey(!showApiKey)}
                    onMouseDown={e => e.preventDefault()}
                  >
                    {showApiKey ? (
                      <Visibility style={{ color: '#282c34' }} />
                    ) : (
                      <VisibilityOff style={{ color: '#282c34' }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              disabled={isLoading}
            />
          </div>
          <Button
            startIcon={<CloudUpload />}
            type='submit'
            onClick={handleSubmit}
            disabled={isLoading}
            variant='contained'
            size='large'
            style={{
              backgroundColor: '#5e7ce2',
              marginTop      : '1rem'
            }}
          >
            Update csv
          </Button>
        </form>
      </section>
      {isLoading && <Loader />}
      <Fab
        size='small'
        aria-label='home'
        style={{
          backgroundColor: '#5e7ce2',
          position       : 'fixed',
          margin         : 0,
          inset          : 'auto 20px 20px auto'
        }}
        onClick={() => setIsUploadSelected(false)}
      >
        <Home />
      </Fab>
    </>
  )
}

export { Body }
