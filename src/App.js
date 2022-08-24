import { Route, Routes } from 'react-router-dom';
import Student from './Components/Student';
import Teacher from './Components/Teacher';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Student/>}></Route>
        <Route path='/teacher' element={<Teacher/>}></Route>
      </Routes>
      

    </div>
  );
}

export default App;
