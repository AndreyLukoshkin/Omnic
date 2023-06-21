import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Components/Main'
import './Styles/AppStyles/app.css'
import { Provider } from 'react-redux'
import Header from './Components/Header'

function App() {
  return (
    // <Provider>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/main" element={<Main />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    // </Provider>
  )
}

export default App
