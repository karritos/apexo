(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./src/modules/orthodontic/components/page.orthodontic.tsx":
/*!*****************************************************************!*\
  !*** ./src/modules/orthodontic/components/page.orthodontic.tsx ***!
  \*****************************************************************/
/*! exports provided: OrthoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OrthoPage\", function() { return OrthoPage; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nconst PatientDetailsPanel = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! modules/patients/components/patient-details */ \"./src/modules/patients/components/patient-details.tsx\")))\n            .PatientDetailsPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst DentalHistoryPanel = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! modules/patients/components/dental-history */ \"./src/modules/patients/components/dental-history.tsx\")))\n            .DentalHistoryPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst OrthoCaseSheetPanel = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 23).then(__webpack_require__.bind(null, /*! modules/orthodontic/components/case-sheet */ \"./src/modules/orthodontic/components/case-sheet.tsx\")))\n            .OrthoCaseSheetPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst OrthoRecordsPanel = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! modules/orthodontic/components/records */ \"./src/modules/orthodontic/components/records.tsx\")))\n            .OrthoRecordsPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nconst OrthoGalleryPanel = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](undefined, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! modules/orthodontic/components/ortho-gallery */ \"./src/modules/orthodontic/components/ortho-gallery.tsx\")))\n            .OrthoGalleryPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nlet OrthoPage = class OrthoPage extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.tabs = [\n            {\n                key: \"details\",\n                title: \"Patient Details\",\n                icon: \"DietPlanNotebook\"\n            },\n            {\n                key: \"dental\",\n                title: \"Dental History\",\n                icon: \"teeth\"\n            },\n            {\n                key: \"sheet\",\n                title: \"Orthodontic Case Sheet\",\n                icon: \"GroupedList\"\n            },\n            {\n                key: \"album\",\n                title: \"Orthodontic Album\",\n                icon: \"TripleColumn\"\n            },\n            {\n                key: \"gallery\",\n                title: \"Gallery and X-Rays\",\n                icon: \"PhotoCollection\"\n            },\n            {\n                key: \"appointments\",\n                title: \"Upcoming Appointments\",\n                icon: \"Calendar\",\n                hidden: !this.props.currentUser.canViewAppointments\n            },\n            {\n                key: \"delete\",\n                title: \"Delete\",\n                icon: \"Trash\",\n                hidden: !this.canEdit,\n                hiddenOnPanel: true\n            }\n        ];\n        this.showAdditionPanel = false;\n        this.newPatientName = \"\";\n        this.selectedId = \"\";\n        this.viewWhich = \"\";\n    }\n    get selectedCase() {\n        return this.props.cases.find(orthoCase => orthoCase._id === this.selectedId);\n    }\n    get selectedPatient() {\n        if (this.selectedCase) {\n            if (this.selectedCase.patient) {\n                return this.selectedCase.patient;\n            }\n        }\n    }\n    get canEdit() {\n        return this.props.currentUser.canEditOrtho;\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"orthodontic-cases-component p-15 p-l-10 p-r-10\" },\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"DataTableComponent\"], { maxItemsOnLoad: 10, className: \"orthodontic-cases-data-table\", heads: [\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Orthodontic Patient\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Started/Finished Treatment\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Last/Next Appointment\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Total/Outstanding Payments\")\n                ], rows: this.props.filteredCases\n                    .filter(orthoCase => orthoCase.patient)\n                    .map(orthoCase => {\n                    const patient = orthoCase.patient || new _modules__WEBPACK_IMPORTED_MODULE_3__[\"Patient\"]();\n                    return {\n                        id: orthoCase._id,\n                        searchableString: orthoCase.searchableString,\n                        cells: [\n                            {\n                                dataValue: patient.name,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileComponent\"], { name: patient.name, avatar: patient.avatar\n                                            ? _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].table[patient\n                                                .avatar]\n                                                ? _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"]\n                                                    .table[patient\n                                                    .avatar]\n                                                : _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].fetchImage(patient.avatar)\n                                            : undefined, secondaryElement: react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null,\n                                            Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(Object(_modules__WEBPACK_IMPORTED_MODULE_3__[\"genderToString\"])(patient.gender)),\n                                            \" \",\n                                            \"- \",\n                                            patient.age,\n                                            \" \",\n                                            Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"years old\")), size: 3 }),\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"TableActions\"], { items: this.tabs, onSelect: key => {\n                                            if (key === \"delete\") {\n                                                this.props.onDeleteOrtho(orthoCase._id);\n                                            }\n                                            else {\n                                                this.selectedId =\n                                                    orthoCase._id;\n                                                this.viewWhich = key;\n                                            }\n                                        } }))),\n                                className: \"no-label\"\n                            },\n                            {\n                                dataValue: orthoCase.isFinished\n                                    ? Infinity\n                                    : orthoCase.startedDate,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: orthoCase.isStarted\n                                            ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(orthoCase.startedDate, this.props\n                                                .dateFormat)\n                                            : \"\", subText: orthoCase.isStarted\n                                            ? Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Started treatment\")\n                                            : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Has not started yet\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"info\" })), onClick: () => { }, initialsColor: orthoCase.isStarted\n                                            ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].teal\n                                            : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }),\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: orthoCase.isFinished\n                                            ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(orthoCase.finishedDate, this.props\n                                                .dateFormat)\n                                            : \"\", subText: orthoCase.isFinished\n                                            ? Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Finished treatment\")\n                                            : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Has not finished yet\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"CheckMark\" })), onClick: () => { }, initialsColor: orthoCase.isFinished\n                                            ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].blue\n                                            : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }))),\n                                className: \"hidden-xs\"\n                            },\n                            {\n                                dataValue: (patient.nextAppointment || {\n                                    date: 0\n                                }).date,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: patient.lastAppointment\n                                            ? patient\n                                                .lastAppointment\n                                                .treatment\n                                                ? patient\n                                                    .lastAppointment\n                                                    .treatment\n                                                    .type\n                                                : \"\"\n                                            : \"\", subText: patient.lastAppointment\n                                            ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(patient\n                                                .lastAppointment\n                                                .date, this.props\n                                                .dateFormat)\n                                            : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No last appointment\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Previous\" })), onClick: () => { }, initialsColor: patient.lastAppointment\n                                            ? undefined\n                                            : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }),\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: patient.nextAppointment\n                                            ? patient\n                                                .nextAppointment\n                                                .treatment\n                                                ? patient\n                                                    .nextAppointment\n                                                    .treatment\n                                                    .type\n                                                : \"\"\n                                            : \"\", subText: patient.nextAppointment\n                                            ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(patient\n                                                .nextAppointment\n                                                .date, this.props\n                                                .dateFormat)\n                                            : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No next appointment\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Next\" })), onClick: () => { }, initialsColor: patient.nextAppointment\n                                            ? undefined\n                                            : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }))),\n                                className: \"hidden-xs\"\n                            },\n                            {\n                                dataValue: patient.totalPayments,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: this.props\n                                            .currencySymbol +\n                                            patient.totalPayments.toString(), subText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Payments made\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"CheckMark\" })), onClick: () => { }, initialsColor: patient.totalPayments >\n                                            0\n                                            ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].darkBlue\n                                            : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }),\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: this.props\n                                            .currencySymbol +\n                                            (patient.differenceAmount <\n                                                0\n                                                ? patient.outstandingAmount.toString()\n                                                : patient.differenceAmount >\n                                                    0\n                                                    ? patient.overpaidAmount.toString()\n                                                    : \"0\"), subText: patient.differenceAmount <\n                                            0\n                                            ? Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Outstanding amount\")\n                                            : patient.differenceAmount >\n                                                0\n                                                ? Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Overpaid amount\")\n                                                : Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No outstanding amount\"), size: 3, onRenderInitials: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Cancel\" })), onClick: () => { }, initialsColor: patient.differenceAmount !==\n                                            0\n                                            ? office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].darkRed\n                                            : office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PersonaInitialsColor\"].transparent }))),\n                                className: \"hidden-xs\"\n                            }\n                        ]\n                    };\n                }), commands: this.canEdit\n                    ? [\n                        {\n                            key: \"addNew\",\n                            title: \"Add new\",\n                            name: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Add new\"),\n                            onClick: () => (this.showAdditionPanel = true),\n                            iconProps: {\n                                iconName: \"Add\"\n                            }\n                        }\n                    ]\n                    : [] }),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Panel\"], { isOpen: this.showAdditionPanel, type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PanelType\"].smallFixedFar, closeButtonAriaLabel: \"Close\", isLightDismiss: true, onDismiss: () => {\n                    this.showAdditionPanel = false;\n                } },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"h4\", null, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Choose patient\")),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"TagInputComponent\"], { strict: true, value: [], options: this.props.patientsWithNoOrtho.map(patient => ({\n                        key: patient._id,\n                        text: patient.name\n                    })), onAdd: val => {\n                        this.showAdditionPanel = false;\n                        const orthoCase = new _modules__WEBPACK_IMPORTED_MODULE_3__[\"OrthoCase\"]();\n                        orthoCase.patientID = val.key;\n                        this.props.onAddOrtho({ orthoCase: orthoCase });\n                        this.selectedId = orthoCase._id;\n                        this.viewWhich = \"sheet\";\n                    }, placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Type to select patient`) }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"hr\", null),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"h4\", null, \"Or add new patient\"),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Patient name`), value: this.newPatientName, onChange: (e, v) => (this.newPatientName = v) }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"DefaultButton\"], { onClick: () => {\n                        const newPatient = new _modules__WEBPACK_IMPORTED_MODULE_3__[\"Patient\"]();\n                        newPatient.name = this.newPatientName;\n                        const orthoCase = new _modules__WEBPACK_IMPORTED_MODULE_3__[\"OrthoCase\"]();\n                        orthoCase.patientID = newPatient._id;\n                        this.props.onAddOrtho({\n                            orthoCase: orthoCase,\n                            patient: newPatient\n                        });\n                        this.newPatientName = \"\";\n                        this.selectedId = orthoCase._id;\n                        this.viewWhich = \"details\";\n                    }, iconProps: {\n                        iconName: \"add\"\n                    }, text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Add new\") })),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Panel\"], { isOpen: !!(this.selectedCase &&\n                    this.selectedPatient &&\n                    this.viewWhich), type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PanelType\"].medium, closeButtonAriaLabel: \"Close\", isLightDismiss: true, onDismiss: () => {\n                    this.selectedId = \"\";\n                    this.viewWhich = \"\";\n                }, onRenderNavigation: () => {\n                    if (!this.selectedCase) {\n                        return react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null);\n                    }\n                    if (!this.selectedPatient) {\n                        return react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null);\n                    }\n                    return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"panel-heading\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null,\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 22 },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileComponent\"], { name: this.selectedPatient.name, size: 2, avatar: this.selectedPatient.avatar\n                                        ? _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].table[this\n                                            .selectedPatient\n                                            .avatar]\n                                            ? _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].table[this\n                                                .selectedPatient\n                                                .avatar]\n                                            : _core__WEBPACK_IMPORTED_MODULE_2__[\"imagesTable\"].fetchImage(this\n                                                .selectedPatient\n                                                .avatar)\n                                        : undefined })),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 2, className: \"close\" },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { iconProps: { iconName: \"cancel\" }, onClick: () => {\n                                        this.selectedId = \"\";\n                                        this.viewWhich = \"\";\n                                    } }))),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"PanelTabs\"], { currentSelectedKey: this.viewWhich, onSelect: key => {\n                                this.viewWhich = key;\n                            }, items: this.tabs })));\n                } },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null, this.selectedCase && this.selectedPatient ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"ortho-single-component\" },\n                    this.viewWhich === \"details\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](PatientDetailsPanel, { patient: this.selectedPatient, currentUser: this.props.currentUser, usedLabels: this.props.allPatients\n                            .map(x => x.labels)\n                            .reduce((a, b) => a.concat(b.map(x => x.text)), []), onChangeViewWhich: key => (this.viewWhich = key) })) : (\"\"),\n                    this.viewWhich === \"dental\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](DentalHistoryPanel, { patient: this.selectedPatient, currentUser: this.props.currentUser })) : (\"\"),\n                    this.viewWhich === \"sheet\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](OrthoCaseSheetPanel, { orthoCase: this.selectedCase, currentUser: this.props.currentUser })) : (\"\"),\n                    this.viewWhich === \"album\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](OrthoRecordsPanel, { orthoCase: this.selectedCase, currentUser: this.props.currentUser, dateFormat: this.props.dateFormat, getFile: x => this.props.getFile(x), removeFile: x => this.props.removeFile(x), saveFile: obj => this.props.saveFile(obj), addModal: x => this.props.newModal(x) })) : (\"\"),\n                    this.viewWhich === \"gallery\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](OrthoGalleryPanel, { orthoCase: this.selectedCase, currentUser: this.props.currentUser, dateFormat: this.props.dateFormat, saveFile: x => this.props.saveFile(x), removeFile: x => this.props.removeFile(x), getFile: x => this.props.getFile(x), cephLoader: x => this.props.cephLoader(x) })) : (\"\"),\n                    this.viewWhich === \"appointments\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_modules__WEBPACK_IMPORTED_MODULE_3__[\"PatientAppointmentsPanel\"], { patient: this.selectedPatient, currentUser: this.props.currentUser, appointments: this.selectedCase.patient\n                            .appointments, onAdd: appointment => this.props.onAddAppointment(appointment), dateFormat: this.props.dateFormat, onDeleteAppointment: id => this.props.onDeleteAppointment(id), availablePrescriptions: this.props.availablePrescriptions, availableTreatments: this.props.availableTreatments, currencySymbol: this.props.currencySymbol, prescriptionsEnabled: this.props.prescriptionsEnabled, timeTrackingEnabled: this.props.timeTrackingEnabled, operatingStaff: this.props.operatingStaff, appointmentsForDay: (a, b, c) => this.props.appointmentsForDay(a, b, c) })) : (\"\"))) : (\"\")))));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], OrthoPage.prototype, \"showAdditionPanel\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], OrthoPage.prototype, \"newPatientName\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], OrthoPage.prototype, \"selectedId\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], OrthoPage.prototype, \"viewWhich\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], OrthoPage.prototype, \"selectedCase\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], OrthoPage.prototype, \"selectedPatient\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], OrthoPage.prototype, \"canEdit\", null);\nOrthoPage = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], OrthoPage);\n\n\n\n//# sourceURL=webpack:///./src/modules/orthodontic/components/page.orthodontic.tsx?");

/***/ })

}]);