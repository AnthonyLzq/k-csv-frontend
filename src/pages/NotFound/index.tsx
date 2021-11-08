import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { Home } from '@material-ui/icons'

import { Header } from '../../components'

const NotFound: FC = () => (
  <>
    <Header />
    <section
      style={{
        alignItems   : 'center',
        display      : 'flex',
        flexDirection: 'column'
      }}
    >
      <h2 style={{ color: '#d5d5d5' }}>We lost this page</h2>
      <p style={{
        color    : '#d5d5d5',
        marginTop: 0
      }}>
        We searched high and low, but couldn't find what you're looking for.<br />Let's find a better place four you to go:
      </p>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button
          startIcon={<Home />}
          variant='contained'
          size='large'
          style={{
            backgroundColor: '#5e7ce2',
            marginTop      : '1rem',
            width          : 150
          }}
        >
          Go home
        </Button>
      </Link>
    </section>
  </>
)

export { NotFound }
