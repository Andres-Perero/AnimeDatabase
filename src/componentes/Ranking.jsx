import React, { useState, useEffect } from "react";
import Series from "./Series";
import { Spinner } from "./SpinnerLoader";
//Mejores Series

//Api methods {search, top}
//https://jikan.docs.apiary.io/#introduction/v4-rest-api-release
function RankinAnineList() {
  const [topAnime, SetTopAnime] = useState([]);
  const [loading, SetLoading] = useState(false);

  const GetTopAnime = async () => {
    const temp = await fetch("https://api.jikan.moe/v4/top/anime").then((res) =>
      res.json()
    );
    SetLoading(true);
    SetTopAnime(temp.data);
  };

  useEffect(() => {
    GetTopAnime();
  }, []);
  return (
    <div>{loading ? <Series SeriesList={topAnime}></Series> : <Spinner />}</div>
  );
}

export default RankinAnineList;
