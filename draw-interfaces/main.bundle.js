webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_map_project_map_component__ = __webpack_require__("./src/app/project-map/project-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servers_servers_component__ = __webpack_require__("./src/app/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__default_layout_default_layout_component__ = __webpack_require__("./src/app/default-layout/default-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__default_layout_default_layout_component__["a" /* DefaultLayoutComponent */],
        children: [
            { path: '', redirectTo: 'servers', pathMatch: 'full' },
            { path: 'servers', component: __WEBPACK_IMPORTED_MODULE_4__servers_servers_component__["b" /* ServersComponent */] },
            { path: 'server/:server_id/projects', component: __WEBPACK_IMPORTED_MODULE_5__projects_projects_component__["a" /* ProjectsComponent */] },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_7__settings_settings_component__["a" /* SettingsComponent */] },
        ]
    },
    { path: 'server/:server_id/project/:project_id', component: __WEBPACK_IMPORTED_MODULE_3__project_map_project_map_component__["b" /* ProjectMapComponent */] },
];
var routerModule;
if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].electron) {
    // angular in electron has problem with base-href and links separated by slashes, because of that
    // we use simply hashes
    routerModule = __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true });
}
else {
    routerModule = __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes);
}
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [routerModule],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_electron__ = __webpack_require__("./node_modules/ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_settings_service__ = __webpack_require__("./src/app/shared/services/settings.service.ts");
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
    function AppComponent(iconReg, sanitizer, settingsService, electronService) {
        this.settingsService = settingsService;
        this.electronService = electronService;
        iconReg.addSvgIcon('gns3', sanitizer.bypassSecurityTrustResourceUrl('./assets/gns3_icon.svg'));
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.electronService.isElectronApp) {
            this.settingsService.subscribe(function (settings) {
                _this.electronService.ipcRenderer.send('settings.changed', settings);
            });
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_electron__["a" /* ElectronService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_raven_js__ = __webpack_require__("./node_modules/raven-js/src/singleton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_raven_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_d3_ng2_service__ = __webpack_require__("./node_modules/d3-ng2-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_hotkeys__ = __webpack_require__("./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_hotkeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_hotkeys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_persistence__ = __webpack_require__("./node_modules/angular-persistence/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_electron__ = __webpack_require__("./node_modules/ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_version_service__ = __webpack_require__("./src/app/shared/services/version.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_project_service__ = __webpack_require__("./src/app/shared/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_symbol_service__ = __webpack_require__("./src/app/shared/services/symbol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_services_server_service__ = __webpack_require__("./src/app/shared/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_services_indexed_db_service__ = __webpack_require__("./src/app/shared/services/indexed-db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_http_server_service__ = __webpack_require__("./src/app/shared/services/http-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_snapshot_service__ = __webpack_require__("./src/app/shared/services/snapshot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_progress_dialog_progress_dialog_service__ = __webpack_require__("./src/app/shared/progress-dialog/progress-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_node_service__ = __webpack_require__("./src/app/shared/services/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_appliance_service__ = __webpack_require__("./src/app/shared/services/appliance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_link_service__ = __webpack_require__("./src/app/shared/services/link.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__default_layout_default_layout_component__ = __webpack_require__("./src/app/default-layout/default-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_progress_dialog_progress_dialog_component__ = __webpack_require__("./src/app/shared/progress-dialog/progress-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__project_map_project_map_component__ = __webpack_require__("./src/app/project-map/project-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__servers_servers_component__ = __webpack_require__("./src/app/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_node_context_menu_node_context_menu_component__ = __webpack_require__("./src/app/shared/node-context-menu/node-context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_node_context_menu_actions_start_node_action_start_node_action_component__ = __webpack_require__("./src/app/shared/node-context-menu/actions/start-node-action/start-node-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_node_context_menu_actions_stop_node_action_stop_node_action_component__ = __webpack_require__("./src/app/shared/node-context-menu/actions/stop-node-action/stop-node-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__appliance_appliance_component__ = __webpack_require__("./src/app/appliance/appliance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__appliance_appliance_list_dialog_appliance_list_dialog_component__ = __webpack_require__("./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shared_node_select_interface_node_select_interface_component__ = __webpack_require__("./src/app/shared/node-select-interface/node-select-interface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__cartography_cartography_module__ = __webpack_require__("./src/app/cartography/cartography.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shared_services_toaster_service__ = __webpack_require__("./src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_handlers_project_web_service_handler__ = __webpack_require__("./src/app/shared/handlers/project-web-service-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__cartography_shared_datasources_links_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/links-datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__cartography_shared_datasources_nodes_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/nodes-datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__cartography_shared_datasources_symbols_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/symbols-datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__cartography_shared_managers_selection_manager__ = __webpack_require__("./src/app/cartography/shared/managers/selection-manager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__cartography_map_helpers_in_rectangle_helper__ = __webpack_require__("./src/app/cartography/map/helpers/in-rectangle-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__cartography_shared_datasources_drawings_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/drawings-datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__shared_node_context_menu_actions_move_layer_down_action_move_layer_down_action_component__ = __webpack_require__("./src/app/shared/node-context-menu/actions/move-layer-down-action/move-layer-down-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__shared_node_context_menu_actions_move_layer_up_action_move_layer_up_action_component__ = __webpack_require__("./src/app/shared/node-context-menu/actions/move-layer-up-action/move-layer-up-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__project_map_project_map_shortcuts_project_map_shortcuts_component__ = __webpack_require__("./src/app/project-map/project-map-shortcuts/project-map-shortcuts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__settings_settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__shared_services_settings_service__ = __webpack_require__("./src/app/shared/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__raven_error_handler__ = __webpack_require__("./src/app/raven-error-handler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















































__WEBPACK_IMPORTED_MODULE_0_raven_js__["config"]('https://b2b1cfd9b043491eb6b566fd8acee358@sentry.io/842726')
    .install();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_29__project_map_project_map_component__["b" /* ProjectMapComponent */],
                __WEBPACK_IMPORTED_MODULE_30__servers_servers_component__["b" /* ServersComponent */],
                __WEBPACK_IMPORTED_MODULE_30__servers_servers_component__["a" /* AddServerDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_29__project_map_project_map_component__["a" /* CreateSnapshotDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_25__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__default_layout_default_layout_component__["a" /* DefaultLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_27__shared_progress_dialog_progress_dialog_component__["a" /* ProgressDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_31__shared_node_context_menu_node_context_menu_component__["a" /* NodeContextMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_32__shared_node_context_menu_actions_start_node_action_start_node_action_component__["a" /* StartNodeActionComponent */],
                __WEBPACK_IMPORTED_MODULE_33__shared_node_context_menu_actions_stop_node_action_stop_node_action_component__["a" /* StopNodeActionComponent */],
                __WEBPACK_IMPORTED_MODULE_34__appliance_appliance_component__["a" /* ApplianceComponent */],
                __WEBPACK_IMPORTED_MODULE_35__appliance_appliance_list_dialog_appliance_list_dialog_component__["a" /* ApplianceListDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_36__shared_node_select_interface_node_select_interface_component__["a" /* NodeSelectInterfaceComponent */],
                __WEBPACK_IMPORTED_MODULE_46__shared_node_context_menu_actions_move_layer_down_action_move_layer_down_action_component__["a" /* MoveLayerDownActionComponent */],
                __WEBPACK_IMPORTED_MODULE_47__shared_node_context_menu_actions_move_layer_up_action_move_layer_up_action_component__["a" /* MoveLayerUpActionComponent */],
                __WEBPACK_IMPORTED_MODULE_48__project_map_project_map_shortcuts_project_map_shortcuts_component__["a" /* ProjectMapShortcutsComponent */],
                __WEBPACK_IMPORTED_MODULE_49__settings_settings_component__["a" /* SettingsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["i" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["t" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_37__cartography_cartography_module__["a" /* CartographyModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_hotkeys__["HotkeyModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angular_persistence__["a" /* PersistenceModule */],
                __WEBPACK_IMPORTED_MODULE_12_ngx_electron__["b" /* NgxElectronModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_50__shared_services_settings_service__["a" /* SettingsService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_51__raven_error_handler__["a" /* RavenErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8_d3_ng2_service__["a" /* D3Service */],
                __WEBPACK_IMPORTED_MODULE_14__shared_services_version_service__["a" /* VersionService */],
                __WEBPACK_IMPORTED_MODULE_15__shared_services_project_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_16__shared_services_symbol_service__["a" /* SymbolService */],
                __WEBPACK_IMPORTED_MODULE_17__shared_services_server_service__["a" /* ServerService */],
                __WEBPACK_IMPORTED_MODULE_23__shared_services_appliance_service__["a" /* ApplianceService */],
                __WEBPACK_IMPORTED_MODULE_22__shared_services_node_service__["a" /* NodeService */],
                __WEBPACK_IMPORTED_MODULE_24__shared_services_link_service__["a" /* LinkService */],
                __WEBPACK_IMPORTED_MODULE_18__shared_services_indexed_db_service__["a" /* IndexedDbService */],
                __WEBPACK_IMPORTED_MODULE_19__shared_services_http_server_service__["a" /* HttpServer */],
                __WEBPACK_IMPORTED_MODULE_20__shared_services_snapshot_service__["a" /* SnapshotService */],
                __WEBPACK_IMPORTED_MODULE_21__shared_progress_dialog_progress_dialog_service__["a" /* ProgressDialogService */],
                __WEBPACK_IMPORTED_MODULE_38__shared_services_toaster_service__["a" /* ToasterService */],
                __WEBPACK_IMPORTED_MODULE_39__shared_handlers_project_web_service_handler__["a" /* ProjectWebServiceHandler */],
                __WEBPACK_IMPORTED_MODULE_40__cartography_shared_datasources_links_datasource__["a" /* LinksDataSource */],
                __WEBPACK_IMPORTED_MODULE_41__cartography_shared_datasources_nodes_datasource__["a" /* NodesDataSource */],
                __WEBPACK_IMPORTED_MODULE_42__cartography_shared_datasources_symbols_datasource__["a" /* SymbolsDataSource */],
                __WEBPACK_IMPORTED_MODULE_43__cartography_shared_managers_selection_manager__["a" /* SelectionManager */],
                __WEBPACK_IMPORTED_MODULE_44__cartography_map_helpers_in_rectangle_helper__["a" /* InRectangleHelper */],
                __WEBPACK_IMPORTED_MODULE_45__cartography_shared_datasources_drawings_datasource__["a" /* DrawingsDataSource */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_30__servers_servers_component__["a" /* AddServerDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_29__project_map_project_map_component__["a" /* CreateSnapshotDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_27__shared_progress_dialog_progress_dialog_component__["a" /* ProgressDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_35__appliance_appliance_list_dialog_appliance_list_dialog_component__["a" /* ApplianceListDialogComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_28__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n    <div class=\"example-header\">\n      <mat-form-field floatPlaceholder=\"never\">\n        <input matInput #filter placeholder=\"Filter appliances\">\n      </mat-form-field>\n    </div>\n\n    <mat-table #table [dataSource]=\"dataSource\">\n\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row;\"> <a (click)=\"addNode(row)\" href='javascript:void(0);' class=\"table-link\">{{row.name}}</a> </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n</div>\n<div mat-dialog-actions align=\"end\">\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\" color=\"accent\">Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.scss":
/***/ (function(module, exports) {

module.exports = ".example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 400px; }\n\n.mat-form-field {\n  font-size: 16px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplianceListDialogComponent; });
/* unused harmony export ApplianceDatabase */
/* unused harmony export ApplianceDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_appliance_service__ = __webpack_require__("./src/app/shared/services/appliance.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('filter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], ApplianceListDialogComponent.prototype, "filter", void 0);
    ApplianceListDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appliance-list-dialog',
            template: __webpack_require__("./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.html"),
            styles: [__webpack_require__("./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
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

/***/ "./src/app/appliance/appliance.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button (click)=\"listAppliancesModal()\">\n  <mat-icon>add_to_queue</mat-icon>\n</button>\n"

/***/ }),

/***/ "./src/app/appliance/appliance.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appliance/appliance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplianceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appliance_list_dialog_appliance_list_dialog_component__ = __webpack_require__("./src/app/appliance/appliance-list-dialog/appliance-list-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_models_server__ = __webpack_require__("./src/app/shared/models/server.ts");
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
        this.onNodeCreation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__shared_models_server__["a" /* Server */])
    ], ApplianceComponent.prototype, "server", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ApplianceComponent.prototype, "onNodeCreation", void 0);
    ApplianceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-appliance',
            template: __webpack_require__("./src/app/appliance/appliance.component.html"),
            styles: [__webpack_require__("./src/app/appliance/appliance.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]])
    ], ApplianceComponent);
    return ApplianceComponent;
}());



