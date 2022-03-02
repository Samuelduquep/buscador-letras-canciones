import React from 'react'
import { useState } from 'react'

const Formulario = ({setFindLyric}) => {

  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: ''
  })

  const [error, setError] = useState(false)

  const { artista, cancion } = busqueda;

  const actualizarState = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  const buscarInformacion = e => {
    e.preventDefault()

    if(artista.trim() === '' || cancion.trim() === ''){
        setError(true)
        return;
    } 

    setError(false)

    setFindLyric(busqueda)



  }

  return (
    <div className='bg-info'>
      <div className='container'>
        <div className='row'>
          <form
            className='col card text-white bg-transparent mb-5 pt-5 pb-2'
            onSubmit={buscarInformacion}
          >
              <fieldset>
                <legend className='text-center'>Buscador Letras Canciones</legend>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Artista</label>
                      <input
                        type='text'
                        className='form-control'
                        name='artista'
                        placeholder='Nombre Artista'
                        onChange={actualizarState}
                        value={artista}
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                  <div className='form-group'>
                      <label>Canción</label>
                      <input
                        type='text'
                        className='form-control'
                        name='cancion'
                        placeholder='Nombre Canción'
                        onChange={actualizarState}
                        value={cancion}
                      />
                    </div>
                  </div>
                </div>
                <button 
                  type='submit' 
                  className='btn-primary float-right'>Buscar</button>
              </fieldset>
          </form>
        </div>
        {error ? <p className='alert alert-danger text-center p-2'>Todos los campos son obligatorios</p> : null}
      </div>
    </div>
  )
}

export default Formulario
