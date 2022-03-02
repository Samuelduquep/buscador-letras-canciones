import React from 'react'

const Cancion = ({lyric}) => {
    if(lyric === '') return null;
  return (
      <>
        <h2>Letra Canción</h2>
        <p className='letra'>{lyric}</p>
      </>
  )
}

export default Cancion
