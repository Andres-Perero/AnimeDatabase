import React, { useEffect, useState } from "react";
import { ListEpisodes } from "./ListEpisodes";

export const EpisodesSerie = (props) => {
  const [pagination, setPagination] = useState();
  const GetEpisodesSerie = async () => {
    const temp = await fetch(
      "https://api.jikan.moe/v4/anime/" + props.idSerie + "/episodes"
    ).then((res) => res.json());
    setPagination(temp.pagination);
  };

  useEffect(() => {
    GetEpisodesSerie();
  }, []);

  return <ListEpisodes idSerie={props.idSerie} pagination={pagination} />;
};
