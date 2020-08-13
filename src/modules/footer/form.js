import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

export default function Form(props) {
  // HOOKS
  const [stateForm, setStateForm] = React.useState("");
  const [completeForm, setCompleteForm] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const snackbar = () => {
    if (open) {
      return (
        <Alert className="form" severity={stateForm}>
          {completeForm}
        </Alert>
      );
    }
  };
  const afterSubmit = () => {
    if (
      items.name === "" ||
      items.phone === "" ||
      items.email === "" ||
      items.message === ""
    ) {
      setStateForm("error");
      setCompleteForm("Vyplnte všetky povinné polia!");
    } else {
      setStateForm("success");
      setCompleteForm("Odoslané. Ďakujeme!");
      setItems({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
    handleClick();
  };

  const handleName = (e) => {
    setItems({ ...items, name: e.target.value });
  };
  const handleEmail = (e) => {
    setItems({ ...items, email: e.target.value });
  };
  const handlePhone = (e) => {
    setItems({ ...items, phone: e.target.value });
  };
  const handleMessage = (e) => {
    setItems({ ...items, message: e.target.value });
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Grid container justify="center" id={props.animation}>
        <Grid item container xs={6} spacing={4}>
          <Grid item container xs={6}>
            {/* NAME */}
            <Grid item xs={12}>
              <TextField
                id="name"
                InputLabelProps={{ shrink: true }}
                label="NAME"
                value={items.name}
                onChange={(e) => handleName(e)}
                fullWidth
              />
            </Grid>
            {/* EMAIL */}
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{ shrink: true }}
                label="EMAIL"
                onChange={(e) => handleEmail(e)}
                value={items.email}
                fullWidth
              />
            </Grid>
            {/* PHONE */}
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{ shrink: true }}
                label="TELEFON"
                onChange={(e) => handlePhone(e)}
                value={items.phone}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            {/* MESSAGE */}
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                label="ODKAZ"
                onChange={(e) => handleMessage(e)}
                value={items.message}
                fullWidth
                multiline={true}
                rows={10}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs>
              <Button
                disableElevation
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => afterSubmit()}
              >
                ODOSLAT
              </Button>
              {snackbar()}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="contactFooter">
        <img
          src={require(".././images/logo-head.svg")}
          width="150px"
          alt="logoHead"
        ></img>
        <p>
          DESIGNED BY <i>XXXXXX</i> XXXXXX
        </p>
      </div>
    </React.Fragment>
  );
}
