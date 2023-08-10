"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/translate";
exports.ids = ["pages/api/translate"];
exports.modules = {

/***/ "(api)/./pages/api/translate.js":
/*!********************************!*\
  !*** ./pages/api/translate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const source = \"English\";\n    const target = \"Simplified Chinese\";\n    const system_prompt = `You will be provided with a JSON object containing a series of text segments along with their durations and offsets from the user. Translate the corrected ${source} text segments into ${target}, and return the updated JSON object with the translated text segments, while leaving the other parts of the JSON file unchanged.`;\n    const clean_prompt = `Your task is to perform the following steps: Correct any spelling and spacing mistakes in the ${source} text segments provided in the 'text' fields`;\n    const { transcript } = req.body;\n    const transcriptString = JSON.stringify(transcript);\n    // prettier-ignore\n    const payload = {\n        model: \"gpt-3.5-turbo\",\n        messages: [\n            {\n                \"role\": \"system\",\n                \"content\": system_prompt\n            },\n            {\n                \"role\": \"user\",\n                \"content\": transcriptString\n            }\n        ],\n        temperature: 0,\n        top_p: 1,\n        frequency_penalty: 0,\n        presence_penalty: 0,\n        max_tokens: 3000,\n        n: 1\n    };\n    const response = await fetch(\"https://api.openai.com/v1/chat/completions\", {\n        headers: {\n            \"Content-Type\": \"application/json\",\n            Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? \"\"}`\n        },\n        method: \"POST\",\n        body: JSON.stringify(payload)\n    });\n    const json = await response.json();\n    res.status(200).json(json);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNsYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsTUFBTUMsU0FBUztJQUNmLE1BQU1DLFNBQVM7SUFDZixNQUFNQyxnQkFBZ0IsQ0FBQywySkFBMkosRUFBRUYsT0FBTyxvQkFBb0IsRUFBRUMsT0FBTyxpSUFBaUksQ0FBQztJQUUxVixNQUFNRSxlQUFlLENBQUMsOEZBQThGLEVBQUVILE9BQU8sNENBQTRDLENBQUM7SUFFMUssTUFBTSxFQUFFSSxVQUFVLEVBQUUsR0FBR04sSUFBSU8sSUFBSTtJQUMvQixNQUFNQyxtQkFBbUJDLEtBQUtDLFNBQVMsQ0FBQ0o7SUFDeEMsa0JBQWtCO0lBRWxCLE1BQU1LLFVBQVU7UUFDZEMsT0FBTztRQUNQQyxVQUFVO1lBQ1I7Z0JBQUUsUUFBUTtnQkFBVSxXQUFXVDtZQUFjO1lBQzdDO2dCQUFFLFFBQVE7Z0JBQVEsV0FBV0k7WUFBaUI7U0FDL0M7UUFDRE0sYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLG1CQUFtQjtRQUNuQkMsa0JBQWtCO1FBQ2xCQyxZQUFZO1FBQ1pDLEdBQUc7SUFDTDtJQUVBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSw4Q0FBOEM7UUFDekVDLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEJDLGVBQWUsQ0FBQyxPQUFPLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYyxJQUFJLEdBQUcsQ0FBQztRQUM3RDtRQUNBQyxRQUFRO1FBQ1JwQixNQUFNRSxLQUFLQyxTQUFTLENBQUNDO0lBQ3ZCO0lBRUEsTUFBTWlCLE9BQU8sTUFBTVIsU0FBU1EsSUFBSTtJQUNoQzNCLElBQUk0QixNQUFNLENBQUMsS0FBS0QsSUFBSSxDQUFDQTtBQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3l0LWNjdHIvLi9wYWdlcy9hcGkvdHJhbnNsYXRlLmpzPzNiOWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBzb3VyY2UgPSBcIkVuZ2xpc2hcIjtcbiAgY29uc3QgdGFyZ2V0ID0gXCJTaW1wbGlmaWVkIENoaW5lc2VcIjtcbiAgY29uc3Qgc3lzdGVtX3Byb21wdCA9IGBZb3Ugd2lsbCBiZSBwcm92aWRlZCB3aXRoIGEgSlNPTiBvYmplY3QgY29udGFpbmluZyBhIHNlcmllcyBvZiB0ZXh0IHNlZ21lbnRzIGFsb25nIHdpdGggdGhlaXIgZHVyYXRpb25zIGFuZCBvZmZzZXRzIGZyb20gdGhlIHVzZXIuIFRyYW5zbGF0ZSB0aGUgY29ycmVjdGVkICR7c291cmNlfSB0ZXh0IHNlZ21lbnRzIGludG8gJHt0YXJnZXR9LCBhbmQgcmV0dXJuIHRoZSB1cGRhdGVkIEpTT04gb2JqZWN0IHdpdGggdGhlIHRyYW5zbGF0ZWQgdGV4dCBzZWdtZW50cywgd2hpbGUgbGVhdmluZyB0aGUgb3RoZXIgcGFydHMgb2YgdGhlIEpTT04gZmlsZSB1bmNoYW5nZWQuYDtcblxuICBjb25zdCBjbGVhbl9wcm9tcHQgPSBgWW91ciB0YXNrIGlzIHRvIHBlcmZvcm0gdGhlIGZvbGxvd2luZyBzdGVwczogQ29ycmVjdCBhbnkgc3BlbGxpbmcgYW5kIHNwYWNpbmcgbWlzdGFrZXMgaW4gdGhlICR7c291cmNlfSB0ZXh0IHNlZ21lbnRzIHByb3ZpZGVkIGluIHRoZSAndGV4dCcgZmllbGRzYDtcblxuICBjb25zdCB7IHRyYW5zY3JpcHQgfSA9IHJlcS5ib2R5O1xuICBjb25zdCB0cmFuc2NyaXB0U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodHJhbnNjcmlwdCk7XG4gIC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgIG1lc3NhZ2VzOiBbXG4gICAgICB7IFwicm9sZVwiOiBcInN5c3RlbVwiLCBcImNvbnRlbnRcIjogc3lzdGVtX3Byb21wdCB9LFxuICAgICAgeyBcInJvbGVcIjogXCJ1c2VyXCIsIFwiY29udGVudFwiOiB0cmFuc2NyaXB0U3RyaW5nIH0sXG4gICAgXSxcbiAgICB0ZW1wZXJhdHVyZTogMCxcbiAgICB0b3BfcDogMSxcbiAgICBmcmVxdWVuY3lfcGVuYWx0eTogMCxcbiAgICBwcmVzZW5jZV9wZW5hbHR5OiAwLFxuICAgIG1heF90b2tlbnM6IDMwMDAsXG4gICAgbjogMSxcbiAgfTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9jaGF0L2NvbXBsZXRpb25zXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSA/PyBcIlwifWAsXG4gICAgfSxcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICB9KTtcblxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbihqc29uKTtcbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwic291cmNlIiwidGFyZ2V0Iiwic3lzdGVtX3Byb21wdCIsImNsZWFuX3Byb21wdCIsInRyYW5zY3JpcHQiLCJib2R5IiwidHJhbnNjcmlwdFN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXlsb2FkIiwibW9kZWwiLCJtZXNzYWdlcyIsInRlbXBlcmF0dXJlIiwidG9wX3AiLCJmcmVxdWVuY3lfcGVuYWx0eSIsInByZXNlbmNlX3BlbmFsdHkiLCJtYXhfdG9rZW5zIiwibiIsInJlc3BvbnNlIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm1ldGhvZCIsImpzb24iLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/translate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/translate.js"));
module.exports = __webpack_exports__;

})();