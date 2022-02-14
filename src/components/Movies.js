import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies)
  console.log('hello')
  return (
         <div>
           <h1> Movies Page </h1>
           {movies.map(movie => {
             return (<div key={movie.time}> 
                      <h3>{movie.title}</h3>
                      <h4>Time: {movie.time}</h4>
                      {movie.genres.map(genre => {
                        return (<ul key={genre.index}>
                          <li>{genre}</li>
                          </ul>)
                      })}
                     </div>)
           })}
         </div>
         );
}

export default Movies;
