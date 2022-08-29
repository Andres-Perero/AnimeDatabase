import React from "react";
import styles from "../estilos/SerieDetails.module.css";
import moment from "moment";

export const CardDetail = ({ id, title, infoSerie }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <main id={styles.main}>
          <section>
            <article className={styles.movie}>
              <div className={styles.movie_img}>
                <img
                  id={styles.img_src}
                  src={infoSerie.images.jpg.large_image_url}
                  alt={infoSerie.title}
                />
              </div>
              <div className={styles.movie_info}>
                <header>
                  <h1 className={styles.movie_title}>{infoSerie.title}</h1>
                </header>
                <h2>Sinopsis</h2>
                <div className={styles.movie_desc}>{infoSerie.synopsis}</div>
                <div className={styles.movie_details}>
                  <h2>Detalles</h2>
                  <ul className={styles.flex}>
                    <li>
                      Fecha lanzamiento:{" "}
                      <span id={styles.movie_date}>
                        <strong>
                          {moment(infoSerie.aired.from).format("MMMM DD YYYY")}
                        </strong>
                      </span>
                    </li>
                    <li>
                      Ranking:{" "}
                      <span id={styles.movie_rating}>
                        <strong>{infoSerie.rank} </strong>{" "}
                      </span>
                    </li>
                    <li>
                      Episodios:{" "}
                      <span id={styles.movie_runtime}>
                        <strong>{infoSerie.episodes}</strong>
                      </span>
                    </li>
                    <li>
                      Genero(s):{" "}
                      <span id={styles.movie_status}>
                        <strong>
                          {infoSerie.genres
                            .map((genre) => genre.name)
                            .join(", ")}
                        </strong>
                      </span>
                    </li>
                    <li>
                      Puntuacion:{" "}
                      <span id={styles.movie_status}>
                        <strong>{infoSerie.status}</strong>
                      </span>
                    </li>
                    <li>
                      Estado:{" "}
                      <span id={styles.movie_status}>
                        <strong>{infoSerie.status}</strong>
                      </span>
                    </li>
                  </ul>
                </div>

                <a
                  href={infoSerie.url}
                  className={styles.btn}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt={infoSerie.id}
                >
                  <svg className={styles.icon} width="16px" height="16px">
                    <svg
                      style={{ display: "none" }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <symbol id={styles.iconPlay} viewBox="0 0 24 24">
                        <path d="M3 22v-20l18 10-18 10z" />
                      </symbol>
                    </svg>
                  </svg>
                  Ver Serie
                </a>
              </div>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}

