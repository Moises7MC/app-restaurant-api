import {
  environment
} from "./chunk-NMCGB4Y3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-3HTVTBBE.js";
import {
  CommonModule,
  HttpClient,
  HttpClientModule,
  HttpParams,
  NgForOf,
  NgIf
} from "./chunk-IP2V25EC.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XHDJFZT2.js";

// src/app/components/reports/reports.ts
function ReportsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "label");
    \u0275\u0275text(2, "Desde ");
    \u0275\u0275elementStart(3, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_18_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.customFrom, $event) || (ctx_r1.customFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5, "Hasta ");
    \u0275\u0275elementStart(6, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsComponent_div_18_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.customTo, $event) || (ctx_r1.customTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 11);
    \u0275\u0275listener("click", function ReportsComponent_div_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyCustomRange());
    });
    \u0275\u0275text(8, "Aplicar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customFrom);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.customTo);
  }
}
function ReportsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275text(2, " Cargando reportes... ");
    \u0275\u0275elementEnd();
  }
}
function ReportsComponent_ng_container_20_div_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p");
    \u0275\u0275text(2, "No hay ventas en este rango");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_ng_container_20_div_51_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "span", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39)(8, "span", 40);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 41);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 42);
    \u0275\u0275element(13, "div", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(cat_r4.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", cat_r4.quantity, " unid.");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("S/. ", cat_r4.total.toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", cat_r4.percentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", cat_r4.percentage, "%");
  }
}
function ReportsComponent_ng_container_20_div_51_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275template(1, ReportsComponent_ng_container_20_div_51_div_2_div_1_Template, 14, 6, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.categories);
  }
}
function ReportsComponent_ng_container_20_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, ReportsComponent_ng_container_20_div_51_div_1_Template, 3, 0, "div", 29)(2, ReportsComponent_ng_container_20_div_51_div_2_Template, 2, 1, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categories.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categories.length > 0);
  }
}
function ReportsComponent_ng_container_20_div_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p");
    \u0275\u0275text(2, "No hay productos vendidos en este rango");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_ng_container_20_div_52_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49)(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 52);
    \u0275\u0275element(9, "div", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 54)(11, "span", 55);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 56);
    \u0275\u0275text(14, "unid.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 57);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.rankBadge(i_r6));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r5.categoryName, " \xB7 S/. ", p_r5.unitPrice.toFixed(2), " c/u");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", p_r5.quantity / ctx_r1.productMaxQty() * 100, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r5.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("S/. ", p_r5.total.toFixed(2));
  }
}
function ReportsComponent_ng_container_20_div_52_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, ReportsComponent_ng_container_20_div_52_div_2_div_1_Template, 17, 8, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.products);
  }
}
function ReportsComponent_ng_container_20_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, ReportsComponent_ng_container_20_div_52_div_1_Template, 3, 0, "div", 29)(2, ReportsComponent_ng_container_20_div_52_div_2_Template, 2, 1, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.products.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.products.length > 0);
  }
}
function ReportsComponent_ng_container_20_div_53_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p");
    \u0275\u0275text(2, "No hay ventas asignadas a mozos en este rango");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_ng_container_20_div_53_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62)(4, "span", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 52);
    \u0275\u0275element(9, "div", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 66);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const w_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.rankBadge(i_r8));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(w_r7.waiterName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", w_r7.ordersCount, " \xF3rden", w_r7.ordersCount !== 1 ? "es" : "", " \xB7 ", w_r7.totalPlatos, " platos");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", w_r7.total / ctx_r1.waiterMaxTotal() * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/. ", w_r7.total.toFixed(2));
  }
}
function ReportsComponent_ng_container_20_div_53_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275template(1, ReportsComponent_ng_container_20_div_53_div_2_div_1_Template, 12, 8, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.waiters);
  }
}
function ReportsComponent_ng_container_20_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, ReportsComponent_ng_container_20_div_53_div_1_Template, 3, 0, "div", 29)(2, ReportsComponent_ng_container_20_div_53_div_2_Template, 2, 1, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.waiters.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.waiters.length > 0);
  }
}
function ReportsComponent_ng_container_20_div_54_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p");
    \u0275\u0275text(2, "No hay datos por hora en este rango");
    \u0275\u0275elementEnd()();
  }
}
function ReportsComponent_ng_container_20_div_54_div_2_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("S/. ", h_r9.total.toFixed(2));
  }
}
function ReportsComponent_ng_container_20_div_54_div_2_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("S/. ", h_r9.total.toFixed(2));
  }
}
function ReportsComponent_ng_container_20_div_54_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 71);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 72)(4, "div", 73);
    \u0275\u0275template(5, ReportsComponent_ng_container_20_div_54_div_2_div_1_span_5_Template, 2, 1, "span", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ReportsComponent_ng_container_20_div_54_div_2_div_1_span_6_Template, 2, 1, "span", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 76);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const h_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r9.label);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", h_r9.total / ctx_r1.hourMaxTotal() * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", h_r9.total / ctx_r1.hourMaxTotal() * 100 > 25);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", h_r9.total / ctx_r1.hourMaxTotal() * 100 <= 25);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", h_r9.ordersCount, " \xF3rd. \xB7 ", h_r9.totalPlatos, " platos");
  }
}
function ReportsComponent_ng_container_20_div_54_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275template(1, ReportsComponent_ng_container_20_div_54_div_2_div_1_Template, 9, 7, "div", 69);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.hours);
  }
}
function ReportsComponent_ng_container_20_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, ReportsComponent_ng_container_20_div_54_div_1_Template, 3, 0, "div", 29)(2, ReportsComponent_ng_container_20_div_54_div_2_Template, 2, 1, "div", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hours.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hours.length > 0);
  }
}
function ReportsComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14)(2, "div", 15)(3, "div", 16);
    \u0275\u0275text(4, "\u{1F37D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17)(6, "span", 18);
    \u0275\u0275text(7, "Platos vendidos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 21)(13, "div", 16);
    \u0275\u0275text(14, "\u{1F4B0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 17)(16, "span", 18);
    \u0275\u0275text(17, "Ingresos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 19);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 20);
    \u0275\u0275text(21, "cobrados");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 22)(23, "div", 16);
    \u0275\u0275text(24, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 17)(26, "span", 18);
    \u0275\u0275text(27, "Ticket promedio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 19);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 20);
    \u0275\u0275text(31, "por mesa");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 23)(33, "div", 16);
    \u0275\u0275text(34, "\u{1F51D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 17)(36, "span", 18);
    \u0275\u0275text(37, "Plato estrella");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 24);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 20);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 25)(43, "button", 26);
    \u0275\u0275listener("click", function ReportsComponent_ng_container_20_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "category");
    });
    \u0275\u0275text(44, " \u{1F5C2} Por Categor\xEDa ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 26);
    \u0275\u0275listener("click", function ReportsComponent_ng_container_20_Template_button_click_45_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "product");
    });
    \u0275\u0275text(46, " \u{1F37D} Por Producto ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 26);
    \u0275\u0275listener("click", function ReportsComponent_ng_container_20_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "waiter");
    });
    \u0275\u0275text(48, " \u{1F464} Por Mozo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "button", 26);
    \u0275\u0275listener("click", function ReportsComponent_ng_container_20_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab = "hour");
    });
    \u0275\u0275text(50, " \u{1F550} Por Hora ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, ReportsComponent_ng_container_20_div_51_Template, 3, 2, "div", 27)(52, ReportsComponent_ng_container_20_div_52_Template, 3, 2, "div", 27)(53, ReportsComponent_ng_container_20_div_53_Template, 3, 2, "div", 27)(54, ReportsComponent_ng_container_20_div_54_Template, 3, 2, "div", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.summary.totalPlatos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.summary.totalOrders, " \xF3rden", ctx_r1.summary.totalOrders !== 1 ? "es" : "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("S/. ", ctx_r1.summary.totalIngresos.toFixed(2));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("S/. ", ctx_r1.summary.ticketPromedio.toFixed(2));
    \u0275\u0275advance(9);
    \u0275\u0275property("title", ctx_r1.summary.platoEstrella);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.summary.platoEstrella);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.summary.platoEstrellaCantidad, " unid.");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "category");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "product");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "waiter");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.activeTab === "hour");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "category");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "product");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "waiter");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeTab === "hour");
  }
}
var ReportsComponent = class _ReportsComponent {
  http;
  apiUrl = environment.apiUrl;
  // ── Filtros ─────────────────────────────────────────────
  selectedRange = "today";
  customFrom = "";
  customTo = "";
  fromDate = "";
  toDate = "";
  // ── Datos ───────────────────────────────────────────────
  summary = {
    totalOrders: 0,
    totalIngresos: 0,
    totalPlatos: 0,
    ticketPromedio: 0,
    platoEstrella: "\u2014",
    platoEstrellaCantidad: 0
  };
  categories = [];
  products = [];
  waiters = [];
  hours = [];
  // ── UI ──────────────────────────────────────────────────
  activeTab = "category";
  loading = false;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.applyPreset("today");
  }
  // ═══════════════════════════════════════════════════════
  // Filtros de fecha
  // ═══════════════════════════════════════════════════════
  applyPreset(preset) {
    this.selectedRange = preset;
    const now = /* @__PURE__ */ new Date();
    const today = this.toIsoDate(now);
    switch (preset) {
      case "today":
        this.fromDate = today;
        this.toDate = today;
        break;
      case "yesterday":
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        const yIso = this.toIsoDate(yesterday);
        this.fromDate = yIso;
        this.toDate = yIso;
        break;
      case "thisWeek":
        const day = now.getDay();
        const diff = day === 0 ? 6 : day - 1;
        const monday = new Date(now);
        monday.setDate(now.getDate() - diff);
        this.fromDate = this.toIsoDate(monday);
        this.toDate = today;
        break;
      case "thisMonth":
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
        this.fromDate = this.toIsoDate(firstDay);
        this.toDate = today;
        break;
      case "custom":
        if (!this.customFrom)
          this.customFrom = today;
        if (!this.customTo)
          this.customTo = today;
        this.fromDate = this.customFrom;
        this.toDate = this.customTo;
        break;
    }
    if (preset !== "custom") {
      this.loadAll();
    }
  }
  applyCustomRange() {
    if (!this.customFrom || !this.customTo)
      return;
    if (this.customFrom > this.customTo) {
      alert("La fecha inicial debe ser anterior a la final");
      return;
    }
    this.fromDate = this.customFrom;
    this.toDate = this.customTo;
    this.loadAll();
  }
  toIsoDate(d) {
    const pad = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }
  // ═══════════════════════════════════════════════════════
  // Cargar datos
  // ═══════════════════════════════════════════════════════
  loadAll() {
    this.loading = true;
    const params = new HttpParams().set("from", this.fromDate).set("to", this.toDate);
    Promise.all([
      this.http.get(`${this.apiUrl}/reports/summary`, { params }).toPromise(),
      this.http.get(`${this.apiUrl}/reports/by-category`, { params }).toPromise(),
      this.http.get(`${this.apiUrl}/reports/by-product`, { params }).toPromise(),
      this.http.get(`${this.apiUrl}/reports/by-waiter`, { params }).toPromise(),
      this.http.get(`${this.apiUrl}/reports/by-hour`, { params }).toPromise()
    ]).then(([summary, categories, products, waiters, hours]) => {
      this.summary = summary || this.summary;
      this.categories = categories || [];
      this.products = products || [];
      this.waiters = waiters || [];
      this.hours = hours || [];
      this.loading = false;
    }).catch((err) => {
      console.error("Error cargando reportes:", err);
      this.loading = false;
    });
  }
  // ═══════════════════════════════════════════════════════
  // Helpers
  // ═══════════════════════════════════════════════════════
  formatRange() {
    if (this.fromDate === this.toDate) {
      return this.formatDate(this.fromDate);
    }
    return `${this.formatDate(this.fromDate)} \u2192 ${this.formatDate(this.toDate)}`;
  }
  formatDate(iso) {
    if (!iso)
      return "";
    const [y, m, d] = iso.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString("es-PE", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }
  /// Devuelve un % entre 0 y 100 para usar en barras
  productMaxQty() {
    if (this.products.length === 0)
      return 1;
    return Math.max(...this.products.map((p) => p.quantity), 1);
  }
  hourMaxTotal() {
    if (this.hours.length === 0)
      return 1;
    return Math.max(...this.hours.map((h) => h.total), 1);
  }
  waiterMaxTotal() {
    if (this.waiters.length === 0)
      return 1;
    return Math.max(...this.waiters.map((w) => w.total), 1);
  }
  rankBadge(idx) {
    if (idx === 0)
      return "\u{1F947}";
    if (idx === 1)
      return "\u{1F948}";
    if (idx === 2)
      return "\u{1F949}";
    return `${idx + 1}`;
  }
  static \u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], decls: 21, vars: 14, consts: [[1, "reports-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "date-filters"], [1, "date-btn", 3, "click"], ["class", "custom-range", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], [4, "ngIf"], [1, "custom-range"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "btn-apply", 3, "click"], [1, "loading-state"], [1, "spinner"], [1, "summary-cards"], [1, "summary-card", "platos"], [1, "summary-icon"], [1, "summary-info"], [1, "summary-label"], [1, "summary-value"], [1, "summary-meta"], [1, "summary-card", "ingresos"], [1, "summary-card", "promedio"], [1, "summary-card", "estrella"], [1, "summary-value-small", 3, "title"], [1, "tabs"], [1, "tab-btn", 3, "click"], ["class", "tab-content", 4, "ngIf"], [1, "tab-content"], ["class", "empty-state", 4, "ngIf"], ["class", "category-list", 4, "ngIf"], [1, "empty-state"], [1, "category-list"], ["class", "category-row", 4, "ngFor", "ngForOf"], [1, "category-row"], [1, "row-header"], [1, "row-name-block"], [1, "row-name"], [1, "row-meta"], [1, "row-totals"], [1, "row-total"], [1, "row-pct"], [1, "bar-track"], [1, "bar-fill"], ["class", "product-list", 4, "ngIf"], [1, "product-list"], ["class", "product-row", 4, "ngFor", "ngForOf"], [1, "product-row"], [1, "rank"], [1, "product-info"], [1, "product-name"], [1, "product-cat"], [1, "bar-track-mini"], [1, "bar-fill-mini"], [1, "product-stats"], [1, "product-qty"], [1, "product-qty-label"], [1, "product-total"], ["class", "waiter-list", 4, "ngIf"], [1, "waiter-list"], ["class", "waiter-row", 4, "ngFor", "ngForOf"], [1, "waiter-row"], [1, "waiter-info"], [1, "waiter-name"], [1, "waiter-meta"], [1, "bar-fill-mini", "blue"], [1, "waiter-total"], ["class", "hour-chart", 4, "ngIf"], [1, "hour-chart"], ["class", "hour-row", 4, "ngFor", "ngForOf"], [1, "hour-row"], [1, "hour-label"], [1, "bar-track-hour"], [1, "bar-fill-hour"], ["class", "bar-text", 4, "ngIf"], ["class", "bar-text-out", 4, "ngIf"], [1, "hour-orders"], [1, "bar-text"], [1, "bar-text-out"]], template: function ReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "\u{1F4CA} Reportes de Ventas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function ReportsComponent_Template_button_click_8_listener() {
        return ctx.applyPreset("today");
      });
      \u0275\u0275text(9, "Hoy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 5);
      \u0275\u0275listener("click", function ReportsComponent_Template_button_click_10_listener() {
        return ctx.applyPreset("yesterday");
      });
      \u0275\u0275text(11, "Ayer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 5);
      \u0275\u0275listener("click", function ReportsComponent_Template_button_click_12_listener() {
        return ctx.applyPreset("thisWeek");
      });
      \u0275\u0275text(13, "Esta semana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 5);
      \u0275\u0275listener("click", function ReportsComponent_Template_button_click_14_listener() {
        return ctx.applyPreset("thisMonth");
      });
      \u0275\u0275text(15, "Este mes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 5);
      \u0275\u0275listener("click", function ReportsComponent_Template_button_click_16_listener() {
        return ctx.applyPreset("custom");
      });
      \u0275\u0275text(17, "Rango personalizado");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(18, ReportsComponent_div_18_Template, 9, 2, "div", 6)(19, ReportsComponent_div_19_Template, 3, 0, "div", 7)(20, ReportsComponent_ng_container_20_Template, 55, 20, "ng-container", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.formatRange());
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedRange === "today");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedRange === "yesterday");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedRange === "thisWeek");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedRange === "thisMonth");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedRange === "custom");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedRange === "custom");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, HttpClientModule], styles: ['\n\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.reports-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n  background: #f4f4f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111;\n  margin: 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  margin-top: 2px;\n}\n.date-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.date-btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #555;\n  cursor: pointer;\n  transition: all .15s;\n}\n.date-btn[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  background: #f9fafb;\n}\n.date-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, .25);\n}\n.custom-range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 12px 16px;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.custom-range[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n  font-weight: 500;\n}\n.custom-range[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n}\n.btn-apply[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity .15s;\n}\n.btn-apply[_ngcontent-%COMP%]:hover {\n  opacity: .88;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 4rem;\n  color: #888;\n  font-size: 14px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #f97316;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin .7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 12px;\n  margin-bottom: 1.5rem;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  border: 1px solid #ebebeb;\n  transition: box-shadow .2s;\n}\n.summary-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .05);\n}\n.summary-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.summary-card.platos[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: #dbeafe;\n}\n.summary-card.ingresos[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: #d1fae5;\n}\n.summary-card.promedio[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: #fef3c7;\n}\n.summary-card.estrella[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: #fce7f3;\n}\n.summary-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n  flex: 1;\n}\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.summary-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111;\n}\n.summary-value-small[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.summary-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  margin-top: 2px;\n}\n.summary-card.ingresos[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n  margin-bottom: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: .75rem 1.25rem;\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  color: #888;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all .2s;\n  margin-bottom: -1px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #111;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #f97316;\n  border-bottom-color: #f97316;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #aaa;\n  font-size: 14px;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px dashed #e5e7eb;\n}\n.category-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.category-row[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ebebeb;\n  border-radius: 10px;\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.row-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.row-name-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.row-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111;\n}\n.row-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n}\n.row-totals[_ngcontent-%COMP%] {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.row-total[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #059669;\n}\n.row-pct[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  border-radius: 4px;\n  transition: width .3s ease;\n}\n.product-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #ebebeb;\n  overflow: hidden;\n}\n.product-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f3f3f3;\n  transition: background .15s;\n}\n.product-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.product-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.rank[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #555;\n  flex-shrink: 0;\n}\n.product-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111;\n}\n.product-cat[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n}\n.bar-track-mini[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #f3f4f6;\n  border-radius: 2px;\n  overflow: hidden;\n  margin-top: 4px;\n}\n.bar-fill-mini[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  border-radius: 2px;\n  transition: width .3s;\n}\n.bar-fill-mini.blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #2563eb);\n}\n.product-stats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 1px;\n  flex-shrink: 0;\n  text-align: right;\n}\n.product-qty[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111;\n  line-height: 1;\n}\n.product-qty-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.product-total[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #059669;\n  margin-top: 4px;\n}\n.waiter-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #ebebeb;\n  overflow: hidden;\n}\n.waiter-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f3f3f3;\n  transition: background .15s;\n}\n.waiter-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.waiter-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.waiter-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.waiter-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111;\n  text-transform: capitalize;\n}\n.waiter-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n}\n.waiter-total[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #059669;\n  flex-shrink: 0;\n}\n.hour-chart[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #ebebeb;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.hour-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.hour-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  width: 60px;\n  flex-shrink: 0;\n}\n.bar-track-hour[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 28px;\n  background: #f3f4f6;\n  border-radius: 6px;\n  overflow: visible;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.bar-fill-hour[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #1e40af);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  transition: width .3s ease;\n  min-width: 4px;\n}\n.bar-text[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.bar-text-out[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n  margin-left: 8px;\n  white-space: nowrap;\n}\n.hour-orders[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .reports-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .product-stats[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .hour-label[_ngcontent-%COMP%] {\n    width: 48px;\n  }\n}\n@media (max-width: 480px) {\n  .summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=reports.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsComponent, [{
    type: Component,
    args: [{ selector: "app-reports", standalone: true, imports: [CommonModule, FormsModule, HttpClientModule], template: `<div class="reports-page">\r
\r
  <!-- HEADER -->\r
  <div class="page-header">\r
    <div>\r
      <h1 class="page-title">\u{1F4CA} Reportes de Ventas</h1>\r
      <p class="page-subtitle">{{ formatRange() }}</p>\r
    </div>\r
  </div>\r
\r
  <!-- FILTROS DE FECHA -->\r
  <div class="date-filters">\r
    <button class="date-btn" [class.active]="selectedRange === 'today'" (click)="applyPreset('today')">Hoy</button>\r
    <button class="date-btn" [class.active]="selectedRange === 'yesterday'" (click)="applyPreset('yesterday')">Ayer</button>\r
    <button class="date-btn" [class.active]="selectedRange === 'thisWeek'" (click)="applyPreset('thisWeek')">Esta semana</button>\r
    <button class="date-btn" [class.active]="selectedRange === 'thisMonth'" (click)="applyPreset('thisMonth')">Este mes</button>\r
    <button class="date-btn" [class.active]="selectedRange === 'custom'" (click)="applyPreset('custom')">Rango personalizado</button>\r
  </div>\r
\r
  <!-- RANGO PERSONALIZADO -->\r
  <div class="custom-range" *ngIf="selectedRange === 'custom'">\r
    <label>Desde\r
      <input type="date" [(ngModel)]="customFrom" class="form-input">\r
    </label>\r
    <label>Hasta\r
      <input type="date" [(ngModel)]="customTo" class="form-input">\r
    </label>\r
    <button class="btn-apply" (click)="applyCustomRange()">Aplicar</button>\r
  </div>\r
\r
  <!-- LOADING -->\r
  <div class="loading-state" *ngIf="loading">\r
    <div class="spinner"></div>\r
    Cargando reportes...\r
  </div>\r
\r
  <!-- CONTENIDO -->\r
  <ng-container *ngIf="!loading">\r
\r
    <!-- SUMMARY CARDS -->\r
    <div class="summary-cards">\r
      <div class="summary-card platos">\r
        <div class="summary-icon">\u{1F37D}</div>\r
        <div class="summary-info">\r
          <span class="summary-label">Platos vendidos</span>\r
          <span class="summary-value">{{ summary.totalPlatos }}</span>\r
          <span class="summary-meta">{{ summary.totalOrders }} \xF3rden{{ summary.totalOrders !== 1 ? 'es' : '' }}</span>\r
        </div>\r
      </div>\r
\r
      <div class="summary-card ingresos">\r
        <div class="summary-icon">\u{1F4B0}</div>\r
        <div class="summary-info">\r
          <span class="summary-label">Ingresos</span>\r
          <span class="summary-value">S/. {{ summary.totalIngresos.toFixed(2) }}</span>\r
          <span class="summary-meta">cobrados</span>\r
        </div>\r
      </div>\r
\r
      <div class="summary-card promedio">\r
        <div class="summary-icon">\u{1F4CA}</div>\r
        <div class="summary-info">\r
          <span class="summary-label">Ticket promedio</span>\r
          <span class="summary-value">S/. {{ summary.ticketPromedio.toFixed(2) }}</span>\r
          <span class="summary-meta">por mesa</span>\r
        </div>\r
      </div>\r
\r
      <div class="summary-card estrella">\r
        <div class="summary-icon">\u{1F51D}</div>\r
        <div class="summary-info">\r
          <span class="summary-label">Plato estrella</span>\r
          <span class="summary-value-small" [title]="summary.platoEstrella">{{ summary.platoEstrella }}</span>\r
          <span class="summary-meta">{{ summary.platoEstrellaCantidad }} unid.</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- TABS -->\r
    <div class="tabs">\r
      <button class="tab-btn" [class.active]="activeTab === 'category'" (click)="activeTab = 'category'">\r
        \u{1F5C2} Por Categor\xEDa\r
      </button>\r
      <button class="tab-btn" [class.active]="activeTab === 'product'" (click)="activeTab = 'product'">\r
        \u{1F37D} Por Producto\r
      </button>\r
      <button class="tab-btn" [class.active]="activeTab === 'waiter'" (click)="activeTab = 'waiter'">\r
        \u{1F464} Por Mozo\r
      </button>\r
      <button class="tab-btn" [class.active]="activeTab === 'hour'" (click)="activeTab = 'hour'">\r
        \u{1F550} Por Hora\r
      </button>\r
    </div>\r
\r
    <!-- TAB: CATEGOR\xCDA -->\r
    <div class="tab-content" *ngIf="activeTab === 'category'">\r
      <div class="empty-state" *ngIf="categories.length === 0">\r
        <p>No hay ventas en este rango</p>\r
      </div>\r
      <div class="category-list" *ngIf="categories.length > 0">\r
        <div class="category-row" *ngFor="let cat of categories">\r
          <div class="row-header">\r
            <div class="row-name-block">\r
              <span class="row-name">{{ cat.categoryName }}</span>\r
              <span class="row-meta">{{ cat.quantity }} unid.</span>\r
            </div>\r
            <div class="row-totals">\r
              <span class="row-total">S/. {{ cat.total.toFixed(2) }}</span>\r
              <span class="row-pct">{{ cat.percentage }}%</span>\r
            </div>\r
          </div>\r
          <div class="bar-track">\r
            <div class="bar-fill" [style.width.%]="cat.percentage"></div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- TAB: PRODUCTO -->\r
    <div class="tab-content" *ngIf="activeTab === 'product'">\r
      <div class="empty-state" *ngIf="products.length === 0">\r
        <p>No hay productos vendidos en este rango</p>\r
      </div>\r
      <div class="product-list" *ngIf="products.length > 0">\r
        <div class="product-row" *ngFor="let p of products; let i = index">\r
          <div class="rank">{{ rankBadge(i) }}</div>\r
          <div class="product-info">\r
            <span class="product-name">{{ p.productName }}</span>\r
            <span class="product-cat">{{ p.categoryName }} \xB7 S/. {{ p.unitPrice.toFixed(2) }} c/u</span>\r
            <div class="bar-track-mini">\r
              <div class="bar-fill-mini" [style.width.%]="(p.quantity / productMaxQty()) * 100"></div>\r
            </div>\r
          </div>\r
          <div class="product-stats">\r
            <span class="product-qty">{{ p.quantity }}</span>\r
            <span class="product-qty-label">unid.</span>\r
            <span class="product-total">S/. {{ p.total.toFixed(2) }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- TAB: MOZO -->\r
    <div class="tab-content" *ngIf="activeTab === 'waiter'">\r
      <div class="empty-state" *ngIf="waiters.length === 0">\r
        <p>No hay ventas asignadas a mozos en este rango</p>\r
      </div>\r
      <div class="waiter-list" *ngIf="waiters.length > 0">\r
        <div class="waiter-row" *ngFor="let w of waiters; let i = index">\r
          <div class="rank">{{ rankBadge(i) }}</div>\r
          <div class="waiter-info">\r
            <span class="waiter-name">{{ w.waiterName }}</span>\r
            <span class="waiter-meta">{{ w.ordersCount }} \xF3rden{{ w.ordersCount !== 1 ? 'es' : '' }} \xB7 {{ w.totalPlatos }} platos</span>\r
            <div class="bar-track-mini">\r
              <div class="bar-fill-mini blue" [style.width.%]="(w.total / waiterMaxTotal()) * 100"></div>\r
            </div>\r
          </div>\r
          <div class="waiter-total">S/. {{ w.total.toFixed(2) }}</div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- TAB: HORA -->\r
    <div class="tab-content" *ngIf="activeTab === 'hour'">\r
      <div class="empty-state" *ngIf="hours.length === 0">\r
        <p>No hay datos por hora en este rango</p>\r
      </div>\r
      <div class="hour-chart" *ngIf="hours.length > 0">\r
        <div class="hour-row" *ngFor="let h of hours">\r
          <span class="hour-label">{{ h.label }}</span>\r
          <div class="bar-track-hour">\r
            <div class="bar-fill-hour" [style.width.%]="(h.total / hourMaxTotal()) * 100">\r
              <span *ngIf="(h.total / hourMaxTotal()) * 100 > 25" class="bar-text">S/. {{ h.total.toFixed(2) }}</span>\r
            </div>\r
            <span *ngIf="(h.total / hourMaxTotal()) * 100 <= 25" class="bar-text-out">S/. {{ h.total.toFixed(2) }}</span>\r
          </div>\r
          <span class="hour-orders">{{ h.ordersCount }} \xF3rd. \xB7 {{ h.totalPlatos }} platos</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </ng-container>\r
</div>`, styles: ['/* src/app/components/reports/reports.css */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.reports-page {\n  padding: 2rem;\n  min-height: 100vh;\n  background: #f4f4f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111;\n  margin: 0;\n}\n.page-subtitle {\n  font-size: 13px;\n  color: #888;\n  margin-top: 2px;\n}\n.date-filters {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.date-btn {\n  padding: 8px 16px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #555;\n  cursor: pointer;\n  transition: all .15s;\n}\n.date-btn:hover {\n  border-color: #d1d5db;\n  background: #f9fafb;\n}\n.date-btn.active {\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 2px 8px rgba(249, 115, 22, .25);\n}\n.custom-range {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 12px 16px;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.custom-range label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #555;\n  font-weight: 500;\n}\n.custom-range .form-input {\n  padding: 6px 10px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 13px;\n  outline: none;\n}\n.btn-apply {\n  padding: 8px 16px;\n  background: #f97316;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity .15s;\n}\n.btn-apply:hover {\n  opacity: .88;\n}\n.loading-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 4rem;\n  color: #888;\n  font-size: 14px;\n}\n.spinner {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #f97316;\n  border-radius: 50%;\n  animation: spin .7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.summary-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 12px;\n  margin-bottom: 1.5rem;\n}\n.summary-card {\n  background: #fff;\n  border-radius: 14px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  border: 1px solid #ebebeb;\n  transition: box-shadow .2s;\n}\n.summary-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .05);\n}\n.summary-icon {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  flex-shrink: 0;\n}\n.summary-card.platos .summary-icon {\n  background: #dbeafe;\n}\n.summary-card.ingresos .summary-icon {\n  background: #d1fae5;\n}\n.summary-card.promedio .summary-icon {\n  background: #fef3c7;\n}\n.summary-card.estrella .summary-icon {\n  background: #fce7f3;\n}\n.summary-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n  flex: 1;\n}\n.summary-label {\n  font-size: 11px;\n  color: #888;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.summary-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111;\n}\n.summary-value-small {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.summary-meta {\n  font-size: 11px;\n  color: #aaa;\n  margin-top: 2px;\n}\n.summary-card.ingresos .summary-value {\n  color: #059669;\n}\n.tabs {\n  display: flex;\n  gap: .5rem;\n  margin-bottom: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 0;\n}\n.tab-btn {\n  padding: .75rem 1.25rem;\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  color: #888;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all .2s;\n  margin-bottom: -1px;\n}\n.tab-btn:hover {\n  color: #111;\n}\n.tab-btn.active {\n  color: #f97316;\n  border-bottom-color: #f97316;\n}\n.empty-state {\n  text-align: center;\n  padding: 3rem;\n  color: #aaa;\n  font-size: 14px;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px dashed #e5e7eb;\n}\n.category-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.category-row {\n  background: #fff;\n  border: 1px solid #ebebeb;\n  border-radius: 10px;\n  padding: 14px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.row-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.row-name-block {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.row-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111;\n}\n.row-meta {\n  font-size: 11px;\n  color: #888;\n}\n.row-totals {\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.row-total {\n  font-size: 16px;\n  font-weight: 700;\n  color: #059669;\n}\n.row-pct {\n  font-size: 11px;\n  color: #888;\n}\n.bar-track {\n  height: 8px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.bar-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  border-radius: 4px;\n  transition: width .3s ease;\n}\n.product-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #ebebeb;\n  overflow: hidden;\n}\n.product-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f3f3f3;\n  transition: background .15s;\n}\n.product-row:last-child {\n  border-bottom: none;\n}\n.product-row:hover {\n  background: #fafafa;\n}\n.rank {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #f3f4f6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  color: #555;\n  flex-shrink: 0;\n}\n.product-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n.product-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111;\n}\n.product-cat {\n  font-size: 11px;\n  color: #888;\n}\n.bar-track-mini {\n  height: 4px;\n  background: #f3f4f6;\n  border-radius: 2px;\n  overflow: hidden;\n  margin-top: 4px;\n}\n.bar-fill-mini {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  border-radius: 2px;\n  transition: width .3s;\n}\n.bar-fill-mini.blue {\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #2563eb);\n}\n.product-stats {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 1px;\n  flex-shrink: 0;\n  text-align: right;\n}\n.product-qty {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111;\n  line-height: 1;\n}\n.product-qty-label {\n  font-size: 10px;\n  color: #aaa;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.product-total {\n  font-size: 13px;\n  font-weight: 700;\n  color: #059669;\n  margin-top: 4px;\n}\n.waiter-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #ebebeb;\n  overflow: hidden;\n}\n.waiter-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f3f3f3;\n  transition: background .15s;\n}\n.waiter-row:last-child {\n  border-bottom: none;\n}\n.waiter-row:hover {\n  background: #fafafa;\n}\n.waiter-info {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.waiter-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #111;\n  text-transform: capitalize;\n}\n.waiter-meta {\n  font-size: 11px;\n  color: #888;\n}\n.waiter-total {\n  font-size: 16px;\n  font-weight: 700;\n  color: #059669;\n  flex-shrink: 0;\n}\n.hour-chart {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #ebebeb;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.hour-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.hour-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  width: 60px;\n  flex-shrink: 0;\n}\n.bar-track-hour {\n  flex: 1;\n  height: 28px;\n  background: #f3f4f6;\n  border-radius: 6px;\n  overflow: visible;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.bar-fill-hour {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #1e40af);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  transition: width .3s ease;\n  min-width: 4px;\n}\n.bar-text {\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.bar-text-out {\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n  margin-left: 8px;\n  white-space: nowrap;\n}\n.hour-orders {\n  font-size: 11px;\n  color: #888;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n@media (max-width: 768px) {\n  .reports-page {\n    padding: 1rem;\n  }\n  .summary-cards {\n    grid-template-columns: 1fr 1fr;\n  }\n  .product-stats {\n    font-size: 12px;\n  }\n  .hour-label {\n    width: 48px;\n  }\n}\n@media (max-width: 480px) {\n  .summary-cards {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=reports.css.map */\n'] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "app/components/reports/reports.ts", lineNumber: 57 });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=chunk-2AGVUCWJ.js.map
