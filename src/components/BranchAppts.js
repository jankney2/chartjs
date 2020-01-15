import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

const BranchAppts = props => {
  const [appts, updateAppts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:7979/appts").then(res => {
      updateAppts(res.data);
    });

    console.log("afweoifjawoeifjawoeijfa", appts);
  }, []);

  const columbAppts = appts.filter(el => {
    return +el.office_id === 1;
  });
  const slcAppts = appts.filter(el => {
    return +el.office_id === 6;
  });

  const chicAppts = appts.filter(el => {
    return +el.office_id === 7;
  });
  let toMap = [columbAppts, slcAppts, chicAppts];
  let mapper = toMap.map((el, i) => {
    let initRodent = el.filter(e => {
      return +e.service_type === 150;
    }).length;
    let pest = el.filter(e => {
      return +e.service_type === 57;
    }).length;

    let rodent = el.filter(e => {
      return +e.service_type === 71;
    }).length;
    let mole = el.filter(e => {
      return +e.service_type === 161;
    }).length;


    return (
      <Doughnut
        key={i}
        data={{
          labels: ["pest control", "rodent", "mole barrier", "init rodent"],
          datasets: [
            {
              data: [pest, rodent, mole, initRodent],
              backgroundColor: [
                "rgba(0,190,144,.5)",
                "rgba(100,100,255,.5)",
                "rgba(100,0,255,.5)",
                "rgba(200,0,255,.5)"
              ],
              hoverBackgroundColor: [
                "rgba(0,190,144,1)",
                "rgba(100,255,255,1)",
                "rgba(100,0,255,1)",
                "rgba(200,255,255,1)"
              ]
            }
          ]
        }}
        options={{
          cutoutPercentage: 45,
          title: {
            display: true,
            text: "Completed Services breakdown By Branch",
            fontSize: 33
          }
        }}
      />
    );
  });

  return <div>{mapper}</div>;
};

export default BranchAppts;
