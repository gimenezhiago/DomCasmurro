import { Routes, Route } from 'react-router-dom';
import Principal from './pages/principal';
import Personagens from './pages/personagens';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/personagens' element={<Personagens />} />
      </Routes>
    </>
  );
}

export default App;
