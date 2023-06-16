import React from "react";

export const CarouselItem = (item ) => {
  return (
    <div className="carousel-item" >
            {item.feedbach}

      <div></div>
      <div className="c-header-d">
        <div className="feedback">
            {item.feedbach}
        </div>
        <div className="blog">
            <p>{item.blog}</p>
        </div>
        <div className="design-system">
            {item.daily}
        </div>
      </div>
      <div className="carousel-item-text">{item.description}</div>
      {/* <img className="carousel-img" src={item.icon.default} /> */}
      
    </div>
  );
};