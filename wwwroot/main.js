import {
  AuthService,
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-4XVP637W.js";
import {
  provideHttpClient
} from "./chunk-IP2V25EC.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-XHDJFZT2.js";

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: "<router-outlet></router-outlet>"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "app/app.component.ts", lineNumber: 10 });
})();

// src/app/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn())
    return true;
  router.navigate(["/login"]);
  return false;
};
var noAuthGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isLoggedIn())
    return true;
  router.navigate(["/dashboard"]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./chunk-YWHT6F6S.js").then((m) => m.LoginComponent),
    canActivate: [noAuthGuard]
  },
  {
    path: "dashboard",
    loadComponent: () => import("./chunk-PJYKMGBB.js").then((m) => m.DashboardComponent),
    canActivate: [authGuard],
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        loadComponent: () => import("./chunk-BMDA7X7Z.js").then((m) => m.HomeComponent)
      },
      {
        path: "kitchen",
        loadComponent: () => import("./chunk-FCJOZ7O2.js").then((m) => m.KitchenOrdersComponent)
      },
      {
        path: "menus",
        loadComponent: () => import("./chunk-EWS5UDWG.js").then((m) => m.MenusComponent)
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-KP2R2BSS.js").then((m) => m.UsersComponent)
      },
      {
        path: "caja",
        loadComponent: () => import("./chunk-5JLQNMA5.js").then((m) => m.CajaComponent)
      },
      // ✅ NUEVO: Reportes
      {
        path: "reports",
        loadComponent: () => import("./chunk-2AGVUCWJ.js").then((m) => m.ReportsComponent)
      },
      {
        path: "venta-directa",
        loadComponent: () => import("./chunk-TNNCDXDT.js").then((m) => m.VentaDirectaComponent)
      }
    ]
  },
  { path: "**", redirectTo: "/login" }
];

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
