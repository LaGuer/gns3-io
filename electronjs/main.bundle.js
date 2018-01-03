webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_map_project_map_component__ = __webpack_require__("../../../../../src/app/project-map/project-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servers_servers_component__ = __webpack_require__("../../../../../src/app/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_layout_default_layout_component__ = __webpack_require__("../../../../../src/app/default-layout/default-layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__default_layout_default_layout_component__["a" /* DefaultLayoutComponent */],
        children: [
            { path: '', redirectTo: 'servers', pathMatch: 'full' },
            { path: 'servers', component: __WEBPACK_IMPORTED_MODULE_3__servers_servers_component__["b" /* ServersComponent */] },
            { path: 'server/:server_id/projects', component: __WEBPACK_IMPORTED_MODULE_4__projects_projects_component__["a" /* ProjectsComponent */] }
        ]
    },
    { path: 'server/:server_id/project/:project_id', component: __WEBPACK_IMPORTED_MODULE_2__project_map_project_map_component__["b" /* ProjectMapComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<ng2-toasty></ng2-toasty>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(http, iconReg, sanitizer, toastyConfig) {
        toastyConfig.theme = 'material';
        iconReg.addSvgIcon('gns3', sanitizer.bypassSecurityTrustResourceUrl('./assets/gns3_icon.svg'));
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatIconRegistry */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["a" /* ToastyConfig */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_d3_ng2_service__ = __webpack_require__("../../../../d3-ng2-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_version_service__ = __webpack_require__("../../../../../src/app/shared/services/version.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_project_service__ = __webpack_require__("../../../../../src/app/shared/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_symbol_service__ = __webpack_require__("../../../../../src/app/shared/services/symbol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_server_service__ = __webpack_require__("../../../../../src/app/shared/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_indexed_db_service__ = __webpack_require__("../../../../../src/app/shared/services/indexed-db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_services_http_server_service__ = __webpack_require__("../../../../../src/app/shared/services/http-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_services_snapshot_service__ = __webpack_require__("../../../../../src/app/shared/services/snapshot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_progress_dialog_progress_dialog_service__ = __webpack_require__("../../../../../src/app/shared/progress-dialog/progress-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_node_service__ = __webpack_require__("../../../../../src/app/shared/services/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_appliance_service__ = __webpack_require__("../../../../../src/app/shared/services/appliance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_link_service__ = __webpack_require__("../../../../../src/app/shared/services/link.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__default_layout_default_layout_component__ = __webpack_require__("../../../../../src/app/default-layout/default-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_progress_dialog_progress_dialog_component__ = __webpack_require__("../../../../../src/app/shared/progress-dialog/progress-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__project_map_project_map_component__ = __webpack_require__("../../../../../src/app/project-map/project-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__servers_servers_component__ = __webpack_require__("../../../../../src/app/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_node_context_menu_node_context_menu_component__ = __webpack_require__("../../../../../src/app/shared/node-context-menu/node-context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_node_context_menu_actions_start_node_action_start_node_action_component__ = __webpack_require__("../../../../../src/app/shared/node-context-menu/actions/start-node-action/start-node-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_node_context_menu_actions_stop_node_action_stop_node_action_component__ = __webpack_require__("../../../../../src/app/shared/node-context-menu/actions/stop-node-action/stop-node-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__appliance_appliance_component__ = __webpack_require__("../../../../../src/app/appliance/appliance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__appliance_appliance_list_dialog_appliance_list_dialog_component__ = __webpack_require__("../../../../../src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_node_select_interface_node_select_interface_component__ = __webpack_require__("../../../../../src/app/shared/node-select-interface/node-select-interface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__cartography_cartography_module__ = __webpack_require__("../../../../../src/app/cartography/cartography.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























//import { MapComponent } from './cartography/map/map.component';









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_26__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_27__project_map_project_map_component__["b" /* ProjectMapComponent */],
                __WEBPACK_IMPORTED_MODULE_28__servers_servers_component__["b" /* ServersComponent */],
                __WEBPACK_IMPORTED_MODULE_28__servers_servers_component__["a" /* AddServerDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_27__project_map_project_map_component__["a" /* CreateSnapshotDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_23__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__default_layout_default_layout_component__["a" /* DefaultLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_25__shared_progress_dialog_progress_dialog_component__["a" /* ProgressDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_29__shared_node_context_menu_node_context_menu_component__["a" /* NodeContextMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_30__shared_node_context_menu_actions_start_node_action_start_node_action_component__["a" /* StartNodeActionComponent */],
                __WEBPACK_IMPORTED_MODULE_31__shared_node_context_menu_actions_stop_node_action_stop_node_action_component__["a" /* StopNodeActionComponent */],
                __WEBPACK_IMPORTED_MODULE_32__appliance_appliance_component__["a" /* ApplianceComponent */],
                __WEBPACK_IMPORTED_MODULE_33__appliance_appliance_list_dialog_appliance_list_dialog_component__["a" /* ApplianceListDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_34__shared_node_select_interface_node_select_interface_component__["a" /* NodeSelectInterfaceComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ng2_toasty__["b" /* ToastyModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_35__cartography_cartography_module__["a" /* CartographyModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8_d3_ng2_service__["a" /* D3Service */],
                __WEBPACK_IMPORTED_MODULE_12__shared_services_version_service__["a" /* VersionService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_services_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_services_symbol_service__["a" /* SymbolService */],
                __WEBPACK_IMPORTED_MODULE_15__shared_services_server_service__["a" /* ServerService */],
                __WEBPACK_IMPORTED_MODULE_21__shared_services_appliance_service__["a" /* ApplianceService */],
                __WEBPACK_IMPORTED_MODULE_20__shared_services_node_service__["a" /* NodeService */],
                __WEBPACK_IMPORTED_MODULE_22__shared_services_link_service__["a" /* LinkService */],
                __WEBPACK_IMPORTED_MODULE_16__shared_services_indexed_db_service__["a" /* IndexedDbService */],
                __WEBPACK_IMPORTED_MODULE_17__shared_services_http_server_service__["a" /* HttpServer */],
                __WEBPACK_IMPORTED_MODULE_18__shared_services_snapshot_service__["a" /* SnapshotService */],
                __WEBPACK_IMPORTED_MODULE_19__shared_progress_dialog_progress_dialog_service__["a" /* ProgressDialogService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_28__servers_servers_component__["a" /* AddServerDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_27__project_map_project_map_component__["a" /* CreateSnapshotDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_25__shared_progress_dialog_progress_dialog_component__["a" /* ProgressDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_33__appliance_appliance_list_dialog_appliance_list_dialog_component__["a" /* ApplianceListDialogComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_26__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n    <div class=\"example-header\">\n      <mat-form-field floatPlaceholder=\"never\">\n        <input matInput #filter placeholder=\"Filter appliances\">\n      </mat-form-field>\n    </div>\n\n    <mat-table #table [dataSource]=\"dataSource\">\n\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row;\"> <a (click)=\"addNode(row)\" href='javascript:void(0);' class=\"table-link\">{{row.name}}</a> </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n</div>\n<div mat-dialog-actions align=\"end\">\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\" color=\"accent\">Close</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 400px; }\n\n.mat-form-field {\n  font-size: 16px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplianceListDialogComponent; });
/* unused harmony export ApplianceDatabase */
/* unused harmony export ApplianceDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_appliance_service__ = __webpack_require__("../../../../../src/app/shared/services/appliance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var ApplianceListDialogComponent = /** @class */ (function () {
    function ApplianceListDialogComponent(dialogRef, applianceService, data) {
        this.dialogRef = dialogRef;
        this.applianceService = applianceService;
        this.data = data;
        this.displayedColumns = ['name'];
        this.server = data['server'];
    }
    ApplianceListDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.applianceDatabase = new ApplianceDatabase(this.server, this.applianceService);
        this.dataSource = new ApplianceDataSource(this.applianceDatabase);
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    ApplianceListDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ApplianceListDialogComponent.prototype.addNode = function (appliance) {
        this.dialogRef.close(appliance);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('filter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ApplianceListDialogComponent.prototype, "filter", void 0);
    ApplianceListDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-appliance-list-dialog',
            template: __webpack_require__("../../../../../src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_appliance_service__["a" /* ApplianceService */], Object])
    ], ApplianceListDialogComponent);
    return ApplianceListDialogComponent;
}());

var ApplianceDatabase = /** @class */ (function () {
    function ApplianceDatabase(server, applianceService) {
        var _this = this;
        this.server = server;
        this.applianceService = applianceService;
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.applianceService.list(this.server).subscribe(function (appliances) {
            _this.dataChange.next(appliances);
        });
    }
    Object.defineProperty(ApplianceDatabase.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: true,
        configurable: true
    });
    return ApplianceDatabase;
}());

;
var ApplianceDataSource = /** @class */ (function (_super) {
    __extends(ApplianceDataSource, _super);
    function ApplianceDataSource(applianceDatabase) {
        var _this = _super.call(this) || this;
        _this.applianceDatabase = applianceDatabase;
        _this.filterChange = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        return _this;
    }
    Object.defineProperty(ApplianceDataSource.prototype, "filter", {
        get: function () { return this.filterChange.value; },
        set: function (filter) { this.filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    ApplianceDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.applianceDatabase.dataChange,
            this.filterChange,
        ];
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            return _this.applianceDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) !== -1;
            });
        });
    };
    ApplianceDataSource.prototype.disconnect = function () { };
    return ApplianceDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/appliance/appliance.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button (click)=\"listAppliancesModal()\">\n  <mat-icon>add_to_queue</mat-icon>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/appliance/appliance.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/appliance/appliance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplianceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appliance_list_dialog_appliance_list_dialog_component__ = __webpack_require__("../../../../../src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_server__ = __webpack_require__("../../../../../src/app/shared/models/server.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApplianceComponent = /** @class */ (function () {
    function ApplianceComponent(dialog) {
        this.dialog = dialog;
        this.onNodeCreation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ApplianceComponent.prototype.ngOnInit = function () { };
    ApplianceComponent.prototype.listAppliancesModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__appliance_list_dialog_appliance_list_dialog_component__["a" /* ApplianceListDialogComponent */], {
            width: '600px',
            height: '560px',
            data: {
                'server': this.server
            }
        });
        dialogRef.afterClosed().subscribe(function (appliance) {
            if (appliance !== null) {
                _this.onNodeCreation.emit(appliance);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__shared_models_server__["a" /* Server */])
    ], ApplianceComponent.prototype, "server", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ApplianceComponent.prototype, "onNodeCreation", void 0);
    ApplianceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-appliance',
            template: __webpack_require__("../../../../../src/app/appliance/appliance.component.html"),
            styles: [__webpack_require__("../../../../../src/app/appliance/appliance.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], ApplianceComponent);
    return ApplianceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cartography/cartography.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartographyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map_component__ = __webpack_require__("../../../../../src/app/cartography/map/map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartographyModule = /** @class */ (function () {
    function CartographyModule() {
    }
    CartographyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__map_map_component__["a" /* MapComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__map_map_component__["a" /* MapComponent */]]
        })
    ], CartographyModule);
    return CartographyModule;
}());



/***/ }),

/***/ "../../../../../src/app/cartography/map/helpers/multi-link-calculator-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiLinkCalculatorHelper; });
var MultiLinkCalculatorHelper = /** @class */ (function () {
    function MultiLinkCalculatorHelper() {
        this.LINK_WIDTH = 2;
    }
    MultiLinkCalculatorHelper.prototype.linkTranslation = function (distance, point0, point1) {
        var x1_x0 = point1.x - point0.x;
        var y1_y0 = point1.y - point0.y;
        var x2_x0;
        var y2_y0;
        if (y1_y0 === 0) {
            x2_x0 = 0;
            y2_y0 = distance;
        }
        else {
            var angle = Math.atan((x1_x0) / (y1_y0));
            x2_x0 = -distance * Math.cos(angle);
            y2_y0 = distance * Math.sin(angle);
        }
        return {
            dx: x2_x0,
            dy: y2_y0
        };
    };
    MultiLinkCalculatorHelper.prototype.assignDataToLinks = function (links) {
        var _this = this;
        var links_from_nodes = {};
        links.forEach(function (l, i) {
            var sid = l.nodes[0].node_id;
            var tid = l.nodes[1].node_id;
            var key = (sid < tid ? sid + "," + tid : tid + "," + sid);
            var idx = 1;
            if (!(key in links_from_nodes)) {
                links_from_nodes[key] = [i];
            }
            else {
                idx = links_from_nodes[key].push(i);
            }
            l.distance = (idx % 2 === 0 ? idx * _this.LINK_WIDTH : (-idx + 1) * _this.LINK_WIDTH);
        });
    };
    return MultiLinkCalculatorHelper;
}());



/***/ }),

/***/ "../../../../../src/app/cartography/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<svg preserveAspectRatio=\"none\"></svg>\n"

/***/ }),

/***/ "../../../../../src/app/cartography/map/map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "svg {\n  display: block; }\n\nimage.over {\n  fill: #000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cartography/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__("../../../../d3-ng2-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_widgets_graph_widget__ = __webpack_require__("../../../../../src/app/cartography/shared/widgets/graph.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_models_context__ = __webpack_require__("../../../../../src/app/map/models/context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_size_model__ = __webpack_require__("../../../../../src/app/cartography/shared/models/size.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapComponent = /** @class */ (function () {
    function MapComponent(element, d3Service) {
        this.element = element;
        this.d3Service = d3Service;
        this.nodes = [];
        this.links = [];
        this.drawings = [];
        this.symbols = [];
        this.width = 1500;
        this.height = 600;
        this.windowFullSize = true;
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
    }
    MapComponent.prototype.ngOnChanges = function (changes) {
        if ((changes['width'] && !changes['width'].isFirstChange()) ||
            (changes['height'] && !changes['height'].isFirstChange()) ||
            (changes['drawings'] && !changes['drawings'].isFirstChange()) ||
            (changes['nodes'] && !changes['nodes'].isFirstChange()) ||
            (changes['links'] && !changes['links'].isFirstChange()) ||
            (changes['symbols'] && !changes['symbols'].isFirstChange())) {
            if (this.svg.empty && !this.svg.empty()) {
                if (changes['nodes']) {
                    this.onNodesChange(changes['nodes']);
                }
                if (changes['links']) {
                    this.onLinksChange(changes['links']);
                }
                if (changes['symbols']) {
                    this.onSymbolsChange(changes['symbols']);
                }
                this.changeLayout();
            }
        }
    };
    MapComponent.prototype.ngOnDestroy = function () {
        if (this.svg.empty && !this.svg.empty()) {
            this.svg.selectAll('*').remove();
        }
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var d3 = this.d3;
        var rootElement;
        var self = this;
        if (this.parentNativeElement !== null) {
            rootElement = d3.select(this.parentNativeElement);
            this.svg = rootElement.select('svg');
            this.graphContext = new __WEBPACK_IMPORTED_MODULE_4__map_models_context__["a" /* Context */](this.svg);
            if (this.windowFullSize) {
                this.graphContext.setSize(this.getSize());
            }
            else {
                this.graphContext.setSize(new __WEBPACK_IMPORTED_MODULE_5__shared_models_size_model__["a" /* Size */](this.width, this.height));
            }
            this.graphLayout = new __WEBPACK_IMPORTED_MODULE_3__shared_widgets_graph_widget__["a" /* GraphLayout */]();
            this.graphLayout.getNodesWidget().addOnNodeDraggingCallback(function (n) {
                var linksWidget = _this.graphLayout.getLinksWidget();
                linksWidget.select(_this.svg).each(function (link) {
                    if (link.target.node_id === n.node_id || link.source.node_id === n.node_id) {
                        var selection = Object(__WEBPACK_IMPORTED_MODULE_2_d3_selection__["j" /* select */])(this);
                        linksWidget.revise(selection);
                    }
                });
            });
            this.graphLayout.draw(this.svg, this.graphContext);
        }
    };
    MapComponent.prototype.getSize = function () {
        return new __WEBPACK_IMPORTED_MODULE_5__shared_models_size_model__["a" /* Size */](document.documentElement.clientWidth, document.documentElement.clientHeight);
    };
    MapComponent.prototype.changeLayout = function () {
        if (this.graphContext != null) {
            this.svg
                .attr('width', this.graphContext.getSize().width)
                .attr('height', this.graphContext.getSize().height);
        }
        if (this.windowFullSize) {
            if (this.parentNativeElement != null) {
                this.graphContext.setSize(this.getSize());
            }
        }
        else {
        }
        this.graphLayout.setNodes(this.nodes);
        this.graphLayout.setLinks(this.links);
        this.graphLayout.setDrawings(this.drawings);
        this.redraw();
    };
    MapComponent.prototype.onLinksChange = function (change) {
        var nodes_by_id = {};
        this.nodes.forEach(function (n) {
            nodes_by_id[n.node_id] = n;
        });
        this.links.forEach(function (link) {
            var source_id = link.nodes[0].node_id;
            var target_id = link.nodes[1].node_id;
            if (source_id in nodes_by_id) {
                link.source = nodes_by_id[source_id];
            }
            if (target_id in nodes_by_id) {
                link.target = nodes_by_id[target_id];
            }
        });
    };
    MapComponent.prototype.onNodesChange = function (change) {
        this.onLinksChange(null);
    };
    MapComponent.prototype.onSymbolsChange = function (change) {
        this.graphLayout.getNodesWidget().setSymbols(this.symbols);
    };
    MapComponent.prototype.redraw = function () {
        this.graphLayout.draw(this.svg, this.graphContext);
    };
    MapComponent.prototype.reload = function () {
        this.onLinksChange(null);
        this.redraw();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "nodes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "links", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "drawings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "symbols", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "windowFullSize", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("../../../../../src/app/cartography/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cartography/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cartography/shared/models/drawing-line.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingLine; });
var DrawingLine = /** @class */ (function () {
    function DrawingLine() {
    }
    return DrawingLine;
}());



/***/ }),

/***/ "../../../../../src/app/cartography/shared/models/link-status.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkStatus; });
var LinkStatus = /** @class */ (function () {
    function LinkStatus(x, y, status) {
        this.x = x;
        this.y = y;
        this.status = status;
    }
    return LinkStatus;
}());



/***/ }),

/***/ "../../../../../src/app/cartography/shared/models/node.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
var Node = /** @class */ (function () {
    function Node() {
    }
    return Node;
}());



/***/ }),

/***/ "../../../../../src/app/cartography/shared/models/point.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());

;


/***/ }),

/***/ "../../../../../src/app/cartography/shared/models/size.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Size; });
var Size = /** @class */ (function () {
    function Size(width, height) {
        this.width = width;
        this.height = height;
    }
    return Size;
}());



/***/ }),

