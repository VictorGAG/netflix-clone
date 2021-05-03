import React from 'react';
import './style.css';

function MovieHeader({item}) {

  console.log(item);
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push( item.genres[i].name );
  }

  let description = item.overview;
  if (description.length > 350) {
     description = description.substring(0, 350)+'...';
  }

  console.log(genres);

  return(
      <section className="featured" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path}`

      }}>
          <div className="featured--vertical">
              <div className="featured--horizontal">
                <div className="featured--name">{item.original_name}</div>
                <div className="featured--info">
                  <div className="info--point">{item.vote_average} pontos</div>
                  <div className="info--year">{firstDate.getFullYear()}</div>
                  <div className="info--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                </div>
                <div className="featured--overview">{description}</div>
                <div className="featured--buttons">
                    <a href={`/watch/${item.id}`} className="watch--button">► Assistir</a>
                    <a href={`/list/add/${item.id}`} className="mylist--button">+ Minha lista</a>

                    
                </div>
                <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
              </div>
          </div>

      </section>   
      
  );
}

export default MovieHeader;