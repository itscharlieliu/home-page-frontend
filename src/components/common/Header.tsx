import { Typography } from "@mui/material";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <Typography variant="h3">Charlie Liu</Typography>
      </div>
      <div className="header__action-buttons">Action Buttons</div>
    </div>
  );
};
