import React from "react";
import "../../styles/style.css";
import Grid from "@material-ui/core/Grid";

export default function Header() {
  return (
    <Grid container style={{ fontSize: 38 }}>
      <Grid
        container
        item
        xs={12}
        justify="center"
        style={{ paddingTop: "450px", paddingBottom: "500px" }}
      >
        SINE METU
      </Grid>
      <Grid container item xs={12} justify="center">
        <img src={require("../images/logo.svg")} width="200px" alt="Logo"></img>
      </Grid>
    </Grid>
  );
}
