import image from "../assets/logo.png";
import weiller from "../assets/weiller.png"
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

export default function Dashboard() {
    const navigate = useNavigate();
    function logout(value: string) {
        localStorage.clear();
        navigate(`${value}`)
    }
  return (
    <div className="dashboardback">
      <nav className="navdashboard">
        <div className="insidenav">
          <img className="rotate" src={image} alt=""></img>
          <p className="navname">CyberCrypto</p>
        </div>
        <PopupState  variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <>
                <Button className="buttoncolor" variant="contained" {...bindTrigger(popupState)}>
                    <Avatar className="imageavatar" src={weiller} alt="Weiller mock change later!"/>
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={() => logout("/profile")}>Profile</MenuItem>
                  <MenuItem onClick={() => logout("/deposit")}>Deposit</MenuItem>
                  <MenuItem onClick={() => logout("/withdraw")}>Withdraw</MenuItem>
                  <MenuItem onClick={() => logout("/")}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </PopupState>
      </nav>
    </div>
  );
}
