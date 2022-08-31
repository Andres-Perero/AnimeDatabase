import React, { useState } from "react";
import styles from "../estilos/SerieDetails.module.css";
import moment from "moment";
import { Translate } from "./Translate";
import { EpisodesSerie } from "./EpisodesSerie";

export const CardDetail = ({ id, title, infoSerie }) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  return (
    <div>
      <div className={styles.wrapper}>
        <main id={styles.main}>
          <section>
            <article className={styles.movie}>
              <div className={styles.movie_img}>
                <img
                  id={styles.img_src}
                  /**/
                  src={
                    infoSerie.images.jpg.large_image_url &&
                    infoSerie.images.jpg.large_image_url
                  } /**/
                  alt={infoSerie.title}
                />
              </div>
              <div className={styles.movie_info}>
                <header>
                  <h1 className={styles.movie_title}>{infoSerie.title}</h1>
                </header>
                <h2>Sinopsis</h2>
                <div className={styles.movie_desc}>
                  <Translate info={infoSerie.synopsis} />
                </div>
                <div className={styles.movie_details}>
                  <h2>Detalles</h2>
                  <ul className={styles.flex}>
                    <li>
                      Fecha lanzamiento:{" "}
                      <span id={styles.movie_date}>
                        <strong>
                          <Translate
                            info={moment(infoSerie.aired.from).format(
                              "MMMM DD YYYY"
                            )}
                          />
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
                        {infoSerie.episodes !== null ? (
                          <strong>{infoSerie.episodes}</strong>
                        ) : (
                          <strong>Actualmente en emision</strong>
                        )}
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
                        <strong>{infoSerie.score}</strong>
                      </span>
                    </li>
                    <li>
                      Estado:{" "}
                      <span id={styles.movie_status}>
                        <strong>
                          <Translate info={infoSerie.status} />
                        </strong>
                      </span>
                    </li>
                  </ul>
                </div>
                <button onClick={handleClick} className={styles.btn}>
                  Episodios
                </button>
                {/* <a
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
                </a> */}
              </div>
            </article>
          </section>
        </main>
      </div>
      <div>
        {/* 👇️ show elements on click */}
        {isShown && (
          <div>
            <EpisodesSerie idSerie={id} />
          </div>
        )}
        {/* 👇️ show component on click */}
        {isShown && <></>}
      </div>
    </div>
  );
};
