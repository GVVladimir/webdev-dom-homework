/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteComments: () => (/* binding */ deleteComments),\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   postComments: () => (/* binding */ postComments),\n/* harmony export */   setNameUser: () => (/* binding */ setNameUser),\n/* harmony export */   setToken: () => (/* binding */ setToken),\n/* harmony export */   token: () => (/* binding */ token)\n/* harmony export */ });\nconst host = `https://wedev-api.sky.pro/api/v2/:grishaev-vladimir/comments/`\n\n\nlet token;\n\nconst setToken = (newToken) => {\n  token = newToken;\n};\n\nlet name;\n\nconst setNameUser = (newName) => {\n  name = newName;\n}\n\nfunction getComments() {\n    return fetch(host,\n  {\n    method: \"GET\",\n    headers:{\n      Authorization:`Bearer ${token}` ,\n      }\n    })\n   .then((response) => {\n    return response.json();\n   });  \n}\n\n\nfunction deleteComments({ id }) {\n  return fetch(host + id,\n{\n  method: \"DELETE\",\n  headers:{\n    Authorization:`Bearer ${token}` ,\n    }\n  })\n  \n .then((response) => {\n  return response.json();\n });  \n}\n\nfunction postComments({text, name}) {\n   return fetch(host,{\n  method: \"POST\",\n  headers:{\n    Authorization:`Bearer ${token}` ,\n    },\n    body: JSON.stringify({    \n    text: text,\n    name: name,  \n    forceError: true,    \n  }),\n  \n})\n.then((response) => { \n   if (response.status === 500){\n    throw new Error ('Сервер упал')   \n  } else {\n    return response.json()\n  }\n})\n}\n\nfunction login({login, password}) {\n  return fetch('https://wedev-api.sky.pro/api/user/login',{\n method: \"POST\",\n body: JSON.stringify({\n   login,\n   password,\n }),\n}).then((response) => {\n  return response.json();\n})\n}\n\n//# sourceURL=webpack://webdev-dom-homework-1/./api.js?");

/***/ }),

