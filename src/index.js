import css from "./style.css"
import { domEleGen } from "dom_gen_cosbert";
import { assetsMod } from "./assets.js";

let renderPage = () => {
    let bodyEle = document.querySelector("body");

    navBar(bodyEle);
    // formEle(bodyEle);

    return bodyEle;
}

let navBar = (ele) => {
    let mainEle = ele;

    let navWrap = domEleGen.makeEle("nav", "", ["class", "nav_wrap"]);
    
    let pageTitle = domEleGen.makeEle("div", "", ["class", "page_title"]);
    navWrap.appendChild(pageTitle);

    let pageTitleContent = domEleGen.makeEle("h1", "Form Validation Project");
    pageTitle.appendChild(pageTitleContent);

    let creditBox = domEleGen.makeEle("div", "", ["class", "created_box"]);
    navWrap.appendChild(creditBox);

    let pCredit = domEleGen.makeEle("p", "Created By - David T.");
    creditBox.appendChild(pCredit);

    let gitLink = "https://github.com/JoshDT900";
    let creditLink = domEleGen.makeEle("a", "", [["href", gitLink], ["target", "_blank"]]);
    let gitImgEle = domEleGen.makeEle("img", "", [["src", assetsMod.gitImg], ["alt", "git hub cat logo"]]);

    creditLink.appendChild(gitImgEle);
    creditBox.appendChild(creditLink);    
    
    return mainEle.appendChild(navWrap);
}

(() => {
    renderPage();
})();