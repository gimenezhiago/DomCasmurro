import { Routes, Route} from 'react-router-dom'
import Principal from './pages/principal'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Principal/>}>
        
        </Route>
      </Routes>
  
    </>
  )
}

export default App
