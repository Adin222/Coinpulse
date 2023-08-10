import React from "react";
import { useState, useEffect } from "react";
import "chart.js/auto";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { SingleChart } from "./api";

export const CoinInfo = ({ id }) => {
  const [chart, setChart] = useState({});
  const fetchChart = async (id) => {
    try {
      const { data } = await axios.get(SingleChart(id));
      setChart(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };
  useEffect(() => {
    fetchChart(id);
  }, [id]);
  const labels = chart?.prices
    ? chart.prices.map((price, index) => `${index + 1}`)
    : [];

  const datas = {
    labels: labels,
    datasets: [
      {
        label: "Cryptocurrency data",
        backgroundColor: "#FFC719",
        borderColor: "#FFC719",
        data: chart?.prices || [],
      },
    ],
  };
  return (
    <div>
      <Line data={datas} />
    </div>
  );
};
