import { useLocation, useParams } from "react-router-dom";
import { CardDetail } from "../componentes/SerieDetail";

export function SerieDetailsweb() {
  const { serieId, serieTitle } = useParams();
  const moreInfo = useLocation().state;
  return <CardDetail id={serieId} title={serieTitle} infoSerie={moreInfo} />;
}
