import { Typography } from "@mui/material";
import "./PageVariants.css";
import { GalleryItem } from "../../types/gallery";
import { Carousel } from "react-responsive-carousel";

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
        className="page-variants__hero-background-img"
        src={imageSrc}
      />
      <div className="page-variants__hero-info-card ">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </div>
    </div>
  );
};

interface PageVariantGalleryProps {
  title: string;
  galleryItems: GalleryItem[];
}

export const PageVariantGallery = ({
  title,
  galleryItems,
}: PageVariantGalleryProps) => {
  return (
    <div className="page-variants page-variants--dark">
      <Typography variant="h2" className="page-variants__gallery-title">
        {title}
      </Typography>
      <Carousel className="page-variants__gallery-carousel">
        {galleryItems.map((galleryItem) => (
          <div>
            <img
              className="page-variants__gallery-image"
              src={galleryItem.imgSrc}
              alt={galleryItem.title}
            />
            <p>{galleryItem.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