/***/ "../../../../../src/app/cartography/shared/widgets/drawing-line.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingLineWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_drawing_line_model__ = __webpack_require__("../../../../../src/app/cartography/shared/models/drawing-line.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_point_model__ = __webpack_require__("../../../../../src/app/cartography/shared/models/point.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");




var DrawingLineWidget = /** @class */ (function () {
    function DrawingLineWidget() {
        this.drawingLine = new __WEBPACK_IMPORTED_MODULE_0__models_drawing_line_model__["a" /* DrawingLine */]();
        this.drawing = false;
        this.data = {};
    }
    DrawingLineWidget.prototype.start = function (x, y, data) {
        var self = this;
        this.drawing = true;
        this.data = data;
        this.drawingLine.start = new __WEBPACK_IMPORTED_MODULE_1__models_point_model__["a" /* Point */](x, y);
        this.drawingLine.end = new __WEBPACK_IMPORTED_MODULE_1__models_point_model__["a" /* Point */](x, y);
        var over = function (d, i) {
            var node = self.selection.select('g.canvas').node();
            var coordinates = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["g" /* mouse */])(node);
            self.drawingLine.end.x = coordinates[0];
            self.drawingLine.end.y = coordinates[1];
            self.draw();
        };
        this.selection.on('mousemove', over);
        this.draw();
    };
    DrawingLineWidget.prototype.isDrawing = function () {
        return this.drawing;
    };
    DrawingLineWidget.prototype.stop = function () {
        this.drawing = false;
        this.selection.on('mousemove', null);
        this.draw();
        return this.data;
    };
    DrawingLineWidget.prototype.connect = function (selection) {
        this.selection = selection;
        var canvas = this.selection.select("g.canvas");
        if (!canvas.select("g.drawing-line-tool").node()) {
            canvas.append('g').attr("class", "drawing-line-tool");
        }
    };
    DrawingLineWidget.prototype.draw = function () {
        var link_data = [];
        if (this.drawing) {
            link_data = [[
                    [this.drawingLine.start.x, this.drawingLine.start.y],
                    [this.drawingLine.end.x, this.drawingLine.end.y]
                ]];
        }
        var value_line = Object(__WEBPACK_IMPORTED_MODULE_2_d3_shape__["v" /* line */])();
        var drawing_line_tool = this.selection.select('g.drawing-line-tool');
        var tool = drawing_line_tool
            .selectAll('path')
            .data(link_data);
        var enter = tool
            .enter()
            .append('path');
        tool
            .merge(enter)
            .attr('d', value_line)
            .attr('stroke', '#000')
            .attr('stroke-width', '2');
        tool.exit().remove();
    };
    return DrawingLineWidget;
}());



