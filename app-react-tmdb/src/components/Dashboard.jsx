import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ userInput }) => {
  const [data, setData] = useState(null);
  const [movies, setMovies] = useState(null);

  const omdbKey = 'aae27b86';

  useEffect(() => {
    const handleData = async () => {
      if (userInput) {
        try {
          const response = await axios.get(
            `http://www.omdbapi.com/?apikey=${omdbKey}&s=${userInput}`,
          );
          setData(response.data);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      }
    };
    handleData();
  }, [userInput]);

  // 2. com um botal e modal --> fazer novo fetch e utilizar o param &t para pegar detalhes do filme

  useEffect(() => {
    if (data) {
      const moviesData = data.Search.map((movie) => {
        const { Title, Year, Poster } = movie;
        const movies = {
          Title,
          Year,
          Poster,
        };
        return movies;
      });
      setMovies(moviesData);
    }
  }, [data]);

  return (
    <div className="dashboard-container">
      <ul className="galery-container">
        {movies &&
          movies.map((movie, i) => (
            <li key={i} className="img-container">
              <img src={movie.Poster} alt="" />
              <span>{movie.Title}</span>
              <span>{movie.Year}</span>
              <a>More Info</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Dashboard;
