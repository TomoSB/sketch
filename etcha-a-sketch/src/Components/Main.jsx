import { useState } from "react";

export default function Glavni() {
  const [redovi, postaviRedove] = useState(10); // početna vrijednost za redove
  const [stupci, postaviStupce] = useState(10); // početna vrijednost za stupce

  const gridElementi = [];
  for (let i = 0; i < redovi * stupci; i++) {
    gridElementi.push(
      <div
        key={i}
        className="grid-element"
        style={{
          minHeight: `${100 / redovi}%`,
          minWidth: `${100 / stupci}%`,
        }}
      >
        {}
      </div>
    );
  }

  return (
    <div>
      <input
        type="number"
        value={redovi}
        onChange={(e) => postaviRedove(Number(e.target.value))}
        placeholder="Unesi broj redova"
      />
      <input
        type="number"
        value={stupci}
        onChange={(e) => postaviStupce(Number(e.target.value))}
        placeholder="Unesi broj stupaca"
      />
      <div className="GlavniKontejner">{gridElementi}</div>
    </div>
  );
}
