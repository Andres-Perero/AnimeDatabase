import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Series } from "../pages/Series";
import { Slider } from "./Carrusel";
import { SerieDetailsweb } from "../pages/SerieDetails";
import { RankinAnineList } from "./Ranking";
import { SearchSerie } from "../pages/SearchSerie";
import styles from "../estilos/Header.module.css";

export function HearderPage() {
  return (
    <>
      <header className={styles.wrapper}>
        <Link to="/">
          <h1 className={styles.title}>
            The <strong>Anime</strong> DataBase
          </h1>
        </Link>
      </header>
      <main>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/list-serie">Series</Link>
          <Link to="/top-anime-list">Mejores Series</Link>
          <Link to="/search">Buscar Serie</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/list-serie" element={<Series />} />
          <Route
            path="/serie/:serieId/:serieTitle"
            element={<SerieDetailsweb />}
          />
          <Route path="/top-anime-list" element={<RankinAnineList />} />
          <Route path="/search" element={<SearchSerie />} />
        </Routes>
      </main>
    </>
  );
}
