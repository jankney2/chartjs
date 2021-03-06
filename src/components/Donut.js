import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

// get all subscriptions for December

const Donut = () => {
  const [subs, updateSubs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:7979/subs").then(res => {
      updateSubs(res.data);
    });
  }, []);

  const pestCount=subs.filter(el=>{return +el.service_id===57}).length
  const rodentCount=subs.filter(el=>{return +el.service_id===71}).length
  const fleaTick=subs.filter(el=>{return +el.service_id===106}).length
  const moleBarr=subs.filter(el=>{return +el.service_id===161}).length

  return (
    <div>

      <Doughnut
        data={{
          labels: ["Pest Control", "Rodent", "Flea/Tick reduction", "Mole Barrier",],
          datasets: [
            {
              data: [pestCount, rodentCount, fleaTick, moleBarr,], 
                backgroundColor:[
                    'rgba(100,100,100,.5)', 
                    'rgba(100,255,100,.5)', 
                    'rgba(100,100,255,.5)', 
                    'rgba(0,100,100,.5)', 
                    'rgba(255,100,0,.5)', 
                ],
                hoverBackgroundColor:[
                    'rgba(100,100,100,1)', 
                    'rgba(100,255,100,1)', 
                    'rgba(100,100,255,1)', 
                    'rgba(0,100,100,1)', 
                    'rgba(255,100,0,1)', 
                ]
            }
          ]
        }}
        options={{
          cutoutPercentage: 45,
          title:{
              display:true, 
              text:'December Subscription breakdown', 
              fontSize:33,
          }
        }}
      />
    </div>
  );
};

export default Donut;