/***/ }),

/***/ "./src/app/cartography/cartography.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartographyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map_component__ = __webpack_require__("./src/app/cartography/map/map.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__map_map_component__["a" /* MapComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__map_map_component__["a" /* MapComponent */]]
        })
    ], CartographyModule);
    return CartographyModule;
}());



/***/ }),

/***/ "./src/app/cartography/map/helpers/in-rectangle-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InRectangleHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InRectangleHelper = /** @class */ (function () {
    function InRectangleHelper() {
    }
    InRectangleHelper.prototype.inRectangle = function (rectangle, x, y) {
        return (rectangle.x <= x && x < (rectangle.x + rectangle.width)
            && rectangle.y <= y && y < (rectangle.y + rectangle.height));
    };
    InRectangleHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], InRectangleHelper);
    return InRectangleHelper;
}());



/***/ }),

/***/ "./src/app/cartography/map/helpers/multi-link-calculator-helper.ts":
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
            var sid = l.source.node_id;
            var tid = l.target.node_id;
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
/***/ (function(module, exports) {

module.exports = "<svg class=\"map\" preserveAspectRatio=\"none\">\n</svg>\n"

/***/ }),

/***/ "./src/app/cartography/map/map.component.scss":
/***/ (function(module, exports) {

module.exports = "svg {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/cartography/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__("./node_modules/d3-ng2-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_selection__ = __webpack_require__("./node_modules/d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_widgets_graph_layout__ = __webpack_require__("./src/app/cartography/shared/widgets/graph-layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_context__ = __webpack_require__("./src/app/cartography/shared/models/context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_models_size__ = __webpack_require__("./src/app/cartography/shared/models/size.ts");
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
            this.graphContext = new __WEBPACK_IMPORTED_MODULE_4__shared_models_context__["a" /* Context */](true);
            this.graphContext.size = this.getSize();
            this.graphLayout = new __WEBPACK_IMPORTED_MODULE_3__shared_widgets_graph_layout__["a" /* GraphLayout */]();
            this.graphLayout.connect(this.svg, this.graphContext);
            this.graphLayout.getNodesWidget().addOnNodeDraggingCallback(function (event, n) {
                var linksWidget = _this.graphLayout.getLinksWidget();
                linksWidget.select(_this.svg).each(function (link) {
                    if (link.target.node_id === n.node_id || link.source.node_id === n.node_id) {
                        var selection = Object(__WEBPACK_IMPORTED_MODULE_2_d3_selection__["k" /* select */])(this);
                        linksWidget.revise(selection);
                    }
                });
            });
            this.graphLayout.draw(this.svg, this.graphContext);
        }
    };
    MapComponent.prototype.getSize = function () {
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        if (this.width > width) {
            width = this.width;
        }
        if (this.height > height) {
            height = this.height;
        }
        return new __WEBPACK_IMPORTED_MODULE_5__shared_models_size__["a" /* Size */](width, height);
    };
    MapComponent.prototype.changeLayout = function () {
        if (this.parentNativeElement != null) {
            this.graphContext.size = this.getSize();
        }
        if (this.graphContext != null) {
            this.svg
                .attr('width', this.graphContext.size.width)
                .attr('height', this.graphContext.size.height);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "nodes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "links", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "drawings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "symbols", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MapComponent.prototype, "onResize", null);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__("./src/app/cartography/map/map.component.html"),
            styles: [__webpack_require__("./src/app/cartography/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/cartography/shared/datasources/datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");

var DataSource = /** @class */ (function () {
    function DataSource() {
        this.data = [];
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    DataSource.prototype.getItems = function () {
        return this.data;
    };
    DataSource.prototype.add = function (item) {
        var index = this.findIndex(item);
        if (index >= 0) {
            this.update(item);
        }
        else {
            this.data.push(item);
            this.dataChange.next(this.data);
        }
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
    DataSource.prototype.clear = function () {
        this.data = [];
        this.dataChange.next(this.data);
    };
    return DataSource;
}());



/***/ }),

/***/ "./src/app/cartography/shared/datasources/drawings-datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingsDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/datasource.ts");
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


var DrawingsDataSource = /** @class */ (function (_super) {
    __extends(DrawingsDataSource, _super);
    function DrawingsDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DrawingsDataSource.prototype.findIndex = function (drawing) {
        return this.data.findIndex(function (d) { return d.drawing_id === drawing.drawing_id; });
    };
    DrawingsDataSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DrawingsDataSource);
    return DrawingsDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__datasource__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/cartography/shared/datasources/links-datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/datasource.ts");
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


var LinksDataSource = /** @class */ (function (_super) {
    __extends(LinksDataSource, _super);
    function LinksDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinksDataSource.prototype.findIndex = function (link) {
        return this.data.findIndex(function (l) { return l.link_id === link.link_id; });
    };
    LinksDataSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LinksDataSource);
    return LinksDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__datasource__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/cartography/shared/datasources/nodes-datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodesDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/datasource.ts");
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


var NodesDataSource = /** @class */ (function (_super) {
    __extends(NodesDataSource, _super);
    function NodesDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodesDataSource.prototype.findIndex = function (node) {
        return this.data.findIndex(function (n) { return n.node_id === node.node_id; });
    };
    NodesDataSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], NodesDataSource);
    return NodesDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__datasource__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/cartography/shared/datasources/symbols-datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SymbolsDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/datasource.ts");
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


var SymbolsDataSource = /** @class */ (function (_super) {
    __extends(SymbolsDataSource, _super);
    function SymbolsDataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SymbolsDataSource.prototype.findIndex = function (symbol) {
        return this.data.findIndex(function (s) { return s.symbol_id === symbol.symbol_id; });
    };
    SymbolsDataSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SymbolsDataSource);
    return SymbolsDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__datasource__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/cartography/shared/helpers/css-fixer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CssFixer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_css_tree__ = __webpack_require__("./node_modules/css-tree/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_css_tree___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_css_tree__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CssFixer = /** @class */ (function () {
    function CssFixer() {
    }
    CssFixer.prototype.fix = function (styles) {
        var ast = __WEBPACK_IMPORTED_MODULE_0_css_tree__["parse"](styles, {
            'context': 'declarationList'
        });
        // fixes font-size when unit (pt|px) is not defined
        ast.children.forEach(function (child) {
            if (child.property === 'font-size') {
                child.value.children.forEach(function (value) {
                    if (value.type === 'Number') {
                        var fontSize = value.value.toString();
                        if (!(fontSize.indexOf("pt") >= 0 || fontSize.indexOf("px") >= 0)) {
                            value.value = fontSize + "pt";
                        }
                    }
                });
            }
        });
        return __WEBPACK_IMPORTED_MODULE_0_css_tree__["generate"](ast);
    };
    CssFixer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], CssFixer);
    return CssFixer;
}());



/***/ }),

/***/ "./src/app/cartography/shared/managers/layers-manager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayersManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_layer__ = __webpack_require__("./src/app/cartography/shared/models/layer.ts");

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
            this.layers[key] = new __WEBPACK_IMPORTED_MODULE_0__models_layer__["a" /* Layer */]();
            this.layers[key].index = Number(key);
        }
        return this.layers[key];
    };
    return LayersManager;
}());



/***/ }),

