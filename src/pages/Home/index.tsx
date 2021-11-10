import { FC, useState } from 'react'
import { Button, Grid } from '@material-ui/core'
import { CloudDownload, CloudUpload } from '@material-ui/icons'

import './index.css'
import { Body, Header } from '../../components'

const Home: FC = () => {
  const [isUploadSelected, setIsUploadSelected] = useState(false)

  return (
    <div style={{ width: '100vw', margin: '0 auto', overflow: 'hidden' }}>
      <Header />
      <h2 style={{ color: '#d5d5d5' }}>Please, select an option:</h2>
      <Grid
        container
        className='buttons-container'
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        style={{
          margin: '0 auto',
          maxWidth: 960,
          width: '80%'
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Button
            startIcon={<CloudUpload />}
            type='submit'
            onClick={() => setIsUploadSelected(false)}
            variant='contained'
            size='large'
            fullWidth
            style={{
              backgroundColor: '#5e7ce2'
            }}
          >
            Upload a new csv
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Button
            disabled
            startIcon={<CloudDownload />}
            type='submit'
            onClick={() => setIsUploadSelected(false)}
            variant='contained'
            size='large'
            fullWidth
            style={{
              backgroundColor: '#5e7ce2'
            }}
          >
            Download last csv uploaded
          </Button>
        </Grid>
      </Grid>
      {/* <Body /> */}
    </div>
  )
}

export { Home }