/***/ }),

/***/ "../../../../../src/app/cartography/shared/widgets/drawings.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingsWidget; });
var DrawingsWidget = /** @class */ (function () {
    function DrawingsWidget() {
    }
    DrawingsWidget.prototype.draw = function (view, drawings) {
        var drawing = view.selectAll('g.drawing')
            .data(drawings);
        var drawing_enter = drawing.enter()
            .append('g')
            .attr('class', 'drawing');
        var parser = new DOMParser();
        var drawing_image = drawing_enter.append('image')
            .attr('xlink:href', function (d) {
            var svg = d.svg;
            if (svg.indexOf("xmlns") < 0) {
                svg = svg.replace('svg', 'svg xmlns="http://www.w3.org/2000/svg"');
            }
            return 'data:image/svg+xml;base64,' + btoa(svg);
        })
            .attr('width', function (d) {
            var svg_dom = parser.parseFromString(d.svg, 'text/xml');
            var roots = svg_dom.getElementsByTagName('svg');
            if (roots.length > 0) {
                if (roots[0].hasAttribute('width')) {
                    return roots[0].getAttribute('width');
                }
            }
            return 0;
        })
            .attr('height', function (d) {
            var svg_dom = parser.parseFromString(d.svg, 'text/xml');
            var roots = svg_dom.getElementsByTagName('svg');
            if (roots.length > 0) {
                if (roots[0].hasAttribute('height')) {
                    return roots[0].getAttribute('height');
                }
            }
            return 0;
        });
        var drawing_merge = drawing.merge(drawing_enter)
            .attr('transform', function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });
        drawing.exit().remove();
    };
    DrawingsWidget.prototype.appendSVG = function (svg) {
    };
    return DrawingsWidget;
}());



/***/ }),

/***/ "../../../../../src/app/cartography/shared/widgets/ethernet-link.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EthernetLinkWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");

var EthernetLinkWidget = /** @class */ (function () {
    function EthernetLinkWidget() {
    }
    EthernetLinkWidget.prototype.draw = function (view, link) {
        var link_data = [[
                [link.source.x, link.source.y],
                [link.target.x, link.target.y]
            ]];
        var value_line = Object(__WEBPACK_IMPORTED_MODULE_0_d3_shape__["v" /* line */])();
        var link_path = view.select('path');
        if (!link_path.node()) {
            link_path = view.append('path');
        }
        var link_path_data = link_path.data(link_data);
        link_path_data
            .attr('d', value_line)
            .attr('stroke', '#000')
            .attr('stroke-width', '2');
    };
    return EthernetLinkWidget;
}());



/***/ }),

/***/ "../../../../../src/app/cartography/shared/widgets/graph.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nodes_widget__ = __webpack_require__("../../../../../src/app/cartography/shared/widgets/nodes.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__links_widget__ = __webpack_require__("../../../../../src/app/cartography/shared/widgets/links.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_zoom__ = __webpack_require__("../../../../d3-zoom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drawings_widget__ = __webpack_require__("../../../../../src/app/cartography/shared/widgets/drawings.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drawing_line_widget__ = __webpack_require__("../../../../../src/app/cartography/shared/widgets/drawing-line.widget.ts");






var GraphLayout = /** @class */ (function () {
    function GraphLayout() {
        this.nodes = [];
        this.links = [];
        this.drawings = [];
        this.centerZeroZeroPoint = true;
        this.linksWidget = new __WEBPACK_IMPORTED_MODULE_1__links_widget__["a" /* LinksWidget */]();
        this.nodesWidget = new __WEBPACK_IMPORTED_MODULE_0__nodes_widget__["a" /* NodesWidget */]();
        this.drawingsWidget = new __WEBPACK_IMPORTED_MODULE_4__drawings_widget__["a" /* DrawingsWidget */]();
        this.drawingLineTool = new __WEBPACK_IMPORTED_MODULE_5__drawing_line_widget__["a" /* DrawingLineWidget */]();
    }
    GraphLayout.prototype.setNodes = function (nodes) {
        this.nodes = nodes;
    };
    GraphLayout.prototype.setLinks = function (links) {
        this.links = links;
    };
    GraphLayout.prototype.setDrawings = function (drawings) {
        this.drawings = drawings;
    };
    GraphLayout.prototype.getNodesWidget = function () {
        return this.nodesWidget;
    };
    GraphLayout.prototype.getLinksWidget = function () {
        return this.linksWidget;
    };
    GraphLayout.prototype.getDrawingLineTool = function () {
        return this.drawingLineTool;
    };
    GraphLayout.prototype.draw = function (view, context) {
        var self = this;
        var canvas = view
            .selectAll('g.canvas')
            .data([context]);
        var canvasEnter = canvas.enter()
            .append('g')
            .attr('class', 'canvas');
        if (this.centerZeroZeroPoint) {
            canvas.attr('transform', function (ctx) { return "translate(" + ctx.getSize().width / 2 + ", " + ctx.getSize().height / 2 + ")"; });
        }
        this.linksWidget.draw(canvas, this.links);
        this.nodesWidget.draw(canvas, this.nodes);
        this.drawingsWidget.draw(canvas, this.drawings);
        this.drawingLineTool.connect(view);
        var onZoom = function () {
            var e = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["d" /* event */];
            if (self.centerZeroZeroPoint) {
                canvas.attr('transform', "translate(" + (context.getSize().width / 2 + e.transform.x) + ", " +
                    (context.getSize().height / 2 + e.transform.y + ") scale(" + e.transform.k + ")"));
            }
            else {
                canvas.attr('transform', e.transform.toString());
            }
        };
        view.call(Object(__WEBPACK_IMPORTED_MODULE_2_d3_zoom__["a" /* zoom */])()
            .scaleExtent([1 / 2, 8])
            .on('zoom', onZoom));
    };
    return GraphLayout;
}());



/***/ }),

/***/ "../../../../../src/app/cartography/shared/widgets/links.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_link_status_model__ = __webpack_require__("../../../../../src/app/cartography/shared/models/link-status.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_helpers_multi_link_calculator_helper__ = __webpack_require__("../../../../../src/app/cartography/map/helpers/multi-link-calculator-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serial_link_widget__ = __webpack_require__("../../../../../src/app/cartography/shared/widgets/serial-link.widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethernet_link_widget__ = __webpack_require__("../../../../../src/app/cartography/shared/widgets/ethernet-link.widget.ts");





var LinksWidget = /** @class */ (function () {
    function LinksWidget() {
        this.multiLinkCalculatorHelper = new __WEBPACK_IMPORTED_MODULE_2__map_helpers_multi_link_calculator_helper__["a" /* MultiLinkCalculatorHelper */]();
    }
    LinksWidget.prototype.getLinkWidget = function (link) {
        if (link.link_type === 'serial') {
            return new __WEBPACK_IMPORTED_MODULE_3__serial_link_widget__["a" /* SerialLinkWidget */]();
        }
        return new __WEBPACK_IMPORTED_MODULE_4__ethernet_link_widget__["a" /* EthernetLinkWidget */]();
    };
    LinksWidget.prototype.select = function (view) {
        return view.selectAll("g.link");
    };
    LinksWidget.prototype.revise = function (selection) {
        var self = this;
        selection
            .each(function (l) {
            var link_group = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["j" /* select */])(this);
            var link_widget = self.getLinkWidget(l);
            link_widget.draw(link_group, l);
            var link_path = link_group.select('path');
            var start_point = link_path.node().getPointAtLength(50);
            var end_point = link_path.node().getPointAtLength(link_path.node().getTotalLength() - 50);
            var statuses = [
                new __WEBPACK_IMPORTED_MODULE_1__models_link_status_model__["a" /* LinkStatus */](start_point.x, start_point.y, l.source.status),
                new __WEBPACK_IMPORTED_MODULE_1__models_link_status_model__["a" /* LinkStatus */](end_point.x, end_point.y, l.target.status)
            ];
            var status_started = link_group
                .selectAll('circle.status_started')
                .data(statuses.filter(function (link_status) { return link_status.status === 'started'; }));
            var status_started_enter = status_started
                .enter()
                .append('circle');
            status_started
                .merge(status_started_enter)
                .attr('class', 'status_started')
                .attr('cx', function (ls) { return ls.x; })
                .attr('cy', function (ls) { return ls.y; })
                .attr('r', 4)
                .attr('fill', '#2ecc71');
            status_started
                .exit()
                .remove();
            var status_stopped = link_group
                .selectAll('rect.status_stopped')
                .data(statuses.filter(function (link_status) { return link_status.status === 'stopped'; }));
            var status_stopped_enter = status_stopped
                .enter()
                .append('rect');
            var STOPPED_STATUS_RECT_WIDTH = 6;
            status_stopped
                .merge(status_stopped_enter)
                .attr('class', 'status_stopped')
                .attr('x', function (ls) { return ls.x - STOPPED_STATUS_RECT_WIDTH / 2.; })
                .attr('y', function (ls) { return ls.y - STOPPED_STATUS_RECT_WIDTH / 2.; })
                .attr('width', STOPPED_STATUS_RECT_WIDTH)
                .attr('height', STOPPED_STATUS_RECT_WIDTH)
                .attr('fill', 'red');
            status_stopped
                .exit()
                .remove();
        })
            .attr('transform', function (l) {
            if (l.source && l.target) {
                var translation = self.multiLinkCalculatorHelper.linkTranslation(l.distance, l.source, l.target);
                return "translate (" + translation.dx + ", " + translation.dy + ")";
            }
            return null;
        });
    };
    LinksWidget.prototype.draw = function (view, links) {
        var self = this;
        this.multiLinkCalculatorHelper.assignDataToLinks(links);
        var linksLayer = view.selectAll("g.links").data([{}]);
        linksLayer
            .enter()
            .append('g')
            .attr("class", "links");
        var link = linksLayer
            .selectAll("g.link")
            .data(links.filter(function (l) {
            return l.target && l.source;
        }));
        var link_enter = link.enter()
            .append('g')
            .attr('class', 'link')
            .attr('link_id', function (l) { return l.link_id; })
            .attr('map-source', function (l) { return l.source.node_id; })
            .attr('map-target', function (l) { return l.target.node_id; });
        //this.revise(link.merge(link_enter));
        link
            .exit()
            .remove();
    };
    return LinksWidget;
}());



