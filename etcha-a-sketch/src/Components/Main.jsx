import { useState } from "react";

export default function Main() {
  const [rows, setRows] = useState(16);
  const [columns, setColumns] = useState(16);

  const gridItems = [];
  for (let i = 0; i < rows * columns; i++) {
    gridItems.push(
      <div key={i} className="grid-item">
        Stavka {i + 1}
      </div>
    );
  }

  return <div className="MainContainer">{gridItems}</div>;
}
