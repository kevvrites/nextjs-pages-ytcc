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
exports.id = "pages/api/fetch";
exports.ids = ["pages/api/fetch"];
exports.modules = {

/***/ "youtube-transcript":
/*!*************************************!*\
  !*** external "youtube-transcript" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("youtube-transcript");

/***/ }),

/***/ "(api)/./pages/api/fetch.js":
/*!****************************!*\
  !*** ./pages/api/fetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var youtube_transcript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! youtube-transcript */ \"youtube-transcript\");\n/* harmony import */ var youtube_transcript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(youtube_transcript__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fetchTranscript = async (videoURL)=>{\n    try {\n        const transcript = await youtube_transcript__WEBPACK_IMPORTED_MODULE_0__.YoutubeTranscript.fetchTranscript(videoURL);\n        return transcript;\n    } catch (error) {\n        throw new Error(\"Error fetching transcript\");\n    }\n};\nasync function handler(req, res) {\n    const { videoURL } = req.query;\n    if (!videoURL || videoURL === \"\") {\n        return res.status(400).json({\n            error: \"Video URL is required.\"\n        });\n    }\n    try {\n        if (!isValidYouTubeURL(videoURL)) {\n            return res.status(400).json({\n                error: \"Invalid YouTube URL format.\"\n            });\n        }\n        const transcript = await fetchTranscript(videoURL);\n        if (!transcript || transcript.length === 0) {\n            return res.status(404).json({\n                error: \"No transcript data available for the provided video URL.\"\n            });\n        }\n        res.status(200).json(transcript);\n    } catch (error) {\n        console.error(\"Error fetching transcript:\", error);\n        res.status(500).json({\n            error: \"Error fetching transcript\"\n        });\n    }\n}\nfunction isValidYouTubeURL(url) {\n    const pattern = /^(https?:\\/\\/)?(www\\.)?(youtube\\.com|youtu\\.be)\\//;\n    return pattern.test(url);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmV0Y2guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBRXZELE1BQU1DLGtCQUFrQixPQUFPQztJQUM3QixJQUFJO1FBQ0YsTUFBTUMsYUFBYSxNQUFNSCxpRUFBaUJBLENBQUNDLGVBQWUsQ0FBQ0M7UUFDM0QsT0FBT0M7SUFDVCxFQUFFLE9BQU9DLE9BQU87UUFDZCxNQUFNLElBQUlDLE1BQU07SUFDbEI7QUFDRjtBQUVlLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxNQUFNLEVBQUVOLFFBQVEsRUFBRSxHQUFHSyxJQUFJRSxLQUFLO0lBRTlCLElBQUksQ0FBQ1AsWUFBWUEsYUFBYSxJQUFJO1FBQ2hDLE9BQU9NLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRVAsT0FBTztRQUF5QjtJQUNoRTtJQUVBLElBQUk7UUFDRixJQUFHLENBQUNRLGtCQUFrQlYsV0FBVztZQUMvQixPQUFPTSxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFUCxPQUFPO1lBQTZCO1FBQ3BFO1FBRUEsTUFBTUQsYUFBYSxNQUFNRixnQkFBZ0JDO1FBRXpDLElBQUksQ0FBQ0MsY0FBY0EsV0FBV1UsTUFBTSxLQUFLLEdBQUc7WUFDMUMsT0FBT0wsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRVAsT0FBTztZQUEwRDtRQUNqRztRQUVBSSxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUjtJQUN2QixFQUFFLE9BQU9DLE9BQU87UUFDZFUsUUFBUVYsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUNJLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRVAsT0FBTztRQUE0QjtJQUM1RDtBQUNGO0FBRUEsU0FBU1Esa0JBQWtCRyxHQUFHO0lBQzVCLE1BQU1DLFVBQVU7SUFDaEIsT0FBT0EsUUFBUUMsSUFBSSxDQUFDRjtBQUN0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3l0LWNjdHIvLi9wYWdlcy9hcGkvZmV0Y2guanM/ZjI5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBZb3V0dWJlVHJhbnNjcmlwdCB9IGZyb20gXCJ5b3V0dWJlLXRyYW5zY3JpcHRcIjtcblxuY29uc3QgZmV0Y2hUcmFuc2NyaXB0ID0gYXN5bmMgKHZpZGVvVVJMKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdHJhbnNjcmlwdCA9IGF3YWl0IFlvdXR1YmVUcmFuc2NyaXB0LmZldGNoVHJhbnNjcmlwdCh2aWRlb1VSTCk7XG4gICAgcmV0dXJuIHRyYW5zY3JpcHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdHJhbnNjcmlwdFwiKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7IHZpZGVvVVJMIH0gPSByZXEucXVlcnk7XG5cbiAgaWYgKCF2aWRlb1VSTCB8fCB2aWRlb1VSTCA9PT0gXCJcIikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIlZpZGVvIFVSTCBpcyByZXF1aXJlZC5cIiB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYoIWlzVmFsaWRZb3VUdWJlVVJMKHZpZGVvVVJMKSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiSW52YWxpZCBZb3VUdWJlIFVSTCBmb3JtYXQuXCJ9KVxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zY3JpcHQgPSBhd2FpdCBmZXRjaFRyYW5zY3JpcHQodmlkZW9VUkwpO1xuXG4gICAgaWYgKCF0cmFuc2NyaXB0IHx8IHRyYW5zY3JpcHQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogXCJObyB0cmFuc2NyaXB0IGRhdGEgYXZhaWxhYmxlIGZvciB0aGUgcHJvdmlkZWQgdmlkZW8gVVJMLlwifSlcbiAgICB9XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih0cmFuc2NyaXB0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdHJhbnNjcmlwdDpcIiwgZXJyb3IpXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJFcnJvciBmZXRjaGluZyB0cmFuc2NyaXB0XCIgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZFlvdVR1YmVVUkwodXJsKSB7XG4gIGNvbnN0IHBhdHRlcm4gPSAvXihodHRwcz86XFwvXFwvKT8od3d3XFwuKT8oeW91dHViZVxcLmNvbXx5b3V0dVxcLmJlKVxcLy87XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodXJsKVxufSJdLCJuYW1lcyI6WyJZb3V0dWJlVHJhbnNjcmlwdCIsImZldGNoVHJhbnNjcmlwdCIsInZpZGVvVVJMIiwidHJhbnNjcmlwdCIsImVycm9yIiwiRXJyb3IiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwiaXNWYWxpZFlvdVR1YmVVUkwiLCJsZW5ndGgiLCJjb25zb2xlIiwidXJsIiwicGF0dGVybiIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/fetch.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fetch.js"));
module.exports = __webpack_exports__;

})();