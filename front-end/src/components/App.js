import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RandomStudentView from './RandomStudent/RandomStudentView';
import StudentsListView from './StudentsList/StudentsListView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <RandomStudentView /> } />
        <Route path='/students' element={ <StudentsListView /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
