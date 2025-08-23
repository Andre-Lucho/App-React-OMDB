import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import Loading from '../assets/Loading/Loading';

const Dashboard = () => {
  const [movieData, setMovieData] = useState(null);
  const [modal, setModal] = useState(null);
  const context = useContext(GlobalContext);

  useEffect(() => {
    if (context.loading || context.error) setMovieData(null);
    if (context.fetchData && context.fetchData.Response === 'True') {
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
  }, [context.fetchData, context.loading, context.error]);

  //
  // Ver renderização da busca antiga(após sucesso), mesmo com a mudança no código acima
  //

  useEffect(() => {
    context.fetchData
      ? console.log(context.response)
      : console.log(context.error);
  }, [context.fetchData]);

  if (context.error)
    return (
      <div className="erro-container">
        <p>Erro na requisição!</p>
        <p>Página não encontrada</p>
      </div>
    );

  if (context.loading)
    return (
      <>
        <Loading />
      </>
    );

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
