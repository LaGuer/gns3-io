webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    { path: 'server/:server_id/project/:project_id', component: __WEBPACK_IMPORTED_MODULE_2__project_map_project_map_component__["a" /* ProjectMapComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

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

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(http, iconReg, sanitizer) {
        iconReg.addSvgIcon('gns3', sanitizer.bypassSecurityTrustResourceUrl('./assets/gns3_icon.svg'));
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatIconRegistry */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_ng2_service__ = __webpack_require__("../../../../d3-ng2-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project_map_project_map_component__ = __webpack_require__("../../../../../src/app/project-map/project-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__servers_servers_component__ = __webpack_require__("../../../../../src/app/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_version_service__ = __webpack_require__("../../../../../src/app/services/version.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_symbol_service__ = __webpack_require__("../../../../../src/app/services/symbol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_indexed_db_service__ = __webpack_require__("../../../../../src/app/services/indexed-db.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_http_server_service__ = __webpack_require__("../../../../../src/app/services/http-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__default_layout_default_layout_component__ = __webpack_require__("../../../../../src/app/default-layout/default-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_9__project_map_project_map_component__["a" /* ProjectMapComponent */],
            __WEBPACK_IMPORTED_MODULE_10__servers_servers_component__["b" /* ServersComponent */],
            __WEBPACK_IMPORTED_MODULE_10__servers_servers_component__["a" /* AddServerDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__default_layout_default_layout_component__["a" /* DefaultLayoutComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_material__["k" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_material__["m" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_material__["h" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_material__["g" /* MatFormFieldModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_material__["j" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_material__["l" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_material__["e" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_cdk_table__["m" /* CdkTableModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4_d3_ng2_service__["a" /* D3Service */],
            __WEBPACK_IMPORTED_MODULE_12__services_version_service__["a" /* VersionService */],
            __WEBPACK_IMPORTED_MODULE_13__services_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_14__services_symbol_service__["a" /* SymbolService */],
            __WEBPACK_IMPORTED_MODULE_15__services_server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_16__services_indexed_db_service__["a" /* IndexedDbService */],
            __WEBPACK_IMPORTED_MODULE_17__services_http_server_service__["a" /* HttpServer */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__servers_servers_component__["a" /* AddServerDialogComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/default-layout/default-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body {\n  height: 100%;\n}\n\napp-root, app-default-layout {\n  height: 100%;\n}\n\napp-default-layout {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100vh;\n}\n\n.content {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n.footer {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  padding: 20px;\n  background-color: #0097a7;\n  color: white;\n}\n\n.default-content {\n  margin: 0 auto;\n  max-width: 940px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\nheader {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);\n  z-index: 10;\n}\n\nmain {\n  height: 100%;\n}\n\n.default-header h1 {\n  font-weight: 300;\n  margin: 0;\n  font-size: 20px;\n  padding: 28px 8px;\n  color: white;\n}\n\n.default-header {\n  padding-left: 20px;\n  background-color: #0097a7;\n}\n\n.buttons-bar {\n  padding-top: 10px;\n  text-align: right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/default-layout/default-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button>\n      <mat-icon svgIcon=\"gns3\"></mat-icon>\n    </button>\n\n    <a mat-button routerLink=\"/servers\" >Servers</a>\n  </mat-toolbar>\n</header>\n\n<main class=\"mat-app-background\">\n  <router-outlet></router-outlet>\n</main>\n\n<footer class=\"footer primary-light-bg\">\n  GNS3 Web UI demo &copy; 2017\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/default-layout/default-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultLayoutComponent = (function () {
    function DefaultLayoutComponent() {
    }
    DefaultLayoutComponent.prototype.ngOnInit = function () {
    };
    return DefaultLayoutComponent;
}());
DefaultLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-default-layout',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/default-layout/default-layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/default-layout/default-layout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DefaultLayoutComponent);

//# sourceMappingURL=default-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "svg {\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<svg preserveAspectRatio=\"none\"></svg>\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__ = __webpack_require__("../../../../d3-ng2-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_graph_layout__ = __webpack_require__("../../../../../src/app/map/models/graph-layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_context__ = __webpack_require__("../../../../../src/app/map/models/context.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_size__ = __webpack_require__("../../../../../src/app/map/models/size.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapComponent = (function () {
    function MapComponent(element, d3Service) {
        this.element = element;
        this.d3Service = d3Service;
        this.nodes = [];
        this.links = [];
        this.width = 1500;
        this.height = 600;
        this.phylloRadius = 7;
        this.pointRadius = 2;
        this.windowFullSize = true;
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
    }
    MapComponent.prototype.ngOnChanges = function (changes) {
        if ((changes['width'] && !changes['width'].isFirstChange()) ||
            (changes['height'] && !changes['height'].isFirstChange()) ||
            (changes['phylloRadius'] && !changes['phylloRadius'].isFirstChange()) ||
            (changes['pointRadius'] && !changes['pointRadius'].isFirstChange()) ||
            (changes['nodes'] && !changes['nodes'].isFirstChange()) ||
            (changes['links'] && !changes['links'].isFirstChange())) {
            if (this.svg.empty && !this.svg.empty()) {
                if (changes['nodes']) {
                    this.onNodesChange(changes['nodes']);
                }
                if (changes['links']) {
                    this.onLinksChange(changes['links']);
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
        var d3 = this.d3;
        var rootElement;
        var self = this;
        if (this.parentNativeElement !== null) {
            rootElement = d3.select(this.parentNativeElement);
            this.svg = rootElement.select('svg');
            this.graphContext = new __WEBPACK_IMPORTED_MODULE_3__models_context__["a" /* Context */](this.svg);
            if (this.windowFullSize) {
                this.graphContext.setSize(this.getSize());
            }
            else {
                this.graphContext.setSize(new __WEBPACK_IMPORTED_MODULE_4__models_size__["a" /* Size */](this.width, this.height));
            }
            this.graphLayout = new __WEBPACK_IMPORTED_MODULE_2__models_graph_layout__["a" /* GraphLayout */]();
            this.graphLayout.draw(this.svg, this.graphContext);
        }
    };
    MapComponent.prototype.getSize = function () {
        return new __WEBPACK_IMPORTED_MODULE_4__models_size__["a" /* Size */](document.documentElement.clientWidth, document.documentElement.clientHeight);
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
    MapComponent.prototype.redraw = function () {
        this.graphLayout.draw(this.svg, this.graphContext);
    };
    MapComponent.prototype.reload = function () {
        this.onLinksChange(null);
        this.redraw();
    };
    return MapComponent;
}());
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
    __metadata("design:type", Object)
], MapComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], MapComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], MapComponent.prototype, "phylloRadius", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], MapComponent.prototype, "pointRadius", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], MapComponent.prototype, "windowFullSize", void 0);
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_d3_ng2_service__["a" /* D3Service */]) === "function" && _b || Object])
], MapComponent);

