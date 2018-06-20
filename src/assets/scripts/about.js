import "./modules/skills";
import initMap from "./modules/initMap";
import anchorScroll from "./modules/anchorScroll";
import navMobile from "./modules/navMobile";
import scrollParallax from "./modules/scrollParallax";

navMobile();
anchorScroll();
initMap();

window.addEventListener("scroll", () => {
  const wScroll = window.pageYOffset;

  scrollParallax().init(wScroll);
});
