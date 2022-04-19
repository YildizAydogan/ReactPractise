import React from 'react'
import students from '../assets/data/Students.json'


const Tablo = () => {

const still1= {
color: "white",
fontWeight: "bolder",
backgroundColor: "pink",


};


const still2= {
    color: "yellow",
    fontWeight: "bolder",
    backgroundColor: "gray",
    
    
    };


  return (
<>
    <div>
<h1 style={{color: "purple"}}>Kursiyerler</h1>
<table>
<thead>
<tr style={still1}>
    <th>Isim</th>
    <th>Yas</th>
    <th>Aldigi kurs</th>
</tr>
</thead>

<tbody>
    {students.map((student, index) =>{
return (
    <tr style={index %2==0 ? still1 : still2}
    /*  style={{...still1, color: "blue", fontSize:"2rem"}}  */
     key={index}>
       
      <td>{student.isim}</td>
      <td>{student.yas}</td>
      <td>{student.kurs}</td>
    </tr>
  );
    
    
  }  )}
</tbody>
</table>
    </div>
</>  )
}

export default Tablo