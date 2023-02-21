import css from "./style.css"
import { domEleGen } from "dom_gen_cosbert";
import { assetsMod } from "./assets.js";

let renderPage = () => {
    let bodyEle = document.querySelector("body");

    navBar(bodyEle);
    formEle(bodyEle);

    return;
}

let navBar = (ele) => {
    let bodyEle = ele;

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
    creditBox.appendChild(creditLink);    
    
    let gitImgEle = domEleGen.makeEle("img", "", [["src", assetsMod.gitImg], ["alt", "git hub cat logo"]]);
    creditLink.appendChild(gitImgEle);

    
    return bodyEle.appendChild(navWrap);
}

let formEle = (ele) => {
    let bodyEle = ele;

    let mainEle = domEleGen.makeEle("main");
    bodyEle.appendChild(mainEle);

    let formEle = domEleGen.makeEle("form", "", ["novalidate", ""]);
    mainEle.appendChild(formEle);

    let formWraps = ["form_head_wrap", "email_wrap", "location_wrap", "password_wrap", "submit_wrap"];

    for (let i in formWraps){
        let newDiv = domEleGen.makeEle("div", "", ["class", `${formWraps[i]}`]);
        formEle.appendChild(newDiv);
    }

    formHead();
    formEmail();

    return;
}

let formHead = () => {
    let headWrap = document.querySelector(".form_head_wrap");

    let formText = domEleGen.makeEle("div", "", ["class", "form_text"]);
    headWrap.appendChild(formText);

    let spanEle = domEleGen.makeEle("span", 'Fields marked with a "*" are required', ["class", "required_text"]);
    formText.appendChild(spanEle);

    return;
}

let formEmail = () => {
    let emailWrap = document.querySelector(".email_wrap");

    let emailBox = domEleGen.makeEle("div", "", ["class", "email_box"]);
    emailWrap.appendChild(emailBox);

    let eleObj = [
        {
            eleType: "label",
            eleAtr: ["for", "email"],
            eleText: "Email Address *"
        },
        {
            eleType: "input",
            eleAtr: [["type", "email"], ["id", "email"], ["name", "email"], ["class", "form_item"], ["required", ""]],
            eleText: ""
        },
        {
            eleType: "span",
            eleAtr: ["class", "error"],
            eleText: ""
        }
    ]

    for (let i in eleObj){
        let newEle = domEleGen.makeEle(eleObj[i].eleType, eleObj[i].eleText, eleObj[i].eleAtr);
        emailBox.appendChild(newEle);
    }
        
    return;
}

(() => {
    renderPage();
})();