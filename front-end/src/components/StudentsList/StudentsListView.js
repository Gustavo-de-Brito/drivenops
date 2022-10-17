import { useState, useEffect } from 'react';
import axios from 'axios';

function StudentsListView() {
  const [ students, setStudents ] = useState([]);

  useEffect(async () => {
    const API_URL = process.env.REACT_APP_BASE_URL;

    try {
      const response = await axios.get(`${ API_URL }/students`);

      setStudents(response.data);
    } catch(err) {
      alert(err)
      alert(err.response.data);
      alert('ocorreu um erro ao tentar listar os estudantes');
    }
  }, []);

  return (
    <>
      {
        students.length > 0
        ?
        <ul>
        {
          students.map(student => <li>{student.name}</li>)
        }
        </ul>
        :
        <h3>Não há estudantes cadastrados</h3>
      }
    </>
  )
}

export default StudentsListView;