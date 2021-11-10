import { FC, useState } from 'react'
import { Button, Grid, ThemeOptions, ThemeProvider } from '@material-ui/core'
import { CloudDownload, CloudUpload } from '@material-ui/icons'
import { createTheme } from '@material-ui/core/styles'

import './index.css'
import { Body, Header } from '../../components'

const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs : 0,
      sm : 620,
      md : 960,
      lg : 1200,
      xl : 1536,
      xxl: 1800
    }
  }
}

const theme = createTheme(themeOptions)

const Home: FC = () => {
  const [isUploadSelected, setIsUploadSelected] = useState(false)

  return (
    <div style={{ width: '70vw', margin: '0 auto', overflow: 'hidden' }}>
      <Header />
      <h2 style={{ color: '#d5d5d5' }}>Please, select an option:</h2>
      <ThemeProvider theme={theme}>
        <Grid
          container
          className='buttons-container'
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={5} lg={5} xl={4}>
            <Button
              startIcon={<CloudUpload />}
              type='submit'
              onClick={() => setIsUploadSelected(false)}
              variant='contained'
              size='large'
              style={{
                backgroundColor: '#5e7ce2'
              }}
            >
              Upload a new csv
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5} xl={4}>
            <Button
              startIcon={<CloudDownload />}
              type='submit'
              onClick={() => setIsUploadSelected(false)}
              variant='contained'
              size='large'
              style={{
                backgroundColor: '#5e7ce2'
              }}
            >
              Download last csv uploaded
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
      {/* <Body /> */}
    </div>
  )
}

export { Home }
