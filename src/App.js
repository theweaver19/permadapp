import "./App.css";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Paper,
} from "@material-ui/core";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { OpenInNew, Warning } from "@material-ui/icons";
import sushiswap from "./images/sushiswap.svg";
import pancakeswap from "./images/pancakeswap.svg";
import synthetix from "./images/synthetix.png";
import bao from "./images/bao.png";
import uniswap from "./images/uniswap.jpg";
import wbtc from "./images/wbtc.svg";
import linkswap from "./images/linkswap.jpg";
import arweave from "./images/arweave.png";
import mirror from "./images/mirror.png";
import thorchain from "./images/thorchain.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      color: "#000000",
      fontSize: "36px",
      fontFamily: "Helvetica",
      fontWeight: 700,
    },
    rainbow: {
      backgroundImage:
        "linear-gradient(90deg, #BDD73F 0%, #78C74F 13.54%, #60ADEA 24.48%, #4E5DBC 35.42%, #7754BF 46.87%, #EC5894 55.21%, #F55040 60.94%, #F36045 67.71%, #FF834F 75.52%, #FE9B45 85.42%, #FFC06B 96.88%)",
      "-webkit-background-clip": "text",
      color: "transparent",
      fontWeight: 700,
      fontFamily: "Helvetica",
    },
    link: {
      color: "#000000",
      textDecorationColor: "#000000",
    },
  })
);