/***/ }),

/***/ "../../../../../src/app/cartography/shared/widgets/nodes.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodesWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_drag__ = __webpack_require__("../../../../d3-drag/index.js");


var NodesWidget = /** @class */ (function () {
    function NodesWidget() {
        this.debug = false;
        this.onNodeDraggingCallbacks = [];
        this.symbols = [];
    }
    NodesWidget.prototype.setOnContextMenuCallback = function (onContextMenuCallback) {
        this.onContextMenuCallback = onContextMenuCallback;
    };
    NodesWidget.prototype.setOnNodeClickedCallback = function (onNodeClickedCallback) {
        this.onNodeClickedCallback = onNodeClickedCallback;
    };
    NodesWidget.prototype.setOnNodeDraggedCallback = function (onNodeDraggedCallback) {
        this.onNodeDraggedCallback = onNodeDraggedCallback;
    };
    NodesWidget.prototype.addOnNodeDraggingCallback = function (onNodeDraggingCallback) {
        this.onNodeDraggingCallbacks.push(onNodeDraggingCallback);
    };
    NodesWidget.prototype.setSymbols = function (symbols) {
        this.symbols = symbols;
    };
    NodesWidget.prototype.executeOnNodeDraggingCallback = function (n) {
        // this.onNodeDraggingCallbacks.forEach((callback: (n: Node) => void) => {
        //   callback(n);
        // });
    };
    NodesWidget.prototype.revise = function (selection) {
        selection
            .attr('transform', function (n) {
            return "translate(" + n.x + "," + n.y + ")";
        });
        selection
            .select('text.label')
            .attr('style', function (n) { return n.label.style; })
            .text(function (n) { return n.label.text; })
            .attr('x', function (n) {
            if (n.label.x === null) {
                // center
                var bbox = this.getBBox();
                return -bbox.width / 2.;
            }
            return n.label.x - n.width / 2.;
        })
            .attr('y', function (n) {
            if (n.label.x === null) {
                // center
                var bbox = this.getBBox();
                return -n.height / 2. - bbox.height;
            }
            return n.label.y - n.height / 2.;
        });
        selection
            .select('text.node_point_label')
            .text(function (n) { return "(" + n.x + ", " + n.y + ")"; });
    };
    NodesWidget.prototype.draw = function (view, nodes) {
        var _this = this;
        var self = this;
        var node = view
            .selectAll('g.node')
            .data(nodes, function (n) {
            return n.node_id;
        });
        var node_enter = node
            .enter()
            .append('g')
            .attr('class', 'node');
        node_enter
            .append('image')
            .attr('xlink:href', function (n) {
            var symbol = _this.symbols.find(function (s) { return s.symbol_id === n.symbol; });
            if (symbol) {
                return 'data:image/svg+xml;base64,' + btoa(symbol.raw);
            }
            // @todo; we need to have default image
            return 'data:image/svg+xml;base64,none';
        })
            .attr('width', function (n) { return n.width; })
            .attr('height', function (n) { return n.height; })
            .attr('x', function (n) { return -n.width / 2.; })
            .attr('y', function (n) { return -n.height / 2.; });
        // .attr('width', (n: Node) => n.width)
        // .attr('height', (n: Node) => n.height);
        // .on('mouseover', function (this, n: Node) {
        //   select(this).attr("class", "over");
        // })
        // .on('mouseout', function (this, n: Node) {
        //   select(this).attr("class", "");
        // });
        node_enter
            .append('text')
            .attr('class', 'label');
        if (this.debug) {
            node_enter
                .append('circle')
                .attr('class', 'node_point')
                .attr('r', 2);
            node_enter
                .append('text')
                .attr('class', 'node_point_label')
                .attr('x', '-100')
                .attr('y', '0');
        }
        var node_merge = node
            .merge(node_enter)
            .on("contextmenu", function (n, i) {
            __WEBPACK_IMPORTED_MODULE_0_d3_selection__["d" /* event */].preventDefault();
            if (self.onContextMenuCallback !== null) {
                self.onContextMenuCallback(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["d" /* event */], n);
            }
        })
            .on('click', function (n) {
            if (self.onNodeClickedCallback) {
                self.onNodeClickedCallback(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["d" /* event */], n);
            }
        });
        this.revise(node_merge);
        var callback = function (n) {
            var e = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["d" /* event */];
            n.x = e.x;
            n.y = e.y;
            self.revise(Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["j" /* select */])(this));
            self.executeOnNodeDraggingCallback(n);
        };
        var dragging = function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["a" /* drag */])()
                .on('drag', callback)
                .on('end', function (n) {
                if (self.onNodeDraggedCallback) {
                    var e = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["d" /* event */];
                    self.onNodeDraggedCallback(e, n);
                }
            });
        };
        node_merge.call(dragging());
        node
            .exit()
            .remove();
    };
    return NodesWidget;
}());



/***/ }),

/***/ "../../../../../src/app/cartography/shared/widgets/serial-link.widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerialLinkWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__("../../../../d3-path/index.js");

var SerialLinkWidget = /** @class */ (function () {
    function SerialLinkWidget() {
    }
    SerialLinkWidget.prototype.draw = function (view, link) {
        var dx = link.target.x - link.source.x;
        var dy = link.target.y - link.source.y;
        var vector_angle = Math.atan2(dy, dx);
        var rot_angle = -Math.PI / 4.0;
        var vect_rot = [
            Math.cos(vector_angle + rot_angle),
            Math.sin(vector_angle + rot_angle)
        ];
        var angle_source = [
            link.source.x + dx / 2.0 + 15 * vect_rot[0],
            link.source.y + dy / 2.0 + 15 * vect_rot[1]
        ];
        var angle_target = [
            link.target.x - dx / 2.0 - 15 * vect_rot[0],
            link.target.y - dy / 2.0 - 15 * vect_rot[1]
        ];
        var line_data = [
            [link.source.x, link.source.y],
            angle_source,
            angle_target,
            [link.target.x, link.target.y]
        ];
        var link_path = view.select('path');
        if (!link_path.node()) {
            link_path = view.append('path');
        }
        var line_generator = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();
        line_generator.moveTo(line_data[0][0], line_data[0][1]);
        line_generator.lineTo(line_data[1][0], line_data[1][1]);
        line_generator.lineTo(line_data[2][0], line_data[2][1]);
        line_generator.lineTo(line_data[3][0], line_data[3][1]);
        link_path
            .attr('d', line_generator.toString())
            .attr('stroke', '#B22222')
            .attr('fill', 'none')
            .attr('stroke-width', '2');
    };
    return SerialLinkWidget;
}());



/***/ }),

/***/ "../../../../../src/app/default-layout/default-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  height: 100%;\n}\n\napp-root, app-default-layout {\n  height: 100%;\n}\n\napp-default-layout {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh;\n}\n\n.content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n.footer {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  padding: 20px;\n  /*background-color: #0097a7;*/\n  color: white;\n}\n\n.default-content {\n  margin: 0 auto;\n  max-width: 940px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\nheader {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);\n  z-index: 10;\n}\n\nmain {\n  height: 100%;\n}\n\n.default-header h1 {\n  font-weight: 300;\n  margin: 0;\n  font-size: 20px;\n  padding: 28px 8px;\n  color: white;\n}\n\n.default-header {\n  margin: 0 auto;\n  max-width: 940px;\n  /*background-color: #0097a7;*/\n}\n\n.buttons-bar {\n  padding-top: 10px;\n  text-align: right;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/default-layout/default-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button>\n      <mat-icon svgIcon=\"gns3\"></mat-icon>\n    </button>\n\n    <button mat-button routerLink=\"/servers\" >Servers</button>\n  </mat-toolbar>\n</header>\n\n<main class=\"mat-app-background\">\n  <router-outlet></router-outlet>\n</main>\n\n<footer class=\"footer mat-app-background\">\n  GNS3 Web UI demo &copy; 2017\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/default-layout/default-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultLayoutComponent = /** @class */ (function () {
    function DefaultLayoutComponent() {
    }
    DefaultLayoutComponent.prototype.ngOnInit = function () {
    };
    DefaultLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-default-layout',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
            template: __webpack_require__("../../../../../src/app/default-layout/default-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/default-layout/default-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DefaultLayoutComponent);
    return DefaultLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/models/context.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
var Context = /** @class */ (function () {
    function Context(root) {
        this.root = root;
    }
    Context.prototype.getSize = function () {
        return this.size;
    };
    Context.prototype.setSize = function (size) {
        this.size = size;
    };
    Context.prototype.getRoot = function () {
        return this.root;
    };
    return Context;
}());



/***/ }),

