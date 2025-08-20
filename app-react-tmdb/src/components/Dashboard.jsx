import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './GlobalContext';

const Dashboard = () => {
  const [movieData, setMovieData] = useState(null);
  const context = useContext(GlobalContext);

  useEffect(() => {
    if (context.fetchData) {
      const moviesData = context.fetchData.Search.map((movie) => {
        const { Title, Year, Poster } = movie;
        const movies = {
          Title: Title,
          Year: Year,
          Poster: Poster,
        };
        return movies;
      });

      setMovieData(moviesData);
    }
  }, [context.fetchData]);

  if (context.error) return <p>{context.error}</p>;
  if (context.loading) return <p>Carregando....</p>;
  return (
    <div className="dashboard-container">
      <ul className="galery-container">
        {movieData &&
          movieData.map((movie, i) => (
            <li key={i} className="img-container">
              <img src={movie.Poster} alt="" className="img-imagem" />
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