/***/ "./login.js":
/*!******************!*\
  !*** ./login.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLogin: () => (/* binding */ renderLogin)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./render.js\");\n\n// import { newLink } from \"./main.js\";\n\n\n\n\n\n const renderLogin = ({ comments }) => {\n    const appElement = document.getElementById('app')\n    const loginHTML = `\n<div class=\"container\" id=\"enter-container\">\n    <div id=\"entrance\" class=\"add-form entrance\">\n        <h3 class=\"comment-header\">Форма ввода</h3>\n        <input id=\"input-login\" class=\" logUser\" type=\"text\" placeholder=\"Введите логин\">\n        <input id=\"input-password\" class=\" logUser\" type=\"text\" placeholder=\"Введите пароль\">\n        <button id=\"enter-form-button\" class=\"add-form-button\">Войти</button>\n        <p class =\"add-form-registration\" id=\"add-form-registration\">Зарегистрироваться</p>\n    </div>\n\n    <div id=\"registration\" class=\"add-form registration\" style=\"display:none;\">\n        <h3 class=\"comment-header\">Ругистрация</h3>\n        <input class=\" logUser\" type=\"text\" placeholder=\"Введите имя\">\n        <input class=\" logUser\" type=\"text\" placeholder=\"Введите логин\">\n        <input class=\" logUser\" type=\"text\" placeholder=\"Введите пароль\">\n        <button class=\"add-form-button\">Зарегистрироваться</button>\n        <p class =\"add-form-registration\" id=\"add-form-registratio\">Войти</p>\n    </div>\n</div>`;\n\nappElement.innerHTML = loginHTML;\n\n// кнопка войти\nconst enterButton = document.getElementById('enter-form-button');\n// строка логин\nconst inpunLoginElement = document.getElementById('input-login');\n// строка пароль\nconst inputPasswordElement = document.getElementById('input-password');\n// блок войти\nconst entranceElement = document.getElementById('entrance');\n// блок регистрация\nconst registrtionElement = document.getElementById('registration');\n// регистрация сноска\nconst registrtionClickElement = document.getElementById('add-form-registration');\n// вход сноска\nconst entranceClickElement = document.getElementById('add-form-registratio');\n\n\nfunction clickRegistration() {\n               \n    registrtionClickElement.addEventListener('click',() => {\n       \n            entranceElement.style.display = 'none';\n             registrtionElement.style.display = 'flex';\n             \n   })\n }\n        clickRegistration()\n\nfunction clickEntrance() {\n            \n    entranceClickElement.addEventListener('click',() => {\n    \n        entranceElement.style.display = 'flex';\n        registrtionElement.style.display = 'none';\n            \n})\n}\nclickEntrance()\n\n\n    enterButton.addEventListener('click', () => {\n        ;(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.login)({\n            login: inpunLoginElement.value,\n            password:inputPasswordElement.value,\n        }).then((responsData) => {\n         ;(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setToken)(responsData.user.token);\n            console.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.token);\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.setNameUser)(responsData.user.name);\n        console.log(_api_js__WEBPACK_IMPORTED_MODULE_0__.name);\n\n        })\n        .then(() => {\n        //  newLink()\n        \n        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderComments)({ comments })\n        \n        })\n        \n });\n\n};\n\n//# sourceURL=webpack://webdev-dom-homework-1/./login.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonEctiv: () => (/* binding */ buttonEctiv),\n/* harmony export */   newLink: () => (/* binding */ newLink)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./render.js\");\n/* harmony import */ var _renderOld_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderOld.js */ \"./renderOld.js\");\n\n\n\n\n\n\nlet comments = [\n  // {\n  //     name:'Глеб Фокин ',\n  //     data: `12.02.22 12:18`,\n  //     comment: 'Это будет первый комментарий на этой странице',\n  //     likesNum: '3',\n  //     isLike: false,\n  //     isEdit: true,\n  //     button:'Редактировать'\n  //     },\n  //     {\n  //     name:'Варвара Н.',\n  //     data: `13.02.22 19:22`,\n  //     comment: 'Мне нравится как оформлена эта страница! ❤',\n  //     likesNum: '75',\n  //     isLike: false,\n  //     isEdit: true,\n  //     button:'Редактировать'\n  //     } \n  \n];\n\nconst textElementCount = document.getElementById('text-replacement')\n\n\ntextElementCount.style.display = 'block';\n\nfunction newLink() { \n\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)().then((responseData) => {\n      comments = responseData.comments;\n    (0,_renderOld_js__WEBPACK_IMPORTED_MODULE_2__.renderStart)({ comments })   \n      return true;\n   })\n    .then(() => {\n      if(!_api_js__WEBPACK_IMPORTED_MODULE_0__.token){\n        (0,_renderOld_js__WEBPACK_IMPORTED_MODULE_2__.renderStart)({ comments })\n      } else {\n        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderComments)({ comments })\n      }\n       \n      textElementCount.style.display = 'none'\n   })\n     \n  };\n// newLink()\n\n// не активная кнопка\n\n\n\nnewLink()\n\n\nfunction buttonEctiv ()  {\n  const butonWriteElement = document.getElementById('add-form-button');\n  const commentNameElevent = document.getElementById('add-form-name');\nconst commentTextElement = document.getElementById('add-form-text');\n    if (commentNameElevent.value && commentTextElement.value){\n    butonWriteElement.disabled = false;\n    } else {\n    butonWriteElement.disabled = true;\n    };\n  };\n\n\n\n//# sourceURL=webpack://webdev-dom-homework-1/./main.js?");

/***/ }),

