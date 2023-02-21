import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Surname: {props.surname}</h2>
    </>
  )
}


const api_url = "https://api.themoviedb.org/3/search/movie?api_key=9cc379b19593e150577671a9e133a8c6&query=";


function App(){
  const [text, setText] = React.useState("");

  const handleText = (event) => {
    setText(event.target.value);
  }

  const [Path, setPath] = React.useState(null);

  const searchMovie = async (title) => {
    const response = await fetch(`${api_url}=${title}`);
    const data = await response.json();
    setPath(data.results);
  }

  const [pressed, setPressed] = React.useState(false);

  useEffect( () => {
    if (pressed){
      console.log(text);
      searchMovie(text)
      setPressed(false)
    }
  }, [pressed, text])

  
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input 
          placeholder="Enter a movie name"
          type="text"
          value={text}
          onChange={handleText}
        />
        <button onClick={ () => setPressed(1)}>qwe</button>
        <h1>{text}</h1>
        <div className="container">
          { 
            Path?.length > 0 
            ?(
              <p>123</p>,
              Path.map((item) => (
                <MovieCard movie={item}/>
              ))
            ):
            (
              <p>qwew</p>
            )
          }
        </div>
        
      </div>
    </div>
  );

}

export default App;