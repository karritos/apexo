(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/core/demo.ts":
/*!**************************!*\
  !*** ./src/core/demo.ts ***!
  \**************************/
/*! exports provided: loadDemoData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadDemoData\", function() { return loadDemoData; });\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n\n\n\nfunction randomInRange(minimum, maximum) {\n    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;\n}\nfunction randomDate() {\n    const now = new Date().getTime();\n    const diff = _utils__WEBPACK_IMPORTED_MODULE_2__[\"day\"] * 50;\n    return randomInRange(now - diff, now + diff);\n}\nfunction randomFromArray(array, canBeUndefined) {\n    return array[randomInRange(0, array.length - 1)];\n}\nfunction randomLabels() {\n    const labels = [\n        \"VIP\",\n        \"comprehensive\",\n        \"ideal\",\n        \"friend\",\n        \"colleague\",\n        \"co-worker\",\n        \"relative\",\n        \"TM\",\n        \"hesitant\",\n        \"introvert\",\n        \"cooperative\",\n        \"family-plan\",\n        \"religious\",\n        \"frail\",\n        \"old\"\n    ];\n    const label = randomFromArray(labels, true);\n    const result = [];\n    if (label) {\n        result.push({ text: label, type: Object(_common_components__WEBPACK_IMPORTED_MODULE_0__[\"getRandomTagType\"])(label) });\n    }\n    return result;\n}\nfunction randomAddress() {\n    const addresses = [\n        \"6031 Vest Dr, Dublin, VA, 24084\",\n        \"19638 Deer Run Rd, Warrenton, MO, 63383\",\n        \"380 32nd St NE, Paris, TX, 75460\",\n        \"5118 W Scioto Dr, Fairfield, OH, 45014\",\n        \"6250 Mirons 16.8 Ln, Rapid River, MI, 49878\",\n        \"26933 State 3 Rte #3, Watertown, NY, 13601\",\n        \"6031 Vest Dr, Dublin, VA, 24084\",\n        \"19638 Deer Run Rd, Warrenton, MO, 63383\",\n        \"380 32nd St NE, Paris, TX, 75460\",\n        \"1244 W Lebanon St, Mount Airy, NC, 27030\",\n        \"5118 W Scioto Dr, Fairfield, OH, 45014\"\n    ];\n    return randomFromArray(addresses, false);\n}\nfunction randomPhoneNumber() {\n    const addresses = [\n        \"07874653871\",\n        \"07387462516\",\n        \"07839847564\",\n        \"07184758493\",\n        \"07878362531\",\n        \"07654578123\",\n        \"07809032513\",\n        \"07800983726\",\n        \"07829477772\"\n    ];\n    return randomFromArray(addresses, false);\n}\nfunction randomCondition() {\n    const addresses = [\"filled\", \"sound\", \"compromised\", \"endo\", \"missing\"];\n    return randomFromArray(addresses, false);\n}\nfunction loadDemoData() {\n    return new Promise((resolve, reject) => {\n        const Http = new XMLHttpRequest();\n        const url = \"./demo.json\";\n        Http.open(\"GET\", url);\n        Http.send();\n        Http.onreadystatechange = function (e) {\n            if (this.readyState === 4) {\n                const demoData = JSON.parse(Http.responseText);\n                _modules__WEBPACK_IMPORTED_MODULE_1__[\"treatments\"].list = demoData.treatmentsData.treatments.list.map((x) => new _modules__WEBPACK_IMPORTED_MODULE_1__[\"Treatment\"](x));\n                _modules__WEBPACK_IMPORTED_MODULE_1__[\"setting\"].list = demoData.settingsData.settings.list.map((x) => new _modules__WEBPACK_IMPORTED_MODULE_1__[\"SettingsItem\"](x));\n                _modules__WEBPACK_IMPORTED_MODULE_1__[\"staff\"].list = demoData.staffData.staffMembers.list.map((x) => new _modules__WEBPACK_IMPORTED_MODULE_1__[\"StaffMember\"](x));\n                _modules__WEBPACK_IMPORTED_MODULE_1__[\"prescriptions\"].list = demoData.prescriptionsData.prescriptions.list.map((x) => new _modules__WEBPACK_IMPORTED_MODULE_1__[\"PrescriptionItem\"](x));\n                _modules__WEBPACK_IMPORTED_MODULE_1__[\"patients\"].list = demoData.patientsData.patients.list.map((x) => new _modules__WEBPACK_IMPORTED_MODULE_1__[\"Patient\"](x));\n                _modules__WEBPACK_IMPORTED_MODULE_1__[\"orthoCases\"].list = demoData.orthoData.cases.list.map((x) => new _modules__WEBPACK_IMPORTED_MODULE_1__[\"OrthoCase\"](x));\n                _modules__WEBPACK_IMPORTED_MODULE_1__[\"appointments\"].list = demoData.appointmentsData.appointments.list.map((x) => new _modules__WEBPACK_IMPORTED_MODULE_1__[\"Appointment\"](x));\n                _modules__WEBPACK_IMPORTED_MODULE_1__[\"patients\"].list.forEach((patient, i) => {\n                    _modules__WEBPACK_IMPORTED_MODULE_1__[\"patients\"].list[i].labels = randomLabels();\n                    _modules__WEBPACK_IMPORTED_MODULE_1__[\"patients\"].list[i].address = randomAddress();\n                    _modules__WEBPACK_IMPORTED_MODULE_1__[\"patients\"].list[i].phone = randomPhoneNumber();\n                    _modules__WEBPACK_IMPORTED_MODULE_1__[\"patients\"].list[i].email =\n                        _modules__WEBPACK_IMPORTED_MODULE_1__[\"patients\"].list[i].name.toLowerCase().replace(/\\W/g, \"\") +\n                            \"@gmail.com\";\n                    _modules__WEBPACK_IMPORTED_MODULE_1__[\"patients\"].list[i].birthYear =\n                        Math.floor(Math.random() * 49) + 12;\n                    _modules__WEBPACK_IMPORTED_MODULE_1__[\"patients\"].list[i].teeth.forEach((x, ti) => {\n                        if (Math.floor(Math.random() * 49) + 12 < 35) {\n                            _modules__WEBPACK_IMPORTED_MODULE_1__[\"patients\"].list[i].teeth[ti].condition = randomCondition();\n                        }\n                    });\n                });\n                _modules__WEBPACK_IMPORTED_MODULE_1__[\"staff\"].list.forEach((member, i) => {\n                    _modules__WEBPACK_IMPORTED_MODULE_1__[\"staff\"].list[i].phone = randomPhoneNumber();\n                    _modules__WEBPACK_IMPORTED_MODULE_1__[\"staff\"].list[i].email =\n                        _modules__WEBPACK_IMPORTED_MODULE_1__[\"staff\"].list[i].name.toLowerCase().replace(/\\W/g, \"\") +\n                            \"@gmail.com\";\n                });\n                _modules__WEBPACK_IMPORTED_MODULE_1__[\"appointments\"].list.forEach((appointment, i) => {\n                    _modules__WEBPACK_IMPORTED_MODULE_1__[\"appointments\"].list[i].date = randomDate();\n                    _modules__WEBPACK_IMPORTED_MODULE_1__[\"appointments\"].list[i].treatmentID =\n                        randomFromArray(_modules__WEBPACK_IMPORTED_MODULE_1__[\"treatments\"].list.map(x => x._id), false) || _modules__WEBPACK_IMPORTED_MODULE_1__[\"treatments\"].list[0]._id;\n                    _modules__WEBPACK_IMPORTED_MODULE_1__[\"appointments\"].list[i].finalPrice =\n                        appointment.expenses + randomInRange(0, 30);\n                    if (randomInRange(0, 10) > 8) {\n                        _modules__WEBPACK_IMPORTED_MODULE_1__[\"appointments\"].list[i].paidAmount =\n                            appointment.finalPrice + randomInRange(-10, 0);\n                    }\n                    else {\n                        _modules__WEBPACK_IMPORTED_MODULE_1__[\"appointments\"].list[i].paidAmount =\n                            appointment.finalPrice;\n                    }\n                    _modules__WEBPACK_IMPORTED_MODULE_1__[\"appointments\"].list[i].staffID = [\n                        randomFromArray(_modules__WEBPACK_IMPORTED_MODULE_1__[\"staff\"].list.filter(x => x.operates).map(x => x._id), false)\n                    ];\n                    _modules__WEBPACK_IMPORTED_MODULE_1__[\"appointments\"].list[i].isDone =\n                        appointment.date < new Date().getTime();\n                });\n                _utils__WEBPACK_IMPORTED_MODULE_2__[\"store\"].set(\"user_id\", \"89ab37f032d6f1b11512\");\n                resolve();\n            }\n        };\n    });\n}\n\n\n//# sourceURL=webpack:///./src/core/demo.ts?");

/***/ })

}]);