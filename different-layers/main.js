(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _project_map_project_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-map/project-map.component */ "./src/app/project-map/project-map.component.ts");
/* harmony import */ var _servers_servers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servers/servers.component */ "./src/app/servers/servers.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-layout/default-layout.component */ "./src/app/default-layout/default-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutComponent"],
        children: [
            { path: '', redirectTo: 'servers', pathMatch: 'full' },
            { path: 'servers', component: _servers_servers_component__WEBPACK_IMPORTED_MODULE_4__["ServersComponent"] },
            { path: 'server/:server_id/projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"] }
        ]
    },
    { path: 'server/:server_id/project/:project_id', component: _project_map_project_map_component__WEBPACK_IMPORTED_MODULE_3__["ProjectMapComponent"] },
];
var routerModule;
if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].electron) {
    // angular in electron has problem with base-href and links separated by slashes, because of that
    // we use simply hashes
    routerModule = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true });
}
else {
    routerModule = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);
}
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [routerModule],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(http, iconReg, sanitizer) {
        iconReg.addSvgIcon('gns3', sanitizer.bypassSecurityTrustResourceUrl('./assets/gns3_icon.svg'));
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var d3_ng2_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-ng2-service */ "./node_modules/d3-ng2-service/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_services_version_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/services/version.service */ "./src/app/shared/services/version.service.ts");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/project.service */ "./src/app/shared/services/project.service.ts");
/* harmony import */ var _shared_services_symbol_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/symbol.service */ "./src/app/shared/services/symbol.service.ts");
/* harmony import */ var _shared_services_server_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/services/server.service */ "./src/app/shared/services/server.service.ts");
/* harmony import */ var _shared_services_indexed_db_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/services/indexed-db.service */ "./src/app/shared/services/indexed-db.service.ts");
/* harmony import */ var _shared_services_http_server_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/http-server.service */ "./src/app/shared/services/http-server.service.ts");
/* harmony import */ var _shared_services_snapshot_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/services/snapshot.service */ "./src/app/shared/services/snapshot.service.ts");
/* harmony import */ var _shared_progress_dialog_progress_dialog_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/progress-dialog/progress-dialog.service */ "./src/app/shared/progress-dialog/progress-dialog.service.ts");
/* harmony import */ var _shared_services_node_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/services/node.service */ "./src/app/shared/services/node.service.ts");
/* harmony import */ var _shared_services_appliance_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/services/appliance.service */ "./src/app/shared/services/appliance.service.ts");
/* harmony import */ var _shared_services_link_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/services/link.service */ "./src/app/shared/services/link.service.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./default-layout/default-layout.component */ "./src/app/default-layout/default-layout.component.ts");
/* harmony import */ var _shared_progress_dialog_progress_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/progress-dialog/progress-dialog.component */ "./src/app/shared/progress-dialog/progress-dialog.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _project_map_project_map_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./project-map/project-map.component */ "./src/app/project-map/project-map.component.ts");
/* harmony import */ var _servers_servers_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./servers/servers.component */ "./src/app/servers/servers.component.ts");
/* harmony import */ var _shared_node_context_menu_node_context_menu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/node-context-menu/node-context-menu.component */ "./src/app/shared/node-context-menu/node-context-menu.component.ts");
/* harmony import */ var _shared_node_context_menu_actions_start_node_action_start_node_action_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/node-context-menu/actions/start-node-action/start-node-action.component */ "./src/app/shared/node-context-menu/actions/start-node-action/start-node-action.component.ts");
/* harmony import */ var _shared_node_context_menu_actions_stop_node_action_stop_node_action_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/node-context-menu/actions/stop-node-action/stop-node-action.component */ "./src/app/shared/node-context-menu/actions/stop-node-action/stop-node-action.component.ts");
/* harmony import */ var _appliance_appliance_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./appliance/appliance.component */ "./src/app/appliance/appliance.component.ts");
/* harmony import */ var _appliance_appliance_list_dialog_appliance_list_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./appliance/appliance-list-dialog/appliance-list-dialog.component */ "./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.ts");
/* harmony import */ var _shared_node_select_interface_node_select_interface_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/node-select-interface/node-select-interface.component */ "./src/app/shared/node-select-interface/node-select-interface.component.ts");
/* harmony import */ var _cartography_cartography_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./cartography/cartography.module */ "./src/app/cartography/cartography.module.ts");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var _shared_handlers_project_web_service_handler__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/handlers/project-web-service-handler */ "./src/app/shared/handlers/project-web-service-handler.ts");
/* harmony import */ var _cartography_shared_datasources_links_datasource__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./cartography/shared/datasources/links-datasource */ "./src/app/cartography/shared/datasources/links-datasource.ts");
/* harmony import */ var _cartography_shared_datasources_nodes_datasource__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./cartography/shared/datasources/nodes-datasource */ "./src/app/cartography/shared/datasources/nodes-datasource.ts");
/* harmony import */ var _cartography_shared_datasources_symbols_datasource__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./cartography/shared/datasources/symbols-datasource */ "./src/app/cartography/shared/datasources/symbols-datasource.ts");
/* harmony import */ var _cartography_shared_managers_selection_manager__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./cartography/shared/managers/selection-manager */ "./src/app/cartography/shared/managers/selection-manager.ts");
/* harmony import */ var _cartography_map_helpers_in_rectangle_helper__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./cartography/map/helpers/in-rectangle-helper */ "./src/app/cartography/map/helpers/in-rectangle-helper.ts");
/* harmony import */ var _cartography_shared_datasources_drawings_datasource__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./cartography/shared/datasources/drawings-datasource */ "./src/app/cartography/shared/datasources/drawings-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"],
                _project_map_project_map_component__WEBPACK_IMPORTED_MODULE_26__["ProjectMapComponent"],
                _servers_servers_component__WEBPACK_IMPORTED_MODULE_27__["ServersComponent"],
                _servers_servers_component__WEBPACK_IMPORTED_MODULE_27__["AddServerDialogComponent"],
                _project_map_project_map_component__WEBPACK_IMPORTED_MODULE_26__["CreateSnapshotDialogComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_22__["ProjectsComponent"],
                _default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_23__["DefaultLayoutComponent"],
                _shared_progress_dialog_progress_dialog_component__WEBPACK_IMPORTED_MODULE_24__["ProgressDialogComponent"],
                _shared_node_context_menu_node_context_menu_component__WEBPACK_IMPORTED_MODULE_28__["NodeContextMenuComponent"],
                _shared_node_context_menu_actions_start_node_action_start_node_action_component__WEBPACK_IMPORTED_MODULE_29__["StartNodeActionComponent"],
                _shared_node_context_menu_actions_stop_node_action_stop_node_action_component__WEBPACK_IMPORTED_MODULE_30__["StopNodeActionComponent"],
                _appliance_appliance_component__WEBPACK_IMPORTED_MODULE_31__["ApplianceComponent"],
                _appliance_appliance_list_dialog_appliance_list_dialog_component__WEBPACK_IMPORTED_MODULE_32__["ApplianceListDialogComponent"],
                _shared_node_select_interface_node_select_interface_component__WEBPACK_IMPORTED_MODULE_33__["NodeSelectInterfaceComponent"],
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _cartography_cartography_module__WEBPACK_IMPORTED_MODULE_34__["CartographyModule"]
            ],
            providers: [
                d3_ng2_service__WEBPACK_IMPORTED_MODULE_8__["D3Service"],
                _shared_services_version_service__WEBPACK_IMPORTED_MODULE_11__["VersionService"],
                _shared_services_project_service__WEBPACK_IMPORTED_MODULE_12__["ProjectService"],
                _shared_services_symbol_service__WEBPACK_IMPORTED_MODULE_13__["SymbolService"],
                _shared_services_server_service__WEBPACK_IMPORTED_MODULE_14__["ServerService"],
                _shared_services_appliance_service__WEBPACK_IMPORTED_MODULE_20__["ApplianceService"],
                _shared_services_node_service__WEBPACK_IMPORTED_MODULE_19__["NodeService"],
                _shared_services_link_service__WEBPACK_IMPORTED_MODULE_21__["LinkService"],
                _shared_services_indexed_db_service__WEBPACK_IMPORTED_MODULE_15__["IndexedDbService"],
                _shared_services_http_server_service__WEBPACK_IMPORTED_MODULE_16__["HttpServer"],
                _shared_services_snapshot_service__WEBPACK_IMPORTED_MODULE_17__["SnapshotService"],
                _shared_progress_dialog_progress_dialog_service__WEBPACK_IMPORTED_MODULE_18__["ProgressDialogService"],
                _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_35__["ToasterService"],
                _shared_handlers_project_web_service_handler__WEBPACK_IMPORTED_MODULE_36__["ProjectWebServiceHandler"],
                _cartography_shared_datasources_links_datasource__WEBPACK_IMPORTED_MODULE_37__["LinksDataSource"],
                _cartography_shared_datasources_nodes_datasource__WEBPACK_IMPORTED_MODULE_38__["NodesDataSource"],
                _cartography_shared_datasources_symbols_datasource__WEBPACK_IMPORTED_MODULE_39__["SymbolsDataSource"],
                _cartography_shared_managers_selection_manager__WEBPACK_IMPORTED_MODULE_40__["SelectionManager"],
                _cartography_map_helpers_in_rectangle_helper__WEBPACK_IMPORTED_MODULE_41__["InRectangleHelper"],
                _cartography_shared_datasources_drawings_datasource__WEBPACK_IMPORTED_MODULE_42__["DrawingsDataSource"]
            ],
            entryComponents: [
                _servers_servers_component__WEBPACK_IMPORTED_MODULE_27__["AddServerDialogComponent"],
                _project_map_project_map_component__WEBPACK_IMPORTED_MODULE_26__["CreateSnapshotDialogComponent"],
                _shared_progress_dialog_progress_dialog_component__WEBPACK_IMPORTED_MODULE_24__["ProgressDialogComponent"],
                _appliance_appliance_list_dialog_appliance_list_dialog_component__WEBPACK_IMPORTED_MODULE_32__["ApplianceListDialogComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n    <div class=\"example-header\">\n      <mat-form-field floatPlaceholder=\"never\">\n        <input matInput #filter placeholder=\"Filter appliances\">\n      </mat-form-field>\n    </div>\n\n    <mat-table #table [dataSource]=\"dataSource\">\n\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row;\"> <a (click)=\"addNode(row)\" href='javascript:void(0);' class=\"table-link\">{{row.name}}</a> </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n</div>\n<div mat-dialog-actions align=\"end\">\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\" color=\"accent\">Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 400px; }\n\n.mat-form-field {\n  font-size: 16px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: ApplianceListDialogComponent, ApplianceDatabase, ApplianceDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplianceListDialogComponent", function() { return ApplianceListDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplianceDatabase", function() { return ApplianceDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplianceDataSource", function() { return ApplianceDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var _shared_services_appliance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/appliance.service */ "./src/app/shared/services/appliance.service.ts");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_add_operator_startWith__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/startWith */ "./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var rxjs_add_observable_merge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/merge */ "./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/observable/fromEvent */ "./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
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
        rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ApplianceListDialogComponent.prototype, "filter", void 0);
    ApplianceListDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appliance-list-dialog',
            template: __webpack_require__(/*! ./appliance-list-dialog.component.html */ "./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.html"),
            styles: [__webpack_require__(/*! ./appliance-list-dialog.component.scss */ "./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _shared_services_appliance_service__WEBPACK_IMPORTED_MODULE_4__["ApplianceService"], Object])
    ], ApplianceListDialogComponent);
    return ApplianceListDialogComponent;
}());

var ApplianceDatabase = /** @class */ (function () {
    function ApplianceDatabase(server, applianceService) {
        var _this = this;
        this.server = server;
        this.applianceService = applianceService;
        this.dataChange = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.applianceService
            .list(this.server)
            .subscribe(function (appliances) {
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
        _this.filterChange = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
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
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].merge.apply(rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"], displayDataChanges).map(function () {
            return _this.applianceDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) !== -1;
            });
        });
    };
    ApplianceDataSource.prototype.disconnect = function () { };
    return ApplianceDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/appliance/appliance.component.html":
