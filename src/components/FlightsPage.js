import React, { useEffect, useState ,useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import BookingPop from './BookingPop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { logout} from '../store/Auth'
import {useNavigate} from 'react-router-dom';


function FlightsPage() {
    const Navigate=useNavigate();
    const dispatch=useDispatch();
  const [flightstoshow, setFlightstoshow] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
   const origin=useRef();
   const dest=useRef();
  const flights = useSelector(state => state.flight.flights);
   const [show,setShowpop]=useState(false);
   console.log(show);
  const searchHandler = (e) => {
    e.preventDefault();
  
    const originValue = origin.current.value.toLowerCase();
    const destValue = dest.current.value.toLowerCase();
  
    if (originValue === "" && destValue === "") {
      // If both origin and destination are empty, show all flights
      setFlightstoshow(flights);
    } else {
      const updatedList = flights.filter((item) => {
        return (
          item.origin.toLowerCase() === originValue &&
          item.destination.toLowerCase() === destValue
        );
      });
  
      setFlightstoshow(updatedList);
      origin.current.value='';
      dest.current.value='';
    }
  };
  
  

  const stateResetHandler = () => {
    setFlightstoshow(flights);
  }

  const bookNowHandler = (flight) => {
    setSelectedFlight(flight);
   setShowpop(prev=>!prev)
  }

  const closePopupHandler = () => {
    setSelectedFlight(null);
  }
  useEffect(()=>{
  setFlightstoshow(flights);
  },[flights])
  const logOutHandler=()=>{

   dispatch(logout());
   Navigate('/')
  }
  return (
    <div className="flights-page">
        <button style={{background:'red',fontWeight:'19px',color:'white',position:'fixed',top:'5px',right:'10px'}} onClick={logOutHandler}>Log Out</button>
    <form onSubmit={searchHandler}>
        <input type='text' placeholder='origin' name='origin' ref={origin} required />
        <input type='text' placeholder='destination' name='destination' ref={dest} required />
        <button>Search flight</button>
      </form>

      {flightstoshow.length > 0 && (
        <>
          <h1>All Available Flights</h1>
          <div className="flights-list">
            {flightstoshow.map(flight => (
              <div key={flight.id} className="flight-card">
                <h2>{flight.origin} to {flight.destination}</h2>
      <ul>
        <FontAwesomeIcon icon={faPlaneDeparture} /> {flight.departureTime} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                <FontAwesomeIcon icon={faPlaneArrival} />  {flight.arrivalTime}
      </ul>
      <p>Available Seats: {flight.seats.filter(seat => seat === 0).length}</p>
                <button onClick={() => bookNowHandler(flight)}>Book Now</button>
              </div>
            ))}
          </div>
          <button onClick={stateResetHandler}>Show all</button>
        </>
      )}

      {flightstoshow.length === 0 && (
        <>
          <h1>No Flights Available</h1>
          <button onClick={stateResetHandler}>Show all</button>
        </>
      )}

      {selectedFlight && (
        <BookingPop
          flight={selectedFlight}
          show={closePopupHandler}
        />
      )}
    </div>
  );
}

export default FlightsPage;
