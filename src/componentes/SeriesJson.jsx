import datosJson from "../datos/movies.json";
import styles from "../estilos/SeriesGrid.module.css";
import {SerieCard} from "./SerieCard";

export const  SeriesJson =() => {
  return (
    <div className={styles.gridContainer}>
      {datosJson.map((serie) => (
        <SerieCard
          key={serie.id}
          title={serie.title}
          image={serie.thumbnailUrl}
          id={serie.id}
          url={serie.url}
        />
      ))}
    </div>
  );
}
