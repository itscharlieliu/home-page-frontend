import { Button, Card, TextField, Typography } from "@mui/material";
import "./PageVariants.css";
import { GalleryItem } from "../../types/gallery";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ReactElement } from "react";

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
    <div className="page-variants page-variants--dark page-variants__gallery">
      <Typography variant="h2" className="page-variants__gallery-title">
        {title}
      </Typography>
      <Carousel
        className="page-variants__gallery-carousel"
        infiniteLoop
        // dynamicHeight
      >
        {galleryItems.map((galleryItem) => (
          <div>
            <img src={galleryItem.imgSrc} alt={galleryItem.title} />
            <p>{galleryItem.title}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

interface PageVariantTextProps {
  title: string;
  description: string;
  actionButtons?: ReactElement;
}

export const PageVariantText = ({
  title,
  description,
  actionButtons,
}: PageVariantTextProps) => {
  return (
    <div className="page-variants  ">
      <div className="page-variants__text-container">
        <Typography variant="h2">{title}</Typography>
        <Typography variant="h5">{description}</Typography>
        <div>{actionButtons}</div>
      </div>
    </div>
  );
};

export const PageVariantContact = () => {
  // TODO look into <Box> for form validation
  return (
    <div className="page-variants__contact-container">
      <Typography variant="h5">Contact</Typography>
      <div className="page-variants__contact-textfield-container">
        <TextField
          className="page-variants__contact-textfield"
          variant="standard"
          label="Email"
        />
        <TextField
          className="page-variants__contact-textfield"
          variant="standard"
          label="Subject"
        />
        <TextField
          className="page-variants__contact-textfield"
          variant="outlined"
          multiline
          minRows={4}
          label="Message"
        />
      </div>
      <Button color="inherit">Send Message</Button>
    </div>
  );
};
