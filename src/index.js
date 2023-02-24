import css from "./style.css"
import { domEleGen } from "dom_gen_cosbert";
import { assetsMod } from "./assets.js";
import { emailVerify, formHandle } from "./pagecontrol";

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
    formLocation();
    formPassword();
    submitBox();

    formEle.addEventListener("submit", formHandle);

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
            eleAtr: [["type", "email"], ["id", "email"], ["name", "email"], ["class", "form_item"], ["minlength", "8"], ["required", ""]],
            eleText: ""
        },
        {
            eleType: "span",
            eleAtr: [["class", "error"], ["aria-live", "polite"]],
            eleText: ""
        }
    ];

    for (let i in eleObj){
        let newEle = domEleGen.makeEle(eleObj[i].eleType, eleObj[i].eleText, eleObj[i].eleAtr);
        emailBox.appendChild(newEle);
    }
        
    return;
}

let formLocation = () => {
    let locationWrap = document.querySelector(".location_wrap");

    let eleArr = ["country_box", "zipcode_box"];
    for (let i in eleArr){
        let newEle = domEleGen.makeEle("div", "", ["class", eleArr[i]]);
        locationWrap.appendChild(newEle);
    }

    formLocCountry();
    formLocZip();

    return;
}

let formLocCountry = () => {
    let countryBox = document.querySelector(".country_box");

    let labelEle = domEleGen.makeEle("label", "Select Your Country", ["for", "country"]);
    countryBox.appendChild(labelEle);

    let selectArr = [["id", "country"], ["name", "country"], ["class", "form_item"], ["requred", ""]];
    let selectEle = domEleGen.makeEle("select", "", selectArr);
    countryBox.appendChild(selectEle);

    let countryArr = ["Christmas Island", "Finland", "France", "United States", "Yemen", "Zambia", "Zimbabwe"]
    for (let i in countryArr){
        let newOption = domEleGen.makeEle("option", countryArr[i], ["vlaue", countryArr[i]]);
        selectEle.appendChild(newOption);
    }

    return;
}

let formLocZip = () => {
    let zipBox = document.querySelector(".zipcode_box");

    let eleArr = ["label", "input", "span"];
    let eleText = ["Zipcode *", "", ""];
    let eleAtrib = [
        ["for", "zipcode"],
        [["type", "text"], ["name", "zipcode"], ["id", "zipcode"], ["class", "form_item"], ["required", ""]],
        [["class", "error"], ["aria-live", "polite"]]
    ];

    for (let i in eleArr){
        let newEle = domEleGen.makeEle(eleArr[i], eleText[i], eleAtrib[i]);
        zipBox.appendChild(newEle);
    }

    return;
}

let formPassword = () => {
    let passWrap = document.querySelector(".password_wrap");

    let eleClassArr = ["pass_box", "conf_pass_box"];
    for (let i in eleClassArr){
        let newDiv = domEleGen.makeEle("div", "", ["class", eleClassArr[i]]);
        passWrap.appendChild(newDiv);
    }

    formPassBox();
    formPassConf();

    return;
}

let formPassBox = () => {
    let passBox = document.querySelector(".pass_box");

    let eleArr = ["label", "input", "span"];
    let eleText = ["Create a password *", "", ""];
    let eleAtrib = [
        ["for", "password"],
        [["type", "text"], ["name", "password"], ["id", "password"], ["class", "form_item"], ["required", ""]],
        [["class", "error"], ["aria-live", "polite"]]
    ];

    for (let i in eleArr){
        let newEle = domEleGen.makeEle(eleArr[i], eleText[i], eleAtrib[i]);
        passBox.appendChild(newEle);
    }

    return;
}

let formPassConf = () => {
    let passConf = document.querySelector(".conf_pass_box");

    let eleArr = ["label", "input", "span"];
    let eleText = ["Confirm your password *", "", ""];
    let eleAtrib = [
        ["for", "pass_confirm"],
        [["type", "text"], ["name", "pass_confirm"], ["id", "pass_confirm"], ["class", "form_item"], ["required", ""]],
        [["class", "error"], ["aria-live", "polite"]]
    ];

    for (let i in eleArr){
        let newEle = domEleGen.makeEle(eleArr[i], eleText[i], eleAtrib[i]);
        passConf.appendChild(newEle);
    }

    return;
}

let submitBox = () => {
    let subWrap = document.querySelector(".submit_wrap");
    
    let subBox = domEleGen.makeEle("div", "", ["class", "submit_box"]);
    subWrap.appendChild(subBox);

    let eleArr = ["input", "span"];
    let eleAtrib = [[["type", "submit"], ["value", "Submit"]], [["class", "error"], ["aria-live", "polite"]]];

    for (let i in eleArr){
        let newEle = domEleGen.makeEle(eleArr[i], "", eleAtrib[i]);
        subBox.appendChild(newEle);
    }

    return;
}

let emailEvent = () => {
    let emailInput = document.querySelector('input[name="email"]');

    emailInput.addEventListener("input", (event) => {
        emailVerify(event);
    });

    return;
}

(() => {
    renderPage();
    emailEvent();
})();