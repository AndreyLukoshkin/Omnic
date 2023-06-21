import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Components/Main'
import './Styles/AppStyles/app.css'
// import { Provider } from 'react-redux'
import Header from './Components/Header'
import Packed from './Components/Packed'
import Return from './Components/Return'
import PackageSize from './Components/PackageSize'

function App() {
  return (
    // <Provider>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/main" element={<Main />} />
            <Route path="/packed" element={<Packed />} />
            <Route path="/return" element={<Return />} />
            <Route path="/package-size" element={<PackageSize />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    // </Provider>
  )
}

export default App
