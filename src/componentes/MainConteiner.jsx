import React from "react";
import {Series} from "./Series";
import styles from "../estilos/Search.module.css";

function MainConteiner(props) {
  return (
    <main>
      <div className={styles.Conteiner}>
        <form onSubmit={props.HandleSearch}>
          <div className={styles.row}>
            <div className="col-75">
              <input
                className={styles.Input}
                type="search"
                placeholder="Busca aqui wachin"
                required
                value={props.search}
                onChange={(e) => props.SetSearch(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <div>
        <Series SeriesList={props.animeList} />
      </div>
    </main>
  );
}

export default MainConteiner;