var _a, _b;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/models/context.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
var Context = (function () {
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

//# sourceMappingURL=context.js.map

/***/ }),

/***/ "../../../../../src/app/map/models/graph-layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphLayout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nodes_widget__ = __webpack_require__("../../../../../src/app/map/models/nodes-widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__links_widget__ = __webpack_require__("../../../../../src/app/map/models/links-widget.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_zoom__ = __webpack_require__("../../../../d3-zoom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");




var GraphLayout = (function () {
    function GraphLayout() {
        this.nodes = [];
        this.links = [];
        this.nodesWidget = new __WEBPACK_IMPORTED_MODULE_0__nodes_widget__["a" /* NodesWidget */]();
        this.linksWidget = new __WEBPACK_IMPORTED_MODULE_1__links_widget__["a" /* LinksWidget */]();
        this.centerZeroZeroPoint = true;
    }
    GraphLayout.prototype.setNodes = function (nodes) {
        this.nodes = nodes;
    };
    GraphLayout.prototype.setLinks = function (links) {
        this.links = links;
    };
    GraphLayout.prototype.draw = function (view, context) {
        var self = this;
        var drawing = view
            .selectAll('g.drawing')
            .data([context]);
        var drawingEnter = drawing.enter()
            .append('g')
            .attr('class', 'drawing');
        if (this.centerZeroZeroPoint) {
            drawing.attr('transform', function (ctx) { return "translate(" + ctx.getSize().width / 2 + ", " + ctx.getSize().height / 2 + ")"; });
        }
        var links = drawingEnter.append('g')
            .attr('class', 'links');
        var nodes = drawingEnter.append('g')
            .attr('class', 'nodes');
        this.linksWidget.draw(drawing, this.links);
        this.nodesWidget.draw(drawing, this.nodes);
        var onZoom = function () {
            var e = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["c" /* event */];
            if (self.centerZeroZeroPoint) {
                drawing.attr('transform', "translate(" + (context.getSize().width / 2 + e.transform.x) + ", " +
                    (context.getSize().height / 2 + e.transform.y + ") scale(" + e.transform.k + ")"));
            }
            else {
                drawing.attr('transform', e.transform.toString());
            }
        };
        view.call(Object(__WEBPACK_IMPORTED_MODULE_2_d3_zoom__["a" /* zoom */])()
            .scaleExtent([1 / 2, 8])
            .on('zoom', onZoom));
    };
    return GraphLayout;
}());

//# sourceMappingURL=graph-layout.js.map

/***/ }),

