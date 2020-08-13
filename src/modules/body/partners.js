import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

export default function Partners(props) {
  // HOOKS
  const [animation, setAnimation] = useState({
    div1: "partnersActive1",
    div2: "partnersActive1",
    div3: "partnersActive1",
    div4: "partnersActive2",
    div5: "partnersActive2",
    div6: "partnersActive2",
    div7: "partnersActive3",
    div8: "partnersActive3",
    div9: "partnersActive3",
  });

  function Active() {
    setAnimation({
      div1: "partnersActiveAnimation1",
      div2: "partnersActiveAnimation2",
      div3: "partnersActiveAnimation3",
      div4: "partnersActiveAnimation4",
      div5: "partnersActiveAnimation5",
      div6: "partnersActiveAnimation6",
      div7: "partnersActiveAnimation7",
      div8: "partnersActiveAnimation8",
      div9: "partnersActiveAnimation9",
    });
  }
  const handleMenuEnter = () => {
    props.onHandlePartnersEnter();
  };
  const handleMenuLeave = () => {
    props.onHandlePartnersLeave();
  };
  return (
    <Grid
      className="partnersBackground1"
      onMouseEnter={() => handleMenuEnter()}
      onMouseLeave={() => handleMenuLeave()}
      id="partners"
    >
      <Grid className="partnersBackground2">
        <img
          src={require("../images/logo.svg")}
          alt="logo"
          width="200px"
          style={{
            paddingTop: "250px",
          }}
          className="logo"
        ></img>
        <Grid className="partners" onMouseEnter={() => Active()}>
          <Grid item xs={12} className="aboutHead">
            PARTNERI
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
          <Grid container className="partnersBody">
            <Grid item container xs={12} direction="row">
              <Grid
                container
                item
                xs={4}
                direction="column"
                alignItems="flex-end"
              >
                <Grid item xs={4} id={animation.div1}>
                  <div className="item">
                    <h3>Company name</h3>
                    <div className="line"></div>
                  </div>
                </Grid>
                <Grid item xs={4} id={animation.div2}>
                  <div className="item">
                    <h3>Company name</h3>
                    <div className="line"></div>
                  </div>
                </Grid>
                <Grid item xs={4} id={animation.div3}>
                  <div className="item">
                    <h3>Company name</h3>
                    <div className="line"></div>
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={4}
                direction="column"
                alignItems="center"
                id={animation.div4}
              >
                <Grid item xs={4}>
                  <div className="item">
                    <h3>Company name</h3>
                    <div className="line"></div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="item">
                    <h3>Company name</h3>
                    <div className="line"></div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="item">
                    <h3>Company name</h3>
                    <div className="line"></div>
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={4}
                direction="column"
                alignItems="flex-start"
              >
                <Grid item xs={4} id={animation.div7}>
                  <div className="item">
                    <h3>Company name</h3>
                    <div className="line"></div>
                  </div>
                </Grid>
                <Grid item xs={4} id={animation.div8}>
                  <div className="item">
                    <h3>Company name</h3>
                    <div className="line"></div>
                  </div>
                </Grid>
                <Grid item xs={4} id={animation.div9}>
                  <div className="item">
                    <h3>Company name</h3>
                    <div className="line"></div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className="ornament">
            <img
              src={require("../images/ornament.svg")}
              width="120px"
              alt="ornament"
              style={{ paddingBottom: "100px" }}
            ></img>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
