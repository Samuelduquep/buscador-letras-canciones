import React from 'react'

const Artista = ({artista}) => {
    if(artista.length === 0) return null;

    const info = artista[0]
    const {
        strArtist, 
        strArtistThumb, 
        strBiographyES, 
        strGenre,
        strLastFMChart,
        intFormedYear, 
        strLabel, 
        strWebsite, 
        strFacebook, 
        strTwitter } = info
  
  return (
    <div className='card border-light'>
        <div className='card-header bg-primary text-light font-weight-bold'>
             {strArtist}
        </div>
        <div className='card-body '>
            <img className=' card img-thumbnail img-fluid' src={strArtistThumb} alt={`Imagen ${strArtist}`}/> 
            <p className='card-text'>Estilo: {strGenre}</p>  
            <p className='card-text'>Productora: {strLabel}</p>
            <p className='card-text'>Año de la banda: {intFormedYear}</p>
            {strLastFMChart === null ? null : <a className='btn btn-primary mr-2 mb-4' href={strLastFMChart} target="_blank" rel="noopener noreferrer">Escuchalos Aqui</a>}
            {strWebsite === "" ? null : <a className='btn btn-primary mb-4' href={`https://${strWebsite}`} target="_blank" rel="noopener noreferrer">WebSite</a>}
            {strBiographyES === null ? null : <h2 className='mt-5'>Biografía</h2> }
            {strBiographyES === null ? null :  <p className='card-text mt-3'>{strBiographyES}</p>  }
          
           <p className='card-text'>
           <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
            </a>
            <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </a>
            <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-lastfm"></i>
            </a>
           </p>
        </div>       
    </div>
  )
}

export default Artista