/*!****************************************************!*\
  !*** ./src/app/appliance/appliance.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button (click)=\"listAppliancesModal()\">\n  <mat-icon>add_to_queue</mat-icon>\n</button>\n"

/***/ }),

/***/ "./src/app/appliance/appliance.component.scss":
/*!****************************************************!*\
  !*** ./src/app/appliance/appliance.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appliance/appliance.component.ts":
/*!**************************************************!*\
  !*** ./src/app/appliance/appliance.component.ts ***!
  \**************************************************/
/*! exports provided: ApplianceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplianceComponent", function() { return ApplianceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _appliance_list_dialog_appliance_list_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appliance-list-dialog/appliance-list-dialog.component */ "./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.ts");
/* harmony import */ var _shared_models_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/server */ "./src/app/shared/models/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApplianceComponent = /** @class */ (function () {
    function ApplianceComponent(dialog) {
        this.dialog = dialog;
        this.onNodeCreation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ApplianceComponent.prototype.ngOnInit = function () { };
    ApplianceComponent.prototype.listAppliancesModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_appliance_list_dialog_appliance_list_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ApplianceListDialogComponent"], {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_models_server__WEBPACK_IMPORTED_MODULE_3__["Server"])
    ], ApplianceComponent.prototype, "server", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ApplianceComponent.prototype, "onNodeCreation", void 0);
    ApplianceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-appliance',
            template: __webpack_require__(/*! ./appliance.component.html */ "./src/app/appliance/appliance.component.html"),
            styles: [__webpack_require__(/*! ./appliance.component.scss */ "./src/app/appliance/appliance.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ApplianceComponent);
    return ApplianceComponent;
}());



/***/ }),

/***/ "./src/app/cartography/cartography.module.ts":
/*!***************************************************!*\
  !*** ./src/app/cartography/cartography.module.ts ***!
  \***************************************************/
/*! exports provided: CartographyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartographyModule", function() { return CartographyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.component */ "./src/app/cartography/map/map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartographyModule = /** @class */ (function () {
    function CartographyModule() {
    }
    CartographyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"]],
            exports: [_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"]]
        })
    ], CartographyModule);
    return CartographyModule;
}());



/***/ }),

/***/ "./src/app/cartography/map/helpers/in-rectangle-helper.ts":
/*!****************************************************************!*\
  !*** ./src/app/cartography/map/helpers/in-rectangle-helper.ts ***!
  \****************************************************************/
/*! exports provided: InRectangleHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InRectangleHelper", function() { return InRectangleHelper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InRectangleHelper = /** @class */ (function () {
    function InRectangleHelper() {
    }
    InRectangleHelper.prototype.inRectangle = function (item, rectangle) {
        return (rectangle.x <= item.x && item.x < (rectangle.x + rectangle.width)
            && rectangle.y <= item.y && item.y < (rectangle.y + rectangle.height));
    };
    InRectangleHelper = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], InRectangleHelper);
    return InRectangleHelper;
}());



/***/ }),

/***/ "./src/app/cartography/map/helpers/multi-link-calculator-helper.ts":
/*!*************************************************************************!*\
  !*** ./src/app/cartography/map/helpers/multi-link-calculator-helper.ts ***!
  \*************************************************************************/
/*! exports provided: MultiLinkCalculatorHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiLinkCalculatorHelper", function() { return MultiLinkCalculatorHelper; });
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

/***/ "./src/app/cartography/map/map.component.html":
/*!****************************************************!*\
  !*** ./src/app/cartography/map/map.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg preserveAspectRatio=\"none\">\n</svg>\n"

/***/ }),

/***/ "./src/app/cartography/map/map.component.scss":
/*!****************************************************!*\
  !*** ./src/app/cartography/map/map.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/cartography/map/map.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cartography/map/map.component.ts ***!
  \**************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var d3_ng2_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-ng2-service */ "./node_modules/d3-ng2-service/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var _shared_widgets_graph_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/widgets/graph-layout */ "./src/app/cartography/shared/widgets/graph-layout.ts");
/* harmony import */ var _shared_models_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/context */ "./src/app/cartography/shared/models/context.ts");
/* harmony import */ var _shared_models_size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/size */ "./src/app/cartography/shared/models/size.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        this.graphLayout.disconnect(this.svg);
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var d3 = this.d3;
        var rootElement;
        if (this.parentNativeElement !== null) {
            rootElement = d3.select(this.parentNativeElement);
            this.svg = rootElement.select('svg');
            this.graphContext = new _shared_models_context__WEBPACK_IMPORTED_MODULE_4__["Context"](true);
            if (this.windowFullSize) {
                this.graphContext.setSize(this.getSize());
            }
            else {
                this.graphContext.setSize(new _shared_models_size__WEBPACK_IMPORTED_MODULE_5__["Size"](this.width, this.height));
            }
            this.graphLayout = new _shared_widgets_graph_layout__WEBPACK_IMPORTED_MODULE_3__["GraphLayout"]();
            this.graphLayout.connect(this.svg, this.graphContext);
            this.graphLayout.getNodesWidget().addOnNodeDraggingCallback(function (event, n) {
                var linksWidget = _this.graphLayout.getLinksWidget();
                linksWidget.select(_this.svg).each(function (link) {
                    if (link.target.node_id === n.node_id || link.source.node_id === n.node_id) {
                        var selection = Object(d3_selection__WEBPACK_IMPORTED_MODULE_2__["select"])(this);
                        linksWidget.revise(selection);
                    }
                });
            });
            this.graphLayout.draw(this.svg, this.graphContext);
        }
    };
    MapComponent.prototype.getSize = function () {
        return new _shared_models_size__WEBPACK_IMPORTED_MODULE_5__["Size"](document.documentElement.clientWidth, document.documentElement.clientHeight);
    };
    MapComponent.prototype.changeLayout = function () {
        if (this.windowFullSize) {
            if (this.parentNativeElement != null) {
                this.graphContext.setSize(this.getSize());
            }
        }
        else {
        }
        if (this.graphContext != null) {
            this.svg
                .attr('width', this.graphContext.getSize().width)
                .attr('height', this.graphContext.getSize().height);
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
            if (link.source && link.target) {
                link.x = link.source.x + (link.target.x - link.source.x) * 0.5;
                link.y = link.source.y + (link.target.y - link.source.y) * 0.5;
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
    MapComponent.prototype.onResize = function (event) {
        this.changeLayout();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "nodes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "links", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "drawings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "symbols", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "windowFullSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MapComponent.prototype, "onResize", null);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/cartography/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/cartography/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            d3_ng2_service__WEBPACK_IMPORTED_MODULE_1__["D3Service"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/cartography/shared/datasources/datasource.ts":
/*!**************************************************************!*\
  !*** ./src/app/cartography/shared/datasources/datasource.ts ***!
  \**************************************************************/
/*! exports provided: DataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs/_esm5/BehaviorSubject.js");

var DataSource = /** @class */ (function () {
    function DataSource() {
        this.data = [];
        this.dataChange = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    DataSource.prototype.getItems = function () {
        return this.data;
    };
    DataSource.prototype.add = function (item) {
        this.data.push(item);
        this.dataChange.next(this.data);
    };
    DataSource.prototype.set = function (data) {
        this.data = data;
        this.dataChange.next(this.data);
    };
    DataSource.prototype.update = function (item) {
        var index = this.findIndex(item);
        if (index >= 0) {
            this.data[index] = Object.assign(this.data[index], item);
            this.dataChange.next(this.data);
        }
    };
    DataSource.prototype.remove = function (item) {
        var index = this.findIndex(item);
        if (index >= 0) {
            this.data.splice(index, 1);
            this.dataChange.next(this.data);
        }
    };
    DataSource.prototype.connect = function () {
        return this.dataChange;
    };
    return DataSource;
}());



/***/ }),

/***/ "./src/app/cartography/shared/datasources/drawings-datasource.ts":
/*!***********************************************************************!*\
  !*** ./src/app/cartography/shared/datasources/drawings-datasource.ts ***!
  \***********************************************************************/
/*! exports provided: DrawingsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingsDataSource", function() { return DrawingsDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasource */ "./src/app/cartography/shared/datasources/datasource.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DrawingsDataSource = /** @class */ (function (_super) {
    __extends(DrawingsDataSource, _super);
    function DrawingsDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrawingsDataSource.prototype.findIndex = function (drawing) {
        return this.data.findIndex(function (d) { return d.drawing_id === drawing.drawing_id; });
    };
    DrawingsDataSource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DrawingsDataSource);
    return DrawingsDataSource;
}(_datasource__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/cartography/shared/datasources/links-datasource.ts":
/*!********************************************************************!*\
  !*** ./src/app/cartography/shared/datasources/links-datasource.ts ***!
  \********************************************************************/
/*! exports provided: LinksDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksDataSource", function() { return LinksDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasource */ "./src/app/cartography/shared/datasources/datasource.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LinksDataSource = /** @class */ (function (_super) {
    __extends(LinksDataSource, _super);
    function LinksDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinksDataSource.prototype.findIndex = function (link) {
        return this.data.findIndex(function (l) { return l.link_id === link.link_id; });
    };
    LinksDataSource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LinksDataSource);
    return LinksDataSource;
}(_datasource__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/cartography/shared/datasources/nodes-datasource.ts":
/*!********************************************************************!*\
  !*** ./src/app/cartography/shared/datasources/nodes-datasource.ts ***!
  \********************************************************************/
/*! exports provided: NodesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodesDataSource", function() { return NodesDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasource */ "./src/app/cartography/shared/datasources/datasource.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NodesDataSource = /** @class */ (function (_super) {
    __extends(NodesDataSource, _super);
    function NodesDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodesDataSource.prototype.findIndex = function (node) {
        return this.data.findIndex(function (n) { return n.node_id === node.node_id; });
    };
    NodesDataSource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NodesDataSource);
    return NodesDataSource;
}(_datasource__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/cartography/shared/datasources/symbols-datasource.ts":
/*!**********************************************************************!*\
  !*** ./src/app/cartography/shared/datasources/symbols-datasource.ts ***!
  \**********************************************************************/
/*! exports provided: SymbolsDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolsDataSource", function() { return SymbolsDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datasource */ "./src/app/cartography/shared/datasources/datasource.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SymbolsDataSource = /** @class */ (function (_super) {
    __extends(SymbolsDataSource, _super);
    function SymbolsDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SymbolsDataSource.prototype.findIndex = function (symbol) {
        return this.data.findIndex(function (s) { return s.symbol_id === symbol.symbol_id; });
    };
    SymbolsDataSource = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SymbolsDataSource);
    return SymbolsDataSource;
}(_datasource__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/cartography/shared/managers/layers-manager.ts":
/*!***************************************************************!*\
  !*** ./src/app/cartography/shared/managers/layers-manager.ts ***!
  \***************************************************************/
/*! exports provided: LayersManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayersManager", function() { return LayersManager; });
/* harmony import */ var _models_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/layer */ "./src/app/cartography/shared/models/layer.ts");

var LayersManager = /** @class */ (function () {
    function LayersManager() {
        this.layers = {};
    }
    LayersManager.prototype.getLayersList = function () {
        var _this = this;
        return Object.keys(this.layers).sort(function (a, b) {
            return Number(a) - Number(b);
        }).map(function (key) {
            return _this.layers[key];
        });
    };
    LayersManager.prototype.setNodes = function (nodes) {
        var _this = this;
        nodes
            .forEach(function (node) {
            var layer = _this.getLayerForKey(node.z.toString());
            layer.nodes.push(node);
        });
    };
    LayersManager.prototype.setDrawings = function (drawings) {
        var _this = this;
        drawings
            .forEach(function (drawing) {
            var layer = _this.getLayerForKey(drawing.z.toString());
            layer.drawings.push(drawing);
        });
    };
    LayersManager.prototype.setLinks = function (links) {
        var _this = this;
        links
            .filter(function (link) { return link.source && link.target; })
            .forEach(function (link) {
            var key = Math.min(link.source.z, link.target.z).toString();
            var layer = _this.getLayerForKey(key);
            layer.links.push(link);
        });
    };
    LayersManager.prototype.clear = function () {
        this.layers = {};
    };
    LayersManager.prototype.getLayerForKey = function (key) {
        if (!(key in this.layers)) {
            this.layers[key] = new _models_layer__WEBPACK_IMPORTED_MODULE_0__["Layer"]();
            this.layers[key].index = Number(key);
        }
        return this.layers[key];
    };
    return LayersManager;
}());



