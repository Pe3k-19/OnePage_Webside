import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

export default function Transform(props) {
  // HOOKS
  const [animation, setAnimation] = useState({
    div1: "active",
    div2: "active",
    div3: "active",
  });

  function Active() {
    setAnimation({
      div1: "activeAnimation1",
      div2: "activeAnimation2",
      div3: "activeAnimation3",
    });
  }
  const handleMenuEnter = () => {
    props.onHandleTransformEnter();
  };
  const handleMenuLeave = () => {
    props.onHandleTransformLeave();
  };
  return (
    <Grid
      container
      className="transformBackground1"
      onMouseEnter={() => handleMenuEnter()}
      onMouseLeave={() => handleMenuLeave()}
      id="transform"
    >
      <Grid container className="transformBackground2">
        <img
          src={require("../images/logo.svg")}
          alt="logo"
          width="200px"
          style={{
            paddingTop: "250px",
          }}
          className="logo"
        ></img>
        <Grid container className="offer" onMouseEnter={() => Active()}>
          <Grid item xs={12} className="aboutHead">
            ZMEŇ SVOJ ŽIVOT
          </Grid>
          <Grid
            container
            item
            xs
            alignItems="center"
            direction="column"
            justify="center"
            style={{ paddingBottom: "50px" }}
          >
            L E O N I D E S
            <img
              src={require("../images/ornament.svg")}
              width="120px"
              alt="ornament"
            ></img>
          </Grid>
          <Grid container justify="center">
            <Grid
              container
              className="aboutItem"
              justify="center"
              direction="column"
              alignItems="center"
              item
              xs={2}
              id={animation.div1}
              style={{ paddingBottom: "75px", paddingTop: "25px" }}
            >
              <img
                src={require("../assets/menu/menu-need-2.jpg")}
                alt="menuAbout1"
                width="150px"
                style={{ borderRadius: "75px" }}
              ></img>
            </Grid>
            <Grid
              container
              className="aboutItem"
              justify="center"
              direction="column"
              alignItems="center"
              item
              xs={2}
              id={animation.div2}
              style={{ paddingBottom: "50px" }}
            >
              <img
                src={require("../assets/menu/menu-need-1.jpg")}
                alt="menuAbout1"
                width="200px"
                style={{ borderRadius: "100px" }}
              ></img>
            </Grid>
            <Grid
              container
              className="aboutItem"
              justify="center"
              direction="column"
              alignItems="center"
              item
              xs={2}
              id={animation.div3}
              style={{ paddingBottom: "75px", paddingTop: "25px" }}
            >
              <img
                src={require("../assets/menu/menu-need-3.jpg")}
                alt="menuAbout1"
                width="150px"
                style={{ borderRadius: "75px" }}
              ></img>
            </Grid>
          </Grid>
          <Grid container className="aboutBody" justify="center">
            <Grid item xs={4}>
              <h4 style={{ color: "rgb(77, 75, 74)" }}>
                TRANSFORM YOUR LIFE !
              </h4>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum. It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes
                by accident, sometimes on purpose (injected humour and the
                like). It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look
                like readable English. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages.
              </p>
              <h2 style={{ color: "rgb(77, 75, 74)" }}>Kariéra</h2>
              <i>Vyvažená a motivujúca!</i>
              <br></br>
              <br></br>
              <h2 style={{ color: "rgb(77, 75, 74)" }}>Sociálny program</h2>
              <i>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, making it look like readable
                English.
              </i>
              <br></br>
              <br></br>
              <h2 style={{ color: "rgb(77, 75, 74)" }}>Auto koncept</h2>
              <i>Luxusné autá.</i>
              <br></br>
              <br></br>
              <h2 style={{ color: "rgb(77, 75, 74)" }}>Kariéra</h2>
              <i>Vyvažená a motivujúca!</i>
              <br></br>
              <br></br>
              <h2 style={{ color: "rgb(77, 75, 74)" }}>Sociálny program</h2>
              <i>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal making it look like.
              </i>
              <br></br>
              <br></br>
              <h2 style={{ color: "rgb(77, 75, 74)" }}>Auto koncept</h2>
              <i>Luxusné autá.</i>
              <Grid>
                <img
                  src={require("../images/ornament.svg")}
                  width="120px"
                  alt="ornament"
                  style={{ paddingTop: "70px", paddingBottom: "100px" }}
                ></img>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
