import { useState } from "react";

export default function Main() {
  const [rows, setRows] = useState(16); //pocetni je 10, mapraviti da se mijenja kada korisnik unese broj
  const [columns, setColumns] = useState(16); // pocetni je 10, mapraviti da se mijenja kada korisnik unese broj

  const gridItems = [];
  for (let i = 0; i < rows * columns; i++) {
    gridItems.push(
      <div key={i} className="grid-item">
        {i + 1}
      </div>
    );
  }

  return <div className="MainContainer">{gridItems}</div>;
}