/***/ "../../../../../src/app/map/models/helpers/multi-link-calculator-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiLinkCalculatorHelper; });
var MultiLinkCalculatorHelper = (function () {
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

//# sourceMappingURL=multi-link-calculator-helper.js.map

/***/ }),

/***/ "../../../../../src/app/map/models/links-widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinksWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__("../../../../d3-selection/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_link_status__ = __webpack_require__("../../../../../src/app/models/link-status.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_multi_link_calculator_helper__ = __webpack_require__("../../../../../src/app/map/models/helpers/multi-link-calculator-helper.ts");




var LinksWidget = (function () {
    function LinksWidget() {
        this.multiLinkCalculatorHelper = new __WEBPACK_IMPORTED_MODULE_3__helpers_multi_link_calculator_helper__["a" /* MultiLinkCalculatorHelper */]();
    }
    LinksWidget.prototype.draw = function (view, links) {
        var self = this;
        this.multiLinkCalculatorHelper.assignDataToLinks(links);
        var link = view
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
        link.merge(link_enter)
            .each(function (l) {
            var link_data = [[
                    [l.source.x, l.source.y],
                    [l.target.x, l.target.y]
                ]];
            var link_group = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["i" /* select */])(this);
            var value_line = Object(__WEBPACK_IMPORTED_MODULE_1_d3_shape__["v" /* line */])();
            var link_path = link_group.select('path');
            if (!link_path.node()) {
                link_path = link_group.append('path');
            }
            var link_path_data = link_path.data(link_data);
            link_path_data
                .attr('d', value_line)
                .attr('stroke', '#000')
                .attr('stroke-width', '1');
            var start_point = link_path.node().getPointAtLength(50);
            var end_point = link_path.node().getPointAtLength(link_path.node().getTotalLength() - 50);
            var statuses = [
                new __WEBPACK_IMPORTED_MODULE_2__models_link_status__["a" /* LinkStatus */](start_point.x, start_point.y, l.source.status),
                new __WEBPACK_IMPORTED_MODULE_2__models_link_status__["a" /* LinkStatus */](end_point.x, end_point.y, l.target.status)
            ];
            var status_started = link_group.selectAll('circle.status_started')
                .data(statuses.filter(function (link_status) { return link_status.status === 'started'; }));
            var status_started_enter = status_started.enter().append('circle');
            status_started.merge(status_started_enter)
                .attr('class', 'status_started')
                .attr('cx', function (ls) { return ls.x; })
                .attr('cy', function (ls) { return ls.y; })
                .attr('r', 4)
                .attr('fill', '#2ecc71');
            status_started.exit().remove();
            var status_stopped = link_group.selectAll('rect.status_stopped')
                .data(statuses.filter(function (link_status) { return link_status.status === 'stopped'; }));
            var status_stopped_enter = status_stopped.enter().append('rect');
            var STOPPED_STATUS_RECT_WIDTH = 6;
            status_stopped.merge(status_stopped_enter)
                .attr('class', 'status_stopped')
                .attr('x', function (ls) { return ls.x - STOPPED_STATUS_RECT_WIDTH / 2.; })
                .attr('y', function (ls) { return ls.y - STOPPED_STATUS_RECT_WIDTH / 2.; })
                .attr('width', STOPPED_STATUS_RECT_WIDTH)
                .attr('height', STOPPED_STATUS_RECT_WIDTH)
                .attr('fill', 'red');
            status_stopped.exit().remove();
        })
            .attr('transform', function (l) {
            if (l.source && l.target) {
                var translation = self.multiLinkCalculatorHelper.linkTranslation(l.distance, l.source, l.target);
                return "translate (" + (translation.dx + l.source.width / 2.) + ", " + (translation.dy + l.source.height / 2.) + ")";
            }
            return null;
        });
        link.exit().remove();
    };
    return LinksWidget;
}());

//# sourceMappingURL=links-widget.js.map

/***/ }),

