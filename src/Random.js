import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./index.css";

import image1 from "./Images/Random9.jpeg";
import image2 from "./Images/Random10.jpeg";
import image3 from "./Images/Random11.jpeg";
import image4 from "./Images/Random8.jpeg";
import image5 from "./Images/Swim1.jpeg";
import image6 from "./Images/Swim2.jpeg";
import image7 from "./Images/Swim3.jpeg";
import image8 from "./Images/Swim4.jpeg";
import image9 from "./Images/Swim6.jpeg";
import image10 from "./Images/Swim7.jpeg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

const zoomOutProperties = {
  duration: 2000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  scale: 1.5,
  arrows: true
};

const Slideshow = () => {

  return (
    <div className="slide-show">
      <Zoom {...zoomOutProperties} className="slide-container">
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} alt="SlideShow" id="slide"/>
        ))}
      </Zoom>
    </div>
  );
};

function Random() {
  return (
    <div className="App">
      <Slideshow />
    </div>
  );
}

export default Random;
