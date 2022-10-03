import "../assets/css/galeria.css";
import Heart from "./Heart";
import {GalleryContext} from "../context/GalleryProvider";
import {useContext, useEffect, useState} from "react";

export default function Home() {
  const gallery = useContext(GalleryContext)

  const [dataGallery, setDataGallery] = useState([]);

  useEffect(() => {

    setDataGallery([gallery]);

  }, [gallery]);
  const handleFavourite = (liked, index) => {
    gallery[index].liked = !liked;
    setDataGallery([...dataGallery])
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {gallery.map((e, i) => (
        <div key={i} className="customCardContainer">

          <div className="heart" onClick={() => handleFavourite(e.liked, i)}>
            <Heart filled={gallery[i].liked}/>
          </div>

          <div className="textPhoto"><p><strong>{e.alt}</strong></p></div>

          <img
            src={e.src.tiny}
            alt={e.alt}
          />
        </div>
      ))}
    </div>
  );
}
