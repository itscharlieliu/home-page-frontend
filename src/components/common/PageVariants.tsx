import { Typography } from "@mui/material";
import "./PageVariants.css";
interface PageVariantHeroProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
}

export const PageVariantHero = ({
  title,
  subtitle,
  imageSrc,
}: PageVariantHeroProps) => {
  return (
    <div className="page-variants">
      <img
        alt=""
        className="page-variants__background-img"
        src="https://charlieliu-home-page.s3.us-west-1.amazonaws.com/DSC_0455.jpg"
      />
      <div className="page-variants__hero-info-card ">
        <Typography variant="h4">
          Transforming visions into captivating digital experiences through code
          and photography.
        </Typography>
      </div>
    </div>
  );
};
