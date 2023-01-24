import BgImgHero from "../../../components/Heros/BgImgHero/BgImgHero";
import FormHero from "../../../components/Heros/FormHero/FormHero";
import HeroCarousel from "../../../components/Heros/HeroCarousel/HeroCarousel";
import StandardHero from "../../../components/Heros/StandardHero/StandardHero";
import Demo from "../Demo";

const items = [
  {
    index: 0,
    image: "images/masonry/img1.jpg",
    buttonText: "View Project",
    buttonLink: "/item-1",
  },
  {
    index: 1,
    image: "images/masonry/img2.jpg",
    buttonText: "View Project",
    buttonLink: "/item-2",
  },
  {
    index: 2,
    image: "images/masonry/img3.jpg",
    buttonText: "View Project",
    buttonLink: "/item-3",
  },
  {
    index: 3,
    image: "images/masonry/img4.jpeg",
    buttonText: "View Project",
    buttonLink: "/item-4",
  },
  {
    index: 4,
    image: "images/masonry/img5.jpeg",
    buttonText: "View Project",
    buttonLink: "/item-5",
  },
  {
    index: 5,
    image: "images/masonry/img6.jpeg",
    buttonText: "View Project",
    buttonLink: "/item-6",
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
