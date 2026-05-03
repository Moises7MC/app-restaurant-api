import {
  environment
} from "./chunk-NMCGB4Y3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-3HTVTBBE.js";
import {
  CommonModule,
  HttpClient,
  HttpClientModule,
  HttpHeaders,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XHDJFZT2.js";

// src/app/components/menus/menus.ts
function MenusComponent_div_30_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27)(4, "h3", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 30)(9, "span", 31);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 32);
    \u0275\u0275element(11, "circle", 33)(12, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 35)(15, "button", 36);
    \u0275\u0275listener("click", function MenusComponent_div_30_div_7_Template_button_click_15_listener() {
      const cat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCategoryModal(cat_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 37);
    \u0275\u0275element(17, "path", 38)(18, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(19, "button", 40);
    \u0275\u0275listener("click", function MenusComponent_div_30_div_7_Template_button_click_19_listener() {
      const cat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmDelete("category", cat_r4.id, cat_r4.name));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 37);
    \u0275\u0275element(21, "polyline", 41)(22, "path", 42)(23, "path", 43)(24, "path", 44);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", cat_r4.sortOrder);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cat_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r4.description || "Sin descripci\xF3n");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", cat_r4.productCount, " plato", cat_r4.productCount !== 1 ? "s" : "", " ");
  }
}
function MenusComponent_div_30_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay categor\xEDas a\xFAn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function MenusComponent_div_30_div_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCategoryModal());
    });
    \u0275\u0275text(6, "Crear primera categor\xEDa");
    \u0275\u0275elementEnd()();
  }
}
function MenusComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "button", 19);
    \u0275\u0275listener("click", function MenusComponent_div_30_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCategoryModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 20);
    \u0275\u0275element(4, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Nueva Categor\xEDa ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 22);
    \u0275\u0275template(7, MenusComponent_div_30_div_7_Template, 25, 5, "div", 23)(8, MenusComponent_div_30_div_8_Template, 7, 0, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categories.length === 0);
  }
}
function MenusComponent_div_31_table_7_tr_16_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 64);
    \u0275\u0275listener("error", function MenusComponent_div_31_table_7_tr_16_img_3_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r8);
      const p_r9 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(p_r9.imageUrl = "");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", p_r9.imageUrl, \u0275\u0275sanitizeUrl)("alt", p_r9.name);
  }
}
function MenusComponent_div_31_table_7_tr_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 66);
    \u0275\u0275element(2, "rect", 67)(3, "circle", 68)(4, "polyline", 69);
    \u0275\u0275elementEnd()();
  }
}
function MenusComponent_div_31_table_7_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 52);
    \u0275\u0275template(3, MenusComponent_div_31_table_7_tr_16_img_3_Template, 1, 2, "img", 53)(4, MenusComponent_div_31_table_7_tr_16_div_4_Template, 5, 0, "div", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td")(6, "div", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 56);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 58);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "button", 59);
    \u0275\u0275listener("click", function MenusComponent_div_31_table_7_tr_16_Template_button_click_16_listener() {
      const p_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleActive(p_r9));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td")(19, "div", 60)(20, "button", 61);
    \u0275\u0275listener("click", function MenusComponent_div_31_table_7_tr_16_Template_button_click_20_listener() {
      const p_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openProductModal(p_r9));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 62);
    \u0275\u0275element(22, "path", 38)(23, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(24, "button", 63);
    \u0275\u0275listener("click", function MenusComponent_div_31_table_7_tr_16_Template_button_click_24_listener() {
      const p_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.confirmDelete("product", p_r9.id, p_r9.name));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 62);
    \u0275\u0275element(26, "polyline", 41)(27, "path", 42)(28, "path", 43)(29, "path", 44);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    \u0275\u0275classProp("inactive-row", !p_r9.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", p_r9.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r9.imageUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r9.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/. ", p_r9.price.toFixed(2));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", p_r9.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r9.isActive ? "Activo" : "Inactivo", " ");
  }
}
function MenusComponent_div_31_table_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 50)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Imagen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Nombre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Categor\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, MenusComponent_div_31_table_7_tr_16_Template, 30, 11, "tr", 51);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r1.products);
  }
}
function MenusComponent_div_31_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "path", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay platos registrados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function MenusComponent_div_31_div_8_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openProductModal());
    });
    \u0275\u0275text(6, "Agregar primer plato");
    \u0275\u0275elementEnd()();
  }
}
function MenusComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "button", 19);
    \u0275\u0275listener("click", function MenusComponent_div_31_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openProductModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 20);
    \u0275\u0275element(4, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Nuevo Plato ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 48);
    \u0275\u0275template(7, MenusComponent_div_31_table_7_Template, 17, 1, "table", 49)(8, MenusComponent_div_31_div_8_Template, 7, 0, "div", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.products.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.products.length === 0);
  }
}
function MenusComponent_div_32_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.entradaError);
  }
}
function MenusComponent_div_32_div_14_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 83)(2, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function MenusComponent_div_32_div_14_div_1_ng_container_1_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.editEntradaName, $event) || (ctx_r1.editEntradaName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function MenusComponent_div_32_div_14_div_1_ng_container_1_Template_input_keyup_enter_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEditEntrada());
    })("keyup.escape", function MenusComponent_div_32_div_14_div_1_ng_container_1_Template_input_keyup_escape_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelEditEntrada());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 85);
    \u0275\u0275listener("click", function MenusComponent_div_32_div_14_div_1_ng_container_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.saveEditEntrada());
    });
    \u0275\u0275text(4, "Guardar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 86);
    \u0275\u0275listener("click", function MenusComponent_div_32_div_14_div_1_ng_container_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.cancelEditEntrada());
    });
    \u0275\u0275text(6, "Cancelar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editEntradaName);
  }
}
function MenusComponent_div_32_div_14_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 87);
    \u0275\u0275element(2, "div", 88);
    \u0275\u0275elementStart(3, "span", 89);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 90)(6, "button", 36);
    \u0275\u0275listener("click", function MenusComponent_div_32_div_14_div_1_ng_container_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const entrada_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEditEntrada(entrada_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 62);
    \u0275\u0275element(8, "path", 38)(9, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "button", 40);
    \u0275\u0275listener("click", function MenusComponent_div_32_div_14_div_1_ng_container_2_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r13);
      const entrada_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteEntrada(entrada_r14));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 62);
    \u0275\u0275element(12, "polyline", 41)(13, "path", 42)(14, "path", 43)(15, "path", 44);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const entrada_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entrada_r14.name);
  }
}
function MenusComponent_div_32_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275template(1, MenusComponent_div_32_div_14_div_1_ng_container_1_Template, 7, 1, "ng-container", 82)(2, MenusComponent_div_32_div_14_div_1_ng_container_2_Template, 16, 1, "ng-container", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entrada_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingEntrada == null ? null : ctx_r1.editingEntrada.id) === entrada_r14.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.editingEntrada == null ? null : ctx_r1.editingEntrada.id) !== entrada_r14.id);
  }
}
function MenusComponent_div_32_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275template(1, MenusComponent_div_32_div_14_div_1_Template, 3, 2, "div", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.entradas);
  }
}
function MenusComponent_div_32_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 46);
    \u0275\u0275element(2, "path", 10)(3, "path", 11)(4, "line", 12)(5, "line", 13)(6, "line", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "No hay entradas definidas para hoy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 91);
    \u0275\u0275text(10, "Agrega las entradas que se ofrecer\xE1n hoy");
    \u0275\u0275elementEnd()();
  }
}
function MenusComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 70);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 37);
    \u0275\u0275element(3, "rect", 71)(4, "line", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 73)(8, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function MenusComponent_div_32_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newEntradaName, $event) || (ctx_r1.newEntradaName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function MenusComponent_div_32_Template_input_keyup_enter_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addEntrada());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 75);
    \u0275\u0275listener("click", function MenusComponent_div_32_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addEntrada());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 20);
    \u0275\u0275element(11, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, MenusComponent_div_32_div_13_Template, 2, 1, "div", 76)(14, MenusComponent_div_32_div_14_Template, 2, 1, "div", 77)(15, MenusComponent_div_32_div_15_Template, 11, 0, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.getTodayLabel());
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newEntradaName);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.entradaLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.entradaLoading ? "Agregando..." : "Agregar", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entradaError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entradas.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entradas.length === 0);
  }
}
function MenusComponent_div_33_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.categoryError);
  }
}
function MenusComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function MenusComponent_div_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCategoryModal = false);
    });
    \u0275\u0275elementStart(1, "div", 93);
    \u0275\u0275listener("click", function MenusComponent_div_33_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 94)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 95);
    \u0275\u0275listener("click", function MenusComponent_div_33_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCategoryModal = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 96);
    \u0275\u0275element(7, "path", 97);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 98)(9, "div", 99)(10, "label");
    \u0275\u0275text(11, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function MenusComponent_div_33_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.categoryForm.name, $event) || (ctx_r1.categoryForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 99)(14, "label");
    \u0275\u0275text(15, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function MenusComponent_div_33_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.categoryForm.description, $event) || (ctx_r1.categoryForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 99)(18, "label");
    \u0275\u0275text(19, "Orden de aparici\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function MenusComponent_div_33_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.categoryForm.sortOrder, $event) || (ctx_r1.categoryForm.sortOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, MenusComponent_div_33_div_21_Template, 2, 1, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 103)(23, "button", 104);
    \u0275\u0275listener("click", function MenusComponent_div_33_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCategoryModal = false);
    });
    \u0275\u0275text(24, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 105);
    \u0275\u0275listener("click", function MenusComponent_div_33_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveCategory());
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingCategory ? "Editar Categor\xEDa" : "Nueva Categor\xEDa");
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.categoryForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.categoryForm.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.categoryForm.sortOrder);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categoryError);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Guardando..." : ctx_r1.editingCategory ? "Actualizar" : "Crear", " ");
  }
}
function MenusComponent_div_34_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 128);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r17 = ctx.$implicit;
    \u0275\u0275property("value", cat_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r17.name);
  }
}
function MenusComponent_div_34_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129)(1, "label");
    \u0275\u0275text(2, "Imagen seleccionada");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 130);
    \u0275\u0275element(4, "img", 131);
    \u0275\u0275elementStart(5, "button", 132);
    \u0275\u0275listener("click", function MenusComponent_div_34_div_30_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.productForm.imageUrl = "");
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.productForm.imageUrl, \u0275\u0275sanitizeUrl);
  }
}
function MenusComponent_div_34_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.productError);
  }
}
function MenusComponent_div_34_div_41_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 139);
    \u0275\u0275element(2, "path", 140);
    \u0275\u0275elementEnd()();
  }
}
function MenusComponent_div_34_div_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275listener("click", function MenusComponent_div_34_div_41_div_1_Template_div_click_0_listener() {
      const photo_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectPhoto(photo_r20));
    });
    \u0275\u0275element(1, "img", 136);
    \u0275\u0275template(2, MenusComponent_div_34_div_41_div_1_div_2_Template, 3, 0, "div", 137);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const photo_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.productForm.imageUrl === photo_r20.urls.regular);
    \u0275\u0275advance();
    \u0275\u0275property("src", photo_r20.urls.small, \u0275\u0275sanitizeUrl)("alt", photo_r20.alt_description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.productForm.imageUrl === photo_r20.urls.regular);
  }
}
function MenusComponent_div_34_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275template(1, MenusComponent_div_34_div_41_div_1_Template, 3, 5, "div", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.unsplashResults);
  }
}
function MenusComponent_div_34_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141);
    \u0275\u0275text(1, " No se encontraron im\xE1genes ");
    \u0275\u0275elementEnd();
  }
}
function MenusComponent_div_34_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 142);
    \u0275\u0275text(1, " Escribe el nombre del plato y presiona Buscar ");
    \u0275\u0275elementEnd();
  }
}
function MenusComponent_div_34_p_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 143);
    \u0275\u0275text(1, "Fotos de ");
    \u0275\u0275elementStart(2, "a", 144);
    \u0275\u0275text(3, "Unsplash");
    \u0275\u0275elementEnd()();
  }
}
function MenusComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function MenusComponent_div_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showProductModal = false);
    });
    \u0275\u0275elementStart(1, "div", 106);
    \u0275\u0275listener("click", function MenusComponent_div_34_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 94)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 95);
    \u0275\u0275listener("click", function MenusComponent_div_34_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showProductModal = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 96);
    \u0275\u0275element(7, "path", 97);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 107)(9, "div", 108)(10, "div", 99)(11, "label");
    \u0275\u0275text(12, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 109);
    \u0275\u0275twoWayListener("ngModelChange", function MenusComponent_div_34_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.productForm.name, $event) || (ctx_r1.productForm.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function MenusComponent_div_34_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.unsplashQuery = $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 99)(15, "label");
    \u0275\u0275text(16, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 110);
    \u0275\u0275twoWayListener("ngModelChange", function MenusComponent_div_34_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.productForm.description, $event) || (ctx_r1.productForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 111)(19, "div", 99)(20, "label");
    \u0275\u0275text(21, "Precio (S/.) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function MenusComponent_div_34_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.productForm.price, $event) || (ctx_r1.productForm.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 99)(24, "label");
    \u0275\u0275text(25, "Categor\xEDa *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 113);
    \u0275\u0275twoWayListener("ngModelChange", function MenusComponent_div_34_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.productForm.categoryId, $event) || (ctx_r1.productForm.categoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 114);
    \u0275\u0275text(28, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, MenusComponent_div_34_option_29_Template, 2, 2, "option", 115);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, MenusComponent_div_34_div_30_Template, 7, 1, "div", 116)(31, MenusComponent_div_34_div_31_Template, 2, 1, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 117)(33, "label", 118);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(34, "svg", 119);
    \u0275\u0275element(35, "path", 120);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Agregar imagen ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "div", 121)(38, "input", 122);
    \u0275\u0275twoWayListener("ngModelChange", function MenusComponent_div_34_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.unsplashQuery, $event) || (ctx_r1.unsplashQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function MenusComponent_div_34_Template_input_keyup_enter_38_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchUnsplash());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 123);
    \u0275\u0275listener("click", function MenusComponent_div_34_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchUnsplash());
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, MenusComponent_div_34_div_41_Template, 2, 1, "div", 124)(42, MenusComponent_div_34_div_42_Template, 2, 0, "div", 125)(43, MenusComponent_div_34_div_43_Template, 2, 0, "div", 126)(44, MenusComponent_div_34_p_44_Template, 4, 0, "p", 127);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 103)(46, "button", 104);
    \u0275\u0275listener("click", function MenusComponent_div_34_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showProductModal = false);
    });
    \u0275\u0275text(47, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 105);
    \u0275\u0275listener("click", function MenusComponent_div_34_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveProduct());
    });
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingProduct ? "Editar Plato" : "Nuevo Plato");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.productForm.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.productForm.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.productForm.price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.productForm.categoryId);
    \u0275\u0275advance();
    \u0275\u0275property("value", 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.productForm.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.productError);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.unsplashQuery);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.unsplashLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.unsplashLoading ? "..." : "Buscar", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.unsplashResults.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.unsplashSearched && ctx_r1.unsplashResults.length === 0 && !ctx_r1.unsplashLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.unsplashSearched);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.unsplashResults.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading ? "Guardando..." : ctx_r1.editingProduct ? "Actualizar" : "Crear", " ");
  }
}
function MenusComponent_div_35_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Esta acci\xF3n no se puede deshacer si no tiene platos asociados.");
    \u0275\u0275elementEnd();
  }
}
function MenusComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function MenusComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteConfirm = null);
    });
    \u0275\u0275elementStart(1, "div", 145);
    \u0275\u0275listener("click", function MenusComponent_div_35_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 146)(3, "h2");
    \u0275\u0275text(4, "Confirmar eliminaci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 98)(6, "p", 147);
    \u0275\u0275text(7, " \xBFEst\xE1s seguro que deseas eliminar ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "? ");
    \u0275\u0275template(11, MenusComponent_div_35_span_11_Template, 2, 0, "span", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 103)(13, "button", 104);
    \u0275\u0275listener("click", function MenusComponent_div_35_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteConfirm = null);
    });
    \u0275\u0275text(14, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 148);
    \u0275\u0275listener("click", function MenusComponent_div_35_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.executeDelete());
    });
    \u0275\u0275text(16, "Eliminar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.deleteConfirm == null ? null : ctx_r1.deleteConfirm.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.deleteConfirm == null ? null : ctx_r1.deleteConfirm.type) === "category");
  }
}
var MenusComponent = class _MenusComponent {
  http;
  apiUrl = environment.apiUrl;
  unsplashKey = "GZOeZzgY8sguV5Lb_exuWp4_nqvGfLD6T5eSQARgGpU";
  activeTab = "categories";
  // Categorías
  categories = [];
  showCategoryModal = false;
  editingCategory = null;
  categoryForm = { name: "", description: "", sortOrder: 0 };
  categoryError = "";
  // Productos
  products = [];
  showProductModal = false;
  editingProduct = null;
  productForm = {
    name: "",
    description: "",
    price: 0,
    categoryId: 0,
    imageUrl: "",
    isActive: true
  };
  productError = "";
  // Unsplash
  unsplashQuery = "";
  unsplashResults = [];
  unsplashLoading = false;
  unsplashSearched = false;
  // Entradas del día
  entradas = [];
  newEntradaName = "";
  entradaError = "";
  entradaLoading = false;
  editingEntrada = null;
  editEntradaName = "";
  // UI
  loading = false;
  deleteConfirm = null;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
    this.loadEntradas();
  }
  // ─── CATEGORÍAS ──────────────────────────────────────────────
  loadCategories() {
    this.http.get(`${this.apiUrl}/category`).subscribe({
      next: (data) => this.categories = data,
      error: (e) => console.error(e)
    });
  }
  openCategoryModal(cat) {
    this.categoryError = "";
    if (cat) {
      this.editingCategory = cat;
      this.categoryForm = { name: cat.name, description: cat.description, sortOrder: cat.sortOrder };
    } else {
      this.editingCategory = null;
      this.categoryForm = { name: "", description: "", sortOrder: this.categories.length + 1 };
    }
    this.showCategoryModal = true;
  }
  saveCategory() {
    if (!this.categoryForm.name.trim()) {
      this.categoryError = "El nombre es requerido";
      return;
    }
    this.loading = true;
    const body = this.categoryForm;
    const req = this.editingCategory ? this.http.put(`${this.apiUrl}/category/${this.editingCategory.id}`, body) : this.http.post(`${this.apiUrl}/category`, body);
    req.subscribe({
      next: () => {
        this.showCategoryModal = false;
        this.loadCategories();
        this.loading = false;
      },
      error: (e) => {
        this.categoryError = e.error || "Error al guardar";
        this.loading = false;
      }
    });
  }
  confirmDelete(type, id, name) {
    this.deleteConfirm = { type, id, name };
  }
  executeDelete() {
    if (!this.deleteConfirm)
      return;
    const { type, id } = this.deleteConfirm;
    const url = type === "category" ? `${this.apiUrl}/category/${id}` : `${this.apiUrl}/product/${id}`;
    this.http.delete(url).subscribe({
      next: () => {
        this.deleteConfirm = null;
        type === "category" ? this.loadCategories() : this.loadProducts();
      },
      error: (e) => {
        alert(e.error || "No se puede eliminar");
        this.deleteConfirm = null;
      }
    });
  }
  // ─── PRODUCTOS ────────────────────────────────────────────────
  loadProducts() {
    this.http.get(`${this.apiUrl}/product`).subscribe({
      next: (data) => this.products = data,
      error: (e) => console.error(e)
    });
  }
  openProductModal(product) {
    this.productError = "";
    this.unsplashResults = [];
    this.unsplashSearched = false;
    this.unsplashQuery = "";
    if (product) {
      this.editingProduct = product;
      this.productForm = {
        name: product.name,
        description: product.description,
        price: product.price,
        categoryId: product.categoryId,
        imageUrl: product.imageUrl,
        isActive: product.isActive
      };
      this.unsplashQuery = product.name;
    } else {
      this.editingProduct = null;
      this.productForm = { name: "", description: "", price: 0, categoryId: this.categories[0]?.id || 0, imageUrl: "", isActive: true };
    }
    this.showProductModal = true;
  }
  saveProduct() {
    if (!this.productForm.name.trim()) {
      this.productError = "El nombre es requerido";
      return;
    }
    if (this.productForm.price <= 0) {
      this.productError = "El precio debe ser mayor a 0";
      return;
    }
    if (!this.productForm.categoryId) {
      this.productError = "Selecciona una categor\xEDa";
      return;
    }
    this.loading = true;
    const req = this.editingProduct ? this.http.put(`${this.apiUrl}/product/${this.editingProduct.id}`, this.productForm) : this.http.post(`${this.apiUrl}/product`, this.productForm);
    req.subscribe({
      next: () => {
        this.showProductModal = false;
        this.loadProducts();
        this.loading = false;
      },
      error: (e) => {
        this.productError = e.error || "Error al guardar";
        this.loading = false;
      }
    });
  }
  toggleActive(product) {
    this.http.put(`${this.apiUrl}/product/${product.id}/toggle-active`, {}).subscribe({
      next: () => this.loadProducts(),
      error: (e) => console.error(e)
    });
  }
  // ─── UNSPLASH ─────────────────────────────────────────────────
  searchUnsplash() {
    if (!this.unsplashQuery.trim())
      return;
    this.unsplashLoading = true;
    this.unsplashSearched = true;
    const headers = new HttpHeaders({ Authorization: `Client-ID ${this.unsplashKey}` });
    this.http.get(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(this.unsplashQuery + " comida plato")}&per_page=9&orientation=landscape`, { headers }).subscribe({
      next: (res) => {
        this.unsplashResults = res.results;
        this.unsplashLoading = false;
      },
      error: () => {
        this.unsplashLoading = false;
      }
    });
  }
  selectPhoto(photo) {
    this.productForm.imageUrl = photo.urls.regular;
    const headers = new HttpHeaders({ Authorization: `Client-ID ${this.unsplashKey}` });
    this.http.get(photo.links.download_location, { headers }).subscribe();
  }
  getCategoryName(id) {
    return this.categories.find((c) => c.id === id)?.name || "";
  }
  // ─── ENTRADAS DEL DÍA ─────────────────────────────────────────
  loadEntradas() {
    this.http.get(`${this.apiUrl}/entrada`).subscribe({
      next: (data) => this.entradas = data,
      error: (e) => console.error(e)
    });
  }
  addEntrada() {
    if (!this.newEntradaName.trim()) {
      this.entradaError = "Escribe un nombre para la entrada";
      return;
    }
    this.entradaLoading = true;
    this.entradaError = "";
    this.http.post(`${this.apiUrl}/entrada`, { name: this.newEntradaName.trim() }).subscribe({
      next: (nueva) => {
        this.entradas.push(nueva);
        this.newEntradaName = "";
        this.entradaLoading = false;
      },
      error: () => {
        this.entradaError = "Error al agregar entrada";
        this.entradaLoading = false;
      }
    });
  }
  startEditEntrada(entrada) {
    this.editingEntrada = entrada;
    this.editEntradaName = entrada.name;
  }
  saveEditEntrada() {
    if (!this.editingEntrada || !this.editEntradaName.trim())
      return;
    this.http.put(`${this.apiUrl}/entrada/${this.editingEntrada.id}`, { name: this.editEntradaName.trim() }).subscribe({
      next: (updated) => {
        const idx = this.entradas.findIndex((e) => e.id === updated.id);
        if (idx !== -1)
          this.entradas[idx] = updated;
        this.editingEntrada = null;
        this.editEntradaName = "";
      },
      error: () => {
        this.entradaError = "Error al editar";
      }
    });
  }
  cancelEditEntrada() {
    this.editingEntrada = null;
    this.editEntradaName = "";
  }
  deleteEntrada(entrada) {
    this.http.delete(`${this.apiUrl}/entrada/${entrada.id}`).subscribe({
      next: () => this.entradas = this.entradas.filter((e) => e.id !== entrada.id),
      error: () => {
        this.entradaError = "Error al eliminar";
      }
    });
  }
  getTodayLabel() {
    return (/* @__PURE__ */ new Date()).toLocaleDateString("es-PE", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
  static \u0275fac = function MenusComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenusComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenusComponent, selectors: [["app-menus"]], decls: 36, vars: 15, consts: [[1, "menus-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "tabs"], [1, "tab-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M4 6h16M4 10h16M4 14h16M4 18h16"], [1, "tab-badge"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], ["d", "M18 8h1a4 4 0 0 1 0 8h-1"], ["d", "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"], ["x1", "6", "y1", "1", "x2", "6", "y2", "4"], ["x1", "10", "y1", "1", "x2", "10", "y2", "4"], ["x1", "14", "y1", "1", "x2", "14", "y2", "4"], ["class", "tab-content", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "tab-content"], [1, "section-actions"], [1, "btn-add", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M12 5v14M5 12h14"], [1, "cards-grid"], ["class", "category-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "category-card"], [1, "card-order-badge"], [1, "card-body"], [1, "card-title"], [1, "card-desc"], [1, "card-meta"], [1, "meta-pill"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 8v4l3 3"], [1, "card-actions"], ["title", "Editar", 1, "btn-icon", "edit", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["title", "Eliminar", 1, "btn-icon", "delete", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"], ["d", "M10 11v6M14 11v6"], ["d", "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"], [1, "empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], [1, "btn-add", "small", 3, "click"], [1, "products-table-wrap"], ["class", "products-table", 4, "ngIf"], [1, "products-table"], [3, "inactive-row", 4, "ngFor", "ngForOf"], [1, "product-thumb"], [3, "src", "alt", "error", 4, "ngIf"], ["class", "no-image", 4, "ngIf"], [1, "product-name"], [1, "product-desc"], [1, "category-tag"], [1, "price-cell"], [1, "status-toggle", 3, "click"], [1, "actions-cell"], [1, "btn-icon", "edit", 3, "click"], ["width", "15", "height", "15", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "btn-icon", "delete", 3, "click"], [3, "error", "src", "alt"], [1, "no-image"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2"], ["cx", "8.5", "cy", "8.5", "r", "1.5"], ["points", "21 15 16 10 5 21"], [1, "entradas-date-bar"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "entrada-add-row"], ["type", "text", "placeholder", "Ej: Caldo de gallina, Ensalada rusa...", "maxlength", "80", 1, "form-input", "entrada-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-add", 3, "click", "disabled"], ["class", "form-error", 4, "ngIf"], ["class", "entradas-list", 4, "ngIf"], [1, "form-error"], [1, "entradas-list"], ["class", "entrada-item", 4, "ngFor", "ngForOf"], [1, "entrada-item"], [4, "ngIf"], [1, "entrada-edit-row"], ["type", "text", "autofocus", "", 1, "form-input", "entrada-input", 3, "ngModelChange", "keyup.enter", "keyup.escape", "ngModel"], [1, "btn-save-small", 3, "click"], [1, "btn-cancel-small", 3, "click"], [1, "entrada-info"], [1, "entrada-dot"], [1, "entrada-name"], [1, "entrada-actions"], [2, "font-size", "12px", "color", "#aaa"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M18 6L6 18M6 6l12 12"], [1, "modal-body"], [1, "form-group"], ["type", "text", "placeholder", "Ej: Guisos, Fritos, Mariscos...", "autofocus", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Descripci\xF3n breve", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 1, "form-input", "small", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [1, "modal", "modal-wide", 3, "click"], [1, "modal-body", "modal-two-col"], [1, "form-col"], ["type", "text", "placeholder", "Ej: Ceviche mixto", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ingredientes o descripci\xF3n", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "number", "min", "0", "step", "0.50", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-input", 3, "ngModelChange", "ngModel"], ["disabled", "", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "image-preview-wrap", 4, "ngIf"], [1, "unsplash-col"], [1, "unsplash-label"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z"], [1, "unsplash-search"], ["type", "text", "placeholder", "Buscar...", 1, "form-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-search", 3, "click", "disabled"], ["class", "unsplash-grid", 4, "ngIf"], ["class", "unsplash-empty", 4, "ngIf"], ["class", "unsplash-hint", 4, "ngIf"], ["class", "unsplash-credit", 4, "ngIf"], [3, "value"], [1, "image-preview-wrap"], [1, "image-preview"], ["alt", "preview", 3, "src"], [1, "remove-image", 3, "click"], [1, "unsplash-grid"], ["class", "unsplash-photo", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "unsplash-photo", 3, "click"], [3, "src", "alt"], ["class", "photo-overlay", 4, "ngIf"], [1, "photo-overlay"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "white"], ["d", "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"], [1, "unsplash-empty"], [1, "unsplash-hint"], [1, "unsplash-credit"], ["href", "https://unsplash.com", "target", "_blank"], [1, "modal", "modal-small", 3, "click"], [1, "modal-header", "danger"], [1, "delete-message"], [1, "btn-delete", 3, "click"]], template: function MenusComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Gesti\xF3n de Men\xFAs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Administra categor\xEDas, platos y entradas del restaurante");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function MenusComponent_Template_button_click_8_listener() {
        return ctx.activeTab = "categories";
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 6);
      \u0275\u0275element(10, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Categor\xEDas ");
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "span", 8);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "button", 5);
      \u0275\u0275listener("click", function MenusComponent_Template_button_click_14_listener() {
        return ctx.activeTab = "products";
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(15, "svg", 6);
      \u0275\u0275element(16, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Platos ");
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "span", 8);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 5);
      \u0275\u0275listener("click", function MenusComponent_Template_button_click_20_listener() {
        return ctx.activeTab = "entradas";
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 6);
      \u0275\u0275element(22, "path", 10)(23, "path", 11)(24, "line", 12)(25, "line", 13)(26, "line", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " Entradas del d\xEDa ");
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "span", 8);
      \u0275\u0275text(29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(30, MenusComponent_div_30_Template, 9, 2, "div", 15)(31, MenusComponent_div_31_Template, 9, 2, "div", 15)(32, MenusComponent_div_32_Template, 16, 7, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(33, MenusComponent_div_33_Template, 27, 7, "div", 16)(34, MenusComponent_div_34_Template, 50, 18, "div", 16)(35, MenusComponent_div_35_Template, 17, 2, "div", 16);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275classProp("active", ctx.activeTab === "categories");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.categories.length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "products");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.products.length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "entradas");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.entradas.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "categories");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "products");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "entradas");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCategoryModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showProductModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deleteConfirm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, MinValidator, NgModel, HttpClientModule], styles: ['\n\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.menus-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n  background: #f4f4f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111;\n  margin: 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  margin-top: 2px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  color: #888;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: -1px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #111;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #f97316;\n  border-bottom-color: #f97316;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #888;\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 999px;\n  font-weight: 600;\n}\n.tab-btn.active[_ngcontent-%COMP%]   .tab-badge[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #f97316;\n}\n.section-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1.25rem;\n}\n.btn-add[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.btn-add.small[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 8px 14px;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1rem;\n}\n.category-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ebebeb;\n  border-radius: 12px;\n  padding: 1.25rem;\n  position: relative;\n  transition: box-shadow 0.2s, border-color 0.2s;\n}\n.category-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  border-color: #f97316;\n}\n.card-order-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: #fff7ed;\n  color: #f97316;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.card-body[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111;\n  margin: 0 0 4px;\n}\n.card-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin: 0 0 10px;\n}\n.meta-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #666;\n  background: #f3f4f6;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-icon.edit[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.btn-icon.edit[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n}\n.btn-icon.delete[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.btn-icon.delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.products-table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #ebebeb;\n  overflow: hidden;\n}\n.products-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.products-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.products-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 16px;\n  color: #888;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.products-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f3f3;\n  transition: background 0.15s;\n}\n.products-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.products-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.products-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  vertical-align: middle;\n}\n.inactive-row[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.product-thumb[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 44px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.product-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.no-image[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.product-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111;\n  font-size: 14px;\n}\n.product-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  margin-top: 2px;\n}\n.category-tag[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #ea580c;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.price-cell[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #111;\n}\n.status-toggle[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: 999px;\n  border: none;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: #fee2e2;\n  color: #991b1b;\n}\n.status-toggle.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #ccc;\n  grid-column: 1 / -1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #aaa;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  width: 100%;\n  max-width: 480px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n  animation: _ngcontent-%COMP%_modalIn 0.2s ease;\n}\n.modal-wide[_ngcontent-%COMP%] {\n  max-width: 820px;\n}\n.modal-small[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111;\n  margin: 0;\n}\n.modal-header.danger[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #aaa;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  border-radius: 6px;\n  transition: background 0.2s, color 0.2s;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #555;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.modal-two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n@media (max-width: 640px) {\n  .modal-two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .modal-wide[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px 20px;\n  border-top: 1px solid #f0f0f0;\n}\n.form-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 6px;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fafafa;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  color: #111;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.2s;\n  box-sizing: border-box;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #f97316;\n  background: #fff;\n}\nselect.form-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.form-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n  padding: 10px 12px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-top: 8px;\n}\n.image-preview-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.image-preview-wrap[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 6px;\n}\n.image-preview[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  height: 110px;\n  border: 1px solid #e5e7eb;\n}\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.remove-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  background: rgba(0, 0, 0, 0.55);\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  font-size: 12px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.unsplash-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.unsplash-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n}\n.unsplash-search[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.unsplash-search[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.btn-search[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  color: #555;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.2s;\n}\n.btn-search[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.btn-search[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.unsplash-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n  max-height: 260px;\n  overflow-y: auto;\n}\n.unsplash-photo[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: border-color 0.15s;\n  aspect-ratio: 4/3;\n}\n.unsplash-photo[_ngcontent-%COMP%]:hover {\n  border-color: #f97316;\n}\n.unsplash-photo.selected[_ngcontent-%COMP%] {\n  border-color: #f97316;\n}\n.unsplash-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.photo-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(249, 115, 22, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.unsplash-hint[_ngcontent-%COMP%], \n.unsplash-empty[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #aaa;\n  text-align: center;\n  padding: 1.5rem;\n  background: #f9fafb;\n  border-radius: 8px;\n  border: 1px dashed #e5e7eb;\n}\n.unsplash-credit[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #bbb;\n  text-align: right;\n  margin: 0;\n}\n.unsplash-credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #aaa;\n  text-decoration: none;\n}\n.unsplash-credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f97316;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  color: #555;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  border: none;\n  color: white;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #dc2626;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.delete-message[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 14px;\n  line-height: 1.6;\n  margin: 0;\n}\n.delete-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111;\n}\n@media (max-width: 600px) {\n  .menus-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.entradas-date-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 8px 14px;\n  margin-bottom: 16px;\n}\n.entradas-date-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  flex-shrink: 0;\n}\n.entrada-add-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.entrada-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.entradas-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 16px;\n}\n.entrada-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 12px 16px;\n  transition: box-shadow 0.15s;\n}\n.entrada-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.entrada-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.entrada-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #059669;\n  flex-shrink: 0;\n}\n.entrada-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.entrada-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.entrada-edit-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n}\n.btn-save-small[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  background: #059669;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-save-small[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.btn-cancel-small[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-cancel-small[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n/*# sourceMappingURL=menus.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenusComponent, [{
    type: Component,
    args: [{ selector: "app-menus", standalone: true, imports: [CommonModule, FormsModule, HttpClientModule], template: `<div class="menus-page">\r
\r
  <!-- HEADER -->\r
  <div class="page-header">\r
    <div>\r
      <h1 class="page-title">Gesti\xF3n de Men\xFAs</h1>\r
      <p class="page-subtitle">Administra categor\xEDas, platos y entradas del restaurante</p>\r
    </div>\r
  </div>\r
\r
  <!-- TABS -->\r
  <div class="tabs">\r
    <button class="tab-btn" [class.active]="activeTab === 'categories'" (click)="activeTab = 'categories'">\r
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>\r
      Categor\xEDas\r
      <span class="tab-badge">{{ categories.length }}</span>\r
    </button>\r
    <button class="tab-btn" [class.active]="activeTab === 'products'" (click)="activeTab = 'products'">\r
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\r
      Platos\r
      <span class="tab-badge">{{ products.length }}</span>\r
    </button>\r
    <button class="tab-btn" [class.active]="activeTab === 'entradas'" (click)="activeTab = 'entradas'">\r
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>\r
      Entradas del d\xEDa\r
      <span class="tab-badge">{{ entradas.length }}</span>\r
    </button>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TAB: CATEGOR\xCDAS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="activeTab === 'categories'" class="tab-content">\r
    <div class="section-actions">\r
      <button class="btn-add" (click)="openCategoryModal()">\r
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>\r
        Nueva Categor\xEDa\r
      </button>\r
    </div>\r
\r
    <div class="cards-grid">\r
      <div class="category-card" *ngFor="let cat of categories">\r
        <div class="card-order-badge">#{{ cat.sortOrder }}</div>\r
        <div class="card-body">\r
          <h3 class="card-title">{{ cat.name }}</h3>\r
          <p class="card-desc">{{ cat.description || 'Sin descripci\xF3n' }}</p>\r
          <div class="card-meta">\r
            <span class="meta-pill">\r
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>\r
              {{ cat.productCount }} plato{{ cat.productCount !== 1 ? 's' : '' }}\r
            </span>\r
          </div>\r
        </div>\r
        <div class="card-actions">\r
          <button class="btn-icon edit" (click)="openCategoryModal(cat)" title="Editar">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>\r
          </button>\r
          <button class="btn-icon delete" (click)="confirmDelete('category', cat.id, cat.name)" title="Eliminar">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <div class="empty-state" *ngIf="categories.length === 0">\r
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>\r
        <p>No hay categor\xEDas a\xFAn</p>\r
        <button class="btn-add small" (click)="openCategoryModal()">Crear primera categor\xEDa</button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TAB: PLATOS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="activeTab === 'products'" class="tab-content">\r
    <div class="section-actions">\r
      <button class="btn-add" (click)="openProductModal()">\r
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>\r
        Nuevo Plato\r
      </button>\r
    </div>\r
\r
    <div class="products-table-wrap">\r
      <table class="products-table" *ngIf="products.length > 0">\r
        <thead>\r
          <tr>\r
            <th>Imagen</th>\r
            <th>Nombre</th>\r
            <th>Categor\xEDa</th>\r
            <th>Precio</th>\r
            <th>Estado</th>\r
            <th>Acciones</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let p of products" [class.inactive-row]="!p.isActive">\r
            <td>\r
              <div class="product-thumb">\r
                <img *ngIf="p.imageUrl" [src]="p.imageUrl" [alt]="p.name" (error)="p.imageUrl = ''">\r
                <div class="no-image" *ngIf="!p.imageUrl">\r
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>\r
                </div>\r
              </div>\r
            </td>\r
            <td>\r
              <div class="product-name">{{ p.name }}</div>\r
              <div class="product-desc">{{ p.description }}</div>\r
            </td>\r
            <td><span class="category-tag">{{ p.categoryName }}</span></td>\r
            <td class="price-cell">S/. {{ p.price.toFixed(2) }}</td>\r
            <td>\r
              <button class="status-toggle" [class.active]="p.isActive" (click)="toggleActive(p)">\r
                {{ p.isActive ? 'Activo' : 'Inactivo' }}\r
              </button>\r
            </td>\r
            <td>\r
              <div class="actions-cell">\r
                <button class="btn-icon edit" (click)="openProductModal(p)">\r
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>\r
                </button>\r
                <button class="btn-icon delete" (click)="confirmDelete('product', p.id, p.name)">\r
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
\r
      <div class="empty-state" *ngIf="products.length === 0">\r
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>\r
        <p>No hay platos registrados</p>\r
        <button class="btn-add small" (click)="openProductModal()">Agregar primer plato</button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TAB: ENTRADAS DEL D\xCDA \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div *ngIf="activeTab === 'entradas'" class="tab-content">\r
\r
    <!-- Fecha de hoy -->\r
    <div class="entradas-date-bar">\r
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/>\r
      </svg>\r
      <span>{{ getTodayLabel() }}</span>\r
    </div>\r
\r
    <!-- Agregar nueva entrada -->\r
    <div class="entrada-add-row">\r
      <input\r
        type="text"\r
        [(ngModel)]="newEntradaName"\r
        placeholder="Ej: Caldo de gallina, Ensalada rusa..."\r
        class="form-input entrada-input"\r
        (keyup.enter)="addEntrada()"\r
        maxlength="80">\r
      <button class="btn-add" (click)="addEntrada()" [disabled]="entradaLoading">\r
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>\r
        {{ entradaLoading ? 'Agregando...' : 'Agregar' }}\r
      </button>\r
    </div>\r
    <div class="form-error" *ngIf="entradaError">{{ entradaError }}</div>\r
\r
    <!-- Lista de entradas del d\xEDa -->\r
    <div class="entradas-list" *ngIf="entradas.length > 0">\r
      <div class="entrada-item" *ngFor="let entrada of entradas">\r
\r
        <!-- Modo edici\xF3n -->\r
        <ng-container *ngIf="editingEntrada?.id === entrada.id">\r
          <div class="entrada-edit-row">\r
            <input\r
              type="text"\r
              [(ngModel)]="editEntradaName"\r
              class="form-input entrada-input"\r
              (keyup.enter)="saveEditEntrada()"\r
              (keyup.escape)="cancelEditEntrada()"\r
              autofocus>\r
            <button class="btn-save-small" (click)="saveEditEntrada()">Guardar</button>\r
            <button class="btn-cancel-small" (click)="cancelEditEntrada()">Cancelar</button>\r
          </div>\r
        </ng-container>\r
\r
        <!-- Modo vista -->\r
        <ng-container *ngIf="editingEntrada?.id !== entrada.id">\r
          <div class="entrada-info">\r
            <div class="entrada-dot"></div>\r
            <span class="entrada-name">{{ entrada.name }}</span>\r
          </div>\r
          <div class="entrada-actions">\r
            <button class="btn-icon edit" (click)="startEditEntrada(entrada)" title="Editar">\r
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>\r
            </button>\r
            <button class="btn-icon delete" (click)="deleteEntrada(entrada)" title="Eliminar">\r
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>\r
            </button>\r
          </div>\r
        </ng-container>\r
\r
      </div>\r
    </div>\r
\r
    <!-- Empty state -->\r
    <div class="empty-state" *ngIf="entradas.length === 0">\r
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>\r
      <p>No hay entradas definidas para hoy</p>\r
      <p style="font-size:12px; color:#aaa;">Agrega las entradas que se ofrecer\xE1n hoy</p>\r
    </div>\r
\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL CATEGOR\xCDA \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="modal-overlay" *ngIf="showCategoryModal" (click)="showCategoryModal = false">\r
  <div class="modal" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2>{{ editingCategory ? 'Editar Categor\xEDa' : 'Nueva Categor\xEDa' }}</h2>\r
      <button class="modal-close" (click)="showCategoryModal = false">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>\r
      </button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="form-group">\r
        <label>Nombre *</label>\r
        <input type="text" [(ngModel)]="categoryForm.name" placeholder="Ej: Guisos, Fritos, Mariscos..." class="form-input" autofocus>\r
      </div>\r
      <div class="form-group">\r
        <label>Descripci\xF3n</label>\r
        <input type="text" [(ngModel)]="categoryForm.description" placeholder="Descripci\xF3n breve" class="form-input">\r
      </div>\r
      <div class="form-group">\r
        <label>Orden de aparici\xF3n</label>\r
        <input type="number" [(ngModel)]="categoryForm.sortOrder" min="1" class="form-input small">\r
      </div>\r
      <div class="form-error" *ngIf="categoryError">{{ categoryError }}</div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn-cancel" (click)="showCategoryModal = false">Cancelar</button>\r
      <button class="btn-save" (click)="saveCategory()" [disabled]="loading">\r
        {{ loading ? 'Guardando...' : (editingCategory ? 'Actualizar' : 'Crear') }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL PLATO \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="modal-overlay" *ngIf="showProductModal" (click)="showProductModal = false">\r
  <div class="modal modal-wide" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2>{{ editingProduct ? 'Editar Plato' : 'Nuevo Plato' }}</h2>\r
      <button class="modal-close" (click)="showProductModal = false">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>\r
      </button>\r
    </div>\r
    <div class="modal-body modal-two-col">\r
      <div class="form-col">\r
        <div class="form-group">\r
          <label>Nombre *</label>\r
          <input type="text" [(ngModel)]="productForm.name" placeholder="Ej: Ceviche mixto" class="form-input"\r
            (ngModelChange)="unsplashQuery = $event">\r
        </div>\r
        <div class="form-group">\r
          <label>Descripci\xF3n</label>\r
          <input type="text" [(ngModel)]="productForm.description" placeholder="Ingredientes o descripci\xF3n" class="form-input">\r
        </div>\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label>Precio (S/.) *</label>\r
            <input type="number" [(ngModel)]="productForm.price" min="0" step="0.50" class="form-input">\r
          </div>\r
          <div class="form-group">\r
            <label>Categor\xEDa *</label>\r
            <select [(ngModel)]="productForm.categoryId" class="form-input">\r
              <option [value]="0" disabled>Seleccionar...</option>\r
              <option *ngFor="let cat of categories" [value]="cat.id">{{ cat.name }}</option>\r
            </select>\r
          </div>\r
        </div>\r
        <div class="image-preview-wrap" *ngIf="productForm.imageUrl">\r
          <label>Imagen seleccionada</label>\r
          <div class="image-preview">\r
            <img [src]="productForm.imageUrl" alt="preview">\r
            <button class="remove-image" (click)="productForm.imageUrl = ''">\u2715</button>\r
          </div>\r
        </div>\r
        <div class="form-error" *ngIf="productError">{{ productError }}</div>\r
      </div>\r
      <div class="unsplash-col">\r
        <label class="unsplash-label">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z"/></svg>\r
          Agregar imagen\r
        </label>\r
        <div class="unsplash-search">\r
          <input type="text" [(ngModel)]="unsplashQuery" placeholder="Buscar..." class="form-input"\r
            (keyup.enter)="searchUnsplash()">\r
          <button class="btn-search" (click)="searchUnsplash()" [disabled]="unsplashLoading">\r
            {{ unsplashLoading ? '...' : 'Buscar' }}\r
          </button>\r
        </div>\r
        <div class="unsplash-grid" *ngIf="unsplashResults.length > 0">\r
          <div class="unsplash-photo" *ngFor="let photo of unsplashResults"\r
            [class.selected]="productForm.imageUrl === photo.urls.regular"\r
            (click)="selectPhoto(photo)">\r
            <img [src]="photo.urls.small" [alt]="photo.alt_description">\r
            <div class="photo-overlay" *ngIf="productForm.imageUrl === photo.urls.regular">\r
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>\r
            </div>\r
          </div>\r
        </div>\r
        <div class="unsplash-empty" *ngIf="unsplashSearched && unsplashResults.length === 0 && !unsplashLoading">\r
          No se encontraron im\xE1genes\r
        </div>\r
        <div class="unsplash-hint" *ngIf="!unsplashSearched">\r
          Escribe el nombre del plato y presiona Buscar\r
        </div>\r
        <p class="unsplash-credit" *ngIf="unsplashResults.length > 0">Fotos de <a href="https://unsplash.com" target="_blank">Unsplash</a></p>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn-cancel" (click)="showProductModal = false">Cancelar</button>\r
      <button class="btn-save" (click)="saveProduct()" [disabled]="loading">\r
        {{ loading ? 'Guardando...' : (editingProduct ? 'Actualizar' : 'Crear') }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL CONFIRMAR ELIMINAR \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="modal-overlay" *ngIf="deleteConfirm" (click)="deleteConfirm = null">\r
  <div class="modal modal-small" (click)="$event.stopPropagation()">\r
    <div class="modal-header danger">\r
      <h2>Confirmar eliminaci\xF3n</h2>\r
    </div>\r
    <div class="modal-body">\r
      <p class="delete-message">\r
        \xBFEst\xE1s seguro que deseas eliminar <strong>{{ deleteConfirm?.name }}</strong>?\r
        <span *ngIf="deleteConfirm?.type === 'category'"> Esta acci\xF3n no se puede deshacer si no tiene platos asociados.</span>\r
      </p>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn-cancel" (click)="deleteConfirm = null">Cancelar</button>\r
      <button class="btn-delete" (click)="executeDelete()">Eliminar</button>\r
    </div>\r
  </div>\r
</div>`, styles: ['/* src/app/components/menus/menus.css */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.menus-page {\n  padding: 2rem;\n  min-height: 100vh;\n  background: #f4f4f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111;\n  margin: 0;\n}\n.page-subtitle {\n  font-size: 13px;\n  color: #888;\n  margin-top: 2px;\n}\n.tabs {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 0;\n}\n.tab-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  color: #888;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: -1px;\n}\n.tab-btn:hover {\n  color: #111;\n}\n.tab-btn.active {\n  color: #f97316;\n  border-bottom-color: #f97316;\n}\n.tab-badge {\n  background: #f3f4f6;\n  color: #888;\n  font-size: 11px;\n  padding: 2px 8px;\n  border-radius: 999px;\n  font-weight: 600;\n}\n.tab-btn.active .tab-badge {\n  background: #fff7ed;\n  color: #f97316;\n}\n.section-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1.25rem;\n}\n.btn-add {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.btn-add:hover {\n  opacity: 0.88;\n}\n.btn-add.small {\n  font-size: 13px;\n  padding: 8px 14px;\n}\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1rem;\n}\n.category-card {\n  background: #fff;\n  border: 1px solid #ebebeb;\n  border-radius: 12px;\n  padding: 1.25rem;\n  position: relative;\n  transition: box-shadow 0.2s, border-color 0.2s;\n}\n.category-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);\n  border-color: #f97316;\n}\n.card-order-badge {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: #fff7ed;\n  color: #f97316;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.card-body {\n  margin-bottom: 1rem;\n}\n.card-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #111;\n  margin: 0 0 4px;\n}\n.card-desc {\n  font-size: 12px;\n  color: #888;\n  margin: 0 0 10px;\n}\n.meta-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #666;\n  background: #f3f4f6;\n  padding: 3px 10px;\n  border-radius: 999px;\n}\n.card-actions {\n  display: flex;\n  gap: 6px;\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-icon.edit {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.btn-icon.edit:hover {\n  background: #dbeafe;\n}\n.btn-icon.delete {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.btn-icon.delete:hover {\n  background: #fee2e2;\n}\n.products-table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #ebebeb;\n  overflow: hidden;\n}\n.products-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.products-table thead tr {\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.products-table th {\n  text-align: left;\n  padding: 12px 16px;\n  color: #888;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.products-table tbody tr {\n  border-bottom: 1px solid #f3f3f3;\n  transition: background 0.15s;\n}\n.products-table tbody tr:last-child {\n  border-bottom: none;\n}\n.products-table tbody tr:hover {\n  background: #fafafa;\n}\n.products-table td {\n  padding: 14px 16px;\n  vertical-align: middle;\n}\n.inactive-row {\n  opacity: 0.5;\n}\n.product-thumb {\n  width: 56px;\n  height: 44px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.product-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.no-image {\n  color: #ccc;\n}\n.product-name {\n  font-weight: 600;\n  color: #111;\n  font-size: 14px;\n}\n.product-desc {\n  font-size: 11px;\n  color: #aaa;\n  margin-top: 2px;\n}\n.category-tag {\n  background: #fff7ed;\n  color: #ea580c;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.price-cell {\n  font-weight: 700;\n  color: #111;\n}\n.status-toggle {\n  padding: 4px 12px;\n  border-radius: 999px;\n  border: none;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: #fee2e2;\n  color: #991b1b;\n}\n.status-toggle.active {\n  background: #d1fae5;\n  color: #065f46;\n}\n.actions-cell {\n  display: flex;\n  gap: 6px;\n}\n.empty-state {\n  text-align: center;\n  padding: 3rem;\n  color: #ccc;\n  grid-column: 1 / -1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n.empty-state p {\n  font-size: 14px;\n  color: #aaa;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal {\n  background: #fff;\n  border-radius: 16px;\n  width: 100%;\n  max-width: 480px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n  animation: modalIn 0.2s ease;\n}\n.modal-wide {\n  max-width: 820px;\n}\n.modal-small {\n  max-width: 400px;\n}\n@keyframes modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header h2 {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111;\n  margin: 0;\n}\n.modal-header.danger h2 {\n  color: #dc2626;\n}\n.modal-close {\n  background: none;\n  border: none;\n  color: #aaa;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  border-radius: 6px;\n  transition: background 0.2s, color 0.2s;\n}\n.modal-close:hover {\n  background: #f3f4f6;\n  color: #555;\n}\n.modal-body {\n  padding: 20px 24px;\n}\n.modal-two-col {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n@media (max-width: 640px) {\n  .modal-two-col {\n    grid-template-columns: 1fr;\n  }\n  .modal-wide {\n    max-width: 100%;\n  }\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px 20px;\n  border-top: 1px solid #f0f0f0;\n}\n.form-col {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.form-group {\n  margin-bottom: 14px;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group label {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 6px;\n}\n.form-input {\n  width: 100%;\n  background: #fafafa;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  color: #111;\n  font-size: 14px;\n  outline: none;\n  transition: border-color 0.2s;\n  box-sizing: border-box;\n}\n.form-input:focus {\n  border-color: #f97316;\n  background: #fff;\n}\nselect.form-input {\n  cursor: pointer;\n}\n.form-error {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n  padding: 10px 12px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-top: 8px;\n}\n.image-preview-wrap {\n  margin-bottom: 14px;\n}\n.image-preview-wrap label {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 6px;\n}\n.image-preview {\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n  height: 110px;\n  border: 1px solid #e5e7eb;\n}\n.image-preview img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.remove-image {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  background: rgba(0, 0, 0, 0.55);\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  font-size: 12px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.unsplash-col {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.unsplash-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n}\n.unsplash-search {\n  display: flex;\n  gap: 8px;\n}\n.unsplash-search .form-input {\n  flex: 1;\n}\n.btn-search {\n  padding: 10px 14px;\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  color: #555;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.2s;\n}\n.btn-search:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.btn-search:disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n.unsplash-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 6px;\n  max-height: 260px;\n  overflow-y: auto;\n}\n.unsplash-photo {\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: border-color 0.15s;\n  aspect-ratio: 4/3;\n}\n.unsplash-photo:hover {\n  border-color: #f97316;\n}\n.unsplash-photo.selected {\n  border-color: #f97316;\n}\n.unsplash-photo img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.photo-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(249, 115, 22, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.unsplash-hint,\n.unsplash-empty {\n  font-size: 12px;\n  color: #aaa;\n  text-align: center;\n  padding: 1.5rem;\n  background: #f9fafb;\n  border-radius: 8px;\n  border: 1px dashed #e5e7eb;\n}\n.unsplash-credit {\n  font-size: 11px;\n  color: #bbb;\n  text-align: right;\n  margin: 0;\n}\n.unsplash-credit a {\n  color: #aaa;\n  text-decoration: none;\n}\n.unsplash-credit a:hover {\n  color: #f97316;\n}\n.btn-cancel {\n  padding: 10px 20px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  color: #555;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-cancel:hover {\n  background: #f3f4f6;\n}\n.btn-save {\n  padding: 10px 24px;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  border: none;\n  color: white;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.2s;\n}\n.btn-save:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.btn-save:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-delete {\n  padding: 10px 20px;\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #dc2626;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-delete:hover {\n  background: #fee2e2;\n}\n.delete-message {\n  color: #555;\n  font-size: 14px;\n  line-height: 1.6;\n  margin: 0;\n}\n.delete-message strong {\n  color: #111;\n}\n@media (max-width: 600px) {\n  .menus-page {\n    padding: 1rem;\n  }\n  .cards-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.entradas-date-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #6b7280;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 8px 14px;\n  margin-bottom: 16px;\n}\n.entradas-date-bar svg {\n  opacity: 0.5;\n  flex-shrink: 0;\n}\n.entrada-add-row {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.entrada-input {\n  flex: 1;\n}\n.entradas-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 16px;\n}\n.entrada-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 12px 16px;\n  transition: box-shadow 0.15s;\n}\n.entrada-item:hover {\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.entrada-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.entrada-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #059669;\n  flex-shrink: 0;\n}\n.entrada-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: #111827;\n}\n.entrada-actions {\n  display: flex;\n  gap: 6px;\n}\n.entrada-edit-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n}\n.btn-save-small {\n  padding: 6px 14px;\n  background: #059669;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-save-small:hover {\n  opacity: 0.88;\n}\n.btn-cancel-small {\n  padding: 6px 14px;\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.btn-cancel-small:hover {\n  background: #e5e7eb;\n}\n/*# sourceMappingURL=menus.css.map */\n'] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenusComponent, { className: "MenusComponent", filePath: "app/components/menus/menus.ts", lineNumber: 49 });
})();
export {
  MenusComponent
};
//# sourceMappingURL=chunk-EWS5UDWG.js.map
