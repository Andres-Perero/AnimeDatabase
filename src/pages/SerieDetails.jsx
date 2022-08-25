import { useParams } from "react-router-dom";

export function SerieDetailsweb() {
  const {nameSerie} = useParams()
  console.log(nameSerie)
  return <div> Detalles serie!!!!! {nameSerie}</div>;
}
