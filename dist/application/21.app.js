(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./src/main-components/user.tsx":
/*!**************************************!*\
  !*** ./src/main-components/user.tsx ***!
  \**************************************/
/*! exports provided: UserPanelView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserPanelView\", function() { return UserPanelView; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst AppointmentEditorPanel = react_loadable__WEBPACK_IMPORTED_MODULE_8__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! modules/appointments/components/appointment-editor */ \"./src/modules/appointments/components/appointment-editor.tsx\")))\n            .AppointmentEditorPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Shimmer\"], null)\n});\nlet UserPanelView = class UserPanelView extends react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.appointment = null;\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Panel\"], { className: \"user-component\", type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"PanelType\"].medium, isLightDismiss: true, isOpen: this.props.isOpen, onDismiss: () => this.props.onDismiss(), onRenderNavigation: () => (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], { className: \"panel-heading\" },\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 20 },\n                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileComponent\"], { name: this.props.staffName, size: 3, secondaryElement: react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", null,\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], { onClick: () => {\n                                    this.props.logout();\n                                }, \"data-testid\": \"logout\" }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Logout\")),\n                            \" / \",\n                            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"Link\"], { className: \"reset-user\", onClick: () => {\n                                    this.props.resetUser();\n                                }, \"data-testid\": \"switch\" }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Switch user\"))) })),\n                react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 4, className: \"close\" },\n                    react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"IconButton\"], { iconProps: { iconName: \"cancel\" }, onClick: () => {\n                            this.props.onDismiss();\n                        }, \"data-testid\": \"dismiss\" })))) },\n            react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Today's Appointments\") }, this.props.todayAppointments.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_6__[\"MessageBarType\"].info, \"data-testid\": \"no-appointments\" }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No appointments today\"))) : (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](\"div\", { className: \"appointments-listing\", \"data-testid\": \"appointments-list\" }, this.props.todayAppointments.map(appointment => {\n                const date = new Date(appointment.date);\n                const dateLink = `${date.getFullYear()}-${date.getMonth() +\n                    1}-${date.getDate()}`;\n                return (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](_modules__WEBPACK_IMPORTED_MODULE_3__[\"AppointmentThumbComponent\"], { \"data-testid\": \"appointment-thumb\", key: appointment._id, appointment: appointment, hideDate: true, showPatient: true, onClick: () => {\n                        this.appointment = appointment;\n                    }, onDeleteAppointment: () => { }, dateFormat: this.props.dateFormat }));\n            })))),\n            this.appointment ? (react__WEBPACK_IMPORTED_MODULE_7__[\"createElement\"](AppointmentEditorPanel, { appointment: this.appointment, onDismiss: () => (this.appointment = null), onDeleteAppointment: () => (this.appointment = null), availableTreatments: this.props.availableTreatments, availablePrescriptions: this.props.availablePrescriptions, currentUser: this.props.currentUser, dateFormat: this.props.dateFormat, currencySymbol: this.props.currencySymbol, prescriptionsEnabled: this.props.prescriptionsEnabled, timeTrackingEnabled: this.props.timeTrackingEnabled, operatingStaff: this.props.operatingStaff, appointmentsForDay: (year, month, day) => this.props.appointmentsForDay(year, month, day) })) : (\"\")));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"observable\"]\n], UserPanelView.prototype, \"appointment\", void 0);\nUserPanelView = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_5__[\"observer\"]\n], UserPanelView);\n\n\n\n//# sourceURL=webpack:///./src/main-components/user.tsx?");

/***/ })

}]);