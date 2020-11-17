import React from 'react';
import './ClassItems.css';


const ClassItems = ({service}) => {
    // console.log(service.img);
    return (
        <div className="col-md-4 class-item-card">
            <img src={`${service.img}`} alt=""/>
            <h4>{service.title} &#8594;</h4>
        </div>
    );
};

export default ClassItems;