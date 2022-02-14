import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors)
  return (<div>
            <h1> Directors Page </h1>
            {directors.map(director => {
              return (
                <div>
                  <h3>{director.name}</h3>
                  {director.movies.map(movie => {
                    return (<ul>{movie}</ul>)
                  })}
                </div>
              )
            })}
          </div>);
}

export default Directors;