/***/ "./src/app/cartography/shared/managers/selection-manager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datasources_nodes_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/nodes-datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datasources_links_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/links-datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_helpers_in_rectangle_helper__ = __webpack_require__("./src/app/cartography/map/helpers/in-rectangle-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datasources_drawings_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/drawings-datasource.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectionManager = /** @class */ (function () {
    function SelectionManager(nodesDataSource, linksDataSource, drawingsDataSource, inRectangleHelper) {
        this.nodesDataSource = nodesDataSource;
        this.linksDataSource = linksDataSource;
        this.drawingsDataSource = drawingsDataSource;
        this.inRectangleHelper = inRectangleHelper;
        this.selectedNodes = [];
        this.selectedLinks = [];
        this.selectedDrawings = [];
        this.selectedInterfaceLabels = [];
    }
    SelectionManager.prototype.subscribe = function (subject) {
        var _this = this;
        this.subscription = subject.subscribe(function (rectangle) {
            _this.selectedNodes = _this.getSelectedItemsInRectangle(_this.nodesDataSource, rectangle);
            _this.selectedLinks = _this.getSelectedItemsInRectangle(_this.linksDataSource, rectangle);
            _this.selectedDrawings = _this.getSelectedItemsInRectangle(_this.drawingsDataSource, rectangle);
            _this.selectedInterfaceLabels = _this.getSelectedInterfaceLabelsInRectangle(rectangle);
        });
        return this.subscription;
    };
    SelectionManager.prototype.getSelectedNodes = function () {
        return this.selectedNodes;
    };
    SelectionManager.prototype.getSelectedLinks = function () {
        return this.selectedLinks;
    };
    SelectionManager.prototype.getSelectedDrawings = function () {
        return this.selectedDrawings;
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
    SelectionManager.prototype.setSelectedDrawings = function (drawings) {
        this.selectedDrawings = this.setSelectedItems(this.drawingsDataSource, function (drawing) {
            return !!drawings.find(function (d) { return drawing.drawing_id === d.drawing_id; });
        });
    };
    SelectionManager.prototype.clearSelection = function () {
        this.setSelectedDrawings([]);
        this.setSelectedLinks([]);
        this.setSelectedNodes([]);
    };
    SelectionManager.prototype.getSelectedItemsInRectangle = function (dataSource, rectangle) {
        var _this = this;
        return this.setSelectedItems(dataSource, function (item) {
            return _this.inRectangleHelper.inRectangle(rectangle, item.x, item.y);
        });
    };
    SelectionManager.prototype.getSelectedInterfaceLabelsInRectangle = function (rectangle) {
        var _this = this;
        this.linksDataSource.getItems().forEach(function (link) {
            if (!(link.source && link.target && link.nodes.length > 1)) {
                return;
            }
            var updated = false;
            var x = link.source.x + link.nodes[0].label.x;
            var y = link.source.y + link.nodes[0].label.y;
            if (_this.inRectangleHelper.inRectangle(rectangle, x, y)) {
                link.nodes[0].label.is_selected = true;
                updated = true;
            }
            x = link.target.x + link.nodes[1].label.x;
            y = link.target.y + link.nodes[1].label.y;
            if (_this.inRectangleHelper.inRectangle(rectangle, x, y)) {
                link.nodes[1].label.is_selected = true;
                updated = true;
            }
            if (updated) {
                _this.linksDataSource.update(link);
            }
        });
        return [];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__datasources_nodes_datasource__["a" /* NodesDataSource */],
            __WEBPACK_IMPORTED_MODULE_2__datasources_links_datasource__["a" /* LinksDataSource */],
            __WEBPACK_IMPORTED_MODULE_4__datasources_drawings_datasource__["a" /* DrawingsDataSource */],
            __WEBPACK_IMPORTED_MODULE_3__map_helpers_in_rectangle_helper__["a" /* InRectangleHelper */]])
    ], SelectionManager);
    return SelectionManager;
}());



/***/ }),

/***/ "./src/app/cartography/shared/models/context.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Transformation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__size__ = __webpack_require__("./src/app/cartography/shared/models/size.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__("./src/app/cartography/shared/models/point.ts");


var Transformation = /** @class */ (function () {
    function Transformation(x, y, k) {
        this.x = x;
        this.y = y;
        this.k = k;
    }
    return Transformation;
}());

var Context = /** @class */ (function () {
    function Context(centerZeroZeroPoint) {
        if (centerZeroZeroPoint === void 0) { centerZeroZeroPoint = true; }
        this.centerZeroZeroPoint = centerZeroZeroPoint;
        this.size = new __WEBPACK_IMPORTED_MODULE_0__size__["a" /* Size */](0, 0);
        this.transformation = new Transformation(0, 0, 1);
    }
    Context.prototype.getZeroZeroTransformationPoint = function () {
        if (this.centerZeroZeroPoint) {
            return new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.size.width / 2., this.size.height / 2.);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](0, 0);
    };
    return Context;
}());



/***/ }),

/***/ "./src/app/cartography/shared/models/drawing-line.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingLine; });
var DrawingLine = /** @class */ (function () {
    function DrawingLine() {
    }
    return DrawingLine;
}());



/***/ }),

/***/ "./src/app/cartography/shared/models/interface-label.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterfaceLabel; });
var InterfaceLabel = /** @class */ (function () {
    function InterfaceLabel(link_id, direction, x, y, text, style, rotation, is_selected) {
        if (rotation === void 0) { rotation = 0; }
        if (is_selected === void 0) { is_selected = false; }
        this.link_id = link_id;
        this.direction = direction;
        this.x = x;
        this.y = y;
        this.text = text;
        this.style = style;
        this.rotation = rotation;
        this.is_selected = is_selected;
    }
    return InterfaceLabel;
}());



/***/ }),

/***/ "./src/app/cartography/shared/models/layer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layer; });
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

/***/ "./src/app/cartography/shared/models/node.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Node; });
var Node = /** @class */ (function () {
    function Node() {
        this.is_selected = false;
    }
    return Node;
}());



/***/ }),

/***/ "./src/app/cartography/shared/models/point.ts":
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

/***/ "./src/app/cartography/shared/models/rectangle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rectangle; });
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

/***/ "./src/app/cartography/shared/tools/moving-tool.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovingTool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_zoom__ = __webpack_require__("./node_modules/d3-zoom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__("./node_modules/d3-selection/index.js");


