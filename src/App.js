import { ImageGallery } from "react-image-grid-gallery";
import "./App.css"

let imagesArray = [];

let i;
for(i = 0; i < 58; ++i){
  imagesArray.push({
    alt: "Image1's alt text",
    src: `./v1-images/${i}.png`,
  })
}

const App = () => {
  return (
    <div>
      <h1 className="title">HAPPY ANNIVERSARY!</h1>
      <p className="text">One year with the love of my life. </p>
        <p className="text">It went by so fast, but I know it's because I enjoyed every second of it with you.</p>
        <p className="text">You have given me so much happiness and joy.</p>
        <p className="text">I loved meeting your family, loved ones, and see where the woman of my dreams was brought up</p>
        <p className="text">I am so glad to have such a loving companion.</p>
        <p className="text">I love you Laryssa.</p>
        <p className="text">Happy anniversary.</p>
      <ImageGallery imagesInfoArray={imagesArray}/>
    </div>
  );
};

export default App;