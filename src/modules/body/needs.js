import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

export default function Needs(props) {
  // HOOKS
  const [animation, setAnimation] = useState({
    div1: "needsActive",
    div2: "needsActive",
    div3: "needsActive",
    div4: "needsActive",
  });

  function Active() {
    setAnimation({
      div1: "needsActiveAnimation1",
      div2: "needsActiveAnimation2",
      div3: "needsActiveAnimation3",
      div4: "needsActiveAnimation4",
    });
  }
  const handleMenuEnter = () => {
    props.onHandleNeedsEnter();
    Active();
  };
  const handleMenuLeave = () => {
    props.onHandleNeedsLeave();
  };
  const kinds = () => {
    window.scroll({
      top: 12500,
      behavior: "smooth",
    });
  };
  const home = () => {
    window.scroll({
      top: 12900,
      behavior: "smooth",
    });
  };
  const savings = () => {
    window.scroll({
      top: 13450,
      behavior: "smooth",
    });
  };
  const pension = () => {
    window.scroll({
      top: 13900,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="needsBackground1"
      onMouseEnter={() => handleMenuEnter()}
      onMouseLeave={() => handleMenuLeave()}
      id="needs"
    >
      <div className="needsBackground2">
        <img
          src={require("../images/logo.svg")}
          alt="logo"
          width="200px"
          style={{
            paddingTop: "250px",
          }}
          className="logo"
        ></img>
        <Grid
          container
          className="needs"
          onMouseEnter={() => Active()}
          justify="center"
        >
          <Grid container item xs={7} alignItems="center" justify="center">
            <Grid
              item
              xs={12}
              className="aboutHead"
              style={{ paddingTop: "600px" }}
            >
              POTREBY ĽUDÍ
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
                style={{ paddingBottom: "70px" }}
                onClick={() => kinds()}
              >
                <Grid
                  item
                  className="itemText"
                  style={{ color: "rgb(129, 113, 18)" }}
                >
                  DETI
                </Grid>
                <Grid
                  item
                  className="itemTopLine"
                  style={{ background: "rgb(129, 113, 18)" }}
                ></Grid>
                <img
                  src={require("../assets/menu/menu-need-1.jpg")}
                  alt="menuAbout1"
                  width="200px"
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
                style={{ paddingBottom: "70px" }}
                onClick={() => home()}
              >
                <Grid
                  item
                  className="itemText"
                  style={{ color: "rgb(175, 74, 43)" }}
                >
                  BÝVANIE
                </Grid>
                <Grid
                  item
                  className="itemTopLine"
                  style={{ background: "rgb(175, 74, 43)" }}
                ></Grid>
                <img
                  src={require("../assets/menu/menu-need-2.jpg")}
                  alt="menuAbout1"
                  width="200px"
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
                style={{ paddingBottom: "70px" }}
                onClick={() => savings()}
              >
                <Grid
                  item
                  className="itemText"
                  style={{ color: "rgb(77, 75, 74)" }}
                >
                  SPORENIE
                </Grid>
                <Grid
                  item
                  className="itemTopLine"
                  style={{ background: "rgb(77, 75, 74)" }}
                ></Grid>
                <img
                  src={require("../assets/menu/menu-need-3.jpg")}
                  alt="menuAbout1"
                  width="200px"
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
                id={animation.div4}
                style={{ paddingBottom: "70px" }}
                onClick={() => pension()}
              >
                <Grid item className="itemText" style={{ color: "black" }}>
                  DOCHODÔK
                </Grid>
                <Grid
                  item
                  className="itemTopLine"
                  style={{ background: "black" }}
                ></Grid>
                <img
                  src={require("../assets/menu/menu-need-4.jpg")}
                  alt="menuAbout1"
                  width="200px"
                ></img>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} className="needsBody">
            <Grid item xs={12}>
              <i>
                "As opposed to using 'Content here, content here', making it
                look like readable English. Many desktop publishing packages and
                web page editors now use Lorem Ipsum as their default model
                text, and a search for 'lorem ipsum' will uncover many web sites
                still in their infancy. Various versions have evolved over the
                years, sometimes by accident, sometimes on purpose (injected
                humour and the like). It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum."
              </i>
              <h4>DETI</h4>
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
                release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum. It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>
              <h4 style={{ color: "rgb(175, 74, 43)" }}>BÝVANIE</h4>
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
                English. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look
                like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still
                in their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour and
                the like). It was popularised in the 1960s with the release of
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
                release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum. It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>
              <h4 style={{ color: "rgb(77, 75, 74)" }}>SPORENIE</h4>
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
                English. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look
                like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still
                in their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose (injected humour and
                the like). It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look
                like readable English.
              </p>
              <h4>DOCHODÔK</h4>
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
                like readable English.
              </p>
              <Grid>
                <img
                  src={require("../images/ornament.svg")}
                  width="120px"
                  alt="ornament"
                  style={{ paddingTop: "70px", paddingBottom: "70px" }}
                ></img>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
