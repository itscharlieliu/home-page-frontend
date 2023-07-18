import "./MainPage.css";
import { PageVariantGallery, PageVariantHero } from "../common/PageVariants";
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
    </div>
  );
};
