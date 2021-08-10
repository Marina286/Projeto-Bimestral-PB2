import ScrollAnimate from "./modules/scroll-animate.js";
import MobileMenu from "./modules/mobile-menu.js";

const scrollAnimate = new ScrollAnimate('[data-animate="scroll"]'); // Seletor das seções que vão animar.
scrollAnimate.init();

const mobileMenu = new MobileMenu('[data-menu="hamburguer"]', '[data-menu="lista"]'); // Seletores do botão do menu hambúrguer e da lista (ul) dele, respectivamente.
mobileMenu.init();