/***/ "./render.js":
/*!*******************!*\
  !*** ./render.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderComments: () => (/* binding */ renderComments)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./main.js\");\n\n\n\n\n\n\n\nconst renderComments = ({ comments }) => {\n\n  const appElement = document.getElementById('app');\n  \n    const commentsHtml = comments.map((comment, el) => {\n     \n        return `<li data-el=\"${el}\" id=\"comment\" class=\"comment\" >\n         <div class=\"comment-header\">\n          <div>${comment.author.name}</div>\n          <div>${new Date().toLocaleDateString().slice(0, 6) + new Date().toLocaleDateString().slice(8) + ' ' + new Date().toLocaleTimeString().slice(0, -3)}</div>\n        </div>\n        <div data-el=\"${el}\" class=\"comment-body\" >\n          <div   class=\"comment-text\">${comment.text}</div>\n        </div>\n        <div class=\"comment-footer\" >\n        <button data-id=\"${comment.id}\" class=\"add-form-button delete-button\" id=\"add-form-delete\" >Удалить</button>\n          <div class=\"likes\">          \n            <span   class=\"likes-counter\">${comment.likes}</span>\n            <button  data-el=\"${el}\" class=\"like-button ${comment.isLiked ? \"-active-like\" : \"\"}\"></button>\n          </div>\n        </div>\n      </li>`\n    }).join('');\n\n   \n    let appHTML = `<div class=\"container\">\n    <div id=\"text-replacement\" style=\"display: none; color: white;\">Подождите немного</div>\n    <ul id=\"comments\" class=\"comments\">${commentsHtml}\n   <!-- рендерится из js -->\n    </ul>\n    <br>\n    \n    <div class = \"loading\" id=\"loading\" style =\"display:none; color:white;\">Комментарий добавляется...</div>\n    <div class=\"add-form\" id=\"add-form\">\n      <input id=\"add-form-name\"\n        type=\"text\" readonly\n        class=\"add-form-name\"\n        placeholder=\"Введите Ваше имя\" value=\"${_api_js__WEBPACK_IMPORTED_MODULE_0__.name} \"/>\n      <textarea\n        type=\"textarea\"\n        class=\"add-form-text\"\n        placeholder=\"Введите ваш коментарий\"\n        rows=\"4\"\n        id=\"add-form-text\"\n      ></textarea>\n      \n      <div class=\"add-form-row\">\n      \n        <button  class=\"add-form-button\" id=\"add-form-button-delete\">Удалить</button>\n        <button class=\"add-form-button\" id=\"add-form-button\">Написать</button>\n      </div>\n    </div>\n  </div>\n    `;\n\n        \n    // счетчик лайков\n\n\n   \n       appElement.innerHTML = appHTML;\n\n    function calculLikeSum() {\n        const likebuttons = document.querySelectorAll('.like-button');\n\n        for (const likebutton of likebuttons) {\n            likebutton.addEventListener('click', (event) => {\n                event.stopPropagation();\n                const el = likebutton.dataset.el;\n\n                if (comments[el].isLiked) {\n                    comments[el].likes--;\n                    comments[el].isLiked = false;\n                } else {\n                    comments[el].likes++;\n                    comments[el].isLiked = true;\n                }\n\n                renderComments({ comments });\n            });\n        };\n    }\n    calculLikeSum();\n\n\n// ответ на комметарий\n      const answerComment = () => {\n        const textComments = document.querySelectorAll('.comment')\n          for (const textComment of textComments){\n          textComment.addEventListener('click', () => {\n            \n            const el = textComment.dataset.el;\n            commentTextElement.value = `${'>' + ' ' + comments[el].text + '  ' + comments[el].author.name+ ':' + '  '}`;\n           \n          }) \n        }\n      }\n    answerComment();\n\n    const deletButtonElements = document.querySelectorAll(`.delete-button`);\n    for(const deletButtonElement of deletButtonElements){\n      deletButtonElement.addEventListener('click', (el) => {\n        el.stopPropagation();\n\n        const id = deletButtonElement.dataset.id;\n\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.deleteComments)({ id }).then(() => {\n          // renderComments({ comments });\n          (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.newLink)();\n        });\n        });\n       \n      };\n\n\n      const butonWriteElement = document.getElementById('add-form-button');\n      const commentNameElevent = document.getElementById('add-form-name');\n      const commentTextElement = document.getElementById('add-form-text');\n      const commentElement = document.getElementById('add-form')\n      const elementTextLoad = document.getElementById('loading')\n    \n      \n   \n      // const commentTextElement = document.getElementById('add-form-text');\n      // // const textElementCount = document.getElementById('text-replacement')\n\n          \n      \nbutonWriteElement.addEventListener('click', () => {\n\n  //  при загрузки появляется надпись обработка\n  \n    commentElement.style.display = 'none';\n    elementTextLoad.style.display = 'block';\n   \n   const newPost = () => {\n     (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.postComments)({\n      text:commentTextElement.value,\n      name:commentNameElevent.value\n    })\n    .then(() => {  \n       return (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.newLink)()\n    })\n    .then (() => {\n      commentElement.style.display = 'flex';\n      elementTextLoad.style.display = 'none';\n    \n      commentNameElevent.value = '';\n      commentTextElement.value = '';\n    })\n    .catch ((error) => {\n      commentElement.style.display = 'flex';\n      elementTextLoad.style.display = 'none';\n      butonWriteElement.disabled = false;\n      alert ('Что-то пошло не так');\n      console.warn(error);\n      } )\n  }\n  newPost();\n  (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.buttonEctiv)()\n  renderComments({ comments, newLink: _main_js__WEBPACK_IMPORTED_MODULE_1__.newLink });\n  \n  butonWriteElement.disabled = true;\n\n  \n  \n  });\n\n  commentNameElevent.addEventListener('input', _main_js__WEBPACK_IMPORTED_MODULE_1__.buttonEctiv);\n  commentTextElement.addEventListener('input', _main_js__WEBPACK_IMPORTED_MODULE_1__.buttonEctiv);\n\n  };\n\n    \n\n    \n\n\n//# sourceURL=webpack://webdev-dom-homework-1/./render.js?");

