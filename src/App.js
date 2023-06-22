import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Components/Main'
import './Styles/AppStyles/app.css'
import { useDispatch } from 'react-redux'
import Header from './Components/Header'
import Packed from './Components/Packed'
import Return from './Components/Return'
import PackageSize from './Components/PackageSize'
import Instruction from './Components/Instruction'
import { API_DEVICE_UID } from './config/config'
import NotFound from './Components/NotFound'

import { useEffect } from 'react'
import { deviceUid } from './api/deviceUid'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(deviceUid())
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path={`/main/${API_DEVICE_UID}`} element={<Main />} />
            <Route path="/packed" element={<Packed />} />
            <Route path="/package-size" element={<PackageSize />} />
            <Route path="/instruction" element={<Instruction />} />
            <Route path="/return" element={<Return />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
