import { useState } from "react";
import image from "../assets/logo.png";
import weiller from "../assets/weiller.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./Chart";
import Deposit from "./Deposit";
import Orders from "./Orders";

export default function Dashboard() {
  const navigate = useNavigate();
  function logout(value: string) {
    localStorage.clear();
    navigate(`${value}`);
  }
  return (
    <div className="dashboardback">
      <nav className="navdashboard">
        <div className="insidenav">
          <img className="rotate" src={image} alt=""></img>
          <p className="navname">CyberCrypto</p>
        </div>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <>
              <Button
                className="buttoncolor"
                variant="contained"
                {...bindTrigger(popupState)}
              >
                <Avatar
                  className="imageavatar"
                  src={weiller}
                  alt="Weiller mock change later!"
                />
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={() => logout("/profile")}>Profile</MenuItem>
                <MenuItem onClick={() => logout("/deposit")}>Deposit</MenuItem>
                <MenuItem onClick={() => logout("/withdraw")}>
                  Withdraw
                </MenuItem>
                <MenuItem onClick={() => logout("/")}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </PopupState>
      </nav>
      <div className="dashboardcontent">
        <DashboardContent />
      </div>
    </div>
  );
}

function DashboardContent() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (

      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundImage: "linear-gradient( 178.1deg,  rgba(60,55,106,1) 8.5%, rgba(23,20,69,1) 82.4% )",
            flexGrow: 1,
            overflow: "auto",
            borderRadius: "10px",
            filter: "drop-shadow(10px 10px 4px #4444dd);",
            height: "650px",
            marginTop: "auto"
          }}
        >

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                  }}
                >
                  <Deposit />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
  );
}
