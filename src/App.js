import React from "react";
import { Grid } from "@material-ui/core";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyles from "./styles";

export const App = () => {
  const { grid, mobile, main, last, desktop } = useStyles();
  return (
    <div>
      <Grid
        className={grid}
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} className={mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
};
