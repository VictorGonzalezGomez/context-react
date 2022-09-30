import MyProvider from "../context/Context";
import {useContext} from "react";

export default function Favoritos() {
  const photo = useContext(MyProvider)
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {photo.filter(photo => photo.liked === true).map((e, i) => (

          <img
            key={i}
            src={e.src.tiny}
            alt={e.alt}

          />

        ))}
      </div>
    </div>
  );
}
