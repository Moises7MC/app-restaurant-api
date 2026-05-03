import {
  AuthService,
  Router
} from "./chunk-4XVP637W.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-3HTVTBBE.js";
import {
  CommonModule,
  NgIf
} from "./chunk-IP2V25EC.js";
import {
  Component,
  HostListener,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresolveWindow,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XHDJFZT2.js";

// src/app/components/login/login.component.ts
function LoginComponent__svg_svg_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 19)(2, "circle", 20);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent__svg_svg_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 18);
    \u0275\u0275element(1, "path", 21)(2, "path", 22)(3, "line", 23);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function LoginComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Ingresar");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
}
var LoginComponent = class _LoginComponent {
  auth;
  router;
  username = "";
  password = "";
  showPassword = false;
  error = "";
  loading = false;
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    if (this.auth.isLoggedIn()) {
      this.router.navigate(["/dashboard"]);
    }
    history.pushState(null, "", window.location.href);
  }
  onPopState() {
    history.pushState(null, "", window.location.href);
  }
  onSubmit() {
    this.error = "";
    if (!this.username.trim() || !this.password.trim()) {
      this.error = "Completa todos los campos.";
      return;
    }
    this.loading = true;
    setTimeout(() => {
      const ok = this.auth.login(this.username.trim(), this.password);
      this.loading = false;
      if (ok) {
        this.router.navigate(["/dashboard"]);
      } else {
        this.error = "Usuario o contrase\xF1a incorrectos.";
      }
    }, 500);
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], hostBindings: function LoginComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("popstate", function LoginComponent_popstate_HostBindingHandler() {
        return ctx.onPopState();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 27, vars: 11, consts: [[1, "page"], ["aria-hidden", "true", 1, "bars"], [1, "bar"], [1, "card"], [1, "logo-area"], ["src", "logo_cliente.jpeg", "alt", "Como en Casa Restaurante", 1, "logo"], ["autocomplete", "off", "novalidate", "", 3, "ngSubmit"], [1, "field"], [1, "field-label"], ["type", "text", "name", "username", "placeholder", "Ingresa tu usuario", "autocomplete", "off", 1, "field-input", 3, "ngModelChange", "ngModel", "disabled"], [1, "pw-wrap"], ["name", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "new-password", 1, "field-input", 3, "ngModelChange", "type", "ngModel", "disabled"], ["type", "button", "tabindex", "-1", 1, "eye", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "error-box", 4, "ngIf"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"], ["d", "M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "error-box"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2)(3, "span", 2)(4, "span", 2)(5, "span", 2)(6, "span", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3)(8, "div", 4);
      \u0275\u0275element(9, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "form", 6);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(11, "div", 7)(12, "span", 8);
      \u0275\u0275text(13, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 7)(16, "span", 8);
      \u0275\u0275text(17, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 10)(19, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 12);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_20_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275template(21, LoginComponent__svg_svg_21_Template, 3, 0, "svg", 13)(22, LoginComponent__svg_svg_22_Template, 4, 0, "svg", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(23, LoginComponent_div_23_Template, 2, 1, "div", 14);
      \u0275\u0275elementStart(24, "button", 15);
      \u0275\u0275template(25, LoginComponent_span_25_Template, 2, 0, "span", 16)(26, LoginComponent_span_26_Template, 1, 0, "span", 17);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showPassword);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['\n\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #1c1c1e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n}\n.bars[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 20px;\n  padding: 0 40px;\n  pointer-events: none;\n}\n.bar[_ngcontent-%COMP%] {\n  display: block;\n  width: 90px;\n  border-radius: 14px 14px 0 0;\n  background:\n    linear-gradient(\n      to top,\n      #ff4500cc,\n      #ff6a0099);\n  filter: blur(30px);\n  opacity: 0.6;\n}\n.bar[_ngcontent-%COMP%]:nth-child(1) {\n  height: 50%;\n}\n.bar[_ngcontent-%COMP%]:nth-child(2) {\n  height: 72%;\n}\n.bar[_ngcontent-%COMP%]:nth-child(3) {\n  height: 42%;\n}\n.bar[_ngcontent-%COMP%]:nth-child(4) {\n  height: 78%;\n}\n.bar[_ngcontent-%COMP%]:nth-child(5) {\n  height: 58%;\n}\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 480px;\n  padding: 36px 40px 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.logo-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  object-fit: contain;\n  border-radius: 50%;\n  background: #fff;\n  padding: 8px;\n  box-shadow: 0 4px 24px #0005;\n}\n.hint[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n  color: #777;\n  line-height: 1.65;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #333;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #262626;\n  transition: border-color .2s;\n}\n.field[_ngcontent-%COMP%]:focus-within {\n  border-color: #f97316;\n}\n.field-label[_ngcontent-%COMP%] {\n  padding: 9px 16px 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #f97316;\n  letter-spacing: .3px;\n}\n.field-input[_ngcontent-%COMP%] {\n  padding: 4px 16px 12px;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 15px;\n  width: 100%;\n}\n.field-input[_ngcontent-%COMP%]::placeholder {\n  color: #555;\n}\n.field-input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n}\n.pw-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.pw-wrap[_ngcontent-%COMP%]   .field-input[_ngcontent-%COMP%] {\n  padding-right: 44px;\n}\n.eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #666;\n  display: flex;\n  align-items: center;\n  padding: 0;\n  transition: color .2s;\n}\n.eye[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.eye[_ngcontent-%COMP%]:hover {\n  color: #f97316;\n}\n.error-box[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, .12);\n  border: 1px solid rgba(239, 68, 68, .3);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #fca5a5;\n  text-align: center;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 15px;\n  border: none;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 52px;\n  transition: opacity .2s, transform .1s;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: .88;\n}\n.btn-submit[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: scale(.98);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: .55;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(255, 255, 255, .3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin .7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 520px) {\n  .card[_ngcontent-%COMP%] {\n    padding: 28px 20px 32px;\n  }\n  .logo[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page">\r
\r
  <!-- Barras de fondo difuminadas -->\r
  <div class="bars" aria-hidden="true">\r
    <span class="bar"></span>\r
    <span class="bar"></span>\r
    <span class="bar"></span>\r
    <span class="bar"></span>\r
    <span class="bar"></span>\r
  </div>\r
\r
  <div class="card">\r
\r
    <!-- Logo del cliente -->\r
    <div class="logo-area">\r
      <img src="logo_cliente.jpeg" alt="Como en Casa Restaurante" class="logo" />\r
    </div>\r
\r
    <form (ngSubmit)="onSubmit()" autocomplete="off" novalidate>\r
\r
      <!-- Username -->\r
      <div class="field">\r
        <span class="field-label">Username</span>\r
        <input\r
          type="text"\r
          class="field-input"\r
          [(ngModel)]="username"\r
          name="username"\r
          placeholder="Ingresa tu usuario"\r
          [disabled]="loading"\r
          autocomplete="off" />\r
      </div>\r
\r
      <!-- Password -->\r
      <div class="field">\r
        <span class="field-label">Password</span>\r
        <div class="pw-wrap">\r
          <input\r
            [type]="showPassword ? 'text' : 'password'"\r
            class="field-input"\r
            [(ngModel)]="password"\r
            name="password"\r
            placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"\r
            [disabled]="loading"\r
            autocomplete="new-password" />\r
          <button type="button" class="eye" (click)="showPassword = !showPassword" tabindex="-1">\r
            <svg *ngIf="!showPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>\r
              <circle cx="12" cy="12" r="3"/>\r
            </svg>\r
            <svg *ngIf="showPassword" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>\r
              <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>\r
              <line x1="1" y1="1" x2="23" y2="23"/>\r
            </svg>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <div class="error-box" *ngIf="error">{{ error }}</div>\r
\r
      <button type="submit" class="btn-submit" [disabled]="loading">\r
        <span *ngIf="!loading">Ingresar</span>\r
        <span *ngIf="loading" class="spinner"></span>\r
      </button>\r
\r
    </form>\r
  </div>\r
</div>`, styles: ['/* src/app/components/login/login.component.css */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.page {\n  min-height: 100vh;\n  background: #1c1c1e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n}\n.bars {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  gap: 20px;\n  padding: 0 40px;\n  pointer-events: none;\n}\n.bar {\n  display: block;\n  width: 90px;\n  border-radius: 14px 14px 0 0;\n  background:\n    linear-gradient(\n      to top,\n      #ff4500cc,\n      #ff6a0099);\n  filter: blur(30px);\n  opacity: 0.6;\n}\n.bar:nth-child(1) {\n  height: 50%;\n}\n.bar:nth-child(2) {\n  height: 72%;\n}\n.bar:nth-child(3) {\n  height: 42%;\n}\n.bar:nth-child(4) {\n  height: 78%;\n}\n.bar:nth-child(5) {\n  height: 58%;\n}\n.card {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 480px;\n  padding: 36px 40px 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.logo-area {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.logo {\n  width: 130px;\n  height: 130px;\n  object-fit: contain;\n  border-radius: 50%;\n  background: #fff;\n  padding: 8px;\n  box-shadow: 0 4px 24px #0005;\n}\n.hint {\n  text-align: center;\n  font-size: 13px;\n  color: #777;\n  line-height: 1.65;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #333;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #262626;\n  transition: border-color .2s;\n}\n.field:focus-within {\n  border-color: #f97316;\n}\n.field-label {\n  padding: 9px 16px 4px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #f97316;\n  letter-spacing: .3px;\n}\n.field-input {\n  padding: 4px 16px 12px;\n  background: transparent;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 15px;\n  width: 100%;\n}\n.field-input::placeholder {\n  color: #555;\n}\n.field-input:disabled {\n  opacity: 0.55;\n}\n.pw-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.pw-wrap .field-input {\n  padding-right: 44px;\n}\n.eye {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #666;\n  display: flex;\n  align-items: center;\n  padding: 0;\n  transition: color .2s;\n}\n.eye svg {\n  width: 18px;\n  height: 18px;\n}\n.eye:hover {\n  color: #f97316;\n}\n.error-box {\n  background: rgba(239, 68, 68, .12);\n  border: 1px solid rgba(239, 68, 68, .3);\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #fca5a5;\n  text-align: center;\n}\n.btn-submit {\n  width: 100%;\n  padding: 15px;\n  border: none;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 52px;\n  transition: opacity .2s, transform .1s;\n}\n.btn-submit:hover:not(:disabled) {\n  opacity: .88;\n}\n.btn-submit:active:not(:disabled) {\n  transform: scale(.98);\n}\n.btn-submit:disabled {\n  opacity: .55;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 20px;\n  height: 20px;\n  border: 2px solid rgba(255, 255, 255, .3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin .7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 520px) {\n  .card {\n    padding: 28px 20px 32px;\n  }\n  .logo {\n    width: 100px;\n    height: 100px;\n  }\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }], { onPopState: [{
    type: HostListener,
    args: ["window:popstate"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app/components/login/login.component.ts", lineNumber: 14 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-YWHT6F6S.js.map
