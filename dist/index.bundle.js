"use strict";
(self["webpackChunktop_formvalidation"] = self["webpackChunktop_formvalidation"] || []).push([["index"],{

/***/ "./node_modules/dom_gen_cosbert/index.js":
/*!***********************************************!*\
  !*** ./node_modules/dom_gen_cosbert/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domEleGen": () => (/* binding */ domEleGen)
/* harmony export */ });
const domEleGen = (function() {

    const makeEle = function() {
        let argArr = [...arguments];

        if (typeof(argArr[0]) != 'string') {
            return alert("First argument must be a valid HTML element in string format. Example: 'div' ");
        } else if (typeof(argArr[1]) != "string" && argArr.length === 2) {
            return alert("Invalid Argument Type. The second argument must be a string");
        } else if (typeof(argArr[2]) != "object" && argArr.length === 3) {
            return alert("Invalid Arg. Third argument accepts an array or a nested array of arrays.");
        } else if (argArr.length > 3) {
            return alert("Too many arguments.");
        }

        let newEle = document.createElement(`${argArr[0]}`);
        newEle.textContent = argArr[1];
        
        if (argArr.length === 3 && typeof(argArr[2][0]) === "object"){
            for (let i in argArr[2]){                
                let tempArr = [...argArr[2][i]];

                newEle.setAttribute(...tempArr);
            }
        } else if (typeof(argArr[2]) === "object") {
            newEle.setAttribute(...argArr[2]);
        }
        

        return newEle;   
    }

    return { makeEle };
})();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom_gen_cosbert */ "./node_modules/dom_gen_cosbert/index.js");


console.log(dom_gen_cosbert__WEBPACK_IMPORTED_MODULE_0__.domEleGen.makeEle("div"));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSwrQ0FBK0MsVUFBVTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDakMyQzs7QUFFNUMsWUFBWSw4REFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfZm9ybXZhbGlkYXRpb24vLi9ub2RlX21vZHVsZXMvZG9tX2dlbl9jb3NiZXJ0L2luZGV4LmpzIiwid2VicGFjazovL3RvcF9mb3JtdmFsaWRhdGlvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkb21FbGVHZW4gPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBtYWtlRWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhcmdBcnIgPSBbLi4uYXJndW1lbnRzXTtcblxuICAgICAgICBpZiAodHlwZW9mKGFyZ0FyclswXSkgIT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBhbGVydChcIkZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSB2YWxpZCBIVE1MIGVsZW1lbnQgaW4gc3RyaW5nIGZvcm1hdC4gRXhhbXBsZTogJ2RpdicgXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZihhcmdBcnJbMV0pICE9IFwic3RyaW5nXCIgJiYgYXJnQXJyLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiSW52YWxpZCBBcmd1bWVudCBUeXBlLiBUaGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mKGFyZ0FyclsyXSkgIT0gXCJvYmplY3RcIiAmJiBhcmdBcnIubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJJbnZhbGlkIEFyZy4gVGhpcmQgYXJndW1lbnQgYWNjZXB0cyBhbiBhcnJheSBvciBhIG5lc3RlZCBhcnJheSBvZiBhcnJheXMuXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ0Fyci5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoXCJUb28gbWFueSBhcmd1bWVudHMuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7YXJnQXJyWzBdfWApO1xuICAgICAgICBuZXdFbGUudGV4dENvbnRlbnQgPSBhcmdBcnJbMV07XG4gICAgICAgIFxuICAgICAgICBpZiAoYXJnQXJyLmxlbmd0aCA9PT0gMyAmJiB0eXBlb2YoYXJnQXJyWzJdWzBdKSA9PT0gXCJvYmplY3RcIil7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGFyZ0FyclsyXSl7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCB0ZW1wQXJyID0gWy4uLmFyZ0FyclsyXVtpXV07XG5cbiAgICAgICAgICAgICAgICBuZXdFbGUuc2V0QXR0cmlidXRlKC4uLnRlbXBBcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZihhcmdBcnJbMl0pID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBuZXdFbGUuc2V0QXR0cmlidXRlKC4uLmFyZ0FyclsyXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIG5ld0VsZTsgICBcbiAgICB9XG5cbiAgICByZXR1cm4geyBtYWtlRWxlIH07XG59KSgpO1xuXG5leHBvcnQgeyBkb21FbGVHZW4gfTsiLCJpbXBvcnQgeyBkb21FbGVHZW4gfSBmcm9tIFwiZG9tX2dlbl9jb3NiZXJ0XCI7XG5cbmNvbnNvbGUubG9nKGRvbUVsZUdlbi5tYWtlRWxlKFwiZGl2XCIpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=