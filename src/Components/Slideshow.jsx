import { useEffect, useState, useRef } from "react";
import leftArrow from "../assets/icons/left_arrow.svg";
import rightArrow from "../assets/icons/right_arrow.svg";
export default function Slideshow(Props) {
  const { images } = Props;
  const [imgArrayIndex, setImgArrayIndex] = useState(0);
  const slideShowRef = useRef([]);
  const clearIntervals = () => {
    slideShowRef.current.forEach((id) => clearInterval(id));
    slideShowRef.current = [];
  };
  const changeIndex = ({ change }) => {
    clearIntervals();
    let changeValue = 0;
    if (change === "decrement") changeValue = -1;
    else if (change === "increment") changeValue = 1;
    let newIndex = imgArrayIndex + changeValue;
    if (newIndex < 0) newIndex = images.length + newIndex;
    else newIndex %= images.length;
    setImgArrayIndex(newIndex);
  };
  useEffect(() => {
    clearIntervals();
    slideShowRef.current.push(
      setInterval(() => {
        let nextIndex = imgArrayIndex + 1;
        nextIndex %= images.length;
        setImgArrayIndex(nextIndex);
      }, 5000)
    );
  }, [imgArrayIndex, images.length]);
  return (
    <div id="slideshow">
      <div id="image-wrapper">
        <div id="slideshow-overlay">
          <img
            className="slideshow-arrow"
            id="slideshow-arrow-left"
            src={leftArrow}
            onClick={() => changeIndex({ change: "decrement" })}
            alt=""
          />
          <img
            className="slideshow-arrow"
            id="slideshow-arrow-right"
            src={rightArrow}
            onClick={() => changeIndex({ change: "increment" })}
            alt=""
          />
          <div id="slideshow-dots">
            {images.map((_, index) => {
              return (
                <div
                  key={index}
                  className="slideshow-dot"
                  style={{
                    backgroundColor:
                      index == imgArrayIndex ? "var(--offwhite)" : "gray",
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <img className="content-photo" src={images[imgArrayIndex]}></img>
      </div>
    </div>
  );
}