const dapps = [
  {
    image: bao,
    title: "Bao.Finance",
    buttonColor: "#d16c00",
    sourceCodeURL: "https://github.com/theweaver19/bao.finance",
    openURL: "https://baofinance.permadapp.com/",
    lastUpdated: "27/01/2021",
    arweaveURL:
      "https://arweave.net/PLotlOH6_6zhjIDmtkw7m_6MM0ow_OcAsAJbw2cVg80",
    border: "none",
  },
  {
    image: linkswap,
    title: "LinkSwap",
    buttonColor: "#295BDB",
    sourceCodeURL: "https://github.com/theweaver19/LINKSWAP-FE",
    openURL: "https://linkswap.permadapp.com/",
    lastUpdated: "27/01/2021",
    arweaveURL:
      "https://arweave.net/AlrzyNOiHZF5OFUsbIVOnXYDV1oRdyzM6OWGPvQfEqA",
    border: "none",
  },
  {
    image: mirror,
    title: "Mirror",
    buttonColor: "#211f24",
    sourceCodeURL: "https://github.com/theweaver19/eth-web-app",
    openURL: "https://mirror.permadapp.com/",
    lastUpdated: "03/02/2021",
    arweaveURL:
      "https://arweave.net/rmWcWffkxU103AgJOTwhyjMXPvDdDp7cmP9HbLV0e9k",
    border: "1px solid #47d7e2",
  },
  {
    image: pancakeswap,
    title: "PancakeSwap",
    buttonColor: "#44D3DB",
    sourceCodeURL: "https://github.com/theweaver19/pancake-swap-interface",
    openURL: "https://pancakeswap.permadapp.com/",
    lastUpdated: "24/01/2021",
    arweaveURL:
      "https://arweave.net/nmY3piAozaInaaGgYBYZS8-sb6qg9Q2oAD15wfQPF2E",
    border: "none",
  },
  {
    image: sushiswap,
    title: "SushiSwap",
    buttonColor: "rgb(14, 14, 35)",
    sourceCodeURL: "https://github.com/theweaver19/sushiswap-classic-exchange",
    openURL: "https://sushiswap.permadapp.com/",
    lastUpdated: "24/01/2021",
    arweaveURL:
      "https://arweave.net/tuUK27puthzN1XZ2wieCXEXIgq2gqaXHwWJUlphRWvU",
    border: "none",
  },
  {
    image: synthetix,
    title: "Synthetix",
    buttonColor: "rgb(0, 209, 255)",
    sourceCodeURL: "https://github.com/theweaver19/synthetix-exchange",
    openURL: "https://synthetix.permadapp.com/",
    lastUpdated: "24/01/2021",
    arweaveURL:
      "https://arweave.net/c3p13SGhoeaTHLpqzA57COw7L9y7il3mei5S6Z4vBIk",
    border: "none",
  },
  {
    image: thorchain,
    title: "Thorchain BEP",
    buttonColor: "rgb(35, 220, 200)",
    sourceCodeURL: "https://github.com/theweaver19/bepswap-web-ui",
    openURL: "https://bepswap.permadapp.com/",
    lastUpdated: "03/02/2021",
    arweaveURL:
      "https://arweave.net/FxtIHGaT6UFzcb3pxhjkzhesOCXDq0_4GMWfB3vqYw4",
    border: "none",
  },
  {
    image: uniswap,
    title: "Uniswap",
    buttonColor: "rgba(248, 82, 160, 1)",
    sourceCodeURL: "https://github.com/theweaver19/uniswap-interface",
    openURL: "https://uniswap.permadapp.com/",
    lastUpdated: "24/01/2021",
    arweaveURL:
      "https://arweave.net/CAX6alcCUNTLSyyXxlvNQR0kBu7hO2TirOAS-3QYWzU",
    border: "none",
  },
  {
    image: wbtc,
    title: "WBTC Cafe",
    buttonColor: "#6f4e37",
    sourceCodeURL: "https://github.com/theweaver19/wbtc-cafe",
    openURL: "https://wbtccafe.permadapp.com/",
    lastUpdated: "26/01/2021",
    arweaveURL:
      "https://arweave.net/BAFBcgMZDdREeMEI5rxmYKqOjq9rWxI2kATlKFFLIws",
    border: "1px solid #C4C4C4",
  },
];

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar
        position="static"
        style={{
          backgroundColor: "#FFFFFF",
          marginBottom: "24px",
          borderBottom: "1px solid #C4C4C4",
        }}
        elevation={0}
      >
        <Container maxWidth="lg">
          <Toolbar style={{ height: 80, paddingRight: 0, paddingLeft: 0 }}>
            <Grid container justify="space-between">
              <Grid item>
                <div className={classes.title}>permadapp</div>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    window.open("https://www.arweave.org/", "_blank");
                  }}
                  variant="outlined"
                  style={{ color: "rgba(0, 0, 0, 0.4)", textTransform: "none" }}
                >
                  Learn About Arweave
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg">
        <div
          style={{
            fontSize: "20px",
            fontFamily: "Helvetica",
            fontWeight: 400,
            marginBottom: "20px",
          }}
        >
          <span className={classes.rainbow}>Access Dapp UIs forever.</span>{" "}
          <span>
            Powered by{" "}
            <a
              href="https://www.arweave.org/"
              className={classes.link}
              target="_blank"
              rel="noreferrer"
            >
              Arweave
            </a>
            . Deployed via{" "}
            <a
              href="https://argoapp.live/"
              className={classes.link}
              target="_blank"
              rel="noreferrer"
            >
              Argo.
            </a>
          </span>
        </div>

        <div
          style={{
            paddingTop: "5px",
            border: "1px solid #FF9800",
            paddingBottom: "5px",
            color: "rgba(102, 60, 0, 1)",
            backgroundColor: "rgba(255, 244, 229, 1)",
            borderRadius: "5px",
            alignItems: "center",
            display: "flex",
            justify: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Warning
            style={{ marginRight: "5px", color: "rgba(255, 152, 0, 1)" }}
          />
          UIs available through permadapp have been forked and deployed from
          open source code. They are meant as a proof of concept. Please use at
          your own risk.
        </div>

        <Grid container spacing={2}>
          {dapps.map((dapp, index) => (
            <Grid item xs={6} key={index}>
              <Paper elevation={0} style={{ border: "1px solid #C4C4C4" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    padding: "20px",
                  }}
                >
                  <img
                    src={dapp.image}
                    alt={dapp.title}
                    style={{
                      marginBottom: "12px",
                      height: "120px",
                      width: "120px",
                      borderRadius: "50%",
                      border: dapp.border,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "Helvetica",
                      fontWeight: 700,
                      fontSize: "24px",
                      marginBottom: "12px",
                    }}
                  >
                    {dapp.title}
                  </div>

                  <Button
                    variant="contained"
                    onClick={() => window.open(dapp.openURL, "_blank")}
                    disableElevation={true}
                    style={{
                      background: dapp.buttonColor,
                      color: "#FFFFFF",
                      fontFamily: "Helvetica",
                      fontWeight: 700,
                      textTransform: "none",
                    }}
                  >
                    Open Perma {dapp.title}
                  </Button>
                  <div
                    style={{
                      color: "rgba(0, 0, 0, 0.4)",
                      fontFamily: "Helvetica",
                      fontWeight: 400,
                      fontSize: "14px",
                    }}
                  >
                    <IconButton
                      style={{ fontSize: "14px" }}
                      onClick={() => window.open(dapp.sourceCodeURL, "_blank")}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        View source code on Github
                        <OpenInNew style={{ height: "21px", width: "21px" }} />
                      </div>
                    </IconButton>
                    <div>
                      <Button
                        style={{
                          fontSize: "14px",
                          textTransform: "none",
                          marginBottom: "10px",
                        }}
                        variant="outlined"
                        onClick={() => window.open(dapp.arweaveURL, "_blank")}
                      >
                        <img
                          src={arweave}
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "5px",
                          }}
                        />
                        View it directly on Arweave
                      </Button>
                    </div>
                    <div>Last updated {dapp.lastUpdated}</div>
                  </div>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
