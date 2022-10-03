import {GalleryContext} from "../context/GalleryProvider";
import {useContext} from "react";
export default function Favoritos() {
  const gallery = useContext(GalleryContext)
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {gallery.filter(gallery => gallery.liked === true).map((e, i) => (

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
