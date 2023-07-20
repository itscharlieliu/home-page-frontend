import "./MainPage.css";
import {
  PageVariantGallery,
  PageVariantHero,
  PageVariantText,
} from "../common/PageVariants";
import { PROJECTS } from "../../defs/projects";

export const MainPage = () => {
  return (
    <div className="main-page">
      <PageVariantHero
        title="Transforming visions into captivating digital experiences through code
          and photography."
        imageSrc="https://charlieliu-home-page.s3.us-west-1.amazonaws.com/DSC_0455.jpg"
      />
      <PageVariantGallery title="Featured Projects" galleryItems={PROJECTS} />
      <PageVariantText
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse "
      />
    </div>
  );
};
