import React from 'react';
import { tours } from '../data';
import Title from './Title';


const Tours = () => {
  return (
    <section className="section" id="tours">
    <Title title="featuread" subTitle="tours"/>
    

    <div className="section-center featured-center">

      {tours.map((tour)=>{
        const{id, img, date,title,description,country,duration,price}=tour;
        return(

        <article className="tour-card" key={id}>
        <div className="tour-img-container">
          <img src={img} className="tour-img" alt="" />
          <p className="tour-date">{date}</p>
        </div>
        <div className="tour-info">
          <div className="tour-title">
            <h4>{title}</h4>
          </div>
          <p>
           {description}
          </p>
          <div className="tour-footer">
            <p>
              <span><i className="fas fa-map"></i></span> {country}
            </p>
            <p>{duration} days</p>
            <p>from ${price}</p>
          </div>
        </div>
      </article>

      )})}
      
    </div>
  </section>  );
}

export default Tours