import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import axios from "axios";
const Home = () => {
  const [appts, setAppts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:7979/emps").then(res => {
      console.log(res);
      setAppts(res.data);
    });
  }, []);

  let columbCount=appts.filter(el=>{
      return +el.branch===1&&+el.proutes_type===1
  })
  let chillCount=appts.filter(el=>{
      return +el.branch===14&&+el.proutes_type===1
  })
  let slcCount=appts.filter(el=>{
      return +el.branch===6 && +el.proutes_type===1
  })
  let chicCount=appts.filter(el=>{
      return +el.branch===7 && +el.proutes_type===1
  })
  let princeCount=appts.filter(el=>{
      return +el.branch===13 && +el.proutes_type===1
  })
  let philCount=appts.filter(el=>{
      return +el.branch===13 && +el.proutes_type===1
  })


  return (
    <div>
      <Bar
        data={{
          labels: [0,"columbus", "salt lake", 'cherry hill', 'chicago', 'princeton', 'philly'],
          datasets: [
            {
              label:['hello',],
              barPercentage: .5,
              barThickness: 100,
              minBarLength: 0,
              data: [0,columbCount.length,chillCount.length, slcCount.length, chicCount.length, princeCount.length, philCount.length],
              backgroundColor: [
                  "rgba(0,255,255,1)",
                  "rgba(0,255,0,1)",
                  "rgba(0,0,255,1)",
                  "rgba(0,0,122,1)",
                  "rgba(0,255,122,1)",
                  "rgba(0,122,122,1)",
                  "rgba(180,0,122,1)",
                ]
            }
          ]
        }}
      
        options={{
          title:{
            display:true, 
            text:'service pro count per branch'
          }
        }}
      />
    </div>
  );
};

export default Home;
