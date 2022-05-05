import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import { useState } from 'react';

function App() {
  /*const title = "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg";
    const name = "The Avengers";
    const rating = 8;
    const summary = "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.";*/
  const stored_movielist = [
    {
      name: "The Avengers",
      title: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      rating: 8,
      summary: "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."
    },
    {
      name: "Jai Bhim",
      title: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      rating: 8.8,
      summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case"
    },
    {
      name: "Interstellar",
      title: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
    },
    {
      name: "Baahubali",
      title: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    {
      name: "Ratatouille",
      title: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    },
    {
      name: "96",
      title: "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      rating: 8.6,
      summary: "K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart."
    },

  ];

  const [movieList, setMovieList] = useState(stored_movielist);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <div className="App">
      <div className="add-form">
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Rating"
          onChange={(event) => setRating(event.target.value)}
        />
        <input
          type="text"
          placeholder="Summary"
          onChange={(event) => setSummary(event.target.value)}
        />
        {/*<button onClick={() => console.log(name, title, rating, summary)}>Add movie</button>*/}
        <button
          onClick={() => {
            const newMovie = {
              name: name,
              title: title,
              rating: rating,
              summary: summary,
            };

            setMovieList([...movieList, newMovie]);
          }}
        >
          Add movie
        </button>
      </div>
      <div className="movie-list">
      {movieList.map((movie) => (
        <Movie name={movie.name} title={movie.title} rating={movie.rating} summary={movie.summary} />
      ))
      }
      </div>
    </div>
  );
}

export default App;
