import {
  AuthService
} from "./chunk-4XVP637W.js";
import {
  HubConnectionBuilder,
  HubConnectionState
} from "./chunk-OSHSTZL5.js";
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
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-IP2V25EC.js";
import {
  BehaviorSubject,
  Component,
  Injectable,
  __async,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XHDJFZT2.js";

// src/app/services/order.service.ts
var API_URL = environment.apiBaseUrl;
var OrderService = class _OrderService {
  http;
  hubConnection = null;
  orders$ = new BehaviorSubject([]);
  productCache = /* @__PURE__ */ new Map();
  constructor(http) {
    this.http = http;
    this.initializeConnection();
    this.preloadProducts();
  }
  preloadProducts() {
    this.http.get(`${API_URL}/api/product`).subscribe({
      next: (products) => products.forEach((p) => this.productCache.set(p.id, p.name)),
      error: () => console.warn("No se pudo pre-cargar productos")
    });
  }
  resolveProductName(productId, orderItems, inlineProduct, inlineName) {
    if (inlineName)
      return inlineName;
    if (inlineProduct?.name)
      return inlineProduct.name;
    if (this.productCache.has(productId))
      return this.productCache.get(productId);
    const found = orderItems.find((oi) => oi.productId === productId);
    if (found?.product?.name)
      return found.product.name;
    return `Producto #${productId}`;
  }
  initializeConnection() {
    this.hubConnection = new HubConnectionBuilder().withUrl(`${API_URL}/hubs/orders`).withAutomaticReconnect().build();
    this.hubConnection.on("NuevoPedido", () => this.loadOrders());
    this.hubConnection.on("PedidoListo", () => this.loadOrders());
    this.hubConnection.on("ActualizacionPedido", () => this.loadOrders());
    this.hubConnection.on("OrderStatusChanged", () => this.loadOrders());
  }
  loadOrders() {
    return new Promise((resolve, reject) => {
      this.http.get(`${API_URL}/api/order`).subscribe({
        next: (orders) => __async(this, null, function* () {
          const enriched = yield Promise.all(orders.map((o) => this.enrichOrderWithRounds(o)));
          this.orders$.next(enriched);
          resolve();
        }),
        error: (err) => {
          console.error("Error cargando \xF3rdenes:", err);
          reject(err);
        }
      });
    });
  }
  enrichOrderWithRounds(order) {
    return new Promise((resolve) => {
      this.http.get(`${API_URL}/api/order/${order.id}/history`).subscribe({
        next: (history) => {
          const rounds = this.buildRounds(history, order);
          resolve(__spreadProps(__spreadValues({}, order), { rounds, hasMultipleRounds: rounds.length > 1 }));
        },
        error: () => resolve(__spreadProps(__spreadValues({}, order), { rounds: [], hasMultipleRounds: false }))
      });
    });
  }
  buildRounds(history, order) {
    if (!history || history.length === 0) {
      return [{
        roundNumber: 1,
        action: "Inicial",
        createdAt: order.createdAt,
        items: order.items.map((i) => ({
          productId: i.productId,
          quantity: i.quantity,
          unitPrice: i.unitPrice,
          product: { id: i.productId, name: this.resolveProductName(i.productId, order.items, i.product) }
        })),
        isLatest: false,
        isCancelled: false,
        isModified: false,
        changes: []
      }];
    }
    const normalEntries = history.filter((h) => h.action === "Inicial" || h.action === "Agregado");
    const changeEntries = history.filter((h) => h.action === "Modificado" || h.action === "Cancelado");
    const changesByRound = /* @__PURE__ */ new Map();
    for (const entry of changeEntries) {
      let rawItems = [];
      try {
        const parsed = JSON.parse(entry.itemsAdded);
        if (Array.isArray(parsed))
          rawItems = parsed;
      } catch {
        rawItems = [];
      }
      for (const raw of rawItems) {
        const productId = raw.productId ?? raw.ProductId ?? 0;
        const quantity = raw.quantity ?? raw.Quantity ?? 1;
        const oldQty = raw.oldQuantity ?? raw.OldQuantity ?? void 0;
        const name = raw.productName ?? raw.ProductName ?? this.resolveProductName(productId, order.items);
        let targetRound = entry.roundNumber ?? this.findRoundForProduct(productId, normalEntries);
        const change = {
          action: entry.action,
          productId,
          productName: name,
          oldQuantity: oldQty,
          newQuantity: quantity,
          createdAt: entry.createdAt
        };
        if (!changesByRound.has(targetRound))
          changesByRound.set(targetRound, []);
        changesByRound.get(targetRound).push(change);
      }
    }
    const rounds = normalEntries.map((entry, idx) => {
      let rawItems = [];
      try {
        const parsed = JSON.parse(entry.itemsAdded);
        if (Array.isArray(parsed))
          rawItems = parsed;
      } catch {
        rawItems = [];
      }
      const roundNumber = idx + 1;
      const isLatest = normalEntries.length > 1 && idx === normalEntries.length - 1;
      const items = rawItems.map((raw) => {
        const productId = raw.productId ?? raw.ProductId ?? 0;
        const quantity = raw.quantity ?? raw.Quantity ?? 1;
        const unitPrice = raw.unitPrice ?? raw.UnitPrice ?? 0;
        const inlineName = raw.productName ?? raw.ProductName ?? "";
        const inlineProduct = raw.product ?? raw.Product ?? null;
        const name = this.resolveProductName(productId, order.items, inlineProduct, inlineName);
        return { productId, quantity, unitPrice, product: { id: productId, name } };
      });
      return {
        roundNumber,
        action: entry.action,
        createdAt: entry.createdAt,
        items,
        isLatest,
        isCancelled: false,
        isModified: false,
        changes: changesByRound.get(roundNumber) ?? []
      };
    });
    return rounds;
  }
  // Fallback: buscar en qué ronda normal apareció primero un producto
  findRoundForProduct(productId, normalEntries) {
    for (let i = 0; i < normalEntries.length; i++) {
      try {
        const items = JSON.parse(normalEntries[i].itemsAdded);
        if (Array.isArray(items) && items.some((it) => (it.productId ?? it.ProductId) === productId)) {
          return i + 1;
        }
      } catch {
      }
    }
    return 1;
  }
  getOrdersByDate(date) {
    const pad = (n) => String(n).padStart(2, "0");
    const selectedStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    return this.orders$.value.filter((order) => {
      const d = new Date(order.createdAt);
      const orderStr = d.toLocaleDateString("es-PE", {
        timeZone: "America/Lima",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
      const [day, month, year] = orderStr.split("/");
      return `${year}-${month}-${day}` === selectedStr;
    });
  }
  getTodayOrders() {
    const now = /* @__PURE__ */ new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
    return this.orders$.value.filter((o) => {
      const d = new Date(o.createdAt);
      const orderStr = d.toLocaleDateString("es-PE", { timeZone: "America/Lima", year: "numeric", month: "2-digit", day: "2-digit" });
      const [day, month, year] = orderStr.split("/");
      return `${year}-${month}-${day}` === today;
    });
  }
  getOrders() {
    return this.orders$.value;
  }
  connect() {
    if (this.hubConnection?.state === HubConnectionState.Connected)
      return Promise.resolve();
    return this.hubConnection.start();
  }
  disconnect() {
    return this.hubConnection.stop();
  }
  joinKitchenGroup() {
    return this.hubConnection.invoke("JoinKitchenGroup");
  }
  // ✅ ELIMINADA la llamada SignalR errónea.
  //    El backend al recibir el PUT de updateOrderStatus ya emite los eventos
  //    automáticamente a todos los clientes conectados (cocina, mozos, cantadores).
  //    No hace falta invocar nada más desde el cliente.
  markOrderAsReady(orderId) {
    return Promise.resolve();
  }
  updateOrderStatus(orderId, status) {
    return new Promise((resolve, reject) => {
      this.http.put(`${API_URL}/api/order/${orderId}/status`, JSON.stringify(status), { headers: { "Content-Type": "application/json" } }).subscribe({ next: () => resolve(), error: reject });
    });
  }
  downloadComprobante(orderId) {
    return new Promise((resolve, reject) => {
      this.http.get(`${API_URL}/api/order/${orderId}/comprobante`, { responseType: "blob" }).subscribe({
        next: (blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = `Comprobante_${orderId}_${Date.now()}.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
          resolve();
        },
        error: reject
      });
    });
  }
  static \u0275fac = function OrderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/kitchen/kitchen-orders.component.ts
function KitchenOrdersComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function KitchenOrdersComponent_div_18_Template_div_click_0_listener() {
      const f_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(f_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeFilter === f_r2.key);
    \u0275\u0275attribute("data-status", f_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", f_r2.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getCounts(f_r2.key));
  }
}
function KitchenOrdersComponent_div_20_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", order_r4.rounds.length, " rondas");
  }
}
function KitchenOrdersComponent_div_20_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getElapsedSeconds(order_r4.createdAt, order_r4.status, order_r4.updatedAt) / 60 < 10 ? "En tiempo" : ctx_r2.getElapsedSeconds(order_r4.createdAt, order_r4.status, order_r4.updatedAt) / 60 < 20 ? "Demorado" : "Muy demorado", " ");
  }
}
function KitchenOrdersComponent_div_20_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Completado");
    \u0275\u0275elementContainerEnd();
  }
}
function KitchenOrdersComponent_div_20_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Cancelado");
    \u0275\u0275elementContainerEnd();
  }
}
function KitchenOrdersComponent_div_20_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 38);
    \u0275\u0275element(2, "path", 54)(3, "circle", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", order_r4.waiterName, " ");
  }
}
function KitchenOrdersComponent_div_20_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r4.entradas);
  }
}
function KitchenOrdersComponent_div_20_ng_container_41_div_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1, " \u2014 enviado");
    \u0275\u0275elementEnd();
  }
}
function KitchenOrdersComponent_div_20_ng_container_41_div_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 70);
    \u0275\u0275text(1, " \u2014 reci\xE9n lleg\xF3");
    \u0275\u0275elementEnd();
  }
}
function KitchenOrdersComponent_div_20_ng_container_41_div_3_div_11_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1, "nuevo");
    \u0275\u0275elementEnd();
  }
}
function KitchenOrdersComponent_div_20_ng_container_41_div_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "span", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, KitchenOrdersComponent_div_20_ng_container_41_div_3_div_11_span_5_Template, 2, 0, "span", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const round_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("item-qty-new", round_r6.isLatest);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r5.quantity, "x");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getProductName(item_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", round_r6.isLatest);
  }
}
function KitchenOrdersComponent_div_20_ng_container_41_div_3_ng_container_12_div_4_ng_container_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const change_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("era ", change_r7.oldQuantity, "x");
  }
}
function KitchenOrdersComponent_div_20_ng_container_41_div_3_ng_container_12_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 73);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 81);
    \u0275\u0275template(6, KitchenOrdersComponent_div_20_ng_container_41_div_3_ng_container_12_div_4_ng_container_1_span_6_Template, 2, 1, "span", 82);
    \u0275\u0275elementStart(7, "span", 83);
    \u0275\u0275text(8, "modificado");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const change_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", change_r7.newQuantity, "x");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(change_r7.productName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", change_r7.oldQuantity !== void 0);
  }
}
function KitchenOrdersComponent_div_20_ng_container_41_div_3_ng_container_12_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 86);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 87);
    \u0275\u0275text(6, "cancelado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const change_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", change_r7.newQuantity, "x");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(change_r7.productName);
  }
}
function KitchenOrdersComponent_div_20_ng_container_41_div_3_ng_container_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275template(1, KitchenOrdersComponent_div_20_ng_container_41_div_3_ng_container_12_div_4_ng_container_1_Template, 9, 3, "ng-container", 35)(2, KitchenOrdersComponent_div_20_ng_container_41_div_3_ng_container_12_div_4_ng_container_2_Template, 7, 2, "ng-container", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const change_r7 = ctx.$implicit;
    \u0275\u0275classProp("change-row-modified", change_r7.action === "Modificado")("change-row-cancelled", change_r7.action === "Cancelado");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", change_r7.action === "Modificado");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", change_r7.action === "Cancelado");
  }
}
function KitchenOrdersComponent_div_20_ng_container_41_div_3_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 76)(2, "span", 77);
    \u0275\u0275text(3, "\u270F\uFE0F cambios");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, KitchenOrdersComponent_div_20_ng_container_41_div_3_ng_container_12_div_4_Template, 3, 6, "div", 78);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const round_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", round_r6.changes);
  }
}
function KitchenOrdersComponent_div_20_ng_container_41_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div", 62);
    \u0275\u0275element(3, "div", 63);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275template(6, KitchenOrdersComponent_div_20_ng_container_41_div_3_span_6_Template, 2, 0, "span", 64)(7, KitchenOrdersComponent_div_20_ng_container_41_div_3_span_7_Template, 2, 0, "span", 65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 66);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 67);
    \u0275\u0275template(11, KitchenOrdersComponent_div_20_ng_container_41_div_3_div_11_Template, 6, 5, "div", 68)(12, KitchenOrdersComponent_div_20_ng_container_41_div_3_ng_container_12_Template, 5, 1, "ng-container", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const round_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("round-old", !round_r6.isLatest)("round-new", round_r6.isLatest)("round-has-changes", round_r6.changes && round_r6.changes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("round-header-old", !round_r6.isLatest)("round-header-new", round_r6.isLatest);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("dot-old", !round_r6.isLatest)("dot-new", round_r6.isLatest);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Ronda ", round_r6.roundNumber, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !round_r6.isLatest);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", round_r6.isLatest);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatTime(round_r6.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", round_r6.items);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", round_r6.changes && round_r6.changes.length > 0);
  }
}
function KitchenOrdersComponent_div_20_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275text(2, "Segundos");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, KitchenOrdersComponent_div_20_ng_container_41_div_3_Template, 13, 20, "div", 59);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", order_r4.rounds);
  }
}
function KitchenOrdersComponent_div_20_ng_template_42_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "span", 72);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r8.quantity, "x");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((item_r8.product == null ? null : item_r8.product.name) || "Producto");
  }
}
function KitchenOrdersComponent_div_20_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275text(1, "Productos");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, KitchenOrdersComponent_div_20_ng_template_42_div_2_Template, 5, 2, "div", 88);
  }
  if (rf & 2) {
    const order_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", order_r4.items);
  }
}
function KitchenOrdersComponent_div_20_button_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 90);
    \u0275\u0275listener("click", function KitchenOrdersComponent_div_20_button_45_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.markAsReady(order_r4.id));
    });
    \u0275\u0275text(1, "\u2713 Marcar como listo");
    \u0275\u0275elementEnd();
  }
}
function KitchenOrdersComponent_div_20_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 91);
    \u0275\u0275text(2, "Listo para entregar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 92);
    \u0275\u0275listener("click", function KitchenOrdersComponent_div_20_ng_container_46_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const order_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadComprobante(order_r4.id));
    });
    \u0275\u0275text(4, "Descargar Comprobante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function KitchenOrdersComponent_div_20_button_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275text(1, "Cancelado");
    \u0275\u0275elementEnd();
  }
}
function KitchenOrdersComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 25)(5, "span", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, KitchenOrdersComponent_div_20_span_7_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 28)(9, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 30);
    \u0275\u0275element(11, "circle", 31)(12, "polyline", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "span", 33);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 34);
    \u0275\u0275template(16, KitchenOrdersComponent_div_20_ng_container_16_Template, 2, 1, "ng-container", 35)(17, KitchenOrdersComponent_div_20_ng_container_17_Template, 2, 0, "ng-container", 35)(18, KitchenOrdersComponent_div_20_ng_container_18_Template, 2, 0, "ng-container", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 36)(20, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 38);
    \u0275\u0275element(22, "rect", 39)(23, "line", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 38);
    \u0275\u0275element(27, "circle", 31)(28, "polyline", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, KitchenOrdersComponent_div_20_div_30_Template, 5, 1, "div", 41);
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "div", 42);
    \u0275\u0275text(32, "Entradas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(33, KitchenOrdersComponent_div_20_div_33_Template, 3, 1, "div", 43);
    \u0275\u0275elementStart(34, "div", 44);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 38);
    \u0275\u0275element(36, "line", 45)(37, "path", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(39, "div", 47);
    \u0275\u0275elementStart(40, "div", 48);
    \u0275\u0275template(41, KitchenOrdersComponent_div_20_ng_container_41_Template, 4, 1, "ng-container", 49)(42, KitchenOrdersComponent_div_20_ng_template_42_Template, 3, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 50);
    \u0275\u0275template(45, KitchenOrdersComponent_div_20_button_45_Template, 2, 0, "button", 51)(46, KitchenOrdersComponent_div_20_ng_container_46_Template, 5, 0, "ng-container", 35)(47, KitchenOrdersComponent_div_20_button_47_Template, 2, 0, "button", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const flatItems_r11 = \u0275\u0275reference(43);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("card-multi-round", order_r4.hasMultipleRounds);
    \u0275\u0275property("ngClass", ctx_r2.getCardTimeClass(order_r4.createdAt, order_r4.status, order_r4.updatedAt, order_r4.tableNumber, order_r4.isParaLlevar));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", order_r4.tableNumber === 0 ? "Para llevar" : order_r4.isParaLlevar ? "Mesa " + order_r4.tableNumber + " \u2014 Para llevar" : "Mesa " + order_r4.tableNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getBadgeClass(order_r4.status, order_r4.tableNumber, order_r4.isParaLlevar));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r4.tableNumber === 0 || order_r4.isParaLlevar ? "Para llevar" : ctx_r2.getStatusLabel(order_r4.status), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r4.hasMultipleRounds);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.getTimerClass(order_r4.createdAt, order_r4.status, order_r4.updatedAt));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatElapsed(order_r4.createdAt, order_r4.status, order_r4.updatedAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", order_r4.status !== "Listo" && order_r4.status !== "Cancelado");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r4.status === "Listo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r4.status === "Cancelado");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" ", ctx_r2.formatDate(order_r4.createdAt), " \u2014 ", ctx_r2.formatTime(order_r4.createdAt), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", order_r4.mealType, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r4.waiterName);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", order_r4.entradas && order_r4.entradas.trim().length > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" S/. ", order_r4.total.toFixed(2), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", order_r4.rounds && order_r4.rounds.length > 0)("ngIfElse", flatItems_r11);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", order_r4.status === "Enviado a cocina" || order_r4.status === "Pendiente");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r4.status === "Listo");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", order_r4.status === "Cancelado");
  }
}
function KitchenOrdersComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275text(1, "Sin pedidos para mostrar");
    \u0275\u0275elementEnd();
  }
}
var KitchenOrdersComponent = class _KitchenOrdersComponent {
  orderService;
  auth;
  allOrders = [];
  filteredOrders = [];
  selectedDate = (() => {
    const now = /* @__PURE__ */ new Date();
    const pad = (n) => String(n).padStart(2, "0");
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  })();
  searchQuery = "";
  activeFilter = "all";
  filterOptions = [
    { key: "all", label: "Todos" },
    { key: "Enviado a cocina", label: "Nuevo" },
    { key: "Pendiente", label: "Preparando" },
    { key: "Listo", label: "Listo" },
    { key: "Cancelado", label: "Cancelado" }
  ];
  // Cronómetro
  _timerInterval;
  now = Date.now();
  constructor(orderService, auth) {
    this.orderService = orderService;
    this.auth = auth;
  }
  ngOnInit() {
    this.orderService.loadOrders().then(() => this.applyFiltersLocal());
    this.orderService.connect().then(() => {
      this.orderService.joinKitchenGroup();
    });
    this.orderService.orders$.subscribe(() => {
      this.applyFiltersLocal();
    });
    this._timerInterval = setInterval(() => {
      this.now = Date.now();
    }, 1e3);
  }
  ngOnDestroy() {
    this.orderService.disconnect();
    clearInterval(this._timerInterval);
  }
  logout() {
    this.auth.logout();
  }
  applyFilters() {
    this.orderService.loadOrders().then(() => this.applyFiltersLocal());
  }
  applyFiltersLocal() {
    const [year, month, day] = this.selectedDate.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    let orders = this.orderService.getOrdersByDate(date);
    if (this.activeFilter !== "all") {
      orders = orders.filter((o) => o.status === this.activeFilter);
    }
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      orders = orders.filter((o) => o.tableNumber.toString().includes(q) || o.tableNumber === 0 && "llevar".includes(q));
    }
    this.allOrders = this.orderService.getOrdersByDate(date);
    this.filteredOrders = orders;
  }
  setFilter(key) {
    this.activeFilter = key;
    this.applyFiltersLocal();
  }
  getCounts(key) {
    if (key === "all")
      return this.allOrders.length;
    return this.allOrders.filter((o) => o.status === key).length;
  }
  getStatusLabel(status) {
    const map = {
      "Enviado a cocina": "Nuevo",
      "Pendiente": "Preparando",
      "Listo": "Listo",
      "Cancelado": "Cancelado"
    };
    return map[status] ?? status;
  }
  getBadgeClass(status, tableNumber, isParaLlevar) {
    if (tableNumber === 0 || isParaLlevar)
      return "badge-llevar";
    const map = {
      "Enviado a cocina": "badge-new",
      "Pendiente": "badge-pending",
      "Listo": "badge-ready",
      "Cancelado": "badge-cancelled"
    };
    return map[status] ?? "";
  }
  formatTime(isoString) {
    return new Date(isoString).toLocaleTimeString("es-PE", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Lima"
    });
  }
  formatDate(isoString) {
    return new Date(isoString).toLocaleDateString("es-PE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "America/Lima"
    });
  }
  getProductName(item) {
    return item?.product?.name || "Producto";
  }
  // ── Cronómetro ──────────────────────────────────────────────
  getElapsedSeconds(createdAt, status, updatedAt) {
    const end = (status === "Listo" || status === "Cancelado") && updatedAt ? new Date(updatedAt).getTime() : this.now;
    return Math.floor((end - new Date(createdAt).getTime()) / 1e3);
  }
  formatElapsed(createdAt, status, updatedAt) {
    const secs = this.getElapsedSeconds(createdAt, status, updatedAt);
    const h = Math.floor(secs / 3600);
    const m = Math.floor(secs % 3600 / 60);
    const s = secs % 60;
    const pad = (n) => String(n).padStart(2, "0");
    if (h > 0)
      return `${pad(h)}:${pad(m)}:${pad(s)}`;
    return `${pad(m)}:${pad(s)}`;
  }
  // Verde 0-10 min, naranja 10-20, rojo 20+, gris si listo/cancelado
  getTimerClass(createdAt, status, updatedAt) {
    if (status === "Listo" || status === "Cancelado")
      return "timer-done";
    const mins = this.getElapsedSeconds(createdAt, status, updatedAt) / 60;
    if (mins < 10)
      return "timer-green";
    if (mins < 20)
      return "timer-orange";
    return "timer-red";
  }
  markAsReady(orderId) {
    this.orderService.updateOrderStatus(orderId, "Listo").then(() => {
      this.orderService.markOrderAsReady(orderId).catch(console.error);
    }).catch(console.error);
  }
  downloadComprobante(orderId) {
    this.orderService.downloadComprobante(orderId).catch(() => {
      alert("Error al descargar comprobante");
    });
  }
  getCardTimeClass(createdAt, status, updatedAt, tableNumber, isParaLlevar) {
    if (status === "Listo" || status === "Cancelado")
      return "";
    if (tableNumber === 0 || isParaLlevar)
      return "card-time-purple";
    const mins = this.getElapsedSeconds(createdAt, status, updatedAt) / 60;
    if (mins < 8)
      return "card-time-green";
    if (mins < 15)
      return "card-time-orange";
    return "card-time-red";
  }
  isParaLlevar(order) {
    return order.tableNumber === 0;
  }
  static \u0275fac = function KitchenOrdersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KitchenOrdersComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _KitchenOrdersComponent, selectors: [["app-kitchen-orders"]], decls: 22, vars: 5, consts: [["flatItems", ""], [1, "page"], [1, "topbar"], [1, "topbar-right"], [1, "search-wrap"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["type", "text", "placeholder", "Buscar mesa...", 3, "ngModelChange", "input", "ngModel"], ["type", "date", 1, "date-input-hidden", 3, "ngModelChange", "change", "ngModel"], [1, "btn-logout", 2, "color", "black", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "filters"], ["class", "pill", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "grid"], ["class", "card", 3, "card-multi-round", "ngClass", 4, "ngFor", "ngForOf"], ["class", "empty", 4, "ngIf"], [1, "pill", 3, "click"], [1, "count"], [1, "card", 3, "ngClass"], [1, "card-header"], [1, "card-id"], [1, "card-badges"], [1, "badge", 3, "ngClass"], ["class", "badge-rounds", 4, "ngIf"], [2, "display", "flex", "align-items", "center"], [1, "timer-wrap", 3, "ngClass"], ["width", "11", "height", "11", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "timer-value"], [1, "timer-label"], [4, "ngIf"], [1, "meta"], [1, "meta-row"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], ["class", "meta-row", 4, "ngIf"], [1, "entradas-box-label"], ["class", "entradas-box", 4, "ngIf"], [1, "total-row"], ["x1", "12", "y1", "1", "x2", "12", "y2", "23"], ["d", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], [1, "divider"], [1, "rounds-section"], [4, "ngIf", "ngIfElse"], [1, "card-actions"], ["class", "btn btn-green", 3, "click", 4, "ngIf"], ["class", "btn btn-outline", "disabled", "", 4, "ngIf"], [1, "badge-rounds"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "entradas-box"], [1, "entradas-box-content"], [1, "section-label"], ["class", "round-block", 3, "round-old", "round-new", "round-has-changes", 4, "ngFor", "ngForOf"], [1, "round-block"], [1, "round-header"], [1, "round-header-left"], [1, "round-dot"], ["class", "round-status", 4, "ngIf"], ["class", "round-status-new", 4, "ngIf"], [1, "round-time"], [1, "round-items"], ["class", "item-row", 4, "ngFor", "ngForOf"], [1, "round-status"], [1, "round-status-new"], [1, "item-row"], [1, "item-qty"], [1, "item-name"], ["class", "item-new-badge", 4, "ngIf"], [1, "item-new-badge"], [1, "changes-divider"], [1, "changes-label"], ["class", "item-row change-row", 3, "change-row-modified", "change-row-cancelled", 4, "ngFor", "ngForOf"], [1, "item-row", "change-row"], [1, "item-qty", "item-qty-modified"], [1, "item-modified-info"], ["class", "old-qty", 4, "ngIf"], [1, "item-modified-badge"], [1, "old-qty"], [1, "item-qty", "item-qty-cancelled"], [1, "item-name", "item-name-cancelled"], [1, "item-cancelled-badge"], ["class", "item-row-flat", 4, "ngFor", "ngForOf"], [1, "item-row-flat"], [1, "btn", "btn-green", 3, "click"], ["disabled", "", 1, "btn", "btn-green", "btn-done"], [1, "btn", "btn-blue", 3, "click"], ["disabled", "", 1, "btn", "btn-outline"], [1, "empty"]], template: function KitchenOrdersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1");
      \u0275\u0275text(3, "Pedidos en Cocina");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 5);
      \u0275\u0275element(7, "circle", 6)(8, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function KitchenOrdersComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("input", function KitchenOrdersComponent_Template_input_input_9_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function KitchenOrdersComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedDate, $event) || (ctx.selectedDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function KitchenOrdersComponent_Template_input_change_10_listener() {
        return ctx.applyFilters();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "button", 10);
      \u0275\u0275listener("click", function KitchenOrdersComponent_Template_button_click_11_listener() {
        return ctx.logout();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 11);
      \u0275\u0275element(13, "path", 12)(14, "polyline", 13)(15, "line", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Cerrar sesi\xF3n ");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "div", 15);
      \u0275\u0275template(18, KitchenOrdersComponent_div_18_Template, 4, 5, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 17);
      \u0275\u0275template(20, KitchenOrdersComponent_div_20_Template, 48, 23, "div", 18)(21, KitchenOrdersComponent_div_21_Template, 2, 0, "div", 19);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedDate);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.filterOptions);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.filteredOrders);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredOrders.length === 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.page[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background: #f5f5f7;\n  min-height: 100vh;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.topbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.date-input-hidden[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 8px 12px 8px 32px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111;\n  outline: none;\n  width: 200px;\n  transition: border-color 0.2s;\n}\n.search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #a0a0a0;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  opacity: 0.4;\n  pointer-events: none;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-logout[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.pill[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  color: #555;\n  transition: all 0.15s;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.pill[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 1px 7px;\n  border-radius: 10px;\n  background: #f0f0f0;\n  color: #666;\n}\n.pill.active[_ngcontent-%COMP%] {\n  background: #111827;\n  color: #fff;\n  border-color: transparent;\n}\n.pill.active[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n}\n.pill[data-status="Enviado a cocina"].active[_ngcontent-%COMP%], \n.pill[data-status=Pendiente].active[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.pill[data-status=Listo].active[_ngcontent-%COMP%] {\n  background: #059669;\n}\n.pill[data-status=Cancelado].active[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #ebebeb;\n  border-radius: 12px;\n  padding: 1rem 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: box-shadow 0.2s;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);\n}\n.card-multi-round[_ngcontent-%COMP%] {\n  border: 1.5px solid #d97706;\n  box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.08);\n}\n.card-multi-round[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 20px rgba(217, 119, 6, 0.15);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.card-id[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111;\n}\n.card-badges[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 12px;\n}\n.badge-new[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-ready[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge-cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-rounds[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 10px;\n  background: #fef3c7;\n  color: #92400e;\n}\n.timer-wrap[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  background: #d1fae5;\n  color: #065f46;\n}\n.timer-wrap.timer-warn[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.timer-wrap.timer-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  animation: _ngcontent-%COMP%_blink 1s step-start infinite;\n}\n.timer-wrap.timer-done[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #555;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  50% {\n    opacity: 0.4;\n  }\n}\n.timer-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.timer-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 500;\n  opacity: 0.8;\n}\n.meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #666;\n}\n.meta-row[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  flex-shrink: 0;\n}\n.total-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  padding-top: 2px;\n}\n.divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #f0f0f0;\n}\n.section-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #aaa;\n  margin-bottom: 6px;\n}\n.rounds-section[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.round-block[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: visible !important;\n  position: relative;\n  margin-bottom: 4px;\n}\n.round-block[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  left: 12px;\n  bottom: -4px;\n  width: 2px;\n  height: 4px;\n  background: #e5e7eb;\n  z-index: 1;\n}\n.round-modified[_ngcontent-%COMP%]:not(:last-child)::after, \n.round-cancelled[_ngcontent-%COMP%]:not(:last-child)::after {\n  background: transparent;\n}\n.round-modified[_ngcontent-%COMP%]::before, \n.round-cancelled[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 10px;\n  top: -8px;\n  width: 2px;\n  height: 8px;\n  z-index: 1;\n}\n.round-modified[_ngcontent-%COMP%]::before {\n  background: #7c3aed;\n}\n.round-cancelled[_ngcontent-%COMP%]::before {\n  background: #dc2626;\n}\n.round-header-modified[_ngcontent-%COMP%]::before {\n  content: "\\21b3";\n  font-size: 14px;\n  color: #7c3aed;\n  font-weight: 700;\n  margin-right: 4px;\n}\n.round-header-cancelled[_ngcontent-%COMP%]::before {\n  content: "\\21b3";\n  font-size: 14px;\n  color: #dc2626;\n  font-weight: 700;\n  margin-right: 4px;\n}\n.round-old[_ngcontent-%COMP%] {\n  background: #fafafa;\n  border: 1px solid #f0f0f0;\n}\n.round-new[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n}\n.round-cancelled[_ngcontent-%COMP%] {\n  background: #fff5f5;\n  border: 1px solid #fecaca;\n}\n.round-modified[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n  border: 1px solid #ddd6fe;\n}\n.round-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 10px;\n  border-radius: 8px 8px 0 0;\n  font-size: 12px;\n  font-weight: 600;\n}\n.round-header-old[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.round-header-new[_ngcontent-%COMP%] {\n  color: #92400e;\n}\n.round-header-cancelled[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.round-header-modified[_ngcontent-%COMP%] {\n  color: #7c3aed;\n}\n.round-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.round-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot-old[_ngcontent-%COMP%] {\n  background: #9ca3af;\n}\n.dot-new[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.dot-cancelled[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.dot-modified[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.round-status[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #9ca3af;\n  font-size: 11px;\n}\n.round-status-new[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #d97706;\n  font-size: 11px;\n}\n.round-time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 400;\n  color: #aaa;\n  white-space: nowrap;\n}\n.round-items[_ngcontent-%COMP%] {\n  padding: 4px 10px 8px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #374151;\n}\n.item-row-flat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #374151;\n  padding: 2px 0;\n}\n.item-qty[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 6px;\n  background: #f0f0f0;\n  color: #374151;\n  flex-shrink: 0;\n}\n.item-qty-new[_ngcontent-%COMP%] {\n  background: #fde68a;\n  color: #92400e;\n}\n.item-qty-modified[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.item-qty-cancelled[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  text-decoration: line-through;\n}\n.item-name[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.item-name-cancelled[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #9ca3af;\n}\n.item-new-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 8px;\n  background: #f59e0b;\n  color: #fff;\n  flex-shrink: 0;\n}\n.item-cancelled-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 8px;\n  background: #dc2626;\n  color: #fff;\n  flex-shrink: 0;\n}\n.item-modified-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 8px;\n  background: #7c3aed;\n  color: #fff;\n  flex-shrink: 0;\n}\n.item-row-cancelled[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n.item-row-modified[_ngcontent-%COMP%] {\n}\n.item-modified-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.old-qty[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9ca3af;\n  text-decoration: line-through;\n}\n.item-row-flat[_ngcontent-%COMP%] {\n  padding: 2px 0;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: auto;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: opacity 0.15s;\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-green[_ngcontent-%COMP%] {\n  background: #059669;\n  color: #fff;\n}\n.btn-green[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-blue[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.btn-done[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.empty[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  text-align: center;\n  color: #aaa;\n  font-size: 14px;\n  padding: 3rem 0;\n}\n.round-has-changes[_ngcontent-%COMP%] {\n  border-color: #c4b5fd;\n}\n.changes-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 6px 0 4px;\n  border-top: 1px dashed #ddd6fe;\n  padding-top: 6px;\n}\n.changes-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #7c3aed;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.change-row[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  padding: 2px 4px;\n}\n.change-row-modified[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n}\n.change-row-cancelled[_ngcontent-%COMP%] {\n  background: #fff5f5;\n}\n.card-time-green[_ngcontent-%COMP%] {\n  background: #d1fae5 !important;\n  border-color: #6ee7b7 !important;\n}\n.card-time-orange[_ngcontent-%COMP%] {\n  background: #fff7ed !important;\n  border-color: #fdba74 !important;\n}\n.card-time-red[_ngcontent-%COMP%] {\n  background: #fee2e2 !important;\n  border-color: #fca5a5 !important;\n}\n.card-time-green[_ngcontent-%COMP%]   .card-id[_ngcontent-%COMP%], \n.card-time-green[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%], \n.card-time-green[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.card-time-green[_ngcontent-%COMP%]   .total-row[_ngcontent-%COMP%], \n.card-time-green[_ngcontent-%COMP%]   .section-label[_ngcontent-%COMP%], \n.card-time-green[_ngcontent-%COMP%]   .round-time[_ngcontent-%COMP%], \n.card-time-green[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%], \n.card-time-green[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%], \n.card-time-green[_ngcontent-%COMP%]   .item-row-flat[_ngcontent-%COMP%] {\n  color: #065f46 !important;\n}\n.card-time-orange[_ngcontent-%COMP%]   .card-id[_ngcontent-%COMP%], \n.card-time-orange[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%], \n.card-time-orange[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.card-time-orange[_ngcontent-%COMP%]   .total-row[_ngcontent-%COMP%], \n.card-time-orange[_ngcontent-%COMP%]   .section-label[_ngcontent-%COMP%], \n.card-time-orange[_ngcontent-%COMP%]   .round-time[_ngcontent-%COMP%], \n.card-time-orange[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%], \n.card-time-orange[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%], \n.card-time-orange[_ngcontent-%COMP%]   .item-row-flat[_ngcontent-%COMP%] {\n  color: #7c2d12 !important;\n}\n.card-time-red[_ngcontent-%COMP%]   .card-id[_ngcontent-%COMP%], \n.card-time-red[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%], \n.card-time-red[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.card-time-red[_ngcontent-%COMP%]   .total-row[_ngcontent-%COMP%], \n.card-time-red[_ngcontent-%COMP%]   .section-label[_ngcontent-%COMP%], \n.card-time-red[_ngcontent-%COMP%]   .round-time[_ngcontent-%COMP%], \n.card-time-red[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%], \n.card-time-red[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%], \n.card-time-red[_ngcontent-%COMP%]   .item-row-flat[_ngcontent-%COMP%] {\n  color: #7f1d1d !important;\n}\n.card-time-green[_ngcontent-%COMP%]   .round-old[_ngcontent-%COMP%] {\n  background: #a7f3d0;\n  border-color: #6ee7b7;\n}\n.card-time-green[_ngcontent-%COMP%]   .round-new[_ngcontent-%COMP%] {\n  background: #bbf7d0;\n  border-color: #34d399;\n}\n.card-time-green[_ngcontent-%COMP%]   .round-header-old[_ngcontent-%COMP%], \n.card-time-green[_ngcontent-%COMP%]   .round-header-new[_ngcontent-%COMP%], \n.card-time-green[_ngcontent-%COMP%]   .round-status[_ngcontent-%COMP%], \n.card-time-green[_ngcontent-%COMP%]   .round-status-new[_ngcontent-%COMP%] {\n  color: #065f46 !important;\n}\n.card-time-orange[_ngcontent-%COMP%]   .round-old[_ngcontent-%COMP%] {\n  background: #fed7aa;\n  border-color: #fdba74;\n}\n.card-time-orange[_ngcontent-%COMP%]   .round-new[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  border-color: #fb923c;\n}\n.card-time-orange[_ngcontent-%COMP%]   .round-header-old[_ngcontent-%COMP%], \n.card-time-orange[_ngcontent-%COMP%]   .round-header-new[_ngcontent-%COMP%], \n.card-time-orange[_ngcontent-%COMP%]   .round-status[_ngcontent-%COMP%], \n.card-time-orange[_ngcontent-%COMP%]   .round-status-new[_ngcontent-%COMP%] {\n  color: #7c2d12 !important;\n}\n.card-time-red[_ngcontent-%COMP%]   .round-old[_ngcontent-%COMP%] {\n  background: #fecaca;\n  border-color: #fca5a5;\n}\n.card-time-red[_ngcontent-%COMP%]   .round-new[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  border-color: #f87171;\n}\n.card-time-red[_ngcontent-%COMP%]   .round-header-old[_ngcontent-%COMP%], \n.card-time-red[_ngcontent-%COMP%]   .round-header-new[_ngcontent-%COMP%], \n.card-time-red[_ngcontent-%COMP%]   .round-status[_ngcontent-%COMP%], \n.card-time-red[_ngcontent-%COMP%]   .round-status-new[_ngcontent-%COMP%] {\n  color: #7f1d1d !important;\n}\n.card-time-green[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  background: #6ee7b7;\n}\n.card-time-orange[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  background: #fdba74;\n}\n.card-time-red[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  background: #fca5a5;\n}\n.card-time-green[_ngcontent-%COMP%]   .changes-divider[_ngcontent-%COMP%] {\n  border-top-color: #6ee7b7;\n}\n.card-time-orange[_ngcontent-%COMP%]   .changes-divider[_ngcontent-%COMP%] {\n  border-top-color: #fdba74;\n}\n.card-time-red[_ngcontent-%COMP%]   .changes-divider[_ngcontent-%COMP%] {\n  border-top-color: #fca5a5;\n}\n.card-time-green[_ngcontent-%COMP%]   .item-qty[_ngcontent-%COMP%] {\n  background: #6ee7b7;\n  color: #064e3b;\n}\n.card-time-orange[_ngcontent-%COMP%]   .item-qty[_ngcontent-%COMP%] {\n  background: #fdba74;\n  color: #7c2d12;\n}\n.card-time-red[_ngcontent-%COMP%]   .item-qty[_ngcontent-%COMP%] {\n  background: #fca5a5;\n  color: #7f1d1d;\n}\n.badge-llevar[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.card-time-purple[_ngcontent-%COMP%] {\n  background: #f5f3ff !important;\n  border-color: #c4b5fd !important;\n}\n.card-time-purple[_ngcontent-%COMP%]   .card-id[_ngcontent-%COMP%], \n.card-time-purple[_ngcontent-%COMP%]   .meta-row[_ngcontent-%COMP%], \n.card-time-purple[_ngcontent-%COMP%]   .total-row[_ngcontent-%COMP%], \n.card-time-purple[_ngcontent-%COMP%]   .section-label[_ngcontent-%COMP%], \n.card-time-purple[_ngcontent-%COMP%]   .round-header[_ngcontent-%COMP%], \n.card-time-purple[_ngcontent-%COMP%]   .item-row[_ngcontent-%COMP%], \n.card-time-purple[_ngcontent-%COMP%]   .item-row-flat[_ngcontent-%COMP%] {\n  color: #6d28d9 !important;\n}\n.card-time-purple[_ngcontent-%COMP%]   .round-old[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  border-color: #c4b5fd;\n}\n.card-time-purple[_ngcontent-%COMP%]   .round-new[_ngcontent-%COMP%] {\n  background: #ddd6fe;\n  border-color: #a78bfa;\n}\n.card-time-purple[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  background: #c4b5fd;\n}\n.card-time-purple[_ngcontent-%COMP%]   .item-qty[_ngcontent-%COMP%] {\n  background: #c4b5fd;\n  color: #4c1d95;\n}\n.card-time-green[_ngcontent-%COMP%]   .entradas-box[_ngcontent-%COMP%] {\n  background: #a7f3d0;\n  border-color: #6ee7b7;\n}\n.card-time-green[_ngcontent-%COMP%]   .entradas-box-label[_ngcontent-%COMP%] {\n  color: #065f46;\n}\n.card-time-green[_ngcontent-%COMP%]   .entradas-box-content[_ngcontent-%COMP%] {\n  color: #064e3b;\n}\n.card-time-orange[_ngcontent-%COMP%]   .entradas-box[_ngcontent-%COMP%] {\n  background: #fed7aa;\n  border-color: #fdba74;\n}\n.card-time-orange[_ngcontent-%COMP%]   .entradas-box-label[_ngcontent-%COMP%] {\n  color: #7c2d12;\n}\n.card-time-orange[_ngcontent-%COMP%]   .entradas-box-content[_ngcontent-%COMP%] {\n  color: #7c2d12;\n}\n.card-time-red[_ngcontent-%COMP%]   .entradas-box[_ngcontent-%COMP%] {\n  background: #fecaca;\n  border-color: #fca5a5;\n}\n.card-time-red[_ngcontent-%COMP%]   .entradas-box-label[_ngcontent-%COMP%] {\n  color: #7f1d1d;\n}\n.card-time-red[_ngcontent-%COMP%]   .entradas-box-content[_ngcontent-%COMP%] {\n  color: #7f1d1d;\n}\n.card-time-purple[_ngcontent-%COMP%]   .entradas-box[_ngcontent-%COMP%] {\n  background: #ddd6fe;\n  border-color: #c4b5fd;\n}\n.card-time-purple[_ngcontent-%COMP%]   .entradas-box-label[_ngcontent-%COMP%] {\n  color: #4c1d95;\n}\n.card-time-purple[_ngcontent-%COMP%]   .entradas-box-content[_ngcontent-%COMP%] {\n  color: #4c1d95;\n}\n.entradas-box[_ngcontent-%COMP%] {\n  border: 1px solid #ddd6fe;\n  border-radius: 8px;\n  padding: 6px 10px;\n  background: #f5f3ff;\n}\n.entradas-box-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #7c3aed;\n  margin-bottom: 3px;\n}\n.entradas-box-content[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4c1d95;\n  font-weight: 500;\n}\n/*# sourceMappingURL=kitchen-orders.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KitchenOrdersComponent, [{
    type: Component,
    args: [{ selector: "app-kitchen-orders", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="page">\r
\r
  <!-- TOP BAR -->\r
  <div class="topbar">\r
    <h1>Pedidos en Cocina</h1>\r
    <div class="topbar-right">\r
      <div class="search-wrap">\r
        <svg class="search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"\r
          stroke-width="2">\r
          <circle cx="11" cy="11" r="8" />\r
          <path d="m21 21-4.35-4.35" />\r
        </svg>\r
        <input type="text" [(ngModel)]="searchQuery" (input)="applyFilters()" placeholder="Buscar mesa..." />\r
      </div>\r
      <input type="date" [(ngModel)]="selectedDate" (change)="applyFilters()" class="date-input-hidden" />\r
    </div>\r
    <button class="btn-logout" (click)="logout()" style="color: black;">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />\r
        <polyline points="16 17 21 12 16 7" />\r
        <line x1="21" y1="12" x2="9" y2="12" />\r
      </svg>\r
      Cerrar sesi\xF3n\r
    </button>\r
  </div>\r
\r
  <!-- FILTROS -->\r
  <div class="filters">\r
    <div *ngFor="let f of filterOptions" class="pill" [class.active]="activeFilter === f.key" [attr.data-status]="f.key"\r
      (click)="setFilter(f.key)">\r
      {{ f.label }}\r
      <span class="count">{{ getCounts(f.key) }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- GRID -->\r
  <div class="grid">\r
    <div *ngFor="let order of filteredOrders" class="card" [class.card-multi-round]="order.hasMultipleRounds"\r
      [ngClass]="getCardTimeClass(order.createdAt, order.status, order.updatedAt, order.tableNumber, order.isParaLlevar)">\r
\r
      <!-- ENCABEZADO -->\r
      <div class="card-header">\r
        <!-- <span class="card-id">{{ order.tableNumber === 0 ? 'Para llevar' : 'Mesa ' + order.tableNumber }}</span> -->\r
        <span class="card-id">\r
          {{ order.tableNumber === 0 ? 'Para llevar' :\r
          order.isParaLlevar ? 'Mesa ' + order.tableNumber + ' \u2014 Para llevar' :\r
          'Mesa ' + order.tableNumber }}\r
        </span>\r
        <div class="card-badges">\r
          <span class="badge" [ngClass]="getBadgeClass(order.status, order.tableNumber, order.isParaLlevar)">\r
            {{ (order.tableNumber === 0 || order.isParaLlevar) ? 'Para llevar' : getStatusLabel(order.status) }}\r
          </span>\r
          <span *ngIf="order.hasMultipleRounds" class="badge-rounds">+{{ order.rounds!.length }} rondas</span>\r
        </div>\r
      </div>\r
\r
      <!-- CRON\xD3METRO -->\r
      <div style="display:flex; align-items:center;">\r
        <div class="timer-wrap" [ngClass]="getTimerClass(order.createdAt, order.status, order.updatedAt)">\r
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
            <circle cx="12" cy="12" r="10" />\r
            <polyline points="12 6 12 12 16 14" />\r
          </svg>\r
          <span class="timer-value">{{ formatElapsed(order.createdAt, order.status, order.updatedAt) }}</span>\r
          <span class="timer-label">\r
            <ng-container *ngIf="order.status !== 'Listo' && order.status !== 'Cancelado'">\r
              {{ getElapsedSeconds(order.createdAt, order.status, order.updatedAt) / 60 < 10 ? 'En tiempo' :\r
                getElapsedSeconds(order.createdAt, order.status, order.updatedAt) / 60 < 20 ? 'Demorado'\r
                : 'Muy demorado' }} </ng-container>\r
                <ng-container *ngIf="order.status === 'Listo'">Completado</ng-container>\r
                <ng-container *ngIf="order.status === 'Cancelado'">Cancelado</ng-container>\r
          </span>\r
        </div>\r
      </div>\r
\r
      <!-- META -->\r
      <div class="meta">\r
        <div class="meta-row">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <rect x="3" y="4" width="18" height="18" rx="2" />\r
            <line x1="3" y1="10" x2="21" y2="10" />\r
          </svg>\r
          {{ formatDate(order.createdAt) }} &mdash; {{ formatTime(order.createdAt) }}\r
        </div>\r
        <div class="meta-row">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <circle cx="12" cy="12" r="10" />\r
            <polyline points="12 6 12 12 16 14" />\r
          </svg>\r
          {{ order.mealType }}\r
        </div>\r
        <div class="meta-row" *ngIf="order.waiterName">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />\r
            <circle cx="12" cy="7" r="4" />\r
          </svg>\r
          {{ order.waiterName }}\r
        </div>\r
        <!-- Entradas -->\r
        <div class="entradas-box-label">Entradas</div>\r
        <div class="entradas-box" *ngIf="order.entradas && order.entradas.trim().length > 0">\r
          <div class="entradas-box-content">{{ order.entradas }}</div>\r
        </div>\r
        <div class="total-row">\r
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="12" y1="1" x2="12" y2="23" />\r
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />\r
          </svg>\r
          S/. {{ order.total.toFixed(2) }}\r
        </div>\r
      </div>\r
\r
      <div class="divider"></div>\r
\r
      <!-- RONDAS -->\r
      <div class="rounds-section">\r
        <ng-container *ngIf="order.rounds && order.rounds.length > 0; else flatItems">\r
\r
          <div class="section-label">Segundos</div>\r
\r
          <div *ngFor="let round of order.rounds" class="round-block" [class.round-old]="!round.isLatest"\r
            [class.round-new]="round.isLatest" [class.round-has-changes]="round.changes && round.changes.length > 0">\r
\r
            <!-- Cabecera -->\r
            <div class="round-header" [class.round-header-old]="!round.isLatest"\r
              [class.round-header-new]="round.isLatest">\r
              <div class="round-header-left">\r
                <div class="round-dot" [class.dot-old]="!round.isLatest" [class.dot-new]="round.isLatest"></div>\r
                <span>\r
                  Ronda {{ round.roundNumber }}\r
                  <span class="round-status" *ngIf="!round.isLatest"> \u2014 enviado</span>\r
                  <span class="round-status-new" *ngIf="round.isLatest"> \u2014 reci\xE9n lleg\xF3</span>\r
                </span>\r
              </div>\r
              <span class="round-time">{{ formatTime(round.createdAt) }}</span>\r
            </div>\r
\r
            <!-- Items normales -->\r
            <div class="round-items">\r
              <div *ngFor="let item of round.items" class="item-row">\r
                <span class="item-qty" [class.item-qty-new]="round.isLatest">{{ item.quantity }}x</span>\r
                <span class="item-name">{{ getProductName(item) }}</span>\r
                <span *ngIf="round.isLatest" class="item-new-badge">nuevo</span>\r
              </div>\r
\r
              <!-- \u2705 Cambios (modificaciones/cancelaciones) fusionados dentro de la ronda -->\r
              <ng-container *ngIf="round.changes && round.changes.length > 0">\r
                <div class="changes-divider">\r
                  <span class="changes-label">\u270F\uFE0F cambios</span>\r
                </div>\r
                <div *ngFor="let change of round.changes" class="item-row change-row"\r
                  [class.change-row-modified]="change.action === 'Modificado'"\r
                  [class.change-row-cancelled]="change.action === 'Cancelado'">\r
\r
                  <!-- Modificado -->\r
                  <ng-container *ngIf="change.action === 'Modificado'">\r
                    <span class="item-qty item-qty-modified">{{ change.newQuantity }}x</span>\r
                    <span class="item-name">{{ change.productName }}</span>\r
                    <div class="item-modified-info">\r
                      <span class="old-qty" *ngIf="change.oldQuantity !== undefined">era {{ change.oldQuantity\r
                        }}x</span>\r
                      <span class="item-modified-badge">modificado</span>\r
                    </div>\r
                  </ng-container>\r
\r
                  <!-- Cancelado -->\r
                  <ng-container *ngIf="change.action === 'Cancelado'">\r
                    <span class="item-qty item-qty-cancelled">{{ change.newQuantity }}x</span>\r
                    <span class="item-name item-name-cancelled">{{ change.productName }}</span>\r
                    <span class="item-cancelled-badge">cancelado</span>\r
                  </ng-container>\r
\r
                </div>\r
              </ng-container>\r
\r
            </div>\r
          </div>\r
\r
        </ng-container>\r
\r
        <ng-template #flatItems>\r
          <div class="section-label">Productos</div>\r
          <div *ngFor="let item of order.items" class="item-row-flat">\r
            <span class="item-qty">{{ item.quantity }}x</span>\r
            <span>{{ item.product?.name || 'Producto' }}</span>\r
          </div>\r
        </ng-template>\r
      </div>\r
\r
      <!-- ACCIONES -->\r
      <div class="card-actions">\r
        <button *ngIf="order.status === 'Enviado a cocina' || order.status === 'Pendiente'" class="btn btn-green"\r
          (click)="markAsReady(order.id)">\u2713 Marcar como listo</button>\r
        <ng-container *ngIf="order.status === 'Listo'">\r
          <button class="btn btn-green btn-done" disabled>Listo para entregar</button>\r
          <button class="btn btn-blue" (click)="downloadComprobante(order.id)">Descargar Comprobante</button>\r
        </ng-container>\r
        <button *ngIf="order.status === 'Cancelado'" class="btn btn-outline" disabled>Cancelado</button>\r
      </div>\r
\r
    </div>\r
    <div *ngIf="filteredOrders.length === 0" class="empty">Sin pedidos para mostrar</div>\r
  </div>\r
</div>`, styles: ['/* src/app/components/kitchen/kitchen-orders.component.css */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.page {\n  padding: 1.5rem;\n  background: #f5f5f7;\n  min-height: 100vh;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.topbar h1 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #111;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.date-input-hidden {\n  padding: 8px 14px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.search-wrap {\n  position: relative;\n}\n.search-wrap input {\n  padding: 8px 12px 8px 32px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #111;\n  outline: none;\n  width: 200px;\n  transition: border-color 0.2s;\n}\n.search-wrap input:focus {\n  border-color: #a0a0a0;\n}\n.search-icon {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  opacity: 0.4;\n  pointer-events: none;\n}\n.btn-logout {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.btn-logout svg {\n  width: 15px;\n  height: 15px;\n}\n.btn-logout:hover {\n  background: #f5f5f5;\n}\n.filters {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.pill {\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  border: 1px solid #e0e0e0;\n  background: #fff;\n  color: #555;\n  transition: all 0.15s;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.pill .count {\n  font-size: 11px;\n  padding: 1px 7px;\n  border-radius: 10px;\n  background: #f0f0f0;\n  color: #666;\n}\n.pill.active {\n  background: #111827;\n  color: #fff;\n  border-color: transparent;\n}\n.pill.active .count {\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n}\n.pill[data-status="Enviado a cocina"].active,\n.pill[data-status=Pendiente].active {\n  background: #d97706;\n}\n.pill[data-status=Listo].active {\n  background: #059669;\n}\n.pill[data-status=Cancelado].active {\n  background: #dc2626;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n}\n.card {\n  background: #fff;\n  border: 1px solid #ebebeb;\n  border-radius: 12px;\n  padding: 1rem 1.1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: box-shadow 0.2s;\n}\n.card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);\n}\n.card-multi-round {\n  border: 1.5px solid #d97706;\n  box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.08);\n}\n.card-multi-round:hover {\n  box-shadow: 0 4px 20px rgba(217, 119, 6, 0.15);\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.card-id {\n  font-size: 16px;\n  font-weight: 600;\n  color: #111;\n}\n.card-badges {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.badge {\n  font-size: 11px;\n  font-weight: 500;\n  padding: 3px 10px;\n  border-radius: 12px;\n}\n.badge-new {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge-pending {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-ready {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge-cancelled {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.badge-rounds {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 10px;\n  background: #fef3c7;\n  color: #92400e;\n}\n.timer-wrap {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  background: #d1fae5;\n  color: #065f46;\n}\n.timer-wrap.timer-warn {\n  background: #fef3c7;\n  color: #92400e;\n}\n.timer-wrap.timer-danger {\n  background: #fee2e2;\n  color: #991b1b;\n  animation: blink 1s step-start infinite;\n}\n.timer-wrap.timer-done {\n  background: #f0f0f0;\n  color: #555;\n}\n@keyframes blink {\n  50% {\n    opacity: 0.4;\n  }\n}\n.timer-value {\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.timer-label {\n  font-size: 10px;\n  font-weight: 500;\n  opacity: 0.8;\n}\n.meta {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.meta-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #666;\n}\n.meta-row svg {\n  opacity: 0.5;\n  flex-shrink: 0;\n}\n.total-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #111;\n  padding-top: 2px;\n}\n.divider {\n  height: 1px;\n  background: #f0f0f0;\n}\n.section-label {\n  font-size: 12px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #aaa;\n  margin-bottom: 6px;\n}\n.rounds-section {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.round-block {\n  border-radius: 8px;\n  overflow: visible !important;\n  position: relative;\n  margin-bottom: 4px;\n}\n.round-block:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  left: 12px;\n  bottom: -4px;\n  width: 2px;\n  height: 4px;\n  background: #e5e7eb;\n  z-index: 1;\n}\n.round-modified:not(:last-child)::after,\n.round-cancelled:not(:last-child)::after {\n  background: transparent;\n}\n.round-modified::before,\n.round-cancelled::before {\n  content: "";\n  position: absolute;\n  left: 10px;\n  top: -8px;\n  width: 2px;\n  height: 8px;\n  z-index: 1;\n}\n.round-modified::before {\n  background: #7c3aed;\n}\n.round-cancelled::before {\n  background: #dc2626;\n}\n.round-header-modified::before {\n  content: "\\21b3";\n  font-size: 14px;\n  color: #7c3aed;\n  font-weight: 700;\n  margin-right: 4px;\n}\n.round-header-cancelled::before {\n  content: "\\21b3";\n  font-size: 14px;\n  color: #dc2626;\n  font-weight: 700;\n  margin-right: 4px;\n}\n.round-old {\n  background: #fafafa;\n  border: 1px solid #f0f0f0;\n}\n.round-new {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n}\n.round-cancelled {\n  background: #fff5f5;\n  border: 1px solid #fecaca;\n}\n.round-modified {\n  background: #f5f3ff;\n  border: 1px solid #ddd6fe;\n}\n.round-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 10px;\n  border-radius: 8px 8px 0 0;\n  font-size: 12px;\n  font-weight: 600;\n}\n.round-header-old {\n  color: #6b7280;\n}\n.round-header-new {\n  color: #92400e;\n}\n.round-header-cancelled {\n  color: #dc2626;\n}\n.round-header-modified {\n  color: #7c3aed;\n}\n.round-header-left {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.round-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.dot-old {\n  background: #9ca3af;\n}\n.dot-new {\n  background: #f59e0b;\n}\n.dot-cancelled {\n  background: #dc2626;\n}\n.dot-modified {\n  background: #7c3aed;\n}\n.round-status {\n  font-weight: 400;\n  color: #9ca3af;\n  font-size: 11px;\n}\n.round-status-new {\n  font-weight: 400;\n  color: #d97706;\n  font-size: 11px;\n}\n.round-time {\n  font-size: 10px;\n  font-weight: 400;\n  color: #aaa;\n  white-space: nowrap;\n}\n.round-items {\n  padding: 4px 10px 8px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.item-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #374151;\n}\n.item-row-flat {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #374151;\n  padding: 2px 0;\n}\n.item-qty {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 1px 6px;\n  border-radius: 6px;\n  background: #f0f0f0;\n  color: #374151;\n  flex-shrink: 0;\n}\n.item-qty-new {\n  background: #fde68a;\n  color: #92400e;\n}\n.item-qty-modified {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.item-qty-cancelled {\n  background: #fee2e2;\n  color: #991b1b;\n  text-decoration: line-through;\n}\n.item-name {\n  flex: 1;\n}\n.item-name-cancelled {\n  text-decoration: line-through;\n  color: #9ca3af;\n}\n.item-new-badge {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 8px;\n  background: #f59e0b;\n  color: #fff;\n  flex-shrink: 0;\n}\n.item-cancelled-badge {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 8px;\n  background: #dc2626;\n  color: #fff;\n  flex-shrink: 0;\n}\n.item-modified-badge {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 8px;\n  background: #7c3aed;\n  color: #fff;\n  flex-shrink: 0;\n}\n.item-row-cancelled {\n  opacity: 0.85;\n}\n.item-row-modified {\n}\n.item-modified-info {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.old-qty {\n  font-size: 10px;\n  color: #9ca3af;\n  text-decoration: line-through;\n}\n.item-row-flat {\n  padding: 2px 0;\n}\n.card-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: auto;\n}\n.btn {\n  padding: 10px 16px;\n  border-radius: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: opacity 0.15s;\n  text-align: center;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n.btn-green {\n  background: #059669;\n  color: #fff;\n}\n.btn-green:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.btn-blue {\n  background: #2563eb;\n  color: #fff;\n}\n.btn-blue:hover:not(:disabled) {\n  opacity: 0.88;\n}\n.btn-outline {\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 1px solid #e5e7eb;\n}\n.btn-done {\n  background: #d1fae5;\n  color: #065f46;\n}\n.empty {\n  grid-column: 1 / -1;\n  text-align: center;\n  color: #aaa;\n  font-size: 14px;\n  padding: 3rem 0;\n}\n.round-has-changes {\n  border-color: #c4b5fd;\n}\n.changes-divider {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 6px 0 4px;\n  border-top: 1px dashed #ddd6fe;\n  padding-top: 6px;\n}\n.changes-label {\n  font-size: 10px;\n  font-weight: 600;\n  color: #7c3aed;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.change-row {\n  border-radius: 6px;\n  padding: 2px 4px;\n}\n.change-row-modified {\n  background: #f5f3ff;\n}\n.change-row-cancelled {\n  background: #fff5f5;\n}\n.card-time-green {\n  background: #d1fae5 !important;\n  border-color: #6ee7b7 !important;\n}\n.card-time-orange {\n  background: #fff7ed !important;\n  border-color: #fdba74 !important;\n}\n.card-time-red {\n  background: #fee2e2 !important;\n  border-color: #fca5a5 !important;\n}\n.card-time-green .card-id,\n.card-time-green .meta-row,\n.card-time-green .meta-row svg,\n.card-time-green .total-row,\n.card-time-green .section-label,\n.card-time-green .round-time,\n.card-time-green .item-name,\n.card-time-green .item-row,\n.card-time-green .item-row-flat {\n  color: #065f46 !important;\n}\n.card-time-orange .card-id,\n.card-time-orange .meta-row,\n.card-time-orange .meta-row svg,\n.card-time-orange .total-row,\n.card-time-orange .section-label,\n.card-time-orange .round-time,\n.card-time-orange .item-name,\n.card-time-orange .item-row,\n.card-time-orange .item-row-flat {\n  color: #7c2d12 !important;\n}\n.card-time-red .card-id,\n.card-time-red .meta-row,\n.card-time-red .meta-row svg,\n.card-time-red .total-row,\n.card-time-red .section-label,\n.card-time-red .round-time,\n.card-time-red .item-name,\n.card-time-red .item-row,\n.card-time-red .item-row-flat {\n  color: #7f1d1d !important;\n}\n.card-time-green .round-old {\n  background: #a7f3d0;\n  border-color: #6ee7b7;\n}\n.card-time-green .round-new {\n  background: #bbf7d0;\n  border-color: #34d399;\n}\n.card-time-green .round-header-old,\n.card-time-green .round-header-new,\n.card-time-green .round-status,\n.card-time-green .round-status-new {\n  color: #065f46 !important;\n}\n.card-time-orange .round-old {\n  background: #fed7aa;\n  border-color: #fdba74;\n}\n.card-time-orange .round-new {\n  background: #ffedd5;\n  border-color: #fb923c;\n}\n.card-time-orange .round-header-old,\n.card-time-orange .round-header-new,\n.card-time-orange .round-status,\n.card-time-orange .round-status-new {\n  color: #7c2d12 !important;\n}\n.card-time-red .round-old {\n  background: #fecaca;\n  border-color: #fca5a5;\n}\n.card-time-red .round-new {\n  background: #fee2e2;\n  border-color: #f87171;\n}\n.card-time-red .round-header-old,\n.card-time-red .round-header-new,\n.card-time-red .round-status,\n.card-time-red .round-status-new {\n  color: #7f1d1d !important;\n}\n.card-time-green .divider {\n  background: #6ee7b7;\n}\n.card-time-orange .divider {\n  background: #fdba74;\n}\n.card-time-red .divider {\n  background: #fca5a5;\n}\n.card-time-green .changes-divider {\n  border-top-color: #6ee7b7;\n}\n.card-time-orange .changes-divider {\n  border-top-color: #fdba74;\n}\n.card-time-red .changes-divider {\n  border-top-color: #fca5a5;\n}\n.card-time-green .item-qty {\n  background: #6ee7b7;\n  color: #064e3b;\n}\n.card-time-orange .item-qty {\n  background: #fdba74;\n  color: #7c2d12;\n}\n.card-time-red .item-qty {\n  background: #fca5a5;\n  color: #7f1d1d;\n}\n.badge-llevar {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.card-time-purple {\n  background: #f5f3ff !important;\n  border-color: #c4b5fd !important;\n}\n.card-time-purple .card-id,\n.card-time-purple .meta-row,\n.card-time-purple .total-row,\n.card-time-purple .section-label,\n.card-time-purple .round-header,\n.card-time-purple .item-row,\n.card-time-purple .item-row-flat {\n  color: #6d28d9 !important;\n}\n.card-time-purple .round-old {\n  background: #ede9fe;\n  border-color: #c4b5fd;\n}\n.card-time-purple .round-new {\n  background: #ddd6fe;\n  border-color: #a78bfa;\n}\n.card-time-purple .divider {\n  background: #c4b5fd;\n}\n.card-time-purple .item-qty {\n  background: #c4b5fd;\n  color: #4c1d95;\n}\n.card-time-green .entradas-box {\n  background: #a7f3d0;\n  border-color: #6ee7b7;\n}\n.card-time-green .entradas-box-label {\n  color: #065f46;\n}\n.card-time-green .entradas-box-content {\n  color: #064e3b;\n}\n.card-time-orange .entradas-box {\n  background: #fed7aa;\n  border-color: #fdba74;\n}\n.card-time-orange .entradas-box-label {\n  color: #7c2d12;\n}\n.card-time-orange .entradas-box-content {\n  color: #7c2d12;\n}\n.card-time-red .entradas-box {\n  background: #fecaca;\n  border-color: #fca5a5;\n}\n.card-time-red .entradas-box-label {\n  color: #7f1d1d;\n}\n.card-time-red .entradas-box-content {\n  color: #7f1d1d;\n}\n.card-time-purple .entradas-box {\n  background: #ddd6fe;\n  border-color: #c4b5fd;\n}\n.card-time-purple .entradas-box-label {\n  color: #4c1d95;\n}\n.card-time-purple .entradas-box-content {\n  color: #4c1d95;\n}\n.entradas-box {\n  border: 1px solid #ddd6fe;\n  border-radius: 8px;\n  padding: 6px 10px;\n  background: #f5f3ff;\n}\n.entradas-box-label {\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #7c3aed;\n  margin-bottom: 3px;\n}\n.entradas-box-content {\n  font-size: 12px;\n  color: #4c1d95;\n  font-weight: 500;\n}\n/*# sourceMappingURL=kitchen-orders.component.css.map */\n'] }]
  }], () => [{ type: OrderService }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(KitchenOrdersComponent, { className: "KitchenOrdersComponent", filePath: "app/components/kitchen/kitchen-orders.component.ts", lineNumber: 14 });
})();
export {
  KitchenOrdersComponent
};
//# sourceMappingURL=chunk-FCJOZ7O2.js.map