/***/ "../../../../../src/app/project-map/create-snapshot-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create snapshot</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"snapshot.name\" placeholder=\"Name\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\" color=\"accent\">No Thanks</button>\n  <button mat-button (click)=\"onAddClick()\" tabindex=\"2\" mat-raised-button color=\"primary\">Add</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project-map/project-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*html {*/\n  /*position: static;*/\n  /*height: 100%;*/\n/*}*/\n\n/*body {*/\n  /*height: 100%;*/\n  /*margin: 0;*/\n  /*margin-bottom: 0 !important;*/\n/*}*/\n\n/*app-root, app-project-map, .project-map, app-map, svg {*/\n  /*height: 100%;*/\n/*}*/\n\ng.node:hover {\n  background-color: #0097a7;\n}\n\n.project-map {\n  background-color: #F0F0F0;\n}\n\n.project-toolbar {\n  width: 70px;\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.loading-spinner {\n  position: absolute;\n  top: 50%;\n  width: 100px;\n  margin-left:-50px;\n  margin-top: -50px;\n  left: 50%;\n}\n\ng.node text {\n  font-family: Roboto !important;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-map/project-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project\" class=\"project-map\">\n  <app-map [symbols]=\"symbols\" [nodes]=\"nodes\" [links]=\"links\" [drawings]=\"drawings\"></app-map>\n\n  <div class=\"project-toolbar\">\n    <mat-toolbar color=\"primary\" class=\"project-toolbar\">\n\n      <button mat-icon-button [matMenuTriggerFor]=\"mainMenu\">\n        <mat-icon svgIcon=\"gns3\"></mat-icon>\n      </button>\n\n      <mat-menu #mainMenu=\"matMenu\" [overlapTrigger]=\"false\">\n        <button mat-menu-item [routerLink]=\"['/server', server.id, 'projects']\">\n          <mat-icon>work</mat-icon>\n          <span>Projects</span>\n        </button>\n        <button mat-menu-item [routerLink]=\"['/servers']\">\n          <mat-icon>developer_board</mat-icon>\n          <span>Servers</span>\n        </button>\n      </mat-menu>\n\n      <mat-toolbar-row>\n        <button mat-icon-button (click)=\"turnOnDrawLineMode()\" *ngIf=\"!drawLineMode\">\n          <mat-icon>timeline</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"primary\" (click)=\"turnOffDrawLineMode()\" *ngIf=\"drawLineMode\">\n          <mat-icon>timeline</mat-icon>\n        </button>\n      </mat-toolbar-row>\n\n      <mat-toolbar-row>\n        <button mat-icon-button (click)=\"createSnapshotModal()\">\n          <mat-icon>snooze</mat-icon>\n        </button>\n      </mat-toolbar-row>\n\n      <mat-toolbar-row>\n        <app-appliance [server]=\"server\" (onNodeCreation)=\"onNodeCreation($event)\"></app-appliance>\n      </mat-toolbar-row>\n\n    </mat-toolbar>\n  </div>\n\n  <app-node-context-menu [server]=\"server\"></app-node-context-menu>\n  <app-node-select-interface (onChooseInterface)=\"onChooseInterface($event)\"></app-node-select-interface>\n</div>\n\n<div class=\"loading-spinner\" *ngIf=\"isLoading\">\n  <mat-spinner color=\"primary\">\n  </mat-spinner>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/project-map/project-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProjectMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSnapshotDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_dom_webSocket__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/dom/webSocket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_symbol_service__ = __webpack_require__("../../../../../src/app/shared/services/symbol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cartography_map_map_component__ = __webpack_require__("../../../../../src/app/cartography/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_server_service__ = __webpack_require__("../../../../../src/app/shared/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_project_service__ = __webpack_require__("../../../../../src/app/shared/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_snapshot_service__ = __webpack_require__("../../../../../src/app/shared/services/snapshot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_models_snapshot__ = __webpack_require__("../../../../../src/app/shared/models/snapshot.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_progress_dialog_progress_dialog_service__ = __webpack_require__("../../../../../src/app/shared/progress-dialog/progress-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_progress_dialog_progress_dialog_component__ = __webpack_require__("../../../../../src/app/shared/progress-dialog/progress-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_node_context_menu_node_context_menu_component__ = __webpack_require__("../../../../../src/app/shared/node-context-menu/node-context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_node_service__ = __webpack_require__("../../../../../src/app/shared/services/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_node_select_interface_node_select_interface_component__ = __webpack_require__("../../../../../src/app/shared/node-select-interface/node-select-interface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_link_service__ = __webpack_require__("../../../../../src/app/shared/services/link.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






















var ProjectMapComponent = /** @class */ (function () {
    function ProjectMapComponent(route, serverService, projectService, symbolService, snapshotService, nodeService, linkService, dialog, progressDialogService, toastyService) {
        this.route = route;
        this.serverService = serverService;
        this.projectService = projectService;
        this.symbolService = symbolService;
        this.snapshotService = snapshotService;
        this.nodeService = nodeService;
        this.linkService = linkService;
        this.dialog = dialog;
        this.progressDialogService = progressDialogService;
        this.toastyService = toastyService;
        this.nodes = [];
        this.links = [];
        this.drawings = [];
        this.symbols = [];
        this.drawLineMode = false;
        this.isLoading = true;
    }
    ProjectMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            var server_id = parseInt(paramMap.get('server_id'), 10);
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */]
                .fromPromise(_this.serverService.get(server_id))
                .flatMap(function (server) {
                _this.server = server;
                return _this.projectService.get(server, paramMap.get('project_id'));
            })
                .flatMap(function (project) {
                _this.project = project;
                if (_this.project.status === 'opened') {
                    return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function (observer) {
                        observer.next(_this.project);
                    });
                }
                else {
                    return _this.projectService.open(_this.server, _this.project.project_id);
                }
            })
                .subscribe(function (project) {
                _this.onProjectLoad(project);
            });
        });
        this.symbolService.symbols.subscribe(function (symbols) {
            _this.symbols = symbols;
        });
    };
    ProjectMapComponent.prototype.onProjectLoad = function (project) {
        var _this = this;
        this.symbolService
            .load(this.server)
            .flatMap(function () {
            return _this.projectService.drawings(_this.server, project.project_id);
        })
            .flatMap(function (drawings) {
            _this.drawings = drawings;
            return _this.projectService.links(_this.server, project.project_id);
        })
            .flatMap(function (links) {
            _this.links = links;
            return _this.projectService.nodes(_this.server, project.project_id);
        })
            .subscribe(function (nodes) {
            _this.nodes = nodes;
            _this.setUpMapCallbacks(project);
            _this.setUpWS(project);
            _this.isLoading = false;
        });
    };
    ProjectMapComponent.prototype.setUpWS = function (project) {
        var _this = this;
        this.ws = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].webSocket(this.projectService.notificationsPath(this.server, project.project_id));
        this.ws.subscribe(function (o) {
            if (o.action === 'node.updated') {
                var node_1 = o.event;
                var index = _this.nodes.findIndex(function (n) { return n.node_id === node_1.node_id; });
                if (index >= 0) {
                    _this.nodes[index] = node_1;
                    _this.mapChild.reload(); // temporary invocation
                }
            }
            if (o.action === 'node.created') {
                var node_2 = o.event;
                var index = _this.nodes.findIndex(function (n) { return n.node_id === node_2.node_id; });
                if (index === -1) {
                    _this.nodes.push(node_2);
                    _this.mapChild.reload(); // temporary invocation
                }
            }
            if (o.action === 'node.deleted') {
                var node_3 = o.event;
                var index = _this.nodes.findIndex(function (n) { return n.node_id === node_3.node_id; });
                if (index >= 0) {
                    _this.nodes.splice(index, 1);
                    _this.mapChild.reload(); // temporary invocation
                }
            }
            if (o.action === 'link.created') {
                var link_1 = o.event;
                var index = _this.links.findIndex(function (l) { return l.link_id === link_1.link_id; });
                if (index === -1) {
                    _this.links.push(link_1);
                    _this.mapChild.reload(); // temporary invocation
                }
            }
            if (o.action === 'link.updated') {
                var link_2 = o.event;
                var index = _this.links.findIndex(function (l) { return l.link_id === link_2.link_id; });
                if (index >= 0) {
                    _this.links[index] = link_2;
                    _this.mapChild.reload(); // temporary invocation
                }
            }
            if (o.action === 'link.deleted') {
                var link_3 = o.event;
                var index = _this.links.findIndex(function (l) { return l.link_id === link_3.link_id; });
                if (index >= 0) {
                    _this.links.splice(index, 1);
                    _this.mapChild.reload(); // temporary invocation
                }
            }
        });
    };
    ProjectMapComponent.prototype.setUpMapCallbacks = function (project) {
        var _this = this;
        this.mapChild.graphLayout.getNodesWidget().setOnContextMenuCallback(function (event, node) {
            _this.nodeContextMenu.open(node, event.clientY, event.clientX);
        });
        this.mapChild.graphLayout.getNodesWidget().setOnNodeClickedCallback(function (event, node) {
            if (_this.drawLineMode) {
                _this.nodeSelectInterfaceMenu.open(node, event.clientY, event.clientX);
            }
        });
        this.mapChild.graphLayout.getNodesWidget().setOnNodeDraggedCallback(function (event, node) {
            var index = _this.nodes.findIndex(function (n) { return n.node_id === node.node_id; });
            if (index >= 0) {
                _this.nodes[index] = node;
                _this.mapChild.reload(); // temporary invocation
                _this.nodeService
                    .updatePosition(_this.server, node, node.x, node.y)
                    .subscribe(function (n) {
                    _this.nodes[index] = node;
                    _this.mapChild.reload(); // temporary invocation
                });
            }
        });
    };
    ProjectMapComponent.prototype.onNodeCreation = function (appliance) {
        var _this = this;
        this.nodeService
            .createFromAppliance(this.server, this.project, appliance, 0, 0, 'local')
            .subscribe(function () {
            _this.projectService
                .nodes(_this.server, _this.project.project_id)
                .subscribe(function (nodes) {
                _this.nodes = nodes;
                _this.mapChild.reload();
            });
        });
    };
    ProjectMapComponent.prototype.createSnapshotModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(CreateSnapshotDialogComponent, {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(function (snapshot) {
            if (snapshot) {
                var creation = _this.snapshotService.create(_this.server, _this.project.project_id, snapshot);
                var progress_1 = _this.progressDialogService.open();
                var subscription_1 = creation.subscribe(function (created_snapshot) {
                    _this.toastyService.success({
                        'title': 'Snapshot created',
                        'msg': "Snapshot '" + snapshot.name + "' has been created."
                    });
                    progress_1.close();
                }, function (response) {
                    var error = response.json();
                    _this.toastyService.error({
                        'title': 'Cannot create snapshot',
                        'msg': error.message
                    });
                    progress_1.close();
                });
                progress_1.afterClosed().subscribe(function (result) {
                    if (result === __WEBPACK_IMPORTED_MODULE_16__shared_progress_dialog_progress_dialog_component__["a" /* ProgressDialogComponent */].CANCELLED) {
                        subscription_1.unsubscribe();
                    }
                });
            }
        });
    };
    ProjectMapComponent.prototype.turnOnDrawLineMode = function () {
        this.drawLineMode = true;
    };
    ProjectMapComponent.prototype.turnOffDrawLineMode = function () {
        this.drawLineMode = false;
        this.mapChild.graphLayout.getDrawingLineTool().stop();
    };
    ProjectMapComponent.prototype.onChooseInterface = function (event) {
        var node = event.node;
        var port = event.port;
        var drawingLineTool = this.mapChild.graphLayout.getDrawingLineTool();
        if (drawingLineTool.isDrawing()) {
            var data = drawingLineTool.stop();
            this.onLineCreation(data['node'], data['port'], node, port);
        }
        else {
            drawingLineTool.start(node.x, node.y, {
                'node': node,
                'port': port
            });
        }
    };
    ProjectMapComponent.prototype.onLineCreation = function (source_node, source_port, target_node, target_port) {
        var _this = this;
        this.linkService
            .createLink(this.server, source_node, source_port, target_node, target_port)
            .subscribe(function () {
            _this.projectService.links(_this.server, _this.project.project_id).subscribe(function (links) {
                _this.links = links;
                _this.mapChild.reload();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_9__cartography_map_map_component__["a" /* MapComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__cartography_map_map_component__["a" /* MapComponent */])
    ], ProjectMapComponent.prototype, "mapChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_18__shared_node_context_menu_node_context_menu_component__["a" /* NodeContextMenuComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_18__shared_node_context_menu_node_context_menu_component__["a" /* NodeContextMenuComponent */])
    ], ProjectMapComponent.prototype, "nodeContextMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_20__shared_node_select_interface_node_select_interface_component__["a" /* NodeSelectInterfaceComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_20__shared_node_select_interface_node_select_interface_component__["a" /* NodeSelectInterfaceComponent */])
    ], ProjectMapComponent.prototype, "nodeSelectInterfaceMenu", void 0);
    ProjectMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project-map',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
            template: __webpack_require__("../../../../../src/app/project-map/project-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project-map/project-map.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_10__shared_services_server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_11__shared_services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_services_symbol_service__["a" /* SymbolService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_services_snapshot_service__["a" /* SnapshotService */],
            __WEBPACK_IMPORTED_MODULE_19__shared_services_node_service__["a" /* NodeService */],
            __WEBPACK_IMPORTED_MODULE_21__shared_services_link_service__["a" /* LinkService */],
            __WEBPACK_IMPORTED_MODULE_12__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_15__shared_progress_dialog_progress_dialog_service__["a" /* ProgressDialogService */],
            __WEBPACK_IMPORTED_MODULE_17_ng2_toasty__["c" /* ToastyService */]])
    ], ProjectMapComponent);
    return ProjectMapComponent;
}());

