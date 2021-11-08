import { FC } from 'react'

const Header: FC = () => (
  <header
    style = {{
      display       : 'flex',
      flexDirection : 'column',
      alignItems    : 'center',
      justifyContent: 'center',
      fontSize      : 'calc(10px + 2vmin)',
      color         : '#d5d5d5'
    }}
  >
    <h1>k-csv</h1>
  </header>
)

export { Header }
