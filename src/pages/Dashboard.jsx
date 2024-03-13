import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import TareaForm from "../components/TareaForm"
import Spinner from'../components/Spinner'
import {getTareas, reset} from '../features/tareas/tareaSlice'
import TareaItem from '../components/TareaItem'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const {user} = useSelector((state)=> state.auth)
  const {tareas, isLoading, isError,isSuccess,message} = useSelector((state)=> state.tarea)

  useEffect(() => {

    if (isError){
      console.log(message);
    }
    if(!user){
      navigate('/login')
    }
    else{
      dispatch(getTareas())
    }

    return ()=>{
      dispatch(reset())
    }

  },[user, navigate, isError, message, dispatch])

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      <section className="heading">
        <h3>
          Bienvenido {user && user.name}
          <p>Dashboard de Tareas</p>
        </h3>        
      </section>
      <TareaForm/>

      <section className='content'>
                {tareas.length > 0 ? (
                    <div className="tareas">
                        {tareas.map((tarea) => (
                            <TareaItem key={tarea._id} tarea={tarea} />
                        ))}
                    </div>
                ) : (
                    <h3>No hay tareas para mostrar</h3>
                )}
            </section>
    </>
  )
}

export default Dashboard