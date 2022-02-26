import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import useTransactions from "../../useTransactions";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

import useStyles from "./styles";

const Details = ({ title }) => {
  const { income, expense } = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <div className={title === "Income" ? income : expense}>
      <Card>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">{total}</Typography>
          <Doughnut data={chartData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
