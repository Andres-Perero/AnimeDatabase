import React from "react";
import styles from "../estilos/SeriesGrid.module.css";
import {SerieCard} from "./SerieCard";

//Lista de series 
export const Series = ({ SeriesList }) =>  {
  return (
    <div className={styles.gridContainer}>
      {SeriesList.map((serie) => (
        <SerieCard key={serie.mal_id}
          title={serie.title}
          image={serie.images.jpg.large_image_url}
          id={serie.mal_id}
          url={serie.url}
          moreInfo={serie}
        />
      ))}
    </div>
    
  );
}