/***/ "../../../../../src/app/map/models/nodes-widget.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodesWidget; });
var NodesWidget = (function () {
    function NodesWidget() {
    }
    NodesWidget.prototype.draw = function (view, nodes) {
        var self = this;
        // function dragged(this: SVGElement, node: Node) {
        //   const element = this;
        //   const e: D3DragEvent<SVGGElement, Node, Node> = d3.event;
        //
        //   d3.select(this)
        //     .attr('transform', `translate(${e.x},${e.y})`);
        //
        //   node.x = e.x;
        //   node.y = e.y;
        // }
        var node = view.selectAll('g.node')
            .data(nodes);
        var node_enter = node.enter()
            .append('g')
            .attr('class', 'node');
        // .call(d3.drag<SVGGElement, Node>().on('drag', dragged))
        var node_image = node_enter.append('image')
            .attr('xlink:href', function (n) { return 'data:image/svg+xml;base64,' + btoa(n.icon.raw); })
            .attr('width', function (n) { return n.width; })
            .attr('height', function (n) { return n.height; });
        node_enter.append('circle')
            .attr('class', 'node_point')
            .attr('r', 2);
        node_enter.append('text')
            .attr('class', 'label');
        node_enter.append('text')
            .attr('class', 'node_point_label')
            .attr('x', '-100')
            .attr('y', '0');
        var node_merge = node.merge(node_enter)
            .attr('transform', function (n) {
            return "translate(" + n.x + "," + n.y + ")";
        });
        node_merge.select('text.label')
            .attr('x', function (n) { return n.label.x; })
            .attr('y', function (n) { return n.label.y; })
            .attr('style', function (n) { return n.label.style; })
            .text(function (n) { return n.label.text; });
        node_merge.select('text.node_point_label')
            .text(function (n) { return "(" + n.x + ", " + n.y + ")"; });
        node.exit().remove();
    };
    return NodesWidget;
}());

//# sourceMappingURL=nodes-widget.js.map

/***/ }),

/***/ "../../../../../src/app/map/models/size.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Size; });
var Size = (function () {
    function Size(width, height) {
        this.width = width;
        this.height = height;
    }
    return Size;
}());

//# sourceMappingURL=size.js.map

/***/ }),

/***/ "../../../../../src/app/models/link-status.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkStatus; });
var LinkStatus = (function () {
    function LinkStatus(x, y, status) {
        this.x = x;
        this.y = y;
        this.status = status;
    }
    return LinkStatus;
}());

//# sourceMappingURL=link-status.js.map

/***/ }),

/***/ "../../../../../src/app/models/server.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Server; });
var Server = (function () {
    function Server() {
    }
    return Server;
}());

//# sourceMappingURL=server.js.map

/***/ }),

/***/ "../../../../../src/app/project-map/project-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*html {*/\n  /*position: static;*/\n  /*height: 100%;*/\n/*}*/\n\n/*body {*/\n  /*height: 100%;*/\n  /*margin: 0;*/\n  /*margin-bottom: 0 !important;*/\n/*}*/\n\n/*app-root, app-project-map, .project-map, app-map, svg {*/\n  /*height: 100%;*/\n/*}*/\n\n\n\n.project-toolbar {\n  width: 70px;\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-map/project-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project\" class=\"project-map\">\n  <app-map [nodes]=\"nodes\" [links]=\"links\"></app-map>\n\n  <div class=\"project-toolbar\">\n    <mat-toolbar color=\"primary\" class=\"project-toolbar\">\n      <button mat-icon-button>\n        <mat-icon svgIcon=\"gns3\"></mat-icon>\n      </button>\n\n      <mat-toolbar-row>\n        <button mat-icon-button>\n          <mat-icon>verified_user</mat-icon>\n        </button>\n      </mat-toolbar-row>\n\n      <mat-toolbar-row>\n        <button mat-icon-button>\n          <mat-icon>delete</mat-icon>\n        </button>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/project-map/project-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_dom_webSocket__ = __webpack_require__("../../../../rxjs/add/observable/dom/webSocket.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_dom_webSocket___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_dom_webSocket__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_symbol_service__ = __webpack_require__("../../../../../src/app/services/symbol.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProjectMapComponent = (function () {
    function ProjectMapComponent(route, serverService, projectService, symbolService) {
        this.route = route;
        this.serverService = serverService;
        this.projectService = projectService;
        this.symbolService = symbolService;
        this.nodes = [];
        this.links = [];
    }
    ProjectMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            var server_id = parseInt(paramMap.get('server_id'), 10);
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]
                .fromPromise(_this.serverService.get(server_id))
                .flatMap(function (server) {
                _this.server = server;
                return _this.projectService.get(server, paramMap.get('project_id'));
            })
                .flatMap(function (project) {
                _this.project = project;
                if (_this.project.status === 'opened') {
                    return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
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
    };
    ProjectMapComponent.prototype.onProjectLoad = function (project) {
        var _this = this;
        this.symbolService
            .load(this.server)
            .flatMap(function () {
            return _this.projectService.links(_this.server, project.project_id);
        })
            .flatMap(function (links) {
            _this.links = links;
            return _this.projectService.nodes(_this.server, project.project_id);
        })
            .subscribe(function (nodes) {
            _this.nodes = nodes;
            nodes.forEach(function (n) {
                n.icon = _this.symbolService.get(n.symbol);
            });
            _this.setUpWS(project);
        });
    };
    ProjectMapComponent.prototype.setUpWS = function (project) {
        var _this = this;
        this.ws = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].webSocket(this.projectService.notificationsPath(this.server, project.project_id));
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
    return ProjectMapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_9__map_map_component__["a" /* MapComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9__map_map_component__["a" /* MapComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__map_map_component__["a" /* MapComponent */]) === "function" && _a || Object)
], ProjectMapComponent.prototype, "mapChild", void 0);
ProjectMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project-map',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
        template: __webpack_require__("../../../../../src/app/project-map/project-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-map/project-map.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_server_service__["a" /* ServerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_11__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_project_service__["a" /* ProjectService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__services_symbol_service__["a" /* SymbolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_symbol_service__["a" /* SymbolService */]) === "function" && _e || Object])
], ProjectMapComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=project-map.component.js.map

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