/***/ }),

/***/ "./renderOld.js":
/*!**********************!*\
  !*** ./renderOld.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderStart: () => (/* binding */ renderStart)\n/* harmony export */ });\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.js */ \"./login.js\");\n\n\n\n\n const renderStart = ({ comments }) => {\n  \n    const appElement = document.getElementById('app')\n    const commentsHtml = comments.map((comment, el) => {\n     \n      return `<li data-el=\"${el}\" id=\"comment\" class=\"comment\" >\n       <div class=\"comment-header\">\n        <div>${comment.author.name}</div>\n        <div>${new Date().toLocaleDateString().slice(0, 6) + new Date().toLocaleDateString().slice(8) + ' ' + new Date().toLocaleTimeString().slice(0, -3)}</div>\n      </div>\n      <div data-el=\"${el}\" class=\"comment-body\" >\n        <div   class=\"comment-text\">${comment.text}</div>\n      </div>\n      <div class=\"comment-footer\" >\n      <button data-id=\"${comment.id}\" class=\"add-form-button delete-button\" id=\"add-form-delete\" >Удалить</button>\n        <div class=\"likes\">          \n          <span   class=\"likes-counter\">${comment.likes}</span>\n          <button  data-el=\"${el}\" class=\"like-button ${comment.isLiked ? \"-active-like\" : \"\"}\"></button>\n        </div>\n      </div>\n    </li>`\n  }).join('');\n    \n  \n  const appHTML = `<div class=\"container\"><ul id=\"comments\" class=\"comments\">${commentsHtml}\n   </ul>\n   <br>\n   <div>Что бы добавить  коментарий, <a class=\"link-enter\" id=\"link-enter\">авторизуйтесь</a> </div></div>`\n\n   appElement.innerHTML = appHTML;\n\n   const linkAuthorization = document.querySelector('#link-enter');\n   linkAuthorization.addEventListener('click', () => {\n    \n     (0,_login_js__WEBPACK_IMPORTED_MODULE_0__.renderLogin)({comments})\n\n   });\n} \n\n\n\n//# sourceURL=webpack://webdev-dom-homework-1/./renderOld.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;