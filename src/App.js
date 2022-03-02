import Formulario from "./components/Formulario";
import Cancion from "./components/Cancion";
import Artista from "./components/Artista";
import { useState, useEffect } from "react";
function App() {

  const [findlyric, setFindLyric] = useState({});
  const [lyric, setLyric] = useState('');
  const [artista, setArtista] = useState([]);
  const [error, setError] = useState(false)

  useEffect(() => {

      const consultarAPI = async () => {

      if(Object.keys(findlyric).length === 0 ) return;
  
      const { artista, cancion } = findlyric
      const urlLetra = `https://private-anon-b44b69173e-lyricsovh.apiary-proxy.com/v1/${artista}/${cancion}`
      const urlArtista = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artista}`

      const [resLetra, resArtista] = await Promise.all([fetch(urlLetra), fetch(urlArtista)])

      const resultadoLetra = await resLetra.json()
      const resultadoArtista = await resArtista.json()

      if (resultadoLetra.error === "No lyrics found"){
        setError(true)
        setLyric('');
        setArtista([]);
        return
      } else if(resultadoArtista.artists === null){
        setError(true)
        setLyric('');
        setArtista([]);
        return
      }

      setLyric(resultadoLetra.lyrics);
      setArtista(resultadoArtista.artists);
      setError(false)
      }

      consultarAPI();
   
  }, [findlyric])

  return (
   <>
    <Formulario
    setFindLyric = {setFindLyric}
    />
    {error ? <p className='alert alert-danger text-center p-2'>No Hay Resultados</p> : null}
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Artista
            artista = {artista}
          />
        </div>
        <div className="col-md-6">
          <Cancion
          lyric = {lyric}
          />
        </div>
      </div>
    </div>
   </>
  );
}

export default App;
