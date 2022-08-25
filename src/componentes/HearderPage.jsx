import { Link, Route, Routes } from "react-router-dom";
import styles from "../estilos/App.module.css";
import { Series } from "../pages/Series";
import React, { useState } from "react";
import { Header, Nav, LinkNav, SvgBox } from "../estilos/StylesNav";
import Slider from "./Carrusel";
import { SerieDetailsweb } from "../pages/SerieDetails";
import RankinAnineList from "./Ranking";
import { SearchSerie } from "../pages/SearchSerie";

export function HearderPage() {
  return (
    <>
      <main>
        <Header>
          <Link class="wrapper" to="/">
            <h1 class="title">
              The <strong>Anime</strong> DataBase
            </h1>
          </Link>
        </Header>
        <Nav>
          <LinkNav>
            <Link className={styles.linksNav} to="/">
              Home
            </Link>
          </LinkNav>
          <LinkNav>
            <Link className={styles.linksNav} to="/list-serie">
              Series
            </Link>
          </LinkNav>
          <LinkNav>
            <Link className={styles.linksNav} to="/top-anime-list">
              Mejores Series
            </Link>
          </LinkNav>
          <LinkNav>
            <Link className={styles.linksNav} to="/search">
              Buscar Serie
            </Link>
          </LinkNav>
        </Nav>

        <Routes>
          {/* <Route path="/" element={<SliderMOD />} /> */}
          <Route path="/" element={<Slider />} />
          <Route path="/list-serie" element={<Series />} />
          <Route path="/list-serie/:nameSerie" element={<SerieDetailsweb />} />
          <Route path="/top-anime-list" element={<RankinAnineList />} />
          <Route path="/search" element={<SearchSerie />} />
        </Routes>
      </main>
    </>
  );
}
