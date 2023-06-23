import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Header from '../layout/Header'
import Packed from '../pages/Packed'
import PackageSize from '../pages/PackageSize'
import Instruction from '../pages/Instruction'
import Return from '../pages/Return'
import Congrats from '../pages/Congrats'
import NotFound from '../pages/NotFound'
import { API_DEVICE_UID } from '../config'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path={`/main/${API_DEVICE_UID}`} element={<Main />} />
          <Route path={`/packed/${API_DEVICE_UID}`} element={<Packed />} />
          <Route
            path={`/package-size/${API_DEVICE_UID}`}
            element={<PackageSize />}
          />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/return" element={<Return />} />
          <Route path="/congrats" element={<Congrats />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
