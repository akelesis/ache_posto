import React from "react";
import { ResponsiveBar } from "@nivo/bar";

import "./GasStationDashboards.css";

const GasStationDashboards = (props) => {
  const getScore = () => {
    return 4.5;
  };

  const getVisits = () => {
    return 30;
  };

  const data = [
    {
      date: "2020-05-25",
      visita: 32,
      visitColor: "hsl(147, 70%, 50%)",
    },
    {
      date: "2020-05-26",
      visita: 58,
      visitColor: "hsl(147, 70%, 50%)",
    },
    {
      date: "2020-05-27",
      visita: 44,
      visitColor: "hsl(147, 70%, 50%)",
      "visita Promoção": 35,
      visitaPromoColor: "hsl(52,70%, 50%)",
    },
    {
      date: "2020-05-28",
      visita: 25,
      visitColor: "hsl(147, 70%, 50%)",
    },
    {
      date: "2020-05-29",
      visita: 60,
      visitColor: "hsl(147, 70%, 50%)",
    },
    {
      date: "2020-05-30",
      visita: 52,
      visitColor: "hsl(147, 70%, 50%)",
    },
    {
      date: "2020-05-31",
      visita: 68,
      visitColor: "hsl(147, 70%, 50%)",
    },
  ];

  return (
    <div className="gas-station-dashboards">
      <div className="visit-statistics">
        <h1>Contador de Visitas do dia</h1>
        <hr />
        <div className="visit-statistics-container">
          <ResponsiveBar
            data={data}
            keys={["visita", "visita Promoção"]}
            indexBy="date"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "#38bcb2",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            colors={["#38bcb2", "#88bcff"]}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "dias",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "visitas",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
          />
        </div>
      </div>
      <div className="dashboard-cards-container">
        <div className="general-evaluation">
          <h1>Pontuação Geral do Posto</h1>
          <hr />
          <div className="score-case">
            <h1>{!isNaN(getScore()) ? getScore() : "??"} / 5.0</h1>
            {getScore() > 4.4 ? (
              <span className="score-status status-good">
                Status: Excelente
              </span>
            ) : getScore() > 3.9 ? (
              <span className="score-status status-upper-avg">Status: Bom</span>
            ) : getScore() > 2.9 ? (
              <span className="score-status status-lower-avg">
                Status: Mediano
              </span>
            ) : getScore < 3.0 ? (
              <span className="score-status status-bad">Status: Ruim</span>
            ) : (
              <span className="score-status status-bad">
                Não existem dados suficientes
              </span>
            )}
          </div>
        </div>
        <div className="customers-counter">
          <h1>Contador de Visitas do dia</h1>
          <hr />
          <div className="score-case">
            <h1>{getVisits()}</h1>
          </div>
          <div className="button-promo-dashboard">
            Potencialize suas visitas: Cadastre uma promoção!
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasStationDashboards;
