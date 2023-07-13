import { Typography } from "@mui/material";
import { Header } from "../common/Header";
import "./MainPage.css";

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page__about-text">
        <Typography variant="h4">
          Transforming visions into captivating digital experiences through code
          and photography.
        </Typography>
      </div>
    </div>
  );
};
