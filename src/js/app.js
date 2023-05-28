import * as flsFunctions from "./modules/functions.js";
import { observerForHeader } from "./modules/observerForHeader.js";
import { sliderTop } from "./modules/sliderTop.js";
import { iconMenu } from "./modules/iconMenu.js";
import { observerForAnimation } from "./modules/observerForAnimation.js";
import { chooseCategoryes } from "./modules/chooseCategoryes.js";
import { calcVideo } from "./modules/calcVideo.js";
import { calcAlarmSystem } from "./modules/calcAlarmSystem.js";

flsFunctions.isWebp();
observerForHeader();
sliderTop();
iconMenu();
observerForAnimation();
chooseCategoryes();
calcVideo();
calcAlarmSystem();