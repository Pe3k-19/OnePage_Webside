import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

export default function Offer(props) {
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
    props.onHandleOffersEnter();
  };
  const handleMenuLeave = () => {
    props.onHandleOffersLeave();
  };
  const info = () => {
    window.scroll({
      top: 8650,
      behavior: "smooth",
    });
  };
  const development = () => {
    window.scroll({
      top: 9650,
      behavior: "smooth",
    });
  };
  const chance = () => {
    window.scroll({
      top: 10160,
      behavior: "smooth",
    });
  };
  return (
    <Grid
      container
      className="offerBackground1"
      onMouseEnter={() => handleMenuEnter()}
      onMouseLeave={() => handleMenuLeave()}
      id="offers"
    >
      <Grid container className="offerBackground2">
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
          <Grid
            item
            xs={12}
            className="aboutHead"
            style={{ paddingTop: "500px" }}
          >
            ČO PONÚKA LEONIDES
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
              onClick={() => info()}
            >
              <Grid item className="itemText" style={{ paddingTop: "20px" }}>
                INFORMÁCIE
              </Grid>
              <Grid
                item
                className="itemTopLine"
                style={{ background: "rgb(129, 113, 18)" }}
              ></Grid>
              <img
                src={require("../assets/menu/menu-offer-1.jpg")}
                alt="menuAbout1"
                width="200px"
              ></img>
              <Grid
                className="itemBottomLine"
                style={{ background: "rgb(129, 113, 18)" }}
              ></Grid>
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
              onClick={() => development()}
            >
              <Grid className="itemText" style={{ color: "rgb(175, 74, 43)" }}>
                OSOBNÝ ROZVOJ
              </Grid>
              <Grid
                className="itemTopLine"
                style={{ background: "rgb(175, 74, 43)" }}
              ></Grid>
              <img
                src={require("../assets/menu/menu-offer-2.jpg")}
                alt="menuAbout2"
                width="200px"
              ></img>
              <Grid
                className="itemBottomLine"
                style={{ background: "rgb(175, 74, 43)" }}
              ></Grid>
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
              onClick={() => chance()}
            >
              <Grid
                className="itemText"
                style={{ color: "rgb(77, 75, 74)", paddingTop: "20px" }}
              >
                PRÍLEŽITOSŤ
              </Grid>
              <Grid
                className="itemTopLine"
                style={{ background: "rgb(77, 75, 74)" }}
              ></Grid>

              <img
                src={require("../assets/menu/menu-offer-3.jpg")}
                alt="menuAbout3"
                width="200px"
              ></img>
              <Grid
                className="itemBottomLine"
                style={{ background: "rgb(77, 75, 74)" }}
              ></Grid>
            </Grid>
          </Grid>
          <Grid container className="aboutBody" justify="center">
            <Grid item xs={5}>
              <h3>INFORMÁCIE</h3>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>{" "}
              <p>
                <i>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </i>
              </p>{" "}
              <p>
                As opposed to using 'Content here, content here', making it look
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
                like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still
                in their infancy. Various versions have evolved over the years,
                sometimes by accident, sometimes on purpose.Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
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
                like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still
                in their infancy. Various versions have evolved over the years,
                sometimes by accident.
              </p>
              <h3 style={{ color: "rgb(175, 74, 43)" }}>OSOBNÝ ROZVOJ</h3>
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
                English.
              </p>{" "}
              <i style={{ color: "rgb(175, 74, 43)" }}>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </i>{" "}
              <p>
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum. It is a long established fact that a
                reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years.
              </p>
              <h3 style={{ color: "rgb(77, 75, 74)" }}>PRÍLEŽITOSŤ</h3>
              <p>
                Transparentnost
                <br />
                Etika
                <br />
                Odvaha
                <br />
                Viera
                <br />
                Líderstvo
                <br />
                Vzdelanie
                <br />
                Tímovosť
                <br />
                Presvedčenie
              </p>
              <p>
                STABILITA A ZÁZEMIE SPOLOČNOSTI <br />
                Vznik od roku 2009. Viac ako 10 ročná prax v odbore. <br />
                Sme členom AFISP. Povolenie NBS PAG. Certifikát solventných
                <br />
                firiem.
                <br />
                Ocenený TOP externý partner za roky 2014-2015.
              </p>
              <img
                src={require("../images/ornament.svg")}
                width="120px"
                alt="ornament"
                style={{ paddingBottom: "50px" }}
              ></img>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
