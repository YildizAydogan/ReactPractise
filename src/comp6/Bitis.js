import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Tours from './Tours';




const url="https://course-api.com/react-tours-project";


const Bitis = () => {
const [tours, setTours] = useState([]);


useEffect(() =>{
      dataTours();
 }, [])

 const dataTours = () => {   
    axios(url).then((resp) =>{
        setTours(resp.data);
    })   
 }
    
   if (tours.length===0) {
   return ( 
       <div>
       <h2>No Tours!</h2>
       <button onClick={ () => dataTours() }>Refresh</button>
       </div>
       )
   }

   const removeTour = (id) => {
      const newTours =tours.filter(tour => tour.id !== id);
      setTours(newTours);
   }




  return (

    <div> <Tours tours={tours} removeTour={removeTour}/> </div>

  )
}

export default Bitis