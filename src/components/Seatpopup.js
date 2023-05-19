
import React,{useRef, useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux';


const Seatpopup=({id,change})=>{
   
  const seats=useState(useSelector(state => state.flight.flights[id-1].seats));
  console.log(seats);
  const renderSeats = () => {
    const seatarr = [];
    for (let i = 0; i < seats[0].length; i++) {
      let isAvailable = seats[0][i] === 0;
      console.log(isAvailable);
  
      seatarr.push(
        <div
          key={i}
          className={`flight-seat ${isAvailable ? 'available' : 'unavailable'}`}
          
        >
      {i + 1}
        </div>
      );
    }
    return seatarr;
  };

  return (
    <>
   <div className="booking-popup">
    <button onClick={()=>{
     change();
    }}>X</button>
   <div >
       <h2 style={{color:'green'}}><b>EMPTY</b></h2><h2 style={{color:'red'}}><b>BOOKED</b></h2> 
      </div>
   <div className="flight-seats-container">{renderSeats()}</div>
</div>
</>

  )

}

export default Seatpopup;