import {
  environment
} from "./chunk-NMCGB4Y3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RadioControlValueAccessor
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
  __spreadProps,
  __spreadValues,
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
  ɵɵtextInterpolate5,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-XHDJFZT2.js";

// src/app/components/users/users.ts
function UsersComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success);
  }
}
function UsersComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function UsersComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 16);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Cargando mozos...");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 22);
    \u0275\u0275element(2, "path", 23)(3, "circle", 24)(4, "path", 25)(5, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "No hay mozos registrados.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 4);
    \u0275\u0275listener("click", function UsersComponent_div_15_div_1_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openCreate());
    });
    \u0275\u0275text(9, "Agregar el primero");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_div_15_table_2_tr_16__svg_path_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 50);
  }
}
function UsersComponent_div_15_table_2_tr_16__svg_line_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 51);
  }
}
function UsersComponent_div_15_table_2_tr_16__svg_path_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 52);
  }
}
function UsersComponent_div_15_table_2_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 29)(3, "div", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td")(11, "code", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td")(14, "span", 34);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "span", 35);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 36);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "div", 37)(23, "button", 38);
    \u0275\u0275listener("click", function UsersComponent_div_15_table_2_tr_16_Template_button_click_23_listener() {
      const w_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openEdit(w_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(24, "svg", 5);
    \u0275\u0275element(25, "path", 39)(26, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "button", 41);
    \u0275\u0275listener("click", function UsersComponent_div_15_table_2_tr_16_Template_button_click_27_listener() {
      const w_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleActive(w_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 5);
    \u0275\u0275template(29, UsersComponent_div_15_table_2_tr_16__svg_path_29_Template, 1, 0, "path", 42)(30, UsersComponent_div_15_table_2_tr_16__svg_line_30_Template, 1, 0, "line", 43)(31, UsersComponent_div_15_table_2_tr_16__svg_path_31_Template, 1, 0, "path", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "button", 45);
    \u0275\u0275listener("click", function UsersComponent_div_15_table_2_tr_16_Template_button_click_32_listener() {
      const w_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteWaiter(w_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 5);
    \u0275\u0275element(34, "polyline", 46)(35, "path", 47)(36, "path", 48)(37, "path", 49);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const w_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("avatar-f", w_r4.gender === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getGenderIcon(w_r4.gender), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", w_r4.firstName, " ", w_r4.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getGenderLabel(w_r4.gender));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(w_r4.username);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-f", w_r4.gender === "F");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", w_r4.gender === "F" ? "Femenino" : "Masculino", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", w_r4.isActive)("inactive", !w_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", w_r4.isActive ? "Activo" : "Inactivo", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(w_r4.createdAt));
    \u0275\u0275advance(7);
    \u0275\u0275classProp("btn-toggle-off", w_r4.isActive)("btn-toggle-on", !w_r4.isActive);
    \u0275\u0275property("title", w_r4.isActive ? "Desactivar" : "Activar");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", w_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", w_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !w_r4.isActive);
  }
}
function UsersComponent_div_15_table_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 27)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Mozo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "G\xE9nero");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Desde");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Acciones");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "tbody");
    \u0275\u0275template(16, UsersComponent_div_15_table_2_tr_16_Template, 38, 24, "tr", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.waiters);
  }
}
function UsersComponent_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate5(" ", ctx_r0.waiters.length, " mozo", ctx_r0.waiters.length !== 1 ? "s" : "", " registrado", ctx_r0.waiters.length !== 1 ? "s" : "", " \xB7 ", ctx_r0.activeCount, " activo", ctx_r0.activeCount !== 1 ? "s" : "", " ");
  }
}
function UsersComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, UsersComponent_div_15_div_1_Template, 10, 0, "div", 18)(2, UsersComponent_div_15_table_2_Template, 17, 1, "table", 19)(3, UsersComponent_div_15_div_3_Template, 2, 5, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.waiters.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.waiters.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.waiters.length > 0);
  }
}
function UsersComponent_div_16_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function UsersComponent_div_16_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.isEditing ? "Guardar cambios" : "Crear mozo");
  }
}
function UsersComponent_div_16_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 74);
  }
}
function UsersComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("click", function UsersComponent_div_16_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 55);
    \u0275\u0275listener("click", function UsersComponent_div_16_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 56)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 57);
    \u0275\u0275listener("click", function UsersComponent_div_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 58);
    \u0275\u0275template(8, UsersComponent_div_16_div_8_Template, 2, 1, "div", 9);
    \u0275\u0275elementStart(9, "div", 59)(10, "div", 60)(11, "label");
    \u0275\u0275text(12, "Nombre *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_16_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.firstName, $event) || (ctx_r0.form.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 60)(15, "label");
    \u0275\u0275text(16, "Apellido *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_16_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.lastName, $event) || (ctx_r0.form.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 60)(19, "label");
    \u0275\u0275text(20, "Usuario *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_16_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.username, $event) || (ctx_r0.form.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 60)(23, "label");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_16_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.password, $event) || (ctx_r0.form.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 60)(27, "label");
    \u0275\u0275text(28, "G\xE9nero *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 65)(30, "label", 66)(31, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_16_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.gender, $event) || (ctx_r0.form.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " \u{1F468} Masculino ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "label", 66)(34, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_div_16_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.gender, $event) || (ctx_r0.form.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " \u{1F469} Femenino ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 69)(37, "button", 70);
    \u0275\u0275listener("click", function UsersComponent_div_16_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModal());
    });
    \u0275\u0275text(38, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 71);
    \u0275\u0275listener("click", function UsersComponent_div_16_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveWaiter());
    });
    \u0275\u0275template(40, UsersComponent_div_16_span_40_Template, 2, 1, "span", 72)(41, UsersComponent_div_16_span_41_Template, 1, 0, "span", 73);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.isEditing ? "Editar Mozo" : "Nuevo Mozo");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.error);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.firstName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.lastName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.username);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Contrase\xF1a ", ctx_r0.isEditing ? "(dejar en blanco para no cambiar)" : "*");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.password);
    \u0275\u0275property("placeholder", ctx_r0.isEditing ? "Nueva contrase\xF1a (opcional)" : "Contrase\xF1a");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("selected", ctx_r0.form.gender === "M");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.gender);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx_r0.form.gender === "F");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.gender);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.savingForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.savingForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.savingForm);
  }
}
var UsersComponent = class _UsersComponent {
  http;
  API = `${environment.apiUrl}/waiter`;
  waiters = [];
  loading = false;
  error = "";
  success = "";
  showModal = false;
  isEditing = false;
  editingId = null;
  savingForm = false;
  form = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "M"
  };
  get activeCount() {
    return this.waiters.filter((w) => w.isActive).length;
  }
  constructor(http) {
    this.http = http;
  }
  ngOnInit() {
    this.loadWaiters();
  }
  loadWaiters() {
    this.loading = true;
    this.error = "";
    this.http.get(this.API).subscribe({
      next: (data) => {
        this.waiters = data;
        this.loading = false;
      },
      error: () => {
        this.error = "Error al cargar mozos. Verifica que el backend est\xE9 corriendo.";
        this.loading = false;
      }
    });
  }
  openCreate() {
    this.isEditing = false;
    this.editingId = null;
    this.form = { username: "", password: "", firstName: "", lastName: "", gender: "M" };
    this.error = "";
    this.showModal = true;
  }
  openEdit(w) {
    this.isEditing = true;
    this.editingId = w.id;
    this.form = { username: w.username, password: "", firstName: w.firstName, lastName: w.lastName, gender: w.gender };
    this.error = "";
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
  saveWaiter() {
    if (!this.form.username.trim() || !this.form.firstName.trim() || !this.form.lastName.trim()) {
      this.error = "Usuario, nombre y apellido son requeridos";
      return;
    }
    if (!this.isEditing && !this.form.password.trim()) {
      this.error = "La contrase\xF1a es requerida";
      return;
    }
    this.savingForm = true;
    this.error = "";
    if (this.isEditing && this.editingId) {
      const body = __spreadProps(__spreadValues({}, this.form), { isActive: true });
      this.http.put(`${this.API}/${this.editingId}`, body).subscribe({
        next: () => {
          this.showSuccess("Mozo actualizado");
          this.loadWaiters();
        },
        error: (e) => {
          this.error = e.error || "Error al actualizar";
          this.savingForm = false;
        }
      });
    } else {
      this.http.post(this.API, this.form).subscribe({
        next: () => {
          this.showSuccess("Mozo creado");
          this.loadWaiters();
        },
        error: (e) => {
          this.error = e.error || "Error al crear";
          this.savingForm = false;
        }
      });
    }
  }
  toggleActive(w) {
    this.http.put(`${this.API}/${w.id}/toggle-active`, {}).subscribe({
      next: (res) => {
        w.isActive = res.isActive;
        this.showSuccess(w.isActive ? "Mozo activado" : "Mozo desactivado");
      },
      error: () => this.error = "Error al cambiar estado"
    });
  }
  deleteWaiter(w) {
    if (!confirm(`\xBFEliminar a ${w.firstName} ${w.lastName}?`))
      return;
    this.http.delete(`${this.API}/${w.id}`).subscribe({
      next: () => {
        this.waiters = this.waiters.filter((x) => x.id !== w.id);
        this.showSuccess("Mozo eliminado");
      },
      error: () => this.error = "Error al eliminar"
    });
  }
  showSuccess(msg) {
    this.success = msg;
    this.showModal = false;
    this.savingForm = false;
    setTimeout(() => this.success = "", 3e3);
  }
  getGenderIcon(gender) {
    return gender === "F" ? "\u{1F469}" : "\u{1F468}";
  }
  getGenderLabel(gender) {
    return gender === "F" ? "Moza" : "Mozo";
  }
  formatDate(d) {
    return new Date(d).toLocaleDateString("es-PE", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)(\u0275\u0275directiveInject(HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 17, vars: 5, consts: [[1, "users-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "btn-add", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "5", "x2", "12", "y2", "19"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "loading-wrap", 4, "ngIf"], ["class", "table-wrap", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "loading-wrap"], [1, "spinner"], [1, "table-wrap"], ["class", "empty-state", 4, "ngIf"], ["class", "waiter-table", 4, "ngIf"], ["class", "table-footer", 4, "ngIf"], [1, "empty-state"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "waiter-table"], [4, "ngFor", "ngForOf"], [1, "waiter-name"], [1, "avatar"], [1, "name"], [1, "sub"], [1, "username"], [1, "badge"], [1, "status-badge"], [1, "date"], [1, "actions"], ["title", "Editar", 1, "btn-icon", "btn-edit", 3, "click"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "btn-icon", 3, "click", "title"], ["d", "M18.36 6.64a9 9 0 1 1-12.73 0", 4, "ngIf"], ["x1", "12", "y1", "2", "x2", "12", "y2", "12", 4, "ngIf"], ["d", "M12 2v10M18.36 6.64A9 9 0 1 1 5.64 6.64", 4, "ngIf"], ["title", "Eliminar", 1, "btn-icon", "btn-delete", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6l-1 14H6L5 6"], ["d", "M10 11v6M14 11v6"], ["d", "M9 6V4h6v2"], ["d", "M18.36 6.64a9 9 0 1 1-12.73 0"], ["x1", "12", "y1", "2", "x2", "12", "y2", "12"], ["d", "M12 2v10M18.36 6.64A9 9 0 1 1 5.64 6.64"], [1, "table-footer"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "form-row"], [1, "form-group"], ["type", "text", "placeholder", "Ej: Juan", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ej: P\xE9rez", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ej: juan.perez", 3, "ngModelChange", "ngModel"], ["type", "password", 3, "ngModelChange", "ngModel", "placeholder"], [1, "gender-options"], [1, "gender-opt"], ["type", "radio", "value", "M", "name", "gender", 3, "ngModelChange", "ngModel"], ["type", "radio", "value", "F", "name", "gender", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn-cancel", 3, "click"], [1, "btn-save", 3, "click", "disabled"], [4, "ngIf"], ["class", "spinner-sm", 4, "ngIf"], [1, "spinner-sm"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
      \u0275\u0275text(4, "Gesti\xF3n de Mozos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Administra el personal de atenci\xF3n");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_7_listener() {
        return ctx.openCreate();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 5);
      \u0275\u0275element(9, "line", 6)(10, "line", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Nuevo Mozo ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, UsersComponent_div_12_Template, 2, 1, "div", 8)(13, UsersComponent_div_13_Template, 2, 1, "div", 9)(14, UsersComponent_div_14_Template, 4, 0, "div", 10)(15, UsersComponent_div_15_Template, 4, 3, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, UsersComponent_div_16_Template, 42, 17, "div", 12);
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.showModal);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showModal);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, HttpClientModule], styles: ['\n\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.users-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  min-height: 100vh;\n  background: #f4f4f6;\n  font-family: "Segoe UI", sans-serif;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #888;\n  margin-top: 2px;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.btn-add[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity .2s;\n}\n.btn-add[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  opacity: .88;\n}\n.loading-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 3rem;\n  justify-content: center;\n  color: #888;\n  font-size: 14px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #f97316;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin .7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.table-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #ebebeb;\n  overflow: hidden;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 4rem 2rem;\n  color: #aaa;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  stroke: #ddd;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.waiter-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.waiter-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  background: #fafafa;\n  border-bottom: 1px solid #ebebeb;\n}\n.waiter-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-bottom: 1px solid #f3f3f3;\n  color: #333;\n}\n.waiter-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.waiter-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.waiter-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #f97316,\n      #ef4444);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.avatar-f[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ec4899,\n      #f97316);\n}\n.name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111;\n  font-size: 14px;\n}\n.sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #aaa;\n  margin-top: 1px;\n}\n.username[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 3px 8px;\n  font-family: monospace;\n  font-size: 12px;\n  color: #555;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge-f[_ngcontent-%COMP%] {\n  background: #fce7f3;\n  color: #9d174d;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-badge.inactive[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #aaa;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.btn-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background .2s;\n}\n.btn-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.btn-edit[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.btn-edit[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n}\n.btn-toggle-off[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #ea580c;\n}\n.btn-toggle-off[_ngcontent-%COMP%]:hover {\n  background: #ffedd5;\n}\n.btn-toggle-on[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.btn-toggle-on[_ngcontent-%COMP%]:hover {\n  background: #dcfce7;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.btn-delete[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n}\n.table-footer[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  font-size: 12px;\n  color: #aaa;\n  background: #fafafa;\n  border-top: 1px solid #f0f0f0;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  width: 100%;\n  max-width: 500px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, .2);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 18px;\n  color: #aaa;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background .2s;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #555;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  outline: none;\n  transition: border-color .2s;\n  color: #111;\n  background: #fafafa;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #f97316;\n  background: #fff;\n}\n.gender-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.gender-opt[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all .2s;\n}\n.gender-opt[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.gender-opt.selected[_ngcontent-%COMP%] {\n  border-color: #f97316;\n  background: #fff7ed;\n  color: #c2410c;\n  font-weight: 600;\n}\n.gender-opt[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px 20px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  color: #555;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background .2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n}\n.btn-save[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  min-width: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity .2s;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: .88;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: .6;\n  cursor: not-allowed;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, .3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin .7s linear infinite;\n}\n@media (max-width: 600px) {\n  .users-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .waiter-table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n  }\n}\n/*# sourceMappingURL=users.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [CommonModule, FormsModule, HttpClientModule], template: `<div class="users-page">\r
\r
  <!-- HEADER -->\r
  <div class="page-header">\r
    <div>\r
      <h2 class="page-title">Gesti\xF3n de Mozos</h2>\r
      <p class="page-subtitle">Administra el personal de atenci\xF3n</p>\r
    </div>\r
    <button class="btn-add" (click)="openCreate()">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>\r
      </svg>\r
      Nuevo Mozo\r
    </button>\r
  </div>\r
\r
  <!-- ALERTAS -->\r
  <div class="alert alert-success" *ngIf="success">{{ success }}</div>\r
  <div class="alert alert-error" *ngIf="error && !showModal">{{ error }}</div>\r
\r
  <!-- LOADING -->\r
  <div class="loading-wrap" *ngIf="loading">\r
    <div class="spinner"></div>\r
    <span>Cargando mozos...</span>\r
  </div>\r
\r
  <!-- TABLA -->\r
  <div class="table-wrap" *ngIf="!loading">\r
\r
    <!-- Sin datos -->\r
    <div class="empty-state" *ngIf="waiters.length === 0">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">\r
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>\r
        <circle cx="9" cy="7" r="4"/>\r
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>\r
      </svg>\r
      <p>No hay mozos registrados.</p>\r
      <button class="btn-add" (click)="openCreate()">Agregar el primero</button>\r
    </div>\r
\r
    <!-- Lista de mozos -->\r
    <table class="waiter-table" *ngIf="waiters.length > 0">\r
      <thead>\r
        <tr>\r
          <th>Mozo</th>\r
          <th>Usuario</th>\r
          <th>G\xE9nero</th>\r
          <th>Estado</th>\r
          <th>Desde</th>\r
          <th>Acciones</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let w of waiters">\r
          <td>\r
            <div class="waiter-name">\r
              <div class="avatar" [class.avatar-f]="w.gender === 'F'">\r
                {{ getGenderIcon(w.gender) }}\r
              </div>\r
              <div>\r
                <div class="name">{{ w.firstName }} {{ w.lastName }}</div>\r
                <div class="sub">{{ getGenderLabel(w.gender) }}</div>\r
              </div>\r
            </div>\r
          </td>\r
          <td><code class="username">{{ w.username }}</code></td>\r
          <td>\r
            <span class="badge" [class.badge-f]="w.gender === 'F'">\r
              {{ w.gender === 'F' ? 'Femenino' : 'Masculino' }}\r
            </span>\r
          </td>\r
          <td>\r
            <span class="status-badge" [class.active]="w.isActive" [class.inactive]="!w.isActive">\r
              {{ w.isActive ? 'Activo' : 'Inactivo' }}\r
            </span>\r
          </td>\r
          <td class="date">{{ formatDate(w.createdAt) }}</td>\r
          <td>\r
            <div class="actions">\r
              <button class="btn-icon btn-edit" (click)="openEdit(w)" title="Editar">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>\r
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>\r
                </svg>\r
              </button>\r
              <button class="btn-icon" [class.btn-toggle-off]="w.isActive" [class.btn-toggle-on]="!w.isActive"\r
                (click)="toggleActive(w)" [title]="w.isActive ? 'Desactivar' : 'Activar'">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <path *ngIf="w.isActive" d="M18.36 6.64a9 9 0 1 1-12.73 0"/>\r
                  <line *ngIf="w.isActive" x1="12" y1="2" x2="12" y2="12"/>\r
                  <path *ngIf="!w.isActive" d="M12 2v10M18.36 6.64A9 9 0 1 1 5.64 6.64"/>\r
                </svg>\r
              </button>\r
              <button class="btn-icon btn-delete" (click)="deleteWaiter(w)" title="Eliminar">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="3 6 5 6 21 6"/>\r
                  <path d="M19 6l-1 14H6L5 6"/>\r
                  <path d="M10 11v6M14 11v6"/>\r
                  <path d="M9 6V4h6v2"/>\r
                </svg>\r
              </button>\r
            </div>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
\r
    <!-- Contador -->\r
    <div class="table-footer" *ngIf="waiters.length > 0">\r
      {{ waiters.length }} mozo{{ waiters.length !== 1 ? 's' : '' }} registrado{{ waiters.length !== 1 ? 's' : '' }}\r
      \xB7 {{ activeCount }} activo{{ activeCount !== 1 ? 's' : '' }}\r
    </div>\r
  </div>\r
\r
</div>\r
\r
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\r
     MODAL CREAR / EDITAR\r
\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
<div class="modal-overlay" *ngIf="showModal" (click)="closeModal()">\r
  <div class="modal" (click)="$event.stopPropagation()">\r
\r
    <div class="modal-header">\r
      <h3>{{ isEditing ? 'Editar Mozo' : 'Nuevo Mozo' }}</h3>\r
      <button class="modal-close" (click)="closeModal()">\u2715</button>\r
    </div>\r
\r
    <div class="modal-body">\r
      <div class="alert alert-error" *ngIf="error">{{ error }}</div>\r
\r
      <!-- Nombre y apellido -->\r
      <div class="form-row">\r
        <div class="form-group">\r
          <label>Nombre *</label>\r
          <input type="text" [(ngModel)]="form.firstName" placeholder="Ej: Juan" />\r
        </div>\r
        <div class="form-group">\r
          <label>Apellido *</label>\r
          <input type="text" [(ngModel)]="form.lastName" placeholder="Ej: P\xE9rez" />\r
        </div>\r
      </div>\r
\r
      <!-- Usuario -->\r
      <div class="form-group">\r
        <label>Usuario *</label>\r
        <input type="text" [(ngModel)]="form.username" placeholder="Ej: juan.perez" />\r
      </div>\r
\r
      <!-- Contrase\xF1a -->\r
      <div class="form-group">\r
        <label>Contrase\xF1a {{ isEditing ? '(dejar en blanco para no cambiar)' : '*' }}</label>\r
        <input type="password" [(ngModel)]="form.password"\r
          [placeholder]="isEditing ? 'Nueva contrase\xF1a (opcional)' : 'Contrase\xF1a'" />\r
      </div>\r
\r
      <!-- G\xE9nero -->\r
      <div class="form-group">\r
        <label>G\xE9nero *</label>\r
        <div class="gender-options">\r
          <label class="gender-opt" [class.selected]="form.gender === 'M'">\r
            <input type="radio" [(ngModel)]="form.gender" value="M" name="gender" />\r
            \u{1F468} Masculino\r
          </label>\r
          <label class="gender-opt" [class.selected]="form.gender === 'F'">\r
            <input type="radio" [(ngModel)]="form.gender" value="F" name="gender" />\r
            \u{1F469} Femenino\r
          </label>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="modal-footer">\r
      <button class="btn-cancel" (click)="closeModal()">Cancelar</button>\r
      <button class="btn-save" (click)="saveWaiter()" [disabled]="savingForm">\r
        <span *ngIf="!savingForm">{{ isEditing ? 'Guardar cambios' : 'Crear mozo' }}</span>\r
        <span *ngIf="savingForm" class="spinner-sm"></span>\r
      </button>\r
    </div>\r
\r
  </div>\r
</div>`, styles: ['/* src/app/components/users/users.css */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.users-page {\n  padding: 2rem;\n  min-height: 100vh;\n  background: #f4f4f6;\n  font-family: "Segoe UI", sans-serif;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #111;\n}\n.page-subtitle {\n  font-size: 13px;\n  color: #888;\n  margin-top: 2px;\n}\n.alert {\n  padding: 10px 16px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.alert-success {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.alert-error {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fca5a5;\n}\n.btn-add {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  color: #fff;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity .2s;\n}\n.btn-add svg {\n  width: 16px;\n  height: 16px;\n}\n.btn-add:hover {\n  opacity: .88;\n}\n.loading-wrap {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 3rem;\n  justify-content: center;\n  color: #888;\n  font-size: 14px;\n}\n.spinner {\n  width: 24px;\n  height: 24px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #f97316;\n  border-radius: 50%;\n  animation: spin .7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.table-wrap {\n  background: #fff;\n  border-radius: 14px;\n  border: 1px solid #ebebeb;\n  overflow: hidden;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 4rem 2rem;\n  color: #aaa;\n  text-align: center;\n}\n.empty-state svg {\n  width: 64px;\n  height: 64px;\n  stroke: #ddd;\n}\n.empty-state p {\n  font-size: 15px;\n}\n.waiter-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.waiter-table th {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 600;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n  background: #fafafa;\n  border-bottom: 1px solid #ebebeb;\n}\n.waiter-table td {\n  padding: 14px 16px;\n  border-bottom: 1px solid #f3f3f3;\n  color: #333;\n}\n.waiter-table tr:last-child td {\n  border-bottom: none;\n}\n.waiter-table tr:hover td {\n  background: #fafafa;\n}\n.waiter-name {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #f97316,\n      #ef4444);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.avatar-f {\n  background:\n    linear-gradient(\n      135deg,\n      #ec4899,\n      #f97316);\n}\n.name {\n  font-weight: 600;\n  color: #111;\n  font-size: 14px;\n}\n.sub {\n  font-size: 11px;\n  color: #aaa;\n  margin-top: 1px;\n}\n.username {\n  background: #f3f4f6;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 3px 8px;\n  font-family: monospace;\n  font-size: 12px;\n  color: #555;\n}\n.badge {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #dbeafe;\n  color: #1e40af;\n}\n.badge-f {\n  background: #fce7f3;\n  color: #9d174d;\n}\n.status-badge {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-badge.active {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-badge.inactive {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.date {\n  font-size: 12px;\n  color: #aaa;\n}\n.actions {\n  display: flex;\n  gap: 6px;\n}\n.btn-icon {\n  width: 32px;\n  height: 32px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background .2s;\n}\n.btn-icon svg {\n  width: 15px;\n  height: 15px;\n}\n.btn-edit {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.btn-edit:hover {\n  background: #dbeafe;\n}\n.btn-toggle-off {\n  background: #fff7ed;\n  color: #ea580c;\n}\n.btn-toggle-off:hover {\n  background: #ffedd5;\n}\n.btn-toggle-on {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.btn-toggle-on:hover {\n  background: #dcfce7;\n}\n.btn-delete {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.btn-delete:hover {\n  background: #fee2e2;\n}\n.table-footer {\n  padding: 12px 16px;\n  font-size: 12px;\n  color: #aaa;\n  background: #fafafa;\n  border-top: 1px solid #f0f0f0;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1rem;\n}\n.modal {\n  background: #fff;\n  border-radius: 16px;\n  width: 100%;\n  max-width: 500px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, .2);\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.modal-header h3 {\n  font-size: 17px;\n  font-weight: 700;\n  color: #111;\n}\n.modal-close {\n  background: none;\n  border: none;\n  font-size: 18px;\n  color: #aaa;\n  cursor: pointer;\n  padding: 4px 8px;\n  border-radius: 6px;\n  transition: background .2s;\n}\n.modal-close:hover {\n  background: #f3f4f6;\n  color: #555;\n}\n.modal-body {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-group label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #555;\n}\n.form-group input {\n  padding: 10px 12px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  outline: none;\n  transition: border-color .2s;\n  color: #111;\n  background: #fafafa;\n}\n.form-group input:focus {\n  border-color: #f97316;\n  background: #fff;\n}\n.gender-options {\n  display: flex;\n  gap: 10px;\n}\n.gender-opt {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border: 2px solid #e5e7eb;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all .2s;\n}\n.gender-opt input {\n  display: none;\n}\n.gender-opt.selected {\n  border-color: #f97316;\n  background: #fff7ed;\n  color: #c2410c;\n  font-weight: 600;\n}\n.gender-opt:hover {\n  border-color: #d1d5db;\n}\n.modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 16px 24px 20px;\n  border-top: 1px solid #f0f0f0;\n}\n.btn-cancel {\n  padding: 10px 20px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  background: #fff;\n  color: #555;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background .2s;\n}\n.btn-cancel:hover {\n  background: #f3f4f6;\n}\n.btn-save {\n  padding: 10px 24px;\n  border: none;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f97316,\n      #ef4444);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  min-width: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity .2s;\n}\n.btn-save:hover:not(:disabled) {\n  opacity: .88;\n}\n.btn-save:disabled {\n  opacity: .6;\n  cursor: not-allowed;\n}\n.spinner-sm {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, .3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin .7s linear infinite;\n}\n@media (max-width: 600px) {\n  .users-page {\n    padding: 1rem;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .waiter-table {\n    display: block;\n    overflow-x: auto;\n  }\n}\n/*# sourceMappingURL=users.css.map */\n'] }]
  }], () => [{ type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "app/components/users/users.ts", lineNumber: 32 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-KP2R2BSS.js.map
