import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useGetTodosQuery } from './slices/toApiSlice'
import RegisterPage from './pages/RegisterPage';

function App() {
  const { data, isLoading, error} = useGetTodosQuery()
  console.log('Data:', data);
  console.log('isLoading:', isLoading);
  console.log('Error:', error);
  const todosArr = data

  return (
    <>
      <div className='bg-info'>
        <RegisterPage/>
        {
          todosArr?.map(task =>(<p>{task.title}</p>))
        }
       </div>
       <ToastContainer></ToastContainer>
    </>
  )
}

export default App
