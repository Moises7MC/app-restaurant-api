import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-XHDJFZT2.js";

// src/app/components/home/home.ts
var HomeComponent = class _HomeComponent {
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 10, vars: 0, consts: [[1, "home-page"], [1, "welcome-card"], [1, "welcome-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["points", "9 22 9 12 15 12 15 22"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(3, "svg", 3);
      \u0275\u0275domElement(4, "path", 4)(5, "polyline", 5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(6, "h1");
      \u0275\u0275text(7, "Bienvenido");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "p");
      \u0275\u0275text(9, "Sistema de gesti\xF3n \u2014 Como en Casa Restaurante");
      \u0275\u0275domElementEnd()()();
    }
  }, styles: ["\n\n.home-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: #f4f4f6;\n  padding: 2rem;\n}\n.welcome-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 3rem 4rem;\n  text-align: center;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.welcome-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  stroke: #f97316;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: #111;\n}\np[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #888;\n}\n/*# sourceMappingURL=home.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, template: `
    <div class="home-page">
      <div class="welcome-card">
        <div class="welcome-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <h1>Bienvenido</h1>
        <p>Sistema de gesti\xF3n \u2014 Como en Casa Restaurante</p>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;af14bbaf6b4103a5214077697e8eb9fae37f59cac33a1b51026bdaf6a1ff7eca;C:/Users/Moise/chef-dashboard/src/app/components/home/home.ts */\n.home-page {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: #f4f4f6;\n  padding: 2rem;\n}\n.welcome-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 3rem 4rem;\n  text-align: center;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n.welcome-icon svg {\n  width: 64px;\n  height: 64px;\n  stroke: #f97316;\n}\nh1 {\n  font-size: 28px;\n  font-weight: 700;\n  color: #111;\n}\np {\n  font-size: 15px;\n  color: #888;\n}\n/*# sourceMappingURL=home.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "app/components/home/home.ts", lineNumber: 56 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-BMDA7X7Z.js.map
