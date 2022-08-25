import datosJson from "../datos/movies.json";
import styles from "../estilos/MoviesGrid.module.css";
import SerieCard from "./SerieCard";

export function MoviesGrid() {
  return (
    <div className={styles.gridContainer}>
       {datosJson.map((serie) => (
         <SerieCard
          title={serie.title}
          image={serie.thumbnailUrl}
          id={serie.id}
          url={serie.url}  />
         ))}
    </div>
  );
}
