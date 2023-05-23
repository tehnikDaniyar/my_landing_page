import * as flsFunctions from "./modules/functions.js";
import { observerForHeader } from "./modules/observerForHeader.js";
import { sliderTop } from "./modules/sliderTop.js";
import { iconMenu } from "./modules/iconMenu.js";
import { observerForAnimation } from "./modules/observerForAnimation.js";
import { pricesCalc } from "./modules/pricesCalc.js";

flsFunctions.isWebp();
observerForHeader();
sliderTop();
iconMenu();
observerForAnimation();
pricesCalc();