var CreateSnapshotDialogComponent = /** @class */ (function () {
    function CreateSnapshotDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snapshot = new __WEBPACK_IMPORTED_MODULE_14__shared_models_snapshot__["a" /* Snapshot */]();
    }
    CreateSnapshotDialogComponent.prototype.onAddClick = function () {
        this.dialogRef.close(this.snapshot);
    };
    CreateSnapshotDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateSnapshotDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-snapshot-dialog',
            template: __webpack_require__("../../../../../src/app/project-map/create-snapshot-dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_12__angular_material__["f" /* MatDialogRef */], Object])
    ], CreateSnapshotDialogComponent);
    return CreateSnapshotDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"default-header mat-app-background\">\n    <h1>Projects</h1>\n  </div>\n  <div class=\"default-content\">\n\n    <div class=\"example-container mat-elevation-z8\">\n      <mat-table #table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\">\n            <a [routerLink]=\"['/server', server.id, 'project', row.project_id]\" class=\"table-link\">{{row.name}}</a>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" style=\"text-align: right\">\n            <button mat-icon-button (click)=\"delete(row)\">\n              <mat-icon aria-label=\"Delete project\">delete</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* unused harmony export ProjectDatabase */
/* unused harmony export ProjectDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_project_service__ = __webpack_require__("../../../../../src/app/shared/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_server_service__ = __webpack_require__("../../../../../src/app/shared/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(route, serverService, projectService) {
        this.route = route;
        this.serverService = serverService;
        this.projectService = projectService;
        this.projectDatabase = new ProjectDatabase();
        this.displayedColumns = ['name', 'actions'];
        this.dataSource = new ProjectDataSource(this.projectDatabase);
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            var server_id = parseInt(params.get('server_id'), 10);
            return _this.serverService.get(server_id);
        })
            .subscribe(function (server) {
            _this.server = server;
            _this.projectService
                .list(_this.server)
                .subscribe(function (projects) {
                _this.projectDatabase.addProjects(projects);
            });
        });
    };
    ProjectsComponent.prototype.delete = function (project) {
        var _this = this;
        this.projectService.delete(this.server, project.project_id).subscribe(function () {
            _this.projectDatabase.remove(project);
        });
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_project_service__["a" /* ProjectService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());

var ProjectDatabase = /** @class */ (function () {
    function ProjectDatabase() {
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    Object.defineProperty(ProjectDatabase.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: true,
        configurable: true
    });
    ProjectDatabase.prototype.addProjects = function (projects) {
        this.dataChange.next(projects);
    };
    ProjectDatabase.prototype.remove = function (project) {
        var index = this.data.indexOf(project);
        if (index >= 0) {
            this.data.splice(index, 1);
            this.dataChange.next(this.data.slice());
        }
    };
    return ProjectDatabase;
}());

var ProjectDataSource = /** @class */ (function (_super) {
    __extends(ProjectDataSource, _super);
    function ProjectDataSource(projectDatabase) {
        var _this = _super.call(this) || this;
        _this.projectDatabase = projectDatabase;
        return _this;
    }
    ProjectDataSource.prototype.connect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].merge(this.projectDatabase.dataChange).map(function () {
            return _this.projectDatabase.data;
        });
    };
    ProjectDataSource.prototype.disconnect = function () { };
    return ProjectDataSource;
}(__WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/servers/add-server-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add server</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"server.name\" placeholder=\"Name\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"server.ip\" placeholder=\"IP\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"server.port\" placeholder=\"Port\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\" color=\"accent\">No Thanks</button>\n  <button mat-button (click)=\"onAddClick()\" tabindex=\"2\" mat-raised-button color=\"primary\">Add</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/servers/servers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/servers/servers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"default-header\">\n    <h1>Servers</h1>\n  </div>\n  <div class=\"default-content\">\n\n    <div class=\"example-container mat-elevation-z8\">\n      <mat-table #table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"id\">\n          <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\"> {{row.id}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\"> <a [routerLink]=\"['/server', row.id, 'projects']\" class=\"table-link\">{{row.name}}</a></mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ip\">\n          <mat-header-cell *matHeaderCellDef> IP </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\"> {{row.ip}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"port\">\n          <mat-header-cell *matHeaderCellDef> Port </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\"> {{row.port}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\" style=\"text-align: right\">\n            <button mat-icon-button (click)=\"deleteServer(row)\">\n              <mat-icon aria-label=\"Remove server\">delete</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n    <div class=\"buttons-bar\">\n      <button mat-raised-button color=\"primary\" (click)=\"createModal()\">Add server</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/servers/servers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ServersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddServerDialogComponent; });
/* unused harmony export ServerDatabase */
/* unused harmony export ServerDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_models_server__ = __webpack_require__("../../../../../src/app/shared/models/server.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_server_service__ = __webpack_require__("../../../../../src/app/shared/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromEvent.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













var ServersComponent = /** @class */ (function () {
    function ServersComponent(dialog, serverService) {
        this.dialog = dialog;
        this.serverService = serverService;
        this.serverDatabase = new ServerDatabase();
        this.displayedColumns = ['id', 'name', 'ip', 'port', 'actions'];
    }
    ServersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverService.findAll().then(function (servers) {
            _this.serverDatabase.addServers(servers);
        });
        this.dataSource = new ServerDataSource(this.serverDatabase);
    };
    ServersComponent.prototype.createModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddServerDialogComponent, {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(function (server) {
            if (server) {
                _this.serverService.create(server).then(function (created) {
                    _this.serverDatabase.addServer(created);
                });
            }
        });
    };
    ServersComponent.prototype.deleteServer = function (server) {
        var _this = this;
        this.serverService.delete(server).then(function () {
            _this.serverDatabase.remove(server);
        });
    };
    ServersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-server-list',
            template: __webpack_require__("../../../../../src/app/servers/servers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/servers/servers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__shared_services_server_service__["a" /* ServerService */]])
    ], ServersComponent);
    return ServersComponent;
}());

var AddServerDialogComponent = /** @class */ (function () {
    function AddServerDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.server = new __WEBPACK_IMPORTED_MODULE_1__shared_models_server__["a" /* Server */]();
    }
    AddServerDialogComponent.prototype.onAddClick = function () {
        this.dialogRef.close(this.server);
    };
    AddServerDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddServerDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-server-dialog',
            template: __webpack_require__("../../../../../src/app/servers/add-server-dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialogRef */], Object])
    ], AddServerDialogComponent);
    return AddServerDialogComponent;
}());

