import { Typography } from "@mui/material";
import { Header } from "../common/Header";
import "./MainPage.css";

export const MainPage = () => {
  return (
    <div className="main-page">
      <img
        alt="background"
        className="main-page__decoration"
        src="https://charlieliu-home-page.s3.us-west-1.amazonaws.com/DSC_0455.jpg"
        //   width={200}
        //   height={200}
      />
      <div className="main-page__about-text">
        <Typography variant="h4">
          Transforming visions into captivating digital experiences through code
          and photography.
        </Typography>
      </div>
    </div>
  );
};
