import * as flsFunctions from "./modules/functions.js";
import { observerForHeader } from "./modules/observerForHeader.js";
import { sliderTop } from "./modules/sliderTop.js";
import { iconMenu } from "./modules/iconMenu.js";
import { observerForAnimation } from "./modules/observerForAnimation.js";
import { chooseCategoryes } from "./modules/chooseCategoryes.js";
import { calcVideo } from "./modules/calcVideo.js";
import { calcAlarmSystem } from "./modules/calcAlarmSystem.js";
import { modalWindows } from "./modules/modalWindows.js";
import { feedback } from "./modules/feedback.js";
// import { renameImg } from "./modules/renameImg.js";
import { scrolling } from "./modules/scrolling.js";

flsFunctions.isWebp();
observerForHeader();
sliderTop();
iconMenu();
observerForAnimation();
chooseCategoryes();
calcVideo();
calcAlarmSystem();
modalWindows();
feedback();
// renameImg();
scrolling();