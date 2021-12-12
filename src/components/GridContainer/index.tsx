import { FC } from 'react'
import { Button, Grid } from '@material-ui/core'
import { CloudDownload, CloudUpload } from '@material-ui/icons'

interface GridContainerProps {
  setOption: (value: Option) => void
}

const GridContainer: FC<GridContainerProps> = props => {
  const { setOption } = props

  return (
    <Grid
      container
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
          onClick={() => setOption('upload')}
          startIcon={<CloudUpload />}
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
          onClick={() => setOption('download')}
          startIcon={<CloudDownload />}
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
  )
}

export { GridContainer }
