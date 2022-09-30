import {useContext, useEffect, useState} from "react";
import MyProvider from "../context/Context";


export default function Heart() {

  const photo = useContext(MyProvider)


  return (
    <>

      {photo.map((e, i) => (
        <div key={i} className="customCardContainer">

          <svg width="40px" viewBox="0 0 24 24" className="heart" onClick={() => handleFav(e.liked, i)}>
            <path
              fill={photo[i].liked === true ? "red" : "white"}
              d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
            />
          </svg>
          <div className="textPhoto"><p><strong>{e.alt}</strong></p></div>

          <img
            src={e.src.tiny}
            alt={e.alt}

          />
        </div>
      ))}
    </>
  );
}
