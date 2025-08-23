import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import Loading from '../assets/Loading/Loading';

const Dashboard = () => {
  const context = useContext(GlobalContext);
  const { loading, error, fetchData } = context;

  const [movieData, setMovieData] = useState(null);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    if (loading || error) {
      setMovieData(null);
    } else if (fetchData && fetchData.Response === 'True') {
      const moviesData = fetchData.Search.map((movie) => {
        const { Title, Year, Poster } = movie;
        return {
          Title: Title,
          Year: Year,
          Poster: Poster,
        };
      });
      setMovieData(moviesData);
    }
  }, [fetchData, loading, error]);

  if (error)
    return (
      <div className="erro-container">
        <p>Erro na requisição!</p>
        <p>{error.message}</p>
      </div>
    );

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  if (!fetchData || fetchData.Response !== 'True') {
    return null;
  }

  return (
    <div className="dashboard-container">
      <ul className="galery-container">
        {movieData &&
          movieData.map((movie, i) => (
            <li key={i} className="img-container">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="img-imagem"
              />
              <figcaption className="img-legenda">
                <span>{movie.Title}</span>
                <p>{movie.Year}</p>
                <button>More Info</button>
              </figcaption>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dashboard;

// 2. com um botal e modal --> fazer novo fetch e utilizar o param &t para pegar detalhes do filme
