import { Card, Typography } from "@mui/material";
import { Header } from "../common/Header";
import "./MainPage.css";
import { PageVariantHero } from "../common/PageVariants";

export const MainPage = () => {
  return (
    <div className="main-page">
      <PageVariantHero
        title="Transforming visions into captivating digital experiences through code
          and photography."
        imageSrc="https://charlieliu-home-page.s3.us-west-1.amazonaws.com/DSC_0455.jpg"
      />
      <PageVariantHero
        title="Transforming visions into captivating digital experiences through code
          and photography."
        imageSrc="https://charlieliu-home-page.s3.us-west-1.amazonaws.com/DSC_0455.jpg"
      />
    </div>
  );
};
