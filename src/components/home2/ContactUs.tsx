import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Button, Grid, Typography, Container, TextField } from "@material-ui/core";
import phoneVolume from "../../assets/images/icons/phone-volume.png";
import waveLine3 from "../../assets/images/background/waveLine3.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      maxWidth: "1140px",
      marginTop: "169px",
      marginBottom: "110px",
      position: "relative",
    },
    styleImg: {
      position: "absolute",
      left: "-15%",
      bottom: "-100%",
      zIndex: -10,
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    },
    styleField: {
        "& label":{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontSize: "16px",
            color: "#C5C5C5",
            lineHeight: "10px",
            [theme.breakpoints.down("xs")]: {
                display: "none"
            }
        }
    },
    styleButtonPhone: {
        background: "#FF64AE",
        borderRadius: "0px 25px 25px 0px"
    }
  })
);
const ContactUs = () => {
  const classes = useStyles();
  return (
    <Container className={classes.styleContainer}>
      <img src={waveLine3} alt="" className={classes.styleImg}/>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={5}>
          <Typography variant="h1" style={{ letterSpacing: "0" }}>
            Request call services
          </Typography>
          <Typography variant="h3">
            Lorem ipsum dolor sit amet, consect adipiscing elit <span style={{color: "#091156", fontWeight: 600}}>Contact Us </span>.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
            <Box display="flex">
                <TextField type="text"
                  variant="outlined"
                  label="Insert your phone number here ..."
                  fullWidth
                  className={classes.styleField} />
                  <Button className={classes.styleButtonPhone}><img src={phoneVolume} alt="" /></Button>
            </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
