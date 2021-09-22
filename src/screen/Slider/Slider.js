import React from "react";
import Slider from "react-touch-drag-slider";
import Screen1 from "./subScreens/Screen1";
import Screen2 from "./subScreens/Screen2";
import Screen3 from "./subScreens/Screen3";

const SliderSwipe = () => {
  return (
    <div>
      <Slider
        onSlideComplete={(i) => {
          console.log("finished dragging, current slide is", i);
        }}
        onSlideStart={(i) => {
          console.log("started dragging on slide", i);
        }}
        activeIndex={0}
        threshHold={100}
        transition={0.5}
        scaleOnDrag={true}
      >
        <Screen1 />
        <Screen2 />
        <Screen3 />
      </Slider>
    </div>
  );
};

export default SliderSwipe;
