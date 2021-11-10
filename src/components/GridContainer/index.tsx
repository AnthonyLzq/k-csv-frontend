import { FC } from 'react'
import { Button, Grid, Tooltip } from '@material-ui/core'
import { CloudDownload, CloudUpload } from '@material-ui/icons'

interface GridContainerProps {
  setIsUploadSelected: (value: boolean) => void
}

const GridContainer: FC<GridContainerProps> = ({ setIsUploadSelected }) => (
  <Grid
    container
    direction='row'
    justifyContent='center'
    alignItems='center'
    spacing={2}
    style={{
      margin  : '0 auto',
      maxWidth: 960,
      width   : '80%'
    }}
  >
    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
      <Button
        startIcon={<CloudUpload />}
        onClick={() => setIsUploadSelected(true)}
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
      <Tooltip title='Not available yet :(' arrow>
        <div>
          <Button
            disabled
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
        </div>
      </Tooltip>
    </Grid>
  </Grid>
)

export { GridContainer }
