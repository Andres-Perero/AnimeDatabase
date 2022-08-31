import { useEffect, useState } from "react";
import {FormSearchSerie} from "./FormSearchSerie";

//Api methods {search, top}
//https://jikan.docs.apiary.io/#introduction/v4-rest-api-release

export const SearchSerie = () => {
  const [animeList, SetAnimeList] = useState([]);
  const [search, SetSearch] = useState("");

  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch("https://api.jikan.moe/v4/anime?q=" + query).then(
      (res) => res.json()
    );
    SetAnimeList(temp.data);
    console.log(temp.data)
  };
  
  useEffect(() => {
    FetchAnime();
  }, []);

  return (
      <FormSearchSerie
        HandleSearch={HandleSearch}
        search={search}
        SetSearch={SetSearch}
        SetAnimeList={SetAnimeList}
        animeList={animeList}
      />
  );
}
