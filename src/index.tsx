import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css'
import { Layout } from './components'
import { Home, NotFound } from './pages'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
