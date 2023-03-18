import { Route, Routes } from 'react-router-dom'


import TaskpageFinal from './Pages/TaskpageFinal';

function App() {
  return (
    <>
   
      <Routes>
      
        <Route path='/task' element={<TaskpageFinal />} />
      </Routes>

    </>
  );
}

export default App;
