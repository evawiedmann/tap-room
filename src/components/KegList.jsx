import React from "react";
import Keg from "./Keg";

const kegList = [
 {
    name: "Eye of Newt",
    brand: "Witch's Brewery",
    price: "100",
    alcoholContent: "7"
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