module.exports = "<div class=\"content\">\n  <div class=\"default-header\">\n    <h1>Projects</h1>\n  </div>\n  <div class=\"default-content\">\n\n    <div class=\"example-container mat-elevation-z8\">\n      <mat-table #table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\">\n            <button [routerLink]=\"['/server', server.id, 'project', row.project_id]\" mat-button>{{row.name}}</button>\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\">\n            <button mat-icon-button (click)=\"delete(row)\">\n              <mat-icon aria-label=\"Delete project\">delete</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* unused harmony export ProjectDatabase */
/* unused harmony export ProjectDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
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







var ProjectsComponent = (function () {
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
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_project_service__["a" /* ProjectService */]) === "function" && _c || Object])
], ProjectsComponent);

var ProjectDatabase = (function () {
    function ProjectDatabase() {
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
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

var ProjectDataSource = (function (_super) {
    __extends(ProjectDataSource, _super);
    function ProjectDataSource(projectDatabase) {
        var _this = _super.call(this) || this;
        _this.projectDatabase = projectDatabase;
        return _this;
    }
    ProjectDataSource.prototype.connect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].merge(this.projectDatabase.dataChange).map(function () {
            return _this.projectDatabase.data;
        });
    };
    ProjectDataSource.prototype.disconnect = function () { };
    return ProjectDataSource;
}(__WEBPACK_IMPORTED_MODULE_5__angular_cdk_collections__["a" /* DataSource */]));

var _a, _b, _c;
//# sourceMappingURL=projects.component.js.map

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

module.exports = "<div class=\"content\">\n  <div class=\"default-header\">\n    <h1>Servers</h1>\n  </div>\n  <div class=\"default-content\">\n\n    <div class=\"example-container mat-elevation-z8\">\n      <mat-table #table [dataSource]=\"dataSource\">\n\n        <ng-container matColumnDef=\"id\">\n          <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> <button [routerLink]=\"['/server', row.id, 'projects']\" mat-button>{{row.name}}</button></mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"ip\">\n          <mat-header-cell *matHeaderCellDef> IP </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.ip}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"port\">\n          <mat-header-cell *matHeaderCellDef> Port </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.port}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\" style=\"text-align: right\">\n            <button mat-icon-button (click)=\"deleteServer(row)\">\n              <mat-icon aria-label=\"Remove server\">delete</mat-icon>\n            </button>\n          </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n    </div>\n\n    <div class=\"buttons-bar\">\n      <button mat-raised-button color=\"primary\" (click)=\"createModal()\">Add server</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/servers/servers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ServersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddServerDialogComponent; });
/* unused harmony export ServerDatabase */
/* unused harmony export ServerDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_server__ = __webpack_require__("../../../../../src/app/models/server.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_observable_fromEvent__);
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













var ServersComponent = (function () {
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
    return ServersComponent;
}());
ServersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-server-list',
        template: __webpack_require__("../../../../../src/app/servers/servers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/servers/servers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _b || Object])
], ServersComponent);

var AddServerDialogComponent = (function () {
    function AddServerDialogComponent(dialogRef, data, serverService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.server = new __WEBPACK_IMPORTED_MODULE_1__models_server__["a" /* Server */]();
    }
    AddServerDialogComponent.prototype.onAddClick = function () {
        this.dialogRef.close(this.server);
    };
    AddServerDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return AddServerDialogComponent;
}());
AddServerDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-server-dialog',
        template: __webpack_require__("../../../../../src/app/servers/add-server-dialog.html"),
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialogRef */]) === "function" && _c || Object, Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_server_service__["a" /* ServerService */]) === "function" && _d || Object])
], AddServerDialogComponent);

