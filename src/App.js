import Liste from "./comp2/Liste";
import Tablo from "./comp2/Tablo";
import Aders from "./comp1/Aders";
import Bders from "./comp1/Bders";
import Cders from "./comp1/Cders";
import students from "./assets/data/Students.json"
import Kisi from "./comp3/Kisi";
import "./assets/css/style.css"
import Kurs from "./comp3/Kurs";
import Cards from "./comp4/Cards";
import Akis from "./comp4/Akis";
import Bilgiler from "./comp5/Bilgiler";
import Bitis from "./comp6/Bitis";






function App() {
  return (
  <div className="App"> 

 {/*<Aders/>
   <Bders/>
   <Cders/> 
   
   <Tablo/>
   <Liste/>

   <Kurs/>
        <div className="card">    
        {students.map((student, index) => {
          const { isim, img, yas, kurs } = student;
          return <Kisi key={index} ad={isim} img={img} yas={yas} kurs={kurs} />;
        })}
        </div>

       <div className="yanyana">    
        {students.map((student, index) => {
          const { isim, img, yas, kurs } = student;
          return <Cards key={index} ad={isim} img={img} yas={yas} kurs={kurs} />;
        })}
        </div>
       <Akis/>
      <Bilgiler/>*/}
      
        <Bitis/>




      </div>

      );
};

export default App;