var MovingTool = /** @class */ (function () {
    function MovingTool() {
        this.zoom = Object(__WEBPACK_IMPORTED_MODULE_0_d3_zoom__["a" /* zoom */])()
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
            var e = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["e" /* event */];
            canvas.attr('transform', function () {
                self.context.transformation.x = e.transform.x;
                self.context.transformation.y = e.transform.y;
                self.context.transformation.k = e.transform.k;
                var xTrans = self.context.getZeroZeroTransformationPoint().x + self.context.transformation.x;
                var yTrans = self.context.getZeroZeroTransformationPoint().y + self.context.transformation.y;
                var kTrans = self.context.transformation.k;
                return "translate(" + xTrans + ", " + yTrans + ") scale(" + kTrans + ")";
            });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionTool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__("./node_modules/d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_rectangle__ = __webpack_require__("./src/app/cartography/shared/models/rectangle.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectionTool = /** @class */ (function () {
    function SelectionTool() {
        this.rectangleSelected = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    SelectionTool_1 = SelectionTool;
    SelectionTool.prototype.connect = function (selection, context) {
        this.selection = selection;
        this.context = context;
    };
    SelectionTool.prototype.activate = function () {
        var self = this;
        this.selection.on("mousedown", function () {
            var subject = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["k" /* select */])(window);
            var parent = this.parentElement;
            var start = self.transformation(Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["h" /* mouse */])(parent));
            self.startSelection(start);
            // clear selection
            self.selection
                .selectAll(SelectionTool_1.SELECTABLE_CLASS)
                .classed("selected", false);
            subject
                .on("mousemove.selection", function () {
                var end = self.transformation(Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["h" /* mouse */])(parent));
                self.moveSelection(start, end);
            }).on("mouseup.selection", function () {
                var end = self.transformation(Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["h" /* mouse */])(parent));
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
        this.rectangleSelected.next(new __WEBPACK_IMPORTED_MODULE_3__models_rectangle__["a" /* Rectangle */](x, y, width, height));
    };
    SelectionTool.prototype.rect = function (x, y, w, h) {
        return "M" + [x, y] + " l" + [w, 0] + " l" + [0, h] + " l" + [-w, 0] + "z";
    };
    SelectionTool.prototype.transformation = function (point) {
        var transformation_point = this.context.getZeroZeroTransformationPoint();
        return [
            point[0] - transformation_point.x - this.context.transformation.x,
            point[1] - transformation_point.y - this.context.transformation.y
        ];
    };
    SelectionTool.SELECTABLE_CLASS = '.selectable';
    SelectionTool = SelectionTool_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SelectionTool);
    return SelectionTool;
    var SelectionTool_1;
}());



/***/ }),

/***/ "./src/app/cartography/shared/widgets/drawing-line.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingLineWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_shape__ = __webpack_require__("./node_modules/d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__("./node_modules/d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_drawing_line__ = __webpack_require__("./src/app/cartography/shared/models/drawing-line.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_point__ = __webpack_require__("./src/app/cartography/shared/models/point.ts");




var DrawingLineWidget = /** @class */ (function () {
    function DrawingLineWidget() {
        this.drawingLine = new __WEBPACK_IMPORTED_MODULE_2__models_drawing_line__["a" /* DrawingLine */]();
        this.drawing = false;
        this.data = {};
    }
    DrawingLineWidget.prototype.start = function (x, y, data) {
        var self = this;
        this.drawing = true;
        this.data = data;
        this.drawingLine.start = new __WEBPACK_IMPORTED_MODULE_3__models_point__["a" /* Point */](x, y);
        this.drawingLine.end = new __WEBPACK_IMPORTED_MODULE_3__models_point__["a" /* Point */](x, y);
        var over = function (d, i) {
            var node = self.selection.select('g.canvas').node();
            var coordinates = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["h" /* mouse */])(node);
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
        var value_line = Object(__WEBPACK_IMPORTED_MODULE_0_d3_shape__["v" /* line */])();
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawingsWidget; });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EthernetLinkWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_shape__ = __webpack_require__("./node_modules/d3-shape/index.js");

var EthernetLinkWidget = /** @class */ (function () {
    function EthernetLinkWidget() {
    }
    EthernetLinkWidget.prototype.draw = function (view, link) {
        var link_data = [[
                [link.source.x + link.source.width / 2., link.source.y + link.source.height / 2.],
                [link.target.x + link.target.width / 2., link.target.y + link.source.height / 2.]
            ]];
        var value_line = Object(__WEBPACK_IMPORTED_MODULE_0_d3_shape__["v" /* line */])();
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nodes__ = __webpack_require__("./src/app/cartography/shared/widgets/nodes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__links__ = __webpack_require__("./src/app/cartography/shared/widgets/links.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drawings__ = __webpack_require__("./src/app/cartography/shared/widgets/drawings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drawing_line__ = __webpack_require__("./src/app/cartography/shared/widgets/drawing-line.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_selection_tool__ = __webpack_require__("./src/app/cartography/shared/tools/selection-tool.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_moving_tool__ = __webpack_require__("./src/app/cartography/shared/tools/moving-tool.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layers__ = __webpack_require__("./src/app/cartography/shared/widgets/layers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__managers_layers_manager__ = __webpack_require__("./src/app/cartography/shared/managers/layers-manager.ts");








var GraphLayout = /** @class */ (function () {
    function GraphLayout() {
        this.nodes = [];
        this.links = [];
        this.drawings = [];
        this.linksWidget = new __WEBPACK_IMPORTED_MODULE_1__links__["a" /* LinksWidget */]();
        this.nodesWidget = new __WEBPACK_IMPORTED_MODULE_0__nodes__["a" /* NodesWidget */]();
        this.drawingsWidget = new __WEBPACK_IMPORTED_MODULE_2__drawings__["a" /* DrawingsWidget */]();
        this.drawingLineTool = new __WEBPACK_IMPORTED_MODULE_3__drawing_line__["a" /* DrawingLineWidget */]();
        this.selectionTool = new __WEBPACK_IMPORTED_MODULE_4__tools_selection_tool__["a" /* SelectionTool */]();
        this.movingTool = new __WEBPACK_IMPORTED_MODULE_5__tools_moving_tool__["a" /* MovingTool */]();
        this.layersWidget = new __WEBPACK_IMPORTED_MODULE_6__layers__["a" /* LayersWidget */]();
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
        canvas
            .merge(canvasEnter)
            .attr('transform', function (ctx) {
            var xTrans = ctx.getZeroZeroTransformationPoint().x + ctx.transformation.x;
            var yTrans = ctx.getZeroZeroTransformationPoint().y + ctx.transformation.y;
            var kTrans = ctx.transformation.k;
            return "translate(" + xTrans + ", " + yTrans + ") scale(" + kTrans + ")";
        });
        var layersManager = new __WEBPACK_IMPORTED_MODULE_7__managers_layers_manager__["a" /* LayersManager */]();
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

/***/ "./src/app/cartography/shared/widgets/interface-label.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterfaceLabelWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_interface_label__ = __webpack_require__("./src/app/cartography/shared/models/interface-label.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_css_fixer__ = __webpack_require__("./src/app/cartography/shared/helpers/css-fixer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_selection__ = __webpack_require__("./node_modules/d3-selection/index.js");



var InterfaceLabelWidget = /** @class */ (function () {
    function InterfaceLabelWidget() {
        this.cssFixer = new __WEBPACK_IMPORTED_MODULE_1__helpers_css_fixer__["a" /* CssFixer */]();
    }
    InterfaceLabelWidget.prototype.draw = function (selection) {
        var _this = this;
        var labels = selection
            .selectAll('g.interface_label_container')
            .data(function (l) {
            var sourceInterface = new __WEBPACK_IMPORTED_MODULE_0__models_interface_label__["a" /* InterfaceLabel */](l.link_id, 'source', Math.round(l.source.x + l.nodes[0].label.x), Math.round(l.source.y + l.nodes[0].label.y), l.nodes[0].label.text, l.nodes[0].label.style, l.nodes[0].label.rotation, l.nodes[0].label.is_selected);
            var targetInterface = new __WEBPACK_IMPORTED_MODULE_0__models_interface_label__["a" /* InterfaceLabel */](l.link_id, 'target', Math.round(l.target.x + l.nodes[1].label.x), Math.round(l.target.y + l.nodes[1].label.y), l.nodes[1].label.text, l.nodes[1].label.style, l.nodes[1].label.rotation, l.nodes[1].label.is_selected);
            return [sourceInterface, targetInterface];
        });
        var enter = labels
            .enter()
            .append('g')
            .classed('interface_label_container', true);
        // create surrounding rect
        enter
            .append('rect')
            .attr('class', 'interface_label_border');
        // create label
        enter
            .append('text')
            .attr('class', 'interface_label noselect');
        var merge = labels
            .merge(enter);
        merge
            .attr('width', 100)
            .attr('height', 100)
            .attr('transform', function (l) {
            var bbox = this.getBBox();
            var x = l.x;
            var y = l.y + bbox.height;
            return "translate(" + x + ", " + y + ") rotate(" + l.rotation + ", " + x + ", " + y + ")";
        })
            .classed('selected', function (l) { return l.is_selected; });
        // update label
        merge
            .select('text.interface_label')
            .text(function (l) { return l.text; })
            .attr('style', function (l) { return _this.cssFixer.fix(l.style); });
        // update surrounding rect
        merge
            .select('rect.interface_label_border')
            .attr('visibility', function (l) { return l.is_selected ? 'visible' : 'hidden'; })
            .attr('stroke-dasharray', '3,3')
            .attr('stroke-width', '0.5')
            .each(function (l) {
            var current = Object(__WEBPACK_IMPORTED_MODULE_2_d3_selection__["k" /* select */])(this);
            var parent = Object(__WEBPACK_IMPORTED_MODULE_2_d3_selection__["k" /* select */])(this.parentElement);
            var text = parent.select('text');
            var bbox = text.node().getBBox();
            var border = InterfaceLabelWidget.SURROUNDING_TEXT_BORDER;
            current.attr('width', bbox.width + border * 2);
            current.attr('height', bbox.height + border);
            current.attr('x', -border);
            current.attr('y', -bbox.height);
        });
        labels
            .exit()
            .remove();
    };
    InterfaceLabelWidget.SURROUNDING_TEXT_BORDER = 5;
    return InterfaceLabelWidget;
}());



/***/ }),

/***/ "./src/app/cartography/shared/widgets/layers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayersWidget; });
var LayersWidget = /** @class */ (function () {
    function LayersWidget() {
    }
    LayersWidget.prototype.draw = function (view, layers) {
        var layers_selection = view
            .selectAll('g.layer')
            .data(layers, function (layer) {
            return layer.index.toString();
        });
        var layers_enter = layers_selection
            .enter()
            .append('g')
            .attr('class', 'layer');
        // add container for links
        layers_enter
            .append('g')
            .attr('class', 'links');
        // add container for nodes
        layers_enter
            .append('g')
            .attr('class', 'nodes');
        // add container for drawings
        layers_enter
            .append('g')
            .attr('class', 'drawings');
        var merge = layers_selection.merge(layers_enter);
        merge
            .attr('data-index', function (layer) { return layer.index; });
        var links_container = merge
            .select('g.links');
        var nodes_container = merge
            .select('g.nodes');
        var drawings_container = merge
            .select('g.drawings');
        layers_selection
            .exit()
            .remove();
        this.graphLayout
            .getLinksWidget()
            .draw(links_container);
        this.graphLayout
            .getNodesWidget()
            .draw(nodes_container);
        this.graphLayout
            .getDrawingsWidget()
            .draw(drawings_container);
    };
    return LayersWidget;
}());



/***/ }),

/***/ "./src/app/cartography/shared/widgets/links.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__("./node_modules/d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_link_status__ = __webpack_require__("./src/app/cartography/shared/models/link-status.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_helpers_multi_link_calculator_helper__ = __webpack_require__("./src/app/cartography/map/helpers/multi-link-calculator-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serial_link__ = __webpack_require__("./src/app/cartography/shared/widgets/serial-link.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethernet_link__ = __webpack_require__("./src/app/cartography/shared/widgets/ethernet-link.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interface_label__ = __webpack_require__("./src/app/cartography/shared/widgets/interface-label.ts");






var LinksWidget = /** @class */ (function () {
    function LinksWidget() {
        this.multiLinkCalculatorHelper = new __WEBPACK_IMPORTED_MODULE_2__map_helpers_multi_link_calculator_helper__["a" /* MultiLinkCalculatorHelper */]();
        this.interfaceLabelWidget = new __WEBPACK_IMPORTED_MODULE_5__interface_label__["a" /* InterfaceLabelWidget */]();
    }
    LinksWidget.prototype.getInterfaceLabelWidget = function () {
        return this.interfaceLabelWidget;
    };
    LinksWidget.prototype.setInterfaceLabelWidget = function (interfaceLabelWidget) {
        this.interfaceLabelWidget = interfaceLabelWidget;
    };
    LinksWidget.prototype.getLinkWidget = function (link) {
        if (link.link_type === 'serial') {
            return new __WEBPACK_IMPORTED_MODULE_3__serial_link__["a" /* SerialLinkWidget */]();
        }
        return new __WEBPACK_IMPORTED_MODULE_4__ethernet_link__["a" /* EthernetLinkWidget */]();
    };
    LinksWidget.prototype.select = function (view) {
        return view.selectAll("g.link");
    };
    LinksWidget.prototype.revise = function (selection) {
        var self = this;
        selection
            .each(function (l) {
            var link_group = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["k" /* select */])(this);
            var link_widget = self.getLinkWidget(l);
            link_widget.draw(link_group, l);
            var link_path = link_group.select('path');
            var start_point = link_path.node().getPointAtLength(45);
            var end_point = link_path.node().getPointAtLength(link_path.node().getTotalLength() - 45);
            var statuses = [];
            if (link_path.node().getTotalLength() > 2 * 45 + 10) {
                statuses = [
                    new __WEBPACK_IMPORTED_MODULE_1__models_link_status__["a" /* LinkStatus */](start_point.x, start_point.y, l.source.status),
                    new __WEBPACK_IMPORTED_MODULE_1__models_link_status__["a" /* LinkStatus */](end_point.x, end_point.y, l.target.status)
                ];
            }
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
                .attr('r', 6)
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
            var STOPPED_STATUS_RECT_WIDTH = 10;
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
        this.getInterfaceLabelWidget().draw(selection);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodesWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__("./node_modules/d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_drag__ = __webpack_require__("./node_modules/d3-drag/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_css_fixer__ = __webpack_require__("./src/app/cartography/shared/helpers/css-fixer.ts");



var NodesWidget = /** @class */ (function () {
    function NodesWidget() {
        this.debug = false;
        this.onNodeDraggingCallbacks = [];
        this.symbols = [];
        this.cssFixer = new __WEBPACK_IMPORTED_MODULE_2__helpers_css_fixer__["a" /* CssFixer */]();
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
        var _this = this;
        selection
            .attr('transform', function (n) {
            return "translate(" + n.x + "," + n.y + ")";
        });
        selection
            .select('text.label')
            .attr('style', function (n) { return _this.cssFixer.fix(n.label.style); })
            .text(function (n) { return n.label.text; })
            .attr('x', function (n) {
            if (n.label.x === null) {
                // center
                var bbox = this.getBBox();
                return -bbox.width / 2.;
            }
            return n.label.x;
        })
            .attr('y', function (n) {
            var bbox = this.getBBox();
            if (n.label.x === null) {
                // center
                bbox = this.getBBox();
                return -n.height / 2. - bbox.height;
            }
            return n.label.y + bbox.height;
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
        // add image to node
        node_enter
            .append('image');
        // add label of node
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
            __WEBPACK_IMPORTED_MODULE_0_d3_selection__["e" /* event */].preventDefault();
            if (self.onContextMenuCallback !== null) {
                self.onContextMenuCallback(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["e" /* event */], n);
            }
        })
            .on('click', function (n) {
            if (self.onNodeClickedCallback) {
                self.onNodeClickedCallback(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["e" /* event */], n);
            }
        });
        // update image of node
        node_merge
            .select('image')
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
            .attr('x', function (n) { return 0; })
            .attr('y', function (n) { return 0; })
            .on('mouseover', function (n) {
            Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["k" /* select */])(this).attr("class", "over");
        })
            .on('mouseout', function (n) {
            Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["k" /* select */])(this).attr("class", "");
        });
        this.revise(node_merge);
        var callback = function (n) {
            var e = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["e" /* event */];
            n.x = e.x;
            n.y = e.y;
            self.revise(Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["k" /* select */])(this));
            self.executeOnNodeDraggingCallback(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["e" /* event */], n);
        };
        var dragging = function () {
            return Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["a" /* drag */])()
                .on('drag', callback)
                .on('end', function (n) {
                if (self.onNodeDraggedCallback) {
                    var e = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["e" /* event */];
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerialLinkWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__("./node_modules/d3-path/index.js");

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

/***/ "./src/app/default-layout/default-layout.component.css":
/***/ (function(module, exports) {

module.exports = "html, body {\n  height: 100%;\n}\n\napp-root, app-default-layout {\n  height: 100%;\n}\n\napp-default-layout {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh;\n}\n\n.content {\n  /*flex: 1 0 auto;*/\n}\n\n.footer {\n  /*flex-shrink: 0;*/\n  padding: 20px;\n  margin: auto 0 0 0;\n  /*background-color: #0097a7;*/\n  color: white;\n}\n\n.default-content {\n  margin: 0 auto;\n  max-width: 940px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\nheader {\n  -webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);\n          box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);\n  z-index: 10;\n}\n\n/*main {*/\n\n/*height: 100%;*/\n\n/*}*/\n\n.default-header h1 {\n  font-weight: 300;\n  margin: 0;\n  font-size: 20px;\n  padding: 28px 8px;\n  color: white;\n}\n\n.default-header {\n  margin: 0 auto;\n  max-width: 940px;\n  /*background-color: #0097a7;*/\n}\n\n.buttons-bar {\n  padding-top: 10px;\n  text-align: right;\n}\n\n.fill-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.example-container > * {\n  width: 100%;\n}\n\n.mat-dialog-content > * {\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/default-layout/default-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button>\n      <mat-icon svgIcon=\"gns3\"></mat-icon>\n    </button>\n\n    <button mat-button routerLink=\"/servers\" >Servers</button>\n\n    <span class=\"fill-space\"></span>\n\n    <button mat-button routerLink=\"/settings\" >\n      <mat-icon>settings</mat-icon>\n    </button>\n  </mat-toolbar>\n</header>\n\n<main class=\"mat-app-background\">\n  <router-outlet></router-outlet>\n</main>\n\n<footer class=\"footer mat-app-background\">\n  GNS3 Web UI demo &copy; 2018\n</footer>\n\n"

/***/ }),

/***/ "./src/app/default-layout/default-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-default-layout',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("./src/app/default-layout/default-layout.component.html"),
            styles: [__webpack_require__("./src/app/default-layout/default-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DefaultLayoutComponent);
    return DefaultLayoutComponent;
}());



/***/ }),

/***/ "./src/app/project-map/create-snapshot-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create snapshot</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"snapshot.name\" placeholder=\"Name\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\" color=\"accent\">No Thanks</button>\n  <button mat-button (click)=\"onAddClick()\" tabindex=\"2\" mat-raised-button color=\"primary\">Add</button>\n</div>\n"

/***/ }),

/***/ "./src/app/project-map/project-map-shortcuts/project-map-shortcuts.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project-map/project-map-shortcuts/project-map-shortcuts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectMapShortcutsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_hotkeys__ = __webpack_require__("./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_hotkeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_hotkeys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartography_shared_managers_selection_manager__ = __webpack_require__("./src/app/cartography/shared/managers/selection-manager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_node_service__ = __webpack_require__("./src/app/shared/services/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_server__ = __webpack_require__("./src/app/shared/models/server.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_toaster_service__ = __webpack_require__("./src/app/shared/services/toaster.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectMapShortcutsComponent = /** @class */ (function () {
    function ProjectMapShortcutsComponent(hotkeysService, toaster, nodesService) {
        this.hotkeysService = hotkeysService;
        this.toaster = toaster;
        this.nodesService = nodesService;
    }
    ProjectMapShortcutsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deleteHotkey = new __WEBPACK_IMPORTED_MODULE_1_angular2_hotkeys__["Hotkey"]('del', function (event) {
            var selectedNodes = _this.selectionManager.getSelectedNodes();
            if (selectedNodes) {
                selectedNodes.forEach(function (node) {
                    _this.nodesService.delete(_this.server, node).subscribe(function (data) {
                        _this.toaster.success("Node has been deleted");
                    });
                });
            }
            return false;
        });
        this.hotkeysService.add(this.deleteHotkey);
    };
    ProjectMapShortcutsComponent.prototype.ngOnDestroy = function () {
        this.hotkeysService.remove(this.deleteHotkey);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_models_server__["a" /* Server */])
    ], ProjectMapShortcutsComponent.prototype, "server", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__cartography_shared_managers_selection_manager__["a" /* SelectionManager */])
    ], ProjectMapShortcutsComponent.prototype, "selectionManager", void 0);
    ProjectMapShortcutsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-map-shortcuts',
            template: __webpack_require__("./src/app/project-map/project-map-shortcuts/project-map-shortcuts.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_hotkeys__["HotkeysService"],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_toaster_service__["a" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_node_service__["a" /* NodeService */]])
    ], ProjectMapShortcutsComponent);
    return ProjectMapShortcutsComponent;
}());



/***/ }),

/***/ "./src/app/project-map/project-map.component.css":
/***/ (function(module, exports) {

module.exports = "app-root, app-project-map, .project-map, app-map {\n  width: auto;\n}\n\nsvg.map {\n  background-color: #F0F0F0;\n}\n\ng.node:hover {\n  background-color: #0097a7;\n}\n\n.project-toolbar {\n  width: 70px;\n  position: fixed;\n  top: 20px;\n  left: 20px;\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.project-toolbar .mat-toolbar-multiple-rows {\n  width: auto !important;\n}\n\n.loading-spinner {\n  position: absolute;\n  top: 50%;\n  width: 100px;\n  margin-left:-50px;\n  margin-top: -50px;\n  left: 50%;\n}\n\ng.node text {\n  font-family: Roboto !important;\n}\n\nsvg.map image:hover, svg.map image.chosen, g.selected {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n}\n\npath.selected {\n  stroke: darkred;\n}\n\n.selected > .interface_label_border {\n  stroke: black;\n  fill: none;\n}\n\n.selection-line-tool .selection {\n  fill: #7ccbe1;\n  stroke:  #66aec2 ;\n  fill-opacity: 0.3;\n  stroke-opacity: 0.7;\n  stroke-width: 1;\n  stroke-dasharray: 5, 5;\n}\n\ng.node text,\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n/* Disable outline after button click */\n\n.project-toolbar button {\n  outline: 0;\n  border: none;\n  -moz-outline-style: none\n}\n"

/***/ }),

/***/ "./src/app/project-map/project-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project\" class=\"project-map\">\n  <app-map [symbols]=\"symbols\" [nodes]=\"nodes\" [links]=\"links\" [drawings]=\"drawings\" [width]=\"project.scene_width\" [height]=\"project.scene_height\"></app-map>\n\n  <div class=\"project-toolbar\">\n    <mat-toolbar color=\"primary\" class=\"project-toolbar\">\n\n      <mat-toolbar-row>\n        <button mat-icon-button [matMenuTriggerFor]=\"mainMenu\">\n          <mat-icon svgIcon=\"gns3\"></mat-icon>\n        </button>\n      </mat-toolbar-row>\n\n      <mat-menu #mainMenu=\"matMenu\" [overlapTrigger]=\"false\">\n        <button mat-menu-item [routerLink]=\"['/server', server.id, 'projects']\">\n          <mat-icon>work</mat-icon>\n          <span>Projects</span>\n        </button>\n        <button mat-menu-item [routerLink]=\"['/servers']\">\n          <mat-icon>developer_board</mat-icon>\n          <span>Servers</span>\n        </button>\n      </mat-menu>\n\n      <mat-toolbar-row>\n        <button mat-icon-button [color]=\"drawLineMode ? 'primary': 'basic'\" (click)=\"toggleDrawLineMode()\">\n          <mat-icon>timeline</mat-icon>\n        </button>\n      </mat-toolbar-row>\n\n      <mat-toolbar-row>\n        <button mat-icon-button [color]=\"movingMode ? 'primary': 'basic'\" (click)=\"toggleMovingMode()\">\n          <mat-icon>zoom_out_map</mat-icon>\n        </button>\n      </mat-toolbar-row>\n\n      <mat-toolbar-row>\n        <button mat-icon-button (click)=\"createSnapshotModal()\">\n          <mat-icon>snooze</mat-icon>\n        </button>\n      </mat-toolbar-row>\n\n      <mat-toolbar-row>\n        <app-appliance [server]=\"server\" (onNodeCreation)=\"onNodeCreation($event)\"></app-appliance>\n      </mat-toolbar-row>\n\n    </mat-toolbar>\n  </div>\n\n  <app-node-context-menu [server]=\"server\"></app-node-context-menu>\n  <app-node-select-interface (onChooseInterface)=\"onChooseInterface($event)\"></app-node-select-interface>\n</div>\n\n<div class=\"loading-spinner\" *ngIf=\"isLoading\">\n  <mat-spinner color=\"primary\">\n  </mat-spinner>\n</div>\n\n<app-project-map-shortcuts [server]=\"server\" [selectionManager]=\"selectionManager\"></app-project-map-shortcuts>\n"

/***/ }),

/***/ "./src/app/project-map/project-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProjectMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSnapshotDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_hotkeys__ = __webpack_require__("./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_hotkeys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_hotkeys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_dom_webSocket__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/dom/webSocket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_symbol_service__ = __webpack_require__("./src/app/shared/services/symbol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cartography_map_map_component__ = __webpack_require__("./src/app/cartography/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_server_service__ = __webpack_require__("./src/app/shared/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_project_service__ = __webpack_require__("./src/app/shared/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_snapshot_service__ = __webpack_require__("./src/app/shared/services/snapshot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_models_snapshot__ = __webpack_require__("./src/app/shared/models/snapshot.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_progress_dialog_progress_dialog_service__ = __webpack_require__("./src/app/shared/progress-dialog/progress-dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_progress_dialog_progress_dialog_component__ = __webpack_require__("./src/app/shared/progress-dialog/progress-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_node_context_menu_node_context_menu_component__ = __webpack_require__("./src/app/shared/node-context-menu/node-context-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_node_service__ = __webpack_require__("./src/app/shared/services/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_node_select_interface_node_select_interface_component__ = __webpack_require__("./src/app/shared/node-select-interface/node-select-interface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_link_service__ = __webpack_require__("./src/app/shared/services/link.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_toaster_service__ = __webpack_require__("./src/app/shared/services/toaster.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__cartography_shared_datasources_nodes_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/nodes-datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__cartography_shared_datasources_links_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/links-datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_handlers_project_web_service_handler__ = __webpack_require__("./src/app/shared/handlers/project-web-service-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__cartography_shared_managers_selection_manager__ = __webpack_require__("./src/app/cartography/shared/managers/selection-manager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__cartography_map_helpers_in_rectangle_helper__ = __webpack_require__("./src/app/cartography/map/helpers/in-rectangle-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__cartography_shared_datasources_drawings_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/drawings-datasource.ts");
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
    function ProjectMapComponent(route, serverService, projectService, symbolService, snapshotService, nodeService, linkService, dialog, progressDialogService, toaster, projectWebServiceHandler, nodesDataSource, linksDataSource, drawingsDataSource, hotkeysService) {
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
        this.hotkeysService = hotkeysService;
        this.nodes = [];
        this.links = [];
        this.drawings = [];
        this.symbols = [];
        this.drawLineMode = false;
        this.movingMode = false;
        this.isLoading = true;
        this.selectionManager = new __WEBPACK_IMPORTED_MODULE_26__cartography_shared_managers_selection_manager__["a" /* SelectionManager */](this.nodesDataSource, this.linksDataSource, this.drawingsDataSource, new __WEBPACK_IMPORTED_MODULE_27__cartography_map_helpers_in_rectangle_helper__["a" /* InRectangleHelper */]());
        this.subscriptions = [];
    }
    ProjectMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var routeSub = this.route.paramMap.subscribe(function (paramMap) {
            var server_id = parseInt(paramMap.get('server_id'), 10);
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */]
                .fromPromise(_this.serverService.get(server_id))
                .flatMap(function (server) {
                _this.server = server;
                return _this.projectService.get(server, paramMap.get('project_id'));
            })
                .flatMap(function (project) {
                _this.project = project;
                if (_this.project.status === 'opened') {
                    return new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
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
        this.subscriptions.push(routeSub);
        this.subscriptions.push(this.symbolService.symbols.subscribe(function (symbols) {
            _this.symbols = symbols;
        }));
        this.subscriptions.push(this.drawingsDataSource.connect().subscribe(function (drawings) {
            _this.drawings = drawings;
            if (_this.mapChild) {
                _this.mapChild.reload();
            }
        }));
        this.subscriptions.push(this.nodesDataSource.connect().subscribe(function (nodes) {
            _this.nodes = nodes;
            if (_this.mapChild) {
                _this.mapChild.reload();
            }
        }));
        this.subscriptions.push(this.linksDataSource.connect().subscribe(function (links) {
            _this.links = links;
            if (_this.mapChild) {
                _this.mapChild.reload();
            }
        }));
    };
    ProjectMapComponent.prototype.onProjectLoad = function (project) {
        var _this = this;
        var subscription = this.symbolService
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
        this.subscriptions.push(subscription);
    };
    ProjectMapComponent.prototype.setUpWS = function (project) {
        this.ws = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].webSocket(this.projectService.notificationsPath(this.server, project.project_id));
        this.subscriptions.push(this.projectWebServiceHandler.connect(this.ws));
    };
    ProjectMapComponent.prototype.setUpMapCallbacks = function (project) {
        var _this = this;
        this.mapChild.graphLayout.getNodesWidget().setOnContextMenuCallback(function (event, node) {
            _this.nodeContextMenu.open(node, event.clientY, event.clientX);
        });
        this.mapChild.graphLayout.getNodesWidget().setOnNodeClickedCallback(function (event, node) {
            _this.selectionManager.clearSelection();
            _this.selectionManager.setSelectedNodes([node]);
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
        this.subscriptions.push(this.selectionManager.subscribe(this.mapChild.graphLayout.getSelectionTool().rectangleSelected));
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
                    if (result === __WEBPACK_IMPORTED_MODULE_17__shared_progress_dialog_progress_dialog_component__["a" /* ProgressDialogComponent */].CANCELLED) {
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
            drawingLineTool.start(node.x + node.width / 2., node.y + node.height / 2., {
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
    ProjectMapComponent.prototype.ngOnDestroy = function () {
        this.drawingsDataSource.clear();
        this.nodesDataSource.clear();
        this.linksDataSource.clear();
        this.ws.unsubscribe();
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_10__cartography_map_map_component__["a" /* MapComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__cartography_map_map_component__["a" /* MapComponent */])
    ], ProjectMapComponent.prototype, "mapChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_18__shared_node_context_menu_node_context_menu_component__["a" /* NodeContextMenuComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_18__shared_node_context_menu_node_context_menu_component__["a" /* NodeContextMenuComponent */])
    ], ProjectMapComponent.prototype, "nodeContextMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_20__shared_node_select_interface_node_select_interface_component__["a" /* NodeSelectInterfaceComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_20__shared_node_select_interface_node_select_interface_component__["a" /* NodeSelectInterfaceComponent */])
    ], ProjectMapComponent.prototype, "nodeSelectInterfaceMenu", void 0);
    ProjectMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-map',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("./src/app/project-map/project-map.component.html"),
            styles: [__webpack_require__("./src/app/project-map/project-map.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_11__shared_services_server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_12__shared_services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_9__shared_services_symbol_service__["a" /* SymbolService */],
            __WEBPACK_IMPORTED_MODULE_14__shared_services_snapshot_service__["a" /* SnapshotService */],
            __WEBPACK_IMPORTED_MODULE_19__shared_services_node_service__["a" /* NodeService */],
            __WEBPACK_IMPORTED_MODULE_21__shared_services_link_service__["a" /* LinkService */],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_16__shared_progress_dialog_progress_dialog_service__["a" /* ProgressDialogService */],
            __WEBPACK_IMPORTED_MODULE_22__shared_services_toaster_service__["a" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_25__shared_handlers_project_web_service_handler__["a" /* ProjectWebServiceHandler */],
            __WEBPACK_IMPORTED_MODULE_23__cartography_shared_datasources_nodes_datasource__["a" /* NodesDataSource */],
            __WEBPACK_IMPORTED_MODULE_24__cartography_shared_datasources_links_datasource__["a" /* LinksDataSource */],
            __WEBPACK_IMPORTED_MODULE_28__cartography_shared_datasources_drawings_datasource__["a" /* DrawingsDataSource */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_hotkeys__["HotkeysService"]])
    ], ProjectMapComponent);
    return ProjectMapComponent;
}());

var CreateSnapshotDialogComponent = /** @class */ (function () {
    function CreateSnapshotDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snapshot = new __WEBPACK_IMPORTED_MODULE_15__shared_models_snapshot__["a" /* Snapshot */]();
    }
    CreateSnapshotDialogComponent.prototype.onAddClick = function () {
        this.dialogRef.close(this.snapshot);
    };
    CreateSnapshotDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateSnapshotDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-snapshot-dialog',
            template: __webpack_require__("./src/app/project-map/create-snapshot-dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_13__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_13__angular_material__["g" /* MatDialogRef */], Object])
    ], CreateSnapshotDialogComponent);
    return CreateSnapshotDialogComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"default-header\">\n    <h1>Projects</h1>\n  </div>\n  <div class=\"default-content\">\n\n    <div class=\"example-container mat-elevation-z8\">\n      <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\">\n            <a [routerLink]=\"['/server', server.id, 'project', row.project_id]\" class=\"table-link\">{{row.name}}</a>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" style=\"text-align: right\">\n            <button mat-icon-button (click)=\"delete(row)\">\n              <mat-icon aria-label=\"Delete project\">delete</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* unused harmony export ProjectDatabase */
/* unused harmony export ProjectDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_project_service__ = __webpack_require__("./src/app/shared/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_server_service__ = __webpack_require__("./src/app/shared/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
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
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sort.sort({
            id: 'name',
            start: 'asc'
        });
        this.dataSource = new ProjectDataSource(this.projectDatabase, this.sort);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatSort */])
    ], ProjectsComponent.prototype, "sort", void 0);
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_project_service__["a" /* ProjectService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());

var ProjectDatabase = /** @class */ (function () {
    function ProjectDatabase() {
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
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
    function ProjectDataSource(projectDatabase, sort) {
        var _this = _super.call(this) || this;
        _this.projectDatabase = projectDatabase;
        _this.sort = sort;
        return _this;
    }
    ProjectDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.projectDatabase.dataChange,
            this.sort.sortChange,
        ];
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].merge.apply(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */], displayDataChanges).map(function () {
            if (!_this.sort.active || _this.sort.direction === '') {
                return _this.projectDatabase.data;
            }
            return _this.projectDatabase.data.sort(function (a, b) {
                var propertyA = a[_this.sort.active];
                var propertyB = b[_this.sort.active];
                var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
                var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
                return (valueA < valueB ? -1 : 1) * (_this.sort.direction === 'asc' ? 1 : -1);
            });
        });
    };
    ProjectDataSource.prototype.disconnect = function () { };
    return ProjectDataSource;
}(__WEBPACK_IMPORTED_MODULE_6__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/raven-error-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RavenErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_raven_js__ = __webpack_require__("./node_modules/raven-js/src/singleton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_raven_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_settings_service__ = __webpack_require__("./src/app/shared/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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




var RavenErrorHandler = /** @class */ (function () {
    function RavenErrorHandler(injector) {
        this.injector = injector;
    }
    RavenErrorHandler.prototype.handleError = function (err) {
        var settingsService = this.injector.get(__WEBPACK_IMPORTED_MODULE_2__shared_services_settings_service__["a" /* SettingsService */]);
        console.error(err.originalError || err);
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production && settingsService.get('crash_reports')) {
            __WEBPACK_IMPORTED_MODULE_0_raven_js__["captureException"](err.originalError || err);
        }
    };
    RavenErrorHandler = __decorate([
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injector"]])
    ], RavenErrorHandler);
    return RavenErrorHandler;
}());



/***/ }),

/***/ "./src/app/servers/add-server-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add server</h1>\n<div mat-dialog-content>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"server.name\" placeholder=\"Name\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"server.ip\" placeholder=\"IP\">\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"server.port\" placeholder=\"Port\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Authorization\" [(value)]=\"server.authorization\">\n      <mat-option *ngFor=\"let auth of authorizations\" [value]=\"auth.key\">\n        {{ auth.name }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field *ngIf=\"server.authorization === 'basic'\">\n    <input matInput tabindex=\"1\" [(ngModel)]=\"server.login\" placeholder=\"Login\">\n  </mat-form-field>\n  <mat-form-field *ngIf=\"server.authorization === 'basic'\">\n    <input matInput tabindex=\"1\" [(ngModel)]=\"server.password\" placeholder=\"Password\">\n  </mat-form-field>\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\" color=\"accent\">No Thanks</button>\n  <button mat-button (click)=\"onAddClick()\" tabindex=\"2\" mat-raised-button color=\"primary\">Add</button>\n</div>\n"

/***/ }),

/***/ "./src/app/servers/servers.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/servers/servers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"default-header\">\n    <h1>Servers</h1>\n  </div>\n  <div class=\"default-content\">\n\n    <div class=\"example-container mat-elevation-z8\">\n      <mat-table #table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"id\">\n          <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\"> {{row.id}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\"> <a [routerLink]=\"['/server', row.id, 'projects']\" class=\"table-link\">{{row.name}}</a></mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ip\">\n          <mat-header-cell *matHeaderCellDef> IP </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\"> {{row.ip}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"port\">\n          <mat-header-cell *matHeaderCellDef> Port </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\"> {{row.port}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n          <mat-cell *matCellDef=\"let row;\" style=\"text-align: right\">\n            <button mat-icon-button (click)=\"deleteServer(row)\">\n              <mat-icon aria-label=\"Remove server\">delete</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n    <div class=\"buttons-bar\">\n      <button mat-raised-button color=\"primary\" (click)=\"createModal()\">Add server</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/servers/servers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ServersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddServerDialogComponent; });
/* unused harmony export ServerDatabase */
/* unused harmony export ServerDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_models_server__ = __webpack_require__("./src/app/shared/models/server.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_server_service__ = __webpack_require__("./src/app/shared/services/server.service.ts");
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
            width: '350px',
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-server-list',
            template: __webpack_require__("./src/app/servers/servers.component.html"),
            styles: [__webpack_require__("./src/app/servers/servers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_12__shared_services_server_service__["a" /* ServerService */]])
    ], ServersComponent);
    return ServersComponent;
}());

var AddServerDialogComponent = /** @class */ (function () {
    function AddServerDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.server = new __WEBPACK_IMPORTED_MODULE_11__shared_models_server__["a" /* Server */]();
        this.authorizations = [
            { 'key': 'none', name: 'No authorization' },
            { 'key': 'basic', name: 'Basic authorization' }
        ];
    }
    AddServerDialogComponent.prototype.ngOnInit = function () {
        this.server.authorization = 'none';
    };
    AddServerDialogComponent.prototype.onAddClick = function () {
        this.dialogRef.close(this.server);
    };
    AddServerDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddServerDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-server-dialog',
            template: __webpack_require__("./src/app/servers/add-server-dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialogRef */], Object])
    ], AddServerDialogComponent);
    return AddServerDialogComponent;
}());

var ServerDatabase = /** @class */ (function () {
    function ServerDatabase() {
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
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
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].merge(this.serverDatabase.dataChange).map(function () {
            return _this.serverDatabase.data;
        });
    };
    ServerDataSource.prototype.disconnect = function () { };
    return ServerDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["a" /* DataSource */]));



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"default-header\">\n    <h1>Settings</h1>\n  </div>\n  <div class=\"default-content\">\n    <div class=\"example-container mat-elevation-z8\">\n      <mat-accordion>\n        <mat-expansion-panel>\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Local settings\n            </mat-panel-title>\n            <mat-panel-description>\n              Customize your local settings\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n\n          <mat-checkbox class=\"example-margin\" [(ngModel)]=\"settings.crash_reports\">Send anonymous crash reports</mat-checkbox>\n\n        </mat-expansion-panel>\n      </mat-accordion>\n    </div>\n\n    <div class=\"buttons-bar\">\n      <button mat-raised-button color=\"primary\" (click)=\"save()\">Save settings</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_settings_service__ = __webpack_require__("./src/app/shared/services/settings.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingsService) {
        this.settingsService = settingsService;
        this.settings = __assign({}, __WEBPACK_IMPORTED_MODULE_1__shared_services_settings_service__["a" /* SettingsService */].DEFAULTS);
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.settings = this.settingsService.getAll();
    };
    SettingsComponent.prototype.save = function () {
        this.settingsService.setAll(this.settings);
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_settings_service__["a" /* SettingsService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shared/handlers/project-web-service-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WebServiceMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectWebServiceHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartography_shared_datasources_nodes_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/nodes-datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartography_shared_datasources_links_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/links-datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cartography_shared_datasources_drawings_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/drawings-datasource.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        var subscription = ws.subscribe(function (message) {
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
        return subscription;
    };
    ProjectWebServiceHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cartography_shared_datasources_nodes_datasource__["a" /* NodesDataSource */],
            __WEBPACK_IMPORTED_MODULE_2__cartography_shared_datasources_links_datasource__["a" /* LinksDataSource */],
            __WEBPACK_IMPORTED_MODULE_3__cartography_shared_datasources_drawings_datasource__["a" /* DrawingsDataSource */]])
    ], ProjectWebServiceHandler);
    return ProjectWebServiceHandler;
}());