/***/ }),

/***/ "./src/app/cartography/shared/managers/selection-manager.ts":
/*!******************************************************************!*\
  !*** ./src/app/cartography/shared/managers/selection-manager.ts ***!
  \******************************************************************/
/*! exports provided: SelectionManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionManager", function() { return SelectionManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _datasources_nodes_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datasources/nodes-datasource */ "./src/app/cartography/shared/datasources/nodes-datasource.ts");
/* harmony import */ var _datasources_links_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datasources/links-datasource */ "./src/app/cartography/shared/datasources/links-datasource.ts");
/* harmony import */ var _map_helpers_in_rectangle_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../map/helpers/in-rectangle-helper */ "./src/app/cartography/map/helpers/in-rectangle-helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectionManager = /** @class */ (function () {
    function SelectionManager(nodesDataSource, linksDataSource, inRectangleHelper) {
        this.nodesDataSource = nodesDataSource;
        this.linksDataSource = linksDataSource;
        this.inRectangleHelper = inRectangleHelper;
        this.selectedNodes = [];
        this.selectedLinks = [];
    }
    SelectionManager.prototype.subscribe = function (subject) {
        var _this = this;
        this.subscription = subject.subscribe(function (rectangle) {
            _this.selectedNodes = _this.getSelectedItemsInRectangle(_this.nodesDataSource, rectangle);
            _this.selectedLinks = _this.getSelectedItemsInRectangle(_this.linksDataSource, rectangle);
        });
    };
    SelectionManager.prototype.getSelectedNodes = function () {
        return this.selectedNodes;
    };
    SelectionManager.prototype.getSelectedLinks = function () {
        return this.selectedLinks;
    };
    SelectionManager.prototype.setSelectedNodes = function (nodes) {
        this.selectedNodes = this.setSelectedItems(this.nodesDataSource, function (node) {
            return !!nodes.find(function (n) { return node.node_id === n.node_id; });
        });
    };
    SelectionManager.prototype.setSelectedLinks = function (links) {
        this.selectedLinks = this.setSelectedItems(this.linksDataSource, function (link) {
            return !!links.find(function (l) { return link.link_id === l.link_id; });
        });
    };
    SelectionManager.prototype.getSelectedItemsInRectangle = function (dataSource, rectangle) {
        var _this = this;
        return this.setSelectedItems(dataSource, function (item) {
            return _this.inRectangleHelper.inRectangle(item, rectangle);
        });
    };
    SelectionManager.prototype.setSelected = function (item, isSelected, dataSource) {
        if (item.is_selected !== isSelected) {
            item.is_selected = isSelected;
            dataSource.update(item);
        }
        return item.is_selected;
    };
    SelectionManager.prototype.setSelectedItems = function (dataSource, discriminator) {
        var _this = this;
        var selected = [];
        dataSource.getItems().forEach(function (item) {
            var isSelected = discriminator(item);
            _this.setSelected(item, isSelected, dataSource);
            if (isSelected) {
                selected.push(item);
            }
        });
        return selected;
    };
    SelectionManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_datasources_nodes_datasource__WEBPACK_IMPORTED_MODULE_1__["NodesDataSource"],
            _datasources_links_datasource__WEBPACK_IMPORTED_MODULE_2__["LinksDataSource"],
            _map_helpers_in_rectangle_helper__WEBPACK_IMPORTED_MODULE_3__["InRectangleHelper"]])
    ], SelectionManager);
    return SelectionManager;
}());



/***/ }),

/***/ "./src/app/cartography/shared/models/context.ts":
/*!******************************************************!*\
  !*** ./src/app/cartography/shared/models/context.ts ***!
  \******************************************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./size */ "./src/app/cartography/shared/models/size.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./src/app/cartography/shared/models/point.ts");


var Context = /** @class */ (function () {
    function Context(centerZeroZeroPoint) {
        if (centerZeroZeroPoint === void 0) { centerZeroZeroPoint = false; }
        this.centerZeroZeroPoint = centerZeroZeroPoint;
        this.size = new _size__WEBPACK_IMPORTED_MODULE_0__["Size"](0, 0);
    }
    Context.prototype.getSize = function () {
        return this.size;
    };
    Context.prototype.setSize = function (size) {
        this.size = size;
    };
    Context.prototype.getZeroZeroTransformationPoint = function () {
        if (this.centerZeroZeroPoint) {
            return new _point__WEBPACK_IMPORTED_MODULE_1__["Point"](this.getSize().width / 2., this.getSize().height / 2.);
        }
        return new _point__WEBPACK_IMPORTED_MODULE_1__["Point"](0, 0);
    };
    return Context;
}());



/***/ }),

/***/ "./src/app/cartography/shared/models/drawing-line.ts":
/*!***********************************************************!*\
  !*** ./src/app/cartography/shared/models/drawing-line.ts ***!
  \***********************************************************/
/*! exports provided: DrawingLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingLine", function() { return DrawingLine; });
var DrawingLine = /** @class */ (function () {
    function DrawingLine() {
    }
    return DrawingLine;
}());



/***/ }),

/***/ "./src/app/cartography/shared/models/layer.ts":
/*!****************************************************!*\
  !*** ./src/app/cartography/shared/models/layer.ts ***!
  \****************************************************/
/*! exports provided: Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
var Layer = /** @class */ (function () {
    function Layer() {
        this.nodes = [];
        this.drawings = [];
        this.links = [];
    }
    return Layer;
}());



/***/ }),

/***/ "./src/app/cartography/shared/models/link-status.ts":
/*!**********************************************************!*\
  !*** ./src/app/cartography/shared/models/link-status.ts ***!
  \**********************************************************/
/*! exports provided: LinkStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkStatus", function() { return LinkStatus; });
var LinkStatus = /** @class */ (function () {
    function LinkStatus(x, y, status) {
        this.x = x;
        this.y = y;
        this.status = status;
    }
    return LinkStatus;
}());



/***/ }),

/***/ "./src/app/cartography/shared/models/node.ts":
/*!***************************************************!*\
  !*** ./src/app/cartography/shared/models/node.ts ***!
  \***************************************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
var Node = /** @class */ (function () {
    function Node() {
        this.is_selected = false;
    }
    return Node;
}());



/***/ }),

/***/ "./src/app/cartography/shared/models/point.ts":
/*!****************************************************!*\
  !*** ./src/app/cartography/shared/models/point.ts ***!
  \****************************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());

;


/***/ }),

/***/ "./src/app/cartography/shared/models/rectangle.ts":
/*!********************************************************!*\
  !*** ./src/app/cartography/shared/models/rectangle.ts ***!
  \********************************************************/
/*! exports provided: Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    return Rectangle;
}());



/***/ }),

/***/ "./src/app/cartography/shared/models/size.ts":
/*!***************************************************!*\
  !*** ./src/app/cartography/shared/models/size.ts ***!
  \***************************************************/
/*! exports provided: Size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
var Size = /** @class */ (function () {
    function Size(width, height) {
        this.width = width;
        this.height = height;
    }
    return Size;
}());



/***/ }),

/***/ "./src/app/cartography/shared/tools/moving-tool.ts":
/*!*********************************************************!*\
  !*** ./src/app/cartography/shared/tools/moving-tool.ts ***!
  \*********************************************************/
/*! exports provided: MovingTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovingTool", function() { return MovingTool; });
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");


var MovingTool = /** @class */ (function () {
    function MovingTool() {
        this.zoom = Object(d3_zoom__WEBPACK_IMPORTED_MODULE_0__["zoom"])()
            .scaleExtent([1 / 2, 8]);
    }
    MovingTool.prototype.connect = function (selection, context) {
        this.selection = selection;
        this.context = context;
    };
    MovingTool.prototype.draw = function (selection, context) {
        this.selection = selection;
        this.context = context;
    };
    MovingTool.prototype.activate = function () {
        var self = this;
        var onZoom = function () {
            var canvas = self.selection.select("g.canvas");
            var e = d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"];
            canvas.attr('transform', "translate(" + (self.context.getSize().width / 2 + e.transform.x) + ", " +
                (self.context.getSize().height / 2 + e.transform.y + ") scale(" + e.transform.k + ")"));
        };
        this.zoom.on('zoom', onZoom);
        this.selection.call(this.zoom);
    };
    MovingTool.prototype.deactivate = function () {
        // d3.js preserves event `mousedown.zoom` and blocks selection
        this.selection.on('mousedown.zoom', null);
        this.zoom.on('zoom', null);
    };
    return MovingTool;
}());



/***/ }),

/***/ "./src/app/cartography/shared/tools/selection-tool.ts":
/*!************************************************************!*\
  !*** ./src/app/cartography/shared/tools/selection-tool.ts ***!
  \************************************************************/
/*! exports provided: SelectionTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionTool", function() { return SelectionTool; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var _models_rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/rectangle */ "./src/app/cartography/shared/models/rectangle.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectionTool = /** @class */ (function () {
    function SelectionTool() {
        this.rectangleSelected = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SelectionTool_1 = SelectionTool;
    SelectionTool.prototype.connect = function (selection, context) {
        this.selection = selection;
        this.context = context;
    };
    SelectionTool.prototype.activate = function () {
        var self = this;
        this.selection.on("mousedown", function () {
            var subject = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])(window);
            var parent = this.parentElement;
            var start = self.transformation(Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["mouse"])(parent));
            self.startSelection(start);
            // clear selection
            self.selection
                .selectAll(SelectionTool_1.SELECTABLE_CLASS)
                .classed("selected", false);
            subject
                .on("mousemove.selection", function () {
                var end = self.transformation(Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["mouse"])(parent));
                self.moveSelection(start, end);
            }).on("mouseup.selection", function () {
                var end = self.transformation(Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["mouse"])(parent));
                self.endSelection(start, end);
                subject
                    .on("mousemove.selection", null)
                    .on("mouseup.selection", null);
            });
        });
    };
    SelectionTool.prototype.deactivate = function () {
        this.selection.on('mousedown', null);
    };
    SelectionTool.prototype.draw = function (selection, context) {
        var canvas = selection.select("g.canvas");
        if (!canvas.select("g.selection-line-tool").node()) {
            var g = canvas.append('g');
            g.attr("class", "selection-line-tool");
            this.path = g.append("path");
            this.path
                .attr("class", "selection")
                .attr("visibility", "hidden");
        }
        this.selection = selection;
    };
    SelectionTool.prototype.startSelection = function (start) {
        this.path
            .attr("d", this.rect(start[0], start[1], 0, 0))
            .attr("visibility", "visible");
    };
    SelectionTool.prototype.moveSelection = function (start, move) {
        this.path.attr("d", this.rect(start[0], start[1], move[0] - start[0], move[1] - start[1]));
        this.selectedEvent(start, move);
    };
    SelectionTool.prototype.endSelection = function (start, end) {
        this.path.attr("visibility", "hidden");
        this.selectedEvent(start, end);
    };
    SelectionTool.prototype.selectedEvent = function (start, end) {
        var x = Math.min(start[0], end[0]);
        var y = Math.min(start[1], end[1]);
        var width = Math.abs(start[0] - end[0]);
        var height = Math.abs(start[1] - end[1]);
        this.rectangleSelected.next(new _models_rectangle__WEBPACK_IMPORTED_MODULE_3__["Rectangle"](x, y, width, height));
    };
    SelectionTool.prototype.rect = function (x, y, w, h) {
        return "M" + [x, y] + " l" + [w, 0] + " l" + [0, h] + " l" + [-w, 0] + "z";
    };
    SelectionTool.prototype.transformation = function (point) {
        var transformation_point = this.context.getZeroZeroTransformationPoint();
        return [point[0] - transformation_point.x, point[1] - transformation_point.y];
    };
    SelectionTool.SELECTABLE_CLASS = '.selectable';
    SelectionTool = SelectionTool_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SelectionTool);
    return SelectionTool;
    var SelectionTool_1;
}());