var ServerDatabase = /** @class */ (function () {
    function ServerDatabase() {
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    Object.defineProperty(ServerDatabase.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: true,
        configurable: true
    });
    ServerDatabase.prototype.addServer = function (server) {
        var servers = this.data.slice();
        servers.push(server);
        this.dataChange.next(servers);
    };
    ServerDatabase.prototype.addServers = function (servers) {
        this.dataChange.next(servers);
    };
    ServerDatabase.prototype.remove = function (server) {
        var index = this.data.indexOf(server);
        if (index >= 0) {
            this.data.splice(index, 1);
            this.dataChange.next(this.data.slice());
        }
    };
    return ServerDatabase;
}());

var ServerDataSource = /** @class */ (function (_super) {
    __extends(ServerDataSource, _super);
    function ServerDataSource(serverDatabase) {
        var _this = _super.call(this) || this;
        _this.serverDatabase = serverDatabase;
        return _this;
    }
    ServerDataSource.prototype.connect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].merge(this.serverDatabase.dataChange).map(function () {
            return _this.serverDatabase.data;
        });
    };
    ServerDataSource.prototype.disconnect = function () { };
    return ServerDataSource;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "../../../../../src/app/shared/models/server.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Server; });
var Server = /** @class */ (function () {
    function Server() {
    }
    return Server;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/snapshot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Snapshot; });
var Snapshot = /** @class */ (function () {
    function Snapshot() {
    }
    return Snapshot;
}());



/***/ }),

/***/ "../../../../../src/app/shared/node-context-menu/actions/start-node-action/start-node-action.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-menu-item *ngIf=\"node.status == 'stopped'\" (click)=\"startNode()\">\n  <mat-icon>play_arrow</mat-icon>\n  <span>Start</span>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/shared/node-context-menu/actions/start-node-action/start-node-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartNodeActionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_server__ = __webpack_require__("../../../../../src/app/shared/models/server.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_node_service__ = __webpack_require__("../../../../../src/app/shared/services/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cartography_shared_models_node_model__ = __webpack_require__("../../../../../src/app/cartography/shared/models/node.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartNodeActionComponent = /** @class */ (function () {
    function StartNodeActionComponent(nodeService) {
        this.nodeService = nodeService;
    }
    StartNodeActionComponent.prototype.ngOnInit = function () { };
    StartNodeActionComponent.prototype.startNode = function () {
        this.nodeService
            .start(this.server, this.node)
            .subscribe(function (n) {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_server__["a" /* Server */])
    ], StartNodeActionComponent.prototype, "server", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__cartography_shared_models_node_model__["a" /* Node */])
    ], StartNodeActionComponent.prototype, "node", void 0);
    StartNodeActionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-start-node-action',
            template: __webpack_require__("../../../../../src/app/shared/node-context-menu/actions/start-node-action/start-node-action.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_node_service__["a" /* NodeService */]])
    ], StartNodeActionComponent);
    return StartNodeActionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/node-context-menu/actions/stop-node-action/stop-node-action.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-menu-item *ngIf=\"node.status == 'started'\" (click)=\"stopNode()\">\n  <mat-icon>stop</mat-icon>\n  <span>Stop</span>\n</button>\n"

/***/ }),

