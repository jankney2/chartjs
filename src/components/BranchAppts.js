import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

const BranchAppts = props => {
  const [appts, updateAppts] = useState([]);
  const [apptsByBranch, setAppts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost/7979/appts").then(res => updateAppts(res.data));
  }, []);

  const columbAppts = appts.filter(el => {
    return +el.office_id === 1;
  });
  const slcAppts = appts.filter(el => {
    return +el.office_id === 6;
  });
//   setAppts([columbAppts, slcAppts]);
let toMap=[columbAppts, slcAppts]
  let mapper = toMap.map(el => {
console.log(el)
    return (
      <Doughnut
      key={el.office_id}
        data={{
          labels: ["pest control", "rodent", "mole barrier"],
          datasets: [
            {
              data: [
                el.filter(e => {
                  return +e.service_type === 57;
                }).length,
                el.filter(e => {
                  return +e.service_type === 71;
                }).length,
                el.filter(e => {
                  return +e.service_type === 161;
                }).length
              ], 
              backgroundColor:[
                'rgba(0,190,144,.5)', 
                'rgba(100,255,255,.5)', 
                'rgba(100,0,255,.5)', 
                'rgba(0,100,100,.5)', 
                'rgba(255,255,0,.5)', 
            ],
              hoverBackgroundColor:[
                'rgba(0,190,144,1)', 
                'rgba(100,255,255,1)', 
                'rgba(100,0,255,1)', 
                'rgba(0,100,100,1)', 
                'rgba(255,255,0,1)', 
            ],
            }
          ]
        }}
        options={{
            cutoutPercentage: 45,
            title:{
                display:true, 
                text:'Completed Services breakdown', 
                fontSize:33,
            }
          }}
      />
    );
  });

  return <div>{mapper}</div>;
};

export default BranchAppts;
