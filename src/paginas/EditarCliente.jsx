import{useEffect, useState} from 'react'
import Formulario from '../components/Formulario'
import {useParams} from 'react-router-dom'

const EditarCliente = () => {
  
  const [cliente, setCliente] = useState({})

  const [cargando, setCarga] =useState(true)

  const {id}= useParams()

  useEffect(() => {
      
      const obtenerClienteApi = async () => {
          try {
              const url = `http://localhost:4000/clientes/${id}`
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
              setCliente(resultado)
          } catch (error) {
              console.log(error);
          }

          setTimeout(() => {
              setCarga(!cargando)
          }, 1000);
          
      }
      obtenerClienteApi()
  }, []);




  return (
    <>
    <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1> 
    <p className='mt-3'>Utiliza este formulario para editar cliente</p>



    {cliente?.nombre ? (
      <Formulario
      cliente={cliente} 
      cargando={cargando}
    />

        ): 
  <p>No se encuenta ese cliente, cliente id no valido </p>
    }
    
    </>
  )
}

export default EditarCliente