/***/ "../../../../../src/app/shared/node-context-menu/actions/stop-node-action/stop-node-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopNodeActionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_server__ = __webpack_require__("../../../../../src/app/shared/models/server.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_node_service__ = __webpack_require__("../../../../../src/app/shared/services/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cartography_shared_models_node_model__ = __webpack_require__("../../../../../src/app/cartography/shared/models/node.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StopNodeActionComponent = /** @class */ (function () {
    function StopNodeActionComponent(nodeService) {
        this.nodeService = nodeService;
    }
    StopNodeActionComponent.prototype.ngOnInit = function () {
    };
    StopNodeActionComponent.prototype.stopNode = function () {
        this.nodeService
            .stop(this.server, this.node)
            .subscribe(function (n) {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_server__["a" /* Server */])
    ], StopNodeActionComponent.prototype, "server", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__cartography_shared_models_node_model__["a" /* Node */])
    ], StopNodeActionComponent.prototype, "node", void 0);
    StopNodeActionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stop-node-action',
            template: __webpack_require__("../../../../../src/app/shared/node-context-menu/actions/stop-node-action/stop-node-action.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_node_service__["a" /* NodeService */]])
    ], StopNodeActionComponent);
    return StopNodeActionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/node-context-menu/node-context-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"context-menu\" [style.left]=\"leftPosition\" [style.top]=\"topPosition\" *ngIf=\"node\">\n  <span [matMenuTriggerFor]=\"contextMenu\"></span>\n  <mat-menu #contextMenu=\"matMenu\">\n    <app-start-node-action [server]=\"server\" [node]=\"node\"></app-start-node-action>\n    <app-stop-node-action [server]=\"server\" [node]=\"node\"></app-stop-node-action>\n  </mat-menu>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/node-context-menu/node-context-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".context-menu {\n  position: absolute; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/node-context-menu/node-context-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeContextMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_server__ = __webpack_require__("../../../../../src/app/shared/models/server.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NodeContextMenuComponent = /** @class */ (function () {
    function NodeContextMenuComponent(sanitizer, changeDetector) {
        this.sanitizer = sanitizer;
        this.changeDetector = changeDetector;
    }
    NodeContextMenuComponent.prototype.ngOnInit = function () {
        this.setPosition(0, 0);
    };
    NodeContextMenuComponent.prototype.setPosition = function (top, left) {
        this.topPosition = this.sanitizer.bypassSecurityTrustStyle(top + "px");
        this.leftPosition = this.sanitizer.bypassSecurityTrustStyle(left + "px");
        this.changeDetector.detectChanges();
    };
    NodeContextMenuComponent.prototype.open = function (node, top, left) {
        this.node = node;
        this.setPosition(top, left);
        this.contextMenu.openMenu();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_server__["a" /* Server */])
    ], NodeContextMenuComponent.prototype, "server", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatMenuTrigger */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatMenuTrigger */])
    ], NodeContextMenuComponent.prototype, "contextMenu", void 0);
    NodeContextMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-node-context-menu',
            template: __webpack_require__("../../../../../src/app/shared/node-context-menu/node-context-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/node-context-menu/node-context-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], NodeContextMenuComponent);
    return NodeContextMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/node-select-interface/node-select-interface.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"context-menu\" [style.left]=\"leftPosition\" [style.top]=\"topPosition\" *ngIf=\"node\">\n  <span [matMenuTriggerFor]=\"selectInterfaceMenu\"></span>\n  <mat-menu #selectInterfaceMenu=\"matMenu\">\n      <button mat-menu-item *ngFor=\"let port of node.ports\" (click)=\"chooseInterface(port)\">\n        <mat-icon>add_circle_outline</mat-icon>\n        <span>{{ port.name }}</span>\n      </button>\n  </mat-menu>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/node-select-interface/node-select-interface.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".context-menu {\n  position: absolute; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/node-select-interface/node-select-interface.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeSelectInterfaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NodeSelectInterfaceComponent = /** @class */ (function () {
    function NodeSelectInterfaceComponent(sanitizer, changeDetector) {
        this.sanitizer = sanitizer;
        this.changeDetector = changeDetector;
        this.onChooseInterface = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    NodeSelectInterfaceComponent.prototype.ngOnInit = function () {
        this.setPosition(0, 0);
    };
    NodeSelectInterfaceComponent.prototype.setPosition = function (top, left) {
        this.topPosition = this.sanitizer.bypassSecurityTrustStyle(top + "px");
        this.leftPosition = this.sanitizer.bypassSecurityTrustStyle(left + "px");
        this.changeDetector.detectChanges();
    };
    NodeSelectInterfaceComponent.prototype.open = function (node, top, left) {
        this.node = node;
        this.setPosition(top, left);
        this.contextMenu.openMenu();
    };
    NodeSelectInterfaceComponent.prototype.chooseInterface = function (port) {
        this.onChooseInterface.emit({
            'node': this.node,
            'port': port
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], NodeSelectInterfaceComponent.prototype, "onChooseInterface", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatMenuTrigger */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatMenuTrigger */])
    ], NodeSelectInterfaceComponent.prototype, "contextMenu", void 0);
    NodeSelectInterfaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-node-select-interface',
            template: __webpack_require__("../../../../../src/app/shared/node-select-interface/node-select-interface.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/node-select-interface/node-select-interface.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], NodeSelectInterfaceComponent);
    return NodeSelectInterfaceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/progress-dialog/progress-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Operation in progress</h1>\n<div mat-dialog-content>\n    <mat-progress-bar\n        color=\"primary\"\n        mode=\"determinate\"\n        [value]=\"value\">\n    </mat-progress-bar>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onCancelClick()\" tabindex=\"-1\" color=\"accent\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/progress-dialog/progress-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/progress-dialog/progress-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProgressDialogComponent = /** @class */ (function () {
    function ProgressDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ProgressDialogComponent_1 = ProgressDialogComponent;
    ProgressDialogComponent.prototype.onCancelClick = function () {
        this.dialogRef.close(ProgressDialogComponent_1.CANCELLED);
    };
    ProgressDialogComponent.prototype.ngOnInit = function () {
    };
    ProgressDialogComponent = ProgressDialogComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-progress-dialog',
            template: __webpack_require__("../../../../../src/app/shared/progress-dialog/progress-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/progress-dialog/progress-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object])
    ], ProgressDialogComponent);
    return ProgressDialogComponent;
    var ProgressDialogComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/shared/progress-dialog/progress-dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressDialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_dialog_component__ = __webpack_require__("../../../../../src/app/shared/progress-dialog/progress-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgressDialogService = /** @class */ (function () {
    function ProgressDialogService(dialog) {
        this.dialog = dialog;
    }
    ProgressDialogService.prototype.open = function () {
        var ref = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__progress_dialog_component__["a" /* ProgressDialogComponent */], {
            width: '250px',
        });
        return ref;
    };
    ProgressDialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], ProgressDialogService);
    return ProgressDialogService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/appliance.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplianceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_server_service__ = __webpack_require__("../../../../../src/app/shared/services/http-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplianceService = /** @class */ (function () {
    function ApplianceService(httpServer) {
        this.httpServer = httpServer;
    }
    ApplianceService.prototype.list = function (server) {
        return this.httpServer
            .get(server, '/appliances')
            .map(function (response) { return response.json(); });
    };
    ApplianceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_server_service__["a" /* HttpServer */]])
    ], ApplianceService);
    return ApplianceService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/http-server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpServer = /** @class */ (function () {
    function HttpServer(http) {
        this.http = http;
    }
    HttpServer.prototype.get = function (server, url, options) {
        options = this.getOptionsForServer(server, url, options);
        return this.http.get(url, options);
    };
    HttpServer.prototype.post = function (server, url, body, options) {
        options = this.getOptionsForServer(server, url, options);
        return this.http.post(url, body, options);
    };
    HttpServer.prototype.put = function (server, url, body, options) {
        options = this.getOptionsForServer(server, url, options);
        return this.http.put(url, body, options);
    };
    HttpServer.prototype.delete = function (server, url, options) {
        options = this.getOptionsForServer(server, url, options);
        return this.http.delete(url, options);
    };
    HttpServer.prototype.patch = function (server, url, body, options) {
        options = this.getOptionsForServer(server, url, options);
        return this.http.patch(url, body, options);
    };
    HttpServer.prototype.head = function (server, url, options) {
        options = this.getOptionsForServer(server, url, options);
        return this.http.patch(url, options);
    };
    HttpServer.prototype.options = function (server, url, options) {
        options = this.getOptionsForServer(server, url, options);
        return this.http.options(url, options);
    };
    HttpServer.prototype.getOptionsForServer = function (server, url, options) {
        if (options === undefined) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        }
        options.url = "http://" + server.ip + ":" + server.port + "/v2" + url;
        if (options.headers === null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        }
        if (server.authorization === "basic") {
            var credentials = btoa(server.login + ":" + server.password);
            options.headers.append('Authorization', "Basic " + credentials);
        }
        return options;
    };
    HttpServer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpServer);
    return HttpServer;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/indexed-db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexedDbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_indexeddb__ = __webpack_require__("../../../../angular2-indexeddb/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexedDbService = /** @class */ (function () {
    function IndexedDbService() {
        this.db = new __WEBPACK_IMPORTED_MODULE_1_angular2_indexeddb__["a" /* AngularIndexedDB */]('gns3-web-ui', 1);
    }
    IndexedDbService.prototype.get = function () {
        return this.db;
    };
    IndexedDbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], IndexedDbService);
    return IndexedDbService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/link.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_server_service__ = __webpack_require__("../../../../../src/app/shared/services/http-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinkService = /** @class */ (function () {
    function LinkService(httpServer) {
        this.httpServer = httpServer;
    }
    LinkService.prototype.createLink = function (server, source_node, source_port, target_node, target_port) {
        return this.httpServer
            .post(server, "/projects/" + source_node.project_id + "/links", { "nodes": [
                {
                    node_id: source_node.node_id,
                    port_number: source_port.port_number,
                    adapter_number: source_port.adapter_number
                },
                {
                    node_id: target_node.node_id,
                    port_number: target_port.port_number,
                    adapter_number: target_port.adapter_number
                }
            ] });
    };
    LinkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_server_service__["a" /* HttpServer */]])
    ], LinkService);
    return LinkService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/node.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_server_service__ = __webpack_require__("../../../../../src/app/shared/services/http-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NodeService = /** @class */ (function () {
    function NodeService(httpServer) {
        this.httpServer = httpServer;
    }
    NodeService.prototype.start = function (server, node) {
        return this.httpServer
            .post(server, "/projects/" + node.project_id + "/nodes/" + node.node_id + "/start", {})
            .map(function (response) { return response.json(); });
    };
    NodeService.prototype.stop = function (server, node) {
        return this.httpServer
            .post(server, "/projects/" + node.project_id + "/nodes/" + node.node_id + "/stop", {})
            .map(function (response) { return response.json(); });
    };
    NodeService.prototype.createFromAppliance = function (server, project, appliance, x, y, compute_id) {
        return this.httpServer
            .post(server, "/projects/" + project.project_id + "/appliances/" + appliance.appliance_id, { 'x': x, 'y': y, 'compute_id': compute_id });
    };
    NodeService.prototype.updatePosition = function (server, node, x, y) {
        return this.httpServer
            .put(server, "/projects/" + node.project_id + "/nodes/" + node.node_id, {
            'x': x,
            'y': y
        })
            .map(function (response) { return response.json(); });
    };
    NodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_server_service__["a" /* HttpServer */]])
    ], NodeService);
    return NodeService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_server_service__ = __webpack_require__("../../../../../src/app/shared/services/http-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = /** @class */ (function () {
    function ProjectService(httpServer) {
        this.httpServer = httpServer;
    }
    ProjectService.prototype.get = function (server, project_id) {
        return this.httpServer
            .get(server, "/projects/" + project_id)
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.open = function (server, project_id) {
        return this.httpServer
            .post(server, "/projects/" + project_id + "/open", {})
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.list = function (server) {
        return this.httpServer
            .get(server, '/projects')
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.nodes = function (server, project_id) {
        return this.httpServer
            .get(server, "/projects/" + project_id + "/nodes")
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.links = function (server, project_id) {
        return this.httpServer
            .get(server, "/projects/" + project_id + "/links")
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.drawings = function (server, project_id) {
        return this.httpServer
            .get(server, "/projects/" + project_id + "/drawings")
            .map(function (response) { return response.json(); });
    };
    ProjectService.prototype.delete = function (server, project_id) {
        return this.httpServer
            .delete(server, "/projects/" + project_id);
    };
    ProjectService.prototype.notificationsPath = function (server, project_id) {
        return "ws://" + server.ip + ":" + server.port + "/v2/projects/" + project_id + "/notifications/ws";
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_server_service__["a" /* HttpServer */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__indexed_db_service__ = __webpack_require__("../../../../../src/app/shared/services/indexed-db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerService = /** @class */ (function () {
    function ServerService(indexedDbService) {
        var _this = this;
        this.indexedDbService = indexedDbService;
        this.tablename = "servers";
        this.ready = indexedDbService.get().openDatabase(1, function (evt) {
            var store = evt.currentTarget.result.createObjectStore(_this.tablename, { keyPath: "id", autoIncrement: true });
        });
    }
    ServerService.prototype.get = function (id) {
        var _this = this;
        return this.onReady(function () {
            return _this.indexedDbService.get().getByKey(_this.tablename, id);
        });
    };
    ServerService.prototype.create = function (server) {
        var _this = this;
        return this.onReady(function () {
            var promise = new Promise(function (resolve, reject) {
                _this.indexedDbService.get().add(_this.tablename, server).then(function (added) {
                    server.id = added.key;
                    resolve(server);
                }, reject);
            });
            return promise;
        });
    };
    ServerService.prototype.findAll = function () {
        var _this = this;
        return this.onReady(function () {
            return _this.indexedDbService.get().getAll(_this.tablename);
        });
    };
    ServerService.prototype.delete = function (server) {
        var _this = this;
        return this.onReady(function () {
            return _this.indexedDbService.get().delete(_this.tablename, server.id);
        });
    };
    ServerService.prototype.onReady = function (query) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.ready.then(function () {
                query()
                    .then(function (result) {
                    resolve(result);
                }, function (error) {
                    reject(error);
                });
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ServerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__indexed_db_service__["a" /* IndexedDbService */]])
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/snapshot.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnapshotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_server_service__ = __webpack_require__("../../../../../src/app/shared/services/http-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnapshotService = /** @class */ (function () {
    function SnapshotService(httpServer) {
        this.httpServer = httpServer;
    }
    SnapshotService.prototype.create = function (server, project_id, snapshot) {
        return this.httpServer
            .post(server, "/projects/" + project_id + "/snapshots", snapshot)
            .map(function (response) { return response.json(); });
    };
    SnapshotService.prototype.list = function (server, project_id) {
        return this.httpServer
            .get(server, "/projects/" + project_id + "/snapshots")
            .map(function (response) { return response.json(); });
    };
    SnapshotService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_server_service__["a" /* HttpServer */]])
    ], SnapshotService);
    return SnapshotService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/symbol.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SymbolService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__http_server_service__ = __webpack_require__("../../../../../src/app/shared/services/http-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SymbolService = /** @class */ (function () {
    function SymbolService(httpServer) {
        this.httpServer = httpServer;
        this.symbols = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    SymbolService.prototype.get = function (symbol_id) {
        return this.symbols
            .getValue()
            .find(function (symbol) { return symbol.symbol_id === symbol_id; });
    };
    SymbolService.prototype.load = function (server) {
        var _this = this;
        this.list(server).subscribe(function (symbols) {
            var streams = symbols.map(function (symbol) { return _this.raw(server, symbol.symbol_id); });
            __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].forkJoin(streams).subscribe(function (results) {
                symbols.forEach(function (symbol, i) {
                    symbol.raw = results[i];
                });
                _this.symbols.next(symbols);
            });
        });
        return this.symbols.asObservable();
    };
    SymbolService.prototype.list = function (server) {
        return this.httpServer
            .get(server, '/symbols')
            .map(function (response) { return response.json(); });
    };
    SymbolService.prototype.raw = function (server, symbol_id) {
        var encoded_uri = encodeURI(symbol_id);
        return this.httpServer
            .get(server, "/symbols/" + encoded_uri + "/raw")
            .map(function (response) { return response.text(); });
    };
    SymbolService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__http_server_service__["a" /* HttpServer */]])
    ], SymbolService);
    return SymbolService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/version.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_server_service__ = __webpack_require__("../../../../../src/app/shared/services/http-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VersionService = /** @class */ (function () {
    function VersionService(httpServer) {
        this.httpServer = httpServer;
    }
    VersionService.prototype.get = function (server) {
        return this.httpServer
            .get(server, '/version')
            .map(function (response) { return response.json(); });
    };
    VersionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_server_service__["a" /* HttpServer */]])
    ], VersionService);
    return VersionService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map