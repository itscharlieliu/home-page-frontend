import { Typography } from "@mui/material";
import "./Header.css";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <Logo />
      </div>
      <div className="header__action-buttons">Action Buttons</div>
    </div>
  );
};