/***/ }),

/***/ "./src/app/cartography/shared/widgets/drawing-line.ts":
/*!************************************************************!*\
  !*** ./src/app/cartography/shared/widgets/drawing-line.ts ***!
  \************************************************************/
/*! exports provided: DrawingLineWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingLineWidget", function() { return DrawingLineWidget; });
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var _models_drawing_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/drawing-line */ "./src/app/cartography/shared/models/drawing-line.ts");
/* harmony import */ var _models_point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/point */ "./src/app/cartography/shared/models/point.ts");




var DrawingLineWidget = /** @class */ (function () {
    function DrawingLineWidget() {
        this.drawingLine = new _models_drawing_line__WEBPACK_IMPORTED_MODULE_2__["DrawingLine"]();
        this.drawing = false;
        this.data = {};
    }
    DrawingLineWidget.prototype.start = function (x, y, data) {
        var self = this;
        this.drawing = true;
        this.data = data;
        this.drawingLine.start = new _models_point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y);
        this.drawingLine.end = new _models_point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y);
        var over = function (d, i) {
            var node = self.selection.select('g.canvas').node();
            var coordinates = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["mouse"])(node);
            self.drawingLine.end.x = coordinates[0];
            self.drawingLine.end.y = coordinates[1];
            self.draw(null, null);
        };
        this.selection.on('mousemove', over);
        this.draw(null, null);
    };
    DrawingLineWidget.prototype.isDrawing = function () {
        return this.drawing;
    };
    DrawingLineWidget.prototype.stop = function () {
        this.drawing = false;
        this.selection.on('mousemove', null);
        this.draw(null, null);
        return this.data;
    };
    DrawingLineWidget.prototype.connect = function (selection, context) {
        this.selection = selection;
    };
    DrawingLineWidget.prototype.draw = function (selection, context) {
        var canvas = this.selection.select("g.canvas");
        if (!canvas.select("g.drawing-line-tool").node()) {
            canvas.append('g').attr("class", "drawing-line-tool");
        }
        var link_data = [];
        if (this.drawing) {
            link_data = [[
                    [this.drawingLine.start.x, this.drawingLine.start.y],
                    [this.drawingLine.end.x, this.drawingLine.end.y]
                ]];
        }
        var value_line = Object(d3_shape__WEBPACK_IMPORTED_MODULE_0__["line"])();
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

/***/ "./src/app/cartography/shared/widgets/drawings.ts":
/*!********************************************************!*\
  !*** ./src/app/cartography/shared/widgets/drawings.ts ***!
  \********************************************************/
/*! exports provided: DrawingsWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingsWidget", function() { return DrawingsWidget; });
var DrawingsWidget = /** @class */ (function () {
    function DrawingsWidget() {
    }
    DrawingsWidget.prototype.draw = function (view, drawings) {
        var drawing = view
            .selectAll('g.drawing')
            .data(function (l) {
            return l.drawings;
        }, function (d) {
            return d.drawing_id;
        });
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
    return DrawingsWidget;
}());



/***/ }),

/***/ "./src/app/cartography/shared/widgets/ethernet-link.ts":
/*!*************************************************************!*\
  !*** ./src/app/cartography/shared/widgets/ethernet-link.ts ***!
  \*************************************************************/
/*! exports provided: EthernetLinkWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthernetLinkWidget", function() { return EthernetLinkWidget; });
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");

var EthernetLinkWidget = /** @class */ (function () {
    function EthernetLinkWidget() {
    }
    EthernetLinkWidget.prototype.draw = function (view, link) {
        var link_data = [[
                [link.source.x, link.source.y],
                [link.target.x, link.target.y]
            ]];
        var value_line = Object(d3_shape__WEBPACK_IMPORTED_MODULE_0__["line"])();
        var link_path = view.select('path');
        link_path.classed('selected', function (l) { return l.is_selected; });
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

/***/ "./src/app/cartography/shared/widgets/graph-layout.ts":
/*!************************************************************!*\
  !*** ./src/app/cartography/shared/widgets/graph-layout.ts ***!
  \************************************************************/
/*! exports provided: GraphLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphLayout", function() { return GraphLayout; });
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes */ "./src/app/cartography/shared/widgets/nodes.ts");
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./links */ "./src/app/cartography/shared/widgets/links.ts");
/* harmony import */ var _drawings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawings */ "./src/app/cartography/shared/widgets/drawings.ts");
/* harmony import */ var _drawing_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawing-line */ "./src/app/cartography/shared/widgets/drawing-line.ts");
/* harmony import */ var _tools_selection_tool__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/selection-tool */ "./src/app/cartography/shared/tools/selection-tool.ts");
/* harmony import */ var _tools_moving_tool__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tools/moving-tool */ "./src/app/cartography/shared/tools/moving-tool.ts");
/* harmony import */ var _layers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layers */ "./src/app/cartography/shared/widgets/layers.ts");
/* harmony import */ var _managers_layers_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../managers/layers-manager */ "./src/app/cartography/shared/managers/layers-manager.ts");








var GraphLayout = /** @class */ (function () {
    function GraphLayout() {
        this.nodes = [];
        this.links = [];
        this.drawings = [];
        this.centerZeroZeroPoint = true;
        this.linksWidget = new _links__WEBPACK_IMPORTED_MODULE_1__["LinksWidget"]();
        this.nodesWidget = new _nodes__WEBPACK_IMPORTED_MODULE_0__["NodesWidget"]();
        this.drawingsWidget = new _drawings__WEBPACK_IMPORTED_MODULE_2__["DrawingsWidget"]();
        this.drawingLineTool = new _drawing_line__WEBPACK_IMPORTED_MODULE_3__["DrawingLineWidget"]();
        this.selectionTool = new _tools_selection_tool__WEBPACK_IMPORTED_MODULE_4__["SelectionTool"]();
        this.movingTool = new _tools_moving_tool__WEBPACK_IMPORTED_MODULE_5__["MovingTool"]();
        this.layersWidget = new _layers__WEBPACK_IMPORTED_MODULE_6__["LayersWidget"]();
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
    GraphLayout.prototype.getDrawingsWidget = function () {
        return this.drawingsWidget;
    };
    GraphLayout.prototype.getDrawingLineTool = function () {
        return this.drawingLineTool;
    };
    GraphLayout.prototype.getMovingTool = function () {
        return this.movingTool;
    };
    GraphLayout.prototype.getSelectionTool = function () {
        return this.selectionTool;
    };
    GraphLayout.prototype.connect = function (view, context) {
        this.drawingLineTool.connect(view, context);
        this.selectionTool.connect(view, context);
        this.movingTool.connect(view, context);
        this.selectionTool.activate();
    };
    GraphLayout.prototype.draw = function (view, context) {
        var canvas = view
            .selectAll('g.canvas')
            .data([context]);
        var canvasEnter = canvas.enter()
            .append('g')
            .attr('class', 'canvas');
        if (this.centerZeroZeroPoint) {
            canvas.attr('transform', function (ctx) { return "translate(" + ctx.getSize().width / 2 + ", " + ctx.getSize().height / 2 + ")"; });
        }
        var layersManager = new _managers_layers_manager__WEBPACK_IMPORTED_MODULE_7__["LayersManager"]();
        layersManager.setNodes(this.nodes);
        layersManager.setDrawings(this.drawings);
        layersManager.setLinks(this.links);
        this.layersWidget.graphLayout = this;
        this.layersWidget.draw(canvas, layersManager.getLayersList());
        this.drawingLineTool.draw(view, context);
        this.selectionTool.draw(view, context);
        this.movingTool.draw(view, context);
    };
    GraphLayout.prototype.disconnect = function (view) {
        if (view.empty && !view.empty()) {
            view.selectAll('*').remove();
        }
    };
    return GraphLayout;
}());



/***/ }),

/***/ "./src/app/cartography/shared/widgets/layers.ts":
/*!******************************************************!*\
  !*** ./src/app/cartography/shared/widgets/layers.ts ***!
  \******************************************************/
/*! exports provided: LayersWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayersWidget", function() { return LayersWidget; });
var LayersWidget = /** @class */ (function () {
    function LayersWidget() {
    }
    LayersWidget.prototype.draw = function (view, layers) {
        var layers_selection = view
            .selectAll('g.layer')
            .data(layers);
        layers_selection
            .enter()
            .append('g')
            .attr('class', 'layer')
            .attr('data-index', function (layer) { return layer.index; });
        layers_selection
            .exit()
            .remove();
        this.graphLayout
            .getLinksWidget()
            .draw(layers_selection);
        this.graphLayout
            .getNodesWidget()
            .draw(layers_selection);
        this.graphLayout
            .getDrawingsWidget()
            .draw(layers_selection);
    };
    return LayersWidget;
}());



/***/ }),

/***/ "./src/app/cartography/shared/widgets/links.ts":
/*!*****************************************************!*\
  !*** ./src/app/cartography/shared/widgets/links.ts ***!
  \*****************************************************/
/*! exports provided: LinksWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksWidget", function() { return LinksWidget; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var _models_link_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/link-status */ "./src/app/cartography/shared/models/link-status.ts");
/* harmony import */ var _map_helpers_multi_link_calculator_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../map/helpers/multi-link-calculator-helper */ "./src/app/cartography/map/helpers/multi-link-calculator-helper.ts");
/* harmony import */ var _serial_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serial-link */ "./src/app/cartography/shared/widgets/serial-link.ts");
/* harmony import */ var _ethernet_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ethernet-link */ "./src/app/cartography/shared/widgets/ethernet-link.ts");





var LinksWidget = /** @class */ (function () {
    function LinksWidget() {
        this.multiLinkCalculatorHelper = new _map_helpers_multi_link_calculator_helper__WEBPACK_IMPORTED_MODULE_2__["MultiLinkCalculatorHelper"]();
    }
    LinksWidget.prototype.getLinkWidget = function (link) {
        if (link.link_type === 'serial') {
            return new _serial_link__WEBPACK_IMPORTED_MODULE_3__["SerialLinkWidget"]();
        }
        return new _ethernet_link__WEBPACK_IMPORTED_MODULE_4__["EthernetLinkWidget"]();
    };
    LinksWidget.prototype.select = function (view) {
        return view.selectAll("g.link");
    };
    LinksWidget.prototype.revise = function (selection) {
        var self = this;
        selection
            .each(function (l) {
            var link_group = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this);
            var link_widget = self.getLinkWidget(l);
            link_widget.draw(link_group, l);
            var link_path = link_group.select('path');
            var start_point = link_path.node().getPointAtLength(50);
            var end_point = link_path.node().getPointAtLength(link_path.node().getTotalLength() - 50);
            var statuses = [
                new _models_link_status__WEBPACK_IMPORTED_MODULE_1__["LinkStatus"](start_point.x, start_point.y, l.source.status),
                new _models_link_status__WEBPACK_IMPORTED_MODULE_1__["LinkStatus"](end_point.x, end_point.y, l.target.status)
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
        var _this = this;
        var link = view
            .selectAll("g.link")
            .data(function (layer) {
            if (layer.links) {
                var layer_links = layer.links.filter(function (l) {
                    return l.target && l.source;
                });
                _this.multiLinkCalculatorHelper.assignDataToLinks(layer_links);
                return layer_links;
            }
            return [];
        }, function (l) {
            return l.link_id;
        });
        var link_enter = link.enter()
            .append('g')
            .attr('class', 'link')
            .attr('link_id', function (l) { return l.link_id; })
            .attr('map-source', function (l) { return l.source.node_id; })
            .attr('map-target', function (l) { return l.target.node_id; });
        var merge = link.merge(link_enter);
        this.revise(merge);
        link
            .exit()
            .remove();
    };
    return LinksWidget;
}());



/***/ }),

