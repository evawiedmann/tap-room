import React from "react";
import Keg from "./Keg";

const kegList = [
 {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
 }
];

function KegList(){
  return (
    <div>
      <hr/>
      {marketScheduleList.map((marketSchedule, index) =>
        <Keg name={marketSchedule.name}
        brand={marketSchedule.brand}
        price={marketSchedule.price}
        alcoholContent={marketSchedule.alcoholContent}
        key={index}/>
      )}
    </div>
  );
}

export default KegList;
