import BgImgHero from "../../../components/Heros/BgImgHero/BgImgHero";
import FormHero from "../../../components/Heros/FormHero/FormHero";
import HeroCarousel from "../../../components/Heros/HeroCarousel/HeroCarousel";
import StandardHero from "../../../components/Heros/StandardHero/StandardHero";
import Demo from "../Demo";

const items = [
  {
    image: "images/masonry/img1.jpg",
    buttonText: "View Project",
    buttonLink: "/item-1",
  },
  {
    image: "images/masonry/img2.jpg",
    buttonText: "View Project",
    buttonLink: "/item-2",
  },
  {
    image: "images/masonry/img3.jpg",
    buttonText: "View Project",
    buttonLink: "/item-3",
  },
];

const heroComponents = [
  {
    component: FormHero,
    title: "FormHero",
  },
  {
    component: HeroCarousel,
    title: "HeroCarousel",
    props: { items },
  },
  {
    component: StandardHero,
    title: "StandardHero",
  },
  {
    component: BgImgHero,
    title: "BgImgHero",
  },
];

export default function HeroDemo() {
  return (
    <div>
      <Demo demoTitle="Hero Components" components={heroComponents} />
    </div>
  );
}