/***/ "./src/app/cartography/shared/widgets/nodes.ts":
/*!*****************************************************!*\
  !*** ./src/app/cartography/shared/widgets/nodes.ts ***!
  \*****************************************************/
/*! exports provided: NodesWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodesWidget", function() { return NodesWidget; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-drag */ "./node_modules/d3-drag/index.js");


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
    NodesWidget.prototype.executeOnNodeDraggingCallback = function (callback_event, node) {
        this.onNodeDraggingCallbacks.forEach(function (callback) {
            callback(callback_event, node);
        });
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
        var nodes_selection = view
            .selectAll('g.node');
        if (nodes) {
            nodes_selection = nodes_selection.data(nodes);
        }
        else {
            nodes_selection = nodes_selection.data(function (l) {
                return l.nodes;
            }, function (n) {
                return n.node_id;
            });
        }
        var node_enter = nodes_selection
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
            .attr('y', function (n) { return -n.height / 2.; })
            .on('mouseover', function (n) {
            Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this).attr("class", "over");
        })
            .on('mouseout', function (n) {
            Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this).attr("class", "");
        });
        // .attr('width', (n: Node) => n.width)
        // .attr('height', (n: Node) => n.height);
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
        var node_merge = nodes_selection
            .merge(node_enter)
            .classed('selected', function (n) { return n.is_selected; })
            .on("contextmenu", function (n, i) {
            d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"].preventDefault();
            if (self.onContextMenuCallback !== null) {
                self.onContextMenuCallback(d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"], n);
            }
        })
            .on('click', function (n) {
            if (self.onNodeClickedCallback) {
                self.onNodeClickedCallback(d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"], n);
            }
        });
        this.revise(node_merge);
        var callback = function (n) {
            var e = d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"];
            n.x = e.x;
            n.y = e.y;
            self.revise(Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(this));
            self.executeOnNodeDraggingCallback(d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"], n);
        };
        var dragging = function () {
            return Object(d3_drag__WEBPACK_IMPORTED_MODULE_1__["drag"])()
                .on('drag', callback)
                .on('end', function (n) {
                if (self.onNodeDraggedCallback) {
                    var e = d3_selection__WEBPACK_IMPORTED_MODULE_0__["event"];
                    self.onNodeDraggedCallback(e, n);
                }
            });
        };
        node_merge.call(dragging());
        nodes_selection
            .exit()
            .remove();
    };
    return NodesWidget;
}());



/***/ }),

/***/ "./src/app/cartography/shared/widgets/serial-link.ts":
/*!***********************************************************!*\
  !*** ./src/app/cartography/shared/widgets/serial-link.ts ***!
  \***********************************************************/
/*! exports provided: SerialLinkWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialLinkWidget", function() { return SerialLinkWidget; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/index.js");

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
        var line_generator = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
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

/***/ "./src/app/default-layout/default-layout.component.css":
/*!*************************************************************!*\
  !*** ./src/app/default-layout/default-layout.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  height: 100%;\n}\n\napp-root, app-default-layout {\n  height: 100%;\n}\n\napp-default-layout {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh;\n}\n\n.content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n.footer {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  padding: 20px;\n  /*background-color: #0097a7;*/\n  color: white;\n}\n\n.default-content {\n  margin: 0 auto;\n  max-width: 940px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\nheader {\n  -webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);\n          box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);\n  z-index: 10;\n}\n\nmain {\n  height: 100%;\n}\n\n.default-header h1 {\n  font-weight: 300;\n  margin: 0;\n  font-size: 20px;\n  padding: 28px 8px;\n  color: white;\n}\n\n.default-header {\n  margin: 0 auto;\n  max-width: 940px;\n  /*background-color: #0097a7;*/\n}\n\n.buttons-bar {\n  padding-top: 10px;\n  text-align: right;\n}\n\n"

/***/ }),

/***/ "./src/app/default-layout/default-layout.component.html":
/*!**************************************************************!*\
  !*** ./src/app/default-layout/default-layout.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button>\n      <mat-icon svgIcon=\"gns3\"></mat-icon>\n    </button>\n\n    <button mat-button routerLink=\"/servers\" >Servers</button>\n  </mat-toolbar>\n</header>\n\n<main class=\"mat-app-background\">\n  <router-outlet></router-outlet>\n</main>\n\n<footer class=\"footer mat-app-background\">\n  GNS3 Web UI demo &copy; 2017\n</footer>\n\n"

/***/ }),

/***/ "./src/app/default-layout/default-layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/default-layout/default-layout.component.ts ***!
  \************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultLayoutComponent = /** @class */ (function () {
    function DefaultLayoutComponent() {
    }
    DefaultLayoutComponent.prototype.ngOnInit = function () {
    };
    DefaultLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-default-layout',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./default-layout.component.html */ "./src/app/default-layout/default-layout.component.html"),
            styles: [__webpack_require__(/*! ./default-layout.component.css */ "./src/app/default-layout/default-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DefaultLayoutComponent);
    return DefaultLayoutComponent;
}());



/***/ }),

/***/ "./src/app/project-map/create-snapshot-dialog.html":
/*!*********************************************************!*\
  !*** ./src/app/project-map/create-snapshot-dialog.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create snapshot</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"snapshot.name\" placeholder=\"Name\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\" color=\"accent\">No Thanks</button>\n  <button mat-button (click)=\"onAddClick()\" tabindex=\"2\" mat-raised-button color=\"primary\">Add</button>\n</div>\n"

/***/ }),

/***/ "./src/app/project-map/project-map.component.css":
/*!*******************************************************!*\
  !*** ./src/app/project-map/project-map.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*html {*/\n  /*position: static;*/\n  /*height: 100%;*/\n  /*}*/\n  /*body {*/\n  /*height: 100%;*/\n  /*margin: 0;*/\n  /*margin-bottom: 0 !important;*/\n  /*}*/\n  /*app-root, app-project-map, .project-map, app-map, svg {*/\n  /*height: 100%;*/\n  /*}*/\n  g.node:hover {\n  background-color: #0097a7;\n}\n  .project-map {\n  background-color: #F0F0F0;\n}\n  .project-toolbar {\n  width: 70px;\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n  .loading-spinner {\n  position: absolute;\n  top: 50%;\n  width: 100px;\n  margin-left:-50px;\n  margin-top: -50px;\n  left: 50%;\n}\n  g.node text {\n  font-family: Roboto !important;\n}\n  svg image:hover, svg image.chosen, g.selected {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n}\n  path.selected {\n  stroke: darkred;\n}\n  .selection-line-tool .selection {\n  fill: #7ccbe1;\n  stroke:  #66aec2 ;\n  fill-opacity: 0.3;\n  stroke-opacity: 0.7;\n  stroke-width: 1;\n  stroke-dasharray: 5, 5;\n}\n  g.node text,\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n  /* Disable outline after button click */\n  .project-toolbar button {\n  outline: 0;\n  border: none;\n  -moz-outline-style: none\n}\n"

/***/ }),

/***/ "./src/app/project-map/project-map.component.html":
/*!********************************************************!*\
  !*** ./src/app/project-map/project-map.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project\" class=\"project-map\">\n  <app-map [symbols]=\"symbols\" [nodes]=\"nodes\" [links]=\"links\" [drawings]=\"drawings\"></app-map>\n\n  <div class=\"project-toolbar\">\n    <mat-toolbar color=\"primary\" class=\"project-toolbar\">\n\n      <mat-toolbar-row>\n        <button mat-icon-button [matMenuTriggerFor]=\"mainMenu\">\n          <mat-icon svgIcon=\"gns3\"></mat-icon>\n        </button>\n      </mat-toolbar-row>\n\n      <mat-menu #mainMenu=\"matMenu\" [overlapTrigger]=\"false\">\n        <button mat-menu-item [routerLink]=\"['/server', server.id, 'projects']\">\n          <mat-icon>work</mat-icon>\n          <span>Projects</span>\n        </button>\n        <button mat-menu-item [routerLink]=\"['/servers']\">\n          <mat-icon>developer_board</mat-icon>\n          <span>Servers</span>\n        </button>\n      </mat-menu>\n\n      <mat-toolbar-row>\n        <button mat-icon-button [color]=\"drawLineMode ? 'primary': 'basic'\" (click)=\"toggleDrawLineMode()\">\n          <mat-icon>timeline</mat-icon>\n        </button>\n      </mat-toolbar-row>\n\n      <mat-toolbar-row>\n        <button mat-icon-button [color]=\"movingMode ? 'primary': 'basic'\" (click)=\"toggleMovingMode()\">\n          <mat-icon>zoom_out_map</mat-icon>\n        </button>\n      </mat-toolbar-row>\n\n      <mat-toolbar-row>\n        <button mat-icon-button (click)=\"createSnapshotModal()\">\n          <mat-icon>snooze</mat-icon>\n        </button>\n      </mat-toolbar-row>\n\n      <mat-toolbar-row>\n        <app-appliance [server]=\"server\" (onNodeCreation)=\"onNodeCreation($event)\"></app-appliance>\n      </mat-toolbar-row>\n\n    </mat-toolbar>\n  </div>\n\n  <app-node-context-menu [server]=\"server\"></app-node-context-menu>\n  <app-node-select-interface (onChooseInterface)=\"onChooseInterface($event)\"></app-node-select-interface>\n</div>\n\n<div class=\"loading-spinner\" *ngIf=\"isLoading\">\n  <mat-spinner color=\"primary\">\n  </mat-spinner>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/project-map/project-map.component.ts":
/*!******************************************************!*\
  !*** ./src/app/project-map/project-map.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectMapComponent, CreateSnapshotDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectMapComponent", function() { return ProjectMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSnapshotDialogComponent", function() { return CreateSnapshotDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_observable_forkJoin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/forkJoin */ "./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var rxjs_add_observable_fromPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/fromPromise */ "./node_modules/rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var rxjs_add_observable_dom_webSocket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/dom/webSocket */ "./node_modules/rxjs/_esm5/add/observable/dom/webSocket.js");
/* harmony import */ var _shared_services_symbol_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/symbol.service */ "./src/app/shared/services/symbol.service.ts");
/* harmony import */ var _cartography_map_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cartography/map/map.component */ "./src/app/cartography/map/map.component.ts");
/* harmony import */ var _shared_services_server_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/server.service */ "./src/app/shared/services/server.service.ts");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/project.service */ "./src/app/shared/services/project.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_snapshot_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/services/snapshot.service */ "./src/app/shared/services/snapshot.service.ts");
/* harmony import */ var _shared_models_snapshot__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/models/snapshot */ "./src/app/shared/models/snapshot.ts");
/* harmony import */ var _shared_progress_dialog_progress_dialog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/progress-dialog/progress-dialog.service */ "./src/app/shared/progress-dialog/progress-dialog.service.ts");
/* harmony import */ var _shared_progress_dialog_progress_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/progress-dialog/progress-dialog.component */ "./src/app/shared/progress-dialog/progress-dialog.component.ts");
/* harmony import */ var _shared_node_context_menu_node_context_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/node-context-menu/node-context-menu.component */ "./src/app/shared/node-context-menu/node-context-menu.component.ts");
/* harmony import */ var _shared_services_node_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../shared/services/node.service */ "./src/app/shared/services/node.service.ts");
/* harmony import */ var _shared_node_select_interface_node_select_interface_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/node-select-interface/node-select-interface.component */ "./src/app/shared/node-select-interface/node-select-interface.component.ts");
/* harmony import */ var _shared_services_link_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/services/link.service */ "./src/app/shared/services/link.service.ts");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var _cartography_shared_datasources_nodes_datasource__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../cartography/shared/datasources/nodes-datasource */ "./src/app/cartography/shared/datasources/nodes-datasource.ts");
/* harmony import */ var _cartography_shared_datasources_links_datasource__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../cartography/shared/datasources/links-datasource */ "./src/app/cartography/shared/datasources/links-datasource.ts");
/* harmony import */ var _shared_handlers_project_web_service_handler__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../shared/handlers/project-web-service-handler */ "./src/app/shared/handlers/project-web-service-handler.ts");
/* harmony import */ var _cartography_shared_managers_selection_manager__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../cartography/shared/managers/selection-manager */ "./src/app/cartography/shared/managers/selection-manager.ts");
/* harmony import */ var _cartography_map_helpers_in_rectangle_helper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../cartography/map/helpers/in-rectangle-helper */ "./src/app/cartography/map/helpers/in-rectangle-helper.ts");
/* harmony import */ var _cartography_shared_datasources_drawings_datasource__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../cartography/shared/datasources/drawings-datasource */ "./src/app/cartography/shared/datasources/drawings-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




























