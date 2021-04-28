import React from 'react'

import { BrowserRouter as Routers, Routes as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import List from './pages/List'
import Detail from './pages/Detail'

export default function Routes() {
  return (
    <Routers>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Router>
    </Routers>
  )
}