/***/ }),

/***/ "./src/app/shared/models/server.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Server; });
var Server = /** @class */ (function () {
    function Server() {
    }
    return Server;
}());



/***/ }),

/***/ "./src/app/shared/models/snapshot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Snapshot; });
var Snapshot = /** @class */ (function () {
    function Snapshot() {
    }
    return Snapshot;
}());



/***/ }),

/***/ "./src/app/shared/node-context-menu/actions/move-layer-down-action/move-layer-down-action.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-menu-item (click)=\"moveLayerDown()\">\n  <mat-icon>keyboard_arrow_down</mat-icon>\n  <span>Move layer down</span>\n</button>\n"

/***/ }),

/***/ "./src/app/shared/node-context-menu/actions/move-layer-down-action/move-layer-down-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoveLayerDownActionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_server__ = __webpack_require__("./src/app/shared/models/server.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartography_shared_models_node__ = __webpack_require__("./src/app/cartography/shared/models/node.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cartography_shared_datasources_nodes_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/nodes-datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_node_service__ = __webpack_require__("./src/app/shared/services/node.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MoveLayerDownActionComponent = /** @class */ (function () {
    function MoveLayerDownActionComponent(nodesDataSource, nodeService) {
        this.nodesDataSource = nodesDataSource;
        this.nodeService = nodeService;
    }
    MoveLayerDownActionComponent.prototype.ngOnInit = function () { };
    MoveLayerDownActionComponent.prototype.moveLayerDown = function () {
        this.node.z--;
        this.nodesDataSource.update(this.node);
        this.nodeService
            .update(this.server, this.node)
            .subscribe(function (node) { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_server__["a" /* Server */])
    ], MoveLayerDownActionComponent.prototype, "server", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__cartography_shared_models_node__["a" /* Node */])
    ], MoveLayerDownActionComponent.prototype, "node", void 0);
    MoveLayerDownActionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-move-layer-down-action',
            template: __webpack_require__("./src/app/shared/node-context-menu/actions/move-layer-down-action/move-layer-down-action.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__cartography_shared_datasources_nodes_datasource__["a" /* NodesDataSource */],
            __WEBPACK_IMPORTED_MODULE_4__services_node_service__["a" /* NodeService */]])
    ], MoveLayerDownActionComponent);
    return MoveLayerDownActionComponent;
}());



