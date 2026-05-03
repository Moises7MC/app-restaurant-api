import {
  environment
} from "./chunk-NMCGB4Y3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-3HTVTBBE.js";
import {
  CommonModule,
  HttpClient,
  HttpClientModule,
  NgForOf,
  NgIf
} from "./chunk-IP2V25EC.js";
import {
  Component,
  __async,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XHDJFZT2.js";

// src/app/components/VentaDirecta/ventaDirecta.ts
function VentaDirectaComponent_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275property("value", m_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r1);
  }
}
function VentaDirectaComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
  }
}
function VentaDirectaComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function VentaDirectaComponent_button_21_Template_button_click_0_listener() {
      const cat_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCategory(cat_r4.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.selectedCategoryId === cat_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r4.name, " ");
  }
}
function VentaDirectaComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function VentaDirectaComponent_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectCategory(-1));
    });
    \u0275\u0275text(1, " \u{1F963} Entradas ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.selectedCategoryId === -1);
  }
}
function VentaDirectaComponent_div_23_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", product_r7.imageUrl, \u0275\u0275sanitizeUrl)("alt", product_r7.name);
  }
}
function VentaDirectaComponent_div_23_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getQuantity(product_r7.id));
  }
}
function VentaDirectaComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("click", function VentaDirectaComponent_div_23_div_1_Template_div_click_0_listener() {
      const product_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToCart(product_r7));
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275template(2, VentaDirectaComponent_div_23_div_1_img_2_Template, 1, 2, "img", 43);
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275text(4, "\u{1F37D}\uFE0F");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 45)(6, "span", 46);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, VentaDirectaComponent_div_23_div_1_div_10_Template, 2, 1, "div", 48);
    \u0275\u0275elementStart(11, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 50);
    \u0275\u0275element(13, "line", 51)(14, "line", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", product_r7.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", product_r7.imageUrl ? "none" : "flex");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/. ", product_r7.price.toFixed(2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getQuantity(product_r7.id) > 0);
  }
}
function VentaDirectaComponent_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, "Sin productos para mostrar");
    \u0275\u0275elementEnd();
  }
}
function VentaDirectaComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, VentaDirectaComponent_div_23_div_1_Template, 15, 6, "div", 39)(2, VentaDirectaComponent_div_23_div_2_Template, 2, 0, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredProducts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.filteredProducts.length === 0);
  }
}
function VentaDirectaComponent_div_24_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entrada_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getEntradasQuantity(entrada_r9.id), " ");
  }
}
function VentaDirectaComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function VentaDirectaComponent_div_24_div_1_Template_div_click_0_listener() {
      const entrada_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addEntrada(entrada_r9));
    });
    \u0275\u0275elementStart(1, "div", 42)(2, "div", 58);
    \u0275\u0275text(3, "\u{1F963}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 45)(5, "span", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 59);
    \u0275\u0275text(8, "Entrada del d\xEDa");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, VentaDirectaComponent_div_24_div_1_div_9_Template, 2, 1, "div", 60);
    \u0275\u0275elementStart(10, "div", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 50);
    \u0275\u0275element(12, "line", 51)(13, "line", 52);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entrada_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(entrada_r9.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.getEntradasQuantity(entrada_r9.id) > 0);
  }
}
function VentaDirectaComponent_div_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275text(1, "No hay entradas del d\xEDa registradas");
    \u0275\u0275elementEnd();
  }
}
function VentaDirectaComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, VentaDirectaComponent_div_24_div_1_Template, 14, 2, "div", 56)(2, VentaDirectaComponent_div_24_div_2_Template, 2, 0, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.entradas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.entradas.length === 0);
  }
}
function VentaDirectaComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function VentaDirectaComponent_button_34_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearCart());
    });
    \u0275\u0275text(1, "Limpiar");
    \u0275\u0275elementEnd();
  }
}
function VentaDirectaComponent_div_35_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70)(4, "button", 71);
    \u0275\u0275listener("click", function VentaDirectaComponent_div_35_div_3_Template_button_click_4_listener() {
      const e_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeEntrada(e_r12.entrada.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 72);
    \u0275\u0275element(6, "line", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 73);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 71);
    \u0275\u0275listener("click", function VentaDirectaComponent_div_35_div_3_Template_button_click_9_listener() {
      const e_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addEntrada(e_r12.entrada));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 72);
    \u0275\u0275element(11, "line", 51)(12, "line", 52);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const e_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r12.entrada.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(e_r12.quantity);
  }
}
function VentaDirectaComponent_div_35_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 74);
  }
}
function VentaDirectaComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275text(2, "\u{1F963} Entradas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, VentaDirectaComponent_div_35_div_3_Template, 13, 2, "div", 66)(4, VentaDirectaComponent_div_35_div_4_Template, 1, 0, "div", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.selectedEntradas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cart.length > 0);
  }
}
function VentaDirectaComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70)(4, "button", 71);
    \u0275\u0275listener("click", function VentaDirectaComponent_div_36_div_1_Template_button_click_4_listener() {
      const item_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeOne(item_r14.product.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 72);
    \u0275\u0275element(6, "line", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 73);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 71);
    \u0275\u0275listener("click", function VentaDirectaComponent_div_36_div_1_Template_button_click_9_listener() {
      const item_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addToCart(item_r14.product));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 72);
    \u0275\u0275element(11, "line", 51)(12, "line", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "span", 77);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 78);
    \u0275\u0275listener("click", function VentaDirectaComponent_div_36_div_1_Template_button_click_15_listener() {
      const item_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeItem(item_r14.product.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 79);
    \u0275\u0275element(17, "polyline", 80)(18, "path", 81)(19, "path", 82)(20, "path", 83);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.product.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(item_r14.quantity);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/. ", (item_r14.product.price * item_r14.quantity).toFixed(2));
  }
}
function VentaDirectaComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, VentaDirectaComponent_div_36_div_1_Template, 21, 3, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cart);
  }
}
function VentaDirectaComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 85);
    \u0275\u0275element(2, "circle", 25)(3, "circle", 26)(4, "path", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Agrega productos al pedido");
    \u0275\u0275elementEnd()();
  }
}
function VentaDirectaComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 87)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 88);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 89);
    \u0275\u0275listener("click", function VentaDirectaComponent_div_38_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openConfirm());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 24);
    \u0275\u0275element(8, "path", 90)(9, "path", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Enviar a cocina ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.totalItems, " producto", ctx_r1.totalItems !== 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/. ", ctx_r1.total.toFixed(2));
  }
}
function VentaDirectaComponent_div_39_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "span", 103);
    \u0275\u0275text(2, "\u{1F963}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 104);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.entradasText);
  }
}
function VentaDirectaComponent_div_39_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "span", 105);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 106);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 107);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r17.quantity, "x");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r17.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/. ", (item_r17.product.price * item_r17.quantity).toFixed(2));
  }
}
function VentaDirectaComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92);
    \u0275\u0275listener("click", function VentaDirectaComponent_div_39_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showConfirmModal = false);
    });
    \u0275\u0275elementStart(1, "div", 93);
    \u0275\u0275listener("click", function VentaDirectaComponent_div_39_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Confirmar pedido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 94);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 95);
    \u0275\u0275template(7, VentaDirectaComponent_div_39_div_7_Template, 5, 1, "div", 96)(8, VentaDirectaComponent_div_39_div_8_Template, 7, 3, "div", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 98)(10, "span");
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 99)(15, "button", 100);
    \u0275\u0275listener("click", function VentaDirectaComponent_div_39_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showConfirmModal = false);
    });
    \u0275\u0275text(16, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 101);
    \u0275\u0275listener("click", function VentaDirectaComponent_div_39_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmarYEnviar());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Para llevar \xB7 ", ctx_r1.mealType);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.entradasText);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.cart);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/. ", ctx_r1.total.toFixed(2));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.procesando);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.procesando ? "Enviando..." : "\u2713 Enviar a cocina", " ");
  }
}
function VentaDirectaComponent_div_40_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 114);
    \u0275\u0275listener("click", function VentaDirectaComponent_div_40_button_9_Template_button_click_0_listener() {
      const m_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedPaymentMethod = m_r20);
    });
    \u0275\u0275elementStart(1, "span", 115);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.selectedPaymentMethod === m_r20);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getPaymentIcon(m_r20));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r20);
  }
}
function VentaDirectaComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109)(2, "div", 110);
    \u0275\u0275text(3, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Pedido enviado a cocina");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 94);
    \u0275\u0275text(7, "Selecciona el m\xE9todo de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 111);
    \u0275\u0275template(9, VentaDirectaComponent_div_40_button_9_Template, 5, 4, "button", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 98)(11, "span");
    \u0275\u0275text(12, "Total a cobrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 113);
    \u0275\u0275listener("click", function VentaDirectaComponent_div_40_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cobrarOrden());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/. ", ctx_r1.total.toFixed(2));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.procesando);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.procesando ? "Procesando..." : "\u{1F4B5} Cobrar S/. " + ctx_r1.total.toFixed(2), " ");
  }
}
var VentaDirectaComponent = class _VentaDirectaComponent {
  http;
  apiUrl = environment.apiUrl;
  categories = [];
  products = [];
  filteredProducts = [];
  cart = [];
  // Agrega estas propiedades a la clase:
  entradas = [];
  selectedEntradas = [];
  showEntradasTab = false;
  selectedCategoryId = null;
  searchQuery = "";
  mealType = "Almuerzo";
  mealTypes = ["Desayuno", "Almuerzo", "Cena"];
  // Modales
  showConfirmModal = false;
  showCobrarModal = false;
  selectedPaymentMethod = "Efectivo";
  paymentMethods = ["Efectivo", "Tarjeta", "Yape", "Plin"];
  procesando = false;
  ordenCreadaId = null;
  successMessage = "";
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadCategories();
    this.loadProducts();
    this.loadEntradas();
  }
  loadCategories() {
    this.http.get(`${this.apiUrl}/category`).subscribe({
      next: (data) => this.categories = data,
      error: (e) => console.error(e)
    });
  }
  loadProducts() {
    this.http.get(`${this.apiUrl}/product`).subscribe({
      next: (data) => {
        this.products = data.filter((p) => p.isAvailable !== false);
        this.applyFilters();
      },
      error: (e) => console.error(e)
    });
  }
  applyFilters() {
    let result = this.products;
    if (this.selectedCategoryId !== null) {
      result = result.filter((p) => p.categoryId === this.selectedCategoryId);
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q));
    }
    this.filteredProducts = result;
  }
  selectCategory(id) {
    this.selectedCategoryId = id;
    this.applyFilters();
  }
  // Agrega este método:
  loadEntradas() {
    this.http.get(`${this.apiUrl}/entrada/today`).subscribe({
      next: (data) => {
        this.entradas = data.filter((e) => e.isActive);
        this.showEntradasTab = this.entradas.length > 0;
      },
      error: () => {
      }
    });
  }
  getEntradasQuantity(id) {
    return this.selectedEntradas.find((e) => e.entrada.id === id)?.quantity ?? 0;
  }
  addEntrada(entrada) {
    const ex = this.selectedEntradas.find((e) => e.entrada.id === entrada.id);
    if (ex)
      ex.quantity++;
    else
      this.selectedEntradas.push({ entrada, quantity: 1 });
  }
  removeEntrada(id) {
    const idx = this.selectedEntradas.findIndex((e) => e.entrada.id === id);
    if (idx === -1)
      return;
    if (this.selectedEntradas[idx].quantity > 1)
      this.selectedEntradas[idx].quantity--;
    else
      this.selectedEntradas.splice(idx, 1);
  }
  get entradasText() {
    if (this.selectedEntradas.length === 0)
      return null;
    return this.selectedEntradas.map((e) => `${e.quantity}x ${e.entrada.name}`).join(", ");
  }
  // ── Carrito ──────────────────────────────────────────────
  addToCart(product) {
    const existing = this.cart.find((i) => i.product.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }
  removeOne(productId) {
    const idx = this.cart.findIndex((i) => i.product.id === productId);
    if (idx === -1)
      return;
    if (this.cart[idx].quantity > 1) {
      this.cart[idx].quantity--;
    } else {
      this.cart.splice(idx, 1);
    }
  }
  removeItem(productId) {
    this.cart = this.cart.filter((i) => i.product.id !== productId);
  }
  getQuantity(productId) {
    return this.cart.find((i) => i.product.id === productId)?.quantity ?? 0;
  }
  get total() {
    return this.cart.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
  }
  get totalItems() {
    return this.cart.reduce((sum, i) => sum + i.quantity, 0);
  }
  clearCart() {
    this.cart = [];
    this.selectedEntradas = [];
  }
  // ── Flujo de venta ───────────────────────────────────────
  openConfirm() {
    if (this.cart.length === 0)
      return;
    this.showConfirmModal = true;
  }
  confirmarYEnviar() {
    return __async(this, null, function* () {
      this.procesando = true;
      try {
        const body = {
          tableNumber: 0,
          mealType: this.mealType,
          waiterName: "Caja",
          status: "Enviado a cocina",
          total: this.total,
          entradas: this.entradasText,
          items: this.cart.map((i) => ({
            productId: i.product.id,
            quantity: i.quantity,
            unitPrice: i.product.price
          }))
        };
        const orden = yield this.http.post(`${this.apiUrl}/order`, body).toPromise();
        this.ordenCreadaId = orden.id;
        this.showConfirmModal = false;
        this.showCobrarModal = true;
      } catch (e) {
        alert("Error al crear la orden");
      } finally {
        this.procesando = false;
      }
    });
  }
  cobrarOrden() {
    return __async(this, null, function* () {
      if (!this.ordenCreadaId)
        return;
      this.procesando = true;
      try {
        yield this.http.post(`${this.apiUrl}/transaction/cobrar`, {
          orderId: this.ordenCreadaId,
          paymentMethod: this.selectedPaymentMethod
        }).toPromise();
        this.successMessage = `\u2713 Venta registrada \xB7 ${this.selectedPaymentMethod} \xB7 S/. ${this.total.toFixed(2)}`;
        this.showCobrarModal = false;
        this.clearCart();
        this.ordenCreadaId = null;
        this.selectedPaymentMethod = "Efectivo";
        setTimeout(() => this.successMessage = "", 4e3);
      } catch (e) {
        alert("Error al cobrar la orden");
      } finally {
        this.procesando = false;
      }
    });
  }
  // ── Helpers ──────────────────────────────────────────────
  getPaymentIcon(method) {
    const icons = {
      "Efectivo": "\u{1F4B5}",
      "Tarjeta": "\u{1F4B3}",
      "Yape": "\u{1F4F1}",
      "Plin": "\u{1F4F2}"
    };
    return icons[method] || "\u{1F4B0}";
  }
  getCategoryName(id) {
    if (id === null)
      return "Todos";
    return this.categories.find((c) => c.id === id)?.name ?? "";
  }
  static \u0275fac = function VentaDirectaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VentaDirectaComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VentaDirectaComponent, selectors: [["app-venta-directa"]], decls: 41, vars: 17, consts: [[1, "vd-page"], [1, "vd-topbar"], [1, "vd-topbar-left"], [1, "vd-badge-llevar"], [1, "vd-topbar-right"], [1, "vd-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "vd-search-wrap"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Buscar producto...", 3, "ngModelChange", "input", "ngModel"], ["class", "vd-toast", 4, "ngIf"], [1, "vd-body"], [1, "vd-left"], [1, "vd-cats"], [1, "vd-cat", 3, "click"], ["class", "vd-cat", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "vd-cat vd-cat-entradas", 3, "active", "click", 4, "ngIf"], ["class", "vd-products", 4, "ngIf"], [1, "vd-right"], [1, "vd-cart"], [1, "vd-cart-header"], [1, "vd-cart-title"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], ["class", "vd-clear-btn", 3, "click", 4, "ngIf"], ["class", "vd-cart-entradas", 4, "ngIf"], ["class", "vd-cart-items", 4, "ngIf"], ["class", "vd-cart-empty", 4, "ngIf"], ["class", "vd-cart-footer", 4, "ngIf"], ["class", "vd-modal-overlay", 3, "click", 4, "ngIf"], ["class", "vd-modal-overlay", 4, "ngIf"], [3, "value"], [1, "vd-toast"], [1, "vd-cat", "vd-cat-entradas", 3, "click"], [1, "vd-products"], ["class", "vd-product-card", 3, "click", 4, "ngFor", "ngForOf"], ["class", "vd-empty-products", 4, "ngIf"], [1, "vd-product-card", 3, "click"], [1, "vd-product-img"], ["onerror", "this.style.display='none'; this.nextElementSibling.style.display='flex'", 3, "src", "alt", 4, "ngIf"], [1, "vd-product-emoji"], [1, "vd-product-info"], [1, "vd-product-name"], [1, "vd-product-price"], ["class", "vd-product-qty", 4, "ngIf"], [1, "vd-product-add"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["onerror", "this.style.display='none'; this.nextElementSibling.style.display='flex'", 3, "src", "alt"], [1, "vd-product-qty"], [1, "vd-empty-products"], ["class", "vd-product-card vd-product-card-entrada", 3, "click", 4, "ngFor", "ngForOf"], [1, "vd-product-card", "vd-product-card-entrada", 3, "click"], [1, "vd-product-emoji", 2, "display", "flex"], [1, "vd-product-price", "vd-entrada-label"], ["class", "vd-product-qty vd-product-qty-entrada", 4, "ngIf"], [1, "vd-product-add", "vd-product-add-entrada"], [1, "vd-product-qty", "vd-product-qty-entrada"], [1, "vd-clear-btn", 3, "click"], [1, "vd-cart-entradas"], [1, "vd-cart-entradas-label"], ["class", "vd-cart-item", 4, "ngFor", "ngForOf"], ["class", "vd-cart-entradas-divider", 4, "ngIf"], [1, "vd-cart-item"], [1, "vd-cart-item-name", 2, "color", "#7c3aed"], [1, "vd-cart-item-controls"], [1, "vd-qty-btn", 3, "click"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], [1, "vd-qty"], [1, "vd-cart-entradas-divider"], [1, "vd-cart-items"], [1, "vd-cart-item-name"], [1, "vd-item-total"], [1, "vd-remove-btn", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"], ["d", "M10 11v6"], ["d", "M14 11v6"], [1, "vd-cart-empty"], ["width", "40", "height", "40", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#ccc", "stroke-width", "1.5"], [1, "vd-cart-footer"], [1, "vd-total-row"], [1, "vd-total-amount"], [1, "vd-btn-enviar", 3, "click"], ["d", "M22 2L11 13"], ["d", "M22 2L15 22 11 13 2 9l20-7z"], [1, "vd-modal-overlay", 3, "click"], [1, "vd-modal", 3, "click"], [1, "vd-modal-sub"], [1, "vd-modal-items"], ["class", "vd-modal-item", 4, "ngIf"], ["class", "vd-modal-item", 4, "ngFor", "ngForOf"], [1, "vd-modal-total"], [1, "vd-modal-actions"], [1, "vd-btn-cancel", 3, "click"], [1, "vd-btn-confirm", 3, "click", "disabled"], [1, "vd-modal-item"], [1, "vd-modal-qty", 2, "background", "#ede9fe", "color", "#7c3aed"], [1, "vd-modal-name", 2, "color", "#7c3aed", "font-style", "italic"], [1, "vd-modal-qty"], [1, "vd-modal-name"], [1, "vd-modal-price"], [1, "vd-modal-overlay"], [1, "vd-modal"], [1, "vd-modal-success-icon"], [1, "vd-payment-grid"], ["class", "vd-payment-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "vd-btn-cobrar", 3, "click", "disabled"], [1, "vd-payment-btn", 3, "click"], [1, "vd-payment-icon"]], template: function VentaDirectaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Venta Directa");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 3);
      \u0275\u0275text(6, "Para llevar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function VentaDirectaComponent_Template_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.mealType, $event) || (ctx.mealType = $event);
        return $event;
      });
      \u0275\u0275template(9, VentaDirectaComponent_option_9_Template, 2, 2, "option", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(11, "svg", 8);
      \u0275\u0275element(12, "circle", 9)(13, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function VentaDirectaComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function VentaDirectaComponent_Template_input_input_14_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(15, VentaDirectaComponent_div_15_Template, 2, 1, "div", 12);
      \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "button", 16);
      \u0275\u0275listener("click", function VentaDirectaComponent_Template_button_click_19_listener() {
        return ctx.selectCategory(null);
      });
      \u0275\u0275text(20, " Todos ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, VentaDirectaComponent_button_21_Template, 2, 3, "button", 17)(22, VentaDirectaComponent_button_22_Template, 2, 2, "button", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, VentaDirectaComponent_div_23_Template, 3, 2, "div", 19)(24, VentaDirectaComponent_div_24_Template, 3, 2, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 20)(26, "div", 21)(27, "div", 22)(28, "span", 23);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 24);
      \u0275\u0275element(30, "circle", 25)(31, "circle", 26)(32, "path", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, " Pedido ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(34, VentaDirectaComponent_button_34_Template, 2, 0, "button", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, VentaDirectaComponent_div_35_Template, 5, 2, "div", 29)(36, VentaDirectaComponent_div_36_Template, 2, 1, "div", 30)(37, VentaDirectaComponent_div_37_Template, 7, 0, "div", 31)(38, VentaDirectaComponent_div_38_Template, 11, 3, "div", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(39, VentaDirectaComponent_div_39_Template, 19, 6, "div", 33)(40, VentaDirectaComponent_div_40_Template, 17, 4, "div", 34);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.mealType);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.mealTypes);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.selectedCategoryId === null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showEntradasTab);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedCategoryId !== -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedCategoryId === -1);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.cart.length > 0 || ctx.selectedEntradas.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedEntradas.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cart.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cart.length === 0 && ctx.selectedEntradas.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cart.length > 0 || ctx.selectedEntradas.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showConfirmModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCobrarModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, HttpClientModule], styles: ['\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.vd-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background: #f5f5f7;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  overflow: hidden;\n}\n.vd-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.5rem;\n  background: #fff;\n  border-bottom: 1px solid #ebebeb;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.vd-topbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.vd-topbar-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111;\n}\n.vd-badge-llevar[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.vd-topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.vd-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.vd-search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.vd-search-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  opacity: 0.4;\n  pointer-events: none;\n}\n.vd-search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 8px 12px 8px 32px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111;\n  background: #fff;\n  outline: none;\n  width: 200px;\n}\n.vd-search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #a0a0a0;\n}\n.vd-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #059669;\n  color: #fff;\n  padding: 12px 24px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  z-index: 1000;\n  box-shadow: 0 4px 16px rgba(5, 150, 105, 0.3);\n  animation: _ngcontent-%COMP%_fadeInOut 4s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_fadeInOut {\n  0% {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-10px);\n  }\n  10% {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.vd-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  gap: 0;\n}\n.vd-left[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 1rem 1rem 1rem 1.5rem;\n  gap: 12px;\n}\n.vd-cats[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.vd-cat[_ngcontent-%COMP%] {\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  color: #555;\n  transition: all 0.15s;\n}\n.vd-cat[_ngcontent-%COMP%]:hover {\n  border-color: #a0a0a0;\n}\n.vd-cat.active[_ngcontent-%COMP%] {\n  background: #111827;\n  color: #fff;\n  border-color: transparent;\n}\n.vd-products[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n  align-content: start;\n  padding-bottom: 1rem;\n}\n.vd-product-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ebebeb;\n  border-radius: 12px;\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.vd-product-card[_ngcontent-%COMP%]:hover {\n  border-color: #059669;\n  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.12);\n  transform: translateY(-1px);\n}\n.vd-product-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 80px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #f5f5f7;\n}\n.vd-product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.vd-product-emoji[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n}\n.vd-product-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.vd-product-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  line-height: 1.3;\n}\n.vd-product-price[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #059669;\n}\n.vd-product-qty[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: #059669;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vd-product-add[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #059669;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.vd-product-card[_ngcontent-%COMP%]:hover   .vd-product-add[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.vd-empty-products[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  text-align: center;\n  color: #aaa;\n  font-size: 14px;\n  padding: 3rem 0;\n}\n.vd-right[_ngcontent-%COMP%] {\n  width: 320px;\n  flex-shrink: 0;\n  padding: 1rem 1.5rem 1rem 0;\n  display: flex;\n  flex-direction: column;\n}\n.vd-cart[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ebebeb;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n}\n.vd-cart-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f0f0f0;\n  flex-shrink: 0;\n}\n.vd-cart-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #111;\n}\n.vd-clear-btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #dc2626;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.vd-clear-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.vd-cart-items[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.vd-cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 10px 16px;\n  border-bottom: 1px solid #f5f5f7;\n}\n.vd-cart-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.vd-cart-item-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n}\n.vd-cart-item-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.vd-qty-btn[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.vd-qty-btn[_ngcontent-%COMP%]:hover {\n  background: #f5f5f7;\n  border-color: #a0a0a0;\n}\n.vd-qty[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111;\n  min-width: 20px;\n  text-align: center;\n}\n.vd-item-total[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #059669;\n  margin-left: auto;\n}\n.vd-remove-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #dc2626;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  transition: background 0.15s;\n}\n.vd-remove-btn[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.vd-cart-empty[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  color: #bbb;\n  font-size: 13px;\n}\n.vd-cart-footer[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-top: 1px solid #f0f0f0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.vd-total-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  color: #555;\n}\n.vd-total-amount[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111;\n}\n.vd-btn-enviar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  background: #059669;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  transition: opacity 0.15s;\n}\n.vd-btn-enviar[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.vd-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 500;\n}\n.vd-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 28px;\n  width: 420px;\n  max-width: 95vw;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.vd-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111;\n}\n.vd-modal-sub[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  margin-top: -8px;\n}\n.vd-modal-success-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: #d1fae5;\n  color: #059669;\n  font-size: 24px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n}\n.vd-modal-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  max-height: 240px;\n  overflow-y: auto;\n  border: 1px solid #f0f0f0;\n  border-radius: 10px;\n  padding: 10px;\n}\n.vd-modal-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.vd-modal-qty[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 6px;\n  background: #f0f0f0;\n  color: #374151;\n  flex-shrink: 0;\n}\n.vd-modal-name[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #111;\n}\n.vd-modal-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #059669;\n}\n.vd-modal-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-radius: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #111;\n}\n.vd-modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.vd-btn-cancel[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 11px;\n  border-radius: 10px;\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  color: #555;\n  transition: background 0.15s;\n}\n.vd-btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.vd-btn-confirm[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 11px;\n  border-radius: 10px;\n  border: none;\n  background: #059669;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.vd-btn-confirm[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.vd-btn-confirm[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.vd-payment-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.vd-payment-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 14px;\n  border-radius: 12px;\n  border: 2px solid #e0e0e0;\n  background: #fff;\n  cursor: pointer;\n  transition: all 0.15s;\n  font-size: 13px;\n  font-weight: 600;\n  color: #555;\n}\n.vd-payment-btn[_ngcontent-%COMP%]:hover {\n  border-color: #059669;\n  color: #059669;\n}\n.vd-payment-btn.selected[_ngcontent-%COMP%] {\n  border-color: #059669;\n  background: #d1fae5;\n  color: #059669;\n}\n.vd-payment-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.vd-btn-cobrar[_ngcontent-%COMP%] {\n  padding: 14px;\n  border-radius: 12px;\n  border: none;\n  background: #059669;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.15s;\n  width: 100%;\n}\n.vd-btn-cobrar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.vd-btn-cobrar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.vd-cat-entradas.active[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.vd-product-card-entrada[_ngcontent-%COMP%]:hover {\n  border-color: #7c3aed;\n  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.12);\n}\n.vd-product-qty-entrada[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.vd-product-add-entrada[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.vd-entrada-label[_ngcontent-%COMP%] {\n  color: #7c3aed !important;\n}\n.vd-cart-entradas[_ngcontent-%COMP%] {\n  padding: 8px 16px 0;\n}\n.vd-cart-entradas-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #7c3aed;\n  margin-bottom: 6px;\n}\n.vd-cart-entradas-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #f0f0f0;\n  margin: 8px 0;\n}\n/*# sourceMappingURL=ventaDirecta.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VentaDirectaComponent, [{
    type: Component,
    args: [{ selector: "app-venta-directa", standalone: true, imports: [CommonModule, FormsModule, HttpClientModule], template: `<div class="vd-page">\r
\r
  <!-- TOP BAR -->\r
  <div class="vd-topbar">\r
    <div class="vd-topbar-left">\r
      <h1>Venta Directa</h1>\r
      <span class="vd-badge-llevar">Para llevar</span>\r
    </div>\r
    <div class="vd-topbar-right">\r
      <select [(ngModel)]="mealType" class="vd-select">\r
        <option *ngFor="let m of mealTypes" [value]="m">{{ m }}</option>\r
      </select>\r
      <div class="vd-search-wrap">\r
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>\r
        </svg>\r
        <input type="text" [(ngModel)]="searchQuery" (input)="applyFilters()" placeholder="Buscar producto..." />\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- SUCCESS TOAST -->\r
  <div class="vd-toast" *ngIf="successMessage">{{ successMessage }}</div>\r
\r
  <!-- BODY -->\r
  <div class="vd-body">\r
\r
    <!-- PANEL IZQUIERDO -->\r
    <div class="vd-left">\r
\r
      <!-- Categor\xEDas -->\r
      <div class="vd-cats">\r
        <button class="vd-cat" [class.active]="selectedCategoryId === null" (click)="selectCategory(null)">\r
          Todos\r
        </button>\r
        <button *ngFor="let cat of categories" class="vd-cat"\r
          [class.active]="selectedCategoryId === cat.id"\r
          (click)="selectCategory(cat.id)">\r
          {{ cat.name }}\r
        </button>\r
        <button *ngIf="showEntradasTab" class="vd-cat vd-cat-entradas"\r
          [class.active]="selectedCategoryId === -1"\r
          (click)="selectCategory(-1)">\r
          \u{1F963} Entradas\r
        </button>\r
      </div>\r
\r
      <!-- Productos normales -->\r
      <div class="vd-products" *ngIf="selectedCategoryId !== -1">\r
        <div *ngFor="let product of filteredProducts" class="vd-product-card" (click)="addToCart(product)">\r
          <div class="vd-product-img">\r
            <img *ngIf="product.imageUrl" [src]="product.imageUrl" [alt]="product.name"\r
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">\r
            <div class="vd-product-emoji" [style.display]="product.imageUrl ? 'none' : 'flex'">\u{1F37D}\uFE0F</div>\r
          </div>\r
          <div class="vd-product-info">\r
            <span class="vd-product-name">{{ product.name }}</span>\r
            <span class="vd-product-price">S/. {{ product.price.toFixed(2) }}</span>\r
          </div>\r
          <div class="vd-product-qty" *ngIf="getQuantity(product.id) > 0">{{ getQuantity(product.id) }}</div>\r
          <div class="vd-product-add">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>\r
            </svg>\r
          </div>\r
        </div>\r
        <div *ngIf="filteredProducts.length === 0" class="vd-empty-products">Sin productos para mostrar</div>\r
      </div>\r
\r
      <!-- Panel de entradas -->\r
      <div class="vd-products" *ngIf="selectedCategoryId === -1">\r
        <div *ngFor="let entrada of entradas" class="vd-product-card vd-product-card-entrada" (click)="addEntrada(entrada)">\r
          <div class="vd-product-img">\r
            <div class="vd-product-emoji" style="display:flex">\u{1F963}</div>\r
          </div>\r
          <div class="vd-product-info">\r
            <span class="vd-product-name">{{ entrada.name }}</span>\r
            <span class="vd-product-price vd-entrada-label">Entrada del d\xEDa</span>\r
          </div>\r
          <div class="vd-product-qty vd-product-qty-entrada" *ngIf="getEntradasQuantity(entrada.id) > 0">\r
            {{ getEntradasQuantity(entrada.id) }}\r
          </div>\r
          <div class="vd-product-add vd-product-add-entrada">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>\r
            </svg>\r
          </div>\r
        </div>\r
        <div *ngIf="entradas.length === 0" class="vd-empty-products">No hay entradas del d\xEDa registradas</div>\r
      </div>\r
\r
    </div>\r
\r
    <!-- PANEL DERECHO: Carrito -->\r
    <div class="vd-right">\r
      <div class="vd-cart">\r
\r
        <div class="vd-cart-header">\r
          <span class="vd-cart-title">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>\r
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>\r
            </svg>\r
            Pedido\r
          </span>\r
          <button class="vd-clear-btn" *ngIf="cart.length > 0 || selectedEntradas.length > 0" (click)="clearCart()">Limpiar</button>\r
        </div>\r
\r
        <!-- Entradas seleccionadas -->\r
        <div class="vd-cart-entradas" *ngIf="selectedEntradas.length > 0">\r
          <div class="vd-cart-entradas-label">\u{1F963} Entradas</div>\r
          <div *ngFor="let e of selectedEntradas" class="vd-cart-item">\r
            <div class="vd-cart-item-name" style="color:#7c3aed">{{ e.entrada.name }}</div>\r
            <div class="vd-cart-item-controls">\r
              <button class="vd-qty-btn" (click)="removeEntrada(e.entrada.id)">\r
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
                  <line x1="5" y1="12" x2="19" y2="12"/>\r
                </svg>\r
              </button>\r
              <span class="vd-qty">{{ e.quantity }}</span>\r
              <button class="vd-qty-btn" (click)="addEntrada(e.entrada)">\r
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>\r
                </svg>\r
              </button>\r
            </div>\r
          </div>\r
          <div class="vd-cart-entradas-divider" *ngIf="cart.length > 0"></div>\r
        </div>\r
\r
        <!-- Items del carrito -->\r
        <div class="vd-cart-items" *ngIf="cart.length > 0">\r
          <div *ngFor="let item of cart" class="vd-cart-item">\r
            <div class="vd-cart-item-name">{{ item.product.name }}</div>\r
            <div class="vd-cart-item-controls">\r
              <button class="vd-qty-btn" (click)="removeOne(item.product.id)">\r
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
                  <line x1="5" y1="12" x2="19" y2="12"/>\r
                </svg>\r
              </button>\r
              <span class="vd-qty">{{ item.quantity }}</span>\r
              <button class="vd-qty-btn" (click)="addToCart(item.product)">\r
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>\r
                </svg>\r
              </button>\r
              <span class="vd-item-total">S/. {{ (item.product.price * item.quantity).toFixed(2) }}</span>\r
              <button class="vd-remove-btn" (click)="removeItem(item.product.id)">\r
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>\r
                  <path d="M10 11v6"/><path d="M14 11v6"/>\r
                </svg>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Carrito vac\xEDo -->\r
        <div class="vd-cart-empty" *ngIf="cart.length === 0 && selectedEntradas.length === 0">\r
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.5">\r
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>\r
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>\r
          </svg>\r
          <span>Agrega productos al pedido</span>\r
        </div>\r
\r
        <!-- Footer -->\r
        <div class="vd-cart-footer" *ngIf="cart.length > 0 || selectedEntradas.length > 0">\r
          <div class="vd-total-row">\r
            <span>{{ totalItems }} producto{{ totalItems !== 1 ? 's' : '' }}</span>\r
            <span class="vd-total-amount">S/. {{ total.toFixed(2) }}</span>\r
          </div>\r
          <button class="vd-btn-enviar" (click)="openConfirm()">\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/>\r
            </svg>\r
            Enviar a cocina\r
          </button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- MODAL CONFIRMAR -->\r
  <div class="vd-modal-overlay" *ngIf="showConfirmModal" (click)="showConfirmModal = false">\r
    <div class="vd-modal" (click)="$event.stopPropagation()">\r
      <h2>Confirmar pedido</h2>\r
      <p class="vd-modal-sub">Para llevar \xB7 {{ mealType }}</p>\r
      <div class="vd-modal-items">\r
        <div *ngIf="entradasText" class="vd-modal-item">\r
          <span class="vd-modal-qty" style="background:#ede9fe; color:#7c3aed">\u{1F963}</span>\r
          <span class="vd-modal-name" style="color:#7c3aed; font-style:italic">{{ entradasText }}</span>\r
        </div>\r
        <div *ngFor="let item of cart" class="vd-modal-item">\r
          <span class="vd-modal-qty">{{ item.quantity }}x</span>\r
          <span class="vd-modal-name">{{ item.product.name }}</span>\r
          <span class="vd-modal-price">S/. {{ (item.product.price * item.quantity).toFixed(2) }}</span>\r
        </div>\r
      </div>\r
      <div class="vd-modal-total">\r
        <span>Total</span>\r
        <span>S/. {{ total.toFixed(2) }}</span>\r
      </div>\r
      <div class="vd-modal-actions">\r
        <button class="vd-btn-cancel" (click)="showConfirmModal = false">Cancelar</button>\r
        <button class="vd-btn-confirm" (click)="confirmarYEnviar()" [disabled]="procesando">\r
          {{ procesando ? 'Enviando...' : '\u2713 Enviar a cocina' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- MODAL COBRAR -->\r
  <div class="vd-modal-overlay" *ngIf="showCobrarModal">\r
    <div class="vd-modal">\r
      <div class="vd-modal-success-icon">\u2713</div>\r
      <h2>Pedido enviado a cocina</h2>\r
      <p class="vd-modal-sub">Selecciona el m\xE9todo de pago</p>\r
      <div class="vd-payment-grid">\r
        <button *ngFor="let m of paymentMethods" class="vd-payment-btn"\r
          [class.selected]="selectedPaymentMethod === m"\r
          (click)="selectedPaymentMethod = m">\r
          <span class="vd-payment-icon">{{ getPaymentIcon(m) }}</span>\r
          <span>{{ m }}</span>\r
        </button>\r
      </div>\r
      <div class="vd-modal-total">\r
        <span>Total a cobrar</span>\r
        <span>S/. {{ total.toFixed(2) }}</span>\r
      </div>\r
      <button class="vd-btn-cobrar" (click)="cobrarOrden()" [disabled]="procesando">\r
        {{ procesando ? 'Procesando...' : '\u{1F4B5} Cobrar S/. ' + total.toFixed(2) }}\r
      </button>\r
    </div>\r
  </div>\r
\r
</div>`, styles: ['/* src/app/components/VentaDirecta/ventaDirecta.css */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.vd-page {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background: #f5f5f7;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  overflow: hidden;\n}\n.vd-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.5rem;\n  background: #fff;\n  border-bottom: 1px solid #ebebeb;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.vd-topbar-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.vd-topbar-left h1 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111;\n}\n.vd-badge-llevar {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.vd-topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.vd-select {\n  padding: 8px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111;\n  background: #fff;\n  cursor: pointer;\n  outline: none;\n}\n.vd-search-wrap {\n  position: relative;\n}\n.vd-search-wrap svg {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  opacity: 0.4;\n  pointer-events: none;\n}\n.vd-search-wrap input {\n  padding: 8px 12px 8px 32px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111;\n  background: #fff;\n  outline: none;\n  width: 200px;\n}\n.vd-search-wrap input:focus {\n  border-color: #a0a0a0;\n}\n.vd-toast {\n  position: fixed;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #059669;\n  color: #fff;\n  padding: 12px 24px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  z-index: 1000;\n  box-shadow: 0 4px 16px rgba(5, 150, 105, 0.3);\n  animation: fadeInOut 4s ease forwards;\n}\n@keyframes fadeInOut {\n  0% {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-10px);\n  }\n  10% {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n  80% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.vd-body {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  gap: 0;\n}\n.vd-left {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 1rem 1rem 1rem 1.5rem;\n  gap: 12px;\n}\n.vd-cats {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.vd-cat {\n  padding: 6px 16px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  color: #555;\n  transition: all 0.15s;\n}\n.vd-cat:hover {\n  border-color: #a0a0a0;\n}\n.vd-cat.active {\n  background: #111827;\n  color: #fff;\n  border-color: transparent;\n}\n.vd-products {\n  flex: 1;\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n  align-content: start;\n  padding-bottom: 1rem;\n}\n.vd-product-card {\n  background: #fff;\n  border: 1px solid #ebebeb;\n  border-radius: 12px;\n  padding: 12px;\n  cursor: pointer;\n  transition: all 0.15s;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.vd-product-card:hover {\n  border-color: #059669;\n  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.12);\n  transform: translateY(-1px);\n}\n.vd-product-img {\n  width: 100%;\n  height: 80px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #f5f5f7;\n}\n.vd-product-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.vd-product-emoji {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 32px;\n}\n.vd-product-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.vd-product-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  line-height: 1.3;\n}\n.vd-product-price {\n  font-size: 13px;\n  font-weight: 700;\n  color: #059669;\n}\n.vd-product-qty {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: #059669;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vd-product-add {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #059669;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.vd-product-card:hover .vd-product-add {\n  opacity: 1;\n}\n.vd-empty-products {\n  grid-column: 1 / -1;\n  text-align: center;\n  color: #aaa;\n  font-size: 14px;\n  padding: 3rem 0;\n}\n.vd-right {\n  width: 320px;\n  flex-shrink: 0;\n  padding: 1rem 1.5rem 1rem 0;\n  display: flex;\n  flex-direction: column;\n}\n.vd-cart {\n  background: #fff;\n  border: 1px solid #ebebeb;\n  border-radius: 14px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow: hidden;\n}\n.vd-cart-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f0f0f0;\n  flex-shrink: 0;\n}\n.vd-cart-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #111;\n}\n.vd-clear-btn {\n  font-size: 12px;\n  color: #dc2626;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-weight: 500;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.vd-clear-btn:hover {\n  background: #fee2e2;\n}\n.vd-cart-items {\n  flex: 1;\n  overflow-y: auto;\n  padding: 8px 0;\n}\n.vd-cart-item {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 10px 16px;\n  border-bottom: 1px solid #f5f5f7;\n}\n.vd-cart-item:last-child {\n  border-bottom: none;\n}\n.vd-cart-item-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n}\n.vd-cart-item-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.vd-qty-btn {\n  width: 26px;\n  height: 26px;\n  border-radius: 6px;\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s;\n}\n.vd-qty-btn:hover {\n  background: #f5f5f7;\n  border-color: #a0a0a0;\n}\n.vd-qty {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111;\n  min-width: 20px;\n  text-align: center;\n}\n.vd-item-total {\n  font-size: 13px;\n  font-weight: 600;\n  color: #059669;\n  margin-left: auto;\n}\n.vd-remove-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #dc2626;\n  padding: 4px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  transition: background 0.15s;\n}\n.vd-remove-btn:hover {\n  background: #fee2e2;\n}\n.vd-cart-empty {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  color: #bbb;\n  font-size: 13px;\n}\n.vd-cart-footer {\n  padding: 14px 16px;\n  border-top: 1px solid #f0f0f0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.vd-total-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  color: #555;\n}\n.vd-total-amount {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111;\n}\n.vd-btn-enviar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  background: #059669;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  transition: opacity 0.15s;\n}\n.vd-btn-enviar:hover {\n  opacity: 0.88;\n}\n.vd-modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 500;\n}\n.vd-modal {\n  background: #fff;\n  border-radius: 16px;\n  padding: 28px;\n  width: 420px;\n  max-width: 95vw;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.vd-modal h2 {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111;\n}\n.vd-modal-sub {\n  font-size: 13px;\n  color: #888;\n  margin-top: -8px;\n}\n.vd-modal-success-icon {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: #d1fae5;\n  color: #059669;\n  font-size: 24px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n}\n.vd-modal-items {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  max-height: 240px;\n  overflow-y: auto;\n  border: 1px solid #f0f0f0;\n  border-radius: 10px;\n  padding: 10px;\n}\n.vd-modal-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.vd-modal-qty {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 6px;\n  background: #f0f0f0;\n  color: #374151;\n  flex-shrink: 0;\n}\n.vd-modal-name {\n  flex: 1;\n  color: #111;\n}\n.vd-modal-price {\n  font-weight: 600;\n  color: #059669;\n}\n.vd-modal-total {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 14px;\n  background: #f9fafb;\n  border-radius: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  color: #111;\n}\n.vd-modal-actions {\n  display: flex;\n  gap: 10px;\n}\n.vd-btn-cancel {\n  flex: 1;\n  padding: 11px;\n  border-radius: 10px;\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  color: #555;\n  transition: background 0.15s;\n}\n.vd-btn-cancel:hover {\n  background: #f5f5f5;\n}\n.vd-btn-confirm {\n  flex: 1;\n  padding: 11px;\n  border-radius: 10px;\n  border: none;\n  background: #059669;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.vd-btn-confirm:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.vd-btn-confirm:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.vd-payment-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.vd-payment-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 14px;\n  border-radius: 12px;\n  border: 2px solid #e0e0e0;\n  background: #fff;\n  cursor: pointer;\n  transition: all 0.15s;\n  font-size: 13px;\n  font-weight: 600;\n  color: #555;\n}\n.vd-payment-btn:hover {\n  border-color: #059669;\n  color: #059669;\n}\n.vd-payment-btn.selected {\n  border-color: #059669;\n  background: #d1fae5;\n  color: #059669;\n}\n.vd-payment-icon {\n  font-size: 24px;\n}\n.vd-btn-cobrar {\n  padding: 14px;\n  border-radius: 12px;\n  border: none;\n  background: #059669;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.15s;\n  width: 100%;\n}\n.vd-btn-cobrar:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.vd-btn-cobrar:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.vd-cat-entradas.active {\n  background: #7c3aed;\n}\n.vd-product-card-entrada:hover {\n  border-color: #7c3aed;\n  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.12);\n}\n.vd-product-qty-entrada {\n  background: #7c3aed;\n}\n.vd-product-add-entrada {\n  background: #7c3aed;\n}\n.vd-entrada-label {\n  color: #7c3aed !important;\n}\n.vd-cart-entradas {\n  padding: 8px 16px 0;\n}\n.vd-cart-entradas-label {\n  font-size: 10px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #7c3aed;\n  margin-bottom: 6px;\n}\n.vd-cart-entradas-divider {\n  height: 1px;\n  background: #f0f0f0;\n  margin: 8px 0;\n}\n/*# sourceMappingURL=ventaDirecta.css.map */\n'] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VentaDirectaComponent, { className: "VentaDirectaComponent", filePath: "app/components/ventadirecta/ventadirecta.ts", lineNumber: 39 });
})();
export {
  VentaDirectaComponent
};
//# sourceMappingURL=chunk-TNNCDXDT.js.map
