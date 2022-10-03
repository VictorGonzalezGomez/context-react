import "./styles.css";

import GalleryProvider from "./context/GalleryProvider";
import ChildrenGalleryPage from "./components/ChildrenGalleryPage";

export default function App() {

  return (
    <div className="App">
      <GalleryProvider>
        <ChildrenGalleryPage/>
      </GalleryProvider>
    </div>
  );
}
