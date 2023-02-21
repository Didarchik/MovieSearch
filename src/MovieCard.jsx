import React from "react";

let imageBase = 'https://image.tmdb.org/t/p';


const MovieCard = ( {movie} ) => {
    //console.log(movie);
    let imgPath = movie.poster_path;
    let posterSize = 'w200';
    let imageUrl = `${imageBase}/${posterSize}/${imgPath}`;
    
    let photo = true;
    if (imgPath === null){
        photo = false;
    }
    console.log(imageUrl, photo);
    return (
        <div className="movie">

            {
                photo === true ? (
                    <a href="https://google.com">
                    <img 
                        src={imageUrl}
                        alt="img"
                    />
                    </a>
                ) : ( 
                    <img 
                        src="https://placehold.co/200x300"
                        alt="noPhoto"
                    />
                )
            }

        </div>
    );
}

export default MovieCard;