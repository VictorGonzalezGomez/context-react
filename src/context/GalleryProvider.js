import {createContext, useEffect, useState} from "react"

export const GalleryContext = createContext({})

export default function GalleryProvider(props) {

  const [gallery, setGallery] = useState([]);

  const dataGallery = async () => {
    const endpoint = "./fotos.json";
    const resp = await fetch(endpoint);
    const data = await resp.json();

    setGallery(data.photos);
  };

  useEffect(() => {
    dataGallery();
  }, []);

  return (
    <>
      <GalleryContext.Provider value={gallery}>
        {props.children}
      </GalleryContext.Provider>
    </>
  )
}