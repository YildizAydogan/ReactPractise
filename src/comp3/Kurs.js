import React from "react";
import students from "../assets/data/Students.json";

const Kurs = () => {
  return (
    <div>
      <h1>KURSIYERLER</h1>

      <h3>Yasi 25`den buyuk olanlar ;</h3>

      {students
        .filter((student) => student.yas > 25)
        .map((student, index) => (
          <ul key={index}>
            <li>{student.isim}</li>
          </ul>
        ))}
    </div>
  );
};

export default Kurs;