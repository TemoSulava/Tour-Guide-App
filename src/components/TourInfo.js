import React from "react";

const TourInfo = ({ info, setCityInfo, cityInfo }) => {

    const { image, title, price, description, id } = info;
    
    
 const removeTour = (id) => {
   const newInfo = cityInfo.filter(inf => inf.id !== id)
   setCityInfo(newInfo)
   
 }
    
  return <article className="single-tour">
      <img src={image} alt="Tour object" />
      <footer>
          <div className='tour-info'>
              <h4>{title}</h4>
              <h4 className='tour-price'>{price}$</h4>
          </div>
          <p>{description}</p>
          <button className='delete-btn' onClick={() =>removeTour(id)}>Not Interested</button>
      </footer>
  </article>;
};

export default TourInfo;