var ServerDatabase = (function () {
    function ServerDatabase() {
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
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

var ServerDataSource = (function (_super) {
    __extends(ServerDataSource, _super);
    function ServerDataSource(serverDatabase) {
        var _this = _super.call(this) || this;
        _this.serverDatabase = serverDatabase;
        return _this;
    }
    ServerDataSource.prototype.connect = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].merge(this.serverDatabase.dataChange).map(function () {
            return _this.serverDatabase.data;
        });
    };
    ServerDataSource.prototype.disconnect = function () { };
    return ServerDataSource;
}(__WEBPACK_IMPORTED_MODULE_3__angular_cdk_collections__["a" /* DataSource */]));

var _a, _b, _c, _d;
//# sourceMappingURL=servers.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/http-server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpServer = (function () {
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
    return HttpServer;
}());
HttpServer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpServer);

var _a;
//# sourceMappingURL=http-server.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/indexed-db.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexedDbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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


var IndexedDbService = (function () {
    function IndexedDbService() {
        this.db = new __WEBPACK_IMPORTED_MODULE_1_angular2_indexeddb__["a" /* AngularIndexedDB */]('gns3-web-ui', 1);
    }
    IndexedDbService.prototype.get = function () {
        return this.db;
    };
    return IndexedDbService;
}());
IndexedDbService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], IndexedDbService);

//# sourceMappingURL=indexed-db.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_server_service__ = __webpack_require__("../../../../../src/app/services/http-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = (function () {
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
    ProjectService.prototype.delete = function (server, project_id) {
        return this.httpServer
            .delete(server, "/projects/" + project_id);
    };
    ProjectService.prototype.notificationsPath = function (server, project_id) {
        return "ws://" + server.ip + ":" + server.port + "/v2/projects/" + project_id + "/notifications/ws";
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_server_service__["a" /* HttpServer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_server_service__["a" /* HttpServer */]) === "function" && _a || Object])
], ProjectService);

var _a;
//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__indexed_db_service__ = __webpack_require__("../../../../../src/app/services/indexed-db.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerService = (function () {
    function ServerService(indexedDbService) {
        var _this = this;
        this.indexedDbService = indexedDbService;
        this.tablename = "servers";
        this.ready = indexedDbService.get().createStore(1, function (evt) {
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
    return ServerService;
}());
ServerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__indexed_db_service__["a" /* IndexedDbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__indexed_db_service__["a" /* IndexedDbService */]) === "function" && _a || Object])
], ServerService);

var _a;
//# sourceMappingURL=server.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/symbol.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SymbolService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__http_server_service__ = __webpack_require__("../../../../../src/app/services/http-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SymbolService = (function () {
    function SymbolService(httpServer) {
        this.httpServer = httpServer;
        this.symbols = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
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
            __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].forkJoin(streams).subscribe(function (results) {
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
    return SymbolService;
}());
SymbolService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__http_server_service__["a" /* HttpServer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__http_server_service__["a" /* HttpServer */]) === "function" && _a || Object])
], SymbolService);

var _a;
//# sourceMappingURL=symbol.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/version.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_server_service__ = __webpack_require__("../../../../../src/app/services/http-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VersionService = (function () {
    function VersionService(httpServer) {
        this.httpServer = httpServer;
    }
    VersionService.prototype.get = function (server) {
        return this.httpServer
            .get(server, '/version')
            .map(function (response) { return response.json(); });
    };
    return VersionService;
}());
VersionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__http_server_service__["a" /* HttpServer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_server_service__["a" /* HttpServer */]) === "function" && _a || Object])
], VersionService);

var _a;
//# sourceMappingURL=version.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map