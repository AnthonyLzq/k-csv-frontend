import { FC } from 'react'

const Layout: FC = ({ children }) => {
  return (
    <div style = {{
      width        : '100vw',
      height       : '100vh',
      textAlign    : 'center',
      display      : 'flex',
      flexDirection: 'column',
      alignContent : 'center',
      marginTop    : '10vh'
    }}>
      {children}
    </div>
  )
}

export { Layout }
