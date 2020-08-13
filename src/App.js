import React, { useState } from "react";
import "./styles/style.css";
import Header from "./modules/header/header";
import About from "./modules/body/about";
import Grid from "@material-ui/core/Grid";
import Offer from "./modules/body/offer";
import Needs from "./modules/body/needs";
import Transform from "./modules/body/transform";
import Partners from "./modules/body/partners";
import GoogleMap from "./modules/footer/map";
import Contact from "./modules/footer/contact";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function App() {
  //HOOKS
  const [value, setValue] = useState(false);
  const [usingMenuLine, setUsingMenuLine] = useState({
    line1: "line",
    line2: "line",
    line3: "line",
    line4: "line",
    line5: "line",
    line6: "line",
  });
  const [usingMenuText, setUsingMenuText] = useState({
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: "",
    text6: "",
  });

  const openDrawer = () => {
    setValue(true);
  };

  const closeDrawer = () => {
    setValue(false);
  };

  const handleAboutEnter = () => {
    setUsingMenuLine({
      line1: "lineUse",
      line2: "line",
      line3: "line",
      line4: "line",
      line5: "line",
      line6: "line",
    });
    setUsingMenuText({
      text1: "text",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
    });
  };
  const handleAboutLeave = () => {
    setUsingMenuLine({
      line1: "line",
      line2: "line",
      line3: "line",
      line4: "line",
      line5: "line",
      line6: "line",
    });
    setUsingMenuText({
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
    });
  };
  const handleOffersEnter = () => {
    setUsingMenuLine({
      line1: "line",
      line2: "lineUse",
      line3: "line",
      line4: "line",
      line5: "line",
      line6: "line",
    });
    setUsingMenuText({
      text1: "",
      text2: "text",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
    });
  };
  const handleOffersLeave = () => {
    setUsingMenuLine({
      line1: "line",
      line2: "line",
      line3: "line",
      line4: "line",
      line5: "line",
      line6: "line",
    });
    setUsingMenuText({
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
    });
  };
  const handleNeedsEnter = () => {
    setUsingMenuLine({
      line1: "line",
      line2: "line",
      line3: "lineUse",
      line4: "line",
      line5: "line",
      line6: "line",
    });
    setUsingMenuText({
      text1: "",
      text2: "",
      text3: "text",
      text4: "",
      text5: "",
      text6: "",
    });
  };
  const handleNeedsLeave = () => {
    setUsingMenuLine({
      line1: "line",
      line2: "line",
      line3: "line",
      line4: "line",
      line5: "line",
      line6: "line",
    });
    setUsingMenuText({
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
    });
  };
  const handleTransformEnter = () => {
    setUsingMenuLine({
      line1: "line",
      line2: "line",
      line3: "line",
      line4: "lineUse",
      line5: "line",
      line6: "line",
    });
    setUsingMenuText({
      text1: "",
      text2: "",
      text3: "",
      text4: "text",
      text5: "",
      text6: "",
    });
  };
  const handleTransformLeave = () => {
    setUsingMenuLine({
      line1: "line",
      line2: "line",
      line3: "line",
      line4: "line",
      line5: "line",
      line6: "line",
    });
    setUsingMenuText({
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
    });
  };
  const handlePartnersEnter = () => {
    setUsingMenuLine({
      line1: "line",
      line2: "line",
      line3: "line",
      line4: "line",
      line5: "lineUse",
      line6: "line",
    });
    setUsingMenuText({
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "text",
      text6: "",
    });
  };
  const handlePartnersLeave = () => {
    setUsingMenuLine({
      line1: "line",
      line2: "line",
      line3: "line",
      line4: "line",
      line5: "line",
      line6: "line",
    });
    setUsingMenuText({
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
    });
  };
  const handleContactEnter = () => {
    setUsingMenuLine({
      line1: "line",
      line2: "line",
      line3: "line",
      line4: "line",
      line5: "line",
      line6: "lineUse",
    });
    setUsingMenuText({
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "text",
    });
  };
  const handleContactLeave = () => {
    setUsingMenuLine({
      line1: "line",
      line2: "line",
      line3: "line",
      line4: "line",
      line5: "line",
      line6: "line",
    });
    setUsingMenuText({
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
    });
  };
  const aboutButton = () => {
    window.scroll({
      top: 1500,
      behavior: "smooth",
    });
    setValue(false);
  };
  const offersButton = () => {
    window.scroll({
      top: 6000 + window.innerWidth,
      behavior: "smooth",
    });

    setValue(false);
  };
  const needsButton = () => {
    window.scroll({
      top: 9850 + window.innerWidth,
      behavior: "smooth",
    });
    setValue(false);
  };
  const transformButton = () => {
    window.scroll({
      top: 15200,
      behavior: "smooth",
    });
    setValue(false);
  };
  const partnersButton = () => {
    window.scroll({
      top: 18200,
      behavior: "smooth",
    });
    setValue(false);
  };
  const contactButton = () => {
    window.scroll({
      top: 21300,
      behavior: "smooth",
    });
    setValue(false);
  };
  const backUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <React.Fragment>
      <Grid container className="container">
        {value && <Grid item xs={12} xl={6}></Grid>}
        {!value && (
          <Grid container className="menuContent">
            <Grid item xs container>
              <Grid
                item
                xs
                className={usingMenuText.text1}
                onClick={() => aboutButton()}
              >
                <div className={usingMenuLine.line1}></div>
                <div style={{ paddingRight: "25px" }}>O1</div>
              </Grid>
              <Grid
                item
                xs
                className={usingMenuText.text2}
                onClick={() => offersButton()}
              >
                <div className={usingMenuLine.line2}></div>
                <div style={{ paddingRight: "25px" }}>O2</div>
              </Grid>
              <Grid
                item
                xs
                className={usingMenuText.text3}
                onClick={() => needsButton()}
              >
                <div className={usingMenuLine.line3}></div>
                <div style={{ paddingRight: "25px" }}>O3</div>
              </Grid>
              <Grid item xs>
                <Grid>M E N U</Grid>
                <Grid>
                  <button id="btn" onClick={() => openDrawer()}></button>
                </Grid>
              </Grid>
              <Grid
                item
                xs
                className={usingMenuText.text4}
                onClick={() => transformButton()}
              >
                <div className={usingMenuLine.line4}></div>
                <div style={{ paddingLeft: "25px" }}>O4</div>
              </Grid>
              <Grid
                item
                xs
                className={usingMenuText.text5}
                onClick={() => partnersButton()}
              >
                <div className={usingMenuLine.line5}></div>
                <div style={{ paddingLeft: "25px" }}>O5</div>
              </Grid>
              <Grid
                item
                xs
                className={usingMenuText.text6}
                onClick={() => contactButton()}
              >
                <div className={usingMenuLine.line6}></div>
                <div style={{ paddingLeft: "25px" }}>O6</div>
              </Grid>
            </Grid>
            <div className="follow">
              <a href="http://www.facebook.com">
                <div className="followItem">f</div>
              </a>
              <a href="http://www.twitter.com">
                <div className="followItem">t</div>
              </a>
              <a href="http://www.google.com">
                <div className="followItem">g</div>
              </a>
            </div>
            <ArrowBackIosIcon className="backButton" onClick={() => backUp()} />
          </Grid>
        )}
        {value && (
          <Grid className="drawer">
            <Grid item xs className="drawerMenu">
              <div
                style={{
                  paddingTop: "10px",
                  paddingLeft: "20px",
                  float: "left",
                }}
              >
                MENU
              </div>
              <Grid item xs className="drawerBtn">
                <button id="drawerBtn" onClick={() => closeDrawer()}></button>
              </Grid>
            </Grid>
            <div
              className={
                window.innerWidth < 1280
                  ? "drawerContent fullScreen"
                  : "drawerContent"
              }
            >
              <Grid container style={{ marginBottom: "50px" }}>
                <Grid
                  item
                  container
                  alignItems="center"
                  direction="column"
                  xs={4}
                  className="drawerItem"
                  onClick={() => aboutButton()}
                >
                  <Grid className="drawerImage1">
                    <img
                      src={require("./modules/assets/menu/menu-01.jpg")}
                      alt="menu1"
                      width="150px"
                      style={{
                        borderRadius: "70px",
                      }}
                    ></img>
                  </Grid>
                  <Grid style={{ paddingLeft: "160px" }}>O1</Grid>
                  <Grid className="drawerLine"></Grid>
                  <Grid style={{ paddingRight: "60px" }}>O SPOLOČNOSTI</Grid>
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  direction="column"
                  xs={4}
                  className="drawerItem"
                  onClick={() => offersButton()}
                >
                  <Grid className="drawerImage1">
                    <img
                      src={require("./modules/assets/menu/menu-02.jpg")}
                      alt="menu2"
                      width="150px"
                      style={{
                        borderRadius: "70px",
                      }}
                    ></img>
                  </Grid>
                  <Grid style={{ paddingLeft: "160px" }}>O2</Grid>
                  <Grid className="drawerLine"></Grid>
                  <Grid style={{ paddingRight: "15px" }}>
                    ČO PONÚKA LEONIDES
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  direction="column"
                  xs={4}
                  className="drawerItem"
                  onClick={() => needsButton()}
                >
                  <Grid className="drawerImage1">
                    <img
                      src={require("./modules/assets/menu/menu-03.jpg")}
                      alt="menu3"
                      width="150px"
                      style={{
                        borderRadius: "70px",
                      }}
                    ></img>
                  </Grid>
                  <Grid style={{ paddingLeft: "160px" }}>O3</Grid>
                  <Grid className="drawerLine"></Grid>
                  <Grid style={{ paddingRight: "80px" }}>POTREBY ĽUDÍ</Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  container
                  alignItems="center"
                  direction="column"
                  xs={4}
                  className="drawerItem"
                  onClick={() => transformButton()}
                >
                  <Grid className="drawerImage1">
                    <img
                      src={require("./modules/assets/menu/menu-04.jpg")}
                      alt="menu1"
                      width="150px"
                      style={{
                        borderRadius: "70px",
                      }}
                    ></img>
                  </Grid>
                  <Grid style={{ paddingLeft: "160px" }}>O4</Grid>
                  <Grid className="drawerLine"></Grid>
                  <Grid style={{ paddingRight: "60px" }}>ZMEŇ SVOJ ŽIVOT</Grid>
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  direction="column"
                  xs={4}
                  className="drawerItem"
                  onClick={() => partnersButton()}
                >
                  <Grid className="drawerImage1">
                    <img
                      src={require("./modules/assets/menu/menu-05.jpg")}
                      alt="menu2"
                      width="150px"
                      style={{
                        borderRadius: "70px",
                      }}
                    ></img>
                  </Grid>
                  <Grid style={{ paddingLeft: "160px" }}>O5</Grid>
                  <Grid className="drawerLine"></Grid>
                  <Grid style={{ paddingRight: "15px" }}>PARTNERI</Grid>
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  direction="column"
                  xs={4}
                  className="drawerItem"
                  onClick={() => contactButton()}
                >
                  <Grid className="drawerImage1">
                    <img
                      src={require("./modules/assets/menu/menu-06.jpg")}
                      alt="menu3"
                      width="150px"
                      style={{
                        borderRadius: "70px",
                      }}
                    ></img>
                  </Grid>
                  <Grid style={{ paddingLeft: "160px" }}>O6</Grid>
                  <Grid className="drawerLine"></Grid>
                  <Grid style={{ paddingRight: "80px" }}>KONTAKT</Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
        )}
        <Header />
        <About
          onHandleAboutEnter={handleAboutEnter}
          onHandleAboutLeave={handleAboutLeave}
        />
        <Offer
          onHandleOffersEnter={handleOffersEnter}
          onHandleOffersLeave={handleOffersLeave}
        />
        <Needs
          onHandleNeedsEnter={handleNeedsEnter}
          onHandleNeedsLeave={handleNeedsLeave}
        />
        <Transform
          onHandleTransformEnter={handleTransformEnter}
          onHandleTransformLeave={handleTransformLeave}
        />
        <Partners
          onHandlePartnersEnter={handlePartnersEnter}
          onHandlePartnersLeave={handlePartnersLeave}
        />
        <GoogleMap />
        <Contact
          onHandleContactEnter={handleContactEnter}
          onHandleContactLeave={handleContactLeave}
        />
      </Grid>
    </React.Fragment>
  );
}

export default App;
