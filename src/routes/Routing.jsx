import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { API_DEVICE_UID } from '../config'
import Header from '../layout/Header'
import Congrats from '../pages/Congrats'
import Instruction from '../pages/Instruction'
import Main from '../pages/Main'
import NotFound from '../pages/NotFound'
import PackageSize from '../pages/PackageSize'
import Packed from '../pages/Packed'
import Return from '../pages/Return'

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route
            path="/"
            element={<Navigate replace to={`/main/${API_DEVICE_UID}`} />}
          />
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