/***/ }),

/***/ "./src/app/shared/node-context-menu/actions/move-layer-up-action/move-layer-up-action.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-menu-item (click)=\"moveLayerUp()\">\n  <mat-icon>keyboard_arrow_up</mat-icon>\n  <span>Move layer up</span>\n</button>\n"

/***/ }),

/***/ "./src/app/shared/node-context-menu/actions/move-layer-up-action/move-layer-up-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoveLayerUpActionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_server__ = __webpack_require__("./src/app/shared/models/server.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartography_shared_models_node__ = __webpack_require__("./src/app/cartography/shared/models/node.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cartography_shared_datasources_nodes_datasource__ = __webpack_require__("./src/app/cartography/shared/datasources/nodes-datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_node_service__ = __webpack_require__("./src/app/shared/services/node.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MoveLayerUpActionComponent = /** @class */ (function () {
    function MoveLayerUpActionComponent(nodesDataSource, nodeService) {
        this.nodesDataSource = nodesDataSource;
        this.nodeService = nodeService;
    }
    MoveLayerUpActionComponent.prototype.ngOnInit = function () { };
    MoveLayerUpActionComponent.prototype.moveLayerUp = function () {
        this.node.z++;
        this.nodeService
            .update(this.server, this.node)
            .subscribe(function (node) { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_server__["a" /* Server */])
    ], MoveLayerUpActionComponent.prototype, "server", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__cartography_shared_models_node__["a" /* Node */])
    ], MoveLayerUpActionComponent.prototype, "node", void 0);
    MoveLayerUpActionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-move-layer-up-action',
            template: __webpack_require__("./src/app/shared/node-context-menu/actions/move-layer-up-action/move-layer-up-action.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__cartography_shared_datasources_nodes_datasource__["a" /* NodesDataSource */],
            __WEBPACK_IMPORTED_MODULE_4__services_node_service__["a" /* NodeService */]])
    ], MoveLayerUpActionComponent);
    return MoveLayerUpActionComponent;
}());



