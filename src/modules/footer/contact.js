import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Form from "./form";

export default function Contact(props) {
  const [animation, setAnimation] = useState({
    div1: "partnersActive2",
    div2: "partnersActive2",
  });

  function Active() {
    setAnimation({
      div1: "partnersActiveAnimation4",
      div2: "partnersActiveAnimation6",
    });
  }
  const handleMenuEnter = () => {
    props.onHandleContactEnter();
  };
  const handleMenuLeave = () => {
    props.onHandleContactLeave();
  };
  return (
    <Grid
      className="contactBackground1"
      onMouseEnter={() => handleMenuEnter()}
      onMouseLeave={() => handleMenuLeave()}
      id="contact"
    >
      <Grid className="contactBackground2">
        <img
          src={require("../images/logo.svg")}
          alt="logo"
          width="200px"
          style={{
            paddingTop: "200px",
          }}
          className="logo"
        ></img>
        <Grid className="contact" onMouseEnter={() => Active()}>
          <Grid item xs={12} className="aboutHead">
            KONTAKT
          </Grid>
          <Grid
            container
            item
            xs
            alignItems="center"
            direction="column"
            style={{ paddingBottom: "50px" }}
          >
            L E O N I D E S
            <img
              src={require("../images/ornament.svg")}
              width="120px"
              alt="ornament"
            ></img>
          </Grid>
          <Grid id={animation.div1}>
            <p>
              ADRESA <b className="text">SOME STREET CITY, OOO OO</b>
            </p>
            <p>TELEFÓN +XXX XXX XXX XXX</p>
            <p>
              MESTO <b className="text">CITY / STATE</b>
            </p>
            <Grid container alignItems="center" justify="center">
              <Grid item className="line"></Grid>
            </Grid>
          </Grid>
          <Form animation={animation.div2} />
        </Grid>
      </Grid>
    </Grid>
  );
}
