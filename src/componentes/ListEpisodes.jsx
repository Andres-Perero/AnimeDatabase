import React, { useEffect, useState } from "react";
import SelectPagination from "./SelectPagination";

export const ListEpisodes = ({ idSerie, pagination = {} }) => {
  const [episodes, setEpisodes] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    FetchListEpisodesSerie(e.target.value);
  };

  const FetchListEpisodesSerie = async (idPage) => {
    if (pagination.has_next_page === true) {
      const temp = await fetch(
        "https://api.jikan.moe/v4/anime/" + idSerie + "/episodes?page=" + idPage
      ).then((res) => res.json());
      setEpisodes(temp.data);
    }
  };

  useEffect(() => {
    FetchListEpisodesSerie();
  }, []);

  return (
    <SelectPagination
      HandleClick={handleClick}
      numberPages={pagination.last_visible_page}
      episodes={episodes}
    />
  );
};