var ProjectMapComponent = /** @class */ (function () {
    function ProjectMapComponent(route, serverService, projectService, symbolService, snapshotService, nodeService, linkService, dialog, progressDialogService, toaster, projectWebServiceHandler, nodesDataSource, linksDataSource, drawingsDataSource) {
        this.route = route;
        this.serverService = serverService;
        this.projectService = projectService;
        this.symbolService = symbolService;
        this.snapshotService = snapshotService;
        this.nodeService = nodeService;
        this.linkService = linkService;
        this.dialog = dialog;
        this.progressDialogService = progressDialogService;
        this.toaster = toaster;
        this.projectWebServiceHandler = projectWebServiceHandler;
        this.nodesDataSource = nodesDataSource;
        this.linksDataSource = linksDataSource;
        this.drawingsDataSource = drawingsDataSource;
        this.nodes = [];
        this.links = [];
        this.drawings = [];
        this.symbols = [];
        this.drawLineMode = false;
        this.movingMode = false;
        this.isLoading = true;
    }
    ProjectMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            var server_id = parseInt(paramMap.get('server_id'), 10);
            rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]
                .fromPromise(_this.serverService.get(server_id))
                .flatMap(function (server) {
                _this.server = server;
                return _this.projectService.get(server, paramMap.get('project_id'));
            })
                .flatMap(function (project) {
                _this.project = project;
                if (_this.project.status === 'opened') {
                    return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
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
        this.drawingsDataSource.connect().subscribe(function (drawings) {
            _this.drawings = drawings;
            if (_this.mapChild) {
                _this.mapChild.reload();
            }
        });
        this.nodesDataSource.connect().subscribe(function (nodes) {
            _this.nodes = nodes;
            if (_this.mapChild) {
                _this.mapChild.reload();
            }
        });
        this.linksDataSource.connect().subscribe(function (links) {
            _this.links = links;
            if (_this.mapChild) {
                _this.mapChild.reload();
            }
        });
    };
    ProjectMapComponent.prototype.onProjectLoad = function (project) {
        var _this = this;
        this.symbolService
            .load(this.server)
            .flatMap(function () {
            return _this.projectService.nodes(_this.server, project.project_id);
        })
            .flatMap(function (nodes) {
            _this.nodesDataSource.set(nodes);
            return _this.projectService.links(_this.server, project.project_id);
        })
            .flatMap(function (links) {
            _this.linksDataSource.set(links);
            return _this.projectService.drawings(_this.server, project.project_id);
        })
            .subscribe(function (drawings) {
            _this.drawingsDataSource.set(drawings);
            _this.setUpMapCallbacks(project);
            _this.setUpWS(project);
            _this.isLoading = false;
        });
    };
    ProjectMapComponent.prototype.setUpWS = function (project) {
        this.ws = rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].webSocket(this.projectService.notificationsPath(this.server, project.project_id));
        this.projectWebServiceHandler.connect(this.ws);
    };
    ProjectMapComponent.prototype.setUpMapCallbacks = function (project) {
        var _this = this;
        var selectionManager = new _cartography_shared_managers_selection_manager__WEBPACK_IMPORTED_MODULE_25__["SelectionManager"](this.nodesDataSource, this.linksDataSource, new _cartography_map_helpers_in_rectangle_helper__WEBPACK_IMPORTED_MODULE_26__["InRectangleHelper"]());
        this.mapChild.graphLayout.getNodesWidget().setOnContextMenuCallback(function (event, node) {
            _this.nodeContextMenu.open(node, event.clientY, event.clientX);
        });
        this.mapChild.graphLayout.getNodesWidget().setOnNodeClickedCallback(function (event, node) {
            selectionManager.setSelectedNodes([node]);
            if (_this.drawLineMode) {
                _this.nodeSelectInterfaceMenu.open(node, event.clientY, event.clientX);
            }
        });
        this.mapChild.graphLayout.getNodesWidget().setOnNodeDraggedCallback(function (event, node) {
            _this.nodesDataSource.update(node);
            _this.nodeService
                .updatePosition(_this.server, node, node.x, node.y)
                .subscribe(function (n) {
                _this.nodesDataSource.update(n);
            });
        });
        selectionManager.subscribe(this.mapChild.graphLayout.getSelectionTool().rectangleSelected);
    };
    ProjectMapComponent.prototype.onNodeCreation = function (appliance) {
        var _this = this;
        this.nodeService
            .createFromAppliance(this.server, this.project, appliance, 0, 0, 'local')
            .subscribe(function () {
            _this.projectService
                .nodes(_this.server, _this.project.project_id)
                .subscribe(function (nodes) {
                _this.nodesDataSource.set(nodes);
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
                    _this.toaster.success("Snapshot '" + snapshot.name + "' has been created.");
                    progress_1.close();
                }, function (response) {
                    var error = response.json();
                    _this.toaster.error("Cannot create snapshot: " + error.message);
                    progress_1.close();
                });
                progress_1.afterClosed().subscribe(function (result) {
                    if (result === _shared_progress_dialog_progress_dialog_component__WEBPACK_IMPORTED_MODULE_16__["ProgressDialogComponent"].CANCELLED) {
                        subscription_1.unsubscribe();
                    }
                });
            }
        });
    };
    ProjectMapComponent.prototype.toggleDrawLineMode = function () {
        this.drawLineMode = !this.drawLineMode;
        if (!this.drawLineMode) {
            this.mapChild.graphLayout.getDrawingLineTool().stop();
        }
    };
    ProjectMapComponent.prototype.toggleMovingMode = function () {
        this.movingMode = !this.movingMode;
        if (this.movingMode) {
            this.mapChild.graphLayout.getSelectionTool().deactivate();
            this.mapChild.graphLayout.getMovingTool().activate();
        }
        else {
            this.mapChild.graphLayout.getMovingTool().deactivate();
            this.mapChild.graphLayout.getSelectionTool().activate();
        }
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
                _this.linksDataSource.set(links);
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_cartography_map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"]),
        __metadata("design:type", _cartography_map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"])
    ], ProjectMapComponent.prototype, "mapChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_node_context_menu_node_context_menu_component__WEBPACK_IMPORTED_MODULE_17__["NodeContextMenuComponent"]),
        __metadata("design:type", _shared_node_context_menu_node_context_menu_component__WEBPACK_IMPORTED_MODULE_17__["NodeContextMenuComponent"])
    ], ProjectMapComponent.prototype, "nodeContextMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_node_select_interface_node_select_interface_component__WEBPACK_IMPORTED_MODULE_19__["NodeSelectInterfaceComponent"]),
        __metadata("design:type", _shared_node_select_interface_node_select_interface_component__WEBPACK_IMPORTED_MODULE_19__["NodeSelectInterfaceComponent"])
    ], ProjectMapComponent.prototype, "nodeSelectInterfaceMenu", void 0);
    ProjectMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-map',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./project-map.component.html */ "./src/app/project-map/project-map.component.html"),
            styles: [__webpack_require__(/*! ./project-map.component.css */ "./src/app/project-map/project-map.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_server_service__WEBPACK_IMPORTED_MODULE_10__["ServerService"],
            _shared_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"],
            _shared_services_symbol_service__WEBPACK_IMPORTED_MODULE_8__["SymbolService"],
            _shared_services_snapshot_service__WEBPACK_IMPORTED_MODULE_13__["SnapshotService"],
            _shared_services_node_service__WEBPACK_IMPORTED_MODULE_18__["NodeService"],
            _shared_services_link_service__WEBPACK_IMPORTED_MODULE_20__["LinkService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialog"],
            _shared_progress_dialog_progress_dialog_service__WEBPACK_IMPORTED_MODULE_15__["ProgressDialogService"],
            _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_21__["ToasterService"],
            _shared_handlers_project_web_service_handler__WEBPACK_IMPORTED_MODULE_24__["ProjectWebServiceHandler"],
            _cartography_shared_datasources_nodes_datasource__WEBPACK_IMPORTED_MODULE_22__["NodesDataSource"],
            _cartography_shared_datasources_links_datasource__WEBPACK_IMPORTED_MODULE_23__["LinksDataSource"],
            _cartography_shared_datasources_drawings_datasource__WEBPACK_IMPORTED_MODULE_27__["DrawingsDataSource"]])
    ], ProjectMapComponent);
    return ProjectMapComponent;
}());

var CreateSnapshotDialogComponent = /** @class */ (function () {
    function CreateSnapshotDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snapshot = new _shared_models_snapshot__WEBPACK_IMPORTED_MODULE_14__["Snapshot"]();
    }
    CreateSnapshotDialogComponent.prototype.onAddClick = function () {
        this.dialogRef.close(this.snapshot);
    };
    CreateSnapshotDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateSnapshotDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-snapshot-dialog',
            template: __webpack_require__(/*! ./create-snapshot-dialog.html */ "./src/app/project-map/create-snapshot-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"], Object])
    ], CreateSnapshotDialogComponent);
    return CreateSnapshotDialogComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"default-header mat-app-background\">\n    <h1>Projects</h1>\n  </div>\n  <div class=\"default-content\">\n\n    <div class=\"example-container mat-elevation-z8\">\n      <mat-table #table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\">\n            <a [routerLink]=\"['/server', server.id, 'project', row.project_id]\" class=\"table-link\">{{row.name}}</a>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" style=\"text-align: right\">\n            <button mat-icon-button (click)=\"delete(row)\">\n              <mat-icon aria-label=\"Delete project\">delete</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent, ProjectDatabase, ProjectDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDatabase", function() { return ProjectDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDataSource", function() { return ProjectDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/project.service */ "./src/app/shared/services/project.service.ts");
/* harmony import */ var _shared_services_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/server.service */ "./src/app/shared/services/server.service.ts");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"],
            _shared_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());

var ProjectDatabase = /** @class */ (function () {
    function ProjectDatabase() {
        this.dataChange = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
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
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_6__["Observable"].merge(this.projectDatabase.dataChange).map(function () {
            return _this.projectDatabase.data;
        });
    };
    ProjectDataSource.prototype.disconnect = function () { };
    return ProjectDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["DataSource"]));



/***/ }),

/***/ "./src/app/servers/add-server-dialog.html":
/*!************************************************!*\
  !*** ./src/app/servers/add-server-dialog.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add server</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"server.name\" placeholder=\"Name\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"server.ip\" placeholder=\"IP\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"server.port\" placeholder=\"Port\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\" color=\"accent\">No Thanks</button>\n  <button mat-button (click)=\"onAddClick()\" tabindex=\"2\" mat-raised-button color=\"primary\">Add</button>\n</div>\n"

/***/ }),

