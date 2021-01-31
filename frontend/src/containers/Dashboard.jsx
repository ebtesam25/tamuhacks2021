import React, { useState, useEffect } from "react";
import "../css/landing.css";
import { AA_SEATS, VAC_SP, TES_SP, VAC, TES, NA } from "../css/images";
import { Button, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import data from "../data.json";

const Dashboard = (props) => {
  const [seats, setSeats] = useState({
    "3F": {
      position: ["28.5%", "21.9%"],
    },
    "3E": {
      position: ["34.5%", "21.9%"],
    },
    "3B": {
      position: ["47.5%", "21.9%"],
    },
    "3A": {
      position: ["53.5%", "21.9%"],
    },
    "4F": {
      position: ["28.5%", "24.6%"],
    },
    "4E": {
      position: ["34.5%", "24.6%"],
    },
    "4B": {
      position: ["47.5%", "24.6%"],
    },
    "4A": {
      position: ["53.5%", "24.6%"],
    },
    "5F": {
      position: ["28.5%", "27.3%"],
    },
    "5E": {
      position: ["34.5%", "27.3%"],
    },
    "5B": {
      position: ["47.5%", "27.3%"],
    },
    "5A": {
      position: ["53.5%", "27.3%"],
    },
    "6F": {
      position: ["28.5%", "30.0%"],
    },
    "6E": {
      position: ["34.5%", "30.0%"],
    },
    "6B": {
      position: ["47.5%", "30.0%"],
    },
    "6A": {
      position: ["53.5%", "30.0%"],
    },
    "7F": { position: ["27.5%", "34%"] },
    "7E": { position: ["31.5%", "34%"] },
    "7D": { position: ["35.5%", "34%"] },
    "7C": { position: ["46.5%", "34%"] },
    "7B": { position: ["50.5%", "34%"] },
    "7A": { position: ["54.5%", "34%"] },
    "8F": { position: ["27.5%", "35.8%"] },
    "8E": { position: ["31.5%", "35.8%"] },
    "8D": { position: ["35.5%", "35.8%"] },
    "8C": { position: ["46.5%", "35.8%"] },
    "8B": { position: ["50.5%", "35.8%"] },
    "8A": { position: ["54.5%", "35.8%"] },
    "9F": { position: ["27.5%", "37.6%"] },
    "9E": { position: ["31.5%", "37.6%"] },
    "9D": { position: ["35.5%", "37.6%"] },
    "9C": { position: ["46.5%", "37.6%"] },
    "9B": { position: ["50.5%", "37.6%"] },
    "9A": { position: ["54.5%", "37.6%"] },
    "10F": { position: ["27.5%", "39.4%"] },
    "10E": { position: ["31.5%", "39.4%"] },
    "10D": { position: ["35.5%", "39.4%"] },
    "10C": { position: ["46.5%", "39.4%"] },
    "10B": { position: ["50.5%", "39.4%"] },
    "10A": { position: ["54.5%", "39.4%"] },
    "11F": { position: ["27.5%", "41.2%"] },
    "11E": { position: ["31.5%", "41.2%"] },
    "11D": { position: ["35.5%", "41.2%"] },
    "11C": { position: ["46.5%", "41.2%"] },
    "11B": { position: ["50.5%", "41.2%"] },
    "11A": { position: ["54.5%", "41.2%"] },
    "12F": { position: ["27.5%", "43.%"] },
    "12E": { position: ["31.5%", "43.%"] },
    "12D": { position: ["35.5%", "43.%"] },
    "12C": { position: ["46.5%", "43.%"] },
    "12B": { position: ["50.5%", "43.%"] },
    "12A": { position: ["54.5%", "43.%"] },
    "13F": { position: ["27.5%", "44.8%"] },
    "13E": { position: ["31.5%", "44.8%"] },
    "13D": { position: ["35.5%", "44.8%"] },
    "13C": { position: ["46.5%", "44.8%"] },
    "13B": { position: ["50.5%", "44.8%"] },
    "13A": { position: ["54.5%", "44.8%"] },
    "14F": { position: ["27.5%", "46.9%"] },
    "14E": { position: ["31.5%", "46.9%"] },
    "14D": { position: ["35.5%", "46.9%"] },
    "14C": { position: ["46.5%", "46.9%"] },
    "14B": { position: ["50.5%", "46.9%"] },
    "14A": { position: ["54.5%", "46.9%"] },
    "15F": { position: ["27.5%", "49.2%"] },
    "15E": { position: ["31.5%", "49.2%"] },
    "15D": { position: ["35.5%", "49.2%"] },
    "15C": { position: ["46.5%", "49.2%"] },
    "15B": { position: ["50.5%", "49.2%"] },
    "15A": { position: ["54.5%", "49.2%"] },
    "16F": { position: ["27.5%", "51%"] },
    "16E": { position: ["31.5%", "51%"] },
    "16D": { position: ["35.5%", "51%"] },
    "16C": { position: ["46.5%", "51%"] },
    "16B": { position: ["50.5%", "51%"] },
    "16A": { position: ["54.5%", "51%"] },
    "17F": { position: ["27.5%", "52.6%"] },
    "17E": { position: ["31.5%", "52.6%"] },
    "17D": { position: ["35.5%", "52.6%"] },
    "17C": { position: ["46.5%", "52.6%"] },
    "17B": { position: ["50.5%", "52.6%"] },
    "17A": { position: ["54.5%", "52.6%"] },
    "18F": { position: ["27.5%", "54.4%"] },
    "18E": { position: ["31.5%", "54.4%"] },
    "18D": { position: ["35.5%", "54.4%"] },
    "18C": { position: ["46.5%", "54.4%"] },
    "18B": { position: ["50.5%", "54.4%"] },
    "18A": { position: ["54.5%", "54.4%"] },
    "19F": { position: ["27.5%", "56.1%"] },
    "19E": { position: ["31.5%", "56.1%"] },
    "19D": { position: ["35.5%", "56.1%"] },
    "19C": { position: ["46.5%", "56.1%"] },
    "19B": { position: ["50.5%", "56.1%"] },
    "19A": { position: ["54.5%", "56.1%"] },
    "20F": { position: ["27.5%", "57.7%"] },
    "20E": { position: ["31.5%", "57.7%"] },
    "20D": { position: ["35.5%", "57.7%"] },
    "20C": { position: ["46.5%", "57.7%"] },
    "20B": { position: ["50.5%", "57.7%"] },
    "20A": { position: ["54.5%", "57.7%"] },
    "21F": { position: ["27.5%", "59.4%"] },
    "21E": { position: ["31.5%", "59.4%"] },
    "21D": { position: ["35.5%", "59.4%"] },
    "21C": { position: ["46.5%", "59.4%"] },
    "21B": { position: ["50.5%", "59.4%"] },
    "21A": { position: ["54.5%", "59.4%"] },
    "22F": { position: ["27.5%", "61.1%"] },
    "22E": { position: ["31.5%", "61.1%"] },
    "22D": { position: ["35.5%", "61.1%"] },
    "22C": { position: ["46.5%", "61.1%"] },
    "22B": { position: ["50.5%", "61.1%"] },
    "22A": { position: ["54.5%", "61.1%"] },
    "23F": { position: ["27.5%", "62.7%"] },
    "23E": { position: ["31.5%", "62.7%"] },
    "23D": { position: ["35.5%", "62.7%"] },
    "23C": { position: ["46.5%", "62.7%"] },
    "23B": { position: ["50.5%", "62.7%"] },
    "23A": { position: ["54.5%", "62.7%"] },
    "24F": { position: ["27.5%", "64.4%"] },
    "24E": { position: ["31.5%", "64.4%"] },
    "24D": { position: ["35.5%", "64.4%"] },
    "24C": { position: ["46.5%", "64.4%"] },
    "24B": { position: ["50.5%", "64.4%"] },
    "24A": { position: ["54.5%", "64.4%"] },
    "25F": { position: ["27.5%", "66.2%"] },
    "25E": { position: ["31.5%", "66.2%"] },
    "25D": { position: ["35.5%", "66.2%"] },
    "25C": { position: ["46.5%", "66.2%"] },
    "25B": { position: ["50.5%", "66.2%"] },
    "25A": { position: ["54.5%", "66.2%"] },
    "26F": { position: ["27.5%", "67.8%"] },
    "26E": { position: ["31.5%", "67.8%"] },
    "26D": { position: ["35.5%", "67.8%"] },
    "26C": { position: ["46.5%", "67.8%"] },
    "26B": { position: ["50.5%", "67.8%"] },
    "26A": { position: ["54.5%", "67.8%"] },
    "27F": { position: ["27.5%", "69.5%"] },
    "27E": { position: ["31.5%", "69.5%"] },
    "27D": { position: ["35.5%", "69.5%"] },
    "27C": { position: ["46.5%", "69.5%"] },
    "27B": { position: ["50.5%", "69.5%"] },
    "27A": { position: ["54.5%", "69.5%"] },
    "28F": { position: ["27.5%", "71.2%"] },
    "28E": { position: ["31.5%", "71.2%"] },
    "28D": { position: ["35.5%", "71.2%"] },
    "28C": { position: ["46.5%", "71.2%"] },
    "28B": { position: ["50.5%", "71.2%"] },
    "28A": { position: ["54.5%", "71.2%"] },
    "29F": { position: ["27.5%", "72.9%"] },
    "29E": { position: ["31.5%", "72.9%"] },
    "29D": { position: ["35.5%", "72.9%"] },
    "29C": { position: ["46.5%", "72.9%"] },
    "29B": { position: ["50.5%", "72.9%"] },
    "29A": { position: ["54.5%", "72.9%"] },
    "30F": { position: ["27.5%", "74.6%"] },
    "30E": { position: ["31.5%", "74.6%"] },
    "30D": { position: ["35.5%", "74.6%"] },
    "30C": { position: ["46.5%", "74.6%"] },
    "30B": { position: ["50.5%", "74.6%"] },
    "30A": { position: ["54.5%", "74.6%"] },
  });

  useEffect(() => {
    for (const passenger of data) {
      setTimeout(() => {
        const updatedSeats = { ...seats };
        updatedSeats[passenger.id]["user"] = passenger;
        setSeats(updatedSeats);
      }, 2000);
    }
  }, []);

  const getIcon = (user) => {
    if (user) {
      if (user.sp === "yes") return user.vaccine === "yes" ? VAC_SP : TES_SP;
      else if (user.vaccine === "yes") return VAC;
      else if (user.tested === "yes") return TES;
      return NA;
    }
  };

  return (
    <Grid style={{ paddingTop: "3em", flexGrow: 1 }}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          backgroundColor: "#fff",
          width: "80%",
          margin: "2em 10% 2em 10%",
          borderWidth: 1,
          borderRadius: "24px",
          padding: "1%",
        }}
      >
        <Grid
          container
          direction="row"
          style={{ display: "flex", paddingBottom: "1%" }}
        >
          <Grid item style={{ flex: 1 }}>
            <Typography
              align="center"
              style={{
                color: "#8c8c8c",
                fontSize: 24,
                fontWeight: 500,
                fontFamily: "Montserrat",
              }}
            >
              Sat Jan 30, 2021
            </Typography>
          </Grid>
          <Grid item style={{ flex: 1 }}>
            <Typography
              align="center"
              style={{
                color: "#9b9b9b",
                fontSize: 24,
                fontWeight: 500,
                fontFamily: "Montserrat",
              }}
            >
              Status
            </Typography>
          </Grid>
          <Grid item style={{ flex: 1 }}>
            <Typography
              align="center"
              style={{
                color: "#000000",
                fontSize: 24,
                fontWeight: 500,
                fontFamily: "Montserrat",
              }}
            >
              American AA 153
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" style={{ display: "flex" }}>
          <Grid item style={{ flex: 1 }}>
            <Typography
              align="center"
              style={{
                color: "#333333",
                fontSize: 64,
                fontWeight: 500,
                fontFamily: "Montserrat",
              }}
            >
              18:21
            </Typography>
          </Grid>
          <Grid item style={{ flex: 1 }}>
            <Typography
              align="center"
              style={{
                color: "#333333",
                fontSize: 36,
                fontWeight: 500,
                fontFamily: "Montserrat",
              }}
            >
              Boarding
            </Typography>
            <Typography
              align="center"
              style={{
                color: "#6d6b6b",
                fontSize: 24,
                fontWeight: 400,
                fontFamily: "Montserrat",
              }}
            >
              Terminal N Gate E10
            </Typography>
          </Grid>
          <Grid item style={{ flex: 1 }}>
            <Typography
              align="center"
              style={{
                color: "#000000",
                fontSize: 24,
                fontWeight: 400,
                fontFamily: "Montserrat",
              }}
            >
              Atlanta to Charlotte
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Typography
        align="center"
        style={{
          color: "#000000",
          fontSize: 24,
          fontWeight: 500,
          fontFamily: "Montserrat",
        }}
      >
        Cabin Plan
      </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          backgroundColor: "#fff",
          width: "80%",
          margin: "2em 10% 1em 10%",
          borderRadius: "24px",
          padding: "1%",
        }}
      >
        <div style={{ position: "relative" }}>
          {Object.keys(seats).map((seat) => {
            return seats[seat].user ? (
              <img
                src={getIcon(seats[seat].user)}
                style={{
                  width: 12,
                  height: 12,
                  position: "absolute",
                  top: seats[seat].position[0],
                  left: seats[seat].position[1],
                  backgroundImage: getIcon(seats[seat].user),
                }}
                alt="AA"
              />
            ) : (
              <div
                style={{
                  width: 12,
                  height: 12,
                  position: "absolute",
                  top: seats[seat].position[0],
                  left: seats[seat].position[1],
                  backgroundColor: "#696969",
                }}
                alt="AA"
              />
            );
          })}
          <img src={AA_SEATS} style={{ width: "100%" }} alt="AA" />
        </div>
      </Grid>
      <Grid
        container
        direction="row"
        style={{
          width: "80%",
          margin: "0em 10% 0 10%",
          borderRadius: "24px",
          paddingBottom: "2%",
        }}
      >
        <Button variant="outlined" style={{ marginRight: "1em" }}>
          Boarded 36
        </Button>
        <Button variant="outlined" style={{ marginRight: "1em" }}>
          Remaining 7
        </Button>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
