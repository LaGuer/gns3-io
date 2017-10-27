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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
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
    })
], AppComponent);

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
            __WEBPACK_IMPORTED_MODULE_10__servers_servers_component__["a" /* ServerCreateModalComponent */],
            __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__default_layout_default_layout_component__["a" /* DefaultLayoutComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
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
            __WEBPACK_IMPORTED_MODULE_10__servers_servers_component__["a" /* ServerCreateModalComponent */],
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/default-layout/default-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark\">\n  <a class=\"navbar-brand\" href=\"/\"><img src=\"assets/logo-header.png\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/servers']\" >Servers <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer class=\"footer\">\n  <span class=\"text-muted\">GNS3 Web UI demo</span>\n</footer>\n"

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
exports.push([module.i, "", ""]);

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
            this.graphContext.setSize(new __WEBPACK_IMPORTED_MODULE_4__models_size__["a" /* Size */](this.width, this.height));
            this.graphLayout = new __WEBPACK_IMPORTED_MODULE_2__models_graph_layout__["a" /* GraphLayout */]();
            this.graphLayout.draw(this.svg, this.graphContext);
        }
    };
    MapComponent.prototype.changeLayout = function () {
        this.svg
            .attr('width', this.width)
            .attr('height', this.height);
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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-map/project-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project\" class=\"project-map\">\n  <app-map [nodes]=\"nodes\" [links]=\"links\"></app-map>\n</div>\n\n\n\n"

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

module.exports = "<div class=\"container page\">\n  <h1>Projects</h1>\n\n  <div class=\"row\">\n    <table class=\"table table-inverse\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let project of projects\">\n          <td><a [routerLink]=\"['/server', server.id, 'project', project.project_id]\">{{ project.name }}</a></td>\n          <td><button class=\"btn btn-outline-danger btn-sm\" (click)=\"delete(project)\">Remove</button></td>\n        </tr>\n      </tbody>\n\n    </table>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service__ = __webpack_require__("../../../../../src/app/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
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
        this.projects = [];
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
            _this.reload();
        });
    };
    ProjectsComponent.prototype.reload = function () {
        var _this = this;
        this.projectService
            .list(this.server)
            .subscribe(function (projects) {
            _this.projects = projects;
        });
    };
    ProjectsComponent.prototype.delete = function (project) {
        var _this = this;
        this.projectService.delete(this.server, project.project_id).subscribe(function () {
            _this.reload();
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

var _a, _b, _c;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/servers/server-create-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Add server</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Enter name\" [(ngModel)]=\"server.name\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"ip\">IP</label>\n      <input type=\"text\" class=\"form-control\" id=\"ip\" name=\"ip\" placeholder=\"Enter IP\" [(ngModel)]=\"server.ip\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"port\">Port</label>\n      <input type=\"number\" class=\"form-control\" id=\"port\" name=\"port\" placeholder=\"Enter Port\" [(ngModel)]=\"server.port\" required>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.dismiss()\">Close</button>\n\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"add()\" [disabled]=\"!f.valid\">Add</button>\n</div>\n"

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

module.exports = "<div class=\"container page\">\n  <h1>Servers</h1>\n\n  <div class=\"row\">\n    <table class=\"table table-inverse\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>IP:Port</th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let server of servers\">\n          <th scope=\"row\">{{ server.id }}</th>\n          <td><a [routerLink]=\"['/server', server.id, 'projects']\">{{ server.name }}</a></td>\n          <td>{{ server.ip }}:{{ server.port }}</td>\n          <td><button class=\"btn btn-outline-danger btn-sm \" (click)=\"deleteServer(server)\">Remove</button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"row\">\n    <button class=\"btn btn-primary btn-lg active\" (click)=\"createModal()\">Add server</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/servers/servers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerCreateModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ServersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_server__ = __webpack_require__("../../../../../src/app/models/server.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServerCreateModalComponent = (function () {
    function ServerCreateModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.server = new __WEBPACK_IMPORTED_MODULE_2__models_server__["a" /* Server */]();
    }
    ServerCreateModalComponent.prototype.add = function () {
        this.activeModal.close(this.server);
    };
    return ServerCreateModalComponent;
}());
ServerCreateModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-server-create-modal',
        template: __webpack_require__("../../../../../src/app/servers/server-create-modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], ServerCreateModalComponent);

var ServersComponent = (function () {
    function ServersComponent(modalService, serverService) {
        this.modalService = modalService;
        this.serverService = serverService;
        this.servers = [];
    }
    ServersComponent.prototype.ngOnInit = function () {
        this.loadServers();
    };
    ServersComponent.prototype.loadServers = function () {
        var _this = this;
        this.serverService.findAll().then(function (servers) {
            _this.servers = servers;
        });
    };
    ServersComponent.prototype.createModal = function () {
        var _this = this;
        this.modalService.open(ServerCreateModalComponent).result.then(function (server) {
            _this.serverService.create(server).then(function (created) {
                _this.loadServers();
            });
        }, function (rejection) {
        });
    };
    ServersComponent.prototype.deleteServer = function (server) {
        var _this = this;
        this.serverService.delete(server).then(function () {
            _this.loadServers();
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
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_server_service__["a" /* ServerService */]) === "function" && _c || Object])
], ServersComponent);

var _a, _b, _c;
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
            return _this.indexedDbService.get().add(_this.tablename, server);
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