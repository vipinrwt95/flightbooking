import react,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { logout} from '../store/Auth'
import Seatpopup from './Seatpopup';

const Flight=({id})=>{
const flights = useSelector(state => state.flight.flights);
const [show,setShow]=useState(false);
console.log(flights);
let flight=flights.filter(item=>item.id==id)
const showpop=()=>{
    setShow(prev=>!prev);
}
return (
    <>
    
<div key={flight[0].id} className="flight-card-admin" onClick={showpop}>
      <h2>{flight[0].origin} to {flight[0].destination}</h2>
<ul>
<FontAwesomeIcon icon={faPlaneDeparture} /> {flight[0].departureTime} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faPlaneArrival} />  {flight[0].arrivalTime}
</ul>
<p>Empty :{flight[0].seats.filter(seat => seat === 0).length}</p>
  </div>
  {
   show && <Seatpopup id={id} change={showpop} /> 
  }
</>
)

}

const AdminPage=()=>{
 const Navigate=useNavigate();
 const dispatch=useDispatch();
const bookings=useSelector(state=>state.booking.BookingTime);
const [showtixdetails,setshowtixdetails]=useState(false);
const [totaltix,setTotaltickets]=useState(0);
//console.log(bookings);
const [bookingstoshow,setbookingstoshow]=useState([]);
const [today,setToday]=useState(true);
const [alltime,setalltime]=useState(false);
const setTimeline=(e)=>{
   if(e.target.value =='today')
   {
    setToday(true);
    setalltime(false);
   }
   else if (e.target.value=='all')
   {
    setalltime(true);
    setToday(false);
   }
}

useEffect(() => {
    
    if (today) {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
      const day = currentDate.getDate();
      const todayinstring = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
      let bookingstoday = bookings.filter(item => item.date === todayinstring);
      let totalTickets = bookingstoday.reduce((accumulator, obj) => {
        const tickets = Number(obj.tickets); // Convert the "tickets" property to a number
        if (!isNaN(tickets)) {
          return accumulator + tickets;
        }
        return accumulator;
      }, 0);
      console.log(totalTickets);
      setTotaltickets(totalTickets);
      setbookingstoshow(bookingstoday);
    }
    if (alltime) {
     let totalTickets = bookings.reduce((accumulator, obj) => {
        const tickets = Number(obj.tickets); // Convert the "tickets" property to a number
        if (!isNaN(tickets)) {
          return accumulator + tickets;
        }
        return accumulator;
      }, 0);
      setTotaltickets(totalTickets)
      setbookingstoshow(bookings);
    }
  }, [bookings, today, alltime]);
const logOutHandler=()=>{

    dispatch(logout());
    Navigate('/')
   }
return (
    <div><h1>Bookings</h1>
    <button style={{background:'red',fontWeight:'19px',color:'white',position:'fixed',top:'5px',right:'10px'}} onClick={logOutHandler}>Log Out</button>
    <select onChange={setTimeline}>
     <option value='today' >Today</option>
     <option value='all' >All Bookings</option>  
    </select>
    {today && <div>
      { bookingstoshow.length>0 && <> <h4> Total Tickets :   {totaltix}</h4>
        {!showtixdetails && <button onClick={()=>{setshowtixdetails(prev=>!prev)}}>See Flight-Wise booking</button>}
        {showtixdetails && <button onClick={()=>{setshowtixdetails(prev=>!prev)}}>Hide Flight-Wise booking</button>}
      {
          showtixdetails &&  bookingstoshow.map((item)=><div>{item.tickets} by {item.email}</div>)  
        } </>}
        {bookingstoshow.length==0 && <h6>No tickets booked</h6>}
    </div> }
    {alltime && <div>
        <h4> Total Tickets :   {totaltix}</h4>
        {!showtixdetails && <button onClick={()=>{setshowtixdetails(prev=>!prev)}}>See Flight-Wise booking</button>}
        {showtixdetails && <button onClick={()=>{setshowtixdetails(prev=>!prev)}}>Hide Flight-Wise booking</button>}
        {
           showtixdetails &&  bookingstoshow.map((item)=><div>{item.tickets}TICKETS BOOKED&nbsp;&nbsp;&nbsp;&nbsp; BY  &nbsp;&nbsp;&nbsp;{item.email}<Flight id={item.id}/></div>)  
        }
        </div>}
    </div>
      
)

}
export default AdminPage;