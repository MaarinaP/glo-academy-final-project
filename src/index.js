import modal from "./modules/modal";
import smoothScroll from "./modules/scroll";
import timer from "./modules/timer";
import slider from "./modules/slider";
import valid from "./modules/valid";
import calc from "./modules/calc";

modal();
smoothScroll();

timer("25 march 2022", ".okna");
timer("30 march 2022", ".balkony");
timer("5 april 2022", ".kuhni");

slider();
valid();
calc();