/***/ "./src/app/servers/servers.component.css":
/*!***********************************************!*\
  !*** ./src/app/servers/servers.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/servers/servers.component.html":
/*!************************************************!*\
  !*** ./src/app/servers/servers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"default-header\">\n    <h1>Servers</h1>\n  </div>\n  <div class=\"default-content\">\n\n    <div class=\"example-container mat-elevation-z8\">\n      <mat-table #table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"id\">\n          <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\"> {{row.id}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\"> <a [routerLink]=\"['/server', row.id, 'projects']\" class=\"table-link\">{{row.name}}</a></mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ip\">\n          <mat-header-cell *matHeaderCellDef> IP </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\"> {{row.ip}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"port\">\n          <mat-header-cell *matHeaderCellDef> Port </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\"> {{row.port}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\" style=\"text-align: right\">\n            <button mat-icon-button (click)=\"deleteServer(row)\">\n              <mat-icon aria-label=\"Remove server\">delete</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n    <div class=\"buttons-bar\">\n      <button mat-raised-button color=\"primary\" (click)=\"createModal()\">Add server</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/servers/servers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/servers/servers.component.ts ***!
  \**********************************************/
/*! exports provided: ServersComponent, AddServerDialogComponent, ServerDatabase, ServerDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServersComponent", function() { return ServersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServerDialogComponent", function() { return AddServerDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerDatabase", function() { return ServerDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerDataSource", function() { return ServerDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_add_operator_startWith__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/startWith */ "./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var rxjs_add_observable_merge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/merge */ "./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ "./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var rxjs_add_operator_distinctUntilChanged__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/distinctUntilChanged */ "./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/observable/fromEvent */ "./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var _shared_models_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/models/server */ "./src/app/shared/models/server.ts");
/* harmony import */ var _shared_services_server_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/services/server.service */ "./src/app/shared/services/server.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-server-list',
            template: __webpack_require__(/*! ./servers.component.html */ "./src/app/servers/servers.component.html"),
            styles: [__webpack_require__(/*! ./servers.component.css */ "./src/app/servers/servers.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _shared_services_server_service__WEBPACK_IMPORTED_MODULE_12__["ServerService"]])
    ], ServersComponent);
    return ServersComponent;
}());

var AddServerDialogComponent = /** @class */ (function () {
    function AddServerDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.server = new _shared_models_server__WEBPACK_IMPORTED_MODULE_11__["Server"]();
    }
    AddServerDialogComponent.prototype.onAddClick = function () {
        this.dialogRef.close(this.server);
    };
    AddServerDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddServerDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-server-dialog',
            template: __webpack_require__(/*! ./add-server-dialog.html */ "./src/app/servers/add-server-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AddServerDialogComponent);
    return AddServerDialogComponent;
}());

var ServerDatabase = /** @class */ (function () {
    function ServerDatabase() {
        this.dataChange = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
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
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].merge(this.serverDatabase.dataChange).map(function () {
            return _this.serverDatabase.data;
        });
    };
    ServerDataSource.prototype.disconnect = function () { };
    return ServerDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/shared/handlers/project-web-service-handler.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/handlers/project-web-service-handler.ts ***!
  \****************************************************************/
/*! exports provided: WebServiceMessage, ProjectWebServiceHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebServiceMessage", function() { return WebServiceMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectWebServiceHandler", function() { return ProjectWebServiceHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _cartography_shared_datasources_nodes_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cartography/shared/datasources/nodes-datasource */ "./src/app/cartography/shared/datasources/nodes-datasource.ts");
/* harmony import */ var _cartography_shared_datasources_links_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cartography/shared/datasources/links-datasource */ "./src/app/cartography/shared/datasources/links-datasource.ts");
/* harmony import */ var _cartography_shared_datasources_drawings_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cartography/shared/datasources/drawings-datasource */ "./src/app/cartography/shared/datasources/drawings-datasource.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebServiceMessage = /** @class */ (function () {
    function WebServiceMessage() {
    }
    return WebServiceMessage;
}());

var ProjectWebServiceHandler = /** @class */ (function () {
    function ProjectWebServiceHandler(nodesDataSource, linksDataSource, drawingsDataSource) {
        this.nodesDataSource = nodesDataSource;
        this.linksDataSource = linksDataSource;
        this.drawingsDataSource = drawingsDataSource;
    }
    ProjectWebServiceHandler.prototype.connect = function (ws) {
        var _this = this;
        ws.subscribe(function (message) {
            if (message.action === 'node.updated') {
                _this.nodesDataSource.update(message.event);
            }
            if (message.action === 'node.created') {
                _this.nodesDataSource.add(message.event);
            }
            if (message.action === 'node.deleted') {
                _this.nodesDataSource.remove(message.event);
            }
            if (message.action === 'link.created') {
                _this.linksDataSource.add(message.event);
            }
            if (message.action === 'link.updated') {
                _this.linksDataSource.update(message.event);
            }
            if (message.action === 'link.deleted') {
                _this.linksDataSource.remove(message.event);
            }
            if (message.action === 'drawing.created') {
                _this.drawingsDataSource.add(message.event);
            }
            if (message.action === 'drawing.updated') {
                _this.drawingsDataSource.update(message.event);
            }
            if (message.action === 'drawing.deleted') {
                _this.drawingsDataSource.remove(message.event);
            }
        });
    };
    ProjectWebServiceHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_cartography_shared_datasources_nodes_datasource__WEBPACK_IMPORTED_MODULE_1__["NodesDataSource"],
            _cartography_shared_datasources_links_datasource__WEBPACK_IMPORTED_MODULE_2__["LinksDataSource"],
            _cartography_shared_datasources_drawings_datasource__WEBPACK_IMPORTED_MODULE_3__["DrawingsDataSource"]])
    ], ProjectWebServiceHandler);
    return ProjectWebServiceHandler;
}());



/***/ }),

/***/ "./src/app/shared/models/server.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/models/server.ts ***!
  \*****************************************/
/*! exports provided: Server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return Server; });
var Server = /** @class */ (function () {
    function Server() {
    }
    return Server;
}());



/***/ }),

/***/ "./src/app/shared/models/snapshot.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/snapshot.ts ***!
  \*******************************************/
/*! exports provided: Snapshot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snapshot", function() { return Snapshot; });
var Snapshot = /** @class */ (function () {
    function Snapshot() {
    }
    return Snapshot;
}());



/***/ }),

/***/ "./src/app/shared/node-context-menu/actions/start-node-action/start-node-action.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/node-context-menu/actions/start-node-action/start-node-action.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-menu-item *ngIf=\"node.status == 'stopped'\" (click)=\"startNode()\">\n  <mat-icon>play_arrow</mat-icon>\n  <span>Start</span>\n</button>\n"

/***/ }),

/***/ "./src/app/shared/node-context-menu/actions/start-node-action/start-node-action.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/node-context-menu/actions/start-node-action/start-node-action.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: StartNodeActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartNodeActionComponent", function() { return StartNodeActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/server */ "./src/app/shared/models/server.ts");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/node.service */ "./src/app/shared/services/node.service.ts");
/* harmony import */ var _cartography_shared_models_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../cartography/shared/models/node */ "./src/app/cartography/shared/models/node.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_server__WEBPACK_IMPORTED_MODULE_1__["Server"])
    ], StartNodeActionComponent.prototype, "server", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _cartography_shared_models_node__WEBPACK_IMPORTED_MODULE_3__["Node"])
    ], StartNodeActionComponent.prototype, "node", void 0);
    StartNodeActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start-node-action',
            template: __webpack_require__(/*! ./start-node-action.component.html */ "./src/app/shared/node-context-menu/actions/start-node-action/start-node-action.component.html"),
        }),
        __metadata("design:paramtypes", [_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
    ], StartNodeActionComponent);
    return StartNodeActionComponent;
}());



/***/ }),

/***/ "./src/app/shared/node-context-menu/actions/stop-node-action/stop-node-action.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/node-context-menu/actions/stop-node-action/stop-node-action.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-menu-item *ngIf=\"node.status == 'started'\" (click)=\"stopNode()\">\n  <mat-icon>stop</mat-icon>\n  <span>Stop</span>\n</button>\n"

/***/ }),

/***/ "./src/app/shared/node-context-menu/actions/stop-node-action/stop-node-action.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/node-context-menu/actions/stop-node-action/stop-node-action.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: StopNodeActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopNodeActionComponent", function() { return StopNodeActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _models_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/server */ "./src/app/shared/models/server.ts");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/node.service */ "./src/app/shared/services/node.service.ts");
/* harmony import */ var _cartography_shared_models_node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../cartography/shared/models/node */ "./src/app/cartography/shared/models/node.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_server__WEBPACK_IMPORTED_MODULE_1__["Server"])
    ], StopNodeActionComponent.prototype, "server", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _cartography_shared_models_node__WEBPACK_IMPORTED_MODULE_3__["Node"])
    ], StopNodeActionComponent.prototype, "node", void 0);
    StopNodeActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stop-node-action',
            template: __webpack_require__(/*! ./stop-node-action.component.html */ "./src/app/shared/node-context-menu/actions/stop-node-action/stop-node-action.component.html")
        }),
        __metadata("design:paramtypes", [_services_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
    ], StopNodeActionComponent);
    return StopNodeActionComponent;
}());



/***/ }),

/***/ "./src/app/shared/node-context-menu/node-context-menu.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shared/node-context-menu/node-context-menu.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"context-menu\" [style.left]=\"leftPosition\" [style.top]=\"topPosition\" *ngIf=\"node\">\n  <span [matMenuTriggerFor]=\"contextMenu\"></span>\n  <mat-menu #contextMenu=\"matMenu\">\n    <app-start-node-action [server]=\"server\" [node]=\"node\"></app-start-node-action>\n    <app-stop-node-action [server]=\"server\" [node]=\"node\"></app-stop-node-action>\n  </mat-menu>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/node-context-menu/node-context-menu.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shared/node-context-menu/node-context-menu.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".context-menu {\n  position: absolute; }\n"

/***/ }),

/***/ "./src/app/shared/node-context-menu/node-context-menu.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/node-context-menu/node-context-menu.component.ts ***!
  \*************************************************************************/
/*! exports provided: NodeContextMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeContextMenuComponent", function() { return NodeContextMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _models_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/server */ "./src/app/shared/models/server.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_server__WEBPACK_IMPORTED_MODULE_3__["Server"])
    ], NodeContextMenuComponent.prototype, "server", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], NodeContextMenuComponent.prototype, "contextMenu", void 0);
    NodeContextMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-node-context-menu',
            template: __webpack_require__(/*! ./node-context-menu.component.html */ "./src/app/shared/node-context-menu/node-context-menu.component.html"),
            styles: [__webpack_require__(/*! ./node-context-menu.component.scss */ "./src/app/shared/node-context-menu/node-context-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], NodeContextMenuComponent);
    return NodeContextMenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/node-select-interface/node-select-interface.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/node-select-interface/node-select-interface.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"context-menu\" [style.left]=\"leftPosition\" [style.top]=\"topPosition\" *ngIf=\"node\">\n  <span [matMenuTriggerFor]=\"selectInterfaceMenu\"></span>\n  <mat-menu #selectInterfaceMenu=\"matMenu\">\n      <button mat-menu-item *ngFor=\"let port of node.ports\" (click)=\"chooseInterface(port)\">\n        <mat-icon>add_circle_outline</mat-icon>\n        <span>{{ port.name }}</span>\n      </button>\n  </mat-menu>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/node-select-interface/node-select-interface.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/node-select-interface/node-select-interface.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".context-menu {\n  position: absolute; }\n"

/***/ }),

/***/ "./src/app/shared/node-select-interface/node-select-interface.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/node-select-interface/node-select-interface.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NodeSelectInterfaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeSelectInterfaceComponent", function() { return NodeSelectInterfaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NodeSelectInterfaceComponent = /** @class */ (function () {
    function NodeSelectInterfaceComponent(sanitizer, changeDetector) {
        this.sanitizer = sanitizer;
        this.changeDetector = changeDetector;
        this.onChooseInterface = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NodeSelectInterfaceComponent.prototype, "onChooseInterface", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], NodeSelectInterfaceComponent.prototype, "contextMenu", void 0);
    NodeSelectInterfaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-node-select-interface',
            template: __webpack_require__(/*! ./node-select-interface.component.html */ "./src/app/shared/node-select-interface/node-select-interface.component.html"),
            styles: [__webpack_require__(/*! ./node-select-interface.component.scss */ "./src/app/shared/node-select-interface/node-select-interface.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], NodeSelectInterfaceComponent);
    return NodeSelectInterfaceComponent;
}());



/***/ }),

