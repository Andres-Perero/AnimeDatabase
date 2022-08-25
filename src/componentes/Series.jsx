import React from "react";
import styles from "../estilos/MoviesGrid.module.css";
import SerieCard from "./SerieCard";

//Lista de series 
function Series({ SeriesList }) {
  return (
    <div className={styles.gridContainer}>
      {SeriesList.map((serie) => (
        <SerieCard
          title={serie.title}
          image={serie.images.jpg.image_url}
          id={serie.mal_id}
          url={serie.url}
        />
      ))}
    </div>
  );
}

export default Series;
