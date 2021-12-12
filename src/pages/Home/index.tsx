import { FC, useState } from 'react'

import { Body, Header, GridContainer } from '../../components'

const Home: FC = () => {
  const [option, setOption] = useState<Option>(null)

  return (
    <div style={{ width: '100vw', margin: '0 auto', overflow: 'hidden' }}>
      <Header />
      {!option ? (
        <>
          <h2 style={{ color: '#d5d5d5' }}>
            Welcome!
            <br /> Please, select an option:
          </h2>
          <GridContainer setOption={setOption}/>
        </>
      ) : (
        <Body option={option} setOption={setOption} />
      )}
    </div>
  )
}

export { Home }
