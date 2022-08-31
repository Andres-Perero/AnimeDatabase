import React from "react";
import moment from "moment";
import styles from "../estilos/Search.module.css";

function SelectPagination({ HandleClick, numberPages, episodes }) {
  const getEpisodes = episodes;

  const pageList = [];
  for (let i = 1; i <= numberPages; i++) {
    pageList.push(i);
  }

  return (
    <main className={styles.mainContainer}>
      <div className={styles.buttonContainer}>
        <ul className={styles.listNumberPage}>
          <span>Paginas</span>
          {pageList.map((pageNumber) => (
            <li key={pageNumber}>
              <button value={pageNumber} onClick={HandleClick}>
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <table className={styles.listEpisodes}>
          <thead>
            <tr className={styles.titlesTable}>
              <th>N° Cap</th>
              <th>Titulo</th>
              <th>Fecha lanzamiento</th>
              <th>Enlace</th>
            </tr>
          </thead>
          {getEpisodes ? (
            getEpisodes.map((episode) => (
              <tr key={episode.mal_id}>
                <td>{episode.mal_id}</td>
                <td>{episode.title}</td>
                <td>{moment(episode.aired).format("MMMM DD YYYY")}</td>
                <td>
                  <a href={episode.url} target="_blank" rel="noreferrer">
                    Enlace - MyAnimeList
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </table>
      </div>
    </main>
  );
}

export default SelectPagination;
