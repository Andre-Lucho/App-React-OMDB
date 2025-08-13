import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

const Dashboard = ({ userInput }) => {
  const [data, setData] = useState(null);

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

  // 1. utilizar o parâmetro &s --> para pagar o array de filmes com aquele nome
  // 2. com um botal e modal --> fazer novo fetch e utilizar o param &t para pegar detalhes do filme

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return <div className="dashboard-container">{/* <p>{data}</p> */}</div>;
};

export default Dashboard;