/***/ }),

/***/ "./src/app/shared/node-context-menu/actions/start-node-action/start-node-action.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-menu-item *ngIf=\"node.status == 'stopped'\" (click)=\"startNode()\">\n  <mat-icon>play_arrow</mat-icon>\n  <span>Start</span>\n</button>\n"

/***/ }),

/***/ "./src/app/shared/node-context-menu/actions/start-node-action/start-node-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartNodeActionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_server__ = __webpack_require__("./src/app/shared/models/server.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_node_service__ = __webpack_require__("./src/app/shared/services/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cartography_shared_models_node__ = __webpack_require__("./src/app/cartography/shared/models/node.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_server__["a" /* Server */])
    ], StartNodeActionComponent.prototype, "server", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__cartography_shared_models_node__["a" /* Node */])
    ], StartNodeActionComponent.prototype, "node", void 0);
    StartNodeActionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-start-node-action',
            template: __webpack_require__("./src/app/shared/node-context-menu/actions/start-node-action/start-node-action.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_node_service__["a" /* NodeService */]])
    ], StartNodeActionComponent);
    return StartNodeActionComponent;
}());



/***/ }),

/***/ "./src/app/shared/node-context-menu/actions/stop-node-action/stop-node-action.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-menu-item *ngIf=\"node.status == 'started'\" (click)=\"stopNode()\">\n  <mat-icon>stop</mat-icon>\n  <span>Stop</span>\n</button>\n"

