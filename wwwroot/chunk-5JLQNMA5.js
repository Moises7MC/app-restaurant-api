import {
  HubConnectionBuilder
} from "./chunk-OSHSTZL5.js";
import {
  environment
} from "./chunk-NMCGB4Y3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XHDJFZT2.js";

// src/app/components/caja/caja.ts
function CajaComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.ordenesListas.length);
  }
}
function CajaComponent_div_73_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "rect", 28)(3, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "No hay \xF3rdenes listas para cobrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, 'Las \xF3rdenes aparecen aqu\xED cuando el chef las marca como "Listo"');
    \u0275\u0275elementEnd()();
  }
}
function CajaComponent_div_73_div_2_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F464} ", order_r3.waiterName);
  }
}
function CajaComponent_div_73_div_2_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r4.quantity, "x");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/. ", (item_r4.quantity * item_r4.unitPrice).toFixed(2));
  }
}
function CajaComponent_div_73_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "div")(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 47);
    \u0275\u0275text(8, "Listo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 48)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CajaComponent_div_73_div_2_div_1_span_12_Template, 2, 1, "span", 49);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 50);
    \u0275\u0275template(16, CajaComponent_div_73_div_2_div_1_div_16_Template, 7, 3, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 52)(18, "span");
    \u0275\u0275text(19, "Total a cobrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 53);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 54);
    \u0275\u0275listener("click", function CajaComponent_div_73_div_2_div_1_Template_button_click_22_listener() {
      const order_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openCobrarModal(order_r3));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 6);
    \u0275\u0275element(24, "rect", 28)(25, "path", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Mesa ", order_r3.tableNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Comanda ", order_r3.comanda);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u{1F550} ", ctx_r0.formatTime(order_r3.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r3.waiterName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F37D}\uFE0F ", order_r3.mealType);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", order_r3.items);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/. ", order_r3.total.toFixed(2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Cobrar Mesa ", order_r3.tableNumber, " ");
  }
}
function CajaComponent_div_73_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, CajaComponent_div_73_div_2_div_1_Template, 27, 8, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.ordenesListas);
  }
}
function CajaComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, CajaComponent_div_73_div_1_Template, 8, 0, "div", 37)(2, CajaComponent_div_73_div_2_Template, 2, 1, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ordenesListas.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ordenesListas.length > 0);
  }
}
function CajaComponent_div_74_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No hay transacciones hoy");
    \u0275\u0275elementEnd()();
  }
}
function CajaComponent_div_74_div_2_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getPaymentIcon(t_r5.paymentMethod));
  }
}
function CajaComponent_div_74_div_2_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4E4}");
    \u0275\u0275elementEnd();
  }
}
function CajaComponent_div_74_div_2_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2022 ", t_r5.paymentMethod);
  }
}
function CajaComponent_div_74_div_2_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2022 Mesa ", t_r5.tableNumber);
  }
}
function CajaComponent_div_74_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63);
    \u0275\u0275template(2, CajaComponent_div_74_div_2_div_1_span_2_Template, 2, 1, "span", 49)(3, CajaComponent_div_74_div_2_div_1_span_3_Template, 2, 0, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 64)(5, "span", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 66);
    \u0275\u0275text(8);
    \u0275\u0275template(9, CajaComponent_div_74_div_2_div_1_span_9_Template, 2, 1, "span", 67)(10, CajaComponent_div_74_div_2_div_1_span_10_Template, 2, 1, "span", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 69);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("tx-income", t_r5.type === "ingreso")("tx-expense", t_r5.type === "gasto");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r5.type === "ingreso");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r5.type === "gasto");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.formatTime(t_r5.createdAt), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r5.paymentMethod);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r5.tableNumber);
    \u0275\u0275advance();
    \u0275\u0275classProp("amount-income", t_r5.type === "ingreso")("amount-expense", t_r5.type === "gasto");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r5.type === "ingreso" ? "+" : "-", "S/. ", t_r5.amount.toFixed(2), " ");
  }
}
function CajaComponent_div_74_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275template(1, CajaComponent_div_74_div_2_div_1_Template, 13, 16, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.transactions);
  }
}
function CajaComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, CajaComponent_div_74_div_1_Template, 5, 0, "div", 37)(2, CajaComponent_div_74_div_2_Template, 2, 1, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.transactions.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.transactions.length > 0);
  }
}
function CajaComponent_div_75_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1, "Sin ingresos a\xFAn");
    \u0275\u0275elementEnd();
  }
}
function CajaComponent_div_75_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "span", 90);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 91);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 92);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 93);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getPaymentIcon(m_r6.metodo));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r6.metodo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r6.count, " cobro", m_r6.count !== 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("S/. ", m_r6.total.toFixed(2));
  }
}
function CajaComponent_div_75_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275template(1, CajaComponent_div_75_div_6_div_1_Template, 10, 5, "div", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.summary.porMetodoPago);
  }
}
function CajaComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 72)(2, "div", 73)(3, "h3", 74);
    \u0275\u0275text(4, "Ingresos por m\xE9todo de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, CajaComponent_div_75_div_5_Template, 2, 0, "div", 75)(6, CajaComponent_div_75_div_6_Template, 2, 1, "div", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 73)(8, "h3", 74);
    \u0275\u0275text(9, "Balance del d\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 77)(11, "div", 78)(12, "span", 79);
    \u0275\u0275text(13, "Total ingresos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 80);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 78)(17, "span", 79);
    \u0275\u0275text(18, "Total gastos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 81);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "div", 82);
    \u0275\u0275elementStart(22, "div", 83)(23, "span", 79);
    \u0275\u0275text(24, "Balance neto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 84);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.summary.porMetodoPago.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.summary.porMetodoPago.length > 0);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("S/. ", ctx_r0.summary.ingresos.toFixed(2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("- S/. ", ctx_r0.summary.gastos.toFixed(2));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("income", ctx_r0.summary.balance >= 0)("expense", ctx_r0.summary.balance < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" S/. ", ctx_r0.summary.balance.toFixed(2), " ");
  }
}
function CajaComponent_div_76_div_8_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 109);
    \u0275\u0275listener("click", function CajaComponent_div_76_div_8_button_10_Template_button_click_0_listener() {
      const method_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectedPaymentMethod = method_r9);
    });
    \u0275\u0275elementStart(1, "span", 110);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const method_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r0.selectedPaymentMethod === method_r9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getPaymentIcon(method_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r9);
  }
}
function CajaComponent_div_76_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "span");
    \u0275\u0275text(3, "Total a cobrar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 106)(7, "label");
    \u0275\u0275text(8, "M\xE9todo de pago");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 107);
    \u0275\u0275template(10, CajaComponent_div_76_div_8_button_10_Template, 5, 4, "button", 108);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/. ", ctx_r0.selectedOrder.total.toFixed(2));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r0.paymentMethods);
  }
}
function CajaComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275listener("click", function CajaComponent_div_76_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showCobrarModal = false);
    });
    \u0275\u0275elementStart(1, "div", 95);
    \u0275\u0275listener("click", function CajaComponent_div_76_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 96)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 97);
    \u0275\u0275listener("click", function CajaComponent_div_76_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showCobrarModal = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 98);
    \u0275\u0275element(7, "path", 99);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, CajaComponent_div_76_div_8_Template, 11, 2, "div", 100);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 101)(10, "button", 102);
    \u0275\u0275listener("click", function CajaComponent_div_76_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showCobrarModal = false);
    });
    \u0275\u0275text(11, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 103);
    \u0275\u0275listener("click", function CajaComponent_div_76_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cobrarOrden());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Cobrar Mesa ", ctx_r0.selectedOrder == null ? null : ctx_r0.selectedOrder.tableNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.selectedOrder);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.procesando);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.procesando ? "Procesando..." : "Confirmar Cobro", " ");
  }
}
function CajaComponent_div_77_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.gastoError);
  }
}
function CajaComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275listener("click", function CajaComponent_div_77_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showGastoModal = false);
    });
    \u0275\u0275elementStart(1, "div", 95);
    \u0275\u0275listener("click", function CajaComponent_div_77_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 96)(3, "h2");
    \u0275\u0275text(4, "Registrar Gasto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 97);
    \u0275\u0275listener("click", function CajaComponent_div_77_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showGastoModal = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 98);
    \u0275\u0275element(7, "path", 99);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 104)(9, "div", 106)(10, "label");
    \u0275\u0275text(11, "Descripci\xF3n *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 111);
    \u0275\u0275twoWayListener("ngModelChange", function CajaComponent_div_77_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.gastoForm.description, $event) || (ctx_r0.gastoForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 106)(14, "label");
    \u0275\u0275text(15, "Monto (S/.) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function CajaComponent_div_77_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.gastoForm.amount, $event) || (ctx_r0.gastoForm.amount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, CajaComponent_div_77_div_17_Template, 2, 1, "div", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 101)(19, "button", 102);
    \u0275\u0275listener("click", function CajaComponent_div_77_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showGastoModal = false);
    });
    \u0275\u0275text(20, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 114);
    \u0275\u0275listener("click", function CajaComponent_div_77_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.registrarGasto());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.gastoForm.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.gastoForm.amount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.gastoError);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.procesando);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.procesando ? "Guardando..." : "Registrar Gasto", " ");
  }
}
function CajaComponent_div_78_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 118)(1, "div", 119);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Caja cerrada correctamente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 120)(8, "div", 121)(9, "span");
    \u0275\u0275text(10, "Ingresos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "strong", 122);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 121)(14, "span");
    \u0275\u0275text(15, "Gastos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong", 123);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 124)(19, "span");
    \u0275\u0275text(20, "Balance final");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 125);
    \u0275\u0275listener("click", function CajaComponent_div_78_div_9_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showCierreModal = false);
    });
    \u0275\u0275text(24, "Cerrar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.cierreResult.fecha);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("S/. ", ctx_r0.cierreResult.ingresos == null ? null : ctx_r0.cierreResult.ingresos.toFixed(2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/. ", ctx_r0.cierreResult.gastos == null ? null : ctx_r0.cierreResult.gastos.toFixed(2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/. ", ctx_r0.cierreResult.balance == null ? null : ctx_r0.cierreResult.balance.toFixed(2));
  }
}
function CajaComponent_div_78_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "p", 126);
    \u0275\u0275text(2, " \u26A0\uFE0F Esta acci\xF3n cerrar\xE1 todas las transacciones del d\xEDa. El resumen quedar\xE1 guardado. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 127)(4, "div", 121)(5, "span");
    \u0275\u0275text(6, "Ingresos del d\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 121)(10, "span");
    \u0275\u0275text(11, "Gastos del d\xEDa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 124)(15, "span");
    \u0275\u0275text(16, "Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("S/. ", ctx_r0.summary.ingresos.toFixed(2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/. ", ctx_r0.summary.gastos.toFixed(2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("S/. ", ctx_r0.summary.balance.toFixed(2));
  }
}
function CajaComponent_div_78_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "button", 102);
    \u0275\u0275listener("click", function CajaComponent_div_78_div_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showCierreModal = false);
    });
    \u0275\u0275text(2, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 128);
    \u0275\u0275listener("click", function CajaComponent_div_78_div_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.ejecutarCierre());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.procesando);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.procesando ? "Cerrando..." : "Confirmar Cierre", " ");
  }
}
function CajaComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275listener("click", function CajaComponent_div_78_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showCierreModal = false);
    });
    \u0275\u0275elementStart(1, "div", 95);
    \u0275\u0275listener("click", function CajaComponent_div_78_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 96)(3, "h2");
    \u0275\u0275text(4, "Cierre de Caja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 97);
    \u0275\u0275listener("click", function CajaComponent_div_78_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.showCierreModal = false);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 98);
    \u0275\u0275element(7, "path", 99);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 104);
    \u0275\u0275template(9, CajaComponent_div_78_div_9_Template, 25, 4, "div", 116)(10, CajaComponent_div_78_div_10_Template, 19, 3, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, CajaComponent_div_78_div_11_Template, 5, 2, "div", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r0.cierreResult);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.cierreResult);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.cierreResult);
  }
}
var CajaComponent = class _CajaComponent {
  http;
  apiUrl = environment.apiUrl;
  apiBaseUrl = environment.apiBaseUrl;
  hubConnection = null;
  // Datos
  ordenesListas = [];
  transactions = [];
  summary = { ingresos: 0, gastos: 0, balance: 0, totalTransacciones: 0, porMetodoPago: [] };
  // UI
  activeTab = "cobrar";
  selectedOrder = null;
  selectedPaymentMethod = "Efectivo";
  paymentMethods = ["Efectivo", "Tarjeta", "Yape", "Plin"];
  // Modal gasto
  showGastoModal = false;
  gastoForm = { amount: 0, description: "" };
  gastoError = "";
  // Modal cobro
  showCobrarModal = false;
  cobrandoId = null;
  // Modal cierre
  showCierreModal = false;
  cierreResult = null;
  loading = false;
  procesando = false;
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadAll();
    this.connectSignalR();
  }
  ngOnDestroy() {
    this.hubConnection?.stop();
  }
  loadAll() {
    this.loadOrdenesListas();
    this.loadTransactions();
    this.loadSummary();
  }
  loadOrdenesListas() {
    this.http.get(`${this.apiUrl}/transaction/ordenes-listas`).subscribe({
      next: (data) => this.ordenesListas = data,
      error: (e) => console.error(e)
    });
  }
  loadTransactions() {
    this.http.get(`${this.apiUrl}/transaction/today`).subscribe({
      next: (data) => this.transactions = data,
      error: (e) => console.error(e)
    });
  }
  loadSummary() {
    this.http.get(`${this.apiUrl}/transaction/summary/today`).subscribe({
      next: (data) => this.summary = data,
      error: (e) => console.error(e)
    });
  }
  connectSignalR() {
    this.hubConnection = new HubConnectionBuilder().withUrl(`${this.apiBaseUrl}/hubs/orders`).withAutomaticReconnect().build();
    this.hubConnection.on("CajaActualizada", () => this.loadAll());
    this.hubConnection.on("PedidoListo", () => this.loadOrdenesListas());
    this.hubConnection.start().catch((e) => console.warn("SignalR caja:", e));
  }
  // ── Cobrar orden ─────────────────────────────────────────
  openCobrarModal(order) {
    this.selectedOrder = order;
    this.selectedPaymentMethod = "Efectivo";
    this.showCobrarModal = true;
  }
  cobrarOrden() {
    if (!this.selectedOrder)
      return;
    this.procesando = true;
    this.http.post(`${this.apiUrl}/transaction/cobrar`, {
      orderId: this.selectedOrder.id,
      paymentMethod: this.selectedPaymentMethod
    }).subscribe({
      next: () => {
        this.showCobrarModal = false;
        this.selectedOrder = null;
        this.procesando = false;
        this.loadAll();
      },
      error: (e) => {
        alert(e.error || "Error al cobrar");
        this.procesando = false;
      }
    });
  }
  // ── Gasto manual ─────────────────────────────────────────
  openGastoModal() {
    this.gastoForm = { amount: 0, description: "" };
    this.gastoError = "";
    this.showGastoModal = true;
  }
  registrarGasto() {
    if (this.gastoForm.amount <= 0) {
      this.gastoError = "El monto debe ser mayor a 0";
      return;
    }
    if (!this.gastoForm.description.trim()) {
      this.gastoError = "La descripci\xF3n es requerida";
      return;
    }
    this.procesando = true;
    this.http.post(`${this.apiUrl}/transaction/gasto`, this.gastoForm).subscribe({
      next: () => {
        this.showGastoModal = false;
        this.procesando = false;
        this.loadAll();
      },
      error: () => {
        this.gastoError = "Error al registrar gasto";
        this.procesando = false;
      }
    });
  }
  // ── Cierre de caja ────────────────────────────────────────
  openCierreModal() {
    this.showCierreModal = true;
    this.cierreResult = null;
  }
  ejecutarCierre() {
    this.procesando = true;
    this.http.post(`${this.apiUrl}/transaction/cierre`, {}).subscribe({
      next: (res) => {
        this.cierreResult = res;
        this.procesando = false;
        this.loadAll();
      },
      error: (e) => {
        alert(e.error || "Error al cerrar caja");
        this.procesando = false;
        this.showCierreModal = false;
      }
    });
  }
  // ── Helpers ───────────────────────────────────────────────
  formatTime(iso) {
    return new Date(iso).toLocaleTimeString("es-PE", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Lima"
    });
  }
  formatDate(iso) {
    return new Date(iso).toLocaleDateString("es-PE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "America/Lima"
    });
  }
  getPaymentIcon(method) {
    const icons = {
      "Efectivo": "\u{1F4B5}",
      "Tarjeta": "\u{1F4B3}",
      "Yape": "\u{1F4F1}",
      "Plin": "\u{1F4F2}"
    };
    return icons[method || ""] || "\u{1F4B0}";
  }
  getPaymentColor(method) {
    const colors = {
      "Efectivo": "#059669",
      "Tarjeta": "#2563eb",
      "Yape": "#7c3aed",
      "Plin": "#0891b2"
    };
    return colors[method] || "#6b7280";
  }
  static \u0275fac = function CajaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CajaComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CajaComponent, selectors: [["app-caja"]], decls: 79, vars: 20, consts: [[1, "caja-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], [1, "btn-gasto", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 5v14M5 12h14"], [1, "btn-cierre", 3, "click"], ["x", "2", "y", "3", "width", "20", "height", "14", "rx", "2"], ["d", "M8 21h8M12 17v4"], [1, "summary-cards"], [1, "summary-card", "income"], [1, "summary-icon"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], [1, "summary-info"], [1, "summary-label"], [1, "summary-value"], [1, "summary-card", "expense"], [1, "summary-card", "balance"], ["d", "M3 3h18v18H3z"], ["d", "M3 9h18M9 21V9"], [1, "summary-card", "orders"], ["d", "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1"], [1, "tabs"], [1, "tab-btn", 3, "click"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "2"], ["d", "M2 10h20"], ["class", "tab-badge", 4, "ngIf"], ["d", "M4 6h16M4 10h16M4 14h16M4 18h16"], [1, "tab-badge"], ["d", "M18 20V10M12 20V4M6 20v-6"], ["class", "tab-content", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "tab-content"], ["class", "empty-state", 4, "ngIf"], ["class", "orders-grid", 4, "ngIf"], [1, "empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], [1, "orders-grid"], ["class", "order-card", 4, "ngFor", "ngForOf"], [1, "order-card"], [1, "order-card-header"], [1, "order-table"], [1, "order-comanda"], [1, "badge-ready"], [1, "order-meta"], [4, "ngIf"], [1, "order-items"], ["class", "order-item", 4, "ngFor", "ngForOf"], [1, "order-total"], [1, "total-amount"], [1, "btn-cobrar", 3, "click"], [1, "order-item"], [1, "item-qty-badge"], [1, "item-name"], [1, "item-price"], ["class", "transactions-list", 4, "ngIf"], [1, "transactions-list"], ["class", "transaction-row", 4, "ngFor", "ngForOf"], [1, "transaction-row"], [1, "tx-icon"], [1, "tx-info"], [1, "tx-desc"], [1, "tx-meta"], ["class", "tx-method", 4, "ngIf"], ["class", "tx-table", 4, "ngIf"], [1, "tx-amount"], [1, "tx-method"], [1, "tx-table"], [1, "resumen-grid"], [1, "resumen-card"], [1, "resumen-title"], ["class", "empty-small", 4, "ngIf"], ["class", "method-list", 4, "ngIf"], [1, "balance-detail"], [1, "balance-row"], [1, "balance-label"], [1, "balance-value", "income"], [1, "balance-value", "expense"], [1, "balance-divider"], [1, "balance-row", "total"], [1, "balance-value"], [1, "empty-small"], [1, "method-list"], ["class", "method-row", 4, "ngFor", "ngForOf"], [1, "method-row"], [1, "method-left"], [1, "method-icon"], [1, "method-name"], [1, "method-count"], [1, "method-total"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M18 6L6 18M6 6l12 12"], ["class", "modal-body", 4, "ngIf"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", "green", 3, "click", "disabled"], [1, "modal-body"], [1, "cobrar-total"], [1, "form-group"], [1, "payment-methods"], ["class", "payment-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "payment-btn", 3, "click"], [1, "payment-btn-icon"], ["type", "text", "placeholder", "Ej: Compra de ingredientes", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.50", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "form-error", 4, "ngIf"], [1, "btn-save", 3, "click", "disabled"], [1, "form-error"], ["class", "cierre-result", 4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], [1, "cierre-result"], [1, "cierre-check"], [1, "cierre-summary"], [1, "cierre-row"], [1, "income"], [1, "expense"], [1, "cierre-row", "total"], [1, "btn-save", 2, "width", "100%", "margin-top", "1rem", 3, "click"], [1, "cierre-warning"], [1, "cierre-preview"], [1, "btn-save", "red", 3, "click", "disabled"]], template: function CajaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Flujo de Caja");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Gesti\xF3n de cobros y transacciones del d\xEDa");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function CajaComponent_Template_button_click_8_listener() {
        return ctx.openGastoModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 6);
      \u0275\u0275element(10, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Registrar Gasto ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275listener("click", function CajaComponent_Template_button_click_12_listener() {
        return ctx.openCierreModal();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 6);
      \u0275\u0275element(14, "rect", 9)(15, "path", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Cierre de Caja ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "div", 11)(18, "div", 12)(19, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(20, "svg", 14);
      \u0275\u0275element(21, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(22, "div", 16)(23, "span", 17);
      \u0275\u0275text(24, "Ingresos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 18);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 19)(28, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 14);
      \u0275\u0275element(30, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "div", 16)(32, "span", 17);
      \u0275\u0275text(33, "Gastos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 18);
      \u0275\u0275text(35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "div", 20)(37, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 14);
      \u0275\u0275element(39, "path", 21)(40, "path", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(41, "div", 16)(42, "span", 17);
      \u0275\u0275text(43, "Balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span", 18);
      \u0275\u0275text(45);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 23)(47, "div", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 14);
      \u0275\u0275element(49, "path", 24)(50, "rect", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "div", 16)(52, "span", 17);
      \u0275\u0275text(53, "Transacciones");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span", 18);
      \u0275\u0275text(55);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(56, "div", 26)(57, "button", 27);
      \u0275\u0275listener("click", function CajaComponent_Template_button_click_57_listener() {
        return ctx.activeTab = "cobrar";
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(58, "svg", 6);
      \u0275\u0275element(59, "rect", 28)(60, "path", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275text(61, " Cobrar ");
      \u0275\u0275template(62, CajaComponent_span_62_Template, 2, 1, "span", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(63, "button", 27);
      \u0275\u0275listener("click", function CajaComponent_Template_button_click_63_listener() {
        return ctx.activeTab = "transacciones";
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(64, "svg", 6);
      \u0275\u0275element(65, "path", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275text(66, " Transacciones ");
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(67, "span", 32);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "button", 27);
      \u0275\u0275listener("click", function CajaComponent_Template_button_click_69_listener() {
        return ctx.activeTab = "resumen";
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(70, "svg", 6);
      \u0275\u0275element(71, "path", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275text(72, " Resumen ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(73, CajaComponent_div_73_Template, 3, 2, "div", 34)(74, CajaComponent_div_74_Template, 3, 2, "div", 34)(75, CajaComponent_div_75_Template, 27, 9, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275template(76, CajaComponent_div_76_Template, 14, 4, "div", 35)(77, CajaComponent_div_77_Template, 23, 5, "div", 35)(78, CajaComponent_div_78_Template, 12, 3, "div", 35);
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275textInterpolate1("S/. ", ctx.summary.ingresos.toFixed(2));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("S/. ", ctx.summary.gastos.toFixed(2));
      \u0275\u0275advance();
      \u0275\u0275classProp("negative", ctx.summary.balance < 0);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("S/. ", ctx.summary.balance.toFixed(2));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.summary.totalTransacciones);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "cobrar");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.ordenesListas.length > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "transacciones");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.transactions.length);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab === "resumen");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.activeTab === "cobrar");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "transacciones");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeTab === "resumen");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCobrarModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showGastoModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCierreModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, HttpClientModule], styles: ['\n\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.caja-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n  background: #f4f4f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111;\n  margin: 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  margin-top: 2px;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.btn-gasto[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 16px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #555;\n  cursor: pointer;\n  transition: background .2s;\n}\n.btn-gasto[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.btn-cierre[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 16px;\n  background: #111827;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity .2s;\n}\n.btn-cierre[_ngcontent-%COMP%]:hover {\n  opacity: .88;\n}\n.summary-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n  margin-bottom: 1.5rem;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  border: 1px solid #ebebeb;\n}\n.summary-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.summary-card.income[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #059669;\n}\n.summary-card.expense[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.summary-card.balance[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.summary-card.balance.negative[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.summary-card.orders[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #d97706;\n}\n.summary-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #888;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.summary-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 20px;\n  font-weight: 700;\n  color: #111;\n  margin-top: 2px;\n}\n.summary-card.income[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.summary-card.expense[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .5rem;\n  margin-bottom: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .4rem;\n  padding: .7rem 1.1rem;\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  color: #888;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all .2s;\n  margin-bottom: -1px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #111;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #f97316;\n  border-bottom-color: #f97316;\n}\n.tab-badge[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #888;\n  font-size: 11px;\n  padding: 2px 7px;\n  border-radius: 999px;\n  font-weight: 600;\n}\n.tab-btn.active[_ngcontent-%COMP%]   .tab-badge[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #f97316;\n}\n.orders-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1rem;\n}\n.order-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ebebeb;\n  border-radius: 12px;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  transition: box-shadow .2s;\n}\n.order-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .07);\n}\n.order-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.order-table[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111;\n}\n.order-comanda[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin-left: 8px;\n}\n.badge-ready[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n}\n.order-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  font-size: 12px;\n  color: #888;\n}\n.order-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.order-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.item-qty-badge[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 4px;\n  padding: 1px 6px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #555;\n  flex-shrink: 0;\n}\n.item-name[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #333;\n}\n.item-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111;\n  font-size: 12px;\n}\n.order-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 8px;\n  border-top: 1px solid #f0f0f0;\n  font-size: 13px;\n  color: #888;\n}\n.total-amount[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #059669;\n}\n.btn-cobrar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #059669,\n      #047857);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity .2s;\n}\n.btn-cobrar[_ngcontent-%COMP%]:hover {\n  opacity: .9;\n}\n.transactions-list[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #ebebeb;\n  overflow: hidden;\n}\n.transaction-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f3f3f3;\n  transition: background .15s;\n}\n.transaction-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.transaction-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.tx-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.tx-income[_ngcontent-%COMP%] {\n  background: #d1fae5;\n}\n.tx-expense[_ngcontent-%COMP%] {\n  background: #fee2e2;\n}\n.tx-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.tx-desc[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n}\n.tx-meta[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #888;\n  margin-top: 2px;\n}\n.tx-method[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.tx-table[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.tx-amount[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.amount-income[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.amount-expense[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.resumen-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1rem;\n}\n.resumen-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #ebebeb;\n  padding: 1.25rem;\n}\n.resumen-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 1rem;\n}\n.method-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.method-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.method-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.method-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.method-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n}\n.method-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n}\n.method-total[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #059669;\n}\n.balance-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.balance-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.balance-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #555;\n}\n.balance-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n}\n.balance-value.income[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.balance-value.expense[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.balance-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #f0f0f0;\n}\n.balance-row.total[_ngcontent-%COMP%]   .balance-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #111;\n}\n.balance-row.total[_ngcontent-%COMP%]   .balance-value[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #ccc;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #aaa;\n  font-weight: 600;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #bbb;\n}\n.empty-small[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #bbb;\n  text-align: center;\n  padding: 1rem;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  width: 100%;\n  max-width: 460px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, .15);\n  animation: _ngcontent-%COMP%_modalIn .2s ease;\n}\n@keyframes _ngcontent-%COMP%_modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111;\n  margin: 0;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #aaa;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  border-radius: 6px;\n  transition: background .2s;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #555;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px 20px;\n  border-top: 1px solid #f0f0f0;\n}\n.cobrar-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 10px;\n  padding: 14px 16px;\n  margin-bottom: 16px;\n  font-size: 14px;\n  color: #166534;\n}\n.cobrar-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #059669;\n}\n.payment-methods[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-top: 8px;\n}\n.payment-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 14px 10px;\n  background: #f9fafb;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all .2s;\n  font-size: 13px;\n  font-weight: 500;\n  color: #555;\n}\n.payment-btn-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.payment-btn[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  background: #f3f4f6;\n}\n.payment-btn.selected[_ngcontent-%COMP%] {\n  border-color: #f97316;\n  background: #fff7ed;\n  color: #c2410c;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 6px;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fafafa;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  color: #111;\n  font-size: 14px;\n  outline: none;\n  transition: border-color .2s;\n  box-sizing: border-box;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #f97316;\n  background: #fff;\n}\n.form-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n  padding: 10px 12px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-top: 8px;\n}\n.cierre-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  border: 1px solid #fde68a;\n  border-radius: 8px;\n  padding: 12px;\n  font-size: 13px;\n  color: #92400e;\n  margin-bottom: 16px;\n}\n.cierre-preview[_ngcontent-%COMP%], \n.cierre-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cierre-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  color: #555;\n}\n.cierre-row.total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #111;\n  font-size: 16px;\n  border-top: 1px solid #f0f0f0;\n  padding-top: 10px;\n}\n.cierre-result[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.cierre-check[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 8px;\n}\n.cierre-result[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 4px;\n}\n.cierre-result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  margin-bottom: 16px;\n}\n.income[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.expense[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  color: #555;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background .2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  border: none;\n  color: #fff;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity .2s;\n}\n.btn-save.green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #059669,\n      #047857);\n}\n.btn-save.red[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #dc2626,\n      #b91c1c);\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: .88;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: .55;\n  cursor: not-allowed;\n}\n@media (max-width: 600px) {\n  .caja-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .summary-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .orders-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .payment-methods[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=caja.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CajaComponent, [{
    type: Component,
    args: [{ selector: "app-caja", standalone: true, imports: [CommonModule, FormsModule, HttpClientModule], template: `<div class="caja-page">\r
\r
  <!-- HEADER -->\r
  <div class="page-header">\r
    <div>\r
      <h1 class="page-title">Flujo de Caja</h1>\r
      <p class="page-subtitle">Gesti\xF3n de cobros y transacciones del d\xEDa</p>\r
    </div>\r
    <div class="header-actions">\r
      <button class="btn-gasto" (click)="openGastoModal()">\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>\r
        Registrar Gasto\r
      </button>\r
      <button class="btn-cierre" (click)="openCierreModal()">\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>\r
        Cierre de Caja\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- RESUMEN R\xC1PIDO -->\r
  <div class="summary-cards">\r
    <div class="summary-card income">\r
      <div class="summary-icon">\r
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>\r
      </div>\r
      <div class="summary-info">\r
        <span class="summary-label">Ingresos</span>\r
        <span class="summary-value">S/. {{ summary.ingresos.toFixed(2) }}</span>\r
      </div>\r
    </div>\r
    <div class="summary-card expense">\r
      <div class="summary-icon">\r
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>\r
      </div>\r
      <div class="summary-info">\r
        <span class="summary-label">Gastos</span>\r
        <span class="summary-value">S/. {{ summary.gastos.toFixed(2) }}</span>\r
      </div>\r
    </div>\r
    <div class="summary-card balance" [class.negative]="summary.balance < 0">\r
      <div class="summary-icon">\r
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/></svg>\r
      </div>\r
      <div class="summary-info">\r
        <span class="summary-label">Balance</span>\r
        <span class="summary-value">S/. {{ summary.balance.toFixed(2) }}</span>\r
      </div>\r
    </div>\r
    <div class="summary-card orders">\r
      <div class="summary-icon">\r
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>\r
      </div>\r
      <div class="summary-info">\r
        <span class="summary-label">Transacciones</span>\r
        <span class="summary-value">{{ summary.totalTransacciones }}</span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- TABS -->\r
  <div class="tabs">\r
    <button class="tab-btn" [class.active]="activeTab === 'cobrar'" (click)="activeTab = 'cobrar'">\r
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>\r
      Cobrar\r
      <span class="tab-badge" *ngIf="ordenesListas.length > 0">{{ ordenesListas.length }}</span>\r
    </button>\r
    <button class="tab-btn" [class.active]="activeTab === 'transacciones'" (click)="activeTab = 'transacciones'">\r
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>\r
      Transacciones\r
      <span class="tab-badge">{{ transactions.length }}</span>\r
    </button>\r
    <button class="tab-btn" [class.active]="activeTab === 'resumen'" (click)="activeTab = 'resumen'">\r
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>\r
      Resumen\r
    </button>\r
  </div>\r
\r
  <!-- \u2550\u2550 TAB: COBRAR \u2550\u2550 -->\r
  <div *ngIf="activeTab === 'cobrar'" class="tab-content">\r
    <div *ngIf="ordenesListas.length === 0" class="empty-state">\r
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>\r
      <p>No hay \xF3rdenes listas para cobrar</p>\r
      <span>Las \xF3rdenes aparecen aqu\xED cuando el chef las marca como "Listo"</span>\r
    </div>\r
\r
    <div class="orders-grid" *ngIf="ordenesListas.length > 0">\r
      <div class="order-card" *ngFor="let order of ordenesListas">\r
        <div class="order-card-header">\r
          <div>\r
            <span class="order-table">Mesa {{ order.tableNumber }}</span>\r
            <span class="order-comanda">Comanda {{ order.comanda }}</span>\r
          </div>\r
          <span class="badge-ready">Listo</span>\r
        </div>\r
\r
        <div class="order-meta">\r
          <span>\u{1F550} {{ formatTime(order.createdAt) }}</span>\r
          <span *ngIf="order.waiterName">\u{1F464} {{ order.waiterName }}</span>\r
          <span>\u{1F37D}\uFE0F {{ order.mealType }}</span>\r
        </div>\r
\r
        <div class="order-items">\r
          <div class="order-item" *ngFor="let item of order.items">\r
            <span class="item-qty-badge">{{ item.quantity }}x</span>\r
            <span class="item-name">{{ item.productName }}</span>\r
            <span class="item-price">S/. {{ (item.quantity * item.unitPrice).toFixed(2) }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="order-total">\r
          <span>Total a cobrar</span>\r
          <span class="total-amount">S/. {{ order.total.toFixed(2) }}</span>\r
        </div>\r
\r
        <button class="btn-cobrar" (click)="openCobrarModal(order)">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>\r
          Cobrar Mesa {{ order.tableNumber }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550 TAB: TRANSACCIONES \u2550\u2550 -->\r
  <div *ngIf="activeTab === 'transacciones'" class="tab-content">\r
    <div *ngIf="transactions.length === 0" class="empty-state">\r
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>\r
      <p>No hay transacciones hoy</p>\r
    </div>\r
\r
    <div class="transactions-list" *ngIf="transactions.length > 0">\r
      <div class="transaction-row" *ngFor="let t of transactions">\r
        <div class="tx-icon" [class.tx-income]="t.type === 'ingreso'" [class.tx-expense]="t.type === 'gasto'">\r
          <span *ngIf="t.type === 'ingreso'">{{ getPaymentIcon(t.paymentMethod) }}</span>\r
          <span *ngIf="t.type === 'gasto'">\u{1F4E4}</span>\r
        </div>\r
        <div class="tx-info">\r
          <span class="tx-desc">{{ t.description }}</span>\r
          <span class="tx-meta">\r
            {{ formatTime(t.createdAt) }}\r
            <span *ngIf="t.paymentMethod" class="tx-method">\u2022 {{ t.paymentMethod }}</span>\r
            <span *ngIf="t.tableNumber" class="tx-table">\u2022 Mesa {{ t.tableNumber }}</span>\r
          </span>\r
        </div>\r
        <span class="tx-amount" [class.amount-income]="t.type === 'ingreso'" [class.amount-expense]="t.type === 'gasto'">\r
          {{ t.type === 'ingreso' ? '+' : '-' }}S/. {{ t.amount.toFixed(2) }}\r
        </span>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550 TAB: RESUMEN \u2550\u2550 -->\r
  <div *ngIf="activeTab === 'resumen'" class="tab-content">\r
    <div class="resumen-grid">\r
      <!-- Por m\xE9todo de pago -->\r
      <div class="resumen-card">\r
        <h3 class="resumen-title">Ingresos por m\xE9todo de pago</h3>\r
        <div *ngIf="summary.porMetodoPago.length === 0" class="empty-small">Sin ingresos a\xFAn</div>\r
        <div class="method-list" *ngIf="summary.porMetodoPago.length > 0">\r
          <div class="method-row" *ngFor="let m of summary.porMetodoPago">\r
            <div class="method-left">\r
              <span class="method-icon">{{ getPaymentIcon(m.metodo) }}</span>\r
              <span class="method-name">{{ m.metodo }}</span>\r
              <span class="method-count">{{ m.count }} cobro{{ m.count !== 1 ? 's' : '' }}</span>\r
            </div>\r
            <span class="method-total">S/. {{ m.total.toFixed(2) }}</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Balance del d\xEDa -->\r
      <div class="resumen-card">\r
        <h3 class="resumen-title">Balance del d\xEDa</h3>\r
        <div class="balance-detail">\r
          <div class="balance-row">\r
            <span class="balance-label">Total ingresos</span>\r
            <span class="balance-value income">S/. {{ summary.ingresos.toFixed(2) }}</span>\r
          </div>\r
          <div class="balance-row">\r
            <span class="balance-label">Total gastos</span>\r
            <span class="balance-value expense">- S/. {{ summary.gastos.toFixed(2) }}</span>\r
          </div>\r
          <div class="balance-divider"></div>\r
          <div class="balance-row total">\r
            <span class="balance-label">Balance neto</span>\r
            <span class="balance-value" [class.income]="summary.balance >= 0" [class.expense]="summary.balance < 0">\r
              S/. {{ summary.balance.toFixed(2) }}\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<!-- \u2550\u2550 MODAL COBRAR \u2550\u2550 -->\r
<div class="modal-overlay" *ngIf="showCobrarModal" (click)="showCobrarModal = false">\r
  <div class="modal" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2>Cobrar Mesa {{ selectedOrder?.tableNumber }}</h2>\r
      <button class="modal-close" (click)="showCobrarModal = false">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>\r
      </button>\r
    </div>\r
    <div class="modal-body" *ngIf="selectedOrder">\r
      <div class="cobrar-total">\r
        <span>Total a cobrar</span>\r
        <strong>S/. {{ selectedOrder.total.toFixed(2) }}</strong>\r
      </div>\r
\r
      <div class="form-group">\r
        <label>M\xE9todo de pago</label>\r
        <div class="payment-methods">\r
          <button *ngFor="let method of paymentMethods"\r
            class="payment-btn"\r
            [class.selected]="selectedPaymentMethod === method"\r
            (click)="selectedPaymentMethod = method">\r
            <span class="payment-btn-icon">{{ getPaymentIcon(method) }}</span>\r
            <span>{{ method }}</span>\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn-cancel" (click)="showCobrarModal = false">Cancelar</button>\r
      <button class="btn-save green" (click)="cobrarOrden()" [disabled]="procesando">\r
        {{ procesando ? 'Procesando...' : 'Confirmar Cobro' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550 MODAL GASTO \u2550\u2550 -->\r
<div class="modal-overlay" *ngIf="showGastoModal" (click)="showGastoModal = false">\r
  <div class="modal" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2>Registrar Gasto</h2>\r
      <button class="modal-close" (click)="showGastoModal = false">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>\r
      </button>\r
    </div>\r
    <div class="modal-body">\r
      <div class="form-group">\r
        <label>Descripci\xF3n *</label>\r
        <input type="text" [(ngModel)]="gastoForm.description" placeholder="Ej: Compra de ingredientes" class="form-input">\r
      </div>\r
      <div class="form-group">\r
        <label>Monto (S/.) *</label>\r
        <input type="number" [(ngModel)]="gastoForm.amount" min="0" step="0.50" class="form-input">\r
      </div>\r
      <div class="form-error" *ngIf="gastoError">{{ gastoError }}</div>\r
    </div>\r
    <div class="modal-footer">\r
      <button class="btn-cancel" (click)="showGastoModal = false">Cancelar</button>\r
      <button class="btn-save" (click)="registrarGasto()" [disabled]="procesando">\r
        {{ procesando ? 'Guardando...' : 'Registrar Gasto' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- \u2550\u2550 MODAL CIERRE \u2550\u2550 -->\r
<div class="modal-overlay" *ngIf="showCierreModal" (click)="showCierreModal = false">\r
  <div class="modal" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <h2>Cierre de Caja</h2>\r
      <button class="modal-close" (click)="showCierreModal = false">\r
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>\r
      </button>\r
    </div>\r
    <div class="modal-body">\r
      <!-- Resultado del cierre -->\r
      <div *ngIf="cierreResult" class="cierre-result">\r
        <div class="cierre-check">\u2705</div>\r
        <h3>Caja cerrada correctamente</h3>\r
        <p>{{ cierreResult.fecha }}</p>\r
        <div class="cierre-summary">\r
          <div class="cierre-row"><span>Ingresos</span><strong class="income">S/. {{ cierreResult.ingresos?.toFixed(2) }}</strong></div>\r
          <div class="cierre-row"><span>Gastos</span><strong class="expense">S/. {{ cierreResult.gastos?.toFixed(2) }}</strong></div>\r
          <div class="cierre-row total"><span>Balance final</span><strong>S/. {{ cierreResult.balance?.toFixed(2) }}</strong></div>\r
        </div>\r
        <button class="btn-save" style="width:100%;margin-top:1rem" (click)="showCierreModal = false">Cerrar</button>\r
      </div>\r
\r
      <!-- Confirmaci\xF3n -->\r
      <div *ngIf="!cierreResult">\r
        <p class="cierre-warning">\r
          \u26A0\uFE0F Esta acci\xF3n cerrar\xE1 todas las transacciones del d\xEDa. El resumen quedar\xE1 guardado.\r
        </p>\r
        <div class="cierre-preview">\r
          <div class="cierre-row"><span>Ingresos del d\xEDa</span><strong>S/. {{ summary.ingresos.toFixed(2) }}</strong></div>\r
          <div class="cierre-row"><span>Gastos del d\xEDa</span><strong>S/. {{ summary.gastos.toFixed(2) }}</strong></div>\r
          <div class="cierre-row total"><span>Balance</span><strong>S/. {{ summary.balance.toFixed(2) }}</strong></div>\r
        </div>\r
      </div>\r
    </div>\r
    <div class="modal-footer" *ngIf="!cierreResult">\r
      <button class="btn-cancel" (click)="showCierreModal = false">Cancelar</button>\r
      <button class="btn-save red" (click)="ejecutarCierre()" [disabled]="procesando">\r
        {{ procesando ? 'Cerrando...' : 'Confirmar Cierre' }}\r
      </button>\r
    </div>\r
  </div>\r
</div>`, styles: ['/* src/app/components/caja/caja.css */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.caja-page {\n  padding: 2rem;\n  min-height: 100vh;\n  background: #f4f4f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111;\n  margin: 0;\n}\n.page-subtitle {\n  font-size: 13px;\n  color: #888;\n  margin-top: 2px;\n}\n.header-actions {\n  display: flex;\n  gap: 10px;\n}\n.btn-gasto {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 16px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #555;\n  cursor: pointer;\n  transition: background .2s;\n}\n.btn-gasto:hover {\n  background: #f3f4f6;\n}\n.btn-cierre {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 16px;\n  background: #111827;\n  border: none;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #fff;\n  cursor: pointer;\n  transition: opacity .2s;\n}\n.btn-cierre:hover {\n  opacity: .88;\n}\n.summary-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n  margin-bottom: 1.5rem;\n}\n.summary-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  border: 1px solid #ebebeb;\n}\n.summary-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.summary-card.income .summary-icon {\n  background: #d1fae5;\n  color: #059669;\n}\n.summary-card.expense .summary-icon {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.summary-card.balance .summary-icon {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.summary-card.balance.negative .summary-icon {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.summary-card.orders .summary-icon {\n  background: #fef3c7;\n  color: #d97706;\n}\n.summary-label {\n  display: block;\n  font-size: 11px;\n  color: #888;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.summary-value {\n  display: block;\n  font-size: 20px;\n  font-weight: 700;\n  color: #111;\n  margin-top: 2px;\n}\n.summary-card.income .summary-value {\n  color: #059669;\n}\n.summary-card.expense .summary-value {\n  color: #dc2626;\n}\n.tabs {\n  display: flex;\n  gap: .5rem;\n  margin-bottom: 1.5rem;\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 0;\n}\n.tab-btn {\n  display: flex;\n  align-items: center;\n  gap: .4rem;\n  padding: .7rem 1.1rem;\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  color: #888;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all .2s;\n  margin-bottom: -1px;\n}\n.tab-btn:hover {\n  color: #111;\n}\n.tab-btn.active {\n  color: #f97316;\n  border-bottom-color: #f97316;\n}\n.tab-badge {\n  background: #f3f4f6;\n  color: #888;\n  font-size: 11px;\n  padding: 2px 7px;\n  border-radius: 999px;\n  font-weight: 600;\n}\n.tab-btn.active .tab-badge {\n  background: #fff7ed;\n  color: #f97316;\n}\n.orders-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1rem;\n}\n.order-card {\n  background: #fff;\n  border: 1px solid #ebebeb;\n  border-radius: 12px;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  transition: box-shadow .2s;\n}\n.order-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .07);\n}\n.order-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.order-table {\n  font-size: 18px;\n  font-weight: 700;\n  color: #111;\n}\n.order-comanda {\n  font-size: 12px;\n  color: #888;\n  margin-left: 8px;\n}\n.badge-ready {\n  background: #d1fae5;\n  color: #065f46;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n}\n.order-meta {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  font-size: 12px;\n  color: #888;\n}\n.order-items {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.order-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.item-qty-badge {\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 4px;\n  padding: 1px 6px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #555;\n  flex-shrink: 0;\n}\n.item-name {\n  flex: 1;\n  color: #333;\n}\n.item-price {\n  font-weight: 600;\n  color: #111;\n  font-size: 12px;\n}\n.order-total {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 8px;\n  border-top: 1px solid #f0f0f0;\n  font-size: 13px;\n  color: #888;\n}\n.total-amount {\n  font-size: 20px;\n  font-weight: 700;\n  color: #059669;\n}\n.btn-cobrar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #059669,\n      #047857);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity .2s;\n}\n.btn-cobrar:hover {\n  opacity: .9;\n}\n.transactions-list {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #ebebeb;\n  overflow: hidden;\n}\n.transaction-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border-bottom: 1px solid #f3f3f3;\n  transition: background .15s;\n}\n.transaction-row:last-child {\n  border-bottom: none;\n}\n.transaction-row:hover {\n  background: #fafafa;\n}\n.tx-icon {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.tx-income {\n  background: #d1fae5;\n}\n.tx-expense {\n  background: #fee2e2;\n}\n.tx-info {\n  flex: 1;\n}\n.tx-desc {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n}\n.tx-meta {\n  display: block;\n  font-size: 11px;\n  color: #888;\n  margin-top: 2px;\n}\n.tx-method {\n  color: #6b7280;\n}\n.tx-table {\n  color: #6b7280;\n}\n.tx-amount {\n  font-size: 15px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.amount-income {\n  color: #059669;\n}\n.amount-expense {\n  color: #dc2626;\n}\n.resumen-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1rem;\n}\n.resumen-card {\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid #ebebeb;\n  padding: 1.25rem;\n}\n.resumen-title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 1rem;\n}\n.method-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.method-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.method-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.method-icon {\n  font-size: 18px;\n}\n.method-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n}\n.method-count {\n  font-size: 11px;\n  color: #888;\n}\n.method-total {\n  font-size: 14px;\n  font-weight: 700;\n  color: #059669;\n}\n.balance-detail {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.balance-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.balance-label {\n  font-size: 13px;\n  color: #555;\n}\n.balance-value {\n  font-size: 15px;\n  font-weight: 700;\n}\n.balance-value.income {\n  color: #059669;\n}\n.balance-value.expense {\n  color: #dc2626;\n}\n.balance-divider {\n  height: 1px;\n  background: #f0f0f0;\n}\n.balance-row.total .balance-label {\n  font-weight: 700;\n  color: #111;\n}\n.balance-row.total .balance-value {\n  font-size: 18px;\n}\n.empty-state {\n  text-align: center;\n  padding: 3rem;\n  color: #ccc;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.empty-state p {\n  font-size: 15px;\n  color: #aaa;\n  font-weight: 600;\n}\n.empty-state span {\n  font-size: 12px;\n  color: #bbb;\n}\n.empty-small {\n  font-size: 13px;\n  color: #bbb;\n  text-align: center;\n  padding: 1rem;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal {\n  background: #fff;\n  border-radius: 16px;\n  width: 100%;\n  max-width: 460px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, .15);\n  animation: modalIn .2s ease;\n}\n@keyframes modalIn {\n  from {\n    opacity: 0;\n    transform: translateY(12px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header h2 {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111;\n  margin: 0;\n}\n.modal-close {\n  background: none;\n  border: none;\n  color: #aaa;\n  cursor: pointer;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  border-radius: 6px;\n  transition: background .2s;\n}\n.modal-close:hover {\n  background: #f3f4f6;\n  color: #555;\n}\n.modal-body {\n  padding: 20px 24px;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px 20px;\n  border-top: 1px solid #f0f0f0;\n}\n.cobrar-total {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 10px;\n  padding: 14px 16px;\n  margin-bottom: 16px;\n  font-size: 14px;\n  color: #166534;\n}\n.cobrar-total strong {\n  font-size: 22px;\n  color: #059669;\n}\n.payment-methods {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-top: 8px;\n}\n.payment-btn {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 14px 10px;\n  background: #f9fafb;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all .2s;\n  font-size: 13px;\n  font-weight: 500;\n  color: #555;\n}\n.payment-btn-icon {\n  font-size: 24px;\n}\n.payment-btn:hover {\n  border-color: #d1d5db;\n  background: #f3f4f6;\n}\n.payment-btn.selected {\n  border-color: #f97316;\n  background: #fff7ed;\n  color: #c2410c;\n}\n.form-group {\n  margin-bottom: 14px;\n}\n.form-group label {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n  margin-bottom: 6px;\n}\n.form-input {\n  width: 100%;\n  background: #fafafa;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  padding: 10px 12px;\n  color: #111;\n  font-size: 14px;\n  outline: none;\n  transition: border-color .2s;\n  box-sizing: border-box;\n}\n.form-input:focus {\n  border-color: #f97316;\n  background: #fff;\n}\n.form-error {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n  padding: 10px 12px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-top: 8px;\n}\n.cierre-warning {\n  background: #fef3c7;\n  border: 1px solid #fde68a;\n  border-radius: 8px;\n  padding: 12px;\n  font-size: 13px;\n  color: #92400e;\n  margin-bottom: 16px;\n}\n.cierre-preview,\n.cierre-summary {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cierre-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  color: #555;\n}\n.cierre-row.total {\n  font-weight: 700;\n  color: #111;\n  font-size: 16px;\n  border-top: 1px solid #f0f0f0;\n  padding-top: 10px;\n}\n.cierre-result {\n  text-align: center;\n}\n.cierre-check {\n  font-size: 40px;\n  margin-bottom: 8px;\n}\n.cierre-result h3 {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111;\n  margin-bottom: 4px;\n}\n.cierre-result p {\n  font-size: 13px;\n  color: #888;\n  margin-bottom: 16px;\n}\n.income {\n  color: #059669;\n}\n.expense {\n  color: #dc2626;\n}\n.btn-cancel {\n  padding: 10px 20px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  color: #555;\n  border-radius: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background .2s;\n}\n.btn-cancel:hover {\n  background: #f3f4f6;\n}\n.btn-save {\n  padding: 10px 24px;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  border: none;\n  color: #fff;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity .2s;\n}\n.btn-save.green {\n  background:\n    linear-gradient(\n      90deg,\n      #059669,\n      #047857);\n}\n.btn-save.red {\n  background:\n    linear-gradient(\n      90deg,\n      #dc2626,\n      #b91c1c);\n}\n.btn-save:hover:not(:disabled) {\n  opacity: .88;\n}\n.btn-save:disabled {\n  opacity: .55;\n  cursor: not-allowed;\n}\n@media (max-width: 600px) {\n  .caja-page {\n    padding: 1rem;\n  }\n  .summary-cards {\n    grid-template-columns: 1fr 1fr;\n  }\n  .orders-grid {\n    grid-template-columns: 1fr;\n  }\n  .payment-methods {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=caja.css.map */\n'] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CajaComponent, { className: "CajaComponent", filePath: "app/components/caja/caja.ts", lineNumber: 45 });
})();
export {
  CajaComponent
};
//# sourceMappingURL=chunk-5JLQNMA5.js.map
