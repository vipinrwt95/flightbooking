
import React,{useRef, useState,useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux';
import {updateSeats} from '../store/Flights';
import {addbooking,delbooking} from '../store/Booking';
function generateRandomDate() {
    const currentDate = new Date();
    const startDate = new Date();
    startDate.setDate(currentDate.getDate() - 2); // Subtract two days from the current date
  
    const startTime = startDate.getTime();
    const endTime = currentDate.getTime();
    const randomTime = startTime + Math.random() * (endTime - startTime);
    const randomDate = new Date(randomTime);
  
    const year = randomDate.getFullYear();
    const month = randomDate.getMonth() + 1; // Months are zero-based, so add 1
    const day = randomDate.getDate();
  
    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  }
  


const BookingPop=({flight,show})=>{
   const dispatch=useDispatch();
   const ticket = useRef(null);
   const[selectedIndex,setSelectedIndex]=useState([]);
   
   const [numtixx,setnumtixx]=useState(0);
   //console.log(flight);
   const [seats,setSeats]=useState(useSelector(state => state.flight.flights[flight.id-1].seats));
   //console.log(seats);
   //console.log(flight)
    const email=useSelector(state=>state.auth.email);
  const ticketConfirmHandler=(e)=>{
    e.preventDefault();
    const {id}=flight;
    
    let newseats=[...seats];
    for(let i=0;i<seats.length;i++)
    {   
        if(selectedIndex.includes(i))
        { 
           newseats[i]=parseInt(1);   
        } 
    }
    console.log(id,newseats)
    const date=generateRandomDate()
    console.log(date);
    dispatch(updateSeats({id,newseats}));
     dispatch(addbooking({date,id,email,tickets:numtixx}));
     //dispatch(delbooking);
    alert('Tickets booked , Happy flying');
    show();

   }
  const ticketCancelHandler=(e)=>{
    e.preventDefault();
    show();

  }
  
const seatClickHandler = (index) => {
         //console.log(index);
        const isSelected = selectedIndex.includes(index);
      
        if (isSelected) {
 setSelectedIndex(selectedIndex.filter((seatIndex) => seatIndex !== index));
        } else {
          setSelectedIndex([...selectedIndex, index]);
        }
        const num=selectedIndex.length+1;
        setnumtixx(num);
      };

const renderSeats = () => {
    const seatarr = [];
    for (let i = 0; i < seats.length; i++) {
      let isAvailable = seats[i] === 0;
      let isSelected = selectedIndex.includes(i);
  
      seatarr.push(
        <div
          key={i}
          className={`flight-seat ${isAvailable ? 'available' : 'unavailable'} ${isSelected ? 'flight-seat-selected' : ''}`}
          onClick={seatClickHandler.bind(null,i)}
        >
          {i + 1}
        </div>
      );
    }
    return seatarr;
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ticket.current && !ticket.current.contains(event.target)) {
        show();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);
  return (
    <>
   <div className="booking-popup" ref={ticket}>
  <form onSubmit={ticketConfirmHandler}>
   <div className="flight-seats-container">{renderSeats()}</div>
    <button type="submit">Confirm</button>
    <button onClick={ticketCancelHandler}>Cancel</button>
  </form>
</div>
</>

  )

}

export default BookingPop