/***/ }),

/***/ "./src/app/shared/node-context-menu/actions/stop-node-action/stop-node-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopNodeActionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_server__ = __webpack_require__("./src/app/shared/models/server.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_node_service__ = __webpack_require__("./src/app/shared/services/node.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cartography_shared_models_node__ = __webpack_require__("./src/app/cartography/shared/models/node.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_server__["a" /* Server */])
    ], StopNodeActionComponent.prototype, "server", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__cartography_shared_models_node__["a" /* Node */])
    ], StopNodeActionComponent.prototype, "node", void 0);
    StopNodeActionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stop-node-action',
            template: __webpack_require__("./src/app/shared/node-context-menu/actions/stop-node-action/stop-node-action.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_node_service__["a" /* NodeService */]])
    ], StopNodeActionComponent);
    return StopNodeActionComponent;
}());



/***/ }),

/***/ "./src/app/shared/node-context-menu/node-context-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"context-menu\" [style.left]=\"leftPosition\" [style.top]=\"topPosition\" *ngIf=\"node\">\n  <span [matMenuTriggerFor]=\"contextMenu\"></span>\n  <mat-menu #contextMenu=\"matMenu\">\n    <app-start-node-action [server]=\"server\" [node]=\"node\"></app-start-node-action>\n    <app-stop-node-action [server]=\"server\" [node]=\"node\"></app-stop-node-action>\n    <app-move-layer-up-action [server]=\"server\" [node]=\"node\"></app-move-layer-up-action>\n    <app-move-layer-down-action [server]=\"server\" [node]=\"node\"></app-move-layer-down-action>\n  </mat-menu>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/node-context-menu/node-context-menu.component.scss":
/***/ (function(module, exports) {

module.exports = ".context-menu {\n  position: absolute; }\n"

/***/ }),

/***/ "./src/app/shared/node-context-menu/node-context-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeContextMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_server__ = __webpack_require__("./src/app/shared/models/server.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_server__["a" /* Server */])
    ], NodeContextMenuComponent.prototype, "server", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuTrigger */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuTrigger */])
    ], NodeContextMenuComponent.prototype, "contextMenu", void 0);
    NodeContextMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-node-context-menu',
            template: __webpack_require__("./src/app/shared/node-context-menu/node-context-menu.component.html"),
            styles: [__webpack_require__("./src/app/shared/node-context-menu/node-context-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], NodeContextMenuComponent);
    return NodeContextMenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/node-select-interface/node-select-interface.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"context-menu\" [style.left]=\"leftPosition\" [style.top]=\"topPosition\" *ngIf=\"node\">\n  <span [matMenuTriggerFor]=\"selectInterfaceMenu\"></span>\n  <mat-menu #selectInterfaceMenu=\"matMenu\">\n      <button mat-menu-item *ngFor=\"let port of node.ports\" (click)=\"chooseInterface(port)\">\n        <mat-icon>add_circle_outline</mat-icon>\n        <span>{{ port.name }}</span>\n      </button>\n  </mat-menu>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/node-select-interface/node-select-interface.component.scss":
/***/ (function(module, exports) {

module.exports = ".context-menu {\n  position: absolute; }\n"

/***/ }),

/***/ "./src/app/shared/node-select-interface/node-select-interface.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeSelectInterfaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
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
        this.onChooseInterface = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NodeSelectInterfaceComponent.prototype, "onChooseInterface", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuTrigger */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuTrigger */])
    ], NodeSelectInterfaceComponent.prototype, "contextMenu", void 0);
    NodeSelectInterfaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-node-select-interface',
            template: __webpack_require__("./src/app/shared/node-select-interface/node-select-interface.component.html"),
            styles: [__webpack_require__("./src/app/shared/node-select-interface/node-select-interface.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], NodeSelectInterfaceComponent);
    return NodeSelectInterfaceComponent;
}());



/***/ }),

/***/ "./src/app/shared/progress-dialog/progress-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Operation in progress</h1>\n<div mat-dialog-content>\n    <mat-progress-bar\n        color=\"primary\"\n        mode=\"determinate\"\n        [value]=\"value\">\n    </mat-progress-bar>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onCancelClick()\" tabindex=\"-1\" color=\"accent\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/progress-dialog/progress-dialog.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/progress-dialog/progress-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-progress-dialog',
            template: __webpack_require__("./src/app/shared/progress-dialog/progress-dialog.component.html"),
            styles: [__webpack_require__("./src/app/shared/progress-dialog/progress-dialog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], ProgressDialogComponent);
    return ProgressDialogComponent;
    var ProgressDialogComponent_1;
}());



/***/ }),

/***/ "./src/app/shared/progress-dialog/progress-dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressDialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_dialog_component__ = __webpack_require__("./src/app/shared/progress-dialog/progress-dialog.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]])
    ], ProgressDialogService);
    return ProgressDialogService;
}());



/***/ }),

/***/ "./src/app/shared/services/appliance.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplianceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_server_service__ = __webpack_require__("./src/app/shared/services/http-server.service.ts");
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
            .get(server, '/appliances');
    };
    ApplianceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_server_service__["a" /* HttpServer */]])
    ], ApplianceService);
    return ApplianceService;
}());



/***/ }),

/***/ "./src/app/shared/services/http-server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpServer);
    return HttpServer;
}());



/***/ }),

/***/ "./src/app/shared/services/indexed-db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexedDbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_indexeddb__ = __webpack_require__("./node_modules/angular2-indexeddb/index.ts");
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
        this.db = new __WEBPACK_IMPORTED_MODULE_1_angular2_indexeddb__["a" /* AngularIndexedDB */](IndexedDbService_1.DATABASE, IndexedDbService_1.VERSION);
    }
    IndexedDbService_1 = IndexedDbService;
    IndexedDbService.prototype.get = function () {
        return this.db;
    };
    IndexedDbService.VERSION = 1;
    IndexedDbService.DATABASE = 'gns3-web-ui';
    IndexedDbService = IndexedDbService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], IndexedDbService);
    return IndexedDbService;
    var IndexedDbService_1;
}());



/***/ }),

/***/ "./src/app/shared/services/link.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_server_service__ = __webpack_require__("./src/app/shared/services/http-server.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_server_service__["a" /* HttpServer */]])
    ], LinkService);
    return LinkService;
}());



/***/ }),

/***/ "./src/app/shared/services/node.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_server_service__ = __webpack_require__("./src/app/shared/services/http-server.service.ts");
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
    NodeService.prototype.update = function (server, node) {
        return this.httpServer
            .put(server, "/projects/" + node.project_id + "/nodes/" + node.node_id, {
            'x': node.x,
            'y': node.y,
            'z': node.z
        });
    };
    NodeService.prototype.delete = function (server, node) {
        return this.httpServer.delete(server, "/projects/" + node.project_id + "/nodes/" + node.node_id);
    };
    NodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_server_service__["a" /* HttpServer */]])
    ], NodeService);
    return NodeService;
}());



/***/ }),

/***/ "./src/app/shared/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_server_service__ = __webpack_require__("./src/app/shared/services/http-server.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_server_service__["a" /* HttpServer */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/shared/services/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__indexed_db_service__ = __webpack_require__("./src/app/shared/services/indexed-db.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__indexed_db_service__["a" /* IndexedDbService */]])
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "./src/app/shared/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_persistence__ = __webpack_require__("./node_modules/angular-persistence/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsService = /** @class */ (function () {
    function SettingsService(persistenceService) {
        this.persistenceService = persistenceService;
        this.settingsSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.getAll());
    }
    SettingsService_1 = SettingsService;
    SettingsService.prototype.get = function (key) {
        if (!(key in SettingsService_1.DEFAULTS)) {
            throw Error("Key '" + key + "' doesn't exist in settings");
        }
        var value = this.persistenceService.get(key, __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL);
        if (typeof value === 'undefined') {
            return SettingsService_1.DEFAULTS[key];
        }
        return value;
    };
    SettingsService.prototype.set = function (key, value) {
        if (!(key in SettingsService_1.DEFAULTS)) {
            throw Error("Key '" + key + "' doesn't exist in settings");
        }
        this.persistenceService.set(key, value, { type: __WEBPACK_IMPORTED_MODULE_1_angular_persistence__["c" /* StorageType */].LOCAL });
        this.settingsSubject.next(this.getAll());
    };
    SettingsService.prototype.getAll = function () {
        var _this = this;
        var settings = __assign({}, SettingsService_1.DEFAULTS);
        Object.keys(SettingsService_1.DEFAULTS).forEach(function (key) {
            settings[key] = _this.get(key);
        });
        return settings;
    };
    SettingsService.prototype.setAll = function (settings) {
        var _this = this;
        Object.keys(settings).forEach(function (key) {
            _this.set(key, settings[key]);
        });
    };
    SettingsService.prototype.subscribe = function (subscriber) {
        return this.settingsSubject.subscribe(subscriber);
    };
    SettingsService.DEFAULTS = {
        'crash_reports': true
    };
    SettingsService = SettingsService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular_persistence__["b" /* PersistenceService */]])
    ], SettingsService);
    return SettingsService;
    var SettingsService_1;
}());



/***/ }),

/***/ "./src/app/shared/services/snapshot.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnapshotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_server_service__ = __webpack_require__("./src/app/shared/services/http-server.service.ts");
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
            .post(server, "/projects/" + project_id + "/snapshots", snapshot);
    };
    SnapshotService.prototype.list = function (server, project_id) {
        return this.httpServer
            .get(server, "/projects/" + project_id + "/snapshots");
    };
    SnapshotService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_server_service__["a" /* HttpServer */]])
    ], SnapshotService);
    return SnapshotService;
}());



/***/ }),

/***/ "./src/app/shared/services/symbol.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SymbolService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__http_server_service__ = __webpack_require__("./src/app/shared/services/http-server.service.ts");
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
        var subscription = this.list(server).subscribe(function (symbols) {
            var streams = symbols.map(function (symbol) { return _this.raw(server, symbol.symbol_id); });
            __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].forkJoin(streams).subscribe(function (results) {
                symbols.forEach(function (symbol, i) {
                    symbol.raw = results[i];
                });
                _this.symbols.next(symbols);
                subscription.unsubscribe();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__http_server_service__["a" /* HttpServer */]])
    ], SymbolService);
    return SymbolService;
}());



/***/ }),

/***/ "./src/app/shared/services/toaster.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBar */]])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "./src/app/shared/services/version.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_server_service__ = __webpack_require__("./src/app/shared/services/http-server.service.ts");
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
            .get(server, '/version');
    };
    VersionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_server_service__["a" /* HttpServer */]])
    ], VersionService);
    return VersionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    electron: false,
    githubio: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map