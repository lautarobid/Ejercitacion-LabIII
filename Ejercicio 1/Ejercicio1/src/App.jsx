import React from 'react';
import filterMovies from './components/filmsFilter/FilmsFilter';

function App() {
  const titlesArray = filterMovies();

  return (
    <div className="App">
      <h1>Películas de Christopher Nolan</h1>
      <ul>
        {titlesArray.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;