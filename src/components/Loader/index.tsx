import { FC } from 'react'

import './index.css'

const Loader: FC = () => {
  return (
    <section
      style={{
        display       : 'flex',
        justifyContent: 'center',
        marginTop     : 15
      }}
    >
      <div className='lds-roller'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </section>
  )
}

export { Loader }
