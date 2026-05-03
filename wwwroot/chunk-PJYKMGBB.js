import {
  AuthService,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-4XVP637W.js";
import {
  CommonModule
} from "./chunk-IP2V25EC.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-XHDJFZT2.js";

// src/app/components/dashboard/dashboard.ts
var DashboardComponent = class _DashboardComponent {
  auth;
  menuOpen = false;
  navItems = [
    {
      key: "home",
      label: "Home",
      route: "/dashboard/home",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
               <polyline points="9 22 9 12 15 12 15 22"/>
             </svg>`
    },
    {
      key: "kitchen",
      label: "Cocina",
      route: "/dashboard/kitchen",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <path d="M6 2v20M18 2v20M2 12h20M2 6h4M18 6h4M2 18h4M18 18h4"/>
             </svg>`
    },
    {
      key: "users",
      label: "Usuarios",
      route: "/dashboard/users",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
               <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
               <circle cx="9" cy="7" r="4"/>
               <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
               <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
             </svg>`
    },
    {
      key: "menus",
      label: "Men\xFAs",
      route: "/dashboard/menus",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
           <rect x="9" y="3" width="6" height="4" rx="1"/>
           <path d="M9 12h6M9 16h4"/>
         </svg>`
    },
    {
      key: "caja",
      label: "Caja",
      route: "/dashboard/caja",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <rect x="2" y="5" width="20" height="14" rx="2"/>
           <path d="M2 10h20"/>
         </svg>`
    }
  ];
  sidebarCollapsed;
  constructor(auth) {
    this.auth = auth;
  }
  logout() {
    this.auth.logout();
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 70, vars: 0, consts: [[1, "shell"], [1, "sidebar"], [1, "brand"], ["src", "/logo_cliente.jpeg", "alt", "Logo", 1, "brand-logo"], [1, "brand-name"], [1, "nav"], ["routerLink", "/dashboard/home", "routerLinkActive", "nav-active", 1, "nav-item"], [1, "nav-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"], [1, "nav-label"], ["routerLink", "/dashboard/kitchen", "routerLinkActive", "nav-active", 1, "nav-item"], ["d", "M6 2v6a6 6 0 0 0 12 0V2"], ["x1", "12", "y1", "14", "x2", "12", "y2", "22"], ["x1", "8", "y1", "22", "x2", "16", "y2", "22"], ["routerLink", "/dashboard/menus", "routerLinkActive", "nav-active", 1, "nav-item"], ["d", "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1"], ["d", "M9 12h6M9 16h4"], ["routerLink", "/dashboard/caja", "routerLinkActive", "nav-active", 1, "nav-item"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "2"], ["d", "M2 10h20"], ["routerLink", "/dashboard/reports", "routerLinkActive", "nav-active", 1, "nav-item"], ["d", "M3 3v18h18"], ["d", "M18 17V9M13 17V5M8 17v-3"], ["routerLink", "/dashboard/venta-directa", "routerLinkActive", "nav-active", 1, "nav-item"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], ["routerLink", "/dashboard/users", "routerLinkActive", "nav-active", 1, "nav-item"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "sidebar-logout", 3, "click"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "content"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275text(5, "Como en Casa");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "nav", 5)(7, "a", 6)(8, "span", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 8);
      \u0275\u0275element(10, "path", 9)(11, "polyline", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "span", 11);
      \u0275\u0275text(13, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "a", 12)(15, "span", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 8);
      \u0275\u0275element(17, "path", 13)(18, "line", 14)(19, "line", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "span", 11);
      \u0275\u0275text(21, "Cocina");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "a", 16)(23, "span", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 8);
      \u0275\u0275element(25, "path", 17)(26, "rect", 18)(27, "path", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "span", 11);
      \u0275\u0275text(29, "Men\xFAs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "a", 20)(31, "span", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 8);
      \u0275\u0275element(33, "rect", 21)(34, "path", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(35, "span", 11);
      \u0275\u0275text(36, "Caja");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "a", 23)(38, "span", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(39, "svg", 8);
      \u0275\u0275element(40, "path", 24)(41, "path", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(42, "span", 11);
      \u0275\u0275text(43, "Reportes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "a", 26)(45, "span", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(46, "svg", 8);
      \u0275\u0275element(47, "circle", 27)(48, "circle", 28)(49, "path", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(50, "span", 11);
      \u0275\u0275text(51, "Venta Directa");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "a", 30)(53, "span", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(54, "svg", 8);
      \u0275\u0275element(55, "path", 31)(56, "circle", 32)(57, "path", 33)(58, "path", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(59, "span", 11);
      \u0275\u0275text(60, "Usuarios");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "button", 35);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_61_listener() {
        return ctx.logout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(62, "svg", 8);
      \u0275\u0275element(63, "path", 36)(64, "polyline", 37)(65, "line", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(66, "span");
      \u0275\u0275text(67, "Cerrar Sesi\xF3n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "main", 39);
      \u0275\u0275element(69, "router-outlet");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ['\n\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #f4f4f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  min-height: 100vh;\n  background: #1a1a1f;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 100;\n  border-right: 1px solid #2a2a30;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 20px 18px 18px;\n  border-bottom: 1px solid #2a2a30;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #f97316;\n  flex-shrink: 0;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  line-height: 1.3;\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 16px 10px;\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 14px;\n  border-radius: 10px;\n  color: #888;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background .18s, color .18s;\n  cursor: pointer;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #252530;\n  color: #ddd;\n}\n.nav-item.nav-active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(249, 115, 22, .35);\n}\n.nav-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.nav-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.nav-label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.sidebar-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 18px;\n  border: none;\n  border-top: 1px solid #2a2a30;\n  background: transparent;\n  color: #666;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: color .2s, background .2s;\n  width: 100%;\n  text-align: left;\n}\n.sidebar-logout[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  flex-shrink: 0;\n}\n.sidebar-logout[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, .1);\n  color: #fca5a5;\n}\n.content[_ngcontent-%COMP%] {\n  margin-left: 220px;\n  flex: 1;\n  min-height: 100vh;\n  overflow-y: auto;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 64px;\n  }\n  .brand-name[_ngcontent-%COMP%], \n   .nav-label[_ngcontent-%COMP%], \n   .sidebar-logout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .brand[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 16px 10px;\n  }\n  .nav-item[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 12px;\n  }\n  .sidebar-logout[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 14px;\n  }\n  .content[_ngcontent-%COMP%] {\n    margin-left: 64px;\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], template: '<div class="shell">\r\n\r\n  <!-- SIDEBAR -->\r\n  <aside class="sidebar">\r\n    <div class="brand">\r\n      <img src="/logo_cliente.jpeg" alt="Logo" class="brand-logo">\r\n      <span class="brand-name">Como en Casa</span>\r\n    </div>\r\n\r\n    <nav class="nav">\r\n\r\n      <a routerLink="/dashboard/home" routerLinkActive="nav-active" class="nav-item">\r\n        <span class="nav-icon">\r\n          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />\r\n            <polyline points="9 22 9 12 15 12 15 22" />\r\n          </svg>\r\n        </span>\r\n        <span class="nav-label">Home</span>\r\n      </a>\r\n\r\n      <a routerLink="/dashboard/kitchen" routerLinkActive="nav-active" class="nav-item">\r\n        <span class="nav-icon">\r\n          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n            <path d="M6 2v6a6 6 0 0 0 12 0V2" />\r\n            <line x1="12" y1="14" x2="12" y2="22" />\r\n            <line x1="8" y1="22" x2="16" y2="22" />\r\n          </svg>\r\n        </span>\r\n        <span class="nav-label">Cocina</span>\r\n      </a>\r\n\r\n      <a routerLink="/dashboard/menus" routerLinkActive="nav-active" class="nav-item">\r\n        <span class="nav-icon">\r\n          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />\r\n            <rect x="9" y="3" width="6" height="4" rx="1" />\r\n            <path d="M9 12h6M9 16h4" />\r\n          </svg>\r\n        </span>\r\n        <span class="nav-label">Men\xFAs</span>\r\n      </a>\r\n\r\n      <a routerLink="/dashboard/caja" routerLinkActive="nav-active" class="nav-item">\r\n        <span class="nav-icon">\r\n          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n            <rect x="2" y="5" width="20" height="14" rx="2" />\r\n            <path d="M2 10h20" />\r\n          </svg>\r\n        </span>\r\n        <span class="nav-label">Caja</span>\r\n      </a>\r\n\r\n      <!-- \u2705 NUEVO: Reportes -->\r\n      <a routerLink="/dashboard/reports" routerLinkActive="nav-active" class="nav-item">\r\n        <span class="nav-icon">\r\n          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n            <path d="M3 3v18h18" />\r\n            <path d="M18 17V9M13 17V5M8 17v-3" />\r\n          </svg>\r\n        </span>\r\n        <span class="nav-label">Reportes</span>\r\n      </a>\r\n\r\n      <a routerLink="/dashboard/venta-directa" routerLinkActive="nav-active" class="nav-item">\r\n        <span class="nav-icon">\r\n          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n            <circle cx="9" cy="21" r="1" />\r\n            <circle cx="20" cy="21" r="1" />\r\n            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />\r\n          </svg>\r\n        </span>\r\n        <span class="nav-label">Venta Directa</span>\r\n      </a>\r\n\r\n      <a routerLink="/dashboard/users" routerLinkActive="nav-active" class="nav-item">\r\n        <span class="nav-icon">\r\n          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />\r\n            <circle cx="9" cy="7" r="4" />\r\n            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />\r\n            <path d="M16 3.13a4 4 0 0 1 0 7.75" />\r\n          </svg>\r\n        </span>\r\n        <span class="nav-label">Usuarios</span>\r\n      </a>\r\n\r\n    </nav>\r\n\r\n    <button class="sidebar-logout" (click)="logout()">\r\n      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />\r\n        <polyline points="16 17 21 12 16 7" />\r\n        <line x1="21" y1="12" x2="9" y2="12" />\r\n      </svg>\r\n      <span>Cerrar Sesi\xF3n</span>\r\n    </button>\r\n  </aside>\r\n\r\n  <!-- MAIN CONTENT -->\r\n  <main class="content">\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n\r\n</div>', styles: ['/* src/app/components/dashboard/dashboard.css */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.shell {\n  display: flex;\n  min-height: 100vh;\n  background: #f4f4f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.sidebar {\n  width: 220px;\n  min-height: 100vh;\n  background: #1a1a1f;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 100;\n  border-right: 1px solid #2a2a30;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 20px 18px 18px;\n  border-bottom: 1px solid #2a2a30;\n}\n.brand-logo {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #f97316;\n  flex-shrink: 0;\n}\n.brand-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  line-height: 1.3;\n}\n.nav {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 16px 10px;\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 14px;\n  border-radius: 10px;\n  color: #888;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 500;\n  transition: background .18s, color .18s;\n  cursor: pointer;\n}\n.nav-item:hover {\n  background: #252530;\n  color: #ddd;\n}\n.nav-item.nav-active {\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(249, 115, 22, .35);\n}\n.nav-icon {\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n}\n.nav-icon svg {\n  width: 18px;\n  height: 18px;\n}\n.nav-label {\n  white-space: nowrap;\n}\n.sidebar-logout {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 13px 18px;\n  border: none;\n  border-top: 1px solid #2a2a30;\n  background: transparent;\n  color: #666;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: color .2s, background .2s;\n  width: 100%;\n  text-align: left;\n}\n.sidebar-logout svg {\n  width: 17px;\n  height: 17px;\n  flex-shrink: 0;\n}\n.sidebar-logout:hover {\n  background: rgba(239, 68, 68, .1);\n  color: #fca5a5;\n}\n.content {\n  margin-left: 220px;\n  flex: 1;\n  min-height: 100vh;\n  overflow-y: auto;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    width: 64px;\n  }\n  .brand-name,\n  .nav-label,\n  .sidebar-logout span {\n    display: none;\n  }\n  .brand {\n    justify-content: center;\n    padding: 16px 10px;\n  }\n  .nav-item {\n    justify-content: center;\n    padding: 12px;\n  }\n  .sidebar-logout {\n    justify-content: center;\n    padding: 14px;\n  }\n  .content {\n    margin-left: 64px;\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */\n'] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "app/components/dashboard/dashboard.ts", lineNumber: 13 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-PJYKMGBB.js.map
