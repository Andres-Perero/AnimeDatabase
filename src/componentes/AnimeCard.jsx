import React from "react";
//
function AnimeCard({ anime }) {
  return (
    <li>
      <a key={anime.mal_id} href={anime.url} target="_blank" rel="noreferrer">
        <img
          key={anime.mal_id}
          src={anime.images.jpg.image_url}
          alt={anime.mal_id}
        />
      </a>
      <span>{anime.title}</span>
    </li>
  );
}
export default AnimeCard;
