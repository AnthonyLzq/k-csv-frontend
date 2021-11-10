import { FC, useState } from 'react'

import { Body, Header, GridContainer } from '../../components'

const Home: FC = () => {
  const [isUploadSelected, setIsUploadSelected] = useState(false)

  return (
    <div style={{ width: '100vw', margin: '0 auto', overflow: 'hidden' }}>
      <Header />
      {isUploadSelected ? (
        <Body setIsUploadSelected={setIsUploadSelected} />
      ) : (
        <>
          <h2 style={{ color: '#d5d5d5' }}>
            Welcome!
            <br /> Please, select an option:
          </h2>
          <GridContainer setIsUploadSelected={setIsUploadSelected} />
        </>
      )}
    </div>
  )
}

export { Home }