/***/ "./src/app/shared/progress-dialog/progress-dialog.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/progress-dialog/progress-dialog.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Operation in progress</h1>\n<div mat-dialog-content>\n    <mat-progress-bar\n        color=\"primary\"\n        mode=\"determinate\"\n        [value]=\"value\">\n    </mat-progress-bar>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onCancelClick()\" tabindex=\"-1\" color=\"accent\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/progress-dialog/progress-dialog.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/progress-dialog/progress-dialog.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/progress-dialog/progress-dialog.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/progress-dialog/progress-dialog.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProgressDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressDialogComponent", function() { return ProgressDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress-dialog',
            template: __webpack_require__(/*! ./progress-dialog.component.html */ "./src/app/shared/progress-dialog/progress-dialog.component.html"),
            styles: [__webpack_require__(/*! ./progress-dialog.component.scss */ "./src/app/shared/progress-dialog/progress-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ProgressDialogComponent);
    return ProgressDialogComponent;
    var ProgressDialogComponent_1;
}());



/***/ }),

/***/ "./src/app/shared/progress-dialog/progress-dialog.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/progress-dialog/progress-dialog.service.ts ***!
  \*******************************************************************/
/*! exports provided: ProgressDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressDialogService", function() { return ProgressDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _progress_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progress-dialog.component */ "./src/app/shared/progress-dialog/progress-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgressDialogService = /** @class */ (function () {
    function ProgressDialogService(dialog) {
        this.dialog = dialog;
    }
    ProgressDialogService.prototype.open = function () {
        var ref = this.dialog.open(_progress_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ProgressDialogComponent"], {
            width: '250px',
        });
        return ref;
    };
    ProgressDialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ProgressDialogService);
    return ProgressDialogService;
}());



/***/ }),

/***/ "./src/app/shared/services/appliance.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/appliance.service.ts ***!
  \******************************************************/
/*! exports provided: ApplianceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplianceService", function() { return ApplianceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _http_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-server.service */ "./src/app/shared/services/http-server.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplianceService = /** @class */ (function () {
    function ApplianceService(httpServer) {
        this.httpServer = httpServer;
    }
    ApplianceService.prototype.list = function (server) {
        return this.httpServer
            .get(server, '/appliances');
    };
    ApplianceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_server_service__WEBPACK_IMPORTED_MODULE_2__["HttpServer"]])
    ], ApplianceService);
    return ApplianceService;
}());



/***/ }),

/***/ "./src/app/shared/services/http-server.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/http-server.service.ts ***!
  \********************************************************/
/*! exports provided: HttpServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServer", function() { return HttpServer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* tslint:enable:interface-over-type-literal */
var HttpServer = /** @class */ (function () {
    function HttpServer(http) {
        this.http = http;
    }
    HttpServer.prototype.get = function (server, url, options) {
        options = this.getJsonOptions(options);
        var intercepted = this.getOptionsForServer(server, url, options);
        return this.http.get(intercepted.url, intercepted.options);
    };
    HttpServer.prototype.getText = function (server, url, options) {
        options = this.getTextOptions(options);
        var intercepted = this.getOptionsForServer(server, url, options);
        return this.http.get(intercepted.url, intercepted.options);
    };
    HttpServer.prototype.post = function (server, url, body, options) {
        options = this.getJsonOptions(options);
        var intercepted = this.getOptionsForServer(server, url, options);
        return this.http.post(intercepted.url, body, intercepted.options);
    };
    HttpServer.prototype.put = function (server, url, body, options) {
        options = this.getJsonOptions(options);
        var intercepted = this.getOptionsForServer(server, url, options);
        return this.http.put(intercepted.url, body, intercepted.options);
    };
    HttpServer.prototype.delete = function (server, url, options) {
        options = this.getJsonOptions(options);
        var intercepted = this.getOptionsForServer(server, url, options);
        return this.http.delete(intercepted.url, intercepted.options);
    };
    HttpServer.prototype.patch = function (server, url, body, options) {
        options = this.getJsonOptions(options);
        var intercepted = this.getOptionsForServer(server, url, options);
        return this.http.patch(intercepted.url, body, intercepted.options);
    };
    HttpServer.prototype.head = function (server, url, options) {
        options = this.getJsonOptions(options);
        var intercepted = this.getOptionsForServer(server, url, options);
        return this.http.head(intercepted.url, intercepted.options);
    };
    HttpServer.prototype.options = function (server, url, options) {
        options = this.getJsonOptions(options);
        var intercepted = this.getOptionsForServer(server, url, options);
        return this.http.options(intercepted.url, intercepted.options);
    };
    HttpServer.prototype.getJsonOptions = function (options) {
        if (!options) {
            return {
                responseType: "json"
            };
        }
        return options;
    };
    HttpServer.prototype.getTextOptions = function (options) {
        if (!options) {
            return {
                responseType: "text"
            };
        }
        return options;
    };
    HttpServer.prototype.getOptionsForServer = function (server, url, options) {
        url = "http://" + server.ip + ":" + server.port + "/v2" + url;
        if (!options.headers) {
            options.headers = {};
        }
        if (server.authorization === "basic") {
            var credentials = btoa(server.login + ":" + server.password);
            options.headers['Authorization'] = "Basic " + credentials;
        }
        return {
            url: url,
            options: options
        };
    };
    HttpServer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpServer);
    return HttpServer;
}());



/***/ }),

/***/ "./src/app/shared/services/indexed-db.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/indexed-db.service.ts ***!
  \*******************************************************/
/*! exports provided: IndexedDbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedDbService", function() { return IndexedDbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var angular2_indexeddb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-indexeddb */ "./node_modules/angular2-indexeddb/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexedDbService = /** @class */ (function () {
    function IndexedDbService() {
        this.db = new angular2_indexeddb__WEBPACK_IMPORTED_MODULE_1__["AngularIndexedDB"]('gns3-web-ui', 1);
    }
    IndexedDbService.prototype.get = function () {
        return this.db;
    };
    IndexedDbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], IndexedDbService);
    return IndexedDbService;
}());



/***/ }),

/***/ "./src/app/shared/services/link.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/link.service.ts ***!
  \*************************************************/
/*! exports provided: LinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkService", function() { return LinkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _http_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-server.service */ "./src/app/shared/services/http-server.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_server_service__WEBPACK_IMPORTED_MODULE_2__["HttpServer"]])
    ], LinkService);
    return LinkService;
}());



/***/ }),

/***/ "./src/app/shared/services/node.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/node.service.ts ***!
  \*************************************************/
/*! exports provided: NodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeService", function() { return NodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _http_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-server.service */ "./src/app/shared/services/http-server.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NodeService = /** @class */ (function () {
    function NodeService(httpServer) {
        this.httpServer = httpServer;
    }
    NodeService.prototype.start = function (server, node) {
        return this.httpServer
            .post(server, "/projects/" + node.project_id + "/nodes/" + node.node_id + "/start", {});
    };
    NodeService.prototype.stop = function (server, node) {
        return this.httpServer
            .post(server, "/projects/" + node.project_id + "/nodes/" + node.node_id + "/stop", {});
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
        });
    };
    NodeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_server_service__WEBPACK_IMPORTED_MODULE_2__["HttpServer"]])
    ], NodeService);
    return NodeService;
}());



/***/ }),

/***/ "./src/app/shared/services/project.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/project.service.ts ***!
  \****************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _http_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-server.service */ "./src/app/shared/services/http-server.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = /** @class */ (function () {
    function ProjectService(httpServer) {
        this.httpServer = httpServer;
    }
    ProjectService.prototype.get = function (server, project_id) {
        return this.httpServer
            .get(server, "/projects/" + project_id);
    };
    ProjectService.prototype.open = function (server, project_id) {
        return this.httpServer
            .post(server, "/projects/" + project_id + "/open", {});
    };
    ProjectService.prototype.list = function (server) {
        return this.httpServer
            .get(server, '/projects');
    };
    ProjectService.prototype.nodes = function (server, project_id) {
        return this.httpServer
            .get(server, "/projects/" + project_id + "/nodes");
    };
    ProjectService.prototype.links = function (server, project_id) {
        return this.httpServer
            .get(server, "/projects/" + project_id + "/links");
    };
    ProjectService.prototype.drawings = function (server, project_id) {
        return this.httpServer
            .get(server, "/projects/" + project_id + "/drawings");
    };
    ProjectService.prototype.delete = function (server, project_id) {
        return this.httpServer
            .delete(server, "/projects/" + project_id);
    };
    ProjectService.prototype.notificationsPath = function (server, project_id) {
        return "ws://" + server.ip + ":" + server.port + "/v2/projects/" + project_id + "/notifications/ws";
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_server_service__WEBPACK_IMPORTED_MODULE_2__["HttpServer"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/shared/services/server.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/server.service.ts ***!
  \***************************************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _indexed_db_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexed-db.service */ "./src/app/shared/services/indexed-db.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_indexed_db_service__WEBPACK_IMPORTED_MODULE_1__["IndexedDbService"]])
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "./src/app/shared/services/snapshot.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/snapshot.service.ts ***!
  \*****************************************************/
/*! exports provided: SnapshotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnapshotService", function() { return SnapshotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _http_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-server.service */ "./src/app/shared/services/http-server.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnapshotService = /** @class */ (function () {
    function SnapshotService(httpServer) {
        this.httpServer = httpServer;
    }
    SnapshotService.prototype.create = function (server, project_id, snapshot) {
        return this.httpServer
            .post(server, "/projects/" + project_id + "/snapshots", snapshot);
    };
    SnapshotService.prototype.list = function (server, project_id) {
        return this.httpServer
            .get(server, "/projects/" + project_id + "/snapshots");
    };
    SnapshotService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_server_service__WEBPACK_IMPORTED_MODULE_1__["HttpServer"]])
    ], SnapshotService);
    return SnapshotService;
}());



/***/ }),

/***/ "./src/app/shared/services/symbol.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/symbol.service.ts ***!
  \***************************************************/
/*! exports provided: SymbolService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolService", function() { return SymbolService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_forkJoin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/forkJoin */ "./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var _http_server_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http-server.service */ "./src/app/shared/services/http-server.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SymbolService = /** @class */ (function () {
    function SymbolService(httpServer) {
        this.httpServer = httpServer;
        this.symbols = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
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
            rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].forkJoin(streams).subscribe(function (results) {
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
            .get(server, '/symbols');
    };
    SymbolService.prototype.raw = function (server, symbol_id) {
        var encoded_uri = encodeURI(symbol_id);
        return this.httpServer
            .getText(server, "/symbols/" + encoded_uri + "/raw");
    };
    SymbolService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_server_service__WEBPACK_IMPORTED_MODULE_6__["HttpServer"]])
    ], SymbolService);
    return SymbolService;
}());



/***/ }),

/***/ "./src/app/shared/services/toaster.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/toaster.service.ts ***!
  \****************************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToasterService = /** @class */ (function () {
    function ToasterService(snackbar) {
        this.snackbar = snackbar;
    }
    ToasterService.prototype.error = function (message) {
        this.snackbar.open(message, null, { duration: 2000 });
    };
    ToasterService.prototype.success = function (message) {
        this.snackbar.open(message, null, { duration: 2000 });
    };
    ToasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "./src/app/shared/services/version.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/version.service.ts ***!
  \****************************************************/
/*! exports provided: VersionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionService", function() { return VersionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var _http_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-server.service */ "./src/app/shared/services/http-server.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VersionService = /** @class */ (function () {
    function VersionService(httpServer) {
        this.httpServer = httpServer;
    }
    VersionService.prototype.get = function (server) {
        return this.httpServer
            .get(server, '/version');
    };
    VersionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_server_service__WEBPACK_IMPORTED_MODULE_2__["HttpServer"]])
    ], VersionService);
    return VersionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    electron: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/GNS3/gns3-web-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map