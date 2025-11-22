import { ref as V, provide as vl, createElementBlock as Ue, openBlock as Ye, defineComponent as k, createVNode as u, h as M, createTextVNode as At, Transition as bl, isVNode as Ie, inject as H, mergeProps as Fs, markRaw as ki, computed as ma, onMounted as xl, createCommentVNode as wi, Fragment as va, renderList as yl, toDisplayString as Si, normalizeClass as $l, unref as ba, withCtx as kl, renderSlot as wl } from "vue";
var re = function(e) {
  return e != null;
}, en = function(e) {
  return e == null;
}, ln = function(e) {
  return Array.isArray(e);
}, Xn = function(e) {
  return typeof e == "function";
}, Br = function(e) {
  return typeof e == "string";
}, Sl = function(e) {
  return en(e) || e.trim().length === 0;
}, Cl = function(e) {
  return !Sl(e);
}, Ut = function(e) {
  return !isNaN(e - parseFloat(e));
}, ft = function(e) {
  return e && e.getTime;
}, Ct = function(e) {
  return re(e.filters);
};
function xa(e, t, i) {
  if (i || arguments.length === 2) for (var n = 0, r = t.length, a; n < r; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Ls = function(e, t, i) {
  return function(n) {
    return e(n) ? t(n) : i(n);
  };
}, Qe = function() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(i) {
    return e.reduceRight(function(n, r) {
      return r(n);
    }, i);
  };
}, Il = function(e) {
  return new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
}, Dl = function(e) {
  return ft(e.value);
}, El = function(e) {
  return {
    "!=": "neq",
    "<": "lt",
    "<=": "lte",
    "==": "eq",
    ">": "gt",
    ">=": "gte",
    equal: "eq",
    equals: "eq",
    equalto: "eq",
    ge: "gte",
    greater: "gt",
    greaterthan: "gt",
    greaterthanequal: "gte",
    isempty: "isempty",
    isequalto: "eq",
    isgreaterthan: "gt",
    isgreaterthanorequalto: "gte",
    islessthan: "lt",
    islessthanorequalto: "lte",
    isnotempty: "isnotempty",
    isnotequalto: "neq",
    isnull: "isnull",
    le: "lte",
    less: "lt",
    lessthan: "lt",
    lessthanequal: "lte",
    ne: "neq",
    notequal: "neq",
    notequals: "neq",
    notequalto: "neq",
    notsubstringof: "doesnotcontain"
  }[e.toLowerCase()] || e;
}, Os = function(e) {
  e.filters && (e.filters = e.filters.map(function(t) {
    var i = Object.assign({}, t);
    return !Ct(t) && Br(t.operator) && (i.operator = El(t.operator)), Ct(t) && Os(i), i;
  }));
}, Ml = function(e) {
  return Ct(e) ? Object.assign({}, e) : {
    filters: ln(e) ? e : [e],
    logic: "and"
  };
}, Ns = function(e) {
  return re(e) && (e = Ml(e), Os(e)), e;
}, Xt = {}, Fl = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;
Xt.undefined = function(e) {
  return e;
};
var rt = function(e, t) {
  var i = e + t;
  if (Xt[i])
    return Xt[i];
  var n = [];
  return e.replace(Fl, function(r, a, o, s) {
    n.push(re(a) ? a : o || s);
  }), Xt[i] = function(r) {
    for (var a = r, o = 0; o < n.length; o++)
      if (a = a[n[o]], !re(a) && t)
        return a;
    return a;
  }, Xt[i];
}, mi = function(e) {
  return function(t) {
    return [e, t];
  };
}, Ll = function() {
  return null;
}, Ol = function(e) {
  return re(e) && ln(e) && e.length > 0;
}, Nl = function(e) {
  return function(t) {
    return Ol(e(t));
  };
}, Al = function(e, t) {
  return Ls(e, t, Ll);
}, _l = function(e) {
  var t = e.skip, i = e.take;
  return Math.floor((t || 0) / i) + 1;
}, jr = function(e, t) {
  return function(i) {
    return e(i).map(t).join("~");
  };
}, zl = function(e) {
  return function(t) {
    return t.slice(0, t.indexOf(e));
  };
}, Vl = function(e) {
  return Qe.apply(void 0, e.map(function(t) {
    var i = t[0], n = t[1];
    return function(r) {
      return r.replace(new RegExp(i, "g"), n);
    };
  }));
}, Tl = Vl([['"', ""], [":", "-"]]), Pl = zl("."), As = function(e) {
  var t = e.field, i = e.dir, n = i === void 0 ? "asc" : i;
  return "".concat(t, "-").concat(n);
}, Hl = function(e) {
  var t = e.field, i = e.aggregate;
  return "".concat(t, "-").concat(i);
}, Rl = rt("take"), Bl = rt("aggregates");
rt("skip");
var jl = rt("group"), Gr = rt("sort", !0), Gl = jr(Gr, As), Kl = jr(jl, As), ql = jr(Bl, Hl), Wl = function(e) {
  return "datetime'".concat(e, "'");
}, Ul = Qe(Wl, Pl, Tl, JSON.stringify, Il), Yl = function(e) {
  var t = e.field, i = e.value, n = e.ignoreCase, r = e.operator;
  return {
    value: Ul(i),
    field: t,
    ignoreCase: n,
    operator: r
  };
}, Xl = function(e) {
  return Object.assign({}, e, {
    sort: (Gr(e) || []).filter(function(t) {
      var i = t.dir;
      return Cl(i);
    })
  });
};
Qe(mi("page"), _l);
Qe(mi("pageSize"), Rl);
Qe(mi("group"), Kl);
var Jl = Qe(mi("sort"), Gl);
Qe(mi("aggregate"), ql);
Qe(Al(Nl(Gr), Jl), Xl);
var ya = function(e) {
  var t = e.field, i = e.operator, n = e.value;
  return "".concat(t, "~").concat(i, "~").concat(n);
};
Ls(Dl, Qe(ya, Yl), ya);
var _s = function(e, t, i) {
  return t[e] = i, t;
}, zs = function(e) {
  return function(t) {
    return Object.keys(t).reduce(e.bind(null, t), {});
  };
}, Zl = zs(function(e, t, i) {
  return _s(i.toLowerCase(), t, e[i]);
}), Ql = zs(function(e, t, i) {
  return _s(i, t, Zl(e[i]));
}), $a = function(e, t) {
  return re(e) ? e : t;
}, eu = function(e) {
  return {
    aggregates: e.Aggregates || e.aggregates,
    field: e.Member || e.member || e.field,
    hasSubgroups: e.HasSubgroups || e.hasSubgroups || !1,
    items: e.Items || e.items,
    value: $a(e.Key, $a(e.key, e.value))
  };
}, tu = Qe(function(e) {
  var t = e.field, i = e.hasSubgroups, n = e.value, r = e.aggregates, a = e.items;
  return {
    aggregates: Ql(r),
    field: t,
    items: i ? a.map(tu) : a,
    value: n
  };
}, eu), Vs = function(e, t) {
  return en(e) ? e === t ? 0 : -1 : en(t) ? 1 : e.localeCompare ? e.localeCompare(t) : e > t ? 1 : e < t ? -1 : 0;
}, iu = function(e, t) {
  return Vs(t, e);
}, nu = function(e) {
  if (typeof e.compare == "function")
    return e.compare;
  var t = rt(e.field, !0);
  return function(i, n) {
    return (e.dir === "asc" ? Vs : iu)(t(i), t(n));
  };
}, ru = function(e, t) {
  return 0;
}, au = function(e) {
  return e.filter(function(t) {
    return re(t.dir) || re(t.compare);
  }).map(function(t) {
    return nu(t);
  }).reduce(function(t, i) {
    return function(n, r) {
      return t(n, r) || i(n, r);
    };
  }, ru);
}, su = function(e) {
  return e = re(e) && e.getTime ? e.getTime() : e, e + "";
}, ou = function(e) {
  var t = rt(e, !0), i = 0;
  return function(n, r) {
    n[e] = n[e] || {};
    var a = t(r), o = su(a), s = n[e][o] || { __position: i++, aggregates: {}, items: [], value: a };
    return s.items.push(r), n[e][o] = s, n;
  };
}, lu = function(e) {
  return e === void 0 && (e = {}), Object.keys(e).forEach(function(t) {
    var i = e[t];
    Object.keys(i).forEach(function(n) {
      i[n] = i[n].result();
    });
  }), e;
}, uu = function(e) {
  return {
    average: function() {
      var t = 0, i = 0, n = !1, r = null;
      return {
        calc: function(a) {
          Ut(a) ? (t += a, i++, n = !0) : !n && r === null && (r = a);
        },
        result: function() {
          return n ? t / i : r;
        }
      };
    },
    count: function() {
      var t = 0;
      return {
        calc: function() {
          return t++;
        },
        result: function() {
          return t;
        }
      };
    },
    max: function() {
      var t = Number.NEGATIVE_INFINITY;
      return {
        calc: function(i) {
          t = Ut(t) || ft(t) ? t : i, t < i && (Ut(i) || ft(i)) && (t = i);
        },
        result: function() {
          return t;
        }
      };
    },
    min: function() {
      var t = Number.POSITIVE_INFINITY;
      return {
        calc: function(i) {
          t = Ut(t) || ft(t) ? t : i, t > i && (Ut(i) || ft(i)) && (t = i);
        },
        result: function() {
          return t;
        }
      };
    },
    sum: function() {
      var t = 0;
      return {
        calc: function(i) {
          i = re(i) ? i : 0, t += i;
        },
        result: function() {
          return t;
        }
      };
    }
  }[e]();
}, du = function(e) {
  var t = e.map(function(i) {
    var n = rt(i.field, !0), r = (i.aggregate || "").toLowerCase(), a = rt(r, !0);
    return function(o, s) {
      var l = o[i.field] || {}, d = a(l) || uu(r);
      return d.calc(n(s)), l[i.aggregate] = d, o[i.field] = l, o;
    };
  });
  return function(i, n) {
    return t.reduce(function(r, a) {
      return a(r, n);
    }, i);
  };
}, cu = function(e, t) {
  return e.push(t), e;
}, Ts = function(e) {
  return function(t) {
    return function(i, n, r) {
      return t(i, e(n, r));
    };
  };
}, ka = function(e) {
  return function(t) {
    return function(i, n) {
      return e(n) ? t(i, n) : i;
    };
  };
}, Ps = function(e) {
  return re(e.__value);
}, hu = function(e) {
  return Ps(e) ? e : {
    __value: e,
    reduced: !0
  };
}, pu = function(e) {
  return function(t) {
    return function(i, n) {
      return e-- > 0 ? t(i, n) : hu(i);
    };
  };
}, gu = function(e) {
  return function(t) {
    return function(i, n) {
      return e-- <= 0 ? t(i, n) : i;
    };
  };
}, Kr = function(e, t, i) {
  for (var n = t, r = 0, a = i.length; r < a; r++)
    if (n = e(n, i[r], r), Ps(n)) {
      n = n.__value;
      break;
    }
  return n;
}, fu = Ts(function(e) {
  return e;
}), mu = function(e, t, i) {
  t === void 0 && (t = []), i === void 0 && (i = fu);
  var n = {};
  if (!t.length)
    return n;
  var r = Kr(i(du(t)), n, e);
  return lu(r);
}, vu = {
  or: {
    concat: function(e, t) {
      return function(i) {
        return e(i) || t(i);
      };
    },
    identity: function() {
      return !1;
    }
  },
  and: {
    concat: function(e, t) {
      return function(i) {
        return e(i) && t(i);
      };
    },
    identity: function() {
      return !0;
    }
  }
}, bu = {
  contains: function(e, t) {
    return (e || "").indexOf(t) >= 0;
  },
  doesnotcontain: function(e, t) {
    return (e || "").indexOf(t) === -1;
  },
  doesnotendwith: function(e, t) {
    return (e || "").indexOf(t, (e || "").length - (t || "").length) < 0;
  },
  doesnotstartwith: function(e, t) {
    return (e || "").lastIndexOf(t, 0) === -1;
  },
  endswith: function(e, t) {
    return (e || "").indexOf(t, (e || "").length - (t || "").length) >= 0;
  },
  eq: function(e, t) {
    return e === t;
  },
  gt: function(e, t) {
    return e > t;
  },
  gte: function(e, t) {
    return e >= t;
  },
  isempty: function(e) {
    return e === "";
  },
  isnotempty: function(e) {
    return e !== "";
  },
  isnotnull: function(e) {
    return re(e);
  },
  isnull: function(e) {
    return en(e);
  },
  lt: function(e, t) {
    return e < t;
  },
  lte: function(e, t) {
    return e <= t;
  },
  neq: function(e, t) {
    return e != t;
  },
  startswith: function(e, t) {
    return (e || "").lastIndexOf(t, 0) === 0;
  }
}, Hs = /^\/Date\((.*?)\)\/$/, xu = function(e, t) {
  if (e != null && Br(e)) {
    var i = Hs.exec(e);
    if (i)
      return (/* @__PURE__ */ new Date(+i[1])).getTime();
    if (t)
      return e.toLowerCase();
  } else if (e != null && ft(e))
    return e.getTime();
  return e;
}, yu = function(e, t, i, n) {
  if (!re(t))
    return e;
  var r = e;
  if (Br(t)) {
    var a = Hs.exec(t);
    if (a)
      t = /* @__PURE__ */ new Date(+a[1]);
    else {
      var o = Xn(n);
      r = function(s) {
        var l = e(s);
        if (l === null || o && ln(l))
          return l;
        var d = typeof l == "string" ? l : l + "";
        return i ? d.toLowerCase() : d;
      };
    }
  }
  return ft(t) ? function(s) {
    var l = r(s);
    return ft(l) ? l.getTime() : l;
  } : r;
}, $u = function(e) {
  var t = e.field, i = e.ignoreCase, n = e.value, r = e.operator;
  t = re(t) ? t : function(s) {
    return s;
  }, i = re(i) ? i : !0;
  var a = yu(Xn(t) ? t : rt(t, !0), n, i, r);
  n = xu(n, i);
  var o = Xn(r) ? r : bu[r];
  return function(s) {
    return o(a(s), n, i);
  };
}, Rs = function(e) {
  var t = vu[e.logic];
  return e.filters.filter(re).map(function(i) {
    return Ct(i) ? Rs(i) : $u(i);
  }).reduce(t.concat, t.identity);
}, Bs = function(e) {
  return !e || e.filters.length === 0 ? function() {
    return !0;
  } : Rs(e);
}, ku = function(e, t) {
  return !re(t) || Ct(t) && t.filters.length === 0 ? e : e.filter(Bs(Ns(t)));
}, js = function(e) {
  return e = ln(e) ? e : [e], e.map(function(t) {
    return Object.assign({ dir: "asc" }, t);
  });
}, wa = Ts(function(e) {
  return e;
}), Jn = function(e, t, i, n) {
  if (t === void 0 && (t = []), i === void 0 && (i = wa), n === void 0 && (n = e), t = js(t), !t.length)
    return e;
  var r = t[0], a = {}, o = Kr(i(ou(r.field)), a, e), s = [];
  return Object.keys(o).forEach(function(l) {
    Object.keys(o[l]).forEach(function(d) {
      var c = o[l][d], h = {}, p = n;
      re(r.aggregates) && (p = ku(n, {
        field: r.field,
        ignoreCase: !1,
        operator: "eq",
        value: c.value
      }), h = mu(p, r.aggregates)), s[c.__position] = {
        aggregates: h,
        field: l,
        items: t.length > 1 ? Jn(c.items, t.slice(1), wa, p) : c.items,
        value: c.value
      };
    });
  }), s;
}, wu = function(e, t) {
  if (t.some(function(n) {
    return re(n.dir) || re(n.compare);
  })) {
    e = e.slice(0);
    var i = au(t);
    e.sort(i);
  }
  return e;
}, Su = function(e, t) {
  for (var i = 0, n = 0, r = e.length; n < r; n++)
    t(e[n]) && i++;
  return i;
}, Cu = function(e, t) {
  return t ? e.filter(t) : e;
}, Iu = function(e, t) {
  var i = t.skip, n = t.take, r = t.filter, a = t.sort, o = t.group, s = xa(xa([], js(o || []), !0), a || [], !0);
  s.length && (e = wu(e, s));
  var l = re(r) && ka.length, d = re(o) && o.length;
  if (!l && !d)
    return {
      data: n ? e.slice(i, i + n) : e,
      total: e.length
    };
  var c, h = [], p;
  if (l ? (p = Bs(Ns(r)), c = Su(e, p), h.push(ka(p))) : c = e.length, re(i) && re(n) && (h.push(gu(i)), h.push(pu(n))), h.length) {
    var g = Qe.apply(void 0, h), m = d ? Jn(e, o, g, Cu(e, p)) : Kr(g(cu), [], e);
    return { data: m, total: c };
  }
  return {
    data: d ? Jn(e, o) : e,
    total: c
  };
}, Sa;
(function(e) {
  e.Contains = "contains", e.DoesNotContain = "doesnotcontain", e.DoesNotEndWith = "doesnotendwith", e.DoesNotStartWith = "doesnotstartwith", e.EndsWith = "endswith", e.EqualTo = "eq", e.GreaterThan = "gt", e.GreaterThanOrEqual = "gte", e.IsEmpty = "isempty", e.IsNotEmpty = "isnotempty", e.IsNotNull = "isnotnull", e.IsNull = "isnull", e.LessThan = "lt", e.LessThanOrEqual = "lte", e.NotEqualTo = "neq", e.StartsWith = "startswith";
})(Sa || (Sa = {}));
const Du = { style: { display: "none" } }, bb = {
  __name: "LegacyKendoDatasource",
  props: {
    transportRead: { type: Function },
    transportUpdate: { type: Function },
    transportCreate: { type: Function },
    schemaModelFields: { type: Object },
    schemaModelId: { type: String, default: "id" },
    aggregate: { type: Array },
    pageSize: { type: Number, default: 10 },
    batch: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const i = e, n = V([]), r = V(0);
    V({});
    const a = async (d) => {
      i.transportRead && await i.transportRead({ success: (c) => {
        n.value = c, r.value = c.length;
      } }), d == null || d.success(n.value);
    }, o = (d) => {
      i.transportUpdate && i.transportUpdate(d);
    }, s = (d) => {
      i.transportCreate && i.transportCreate(d);
    }, l = { data: n.value, read: a, update: o, create: s, total: r.value };
    return vl("legacyDataSource", l), t({ read: a, data: n.value, total: r.value }), (d, c) => (Ye(), Ue("div", Du));
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const St = (e) => typeof e == "object";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const fe = (...e) => e.filter((t) => t !== !0 && !!t).map((t) => Array.isArray(t) ? fe(...t) : St(t) ? Object.keys(t).map((i, n) => t[n] || t[i] && i || null).filter((i) => i !== null).join(" ") : t).filter((t) => !!t).join(" ");
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const me = () => {
  let e = "", t, i;
  for (t = 0; t < 32; t++)
    i = Math.random() * 16 | 0, (t === 8 || t === 12 || t === 16 || t === 20) && (e += "-"), e += (t === 12 ? 4 : t === 16 ? i & 3 | 8 : i).toString(16);
  return e;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const O = {
  tab: 9,
  enter: 13,
  esc: 27,
  space: 32,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const se = !!// from fbjs
(typeof window < "u" && window.document && window.document.createElement);
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function J(e, t) {
  return e[`${t}Ref`];
}
function he(e, t) {
  return (i) => {
    e[`${t}Ref`] = i;
  };
}
var _t = function(e, t) {
  return function(i) {
    return t(e(i));
  };
}, Xe = function(e, t, i) {
  return e.addEventListener && e.addEventListener(t, i);
}, ve = function(e, t, i) {
  return e && e.removeEventListener && e.removeEventListener(t, i);
}, zt = function() {
}, Zn = function(e) {
  return e.preventDefault();
}, Eu = /touch/, Mu = 2e3;
function Vt(e) {
  return e.type.match(Eu) ? {
    pageX: e.changedTouches[0].pageX,
    pageY: e.changedTouches[0].pageY,
    clientX: e.changedTouches[0].clientX,
    clientY: e.changedTouches[0].clientY,
    type: e.type,
    originalEvent: e,
    isTouch: !0
  } : {
    pageX: e.pageX,
    pageY: e.pageY,
    clientX: e.clientX,
    clientY: e.clientY,
    offsetX: e.offsetX,
    offsetY: e.offsetY,
    type: e.type,
    ctrlKey: e.ctrlKey,
    shiftKey: e.shiftKey,
    altKey: e.altKey,
    originalEvent: e
  };
}
var Ne = function(t) {
  var i = this, n = t.press;
  n === void 0 && (n = zt);
  var r = t.drag;
  r === void 0 && (r = zt);
  var a = t.release;
  a === void 0 && (a = zt);
  var o = t.mouseOnly;
  o === void 0 && (o = !1), this._pressHandler = _t(Vt, n), this._dragHandler = _t(Vt, r), this._releaseHandler = _t(Vt, a), this._ignoreMouse = !1, this._mouseOnly = o, this._touchstart = function(s) {
    s.touches.length === 1 && i._pressHandler(s);
  }, this._touchmove = function(s) {
    s.touches.length === 1 && i._dragHandler(s);
  }, this._touchend = function(s) {
    s.touches.length === 0 && s.changedTouches.length === 1 && (i._releaseHandler(s), i._ignoreMouse = !0, setTimeout(i._restoreMouse, Mu));
  }, this._restoreMouse = function() {
    i._ignoreMouse = !1;
  }, this._mousedown = function(s) {
    var l = s.which;
    l && l > 1 || i._ignoreMouse || (Xe(i.document, "mousemove", i._mousemove), Xe(i.document, "mouseup", i._mouseup), i._pressHandler(s));
  }, this._mousemove = function(s) {
    i._dragHandler(s);
  }, this._mouseup = function(s) {
    ve(i.document, "mousemove", i._mousemove), ve(i.document, "mouseup", i._mouseup), i._releaseHandler(s);
  }, this._pointerdown = function(s) {
    s.isPrimary && s.button === 0 && (Xe(i.document, "pointermove", i._pointermove), Xe(i.document, "pointerup", i._pointerup), Xe(i.document, "pointercancel", i._pointerup), Xe(i.document, "contextmenu", Zn), i._pressHandler(s));
  }, this._pointermove = function(s) {
    s.isPrimary && i._dragHandler(s);
  }, this._pointerup = function(s) {
    s.isPrimary && (ve(i.document, "pointermove", i._pointermove), ve(i.document, "pointerup", i._pointerup), ve(i.document, "pointercancel", i._pointerup), ve(i.document, "contextmenu", Zn), i._releaseHandler(s));
  };
}, Gs = { document: { configurable: !0 } };
Ne.supportPointerEvent = function() {
  return typeof window < "u" && window.PointerEvent;
};
Gs.document.get = function() {
  return this._element ? this._element.ownerDocument : document;
};
Ne.prototype.cancelDrag = function() {
  ve(this.document, "pointermove", this._pointermove), ve(this.document, "pointerup", this._pointerup), ve(this.document, "pointercancel", this._pointerup);
};
Ne.prototype.bindTo = function(t) {
  t !== this._element && (this._element && this._unbindFromCurrent(), this._element = t, this._bindToCurrent());
};
Ne.prototype._bindToCurrent = function() {
  var t = this._element;
  if (this._usePointers()) {
    Xe(t, "pointerdown", this._pointerdown);
    return;
  }
  Xe(t, "mousedown", this._mousedown), this._mouseOnly || (Xe(t, "touchstart", this._touchstart), Xe(t, "touchmove", this._touchmove), Xe(t, "touchend", this._touchend));
};
Ne.prototype._unbindFromCurrent = function() {
  var t = this._element;
  if (this._usePointers()) {
    ve(t, "pointerdown", this._pointerdown), ve(this.document, "pointermove", this._pointermove), ve(this.document, "pointerup", this._pointerup), ve(this.document, "contextmenu", Zn), ve(this.document, "pointercancel", this._pointerup);
    return;
  }
  ve(t, "mousedown", this._mousedown), this._mouseOnly || (ve(t, "touchstart", this._touchstart), ve(t, "touchmove", this._touchmove), ve(t, "touchend", this._touchend));
};
Ne.prototype._usePointers = function() {
  return !this._mouseOnly && Ne.supportPointerEvent();
};
Ne.prototype.update = function(t) {
  var i = t.press;
  i === void 0 && (i = zt);
  var n = t.drag;
  n === void 0 && (n = zt);
  var r = t.release;
  r === void 0 && (r = zt);
  var a = t.mouseOnly;
  a === void 0 && (a = !1), this._pressHandler = _t(Vt, i), this._dragHandler = _t(Vt, n), this._releaseHandler = _t(Vt, r), this._mouseOnly = a;
};
Ne.prototype.destroy = function() {
  this._unbindFromCurrent(), this._element = null;
};
Object.defineProperties(Ne.prototype, Gs);
Ne.default = Ne;
const Fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Draggable: Ne,
  default: Ne
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function B(e) {
  const t = e.$slots.default;
  return t && typeof t == "function" ? t() : t;
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const qr = /* @__PURE__ */ k({
  emits: {
    press: null,
    drag: null,
    release: null
  },
  inheritAttrs: !1,
  created() {
    this.element = null;
    const e = Fu, t = typeof e < "u" && e.Draggable ? e : e.default;
    this.draggable = new t.Draggable({
      press: this.press,
      drag: this.drag,
      release: this.release
    });
  },
  mounted() {
    this.$el && (this.element = this.$el.nodeType === 3 || this.$el.nodeType === 8 ? this.$el.nextElementSibling : this.$el, this.draggable.bindTo(this.element));
  },
  unmounted() {
    this.draggable.destroy();
  },
  methods: {
    press(e) {
      this.element && this.$emit("press", e, this.element);
    },
    drag(e) {
      this.element && this.$emit("drag", e, this.element);
    },
    release(e) {
      this.element && this.$emit("release", e, this.element);
    }
  },
  render() {
    return B(this);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ca = (e) => e ? new Date(e.getTime()) : null;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ke = function() {
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Lu = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Jt = {};
Jt.undefined = () => {
};
function $n(e) {
  if (Jt[e])
    return Jt[e];
  const t = [];
  return e.replace(Lu, function(i, n, r, a) {
    t.push(n !== void 0 ? n : r || a);
  }), Jt[e] = function(i) {
    let n = i;
    for (let r = 0; r < t.length && n; r++)
      n = n[t[r]];
    return n;
  }, Jt[e];
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function it(e) {
  const t = Object.keys(this.$attrs).map((n) => n.toLowerCase()).some((n) => n.endsWith(e.toLowerCase())), i = Object.entries(this.$props).some(([n, r]) => {
    const a = n.toLowerCase();
    return r !== void 0 && a.startsWith("on") && a.endsWith(e.toLowerCase());
  });
  return t || i;
}
function T() {
  const e = {};
  for (const t in this.$attrs)
    t.startsWith("on") && (e[t] = this.$attrs[t]);
  for (const t in this.$props)
    t.startsWith("on") && (e[t] = this.$props[t]);
  return e;
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function P(e, t) {
  if (!e && e !== !1)
    return;
  if (e.kt)
    return e;
  const i = this.$slots[e] || (e.toLowerCase ? this.$slots[e.toLowerCase()] : null);
  return typeof e == "string" && i ? { kt: !0, type: "slot", render: i, listeners: t } : typeof e == "string" || St(e) || typeof e == "function" && e.component ? { kt: !0, type: "component", render: e, listeners: t } : { kt: !0, type: "renderFunction", render: e, listeners: t };
}
function _({
  h: e,
  template: t,
  defaultRendering: i,
  defaultSlots: n,
  additionalProps: r,
  additionalListeners: a,
  swapDefaultSlots: o
}) {
  if (!t || t && t.render === !0)
    return i;
  const s = i ? i.props : {}, l = {
    ...t.listeners,
    ...Ou(a)
  }, d = {
    ...s,
    ...r,
    ...l
  }, c = {
    ...d,
    ...l
  };
  return t.type === "slot" ? t.render({
    props: d,
    listeners: l,
    methods: l,
    defaultSlots: n
  }) : t.type === "renderFunction" ? o ? t.render ? t.render(e, i, n, d, l) : void 0 : t.render ? t.render(e, i, d, l, n) : void 0 : e(
    t.render,
    c,
    () => [n]
  );
}
function Ou(e) {
  if (!e)
    return e;
  const t = {}, i = Object.keys(e);
  for (let n = 0; n < i.length; n++) {
    const r = i[n];
    t["on" + r.charAt(0).toUpperCase() + r.slice(1)] = e[r];
  }
  return t;
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Nu = (e, t, i) => {
  const n = typeof e == "string" ? parseInt(e) : e;
  if (!Number.isNaN(n))
    return n !== void 0 ? n : t ? i ? void 0 : -1 : 0;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function tn(e) {
  return !!(se && e && getComputedStyle(e).direction === "rtl");
}
const X = gt;
(function(e, t) {
  const i = gt, n = e();
  for (; ; )
    try {
      if (parseInt(i(390)) / 1 + -parseInt(i(445)) / 2 + parseInt(i(512)) / 3 + -parseInt(i(525)) / 4 + parseInt(i(408)) / 5 * (parseInt(i(501)) / 6) + parseInt(i(440)) / 7 + parseInt(i(397)) / 8 * (-parseInt(i(394)) / 9) === t) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(nn, 291489);
const Ks = 10, Au = X(488), _u = X(502), zu = X(517), Vu = (e, t) => "[" + e + "]" + ("[" + _u + "]");
function Wr(e) {
  const t = X;
  return Math[t(519)](e[t(506)]() / 1e3);
}
function qs(e, t) {
  const i = X, n = new Date(e * 1e3);
  return n[i(407)](n[i(373)]() + t), Wr(n);
}
function ai() {
  return Wr(/* @__PURE__ */ new Date());
}
function Tu(e) {
  const t = X, i = ai() - Wr(e);
  return Math[t(519)](i / (24 * 60 * 60));
}
function Pu(e) {
  const t = X;
  if (typeof atob === t(375))
    if (t(356) === t(399)) _0x419c95 = new _0x117713(_0x3974e7[t(509)], _0x2de6af[t(460)], _0x2c8ba7[t(435)]);
    else return atob(e);
  if (typeof Buffer === t(375))
    if (t(431) === t(441)) {
      const i = _0x38b815[t(464)](_0x524005(_0x32f62c));
      _0x3740b7[t(471)](i[3]) && i[t(430)](3, 0, "");
      const n = { products: i[1][t(368)](([r, a, o]) => ({ code: r, licenseExpirationDate: a, trial: _0x52c99d(o) })), userId: i[2], integrity: i[3], licenses: i[4], scriptKey: !0 };
      try {
        const r = _0x3d40a3[t(464)](_0x55222f[t(457)]);
        n[t(416)] = [...r[t(416)], ...n[t(416)]], n[t(516)] = [...r[t(516)], ...n[t(516)]];
      } catch {
      }
      _0x16700f[t(457)] = _0x5b08a9[t(364)](n);
    } else return Buffer[t(472)](e, t(455))[t(439)](t(443));
  throw new Error(t(524));
}
function Ws(e) {
  const t = X, i = Pu(e), n = new Uint8Array(i[t(521)]);
  for (let r = 0; r < i[t(521)]; r++) {
    if (t(415) !== t(415)) return _0x2712ac[t(451)](_0x2664e5[t(496)]);
    n[r] = i[t(477)](r);
  }
  return n;
}
function Qn(e) {
  const t = X, i = e[t(475)](/-/g, "+")[t(475)](/_/g, "/");
  return Ws(i);
}
function Hu(e) {
  const t = X, i = e[t(404)](".")[1], n = String[t(384)](...Qn(i));
  return JSON[t(464)](n);
}
function Ru(e) {
  const t = X, i = [], n = e[t(353)]();
  for (let o = 0; o < n[t(521)]; o += 2)
    if (t(444) !== t(515)) {
      const s = n[t(380)](o, o + 2);
      i[t(495)](Number[t(504)](s, 21));
    } else {
      const s = _0x450ea4(_0x5bda1a), l = new _0x46fec7(s[t(521)]);
      for (let d = 0; d < s[t(521)]; d++)
        l[d] = s[t(477)](d);
      return l;
    }
  let r = 66;
  return i[t(368)]((o) => {
    const s = t;
    if (s(527) === s(398)) _0x55cb11 = _0x25319b[s(516)][s(368)]((l) => _0x2e5973(l));
    else {
      const l = o ^ r;
      return r = o, l;
    }
  })[t(368)]((o) => String[t(384)](o))[t(458)]("");
}
function Zt(e) {
  return new Date(e * 1e3);
}
function Lt(e, t) {
  const i = X, n = Zt(t), r = new Date(n[i(379)](), n[i(412)](), n[i(373)]() + 1), a = r[i(506)]() / 1e3;
  return e > a;
}
function Bu(e, t) {
  const i = X, n = t[i(518)]((h) => h[i(447)] !== i(351))[i(518)]((h) => {
    const p = i;
    if (p(489) !== p(490)) {
      var g, m;
      return e[p(529)] === h[p(480)] || ((g = e[p(462)]) === null || g === void 0 ? void 0 : g[p(465)](h[p(480)])) || ((m = e[p(383)]) === null || m === void 0 ? void 0 : m[p(465)](h[p(480)]));
    }
  })[i(400)]((h, p) => p[i(448)] - h[i(448)]), r = () => n[i(538)]((h) => h[i(447)] === i(522) && !Lt(ai(), h[i(448)])), a = () => n[i(538)]((h) => h[i(447)] === i(413) && !Lt(e[i(511)], h[i(448)])), o = () => n[i(538)]((h) => h[i(447)] === i(522) && !Lt(qs(ai(), Ks), h[i(448)])), s = () => n[i(538)]((h) => h[i(447)] === i(357) && !Lt(ai(), h[i(448)])), l = () => n[i(538)]((h) => h[i(447)] === i(413)), d = () => n[i(538)]((h) => h[i(447)] === i(522)), c = () => n[i(538)]((h) => h[i(447)] === i(357));
  return r() || a() || o() || s() || d() || l() || c();
}
function ju(e, t) {
  const i = X;
  var n, r;
  let a = [];
  if (((n = e[i(516)]) === null || n === void 0 ? void 0 : n[i(521)]) > 0)
    if (i(487) !== i(487)) {
      const o = _0x41049e(_0x5037d0(_0x73ec2d[i(448)]));
      _0xde22bc(_0x9efe72(), _0x2c778e[i(448)]) ? _0x387190 = new _0x1e6818(_0x420316[i(509)], _0x496172[i(460)], o) : (_0xbbecad = new _0x46fbb0(_0x48faad[i(509)], o), _0x4159f2 = !0);
    } else a = e[i(516)][i(368)]((o) => Hu(o));
  else if (((r = e[i(416)]) === null || r === void 0 ? void 0 : r[i(521)]) > 0)
    if (i(387) !== i(387)) {
      const o = _0x3d9571[i(380)](_0xe10c7a, _0x2d28a3 + 2);
      _0x55b941[i(495)](_0x24240d[i(504)](o, 21));
    } else a = e[i(416)][i(368)]((o) => ({ type: o[i(357)] ? i(357) : i(413), code: o[i(480)], expiration: o[i(386)], licenseId: null, userId: e[i(365)] }));
  return Bu(t, a);
}
const Gu = (e) => e[X(529)] || e[X(383)][0];
class Ku {
  constructor(t, i, n) {
    const r = X;
    this[r(509)] = t, this[r(354)] = r(427), this[r(480)] = r(421), this[r(499)] = r(503) + r(479), this[r(476)] = r(396) + t + " v" + i + "." + (r(534) + n + r(467));
  }
}
class qu {
  constructor(t, i, n) {
    const r = X;
    this[r(509)] = t, this[r(354)] = r(427), this[r(480)] = r(498), this[r(499)] = t + r(417) + (r(485) + t + r(539) + n), this[r(476)] = r(426) + t + " v" + i + "." + (r(362) + n + r(497));
  }
}
class Wu {
  constructor(t, i, n) {
    const r = X;
    this[r(509)] = t, this[r(354)] = r(427), this[r(480)] = r(463), this[r(499)] = r(361) + n + r(466) + (r(428) + t + r(360)) + r(450), this[r(476)] = r(363) + t + " v" + i + r(470) + n + r(491) + r(381) + (r(533) + t + r(376));
  }
}
class Uu {
  constructor(t, i, n, r, a) {
    const o = X;
    this[o(509)] = t, this[o(354)] = o(427), this[o(480)] = o(474);
    const s = n ? o(486) + n : "";
    this[o(499)] = o(392) + i[o(367)]() + o(414) + ("" + t + s + o(535) + r[o(367)]() + `.
`) + o(484), this[o(476)] = o(530) + t + " v" + n + ". " + (o(478) + a + o(461)) + o(523);
  }
}
function gt(e, t) {
  const i = nn();
  return gt = function(n, r) {
    n = n - 351;
    let a = i[n];
    if (gt.aEsuXv === void 0) {
      var o = function(c) {
        const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let p = "", g = "";
        for (let m = 0, f, b, v = 0; b = c.charAt(v++); ~b && (f = m % 4 ? f * 64 + b : b, m++ % 4) ? p += String.fromCharCode(255 & f >> (-2 * m & 6)) : 0)
          b = h.indexOf(b);
        for (let m = 0, f = p.length; m < f; m++)
          g += "%" + ("00" + p.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(g);
      };
      gt.nFuqto = o, e = arguments, gt.aEsuXv = !0;
    }
    const s = i[0], l = n + s, d = e[l];
    return d ? a = d : (a = gt.nFuqto(a), e[l] = a), a;
  }, gt(e, t);
}
class Yu {
  constructor(t, i) {
    const n = X;
    this[n(509)] = t, this[n(354)] = n(432), this[n(499)] = n(493) + -i + n(402) + n(420);
  }
}
function Xu(e) {
  const t = X, i = t(473), n = t(393), r = e[t(475)](i, "")[t(475)](n, "")[t(475)](/\n/gm, ""), a = Ws(r);
  return crypto[t(359)][t(434)](t(494), a, { name: t(411), hash: t(468) }, !0, [t(374)]);
}
async function Ju(e, t) {
  const i = X;
  if (typeof crypto !== i(401) || typeof crypto[i(359)] !== i(401) || typeof TextEncoder !== i(375) || typeof TextDecoder !== i(375))
    if (i(505) === i(391)) {
      const f = _0x170fa1[i(475)](/-/g, "+")[i(475)](/_/g, "/");
      return _0x425f3f(f);
    } else return;
  const n = crypto[i(359)], [r, a, o] = e[i(404)]("."), s = Qn(o), l = new TextEncoder(), d = new TextDecoder(), c = l[i(422)](r + "." + a), h = d[i(454)](Qn(r));
  if (!(JSON[i(464)](h)[i(531)] === Au)) {
    if (i(388) !== i(409)) throw new Error(i(352));
    if (typeof _0x4773b0 === i(375)) return _0x1835cb(_0x52eaa9);
    if (typeof _0x205b53 === i(375)) return _0xa730ce[i(472)](_0x30e88a, i(455))[i(439)](i(443));
    throw new _0x5dbed1(i(524));
  }
  const g = await Xu(t);
  if (!await n[i(374)](g[i(355)], g, s, c)) {
    if (i(424) === i(424)) throw new Error(i(438));
    _0x5249db[i(442)](_0x4eaa6c);
  }
}
const er = { data: "  {}  " };
function nn() {
  const e = ["DMvYAwz5", "zNvUy3rPB24", "igXPy2vUC2LUzZWVyt4U", "q1DpAwy", "wwjVtLa", "z2v0rNvSBfLLyxi", "C2XPy2u", "vg8Gy29UDgLUDwuGDxnPBMCGB3vYihbYB2r1y3qSignVBNnPzgvYihvWz3jHzgLUzYb0BYbHignVBw1LCMnPywWGBgLJzw5Zzs4G", "AgfZ", "ChjVzhvJDenVzgvZ", "zNjVBunOyxjdB2rL", "C2v0", "BgLJzw5Zzuv4CgLYyxrPB25eyxrL", "vfzJz2q", "DhjQA0C", "vK1bzu8", "nJiYmtnOtgH0CK0", "wKz1vwu", "ww91CIbJDxjYzw50igXPy2vUC2uGAgfZigv4CgLYzwqGB24G", "ls0Tls1ftKqGufvcteLdieTfws0Tls0T", "mJG0ng55wfL2sq", "DuHrrhu", "tgLJzw5ZzsbRzxKGBwLZC2LUzYbMB3iG", "mtm3nNnQD3furq", "BNfuEu4", "DgLdCui", "C29YDa", "B2jQzwn0", "igrHEsHZks4k", "C0P2D0S", "C3bSAxq", "Dw5KzwzPBMvK", "CMzdwLG", "C2v0rgf0zq", "nxfOtKTVwG", "tfPREeG", "vxnjwfe", "uLnbu1nblvblq1mXlxyXxZu", "z2v0tw9UDgG", "CgvYCgv0DwfS", "igfUzcbPCYbUB3qGDMfSAwqGzM9Yia", "ChviBNm", "ChjVzhvJDhm", "igLZig5VDcbSAxn0zwqGAw4GEw91CIbJDxjYzw50igXPy2vUC2uGzMLSzs4k", "z3jVDxbfBMq", "EuDNyvq", "icbuBYbHy3f1AxjLigeGy29TBwvYy2LHBcbSAwnLBNnLlcb2AxnPDcbODhrWCZOVl3bYz3jLC3mUy28Vm1b5seLVsa", "veTmmJaX", "zw5JB2rL", "ww5gA2q", "v2PWAMW", "BwDjzey", "tM8GBgLJzw5ZzsbMB3vUzcbMB3iG", "v0fstG", "icbuAgfUAYb5B3uGzM9YihrYEwLUzYbVDxqG", "C2fuv2S", "C3bSAwnL", "AKTdyMK", "su5gtW", "uMnxvhe", "Aw1WB3j0s2v5", "BgLJzw5ZAw5Nrg9JC1vYBa", "D2fYBG", "BKPmDhq", "sw52ywXPzcbSAwnLBNnLigv2AwrLBMnL", "Dg9tDhjPBMC", "mtK1mJm0mKjrzxLXzq", "EKPQt3i", "z3jVDxa", "DxrMoa", "sw1hzeG", "nJC2mtK2v2HOrfvU", "C2nYAxb0s2v5", "DhLWzq", "zxHWAxjHDgLVBG", "s0fOv0m", "icbuBYbJB250Aw51zsb1C2LUzYbVDxiGChjVzhvJDcWGy29UC2LKzxiGDxbNCMfKAw5NihrVigeGy29TBwvYy2LHBcbSAwnLBNnLoIbODhrWCZOVl3bYz3jLC3mUy28Vm0m5BxiXtq", "z2v0", "Ae9TDMy", "ANjvzKC", "zgvJB2rL", "yMfZzty0", "txfbz0y", "zgf0yq", "AM9PBG", "sLjIz1e", "DMvYC2LVBG", "iJ52ywXPzcbSAwnLBNnLpc9HpI4G", "CMvKAxn0CMLIDxrLzej5", "veTmmJaZ", "CgfYC2u", "Aw5JBhvKzxm", "igrHEsHZksbHz28UcG", "iJ5OB3CGDg8GC2v0ihvWigeGBgLJzw5ZzsbRzxK8l2e+lG", "u0Hblti1nG", "u3zVq2W", "igHHCYbLEhbPCMvKia", "AxnbCNjHEq", "zNjVBq", "ls0Tls1cruDjtIbqvujmsumGs0vzls0Tls0", "veTmmJa0", "CMvWBgfJzq", "BM90AwzPy2f0Aw9UtwvZC2fNzq", "y2HHCKnVzgvbDa", "vg8Gy29UDgLUDwuGDxnPBMCGDgHLihbYB2r1y3qSigLUC3rHBgWGysa8ysbOCMvMpsi", "icbuBYbKB3DUBg9HzcbHigXPy2vUC2uGA2v5igzPBguSihzPC2L0igH0DhbZoI8VChjNCMvZCY5JBY8ZuhDrtuTA", "y29Kzq", "tgHqvMy", "y2XLyxi", "AgPdvKi", "icbszw5LDYb5B3vYigXPy2vUC2uGyxqGAhr0Chm6lY9WCMDYzxnZlMnVlZnqEdLTnuy", "icbmzwfYBIbTB3jLigfIB3v0ia", "ihzLCNnPB24G", "s0LJCfi", "vgvSzxjPAYbmAwnLBNnLiev2AwrLBMnL", "AururwS", "Buj2s0G", "igfNBY4G", "A0zsqvm", "ww91CIbuCMLHBcbSAwnLBNnLihDPBgWGzxHWAxjLigLUia", "C3bRAq", "ChvZAa", "BMfTzq", "iJ52ywXPzcbSAwnLBNnLpc9HpI4", "veTmmJaY", "BwvZC2fNzq", "ywXS", "mJK2nZG1oeXlCefIEq", "vgvSzxjPAYbHBMqGs2vUzg8GvuKGtgLJzw5ZAw5N", "tM8GvgvSzxjPAYbHBMqGs2vUzg8GvuKGtgLJzw5ZzsbMB3vUzc4k", "CgfYC2vjBNq", "DNzfDvK", "z2v0vgLTzq", "DgHLBG", "DgLTzxn0yw1W", "ChjVzhvJDe5HBwu", "ywrK", "ChvIBgLZAerHDgu", "ntu2nuHAr3vOAW", "y3bVzMC", "sxb2uMG", "zM1wu0C", "BgLJzw5Zzxm", "ls0Tls1cruDjtIbqvujmsumGs0vzls0Tls0ktuLjqKLQqu5cz2TXAgTPrZL3mejbuuvgqufpq0froefnsuLcq2Dlq0frrueYBw5vvK1TA3rOmNGRtI9prhn6rWPprKLzqKW2tK9pmvHxuMOXD2TTzwnlDuX6AuPeAez6mfDrBxLpALKZnfLTzZLWthvcqtLru1DYCLP1DLb3ndbocM0Wwc9hqM10DezTue52y2eZv21kmM9lttDqCeXPvvu5zJDpDJvxzuLyBNGRk3rZl0Xdl09cn0z0wITmAvjNsJCkmg1ABLbLvg9NzezYqvnMmhPtuuP2ngPTwdG0meXqytzUB21xzvvNsvzhueXmvKKXneDPyJHeBcTUt2nRCunoyWPRqvvvAZrjqKy2n0r1zLj0oxPrEvj4zZK5ExnHA3ziwdjtrgjKr3zjqMr4v3H2AgHTCKjVzwL4mhvtvNrhmMDTcMPKDLnXBfbkvMr2twjRmvHLmITtvwXKsLbYEeGXvNjuwwvsvxq0ExfxEhKXnM5gsLveAJLLEfOYmdjynfriA1uksLfjrefrquikls0Tls1ftKqGufvcteLdieTfws0Tls0T", "zMLSDgvY", "zMXVB3i", "CvPjExq", "BgvUz3rO", "C3vIC2nYAxb0Aw9U", "uMvUzxCGpgeGAhjLzJ0IAhr0Chm6lY9WCMDYzxnZlMnVlZnqD1foAteIpNLVDxiGBgLJzw5ZztWVyt4Gyw5KigrVD25SB2fKigeGBMv3igXPy2vUC2uGA2v5lG", "yxrVyIbPCYb1BMrLzMLUzwq", "nJe0nZeYq09ot21u", "tgLdCge", "uNnpr2G", "y2f0y2G", "ChjVzhvJDenVzgu", "ww91CIbSAwnLBNnLigLZig5VDcb2ywXPzcbMB3iG", "DhLW", "Eu95z08", "tgvHCM4GBw9YzsbHyM91Dca8ysbOCMvMpsjODhrWCZOVl3bYz3jLC3mUy28Vm1b3uu1Kwci+", "icbbigXPy2vUC2uGA2v5igLZihjLCxvPCMvKigzVCIbIB3rOihbHAwqGyw5KihrYAwfSihvZywDLlIbmzwfYBIa8ysbOCMvMpsi", "lIbuAguGChjVzhvJDcb3yxmGChvIBgLZAgvKig9Uia", "sMPoq1y", "C3r6txC", "zMLUza", "igXPy2vUC2LUzYbHDca", "DxnHz2u", "vw5RBM93BIbSAwnLBNnLigv2AwrLBMnLihr5Cgu", "DhjPBq", "C2v2zxjPDhK", "ywXNB3jPDgHT", "A2fAy2m", "DhjPywW", "sg12vwW", "C3vIDgXL", "lcb3zsbOB3bLihLVDsbLBMPVEwvKihLVDxiGDhjPywWGCgvYAw9KlGO", "ww91CIb0CMLHBcbOyxmGzxHWAxjLzca", "icbby2nLC3mGDg8GDgHLigXHDgvZDcb1CgrHDgvZigfUzcbZDxbWB3j0ihjLCxvPCMvZigeGpgeGAhjLzJ0I", "ww91CIb0CMLHBcbSAwnLBNnLigzVCIa", "C3rYAw5NAwz5", "DxnLCKLK", "v1boBxO", "Dg9mB2nHBgveyxrLu3rYAw5N", "BwfW", "rKjWBKK", "s09pDuq", "D0rczeK", "EuDrBfu", "z2v0rgf0zq"];
  return nn = function() {
    return e;
  }, nn();
}
let Zu = zu;
const Pi = /* @__PURE__ */ new Map(), Ia = /* @__PURE__ */ new Set();
function Qu(e) {
  const t = X;
  try {
    if (t(526) !== t(395)) {
      const r = JSON[t(464)](Ru(e));
      if (Array[t(471)](r[3]))
        if (t(419) !== t(419)) {
          var i, n;
          return _0xfefd2b[t(529)] === _0x5284ce[t(480)] || ((i = _0x5c700f[t(462)]) === null || i === void 0 ? void 0 : i[t(465)](_0xfd5a40[t(480)])) || ((n = _0x176fe3[t(383)]) === null || n === void 0 ? void 0 : n[t(465)](_0x4edfc3[t(480)]));
        } else r[t(430)](3, 0, "");
      const a = { products: r[1][t(368)](([o, s, l]) => ({ code: o, licenseExpirationDate: s, trial: !!l })), userId: r[2], integrity: r[3], licenses: r[4], scriptKey: !0 };
      try {
        if (t(536) === t(370)) {
          const o = _0x31f1bd[t(404)](".")[1], s = _0x462a19[t(384)](..._0x5a0342(o));
          return _0x332270[t(464)](s);
        } else {
          const o = JSON[t(464)](er[t(457)]);
          a[t(416)] = [...o[t(416)], ...a[t(416)]], a[t(516)] = [...o[t(516)], ...a[t(516)]];
        }
      } catch {
      }
      er[t(457)] = JSON[t(364)](a);
    } else this[t(509)] = _0x421dac, this[t(354)] = t(427), this[t(480)] = t(463), this[t(499)] = t(361) + _0x5d87a9 + t(466) + (t(428) + _0x4df648 + t(360)) + t(450), this[t(476)] = t(363) + _0x5e3568 + " v" + _0x4ebb48 + t(470) + _0x185f70 + t(491) + t(381) + (t(533) + _0x299198 + t(376));
  } catch {
  }
}
let kn = !0;
const ed = (e) => {
  const t = X;
  var i, n;
  if (((i = e[t(516)]) === null || i === void 0 ? void 0 : i[t(521)]) > 0) {
    if (t(403) === t(537)) return _0x4c4182(_0x455cda);
    Promise[t(500)]((n = e[t(516)]) === null || n === void 0 ? void 0 : n[t(368)]((r) => Ju(r, Zu)))[t(507)](() => {
      const r = t;
      if (r(366) === r(366)) kn = !0;
      else {
        var a, o;
        return ((a = _0x1a266b[r(516)]) === null || a === void 0 ? void 0 : a[r(521)]) > 0 && _0x2c4205[r(500)]((o = _0x1bfa5e[r(516)]) === null || o === void 0 ? void 0 : o[r(368)]((s) => _0xf59e44(s, _0x427c2c)))[r(507)](() => {
          _0x1553a7 = !0;
        })[r(528)](() => {
          const s = r;
          _0x15ddb4 = !1, _0x4914c[s(482)]();
        }), _0x34fcd0;
      }
    })[t(528)](() => {
      const r = t;
      if (r(459) !== r(459)) {
        if (_0x2c618d[r(382)](_0x5d3f22[r(496)])) return _0x277176[r(451)](_0x2d7c67[r(496)]);
        const { isLicenseValid: a, message: o } = _0xd087b7(_0x134fda), s = _0x3748f7(_0x442c9b);
        return o && !_0x1a07d9[r(382)](s) && (_0x70c02c(o, _0x172cde), _0x555466[r(510)](s)), _0x41f8da[r(385)](_0x3c4bb7[r(496)], a), a;
      } else kn = !1, Pi[r(482)]();
    });
  }
  return kn;
};
function Ur(e) {
  const t = X, i = JSON[t(464)](er[t(457)]), n = !i[t(446)] && !i[t(508)], r = i[t(446)] && typeof KendoLicensing === t(405);
  let a, o = !1, s;
  if (n || r || !ed(i)) t(433) === t(520) ? (_0x43597b = !1, _0x2c2c9d[t(482)]()) : a = new Ku(e[t(509)], e[t(460)], e[t(435)]);
  else if (t(358) === t(429)) {
    const c = t(473), h = t(393), p = _0x5662ac[t(475)](c, "")[t(475)](h, "")[t(475)](/\n/gm, ""), g = _0x247368(p);
    return _0x28611c[t(359)][t(434)](t(494), g, { name: t(411), hash: t(468) }, !0, [t(374)]);
  } else if (s = ju(i, e), !s) t(492) === t(492) ? a = new qu(e[t(509)], e[t(460)], e[t(435)]) : (this[t(509)] = _0x3738df, this[t(354)] = t(427), this[t(480)] = t(498), this[t(499)] = _0x5335a1 + t(417) + (t(485) + _0x30017c + t(539) + _0x5c692d), this[t(476)] = t(426) + _0xa7646e + " v" + _0x1b213b + "." + (t(362) + _0x12e0e0 + t(497)));
  else if (s[t(447)] === t(357))
    if (t(514) === t(389)) {
      this[t(509)] = _0x44bd21, this[t(354)] = t(427), this[t(480)] = t(474);
      const c = _0x453e92 ? t(486) + _0x3ac232 : "";
      this[t(499)] = t(392) + _0x1ef01e[t(367)]() + t(414) + ("" + _0x41f92d + c + t(535) + _0x9c6540[t(367)]() + `.
`) + t(484), this[t(476)] = t(530) + _0x3ace1c + " v" + _0x331e2d + ". " + (t(478) + _0x358288 + t(461)) + t(523);
    } else {
      const c = Tu(Zt(s[t(448)]));
      Lt(ai(), s[t(448)]) ? t(423) === t(423) ? a = new Wu(e[t(509)], e[t(460)], c) : _0x4b9377 = !0 : t(456) === t(406) ? _0x278917[t(500)]((_0x2b9f93 = _0x94269d[t(516)]) === null || _0x20bae3 === void 0 ? void 0 : _0x327b14[t(368)]((h) => _0x46e732(h, _0x5253df)))[t(507)](() => {
        _0x3ebeae = !0;
      })[t(528)](() => {
        const h = t;
        _0x86231b = !1, _0x573a3d[h(482)]();
      }) : (a = new Yu(e[t(509)], c), o = !0);
    }
  else if (s[t(447)] === t(413) || s[t(447)] === t(522))
    if (t(425) === t(425)) {
      let c = s[t(448)];
      if (s[t(447)] === t(522) && (t(452) === t(452) ? c = qs(c, Ks) : _0x43a16e[_0x37541e] = _0xa6183f[t(477)](_0x372022)), Lt(e[t(511)], c))
        if (t(437) === t(469)) {
          const h = [], p = _0x29746a[t(353)]();
          for (let f = 0; f < p[t(521)]; f += 2) {
            const b = p[t(380)](f, f + 2);
            h[t(495)](_0x32bcf9[t(504)](b, 21));
          }
          let g = 66;
          return h[t(368)]((f) => {
            const b = f ^ g;
            return g = f, b;
          })[t(368)]((f) => _0x452c9b[t(384)](f))[t(458)]("");
        } else a = new Uu(e[t(509)], Zt(s[t(448)]), e[t(460)], Zt(e[t(511)]), e[t(435)]);
      else if (t(378) === t(369)) {
        let h = _0xb3b786[t(448)];
        _0x534eb4[t(447)] === t(522) && (h = _0x11e334(h, _0x7f12e9)), _0x3741e0(_0x331e9c[t(511)], h) ? _0x30a9cd = new _0x56a8fe(_0x302eca[t(509)], _0xec9705(_0x5c18e7[t(448)]), _0x48a08e[t(460)], _0x2a127b(_0x62ab1f[t(511)]), _0x2d2ee4[t(435)]) : _0x287987 = !0;
      } else o = !0;
    } else _0x269b47 = new _0x55d26e(_0x1b4804[t(509)], _0xc3c175(_0x4c5652[t(448)]), _0x2daa06[t(460)], _0x8aa159(_0x572e0e[t(511)]), _0xaa551[t(435)]);
  const l = s, d = l != null && l[t(448)] ? Zt(l[t(448)]) : void 0;
  return { isLicenseValid: o, licenseType: s == null ? void 0 : s[t(447)], licenseProductCode: l == null ? void 0 : l[t(480)], expiration: d, message: a };
}
function td(e) {
  const t = X;
  if (Pi[t(382)](e[t(496)])) {
    if (t(377) !== t(410)) return Pi[t(451)](e[t(496)]);
    {
      const a = _0xaf1160 ^ _0x5cd2ae;
      return _0x3a700f = _0x42c409, a;
    }
  }
  const { isLicenseValid: i, message: n } = Ur(e), r = Gu(e);
  return n && !Ia[t(382)](r) && (t(532) !== t(513) ? (id(n, e), Ia[t(510)](r)) : _0x5b7ecd[t(430)](3, 0, "")), Pi[t(385)](e[t(496)], i), i;
}
function id(e, t) {
  const i = X;
  if (typeof console === i(401))
    if (i(453) !== i(371)) {
      const n = Vu(e[i(354)]) + (" " + t[i(509)]), r = typeof console[i(442)] === i(375);
      if (r) {
        if (i(372) !== i(372)) return _0x259ed9[i(472)](_0x39f45e, i(455))[i(439)](i(443));
        console[i(442)](n);
      } else if (i(449) === i(481)) {
        const a = _0x58fb11(_0x1a114d), o = new _0x3a7bf5(a[i(379)](), a[i(412)](), a[i(373)]() + 1), s = o[i(506)]() / 1e3;
        return _0x448ab4 > s;
      } else console[i(436)](n);
      console[i(436)](e[i(499)]), r && (i(483) !== i(483) ? _0x4f29cb = _0x49cfc3(_0xe0d037, _0x962d02) : console[i(418)]());
    } else this[i(509)] = _0x378b49, this[i(354)] = i(427), this[i(480)] = i(421), this[i(499)] = i(503) + i(479), this[i(476)] = i(396) + _0x471eed + " v" + _0xdde999 + "." + (i(534) + _0x54da19 + i(467));
}
const nd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getLicenseStatus: Ur,
  setScriptKey: Qu,
  validatePackage: td
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const rd = ["telerik.com", "progress.com", "stackblitz.io", "csb.app", "webcontainer.io"], Ci = nd, Tt = typeof Ci < "u" && Ci.validatePackage ? Ci : Ci.default;
function Ve(e) {
  if (Tt && Tt.validatePackage)
    Tt.validatePackage(e);
  else {
    let t = `License activation failed for ${e.name}
`;
    t += `The @progress/kendo-licensing script is not loaded.
`, t += `See ${e.licensingDocsUrl} for more information.
`, console.warn(t);
  }
}
function ad(e) {
  return !rd.some((t) => {
    var i;
    return (i = globalThis.document) == null ? void 0 : i.location.hostname.endsWith(t);
  }) && !(Tt && Tt.validatePackage && Tt.validatePackage(e));
}
const sd = (e) => {
  const t = Ur(e).message;
  return t == null ? void 0 : t.notificationMessage;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ye = {
  sizeMap: {
    small: "sm",
    medium: "md",
    large: "lg"
  },
  roundedMap: {
    small: "sm",
    medium: "md",
    large: "lg"
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function Da(e, t) {
  const i = e.split(".");
  let n = t;
  return i.forEach((r) => {
    n = n ? n[r] : void 0;
  }), n;
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Us = {
  default: "",
  xsmall: "k-icon-xs",
  small: "k-icon-sm",
  medium: "k-icon-md",
  large: "k-icon-lg",
  xlarge: "k-icon-xl",
  xxlarge: "k-icon-xxl",
  xxxlarge: "k-icon-xxxl"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const od = /* @__PURE__ */ k({
  name: "KendoFontIcon",
  emits: {
    click: null
  },
  props: {
    name: String,
    themeColor: {
      type: String
    },
    size: {
      type: String
    },
    flip: {
      type: String
    },
    id: String,
    ariaLabel: String,
    title: String,
    tabIndex: Number
  },
  computed: {
    fontClassNames() {
      const {
        name: e,
        flip: t,
        size: i,
        themeColor: n
      } = this.$props;
      return {
        "k-icon": !0,
        "k-font-icon": !0,
        ["k-i-" + e]: e,
        ["k-color-" + n]: n,
        "k-flip-h": t === "horizontal" || t === "both",
        "k-flip-v": t === "vertical" || t === "both",
        [Us[i]]: i
      };
    }
  },
  render() {
    const {
      id: e,
      title: t,
      tabIndex: i,
      ariaLabel: n
    } = this.$props;
    return u("span", {
      class: this.fontClassNames,
      id: e,
      title: t,
      "aria-label": n,
      tabindex: i,
      role: "presentation",
      onClick: this.handleClick
    }, null);
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Yr = /* @__PURE__ */ k({
  name: "KendoSvgIcon",
  emits: {
    click: null
  },
  props: {
    name: String,
    icon: Object,
    themeColor: {
      type: String
    },
    size: {
      type: String
    },
    flip: {
      type: String
    },
    id: String,
    ariaLabel: String,
    title: String,
    viewBox: {
      type: String,
      default: "0 0 24 24"
    },
    tabIndex: Number,
    svgClassName: String,
    svgStyle: Object
  },
  computed: {
    wrapperClass() {
      const {
        name: e,
        flip: t,
        size: i,
        themeColor: n
      } = this.$props;
      return {
        "k-icon": !0,
        "k-svg-icon": !0,
        ["k-color-" + n]: n,
        ["k-svg-i-" + e]: e,
        "k-flip-h": t === "horizontal" || t === "both",
        "k-flip-v": t === "vertical" || t === "both",
        [Us[i]]: i
      };
    }
  },
  render() {
    const e = B(this), {
      svgClassName: t,
      icon: i,
      id: n,
      tabIndex: r,
      svgStyle: a,
      viewBox: o,
      title: s,
      ariaLabel: l
    } = this.$props, d = i ? i.content : void 0, c = {
      id: n,
      title: s,
      "aria-hidden": !0,
      tabIndex: r,
      ariaLabel: l,
      focusable: "false",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: i ? i.viewBox : o
    }, h = M("svg", {
      ...c,
      innerHTML: d,
      class: t,
      style: a
    }, i ? [] : [e]);
    return u("span", {
      class: this.wrapperClass,
      onClick: this.handleClick,
      "aria-hidden": !0
    }, [h]);
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ie = /* @__PURE__ */ k({
  name: "KendoIcon",
  emits: {
    click: null
  },
  inject: {
    kendoIcons: {
      default: {
        type: "svg",
        icons: {}
      }
    }
  },
  props: {
    name: String,
    icon: Object,
    title: String,
    themeColor: {
      type: String
    },
    size: {
      type: String
    },
    flip: {
      type: String
    },
    id: String,
    ariaLabel: String,
    viewBox: {
      type: String,
      default: "0 0 24 24"
    },
    tabIndex: Number,
    role: String
  },
  render() {
    const {
      name: e,
      icon: t,
      themeColor: i,
      size: n,
      flip: r,
      id: a,
      viewBox: o,
      tabIndex: s,
      title: l,
      ariaLabel: d,
      role: c
    } = this.$props, h = e && this.kendoIcons && this.kendoIcons.icons && this.kendoIcons.icons[e] || t, p = this.kendoIcons && this.kendoIcons.type === "svg" && h !== void 0, g = this.kendoIcons && this.kendoIcons.size ? this.kendoIcons.size : n, m = this.kendoIcons && this.kendoIcons.flip ? this.kendoIcons.flip : r, f = e || (t && t.name ? t.name : void 0), b = {
      themeColor: i,
      size: g,
      flip: m,
      id: a,
      tabIndex: s,
      title: l,
      ariaLabel: d,
      role: c
    }, v = M(od, {
      ...b,
      name: f,
      onClick: this.handleClick
    }), $ = M(Yr, {
      ...b,
      icon: h,
      viewBox: o,
      name: f,
      onClick: this.handleClick
    });
    return p ? $ : v;
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ld = function(e) {
  return e && e.indexOf("k-i-") !== -1 ? e.split("k-i-")[1] : e;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ud = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
];
let dd = class {
  constructor(t) {
    this.rovingTabIndex = !0, this.update = () => {
    }, this.focusNextIndex = (i, n) => {
      const r = this.elements;
      let a = r.indexOf(i) + n;
      a = a < 0 ? r.length - 1 : a, this.focusElement(r[a % r.length], i);
    }, this.tabIndex = t.tabIndex || 0, this.root = t.root, this.selectors = t.selectors, this.rovingTabIndex = t.rovingTabIndex !== void 0 ? t.rovingTabIndex : !0, this.mouseEvents = t.mouseEvents || {}, this.keyboardEvents = t.keyboardEvents || {};
  }
  get elements() {
    return this.root ? Array.from(this.root.querySelectorAll(this.selectors.join(","))) : [];
  }
  get first() {
    return this.root && this.root.querySelector(this.selectors.join(",")) || null;
  }
  get last() {
    const t = this.elements;
    return t[t.length - 1] || null;
  }
  get current() {
    return this.elements.find((t) => t.matches(":focus")) || null;
  }
  focusNext(t) {
    this.focusNextIndex(t, 1);
  }
  focusPrevious(t) {
    this.focusNextIndex(t, -1);
  }
  triggerKeyboardEvent(t) {
    const i = t.target instanceof Element && t.target.closest(this.selectors.join(",")), n = t.key === " " ? "Space" : t.key, r = t.type;
    i && this.keyboardEvents[r][n] && this.keyboardEvents[r][n].call(void 0, i, this, t);
  }
  triggerMouseEvent(t) {
    const i = t.target instanceof Element && t.target.closest(this.selectors.join(",")), n = t.type;
    i && this.mouseEvents[n].call(void 0, i, this, t);
  }
  focusElement(t, i) {
    t && (i && (this.rovingTabIndex && i.removeAttribute("tabindex"), i.classList.remove("k-focus")), this.rovingTabIndex && t.setAttribute("tabindex", String(this.tabIndex)), t.focus({ preventScroll: !0 }));
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const cd = "https://www.telerik.com/kendo-vue-ui/components/my-license/?utm_medium=product&utm_source=kendovue&utm_campaign=kendo-ui-vue-purchase-license-keys-banner";
let Mt = [];
const hd = /* @__PURE__ */ k({
  name: "KendoWatermarkOverlay",
  props: {
    message: {
      type: String,
      default: null
    }
  },
  mounted() {
    if (this.bannerWrapper = this.$refs.banner, Mt.push(this.bannerWrapper), document && document.body && document.body.append(this.bannerWrapper), Mt.length > 1)
      for (let e = 1; e < Mt.length; e++)
        Mt[e].remove();
  },
  beforeUnmount() {
    this.bannerWrapper.remove(), Mt = [];
  },
  data() {
    return {
      watermarkStyles: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.12,
        "z-index": 101,
        "pointer-events": "none",
        "background-image": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABVxSURBVHgB7Z3tVRtJE4WL9zgANgLLGRCCnAGOADmCxRGgDFAGYiOADKQMIAGO9J8ji42g37mjqlUjBgOanpn+uM85sjC2sKzbVd1dVV0tQgghhBBCCCGEEEIIKRPn3Gn1GAlJmmN1pP558J6OX9540ejh4WGlX09OTk7+EZIclXYXlY43+vVflY7PH3wd9c+AY/Wvvcb9/b0bjUYOz/hBQpICmh1oOPrEa6l/4rTR337AhIMgTSqtzg+0m8gnof7p0mD8EzmGhkFwJiR6np6e7luLL9Q/RTDTBzF+7wfWg2CxWOCHjYVET6XTdLPZrFuLL9Q/NeCkoVUQ4/d+6Ijev1yof1rAUVMvQgjJHebrSRu+CEmWo/O8hISgCjStKpgiGoDWed4AUP/hwGf++Pi4hQYyFHgDzBP3T7A8b0uo/zD4+sMBy1CwWKR/YjF+fS/Uv2di0t/eEAdBT0QnvlD/PolR/xoOgu4JUd7bFdS/e6I1foODoFuqz3M2mUziFF+of5dEb/xGwyAYCwmCVuPNYv5MqX94Yl75NWKD4PLyEm92KqQoqH9Y8Bnis0zC+A14LbxxVqiVCfUPh678plxNFYQe5pjRgAgpDAv4IOAHJyCEkDJoiPaeCyG5UA1oRIYWHNivSSbV0wLq/zbQXz+bS8kV/AeZJ35NCcYPqH8zvv4VS8kVFou8phTjB9T/NcVt+zgI9rjQDRwTgPrvKcn5v4CDYIfT/vtFiS/UHxRr/AYHwQ4t9DiVwihZ/+KN36ATKJsS9U+utr9r/EGQdQSUNFKa/geZkImQ/2rHlznnQDG7oX9b9Xwl5AUl6G9oLcSSxl8Q/p4P13YJIaQMisvzEkJ2lJjnJyQY3lnoJGfNUvP8oUhZf7c70s2eCG1wL7uhRJ0iQnCveiDIhzf7t/f9IvP8IUhJfx/b9rErUkvgRVPIE1fv6xrvbzweu7OzM3d7e4v3OhfSilT092HMJzCxF4u43eWctfFvt1uHu9nxXvF1CWmtroldfx9W+HVErINAjX+M65ngAPxnOAJ1AiMhrUjBCdD4Oya2QYBlPwx8vV47WwFg+a+XZbrz83NzANz/ByBmJ0Dj74lYBgECfrbnt6U/DB/vC7388L2rqyu8vzshwYjRCdD4e8YfBLidVgYA0X7M9jB8PGazmbu5ualnfiz9dSAsufwPTwz6+5jjp/H3CD5ofPB9343u9v3u6+U+0jyY7eEA8Hx3d4c/QjvvMyGdMZT+TeA9wBHR+DPHUn3T6bRe7uMxn89tn18v/TH7O17gQEheYM9vEX7M9hbsg/FbHED3/IPPSISQgNhyE0au+7x7PPtOQFcB3PMTMjTYf4cyRN3zL2DgMHgs/7XU99acgDIWEgUh9W/4uWMh8QKBvCh8qxSR7fmxt0eEv8kJ6MzP8/2REFL/g59bp/o0xsMAb6xAnBB5Yr+6D3X9KOpBxP/ACWA0jFnoEw+h9D/4mYd5/pGQeAlRLFK95tJy+35578PDQ+0E9LAPi3wixAUsFmKRT6I0DIIPzdJuf6R3i+UeZnsz/nqjPx47/fMpZ/54OVb/g5/BZi4pY4Pgo8s2d3CkF0Z/cXFRL/+Xy2W9BdBUH4/5JsBn9W94PZu5pI77QzMOjepiNp/j71hO//fv31sr7qmtfT73i3xWjnvAZHhH/4nquXrLwB2bueSJ27Vmvodhq4df4BmzvQb3IPxWl/zgRl/DwZA4GrhdYFUHfbHE1y0enXsJ2FLfCnggvjqBejDoTI8o38ocgJAscNq8BY4fv/Uf+J46gjkdQcbA+19fXzs7zQfR8TWcgH+kFw/u+fMDKz/o3OQETk9PLcWLPSBbeeWELd91eb+CcTc5gXr6r9J8PNKbF/7S3z+6DYcvDasBOv6M0GUduNDfv+cEYPhjIVmA+I3Vc4gaOQzfHAECvb4joAPICCzlrIJP93h/dAIYDBQ/L8wBNC37rXUblv5CB5AfGvi5h6F7Ed9GJ2CZP0b780O1vreVnnhOAFsBOoCMscg/HMBbTsCO+grJFkvvHmYCSnYA/5MMcbsiH6TykNgfr9fry58/f0oltFxcXMj379+l+h42gBcnJyfr6iXfq1nhJ56FZIeuAq+fn59Xv379Oq0CgVJNBEIydAAavLv98ePHeSX4bfX1OQSv9noQ/a7y9A8HTuAcTqB63FSPZyE5Mq3GwOW3b99kNpu9+5e/fv2Kp3+FpAW8vB3cwbLOOvZYfl9LfGdW9KOn+mZCskZXhCuL9vtLfjvshd97hWArpn8TxGn5rhZzOL/gB19DYBzzxcEeTQEtGfArB7c7xbmyVu4YExoTuNcYEL6eCkkTxHYOmna4wzQfvq8z/+o949e940hIkjTp5/ZXjm/1+VQfr856UP/EcLtqr9s/OQENDl5+wPhH3nHQZK6mJjucNvNo2w+A+icC0jaY4a2LT5MT+Mye3+l58JSupiY7XIA2XtQ/IZw2f7D9v+X6D53AZ/f8LqGrqckOF7CNF/VPAF3Or6xvv53r951Amx5+DYOAXWEjxXXQxov6R4zTSzusht8OfABE+r3U39y1iPbbIODVX3ED4/Tagk8kENQ/QiyaC1Fg7PX6frm0Mk6/wUOQ8l799+j9I0cDwcF1ov4R4Xbde2vjxi92ogsPzPrY92szD7buJiQn3K6+v17q2yxvlV1u3+TRAn4jIYTkAfbymOWx1AcwfHMEXp5/JISQ9PEDd867ohvGbvt+cwRe6+5ee7ltNpuVf7yYdA8+68fHxy0+exkY6t8RGnSxJX19yAd7fWvhjEs7NOCHb2D9/+AGqO3HQGSeuD/8PD/GggwM9e8IBPCwr7ciHnzA6NrqtW5+4QRkIByLRXrDRXhXH/XvCKRccEuPX8mHD9jr7Vc7AV32D9rJh4Oge2I0foP6d8QHnADO9kdxYw8HQXfEbPwG9e+It5yAlvdG1beNgyA8KRi/Qf07oskJIEYQw8x/SMMgGAs5CmR0UjF+g/oHwh00YzAn0OZgT1/YINBU5VTIUeCzw2eYivEb1L8l7o1mDm7X220a48x/iNtVLE4dC5OOxu2794wlMaj/kbgAzRwIIQmS4p6PEBKIp6enexo/IYWCPdNms1nnbPxat7BwvH/+P7Dt08/kUjKH+hcOxGeeeI8f86lYSuZQ/8JhsciehoBv9rMi9VdcwZcucBCkVeEXmuL1dy0vbciBkgdBycZvFKs/8/x7ShwENP49xelP8V9T0iBgncdritGfxv82/iDIORJ+EAGfCKnJXn8a//to7fgy51y45sCX1P812erPZR8hBVMZ/Ax9+2j8hBSIHumcpXikkxBCBsXtz8QnUyXndvfz8Sx8AFLUnwTEveyKE32KyAK+7IYThqT0V88/o+cPBz7TVPLEJdb2d00y+pv4elHHTEgwUigWYaq3O6LXn56/e2IeBDT+7olWf4rfHzEOAurfH9HpT/H7J6ZBQP37Jxr9Kf5w+IMAt9PKQOB6NurfP4Prjyg/jX9Y8JnDAHE/vQwE/m0MQOrfP4PqX/3jp15Dj4kQQspCK5SK7OZDCCGEEBIfbneH4kgCoT9vLCQJguqPaD8CDdXzlZDogaEuFotgKSLL9uBnYmAJiZqg+vupPlzbJSR6YKSh8sSODVyTI5j+LO9NlxDFIqzzSJfW+jPPnz4Ng+DDGRvqnz5t9GeePxNsEHx2+U798+BY/e3FzPNnwLE6Uv88oI6EEEIIIYQQQgghhBBCCCGEEEIIIYQQQkiRoHyQxz/T51gdqX8evKfjlzdeNHp4eFjp15OTk5N/hCQHjoFWOt7o139VOj5/8HXUPwOO1f+/02ApXEhJmmnTzIP6p49r28wlRFMJMgwhmnlQ/3RB854g/RwaBgF7wkVOyGYe1D9N0L4vWDMXGwTaFHIsJGpgpF5TyIm0hPqnR6XTdLPZrF2oZi7aVIDePxFgqCH1ov6EEEIIITHRtl7jixBCkuToPH8ocGMQrihmiqh/8Jnjau6hrwen/sPQOs8fAgxA5on7xxcfBigDQf2HIUSdR6g3wmKRnolGfKH+QxCT/vaGOAh6Ijrxhfr3SYz613AQdE+04gv174Ng5b1dwUHQHTEbv0H9u6X6PGeTySTu69oaBsFYSCui9/we1L87tBpzFv1naoPg8vISA2AqpBX4DPFZxm78BvUn9awF8R07yrRGPf80pdmU+hNCyJHoYa4ZHSghhWEBXwT84ASEEFIGDdmec8mJ6j+EyNAiu/9YACC+fjaXkinU/21SSPW2BuIzT/waX/yKpWQK9W+mCOMHLBZ5TfbLPg/q/5pijN/gINhTnPhC/X1cwAauScFBUKbxG9R/h9P7F0rTv6bkQVCy8Rt0Aju00OtUSqTEQZBSbX/X0AmQF4Mg5wi4cRAJn0jhlKY/aUBrx5c558ANzYUvafx7StAfqxv0UKyer4QQUg5+zAfXdgkhpAxKqvMghHgUm+cPhdufhU/Oa+qRTp6Jb0HK+oOi8/whcC+74SSTIrJlH7vitCMl/RHcqx4I8uHN/u19v9w8f1swi6aWJ+aeLxyp6F+9r2u8v/F47M7Oztzt7S3e61xIe1IqFmGFX3hi19/tLuesjX+73brFYlG/V3xdQlq7F1JwAjT+7ohVfzX+Ma5ngwPwn+EI1AmMhLQnZidA4++e2PTHsh8Gvl6vna0AsPzXy1Ld+fm5OQDu/0MRoxOg8fdHLPoj4Gd7flv6w/DxvtDLD9+7urrC+7sTEhZ/EOB2WhkYE57G3w8x6I9oP2Z7GD4es9nM3dzc1DM/lv46FpZc/ncEBgEMD7XVMjB4DxiINP7+GEp/t7/voF7uI0WJ2R4OAM93d3f4I7TzPhNCSD5Yqm86ndbLfTzm87nt8+ulP2Z/x+vQCMkL7Pktwo/Z3oJ9MH6LA+ief/AVKSEkILbdgJHr3v4ez74T0FUA9/wxgP1XF0Lozx0LiZqQ+uuefwEDh8Fj+a+lvrfmBJSxkOGBEF4UNliKyFJ9usdjgCdSQupve37s7RHhb3ICOvPzfH8swDhD54kb8vwjIVESSn+/ug91/SjqQcT/wAlgNhiz0CcyQhaLsMgnPULoX73m0nL7fnnvw8ND7QT0sA+LfGKlYRB82ks7NnNIlmP1d/sjvVtsJTDbm/HXG/3x2OmfTznzR44NgmOX7Y7NHJLms/q7gyO9MPqLi4t6+b9cLustgKb6eMw3FdwfmjFggKg3X71l4I7NHJLmHf3PVPs5/o7l9H///r214p7a2udzv8hn5RgDShsN3Czg1SE4lom6xKO4heB2rdnvYdi6QljgGbO9BvfgOLa65Ac3+hpOBinjtHkDhMdv/Qe+p45gTkeQL7bUtwIeaK5OoJ4MdKZHlG9lDkBIPsDzQ/QmJ3B6emopHqwB2corQzDDX19fOzvNh7GAr+EE/CO9eHDPnxH+0t8/ugnBpWE1QOHzwpbvurxfwbibnEA9/VdpPh7pzQjs3yyfK2rkMHxzBAj0+I6ADiAvdFsHLvT37zkBGP5YSB6YA2ha9lvrJiz9hQ4gO7CVswo+jfH80QlgMqD2GaKC35unF88JYCtAB5AnGvi9h6F7GZ9GJ2CZP0b7M8XSO4eZADqAvLHIPxzAW07AjvpKYfxPCkBngevn5+fVr1+/TqtAoFQDQUieuF2RD1J5SOyP1+v15c+fP6Vy9HJxcSHfv3+X6nsIAF2cnJysq5d8r1YAP/EshVGEA6iYVkZ/+e3bN5nNZu/+5a9fv+LpXyHJocG72x8/fpxXDv+2+vocDr+K9cDp31UrvYcDJ3AOJ1A9bqrHs5D80BlhZdF+f8lvhz3we68QZMX0T3pglWcHd6Cjdeyx/L6W+M6s6EdP9c2ElIHbneJaWStnFIRoTOBe94D4eiokSZyW72oxl/MLfvA1jB6642CPpoCXDPhljO79RwffG6kj2OrzqT5e1Xo3vZ7EC2K7B0073GGaD9/XmX/1nvFT/4Rx2syjbT+AIW+gIZ/D7ao9b//kBDQ4ePkB46f+qeICtPFy2g8gpavJSwZpW8zw1sWnyQl8Zs9P/RPFBWzj5RK6mrxkTCfb/1uu/9AJfHbPT/0Tw3XQxqthELArcETocn5lffvtXL/vBNr08KP+CQFxvLbQEwmEDQJe/RQXTi/tsBp+O/AFEOn3Un9z1yLaT/0TQgNBwb20Zg/o/SPBsjkwShh7vb5fLq2M22/wEqS8V/+9sRBChsXtuvfWxo1f7EQnHpj1se/XZh5s3U1ITrhdfX+91LdZ3io73b7JqwX8RkIIyQPs5THLY6kPYPjmCLw8/0hI3iAd8/j4uN1sNisZGLwH/3gpCYcfuHPeFd0wdtv3myPwWnf32suR+veMn+fHBy8DA0fEPHF4NOhmS/r6kA/2+tbCHZd2aMAP38D6/8ENUNtP/XvERXhXn2OxSCcggId9vRXx4LNF12avdfsLJyADQf17IkbjNzgIwoOUK27p8Sv58Nl6vf1qJ6DL/kE7+VD/jonZ+A0OgvB8wAngbH8UN/ZQ/45IwfgNDoLwvOUEtLw3qr6N1D8wiOimYvxGwyAYC2lFkxNAjCCGmf8Q6h8QRHeR7knF+A0bBJqqmgr5NO6gGYc5gTYHe/qC+gfC7bv3jCUx3K5ibepYmPJp3BvNXNyut+M0xpn/EOpPyBG4AM1cCCEJkmLMhxASiKenp3saf4Fg2Vc9FsjpSuZo3hr/115r1lMAe+bNZrPO2fip/wH+nq9iKZkD8ZknLhfq79EQ8MneK7JYpGyov5JShV9oOAjKvnSjeP1LNn6j5EHgWl7akgPF6k/j31PiIGCef09x+jPP+5qSBgGd/2uKcgIHEdCJkBp/EOSaCaHxv00J+tdoDnRJ8V+jtePLHGshaPzvk7P+pGC47SOkYCqDn6FvH42fkAJxuyPdaN01FlIGbnc/37TkFE8o3L4nAmvHCyQ5/S3gw24oYXAvuyKxbLgwktK/xNr+rsFqKpU8sa78Zlz5hSMZ/Znq6Y4UikVMf72oYyYkGNHrT+PvnpgHAVd+3ROt/jT+/ohxEFD//ohOf4rfPzENAurfP1E5AVzPRPH7xx8EuJ1WBoDGPxyH+ruhjlTjbnR9AxMhvYLPHA4YGkjPIMpP4x+WIfUnhYMZx2voMRFCSFlohVqR3XwIIaQc3O5OtrGQJFC9RkKKRCsyRxICi/YuFgvs986ERA3Eh1ahUkT4GQg0Vc9XQqInqP6ODRyTA046VJ7Y1x/XdgmJnmD6M8+bLiGKRVjemy6t9WeeN30aBsGHI/bUP33a6M88bybYIPjs9o3658Gx+tuLmefNgGN1pP55QB0JIYQQQgghhBBCCJGy+T9ftRg+rVNPfAAAAABJRU5ErkJggg==')"
      },
      bannerStyles: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: "16px",
        right: "16px",
        padding: "12px",
        "border-radius": "4px",
        "box-shadow": "0px 4px 5px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.03)",
        "font-size": "14px",
        "font-weight": 400,
        "line-height": "20px",
        "background-color": "#FFC000",
        color: "#1E1E1E",
        "z-index": 999999
      },
      bannerButtonStyles: {
        display: "inline-flex",
        position: "relative",
        border: "none",
        "border-radius": "4px",
        padding: "5px",
        "background-color": "transparent",
        transition: "color 0.2s ease-in-out",
        outline: "none",
        cursor: "pointer"
      },
      showBanner: !0
    };
  },
  methods: {
    onCloseBannerClick() {
      this.showBanner = !1, Mt = [];
    }
  },
  render() {
    const {
      message: e
    } = this.$props, t = this.showBanner && u("div", {
      style: this.bannerStyles,
      ref: "banner"
    }, [u("span", {
      style: {
        display: "flex",
        alignSelf: "center",
        marginRight: "8px"
      }
    }, [u("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none"
    }, [u("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M8 1L0 15H16L8 1ZM7 6V11H9V6H7ZM7 14V12H9V14H7Z",
      fill: "#1E1E1E"
    }, null)])]), e ? u("span", {
      innerHTML: e
    }, null) : u("span", null, [At("We couldn't verify your "), u("a", {
      href: cd
    }, [At("license key")]), At(" for Kendo UI for Vue. Please see the browser console for details and resolution steps.")]), u("div", {
      style: {
        display: "flex",
        alignItems: "center",
        marginLeft: "24px"
      }
    }, [u("button", {
      title: "Close",
      style: this.bannerButtonStyles,
      onClick: this.onCloseBannerClick
    }, [u("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none"
    }, [u("path", {
      d: "M13 4.41562L9.41563 8L13 11.5844L11.5844 13L8 9.41563L4.41562 13L3 11.5844L6.58437 8L3 4.41562L4.41562 3L8 6.58437L11.5844 3L13 4.41562Z",
      fill: "#1E1E1E"
    }, null)])])])]);
    return u("div", {
      style: this.watermarkStyles
    }, [t]);
  }
}), Ys = {
  name: "caret-alt-up",
  content: '<path d="m256 160 128 192H128z" />',
  viewBox: "0 0 512 512"
}, tr = {
  name: "caret-alt-right",
  content: '<path d="M352 256 160 384V128z" />',
  viewBox: "0 0 512 512"
}, un = {
  name: "caret-alt-down",
  content: '<path d="M256 352 128 160h256z" />',
  viewBox: "0 0 512 512"
}, ir = {
  name: "caret-alt-left",
  content: '<path d="m160 256 192-128v256z" />',
  viewBox: "0 0 512 512"
}, Ea = {
  name: "caret-alt-to-right",
  content: '<path d="m128 128 192 128-192 128zm224 256V128h-32v256z" />',
  viewBox: "0 0 512 512"
}, Ma = {
  name: "caret-alt-to-left",
  content: '<path d="M352 384 160 256l192-128zM128 128v256h32V128z" />',
  viewBox: "0 0 512 512"
}, Fa = {
  name: "chevron-right",
  content: '<path d="m158.059 129.941 126.06 126.06-126.06 126.061L192 416l160-159.999L192 96z" />',
  viewBox: "0 0 512 512"
}, La = {
  name: "chevron-left",
  content: '<path d="m353.941 382.059-126.06-126.06 126.06-126.061L320 96 160 255.999 320 416z" />',
  viewBox: "0 0 512 512"
}, pd = {
  name: "more-vertical",
  content: '<path d="M240 128c26.4 0 48-21.6 48-48s-21.6-48-48-48-48 21.6-48 48 21.6 48 48 48m0 64c-26.4 0-48 21.6-48 48s21.6 48 48 48 48-21.6 48-48-21.6-48-48-48m0 160c-26.4 0-48 21.6-48 48s21.6 48 48 48 48-21.6 48-48-21.6-48-48-48" />',
  viewBox: "0 0 512 512"
}, Oa = {
  name: "calendar",
  content: '<path d="M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9q-.15-.15 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z" />',
  viewBox: "0 0 512 512"
}, gd = {
  name: "cancel",
  content: '<path d="M256 32c-50.3 0-96.8 16.6-134.1 44.6-17.2 12.8-32.4 28.1-45.3 45.3C48.6 159.2 32 205.7 32 256c0 123.7 100.3 224 224 224 50.3 0 96.8-16.6 134.1-44.6 17.2-12.8 32.4-28.1 45.3-45.3 28-37.4 44.6-83.8 44.6-134.1 0-123.7-100.3-224-224-224m0 384c-88.2 0-160-71.8-160-160 0-32.6 9.8-62.9 26.6-88.2l221.6 221.6C318.9 406.2 288.6 416 256 416m133.4-71.8L167.8 122.6C193.1 105.8 223.4 96 256 96c88.2 0 160 71.8 160 160 0 32.6-9.8 62.9-26.6 88.2" />',
  viewBox: "0 0 512 512"
}, Xs = {
  name: "check",
  content: '<path d="M434.7 82.7 480 128 192 416 32 256l45.3-45.3L192 325.5z" />',
  viewBox: "0 0 512 512"
}, Xr = {
  name: "x",
  content: '<path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z" />',
  viewBox: "0 0 512 512"
}, fd = {
  name: "x-circle",
  content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32m128 306.7L338.7 384 256 301.3 173.3 384 128 338.7l82.7-82.7-82.7-82.7 45.3-45.3 82.7 82.7 82.7-82.7 45.3 45.3-82.7 82.7z" />',
  viewBox: "0 0 512 512"
}, Js = {
  name: "plus",
  content: '<path d="M288 224V96h-64v128H96v64h128v128h64V288h128v-64z" />',
  viewBox: "0 0 512 512"
}, md = {
  name: "minus",
  content: '<path d="M96 224v64h320v-64z" />',
  viewBox: "0 0 512 512"
}, Jr = {
  name: "sort-asc-small",
  content: '<path d="M256 192v224h-32V192h-96L240 64l112 128z" />',
  viewBox: "0 0 512 512"
}, Zr = {
  name: "sort-desc-small",
  content: '<path d="M352 288 240 416 128 288h96V64h32v224z" />',
  viewBox: "0 0 512 512"
}, Zs = {
  name: "filter",
  content: '<path d="M64 64v32l160 160v224l64-64V256L448 96V64z" />',
  viewBox: "0 0 512 512"
}, vd = {
  name: "filter-clear",
  content: '<path d="m143.5 64 168.2 168.2L288 256v160l-64 64V256L64 96V64zm236.1 100.4L448 96V64H279.3l-64-64L192 22l298 298 22-23.3z" />',
  viewBox: "0 0 512 512"
}, bd = {
  name: "search",
  content: '<path d="M365.3 320h-22.7l-26.7-26.7C338.5 265.7 352 230.4 352 192c0-88.4-71.6-160-160-160S32 103.6 32 192s71.6 160 160 160c38.4 0 73.7-13.5 101.3-36.1l26.7 26.7v22.7L434.7 480l45.3-45.3zM64 192c0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128S64 262.7 64 192" />',
  viewBox: "0 0 512 512"
}, Qs = {
  name: "exclamation-circle",
  content: '<path d="M224 128h64v160h-64zm0 256h64v-64h-64zm256-128c0 123.7-100.3 224-224 224S32 379.7 32 256 132.3 32 256 32s224 100.3 224 224m-32 0c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192" />',
  viewBox: "0 0 512 512"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const xd = {
  button: "k-button"
}, yd = {
  styles: xd
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const $d = {
  name: "@progress/kendo-vue-buttons",
  productName: "Kendo UI for Vue",
  productCode: "KENDOUIVUE",
  productCodes: ["KENDOUIVUE"],
  publishDate: 1763478410,
  version: "7.0.2",
  licensingDocsUrl: "https://www.telerik.com/kendo-vue-ui/my-license/?utm_medium=product&utm_source=kendovue&utm_campaign=kendo-ui-vue-purchase-license-keys-warning"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const kd = yd.styles, xe = /* @__PURE__ */ k({
  name: "KendoButton",
  emits: {
    click: (e) => !0,
    mousedown: (e) => !0,
    mouseup: (e) => !0,
    pointerdown: (e) => !0,
    pointerup: (e) => !0,
    focus: (e) => !0,
    blur: (e) => !0,
    keypress: (e) => !0,
    keydown: (e) => !0,
    contextmenu: (e) => !0
  },
  props: {
    ariaLabel: String,
    ariaPressed: Boolean,
    title: String,
    dir: String,
    selected: {
      type: Boolean,
      default: void 0
    },
    togglable: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: function() {
      }
    },
    svgIcon: Object,
    iconSize: {
      type: String,
      default: "medium"
    },
    iconClass: {
      type: String,
      default: function() {
      }
    },
    imageUrl: {
      type: String,
      default: function() {
      }
    },
    imageAlt: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    size: {
      type: String,
      default: "medium"
    },
    shape: {
      type: String
    },
    rounded: {
      type: String,
      default: "medium"
    },
    fillMode: {
      type: String,
      default: "solid"
    },
    themeColor: {
      type: String,
      default: "base"
    },
    tabIndex: Number,
    accessKey: String,
    id: String,
    type: String,
    role: String
  },
  created() {
    Ve($d), this.currentActive = this.$props.togglable === !0 && this.$props.selected === !0, this._activeTemp = void 0;
  },
  data() {
    return {
      currentActive: null
    };
  },
  computed: {
    computedSelected() {
      return this._activeTemp !== void 0 ? this._activeTemp : this.$props.selected !== void 0 ? this.$props.selected : this.currentActive;
    },
    buttonClasses() {
      const {
        disabled: e,
        icon: t,
        iconClass: i,
        imageUrl: n,
        dir: r,
        svgIcon: a,
        size: o,
        shape: s,
        rounded: l,
        fillMode: d,
        themeColor: c
      } = this.$props, h = a !== void 0 || t !== void 0 || i !== void 0 || n !== void 0, p = B(this);
      return {
        [kd.button]: !0,
        [`k-button-${ye.sizeMap[o] || o}`]: o,
        [`k-button-${s}`]: s && s !== "rectangle",
        [`k-rounded-${ye.roundedMap[l] || l}`]: l,
        "k-icon-button": !p && h,
        "k-disabled": e,
        "k-selected": this.computedSelected,
        "k-rtl": r === "rtl",
        [`k-button-${d}`]: d,
        [`k-button-${d}-${c}`]: d && c
      };
    }
  },
  updated() {
    this.$props.togglable && this.$props.selected !== void 0 && this.$props.selected !== this.currentActive && (this.currentActive = this.$props.selected);
  },
  methods: {
    focus(e) {
      this.$el.focus(e);
    },
    toggleIfApplicable() {
      if (!this.disabled && this.$props.togglable && this.$props.selected === void 0) {
        const e = !this.currentActive;
        this._activeTemp = e, this.currentActive = e, this._activeTemp = void 0;
      }
    },
    handleClick(e) {
      this.toggleIfApplicable(), this.disabled || this.$emit("click", e);
    },
    handleMouseDown(e) {
      this.disabled || this.$emit("mousedown", e);
    },
    handlePointerDown(e) {
      this.disabled || this.$emit("pointerdown", e);
    },
    handleMouseUp(e) {
      this.disabled || this.$emit("mouseup", e);
    },
    handlePointerUp(e) {
      this.disabled || this.$emit("pointerup", e);
    },
    handleFocus(e) {
      this.disabled || this.$emit("focus", {
        event: e
      });
    },
    handleBlur(e) {
      this.disabled || this.$emit("blur", {
        event: e
      });
    },
    handleKeypress(e) {
      this.disabled || this.$emit("keypress", e);
    },
    handleKeydown(e) {
      this.disabled || this.$emit("keydown", e);
    },
    handleContextmenu(e) {
      this.disabled || this.$emit("contextmenu", e);
    }
  },
  render() {
    const {
      togglable: e,
      icon: t,
      svgIcon: i,
      iconClass: n,
      imageUrl: r,
      imageAlt: a,
      accessKey: o,
      tabIndex: s,
      id: l,
      type: d,
      disabled: c,
      role: h,
      iconSize: p
    } = this.$props, g = B(this), m = function() {
      if (r)
        return u("img", {
          role: "presentation",
          class: "k-image",
          alt: a,
          src: r
        }, null);
      if (t || i) {
        const f = fe("k-button-icon", n);
        return u(ie, {
          name: t,
          icon: i,
          class: f,
          size: p
        }, null);
      } else if (n)
        return u("span", {
          role: "presentation",
          class: n
        }, null);
      return null;
    };
    return u("button", {
      class: this.buttonClasses,
      onClick: this.handleClick,
      onMousedown: this.handleMouseDown,
      onMouseup: this.handleMouseUp,
      onPointerdown: this.handlePointerDown,
      onPointerup: this.handlePointerUp,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onKeypress: this.handleKeypress,
      onKeydown: this.handleKeydown,
      onContextmenu: this.handleContextmenu,
      title: this.title,
      "aria-label": this.ariaLabel,
      "aria-disabled": c || void 0,
      "aria-pressed": e ? !!this.currentActive : void 0,
      accesskey: o,
      tabindex: s,
      id: l,
      type: d,
      role: h
    }, [m.call(this), g && u("span", {
      class: "k-button-text"
    }, [g])]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const wd = (e) => {
  if (!e)
    return 0;
  const t = e.ownerDocument.defaultView.getComputedStyle(e), i = parseFloat(t.marginTop), n = parseFloat(t.marginBottom);
  return e.offsetHeight + i + n;
}, Sd = (e) => {
  if (!e)
    return 0;
  const t = e.ownerDocument.defaultView.getComputedStyle(e), i = parseFloat(t.marginLeft), n = parseFloat(t.marginRight);
  return e.offsetWidth + i + n;
}, Cd = {
  "animation-container": "k-animation-container",
  "animation-container-relative": "k-animation-container-relative",
  "animation-container-fixed": "k-animation-container-fixed",
  "push-right-enter": "k-push-right-enter",
  "push-right-appear": "k-push-right-appear",
  "push-right-enter-active": "k-push-right-enter-active",
  "push-right-appear-active": "k-push-right-appear-active",
  "push-right-exit": "k-push-right-exit",
  "push-right-exit-active": "k-push-right-exit-active",
  "push-left-enter": "k-push-left-enter",
  "push-left-appear": "k-push-left-appear",
  "push-left-enter-active": "k-push-left-enter-active",
  "push-left-appear-active": "k-push-left-appear-active",
  "push-left-exit": "k-push-left-exit",
  "push-left-exit-active": "k-push-left-exit-active",
  "push-down-enter": "k-push-down-enter",
  "push-down-appear": "k-push-down-appear",
  "push-down-enter-active": "k-push-down-enter-active",
  "push-down-appear-active": "k-push-down-appear-active",
  "push-down-exit": "k-push-down-exit",
  "push-down-exit-active": "k-push-down-exit-active",
  "push-up-enter": "k-push-up-enter",
  "push-up-appear": "k-push-up-appear",
  "push-up-enter-active": "k-push-up-enter-active",
  "push-up-appear-active": "k-push-up-appear-active",
  "push-up-exit": "k-push-up-exit",
  "push-up-exit-active": "k-push-up-exit-active",
  expand: "k-expand",
  "expand-vertical-enter": "k-expand-vertical-enter",
  "expand-vertical-appear": "k-expand-vertical-appear",
  "expand-vertical-enter-active": "k-expand-vertical-enter-active",
  "expand-vertical-appear-active": "k-expand-vertical-appear-active",
  "expand-vertical-exit": "k-expand-vertical-exit",
  "expand-vertical-exit-active": "k-expand-vertical-exit-active",
  "expand-horizontal-enter": "k-expand-horizontal-enter",
  "expand-horizontal-appear": "k-expand-horizontal-appear",
  "expand-horizontal-enter-active": "k-expand-horizontal-enter-active",
  "expand-horizontal-appear-active": "k-expand-horizontal-appear-active",
  "expand-horizontal-exit": "k-expand-horizontal-exit",
  "expand-horizontal-exit-active": "k-expand-horizontal-exit-active",
  "child-animation-container": "k-child-animation-container",
  "fade-enter": "k-fade-enter",
  "fade-appear": "k-fade-appear",
  "fade-enter-active": "k-fade-enter-active",
  "fade-appear-active": "k-fade-appear-active",
  "fade-exit": "k-fade-exit",
  "fade-exit-active": "k-fade-exit-active",
  "zoom-in-enter": "k-zoom-in-enter",
  "zoom-in-appear": "k-zoom-in-appear",
  "zoom-in-enter-active": "k-zoom-in-enter-active",
  "zoom-in-appear-active": "k-zoom-in-appear-active",
  "zoom-in-exit": "k-zoom-in-exit",
  "zoom-in-exit-active": "k-zoom-in-exit-active",
  "zoom-out-enter": "k-zoom-out-enter",
  "zoom-out-appear": "k-zoom-out-appear",
  "zoom-out-enter-active": "k-zoom-out-enter-active",
  "zoom-out-appear-active": "k-zoom-out-appear-active",
  "zoom-out-exit": "k-zoom-out-exit",
  "zoom-out-exit-active": "k-zoom-out-exit-active",
  "slide-in-appear": "k-slide-in-appear",
  centered: "k-centered",
  "slide-in-appear-active": "k-slide-in-appear-active",
  "slide-down-enter": "k-slide-down-enter",
  "slide-down-appear": "k-slide-down-appear",
  "slide-down-enter-active": "k-slide-down-enter-active",
  "slide-down-appear-active": "k-slide-down-appear-active",
  "slide-down-exit": "k-slide-down-exit",
  "slide-down-exit-active": "k-slide-down-exit-active",
  "slide-up-enter": "k-slide-up-enter",
  "slide-up-appear": "k-slide-up-appear",
  "slide-up-enter-active": "k-slide-up-enter-active",
  "slide-up-appear-active": "k-slide-up-appear-active",
  "slide-up-exit": "k-slide-up-exit",
  "slide-up-exit-active": "k-slide-up-exit-active",
  "slide-right-enter": "k-slide-right-enter",
  "slide-right-appear": "k-slide-right-appear",
  "slide-right-enter-active": "k-slide-right-enter-active",
  "slide-right-appear-active": "k-slide-right-appear-active",
  "slide-right-exit": "k-slide-right-exit",
  "slide-right-exit-active": "k-slide-right-exit-active",
  "slide-left-enter": "k-slide-left-enter",
  "slide-left-appear": "k-slide-left-appear",
  "slide-left-enter-active": "k-slide-left-enter-active",
  "slide-left-appear-active": "k-slide-left-appear-active",
  "slide-left-exit": "k-slide-left-exit",
  "slide-left-exit-active": "k-slide-left-exit-active",
  "reveal-vertical-enter": "k-reveal-vertical-enter",
  "reveal-vertical-appear": "k-reveal-vertical-appear",
  "reveal-vertical-enter-active": "k-reveal-vertical-enter-active",
  "reveal-vertical-appear-active": "k-reveal-vertical-appear-active",
  "reveal-vertical-exit": "k-reveal-vertical-exit",
  "reveal-vertical-exit-active": "k-reveal-vertical-exit-active",
  "reveal-horizontal-enter": "k-reveal-horizontal-enter",
  "reveal-horizontal-appear": "k-reveal-horizontal-appear",
  "reveal-horizontal-enter-active": "k-reveal-horizontal-enter-active",
  "reveal-horizontal-appear-active": "k-reveal-horizontal-appear-active",
  "reveal-horizontal-exit": "k-reveal-horizontal-exit",
  "reveal-horizontal-exit-active": "k-reveal-horizontal-exit-active"
}, rn = {
  outerHeight: wd,
  outerWidth: Sd,
  styles: Cd
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const wt = rn.styles, Id = /* @__PURE__ */ k({
  props: {
    in: Boolean,
    transitionName: {
      type: String,
      required: !0
    },
    transitionStyle: Object,
    componentChildClassName: [Array],
    className: String,
    appear: {
      type: Boolean,
      default: !0
    },
    enter: {
      type: Boolean,
      default: !0
    },
    exit: {
      type: Boolean,
      default: !0
    },
    transitionEnterDuration: Number,
    transitionExitDuration: Number,
    mountOnEnter: Boolean,
    unmountOnExit: Boolean,
    animationEnteringStyle: Object,
    animationEnteredStyle: Object,
    animationExitingStyle: Object,
    animationExitedStyle: Object,
    onBeforeenter: Function,
    onEntering: Function,
    onEntered: Function,
    onExit: Function,
    onExiting: Function,
    onExited: Function
  },
  created: function() {
    this.animationStep = "";
  },
  setup: function() {
    return {
      elementRef: V(null)
    };
  },
  mounted() {
    this._element = this.elementRef || null;
  },
  computed: {
    element() {
      return this._element;
    }
  },
  methods: {
    handleBeforeEnter(e) {
      this.$emit("beforeenter", {
        animatedElement: e,
        target: this
      });
    },
    handleEnter(e) {
      this.animationStep = "entering", this.$emit("entering", {
        animatedElement: e,
        target: this
      });
    },
    handleAfterEnter(e) {
      this.animationStep = "entered", this.$emit("entered", {
        animatedElement: e,
        target: this
      });
    },
    handleBeforeLeave(e) {
      this.$emit("exit", {
        animatedElement: e,
        target: this
      });
    },
    handleLeave(e) {
      this.animationStep = "exiting", this.$emit("exiting", {
        animatedElement: e,
        target: this
      });
    },
    handleAfterLeave(e) {
      this.animationStep = "exited", this.$emit("exited", {
        animatedElement: e,
        target: this
      });
    }
  },
  render() {
    const {
      appear: e,
      enter: t,
      exit: i,
      transitionName: n,
      transitionEnterDuration: r,
      transitionExitDuration: a,
      className: o,
      componentChildClassName: s,
      mountOnEnter: l,
      unmountOnExit: d,
      animationEnteringStyle: c,
      animationEnteredStyle: h,
      animationExitingStyle: p,
      animationExitedStyle: g,
      ...m
    } = this.$props, f = B(this), b = e, v = bl, $ = [s, wt["child-animation-container"]];
    let y = t ? r : 0, C = i ? a : 0;
    const D = {
      transitionDelay: "0ms",
      transitionDuration: b ? `${y}ms` : `${C}ms`,
      ...this.$props.transitionStyle
    }, S = {
      entering: {
        transitionDuration: `${y}ms`,
        ...c
      },
      entered: {
        ...h
      },
      exiting: {
        transitionDuration: `${C}ms`,
        ...p
      },
      exited: {
        ...g
      }
    };
    let E = [D, S[this.animationStep]];
    const L = {
      enter: y,
      leave: C
    }, j = [b ? M("div", {
      style: E,
      class: $,
      ref: (Q) => {
        this.elementRef = Q;
      }
    }, [f]) : null];
    return M(v, {
      duration: L,
      name: n,
      appear: e,
      appearFromClass: wt[`${n}-appear`] || `${n}-appear`,
      enterFromClass: wt[`${n}-enter`] || `${n}-enter`,
      leaveFromClass: wt[`${n}-exit`] || `${n}-exit`,
      appearToClass: wt[`${n}-appear-active`] || `${n}-appear-active`,
      enterToClass: wt[`${n}-enter-active`] || `${n}-enter-active`,
      leaveToClass: wt[`${n}-exit-active`] || `${n}-exit-active`,
      onBeforeEnter: this.handleBeforeEnter,
      onEnter: this.handleEnter,
      onAfterEnter: this.handleAfterEnter,
      onBeforeLeave: this.handleBeforeLeave,
      onLeave: this.handleLeave,
      onAfterLeave: this.handleAfterLeave
    }, () => j);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Dd = {
  name: "@progress/kendo-vue-animation",
  productName: "Kendo UI for Vue",
  productCode: "KENDOUIVUE",
  productCodes: ["KENDOUIVUE"],
  publishDate: 1763478362,
  version: "7.0.2",
  licensingDocsUrl: "https://www.telerik.com/kendo-vue-ui/my-license/"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function Ed(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const Na = rn.styles, eo = /* @__PURE__ */ k({
  props: {
    componentChildStyle: Object,
    childFactory: Object,
    className: String,
    tag: String,
    id: String,
    animationEnteringStyle: Object,
    animationExitingStyle: Object,
    componentChildClassName: [Array],
    transitionName: {
      type: String,
      required: !0
    },
    appear: {
      type: Boolean,
      default: !0
    },
    enter: {
      type: Boolean,
      default: !0
    },
    exit: {
      type: Boolean,
      default: !0
    },
    transitionEnterDuration: {
      type: Number
    },
    transitionExitDuration: {
      type: Number
    },
    onEntering: Function,
    onEnter: Function,
    onEntered: Function,
    onExit: Function,
    onExiting: Function,
    onExited: Function
  },
  methods: {
    handleEntering(e) {
      this.$emit("entering", e);
    },
    handleEnter(e) {
      this.$emit("enter", e);
    },
    handleEntered(e) {
      this.$emit("entered", e);
    },
    handleExit(e) {
      this.$emit("exit", e);
    },
    handleExiting(e) {
      this.$emit("exiting", e);
    },
    handleExited(e) {
      this.$emit("exited", e);
    }
  },
  created: function() {
    Ve(Dd);
  },
  render() {
    const e = B(this), {
      id: t,
      tag: i,
      role: n,
      className: r,
      childFactory: a,
      stackChildren: o,
      componentChildStyle: s,
      componentChildClassName: l,
      ...d
    } = this.$props, c = [Na["animation-container"], Na["animation-container-relative"], r];
    return u("div", {
      id: this.$props.id,
      class: c,
      role: n
    }, [u(Id, {
      key: "some",
      style: s,
      appear: this.$props.appear,
      enter: this.$props.enter,
      exit: this.$props.exit,
      transitionName: this.$props.transitionName,
      componentChildClassName: this.$props.componentChildClassName,
      onBeforeenter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered,
      onExit: this.handleExit,
      onExiting: this.handleExiting,
      onExited: this.handleExited,
      animationEnteringStyle: this.$props.animationEnteringStyle,
      animationExitingStyle: this.$props.animationExitingStyle,
      transitionEnterDuration: this.$props.transitionEnterDuration,
      transitionExitDuration: this.$props.transitionExitDuration
    }, Ed(e) ? e : {
      default: () => [e]
    })]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function Md(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const to = /* @__PURE__ */ k({
  props: {
    appear: {
      type: Boolean,
      default: !1
    },
    enter: {
      type: Boolean,
      default: !0
    },
    exit: {
      type: Boolean,
      default: !0
    },
    transitionEnterDuration: {
      type: Number,
      default: 300
    },
    transitionExitDuration: {
      type: Number,
      default: 300
    },
    componentChildClassName: [Array],
    childFactory: Object,
    componentChildStyle: Object,
    className: String,
    direction: {
      type: String,
      default: "down"
    },
    tag: String,
    id: String,
    role: String,
    onBeforeenter: Function,
    onEntering: Function,
    onEntered: Function,
    onExit: Function,
    onExiting: Function,
    onExited: Function
  },
  methods: {
    handleEntering(e) {
      this.$emit("entering", e);
    },
    handleEnter(e) {
      this.$emit("enter", e);
    },
    handleEntered(e) {
      this.$emit("entered", e);
    },
    handleExit(e) {
      this.$emit("exit", e);
    },
    handleExiting(e) {
      this.$emit("exiting", e);
    },
    handleExited(e) {
      this.$emit("exited", e);
    }
  },
  render() {
    const e = B(this), {
      direction: t,
      id: i,
      ...n
    } = this.$props, r = `slide-${this.$props.direction}`;
    return u(eo, {
      id: i,
      transitionName: r,
      componentChildClassName: this.$props.componentChildClassName,
      componentChildStyle: this.$props.componentChildStyle,
      appear: this.$props.appear,
      enter: this.$props.enter,
      exit: this.$props.exit,
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered,
      onExit: this.handleExit,
      onExiting: this.handleExiting,
      onExited: this.handleExited,
      transitionEnterDuration: this.$props.transitionEnterDuration,
      transitionExitDuration: this.$props.transitionExitDuration
    }, Md(e) ? e : {
      default: () => [e]
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function Fd(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const Ld = function() {
}, Od = /* @__PURE__ */ k({
  props: {
    appear: {
      type: Boolean,
      default: !1
    },
    enter: {
      type: Boolean,
      default: !0
    },
    exit: {
      type: Boolean,
      default: !0
    },
    transitionEnterDuration: {
      type: Number,
      default: 300
    },
    transitionExitDuration: {
      type: Number,
      default: 300
    },
    componentChildStyle: Object,
    childFactory: Object,
    className: String,
    direction: {
      type: String,
      default: "vertical"
    },
    tag: String,
    id: String,
    onEnter: Function,
    onEntering: Function,
    onExit: Function,
    onExited: Function
  },
  data() {
    return {
      maxHeight: "",
      maxWidth: ""
    };
  },
  methods: {
    componentWillEnter(e) {
      const {
        onEnter: t
      } = this.$props;
      this.updateContainerDimensions(e.animatedElement, () => {
        t && t.call(void 0, e);
      });
    },
    componentIsEntering(e) {
      const {
        onEntering: t
      } = this.$props;
      this.updateContainerDimensions(e.animatedElement, () => {
        t && t.call(void 0, e);
      });
    },
    componentWillExit(e) {
      const {
        onExit: t
      } = this.$props;
      this.updateContainerDimensions(e.animatedElement, () => {
        t && t.call(void 0, e);
      });
    },
    updateContainerDimensions(e, t = Ld) {
      const i = e ? e.firstElementChild : null;
      if (i) {
        const n = rn.outerHeight(i), r = rn.outerWidth(i);
        this.$data.maxHeight = n, this.$data.maxWidth = r, t();
      }
    }
  },
  computed: {
    animationEnteringStyle() {
      let e;
      return this.$props.direction === "vertical" ? e = {
        maxHeight: this.maxHeight ? `${this.maxHeight}px` : null
      } : e = {
        maxWidth: this.maxWidth ? `${this.maxWidth}px` : null
      }, {
        maxHeight: e.maxHeight,
        maxWidth: e.maxWidth
      };
    }
  },
  render() {
    const e = B(this), {
      direction: t,
      childFactory: i,
      ...n
    } = this.$props, r = `reveal-${this.$props.direction}`;
    return u(eo, {
      appear: this.$props.appear,
      enter: this.$props.enter,
      exit: this.$props.exit,
      transitionEnterDuration: this.$props.transitionEnterDuration,
      transitionExitDuration: this.$props.transitionExitDuration,
      onEnter: this.componentWillEnter,
      onEntering: this.componentIsEntering,
      onExit: this.componentWillExit,
      componentChildStyle: this.$props.componentChildStyle,
      animationEnteringStyle: this.animationEnteringStyle,
      transitionName: r
    }, Fd(e) ? e : {
      default: () => [e]
    });
  }
});
var pe;
(function(e) {
  e.bottom = "bottom", e.center = "center", e.middle = "middle", e.left = "left", e.right = "right", e.top = "top";
})(pe || (pe = {}));
var Nd = function(e) {
  var t = e.anchorRect, i = e.anchorAlign, n = e.elementRect, r = e.elementAlign, a = e.margin, o = a === void 0 ? {} : a, s = i.horizontal, l = i.vertical, d = r.horizontal, c = r.vertical, h = o.horizontal || 0, p = o.vertical || 0, g = t.top, m = t.left;
  return l === pe.bottom && (g += t.height), (l === pe.center || l === pe.middle) && (g += Math.round(t.height / 2)), c === pe.bottom && (g -= n.height, p *= -1), (c === pe.center || c === pe.middle) && (g -= Math.round(n.height / 2), p *= -1), s === pe.right && (m += t.width), (s === pe.center || s === pe.middle) && (m += Math.round(t.width / 2)), d === pe.right && (m -= n.width, h *= -1), (d === pe.center || d === pe.middle) && (m -= Math.round(n.width / 2), h *= -1), {
    top: g + p,
    left: m + h
  };
}, Ad = function(e, t) {
  return {
    top: e.top + t.y,
    left: e.left + t.x,
    height: e.height,
    width: e.width
  };
}, _d = function(e, t, i) {
  var n = e.top, r = e.left;
  return i && (r = 0, n = 0), {
    top: n + t.top,
    left: r + t.left,
    height: e.height,
    width: e.width
  };
};
const io = function(e) {
  return e && e.ownerDocument || document;
};
var no = function(e) {
  return io(e).documentElement;
}, wn = 0, zd = function() {
  if (!wn && typeof document < "u") {
    var e = document.createElement("div");
    e.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block", e.innerHTML = "&nbsp;", document.body.appendChild(e), wn = e.offsetWidth - e.scrollWidth, document.body.removeChild(e);
  }
  return wn;
}, Qr = function(e) {
  return io(e).defaultView;
}, ro = function(e) {
  var t = Qr(e), i = no(e), n = {
    height: t.innerHeight,
    width: t.innerWidth
  };
  return i.scrollHeight - i.clientHeight > 0 && (n.width -= zd()), n;
}, Vd = function(e) {
  if (!e.getBoundingClientRect) {
    var t = ro(e);
    return {
      bottom: t.height,
      left: 0,
      right: t.width,
      top: 0
    };
  }
  var i = e.getBoundingClientRect(), n = i.bottom, r = i.left, a = i.right, o = i.top;
  return {
    bottom: n,
    left: r,
    right: a,
    top: o
  };
}, dn = function(e) {
  for (var t = e.offsetParent; t && t.style.position === "static"; )
    t = t.offsetParent;
  return t || e.ownerDocument.documentElement;
}, Td = function(e) {
  return dn(e) === e.ownerDocument.body;
}, Pd = function(e) {
  var t = e.style, i = t.display, n = t.left, r = t.position;
  e.style.display = "", e.style.left = "-10000px", e.style.position = "absolute";
  var a = e.getBoundingClientRect();
  return e.style.display = i, e.style.left = n, e.style.position = r, {
    top: a.top,
    left: a.left,
    height: a.height,
    width: a.width
  };
}, si = function(e) {
  var t = e.getBoundingClientRect(), i = t.left, n = t.top;
  return !t.height && !t.width && (t = Pd(e)), {
    top: n,
    left: i,
    height: t.height,
    width: t.width
  };
}, ao = function(e, t) {
  for (var i = [], n = e.parentNode; n && (i.push(n), n !== t); )
    n = n.parentNode;
  return i;
}, so = function(e) {
  var t = no(e), i = Qr(e);
  return {
    x: i.pageXOffset || t.scrollLeft || 0,
    y: i.pageYOffset || t.scrollTop || 0
  };
}, oo = function(e) {
  return e === (e.ownerDocument || {}).body ? so(e) : {
    x: e.scrollLeft,
    y: e.scrollTop
  };
}, Hd = function(e) {
  var t = dn(e);
  return t ? oo(t) : { x: 0, y: 0 };
}, Rd = function(e, t) {
  var i = Qr(e), n = i.getComputedStyle(e), r = si(e), a = t || dn(e), o = e.ownerDocument, s = a !== o.body && a !== o.documentElement, l = { top: 0, left: 0 };
  if (n.position !== "fixed" && s) {
    var d = i.getComputedStyle(a);
    l = si(a), l.top += parseFloat(d.borderTopWidth), l.left += parseFloat(d.borderLeftWidth);
  }
  return {
    top: r.top - l.top,
    left: r.left - l.left,
    height: r.height,
    width: r.width
  };
}, Bd = function(e, t) {
  return e ? oo(e) : Hd(t);
}, jd = function(e, t, i) {
  i === void 0 && (i = 1);
  var n = t ? dn(t) : null, r = Rd(e, n), a = r.top, o = r.left, s = r.height, l = r.width, d = Bd(n, e), c = d.x, h = d.y, p = e.ownerDocument, g = n === p.body || n === p.documentElement ? 1 : i;
  return {
    top: a + h * g,
    left: o + c * g,
    height: s,
    width: l
  };
}, Gd = function(e, t) {
  return {
    top: e.top - t.y,
    left: e.left - t.x,
    height: e.height,
    width: e.width
  };
}, Ot;
(function(e) {
  e.fit = "fit", e.flip = "flip", e.none = "none";
})(Ot || (Ot = {}));
var Aa = function(e, t, i) {
  var n = 0;
  return e + t > i && (n = i - (e + t)), e < 0 && (n = -e), n;
}, _a = function(e) {
  var t = e.offset, i = e.size, n = e.anchorSize, r = e.viewPortSize, a = e.anchorAlignPoint, o = e.elementAlignPoint, s = e.margin, l = 0, d = o === pe.center || o === pe.middle, c = a === pe.center || a === pe.middle, h = 2 * s;
  if (o !== a && !d && !c) {
    var p = a === pe.top || a === pe.left;
    t < 0 && p ? (l = i + n + h, t + l + i > r && (l = 0)) : t >= 0 && !p && (t + i > r && (l += -(n + i + h)), t + l < 0 && (l = 0));
  }
  return l;
}, Kd = function(e) {
  var t = e.anchorRect, i = e.anchorAlign, n = e.elementRect, r = e.elementAlign, a = e.collisions, o = e.viewPort, s = e.margin, l = s === void 0 ? {} : s, d = n.top, c = n.left, h = n.height, p = n.width, g = o.height, m = o.width, f = l.horizontal || 0, b = l.vertical || 0, v = 0, $ = 0, y = a.vertical === Ot.fit, C = a.horizontal === Ot.fit, D = a.vertical === Ot.flip, S = a.horizontal === Ot.flip;
  y && ($ += Aa(d, h, g)), C && (v += Aa(c, p, m)), D && ($ += _a({
    margin: b,
    offset: d,
    size: h,
    anchorSize: t.height,
    viewPortSize: g,
    anchorAlignPoint: i.vertical,
    elementAlignPoint: r.vertical
  })), S && (v += _a({
    margin: f,
    offset: c,
    size: p,
    anchorSize: t.width,
    viewPortSize: m,
    anchorAlignPoint: i.horizontal,
    elementAlignPoint: r.horizontal
  }));
  var E = D && $ !== 0, L = S && v !== 0, j = y && $ !== 0, Q = C && v !== 0;
  return {
    flipped: L || E,
    fitted: j || Q,
    flip: {
      horizontal: L,
      vertical: E
    },
    fit: {
      horizontal: Q,
      vertical: j
    },
    offset: {
      left: v,
      top: $
    }
  };
}, qd = function(e) {
  for (var t, i = [], n = (t = e.parentNode) === null || t === void 0 ? void 0 : t.firstElementChild; n; )
    n !== e && i.push(n), n = n.nextElementSibling;
  return i;
}, lo = function(e, t) {
  for (var i = ao(e), n = t, r, a; n && (r = qd(n), a = i.reduce(function(o, s) {
    return o.concat(r.filter(function(l) {
      return l === s;
    }));
  }, [])[0], !a); )
    n = n.parentElement;
  return a;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const nr = (e, t) => e || {
  height: 0,
  left: t.left,
  top: t.top,
  width: 0
}, Wd = (e, t) => t ? {
  height: e.height,
  left: t.left,
  top: t.top,
  width: e.width
} : e, Ud = (e, t) => t ? {
  height: e.height,
  left: e.left - t.left,
  top: e.top - t.top,
  width: e.width
} : e, cn = () => typeof document < "u" && !!document.body, Rt = () => typeof window < "u", Yd = /auto|scroll/, Xd = (e) => {
  const t = window.getComputedStyle(e);
  return `${t.overflow}${t.overflowX}${t.overflowY}`;
}, Jd = (e) => {
  const t = [];
  if (!cn() || !Rt())
    return t;
  let i = e.parentElement;
  for (; i; )
    Yd.test(Xd(i)) && t.push(i), i = i.parentElement;
  return t.push(window), t;
}, Zd = 1e3 / 60, Qd = () => {
  if (!cn())
    return !1;
  const e = 10, t = document.createElement("div");
  if (t.style.transform = "matrix(10, 0, 0, 10, 0, 0)", t.innerHTML = "<div>child</div>", document.body.appendChild(t), t && t.firstChild) {
    const n = t.firstChild;
    n.style.position = "fixed", n.style.top = `${e}px`;
  }
  const i = t.children[0].getBoundingClientRect().top !== e;
  return document.body.removeChild(t), i;
}, ec = Qd(), tc = (e, t) => {
  if (!e || !cn() || !Rt())
    return null;
  const i = lo(e, t);
  if (!i)
    return null;
  const n = [e].concat(ao(e, i)).reduce((r, a) => {
    const o = a.style.zIndex || window.getComputedStyle(a).zIndex, s = parseInt(o, 10);
    return s > r ? s : r;
  }, 0);
  return n ? n + 1 : null;
}, za = {
  fit: "fit",
  flip: "flip"
}, Ii = {
  left: "left",
  bottom: "bottom",
  top: "top"
}, ic = function(e, t, i = {}) {
  let n, r, a, o, s = 0;
  i = i || {};
  const l = function() {
    s = i.leading === !1 ? 0 : (/* @__PURE__ */ new Date()).getTime(), n = null, o = e.apply(r, a), n || (r = a = null);
  };
  return function() {
    const d = (/* @__PURE__ */ new Date()).getTime();
    !s && i.leading === !1 && (s = d);
    const c = t - (d - s);
    return r = this, a = arguments, c <= 0 || c > t ? (n && (clearTimeout(n), n = null), s = d, o = e.apply(r, a), n || (r = a = null)) : !n && i.trailing !== !1 && (n = setTimeout(l, c)), o;
  };
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let nc = class {
  constructor(t) {
    this._dom = t;
  }
  alignElement(t) {
    const { anchor: i, element: n, anchorAlign: r, elementAlign: a, offset: o } = t, s = this._dom.hasOffsetParent(n) ? this.relativeRect(i, n, o) : this.absoluteRect(i, n, o);
    return this._dom.align({
      anchorAlign: r,
      anchorRect: s,
      elementAlign: a,
      elementRect: this._dom.offset(n)
    });
  }
  absoluteRect(t, i, n) {
    const r = this._dom, a = nr(r.offset(t), n), o = r.stackingElementOffset(i), s = Ud(a, o), l = r.stackingElementScroll(i), d = r.addScroll(s, l), c = this.elementScrollPosition(t, i), h = r.removeScroll(d, c);
    return h.left += window.scrollX || window.pageXOffset, h.top += window.scrollY || window.pageYOffset, h;
  }
  elementScrollPosition(t, i) {
    return t ? { x: 0, y: 0 } : this._dom.scrollPosition(i);
  }
  relativeRect(t, i, n) {
    return nr(this._dom.position(t, i), n);
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let rc = class {
  addOffset(t, i) {
    return {
      left: t.left + i.left,
      top: t.top + i.top
    };
  }
  align(t) {
    return Nd(t);
  }
  boundingOffset(t) {
    return Vd(t);
  }
  getWindow() {
    return Rt() ? window : null;
  }
  isBodyOffset(t) {
    return Td(t);
  }
  hasOffsetParent(t) {
    if (!t)
      return !1;
    const i = t.offsetParent;
    return i && !(i.nodeName === "BODY" && window.getComputedStyle(i).position === "static");
  }
  offset(t) {
    return t ? si(t) : null;
  }
  staticOffset(t) {
    if (!t)
      return null;
    const { left: i, top: n } = t.style;
    t.style.left = "0px", t.style.top = "0px";
    const r = si(t);
    return t.style.left = i, t.style.top = n, r;
  }
  position(t, i) {
    if (!t || !i)
      return null;
    const n = lo(t, i);
    return jd(t, n);
  }
  relativeOffset(t, i) {
    return _d(this.offset(t), i, this.isBodyOffset(t));
  }
  addScroll(t, i) {
    return Ad(t, i);
  }
  removeScroll(t, i) {
    return Gd(t, i);
  }
  restrictToView(t) {
    return Kd(t);
  }
  scrollPosition(t) {
    return so(t);
  }
  scrollableParents(t) {
    return Jd(t);
  }
  stackingElementOffset(t) {
    const i = this.getRelativeContextElement(t);
    return i ? si(i) : null;
  }
  stackingElementScroll(t) {
    const i = this.getRelativeContextElement(t);
    return i ? {
      x: i.scrollLeft,
      y: i.scrollTop
    } : { x: 0, y: 0 };
  }
  stackingElementViewPort(t) {
    const i = this.getRelativeContextElement(t);
    return i ? {
      height: i.scrollHeight,
      width: i.scrollWidth
    } : null;
  }
  getRelativeContextElement(t) {
    if (!t || !ec)
      return null;
    let i = t.parentElement;
    for (; i; ) {
      if (window.getComputedStyle(i).transform !== "none")
        return i;
      i = i.parentElement;
    }
    return null;
  }
  useRelativePosition(t) {
    return !!this.getRelativeContextElement(t);
  }
  windowViewPort(t) {
    return ro(t);
  }
  zIndex(t, i) {
    return tc(t, i);
  }
  zoomLevel() {
    return !cn() || !Rt() ? 1 : parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2));
  }
  isZoomed() {
    return this.zoomLevel() > 1;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let ac = class {
  constructor(t) {
    this._dom = t;
  }
  positionElement(t) {
    const {
      anchor: i,
      currentLocation: n,
      element: r,
      anchorAlign: a,
      elementAlign: o,
      collisions: s
    } = t, l = this._dom, d = t.viewPort || l.stackingElementViewPort(r) || l.windowViewPort(r), c = nr(l.offset(i), n), h = Wd(l.staticOffset(r), n), p = this.elementRect(r, h), g = l.restrictToView({
      anchorAlign: a,
      anchorRect: c,
      collisions: s,
      elementAlign: o,
      elementRect: p,
      viewPort: d
    });
    return {
      flipped: g.flipped,
      offset: l.addOffset(h, g.offset)
    };
  }
  elementRect(t, i) {
    return this._dom.removeScroll(i, this._dom.scrollPosition(t));
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const sc = {
  name: "@progress/kendo-vue-popup",
  productName: "Kendo UI for Vue",
  productCode: "KENDOUIVUE",
  productCodes: ["KENDOUIVUE"],
  publishDate: 1763478390,
  version: "7.0.2",
  licensingDocsUrl: "https://www.telerik.com/kendo-vue-ui/my-license/?utm_medium=product&utm_source=kendovue&utm_campaign=kendo-ui-vue-purchase-license-keys-warning"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function oc(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const lc = 100, uc = 1, dc = {
  left: -1e3,
  top: 0
}, Va = "k-animation-container-shown", Ta = "k-popup", ea = /* @__PURE__ */ k({
  name: "Popup",
  props: {
    appendTo: {
      type: String,
      default: ""
    },
    anchor: {
      type: [String, Object],
      default: ""
    },
    className: String,
    id: String,
    popupClass: String,
    collision: {
      type: Object,
      default: function() {
        return {
          horizontal: za.fit,
          vertical: za.flip
        };
      }
    },
    anchorAlign: {
      type: Object,
      default: function() {
        return {
          horizontal: Ii.left,
          vertical: Ii.bottom
        };
      }
    },
    popupAlign: {
      type: Object,
      default: function() {
        return {
          horizontal: Ii.left,
          vertical: Ii.top
        };
      }
    },
    offset: {
      type: Object,
      default: function() {
        return dc;
      }
    },
    show: {
      type: Boolean,
      default: !1
    },
    animate: {
      type: [Boolean, Object],
      default: !0
    },
    direction: {
      type: String,
      default: "down"
    },
    onOpen: Function,
    onClose: Function
  },
  inject: {
    kCurrentZIndex: {
      default: null
    }
  },
  data() {
    return {
      hasMounted: !1
    };
  },
  created() {
    Ve(sc), this.mountedAppendTo = void 0, this.mountedAnchor = void 0, this._clonedElement = void 0, this._flipped = !1, this._offsetTop = 0, this._offsetLeft = -1e3, this._exitingAnimation = !1, this._prevShow = !1, this._prevShow = this.$props.show, this._domService = new rc(), this._alignService = new nc(this._domService), this._positionService = new ac(this._domService), this.reposition = ic(this.reposition.bind(this), Zd);
  },
  mounted() {
    se && (this.mountedAppendTo = this.appendTo ? this.getParentRef(this.appendTo) : document.body, this.mountedAnchor = this.anchor ? this.getParentRef(this.anchor, !0) : document.body), this._parentElement = this.$el.parentElement, this._clonedElement = this.$el.cloneNode(!0), this.hasMounted = !0, this.mountedAppendTo.appendChild(this.$el);
  },
  updated() {
    this._prevShow = this.$props.show;
  },
  unmounted() {
    this.detachRepositionHandlers();
  },
  beforeUnmount() {
    this._parentElement && this._parentElement.appendChild(this.$el);
  },
  methods: {
    onOpened() {
      const e = this.$el;
      this.$props.show && e.classList.add(Va), this.attachRepositionHandlers(e), this.$emit("open", {
        target: this
      });
    },
    onClosing() {
      this.$props.show || this.$el.classList.remove(Va), this.detachRepositionHandlers();
    },
    onClosed() {
      this._exitingAnimation && (this._exitingAnimation = !1, this.$forceUpdate()), this.$emit("close", {
        target: this
      });
    },
    transitionDuration() {
      const e = this.$props.animate;
      let t = 0, i = 0;
      return e && (e === !0 ? t = i = void 0 : (t = e.openDuration, i = e.closeDuration)), {
        transitionEnterDuration: t,
        transitionExitDuration: i
      };
    },
    getParentRef(e, t) {
      let i = this.$parent;
      for (; !i.$refs[e]; ) {
        if (i && i.kendoAnchorRef && t)
          return i.kendoAnchorRef;
        if (i = i.$parent, !i && se)
          return document.getElementById(e) || document.body;
      }
      return i.$refs[e].$el || i.$refs[e];
    },
    position(e, t, i) {
      const {
        anchorAlign: n,
        popupAlign: r,
        collision: a,
        offset: o
      } = e, s = i ? this.mountedAnchor : document.body, l = this._alignService.alignElement({
        anchor: i ? s : void 0,
        element: t,
        elementAlign: r,
        anchorAlign: n,
        offset: o
      });
      return this._positionService.positionElement({
        anchor: s,
        anchorAlign: n,
        collisions: a,
        element: t,
        currentLocation: l,
        elementAlign: r
      });
    },
    calculatePosition(e, t) {
      if (!t || !Rt() || !se)
        return {
          flipped: !1,
          offset: e.offset
        };
      const i = B(this), n = document.createElement("div"), r = this.$el && this.$el.firstChild && this.$el.firstChild.firstChild ? this.$el.firstChild.firstChild.cloneNode(!0) : null, a = r && r.getBoundingClientRect ? r : this._clonedElement;
      if (a)
        n.appendChild(a);
      else {
        const s = i && i[0].props ? i[0].props.class : "", l = this.$props.popupClass;
        n.innerHTML = `<div class="k-animation-container k-animation-container-relative">
                        <div class="k-popup k-animation-container k-animation-container-relative">
                            <div class="${s} ${l}" >
                            </div>
                        </div>
                </div>`;
      }
      if (t.appendChild(n), n && n.firstChild) {
        const s = n.firstChild;
        s.style.position = "absolute", s.style.visibility = "hidden", s.style.display = "block", s.style.left = "-1000", s.style.top = "0";
        const l = i && i[0].props ? i[0].props.style : {};
        if (l)
          for (const [d, c] of Object.entries(l))
            s.style[d] = c;
      }
      const o = this.position(e, n.firstChild, this.$props.anchor);
      return n.parentNode.removeChild(n), o;
    },
    attachRepositionHandlers(e) {
      this.detachRepositionHandlers(), this._scrollableParents = this._domService.scrollableParents(this.$props.anchor ? this.mountedAnchor : e), this._scrollableParents.map((t) => t.addEventListener("scroll", this.reposition)), window.addEventListener("resize", this.reposition);
    },
    detachRepositionHandlers() {
      this._scrollableParents && (this._scrollableParents.map((e) => e.removeEventListener("scroll", this.reposition)), this._scrollableParents = void 0), window.removeEventListener("resize", this.reposition);
    },
    reposition() {
      this._clonedElement = this.$el.cloneNode(!0), this.$forceUpdate();
    },
    getCurrentZIndex() {
      return this.kCurrentZIndex ? this.kCurrentZIndex + uc : lc;
    }
  },
  render() {
    const {
      className: e,
      popupClass: t,
      show: i,
      id: n
    } = this.$props, r = B(this), a = r, o = Rt() ? this.$props.appendTo ? this.mountedAppendTo || this.getParentRef(this.$props.appendTo) : document.body : void 0;
    if (this.$props.show) {
      const h = this.calculatePosition(this.$props, o);
      this._offsetLeft = h.offset.left, this._offsetTop = h.offset.top, this._flipped = !!h.flipped;
    }
    const s = this.$props.direction === "down" ? this._flipped ? "up" : "down" : this._flipped ? "down" : "up", {
      transitionEnterDuration: l,
      transitionExitDuration: d
    } = this.transitionDuration(), c = this.getCurrentZIndex();
    return this._exitingAnimation = this._exitingAnimation || this._prevShow && !i, this.hasMounted ? i || this._exitingAnimation && o ? u(to, {
      id: n,
      role: this.appendTo ? "" : "region",
      componentChildClassName: [t, Ta],
      className: e,
      onEntered: this.onOpened,
      onExiting: this.onClosing,
      onExited: this.onClosed,
      direction: s,
      style: {
        zIndex: c,
        position: "absolute",
        top: this._offsetTop + "px",
        left: this._offsetLeft + "px"
      },
      transitionEnterDuration: l,
      transitionExitDuration: d,
      appear: i
    }, oc(a) ? a : {
      default: () => [a]
    }) : null : u("div", {
      style: {
        display: "none"
      },
      class: e
    }, [u("div", {
      class: [t, Ta]
    }, [r])]);
  }
});
var cc = {
  en: {
    name: "en",
    identity: {
      version: {
        _unicodeVersion: "14.0.0",
        _cldrVersion: "41"
      },
      language: "en"
    },
    territory: "US",
    numbers: {
      symbols: {
        decimal: ".",
        group: ",",
        list: ";",
        percentSign: "%",
        plusSign: "+",
        minusSign: "-",
        exponential: "E",
        superscriptingExponent: "×",
        perMille: "‰",
        infinity: "∞",
        nan: "NaN",
        timeSeparator: ":",
        approximatelySign: "~"
      },
      decimal: {
        patterns: [
          "n"
        ],
        groupSize: [
          3
        ]
      },
      scientific: {
        patterns: [
          "nEn"
        ],
        groupSize: []
      },
      percent: {
        patterns: [
          "n%"
        ],
        groupSize: [
          3
        ]
      },
      currency: {
        patterns: [
          "$n"
        ],
        groupSize: [
          3
        ],
        "unitPattern-count-one": "n $",
        "unitPattern-count-other": "n $"
      },
      currencies: {
        BGN: {
          displayName: "Bulgarian Lev",
          "displayName-count-one": "Bulgarian lev",
          "displayName-count-other": "Bulgarian leva",
          symbol: "BGN"
        },
        EUR: {
          displayName: "Euro",
          "displayName-count-one": "euro",
          "displayName-count-other": "euros",
          symbol: "€",
          "symbol-alt-narrow": "€"
        },
        USD: {
          displayName: "US Dollar",
          "displayName-count-one": "US dollar",
          "displayName-count-other": "US dollars",
          symbol: "$",
          "symbol-alt-narrow": "$"
        }
      },
      localeCurrency: "USD",
      accounting: {
        patterns: [
          "$n",
          "($n)"
        ],
        groupSize: [
          3
        ]
      }
    },
    calendar: {
      gmtFormat: "GMT{0}",
      gmtZeroFormat: "GMT",
      patterns: {
        d: "M/d/y",
        D: "EEEE, MMMM d, y",
        m: "MMM d",
        M: "MMMM d",
        y: "MMM y",
        Y: "MMMM y",
        F: "EEEE, MMMM d, y h:mm:ss a",
        g: "M/d/y h:mm a",
        G: "M/d/y h:mm:ss a",
        t: "h:mm a",
        T: "h:mm:ss a",
        s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
      },
      dateTimeFormats: {
        full: "{1} 'at' {0}",
        long: "{1} 'at' {0}",
        medium: "{1}, {0}",
        short: "{1}, {0}",
        availableFormats: {
          Bh: "h B",
          Bhm: "h:mm B",
          Bhms: "h:mm:ss B",
          d: "d",
          E: "ccc",
          EBhm: "E h:mm B",
          EBhms: "E h:mm:ss B",
          Ed: "d E",
          Ehm: "E h:mm a",
          EHm: "E HH:mm",
          Ehms: "E h:mm:ss a",
          EHms: "E HH:mm:ss",
          Gy: "y G",
          GyMd: "M/d/y GGGGG",
          GyMMM: "MMM y G",
          GyMMMd: "MMM d, y G",
          GyMMMEd: "E, MMM d, y G",
          h: "h a",
          H: "HH",
          hm: "h:mm a",
          Hm: "HH:mm",
          hms: "h:mm:ss a",
          Hms: "HH:mm:ss",
          hmsv: "h:mm:ss a v",
          Hmsv: "HH:mm:ss v",
          hmv: "h:mm a v",
          Hmv: "HH:mm v",
          M: "L",
          Md: "M/d",
          MEd: "E, M/d",
          MMM: "LLL",
          MMMd: "MMM d",
          MMMEd: "E, MMM d",
          MMMMd: "MMMM d",
          "MMMMW-count-one": "'week' W 'of' MMMM",
          "MMMMW-count-other": "'week' W 'of' MMMM",
          ms: "mm:ss",
          y: "y",
          yM: "M/y",
          yMd: "M/d/y",
          yMEd: "E, M/d/y",
          yMMM: "MMM y",
          yMMMd: "MMM d, y",
          yMMMEd: "E, MMM d, y",
          yMMMM: "MMMM y",
          yQQQ: "QQQ y",
          yQQQQ: "QQQQ y",
          "yw-count-one": "'week' w 'of' Y",
          "yw-count-other": "'week' w 'of' Y"
        }
      },
      timeFormats: {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
      },
      dateFormats: {
        full: "EEEE, MMMM d, y",
        long: "MMMM d, y",
        medium: "MMM d, y",
        short: "M/d/yy"
      },
      days: {
        format: {
          abbreviated: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ],
          narrow: [
            "S",
            "M",
            "T",
            "W",
            "T",
            "F",
            "S"
          ],
          short: [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
          ],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ]
        },
        "stand-alone": {
          abbreviated: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ],
          narrow: [
            "S",
            "M",
            "T",
            "W",
            "T",
            "F",
            "S"
          ],
          short: [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
          ],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ]
        }
      },
      months: {
        format: {
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          narrow: [
            "J",
            "F",
            "M",
            "A",
            "M",
            "J",
            "J",
            "A",
            "S",
            "O",
            "N",
            "D"
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
        },
        "stand-alone": {
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          narrow: [
            "J",
            "F",
            "M",
            "A",
            "M",
            "J",
            "J",
            "A",
            "S",
            "O",
            "N",
            "D"
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
        }
      },
      quarters: {
        format: {
          abbreviated: [
            "Q1",
            "Q2",
            "Q3",
            "Q4"
          ],
          narrow: [
            "1",
            "2",
            "3",
            "4"
          ],
          wide: [
            "1st quarter",
            "2nd quarter",
            "3rd quarter",
            "4th quarter"
          ]
        },
        "stand-alone": {
          abbreviated: [
            "Q1",
            "Q2",
            "Q3",
            "Q4"
          ],
          narrow: [
            "1",
            "2",
            "3",
            "4"
          ],
          wide: [
            "1st quarter",
            "2nd quarter",
            "3rd quarter",
            "4th quarter"
          ]
        }
      },
      dayPeriods: {
        format: {
          abbreviated: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          },
          narrow: {
            midnight: "mi",
            am: "a",
            "am-alt-variant": "am",
            noon: "n",
            pm: "p",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          },
          wide: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          }
        },
        "stand-alone": {
          abbreviated: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          },
          narrow: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          },
          wide: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          }
        }
      },
      eras: {
        format: {
          wide: {
            0: "Before Christ",
            1: "Anno Domini",
            "0-alt-variant": "Before Common Era",
            "1-alt-variant": "Common Era"
          },
          abbreviated: {
            0: "BC",
            1: "AD",
            "0-alt-variant": "BCE",
            "1-alt-variant": "CE"
          },
          narrow: {
            0: "B",
            1: "A",
            "0-alt-variant": "BCE",
            "1-alt-variant": "CE"
          }
        }
      },
      dateFields: {
        era: {
          wide: "era",
          short: "era",
          narrow: "era"
        },
        year: {
          wide: "year",
          short: "yr.",
          narrow: "yr."
        },
        quarter: {
          wide: "quarter",
          short: "qtr.",
          narrow: "qtr."
        },
        month: {
          wide: "month",
          short: "mo.",
          narrow: "mo."
        },
        week: {
          wide: "week",
          short: "wk.",
          narrow: "wk."
        },
        weekOfMonth: {
          wide: "week of month",
          short: "wk. of mo.",
          narrow: "wk. of mo."
        },
        day: {
          wide: "day",
          short: "day",
          narrow: "day"
        },
        dayOfYear: {
          wide: "day of year",
          short: "day of yr.",
          narrow: "day of yr."
        },
        weekday: {
          wide: "day of the week",
          short: "day of wk.",
          narrow: "day of wk."
        },
        weekdayOfMonth: {
          wide: "weekday of the month",
          short: "wkday. of mo.",
          narrow: "wkday. of mo."
        },
        dayperiod: {
          short: "AM/PM",
          wide: "AM/PM",
          narrow: "AM/PM"
        },
        hour: {
          wide: "hour",
          short: "hr.",
          narrow: "hr."
        },
        minute: {
          wide: "minute",
          short: "min.",
          narrow: "min."
        },
        second: {
          wide: "second",
          short: "sec.",
          narrow: "sec."
        },
        zone: {
          wide: "time zone",
          short: "zone",
          narrow: "zone"
        },
        millisecond: {
          narrow: "ms",
          short: "ms",
          wide: "millisecond"
        }
      }
    }
  },
  supplemental: {
    likelySubtags: {
      en: "en-Latn-US"
    },
    currencyData: {
      region: {
        US: [
          {
            USD: {
              _from: "1792-01-01"
            }
          }
        ]
      }
    },
    weekData: {
      firstDay: {
        US: "sun"
      },
      weekendStart: {
        "001": "sat"
      },
      weekendEnd: {
        "001": "sun"
      }
    }
  }
};
function hn(e) {
  return typeof e == "string";
}
const hc = {
  NoLocale: "Missing locale info for '{0}'",
  NoCurrency: "Cannot determine currency information. Please load the locale currencies data.",
  NoSupplementalCurrency: "Cannot determine currency. Please load the supplemental currencyData.",
  NoCurrencyRegion: "No currency data for region '{0}'",
  NoCurrencyDisplay: "Cannot determine currency display information. Please load the locale currencies data. The default culture does not include the all currencies data.",
  NoGMTInfo: "Cannot determine locale GMT format. Please load the locale timeZoneNames data.",
  NoWeekData: "Cannot determine locale first day of week. Please load the supplemental weekData.",
  NoFirstDay: "Cannot determine locale first day of week. Please load the supplemental weekData. The default culture includes only the 'en-US' first day info.",
  NoValidCurrency: "Cannot determine a default currency for the {0} locale. Please specify explicitly the currency with the format options.",
  NoDateFieldNames: "Cannot determine the locale date field names. Please load the locale dateFields data."
};
var pc = /\{(\d+)}?\}/g, ta = function(t) {
  var i = t.name, n = t.message;
  if (!i || !n)
    throw new Error("{ name: string, message: string } object is required!");
  this.name = i, this.message = n;
};
ta.prototype.formatMessage = function() {
  for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
  var n = gc(t), r = this.message.replace(pc, function(a, o) {
    return n[parseInt(o, 10)];
  });
  return this.name + ": " + r;
};
ta.prototype.error = function() {
  for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
  return new Error(this.formatMessage(t));
};
var gc = function(e) {
  return e.reduce(function(t, i) {
    return t.concat(i);
  }, []);
}, fc = function(e) {
  var t = function(i, n) {
    return i[n] = new ta({ name: n, message: e[n] }), i;
  };
  return Object.keys(e).reduce(t, {});
}, et = fc(hc);
function mc(e, t) {
  var i = e.split("-"), n = i[0], r = i[1], a = i[2];
  return Re[e] || t.indexOf(a) !== -1 && Re[n + "-" + a] || t.indexOf(r) !== -1 && Re[n + "-" + r] || Re[n];
}
function vc(e, t) {
  for (var i = Re.supplemental.likelySubtags, n = 0; n < t.length; n++) {
    var r = i[e + "-" + t[n]];
    if (r)
      return r;
  }
  if (i[e])
    return i[e];
}
var Re = cc;
function vi(e) {
  var t;
  return hn(e) ? t = Et(e) : t = e, t;
}
function Et(e) {
  if (Re[e])
    return Re[e];
  var t = Re.supplemental.likelySubtags;
  if (t) {
    var i = e.split("-"), n = i[0], r = i.slice(1), a = vc(n, r), o = a ? mc(a, r) : null;
    if (o)
      return o;
  }
  throw et.NoLocale.error(e);
}
var uo = "decimal", pn = "currency", co = "accounting", Gt = "percent", ho = "scientific", gn = "$", ia = "%", Bt = "n", bc = ";", xc = ",", vt = ".", R = "", Kt = "en";
function yc(e, t) {
  var i = Re.supplemental.likelySubtags, n = e.split("-");
  if (i) {
    var r = i[e] || i[n[0]];
    r && (n = r.split("-"));
  }
  if (t)
    for (var a = n.length - 1; a >= 1; a--) {
      var o = n[a];
      (o === t.variant || o === t.script) && n.splice(a, 1);
    }
  var s = n.length;
  if (s > 1) {
    var l = n[s - 1];
    return l.toUpperCase();
  }
}
function po(e) {
  if (e.territory)
    return e.territory;
  var t = e.name, i = e.identity, n;
  return i && i.territory ? n = i.territory : n = yc(t, i), e.territory = n, n;
}
function $c(e, t) {
  t === void 0 && (t = Kt);
  var i = Et(t), n = i.calendar.dateFields;
  if (!n)
    throw et.NoDateFieldNames.error();
  var r = n[e.type] || {};
  return r[e.nameType] || r.wide;
}
function kc(e) {
  for (var t = [], i = 0; i < e.length; i++)
    t.push(e[i].toLowerCase());
  return t;
}
function wc(e) {
  var t = {};
  for (var i in e)
    t[i] = e[i].toLowerCase();
  return t;
}
function Sc(e) {
  var t = Array.isArray(e) ? kc(e) : wc(e);
  return t;
}
function go(e, t) {
  var i = t.type, n = t.nameType, r = t.standAlone, a = t.lower, o = vi(e), s = r ? "stand-alone" : "format", l = (a ? "lower-" : R) + n, d = o.calendar[i][s], c = d[l];
  return !c && a && (c = d[l] = Sc(d[n])), c;
}
function Sn(e) {
  var t = e.split("-"), i = parseInt(t[0], 10), n = parseInt(t[1], 10) - 1, r = parseInt(t[2], 10);
  return new Date(i, n, r);
}
var Cc = et.NoCurrency, Ic = et.NoCurrencyDisplay, Dc = et.NoSupplementalCurrency, Ec = et.NoCurrencyRegion, Mc = et.NoValidCurrency, Pa = 2, Cn = "symbol", Fc = "XXX", Ha = {
  "001": "USD",
  // 001 refers to world. not sure if it is correct to assume USD but seems better than throw an error
  150: "EUR"
  // 150 territory for Europe
};
function fo(e, t, i) {
  var n = vi(e), r = n.numbers.currencies;
  if (!r) {
    if (i)
      throw Cc.error();
    return;
  }
  var a = r[t];
  if (!a) {
    if (i)
      throw Ic.error();
    return;
  }
  return a;
}
function Lc(e, t) {
  return t.length - e.length;
}
function Oc(e) {
  for (var t, i, n, r, a = 0; a < e.length; a++) {
    var o = e[a], s = Object.keys(o)[0], l = o[s];
    if (s !== Fc && l._tender !== "false" && l._from)
      if (l._to) {
        if (!n) {
          var c = Sn(l._from), h = Sn(l._to);
          (!i || i.to < h || i.from < c) && (t = s, i = {
            from: c,
            to: h
          });
        }
      } else {
        var d = Sn(l._from);
        (!r || r < d) && (n = s, r = d);
      }
  }
  return n || t;
}
function Nc(e, t, i) {
  i === void 0 && (i = !0);
  var n = fo(e, t, i);
  if (n) {
    if (!n.displays) {
      var r = [t];
      for (var a in n)
        r.push(n[a]);
      r.sort(Lc), n.displays = r;
    }
    return n.displays;
  }
}
function Ac(e, t) {
  var i = t.value, n = t.currency, r = t.currencyDisplay;
  if (r === void 0 && (r = Cn), r === "code")
    return n;
  var a = fo(e, n, !0), o;
  return r === Cn ? o = a["symbol-alt-narrow"] || a[Cn] || n : typeof i > "u" || i !== 1 ? o = a["displayName-count-other"] : o = a["displayName-count-one"], o;
}
function _c(e) {
  var t = Pa, i = Pa, n = ((Re.supplemental.currencyData || {}).fractions || {})[e];
  return n && n._digits && (i = t = parseInt(n._digits, 10)), {
    minimumFractionDigits: t,
    maximumFractionDigits: i
  };
}
function zc(e, t) {
  if (t === void 0 && (t = !0), Ha[e])
    return Ha[e];
  var i = Re.supplemental.currencyData;
  if (!i) {
    if (t)
      throw Dc.error();
    return;
  }
  var n = i.region[e];
  if (!n) {
    if (t)
      throw Ec.error(e);
    return;
  }
  var r = Oc(n);
  return r;
}
function mo(e, t) {
  var i = vi(e), n = i.numbers;
  if (!n.localeCurrency) {
    var r = zc(po(i), t);
    if (!r && t)
      throw Mc.error(i.name);
    n.localeCurrency = r;
  }
  return n.localeCurrency;
}
var Vc = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], Tc = "001", Pc = et.NoWeekData, Hc = et.NoFirstDay;
function vo(e) {
  var t = vi(e);
  if (!isNaN(t.firstDay))
    return t.firstDay;
  var i = Re.supplemental.weekData;
  if (!i)
    throw Pc.error();
  var n = i.firstDay[po(t)] || i.firstDay[Tc];
  if (!n)
    throw Hc.error();
  return t.firstDay = Vc.indexOf(n), t.firstDay;
}
et.NoWeekData;
function Rc(e) {
  var t = vi(e);
  return t.numbers.symbols;
}
function bo(e) {
  return 1 / e === -1 / 0;
}
function xo(e, t) {
  t === void 0 && (t = {}), t.currency || (t.currency = mo(e, !0));
  var i = Ac(e, t);
  return i;
}
function yo(e, t, i, n, r) {
  var a = r.numbers.symbols, o = e.indexOf(a.decimal), s = n.groupSize.slice(), l = s.shift(), d = o !== -1 ? o : i + 1, c = e.substring(t, d), h = e, p = c.length;
  if (p >= l) {
    for (var g = p, m = []; g > -1; ) {
      var f = c.substring(g - l, g);
      f && m.push(f), g -= l;
      var b = s.shift();
      if (l = b !== void 0 ? b : l, l === 0) {
        f = c.substring(0, g), f && m.push(f);
        break;
      }
    }
    c = m.reverse().join(a.group), h = e.substring(0, t) + c + e.substring(d);
  }
  return h;
}
function na(e) {
  return e === pn || e === co;
}
function Fe(e, t, i) {
  t === void 0 && (t = 2), i === void 0 && (i = !1);
  var n = t - String(e).length, r = e;
  if (n > 0) {
    var a = new Array(n + 1).join("0");
    r = i ? e + a : a + e;
  }
  return r;
}
var Bc = 20;
function oi(e, t) {
  var i = e, n = t || 0;
  return i = i.toString().split("e"), i = Math.round(+(i[0] + "e" + (i[1] ? Number(i[1]) + n : n))), i = i.toString().split("e"), i = +(i[0] + "e" + (i[1] ? Number(i[1]) - n : -n)), i.toFixed(Math.min(n, Bc));
}
var jc = 3, Gc = 0, Kc = /0+$/;
function qc(e) {
  var t = e.minimumFractionDigits, i = e.maximumFractionDigits, n = e.style, r = na(n), a;
  return r && (a = _c(e.currency)), t === void 0 && (t = r ? a.minimumFractionDigits : 0), i === void 0 && (n === Gt ? i = Math.max(t, Gc) : r ? i = Math.max(t, a.maximumFractionDigits) : i = Math.max(t, jc)), {
    minimumFractionDigits: t,
    maximumFractionDigits: i
  };
}
function Wc(e, t, i) {
  for (var n = R, r = 0, a = t.length; r < a; r++) {
    var o = t.charAt(r);
    o === Bt ? n += e : o === gn || o === ia ? n += i : n += o;
  }
  return n;
}
function Uc(e, t) {
  var i = e.numbers.currency, n = t !== 1 ? i["unitPattern-count-other"] : i["unitPattern-count-one"];
  return t < 0 && (n = n.replace(Bt, "-" + Bt)), n;
}
function Yc(e, t, i) {
  var n = i.numbers.symbols, r = t.style, a = na(r);
  if (r === ho) {
    var o = t.minimumFractionDigits !== void 0 ? e.toExponential(t.minimumFractionDigits) : e.toExponential();
    return o.replace(vt, n.decimal);
  }
  var s = e, l;
  a && (t.value = s, l = xo(i, t)), r === Gt && (s *= 100, l = n.percentSign);
  var d = qc(t), c = d.minimumFractionDigits, h = d.maximumFractionDigits;
  s = oi(s, h);
  var p = s < 0, g = bo(e), m = s.split(vt), f = m[0], b = Fe(m[1] ? m[1].replace(Kc, R) : R, c, !0);
  p && (f = f.substring(1)), t.minimumIntegerDigits && (f = Fe(f, t.minimumIntegerDigits));
  var v = t.useGrouping !== !1 ? yo(f, 0, f.length, t, i) : f;
  b && (v += n.decimal + b);
  var $;
  if (a && t.currencyDisplay === "name")
    $ = Uc(i, e);
  else {
    var y = t.patterns;
    $ = p || g ? y[1] || "-" + y[0] : y[0];
  }
  if ($ === Bt && !p)
    return v;
  var C = Wc(v, $, l);
  return C;
}
var Xc = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g, $o = "__??__";
function ko(e, t) {
  var i = e.format;
  i.indexOf(ia) !== -1 && (e.style = Gt, e.symbol = t.numbers.symbols.percentSign, e.number *= 100), i.indexOf(gn) !== -1 && (e.style = pn, e.symbol = xo(t));
}
function wo(e) {
  var t = e.format;
  if (t.indexOf("'") > -1 || t.indexOf('"') > -1 || t.indexOf("\\") > -1) {
    var i = e.literals = [];
    e.format = t.replace(Xc, function(n) {
      var r = n.charAt(0).replace("\\", R), a = n.slice(1).replace(r, R);
      return i.push(a), $o;
    });
  }
}
function Jc(e, t) {
  var i = e;
  if (t)
    for (var n = t.length, r = 0; r < n; r++)
      i = i.replace($o, t[r]);
  return i;
}
var hi = "#", pi = "0", Zc = /(\.(?:[0-9]*[1-9])?)0+$/g, Qc = /\.$/, eh = /,/g;
function th(e, t) {
  var i;
  return t === 0 ? i = Zc : i = new RegExp("(\\.[0-9]{" + t + "}[1-9]*)0+$", "g"), e.replace(i, "$1").replace(Qc, R);
}
function ih(e) {
  var t = e.number, i = e.format, n = i.indexOf(vt);
  if (n !== -1) {
    var r = i.lastIndexOf(pi) - n, a = i.lastIndexOf(hi) - n, o = r > -1, s = a > -1, l = t.toString().split("e");
    l[1] ? l = oi(t, Math.abs(l[1])) : l = l[0], l = l.split(vt)[1] || R;
    var d = l.length, c = -1;
    !o && !s ? (e.format = i.substring(0, n) + i.substring(n + 1), n = -1, d = 0) : o && r > a ? d = r : a > r && (s && d > a ? d = a : o && d < r && (d = r), c = o ? r : 0), d > -1 && (t = oi(t, d), c > -1 && (t = th(t, c)));
  } else
    t = oi(t);
  e.negative && t * -1 >= 0 && !e.negativeZero && (e.negative = !1), e.number = t, e.decimalIndex = n;
}
function nh(e) {
  return e.indexOf(hi) === -1 && e.indexOf(pi) === -1;
}
function rh(e) {
  var t = e.number, i = e.format;
  if (i = i.split(bc), (e.negative || e.negativeZero) && i[1])
    i = i[1], e.hasNegativeFormat = !0;
  else if (t === 0) {
    var n = i[2];
    i = n || i[0], n && nh(n) && (e.constant = n);
  } else
    i = i[0];
  e.format = i;
}
function ah(e) {
  e.hasGroup = e.format.indexOf(xc) > -1, e.hasGroup && (e.format = e.format.replace(eh, R));
}
function Ra(e, t, i) {
  var n;
  return e === -1 && t !== -1 ? n = t : e !== -1 && t === -1 ? n = e : n = i ? Math.min(e, t) : Math.max(e, t), n;
}
function sh(e) {
  var t = e.format, i = t.indexOf(hi), n = t.indexOf(pi), r = Ra(i, n, !0);
  i = t.lastIndexOf(hi), n = t.lastIndexOf(pi);
  var a = Ra(i, n);
  r === t.length && (a = r), e.start = r, e.end = a, e.lastZeroIndex = n;
}
function oh(e, t, i) {
  var n = e;
  if (t === pn || t === Gt) {
    n = R;
    for (var r = 0, a = e.length; r < a; r++) {
      var o = e.charAt(r);
      n += o === gn || o === ia ? i : o;
    }
  }
  return n;
}
function lh(e, t) {
  var i = e.start, n = e.end, r = e.negative, a = e.negativeZero, o = e.format, s = e.decimalIndex, l = e.lastZeroIndex, d = e.hasNegativeFormat, c = e.hasGroup, h = e.number, p = h.toString().split(vt), g = o.length, m = p[0], f = p[1] || R, b = m.length, v = R;
  h = o.substring(0, i), (r || a) && !d && (h += "-");
  for (var $ = i; $ < g; $++) {
    var y = o.charAt($);
    if (s === -1) {
      if (n - $ < b) {
        h += m;
        break;
      }
    } else if (l !== -1 && l < $ && (v = R), s - $ <= b && s - $ > -1 && (h += m, $ = s), s === $) {
      h += (f ? t.numbers.symbols.decimal : R) + f, $ += n - s + 1;
      continue;
    }
    y === pi ? (h += y, v = y) : y === hi && (h += v);
  }
  return c && (h = yo(h, i + (r && !d ? 1 : 0), Math.max(n, b + i), t.numbers.decimal, t)), n >= i && (h += o.substring(n + 1)), h;
}
function uh(e, t) {
  var i = e.number;
  return e.start !== -1 && (i = lh(e, t), i = oh(i, e.style, e.symbol), i = Jc(i, e.literals)), i;
}
function dh(e, t, i) {
  var n = {
    negative: e < 0,
    number: Math.abs(e),
    negativeZero: bo(e),
    format: t
  };
  return rh(n), n.constant ? n.constant : (wo(n), ko(n, i), ah(n), ih(n), sh(n), uh(n, i));
}
var ch = /^(n|c|p|e|a)(\d*)$/i;
function hh(e) {
  var t = ch.exec(e);
  if (t) {
    var i = {
      style: uo
    }, n = t[1].toLowerCase();
    return n === "c" ? i.style = pn : n === "a" ? i.style = co : n === "p" ? i.style = Gt : n === "e" && (i.style = ho), t[2] && (i.minimumFractionDigits = i.maximumFractionDigits = parseInt(t[2], 10)), i;
  }
}
function So(e) {
  var t;
  return hn(e) ? t = hh(e) : t = e, t;
}
function Co(e, t, i) {
  if (t === void 0 && (t = Bt), i === void 0 && (i = Kt), e == null)
    return R;
  if (!isFinite(e))
    return String(e);
  var n = Et(i), r = So(t), a;
  if (r) {
    var o = r.style || uo;
    a = Yc(e, Object.assign({}, n.numbers[o], r), n);
  } else
    a = dh(e, t, n);
  return a;
}
function ra(e) {
  return typeof e == "number";
}
var ph = /[eE][-+]?[0-9]+/, Ba = /\u00A0/g;
function ja(e, t) {
  if (t.length > 1) {
    var i = (t[1] || R).replace(gn, R).split(Bt);
    if (e.indexOf(i[0]) > -1 && e.indexOf(i[1]) > -1)
      return e.replace(i[0], R).replace(i[1], R);
  }
}
function gh(e, t, i) {
  var n = So(i) || {}, r = na(n.style), a = e, o, s = n.currency || mo(t, r);
  if (s) {
    var l = Nc(t, s, r);
    if (l)
      for (var d = 0; d < l.length; d++) {
        var c = l[d];
        if (a.includes(c)) {
          a = a.replace(c, R), r = !0;
          break;
        }
      }
    if (r) {
      var h = ja(a, t.numbers.currency.patterns) || ja(a, t.numbers.accounting.patterns);
      h && (o = !0, a = h);
    }
  }
  return {
    number: a,
    negative: o
  };
}
function fh(e, t) {
  var i = t.literals, n = e;
  if (i)
    for (var r = 0; r < i.length; r++)
      n = n.replace(i[r], R);
  return n;
}
function mh(e) {
  var t = String(e), i = t.indexOf(vt), n = 2, r = e / Math.pow(10, n);
  if (i === -1 || String(r).length <= t.length + n)
    return r;
  var a = t.length - i + 1 + n;
  return parseFloat(r.toFixed(a));
}
function vh(e, t, i) {
  if (t === void 0 && (t = Kt), i === void 0 && (i = {}), !e && e !== 0)
    return null;
  if (ra(e))
    return e;
  var n = Et(t), r = n.numbers.symbols, a = e.toString(), o = i || {}, s;
  if (hn(i) && (o = { format: i }, wo(o), a = fh(a, o), ko(o, n)), (o.style === Gt || a.indexOf(r.percentSign) > -1) && (a = a.replace(r.percentSign, R), s = !0), ph.test(a))
    return a = parseFloat(a.replace(r.decimal, vt)), isNaN(a) ? null : a;
  var l = gh(a, n, o), d = l.negative, c = l.number;
  a = String(c).trim();
  var h = a.indexOf("-");
  if (h > 0)
    return null;
  var p = h > -1;
  return p = d !== void 0 ? d : p, a = a.replace("-", R).replace(Ba, " ").split(r.group.replace(Ba, " ")).join(R).replace(r.decimal, vt), a = parseFloat(a), isNaN(a) ? a = null : p && (a *= -1), a && s && (a = mh(a)), a;
}
var bh = /\{(\d+)}/g;
function aa(e) {
  var t = arguments;
  return e.replace(bh, function(i, n) {
    var r = t[parseInt(n, 10) + 1];
    return r;
  });
}
var xh = 120, yh = 20, Ga = [2, 1, 5, 3, 4], $h = -2, kh = -1, wh = 1, Sh = 2, bi = {};
bi[$h.toString()] = 8;
bi[kh.toString()] = 6;
bi[Sh.toString()] = 6;
bi[wh.toString()] = 3;
var Ch = {
  numeric: 1,
  "2-digit": 2,
  short: 3,
  long: 4,
  narrow: 5
}, Ih = /[hHmsSzZoOvVxX]/;
function Dh(e) {
  return e.hour12 ? "h" : "H";
}
var Ka = [{
  key: "era",
  specifier: "G"
}, {
  key: "year",
  specifier: "y"
}, {
  key: "month",
  specifier: "M"
}, {
  key: "day",
  specifier: "d"
}, {
  key: "weekday",
  specifier: "E"
}, {
  key: "hour",
  getSpecifier: Dh
}, {
  key: "minute",
  specifier: "m"
}, {
  key: "second",
  specifier: "s"
}, {
  key: "timeZoneName",
  specifier: "z"
}], qa = {
  e: "c",
  E: "c",
  M: "L",
  Q: "q"
}, In = {}, Pt = {};
function Dn(e) {
  return In[e] || (In[e] = new RegExp(e + "+")), In[e];
}
function Hi(e) {
  for (var t = [], i = e.charAt(0), n = i, r = 1; r < e.length; r++) {
    var a = e.charAt(r);
    a === n ? i += a : (t.push(i), i = n = a);
  }
  return t.push(i), t;
}
function En(e, t) {
  var i = e.length, n = -Number.MAX_VALUE, r, a;
  for (var o in t) {
    for (var s = [], l = o.replace("v", "z"), d = 0, c = 0; c < i; c++) {
      var h = e[c], p = Dn(h[0]), g = (p.exec(l) || [])[0];
      if (!g)
        d -= xh;
      else if (l = l.replace(g, R), g.length !== h.length) {
        var m = Math.max(Math.min(Ga[g.length] - Ga[h.length], 2), -2);
        d -= bi[m];
      }
      if (s.push(g), d < n)
        break;
    }
    l.length && (d -= Hi(l).length * yh), d > n && (n = d, r = s, a = t[o]);
  }
  a = a.replace("v", "z");
  for (var f = 0; f < i; f++) {
    var b = r[f];
    if (b && b !== e[f]) {
      var v = r[f][0];
      a = a.replace(Dn(v), e[f]), qa[v] && (a = a.replace(Dn(qa[v]), e[f]));
    }
  }
  return a;
}
function Eh(e, t, i) {
  Pt[i] || (Pt[i] = {}), Pt[i][e] = t;
}
function Mh(e, t) {
  var i = t.calendar.dateTimeFormats.availableFormats;
  if (i[e])
    return i[e];
  if (Pt[t.name] && Pt[t.name][e])
    return Pt[t.name][e];
  var n = e.search(Ih), r;
  if (n > 0) {
    var a = e.substr(0, n), o = e.substr(n);
    r = aa(
      t.calendar.dateTimeFormats.short,
      //should be deterimed based on specifiers
      i[o] || En(Hi(o), i),
      i[a] || En(Hi(a), i)
    );
  } else
    r = En(Hi(e), i);
  return Eh(e, r, t.name), r;
}
function Fh(e) {
  for (var t = [], i = 0; i < Ka.length; i++) {
    var n = Ka[i], r = n.key, a = e[r];
    if (a) {
      var o = n.specifier || n.getSpecifier(e);
      t.push(o.repeat(Ch[a]));
    }
  }
  return t.join(R);
}
function sa(e, t) {
  var i = t.calendar, n;
  if (hn(e))
    i.patterns[e] ? n = i.patterns[e] : n = e;
  else if (e) {
    if (e.pattern)
      return e.pattern;
    var r = e.skeleton;
    r || (e.datetime ? n = aa(i.dateTimeFormats[e.datetime], i.timeFormats[e.datetime], i.dateFormats[e.datetime]) : e.date ? n = i.dateFormats[e.date] : e.time ? n = i.timeFormats[e.time] : r = Fh(e)), r && (n = Mh(r, t));
  }
  return n || (n = i.patterns.d), n;
}
function Io(e) {
  var t;
  return e <= 3 ? t = "abbreviated" : e === 4 ? t = "wide" : e === 5 ? t = "narrow" : e === 6 && (t = "short"), t;
}
function tt(e, t, i, n, r) {
  return go(e, {
    type: t,
    nameType: Io(i),
    standAlone: n,
    lower: r
  });
}
function Wa(e) {
  return typeof e == "function";
}
function oa(e) {
  return !!e && Wa(e.getTime) && Wa(e.getMonth);
}
var Ua = "month", Di = "hour", Ei = "zone", Mn = "weekday", Ya = "quarter", Lh = {
  G: "era",
  y: "year",
  q: Ya,
  Q: Ya,
  M: Ua,
  L: Ua,
  d: "day",
  E: Mn,
  c: Mn,
  e: Mn,
  h: Di,
  H: Di,
  k: Di,
  K: Di,
  m: "minute",
  s: "second",
  S: "millisecond",
  a: "dayperiod",
  x: Ei,
  X: Ei,
  z: Ei,
  Z: Ei
}, Qt = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|k{1,2}|K{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;
function Oh(e, t, i) {
  var n = vo(i), r;
  return e < n ? r = 7 - n + e : r = e - n, r + 1;
}
function Do(e, t, i, n) {
  return t <= 2 ? Fe(e + 1, t) : tt(i, "months", t, n)[e];
}
function Eo(e, t, i, n) {
  var r = Math.floor(e.getMonth() / 3);
  return t < 3 ? r + 1 : tt(i, "quarters", t, n)[r];
}
function fn(e, t, i) {
  var n = i.shortHours, r = i.optionalMinutes, a = i.separator, o = i.localizedName, s = i.zZeroOffset, l = e.getTimezoneOffset() / 60;
  if (l === 0 && s)
    return "Z";
  var d = l <= 0 ? "+" : "-", c = Math.abs(l).toString().split("."), h = c[1] || 0, p = d + (n ? c[0] : Fe(c[0], 2));
  if ((h || !r) && (p += (a ? ":" : R) + Fe(h, 2)), o) {
    var g = l === 0 ? t.calendar.gmtZeroFormat : t.calendar.gmtFormat;
    p = aa(g, p);
  }
  return p;
}
function Mo(e, t, i, n) {
  var r;
  return t < 3 ? r = Oh(e.getDay(), t, i) : r = tt(i, "days", t, n)[e.getDay()], r;
}
var oe = {};
oe.d = function(e, t) {
  return Fe(e.getDate(), t);
};
oe.E = function(e, t, i) {
  return tt(i, "days", t)[e.getDay()];
};
oe.M = function(e, t, i) {
  return Do(e.getMonth(), t, i, !1);
};
oe.L = function(e, t, i) {
  return Do(e.getMonth(), t, i, !0);
};
oe.y = function(e, t) {
  var i = e.getFullYear();
  return t === 2 && (i = i % 100), Fe(i, t);
};
oe.h = function(e, t) {
  var i = e.getHours() % 12 || 12;
  return Fe(i, t);
};
oe.H = function(e, t) {
  return Fe(e.getHours(), t);
};
oe.k = function(e, t) {
  return Fe(e.getHours() || 24, t);
};
oe.K = function(e, t) {
  return Fe(e.getHours() % 12, t);
};
oe.m = function(e, t) {
  return Fe(e.getMinutes(), t);
};
oe.s = function(e, t) {
  return Fe(e.getSeconds(), t);
};
oe.S = function(e, t) {
  var i = e.getMilliseconds(), n;
  return i !== 0 ? n = Fe(String(i / 1e3).split(".")[1].substr(0, t), t, !0) : n = Fe(R, t), n;
};
oe.a = function(e, t, i) {
  return tt(i, "dayPeriods", t)[e.getHours() < 12 ? "am" : "pm"];
};
oe.z = function(e, t, i) {
  return fn(e, i, {
    shortHours: t < 4,
    optionalMinutes: t < 4,
    separator: !0,
    localizedName: !0
  });
};
oe.Z = function(e, t, i) {
  return fn(e, i, {
    separator: t > 3,
    localizedName: t === 4,
    zZeroOffset: t === 5
  });
};
oe.x = function(e, t, i) {
  return fn(e, i, {
    optionalMinutes: t === 1,
    separator: t === 3 || t === 5
  });
};
oe.X = function(e, t, i) {
  return fn(e, i, {
    optionalMinutes: t === 1,
    separator: t === 3 || t === 5,
    zZeroOffset: !0
  });
};
oe.G = function(e, t, i) {
  var n = e.getFullYear() >= 0 ? 1 : 0;
  return tt(i, "eras", t)[n];
};
oe.e = Mo;
oe.c = function(e, t, i) {
  return Mo(e, t, i, !0);
};
oe.q = function(e, t, i) {
  return Eo(e, t, i, !0);
};
oe.Q = Eo;
function Fo(e, t, i) {
  if (i === void 0 && (i = Kt), !oa(e))
    return e ?? R;
  var n = Et(i), r = sa(t, n);
  return r.replace(Qt, function(a) {
    var o = a.length, s;
    return a.includes("'") || a.includes('"') ? s = a.slice(1, o - 1) : s = oe[a[0]](e, o, n), s;
  });
}
function Xa(e, t, i) {
  var n = e.getTimezoneOffset(), r = new Date(e.getTime() + (t - i) * 6e4), a = r.getTimezoneOffset();
  return new Date(r.getTime() + (a - n) * 6e4);
}
function Nh(e, t) {
  !t && e.getHours() === 23 && e.setHours(e.getHours() + 2);
}
var Ah = /([+|-]\d{1,2})(:?)(\d{2})?/, _h = /^\/Date\((.*?)\)\/$/, zh = /[+-]\d*/, Vh = {
  2: /^\d{1,2}/,
  3: /^\d{1,3}/,
  4: /^\d{4}/
}, Th = /\d+/, Ja = "{0}", Ph = /^ */, Hh = / *$/, Rh = [
  "yyyy/MM/dd HH:mm:ss",
  "yyyy/MM/dd HH:mm",
  "yyyy/MM/dd",
  "E MMM dd yyyy HH:mm:ss",
  "yyyy-MM-ddTHH:mm:ss.SSSSSSSXXX",
  "yyyy-MM-ddTHH:mm:ss.SSSXXX",
  "yyyy-MM-ddTHH:mm:ss.SSXXX",
  "yyyy-MM-ddTHH:mm:ssXXX",
  "yyyy-MM-ddTHH:mm:ss.SSSSSSS",
  "yyyy-MM-ddTHH:mm:ss.SSS",
  "yyyy-MM-ddTHH:mmXXX",
  "yyyy-MM-ddTHH:mmX",
  "yyyy-MM-ddTHH:mm:ss",
  "yyyy-MM-ddTHH:mm",
  "yyyy-MM-dd HH:mm:ss",
  "yyyy-MM-dd HH:mm",
  "yyyy-MM-dd",
  "HH:mm:ss",
  "HH:mm"
], Za = ["G", "g", "F", "Y", "y", "M", "m", "D", "d", "y", "T", "t"], Bh = 2029;
function Ge(e, t, i) {
  return !(e >= t && e <= i);
}
function $e(e, t) {
  for (var i = t.format, n = t.idx, r = 0; i[n] === e; )
    r++, n++;
  return r > 0 && (n -= 1), t.idx = n, r;
}
function at(e, t) {
  var i = e ? Vh[e] || new RegExp("^\\d{1," + e + "}") : Th, n = t.value.substr(t.valueIdx, e).match(i);
  return n ? (n = n[0], t.valueIdx += n.length, parseInt(n, 10)) : null;
}
function It(e, t, i) {
  for (var n = 0, r = e.length, a, o, s = 0, l = 0, d; n < r; n++)
    a = e[n], o = a.length, d = t.value.substr(t.valueIdx, o), d = d.toLowerCase(), d === a && o > s && (s = o, l = n);
  return s ? (t.valueIdx += s, l + 1) : null;
}
function Fn(e) {
  var t = !1;
  return e.value.charAt(e.valueIdx) === e.format[e.idx] && (e.valueIdx++, t = !0), t;
}
function jh(e) {
  var t = e.gmtFormat, i = e.gmtZeroFormat;
  if (!t)
    throw et.NoGMTInfo.error();
  return [t.replace(Ja, R).toLowerCase(), i.replace(Ja, R).toLowerCase()];
}
function mn(e, t, i) {
  var n = i.shortHours, r = i.noSeparator, a = i.optionalMinutes, o = i.localizedName, s = i.zLiteral;
  if (e.UTC = !0, s && e.value.charAt(e.valueIdx) === "Z")
    return e.valueIdx++, !1;
  if (o && !It(jh(t.calendar), e))
    return !0;
  var l = Ah.exec(e.value.substr(e.valueIdx, 6));
  if (!l)
    return !o;
  var d = l[1], c = l[3], h = parseInt(d, 10), p = l[2], g = parseInt(c, 10);
  if (isNaN(h) || !n && d.length !== 3 || !a && isNaN(g) || r && p || (isNaN(g) && (g = null), Ge(h, -12, 13) || g && Ge(g, 0, 59)))
    return !0;
  e.valueIdx += l[0].length, e.hoursOffset = h, e.minutesOffset = g;
}
function Lo(e, t, i) {
  var n = $e(e, t), r = tt(i, "months", n, e === "L", !0), a = n < 3 ? at(2, t) : It(r, t);
  if (a === null || Ge(a, 1, 12))
    return !0;
  t.month = a - 1;
}
function Oo(e, t, i) {
  var n = $e(e, t), r = tt(i, "days", n, e === "c", !0), a = n < 3 ? at(1, t) : It(r, t);
  if (!a && a !== 0 || Ge(a, 1, 7))
    return !0;
}
var de = {};
de.d = function(e) {
  $e("d", e);
  var t = at(2, e);
  if (t === null || Ge(t, 1, 31))
    return !0;
  e.day === null && (e.day = t);
};
de.E = function(e, t) {
  var i = $e("E", e), n = It(tt(t, "days", i, !1, !0), e);
  if (n === null)
    return !0;
};
de.M = function(e, t) {
  return Lo("M", e, t);
};
de.L = function(e, t) {
  return Lo("L", e, t);
};
de.y = function(e) {
  var t = $e("y", e), i = at(t === 1 ? void 0 : t, e);
  if (i === null)
    return !0;
  if (t === 2) {
    var n = (/* @__PURE__ */ new Date()).getFullYear();
    i = n - n % 100 + i, i > Bh && (i -= 100);
  }
  e.year = i;
};
de.h = function(e) {
  $e("h", e);
  var t = at(2, e);
  if (t === 12 && (t = 0), t === null || Ge(t, 0, 11))
    return !0;
  e.hours = t;
};
de.K = function(e) {
  $e("K", e);
  var t = at(2, e);
  if (t === null || Ge(t, 0, 11))
    return !0;
  e.hours = t;
};
de.a = function(e, t) {
  var i = $e("a", e), n = tt(t, "dayPeriods", i, !1, !0), r = It([n.pm], e);
  if (!r && !It([n.am], e))
    return !0;
  e.pmHour = r;
};
de.H = function(e) {
  $e("H", e);
  var t = at(2, e);
  if (t === null || Ge(t, 0, 23))
    return !0;
  e.hours = t;
};
de.k = function(e) {
  $e("k", e);
  var t = at(2, e);
  if (t === null || Ge(t, 1, 24))
    return !0;
  e.hours = t === 24 ? 0 : t;
};
de.m = function(e) {
  $e("m", e);
  var t = at(2, e);
  if (t === null || Ge(t, 0, 59))
    return !0;
  e.minutes = t;
};
de.s = function(e) {
  $e("s", e);
  var t = at(2, e);
  if (t === null || Ge(t, 0, 59))
    return !0;
  e.seconds = t;
};
de.S = function(e) {
  var t = $e("S", e), i = e.value.substr(e.valueIdx, t), n = null;
  if (isNaN(parseInt(i, 10)) || (n = parseFloat("0." + i, 10), n = oi(n, 3), n *= 1e3, e.valueIdx += t), n === null || Ge(n, 0, 999))
    return !0;
  e.milliseconds = n;
};
de.z = function(e, t) {
  var i = $e("z", e), n = i < 4, r = mn(e, t, {
    shortHours: n,
    optionalMinutes: n,
    localizedName: !0
  });
  if (r)
    return r;
};
de.Z = function(e, t) {
  var i = $e("Z", e), n = mn(e, t, {
    noSeparator: i < 4,
    zLiteral: i === 5,
    localizedName: i === 4
  });
  if (n)
    return n;
};
de.x = function(e, t) {
  var i = $e("x", e), n = mn(e, t, {
    noSeparator: i !== 3 && i !== 5,
    optionalMinutes: i === 1
  });
  if (n)
    return n;
};
de.X = function(e, t) {
  var i = $e("X", e), n = mn(e, t, {
    noSeparator: i !== 3 && i !== 5,
    optionalMinutes: i === 1,
    zLiteral: !0
  });
  if (n)
    return n;
};
de.G = function(e, t) {
  var i = $e("G", e), n = tt(t, "eras", i, !1, !0), r = It([n[0], n[1]], e);
  if (r === null)
    return !0;
};
de.e = function(e, t) {
  return Oo("e", e, t);
};
de.c = function(e, t) {
  return Oo("c", e, t);
};
function Gh(e) {
  var t = e.year, i = e.month, n = e.day, r = e.hours, a = e.minutes, o = e.seconds, s = e.milliseconds, l = e.pmHour, d = e.UTC, c = e.hoursOffset, h = e.minutesOffset, p = r !== null || a !== null || o || null, g = /* @__PURE__ */ new Date(), m;
  return t === null && i === null && n === null && p ? (t = g.getFullYear(), i = g.getMonth(), n = g.getDate()) : (t === null && (t = g.getFullYear()), n === null && (n = 1)), l && r < 12 && (r += 12), d ? (c && (r += -c), h && (a += -h * (c < 0 ? -1 : 1)), m = new Date(Date.UTC(t, i, n, r, a, o, s))) : (m = new Date(t, i, n, r, a, o, s), Nh(m, r)), t < 100 && m.setFullYear(t), m.getDate() !== n && d === void 0 ? null : m;
}
function Kh(e, t) {
  var i = Ph.exec(t)[0], n = Hh.exec(t)[0];
  return "" + i + e + n;
}
function qh(e, t, i) {
  for (var n = sa(t, i).split(R), r = {
    format: n,
    idx: 0,
    value: Kh(e, t),
    valueIdx: 0,
    year: null,
    month: null,
    day: null,
    hours: null,
    minutes: null,
    seconds: null,
    milliseconds: null
  }, a = n.length, o = !1; r.idx < a; r.idx++) {
    var s = n[r.idx];
    if (o)
      s === "'" && (o = !1), Fn(r);
    else if (de[s]) {
      var l = de[s](r, i);
      if (l)
        return null;
    } else if (s === "'")
      o = !0, Fn(r);
    else if (!Fn(r))
      return null;
  }
  return r.valueIdx < e.length ? null : Gh(r) || null;
}
function Wh(e) {
  var t = e.substr(0, 1) === "-" ? -1 : 1, i = e.substring(1);
  return i = parseInt(i.substr(0, 2), 10) * 60 + parseInt(i.substring(2), 10), t * i;
}
function Uh(e) {
  if (e && e.indexOf("/D") === 0) {
    var t = _h.exec(e);
    if (t) {
      t = t[1];
      var i = zh.exec(t.substring(1));
      return t = new Date(parseInt(t, 10)), i && (i = Wh(i[0]), t = Xa(t, t.getTimezoneOffset(), 0), t = Xa(t, 0, -1 * i)), t;
    }
  }
}
function Yh(e) {
  for (var t = [], i = e.patterns, n = Za.length, r = 0; r < n; r++)
    t.push(i[Za[r]]);
  return t.concat(Rh);
}
function Xh(e, t, i) {
  if (i === void 0 && (i = Kt), !e)
    return null;
  if (oa(e))
    return e;
  var n = String(e).trim(), r = Uh(n);
  if (r)
    return r;
  var a = Et(i), o = t || Yh(a.calendar);
  o = Array.isArray(o) ? o : [o];
  for (var s = o.length, l = 0; l < s; l++)
    if (r = qh(n, o[l], a), r)
      return r;
  return r;
}
var Jh = {
  month: {
    type: "months",
    minLength: 3,
    standAlone: "L"
  },
  quarter: {
    type: "quarters",
    minLength: 3,
    standAlone: "q"
  },
  weekday: {
    type: "days",
    minLength: {
      E: 0,
      c: 3,
      e: 3
    },
    standAlone: "c"
  },
  dayperiod: {
    type: "dayPeriods",
    minLength: 0
  },
  era: {
    type: "eras",
    minLength: 0
  }
}, Qa = "literal";
function Ln(e, t) {
  var i = e[e.length - 1];
  i && i.type === Qa ? i.pattern += t : e.push({
    type: Qa,
    pattern: t
  });
}
function Zh(e) {
  return e === "h" || e === "K";
}
function Qh(e, t) {
  t === void 0 && (t = Kt);
  for (var i = Et(t), n = sa(e, i), r = [], a = Qt.lastIndex = 0, o = Qt.exec(n); o; ) {
    var s = o[0];
    if (a < o.index && Ln(r, n.substring(a, o.index)), s.startsWith('"') || s.startsWith("'"))
      Ln(r, s);
    else {
      var l = s[0], d = Lh[l], c = {
        type: d,
        pattern: s
      };
      d === "hour" && (c.hour12 = Zh(s));
      var h = Jh[d];
      if (h) {
        var p = ra(h.minLength) ? h.minLength : h.minLength[l], g = s.length;
        g >= p && (c.names = {
          type: h.type,
          nameType: Io(g),
          standAlone: h.standAlone === l
        });
      }
      r.push(c);
    }
    a = Qt.lastIndex, o = Qt.exec(n);
  }
  return a < n.length && Ln(r, n.substring(a)), r;
}
var ep = /\{(\d+)(:[^}]+)?\}/g;
function No(e, t, i) {
  if (t) {
    if (oa(e))
      return Fo(e, t, i);
    if (ra(e))
      return Co(e, t, i);
  }
  return e ?? R;
}
function es(e, t, i) {
  return e.replace(ep, function(n, r, a) {
    var o = t[parseInt(r, 10)];
    return No(o, a ? a.substring(1) : R, i);
  });
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let tp = class {
  /**
   * Creates a new instance of the internationalization service.
   *
   * @param locale - The locale that will be used by the internationalization methods.
   */
  constructor(t) {
    if (this.locale = t, t === "" && process.env.NODE_ENV !== "production")
      throw "Locale should not be empty string";
  }
  /**
   * Formats a string with placeholders such as
   * `Total amount {0:c}`.
   *
   * @param format - The format string.
   * @param values - One or more values to output in the format string placeholders.
   * @return - The formatted string.
   */
  format(t, ...i) {
    return i.length === 1 && Array.isArray(i[0]) ? es(t, i[0], this.locale) : es(t, i, this.locale);
  }
  /**
   * Converts a `Date` object to a string based on the specified format.
   * If no format is provided, the default short date format is used.
   *
   * @param value - The date which will be formatted.
   * @param format - The format string or options.
   * @return - The formatted date.
   */
  formatDate(t, i) {
    return Fo(t, i, this.locale);
  }
  /**
   * Converts an object to a string based on the specified format.
   *
   * @param value - The value which will be formatted.
   * @param format - The format to use.
   * @return - The formatted object.
   */
  toString(t, i) {
    return No(t, i, this.locale);
  }
  /**
   * Converts a string to a `Number`.
   *
   * @param value - The string which will be parsed.
   * @param format - The format string or options.
   * @return - The parsed number.
   */
  parseNumber(t, i) {
    return vh(t, this.locale, i);
  }
  /**
   * Converts a string to a `Date` object based on the specified format.
   *
   * @param value - The string which will be converted.
   * @param format - The format strings or options.
   * @return - The parsed date.
   */
  parseDate(t, i) {
    return Xh(t, i, this.locale);
  }
  /**
   * Converts a `Number` to a string based on the specified format.
   *
   * @param value - The number which will be formatted.
   * @param format - The format string or options.
   * @return - The formatted number.
   */
  formatNumber(t, i) {
    return Co(t, i, this.locale);
  }
  /**
   * Returns a localized date field name based on specific `dateFieldName` options.
   *
   * @param options - The detailed configuration for the desired date field name.
   * @returns - The localized date field name from the current locale based on the option.
   */
  dateFieldName(t) {
    return $c(t, this.locale);
  }
  /**
   * Returns the day names from the current locale based on the option.
   *
   * @param options - The detailed configuration for the desired date format.
   * @return - The day names from the current locale based on the option.
   */
  dateFormatNames(t) {
    return go(this.locale, t);
  }
  /**
   * Splits the date format into objects which contain
   * information about each part of the pattern.
   *
   * @param format - The format string or options.
   * @returns - The date format parts.
   */
  splitDateFormat(t) {
    return Qh(t, this.locale);
  }
  /**
   * Returns the number symbols from the current locale.
   *
   * @return - The number symbols from the current locale.
   */
  numberSymbols() {
    return Rc(this.locale);
  }
  /**
   * Returns the first day index, starting from Sunday.
   *
   * @return - The index of the first day of the week (0 == Sunday).
   */
  firstDay() {
    return vo(this.locale);
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ft = /* @__PURE__ */ Object.create({});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let ip = class {
  constructor(t) {
    if (this.language = t, t === "" && process.env.NODE_ENV !== "production")
      throw "Language should not be an empty string";
  }
  /**
   * Provides a string based on a key for the current language.
   * When no string for the current language is available under this key,
   * the `defaultValue` is returned.
   *
   * @param key - The key which identifies the string for the current language.
   * @param defaultValue - The default value which will be returned when no string
   * for the current language is available under the key.
   * @return - The string for the current language.
   */
  toLanguageString(t, i) {
    return this.language && Ft[this.language] && Ft[this.language].hasOwnProperty(t) ? Ft[this.language][t] : Object.keys(this)[0] && Ft[Object.values(this)[0]] && Ft[Object.values(this)[0]].hasOwnProperty(t) ? Ft[Object.values(this)[0]][t] : i;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function xt(e) {
  if (!e && process.env.NODE_ENV !== "production")
    throw `Passed component - ${e} is invalid.`;
  const t = e.kendoIntlService;
  return t && Object.keys(t).some((i) => i === "locale") ? t : new tp("en");
}
function Z(e) {
  if (!e && process.env.NODE_ENV !== "production")
    throw `Passed component - ${e} is invalid.`;
  const t = e.kendoLocalizationService;
  return t && Object.keys(t).some((i) => i === "language") ? t : new ip();
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ri = "pager.info", Bi = "pager.firstPage", ji = "pager.previousPage", Gi = "pager.nextPage", Ki = "pager.lastPage", qi = "pager.itemsPerPage", Wi = "pager.pageInputAriaLabel", Ui = "pager.smallPageSelectorAriaLabel", Yi = "pager.pageSelection", Xi = "pager.page", Ji = "pager.of", Zi = "pager.totalPages", np = "filter.eqOperator", rp = "filter.groupFilterAriaLabel", ap = "filter.notEqOperator", sp = "filter.isNullOperator", op = "filter.isNotNullOperator", lp = "filter.isEmptyOperator", up = "filter.isNotEmptyOperator", dp = "filter.startsWithOperator", cp = "filter.containsOperator", hp = "filter.notContainsOperator", pp = "filter.endsWithOperator", gp = "filter.gteOperator", fp = "filter.gtOperator", mp = "filter.lteOperator", vp = "filter.ltOperator", bp = "filter.isTrue", xp = "filter.isFalse", yp = "filter.afterOrEqualOperator", $p = "filter.afterOperator", kp = "filter.beforeOperator", wp = "filter.beforeOrEqualOperator", Sp = "filter.andLogic", Cp = "filter.orLogic", Ip = "filter.addExpression", Dp = "filter.addGroup", Ep = "filter.close", Mp = "columnMenu.filterChooseOperator", Fp = "columnMenu.filterClearButton", Lp = "columnMenu.filterSubmitButton", Op = "columnMenu.filterTitle", Np = "columnMenu.sortAscending", Ap = "columnMenu.sortDescending", _p = "columnMenu.filterEqOperator", zp = "columnMenu.filterNotEqOperator", Vp = "columnMenu.filterIsNullOperator", Tp = "columnMenu.filterIsNotNullOperator", Pp = "columnMenu.filterIsEmptyOperator", Hp = "columnMenu.filterIsNotEmptyOperator", Rp = "columnMenu.filterStartsWithOperator", Bp = "columnMenu.filterContainsOperator", jp = "columnMenu.filterNotContainsOperator", Gp = "columnMenu.filterEndsWithOperator", Kp = "columnMenu.filterGteOperator", qp = "columnMenu.filterGtOperator", Wp = "columnMenu.filterLteOperator", Up = "columnMenu.filterLtOperator", Yp = "columnMenu.filterIsTrue", Xp = "columnMenu.filterAfterOrEqualOperator", Jp = "columnMenu.filterAfterOperator", Zp = "columnMenu.filterBeforeOperator", Qp = "columnMenu.filterBeforeOrEqualOperator", eg = "columnMenu.filterAndLogic", tg = "columnMenu.filterOrLogic", ig = "grid.searchPlaceholder", ng = "grid.selectAllRows", rg = "grid.filterCheckAll", ag = "sort.ariaLabel", sg = "filter.ariaLabel", og = "filter.groupAriaLabel", lg = "filter.expressionAriaLabel", ug = "filter.expressionDropdownAriaLabel", dg = "filter.expressionOperatorDropdownAriaLabel", cg = "filter.enumFilterDropdownAriaLabel", hg = "filter.numericFilterAriaLabel", pg = "filter.textFilterAriaLabel", gg = "filter.dateFilterAriaLabel", fg = "filter.dropdownOperatorAriaLabel", Be = {
  [rp]: "Group Filter",
  [Ui]: "Select page",
  [Wi]: "Pager - Page number input",
  [qi]: "items per page",
  [Yi]: "Select page",
  [Ri]: "{0} - {1} of {2} items",
  [Bi]: "Go to the first page",
  [ji]: "Go to the previous page",
  [Gi]: "Go to the next page",
  [Ki]: "Go to the last page",
  [Xi]: "Page",
  [Ji]: "of",
  [Zi]: "{0}",
  [ig]: "Search",
  [ng]: "Select All Rows",
  [rg]: "Check All",
  [ag]: "Sortable",
  [sg]: "Filter",
  [np]: "Is equal to",
  [ap]: "Is not equal to",
  [sp]: "Is null",
  [op]: "Is not null",
  [lp]: "Is empty",
  [up]: "Is not empty",
  [dp]: "Starts with",
  [cp]: "Contains",
  [hp]: "Does not contain",
  [pp]: "Ends with",
  [gp]: "Is greater than or equal to",
  [fp]: "Is greater than",
  [mp]: "Is less than or equal to",
  [vp]: "Is less than",
  [bp]: "Is true",
  [xp]: "Is false",
  [yp]: "Is after or equal to",
  [$p]: "Is after",
  [kp]: "Is before",
  [wp]: "Is before or equal to",
  [Sp]: "And",
  [Cp]: "Or",
  [Ip]: "Add Expression",
  [Dp]: "Add Group",
  [Ep]: "Remove",
  [og]: "Filter toolbar",
  [lg]: "Filter expression row",
  [ug]: "Filter dropdown",
  [dg]: "Filter operator dropdown",
  [cg]: "Select True/False",
  [hg]: "Enter number",
  [pg]: "Enter text",
  [gg]: "Enter date",
  [fg]: "Choose Operator",
  [Mp]: "Choose Operator",
  [Fp]: "Clear",
  [Lp]: "Filter",
  [Op]: "Filter",
  [Np]: "Sort Ascending",
  [Ap]: "Sort Descending",
  [_p]: "Is equal to",
  [zp]: "Is not equal to",
  [Vp]: "Is null",
  [Tp]: "Is not null",
  [Pp]: "Is empty",
  [Hp]: "Is not empty",
  [Rp]: "Starts with",
  [Bp]: "Contains",
  [jp]: "Does not contain",
  [Gp]: "Ends with",
  [Kp]: "Is greater than or equal to",
  [qp]: "Is greater than",
  [Wp]: "Is less than or equal to",
  [Up]: "Is less than",
  [Yp]: "Is true",
  [Xp]: "Is after or equal to",
  [Jp]: "Is after",
  [Zp]: "Is before",
  [Qp]: "Is before or equal to",
  [eg]: "And",
  [tg]: "Or",
  "grid.filterEqOperator": "Is equal to",
  "grid.filterNotEqOperator": "Is not equal to",
  "grid.filterIsNullOperator": "Is null",
  "grid.filterIsNotNullOperator": "Is not null",
  "grid.filterIsEmptyOperator": "Is empty",
  "grid.filterIsNotEmptyOperator": "Is not empty",
  "grid.filterStartsWithOperator": "Starts with",
  "grid.filterContainsOperator": "Contains",
  "grid.filterNotContainsOperator": "Does not contain",
  "grid.filterEndsWithOperator": "Ends with",
  "grid.filterGteOperator": "Is greater than or equal to",
  "grid.filterGtOperator": "Is greater than",
  "grid.filterLteOperator": "Is less than or equal to",
  "grid.filterLtOperator": "Is less than",
  "grid.filterIsTrue": "Is true",
  "grid.filterIsFalse": "Is false",
  "grid.filterBooleanAll": "(All)",
  "grid.filterAfterOrEqualOperator": "Is after or equal to",
  "grid.filterAfterOperator": "Is after",
  "grid.filterBeforeOperator": "Is before",
  "grid.filterBeforeOrEqualOperator": "Is before or equal to",
  "grid.filterAndLogic": "And",
  "grid.filterOrLogic": "Or"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const mg = /* @__PURE__ */ k({
  name: "list-container",
  emits: {
    mousedown: (e) => !0,
    blur: (e) => !0,
    open: (e) => !0,
    close: (e) => !0
  },
  props: {
    width: [String, Number],
    dir: String,
    itemsCount: Number,
    popupSettings: {
      type: Object,
      default: function() {
        return {
          animate: !0,
          height: "200px"
        };
      }
    }
  },
  created() {
    this.kendoAnchorRef = void 0;
  },
  methods: {
    onMouseDown(e) {
      this.$emit("mousedown", e);
    },
    onBlur(e) {
      this.$emit("blur", e);
    },
    onOpen(e) {
      this.$emit("open", e);
    },
    onClose(e) {
      this.$emit("close", e);
    }
  },
  render() {
    const e = B(this), {
      width: t,
      dir: i,
      popupSettings: n
    } = this.$props, {
      popupClass: r,
      className: a,
      animate: o,
      anchor: s,
      anchorAlign: l,
      show: d,
      itemsCount: c,
      appendTo: h,
      collision: p,
      direction: g,
      offset: m,
      popupAlign: f,
      style: b,
      width: v,
      popupStyle: $
    } = n;
    return u(ea, {
      ref: "popup",
      style: {
        ...b,
        width: v || t,
        direction: i
      },
      popupClass: a,
      animate: o,
      anchor: s,
      anchorAlign: l,
      show: d,
      onOpen: this.onOpen,
      onClose: this.onClose,
      appendTo: h,
      collision: p,
      direction: g,
      offset: m,
      popupAlign: f
    }, {
      default: () => [u("div", {
        class: r,
        style: $,
        onMousedown: this.onMouseDown,
        onFocusout: this.onBlur
      }, [e])]
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ao = {
  name: "@progress/kendo-vue-inputs",
  productName: "Kendo UI for Vue",
  productCode: "KENDOUIVUE",
  productCodes: ["KENDOUIVUE"],
  publishDate: 1763478516,
  version: "7.0.2",
  licensingDocsUrl: "https://www.telerik.com/kendo-vue-ui/my-license/?utm_medium=product&utm_source=kendovue&utm_campaign=kendo-ui-vue-purchase-license-keys-warning"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const rr = "labels.optional", vg = {
  [rr]: "(Optional)"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const bg = {
  name: "@progress/kendo-vue-labels",
  productName: "Kendo UI for Vue",
  productCode: "KENDOUIVUE",
  productCodes: ["KENDOUIVUE"],
  publishDate: 1763478439,
  version: "7.0.2",
  licensingDocsUrl: "https://www.telerik.com/kendo-vue-ui/my-license/?utm_medium=product&utm_source=kendovue&utm_campaign=kendo-ui-vue-purchase-license-keys-warning"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const la = /* @__PURE__ */ k({
  name: "KendoFloatingLabel",
  props: {
    label: String,
    labelClass: String,
    editorId: String,
    editorValue: [String, Boolean, Number],
    editorPlaceholder: String,
    editorValid: {
      type: Boolean,
      default: void 0
    },
    editorDisabled: Boolean,
    id: String,
    optional: Boolean,
    focused: {
      type: Boolean,
      default: void 0
    },
    dir: String
  },
  data() {
    return {
      currentFocused: !1
    };
  },
  inject: {
    kendoLocalizationService: {
      default: null
    }
  },
  created() {
    Ve(bg);
  },
  computed: {
    computedFocused() {
      return this.$props.focused !== void 0 ? this.$props.focused : this.currentFocused;
    },
    spanClassNames() {
      return {
        "k-floating-label-container": !0,
        "k-focus": this.computedFocused,
        "k-empty": !this.$props.editorPlaceholder && !this.$props.editorValue && this.$props.editorValue !== 0,
        "k-text-disabled": this.$props.editorDisabled,
        "k-rtl": this.$props.dir === "rtl"
      };
    },
    labelClassNames() {
      return {
        "k-floating-label": !0,
        "k-text-error": this.$props.editorValid === !1,
        "k-text-disabled": this.$props.editorDisabled,
        [this.$props.labelClass]: this.$props.labelClass
      };
    }
  },
  methods: {
    handleFocus() {
      this.currentFocused = !0;
    },
    handleBlur() {
      this.currentFocused = !1;
    }
  },
  setup() {
    return {
      kendoLocalizationService: H("kendoLocalizationService", {})
    };
  },
  render() {
    const e = B(this), {
      label: t,
      editorId: i,
      id: n,
      optional: r
    } = this.$props, a = Z(this), o = r ? a.toLanguageString(rr, vg[rr]) : "", s = o && u("span", {
      class: "k-label-optional"
    }, [o]);
    return u("span", {
      class: this.spanClassNames,
      onFocusin: this.handleFocus,
      onFocusout: this.handleBlur,
      dir: this.$props.dir
    }, [e, t ? i ? u("label", {
      id: n,
      for: i,
      class: this.labelClassNames
    }, [t, s]) : u("span", {
      id: n,
      class: this.labelClassNames
    }, [t, s]) : null]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function xg(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const _o = /* @__PURE__ */ k({
  model: {
    event: "changemodel"
  },
  inheritAttrs: !1,
  emits: {
    input: (e) => !0,
    change: (e) => !0,
    changemodel: (e) => !0,
    "update:modelValue": (e) => !0,
    focus: (e) => !0,
    blur: (e) => !0,
    keyup: (e) => !0,
    keydown: (e) => !0,
    keypress: (e) => !0
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    defaultValue: {
      type: [String, Number],
      default: ""
    },
    value: {
      type: [String, Number]
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    required: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: "medium",
      validator: function(e) {
        return [null, "small", "medium", "large"].includes(e);
      }
    },
    rounded: {
      type: String,
      default: "medium",
      validator: function(e) {
        return [null, "small", "medium", "large", "full"].includes(e);
      }
    },
    fillMode: {
      type: String,
      default: "solid",
      validator: function(e) {
        return [null, "solid", "flat", "outline"].includes(e);
      }
    },
    dir: {
      type: String
    },
    id: String,
    valid: {
      type: Boolean,
      default: void 0
    },
    validate: {
      type: Boolean
    },
    validationMessage: {
      type: String
    },
    validityStyles: {
      type: Boolean,
      default: !0
    },
    iconName: String,
    inputPrefix: [String, Function],
    inputSuffix: [String, Function],
    showValidationIcon: Boolean,
    showLoadingIcon: Boolean,
    showClearButton: Boolean,
    inputClass: String,
    wrapperClass: String,
    tabIndex: Number,
    role: String,
    title: String,
    ariaLabel: String,
    inputAttributes: Object
  },
  data: function() {
    return {
      hasMounted: !1,
      autofill: !1,
      currentValue: "",
      valueDuringOnChange: "",
      focused: !1
    };
  },
  created() {
    Ve(Ao), this._input = void 0, this._inputId = me(), this.$data.valueDuringOnChange = void 0, this.$data.currentValue = this.$props.defaultValue;
  },
  mounted() {
    this._input = this.inputRef, this.wrapper = this.wrapperRef, this.$data.hasMounted = !0, this.setValidity();
  },
  updated() {
    this.setValidity(), this.updateValidClass();
  },
  setup() {
    return {
      inputRef: V(null)
    };
  },
  render() {
    const e = !this.$props.validityStyles || this.validity().valid, {
      label: t,
      id: i,
      required: n,
      iconName: r,
      showValidationIcon: a,
      showLoadingIcon: o,
      showClearButton: s,
      inputAttributes: l
    } = this.$props, d = i || this._inputId, c = M("input", {
      ...this.$attrs,
      ...l,
      "aria-label": this.$props.ariaLabel,
      role: this.$props.role,
      title: this.$props.title,
      tabindex: this.$props.tabIndex,
      placeholder: this.$props.placeholder,
      id: d,
      required: n,
      disabled: this.$props.disabled,
      value: this.computedValue,
      class: this.inputInnerClass,
      ref: (b) => {
        this.inputRef = b;
      },
      onKeydown: this.handleKeydown,
      onKeyup: this.handleKeyup,
      onKeypress: this.handleKeypress,
      onChange: this.handleChange,
      onFocus: this.emitFocus,
      onBlur: this.emitBlur,
      onInput: this.handleInput,
      onAnimationstart: this.handleAutoFill,
      onAnimationend: this.handleAutoFillEnd
    }), h = P.call(this, this.$props.inputPrefix, T.call(this)), p = P.call(this, this.$props.inputSuffix, T.call(this)), g = _.call(this, {
      h: M,
      template: h,
      additionalProps: {
        value: this.computedValue,
        valid: e
      }
    }), m = _.call(this, {
      h: M,
      template: p,
      additionalProps: {
        value: this.computedValue,
        valid: e
      }
    }), f = u("span", {
      class: this.inputWrapperClass(),
      ref: (b) => {
        this.wrapperRef = b;
      }
    }, [r && u(ie, {
      name: r,
      class: "k-input-icon"
    }, null), this.$props.inputPrefix && u("span", {
      class: "k-input-prefix"
    }, [g]), c, this.$props.inputSuffix && u("span", {
      class: "k-input-suffix"
    }, [m]), a && e && u(ie, {
      name: "check",
      icon: Xs,
      class: "k-input-validation-icon"
    }, null), a && !e && u(ie, {
      name: "exclamation-circle",
      icon: Qs,
      class: "k-input-validation-icon"
    }, null), o && u(ie, {
      name: "loading",
      class: "k-input-loading-icon"
    }, null), s && this.computedValue && u("span", {
      onClick: this.clearClick,
      class: "k-clear-value"
    }, [u(ie, {
      name: "x",
      icon: Xr
    }, null)])]);
    return t ? u(la, {
      label: t,
      editorId: d,
      editorValue: this.computedValue,
      editorValid: e,
      editorDisabled: this.$props.disabled,
      editorPlaceholder: this.$data.focused ? this.$props.placeholder : "",
      dir: this.$props.dir
    }, xg(f) ? f : {
      default: () => [f]
    }) : f;
  },
  methods: {
    updateValidClass() {
      this.wrapper.classList.toggle("k-invalid", !this.validity().valid);
    },
    emitFocus(e) {
      this.$emit("focus", {
        event: e
      }), this.$data.focused = !0;
    },
    emitBlur(e) {
      this.$emit("blur", {
        event: e
      }), this.$data.focused = !1;
    },
    handleKeydown(e) {
      this.$emit("keydown", e);
    },
    handleKeyup(e) {
      this.$emit("keyup", e);
    },
    handleKeypress(e) {
      this.$emit("keypress", e);
    },
    clearClick(e) {
      this.emitUpdate(e, "change", "");
    },
    focus() {
      this._input && this._input.focus();
    },
    validity() {
      const e = {
        badTextBox: this._input ? this._input.validity.badTextBox : !1,
        patternMismatch: this._input ? this._input.validity.patternMismatch : !1,
        rangeOverflow: this._input ? this._input.validity.rangeOverflow : !1,
        rangeUnderflow: this._input ? this._input.validity.rangeUnderflow : !1,
        stepMismatch: this._input ? this._input.validity.stepMismatch : !1,
        tooLong: this._input ? this._input.validity.tooLong : !1,
        tooShort: this._input ? this._input.validity.tooShort : !1,
        typeMismatch: this._input ? this._input.validity.typeMismatch : !1,
        valueMissing: this._input ? this._input.validity.valueMissing : !1
      };
      return {
        ...e,
        customError: this.$props.validationMessage !== void 0,
        valid: this.$props.valid !== void 0 ? this.$props.valid : this._input ? !this.isInvalid(e) : !0
      };
    },
    isInvalid(e) {
      let t = !1;
      for (const i in e)
        e.hasOwnProperty(i) && (t = t || e[i]);
      return t;
    },
    setValidity() {
      this._input && this._input.setCustomValidity && this._input.setCustomValidity(this.validity().valid ? "" : this.$props.validationMessage || "");
    },
    handleInput(e) {
      this.emitUpdate(e, "input", e.target.value);
    },
    handleChange(e) {
      this.emitUpdate(e, "change", e.target.value);
    },
    emitUpdate(e, t, i) {
      this.disabled || (this.$data.currentValue = i, this.$data.valueDuringOnChange = i, this.$nextTick(() => {
        this.$emit("changemodel", i), this.$emit("update:modelValue", i), this.$emit(t, {
          event: e,
          value: i,
          component: this,
          target: e.target,
          validity: this.validity()
        }), this.$data.valueDuringOnChange = void 0;
      }));
    },
    handleAutoFill(e) {
      if (e.animationName === "autoFillStart") {
        const t = e.target.parentNode;
        t && t.classList.contains("k-empty") && (this.$data.autofill = !0, t.classList.remove("k-empty"));
      }
    },
    handleAutoFillEnd(e) {
      e.animationName === "autoFillEnd" && e.target.parentNode && (this.$data.autofill = !1);
    },
    name: function() {
      return this.$props.name;
    },
    inputWrapperClass() {
      const {
        size: e,
        fillMode: t,
        rounded: i
      } = this.$props, n = !this.$data.hasMounted || !this.$props.validityStyles || this.validity().valid;
      return {
        "k-textbox": !0,
        "k-input": !0,
        [`k-input-${ye.sizeMap[e] || e}`]: e,
        [`k-input-${t}`]: t,
        [`k-rounded-${ye.roundedMap[i] || i}`]: i,
        "k-invalid": !n,
        "k-required": this.required,
        "k-disabled": this.$props.disabled,
        [this.wrapperClass]: this.wrapperClass
      };
    }
  },
  computed: {
    spanClassNames() {
      const e = !this.$data.hasMounted || !this.$props.validityStyles || this.validity().valid;
      return {
        "k-floating-label-container": !0,
        "k-focus": this.$data.focused,
        "k-empty": !(this.computedValue === 0 || this.computedValue || this.$props.placeholder || this.$data.autofill),
        "k-autofill": this.$data.autofill,
        "k-invalid": !e && e !== void 0,
        "k-rtl": this.$props.dir === "rtl"
      };
    },
    inputInnerClass() {
      return {
        "k-input-inner": !0,
        [this.inputClass]: this.inputClass
      };
    },
    computedValue() {
      return this.$data.valueDuringOnChange !== void 0 ? this.$data.valueDuringOnChange : this.$props.value !== void 0 ? this.$props.value : this.$props.modelValue !== void 0 ? this.$props.modelValue : this.$data.currentValue;
    }
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ei = "numerictextbox.increment", ti = "numerictextbox.decrement", yg = "slider.increment", $g = "slider.decrement", kg = "slider.dragTitle", wg = "colorGradient.dragHandle", Sg = "colorGradient.r", Cg = "colorGradient.g", Ig = "colorGradient.b", Dg = "colorGradient.a", Eg = "colorGradient.hex", Mg = "colorGradient.hexLabel", Fg = "colorGradient.inputColorButton", Lg = "colorGradient.rLabel", Og = "colorGradient.gLabel", Ng = "colorGradient.bLabel", Ag = "colorGradient.aLabel", _g = "colorGradient.contrastRatio", zg = "colorGradient.colorGradientAALevel", Vg = "colorGradient.colorGradientAAALevel", Tg = "colorGradient.colorGradientPass", Pg = "colorGradient.colorGradientFail", Hg = "colorGradient.hueSliderLabel", Rg = "colorGradient.alphaSliderLabel", Bg = "flatColorPicker.cancelBtn", jg = "flatColorPicker.applyBtn", Gg = "flatColorPicker.gradientBtn", Kg = "flatColorPicker.paletterBtn", qg = "flatColorPicker.clearBtn", Wg = "colorPicker.adaptiveTitle", Ug = "checkbox.validation", Yg = "checkbox.optionalText", Xg = "radioButton.validation", Jg = "switch.validation", Zg = "colorPicker.dropdownButtonAriaLabel", Qg = "colorGradient.toggleInputsButton", ef = "rating.ariaLabel", tf = "signature.clear", nf = "signature.maximize", rf = "signature.minimize", Mi = {
  [ei]: "Increase value",
  [ti]: "Decrease value",
  [yg]: "Increase",
  [$g]: "Decrease",
  [kg]: "Drag",
  [wg]: `Color well with two-dimensional slider for selecting
     saturation and lightness. Selected color is`,
  [Fg]: "Change the color input",
  [Sg]: "r",
  [Cg]: "g",
  [Ig]: "b",
  [Dg]: "a",
  [Lg]: "red chanel",
  [Og]: "green chanel",
  [Ng]: "blue chanel",
  [Ag]: "alpha chanel",
  [Eg]: "hex",
  [Mg]: "HEX",
  [_g]: "Contrast ratio",
  [zg]: "AA",
  [Vg]: "AAA",
  [Tg]: "Pass",
  [Pg]: "Fail",
  [Hg]: "Hue slider",
  [Rg]: "Alpha slider",
  [Qg]: "Toggle colorgradient inputs",
  [Bg]: "Cancel",
  [jg]: "Apply",
  [Gg]: "Gradient",
  [Kg]: "Palette",
  [qg]: "Clear",
  [Wg]: "Choose color",
  [Ug]: "Please check this box if you want to proceed!",
  [Yg]: "(Optional)",
  [Xg]: "Please select option if you want to proceed!",
  [Jg]: "Please turn on if you want to proceed!",
  [Zg]: "Select",
  [ef]: "Rating",
  [tf]: "Clear",
  [nf]: "Maximize",
  [rf]: "Minimize"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const zo = 11111111111111e-7, af = 0.31111111111111117, sf = 1, Vo = 1, To = 0, He = /\d/, Po = 15, ts = (e, t) => e !== void 0 ? e : t, Me = (e, t, i) => e === null && e === void 0 ? "" : typeof e == "string" ? e : i.formatNumber(e, t), is = (e) => (String(e).split(".")[1] || "").length, Ho = (e, t) => Math.max(is(e), is(t)), of = (e) => Math.min(e, Po), Ro = (e, t) => {
  const i = of(t);
  return parseFloat(e.toFixed(i));
}, ns = (e, t, i, n, r, a, o) => {
  const s = Ho(e || 0, i || 0), l = Nt(Ro((e || 0) + (i || 0), s), n, r);
  t.eventValue = l, t.currentLooseValue = Me(l, a, o), t.selectionStart = t.selectionEnd = gi(t.currentLooseValue, He);
}, rs = (e, t, i, n, r, a, o) => {
  const s = Ho(e || 0, i || 0), l = Nt(Ro((e || 0) - (i || 0), s), n, r);
  t.eventValue = l, t.currentLooseValue = Me(l, a, o), t.selectionStart = t.selectionEnd = gi(t.currentLooseValue, He);
}, Nt = (e, t, i) => e == null ? e : !(e > 1 || e < 1 || e === 1) || i !== void 0 && t !== void 0 && i < t ? null : (i !== void 0 && e > i && (e = i), t !== void 0 && e < t && (e = t), e), lf = (e, t) => {
  const i = t.findIndex(([r, a]) => !!a && e.indexOf(a) === e.length - a.length);
  if (i === -1)
    return -1;
  const n = t[i][1];
  return e.length - n.length;
}, uf = (e, t) => {
  const i = t.findIndex(([n, r]) => !!n && e.indexOf(n) === 0);
  return i === -1 ? -1 : t[i][0].length;
}, df = (e, t, i) => {
  const n = lf(e, t);
  if (n !== -1 && i.selectionStart > n) {
    i.selectionStart = i.selectionEnd = n;
    return;
  }
  i.selectionStart > e.length && (i.selectionStart = i.selectionEnd = e.length);
  const r = uf(e, t);
  r !== -1 && i.selectionStart < r && (i.selectionStart = i.selectionEnd = r), i.selectionStart === -1 && (i.selectionStart = i.selectionEnd = 0);
}, dt = (e, t, i, n) => {
  e.selectionStart = e.selectionEnd = t, df(i, n, e);
}, as = (e, t, i, n) => {
  e.eventValue = n.parseNumber(e.prevLooseValue, t), e.currentLooseValue = e.prevLooseValue, e.valueIsCorrected = !0, dt(e, e.selectionStart, e.currentLooseValue, i);
}, On = (e, t, i) => t.split(e).length !== i.split(e).length && t.length === i.length + e.length, cf = (e, t) => {
  const i = String(e.currentLooseValue), n = String(e.prevLooseValue);
  return On(t.minusSign, i, n) || On("-", i, n) || On("−", i, n);
}, hf = (e, t) => {
  const i = String(e.currentLooseValue), n = String(e.prevLooseValue);
  return i.indexOf(t.minusSign) === -1 && n.indexOf(t.minusSign) !== -1;
}, pf = (e, t) => String(e.currentLooseValue).split(t.decimal).length > 2, gf = (e, t) => {
  const i = t.formatNumber(zo, e), n = t.formatNumber(-11111111111111e-7, e), r = t.formatNumber(To, e), a = t.formatNumber(Vo, e), o = Fi(i), s = Fi(n), l = Fi(r), d = Fi(a), c = Li(i), h = Li(n), p = Li(r), g = Li(a);
  return {
    positiveInfo: [o, c],
    negativeInfo: [s, h],
    zeroInfo: [l, p],
    oneInfo: [d, g]
  };
}, ff = (e, t) => {
  const i = t.formatNumber(zo, e), n = t.formatNumber(-11111111111111e-7, e), r = t.formatNumber(To, e), a = t.formatNumber(Vo, e), o = t.numberSymbols(), s = new RegExp(`[\\d\\${o.decimal}${o.group}]`, "g");
  return [i, n, r, a].map((l) => l.replace(s, "")).join("").split("").filter((l, d, c) => c.indexOf(l) === d).join("");
}, Nn = (e, t) => {
  const i = e.indexOf(t.decimal);
  return i > -1 ? i : gi(e, He);
}, ar = (e) => e.split("").reverse().join(""), gi = (e, t) => e.length - ar(e).search(t), Fi = (e) => e.split(e[e.search(He)])[0], Li = (e) => {
  const t = ar(e);
  return ar(t.split(t[t.search(He)])[0]);
}, An = (e, t) => e.search(t), ss = (e, t) => {
  const i = e.indexOf(t);
  return i > -1 ? e.length - i - 1 : 0;
}, os = (e, t, i, n, r) => {
  const a = e.replace(r, "")[0] === "0", o = t.replace(r, "")[0] === "0";
  if (a && !o)
    return i - 1;
  if (o && n)
    return i + 1;
  let s = 0;
  for (let d = 0; d < i; d++)
    He.test(e.charAt(d)) && s++;
  let l = 0;
  for (; s > 0 && t.length > l; )
    He.test(t.charAt(l)) && s--, l++;
  return l;
}, ls = (e, t, i) => {
  const n = {
    ...e
  }, {
    prevLooseValue: r
  } = n, a = i.numberSymbols(), o = ff(t, i), s = String(n.currentLooseValue), l = String(r), d = new RegExp(`[^\\d\\${a.decimal}]`, "g"), c = new RegExp(`[^\\d\\${a.decimal}\\${a.group}]`, "g"), h = new RegExp(`[\\d\\${a.decimal}\\${a.group}]`), p = s.replace(d, ""), g = An(s, He), m = g === -1 ? -1 : gi(s, He), f = s.indexOf(a.decimal), b = (s.substring(0, g) + s.substring(g, m).replace(c, "") + s.substring(m, s.length)).split("").filter((F) => o.indexOf(F) !== -1 || F.search(h) !== -1).join(""), v = i.formatNumber(af, t).replace(d, ""), $ = v.indexOf(a.decimal), y = $ > -1 ? v.length - $ - 1 : 0, C = i.formatNumber(sf, t).replace(d, ""), D = C.indexOf(a.decimal), S = D > -1 ? C.length - D - 1 : 0, {
    positiveInfo: E,
    negativeInfo: L,
    zeroInfo: j,
    oneInfo: Q
  } = gf(t, i), z = [E, L, j, Q], Y = z.findIndex((F) => F.findIndex((ge) => !!ge) !== -1) !== 1, q = s.length > 0 && s.length < l.length, w = typeof t == "string" && t[0] === "p" && s && s.indexOf(a.percentSign) === -1;
  if (!n.isPaste) {
    if (s === "")
      return n.eventValue = null, n.currentLooseValue = "", n;
    if (n.currentLooseValue === a.minusSign && i.formatNumber(-0, t) !== l)
      return n.eventValue = -0, n.currentLooseValue = Me(n.eventValue, t, i), dt(n, Nn(n.currentLooseValue, a), n.currentLooseValue, z), n;
    if (n.currentLooseValue === a.decimal) {
      n.eventValue = 0;
      const W = Me(n.eventValue, t, i);
      if (S === 0 && y > 0) {
        const G = gi(W, He);
        n.currentLooseValue = W.substring(0, G) + a.decimal + W.substring(G);
      } else
        n.currentLooseValue = W;
      return dt(n, Nn(n.currentLooseValue, a) + 1, n.currentLooseValue, z), n;
    }
    if (cf(n, a)) {
      const W = i.parseNumber(r, t);
      n.eventValue = -(W !== null ? W : 0), n.currentLooseValue = Me(n.eventValue, t, i);
      const G = An(n.currentLooseValue, He), De = An(l, He);
      return dt(n, n.selectionEnd - 1 + (G - De), n.currentLooseValue, z), n;
    }
    if (hf(n, a))
      return n.eventValue = i.parseNumber(n.currentLooseValue, t), dt(n, n.selectionStart, n.currentLooseValue, z), n;
    if (pf(n, a))
      return as(n, t, z, i), n;
    if (w)
      return n.eventValue = i.parseNumber(s, t) / 100, n.currentLooseValue = Me(n.eventValue, t, i), n;
    if (String(n.currentLooseValue).replace(/[^\d]/g, "").length > Po || p !== s && s && Y && z.findIndex(([W, G]) => {
      const De = s.indexOf(W), Ae = s.indexOf(G), pt = De === 0, st = Ae === s.length - G.length, ot = De + W.length !== g && g !== -1 && s[De + W.length] !== a.decimal, Ke = Ae !== m && m !== -1 && s[Ae - 1] !== a.decimal;
      return W && G ? ot || Ke ? !1 : pt && st : W ? ot ? !1 : pt : G ? Ke ? !1 : st : !1;
    }) === -1)
      return as(n, t, z, i), n;
    if (p[p.length - 1] === a.decimal && y > 0)
      return n.eventValue = i.parseNumber(s, t), n.currentLooseValue = b, n;
    if (n.currentLooseValue && r && (o + a.decimal + a.group).split("").findIndex((W) => s.split("").filter((G) => G === W).length < l.split("").filter((G) => G === W).length && s.length + 1 === l.length ? !(W === a.decimal && ss(l.replace(d, ""), a.decimal) === 0) : !1) > -1)
      return n.eventValue = i.parseNumber(e.prevLooseValue, t), n.currentLooseValue = e.prevLooseValue, n;
    const F = ss(p, a.decimal), ge = p[p.length - 1] === "0";
    if (q && ge && F < S)
      return n.eventValue = i.parseNumber(n.currentLooseValue, t), n.currentLooseValue = Me(n.eventValue, t, i), n;
    if (F > 0) {
      const W = s.substring(0, f);
      if (ge && (!W || l.indexOf(W) !== 0)) {
        n.eventValue = i.parseNumber(n.currentLooseValue, t);
        const G = Me(n.eventValue, t, i);
        return dt(n, os(s, G, n.selectionEnd, q, d), G, z), n.currentLooseValue = G, n;
      }
      if (F > y) {
        const G = s.indexOf(a.decimal), De = s.substring(0, G) + s.substring(G, G + 1 + y) + s.substring(m, String(n.currentLooseValue).length);
        return n.eventValue = i.parseNumber(De, t), n.currentLooseValue = De, dt(n, n.selectionStart, De, z), n;
      }
      if (S !== y && F <= y && ge)
        return n.eventValue = i.parseNumber(n.currentLooseValue, t), n.currentLooseValue = b, n;
      if (F < S)
        return n.eventValue = i.parseNumber(n.currentLooseValue, t), n.currentLooseValue = Me(n.eventValue, t, i), n;
    }
  }
  if (n.eventValue = i.parseNumber(n.currentLooseValue, t), w && (n.eventValue = n.eventValue / 100), typeof n.eventValue == "number") {
    const F = Me(n.eventValue, t, i);
    s.length === 1 ? dt(n, Nn(F, a), F, z) : dt(n, os(s, F, n.selectionEnd, q, d), F, z), n.currentLooseValue = F;
  } else
    n.currentLooseValue = Me(i.parseNumber(p), t, i);
  return n;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const mf = "Please enter a valid value!", vn = /* @__PURE__ */ k({
  model: {
    event: "changemodel"
  },
  emits: {
    change: (e) => !0,
    changemodel: (e) => !0,
    "update:modelValue": (e) => !0,
    focus: (e) => !0,
    blur: (e) => !0
  },
  props: {
    modelValue: Number,
    value: Number,
    defaultValue: Number,
    step: {
      type: Number,
      default: 1
    },
    format: [String, Object],
    tabIndex: Number,
    accessKey: String,
    title: String,
    placeholder: String,
    min: Number,
    max: Number,
    spinners: {
      type: Boolean,
      default: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    dir: String,
    name: String,
    label: String,
    validationMessage: String,
    validityStyles: {
      type: Boolean,
      default: !0
    },
    valid: {
      type: Boolean,
      default: void 0
    },
    size: {
      type: String,
      default: "medium",
      validator: function(e) {
        return [null, "small", "medium", "large"].includes(e);
      }
    },
    rounded: {
      type: String,
      default: "medium",
      validator: function(e) {
        return [null, "small", "medium", "large", "full"].includes(e);
      }
    },
    fillMode: {
      type: String,
      default: "solid",
      validator: function(e) {
        return [null, "solid", "flat", "outline"].includes(e);
      }
    },
    required: {
      type: Boolean,
      default: !1
    },
    id: String,
    ariaLabel: String,
    iconName: String,
    inputPrefix: [String, Function],
    inputSuffix: [String, Function],
    showValidationIcon: Boolean,
    showLoadingIcon: Boolean,
    showClearButton: Boolean,
    inputClass: String,
    inputType: {
      type: String,
      default: "tel"
    },
    wrapperClass: String,
    inputAttributes: Object
  },
  inject: {
    kendoIntlService: {
      default: null
    },
    kendoLocalizationService: {
      default: null
    }
  },
  data() {
    return {
      hasMounted: !1,
      isInvalid: !1,
      isEmpty: !1,
      currentValue: 0,
      valueDuringOnChange: 0,
      currentLooseValue: "",
      selectionStart: 0,
      selectionEnd: 0,
      decimalSelect: !1,
      focused: !1,
      forceUpdate: !1
    };
  },
  created() {
    Ve(Ao), this._textBeforeInput = "", this._inputId = me(), this.$data.currentLooseValue = null, this.$data.valueDuringOnChange = void 0, this._intl = xt(this), this._symbols = this._intl.numberSymbols(), this.$props.value !== void 0 ? this.$data.currentValue = this.$props.value : this.$props.modelValue !== void 0 ? this.$data.currentValue = this.$props.modelValue : this.$props.defaultValue !== void 0 ? this.$data.currentValue = this.$props.defaultValue : this.$data.currentValue = null;
  },
  mounted() {
    this._input = J(this, "input"), this._elementWrapper = this.elementWrapperRef, this.$data.hasMounted = !0, this._input && (this._textBeforeInput = this._input.value), this.setValidity();
  },
  updated() {
    !(se && document.activeElement !== this._input || !this._input) && this.$data.currentLooseValue !== null && this.$data.forceUpdate && this._input.type !== "number" && (this._input.selectionStart = this.$data.selectionStart, this._input.selectionEnd = this.$data.selectionEnd, this.$data.forceUpdate = !1), this._input && (this._textBeforeInput = this._input.value), this.setValidity();
  },
  computed: {
    computedValue() {
      return this.$data.valueDuringOnChange !== void 0 ? this.$data.valueDuringOnChange : this.$data.currentValue;
    },
    looseValue() {
      return Me(this.$data.focused ? this.$data.currentLooseValue : ts(this.$props.value, this.$data.currentValue), this.$props.format, this._intl);
    },
    spanClassNames() {
      const e = !this.$data.hasMounted || !this.$props.validityStyles || this.validity().valid, t = this.computedValue;
      return {
        "k-floating-label-container": !0,
        "k-focus": this.$data.focused,
        "k-empty": !(t === 0 || t || this.$props.placeholder),
        "k-invalid": !e && e !== void 0,
        "k-rtl": this.$props.dir === "rtl",
        [this.inputClass]: this.inputClass
      };
    },
    wrapperClassNames() {
      const {
        size: e,
        fillMode: t,
        rounded: i,
        required: n,
        disabled: r
      } = this.$props, a = !this.$props.validityStyles || this.validity().valid;
      return {
        "k-input": !0,
        "k-numerictextbox": !0,
        [`k-input-${ye.sizeMap[e] || e}`]: e,
        [`k-input-${t}`]: t,
        [`k-rounded-${ye.roundedMap[i] || i}`]: i,
        "k-invalid": !a,
        "k-required": n,
        "k-disabled": r,
        "k-loading": this.showLoadingIcon,
        [this.wrapperClass]: this.wrapperClass
      };
    },
    inputInnerClass() {
      return {
        "k-input-inner": !0,
        [this.inputClass]: this.inputClass
      };
    }
  },
  methods: {
    validity() {
      const e = this.$props.validationMessage !== void 0, t = !this.$data.valueIsOutOfRange && (!this.$props.required || this.computedValue !== null), i = this.$props.valid !== void 0 ? this.$props.valid : t;
      return {
        customError: e,
        valid: i,
        valueMissing: this.computedValue === null
      };
    },
    clearClick(e) {
      this.$props.value !== void 0 ? this.$data.currentValue = this.$props.value : this.$props.modelValue !== void 0 ? this.$data.currentValue = this.$props.modelValue : this.$data.currentValue = null, this.$emit("changemodel", null), this.$emit("update:modelValue", null), this.$emit("change", {
        event: e,
        value: null,
        component: this,
        target: {
          name: this.$props.name,
          value: null
        },
        validity: this.validity()
      });
    },
    focus() {
      this._input && this._input.focus();
    },
    emitFocus(e) {
      this.$data.currentLooseValue = this._prevLooseValue, this.$data.focused = !0, this.$emit("focus", {
        event: e
      });
    },
    emitBlur(e) {
      this.$data.eventValue = null, this.$data.prevLooseValue = "", this.$data.currentLooseValue = "", this.$data.focused = !1, this.$data.selectionStart = void 0, this.$data.selectionEnd = void 0, this.$data.decimalSelect = !1, this.$data.valueIsCorrected = !1, this.$data.valueIsOutOfRange = !1, this.$emit("blur", {
        event: e
      });
    },
    handleFocus(e) {
      this.$data.focused = !0;
    },
    handleBlur(e) {
      this.$data.focused = !1;
    },
    setValidity() {
      this._input && this._input.setCustomValidity && this._input.setCustomValidity(this.validity().valid ? "" : this.$props.validationMessage || mf);
    },
    getCurrentState() {
      return {
        eventValue: ts(this.$props.value, this.$data.currentValue),
        prevLooseValue: this._prevLooseValue,
        currentLooseValue: this._input.value,
        selectionStart: this._input.selectionStart,
        selectionEnd: this._input.selectionEnd,
        decimalSelect: !1,
        valueIsCorrected: !1,
        valueIsOutOfRange: !1,
        isPaste: this._isPaste,
        focused: this.$data.focused
      };
    },
    parseNumber(e) {
      return this._intl.parseNumber(e, this.$props.format);
    },
    elementChange(e) {
      const t = this.getCurrentState();
      this._isPaste = !1, this.triggerChange(e, ls(t, this.$props.format, this._intl));
    },
    triggerChange(e, t) {
      if (this.$props.disabled)
        return;
      this.$data.valueDuringOnChange = t.eventValue, this.$data.currentValue = t.eventValue;
      const i = Me(Nt(t.eventValue, this.$props.min, this.$props.max), this.$props.format, this._intl), n = Nt(this.parseNumber(i), this.$props.min, this.$props.max);
      if (n !== t.eventValue && (t.valueIsOutOfRange = !0, t.eventValue = n, this.$data.valueDuringOnChange = n, this.$data.currentValue = n), t.valueIsCorrected) {
        const a = this._elementWrapper;
        a && a.className.indexOf("k-invalid") === -1 && (this.$data.isInvalid = !0, setTimeout(() => {
          this.$data.isInvalid = !1;
        }, 50));
      }
      const r = this.$props.value !== t.eventValue;
      this.$props.value !== void 0 ? this.$data.currentValue = this.$props.value : this.$props.modelValue !== void 0 ? this.$data.currentValue = this.$props.modelValue : this.$data.currentValue = this.$data.valueDuringOnChange, this.$data.prevLooseValue = t.prevLooseValue, this.$data.currentLooseValue = void 0, this.$data.currentLooseValue = t.currentLooseValue, this.$data.selectionStart = t.selectionStart, this.$data.selectionEnd = t.selectionEnd, this.$data.decimalSelect = t.decimalSelect, this.$data.valueIsCorrected = t.valueIsCorrected, this.$data.valueIsOutOfRange = t.valueIsOutOfRange, this.$data.focused = t.focused, this.$data.isPaste = t.isPaste, this.$data.forceUpdate = !this.$data.forceUpdate, r && (this.$emit("changemodel", this.$data.valueDuringOnChange), this.$emit("update:modelValue", this.$data.valueDuringOnChange), this.$emit("change", {
        event: e,
        value: this.$data.valueDuringOnChange,
        component: this,
        target: {
          name: this.$props.name,
          value: this.$data.valueDuringOnChange
        },
        validity: this.validity()
      })), this.$data.valueDuringOnChange = void 0;
    },
    onPasteHandler(e) {
      this._isPaste = !0;
    },
    increase(e) {
      const t = this.getCurrentState();
      ns(this.parseNumber(String(t.currentLooseValue)), t, this.$props.step, this.$props.min, this.$props.max, this.$props.format, this._intl), this.triggerChange(e, t);
    },
    decrease(e) {
      const t = this.getCurrentState();
      rs(this.parseNumber(String(t.currentLooseValue)), t, this.$props.step, this.$props.min, this.$props.max, this.$props.format, this._intl), this.triggerChange(e, t);
    },
    wheel(e) {
      !se || document.activeElement !== this._input || !this._input || (e.deltaY < 0 && (e.preventDefault(), this.increase(e)), e.deltaY > 0 && (e.preventDefault(), this.decrease(e)));
    },
    keyDown(e) {
      let t = this.getCurrentState(), i, n, r, a;
      const o = this.parseNumber(String(t.currentLooseValue));
      if (t.selectionEnd > t.selectionStart && t.selectionEnd - t.selectionStart === String(t.currentLooseValue).length) {
        const s = this._intl.numberSymbols(), l = s && e.key === s.minusSign, d = s && e.key === s.decimal;
        this.$data.isPaste = !l && !d;
        return;
      }
      switch (e.keyCode) {
        case 38:
          ns(o, t, this.$props.step, this.$props.min, this.$props.max, this.$props.format, this._intl);
          break;
        case 40:
          rs(o, t, this.$props.step, this.$props.min, this.$props.max, this.$props.format, this._intl);
          break;
        case 13:
          i = Me(Nt(o, this.$props.min, this.$props.max), this.$props.format, this._intl), n = Nt(this.parseNumber(i), this.$props.min, this.$props.max), t.eventValue = n, t.currentLooseValue = Me(n, this.$props.format, this._intl), t.selectionStart = t.selectionEnd = t.currentLooseValue.length;
          break;
        case 110:
          r = this._input, a = this._intl.numberSymbols(), r && (t.currentLooseValue = t.currentLooseValue.slice(0, t.selectionStart) + a.decimal + t.currentLooseValue.slice(t.selectionEnd), t.selectionStart = t.selectionEnd = t.selectionStart + 1, t = ls(t, this.$props.format, this._intl));
          break;
        default:
          return;
      }
      e.preventDefault(), this.triggerChange(e, t);
    },
    spinnersWrapperMouseDown(e) {
      se && this._input && (e.preventDefault(), document.activeElement !== this._input && this._input.focus());
    }
  },
  setup() {
    const e = V(null), t = V(null), i = H("kendoLocalizationService", {}), n = H("kendoIntlService", {});
    return {
      inputRef: e,
      elementWrapperRef: t,
      kendoLocalizationService: i,
      kendoIntlService: n
    };
  },
  render() {
    const {
      iconName: e,
      showValidationIcon: t,
      showLoadingIcon: i,
      showClearButton: n,
      inputAttributes: r
    } = this.$props, a = this.$props.id || this._inputId, o = B(this), s = Z(this), l = this.validity().valid;
    this.$props.value !== void 0 && this.$props.value !== this.$data.currentValue ? this.$data.currentValue = this.$props.value : this.$props.modelValue !== void 0 && this.$props.modelValue !== this.$data.currentValue && (this.$data.currentValue = this.$props.modelValue), this._prevLooseValue = this.$data.currentLooseValue ? this.looseValue : this.looseValue;
    const d = P.call(this, this.$props.inputPrefix, T.call(this)), c = P.call(this, this.$props.inputSuffix, T.call(this)), h = _.call(this, {
      h: M,
      template: d,
      additionalProps: {
        value: this.computedValue,
        valid: l
      }
    }), p = _.call(this, {
      h: M,
      template: c,
      additionalProps: {
        value: this.computedValue,
        valid: l
      }
    }), g = u("span", {
      dir: this.$props.dir,
      class: this.wrapperClassNames,
      style: this.$attrs.style
    }, [e && u(ie, {
      name: e,
      class: "k-input-icon"
    }, null), this.$props.inputPrefix && u("span", {
      class: "k-input-prefix"
    }, [h]), u("input", Fs({
      tabindex: this.$props.tabIndex,
      accesskey: this.$props.accessKey,
      disabled: this.$props.disabled,
      title: this.$props.title,
      "aria-label": this.$props.ariaLabel,
      "aria-valuemin": this.$props.min,
      "aria-valuemax": this.$props.max,
      "aria-disabled": this.$props.disabled ? "true" : void 0,
      placeholder: this.$props.placeholder,
      type: this.$props.inputType,
      spellcheck: !1,
      autocomplete: "off",
      autocorrect: "off",
      class: this.inputInnerClass,
      id: a,
      role: "spinbutton",
      value: this.looseValue,
      name: this.$props.name,
      onWheel: this.wheel,
      onKeydown: this.keyDown,
      onInput: this.elementChange,
      onFocus: this.emitFocus,
      onBlur: this.emitBlur,
      onPaste: this.onPasteHandler,
      ref: he(this, "input")
    }, r), null), this.$props.inputSuffix && u("span", {
      class: "k-input-suffix"
    }, [p]), t && l && u(ie, {
      name: "check",
      icon: Xs,
      class: "k-input-validation-icon"
    }, null), t && !l && u(ie, {
      name: "exclamation-circle",
      icon: Qs,
      class: "k-input-validation-icon"
    }, null), i && u(ie, {
      name: "loading",
      class: "k-input-loading-icon"
    }, null), n && this.computedValue !== void 0 && this.computedValue !== null && u("span", {
      onClick: this.clearClick,
      class: "k-clear-value"
    }, [u(ie, {
      name: "x",
      icon: Xr
    }, null)]), o, this.$props.spinners && u("span", {
      class: "k-input-spinner k-spin-button",
      onMousedown: this.spinnersWrapperMouseDown
    }, [u(xe, {
      type: "button",
      tabIndex: -1,
      icon: "caret-alt-up",
      svgIcon: Ys,
      class: "k-spinner-increase",
      rounded: null,
      "aria-label": s.toLanguageString(ei, Mi[ei]),
      title: s.toLanguageString(ei, Mi[ei]),
      onClick: this.increase
    }, null), u(xe, {
      type: "button",
      tabIndex: -1,
      class: "k-spinner-decrease",
      icon: "caret-alt-down",
      svgIcon: un,
      rounded: null,
      "aria-label": s.toLanguageString(ti, Mi[ti]),
      title: s.toLanguageString(ti, Mi[ti]),
      onClick: this.decrease
    }, null)])]);
    return this.$props.label ? u("span", {
      class: this.spanClassNames,
      onFocusin: this.handleFocus,
      onFocusout: this.handleBlur,
      dir: this.$props.dir
    }, [g, this.$props.label ? a ? u("label", {
      for: a,
      class: "k-floating-label"
    }, [this.$props.label]) : u("span", {
      class: "k-label"
    }, [this.$props.label]) : null]) : g;
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const vf = {
  name: "@progress/kendo-vue-layout",
  productName: "Kendo UI for Vue",
  productCode: "KENDOUIVUE",
  productCodes: ["KENDOUIVUE"],
  publishDate: 1763478447,
  version: "7.0.2",
  licensingDocsUrl: "https://www.telerik.com/kendo-vue-ui/components/my-license/?utm_medium=product&utm_source=vue&utm_campaign=kendo-ui-vue-purchase-license-keys-warning"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const us = /* @__PURE__ */ k({
  name: "KendoActionSheetItem",
  emits: {
    click: null
  },
  props: {
    id: Number,
    description: String,
    disabled: Boolean,
    group: {
      type: String,
      validator: function(e) {
        return ["top", "bottom", void 0].includes(e);
      }
    },
    item: Object,
    icon: String,
    svgIcon: Object,
    iconColor: String,
    iconSize: String,
    content: [String, Function, Object],
    title: String,
    tabIndex: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    wrapperClass() {
      return {
        "k-actionsheet-item": !0,
        "k-cursor-pointer": !0,
        "k-disabled": this.$props.disabled
      };
    }
  },
  render() {
    const e = _.call(this, {
      h: M,
      template: this.$props.content,
      defaultRendering: null,
      additionalProps: {
        item: this.$props.item
      }
    });
    return u("span", {
      tabindex: this.$props.tabIndex,
      class: this.wrapperClass,
      role: "button",
      "aria-disabled": this.$props.disabled,
      onClick: this.onClick
    }, [u("span", {
      class: "k-actionsheet-action"
    }, [this.$props.content ? e : [(this.$props.icon || this.$props.svgIcon) && u("span", {
      class: "k-icon-wrap"
    }, [u(ie, {
      name: this.$props.icon,
      icon: this.$props.svgIcon,
      class: "k-actionsheet-item-icon",
      size: this.iconSize,
      style: {
        color: this.iconColor
      }
    }, null)]), (this.$props.title || this.$props.description) && u("span", {
      class: "k-actionsheet-item-text"
    }, [this.$props.title && u("span", {
      class: "k-actionsheet-item-title"
    }, [this.$props.title]), this.$props.description && u("span", {
      class: "k-actionsheet-item-description"
    }, [this.$props.description])])]])]);
  },
  methods: {
    onClick(e) {
      this.$emit("click", {
        syntheticEvent: e,
        item: this.$props.item,
        title: this.$props.title
      });
    }
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const bf = /* @__PURE__ */ k({
  name: "KendoActionSheetHeader",
  props: {
    headerClassName: {
      type: String,
      default: void 0
    },
    headerStyle: {
      type: String,
      default: void 0
    }
  },
  render() {
    const e = B(this), {
      headerStyle: t,
      headerClassName: i
    } = this.$props;
    return u("div", {
      style: t,
      class: fe("k-actionsheet-titlebar", i)
    }, [e]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const xf = /* @__PURE__ */ k({
  name: "KendoActionSheetFooter",
  props: {
    footerClassName: {
      type: String,
      default: void 0
    }
  },
  render() {
    const e = B(this), {
      footerClassName: t
    } = this.$props;
    return u("div", {
      class: fe("k-actionsheet-footer", t)
    }, [e]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const yf = /* @__PURE__ */ k({
  name: "KendoActionSheetContent",
  props: {
    contentClassName: {
      type: String,
      default: void 0
    }
  },
  render() {
    const e = B(this), {
      contentClassName: t
    } = this.$props;
    return u("div", {
      class: fe("k-actionsheet-content", t)
    }, [e]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function _n(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const $f = 300, kf = /* @__PURE__ */ k({
  name: "KendoActionSheet",
  props: {
    expand: Boolean,
    animation: {
      type: Boolean,
      default: !0
    },
    animationDuration: {
      type: Number,
      default: $f
    },
    animationStyles: Object,
    tabIndex: Number,
    items: Array,
    subTitle: String,
    title: String,
    className: String,
    headerClassName: {
      type: String,
      default: void 0
    },
    contentClassName: {
      type: String,
      default: void 0
    },
    headerStyle: {
      type: String,
      default: void 0
    },
    footerClassName: {
      type: String,
      default: void 0
    },
    header: [String, Object, Function],
    content: [String, Object, Function],
    footer: [String, Object, Function],
    item: [String, Object, Function],
    navigatable: {
      type: Boolean,
      default: !0
    },
    navigatableElements: {
      type: Array,
      default: function() {
        return [];
      }
    },
    actions: Object,
    onClose: Function
  },
  created() {
    this.bottomPosition = {
      bottom: "0px",
      width: "100%"
    }, this.guidId = me(), Ve(vf);
  },
  mounted() {
    this.element = J(this, "actionSheet"), this.$props.expand && !this.show && (this.show = !0);
  },
  updated() {
    if (this.element = J(this, "actionSheet"), this.$props.expand && !this.show && (this.show = !0), this.element && !this.$props.className && (this.element.style.setProperty("--kendo-actionsheet-height", "auto"), this.element.style.setProperty("--kendo-actionsheet-max-height", "none")), this.element && this.$props.navigatable) {
      const e = this.$props.navigatableElements, t = [".k-actionsheet-item", ".k-actionsheet-actions", ...[".k-actionsheet-footer", ".k-actionsheet-content", ".k-actionsheet-titlebar"].map((i) => ud.concat(e).map((n) => `${i} ${n}`)).flat()];
      this.navigation = new dd({
        tabIndex: this.$props.tabIndex || 0,
        root: this.element,
        rovingTabIndex: !1,
        selectors: t,
        keyboardEvents: {
          keydown: {
            Tab: this.onTab,
            Enter: this.onEnter,
            Escape: this.onEscape
          }
        }
      }), e.length !== 0 ? this.navigation.focusElement(this.element.querySelector(e[0]), null) : this.navigation.focusElement(this.navigation.first, null);
    }
  },
  data() {
    return {
      show: !1,
      slide: !1
    };
  },
  computed: {
    topGroupItems() {
      var e;
      return (e = this.items) == null ? void 0 : e.filter((t) => !t.group || t.group === "top");
    },
    bottomGroupItems() {
      var e;
      return (e = this.items) == null ? void 0 : e.filter((t) => t.group === "bottom");
    },
    shouldRenderSeparator() {
      return this.topGroupItems && this.topGroupItems.length > 0 && this.bottomGroupItems && this.bottomGroupItems.length > 0;
    }
  },
  render() {
    const {
      title: e,
      subTitle: t,
      animationStyles: i,
      animation: n,
      expand: r,
      tabIndex: a,
      className: o,
      animationDuration: s,
      headerClassName: l,
      contentClassName: d,
      footerClassName: c,
      actions: h
    } = this.$props, p = P.call(this, this.$props.header, T.call(this)), g = _.call(this, {
      h: M,
      template: p,
      defaultRendering: null
    }), m = P.call(this, this.$props.content, T.call(this)), f = _.call(this, {
      h: M,
      template: m,
      defaultRendering: null
    }), b = P.call(this, this.$props.footer, T.call(this)), v = _.call(this, {
      h: M,
      template: b,
      defaultRendering: null
    }), $ = u("div", {
      class: fe("k-actionsheet", o, {
        "k-actionsheet-bottom": !o
      }),
      role: "dialog",
      "aria-modal": "true",
      "aria-hidden": !1,
      "aria-labelledby": this.guidId,
      ref: he(this, "actionSheet"),
      onKeydown: this.handleKeyDown
    }, [this.$props.header && !e && !t && u(bf, {
      headerClassName: l
    }, _n(g) ? g : {
      default: () => [g]
    }), (e || t) && u("div", {
      class: "k-actionsheet-titlebar k-text-center"
    }, [u("div", {
      class: "k-actionsheet-titlebar-group k-hbox"
    }, [u("div", {
      class: "k-actionsheet-title",
      id: this.guidId
    }, [e && u("div", null, [e]), t && u("div", {
      class: "k-actionsheet-subtitle"
    }, [t])]), h && u("div", {
      class: "k-actionsheet-actions"
    }, [h])])]), this.$props.content ? u(yf, {
      contentClassName: d
    }, _n(f) ? f : {
      default: () => [f]
    }) : u("div", {
      class: "k-actionsheet-content"
    }, [u("div", {
      class: "k-list-ul",
      role: "group"
    }, [this.topGroupItems && this.topGroupItems.map(function(y, C) {
      const D = P.call(this, this.$props.item || y.content, T.call(this));
      return u(us, {
        style: y.style,
        class: y.class,
        title: y.title,
        description: y.description,
        disabled: y.disabled,
        id: C,
        key: C,
        item: y,
        icon: y.icon,
        svgIcon: y.svgIcon,
        iconSize: y.iconSize,
        iconColor: y.iconColor,
        tabIndex: a || 0,
        content: D,
        onClick: this.handleItemClick
      }, null);
    }, this)]), this.shouldRenderSeparator && u("hr", {
      class: "k-hr"
    }, null), u("div", {
      class: "k-list-ul",
      role: "group"
    }, [this.bottomGroupItems && this.bottomGroupItems.map(function(y, C) {
      var D;
      return u(us, {
        style: y.style,
        class: y.class,
        id: C + (((D = this.topGroupItems) == null ? void 0 : D.length) || 0),
        key: C,
        item: y,
        title: y.title,
        description: y.description,
        disabled: y.disabled,
        icon: y.icon,
        svgIcon: y.svgIcon,
        iconSize: y.iconSize,
        iconColor: y.iconColor,
        tabIndex: a || 0,
        onClick: this.handleItemClick
      }, null);
    }, this)])]), this.$props.footer && u(xf, {
      footerClassName: c
    }, _n(v) ? v : {
      default: () => [v]
    })]);
    return this.show && u("div", {
      class: "k-actionsheet-container"
    }, [u("div", {
      class: "k-overlay",
      onClick: this.handleOverlayClick
    }, null), n ? u(to, {
      onExited: this.hideActionSheet,
      direction: "up",
      componentChildStyle: i || this.bottomPosition,
      transitionEnterDuration: s,
      transitionExitDuration: s,
      appear: r
    }, {
      default: () => [r ? $ : null]
    }) : $]);
  },
  methods: {
    handleKeyDown(e) {
      this.$props.navigatable && this.navigation.triggerKeyboardEvent(e);
    },
    onTab(e, t, i) {
      i.preventDefault(), i.shiftKey ? t.focusPrevious(e) : t.focusNext(e);
    },
    handleOverlayClick(e) {
      this.$emit("close", e), this.$props.animation || this.hideActionSheet();
    },
    handleItemClick(e) {
      this.$emit("itemselect", e), this.$props.animation || this.hideActionSheet();
    },
    onEnter(e, t, i) {
      if (e.ariaDisabled)
        return;
      const n = e.className && e.className.indexOf("k-actionsheet-item") !== -1, r = t.elements.filter((a) => a.className.indexOf("k-actionsheet-item") !== -1);
      if (n) {
        i.preventDefault();
        const a = this.$props.items[r.indexOf(e)];
        this.$emit("itemselect", {
          syntheticEvent: i,
          item: a,
          title: a && a.title
        });
      }
      this.$props.animation || this.hideActionSheet();
    },
    onEscape(e, t, i) {
      i.preventDefault(), this.$emit("close", i), this.$props.animation || this.hideActionSheet();
    },
    hideActionSheet() {
      this.show = !1;
    }
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const sr = "dropdowns.nodata", wf = "dropdowns.expandbutton", Sf = "dropdowns.clear", or = "dropdowns.select", lr = "dropdowns.defaultLabel", Cf = "dropdowns.adaptiveModeFooterApply", If = "dropdowns.adaptiveModeFooterCancel", ua = {
  [Sf]: "clear",
  [wf]: "expand button",
  [sr]: "NO DATA FOUND.",
  [or]: "Select",
  [lr]: "Filter",
  [Cf]: "Apply",
  [If]: "Cancel"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const {
  sizeMap: Df,
  roundedMap: Ef
} = ye, Mf = /* @__PURE__ */ k({
  name: "list-filter",
  emits: {
    keydown: (e) => !0,
    change: (e) => !0,
    focus: (e) => !0,
    blur: (e) => !0
  },
  inject: {
    kendoLocalizationService: {
      default: null
    }
  },
  props: {
    value: String,
    rounded: {
      type: String,
      default: "medium",
      validator: function(e) {
        return ["small", "medium", "large", "full"].includes(e);
      }
    },
    fillMode: {
      type: String,
      default: "solid",
      validator: function(e) {
        return ["solid", "flat", "outline"].includes(e);
      }
    },
    size: {
      type: String,
      default: "medium",
      validator: function(e) {
        return ["small", "medium", "large"].includes(e);
      }
    },
    adaptiveMode: {
      type: Boolean,
      default: !1
    },
    ariaControlsId: String,
    ariaActivedescendantId: String,
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    spanClass() {
      const {
        size: e,
        rounded: t,
        fillMode: i
      } = this.$props;
      return {
        "k-searchbox k-input": !0,
        [`k-input-${Df[e] || e}`]: e,
        [`k-rounded-${Ef[t] || t}`]: t,
        [`k-input-${i}`]: i
      };
    }
  },
  setup() {
    return {
      inputRef: V(null)
    };
  },
  methods: {
    onKeyDown(e) {
      this.$emit("keydown", e);
    },
    onChange(e) {
      this.$emit("change", e);
    },
    handleFocus(e) {
      this.$emit("focus", e);
    },
    handleBlur(e) {
      this.$emit("blur", e);
    },
    prefixRender(e) {
      return e(ie, {
        class: "k-input-icon",
        name: "search",
        icon: bd
      });
    }
  },
  mounted() {
    this.input = J(this, "input")._input;
  },
  render() {
    const {
      size: e,
      rounded: t,
      fillMode: i,
      adaptiveMode: n,
      ariaControlsId: r,
      ariaActivedescendantId: a,
      tabIndex: o
    } = this.$props, s = Z(this).toLanguageString(lr, ua[lr]), l = function() {
      return u(_o, {
        ref: he(this, "input"),
        value: this.$props.value,
        onInput: this.onChange,
        onKeydown: this.onKeyDown,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        size: e,
        fillMode: i,
        rounded: t,
        inputPrefix: this.prefixRender,
        role: "searchbox",
        "aria-label": s,
        "aria-haspopup": "listbox",
        "aria-autocomplete": "list",
        "aria-activedescendant": a,
        "aria-controls": r,
        tabIndex: o
      }, null);
    };
    return n ? l.call(this) : u("div", {
      class: "k-list-filter"
    }, [l.call(this)]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Dt = (e) => e != null, Ff = (e, t) => {
  for (let i = 0; i < e.length; i++)
    if (e.charAt(i) !== t)
      return !1;
  return !0;
}, Lf = (e, t, i) => {
  let n = e;
  return i && (n = [i].concat(n)), n.slice(t).concat(n.slice(0, t));
}, ds = (e, t, i) => {
  if (!Dt(e))
    return !1;
  let n = String(e);
  return i && (n = n.toLowerCase()), n.indexOf(t) === 0;
}, Of = (e, t, i, n, r) => {
  const a = e.offsetHeight, o = t * i + (r ? n - e.scrollTop : 0);
  if (r) {
    let s = 0;
    o + t > a ? s = o + t - a : o < 0 && (s = o), s !== 0 ? e.scrollTop += s : e.scrollTop === 0 && n !== 0 && (e.scrollTop = n);
  } else
    o + t > a + e.scrollTop ? e.scrollTop = o + t - a : o < e.scrollTop && (e.scrollTop -= e.scrollTop - o);
}, Nf = (e, t, i) => {
  let n = -1;
  if (t) {
    t = t.toLowerCase();
    for (let r = 0; r < e.length; r++) {
      const a = (_e(e[r], i) || "") + "";
      if (a && a.toLowerCase().startsWith(t)) {
        n = r;
        break;
      }
    }
  }
  return n;
}, Af = (e, t, i, n = !1) => {
  const r = (a) => n ? a : a.toLowerCase();
  return e.findIndex((a) => i ? r(_e(a, i)) === r(t) : r(t) === r(a.toString()));
}, _e = (e, t) => {
  if (t && Dt(e)) {
    const i = t.split(".");
    let n = e;
    return i.forEach((r) => {
      n = n ? n[r] : void 0;
    }), n;
  }
  return e;
}, Ee = (e, t, i) => e === t || Dt(e) === Dt(t) && _e(e, i) === _e(t, i), _f = (e, t, i) => {
  if (t) {
    const n = Af(e, t, i, !0);
    return n !== -1 ? e[n] : e[Nf(e, t, i)];
  }
  return e[0];
}, cs = (e) => {
  e.target.nodeName !== "INPUT" && e.preventDefault();
}, zf = typeof window < "u" && /Firefox/.test(window.navigator.userAgent), Vf = 17895697;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Tf = /* @__PURE__ */ k({
  name: "list-default-item",
  props: {
    defaultItem: [Object, String],
    textField: String,
    selected: Boolean,
    onDefaultitemclick: Function
  },
  methods: {
    onMouseDown(e) {
      e.preventDefault();
    },
    onClick(e) {
      this.$emit("defaultitemclick", e);
    }
  },
  render() {
    const {
      selected: e,
      defaultItem: t,
      textField: i
    } = this.$props;
    return u("div", {
      onClick: this.onClick,
      onMousedown: this.onMouseDown,
      style: {
        position: "unset"
      },
      class: fe("k-list-optionlabel", {
        "k-selected": e
      })
    }, [_e(t, i) || ""]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Pf = /* @__PURE__ */ k({
  name: "KendoListItem",
  inheritAttrs: !1,
  props: {
    id: String,
    index: Number,
    dataItem: [Object, String, Number],
    textField: String,
    focused: Boolean,
    selected: Boolean,
    render: Object,
    onItemClick: Function
  },
  computed: {
    itemClass() {
      return {
        "k-list-item": !0,
        "k-selected": this.$props.selected,
        "k-focus": this.$props.focused
      };
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("itemClick", this.$props.index, e);
    }
  },
  render() {
    const {
      selected: e
    } = this.$props, t = u("li", {
      id: this.$props.id,
      role: "option",
      "aria-selected": e,
      class: fe("k-list-item", {
        "k-selected": e,
        "k-focus": this.$props.focused,
        [this.$attrs.class]: this.$attrs.class
      }),
      onClick: this.handleClick,
      style: this.$attrs.style || {
        position: "unset"
      }
    }, [u("span", {
      class: "k-list-item-text"
    }, [_e(this.$props.dataItem, this.$props.textField).toString()])]);
    return _.call(this, {
      h: M,
      template: this.$props.render,
      defaultRendering: t,
      additionalProps: {
        ...this.$props,
        itemClass: this.itemClass
      },
      additionalListeners: {
        click: this.handleClick
      }
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Hf = /* @__PURE__ */ k({
  name: "KendoListItem",
  inheritAttrs: !1,
  props: {
    id: String,
    group: String,
    render: Object
  },
  render() {
    const {
      id: e,
      group: t,
      virtual: i,
      render: n
    } = this.$props, r = u("li", {
      id: e,
      role: "group",
      class: "k-list-group-item",
      style: {
        position: i ? "relative" : "unset"
      }
    }, [u("span", {
      class: n ? void 0 : "k-list-item-text"
    }, [t])]);
    return _.call(this, {
      h: M,
      template: this.$props.render,
      defaultRendering: r,
      additionalProps: {
        ...this.$props
      }
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Rf = /* @__PURE__ */ k({
  name: "list",
  emits: {
    listclick: (e) => !0,
    scroll: (e) => !0
  },
  inheritAttrs: !1,
  props: {
    id: String,
    show: Boolean,
    dataItems: Array,
    value: [Object, String, Number, Boolean, Array],
    textField: String,
    valueField: String,
    optionsGuid: String,
    wrapperCssClass: String,
    wrapperStyle: Object,
    listStyle: Object,
    skip: Number,
    focusedIndex: Number,
    highlightSelected: {
      type: Boolean,
      default: !0
    },
    itemRender: [String, Function, Object],
    groupHeaderItemRender: [String, Function, Object],
    noDataRender: [String, Function, Object],
    scroller: Boolean,
    groupField: String
  },
  inject: {
    kendoLocalizationService: {
      default: null
    }
  },
  setup() {
    const e = V(null), t = H("kendoLocalizationService", {});
    return {
      listRef: e,
      kendoLocalizationService: t
    };
  },
  mounted() {
    this.list = J(this, "list");
  },
  methods: {
    handleClick(e, t) {
      this.$emit("listclick", e, t);
    },
    handleScroll(e) {
      this.$emit("scroll", e);
    }
  },
  render() {
    const e = B(this), t = Z(this), {
      id: i,
      show: n,
      wrapperCssClass: r,
      wrapperStyle: a,
      listStyle: o,
      listRef: s
    } = this.$props, l = function() {
      const c = this.$props.noDataRender, h = u("div", {
        class: "k-nodata"
      }, [u("div", null, [t.toLanguageString(sr, ua[sr])])]);
      return _.call(this, {
        h: M,
        template: c,
        defaultRendering: h
      });
    }, d = (function() {
      const {
        textField: c,
        valueField: h,
        optionsGuid: p,
        skip: g = 0,
        focusedIndex: m,
        highlightSelected: f,
        value: b,
        groupField: v,
        itemRender: $,
        groupHeaderItemRender: y,
        dataItems: C
      } = this.$props, D = Array.isArray(b);
      let S = 0;
      return C.map(function(E, L) {
        const j = g + L, Q = f && (!D && Ee(E, b, h) || D && b.findIndex((w) => Ee(w, E, h)) !== -1);
        let z, Y, q;
        return L > 0 && v !== void 0 && (Y = _e(E, v), q = _e(C[L - 1], v), Y && q && Y !== q !== void 0 && (z = Y)), z !== void 0 && Object.keys(E).length === 1 && (S += 1), z !== void 0 && E[v] !== void 0 && Object.keys(E).length === 1 ? u(Hf, {
          id: `option-${p}-${j}`,
          key: j + "-group-item",
          group: z,
          render: y
        }, null) : u(Pf, {
          id: `option-${p}-${j}`,
          dataItem: E,
          selected: Q,
          focused: m === j - S,
          index: j - S,
          key: j - S,
          onItemClick: this.handleClick,
          textField: c,
          render: $
        }, null);
      }, this);
    }).call(this);
    return d.length ? u("div", {
      class: r,
      style: a,
      unselectable: "on",
      onScroll: this.handleScroll
    }, [u("ul", {
      id: i,
      role: "listbox",
      "aria-live": "polite",
      "aria-hidden": n ? void 0 : !0,
      class: "k-list-ul",
      ref: he(this, "list"),
      style: o
    }, [d]), e]) : l.call(this);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
var Bf = Object.defineProperty, jf = (e, t, i) => t in e ? Bf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i, We = (e, t, i) => jf(e, typeof t != "symbol" ? t + "" : t, i);
let Gf = class {
  constructor() {
    We(this, "containerHeight", 0), We(this, "skip", 0), We(this, "total", 0), We(this, "enabled", !1), We(this, "pageSize", 0), We(this, "itemHeight", 0), We(this, "prevScrollPos", 0), We(this, "listTranslate", 0), We(this, "scrollSyncing", !1), We(this, "scrollerRef", (t) => {
      this.container = t, t && (t.setAttribute("unselectable", "on"), setTimeout(() => this.calcScrollElementHeight, 0));
    }), We(this, "calcScrollElementHeight", () => {
      var t;
      this.scrollSyncing = !0;
      let i = !1;
      const n = (t = this.container) == null ? void 0 : t.children[0], r = n ? Array.from(n.children) : [];
      this.itemHeight = r[0] ? r[0].offsetHeight : this.itemHeight;
      const a = this.itemHeight * (this.total - r.length);
      this.containerHeight = zf ? Math.min(Vf, a) : a;
      const o = this.containerHeight;
      return this.scrollElement && (i = this.scrollElement.style.height !== o + "px", i && (this.scrollElement.style.height = o + "px")), this.scrollSyncing = !1, i;
    }), this.scrollHandler = this.scrollHandler.bind(this);
  }
  get translate() {
    return this.listTranslate;
  }
  changePage(t, i) {
    const n = Math.min(Math.max(0, t), this.total - this.pageSize);
    n !== this.skip && this.PageChange({
      skip: n,
      take: this.pageSize
    }, i);
  }
  translateTo(t) {
    this.listTranslate = t, this.list && (this.list.style.transform = "translateY(" + t + "px)");
  }
  reset() {
    this.container && (this.calcScrollElementHeight(), this.container.scrollTop = 0, this.translateTo(0));
  }
  scrollToEnd() {
    this.container && this.list && (this.calcScrollElementHeight(), this.container.scrollTop = this.container.scrollHeight - this.container.offsetHeight, this.translateTo(Math.min(this.container.scrollHeight, this.containerHeight)));
  }
  localScrollUp(t) {
    const i = this.itemHeight, n = this.container.scrollTop;
    let r = this.listTranslate, a, o = n - r;
    if (!(o > i)) {
      for (a = 0; a < this.skip && !(r + i + o <= n); a++)
        r -= i;
      if (r = this.validateTranslate(r), this.skip - a <= 0 && r >= n) {
        this.translateTo(0), this.changePage(0, t), this.container.scrollTop = 0;
        return;
      }
      r !== this.listTranslate && (this.translateTo(r), this.changePage(this.skip - a, t));
    }
  }
  localScrollDown(t) {
    const i = this.itemHeight;
    let n = this.container.scrollTop, r = this.listTranslate;
    const a = this.list.children.length;
    let o;
    for (o = 0; o < a && !(r + i >= n); o++)
      r += i;
    r = this.validateTranslate(r), o >= a && this.skip + o >= this.total ? (this.translateTo(r), this.changePage(this.total - 1, t)) : r !== this.listTranslate && (this.translateTo(r), this.changePage(this.skip + o, t));
  }
  scrollNonStrict(t) {
    const i = this.containerHeight ? this.total * this.prevScrollPos / this.containerHeight : 0, n = Math.min(Math.floor(i), this.total - 1);
    let r = this.containerHeight * i / this.total;
    r = this.validateTranslate(r), this.translateTo(r), this.changePage(n, t);
  }
  scrollHandler(t) {
    const i = this.container ? this.container.scrollTop : 0, n = this.prevScrollPos;
    this.prevScrollPos = i, this.ScrollChange(t), !(!this.enabled || !this.list || !this.container || this.scrollSyncing) && (i - n <= 0 && i > this.listTranslate - this.list.scrollHeight / 10 ? this.localScrollUp(t) : i - n > 0 && i < this.listTranslate + this.list.scrollHeight * 2 / 3 ? this.localScrollDown(t) : this.scrollNonStrict(t));
  }
  validateTranslate(t) {
    return t = Math.max(0, t), t = Math.min(this.containerHeight, t), t;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let Kf = class {
  navigate(t) {
    const i = t.keyCode;
    if (i === O.up || i === O.left)
      return this.next({ current: t.current, min: t.min, max: t.max, step: -1 });
    if (i === O.down || i === O.right)
      return this.next({ current: t.current, min: t.min, max: t.max, step: 1 });
    if (i === O.home)
      return 0;
    if (i === O.end)
      return t.max;
  }
  next(t) {
    return Dt(t.current) ? Math.min(t.max, Math.max(t.current + t.step, t.min)) : t.min;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const qf = {
  name: "@progress/kendo-vue-dropdowns",
  productName: "Kendo UI for Vue",
  productCode: "KENDOUIVUE",
  productCodes: ["KENDOUIVUE"],
  publishDate: 1763478541,
  version: "7.0.2",
  licensingDocsUrl: "https://www.telerik.com/kendo-vue-ui/my-license/"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
var Wf = Object.defineProperty, Uf = (e, t, i) => t in e ? Wf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i, Pe = (e, t, i) => Uf(e, typeof t != "symbol" ? t + "" : t, i);
let Bo = class {
  constructor(t) {
    Pe(this, "vs", new Gf()), Pe(this, "navigation", new Kf()), Pe(this, "handleItemClick", (i, n) => {
      const r = this.initState();
      r.event = n, this.component.handleItemSelect(i, r), this.togglePopup(r), this.applyState(r);
    }), Pe(this, "handleFocus", (i) => {
      if (!this.component.currentFocused) {
        const n = this.initState();
        n.data.currentFocused = !0, n.events.push({
          type: "focus"
        }), n.event = i, this.applyState(n);
      }
    }), Pe(this, "filterChanged", (i, n) => {
      const r = this.component, {
        textField: a,
        filterable: o
      } = r.$props;
      o && (n.events.push({
        type: "filterchange",
        filter: {
          field: a,
          operator: "contains",
          ignoreCase: !0,
          value: i
        }
      }), this.repositionPopup());
    }), Pe(this, "togglePopup", (i) => {
      const n = this.component.$props, r = n.opened !== void 0 ? n.opened : this.component.currentOpened;
      n.opened === void 0 && (i.data.currentOpened = !r), r ? i.events.push({
        type: "close"
      }) : (i.events.push({
        type: "open"
      }), this.calculatePopupWidth());
    }), Pe(this, "pageChange", (i, n) => {
      const r = this.initState();
      r.event = n, this.triggerOnPageChange(r, i.skip, i.take), this.applyState(r);
    }), Pe(this, "scrollChange", (i) => {
      this.component.$emit("scroll", i);
    }), Pe(this, "scrollToVirtualItem", (i, n) => {
      const r = this.vs;
      if (r.enabled = !1, i.skip === 0)
        r.reset();
      else if (i.skip + i.pageSize === i.total)
        r.scrollToEnd();
      else {
        let a = r.translate;
        a === 0 && (r.calcScrollElementHeight(), a = r.itemHeight * i.skip, r.translateTo(a - r.itemHeight)), r.container && (r.container.scrollTop = a), this.scrollToItem(n, !0);
      }
      setTimeout(() => r.enabled = !0, 10);
    }), Pe(this, "getGroupedDataModernMode", (i, n) => {
      const r = [];
      return i.forEach((a, o) => {
        i[o - 1] && a[n] !== i[o - 1][n] && r.push({
          [n]: a[n]
        }), r.push(i[o]);
      }), r;
    }), Pe(this, "resetGroupStickyHeader", (i, n) => {
      const r = this.initState();
      i !== n.group && n.state && (n.state.data.group = i, this.applyState(r));
    }), Ve(qf), this.listBoxId = me(), this.guid = me(), this.component = t, this.vs.PageChange = this.pageChange, this.vs.ScrollChange = this.scrollChange;
  }
  didMount() {
    const t = this.component.$props, i = t.popupSettings, n = t.style, r = i && i.width;
    let a = t.opened === !0;
    r === void 0 && this.calculatePopupWidth(), t.dir === void 0 && n && n.direction === void 0 && (this.calculateDir(), a = !0), a && this.component.$forceUpdate();
  }
  calculateDir() {
    this.component.element && (this.dirCalculated = window.getComputedStyle(this.component.element).direction || void 0);
  }
  calculatePopupWidth() {
    const t = this.component.$props, i = t.popupSettings, n = i && i.width;
    this.wrapper && !n && (this.component.popupWidth = t.popupSettings.width !== void 0 ? t.popupSettings.width : this.wrapper.offsetWidth + "px");
  }
  scrollToItem(t, i) {
    const n = this.list || this.vs.list, r = n ? n.children[0] : void 0;
    if (r && t >= 0) {
      const a = this.vs, o = a.container || n.parentNode;
      if (o) {
        const s = i !== void 0 ? i : a.enabled;
        Of(o, r.offsetHeight, t, a.translate, s);
      }
    }
  }
  repositionPopup() {
    const t = this.component;
    setTimeout(function() {
      const i = t.$refs.container;
      if (i) {
        const n = i.$refs.popup;
        n && n.show && n.reposition();
      }
    }, 5);
  }
  initState() {
    return {
      data: {},
      events: [],
      event: void 0
    };
  }
  applyState(t) {
    Object.keys(t.data).length > 0 && Object.keys(t.data).forEach((r) => {
      this.component[r] = t.data[r];
    });
    const i = this.component.primitiveValue(), n = {
      event: t.event,
      component: this.component,
      target: {
        name: this.component.$props.name,
        value: i
      },
      value: i
    };
    t.events.forEach((r) => {
      const {
        type: a
      } = r;
      delete r.type, a && (a === "change" && (this.component.$emit("changemodel", i), this.component.$emit("update:modelValue", i)), this.component.$emit(a, {
        ...n,
        ...r
      }));
    });
  }
  triggerOnPageChange(t, i, n) {
    const r = this.component.$props.virtual;
    if (r) {
      const a = Math.min(Math.max(0, i), Math.max(0, r.total - n));
      a !== r.skip && t.events.push({
        type: "pagechange",
        page: {
          skip: a,
          take: n
        }
      });
    }
  }
  triggerPageChangeCornerItems(t, i) {
    const n = this.component.$props, {
      dataItems: r = [],
      dataItemKey: a,
      virtual: o
    } = n, s = n.opened !== void 0 ? n.opened : this.component.currentOpened;
    t && o && this.vs.enabled && (o.skip > 0 && Ee(t, r[0], a) ? this.triggerOnPageChange(i, o.skip - 1, o.pageSize) : o.skip + o.pageSize < o.total && Ee(t, r[r.length - 1], a) ? this.triggerOnPageChange(i, o.skip + 1, o.pageSize) : !s && o.skip + o.pageSize < o.total && Ee(t, r[r.length - 1], a) && this.triggerOnPageChange(i, o.skip + 1, o.pageSize));
  }
  getTemplateDef(t, i) {
    const n = P.call(this, t, T.call(this));
    return _.call(this, {
      h: i,
      template: n
    });
  }
  getListItemHeight(t) {
    const i = t && window.getComputedStyle(t);
    return i ? i.height.slice(0, i.height.length - 2) : 0;
  }
};
Pe(Bo, "defaultProps", {
  popupSettings: {
    animate: !0,
    height: "200px"
  },
  required: !1,
  validityStyles: !0
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const hs = /* @__PURE__ */ k({
  name: "KendoGroupStickyHeader",
  inheritAttrs: !1,
  props: {
    group: String,
    render: Object
  },
  render() {
    const {
      group: e,
      render: t
    } = this.$props, i = u("div", {
      class: "k-list-group-sticky-header"
    }, [u("div", {
      class: "k-list-header-text"
    }, [e])]);
    return _.call(this, {
      h: M,
      template: t,
      defaultRendering: i,
      additionalProps: {
        ...this.$props
      }
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Yf = 500, Xf = 768;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const {
  sizeMap: zn,
  roundedMap: Jf
} = ye;
function Zf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const Qf = "Please select a value from the list!", jt = /* @__PURE__ */ k({
  name: "KendoDropDownList",
  model: {
    event: "changemodel"
  },
  props: {
    id: String,
    title: String,
    dataItemKey: {
      type: [Object, String]
    },
    defaultValue: {
      type: [String, Object, Number, Boolean],
      default: void 0
    },
    name: String,
    modelValue: {
      type: [String, Object, Number, Boolean],
      default: void 0
    },
    value: {
      type: [String, Object, Number, Boolean],
      default: void 0
    },
    label: {
      type: String
    },
    required: {
      type: Boolean,
      default: !1
    },
    leftRightKeysNavigation: {
      type: Boolean,
      default: !0
    },
    valid: {
      type: Boolean,
      default: void 0
    },
    validate: {
      type: Boolean
    },
    validationMessage: {
      type: String,
      default: void 0
    },
    validityStyles: {
      type: Boolean,
      default: !0
    },
    delay: {
      type: Number,
      default: 500
    },
    ignoreCase: {
      type: Boolean,
      default: !0
    },
    icon: String,
    svgIcon: Object,
    iconClassName: String,
    defaultItem: [Object, String],
    valueRender: [String, Function, Object],
    valueMap: Function,
    opened: {
      type: Boolean,
      default: void 0
    },
    disabled: Boolean,
    dir: {
      type: String,
      default: void 0
    },
    tabIndex: {
      type: Number,
      default: 0
    },
    accessKey: String,
    dataItems: Array,
    textField: String,
    valueField: String,
    valuePrimitive: Boolean,
    className: String,
    loading: Boolean,
    popupSettings: {
      type: Object,
      default: {
        animate: !0,
        height: "200px",
        anchor: ""
      }
    },
    itemRender: [String, Function, Object],
    groupHeaderItemRender: [String, Function, Object],
    groupStickyHeaderItemRender: [String, Function, Object],
    listNoDataRender: [String, Function, Object],
    focusedItemIndex: Function,
    header: [String, Function, Object],
    footer: [String, Function, Object],
    filterable: Boolean,
    filter: {
      type: String,
      default: void 0
    },
    virtual: {
      type: Object,
      default: void 0
    },
    ariaLabelledBy: String,
    ariaLabel: String,
    ariaDescribedBy: String,
    rounded: {
      type: String,
      default: "medium",
      validator: function(e) {
        return ["small", "medium", "large", "full"].includes(e);
      }
    },
    fillMode: {
      type: String,
      default: "solid",
      validator: function(e) {
        return ["solid", "flat", "outline"].includes(e);
      }
    },
    size: {
      type: String,
      default: "medium",
      validator: function(e) {
        return ["small", "medium", "large"].includes(e);
      }
    },
    groupField: {
      type: String
    },
    adaptive: {
      type: Boolean,
      default: void 0
    },
    adaptiveTitle: {
      type: String,
      default: void 0
    },
    onChange: Function
  },
  inject: {
    kendoLocalizationService: {
      default: null
    },
    adaptiveModeBreakpoints: {
      default: {
        small: Yf,
        medium: Xf
      }
    }
  },
  data() {
    return {
      hasMounted: !1,
      currentText: "",
      currentValue: "",
      currentFocused: !1,
      currentOpened: !1,
      searchState: {
        word: "",
        last: ""
      },
      _skipFocusEvent: !1,
      valueDuringOnChange: {},
      _navigated: !1,
      group: void 0,
      isScrolling: !1,
      itemHeight: 0,
      state: void 0,
      popupWidth: void 0,
      windowWidth: 0
    };
  },
  watch: {
    currentOpened: function(e, t) {
      this.prevCurrentOpened = t;
    },
    opened: function(e, t) {
      this.prevOpened = t;
    },
    virtual: function(e, t) {
      e && t && e.total !== t.total && (this.virtualTotalHasChanged = !0), this.virtualHasChanged = !0;
    },
    isOpen: function() {
      setTimeout(() => {
        const e = document.querySelector(".k-list-item");
        this.itemHeight = this.base.getListItemHeight(e);
      }, 100);
    }
  },
  created() {
    this.observer = null, this.valueDuringOnChange = void 0, this.currentText = void 0, this.currentValue = void 0, this.prevCurrentValue = this.computedValue(), this.currentFocused = void 0, this.currentOpened = void 0, this.base = new Bo(this), this.anchor = me(), this.inputId = me();
  },
  setup() {
    const e = V(null), t = V(null), i = V(null);
    return {
      selectRef: e,
      baseWrapperRef: t,
      kendoAnchorRef: i
    };
  },
  mounted() {
    this.observer = se && window.ResizeObserver && new ResizeObserver(this.calculateMedia), document != null && document.body && this.observer && this.observer.observe(document.body), this.hasMounted = !0, this.select = J(this, "select"), this.base.wrapper = J(this, "kendoAnchor"), this.base.didMount(), this.setValidity();
  },
  updated() {
    var e;
    const {
      dataItems: t = [],
      dataItemKey: i,
      virtual: n,
      groupField: r,
      textField: a
    } = this.$props, o = this.isOpen, s = this.prevOpened !== void 0 ? this.prevOpened : this.prevCurrentOpened, l = !s && o, d = this.$refs.list, c = this.$refs.filterInput, h = this.$refs.scrollElement;
    if (this.$refs.scroller, d && (this.base.vs.list = d.list, this.base.list = d.list), h && (this.base.vs.scrollElement = h), c && (this.filterInput = c), d && t.length && this.base.vs.scrollerRef(d.$el), this.$props.popupSettings.animate || l && this.onPopupOpened(), n && this.virtualTotalHasChanged)
      this.base.vs.calcScrollElementHeight(), this.base.vs.reset(), this.virtualTotalHasChanged = !1;
    else {
      const p = this.computedValue(), g = this.prevCurrentValue;
      let m = t.findIndex((b) => Ee(b, p, i));
      r && (m = (e = this.base.getGroupedDataModernMode(t, r)) == null ? void 0 : e.indexOf(p));
      const f = !Ee(g, p, i);
      l && n ? (this.base.scrollToVirtualItem(n, m), this.prevCurrentOpened = !0) : l && !n ? (t && t.length !== 0 && this.base.resetGroupStickyHeader(t[0][r], this), this.base.scrollToItem(m), this.prevCurrentOpened = !0) : o && s && p && f && !this._navigated ? this.base.scrollToItem(m) : o && s && this._navigated && (this._navigated && n && n.skip === 0 ? this.base.vs.reset() : this._navigated && n && n.skip === n.total - n.pageSize && this.base.vs.scrollToEnd());
    }
    this._navigated = !1, this.prevCurrentValue = this.computedValue(), this.setValidity();
  },
  computed: {
    index() {
      const {
        dataItems: e = [],
        dataItemKey: t
      } = this.$props, i = this.computedValue();
      return e.findIndex((n) => Ee(n, i, t));
    },
    spanClassNames() {
      const e = !this.hasMounted || !this.$props.validityStyles || this.validity().valid;
      return {
        "k-floating-label-container": !0,
        "k-focus": this.currentFocused,
        "k-empty": !this.computedValue(),
        "k-invalid": !e && e !== void 0,
        "k-rtl": this.$props.dir === "rtl"
      };
    },
    dropDownListId() {
      return `value-${this.base.guid}${this.$props.ariaDescribedBy ? " " + this.$props.ariaDescribedBy : ""}`;
    },
    isOpen() {
      return this.$props.opened !== void 0 ? this.$props.opened : this.currentOpened;
    },
    animationStyles() {
      return this.windowWidth <= this.adaptiveModeBreakpoints.small ? {
        top: 0,
        width: "100%",
        height: "100%"
      } : void 0;
    },
    classNameAdaptive() {
      return this.windowWidth <= this.adaptiveModeBreakpoints.small ? "k-adaptive-actionsheet k-actionsheet-fullscreen" : "k-adaptive-actionsheet k-actionsheet-bottom";
    },
    adaptiveState() {
      return this.windowWidth <= this.adaptiveModeBreakpoints.medium && this.$props.adaptive;
    }
  },
  methods: {
    focus() {
      this.base.wrapper && this.base.wrapper.focus();
    },
    computedValue() {
      let e;
      return this.valueDuringOnChange !== void 0 ? e = this.valueDuringOnChange : this.$props.value !== void 0 ? e = this.$props.value : this.$props.modelValue !== void 0 ? e = this.$props.modelValue : this.currentValue !== void 0 ? e = this.currentValue : this.$props.defaultValue !== void 0 && (e = this.$props.defaultValue), !Dt(e) && this.$props.defaultItem !== void 0 && (e = this.$props.defaultItem), this.valuePrimitive && this.findByFieldValue(this.valueField, e) || e;
    },
    findByFieldValue(e, t) {
      const i = this.dataItems.findIndex((n) => _e(n, e) === t);
      return this.dataItems[i];
    },
    primitiveValue() {
      const e = this.computedValue();
      return this.valuePrimitive ? _e(e, this.valueField) : e;
    },
    validity() {
      const e = this.$props.validationMessage !== void 0, t = !this.$props.required || this.computedValue() !== null && this.computedValue() !== "" && this.computedValue() !== void 0, i = this.$props.valid !== void 0 ? this.$props.valid : t;
      return {
        customError: e,
        valid: i,
        valueMissing: this.computedValue() === null
      };
    },
    handleItemSelect(e, t) {
      const {
        dataItems: i = [],
        virtual: n,
        dataItemKey: r,
        defaultItem: a
      } = this.$props, o = n ? n.skip : 0, s = e === -1 && a !== void 0 ? a : i[e - o], l = !Ee(s, this.computedValue(), r);
      this.triggerOnChange(s, t), l && this.base.triggerPageChangeCornerItems(s, t);
    },
    onNavigate(e, t) {
      const {
        dataItems: i = [],
        defaultItem: n,
        dataItemKey: r,
        virtual: a = {
          skip: 0,
          total: 0,
          pageSize: 0
        }
      } = this.$props, o = this.base.vs, s = this.computedValue(), l = i.findIndex((c) => Ee(c, s, r)), d = this.base.navigation.navigate({
        current: a.skip + l,
        max: (o.enabled ? a.total : i.length) - 1,
        min: n !== void 0 ? -1 : 0,
        keyCode: t
      });
      d !== void 0 && this.handleItemSelect(d, e), this.applyState(e);
    },
    search(e) {
      clearTimeout(this.typingTimeout), this.$props.filterable || (this.typingTimeout = setTimeout(() => this.searchState.word = "", this.$props.delay), this.selectNext(e));
    },
    selectNext(e) {
      const {
        dataItems: t = [],
        dataItemKey: i
      } = this.$props;
      let n = t.map((b, v) => ({
        item: b,
        itemIndex: v
      }));
      const r = this.searchState.word, a = this.searchState.last, o = Ff(r, a);
      let s = n.length, l = Math.max(0, t.findIndex((b) => Ee(b, this.computedValue(), i))), d;
      this.$props.defaultItem && (d = {
        item: this.$props.defaultItem,
        itemIndex: -1
      }, s += 1, l += 1), l += o ? 1 : 0, n = Lf(n, l, d);
      let c, h, p, g = 0;
      const {
        textField: m,
        ignoreCase: f
      } = this.$props;
      for (; g < s; ) {
        if (c = _e(n[g].item, m), h = o && ds(c, a, f), p = ds(c, r, f), h || p) {
          g = n[g].itemIndex;
          break;
        }
        g++;
      }
      if (g !== s) {
        const b = this.base.initState();
        b.event = e, this.handleItemSelect(g, b), this.applyState(b), this.valueDuringOnChange = void 0;
      }
    },
    handleKeyDown(e) {
      this.isScrolling && (this.isScrolling = !1);
      const {
        dataItems: t = [],
        leftRightKeysNavigation: i,
        filterable: n,
        disabled: r,
        virtual: a = {
          skip: 0,
          total: 0,
          pageSize: 0
        }
      } = this.$props, o = this.isOpen, s = e.keyCode, l = s === O.home || s === O.end, d = s === O.up || s === O.down, c = !o && (e.altKey && s === O.down || s === O.enter || s === O.space), h = o && (e.altKey && s === O.up || s === O.esc), p = i && (s === O.left || s === O.right), g = d || !n && (p || l), m = this.base.initState();
      if (m.event = e, !r) {
        if (l && this.base.vs.enabled)
          s === O.home ? a.skip !== 0 ? (this.base.triggerOnPageChange(m, 0, a.pageSize), this._navigated = !0) : this.triggerOnChange(t[0], m) : a.skip < a.total - a.pageSize ? (this.base.triggerOnPageChange(m, a.total - a.pageSize, a.pageSize), this._navigated = !0) : this.triggerOnChange(t[t.length - 1], m);
        else if (o && s === O.enter) {
          const f = this.focusedIndex();
          f !== void 0 && this.handleItemSelect(f, m), this.base.togglePopup(m), e.preventDefault();
        } else c || h ? (this.adaptiveState && this.handleWrapperClick(e), this.base.togglePopup(m), e.preventDefault()) : g && (this.onNavigate(m, s), e.preventDefault());
        this.applyState(m);
      }
    },
    handleItemClick(e, t) {
      this.base.handleItemClick(e, t), this.valueDuringOnChange = void 0;
    },
    handleFocus(e) {
      this._skipFocusEvent || this.base.handleFocus(e);
    },
    handleBlur(e) {
      if (this._skipFocusEvent || !this.currentFocused)
        return;
      const t = this.isOpen, i = this.base.initState();
      i.event = e, i.data.currentFocused = !1, i.events.push({
        type: "blur"
      }), t && !this.adaptiveState && this.base.togglePopup(i), this.applyState(i);
    },
    handleDefaultItemClick(e) {
      const t = this.base.initState();
      t.event = e, this.base.togglePopup(t), this.triggerOnChange(this.$props.defaultItem, t), this.applyState(t);
    },
    handleWrapperClick(e) {
      const t = this.base.initState();
      t.event = e, this.currentFocused || (t.data.currentFocused = !0), this.base.togglePopup(t), this.applyState(t);
    },
    handleKeyPress(e) {
      if (this.$props.filterable || e.keyCode === O.enter)
        return;
      let t = String.fromCharCode(e.charCode || e.keyCode);
      this.$props.ignoreCase && (t = t.toLowerCase()), t === " " && e.preventDefault(), this.searchState = {
        word: this.searchState.word + t,
        last: this.searchState.last + t
      }, this.search(e);
    },
    handleListFilterChange(e) {
      const t = this.base.initState();
      t.event = e, this.$props.filter === void 0 && (t.data.currentText = e.target.value), this.base.filterChanged(e.target.value, t), t.data.group = void 0, this.applyState(t);
    },
    onPopupOpened() {
      this.filterInput && this.focusElement(this.filterInput.input);
    },
    onPopupClosed() {
      this.currentFocused && setTimeout(() => {
        this.currentFocused && this.base.wrapper && this.focusElement(this.base.wrapper);
      });
    },
    focusedIndex() {
      const e = Dt(this.$props.filter) ? this.$props.filter : this.currentText, {
        dataItems: t = [],
        virtual: i = {
          skip: 0
        },
        dataItemKey: n,
        textField: r,
        focusedItemIndex: a
      } = this.$props, o = this.computedValue(), s = !(t.findIndex((l) => Ee(l, o, n)) < 0 && !this.$props.defaultItem);
      return !s && e && i.skip === 0 ? a ? a(t, e, r) : t.indexOf(_f(t, e, r)) : !s && i.skip === 0 ? 0 : void 0;
    },
    focusElement(e) {
      this._skipFocusEvent = !0, e.focus(), setTimeout(() => this._skipFocusEvent = !1, 30);
    },
    setValidity() {
      this.select && this.select.setCustomValidity && this.select.setCustomValidity(this.validity().valid ? "" : this.$props.validationMessage || Qf);
    },
    triggerOnChange(e, t) {
      Ee(this.computedValue(), e, this.$props.dataItemKey) || (this.$props.value === void 0 && (this.currentValue = e), this.valueDuringOnChange = e, t.events.push({
        type: "change"
      }));
    },
    applyState(e) {
      this.base.applyState(e), this.valueDuringOnChange = void 0;
    },
    calculateMedia(e) {
      for (let t of e)
        this.windowWidth = t.target.clientWidth;
    },
    repositionPopup() {
      this.base.repositionPopup();
    },
    onScroll(e) {
      this.isScrolling = !0;
      const {
        vs: t,
        list: i
      } = this.base;
      t.scrollHandler(e);
      const n = this.base.initState(), {
        groupField: r
      } = this.$props;
      let {
        dataItems: a = []
      } = this.$props, o;
      if (!r || !a.length)
        return;
      const s = this.itemHeight = this.itemHeight || (t.enabled ? t.itemHeight : i ? i.children[0].offsetHeight : 0), l = e.target.scrollTop - t.skip * s;
      r && (a = this.base.getGroupedDataModernMode(a, r), o = a[0][r]);
      for (let d = 1; d < a.length && !(s * d > l); d++)
        a[d] && a[d][r] && (o = a[d][r]);
      o !== this.group && (n.data.group = o, this.applyState(n));
    }
  },
  render() {
    const {
      style: e,
      className: t,
      label: i,
      dir: n,
      virtual: r = {
        skip: 0
      },
      size: a,
      rounded: o,
      fillMode: s,
      dataItemKey: l,
      dataItems: d = [],
      disabled: c,
      tabIndex: h,
      loading: p,
      icon: g,
      svgIcon: m,
      iconClassName: f,
      adaptiveTitle: b,
      header: v,
      footer: $,
      groupStickyHeaderItemRender: y
    } = this.$props, C = this.isOpen, D = _e(this.computedValue(), this.$props.textField), S = !this.$props.validityStyles || this.validity().valid, E = this.base, L = E.vs, j = this.$props.id || this.inputId;
    L.enabled = this.$props.virtual !== void 0;
    const Q = Object.assign({}, {
      animate: !0,
      height: "200px"
    }, this.$props.popupSettings), z = Z(this).toLanguageString(or, ua[or]), Y = this.adaptiveState;
    this.group === void 0 && this.$props.groupField !== void 0 && (this.group = _e(this.$props.dataItems[0], this.$props.groupField));
    const q = P.call(this, this.$props.valueRender, T.call(this)), w = this.currentFocused, F = this.primitiveValue(), ge = d.findIndex((ne) => Ee(ne, F, l)), W = u("span", {
      class: "k-input-inner",
      id: this.dropDownListId
    }, [u("span", {
      class: "k-input-value-text"
    }, [D])]);
    let G = _.call(this, {
      h: M,
      template: q,
      defaultRendering: W,
      additionalProps: {
        value: this.computedValue(),
        ...this.$data
      }
    });
    const De = function(ne) {
      return u("select", {
        name: this.$props.name,
        id: j,
        ref: he(this, "select"),
        tabindex: -1,
        "aria-hidden": !0,
        title: this.$props.label,
        style: {
          opacity: 0,
          width: 1,
          border: 0,
          zIndex: -1,
          position: "absolute",
          left: "50%"
        }
      }, [u("option", {
        value: this.$props.valueMap ? this.$props.valueMap.call(void 0, ne) : ne
      }, null)]);
    }, Ae = () => [u("div", {
      class: "k-actionsheet-titlebar-group k-hbox"
    }, [u("div", {
      class: "k-actionsheet-title"
    }, [u("div", {
      class: "k-text-center"
    }, [b]), u("div", {
      class: "k-actionsheet-subtitle k-text-center"
    }, null)]), u("div", {
      class: "k-actionsheet-actions"
    }, [u(xe, {
      tabIndex: 5,
      "aria-label": "Cancel",
      "aria-disabled": "false",
      type: "button",
      fillMode: "flat",
      onClick: this.handleWrapperClick,
      icon: "x",
      svgIcon: Xr
    }, null)])]), u("div", {
      class: "k-actionsheet-titlebar-group k-actionsheet-filter"
    }, [x.call(this)])], pt = P.call(this, Ae, T.call(this)), st = () => {
      const ne = E.getTemplateDef.call(this, v, M), le = E.getTemplateDef.call(this, $, M), ce = P.call(this, y, T.call(this));
      return u("div", {
        class: "k-list-container"
      }, [ne && u("div", {
        class: "k-list-header"
      }, [ne]), u("div", {
        class: fe("k-list", {
          [`k-list-${zn[a] || a}`]: Y ? !1 : a,
          "k-list-lg": !!Y,
          "k-virtual-list": L.enabled
        })
      }, [yi.call(this), this.group && d.length !== 0 && u(hs, {
        group: this.group,
        render: ce
      }, null), Wt.call(this), le && u("div", {
        class: "k-list-footer"
      }, [le])])]);
    }, ot = P.call(this, st, T.call(this)), Ke = function() {
      return u(kf, {
        expand: C,
        animation: !0,
        animationStyles: this.animationStyles,
        className: this.classNameAdaptive,
        contentClassName: "!k-overflow-hidden",
        header: pt,
        content: ot,
        onClose: this.handleWrapperClick,
        navigatableElements: ["input.k-input-inner", ".k-actionsheet-actions > button"]
      }, null);
    }, yi = function() {
      const {
        textField: ne,
        defaultItem: le
      } = this.$props;
      return le !== void 0 && u(Tf, {
        defaultItem: le,
        textField: ne,
        selected: Ee(this.computedValue(), le, l),
        key: "defaultitemkey",
        onDefaultitemclick: this.handleDefaultItemClick
      }, null);
    }, Wt = function() {
      let ne;
      const {
        textField: le,
        groupField: ce
      } = this.$props;
      let A = this.$props.dataItems || [];
      const ue = P.call(this, this.$props.itemRender, T.call(this)), $t = P.call(this, this.$props.groupHeaderItemRender, T.call(this)), kt = P.call(this, this.$props.listNoDataRender, T.call(this)), lt = r.skip, Te = `translateY(${L.translate}px)`;
      return ce && (A = this.base.getGroupedDataModernMode(A, ce)), u(Rf, {
        id: this.base.listBoxId,
        show: C,
        dataItems: A.slice(),
        focusedIndex: this.focusedIndex(),
        value: this.computedValue(),
        textField: le,
        valueField: l,
        optionsGuid: this.base.guid,
        ref: "list",
        wrapperStyle: {
          maxHeight: Q.height
        },
        wrapperCssClass: "k-list-content",
        listStyle: L.enabled ? {
          transform: Te
        } : void 0,
        key: "listkey",
        skip: lt,
        onListclick: this.handleItemClick,
        itemRender: ue,
        groupHeaderItemRender: $t,
        noDataRender: kt,
        groupField: ce,
        onScroll: this.onScroll
      }, Zf(ne = ae.call(this)) ? ne : {
        default: () => [ne]
      });
    }, x = function() {
      const ne = this.$props.filter !== void 0 ? this.$props.filter : this.currentText;
      return this.$props.filterable && u(Mf, {
        value: ne,
        ref: "filterInput",
        onChange: this.handleListFilterChange,
        onKeydown: this.handleKeyDown,
        size: this.$props.size,
        rounded: this.$props.rounded,
        fillMode: this.$props.fillMode,
        ariaControlsId: this.base.listBoxId,
        ariaActivedescendantId: `option-${this.base.guid}-${this.focusedIndex()}`
      }, null);
    }, ae = function() {
      return L.enabled && u("div", {
        ref: "scrollElement",
        key: "scrollElementKey"
      }, null);
    }, qe = function() {
      const ne = P.call(this, this.$props.groupStickyHeaderItemRender, T.call(this)), le = E.getTemplateDef.call(this, v), ce = E.getTemplateDef.call(this, $);
      return u(mg, {
        ref: "container",
        onMousedown: cs,
        dir: n !== void 0 ? n : E.dirCalculated,
        width: this.popupWidth,
        popupSettings: {
          ...Q,
          popupClass: fe(Q.popupClass, "k-list", {
            [`k-list-${zn[a] || a}`]: a,
            "k-virtual-list": this.base.vs.enabled
          }),
          className: fe("k-list-container", Q.className),
          anchor: this.anchor,
          show: C
        },
        onOpen: this.onPopupOpened,
        onClose: this.onPopupClosed,
        onBlur: this.handleBlur
      }, {
        default: () => [x.call(this), yi.call(this), this.group && d.length !== 0 && u(hs, {
          group: this.group,
          render: ne
        }, null), le && u("div", {
          class: "k-list-header"
        }, [le]), Wt.call(this), ce && u("div", {
          class: "k-list-footer"
        }, [ce])]
      });
    };
    this.$props.virtual !== void 0 && (E.vs.skip = r.skip, E.vs.total = r.total, E.vs.pageSize = r.pageSize);
    const yt = [M((function() {
      return u("span", {
        ref: he(this, "kendoAnchor"),
        class: fe("k-dropdownlist k-picker", t, {
          [`k-picker-${zn[a] || a}`]: a,
          [`k-rounded-${Jf[o] || o}`]: o,
          [`k-picker-${s}`]: s,
          "k-focus": w,
          "k-disabled": c,
          "k-invalid": !S,
          "k-loading": p,
          "k-required": this.required
        }),
        style: i ? {
          ...e,
          width: void 0
        } : e,
        dir: n,
        onMousedown: C ? cs : ke,
        onFocusin: this.handleFocus,
        onFocusout: this.handleBlur,
        tabindex: Nu(h, c),
        accesskey: this.$props.accessKey,
        onKeydown: this.handleKeyDown,
        onKeypress: this.handleKeyPress,
        role: "combobox",
        onClick: c ? ke : this.handleWrapperClick,
        "aria-disabled": c || void 0,
        "aria-haspopup": !0,
        "aria-expanded": C || !1,
        "aria-owns": this.base.listBoxId,
        "aria-activedescendant": C ? "option-" + this.base.guid + "-" + (ge + (r ? r.skip : 0)) : void 0,
        "aria-label": this.$props.ariaLabel || this.$props.label,
        "aria-labelledby": this.$props.ariaLabelledBy,
        "aria-describedBy": this.dropDownListId,
        title: this.$props.title
      }, [G, p && u(ie, {
        name: "loading",
        class: "k-input-loading-icon",
        key: "loading"
      }, null), u(xe, {
        type: "button",
        tabIndex: -1,
        size: a,
        fillMode: s,
        rounded: null,
        ariaLabel: z,
        class: "k-input-button",
        icon: g || "caret-alt-down",
        svgIcon: m || un,
        iconClass: f
      }, null), De.call(this, F), !Y && qe.call(this)]);
    }).call(this), {
      ...this.$attrs
    }), Y && Ke.call(this)];
    return i ? u("span", {
      class: this.spanClassNames,
      onFocusin: this.handleFocus,
      onFocusout: this.handleBlur,
      dir: this.$props.dir
    }, [yt, this.$props.label ? j ? u("label", {
      for: j,
      class: "k-floating-label"
    }, [this.$props.label]) : u("span", {
      class: "k-label"
    }, [this.$props.label]) : null]) : yt;
  }
});
var N = function(e) {
  return e ? new Date(e.getTime()) : null;
}, xi = function(e, t) {
  var i = N(e);
  return t === 0 && i.getHours() === 23 && i.setHours(i.getHours() + 2), i;
}, Ze = function(e, t) {
  var i = N(e);
  return i.setDate(i.getDate() + t), xi(i, e.getHours());
}, nt = function(e, t, i, n, r, a, o) {
  n === void 0 && (n = 0), r === void 0 && (r = 0), a === void 0 && (a = 0), o === void 0 && (o = 0);
  var s = new Date(e, t, i, n, r, a, o);
  return e > -1 && e < 100 && s.setFullYear(s.getFullYear() - 1900), xi(s, n);
}, bt = function(e) {
  var t = nt(e.getFullYear(), e.getMonth() + 1, 1, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
  return Ze(t, -1);
}, Vn = 12, em = function(e, t) {
  return e.getMonth() !== t ? bt(we(e, -1)) : e;
}, we = function(e, t) {
  var i = N(e), n = (i.getMonth() + t) % Vn, r = (Vn + n) % Vn;
  return i.setMonth(i.getMonth() + t), em(xi(i, e.getHours()), r);
}, jo = function(e, t) {
  var i = e.getMonth(), n = nt(t, i, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
  return n.getMonth() === i ? n : bt(we(n, -1));
}, ze = function(e, t) {
  return xi(jo(e, e.getFullYear() + t), e.getHours());
}, li = function(e, t) {
  return ze(e, 100 * t);
}, Je = function(e, t) {
  return ze(e, 10 * t);
}, ps = function(e, t) {
  return Ze(e, t * 7);
}, tm = 864e5, an;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(an || (an = {}));
var Go = function(e, t, i) {
  i === void 0 && (i = an.Forward);
  var n = N(e), r = (t - n.getDay() + 7 * i) % 7;
  return n.setDate(n.getDate() + r), xi(n, e.getHours());
}, sn;
(function(e) {
  e[e.Sunday = 0] = "Sunday", e[e.Monday = 1] = "Monday", e[e.Tuesday = 2] = "Tuesday", e[e.Wednesday = 3] = "Wednesday", e[e.Thursday = 4] = "Thursday", e[e.Friday = 5] = "Friday", e[e.Saturday = 6] = "Saturday";
})(sn || (sn = {}));
var bn = function(e, t) {
  return jo(e, t(e.getFullYear()));
}, Ht = function(e) {
  return bn(e, function(t) {
    return t - t % 100;
  });
}, Oi = function(e, t) {
  return (Ht(t).getFullYear() - Ht(e).getFullYear()) / 100;
}, Oe = function(e) {
  return bn(e, function(t) {
    return t - t % 10;
  });
}, Ni = function(e, t) {
  return (Oe(t).getFullYear() - Oe(e).getFullYear()) / 10;
}, Ai = function(e, t) {
  return (t.getFullYear() - e.getFullYear()) * 12 + (t.getMonth() - e.getMonth());
}, _i = function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, ur = function(e) {
  return nt(e.getFullYear(), e.getMonth(), 1, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}, Ko = function(e, t) {
  var i = e.getDate(), n = nt(e.getFullYear(), t, i, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
  return n.getDate() === i ? n : bt(we(n, -1));
}, qo = function(e) {
  return Ko(e, 0);
}, ee = function(e) {
  return nt(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0);
}, da = function(e, t) {
  return !e && !t ? !0 : e && t && e.getTime() === t.getTime();
}, Yt = function(e, t) {
  return !e && !t ? !0 : e && t && da(ee(e), ee(t));
}, dr = function(e) {
  return bn(e, function(t) {
    return t - t % 100 + 90;
  });
}, Wo = function(e) {
  return Ko(e, 11);
}, cr = function(e) {
  return bn(e, function(t) {
    return t - t % 10 + 9;
  });
}, im = function(e, t) {
  return Go(e, t, an.Backward);
}, nm = function(e, t) {
  return t !== sn.Monday ? Ze(im(e, t), 4) : Ze(e, 4 - (e.getDay() || 7));
}, Tn = function(e, t) {
  var i = nt(e.getFullYear(), 0, 1, -6), n = nm(e, t), r = n.getTime() - i.getTime(), a = Math.floor(r / tm);
  return 1 + Math.floor(a / 7);
}, rm = function(e, t) {
  t === void 0 && (t = sn.Monday), e = ee(e);
  var i = Ze(e, -7), n = Ze(e, 7), r = Tn(e, t);
  return r === 0 ? Tn(i, t) + 1 : r === 53 && Tn(n, t) > 1 ? 1 : r;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ca = {
  name: "@progress/kendo-vue-dateinputs",
  productName: "Kendo UI for Vue",
  productCode: "KENDOUIVUE",
  productCodes: ["KENDOUIVUE"],
  publishDate: 1763478552,
  version: "7.0.2",
  licensingDocsUrl: "https://www.telerik.com/kendo-vue-ui/my-license/?utm_medium=product&utm_source=kendovue&utm_campaign=kendo-ui-vue-purchase-license-keys-warning"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const am = /* @__PURE__ */ k({
  name: "KendoCalendarCell",
  emits: {
    click: (e) => !0,
    mousedown: (e) => !0,
    mouseenter: (e) => !0,
    mouseleave: (e) => !0
  },
  props: {
    isDisabled: Boolean,
    view: Number,
    formattedValue: String,
    id: String,
    isWeekend: Boolean,
    isFocused: Boolean,
    isSelected: Boolean,
    isInRange: Boolean,
    isRangeStart: Boolean,
    isRangeEnd: Boolean,
    isRangeMid: Boolean,
    isRangeSplitEnd: Boolean,
    isRangeSplitStart: Boolean,
    isToday: Boolean,
    title: String,
    value: Date
  },
  // Manually checking if the component needs an update
  // due to date object being compared by instance
  // and new Date object is created
  // every time and fails the shallow compare of the Vue.
  /**
   * @hidden
   */
  updated() {
  },
  // tslint:disable:max-line-length
  /**
   * @return
   * Returns a `<td />` element with a `<span class="k-link" />` inside to apply the styles. The text inside is the [`formattedValue`]({% slug api_dateinputs_calendarcellprops %}#toc-formattedvalue) of the `cell`.
   */
  render() {
    const e = B(this), {
      formattedValue: t,
      isWeekend: i,
      isFocused: n,
      isInRange: r,
      isSelected: a,
      isRangeStart: o,
      isRangeMid: s,
      isRangeEnd: l,
      isRangeSplitStart: d,
      isRangeSplitEnd: c,
      isToday: h,
      isDisabled: p,
      view: g,
      value: m
    } = this.$props, f = this.$props.activeRangeEnd === "end" && l, b = this.$props.activeRangeEnd === "start" && o;
    return u("td", {
      id: this.$props.id,
      title: this.$props.title,
      class: {
        "k-calendar-td": !0,
        "k-range-end": l,
        "k-range-mid": s,
        "k-range-split-end": c,
        "k-range-split-start": d,
        "k-range-start": o,
        "k-active": b || f,
        "k-focus": n,
        "k-selected": a || o || l,
        "k-today": h,
        "k-weekend": i,
        "k-disabled": p
      },
      onClick: this.handleClick,
      onMousedown: this.handleMouseDown,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave
    }, [u("span", {
      class: "k-link"
    }, [e])]);
  },
  methods: {
    handleClick(e) {
      const {
        value: t
      } = this.$props;
      this.$emit("click", t, e);
    },
    handleMouseDown(e) {
      const {
        value: t
      } = this.$props;
      this.$emit("mousedown", t, e);
    },
    handleMouseEnter() {
      const {
        value: e
      } = this.$props;
      this.$emit("mouseenter", e);
    },
    handleMouseLeave() {
      const {
        value: e
      } = this.$props;
      this.$emit("mouseleave", e);
    }
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const sm = /* @__PURE__ */ k({
  props: {
    id: String,
    value: Number,
    className: String
  },
  emits: {
    click: (e) => !0
  },
  /**
   * @return
   * Returns a `<td />` element with the [`value`]({% slug api_dateinputs_calendarweekcellprops %}#toc-value) as a child.
   */
  render() {
    const e = B(this);
    return u("td", {
      onClick: this.handleClick,
      id: this.$props.id
    }, [this.$props.value !== void 0 ? this.$props.value : e]);
  },
  methods: {
    handleClick(e) {
      const {
        value: t
      } = this.$props;
      this.$emit("click", t, e);
    }
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
var U = /* @__PURE__ */ ((e) => (e[e.month = 0] = "month", e[e.year = 1] = "year", e[e.decade = 2] = "decade", e[e.century = 3] = "century", e))(U || {});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const qt = { start: null, end: null };
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const gs = (e, t, i) => t === void 0 || i === void 0 || t <= e && e <= i ? e : e < t ? t : i, Pn = new Date(1980, 0, 1), Uo = new Date(1900, 0, 1), ha = new Date(2099, 11, 31), ui = (e, t) => {
  const i = N(e);
  return i.setHours(
    t.getHours(),
    t.getMinutes(),
    t.getSeconds(),
    t.getMilliseconds()
  ), i;
}, ht = () => ee(/* @__PURE__ */ new Date()), Se = (e, t, i) => !e || !(t && t > e || i && i < e), om = (e, t, i) => e === null || !(t && ee(t) > ee(e) || i && ee(i) < ee(e)), xn = (e, t) => {
  const { start: i, end: n } = t || qt;
  return !i || !n ? !1 : i < e && e < n;
}, je = (e, t, i = 1) => {
  const n = [];
  for (let r = e; r < t; r = r + i)
    n.push(r);
  return n;
}, Yo = (e, t) => e.slice(t).concat(e.slice(0, t)), di = (e, t, i) => e && (t && e < t ? N(t) : i && e > i ? N(i) : e), ut = (e) => (t, i = "", n = {}) => {
  const r = document.createElement(e);
  return r.className = i, Object.keys(n).map((a) => r.style[a] = n[a]), typeof t == "string" ? r.innerHTML = t || "" : (t || []).forEach((a) => a && r.appendChild(a)), r;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let lm = class {
  constructor(t) {
    this.intl = t;
  }
  getWeekNames(t = !1) {
    const i = Yo(
      this.intl.dateFormatNames({ nameType: "short", type: "days" }),
      this.intl.firstDay()
    );
    return t ? [""].concat(i) : i;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function um(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const dm = /* @__PURE__ */ k({
  name: "KendoView",
  inject: {
    kendoIntlService: {
      default: null
    }
  },
  props: {
    activeRangeEnd: {
      type: String
    },
    activeView: {
      type: Number,
      required: !0
    },
    cell: [String, Function, Object],
    cellUID: {
      type: String,
      required: !0
    },
    direction: {
      type: String,
      default: "vertical"
    },
    isActive: {
      type: Boolean,
      default: void 0
    },
    focusedDate: {
      type: Date,
      required: !0
    },
    max: {
      type: Date,
      required: !0
    },
    min: {
      type: Date,
      required: !0
    },
    selectedDate: {
      type: [Date, Array, Object],
      default: function() {
        return ht();
      }
    },
    selectionRange: Object,
    showWeekNumbers: {
      type: Boolean,
      default: !1
    },
    viewDate: {
      type: Date,
      required: !0
    },
    weekCell: [String, Function, Object],
    bus: Object,
    service: Object,
    onChange: Function,
    onWeekcellclick: Function,
    onCellenter: Function,
    onViewmousedown: Function
  },
  computed: {
    isHorizontal() {
      return this.$props.direction === "horizontal";
    },
    isMonthView() {
      return this.$props.activeView === U.month;
    },
    weekNumber() {
      return !!(this.$props.showWeekNumbers && this.$props.activeView === U.month);
    }
  },
  methods: {
    getWeekNumber(e) {
      return this.weekNumber ? rm(e, this._intl.firstDay()) : null;
    },
    firstDate(e) {
      const t = this.firstWeekDateContext(e);
      return t ? t.value : null;
    },
    firstWeekDateContext(e) {
      if (!this.weekNumber)
        return null;
      let t = 0, i = e[t];
      for (; !i && t < e.length; )
        i = e[++t];
      return i;
    },
    handleClick(e, t) {
      const i = {
        value: N(e),
        target: this,
        event: t
      };
      this.$emit("change", i);
    },
    handleWeekCellClick(e, t) {
      const i = {
        value: e,
        event: t
      };
      this.$emit("weekcellclick", i);
    },
    handleMouseDown(e, t) {
      const i = {
        value: N(e),
        target: this,
        event: t
      };
      this.$emit("viewmousedown", i);
    },
    handleMouseEnter(e) {
      this.$emit("cellenter", N(e));
    },
    handleMouseLeave(e) {
      this.$emit("cellleave", N(e));
    }
  },
  setup() {
    return {
      kendoIntlService: H("kendoIntlService", {})
    };
  },
  render() {
    this._intl = xt(this), this._weekService = new lm(this._intl);
    const e = (s) => u("td", {
      key: s,
      class: "k-calendar-td k-empty"
    }, [At(" ")]), t = ht(), i = this.$props.isActive ? this.$props.focusedDate : null, n = ui(this.$props.viewDate, t), r = this.$props.service.data({
      cellUID: this.$props.cellUID,
      min: this.$props.min,
      max: this.$props.max,
      focusedDate: i,
      isActiveView: !this.$props.bus.canMoveDown(this.$props.activeView),
      selectedDate: this.$props.selectedDate,
      selectionRange: this.$props.selectionRange,
      viewDate: n
    }), a = function(s, l) {
      if (!this.firstDate(s))
        return e(`week-cell-${l}`);
      const d = this.getWeekNumber(this.firstDate(s)), c = `kendo-vue-calendar-week-cell-${d}`, h = u(sm, {
        class: "k-calendar-td k-alt",
        value: d,
        onClick: this.handleWeekCellClick,
        key: c
      }, um(d) ? d : {
        default: () => [d]
      });
      return _.call(this, {
        h: M,
        template: this.$props.weekCell,
        defaultRendering: h,
        defaultSlots: d,
        additionalListeners: {
          click: this.handleWeekCellClick
        },
        additionalProps: {
          value: d,
          key: c
        }
      });
    }, o = function(s) {
      return s.map(function(l, d) {
        if (!l)
          return e(d);
        const c = `kendo-vue-calendar-cell-${l.value.getTime()}`, h = u(am, {
          "aria-selected": l.isSelected,
          formattedValue: l.formattedValue,
          id: l.id,
          isFocused: l.isFocused,
          isSelected: l.isSelected,
          isInRange: l.isInRange,
          isWeekend: l.isWeekend,
          isRangeStart: l.isRangeStart,
          isRangeMid: l.isRangeMid,
          isRangeEnd: l.isRangeEnd,
          isRangeSplitStart: l.isRangeSplitStart,
          isRangeSplitEnd: l.isRangeSplitEnd,
          isToday: l.isToday,
          title: l.title,
          value: l.value,
          isDisabled: !l.isInRange,
          view: this.$props.activeView,
          onClick: this.handleClick,
          onMousedown: this.handleMouseDown,
          onMouseenter: this.handleMouseEnter,
          onMouseleave: this.handleMouseLeave,
          key: c
        }, {
          default: () => [l.formattedValue]
        });
        return _.call(this, {
          h: M,
          template: this.$props.cell,
          defaultRendering: h,
          defaultSlots: l.formattedValue,
          additionalListeners: {
            click: this.handleClick,
            mousedown: this.handleMouseDown,
            mouseenter: this.handleMouseEnter,
            mouseleave: this.handleMouseLeave
          },
          additionalProps: {
            formattedValue: l.formattedValue,
            id: l.id,
            isFocused: l.isFocused,
            isSelected: l.isSelected,
            isInRange: l.isInRange,
            isWeekend: l.isWeekend,
            isRangeStart: l.isRangeStart,
            isRangeMid: l.isRangeMid,
            isRangeEnd: l.isRangeEnd,
            isRangeSplitStart: l.isRangeSplitStart,
            isRangeSplitEnd: l.isRangeSplitEnd,
            isToday: l.isToday,
            title: l.title,
            value: l.value,
            isDisabled: !l.isInRange,
            view: this.$props.activeView,
            key: c
          }
        });
      }, this);
    };
    return u("tbody", {
      class: "k-calendar-tbody",
      role: "rowgroup"
    }, [r.map(function(s, l) {
      return u("tr", {
        class: "k-calendar-tr",
        role: "row",
        key: l
      }, [this.weekNumber && a.call(this, s, l), o.call(this, s)]);
    }, this)]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const cm = 1, hm = 5, pm = /* @__PURE__ */ k({
  name: "KendoViewList",
  inheritAttrs: !1,
  inject: {
    kendoIntlService: {
      default: null
    }
  },
  props: {
    allowReverse: Boolean,
    hasFocusedDate: Boolean,
    activeView: {
      type: Number,
      required: !0
    },
    bottomOffset: {
      type: Number
    },
    cell: [String, Function, Object],
    cellUID: {
      type: String,
      required: !0
    },
    dates: Array,
    focusedDate: {
      type: Date,
      required: !0
    },
    isActive: {
      type: Boolean,
      default: void 0
    },
    max: {
      type: Date,
      required: !0
    },
    min: {
      type: Date,
      required: !0
    },
    selectionRange: Object,
    showWeekNumbers: {
      type: Boolean,
      default: !1
    },
    take: {
      type: Number,
      default: hm
    },
    value: {
      type: [Date, Array, Object]
    },
    views: {
      type: Number,
      default: cm
    },
    viewHeight: Number,
    viewOffset: Number,
    bus: Object,
    dom: Object,
    weekCell: [String, Function, Object],
    service: Object,
    tabIndex: Number,
    shouldScroll: Boolean,
    onChange: Function,
    onWeekcellclick: Function,
    onWeeknameclick: Function,
    onCellenter: Function,
    onViewmousedown: Function,
    onListfocus: Function,
    onListblur: Function,
    onListkeydown: Function,
    onListmousedown: Function
  },
  data: function() {
    return {
      lastViewsCount: 0,
      valueHasUpdated: !1,
      shouldScrollValue: !1
    };
  },
  computed: {
    weekNames() {
      this._intl = xt(this);
      const e = Yo(this._intl.dateFormatNames({
        nameType: "short",
        type: "days"
      }), this._intl.firstDay());
      return this.weekNumber ? [""].concat(e) : e;
    },
    weekNumber() {
      return !!(this.$props.showWeekNumbers && this.$props.activeView === U.month);
    }
  },
  created() {
    this.lastView = this.$props.activeView, this.lastFocus = this.$props.focusedDate, this.shouldScrollValue = this.$props.shouldScroll;
  },
  updated() {
    this.shouldScrollValue = !1, this.lastView = this.$props.activeView, this.$data.lastViewsCount = this.$props.views, this.indexToScroll = void 0;
  },
  methods: {
    handleFocus(e) {
      this.$emit("listfocus", e);
    },
    handleBlur(e) {
      this.$emit("listblur", e);
    },
    handleKeyDown(e) {
      this.$emit("listkeydown", e);
    },
    handleVirtualizationMount(e) {
    },
    calculateHeights() {
      if (!this.$props.dom)
        return;
      const e = this.$props.activeView === U.month ? this.$props.dom.scrollableContentHeight : this.$props.dom.scrollableYearContentHeight;
      this._bottomOffset = e - this.$props.dom.viewHeight(this.$props.activeView), this._viewOffset = -1 * this.$props.dom.headerHeight, this._viewHeight = this.$props.dom.viewHeight(this.$props.activeView) || 1;
    },
    getTake(e, t) {
      return Math.min(t - e, this.$props.take);
    },
    handleScrollAction() {
    },
    handleTodayClick(e) {
      this.shouldScrollValue = !0, this.handleDateChange(e, !0);
    },
    handleMouseDown(e) {
      const t = {
        event: e.event,
        value: N(e.value),
        target: this
      };
      this.$emit("listmousedown", t);
    },
    handleDateChange(e, t = !1) {
      const i = {
        event: e.event,
        value: N(e.value),
        target: this,
        isTodayClick: t
      };
      this.$emit("change", i);
    },
    handleWeekCellClick(e) {
      this.$emit("weekcellclick", e);
    },
    handleWeekNameClick(e, t) {
      const i = {
        value: t,
        event: e
      };
      this.$emit("weeknameclick", i);
    },
    handleCellEnter(e) {
      this.$emit("cellenter", e);
    },
    rotateSelectionRange(e) {
      if (e.start === null || e.end === null)
        return e;
      const t = e.end < e.start;
      return {
        start: t ? e.end : e.start,
        end: t ? e.start : e.end
      };
    }
  },
  setup() {
    return {
      kendoIntlService: H("kendoIntlService", {})
    };
  },
  mounted() {
    this._calendarView = this.$refs.calendarView;
  },
  render() {
    const e = this.$props.allowReverse ? this.rotateSelectionRange(this.$props.selectionRange) : this.$props.selectionRange, t = fe("k-calendar-view", "k-hstack k-align-items-start k-justify-content-center", {
      "k-calendar-monthview": this.$props.activeView === U.month,
      "k-calendar-yearview": this.$props.activeView === U.year,
      "k-calendar-decadeview": this.$props.activeView === U.decade,
      "k-calendar-centuryview": this.$props.activeView === U.century
    }), i = fe("k-calendar-table"), n = function(a) {
      return u("thead", {
        class: "k-calendar-thead"
      }, [u("tr", {
        class: "k-calendar-tr"
      }, [a.map((o, s) => u("th", {
        class: "k-calendar-th",
        key: s,
        onClick: (l) => this.handleWeekNameClick(l, o)
      }, [o]), this)])]);
    }, r = function() {
      const a = this.$props.cellUID;
      return this.$props.dates.map(function(o) {
        return u("table", {
          role: "grid",
          "aria-label": this.$props.service.title(this.$props.focusedDate),
          "aria-live": "polite",
          "aria-activedescendant": a + this.$props.focusedDate.getTime(),
          tabindex: this.$props.tabIndex,
          class: i,
          onKeydown: this.handleKeyDown
        }, [this.$props.activeView === U.month && n.call(this, this.weekNames), u(dm, {
          key: o.getTime(),
          activeView: this.$props.activeView,
          viewDate: o,
          min: this.$props.min,
          max: this.$props.max,
          cellUID: a,
          isActive: this.$props.isActive,
          focusedDate: this.$props.focusedDate,
          cell: this.$props.cell,
          selectionRange: e,
          selectedDate: this.$props.value,
          showWeekNumbers: this.weekNumber,
          onChange: this.handleDateChange,
          onWeekcellclick: this.handleWeekCellClick,
          onCellenter: this.handleCellEnter,
          onViewmousedown: this.handleMouseDown,
          bus: this.$props.bus,
          service: this.$props.service,
          weekCell: this.$props.weekCell
        }, null)]);
      }, this);
    };
    return u("div", {
      style: this.$attrs.style,
      class: t,
      onFocusin: this.handleFocus,
      onFocusout: this.handleBlur
    }, [r.call(this)]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Xo = new Date(1900, 0, 1), gm = new Date(2099, 11, 31), fm = new Date(1980, 0, 1), mm = new Date(1980, 0, 1, 23, 59, 59);
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
var I = /* @__PURE__ */ ((e) => (e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.Up = 2] = "Up", e[e.Down = 3] = "Down", e[e.PrevView = 4] = "PrevView", e[e.NextView = 5] = "NextView", e[e.FirstInView = 6] = "FirstInView", e[e.LastInView = 7] = "LastInView", e[e.LowerView = 8] = "LowerView", e[e.UpperView = 9] = "UpperView", e))(I || {});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const vm = [[]], Hn = 4, bm = 3, xm = {
  [I.Left]: (e) => Je(e, -1),
  [I.Up]: (e) => Je(e, -4),
  [I.Right]: (e) => Je(e, 1),
  [I.Down]: (e) => Je(e, 4),
  [I.PrevView]: (e) => li(e, -1),
  [I.NextView]: (e) => li(e, 1),
  [I.FirstInView]: (e) => Ht(e),
  [I.LastInView]: (e) => dr(e)
};
class ym {
  addToDate(t, i) {
    return li(t, i);
  }
  datesList(t, i) {
    return je(0, i).map((n) => li(t, n));
  }
  data(t) {
    const {
      cellUID: i,
      focusedDate: n,
      isActiveView: r,
      max: a,
      min: o,
      selectedDate: s,
      selectionRange: l = qt,
      viewDate: d
    } = t;
    if (!d)
      return vm;
    const c = je(0, Hn), h = Ht(d), p = dr(d), g = ht();
    return je(0, bm).map((m) => {
      const f = Je(h, m * Hn);
      return c.map((b) => {
        const v = this.normalize(Je(f, b), o, a);
        if (!this.isInSameView(v, p))
          return null;
        const $ = this.isEqual(v, l.start), y = this.isEqual(v, l.end), C = !$ && !y && xn(v, l), D = r && (Array.isArray(s) ? this.isSelectedFromArray(v, s, o, a) : Se(s, o, a) && this.isEqual(v, s));
        return {
          formattedValue: this.value(v),
          id: `${i}${v.getTime()}`,
          isFocused: this.isEqual(v, n),
          isSelected: D,
          isWeekend: !1,
          isInRange: Se(v, o, a),
          isRangeStart: $,
          isRangeMid: C,
          isRangeEnd: y,
          isRangeSplitEnd: C && this.isEqual(v, p),
          isRangeSplitStart: C && this.isEqual(v, h),
          isToday: this.isEqual(v, g),
          title: this.cellTitle(v),
          value: v
        };
      });
    });
  }
  isSelectedFromArray(t, i, n, r) {
    let a = !1;
    return i.forEach((o) => {
      Se(t, n, r) && this.isEqual(t, o) && (a = !0);
    }), a;
  }
  isEqual(t, i) {
    return !t || !i ? !1 : Oe(t).getFullYear() === Oe(i).getFullYear();
  }
  isInArray(t, i) {
    if (!i.length)
      return !1;
    const n = t.getFullYear();
    return i[0].getFullYear() <= n && n <= i[i.length - 1].getFullYear() + 99;
  }
  isInRange(t, i, n) {
    const r = Oe(t).getFullYear(), a = !i || Oe(i).getFullYear() <= r, o = !n || r <= Oe(n).getFullYear();
    return a && o;
  }
  isInSameView(t, i) {
    return Oi(t, i) === 0;
  }
  isRangeStart(t) {
    return t.getFullYear() % 1e3 === 0;
  }
  move(t, i) {
    const n = xm[i];
    return n ? n(t) : t;
  }
  cellTitle(t) {
    return Oe(t).getFullYear().toString();
  }
  navigationTitle(t) {
    return t ? Ht(t).getFullYear().toString() : "";
  }
  title(t) {
    return t ? `${Ht(t).getFullYear()} - ${dr(t).getFullYear()}` : "";
  }
  rowLength(t) {
    return Hn;
  }
  skip(t, i) {
    return Oi(i, t);
  }
  total(t, i) {
    return Oi(t, i) + 1;
  }
  value(t) {
    return t ? Oe(t).getFullYear().toString() : "";
  }
  viewDate(t, i, n = 1) {
    return Oi(t, i) < n ? li(t, -1) : t;
  }
  normalize(t, i, n) {
    return t < i && this.isEqual(t, i) ? N(i) : t > n && this.isEqual(t, n) ? N(n) : t;
  }
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const $m = [[]], Rn = 4, km = 3, wm = {
  [I.Left]: (e) => ze(e, -1),
  [I.Up]: (e) => ze(e, -4),
  [I.Right]: (e) => ze(e, 1),
  [I.Down]: (e) => ze(e, 4),
  [I.PrevView]: (e) => Je(e, -1),
  [I.NextView]: (e) => Je(e, 1),
  [I.FirstInView]: (e) => Oe(e),
  [I.LastInView]: (e) => cr(e)
};
let Sm = class {
  addToDate(t, i) {
    return Je(t, i);
  }
  datesList(t, i) {
    return je(0, i).map((n) => Je(Oe(t), n));
  }
  data(t) {
    const {
      cellUID: i,
      focusedDate: n,
      isActiveView: r,
      max: a,
      min: o,
      selectedDate: s,
      selectionRange: l = qt,
      viewDate: d
    } = t;
    if (!d)
      return $m;
    const c = je(0, Rn), h = Oe(d), p = cr(d), g = ht();
    return je(0, km).map((m) => {
      const f = ze(h, m * Rn);
      return c.map((b) => {
        const v = this.normalize(ze(f, b), o, a);
        if (!this.isInSameView(v, p))
          return null;
        const $ = this.isEqual(v, l.start), y = this.isEqual(v, l.end), C = !$ && !y && xn(v, l), D = r && (Array.isArray(s) ? this.isSelectedFromArray(v, s, o, a) : Se(s, o, a) && this.isEqual(v, s));
        return {
          formattedValue: this.value(v),
          id: `${i}${v.getTime()}`,
          isFocused: this.isEqual(v, n),
          isSelected: D,
          isWeekend: !1,
          isInRange: Se(v, o, a),
          isRangeStart: $,
          isRangeMid: C,
          isRangeEnd: y,
          isRangeSplitEnd: C && this.isEqual(v, p),
          isRangeSplitStart: C && this.isEqual(v, h),
          isToday: this.isEqual(v, g),
          title: this.cellTitle(v),
          value: v
        };
      });
    });
  }
  isSelectedFromArray(t, i, n, r) {
    let a = !1;
    return i.forEach((o) => {
      Se(t, n, r) && this.isEqual(t, o) && (a = !0);
    }), a;
  }
  isEqual(t, i) {
    return !t || !i ? !1 : t.getFullYear() === i.getFullYear();
  }
  isInArray(t, i) {
    if (!i.length)
      return !1;
    const n = t.getFullYear();
    return i[0].getFullYear() <= n && n <= i[i.length - 1].getFullYear() + 9;
  }
  isInRange(t, i, n) {
    const r = t.getFullYear(), a = !i || i.getFullYear() <= r, o = !n || r <= n.getFullYear();
    return a && o;
  }
  isRangeStart(t) {
    return t.getFullYear() % 100 === 0;
  }
  isInSameView(t, i) {
    return Ni(t, i) === 0;
  }
  move(t, i) {
    const n = wm[i];
    return n ? n(t) : t;
  }
  cellTitle(t) {
    return t.getFullYear().toString();
  }
  navigationTitle(t) {
    return t ? Oe(t).getFullYear().toString() : "";
  }
  title(t) {
    return t ? `${Oe(t).getFullYear()} - ${cr(t).getFullYear()}` : "";
  }
  rowLength(t) {
    return Rn;
  }
  skip(t, i) {
    return Ni(i, t);
  }
  total(t, i) {
    return Ni(t, i) + 1;
  }
  value(t) {
    return t ? t.getFullYear().toString() : "";
  }
  viewDate(t, i, n = 1) {
    return Ni(t, i) < n ? Je(t, -1) : t;
  }
  normalize(t, i, n) {
    return t < i && this.isEqual(t, i) ? N(i) : t > n && this.isEqual(t, n) ? N(n) : t;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Cm = [[]], Bn = 7, Im = 6, Dm = 6, Em = 0, Mm = {
  [I.Left]: (e) => Ze(e, -1),
  [I.Up]: (e) => ps(e, -1),
  [I.Right]: (e) => Ze(e, 1),
  [I.Down]: (e) => ps(e, 1),
  [I.PrevView]: (e) => we(e, -1),
  [I.NextView]: (e) => we(e, 1),
  [I.FirstInView]: (e) => ur(e),
  [I.LastInView]: (e) => bt(e)
};
class Fm {
  constructor(t) {
    this.intl = t;
  }
  addToDate(t, i) {
    return we(t, i);
  }
  datesList(t, i) {
    return je(0, i).map((n) => we(t, n));
  }
  data(t) {
    const {
      cellUID: i,
      focusedDate: n,
      isActiveView: r,
      max: a,
      min: o,
      selectedDate: s,
      selectionRange: l = qt,
      viewDate: d
    } = t;
    if (!d)
      return Cm;
    const c = ur(d), h = bt(d), p = Go(c, this.intl.firstDay(), -1), g = je(0, Bn), m = ht();
    return je(0, Im).map((f) => {
      const b = Ze(p, f * Bn);
      return g.map((v) => {
        const $ = this.normalize(Ze(b, v), o, a);
        if ($ < c || $ > h)
          return null;
        const y = this.isEqual($, l.start), C = this.isEqual($, l.end), D = !y && !C && xn($, l), S = r && (Array.isArray(s) ? this.isSelectedFromArray($, s, o, a) : Se(s, o, a) && this.isEqual($, s));
        return {
          formattedValue: this.value($),
          id: `${i}${$.getTime()}`,
          isFocused: this.isEqual($, n),
          isSelected: S,
          isInRange: Se($, o, a),
          isWeekend: this.isWeekend($),
          isRangeStart: y,
          isRangeMid: D,
          isRangeEnd: C,
          isRangeSplitStart: D && this.isEqual($, c),
          isRangeSplitEnd: D && this.isEqual($, h),
          isToday: this.isEqual($, m),
          title: this.cellTitle($),
          value: $
        };
      });
    });
  }
  isEqual(t, i) {
    return !t || !i ? !1 : ee(t).getTime() === ee(i).getTime();
  }
  isSelectedFromArray(t, i, n, r) {
    let a = !1;
    return i.forEach((o) => {
      Se(t, n, r) && this.isEqual(t, o) && (a = !0);
    }), a;
  }
  isInArray(t, i) {
    return !!i.length && ur(i[0]) <= t && t <= bt(i[i.length - 1]);
  }
  isInRange(t, i, n) {
    const r = ee(t), a = !i || ee(i) <= r, o = !n || r <= ee(n);
    return a && o;
  }
  isInSameView(t, i) {
    return Ai(t, i) === 0;
  }
  isRangeStart(t) {
    return !t.getMonth();
  }
  move(t, i) {
    const n = Mm[i];
    return n ? n(t) : t;
  }
  cellTitle(t) {
    return this.intl.formatDate(t, "D");
  }
  navigationTitle(t) {
    return t ? this.isRangeStart(t) ? t.getFullYear().toString() : this.abbrMonthNames()[t.getMonth()] : "";
  }
  title(t) {
    return `${this.wideMonthNames()[t.getMonth()]} ${t.getFullYear()}`;
  }
  rowLength(t) {
    return Bn + (t ? 1 : 0);
  }
  skip(t, i) {
    return Ai(i, t);
  }
  total(t, i) {
    return Ai(t, i) + 1;
  }
  value(t) {
    return t ? t.getDate().toString() : "";
  }
  viewDate(t, i, n = 1) {
    return Ai(t, i) < n ? we(t, -1) : t;
  }
  isWeekend(t) {
    const i = t.getDay();
    return i === Dm || i === Em;
  }
  abbrMonthNames() {
    return this.intl.dateFormatNames({ nameType: "abbreviated", type: "months" });
  }
  normalize(t, i, n) {
    return t < i && this.isEqual(t, i) ? ee(i) : t > n && this.isEqual(t, n) ? ee(n) : t;
  }
  wideMonthNames() {
    return this.intl.dateFormatNames({ nameType: "wide", type: "months", standAlone: !0 });
  }
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Lm = [[]], jn = 4, Om = 3, Nm = {
  [I.Left]: (e) => we(e, -1),
  [I.Up]: (e) => we(e, -4),
  [I.Right]: (e) => we(e, 1),
  [I.Down]: (e) => we(e, 4),
  [I.PrevView]: (e) => ze(e, -1),
  [I.NextView]: (e) => ze(e, 1),
  [I.FirstInView]: (e) => qo(e),
  [I.LastInView]: (e) => Wo(e)
};
let Am = class {
  constructor(t) {
    this._intl = t;
  }
  addToDate(t, i) {
    return ze(t, i);
  }
  datesList(t, i) {
    return je(0, i).map((n) => ze(t, n));
  }
  data(t) {
    const {
      cellUID: i,
      focusedDate: n,
      isActiveView: r,
      max: a,
      min: o,
      selectedDate: s,
      selectionRange: l = qt,
      viewDate: d
    } = t;
    if (!d)
      return Lm;
    const c = this.abbrMonthNames(), h = qo(d), p = Wo(d), g = h.getFullYear(), m = je(0, jn), f = ht();
    return je(0, Om).map((b) => {
      const v = we(h, b * jn);
      return m.map(($) => {
        const y = this.normalize(we(v, $), o, a);
        if (!y || g < y.getFullYear())
          return null;
        const C = this.isEqual(y, l.start), D = this.isEqual(y, l.end), S = !C && !D && xn(y, l), E = r && (Array.isArray(s) ? this.isSelectedFromArray(y, s, o, a) : Se(s, o, a) && this.isEqual(y, s));
        return {
          formattedValue: c[y.getMonth()],
          id: `${i}${y.getTime()}`,
          isFocused: this.isEqual(y, n),
          isSelected: E,
          isInRange: Se(y, o, a),
          isWeekend: !1,
          isRangeStart: C,
          isRangeMid: S,
          isRangeEnd: D,
          isRangeSplitEnd: S && this.isEqual(y, p),
          isRangeSplitStart: S && this.isEqual(y, h),
          isToday: this.isEqual(y, f),
          title: this.cellTitle(y),
          value: y
        };
      });
    });
  }
  isSelectedFromArray(t, i, n, r) {
    let a = !1;
    return i.forEach((o) => {
      Se(t, n, r) && this.isEqual(t, o) && (a = !0);
    }), a;
  }
  isEqual(t, i) {
    return !t || !i ? !1 : t.getFullYear() === i.getFullYear() && t.getMonth() === i.getMonth();
  }
  isInArray(t, i) {
    if (!i.length)
      return !1;
    const n = t.getFullYear();
    return i[0].getFullYear() <= n && n <= i[i.length - 1].getFullYear();
  }
  isInRange(t, i, n) {
    const r = nt(t.getFullYear(), t.getMonth(), 1), a = !i || nt(i.getFullYear(), i.getMonth(), 1) <= r, o = !n || r <= nt(n.getFullYear(), n.getMonth(), 1);
    return a && o;
  }
  isInSameView(t, i) {
    return _i(t, i) === 0;
  }
  isRangeStart(t) {
    return t.getFullYear() % 10 === 0;
  }
  move(t, i) {
    const n = Nm[i];
    return n ? n(t) : t;
  }
  cellTitle(t) {
    return `${t.getFullYear()} ${this.value(t)}`;
  }
  navigationTitle(t) {
    return this.title(t);
  }
  title(t) {
    return t ? t.getFullYear().toString() : "";
  }
  rowLength(t) {
    return jn;
  }
  skip(t, i) {
    return _i(i, t);
  }
  total(t, i) {
    return _i(t, i) + 1;
  }
  value(t) {
    return t ? this.abbrMonthNames()[t.getMonth()] : "";
  }
  viewDate(t, i, n = 1) {
    return _i(t, i) < n ? ze(t, -1) : t;
  }
  abbrMonthNames() {
    return this._intl.dateFormatNames({ nameType: "abbreviated", type: "months" });
  }
  normalize(t, i, n) {
    return t < i && this.isEqual(t, i) ? Ca(i) : t > n && this.isEqual(t, n) ? Ca(n) : t;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const _m = {
  [U.month]: Fm,
  [U.year]: Am,
  [U.decade]: Sm,
  [U.century]: ym
}, zm = (e, t) => {
  const i = U[U[e + t]];
  return i !== void 0 ? i : e;
};
let Vm = class {
  constructor(t) {
    this.bottom = U.month, this.top = U.century, this.onViewChanged = t;
  }
  configure(t, i) {
    this.bottom = t, this.top = i;
  }
  service(t, i) {
    return new _m[`${t}`](i);
  }
  moveDown(t, i) {
    this.move(t, -1, i);
  }
  moveUp(t, i) {
    this.move(t, 1, i);
  }
  moveToBottom(t) {
    t !== this.bottom && this.onViewChanged({ view: this.bottom });
  }
  canMoveDown(t) {
    return this.bottom < t;
  }
  canMoveUp(t) {
    return t < this.top;
  }
  clamp(t) {
    return t < this.bottom ? this.bottom : t > this.top ? this.top : t;
  }
  move(t, i, n) {
    const r = this.clamp(zm(t, i));
    r !== t && this.onViewChanged({ view: r }, n);
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let Tm = class {
  constructor() {
    this.didCalculate = !1;
  }
  ensureHeights() {
    this.calendarHeight === void 0 && this.calculateHeights();
  }
  calculateHeights(t) {
    if (!se)
      return;
    const i = ut("div"), n = ut("ul"), r = ut("li"), a = ut("td"), o = ut("th"), s = ut("tr"), l = ut("tbody"), d = ut("thead"), c = ut("table"), h = () => i(
      `
            <span class="k-calendar-title">March 2017</span>
            <span class="k-calendar-today">TODAY</span>
        `,
      "k-calendar-header"
    ), p = () => c(
      [
        d([
          s([o("MO")])
        ])
      ]
    ), g = (w, F) => new Array(w).fill("1").map(F), m = (w, F = 1) => c([
      l(
        [s([o("1")])].concat(
          g(w, () => s(g(F, (ge) => a(`<span class="k-link">${ge}</span>`))))
        )
      )
    ]), f = (w) => i(w, "k-content k-scrollable"), b = (w, F, ge) => i(
      ge ? [
        h(),
        p(),
        f([w, w])
      ] : [
        h(),
        f([w, w])
      ],
      F,
      { left: "-10000px", position: "absolute" }
    ), v = /* @__PURE__ */ (() => {
      let w;
      return () => se ? (w || (w = i(
        [f([n([r("<span>FEB</span>")])])],
        "k-calendar-navigation",
        { left: "0px", position: "absolute" }
      )), w) : null;
    })(), $ = ({ cells: w, rows: F }, ge, W) => {
      let G;
      return () => se ? (G || (G = b(m(F, w), ge, W)), G) : null;
    }, y = (w) => w.querySelector(".k-scrollable"), C = (w) => {
      const F = y(w);
      return F.className = `${F.className} k-scrollable-horizontal`, w;
    }, D = $({ cells: 7, rows: 6 }, "k-calendar-view k-calendar-monthview", !0), S = $({ cells: 5, rows: 3 }, "k-calendar-view k-calendar-yearview", !1), E = $({ cells: 5, rows: 2 }, "k-calendar-view k-calendar-decadeview", !1), L = () => C(D()), j = () => C(S()), Q = () => C(E()), z = (w) => parseFloat(window.getComputedStyle(w).height) || w.offsetHeight, Y = (w) => {
      const F = window.getComputedStyle(w);
      return parseFloat(F.width) + parseFloat(F.paddingLeft) + parseFloat(F.paddingRight) || w.offsetWidth;
    }, q = (w) => w.querySelector("tbody");
    this.didCalculate = !0, t && (this.hostContainer = t), this.batch(D(), (w) => {
      const F = q(w);
      this.calendarHeight = z(w), this.monthViewHeight = z(F), this.headerHeight = z(F.children[0]), this.scrollableContentHeight = z(y(w));
    }), this.batch(L(), (w) => {
      const F = q(w);
      this.calendarWidth = Y(w), this.monthViewWidth = Y(F), this.scrollableContentWidth = Y(y(w));
    }), this.batch(S(), (w) => {
      this.yearViewHeight = z(q(w)), this.scrollableYearContentHeight = z(y(w));
    }), this.batch(j(), (w) => {
      this.yearViewWidth = Y(q(w));
    }), this.batch(E(), (w) => {
      this.decadeViewHeight = z(q(w)), this.centuryViewHeight = this.decadeViewHeight;
    }), this.batch(Q(), (w) => {
      this.decadeViewWidth = Y(q(w)), this.centuryViewWidth = this.decadeViewWidth;
    }), this.batch(v(), (w) => {
      this.navigationItemHeight = z(w.querySelector("li"));
    });
  }
  viewHeight(t) {
    return this.viewDimension(t, "height");
  }
  viewWidth(t) {
    return this.viewDimension(t, "width");
  }
  viewDimension(t, i) {
    const n = i === "height" ? "ViewHeight" : "ViewWidth";
    switch (t) {
      case U.month:
        return this[`month${n}`];
      case U.year:
        return this[`year${n}`];
      case U.decade:
        return this[`decade${n}`];
      case U.century:
        return this[`century${n}`];
      default:
        return 1;
    }
  }
  batch(t, i) {
    const n = this.hostContainer || document.body, r = n.appendChild(t);
    i(r), n.removeChild(r);
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Pm = {
  33: I.PrevView,
  34: I.NextView,
  35: I.LastInView,
  36: I.FirstInView,
  37: I.Left,
  38: I.Up,
  39: I.Right,
  40: I.Down,
  "meta+38": I.UpperView,
  "meta+40": I.LowerView,
  "meta+37": I.PrevView,
  "meta+39": I.NextView
};
let Hm = class {
  constructor(t) {
    this.bus = t;
  }
  action(t) {
    const i = `${t.ctrlKey || t.metaKey ? "meta+" : ""}${t.keyCode}`;
    return Pm[i];
  }
  move(t, i, n, r, a) {
    return r ? i === I.UpperView && this.bus.canMoveUp(n) ? (this.bus.moveUp(n, a), t) : i === I.LowerView && this.bus.canMoveDown(n) ? (this.bus.moveDown(n, a), t) : r.move(t, i) : t;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function Rm(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const Bm = /* @__PURE__ */ k({
  name: "KendoHeaderTitle",
  emits: {
    click: (e) => !0
  },
  props: {
    id: String,
    value: String,
    view: Number
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  },
  /**
   * @return
   * Returns a `<button />` element with the [`value`]({% slug api_dateinputs_calendarheadertitleprops %}#toc-value) of the title as a child.
   */
  render() {
    const e = B(this);
    return u(xe, {
      role: "link",
      type: "button",
      id: this.$props.id,
      fillMode: "flat",
      themeColor: "primary",
      onClick: this.handleClick,
      tabIndex: 0
    }, Rm(e) ? e : {
      default: () => [e]
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const hr = "calendar.prevView", pr = "calendar.nextView", ii = "dateinput.increment", ni = "dateinput.decrement", gr = "calendar.today", ri = "datepicker.toggleCalendar", jm = "daterangepicker.swapStartEnd", Gm = "daterangepicker.start", Km = "daterangepicker.end", qm = "daterangepicker.separator", Wm = "datetimepicker.toggleDateTimeSelector", Um = "timepicker.now", Ym = "timepicker.selectNow", Xm = "timepicker.cancel", Jm = "timepicker.set", Zm = "timepicker.toggleTimeSelector", Qm = "timepicker.toggleClock", ev = "datetimepicker.date", tv = "datetimepicker.time", iv = "datetimepicker.cancel", nv = "datetimepicker.set", ct = {
  [gr]: "Today",
  [Um]: "NOW",
  [Jm]: "Set",
  [Xm]: "Cancel",
  [ev]: "Date",
  [tv]: "Time",
  [iv]: "Cancel",
  [nv]: "Set",
  [Gm]: "Start",
  [Km]: "End",
  [qm]: " ",
  [Ym]: "Select Now",
  [Zm]: "Toggle TimeSelector",
  [Qm]: "Toggle Clock",
  [ii]: "Increase value",
  [ni]: "Decrease value",
  [ri]: "Toggle calendar",
  [hr]: "Navigate to previous view",
  [pr]: "Navigate to next view",
  [jm]: "Swap start and end values",
  [Wm]: "Toggle date-time selector"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function fs(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const rv = /* @__PURE__ */ k({
  name: "KendoCalendarHeader",
  inheritAttrs: !1,
  inject: {
    kendoLocalizationService: {
      default: null
    }
  },
  emits: ["titleclick", "todayclick", "nextclick", "prevclick"],
  props: {
    activeView: {
      type: Number,
      required: !0
    },
    currentDate: {
      type: Date,
      required: !0
    },
    focusedDate: {
      type: Date,
      required: !0
    },
    headerTitle: {
      type: [String, Object, Function],
      default: function() {
      }
    },
    max: {
      type: Date,
      default: function() {
        return ha;
      }
    },
    min: {
      type: Date,
      default: function() {
        return Xo;
      }
    },
    bus: Object,
    service: Object,
    rangeLength: {
      type: Number,
      default: 1
    },
    tabIndex: {
      type: Number,
      default: 0
    },
    onTodayClick: Function,
    onNextClick: Function,
    onPrevClick: Function,
    onTitleClick: Function
  },
  data() {
    return {
      currentRtl: !1
    };
  },
  mounted() {
    this.currentRtl = tn(this.$el);
  },
  computed: {
    navigate() {
      return this.$props.bus.canMoveUp(this.$props.activeView);
    },
    todayIsInRange() {
      return Se(ht(), ee(this.$props.min), ee(this.$props.max));
    }
  },
  methods: {
    getTitle() {
      if (!this.$props.currentDate)
        return "";
      const e = this.$props.rangeLength - 1, t = this.$props.service.title(this.$props.currentDate), i = this.$props.service.addToDate(this.$props.currentDate, e);
      return e < 1 || !this.$props.service.isInRange(i, this.$props.min, this.$props.max) ? t : `${t} - ${this.$props.service.title(i)}`;
    },
    handleTitleClick(e) {
      this.navigate && (this.$props.bus.moveUp(this.$props.activeView, e), this.$emit("titleclick", e));
    },
    canNavigate(e) {
      if (!this.$props.service)
        return !1;
      const t = this.$props.service.move(this.$props.focusedDate, e);
      return this.$props.min <= t && t <= this.$props.max || this.$props.service.isInSameView(t, this.$props.min) || this.$props.service.isInSameView(t, this.$props.max);
    },
    move(e) {
      return this.clampDate(this.$props.service.move(this.$props.focusedDate, e));
    },
    clampDate(e) {
      return di(e, this.$props.min, this.$props.max);
    },
    handleNextClick(e) {
      const t = {
        event: e,
        value: this.move(I.NextView),
        target: this
      };
      this.$emit("nextclick", t);
    },
    handlePrevClick(e) {
      const t = {
        event: e,
        value: this.move(I.PrevView),
        target: this
      };
      this.$emit("prevclick", t);
    },
    handleTodayClick(e) {
      if (!this.todayIsInRange)
        return;
      this.$props.bus.moveToBottom(this.$props.activeView);
      const t = {
        event: e,
        value: di(ht(), this.$props.min, this.$props.max),
        target: this
      };
      this.$emit("todayclick", t);
    },
    todayKeyDown(e) {
      const {
        keyCode: t
      } = e;
      t === O.enter && this.handleTodayClick(e);
    }
  },
  setup() {
    return {
      kendoLocalizationService: H("kendoLocalizationService", {})
    };
  },
  render() {
    this._localization = Z(this);
    const e = this._localization.toLanguageString(gr, ct[gr]), t = this.getTitle(), i = this._localization.toLanguageString(hr, ct[hr]), n = this._localization.toLanguageString(pr, ct[pr]), r = !this.canNavigate(I.PrevView), a = !this.canNavigate(I.NextView), o = fe("k-calendar-title", {
      "k-disabled": !this.navigate
    }), s = fe("k-calendar-nav-today", {
      "k-disabled": !this.todayIsInRange
    });
    let l;
    const d = u(Bm, {
      value: t,
      view: this.$props.activeView,
      class: o,
      onClick: this.handleTitleClick
    }, fs(t) ? t : {
      default: () => [t]
    });
    l = _.call(this, {
      h: M,
      template: this.$props.headerTitle,
      defaultRendering: d
    });
    const c = u(xe, {
      type: "button",
      fillMode: "flat",
      themeColor: "base",
      class: s,
      tabIndex: this.$props.tabIndex,
      onKeydown: this.todayKeyDown,
      onClick: this.handleTodayClick
    }, fs(e) ? e : {
      default: () => [e]
    }), h = _.call(this, {
      h: M,
      defaultRendering: c
    });
    return u("div", {
      class: "k-calendar-header k-hstack",
      style: this.$attrs.style
    }, [l, u("span", {
      class: "k-spacer"
    }, null), u("span", {
      class: "k-calendar-nav k-hstack"
    }, [u(xe, {
      type: "button",
      icon: this.currentRtl ? "chevron-right" : "chevron-left",
      svgIcon: this.currentRtl ? Fa : La,
      size: this.$props.size,
      fillMode: "flat",
      class: "k-calendar-nav-pre",
      disabled: r,
      "aria-label": i,
      title: i,
      onClick: this.handlePrevClick
    }, null), h, u(xe, {
      type: "button",
      icon: this.currentRtl ? "chevron-left" : "chevron-right",
      svgIcon: this.currentRtl ? La : Fa,
      size: this.$props.size,
      fillMode: "flat",
      class: "k-calendar-nav-next",
      disabled: a,
      "aria-label": n,
      title: n,
      onClick: this.handleNextClick
    }, null)])]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const av = (e, t, i, n) => n !== void 0 ? n !== null && Se(n, e, t) ? n : null : i !== null && Se(i, e, t) ? i : null, zi = (e, t, i) => i instanceof Date && !Array.isArray(i) && Se(ee(i), e, t) ? ee(i) : null, Gn = (e, t, i) => Array.isArray(i) ? i.filter((n) => Se(n, e, t)).map((n) => ee(n)) : null, ms = (e) => St(e) && !(e instanceof Date) && e !== null && !Array.isArray(e) ? e : qt, vs = (e, t, i) => e || t && t[0] || i && i.start, sv = (e, t) => e.start === null && t === null ? "start" : e.end === null ? "end" : "start";
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ov = /* @__PURE__ */ k({
  name: "KendoCalendar",
  inject: {
    kendoIntlService: {
      default: null
    }
  },
  model: {
    event: "changemodel"
  },
  props: {
    activeRangeEnd: {
      type: String,
      default: void 0
    },
    allowReverse: {
      type: Boolean,
      default: !1
    },
    cell: [String, Function, Object],
    className: String,
    defaultActiveView: {
      type: String,
      default: "month"
    },
    modelValue: {
      type: [Date, Array, Object],
      default: void 0
    },
    defaultValue: {
      type: [Date, Array, Object],
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    focusedDate: Date,
    id: {
      type: String,
      default: function() {
        return me();
      }
    },
    headerTitle: [String, Function, Object],
    max: {
      type: Date,
      default: function() {
        return gm;
      }
    },
    min: {
      type: Date,
      default: function() {
        return Xo;
      }
    },
    mode: String,
    navigation: {
      type: Boolean,
      default: !0
    },
    tabIndex: Number,
    value: [Date, Array, Object],
    views: {
      type: Number,
      default: 1
    },
    weekNumber: Boolean,
    weekCell: [String, Function, Object],
    topView: {
      type: String,
      default: "century"
    },
    bottomView: {
      type: String,
      default: "month"
    },
    onFocus: Function,
    onBlur: Function,
    onChange: Function,
    onKeydown: Function
  },
  data: function() {
    return {
      valueDuringOnChange: void 0,
      currentFocusedDate: null,
      currentActiveView: null,
      currentValue: null,
      cellUID: me(),
      isActive: !1,
      oldValue: null,
      didNavigationChange: !1,
      currentActiveRangeEnd: void 0
    };
  },
  created: function() {
    Ve(ca);
    const e = av(this.currentMin, this.currentMax, this.$props.defaultValue, this.$props.value || this.$props.modelValue), t = zi(this.currentMin, this.currentMax, e), i = Gn(this.currentMin, this.currentMax, e), n = ms(e), r = vs(t, i, n);
    this._hasMounted = !1, this.$data.currentFocusedDate = di(this.$props.focusedDate || r || ht(), this.currentMin, this.currentMax), this.$data.currentValue = e, this.$data.currentActiveView = gs(U[this.$props.defaultActiveView], U[this.$props.bottomView], U[this.$props.topView]), this.$data.currentActiveRangeEnd = sv(n, t), this._dates = [], this._calculateFocusFromValue = !1, this._lastView = this.$props.activeView || this.$data.currentActiveView, this._lastViewsCount = this.$props.views, this._dom = new Tm(), this._bus = new Vm(this.handleViewChange), this._navigation = new Hm(this._bus), this._oldValue = e;
  },
  watch: {
    value: function(e) {
      this.$data.currentFocusedDate = e;
    },
    focusedDate: function(e) {
      this.$data.currentFocusedDate = e;
    }
  },
  setup() {
    return {
      kendoIntlService: H("kendoIntlService", {})
    };
  },
  mounted() {
    this.calendarViewList = this.calendarViewListRef, this._calculateFocusFromValue = !0;
  },
  updated() {
    const e = zi(this.currentMin, this.currentMax, this.computedValue());
    this._calculateFocusFromValue = !!(this._selectedDate && e && this._selectedDate.getTime() && e.getTime()), this._lastView = this.$props.activeView || this.$data.currentActiveView, this._lastViewsCount = this.$props.views, this._oldValue = this.computedValue(), this.calendarViewList || (this.calendarViewList = this.calendarViewListRef);
  },
  computed: {
    activeRange() {
      return this.$props.activeRangeEnd !== void 0 ? this.$props.activeRangeEnd : this.$data.currentActiveRangeEnd;
    },
    currentMin() {
      return ee(this.$props.min);
    },
    currentMax() {
      return ee(this.$props.max);
    }
  },
  methods: {
    element() {
      return this.$el;
    },
    computedValue() {
      return this.$data.valueDuringOnChange !== void 0 ? this.$data.valueDuringOnChange : this.$props.value !== void 0 ? this.$props.value : this.$props.modelValue !== void 0 ? this.$props.modelValue : this.$data.currentValue;
    },
    focus() {
      this.calendarViewList && this.calendarViewList.$el.firstElementChild.focus();
    },
    handleBlur() {
      this.$data.isActive = !1;
    },
    handleFocus() {
      this.$data.isActive = !0;
    },
    emitBlur(e) {
      this.$emit("blur", e);
    },
    emitFocus(e) {
      this.$emit("focus", e);
    },
    handleTodayClick(e) {
      if (this.$props.disabled)
        return;
      this.$data.didNavigationChange = !0;
      const t = N(e.value);
      this.$data.currentFocusedDate = t, this.$data.currentValue = t, this.triggerChange(t, e);
    },
    handleViewChange({
      view: e
    }) {
      this.$data.currentActiveView = e;
    },
    handlePrevClick(e) {
      const t = N(e.value);
      this.focus(), !this.$props.disabled && (this.$data.currentFocusedDate = t);
    },
    handleTitleClick() {
      this.focus();
    },
    handleNextClick(e) {
      const t = N(e.value);
      this.focus(), !this.$props.disabled && (this.$data.currentFocusedDate = t);
    },
    handleCellEnter(e) {
      this.$props.mode === "range" && (this.$data.currentFocusedDate = e);
    },
    generateRange(e, t) {
      let {
        end: i,
        start: n
      } = t;
      const r = t.start !== null && e.getTime() <= t.start.getTime();
      return !this.$props.allowReverse && r ? {
        start: e,
        end: this._selectedRange.start
      } : this.activeRange !== "end" ? {
        start: e,
        end: i
      } : {
        start: n || this._selectedDate,
        end: e
      };
    },
    clampRange(e) {
      return {
        start: e,
        end: null
      };
    },
    handleWeekCellClick(e) {
      this.$emit("weekcellclick", e);
    },
    handleWeekNameClick(e) {
      this.$emit("weeknameclick", e);
    },
    handleDateChange(e) {
      const t = N(e.value), i = this._bus.canMoveDown(this.$data.currentActiveView);
      if (this.$props.disabled)
        return;
      if (i)
        if (e.isTodayClick)
          this._bus.moveToBottom(this.$data.currentActiveView);
        else {
          this._bus.moveDown(this.$data.currentActiveView, e.event), this.$data.currentFocusedDate = t;
          return;
        }
      let n, r;
      switch (this.$props.mode) {
        case "single":
          n = N(e.value);
          break;
        case "multiple":
          if (Array.isArray(this._selectedMultiple)) {
            let a = this._selectedMultiple.slice(), o = -1;
            a.forEach((s, l) => {
              Yt(s, e.value) && (o = l);
            }), o !== -1 ? a.splice(o, 1) : a.push(N(e.value)), n = a.slice();
          } else
            this._selectedDate ? n = [N(this._selectedDate), N(e.value)] : n = [N(e.value)];
          break;
        case "range":
          r = this._selectedRange.start !== null && this._selectedRange.end !== null && this.activeRange === "start", n = r ? this.clampRange(e.value) : this.generateRange(e.value, this._selectedRange), this.$data.currentActiveRangeEnd = this.activeRange !== "end" ? "end" : "start";
          break;
        default:
          n = N(e.value);
          break;
      }
      this.$data.currentValue = n, this.triggerChange(n, e);
    },
    triggerChange(e, t) {
      this.$data.valueDuringOnChange = e;
      const i = {
        event: t.event,
        value: e,
        component: this,
        target: {
          name: this.$props.name,
          value: e,
          valueAsDate: e
        }
      };
      this.$emit("changemodel", e), this.$emit("update:modelValue", e), this.$emit("change", i), this.$data.valueDuringOnChange = void 0;
    },
    handleMouseDown(e) {
      const t = N(e.value);
      this.$props.disabled || this.$data.currentActiveView !== 0 || (this.$data.currentFocusedDate = t);
    },
    tableKeyDown(e) {
      const {
        keyCode: t
      } = e;
      if (this.$emit("keydown", e), t === O.enter) {
        const i = {
          event: e,
          value: this._focusedDate,
          component: this,
          target: {
            name: this.$props.name,
            value: this._focusedDate,
            valueAsDate: this._focusedDate
          }
        };
        this.handleDateChange(i);
      } else {
        const i = di(this._navigation.move(this._focusedDate, this._navigation.action(e), this.$data.currentActiveView, this._service, e), this.currentMin, this.currentMax);
        if (Yt(this._focusedDate, i))
          return;
        this._calculateFocusFromValue = !1, this.$data.currentFocusedDate = i;
      }
      e.preventDefault();
    },
    isValueEqual(e, t) {
      return e instanceof Date && t instanceof Date ? Yt(e, t) : e instanceof Object && t instanceof Object ? !!(e && t && Yt(e.start, t.start) && Yt(e.end, t.end)) : e instanceof Array && t instanceof Array ? !!(e && t && e.length === t.length) : !1;
    },
    rangeWithFocused(e, t) {
      return {
        start: e.start,
        end: e.end === null && e.start !== null && this.$data.isActive ? t.end : e.end
      };
    }
  },
  render() {
    const e = this.$props.views, t = this.computedValue(), i = this.$data.currentFocusedDate, n = t !== null && this._oldValue !== null ? !this.isValueEqual(t, this._oldValue) : t !== this._oldValue;
    this._selectedDate = zi(this.currentMin, this.currentMax, t), this._selectedMultiple = Gn(this.currentMin, this.currentMax, t);
    const r = P.call(this, this.$props.cell, T.call(this)), a = P.call(this, this.$props.weekCell, T.call(this)), o = P.call(this, this.$props.headerTitle, T.call(this)), s = gs(this.$data.currentActiveView, U[this.$props.bottomView], U[this.$props.topView]);
    this._selectedDate = zi(this.currentMin, this.currentMax, t), this._selectedMultiple = Gn(this.currentMin, this.currentMax, t), this._selectedRange = ms(t);
    const l = vs(this._selectedDate, this._selectedMultiple, this._selectedRange), d = di(n && l !== null ? l : i, this.currentMin, this.currentMax);
    d instanceof Date ? this._focusedDate = ee(d) : l && (this._focusedDate = l);
    const c = this.rangeWithFocused(this._selectedRange, i);
    this._intl = xt(this), this._bus.configure(U[this.$props.bottomView], U[this.$props.topView]), this._service = this._bus.service(s, this._intl);
    const h = fe("k-calendar", "k-calendar-md", {
      "k-calendar-range": e > 1,
      "k-disabled": this.$props.disabled,
      "k-week-number": this.$props.weekNumber
    }, this.$props.className), p = this._lastView !== this.$data.currentActiveView, g = this._dates && this._service.isInArray(this._focusedDate, this._dates), m = this._lastViewsCount !== this.$props.views;
    (!g || p || m) && (this._dates = this._service.datesList(this._focusedDate, e));
    const f = N(this._dates && this._dates[0] ? this._dates[0] : void 0), b = [this.$props.navigation && u(rv, {
      tabIndex: this.$props.disabled ? void 0 : this.$props.tabIndex || 0,
      activeView: this.$data.currentActiveView,
      currentDate: f,
      focusedDate: this._focusedDate,
      min: this.currentMin,
      max: this.currentMax,
      rangeLength: this.$props.views,
      onTodayclick: this.handleTodayClick,
      onNextclick: this.handleNextClick,
      onPrevclick: this.handlePrevClick,
      onTitleclick: this.handleTitleClick,
      bus: this._bus,
      service: this._service,
      headerTitle: o
    }, null), u(pm, {
      allowReverse: this.$props.allowReverse,
      isActive: this.$data.isActive,
      tabIndex: this.$props.tabIndex || 0,
      ref: (v) => {
        this.calendarViewListRef = v;
      },
      activeView: this.$data.currentActiveView,
      focusedDate: this._focusedDate,
      min: this.currentMin,
      max: this.currentMax,
      bus: this._bus,
      dates: this._dates,
      shouldScroll: this.$data.didNavigationChange,
      service: this._service,
      cell: r,
      weekCell: a,
      dom: this._dom,
      views: this.$props.views,
      selectionRange: c,
      showWeekNumbers: this.$props.weekNumber,
      onChange: this.handleDateChange,
      onWeekcellclick: this.handleWeekCellClick,
      onWeeknameclick: this.handleWeekNameClick,
      onListmousedown: this.handleMouseDown,
      onCellenter: this.handleCellEnter,
      onListkeydown: this.tableKeyDown,
      onListfocus: this.handleFocus,
      onListblur: this.handleBlur,
      value: this._selectedMultiple || this._selectedDate,
      cellUID: this.$data.cellUID
    }, null)];
    return u("div", {
      "aria-disabled": this.$props.disabled === !0 ? !0 : void 0,
      class: h,
      id: this.$props.id,
      onFocusout: this.emitBlur,
      onFocusin: this.emitFocus
    }, [b]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let lv = class {
  constructor() {
    this.symbols = "";
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const uv = "d", dv = "wide", cv = (e, t, i, n) => {
  const r = e[n + e.length - i.length], a = e.substring(0, n + e.length - i.length), o = i.substring(0, n), s = [];
  if (a === o && n > 0)
    return s.push([t[n - 1], o[n - 1]]), s;
  if (a.indexOf(o) === 0 && (o.length === 0 || t[o.length - 1] !== t[o.length])) {
    let l = "";
    o.length === 1 && s.push([t[0], o[0]]);
    for (let d = o.length; d < a.length; d++)
      t[d] !== l && t[d] !== "_" && (l = t[d], s.push([l, ""]));
    return s;
  }
  if (o.indexOf(a) === 0 || t[n - 1] === "_") {
    let l = t[0];
    for (let d = Math.max(0, a.length - 1); d < t.length; d++)
      if (t[d] !== "_") {
        l = t[d];
        break;
      }
    return [[l, o[n - 1]]];
  }
  return o[o.length - 1] === " " || o[o.length - 1] === r ? [[t[n - 1], "_"]] : [[t[n - 1], o[n - 1]]];
}, hv = (e, t) => (e[t.pattern[0]] = t.type, e), pv = (e, t, i) => e === null || !(t && t > e || i && i < e);
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let gv = class {
  constructor(t, i, n) {
    this.year = !0, this.month = !0, this.date = !0, this.hours = !0, this.minutes = !0, this.seconds = !0, this.milliseconds = !0, this.leadingZero = null, this.typedMonthPart = "", this.knownParts = "adHhmMsEy", this.symbols = {
      E: "E",
      H: "H",
      M: "M",
      a: "a",
      d: "d",
      h: "h",
      m: "m",
      s: "s",
      y: "y"
    }, this._value = ee(/* @__PURE__ */ new Date()), this.intlProvider = t, this.formatPlaceholder = i, this.format = n, this.monthNames = this.allFormatedMonths();
  }
  get intl() {
    return this.intlProvider();
  }
  get value() {
    return this._value;
  }
  setValue(t) {
    t ? da(t, this._value) || (this._value = N(t), this.modifyExisting(!0)) : (this._value = ee(/* @__PURE__ */ new Date()), this.modifyExisting(!1));
  }
  hasValue() {
    const t = (i, n) => i || n.type !== "literal" && n.type !== "dayperiod" && this.getExisting(n.pattern[0]);
    return this.intl.splitDateFormat(this.format).reduce(t, !1);
  }
  getDateObject() {
    for (let t = 0; t < this.knownParts.length; t++)
      if (!this.getExisting(this.knownParts[t]))
        return null;
    return N(this.value);
  }
  getTextAndFormat() {
    return this.merge(
      this.intl.formatDate(this.value, this.format),
      this.dateFormatString(this.value, this.format)
    );
  }
  modifyExisting(t) {
    const i = this.dateFormatString(this.value, this.format).symbols;
    for (let n = 0; n < i.length; n++)
      this.setExisting(i[n], t);
  }
  getExisting(t) {
    switch (t) {
      case "y":
        return this.year;
      case "M":
      case "L":
        return this.month;
      case "d":
        return this.date;
      case "E":
        return this.date && this.month && this.year;
      case "h":
      case "H":
        return this.hours;
      case "m":
        return this.minutes;
      case "s":
        return this.seconds;
      default:
        return !0;
    }
  }
  setExisting(t, i) {
    switch (t) {
      case "y":
        this.year = i, i === !1 && this._value.setFullYear(2e3);
        break;
      case "M":
        this.month = i, i === !1 && this._value.setMonth(0);
        break;
      case "d":
        this.date = i;
        break;
      case "h":
      case "H":
        this.hours = i;
        break;
      case "m":
        this.minutes = i;
        break;
      case "s":
        this.seconds = i;
        break;
      default:
        return;
    }
  }
  modifyPart(t, i) {
    let n = N(this.value);
    switch (t) {
      case "y":
        n.setFullYear(n.getFullYear() + i);
        break;
      case "M":
        n = we(this.value, i);
        break;
      case "d":
      case "E":
        n.setDate(n.getDate() + i);
        break;
      case "h":
      case "H":
        n.setHours(n.getHours() + i);
        break;
      case "m":
        n.setMinutes(n.getMinutes() + i);
        break;
      case "s":
        n.setSeconds(n.getSeconds() + i);
        break;
      case "a":
        n.setHours(n.getHours() + 12 * i);
        break;
    }
    this.setExisting(t, !0), this._value = n;
  }
  parsePart(t, i) {
    if (this.resetLeadingZero(), !i)
      return this.setExisting(t, !1), { value: null };
    const n = this.intl.formatDate(this.value, this.format), r = this.dateFormatString(this.value, this.format), a = r.symbols;
    let o = !1, s = "", l = "", d = "";
    for (let p = 0; p < n.length; p++)
      a[p] === t ? (l += this.getExisting(t) ? n[p] : "0", o = !0) : o ? d += n[p] : s += n[p];
    let c = null;
    const h = this.matchMonth(i);
    for (; l.length > 0 && l.charAt(0) === "0"; )
      l = l.slice(1);
    l.length >= 4 && (l = "");
    for (let p = 0; p < 2; p++) {
      let g = l + i, m = parseInt(g, 10);
      if (c = this.intl.parseDate(s + g + d, this.format), !c && !isNaN(m) && !isNaN(parseInt(i, 10))) {
        if (t === "M" && !h) {
          const f = m - 1;
          f > -1 && f < 12 && (c = N(this.value), c.setMonth(f), c.getMonth() !== f && (c = bt(we(c, -1))));
        }
        t === "y" && (c = nt(
          parseInt(g, 10),
          this.month ? this.value.getMonth() : 0,
          this.date ? this.value.getDate() : 1,
          this.hours ? this.value.getHours() : 0,
          this.minutes ? this.value.getMinutes() : 0,
          this.seconds ? this.value.getSeconds() : 0,
          this.milliseconds ? this.value.getMilliseconds() : 0
        ), this.date && c.getDate() !== this.value.getDate() && (c = bt(we(c, -1))));
      }
      if (c)
        return this._value = c, this.setExisting(t, !0), { value: this.value };
      l = "";
    }
    return h && (c = this.intl.parseDate(s + h + d, this.format), c) ? (this._value = c, this.setExisting(t, !0), { value: this.value }) : (i === "0" && (this.leadingZero = this.isAbbrMonth(r.partMap, t) ? null : { [t]: !0 }, this.setExisting(t, !1)), { value: null });
  }
  symbolMap(t) {
    return this.intl.splitDateFormat(this.format).reduce(hv, {})[t];
  }
  resetLeadingZero() {
    const t = this.leadingZero !== null;
    return this.leadingZero = null, t;
  }
  isAbbrMonth(t, i) {
    const n = this.partPattern(t, i);
    return n.type === "month" && n.names;
  }
  partPattern(t, i) {
    return t.filter((n) => n.pattern.indexOf(i) !== -1)[0];
  }
  matchMonth(t) {
    if (this.typedMonthPart += t.toLowerCase(), this.monthNames.length === 0)
      return "";
    for (; this.typedMonthPart.length > 0; ) {
      for (let n = 0; n < this.monthNames.length; n++)
        if (this.monthNames[n].toLowerCase().indexOf(this.typedMonthPart) === 0)
          return this.monthNames[n];
      const i = parseInt(this.typedMonthPart, 10);
      if (i >= 1 && i <= 12 && i.toString() === this.typedMonthPart)
        return this.monthNames[i - 1];
      this.typedMonthPart = this.typedMonthPart.substring(1, this.typedMonthPart.length);
    }
    return "";
  }
  allFormatedMonths() {
    const t = this.intl.splitDateFormat(this.format);
    for (let i = 0; i < t.length; i++)
      if (t[i].type === "month" && t[i].names)
        return this.intl.dateFormatNames(t[i].names);
    return [];
  }
  dateFormatString(t, i) {
    const n = this.intl.splitDateFormat(i), r = [], a = [];
    for (let s = 0; s < n.length; s++) {
      let l = this.intl.formatDate(t, { pattern: n[s].pattern }).length;
      for (; l > 0; )
        r.push(this.symbols[n[s].pattern[0]] || "_"), a.push(n[s]), l--;
    }
    const o = new lv();
    return o.symbols = r.join(""), o.partMap = a, o;
  }
  merge(t, i) {
    var n;
    let r = "", a = "", o = i.symbols;
    for (let s = o.length - 1; s >= 0; ) {
      if (this.knownParts.indexOf(o[s]) === -1 || this.getExisting(o[s]))
        r = t[s] + r, a = o[s] + a;
      else {
        const l = o[s];
        for (; s >= 0 && l === o[s]; )
          s--;
        for (s++, (n = this.leadingZero) != null && n[l] ? r = "0" + r : r = this.dateFieldName(i.partMap[s]) + r; a.length < r.length; )
          a = o[s] + a;
      }
      s--;
    }
    return { text: r, format: a };
  }
  dateFieldName(t) {
    const i = this.formatPlaceholder || "wide";
    return i[t.type] ? i[t.type] : i === "formatPattern" ? t.pattern : this.intl.dateFieldName(Object.assign(t, { nameType: i }));
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const fv = (e, t, i) => ({
  candidateValue: ui(Pn, e),
  maxValue: Ze(ui(Pn, i), t.getHours() < i.getHours() ? 0 : 1),
  minValue: ui(Pn, t)
}), mv = (e, t, i) => {
  if (!e || !t || !i)
    return !0;
  const {
    candidateValue: n,
    minValue: r,
    maxValue: a
  } = fv(e, t, i);
  return r <= n && n <= a;
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function vv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const bv = "Please enter a valid value!", xv = /* @__PURE__ */ k({
  name: "DateInput",
  model: {
    event: "changemodel"
  },
  inject: {
    kendoIntlService: {
      default: null
    },
    kendoLocalizationService: {
      default: null
    }
  },
  emits: {
    change: (e) => !0,
    changemodel: (e) => !0,
    "update:modelValue": (e) => !0,
    focus: (e) => !0,
    blur: (e) => !0
  },
  props: {
    modelValue: Date,
    value: Date,
    defaultValue: Date,
    format: {
      type: [String, Object],
      default: function() {
        return uv;
      }
    },
    formatPlaceholder: {
      type: [String, Object],
      default: function() {
        return dv;
      }
    },
    rounded: {
      type: String,
      default: "medium",
      validator: function(e) {
        return ["small", "medium", "large", "full"].includes(e);
      }
    },
    fillMode: {
      type: String,
      default: "solid",
      validator: function(e) {
        return ["solid", "flat", "outline"].includes(e);
      }
    },
    size: {
      type: String,
      default: "medium",
      validator: function(e) {
        return ["small", "medium", "large"].includes(e);
      }
    },
    tabIndex: Number,
    title: String,
    steps: Object,
    placeholder: String,
    max: {
      type: Date,
      default: function() {
        return N(ha);
      }
    },
    min: {
      type: Date,
      default: function() {
        return N(Uo);
      }
    },
    maxTime: {
      type: Date,
      default: function() {
        return N(mm);
      }
    },
    minTime: {
      type: Date,
      default: function() {
        return N(fm);
      }
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    spinners: {
      type: Boolean,
      default: !1
    },
    name: String,
    dir: String,
    label: String,
    id: String,
    validationMessage: {
      type: String,
      default: bv
    },
    required: {
      type: Boolean,
      default: !1
    },
    validityStyles: {
      type: Boolean,
      default: !0
    },
    validate: Boolean,
    valid: {
      type: Boolean,
      default: void 0
    },
    ariaRole: {
      type: String,
      default: "textbox"
    },
    ariaControls: String,
    ariaLabel: String,
    ariaExpanded: {
      type: Boolean,
      default: void 0
    },
    ariaHasPopup: {
      type: String,
      default: void 0
    },
    inputAttributes: Object
  },
  data() {
    return {
      kendoDate: null,
      currentFormat: void 0,
      valueDuringOnChange: void 0,
      hasMounted: !1,
      isEmpty: void 0,
      lastSelectedSymbol: void 0,
      isFocused: !1
    };
  },
  created() {
    Ve(ca);
    const {
      formatPlaceholder: e,
      format: t,
      value: i,
      defaultValue: n
    } = this.$props;
    this.kendoDate = new gv(this.intl, e, t), this.kendoDate.setValue(null), this._emptyText = this.kendoDate.getTextAndFormat().text, this.kendoDate.setValue(i || n || null), this._element = null, this._inputId = me();
  },
  computed: {
    computedValue() {
      return this.$data.valueDuringOnChange !== void 0 ? this.$data.valueDuringOnChange : this.kendoDate && this.kendoDate.getDateObject();
    },
    wrapperClassNames() {
      const e = !this.$data.hasMounted || !this.$props.validityStyles || this.validity().valid, t = this.$props.disabled, {
        size: i,
        fillMode: n,
        rounded: r
      } = this.$props;
      return {
        "k-dateinput": !0,
        "k-input": !0,
        [`k-input-${ye.sizeMap[i] || i}`]: i,
        [`k-input-${n}`]: n,
        [`k-rounded-${ye.roundedMap[r] || r}`]: r,
        "k-disabled": t,
        "k-invalid": !e && e !== void 0,
        "k-focus": this.isFocused,
        "k-rtl": this.$props.dir === "rtl"
      };
    }
  },
  methods: {
    selection() {
      let e = {
        start: 0,
        end: 0
      };
      const t = this.element();
      return t !== null && t.selectionStart !== void 0 && (e = {
        start: t.selectionStart,
        end: t.selectionEnd
      }), e;
    },
    element() {
      return this._element;
    },
    focus(e) {
      this._element && this._element.focus(e);
    },
    handleFocus(e) {
      this.$data.isFocused = !0, this.$emit("focus", {
        event: e
      });
    },
    handleBlur(e) {
      this.$data.isFocused = !1, this.$emit("blur", {
        event: e
      });
    },
    intl() {
      return xt(this);
    },
    setValidity() {
      const e = this.element();
      e && e.setCustomValidity && e.setCustomValidity(this.validity().valid ? "" : this.$props.validationMessage);
    },
    spinnersMouseDown(e) {
      const t = this.element();
      e.preventDefault(), t && se && document.activeElement !== t && t.focus({
        preventScroll: !0
      });
    },
    elementChange(e) {
      const t = this.element();
      if (!t || !this.kendoDate)
        return;
      const {
        text: i,
        format: n
      } = this.kendoDate.getTextAndFormat();
      this.$data.currentFormat = n;
      const r = this.computedValue, a = cv(i, this.$data.currentFormat, t.value, this.selection().start), o = a.length === 1 && a[0][1] === "_";
      if (!o)
        for (let s = 0; s < a.length; s++)
          this.kendoDate.parsePart(a[s][0], a[s][1]);
      a.length && a[0][0] !== "_" && this.setSelection(this.selectionBySymbol(a[0][0])), o && this.switchDateSegment(1), this.triggerChange(e, r);
    },
    elementClick(e) {
      this.setSelection(this.selectionByIndex(this.selection().start));
    },
    wheel(e) {
      const t = this.element();
      se && document.activeElement !== t || (e.deltaY < 0 && (e.preventDefault(), this.increasePart(e)), e.deltaY > 0 && (e.preventDefault(), this.decreasePart(e)));
    },
    increasePart(e) {
      e.preventDefault(), this.modifyDateSegmentValue(1, e);
    },
    decreasePart(e) {
      e.preventDefault(), this.modifyDateSegmentValue(-1, e);
    },
    elementKeyDown(e) {
      if (!e.altKey) {
        switch (e.keyCode) {
          case 37:
            this.switchDateSegment(-1);
            break;
          case 38:
            this.modifyDateSegmentValue(1, e);
            break;
          case 39:
            this.switchDateSegment(1);
            break;
          case 40:
            this.modifyDateSegmentValue(-1, e);
            break;
          default:
            return;
        }
        e.preventDefault();
      }
    },
    setSelection(e) {
      const t = this.element();
      this.$data.lastSelectedSymbol = this.$data.currentFormat[e.start], se && window.requestAnimationFrame(() => {
        t && se && document.activeElement === t && t.setSelectionRange(e.start, e.end);
      });
    },
    triggerChange(e, t) {
      this.$data.valueDuringOnChange = this.computedValue, da(t, this.computedValue) || (this.$emit("changemodel", this.computedValue), this.$emit("update:modelValue", this.computedValue), this.$emit("change", {
        event: e,
        value: this.computedValue,
        component: this,
        target: {
          name: this.$props.name,
          value: this.$data.valueDuringOnChange,
          valueAsDate: this.$data.valueDuringOnChange
        },
        validity: this.validity()
      })), this.$data.valueDuringOnChange = void 0;
    },
    selectionBySymbol(e) {
      let t = -1, i = 0;
      for (let n = 0; n < this.$data.currentFormat.length; n++)
        this.$data.currentFormat[n] === e && (i = n + 1, t === -1 && (t = n));
      return t < 0 && (t = 0), {
        start: t,
        end: i
      };
    },
    selectionByIndex(e) {
      let t = {
        start: e,
        end: e
      };
      for (let i = e, n = e - 1; i < this.$data.currentFormat.length || n >= 0; i++, n--) {
        if (i < this.$data.currentFormat.length && this.$data.currentFormat[i] !== "_") {
          t = this.selectionBySymbol(this.$data.currentFormat[i]);
          break;
        }
        if (n >= 0 && this.$data.currentFormat[n] !== "_") {
          t = this.selectionBySymbol(this.$data.currentFormat[n]);
          break;
        }
      }
      return t;
    },
    switchDateSegment(e) {
      const {
        start: t,
        end: i
      } = this.selection();
      if (t < i && this.$data.currentFormat[t] !== this.$data.currentFormat[i - 1]) {
        this.setSelection(this.selectionByIndex(e > 0 ? t : i - 1));
        return;
      }
      const n = this.$data.currentFormat[t];
      let r = t + e;
      for (; r > 0 && r < this.$data.currentFormat.length && !(this.$data.currentFormat[r] !== n && this.$data.currentFormat[r] !== "_"); )
        r += e;
      if (this.$data.currentFormat[r] === "_")
        return;
      let a = r;
      for (; a >= 0 && a < this.$data.currentFormat.length && this.$data.currentFormat[a] === this.$data.currentFormat[r]; )
        a += e;
      r > a && (a + 1 !== t || r + 1 !== i) ? this.setSelection({
        start: a + 1,
        end: r + 1
      }) : r < a && (r !== t || a !== i) && this.setSelection({
        start: r,
        end: a
      });
    },
    modifyDateSegmentValue(e, t) {
      if (!this.kendoDate)
        return;
      const i = this.computedValue, n = this.$data.currentFormat[this.selection().start], r = this.kendoDate.symbolMap(n), a = ((this.$props.steps || {})[r] || 1) * e;
      this.kendoDate.modifyPart(n, a), this.setSelection(this.selectionBySymbol(n)), this.triggerChange(t, i);
    },
    validity() {
      const e = pv(this.computedValue, this.$props.min, this.$props.max) && mv(this.computedValue, this.$props.minTime, this.$props.maxTime), t = this.$props.validationMessage !== void 0, i = (!this.$props.required || this.computedValue !== null) && e, n = this.$props.valid !== void 0 ? this.$props.valid : i;
      return {
        customError: t,
        rangeOverflow: this.computedValue && this.$props.max.getTime() < this.computedValue.getTime() || !1,
        rangeUnderflow: this.computedValue && this.computedValue.getTime() < this.$props.min.getTime() || !1,
        valid: n,
        valueMissing: this.computedValue === null
      };
    }
  },
  mounted() {
    this._element = J(this, "input"), this.setValidity(), this.$data.hasMounted = !0;
  },
  updated() {
    this.$data.lastSelectedSymbol && this.setSelection(this.selectionBySymbol(this.$data.lastSelectedSymbol)), this.setValidity();
  },
  setup() {
    const e = V(null), t = H("kendoIntlService", {}), i = H("kendoLocalizationService", {});
    return {
      inputRef: e,
      kendoIntlService: t,
      kendoLocalizationService: i
    };
  },
  render() {
    const e = B(this), t = Z(this), {
      formatPlaceholder: i,
      format: n,
      value: r,
      modelValue: a,
      name: o,
      label: s,
      id: l,
      ariaLabel: d,
      ariaExpanded: c,
      ariaHasPopup: h,
      ariaRole: p,
      ariaControls: g,
      inputAttributes: m
    } = this.$props, f = r !== void 0 ? r : a;
    this.kendoDate.format = n, this.kendoDate.formatPlaceholder = i, this.valueDuringOnChange = this.valueDuringOnChange ? this.valueDuringOnChange : void 0, f !== void 0 && this.computedValue !== f && this.kendoDate.setValue(f);
    const {
      text: b,
      format: v
    } = this.kendoDate.getTextAndFormat();
    this.$data.currentFormat = v, this.$data.isEmpty = b === this._emptyText;
    const $ = this.$props.placeholder !== void 0 && this.$data.isEmpty && !this.$data.isFocused ? null : b, y = l || this._inputId, C = !this.$props.validityStyles || this.validity().valid, D = u("span", {
      class: this.wrapperClassNames,
      dir: this.$props.dir
    }, [u("input", Fs({
      role: p,
      tabindex: this.$props.tabIndex,
      disabled: this.$props.disabled,
      title: this.$props.title !== void 0 ? this.$props.title : b,
      type: "text",
      spellcheck: !1,
      autocomplete: "off",
      autocorrect: "off",
      class: "k-input-inner",
      id: y,
      placeholder: this.$props.placeholder,
      onWheel: this.wheel,
      onClick: this.elementClick,
      onInput: this.elementChange,
      onKeydown: this.elementKeyDown,
      onChange: ke,
      onFocusin: this.handleFocus,
      onFocusout: this.handleBlur,
      value: $,
      name: o,
      "aria-label": d,
      "aria-expanded": c,
      "aria-haspopup": h,
      "aria-controls": g,
      "aria-disabled": this.$props.disabled,
      ref: he(this, "input")
    }, m), null), e, this.$props.spinners && u("span", {
      class: "k-input-spinner k-spin-button",
      onMousedown: this.spinnersMouseDown
    }, [u(xe, {
      type: "button",
      tabIndex: -1,
      icon: "caret-alt-up",
      svgIcon: Ys,
      size: this.$props.size,
      fillMode: this.$props.fillMode,
      class: "k-spinner-increase",
      "aria-label": t.toLanguageString(ii, ct[ii]),
      title: t.toLanguageString(ii, ct[ii]),
      onClick: this.increasePart
    }, null), u(xe, {
      type: "button",
      tabIndex: -1,
      class: "k-spinner-decrease",
      icon: "caret-alt-down",
      svgIcon: un,
      size: this.$props.size,
      fillMode: this.$props.fillMode,
      "aria-label": t.toLanguageString(ni, ct[ni]),
      title: t.toLanguageString(ni, ct[ni]),
      onClick: this.decreasePart
    }, null)])]);
    return s ? u(la, {
      label: s,
      editorId: y,
      editorValue: $,
      editorPlaceholder: this.$props.placeholder,
      editorValid: C,
      editorDisabled: this.$props.disabled
    }, vv(D) ? D : {
      default: () => [D]
    }) : D;
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const yv = xe;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function bs(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const pa = /* @__PURE__ */ k({
  name: "DatePicker",
  inject: {
    kendoLocalizationService: {
      default: null
    }
  },
  model: {
    event: "changemodel"
  },
  emits: {
    change: (e) => !0,
    changemodel: (e) => !0,
    "update:modelValue": (e) => !0,
    iconclick: (e) => !0,
    focus: (e) => !0,
    blur: (e) => !0,
    keydown: (e) => !0,
    open: (e) => !0,
    close: (e) => !0
  },
  props: {
    defaultShow: {
      type: Boolean,
      default: !1
    },
    modelValue: {
      type: Date,
      default: void 0
    },
    defaultValue: {
      type: Date,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    dateInput: {
      type: [String, Object, Function],
      default: function() {
      }
    },
    calendar: {
      type: [String, Object, Function],
      default: function() {
      }
    },
    toggleButton: {
      type: [String, Object, Function],
      default: function() {
      }
    },
    label: String,
    placeholder: String,
    popup: {
      type: [String, Object, Function],
      default: function() {
      }
    },
    rounded: {
      type: String,
      default: "medium",
      validator: function(e) {
        return ["small", "medium", "large", "full"].includes(e);
      }
    },
    fillMode: {
      type: String,
      default: "solid",
      validator: function(e) {
        return ["solid", "flat", "outline"].includes(e);
      }
    },
    size: {
      type: String,
      default: "medium",
      validator: function(e) {
        return ["small", "medium", "large"].includes(e);
      }
    },
    focusedDate: Date,
    format: {
      type: [Object, String],
      default: function() {
        return "d";
      }
    },
    formatPlaceholder: [Object, String],
    id: String,
    max: {
      type: Date,
      default: function() {
        return N(ha);
      }
    },
    min: {
      type: Date,
      default: function() {
        return N(Uo);
      }
    },
    name: String,
    popupSettings: {
      type: Object,
      default: function() {
        return {};
      }
    },
    show: {
      type: Boolean,
      default: void 0
    },
    tabIndex: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: function() {
        return "";
      }
    },
    value: Date,
    weekNumber: Boolean,
    width: [Number, String],
    validityStyles: {
      type: Boolean,
      default: !0
    },
    validationMessage: String,
    required: Boolean,
    validate: Boolean,
    valid: {
      type: Boolean,
      default: void 0
    },
    ariaLabel: String,
    inputAttributes: Object
  },
  data: function() {
    return {
      isFocused: !1,
      currentValue: void 0,
      currentShow: void 0,
      valueDuringOnChange: void 0,
      showDuringOnChange: void 0,
      shouldFocusDateInput: !1
    };
  },
  created() {
    Ve(ca), this._popupId = me(), this._anchor = me(), this._dateInput = null, this._calendar = null, this.$data.currentValue = this.$props.defaultValue, this.$data.currentShow = this.$props.defaultShow;
  },
  mounted() {
    this._dateInput = J(this, "dateInput"), (this.$refs.calendar || this.calendarRef) && (this._calendar = J(this, "calendar")), this.computedShow && this.$forceUpdate();
  },
  updated() {
    (this.$refs.calendar || this.calendarRef) && (this._calendar = J(this, "calendar")), this.computedShow ? this._calendar && this._calendar.$el && !this._oldShow && this._calendar.focus({
      preventScroll: !0
    }) : this._dateInput && this._dateInput.$el && this.$data.shouldFocusDateInput && this._dateInput.focus({
      preventScroll: !0
    }), this.$data.shouldFocusDateInput = !1;
  },
  watch: {
    show: function(e, t) {
      this._oldShow = t;
    },
    currentShow: function(e, t) {
      this._oldShow = t;
    }
  },
  computed: {
    computedValue() {
      const e = this.$data.valueDuringOnChange !== void 0 ? this.$data.valueDuringOnChange : this.$props.value !== void 0 ? this.$props.value : this.$props.modelValue !== void 0 ? this.$props.modelValue : this.$data.currentValue;
      return e !== null ? N(e) : null;
    },
    computedShow() {
      return this.$data.showDuringOnChange !== void 0 ? this.$data.showDuringOnChange : this.$props.show !== void 0 ? this.$props.show : this.$data.currentShow;
    }
  },
  methods: {
    focus() {
      this._dateInput && this._dateInput.focus();
    },
    handleFocus(e) {
      this._oldShow = this.computedShow, this.$data.isFocused = !0, this.$emit("focus", {
        event: e
      });
    },
    handleBlur(e) {
      this.$data.isFocused = !1, this.createBlurTimeout(), this.$emit("blur", {
        event: e
      });
    },
    calendarBlur(e) {
      this.$emit("blur", {
        event: e
      }), clearTimeout(this._blurTimeout), this.createBlurTimeout();
    },
    calendarFocus(e) {
      this.$emit("focus", {
        event: e
      }), clearTimeout(this._blurTimeout);
    },
    createBlurTimeout() {
      this._blurTimeout = setTimeout(() => {
        this._dateInput && se && document.activeElement !== this._dateInput._element && this.setShow(!1);
      }, 200);
    },
    validity() {
      const e = this.computedValue, t = om(e, this.$props.min, this.$props.max), i = this.$props.validationMessage !== void 0, n = (!this.$props.required || e !== null) && t, r = this.$props.valid !== void 0 ? this.$props.valid : n;
      return {
        customError: i,
        rangeOverflow: e && this.$props.max.getTime() < e.getTime() || !1,
        rangeUnderflow: e && e.getTime() < this.$props.min.getTime() || !1,
        valid: r,
        valueMissing: e === null
      };
    },
    nextValue(e, t) {
      return e.value !== void 0 ? e.value : t.value;
    },
    nextShow(e, t) {
      return e.show !== void 0 ? e.show : t.show;
    },
    setShow(e) {
      this.computedShow !== e && (this.$data.currentShow = e, this.$emit(e ? "open" : "close", {
        component: this
      }));
    },
    mergeTime(e) {
      return this.computedValue && e ? ui(e, this.computedValue) : e;
    },
    handleInputValueChange(e) {
      this.handleValueChange(e.value, e);
    },
    handleCalendarValueChange(e) {
      const t = this.mergeTime(e.value);
      this.handleValueChange(t, e);
    },
    getDateInputText() {
      return this.computedValue ? !0 : this._dateInput ? this._dateInput._element.value : "";
    },
    handleValueChange(e, t) {
      this.$data.currentValue = N(e || void 0), this.$data.valueDuringOnChange = e, this.$data.showDuringOnChange = !1, this.$data.shouldFocusDateInput = !0, this.$emit("changemodel", this.computedValue), this.$emit("update:modelValue", this.computedValue), this.$emit("change", {
        event: t.event,
        value: this.computedValue,
        show: this.computedShow,
        component: this,
        target: {
          name: this.$props.name,
          value: this.computedValue,
          valueAsDate: this.computedValue
        },
        validity: this.validity()
      }), this.$data.valueDuringOnChange = void 0, this.$data.showDuringOnChange = void 0, this.setShow(!1);
    },
    handleIconClick(e) {
      e.stopPropagation(), e.preventDefault(), !this.$props.disabled && (this.$data.shouldFocusDateInput = !0, this.$emit("iconclick", e), this.setShow(!this.computedShow));
    },
    handleIconMouseDown(e) {
      e.stopPropagation(), e.preventDefault();
    },
    handleKeyDown(e) {
      const {
        altKey: t,
        keyCode: i
      } = e;
      if (i === O.tab && this._dateInput && e.target !== this._dateInput._element) {
        e.preventDefault(), this.$data.shouldFocusDateInput = !0, this.setShow(!1);
        return;
      }
      if (i === O.esc) {
        this.$data.shouldFocusDateInput = !0, this.setShow(!1);
        return;
      }
      t && (i === O.up || i === O.down) && (e.preventDefault(), e.stopPropagation(), this.$data.shouldFocusDateInput = i === O.up, this.setShow(i === O.down)), this.$emit("keydown", e);
    }
  },
  setup() {
    const e = V(null), t = V(null), i = H("kendoLocalizationService", {});
    return {
      listRef: e,
      kendoAnchorRef: t,
      kendoLocalizationService: i
    };
  },
  render() {
    B(this);
    const {
      disabled: e,
      tabIndex: t,
      title: i,
      id: n,
      format: r,
      formatPlaceholder: a,
      min: o,
      max: s,
      weekNumber: l,
      focusedDate: d,
      width: c,
      name: h,
      validationMessage: p,
      required: g,
      validityStyles: m,
      size: f,
      fillMode: b,
      rounded: v,
      ariaLabel: $,
      inputAttributes: y
    } = this.$props, {
      popupClass: C,
      animate: D,
      appendTo: S
    } = this.$props.popupSettings, E = this.computedShow, L = this.computedValue, j = L && ee(L), Q = !this.$props.validityStyles || this.validity().valid, z = fe("k-calendar-container k-group k-reset", C), Y = this.$props.toggleButton ? P.call(this, this.$props.toggleButton, T.call(this)) : void 0, q = u(yv, {
      type: "button",
      tabIndex: -1,
      icon: "calendar",
      svgIcon: Oa,
      onMousedown: this.handleIconMouseDown,
      onClick: this.handleIconClick,
      title: Z(this).toLanguageString(ri, ct[ri]),
      "aria-label": Z(this).toLanguageString(ri, ct[ri]),
      rounded: null,
      class: "k-input-button"
    }, null), w = _.call(this, {
      h: M,
      template: Y,
      defaultRendering: q,
      defaultSlots: u(ie, {
        name: "calendar",
        icon: Oa
      }, null),
      additionalListeners: {
        click: this.handleIconClick
      }
    }), F = this.$props.dateInput ? P.call(this, this.$props.dateInput, T.call(this)) : void 0, ge = u(xv, {
      ref: he(this, "dateInput"),
      placeholder: this.$props.placeholder,
      disabled: e,
      format: r,
      formatPlaceholder: a,
      id: n,
      max: s,
      min: o,
      name: h,
      size: null,
      rounded: null,
      fillMode: null,
      onChange: this.handleInputValueChange,
      required: g,
      tabIndex: E ? -1 : t,
      title: i,
      valid: this.validity().valid,
      validationMessage: p,
      validityStyles: m,
      value: L,
      ariaHasPopup: "grid",
      ariaExpanded: E,
      ariaRole: "combobox",
      ariaControls: this._popupId,
      ariaLabel: $,
      inputAttributes: y
    }, null), W = _.call(this, {
      h: M,
      template: F,
      defaultRendering: ge
    }), G = this.$props.calendar ? P.call(this, this.$props.calendar, T.call(this)) : void 0, De = u(ov, {
      ref: he(this, "calendar"),
      onKeydown: this.handleKeyDown,
      onFocus: this.calendarFocus,
      onBlur: this.calendarBlur,
      disabled: e,
      value: j,
      min: o,
      max: s,
      weekNumber: l,
      focusedDate: d,
      onChange: this.handleCalendarValueChange
    }, null), Ae = _.call(this, {
      h: M,
      template: G,
      defaultRendering: De
    }), pt = this.$props.popup ? P.call(this, this.$props.popup, T.call(this)) : void 0, st = u(ea, {
      show: E,
      anchor: this._anchor,
      class: z,
      id: this._popupId,
      anchorAlign: {
        horizontal: "left",
        vertical: "bottom"
      },
      popupAlign: {
        horizontal: "left",
        vertical: "top"
      },
      animate: D,
      appendTo: S
    }, bs(Ae) ? Ae : {
      default: () => [Ae]
    }), ot = _.call(this, {
      h: M,
      template: pt,
      defaultRendering: st,
      defaultSlots: Ae
    }), Ke = u("span", {
      ref: he(this, "kendoAnchor"),
      role: "group",
      class: fe("k-input", "k-datepicker", {
        [`k-input-${ye.sizeMap[f] || f}`]: f,
        [`k-input-${b}`]: b,
        [`k-rounded-${ye.roundedMap[v] || v}`]: v,
        "k-invalid": !Q,
        "k-required": this.required,
        "k-disabled": this.$props.disabled,
        "k-focus": this.$data.isFocused
      }),
      onKeydown: this.handleKeyDown,
      onFocusin: this.handleFocus,
      onFocusout: this.handleBlur
    }, [W, w, ot]);
    return this.$props.label ? u(la, {
      label: this.$props.label,
      editorId: n,
      editorValid: Q,
      editorValue: this.getDateInputText(),
      editorPlaceholder: this.$props.placeholder,
      editorDisabled: this.$props.disabled,
      style: {
        width: c
      }
    }, bs(Ke) ? Ke : {
      default: () => [Ke]
    }) : Ke;
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function $v(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const kv = /* @__PURE__ */ k({
  name: "KendoNumericButtons",
  props: {
    buttonCount: Number,
    totalPages: Number,
    currentPage: Number,
    size: String,
    responsiveSize: String,
    onPagechange: Function
  },
  inject: {
    kendoLocalizationService: {
      default: null
    }
  },
  computed: {
    start() {
      const e = this.$props.currentPage, t = this.$props.buttonCount;
      if (e > t) {
        const i = e % t;
        return i === 0 ? e - t + 1 : e - i + 1;
      }
      return 1;
    },
    end() {
      return Math.min(this.start + this.$props.buttonCount - 1, this.$props.totalPages);
    },
    dropdownClass() {
      const {
        size: e
      } = this.$props;
      return {
        "k-picker": !0,
        "k-dropdown-list": !0,
        "k-dropdown": !0,
        "k-rounded-md": !0,
        "k-picker-solid": !0,
        [`k-picker-${ye.sizeMap[e] || e}`]: e
      };
    }
  },
  methods: {
    click(e, t) {
      e.preventDefault(), this.$emit("pagechange", t, e);
    },
    ddlChange(e) {
      this.$emit("pagechange", parseInt(e.target.value, 10), e);
    }
  },
  render() {
    const e = Z(this), t = this.$props.messagesMap ? this.$props.messagesMap(Ui) : {
      messageKey: Ui,
      defaultMessage: Be[Ui]
    }, i = this.start > 1 && u(xe, {
      fillMode: "flat",
      themeColor: "primary",
      size: this.$props.size,
      rounded: null,
      onClick: (s) => this.click(s, this.start - 1)
    }, {
      default: () => [At("...")]
    }), n = this.end < this.$props.totalPages && u(xe, {
      fillMode: "flat",
      themeColor: "primary",
      size: this.$props.size,
      rounded: null,
      onClick: (s) => this.click(s, this.end + 1)
    }, {
      default: () => [At("...")]
    }), r = [];
    for (let s = this.start; s <= this.end; s++)
      r.push(s);
    const a = r.map(function(s) {
      return u(xe, {
        key: s,
        class: "k-link",
        onClick: (l) => this.click(l, s),
        selected: this.$props.currentPage === s,
        fillMode: "flat",
        themeColor: "primary",
        size: this.$props.size,
        rounded: null,
        role: "button",
        title: "Page " + s,
        "aria-current": this.$props.currentPage === s ? !0 : void 0
      }, $v(s) ? s : {
        default: () => [s]
      });
    }, this), o = function(s) {
      return u("select", {
        style: {
          width: "5em",
          margin: "0px 1em",
          display: this.$props.responsiveSize === "small" ? "inline-flex" : "none"
        },
        class: this.dropdownClass,
        "aria-label": e.toLanguageString(t.messageKey, t.defaultMessage),
        onChange: this.ddlChange
      }, [s.map(function(l) {
        return u("option", {
          value: l,
          selected: l === this.$props.currentPage
        }, [l]);
      }, this)]);
    };
    return u("div", {
      class: "k-pager-numbers-wrap"
    }, [u("div", {
      class: "k-pager-numbers",
      style: {
        display: this.$props.responsiveSize !== "small" ? "" : "none"
      }
    }, [i, a, n]), o.call(this, r)]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const wv = /* @__PURE__ */ k({
  name: "KendoPagerInput",
  props: {
    totalPages: Number,
    currentPage: Number,
    messagesMap: Function,
    size: String,
    onPagechange: Function
  },
  inject: {
    kendoIntlService: {
      default: null
    },
    kendoLocalizationService: {
      default: null
    }
  },
  data() {
    return {
      currentText: void 0
    };
  },
  computed: {
    computedValue() {
      return this.$props.currentPage !== void 0 ? this.$props.currentPage : this.currentText;
    }
  },
  methods: {
    changeHangler(e) {
      this.currentText = e.target.value, this.currentText && this.$emit("pagechange", this.currentText, e);
    }
  },
  setup() {
    const e = H("kendoIntlService", {}), t = H("kendoLocalizationService", {});
    return {
      kendoIntlService: e,
      kendoLocalizationService: t
    };
  },
  render() {
    const e = xt(this), t = Z(this), i = this.$props.messagesMap ? this.$props.messagesMap(Xi) : {
      messageKey: Xi,
      defaultMessage: Be[Xi]
    }, n = this.$props.messagesMap ? this.$props.messagesMap(Ji) : {
      messageKey: Ji,
      defaultMessage: Be[Ji]
    }, r = this.$props.messagesMap ? this.$props.messagesMap(Zi) : {
      messageKey: Zi,
      defaultMessage: Be[Zi]
    }, a = this.$props.messagesMap ? this.$props.messagesMap(Wi) : {
      messageKey: Wi,
      defaultMessage: Be[Wi]
    };
    return u("span", {
      class: "k-pager-input"
    }, [u("span", null, [t.toLanguageString(i.messageKey, i.defaultMessage)]), u(vn, {
      min: 1,
      value: this.computedValue,
      onChange: this.changeHangler,
      spinners: !1,
      size: this.$props.size,
      ariaLabel: t.toLanguageString(a.messageKey, a.defaultMessage)
    }, null), u("span", null, [`${t.toLanguageString(n.messageKey, n.defaultMessage)} ${e.format(t.toLanguageString(r.messageKey, r.defaultMessage), [this.$props.totalPages])}`])]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Sv = /* @__PURE__ */ k({
  name: "KendoPagerPageSizes",
  props: {
    value: [String, Number],
    pageSize: Number,
    pageSizes: Array,
    size: String,
    messagesMap: Function,
    onPagechange: Function
  },
  inject: {
    kendoLocalizationService: {
      default: null
    }
  },
  methods: {
    pageSizeChange(e) {
      this.$emit("pagechange", {
        skip: 0,
        take: parseInt(e.target.value, 10)
      }, e);
    }
  },
  setup() {
    return {
      kendoLocalizationService: H("kendoLocalizationService", {})
    };
  },
  render() {
    const {
      value: e,
      pageSizes: t,
      pageSize: i
    } = this.$props, n = Z(this), r = t.slice();
    e === void 0 && r.filter((s) => s === i).length === 0 && r.unshift(i);
    const a = this.$props.messagesMap ? this.$props.messagesMap(qi) : {
      messageKey: qi,
      defaultMessage: Be[qi]
    }, o = this.$props.messagesMap ? this.$props.messagesMap(Yi) : {
      messageKey: Yi,
      defaultMessage: Be[Yi]
    };
    return u("span", {
      class: "k-pager-sizes k-label"
    }, [u(jt, {
      value: e !== void 0 ? e : i,
      dataItems: r,
      size: this.$props.size,
      ariaLabel: n.toLanguageString(o.messageKey, o.defaultMessage),
      onChange: this.pageSizeChange
    }, null), n.toLanguageString(a.messageKey, a.defaultMessage)]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Cv = /* @__PURE__ */ k({
  name: "KendoPagerInfo",
  props: {
    totalPages: Number,
    currentPage: Number,
    skip: Number,
    messagesMap: Function
  },
  inject: {
    kendoLocalizationService: {
      default: null
    },
    kendoIntlService: {
      default: null
    }
  },
  setup() {
    const e = H("kendoIntlService", {}), t = H("kendoLocalizationService", {});
    return {
      kendoIntlService: e,
      kendoLocalizationService: t
    };
  },
  render() {
    const e = xt(this), t = Z(this), i = this.$props.messagesMap ? this.$props.messagesMap(Ri) : {
      messageKey: Ri,
      defaultMessage: Be[Ri]
    };
    return u("span", {
      class: "k-pager-info"
    }, [e.format(t.toLanguageString(i.messageKey, i.defaultMessage), [Math.min(this.$props.skip + 1, this.$props.totalPages), Math.min(this.$props.skip + this.$props.currentPage, this.$props.totalPages), this.$props.totalPages])]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Vi = /* @__PURE__ */ k({
  name: "KendoPagerNavigationButton",
  props: {
    title: String,
    disabled: Boolean,
    icon: String,
    svgIcon: Object,
    page: Number,
    size: String,
    onPagechange: Function
  },
  inject: {
    kendoLocalizationService: {
      default: null
    },
    kendoIntlService: {
      default: null
    }
  },
  methods: {
    changePage(e) {
      e.preventDefault(), this.$emit("pagechange", this.$props.page, e);
    }
  },
  render() {
    return u(xe, {
      fillMode: "flat",
      themeColor: "base",
      size: this.$props.size,
      rounded: null,
      class: "k-pager-nav",
      ariaLabel: this.title,
      icon: ld(this.icon),
      svgIcon: this.svgIcon,
      title: this.title,
      disabled: this.disabled,
      role: "button",
      onClick: this.changePage
    }, null);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Iv = "k-pager-numbers-wrap", Dv = "k-pager-sizes", Ev = "k-pager-info", Mv = /* @__PURE__ */ k({
  name: "KendoPager",
  props: {
    pageSizeValue: [String, Number],
    total: Number,
    skip: Number,
    take: Number,
    pageSize: Number,
    settings: [Object, Boolean],
    buttonCount: {
      type: Number,
      default: 10
    },
    info: {
      type: Boolean,
      default: !0
    },
    type: {
      type: String,
      default: "numeric",
      validator: function(e) {
        return ["numeric", "input"].includes(e);
      }
    },
    pageSizes: {
      type: Array
    },
    previousNext: Boolean,
    messagesMap: Function,
    responsive: {
      type: Boolean,
      default: !0
    },
    size: {
      type: String,
      default: "medium",
      validator: function(e) {
        return [null, "small", "medium", "large"].includes(e);
      }
    },
    pagerRender: [String, Function, Object],
    width: [Number, String],
    ariaControls: {
      type: String,
      default: void 0
    },
    onPagesizechange: Function,
    onPagechange: Function
  },
  data() {
    return {
      currentRtl: !1,
      itemsToFit: void 0,
      itemsWidths: void 0
    };
  },
  mounted() {
    se && window.ResizeObserver && (this.observerResize = new window.ResizeObserver(this.onWindowResize), this.observerResize.observe(this.$el)), this.currentRtl = tn(this.$el);
    const e = this.collectPagerChildrenWidths();
    this.itemsWidths = e, this.onWindowResize();
  },
  unmounted() {
    var e;
    (e = this.document) != null && e.body && this.observerResize && this.observerResize.disconnect();
  },
  inject: {
    kendoLocalizationService: {
      default: null
    },
    kendoIntlService: {
      default: null
    }
  },
  computed: {
    wrapperClass() {
      const {
        size: e
      } = this.$props;
      return {
        "k-pager": !0,
        [`k-pager-${ye.sizeMap[e] || e}`]: e
      };
    },
    totalPages() {
      return Math.ceil((this.$props.total || 0) / this.currentTake);
    },
    currentPage() {
      return Math.floor((this.$props.skip || 0) / this.currentTake) + 1;
    },
    currentTake() {
      return this.$props.take || this.$props.pageSize;
    },
    showPageSizes() {
      return this.itemsToFit.includes(this.pagerSizesIndex);
    },
    showInfo() {
      return this.itemsToFit.includes(this.pagerInfoIndex);
    }
  },
  methods: {
    changePage(e, t) {
      e > 0 && e <= this.totalPages && this.$emit("pagechange", {
        skip: (e - 1) * this.currentTake,
        take: this.currentTake
      }, t);
    },
    triggerPageChange(e, t) {
      it.call(this, "pagesizechange") ? this.$emit("pagesizechange", e, t) : this.$emit("pagechange", e, t);
    },
    onWindowResize() {
      const e = this.$el;
      !e || !this.$props.responsive || this.$props.settings.responsive === !1 || (this.itemsToFit = this.fitChildrenInParent(e, this.itemsWidths || []));
    },
    transformDimension(e) {
      return typeof e == "string" && e.endsWith("px") ? e : e + "px";
    },
    collectPagerChildrenWidths() {
      var e;
      return Array.from(((e = this.$el) == null ? void 0 : e.children) || []).map((t) => t instanceof HTMLElement ? {
        class: t.className,
        width: t.offsetWidth
      } : 0);
    },
    fitChildrenInParent(e, t) {
      let i = [], n = 0, r = t;
      const a = e.offsetWidth, o = 20;
      for (let s = 0; s < t.length; s++) {
        const l = s === 0 ? 8 : 0, d = e.children[s], c = s === 0 ? t[s].width : (d == null ? void 0 : d.offsetWidth) || t[s].width;
        n += c, n < a - o - l ? i.push(t[s].class) : r[s].width = c;
      }
      return this.itemsWidths = r, i;
    }
  },
  setup() {
    const e = H("kendoIntlService", {}), t = H("kendoLocalizationService", {});
    return {
      kendoIntlService: e,
      kendoLocalizationService: t
    };
  },
  render() {
    var e, t;
    const {
      skip: i,
      take: n,
      total: r,
      pageSizes: a,
      buttonCount: o,
      messagesMap: s,
      info: l,
      type: d,
      previousNext: c,
      pageSizeValue: h
    } = this.$props, p = {
      pageSizes: a,
      buttonCount: o,
      info: l,
      previousNext: c,
      type: d,
      pageSizeValue: h,
      ...this.$props.settings
    }, g = this.$props.pagerRender || this.$props.settings.pagerRender, m = g ? P.call(this, g, T.call(this)) : null, f = Z(this), b = s ? s(Bi) : {
      messageKey: Bi,
      defaultMessage: Be[Bi]
    }, v = s ? s(ji) : {
      messageKey: ji,
      defaultMessage: Be[ji]
    }, $ = s ? s(Gi) : {
      messageKey: Gi,
      defaultMessage: Be[Gi]
    }, y = s ? s(Ki) : {
      messageKey: Ki,
      defaultMessage: Be[Ki]
    }, C = p.type === "numeric" ? u(kv, {
      responsiveSize: this.responsive && this.itemsToFit && this.itemsToFit.length < 2 ? "small" : "large",
      size: this.size,
      buttonCount: p.buttonCount || 0,
      totalPages: this.totalPages,
      currentPage: this.currentPage,
      onPagechange: this.changePage
    }, null) : u(wv, {
      currentPage: this.currentPage,
      totalPages: this.totalPages,
      onPagechange: this.changePage,
      messagesMap: s,
      size: this.size
    }, null);
    let D, S, E, L;
    p.previousNext && (D = u(Vi, {
      class: "k-pager-first",
      size: this.size,
      disabled: this.currentPage === 1,
      page: 1,
      title: f.toLanguageString(b.messageKey, b.defaultMessage),
      icon: this.currentRtl ? "caret-alt-to-right" : "caret-alt-to-left",
      svgIcon: this.currentRtl ? Ea : Ma,
      onPagechange: this.changePage
    }, null), S = u(Vi, {
      disabled: this.currentPage === 1,
      size: this.size,
      page: this.currentPage - 1,
      title: f.toLanguageString(v.messageKey, v.defaultMessage),
      icon: this.currentRtl ? "caret-alt-right" : "caret-alt-left",
      svgIcon: this.currentRtl ? tr : ir,
      onPagechange: this.changePage
    }, null), E = u(Vi, {
      disabled: this.currentPage === this.totalPages,
      size: this.size,
      page: this.currentPage + 1,
      title: f.toLanguageString($.messageKey, $.defaultMessage),
      icon: this.currentRtl ? "caret-alt-left" : "caret-alt-right",
      svgIcon: this.currentRtl ? ir : tr,
      onPagechange: this.changePage
    }, null), L = u(Vi, {
      class: "k-pager-last",
      disabled: this.currentPage === this.totalPages,
      size: this.size,
      page: this.totalPages,
      title: f.toLanguageString(y.messageKey, y.defaultMessage),
      icon: this.currentRtl ? "caret-alt-to-left" : "caret-alt-to-right",
      svgIcon: this.currentRtl ? Ma : Ea,
      onPagechange: this.changePage
    }, null));
    const j = p.pageSizes && u(Sv, {
      onPagechange: this.triggerPageChange,
      pageSize: this.currentTake,
      pageSizes: p.pageSizes,
      value: p.pageSizeValue,
      messagesMap: s,
      size: this.size
    }, null), Q = p.info && u(Cv, {
      totalPages: this.$props.total,
      skip: this.$props.skip,
      currentPage: this.currentTake,
      messagesMap: s
    }, null);
    let z = _.call(this, {
      h: M,
      template: m,
      additionalProps: {
        ...this.$props,
        current: this.currentPage
      },
      additionalListeners: {
        pagechange: this.triggerPageChange
      }
    });
    const Y = this.transformDimension(this.$props.width);
    return g ? u("div", {
      class: this.wrapperClass,
      style: {
        width: Y
      },
      role: "application",
      "aria-roledescription": "pager"
    }, [z]) : u("div", {
      class: this.wrapperClass,
      style: {
        width: Y
      },
      role: "application",
      "aria-roledescription": "pager",
      "aria-keyshortcuts": "Enter ArrowRight ArrowLeft",
      "aria-label": "Page navigation, page " + this.currentPage + " of " + this.totalPages,
      "aria-controls": this.$props.ariaControls
    }, [u("div", {
      class: Iv
    }, [D, S, C, E, L]), !(this.responsive && this.itemsToFit && !((e = this.itemsToFit) != null && e.find((q) => q.indexOf(Dv) !== -1))) && j, !(this.responsive && this.itemsToFit && !((t = this.itemsToFit) != null && t.find((q) => q.indexOf(Ev) !== -1))) && Q]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const be = "data-keyboardnavlevel", Fv = "data-keyboardnavscope", Lv = "data-keyboardnavheader", Ov = "data-keyboardnavbody", Ce = "data-keyboardnavid", Nv = "_filter", Jo = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"], ga = [...Jo, "[tabindex]"], Av = [...Jo, "[tabindex]"].map((e) => e + ':not([tabindex="-1"])');
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const _v = /* @__PURE__ */ k({
  name: "KendoHeaderThElement",
  emits: {
    keydown: null
  },
  props: {
    ariaSort: {
      type: String,
      validator: function(e) {
        return ["none", "ascending", "descending"].includes(e);
      }
    },
    ariaLabel: String,
    ariaColumnIndex: Number,
    ariaSelected: Boolean,
    ariaHaspopup: String,
    colSpan: Number,
    rowSpan: Number,
    role: String,
    columnId: String,
    navigatable: Boolean
  },
  computed: {
    thClass() {
      const {
        className: e
      } = this.$props;
      return {
        "k-table-th": !0,
        [e]: e
      };
    }
  },
  inject: {
    getKeyboardNavigationAttributes: {
      default: ke
    }
  },
  setup() {
    const e = H("kendoIntlService", {}), t = H("kendoLocalizationService", {});
    return {
      kendoIntlService: e,
      kendoLocalizationService: t
    };
  },
  render() {
    const {
      ariaSort: e,
      colSpan: t,
      rowSpan: i,
      columnId: n,
      navigatable: r,
      ariaColumnIndex: a,
      ariaLabel: o,
      ariaHaspopup: s,
      role: l,
      ariaSelected: d
    } = this.$props, c = this.getKeyboardNavigationAttributes(n, r), h = B(this);
    return u("th", {
      style: {
        top: "0px"
      },
      "aria-sort": e,
      "aria-label": o,
      "aria-colindex": a,
      "aria-selected": d,
      "aria-haspopup": s,
      colspan: t,
      rowspan: i,
      class: this.thClass,
      onKeydown: this.onKeyDown,
      role: l,
      tabindex: c.tabIndex,
      "data-keyboardnavlevel": c[be],
      "data-keyboardnavid": c[Ce]
    }, [h]);
  },
  methods: {
    onKeyDown(e) {
      this.$emit("keydown", e);
    }
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const zv = ({
  buttonCount: e = 10,
  info: t = !0,
  type: i = "numeric",
  pageSizes: n = !1,
  previousNext: r = !0,
  responsive: a = !0,
  pagerRender: o = void 0,
  pageSizeValue: s = void 0
}) => ({
  buttonCount: e,
  info: t,
  pageSizes: n === !0 ? [5, 10, 20] : n,
  previousNext: r,
  type: i,
  responsive: a,
  pagerRender: o,
  pageSizeValue: s
}), Vv = (e) => zv(e === !0 ? {} : e);
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Tv = (e, t, i = "cell") => `${t}_${e}_${i}`, Pv = (e) => {
  if (e)
    return parseInt(e.getAttribute(be) || "", 10);
}, fa = (e) => e && e.getAttribute(Ce) || void 0, fr = (e) => e ? !!e.getAttribute(Ce) : !1, Hv = (e, t = { level: 0 }) => e.querySelector(`[${be}='${t.level}']`), Rv = (e) => e.parentElement && e.parentElement.closest(`[${be}]`), Bv = (e, t) => e.querySelector(`[${Ce}='${t}']`), jv = (e) => e.parentElement && e.parentElement.closest(`[${Fv}]`), Zo = (e) => e.querySelector(`[${Lv}]`), Qo = (e) => e.querySelector(`[${Ov}]`), Gv = (e, t = { focusable: !1 }) => {
  let i = t.focusable ? ga : Av;
  return Array.from(e.querySelectorAll(i.join(",")));
}, Kv = (e, t = { level: 0 }) => {
  if (!e)
    return [];
  let i = ga.map((n) => n + `[${be}='${t.level}']`).join(",");
  return Array.from(e.querySelectorAll(i));
}, qv = (e = { level: 0 }) => {
  let t = ga.map(
    (i) => i + `[${be}='${e.level}']`
  ).join(",");
  return (i) => i.matches(t);
}, Wv = (e) => {
  const { elementForFocus: t, event: i, kbContext: n, prevElement: r } = e;
  n && t && t.focus && (i.preventDefault(), t.focus(), fr(t) && (t.setAttribute("tabIndex", "0"), n.activeId = fa(t)), r && fr(r) && r.setAttribute("tabIndex", "-1"));
}, Uv = (e) => e ? e.idPrefix : "", el = (e, t, i, n, r) => {
  if (!i)
    return [];
  let a = e + (r ? -1 : 1);
  for (; a >= 0 && a < n.length; ) {
    const o = n[a][t];
    if (o !== i)
      return [o, [a, t]];
    a = a + (r ? -1 : 1);
  }
  return [];
}, tl = (e, t, i, n, r) => {
  if (!i)
    return [];
  let a = t + (r ? -1 : 1);
  for (; a >= 0 && a < n[e].length; ) {
    const o = n[e][a];
    if (o !== i)
      return [o, [e, a]];
    a = a + (r ? -1 : 1);
  }
  return [];
}, mr = (e, t) => {
  if (t) {
    for (let i = 0; i < e.length; i++)
      for (let n = 0; n < e[i].length; n++)
        if (e[i][n] === t)
          return [i, n];
  }
}, Yv = (e) => e ? e.navigationMatrix.length : 0, Xv = (e) => e ? `${e}${Nv}` : "", K = {
  generateNavigatableId: Tv,
  getNavigatableId: fa,
  getNavigatableLevel: Pv,
  getNavigatableElement: Hv,
  getClosestNavigatableElement: Rv,
  getActiveElement: Bv,
  getClosestScope: jv,
  getHeaderElement: Zo,
  getBodyElement: Qo,
  getFocusableElements: Gv,
  getNavigatableElements: Kv,
  filterNavigatableElements: qv,
  focusElement: Wv,
  getIdPrefix: Uv,
  isNavigatable: fr,
  findNextIdByRowIndex: el,
  findNextIdByCellIndex: tl,
  findId: mr,
  getNextNavigationIndex: Yv,
  getFilterColumnId: Xv
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const xs = /* @__PURE__ */ k({
  name: "KendoTableKeyboardNavigationProvider",
  props: {
    navigatable: {
      type: Boolean,
      default: !1
    },
    id: String
  },
  data: function() {
    return {
      scope: void 0,
      kbContext: void 0,
      navigation: void 0
    };
  },
  provide: function() {
    return {
      getKeyboardNavigationAttributes: this.getKeyboardNavigationAttributes,
      onNavMount: this.onComponentDidMount,
      onGetSnapshotBeforeUpdate: this.onGetSnapshotBeforeUpdate,
      onComponentDidUpdate: this.onComponentDidUpdate,
      onNavFocus: this.onFocus,
      onNavKeyDown: this.onKeyDown,
      generateMatrix: this.generateMatrix,
      kbContext: this.kbContext,
      navigation: this.navigation
    };
  },
  created() {
    const {
      navigatable: e,
      id: t
    } = this.$props;
    e && (this.kbContext = {
      activeId: "",
      level: 0
    }, this.navigation = {
      activeElementIsFocused: !1,
      prevNavigationIndexes: void 0,
      idPrefix: t || me(),
      navigationMatrix: [],
      lastHeaderIndex: -1
    });
  },
  methods: {
    getKeyboardNavigationAttributes(e) {
      return !e || this.$props.navigatable === !1 ? {} : {
        tabIndex: this.kbContext.activeId && this.kbContext.activeId === e ? 0 : -1,
        [be]: this.kbContext.level,
        [Ce]: e
      };
    },
    onComponentDidMount(e) {
      const {
        scope: t = this.scope
      } = e;
      if (this.kbContext && this.navigation && t) {
        this.scope = t, this.generateMatrix(e);
        const i = this.navigation.navigationMatrix[0][0], n = K.getActiveElement(t, i);
        i && n && (this.kbContext.activeId = i, n.setAttribute("tabIndex", "0"));
      }
    },
    onGetSnapshotBeforeUpdate(e) {
      const {
        kbContext: t = this.kbContext,
        navigation: i = this.navigation,
        document: n
      } = e;
      if (t && i && n) {
        const r = n.activeElement, a = K.getNavigatableId(r);
        a && a === t.activeId && (i.activeElementIsFocused = !0);
      }
    },
    onComponentDidUpdate(e) {
      const {
        scope: t
      } = e;
      if (this.generateMatrix(e), this.kbContext && this.navigation && t) {
        if (!K.getActiveElement(t, this.kbContext.activeId)) {
          const i = this.navigation.navigationMatrix[0][0], n = K.getActiveElement(t, i);
          i && n && (this.kbContext.activeId = i, n.setAttribute("tabIndex", "0"), this.navigation.activeElementIsFocused && n.focus());
        }
        this.navigation.activeElementIsFocused = !1;
      }
    },
    onFocus(e) {
      const t = this.kbContext;
      if (e.defaultPrevented || !t)
        return;
      const i = e.target, n = K.getNavigatableId(i);
      if (n && n !== t.activeId) {
        const r = K.getClosestScope(i);
        if (!r)
          return;
        const a = K.getActiveElement(r, t.activeId);
        a && a.setAttribute("tabIndex", "-1"), i.setAttribute("tabIndex", "0"), t.activeId = n;
      }
    },
    onKeyDown(e, t) {
      const {
        kbContext: i = this.kbContext,
        navigation: n = this.navigation,
        onNavigationAction: r
      } = t;
      if (e.defaultPrevented || !i || !n)
        return;
      if (e.keyCode === O.esc) {
        const c = K.getClosestNavigatableElement(e.target);
        K.focusElement({
          elementForFocus: c,
          event: e,
          kbContext: i
        });
        return;
      }
      const a = e.target, o = K.getNavigatableId(a), s = K.getNavigatableLevel(a), l = K.getClosestScope(a), d = n.navigationMatrix;
      if (s !== void 0 && l) {
        if (e.keyCode === O.enter) {
          const c = K.getNavigatableElement(a, {
            level: s + 1
          });
          if (c) {
            K.focusElement({
              elementForFocus: c,
              event: e,
              kbContext: i,
              prevElement: a
            });
            return;
          } else {
            const h = K.getFocusableElements(a)[0];
            K.focusElement({
              elementForFocus: h,
              event: e,
              kbContext: i,
              prevElement: a
            });
            return;
          }
        }
        if (e.keyCode === O.up || e.keyCode === O.down || e.keyCode === O.left || e.keyCode === O.right) {
          const c = e.keyCode === O.up || e.keyCode === O.left, h = e.keyCode === O.up || e.keyCode === O.down;
          let p;
          if (n && n.prevNavigationIndexes) {
            const [g, m] = n.prevNavigationIndexes;
            d[g][m] === o ? p = n.prevNavigationIndexes : p = mr(d, o);
          } else
            p = mr(d, o);
          if (p) {
            const [g, m] = p, [f, b] = h ? el(g, m, o, d, c) : tl(g, m, o, d, c);
            if (f) {
              const v = K.getActiveElement(l, f);
              K.focusElement({
                elementForFocus: v,
                event: e,
                kbContext: i,
                prevElement: a
              }), n.prevNavigationIndexes = b, r && r({
                focusElement: v,
                event: e
              });
            }
          }
        }
      }
    },
    generateMatrix(e) {
      const {
        navigation: t = this.navigation,
        scope: i
      } = e;
      if (!t || !i)
        return;
      const n = [], r = Zo(i), a = Qo(i);
      if (!r || !a)
        return;
      const o = Array.from(r.children), s = Array.from(a.children);
      [...o, ...s].forEach((l, d) => {
        Array.from(l.children).forEach((c) => {
          const h = fa(c);
          if (!h)
            return;
          const p = c.rowSpan || 1, g = c.colSpan || 1;
          let m;
          for (let f = d, b = d + p; f < b; f++) {
            if (n[f] || (n[f] = []), m === void 0) {
              const v = n[f].findIndex(($) => !$);
              m = v > -1 ? v : n[f].length;
            }
            n[f][m] = h || "";
          }
          for (let f = m + 1, b = m + g; f < b; f++)
            n[d][f] = h || "";
        });
      }), t.navigationMatrix = n.filter((l) => !!l), t.lastHeaderIndex = o.length - 1;
    }
  },
  /**
   * @hidden
   */
  render() {
    return B(this)[0];
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ys = /* @__PURE__ */ k({
  name: "KendoHeaderTdElement",
  emits: {
    keydown: null
  },
  props: {
    ariaColumnIndex: Number,
    role: String,
    columnId: String,
    navigatable: Boolean
  },
  computed: {
    tdClass() {
      const {
        className: e
      } = this.$props;
      return {
        "k-table-td": !0,
        [e]: e
      };
    }
  },
  inject: {
    getKeyboardNavigationAttributes: {
      default: ke
    }
  },
  setup() {
    const e = H("kendoIntlService", {}), t = H("kendoLocalizationService", {});
    return {
      kendoIntlService: e,
      kendoLocalizationService: t
    };
  },
  render() {
    const {
      columnId: e,
      navigatable: t,
      ariaColumnIndex: i,
      role: n
    } = this.$props, r = this.getKeyboardNavigationAttributes(e, t), a = B(this);
    return u("td", {
      style: {
        top: "0px"
      },
      "aria-colindex": i,
      class: this.tdClass,
      onKeydown: this.onKeyDown,
      role: n,
      tabindex: r.tabIndex,
      "data-keyboardnavlevel": r[be],
      "data-keyboardnavid": r[Ce]
    }, [a]);
  },
  methods: {
    onKeyDown(e) {
      this.$emit("keydown", e);
    }
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function Jv(e) {
  const { enabled: t, columns: i = [], tableViewPortWidth: n, scrollLeft: r } = e, a = i.map(() => 1), o = i.map(() => !1);
  if (!t)
    return { colSpans: a, hiddenColumns: o };
  const s = i.map((v) => parseFloat((v.width || "").toString()) || 10);
  let l = 0;
  for (let v = 0; v < i.length; v++) {
    if (i[v].locked)
      continue;
    const $ = v < s.length - 1 ? s[v + 1] : 0;
    if (l + s[v] + $ < r)
      o[v] = !0, l += s[v];
    else
      break;
  }
  const d = s.reduce((v, $) => v + $, 0);
  l = 0;
  for (let v = i.length - 1; v >= 0; v--)
    if (!i[v].locked)
      if (l + 2 * s[v] < d - n - r)
        o[v] = !0, l += s[v];
      else
        break;
  const c = [...o], h = (v) => v;
  let p = c.lastIndexOf(!1), g = c.some(h), m = c.every(h), f, b;
  for (; g && c.length && (p !== -1 || m); ) {
    for (p < c.length - 1 && (f = m ? c.length : c.length - p - 1, b = c.length - f, b === 0 && (b = f - 1), o[b] = !1, a[b] = f, c.splice(p + 1, f)); c.length && !c[c.length - 1]; )
      c.pop();
    p = c.lastIndexOf(!1), g = c.some(h), m = c.every(h);
  }
  return { colSpans: a, hiddenColumns: o };
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Zv = {
  name: "@progress/kendo-vue-indicators",
  productName: "Kendo UI for Vue",
  productCode: "KENDOUIVUE",
  productCodes: ["KENDOUIVUE"],
  publishDate: 1763478594,
  version: "7.0.2",
  licensingDocsUrl: "https://www.telerik.com/kendo-vue-ui/my-license/?utm_medium=product&utm_source=kendovue&utm_campaign=kendo-ui-vue-purchase-license-keys-warning"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const $s = {
  pulsing: 2,
  "infinite-spinner": 3,
  "converging-spinner": 4
}, Qv = /* @__PURE__ */ k({
  name: "KendoLoader",
  props: {
    type: {
      type: String,
      default: "pulsing",
      validator: function(e) {
        return ["pulsing", "infinite-spinner", "converging-spinner"].includes(e);
      }
    },
    size: {
      type: String,
      default: "medium",
      validator: function(e) {
        return ["small", "medium", "large"].includes(e);
      }
    },
    themeColor: {
      type: String,
      default: "primary",
      validator: function(e) {
        return ["primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse"].includes(e);
      }
    }
  },
  created() {
    Ve(Zv);
  },
  computed: {
    loaderClasses() {
      const {
        type: e,
        size: t,
        themeColor: i
      } = this.$props;
      return {
        "k-loader": !0,
        "k-loader-sm": t === "small",
        "k-loader-md": t === "medium",
        "k-loader-lg": t === "large",
        "k-loader-primary": i === "primary",
        "k-loader-secondary": i === "secondary",
        "k-loader-tertiary": i === "tertiary",
        "k-loader-info": i === "info",
        "k-loader-success": i === "success",
        "k-loader-warning": i === "warning",
        "k-loader-error": i === "error",
        "k-loader-dark": i === "dark",
        "k-loader-light": i === "light",
        "k-loader-inverse": i === "inverse",
        "k-loader-pulsing-2": e === "pulsing",
        "k-loader-spinner-3": e === "infinite-spinner",
        "k-loader-spinner-4": e === "converging-spinner"
      };
    }
  },
  render() {
    const {
      type: e
    } = this.$props, t = new Array($s[e]);
    return t.fill(0, 0, $s[e]), u("div", {
      class: this.loaderClasses
    }, [u("div", {
      class: "k-loader-canvas"
    }, [t.map(function(i, n) {
      return u("span", {
        key: n,
        class: "k-loader-segment"
      }, null);
    }, this)])]);
  },
  methods: {
    focus(e) {
      this.$el && this.$el.focus(e);
    }
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ks = /* @__PURE__ */ k({
  name: "KendoGridNav",
  props: {
    currentData: Array
  },
  inject: {
    onNavKeyDown: {
      default: ke
    },
    onNavFocus: {
      default: ke
    },
    onNavMount: {
      default: ke
    },
    handleDispatchFocus: {
      default: ke
    },
    kbContext: {
      default: null
    },
    navigation: {
      default: null
    }
  },
  mounted() {
    this.onNavMount({
      scope: this.$el || void 0
    });
  },
  updated() {
    this.onNavMount({
      scope: this.$el || void 0
    });
  },
  methods: {
    onKeyDown(e) {
      this.onNavKeyDown(e, {
        navigation: this.navigation,
        kbContext: this.kbContext,
        onNavigationAction: this.onNavigationAction
      }), this.$emit("keydown", {
        dataItems: this.getLeafDataItems(),
        //     mode,
        //     cell,
        componentId: this._gridId,
        selectedField: this.$props.selectedField,
        event: e
      });
    },
    onFocus(e) {
      this.onNavFocus(e, {
        kbContext: this.kbContext
      });
    },
    onNavigationAction(e) {
      this.$emit("navigationaction", {
        focusElement: e.focusElement,
        event: e.event
      });
    },
    getLeafDataItems() {
      return this.$props.currentData.filter((e) => e.rowType === "data").map((e) => e.dataItem);
    }
  },
  render() {
    const e = B(this);
    return u("div", {
      onKeydown: this.onKeyDown,
      onFocusin: this.onFocus,
      "data-keyboardnavscope": !0
    }, [e]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ti = "string";
function mt(e, t) {
  const i = e.split(".");
  let n = t;
  return i.forEach((r) => {
    n = n ? n[r] : void 0;
  }), n;
}
function il(e, t, i, n, r, a, o = 0) {
  let s = o;
  for (let l = 0; l < t.length; l++) {
    if (!r || t[l].value === void 0 || t[l].items === void 0) {
      e[e.length] = {
        dataIndex: ++n.index,
        dataItem: t[l],
        rowType: "data",
        level: o,
        expanded: a === void 0 || mt(a, t[l])
      };
      continue;
    }
    s = Math.max(s, o + 1);
    const d = a === void 0 || mt(a, t[l]) === void 0 || mt(a, t[l]);
    e[e.length] = {
      dataIndex: -1,
      dataItem: t[l],
      level: o,
      rowType: "groupHeader",
      expanded: d
    }, d && (s = Math.max(
      il(e, t[l].items, i, n, r, a, o + 1),
      s
    )), (i === "always" || d && i === "visible") && (e[e.length] = {
      dataIndex: -1,
      dataItem: t[l],
      rowType: "groupFooter",
      level: o,
      expanded: d
    });
  }
  return s;
}
function nl(e) {
  return e && getComputedStyle(e).direction === "rtl" || !1;
}
function ws(e, t) {
  if (!t || !e || !e.originalEvent || !se)
    return -1;
  let i = document.elementFromPoint(e.clientX, e.originalEvent.clientY);
  for (; i && i.parentElement !== t; )
    i = i.parentElement;
  const n = t.children;
  for (let r = 0; r < n.length; r++)
    if (n[r] === i)
      return r;
  return -1;
}
const rl = {
  filterable: !0,
  editable: !0,
  sortable: !0,
  resizable: !0,
  reorderable: !0,
  groupable: !0
};
function e0(e, t) {
  const i = e[t].depth;
  let n = null;
  for (let r = t + 1; r < e.length; r++)
    if (e[r].depth === i) {
      n = e[r];
      break;
    }
  return n;
}
function t0(e) {
  const t = [[]];
  let i = 0;
  for (let s = e.length - 1; s >= 0; s--)
    i = Math.max(i, e[s].depth), e[s].colSpan = e[s].colSpan || 1, e[s].children.length > 0 && (e[s].colSpan = e[s].children.reduce(
      (l, d) => d.hidden ? l : l + d.colSpan,
      0
    ));
  let n = 1;
  e.forEach((s, l) => {
    t[s.depth] = t[s.depth] || [];
    let d = !1;
    t[s.depth].length === 0 && (n <= 1 ? n = 1 + (s.children.length > 0 ? 0 : i - s.depth) : (n--, d = !0)), s.rowSpan = 1 + (s.children.length > 0 ? 0 : i - s.depth), s.kFirst = d, s.index = t[s.depth].length, t[s.depth].push(l);
  });
  const r = new Array(t.length).fill(0);
  let a = 0;
  e.forEach((s) => {
    if (s.locked)
      if (s.left = r[s.depth], a = s.width ? parseFloat(s.width.toString()) : 0, s.children.length === 0)
        for (let l = s.depth; l < r.length; l++)
          r[l] += a;
      else
        r[s.depth] += a;
  });
  const o = new Array(t.length).fill(0);
  for (let s = e.length - 1; s >= 0; s--) {
    const l = e[s];
    if (l.locked) {
      if (l.right = o[l.depth], a = l.width ? parseFloat(l.width.toString()) : 0, l.children.length === 0)
        for (let c = l.depth; c < o.length; c++)
          o[c] += a;
      else
        o[l.depth] += a;
      const d = e0(e, s);
      l.rightBorder = !(d && d.locked);
    }
  }
  return t;
}
function al(e, t, i, n = 0) {
  const r = [], a = e && e.length ? e.length === t.length : !1;
  if (!e)
    return [];
  e && e.length === void 0 && (e = [e]), e.forEach((s, l) => {
    s = s;
    const d = a && t[l] || null, c = s.children ? s.children.filter((p) => !p.hidden) : s.children, h = al(c, d && d.children || [], i, n + 1);
    r.push(
      Object.assign(
        { depth: n },
        rl,
        h.length ? { cell: () => null, filterCell: () => null } : {},
        d ? { width: d.width, orderIndex: d.orderIndex } : {},
        s,
        {
          id: K.generateNavigatableId(`${i.prevId++}`, i.idPrefix, "column"),
          declarationIndex: r.length,
          children: h,
          rowSpan: 0,
          colSpan: 0,
          isAccessible: !0
        }
      )
    );
  });
  const o = (s, l) => s.orderIndex === l.orderIndex ? s.declarationIndex - l.declarationIndex : (s.orderIndex || 0) - (l.orderIndex || 0);
  if (r.sort(o), n === 0) {
    const s = [], l = (d, c) => d.forEach((h) => {
      h.parentIndex = c, l(h.children, s.push(h) - 1);
    });
    return l(r, -1), s;
  }
  return r;
}
function i0(e, t, i, n) {
  let r = [];
  Array.isArray(e) ? r = e : e && (r = e.data), r.length || console.warn("Kendo Grid autogeneration of columns is only possible if some items are defined when the component is created.");
  const a = [];
  if (r.length > 0) {
    let o = r[0];
    if (t)
      for (let s = 0; s < t.length; s++)
        o = o.items && o.items[0];
    Object.getOwnPropertyNames(o).forEach((s) => {
      s !== i && s !== "__ob__" && a.push(Object.assign(
        {
          id: K.generateNavigatableId(`${n.prevId++}`, n.idPrefix, "column"),
          declarationIndex: -1,
          parentIndex: -1,
          depth: 0,
          colSpan: 0,
          rowSpan: 0,
          index: 0,
          left: 0,
          right: 0,
          children: [],
          rightBorder: !1,
          ariaColumnIndex: 1,
          isAccessible: !0
        },
        rl,
        { field: s }
      ));
    });
  }
  return a;
}
const n0 = (e, t) => {
  let i = e[t.parentIndex];
  for (; i; ) {
    if (i.footerCell)
      return !0;
    i = e[i.parentIndex];
  }
  return !1;
}, r0 = (e) => e.filter((t) => n0(e, t) ? !1 : !!t.footerCell || !(t.children && t.children.length > 0)), a0 = {
  number: function(e, t, i) {
    return typeof e === Ti && e.toLowerCase() === "null" ? null : t.parseNumber(e, i);
  },
  date: function(e, t, i) {
    return typeof e === Ti && e.toLowerCase() === "null" ? null : t.parseDate(e, i);
  },
  boolean: function(e) {
    return typeof e === Ti ? e.toLowerCase() === "null" ? null : e.toLowerCase() === "true" : e != null ? !!e : e;
  },
  string: function(e) {
    return typeof e === Ti && e.toLowerCase() === "null" ? null : e != null ? e + "" : e;
  },
  default: function(e) {
    return e;
  }
};
function sl(e, t, i, n) {
  return e.forEach((r) => {
    r.expanded = t[n] && !t[n].includes(on(r, i)), r.items && r.items.length && (r.items = sl(r.items, t, i, n + 1));
  }), e;
}
function Ss(e, t, i) {
  return t && t.length && e.data.forEach((n) => {
    n.expanded = n.expanded !== void 0 ? n.expanded : t[0] && !t[0].includes(on(n, i)), n.items && n.items.length && (n.items = sl(n.items, t, i, 1));
  }), e;
}
function on(e, t) {
  let i = e;
  for (; i.items && i.items.length; )
    i = i.items[0];
  return t ? i[t] : e.value;
}
const s0 = typeof window < "u" && /Firefox/.test(window.navigator.userAgent), o0 = 17895697;
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const l0 = /* @__PURE__ */ k({
  name: "KendoGridSelectionCell",
  inheritAttrs: !1,
  props: {
    id: String,
    field: String,
    dataItem: Object,
    format: String,
    type: String,
    className: String,
    colSpan: Number,
    columnIndex: Number,
    columnsCount: Number,
    rowType: String,
    level: Number,
    expanded: Boolean,
    render: [String, Function, Object],
    isSelected: Boolean,
    ariaColumnIndex: Number,
    editor: String,
    isRtl: Boolean
  },
  emits: {
    selectionchange: null,
    cellkeydown: null
  },
  inject: {
    kendoIntlService: {
      default: null
    },
    getKeyboardNavigationAttributes: {
      default: ke
    }
  },
  data() {
    return {
      inputId: me()
    };
  },
  computed: {
    tdClass() {
      const {
        className: e
      } = this.$props;
      return {
        "k-table-td": !0,
        [e]: e
      };
    }
  },
  methods: {
    triggerKeydown(e) {
      this.$emit("cellkeydown", {
        event: e,
        dataItem: this.$props.dataItem,
        field: this.$props.field
      });
    },
    handleOnChange(e) {
      this.$emit("selectionchange", {
        event: e,
        dataItem: this.$props.dataItem
      });
    }
  },
  render() {
    const e = mt(this.$props.field, this.$props.dataItem), t = this.$props.render, i = this.getKeyboardNavigationAttributes(this.$props.id), n = this.$props.rowType !== "groupHeader" ? u("td", {
      style: this.$attrs.style,
      onKeydown: this.triggerKeydown,
      colspan: this.$props.colSpan,
      class: this.tdClass,
      "aria-colindex": this.$props.ariaColumnIndex,
      role: "gridcell",
      tabindex: i.tabIndex,
      "data-keyboardnavlevel": i[be],
      "data-keyboardnavid": i[Ce]
    }, [u("span", {
      class: "k-checkbox-wrap"
    }, [u("input", {
      checked: e,
      id: this.inputId,
      type: "checkbox",
      class: "k-checkbox k-checkbox-md k-rounded-md",
      onChange: this.handleOnChange
    }, null)]), u("label", {
      class: "k-checkbox-label",
      for: this.inputId
    }, null)]) : null;
    return _.call(this, {
      h: M,
      template: t,
      defaultRendering: n,
      additionalProps: this.$props,
      additionalListeners: {
        keydown: this.triggerKeydown,
        change: this.handleOnChange
      }
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const vr = "grid.noRecords", br = "grid.selectAllRows", u0 = "grid.pagerInfo", d0 = "grid.pagerFirstPage", c0 = "grid.pagerPreviousPage", h0 = "grid.pagerNextPage", p0 = "grid.pagerLastPage", g0 = "grid.pagerItemsPerPage", f0 = "grid.pagerPageSelection", m0 = "grid.pagerPage", v0 = "grid.pagerOf", b0 = "grid.pagerTotalPages", xr = "grid.groupPanelEmpty", yr = "grid.columnMenu", fi = "grid.filterClearButton", $r = "grid.filterSubmitButton", kr = "grid.filterTitle", wr = "grid.sortAscending", Sr = "grid.sortDescending", x0 = "grid.searchPlaceholder", y0 = "grid.filterCheckAll", Cr = "grid.filterChooseOperator", $0 = "grid.filterSelectedItems", k0 = "grid.sortAriaLabel", Ir = "grid.sortableColumnAriaLabel", Dr = "grid.sortableColumnAscendingAriaLabel", Er = "grid.sortableColumnDescendingAriaLabel", Mr = "grid.filterAriaLabel", Fr = "grid.numericFilterAriaLabel", Lr = "grid.dateFilterAriaLabel", Or = "grid.textFilterAriaLabel", Nr = "grid.booleanFilterAriaLabel", Ar = "grid.groupHeaderAriaLabel", _r = "grid.groupCaretAriaLabelCollapse", zr = "grid.groupCaretAriaLabelExpand", Vr = "grid.expandDetailTemplateAriaLabel", Tr = "grid.collapseDetailTemplateAriaLabel", te = {
  [br]: "Select All Rows",
  [vr]: "No records available",
  [xr]: "Drag a column header and drop it here to group by that column",
  [yr]: "Column Menu",
  [fi]: "Clear",
  [$r]: "Filter",
  [kr]: "Filter",
  [wr]: "Sort Ascending",
  [Sr]: "Sort Descending",
  [g0]: "items per page",
  [f0]: "Select page",
  [u0]: "{0} - {1} of {2} items",
  [d0]: "Go to the first page",
  [c0]: "Go to the previous page",
  [h0]: "Go to the next page",
  [p0]: "Go to the last page",
  [m0]: "Page",
  [v0]: "of",
  [b0]: "{0}",
  [x0]: "Search",
  [y0]: "Check All",
  [Cr]: "Choose Operator",
  [$0]: "selected items",
  [k0]: "Sortable",
  [Ir]: "Sortable Column",
  [Dr]: "Sorted in ascending order",
  [Er]: "Sorted in descending order",
  [Mr]: "Filter",
  [Fr]: "Numeric Filter",
  [Lr]: "Date Filter",
  [Or]: "Text Filter",
  [Nr]: "Boolean Filter",
  [Ar]: "Group Header",
  [_r]: "Collapse Group",
  [zr]: "Expand Group",
  [Vr]: "Expand Details",
  [Tr]: "Collapse Details",
  "grid.filterEqOperator": "Is equal to",
  "grid.filterNotEqOperator": "Is not equal to",
  "grid.filterIsNullOperator": "Is null",
  "grid.filterIsNotNullOperator": "Is not null",
  "grid.filterIsEmptyOperator": "Is empty",
  "grid.filterIsNotEmptyOperator": "Is not empty",
  "grid.filterStartsWithOperator": "Starts with",
  "grid.filterContainsOperator": "Contains",
  "grid.filterNotContainsOperator": "Does not contain",
  "grid.filterEndsWithOperator": "Ends with",
  "grid.filterGteOperator": "Is greater than or equal to",
  "grid.filterGtOperator": "Is greater than",
  "grid.filterLteOperator": "Is less than or equal to",
  "grid.filterLtOperator": "Is less than",
  "grid.filterIsTrue": "Is true",
  "grid.filterIsFalse": "Is false",
  "grid.filterBooleanAll": "(All)",
  "grid.filterAfterOrEqualOperator": "Is after or equal to",
  "grid.filterAfterOperator": "Is after",
  "grid.filterBeforeOperator": "Is before",
  "grid.filterBeforeOrEqualOperator": "Is before or equal to",
  "grid.filterAndLogic": "And",
  "grid.filterOrLogic": "Or"
};
function Cs(e) {
  const t = e.replace(
    /^pager\.([a-z])/,
    (i, n) => "grid.pager" + n.toUpperCase()
  );
  return { messageKey: t, defaultMessage: te[t] };
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const w0 = /* @__PURE__ */ k({
  name: "KendoGridHierarchyCell",
  inheritAttrs: !1,
  props: {
    id: String,
    field: String,
    dataItem: Object,
    format: String,
    type: String,
    className: String,
    colSpan: Number,
    columnIndex: Number,
    columnsCount: Number,
    rowType: String,
    level: Number,
    expanded: Boolean,
    editor: String,
    isSelected: Boolean,
    dataIndex: Number,
    ariaColumnIndex: Number,
    render: [String, Function, Object],
    isRtl: Boolean
  },
  emits: {
    change: null,
    cellkeydown: null
  },
  inject: {
    kendoIntlService: {
      default: null
    },
    kendoLocalizationService: {
      default: null
    },
    getKeyboardNavigationAttributes: {
      default: ke
    }
  },
  methods: {
    triggerKeydown(e, t) {
      this.$emit("cellkeydown", {
        event: e,
        dataItem: this.$props.dataItem,
        field: this.$props.field,
        expanded: t
      }), !e.defaultPrevented && e.keyCode === O.enter && (e.preventDefault(), this.$emit("change", {
        dataItem: this.$props.dataItem,
        dataIndex: this.$props.dataIndex,
        event: e,
        field: this.$props.field,
        value: !t
      }));
    },
    clickHandler(e, t, i) {
      e.preventDefault(), this.$emit("change", {
        dataItem: t,
        event: e,
        field: void 0,
        value: !i
      });
    }
  },
  computed: {
    wrapperClass() {
      return {
        "k-table-td": !0,
        "k-hierarchy-cell": !0,
        [this.className || ""]: this.className
      };
    }
  },
  render() {
    let e = null;
    const t = this.getKeyboardNavigationAttributes(this.$props.id), i = Z(this), n = i.toLanguageString(Tr, te[Tr]), r = i.toLanguageString(Vr, te[Vr]);
    if (this.$props.rowType === "groupFooter")
      e = u("td", {
        class: this.wrapperClass
      }, null);
    else if (this.$props.rowType !== "groupHeader") {
      const a = mt(this.$props.field, this.$props.dataItem);
      e = u("td", {
        style: this.$attrs.style,
        onKeydown: (o) => {
          this.triggerKeydown(o, a);
        },
        class: this.wrapperClass,
        "aria-expanded": a ? "true" : "false",
        role: "gridcell",
        "aria-colindex": this.$props.ariaColumnIndex,
        tabindex: t.tabIndex,
        "data-keyboardnavlevel": t[be],
        "data-keyboardnavid": t[Ce]
      }, [u("a", {
        onClick: (o) => {
          this.clickHandler(o, this.$props.dataItem, a);
        },
        href: "#",
        tabindex: -1,
        title: a ? n : r,
        "aria-label": a ? n : r
      }, [u(ie, {
        name: a ? "minus" : "plus",
        icon: a ? md : Js
      }, null)])]);
    }
    return _.call(this, {
      h: M,
      template: this.$props.render,
      defaultRendering: e,
      additionalProps: this.$props,
      additionalListeners: {
        keydown: this.triggerKeydown,
        click: this.clickHandler
      }
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const S0 = /* @__PURE__ */ k({
  props: {
    id: String
  },
  inject: {
    getKeyboardNavigationAttributes: {
      default: ke
    }
  },
  setup() {
    return {
      kendoIntlService: H("kendoIntlService", {})
    };
  },
  render() {
    const e = this.getKeyboardNavigationAttributes(this.$props.id);
    return u("td", {
      class: "k-table-td k-hierarchy-cell",
      tabindex: e.tabIndex,
      "data-keyboardnavlevel": e[be],
      "data-keyboardnavid": e[Ce]
    }, null);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const C0 = /* @__PURE__ */ k({
  props: {
    colSpan: Number,
    ariaColIndex: Number,
    dataItem: [Object, String, Number],
    dataIndex: Number,
    detail: [String, Function, Object],
    id: String
  },
  inject: {
    getKeyboardNavigationAttributes: {
      default: ke
    }
  },
  setup() {
    return {
      kendoIntlService: H("kendoIntlService", {})
    };
  },
  render() {
    const {
      colSpan: e,
      ariaColIndex: t,
      dataItem: i,
      dataIndex: n,
      id: r
    } = this.$props, a = this.getKeyboardNavigationAttributes(r), o = function(s) {
      return _.call(this, {
        h: M,
        template: this.$props.detail,
        additionalProps: s
      });
    };
    return u("td", {
      class: "k-table-td k-detail-cell",
      colspan: e,
      "aria-colindex": t,
      role: "gridcell",
      tabindex: a.tabIndex,
      "data-keyboardnavlevel": a[be],
      "data-keyboardnavid": a[Ce]
    }, [o.call(this, {
      dataItem: i,
      dataIndex: n
    })]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const I0 = /* @__PURE__ */ k({
  name: "GridEditCell",
  inheritAttrs: !1,
  props: {
    id: String,
    field: String,
    dataItem: Object,
    format: String,
    type: String,
    className: String,
    colSpan: Number,
    columnIndex: Number,
    columnsCount: Number,
    rowType: String,
    level: Number,
    expanded: Boolean,
    editor: String,
    isSelected: Boolean,
    ariaColumnIndex: Number,
    render: [String, Function, Object],
    isRtl: Boolean,
    readFormat: String,
    dataIndex: Number
  },
  emits: {
    change: null,
    cellkeydown: null,
    edit: null,
    add: null,
    cancel: null,
    save: null,
    remove: null
  },
  inject: {
    kendoIntlService: {
      default: null
    },
    getKeyboardNavigationAttributes: {
      default: ke
    }
  },
  computed: {
    tdClass() {
      const {
        className: e
      } = this.$props;
      return {
        "k-table-td": !0,
        [e]: e
      };
    }
  },
  data() {
    return {
      inputId: me()
    };
  },
  methods: {
    triggerKeydown(e) {
      this.$emit("cellkeydown", {
        event: e,
        dataItem: this.$props.dataItem,
        field: this.$props.field
      });
    },
    triggerEdit(e) {
      this.$emit("edit", e);
    },
    triggerAdd(e) {
      this.$emit("add", e);
    },
    triggerCancel(e) {
      this.$emit("cancel", e);
    },
    triggerSave(e) {
      this.$emit("save", e);
    },
    triggerRemove(e) {
      this.$emit("remove", e);
    },
    changeHandler(e, t) {
      t || (e.target.type === "checkbox" ? t = e.target.checked : t = e.target.valueAsDate ? e.target.valueAsDate : e.target.value), this.$emit("change", {
        dataItem: this.$props.dataItem,
        field: this.$props.field,
        event: e,
        value: t
      });
    }
  },
  setup() {
    return {
      kendoIntlService: H("kendoIntlService", {})
    };
  },
  render() {
    const e = mt(this.$props.field, this.$props.dataItem), t = this.getKeyboardNavigationAttributes(this.$props.id);
    let i = null;
    switch (this.$props.editor) {
      case "numeric":
        i = u("td", {
          style: this.$attrs.style,
          onKeydown: this.triggerKeydown,
          colspan: this.$props.colSpan,
          class: this.tdClass,
          role: "gridcell",
          "aria-colindex": this.$props.ariaColumnIndex,
          "aria-selected": this.$props.isSelected,
          "data-grid-col-index": this.$props.columnIndex,
          tabindex: t.tabIndex,
          "data-keyboardnavlevel": t[be],
          "data-keyboardnavid": t[Ce]
        }, [u(vn, {
          style: {
            width: "100%"
          },
          value: e === void 0 ? null : e,
          onChange: this.changeHandler
        }, null)]);
        break;
      case "date":
        i = u("td", {
          style: this.$attrs.style,
          onKeydown: this.triggerKeydown,
          colspan: this.$props.colSpan,
          class: this.tdClass,
          role: "gridcell",
          "aria-colindex": this.$props.ariaColumnIndex,
          "aria-selected": this.$props.isSelected,
          "data-grid-col-index": this.$props.columnIndex,
          tabindex: t.tabIndex,
          "data-keyboardnavlevel": t[be],
          "data-keyboardnavid": t[Ce]
        }, [u(pa, {
          style: {
            width: "100%"
          },
          value: e,
          onChange: this.changeHandler
        }, null)]);
        break;
      case "boolean":
        i = u("td", {
          style: this.$attrs.style,
          onKeydown: this.triggerKeydown,
          colspan: this.$props.colSpan,
          class: this.tdClass,
          role: "gridcell",
          "aria-colindex": this.$props.ariaColumnIndex,
          "aria-selected": this.$props.isSelected,
          "data-grid-col-index": this.$props.columnIndex,
          tabindex: t.tabIndex,
          "data-keyboardnavlevel": t[be],
          "data-keyboardnavid": t[Ce]
        }, [u("input", {
          checked: e || !1,
          id: this.inputId,
          type: "checkbox",
          class: "k-checkbox k-checkbox-md k-rounded-md",
          onChange: this.changeHandler
        }, null), u("label", {
          class: "k-checkbox-label",
          for: this.inputId
        }, null)]);
        break;
      default:
        i = u("td", {
          style: this.$attrs.style,
          onKeydown: this.triggerKeydown,
          colspan: this.$props.colSpan,
          class: this.tdClass,
          role: "gridcell",
          "aria-colindex": this.$props.ariaColumnIndex,
          "aria-selected": this.$props.isSelected,
          "data-grid-col-index": this.$props.columnIndex,
          tabindex: t.tabIndex,
          "data-keyboardnavlevel": t[be],
          "data-keyboardnavid": t[Ce]
        }, [u("span", {
          class: "k-textbox k-input k-input-md k-rounded-md k-input-solid"
        }, [u("input", {
          style: {
            width: "100%"
          },
          class: "k-input-inner",
          value: e ?? "",
          onChange: this.changeHandler
        }, null)])]);
    }
    return _.call(this, {
      h: M,
      template: this.$props.render,
      defaultRendering: i,
      additionalProps: this.$props,
      additionalListeners: {
        change: this.changeHandler,
        keydown: this.triggerKeydown,
        edit: this.triggerEdit,
        add: this.triggerAdd,
        cancel: this.triggerCancel,
        save: this.triggerSave,
        remove: this.triggerRemove
      }
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const D0 = () => typeof document < "u" ? document : {};
let E0 = class {
  get scrollbarWidth() {
    const t = D0();
    if (!this.scrollbar && t && t.createElement) {
      const i = t.createElement("div");
      i.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block", i.innerHTML = "&nbsp;", t.body.appendChild(i), this.scrollbar = i.offsetWidth - i.scrollWidth, t.body.removeChild(i);
    }
    return this.scrollbar;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const M0 = /* @__PURE__ */ k({
  props: {
    staticHeaders: Boolean,
    headerRow: Object,
    columnResize: Object,
    cols: Array,
    size: String,
    draggable: Boolean
  },
  data() {
    return {
      divStyle: {},
      element: null,
      headerWrap: null,
      table: null
    };
  },
  computed: {
    wrapperClass() {
      return {
        "k-grid-header": !0,
        "k-grid-draggable-header": this.$props.draggable
      };
    },
    tableClass() {
      const {
        size: e
      } = this.$props;
      return {
        "k-table": !0,
        "k-grid-header-table": !0,
        [`k-table-${ye.sizeMap[e] || e}`]: e
      };
    }
  },
  mounted() {
    this.headerWrap = J(this, "headerWrap"), this.table = J(this, "table"), this.$props.columnResize.colGroupHeader = J(this, "colGroupHeader");
    const e = new E0().scrollbarWidth, t = nl(this.$el);
    this.$props.columnResize && this.$props.columnResize.setIsRtl(t);
    const i = Math.max(0, e) + "px", n = t ? 0 : i, r = t ? i : 0;
    this.divStyle = {
      padding: `0 ${n} 0 ${r}`
    };
  },
  methods: {
    setScrollLeft(e) {
      this.headerWrap && (this.headerWrap.scrollLeft = e);
    },
    setWidth(e) {
      this.table && (this.table.style.width = e + "px");
    }
  },
  setup() {
    const e = V(null), t = V(null), i = V(null);
    return {
      headerWrapRef: e,
      tableRef: t,
      colGroupHeaderRef: i
    };
  },
  render() {
    return this.$props.staticHeaders ? u("div", {
      class: this.wrapperClass,
      style: this.divStyle
    }, [u("div", {
      ref: he(this, "headerWrap"),
      class: "k-grid-header-wrap"
    }, [u("table", {
      class: this.tableClass,
      ref: he(this, "table"),
      role: "none"
    }, [u("colgroup", {
      ref: he(this, "colGroupHeader")
    }, [this.$props.cols]), this.$props.headerRow])])]) : this.$props.headerRow;
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ol = (...e) => Object.assign({ allowUnsort: !0, mode: "single" }, ...e);
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const F0 = /* @__PURE__ */ k({
  props: {
    onResize: Function
  },
  mounted() {
    this.$el && (this.draggable = this.$refs.draggable);
  },
  methods: {
    drag(e) {
      const t = this.draggable && this.draggable.element;
      t && this.$emit("resize", e, t, !1);
    },
    release(e) {
      const t = this.draggable && this.draggable.element;
      t && this.$emit("resize", e, t, !0);
    }
  },
  render() {
    const e = {
      // TODO: move to theme
      cursor: "col-resize",
      display: "block",
      height: "1000%",
      position: "absolute",
      // [this.props.isRtl ? 'left' : 'right']: 0,
      top: 0,
      width: ".5em"
    };
    return u(qr, {
      onDrag: this.drag,
      onRelease: this.release,
      ref: "draggable"
    }, {
      default: () => [u("span", {
        class: "k-column-resizer",
        draggable: !1,
        style: e
      }, null)]
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const L0 = /* @__PURE__ */ k({
  props: {
    onPressHandler: Function,
    onDragHandler: Function,
    onReleaseHandler: Function
  },
  mounted() {
    this.$el && (this.draggable = this.$refs.draggable);
  },
  methods: {
    onPress(e) {
      const t = this.draggable && this.draggable.element;
      t && this.$emit("pressHandler", e, t);
    },
    onDrag(e) {
      const t = this.draggable && this.draggable.element;
      t && this.$emit("dragHandler", e, t);
    },
    onRelease(e) {
      const t = this.draggable && this.draggable.element;
      t && this.$emit("releaseHandler", e, t);
    }
  },
  render() {
    const e = B(this);
    return u(qr, {
      onPress: this.onPress,
      onDrag: this.onDrag,
      onRelease: this.onRelease,
      ref: "draggable"
    }, {
      default: () => [u("tr", {
        class: "k-table-row",
        role: "row"
      }, [e])]
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const O0 = /* @__PURE__ */ k({
  props: {
    field: String,
    title: String,
    sortable: [Boolean, Object],
    render: [Object, Function, String],
    selectionValue: [Boolean, String, Number],
    onHeadercellclick: Function
  },
  computed: {
    linkClass() {
      return {
        "k-link": !0,
        "!k-cursor-default": !this.sortable
      };
    }
  },
  methods: {
    clickHandler(e) {
      this.sortable && this.$emit("headercellclick", e);
    }
  },
  render() {
    const e = B(this), t = this.$props.render, i = this.$props.title || this.$props.field || " ", n = _.call(this, {
      h: M,
      template: t,
      defaultRendering: i,
      additionalProps: this.$props,
      additionalListeners: {
        click: this.clickHandler
      }
    });
    return u("span", {
      class: this.linkClass,
      onClick: this.clickHandler
    }, [u("span", {
      class: "k-column-title"
    }, [n]), e]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Pr = /* @__PURE__ */ k({
  props: {
    title: String,
    iconClass: String,
    icon: String,
    svgIcon: Object,
    selected: Boolean,
    onMenuitemclick: Function
  },
  methods: {
    onClick(e) {
      this.$emit("menuitemclick", e);
    },
    onKeyDown(e) {
      e.keyCode === O.enter && this.$emit("menuitemclick", e);
    }
  },
  render() {
    const {
      title: e,
      iconClass: t,
      selected: i,
      icon: n,
      svgIcon: r
    } = this.$props;
    return u("div", {
      tabindex: 0,
      onKeydown: this.onKeyDown,
      onClick: this.onClick,
      class: `k-columnmenu-item ${i ? "k-selected" : ""}`
    }, [t && u(ie, {
      class: t
    }, null), (n || r) && u(ie, {
      name: n,
      icon: r
    }, null), e]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ll = /* @__PURE__ */ k({
  render() {
    const e = B(this);
    return u("div", {
      class: "k-columnmenu-item-wrapper"
    }, [e]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ul = "asc", dl = "desc", N0 = {
  true: {
    asc: {
      asc: "",
      desc: "desc"
    },
    desc: {
      asc: "asc",
      desc: ""
    },
    "": {
      asc: "asc",
      desc: "desc"
    }
  },
  false: {
    asc: {
      asc: "asc",
      desc: "desc"
    },
    desc: {
      asc: "asc",
      desc: "desc"
    },
    "": {
      asc: "asc",
      desc: "desc"
    }
  }
}, A0 = (e, t) => t ? t.findIndex((i) => i.field === e) : -1, _0 = (e, t) => !!(t && e > -1 && t[e].dir === ul), z0 = (e, t) => !!(t && e > -1 && t[e].dir === dl), V0 = /* @__PURE__ */ k({
  props: {
    sortable: [Boolean, Object],
    sort: {
      type: Array
    },
    column: Object,
    onSortchange: Function,
    onClosemenu: Function
  },
  inject: {
    kendoLocalizationService: {
      default: null
    }
  },
  methods: {
    onAscClick(e) {
      this.onSort(e, ul), this.$emit("closemenu");
    },
    onDescClick(e) {
      this.onSort(e, dl), this.$emit("closemenu");
    },
    onSort(e, t) {
      if (e.preventDefault(), !it.call(this, "sortchange"))
        return;
      const {
        column: i,
        sortable: n,
        sort: r
      } = this.$props, {
        allowUnsort: a,
        mode: o
      } = ol(n || !1, !1), s = (r || []).filter((c) => c.field === i.field)[0], l = N0[a][s && s.dir || ""][t], d = o === "single" ? [] : (this.$props.sort || []).filter((c) => c.field !== i.field);
      l !== "" && i.field && d.push({
        field: i.field,
        dir: l
      }), this.$emit("sortchange", d, {
        event: e,
        field: this.$props.column.field
      });
    }
  },
  setup() {
    return {
      kendoLocalizationService: H("kendoLocalizationService", {})
    };
  },
  render() {
    const {
      sort: e,
      column: t
    } = this.$props, i = A0(t.field, e), n = Z(this);
    return u(ll, null, {
      default: () => [u(Pr, {
        title: n.toLanguageString(wr, te[wr]),
        icon: "sort-asc-small",
        svgIcon: Jr,
        selected: _0(i, e),
        onMenuitemclick: this.onAscClick
      }, null), u(Pr, {
        title: n.toLanguageString(Sr, te[Sr]),
        icon: "sort-desc-small",
        svgIcon: Zr,
        selected: z0(i, e),
        onMenuitemclick: this.onDescClick
      }, null)]
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const T0 = /* @__PURE__ */ k({
  props: {
    show: Boolean
  },
  render() {
    const e = B(this);
    return u("div", {
      class: "k-columnmenu-item-content"
    }, [u(Od, {
      appear: this.$props.show,
      style: {
        position: "relative",
        display: "block"
      }
    }, {
      default: () => [this.$props.show ? e : null]
    })]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const P0 = [
  { text: "grid.filterAndLogic", operator: "and" },
  { text: "grid.filterOrLogic", operator: "or" }
], Hr = {
  text: [
    { text: "grid.filterContainsOperator", operator: "contains" },
    { text: "grid.filterNotContainsOperator", operator: "doesnotcontain" },
    { text: "grid.filterEqOperator", operator: "eq" },
    { text: "grid.filterNotEqOperator", operator: "neq" },
    { text: "grid.filterStartsWithOperator", operator: "startswith" },
    { text: "grid.filterEndsWithOperator", operator: "endswith" },
    { text: "grid.filterIsNullOperator", operator: "isnull" },
    { text: "grid.filterIsNotNullOperator", operator: "isnotnull" },
    { text: "grid.filterIsEmptyOperator", operator: "isempty" },
    { text: "grid.filterIsNotEmptyOperator", operator: "isnotempty" }
  ],
  numeric: [
    { text: "grid.filterEqOperator", operator: "eq" },
    { text: "grid.filterNotEqOperator", operator: "neq" },
    { text: "grid.filterGteOperator", operator: "gte" },
    { text: "grid.filterGtOperator", operator: "gt" },
    { text: "grid.filterLteOperator", operator: "lte" },
    { text: "grid.filterLtOperator", operator: "lt" },
    { text: "grid.filterIsNullOperator", operator: "isnull" },
    { text: "grid.filterIsNotNullOperator", operator: "isnotnull" }
  ],
  date: [
    { text: "grid.filterEqOperator", operator: "eq" },
    { text: "grid.filterNotEqOperator", operator: "neq" },
    { text: "grid.filterAfterOrEqualOperator", operator: "gte" },
    { text: "grid.filterAfterOperator", operator: "gt" },
    { text: "grid.filterBeforeOperator", operator: "lt" },
    { text: "grid.filterBeforeOrEqualOperator", operator: "lte" },
    { text: "grid.filterIsNullOperator", operator: "isnull" },
    { text: "grid.filterIsNotNullOperator", operator: "isnotnull" }
  ],
  boolean: [
    { text: "grid.filterEqOperator", operator: "eq" }
  ]
}, Qi = (e) => e === "isnull" || e === "isnotnull" || e === "isempty" || e === "isnotempty", ci = (e, t) => e.map((i) => ({
  text: t.toLanguageString(i.text, te[i.text]),
  operator: i.operator
})), H0 = "eq", cl = [
  { text: "grid.filterBooleanAll", operator: "" },
  { text: "grid.filterIsTrue", operator: !0 },
  { text: "grid.filterIsFalse", operator: !1 }
], hl = (e, t, i) => {
  const n = pl(i.operators);
  let r = i.operator;
  switch (i.filterType) {
    case "numeric":
      (!r || Qi(r)) && (r = n), e === null && r === n && (r = "");
      break;
    case "date":
      (!r || Qi(r)) && (r = n), e === null && r === n && (r = "");
      break;
    case "text":
      (!r || Qi(r)) && (r = n), !e && r === n && (r = "");
      break;
    default:
      return;
  }
  return { value: e, operator: r, event: t };
}, pl = (e, t) => t ? e[t][0].operator : e[0].operator, gl = (e) => e || "text", fl = (e, t) => ({
  value: e,
  operator: e === "" ? "" : H0,
  event: t
}), ml = (e, t, i) => (Qi(e) && (i = null), { value: i, operator: e, event: t }), R0 = (e, t) => {
  switch (e) {
    case "text":
      return t.toLanguageString(Or, te[Or]);
    case "numeric":
      return t.toLanguageString(Fr, te[Fr]);
    case "boolean":
      return t.toLanguageString(Nr, te[Nr]);
    case "date":
      return t.toLanguageString(Lr, te[Lr]);
    default:
      return;
  }
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Is = /* @__PURE__ */ k({
  props: {
    field: String,
    filterType: String,
    value: [Object, String, Number, Date, Boolean],
    operator: String,
    operators: Array,
    booleanValues: Array
  },
  emits: {
    change: null,
    filtercellfocus: null
  },
  methods: {
    handleFocus(e) {
      this.$emit("filtercellfocus", e);
    },
    triggerChange(e) {
      this.$emit("change", e);
    },
    inputChange(e, t) {
      const i = hl(e, t, this.$props);
      this.triggerChange(i);
    },
    boolDropdownChange(e, t) {
      const i = fl(e.value.operator, t);
      this.triggerChange(i);
    }
  },
  render() {
    const {
      filterType: e,
      value: t,
      booleanValues: i
    } = this.$props;
    let n;
    switch (e) {
      case "numeric":
        return u(vn, {
          value: t,
          onChange: (r) => {
            this.inputChange(r.value, r.event);
          }
        }, null);
      case "date":
        return u(pa, {
          value: t,
          onFocus: this.handleFocus,
          onChange: (r) => {
            this.inputChange(r.value, r.event);
          }
        }, null);
      case "boolean":
        return n = (r) => r == null, u(jt, {
          onChange: this.boolDropdownChange,
          value: i.find((r) => r.operator === (n(t) ? "" : t)),
          "data-items": i,
          textField: "text"
        }, null);
      default:
        return u("span", {
          class: "k-textbox k-input k-input-md k-rounded-md k-input-solid"
        }, [u("input", {
          class: "k-input-inner",
          value: t || "",
          onInput: (r) => {
            this.inputChange(r.target.value, r);
          }
        }, null)]);
    }
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ds = /* @__PURE__ */ k({
  props: {
    filterType: String,
    operator: String,
    operators: Array
  },
  emits: {
    change: null
  },
  methods: {
    triggerChange(e) {
      this.$emit("change", e);
    },
    operatorChange(e, t) {
      const i = ml(e.value.operator, t, this.$props.value);
      this.triggerChange(i);
    }
  },
  render() {
    const e = this.$props.operators.find((t) => t.operator === this.$props.operator) || null;
    return this.$props.filterType !== "boolean" ? u(jt, {
      onChange: this.operatorChange,
      value: e,
      "data-items": this.$props.operators,
      textField: "text"
    }, null) : null;
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function Es(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const Rr = (e) => e || {
  filters: [],
  logic: "and"
}, Kn = (e, t) => Rr(t).filters.filter((i) => Ct(i) ? i.filters && i.filters.length && i.filters.length <= 2 && !i.filters.find((n) => Ct(n) || n.field !== e) : !1)[0] || null, B0 = /* @__PURE__ */ k({
  name: "KendoGridColumnMenuFilter",
  props: {
    column: Object,
    filter: Object,
    expanded: {
      type: Boolean,
      default: void 0
    },
    filterable: Boolean,
    filterOperators: {
      type: Object,
      default: function() {
        return Hr;
      }
    },
    hideSecondFilter: {
      type: [Boolean, Object],
      default: function() {
      }
    },
    filterUI: [String, Function, Object],
    onFilterfocus: Function,
    onFilterchange: Function,
    onExpandchange: Function,
    onClosemenu: Function
  },
  inject: {
    kendoLocalizationService: {
      default: null
    }
  },
  data() {
    return {
      currentExpanded: !1,
      filterGroup: null
    };
  },
  created() {
    let e;
    if (this.$props.column && this.$props.column.field) {
      const t = gl(this.$props.column.filter), i = pl(this.$props.filterOperators, t);
      e = Kn(this.$props.column.field, this.$props.filter), e = e ? {
        ...e,
        filters: e.filters.map((n) => ({
          ...n
        }))
      } : {
        logic: "and",
        filters: [{
          field: this.$props.column.field,
          operator: i
        }, {
          field: this.$props.column.field,
          operator: i
        }]
      }, e.filters.filter((n) => n.field === this.$props.column.field).length === 1 && e.filters.splice(1, 0, {
        field: this.$props.column.field,
        operator: i
      });
    }
    this.currentExpanded = this.$props.expanded || !1, this.filterGroup = e;
  },
  methods: {
    removeGroup(e, t) {
      const i = [...t.filters], n = i.findIndex((r) => r === e);
      return n > -1 && i.splice(n, 1), {
        ...t,
        filters: i
      };
    },
    insertGroup(e, t) {
      return {
        ...t,
        filters: [e, ...t.filters]
      };
    },
    isControlled() {
      return this.$props.expanded !== void 0;
    },
    onFilterExpand() {
      const e = this.isControlled(), t = !(e ? this.$props.expanded : this.currentExpanded);
      this.$emit("expandchange", t), e || (this.currentExpanded = t);
    },
    filterChangeHandler(e, t) {
      this.filterChange(t || 0, e);
    },
    firstFilterChange(e) {
      this.filterChange(0, e);
    },
    secondFilterChange(e) {
      this.filterChange(1, e);
    },
    filterChange(e, t) {
      const i = this.filterGroup.filters.map((n, r) => r === e ? {
        ...n,
        value: t.value,
        operator: t.operator
      } : n);
      this.filterGroup = {
        ...this.filterGroup,
        filters: i
      };
    },
    logicChange(e) {
      this.filterGroup = {
        ...this.filterGroup,
        logic: e.target.value.operator
      };
    },
    clear(e) {
      if (e.preventDefault(), !it.call(this, "filterchange"))
        return;
      const t = this.$props.column.field, i = Rr(this.$props.filter), n = Kn(t, this.$props.filter), r = i.filters.filter((a) => a !== n);
      r.length ? this.$emit("filterchange", {
        ...i,
        filters: r
      }, {
        event: e,
        field: this.$props.column.field
      }) : this.$emit("filterchange", null, {
        event: e,
        field: this.$props.column.field
      }), this.$emit("closemenu");
    },
    currentFilterGroup() {
      return {
        ...this.filterGroup,
        filters: this.filterGroup.filters.filter((e) => e.value !== void 0 && e.value !== null && e.value !== "" || e.value === null && e.operator)
      };
    },
    submit(e) {
      if (e.preventDefault(), !it.call(this, "filterchange"))
        return;
      const t = this.$props.column.field, i = Rr(this.$props.filter), n = Kn(t, this.$props.filter), r = this.currentFilterGroup();
      let a = null;
      if (n && r.filters.length > 0) {
        const o = i.filters.map((s) => s === n ? r : s);
        a = {
          ...i,
          filters: o
        };
      } else if (r.filters.length === 0) {
        const o = i.filters.filter((s) => s !== n);
        o.length && (a = {
          ...i,
          filters: o
        });
      } else
        a = {
          ...i,
          filters: [...i.filters, r]
        };
      this.$emit("filterchange", a, {
        event: e,
        field: this.$props.column.field
      }), this.$emit("closemenu");
    },
    handleFocus(e) {
      this.$emit("filterfocus", e);
    }
  },
  setup() {
    return {
      kendoLocalizationService: H("kendoLocalizationService", {})
    };
  },
  render() {
    let e, t;
    const {
      column: i,
      filterUI: n,
      hideSecondFilter: r,
      filterOperators: a
    } = this.$props;
    if (!i || !i.field)
      return u("div", null, null);
    const o = i.filter || "text", s = Z(this), l = this.filterGroup.filters, d = ci(a[o], s), c = ci(cl, s), h = {
      field: i.field,
      value: l[0].value,
      operator: l[0].operator,
      booleanValues: c,
      filterType: o
    }, p = {
      field: i.field,
      value: l[1].value,
      operator: l[1].operator,
      booleanValues: c,
      filterType: o
    }, g = this.filterGroup.logic, m = ci(P0, s), f = {
      value: m.find((w) => w.operator === (g === null ? "" : g)),
      data: m
    }, b = this.currentFilterGroup().filters.length !== 0, v = this.isControlled() ? this.$props.expanded : this.currentExpanded, $ = h.field, y = h.value, C = h.operator, D = h.booleanValues, S = h.filterType, E = p.field, L = p.value, j = p.operator, Q = p.booleanValues, z = p.filterType, Y = n && P.call(this, n, T.call(this)), q = _.call(this, {
      h: M,
      template: Y,
      defaultRendering: void 0,
      additionalProps: this.$props,
      additionalListeners: {
        change: this.filterChangeHandler,
        logicchange: this.logicChange
      }
    });
    return u(ll, null, {
      default: () => [u(Pr, {
        title: s.toLanguageString(kr, te[kr]),
        icon: "filter",
        svgIcon: Zs,
        onMenuitemclick: this.onFilterExpand
      }, null), u(T0, {
        show: !!v
      }, {
        default: () => [u("div", {
          class: "kendo-grid-filter-menu-container"
        }, [u("form", {
          class: "k-filter-menu k-border-up",
          onSubmit: this.submit,
          onReset: this.clear
        }, [u("div", {
          class: "k-filter-menu-container"
        }, [!n && [u(Ds, {
          operator: C,
          filterType: S,
          onChange: (w) => {
            this.filterChangeHandler(w, 0);
          },
          operators: d
        }, null), u(Is, {
          field: $,
          value: y,
          operator: C,
          booleanValues: D,
          filterType: S,
          onFiltercellfocus: this.handleFocus,
          onChange: (w) => {
            this.filterChangeHandler(w, 0);
          },
          operators: d
        }, null)], !r && !n && [u(jt, {
          onChange: this.logicChange,
          class: "k-filter-and",
          "data-items": f.data,
          value: f.value,
          textField: "text"
        }, null), u(Ds, {
          operator: j,
          filterType: z,
          onChange: (w) => {
            this.filterChangeHandler(w, 1);
          },
          operators: d
        }, null), u(Is, {
          field: E,
          value: L,
          operator: j,
          booleanValues: Q,
          filterType: z,
          onFiltercellfocus: this.handleFocus,
          onChange: (w) => {
            this.filterChangeHandler(w, 1);
          },
          operators: d
        }, null)], n && q, u("div", {
          class: "k-columnmenu-actions"
        }, [u(xe, {
          themeColor: "primary",
          disabled: !b
        }, Es(e = s.toLanguageString($r, te[$r])) ? e : {
          default: () => [e]
        }), u(xe, {
          type: "reset"
        }, Es(t = s.toLanguageString(fi, te[fi])) ? t : {
          default: () => [t]
        })])])])])]
      })]
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const j0 = /* @__PURE__ */ k({
  name: "KendoColumnMenuContent",
  inheritAttrs: !1,
  props: {
    column: Object,
    sortable: [Boolean, Object],
    sort: {
      type: Array
    },
    filter: Object,
    filterOperators: Object,
    filterable: Boolean,
    render: [Boolean, String, Function, Object],
    onContentfocus: Function,
    onClosemenu: Function,
    onSortchange: Function,
    onExpandchange: Function,
    onFilterchange: Function
  },
  methods: {
    handleFocus(e) {
      this.$emit("contentfocus", e);
    },
    closeMenu() {
      this.$emit("closemenu");
    },
    expandChange() {
      this.$emit("expandchange");
    },
    sortChange(e, t) {
      this.$emit("sortchange", e, t);
    },
    filterChange(e, t) {
      this.$emit("filterchange", e, t);
    },
    contentKeyDown(e) {
      e.keyCode === O.esc && this.$emit("closemenu");
    }
  },
  render() {
    const e = this.$props.render, t = u("div", {
      style: this.$attrs.style,
      onKeydown: this.contentKeyDown
    }, [u(V0, {
      column: this.$props.column,
      sortable: this.$props.sortable,
      sort: this.$props.sort,
      onClosemenu: this.closeMenu,
      onSortchange: this.sortChange
    }, null), u(B0, {
      column: this.$props.column,
      filterable: this.$props.filterable,
      filter: this.$props.filter,
      filterOperators: this.$props.filterOperators,
      onFilterfocus: this.handleFocus,
      onClosemenu: this.closeMenu,
      onExpandchange: this.expandChange,
      onFilterchange: this.filterChange
    }, null)]);
    return _.call(this, {
      h: M,
      template: typeof e != "boolean" && e,
      defaultRendering: t,
      additionalProps: this.$props,
      additionalListeners: {
        closemenu: this.closeMenu,
        filterchange: this.filterChange,
        sortchange: this.sortChange,
        expandchange: this.expandChange,
        contentfocus: this.handleFocus
      }
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const G0 = /* @__PURE__ */ k({
  name: "KendoColumnMenu",
  props: {
    animate: {
      type: [Boolean, Object],
      default: function() {
        return !0;
      }
    },
    column: Object,
    sortable: [Boolean, Object],
    sort: {
      type: Array
    },
    opened: Boolean,
    filter: Object,
    filterable: Boolean,
    filterOperators: Object,
    render: [Boolean, String, Function, Object],
    columnMenuIcon: Yr,
    onClose: Function,
    onSortchange: Function,
    onFilterchange: Function
  },
  inject: {
    kendoIntlService: {
      default: null
    },
    kendoLocalizationService: {
      default: null
    }
  },
  data() {
    return {
      show: !1,
      blurTimeout: void 0
    };
  },
  created() {
    this._anchor = me();
  },
  computed: {
    currentOpen() {
      return this.show || this.$props.opened;
    }
  },
  watch: {
    currentOpen: function(e) {
      this.$nextTick(function() {
        if (this._content = this.$refs.content, e && this._content) {
          const t = K.getFocusableElements(this._content, {
            focusable: !0
          });
          t.length ? t[0].focus() : this._content.focus();
        }
      });
    }
  },
  methods: {
    blur() {
      clearTimeout(this.blurTimeout), this.blurTimeout = setTimeout(() => {
        this.closeMenu();
      }, 200);
    },
    focus() {
      clearTimeout(this.blurTimeout);
    },
    handleFocus(e) {
      clearTimeout(this.blurTimeout);
    },
    anchorClick(e) {
      e.preventDefault(), this.show = !this.show;
    },
    closeMenu() {
      this.$emit("close"), this.show = !1;
    },
    sortChange(e, t) {
      this.$emit("sortchange", e, t);
    },
    filterChange(e, t) {
      this.$emit("filterchange", e, t);
    }
  },
  setup() {
    return {
      kendoLocalizationService: H("kendoLocalizationService", {})
    };
  },
  render() {
    const e = this.$props.render, t = Z(this), {
      columnMenuIcon: i
    } = this.$props;
    return u("div", {
      style: {
        display: "inline"
      }
    }, [u("a", {
      class: "k-grid-header-menu k-grid-column-menu",
      title: `${this.$props.column.field} ${t.toLanguageString(yr, te[yr])}`,
      ref: he(this, "kendoAnchor"),
      onClick: this.anchorClick,
      href: "#"
    }, [i ? u(ie, {
      name: i.name,
      icon: i
    }, null) : u(ie, {
      name: "more-vertical",
      icon: pd
    }, null)]), u(ea, {
      animate: this.$props.animate,
      anchor: this._anchor,
      show: this.currentOpen
    }, {
      default: () => [u("div", {
        ref: "content",
        class: "k-column-menu k-grid-columnmenu-popup",
        tabindex: 0,
        onFocusout: this.blur,
        onFocusin: this.focus,
        style: {
          outline: "none",
          width: "230px"
        }
      }, [u(j0, {
        column: this.$props.column,
        sortable: this.$props.sortable,
        sort: this.$props.sort,
        filter: this.$props.filter,
        filterable: this.$props.filterable,
        filterOperators: this.$props.filterOperators,
        render: e,
        onContentfocus: this.handleFocus,
        onClosemenu: this.closeMenu,
        onSortchange: this.sortChange,
        onFilterchange: this.filterChange
      }, null)])]
    })]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function qn(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const Wn = {
  none: "none",
  asc: "ascending",
  desc: "descending"
}, K0 = {
  true: {
    asc: "desc",
    desc: "",
    "": "asc"
  },
  false: {
    asc: "desc",
    desc: "asc",
    "": "asc"
  }
}, q0 = /* @__PURE__ */ k({
  name: "KendoHeaderRow",
  props: {
    grid: Object,
    cellRender: [String, Function, Object],
    groupable: [Boolean, Object],
    reorderable: Boolean,
    sortable: [Boolean, Object],
    sort: {
      type: Array
    },
    filter: Object,
    filterable: Boolean,
    filterOperators: Object,
    filterChange: Function,
    filterRow: Object,
    columns: Array,
    columnsMap: Array,
    columnResize: Object,
    columnMenu: [Boolean, String, Function, Object],
    columnMenuAnimate: {
      type: [Boolean, Object],
      default: function() {
        return !0;
      }
    },
    columnMenuIcon: Object,
    isRtl: Boolean,
    isColCountDefined: Boolean,
    // columnsInitial prop:
    // Needed for hidden column scenarios. By this value we can define correct aria-colindex attribute
    columnsInitial: Array,
    onSortChange: Function,
    onFilterChange: Function,
    onSelectionchange: Function,
    onPressHandler: Function,
    onDragHandler: Function,
    onReleaseHandler: Function
  },
  inject: {
    onNavFocus: {
      default: ke
    },
    kendoLocalizationService: {
      default: null
    }
  },
  data() {
    return {
      columnMenuOpened: {}
    };
  },
  created() {
    this.serviceIndex = 0, this.index = -1, this._element = null, this.cellClick = this.cellClick.bind(this);
  },
  methods: {
    pressHandler(e, t) {
      this.$emit("pressHandler", e, t);
    },
    dragHandler(e, t) {
      this.$emit("dragHandler", e, t);
    },
    releaseHandler(e) {
      this.$emit("releaseHandler", e);
    },
    selectionChangeHandler(e) {
      this.$emit("selectionchange", e);
    },
    cellClick(e, t) {
      if (e.preventDefault(), !it.call(this, "sortChange"))
        return;
      const {
        allowUnsort: i,
        mode: n
      } = ol(this.$props.sortable || !1, t.sortable || !1), r = (this.$props.sort || []).filter((s) => s.field === t.field)[0], a = K0[i][r && r.dir || ""], o = n === "single" ? [] : (this.$props.sort || []).filter((s) => s.field !== t.field);
      a !== "" && t.field && o.push({
        field: t.field,
        dir: a
      }), this.sortChangeHandler(o, {
        event: e,
        field: t.field
      });
    },
    sortChangeHandler(e, t) {
      this.$emit("sortChange", e, t);
    },
    filterChangeHandler(e, t) {
      this.$emit("filterChange", e, t);
    },
    cellClass(e, t, i) {
      const n = t ? " " + t : "";
      let r = "k-header" + (i ? " k-grid-header-sticky" : "") + n;
      return this.$props.sort && this.$props.sort.filter((a) => a.field === e).length > 0 && (r += " k-sorted"), r;
    },
    cellKeyDown(e, t) {
      e.defaultPrevented || (e.keyCode === O.enter && this.cellClick(e, t), e.altKey && e.keyCode === O.down && t.field && (e.preventDefault(), this.columnMenuOpened = {
        [t.field]: !0
      }));
    },
    getTemplate(e) {
      return P.call(this.$props.grid, e, T.call(this.$props.grid));
    },
    columnMenuClose() {
      this.onNavFocus({}), this.columnMenuOpened = {};
    }
  },
  computed: {
    element() {
      return this._element;
    },
    theadClasses() {
      return {
        "k-table-thead": !0
      };
    }
  },
  render(e) {
    const t = Z(this), i = t.toLanguageString(Ir, te[Ir]), n = t.toLanguageString(Dr, te[Dr]), r = t.toLanguageString(Er, te[Er]);
    this.serviceIndex = 0, this.index = -1;
    const a = function(o) {
      return o.map(function(s) {
        const l = this.$props.columns[s], d = this.$props.sortable && l.sortable, c = this.$props.sort ? this.$props.sort.findIndex((S) => S.field === l.field) : -1, h = c >= 0 && this.$props.sort[c].dir || "none", p = (function(S) {
          if (!this.$props.sort)
            return null;
          const E = S >= 0 ? this.$props.sort[S].dir : "";
          return S >= 0 && [u("span", {
            key: 1,
            class: "k-sort-icon"
          }, [u(ie, {
            name: "sort-" + E + "-small",
            icon: E === "asc" ? Jr : Zr
          }, null)]), this.$props.sort.length > 1 && u("span", {
            key: 2,
            class: "k-sort-icon"
          }, [u("span", {
            class: "k-sort-order"
          }, [S + 1])])];
        }).call(this, c), g = l.columnMenu || l.columnMenu === !1 ? l.columnMenu : this.$props.columnMenu, m = l.menuIcon || this.$props.columnMenuIcon, f = (l.kFirst ? "k-first " : "") + this.cellClass(l.field, l.headerClassName, l.locked) + (g ? " k-filterable" : ""), b = !g || typeof g == "boolean" ? !!g : this.getTemplate(g), v = l.left !== void 0 ? this.$props.isRtl ? {
          left: l.right + "px",
          right: l.left + "px"
        } : {
          left: l.left + "px",
          right: l.right + "px"
        } : {}, $ = Wn[h] === "none" ? i : Wn[h] === "ascending" ? n : r;
        let y = l.isAccessible ? {
          ariaSort: Wn[h],
          ariaLabel: $,
          role: "columnheader",
          ariaColumnIndex: this.$props.isColCountDefined ? this.$props.columnsInitial.findIndex((S) => S.field === l.field) + 1 : void 0,
          ariaSelected: !1,
          ariaHaspopup: g ? "menu" : this.$props.filterable && l.filterable ? "dialog" : void 0
        } : {
          role: "columnheader"
        };
        const C = l.declarationIndex >= 0 ? ++this.index : --this.serviceIndex, D = l.columnMenuOpened !== void 0 ? l.columnMenuOpened : this.columnMenuOpened[l.field];
        return u(_v, {
          ariaSort: d ? y.ariaSort : void 0,
          ariaLabel: d ? y.ariaLabel : void 0,
          role: y.role,
          ariaColumnIndex: y.ariaColumnIndex,
          ariaSelected: y.ariaSelected,
          ariaHaspopup: y.ariaHaspopup,
          key: C,
          colSpan: l.colSpan,
          rowSpan: l.rowSpan,
          class: f,
          style: v,
          columnId: l.id,
          navigatable: l.navigatable,
          onKeydown: (S) => this.cellKeyDown(S, l)
        }, {
          default: () => [[l.children.length === 0 && g && u(G0, {
            key: 0,
            column: {
              field: l.field,
              filter: l.filter
            },
            opened: D,
            animate: this.$props.columnMenuAnimate,
            sortable: d,
            sort: this.$props.sort,
            onClose: this.columnMenuClose,
            onSortchange: this.sortChangeHandler,
            filter: this.$props.filter,
            filterable: this.$props.filterable && l.filterable,
            filterOperators: this.$props.filterOperators,
            onFilterchange: this.filterChangeHandler,
            render: b,
            columnMenuIcon: m
          }, null), l.internalHeaderCell && u("span", {
            class: "k-cell-inner"
          }, [u(l.internalHeaderCell, {
            key: 1,
            field: l.field,
            sortable: d,
            onHeadercellclick: (S) => this.cellClick(S, l),
            onSelectionchange: this.selectionChangeHandler,
            selectionValue: l.headerSelectionValue,
            title: l.title,
            render: (l.headerCell || this.$props.cellRender) && this.getTemplate(l.headerCell || this.$props.cellRender)
          }, qn(p) ? p : {
            default: () => [p]
          })]) || u("span", {
            class: "k-cell-inner"
          }, [u(O0, {
            key: 1,
            field: l.field,
            sortable: d,
            onHeadercellclick: (S) => this.cellClick(S, l),
            selectionValue: l.headerSelectionValue,
            title: l.title,
            render: (l.headerCell || this.$props.cellRender) && this.getTemplate(l.headerCell || this.$props.cellRender)
          }, qn(p) ? p : {
            default: () => [p]
          })]), this.$props.columnResize && this.$props.columnResize.resizable && l.resizable && u(F0, {
            key: 2,
            onResize: (S, E, L) => this.$props.columnResize && this.$props.columnResize.dragHandler(S, l, E, L)
          }, null)]]
        });
      }, this);
    };
    return u("thead", {
      role: "rowgroup",
      class: this.theadClasses,
      "data-keyboardnavheader": !0
    }, [this.$props.columnsMap.map(function(o, s) {
      let l;
      return (this.$props.groupable || this.$props.reorderable) && u(L0, {
        key: s,
        onPressHandler: this.pressHandler,
        onDragHandler: this.dragHandler,
        onReleaseHandler: this.releaseHandler
      }, qn(l = a.call(this, o)) ? l : {
        default: () => [l]
      }) || u("tr", {
        class: "k-table-row",
        role: "row",
        "aria-rowindex": this.columnsMap.length
      }, [a.call(this, o)]);
    }, this), this.$props.filterRow]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const W0 = /* @__PURE__ */ k({
  name: "KendoGridFilterCell",
  inheritAttrs: !1,
  props: {
    id: String,
    grid: Object,
    field: String,
    filterType: String,
    colSpan: Number,
    title: String,
    value: [String, Number, Boolean, Date],
    operator: [String, Function],
    operators: Array,
    booleanValues: Array,
    onChange: Function,
    render: [String, Function, Object],
    ariaLabel: String,
    size: String
  },
  inject: {
    kendoLocalizationService: {
      default: null
    },
    kendoIntlService: {
      default: null
    }
  },
  methods: {
    inputChange(e, t) {
      const i = hl(e, t, this.$props);
      this.triggerChange(i);
    },
    operatorChange(e, t) {
      const i = ml(e.value.operator, t, this.$props.value);
      this.triggerChange(i);
    },
    boolDropdownChange(e, t) {
      const i = fl(e.value.operator, t);
      this.triggerChange(i);
    },
    clear(e) {
      e.preventDefault(), this.triggerChange({
        value: "",
        operator: "",
        event: e
      });
    },
    triggerChange(e) {
      e.field = this.$props.field, this.$emit("change", e);
    }
  },
  setup() {
    const e = H("kendoIntlService", {}), t = H("kendoLocalizationService", {});
    return {
      kendoIntlService: e,
      kendoLocalizationService: t
    };
  },
  render() {
    const e = Z(this), {
      size: t
    } = this.$props, i = this.$props.operators.find((l) => l.operator === this.$props.operator) || null, n = function() {
      if (this.$props.filterType !== "boolean")
        return u(jt, {
          onChange: this.operatorChange,
          value: i,
          size: t,
          class: "k-dropdown-operator",
          icon: "filter",
          svgIcon: Zs,
          iconClassName: "filter k-button-icon",
          "data-items": this.$props.operators,
          textField: "text",
          title: e.toLanguageString(Cr, te[Cr]),
          popupSettings: {
            width: "",
            anchor: ""
          },
          ariaLabel: this.ariaLabel
        }, null);
    }, r = function(l, d) {
      let c;
      switch (l) {
        case "numeric":
          return u(vn, {
            size: t,
            value: d,
            onChange: (h) => {
              this.inputChange(h.value, h.event);
            },
            title: this.$props.title,
            ariaLabel: this.ariaLabel
          }, null);
        case "date":
          return u(pa, {
            size: t,
            value: d,
            onChange: (h) => {
              this.inputChange(h.value, h);
            },
            title: this.$props.title,
            ariaLabel: this.ariaLabel
          }, null);
        case "boolean":
          return c = this.$props.booleanValues, u(jt, {
            onChange: this.boolDropdownChange,
            size: t,
            value: c.find((h) => h.operator === (d !== null ? d : "")),
            "data-items": c,
            textField: "text",
            title: this.$props.title,
            ariaLabel: this.ariaLabel
          }, null);
        default:
          return u(_o, {
            value: d || "",
            size: t,
            onInput: (h) => {
              this.inputChange(h.target.value, h);
            },
            title: this.$props.title,
            "aria-label": this.ariaLabel
          }, null);
      }
    }, a = u("div", {
      class: "k-filtercell",
      style: this.$attrs.style
    }, [u("div", {
      class: "k-filtercell-wrapper"
    }, [r.call(this, this.$props.filterType, this.$props.value), u("div", {
      class: "k-filtercell-operator"
    }, [n.call(this), u(xe, {
      type: "button",
      size: t,
      icon: "filter-clear",
      svgIcon: vd,
      class: {
        /* button is always visible if there is either value or operator */
        "k-disabled": !(!(this.$props.value === null || this.$props.value === "") || this.$props.operator)
      },
      title: e.toLanguageString(fi, te[fi]),
      onClick: this.clear
    }, null)])])]), o = this.$props.grid ? T.call(this.$props.grid) : null, s = P.call(this.$props.grid, this.$props.render, o);
    return _.call(this, {
      h: M,
      template: s,
      defaultRendering: a,
      additionalProps: this.$props,
      additionalListeners: {
        change: this.triggerChange
      }
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
function U0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ie(e);
}
const Y0 = /* @__PURE__ */ k({
  name: "kendoFilterRow",
  props: {
    grid: Object,
    columns: Array,
    filter: Object,
    filterOperators: Object,
    sort: [Object, Array],
    cellRender: [String, Function, Object],
    isRtl: Boolean,
    ariaRowIndex: Number,
    size: String,
    onFilterchange: Function
  },
  inject: {
    kendoLocalizationService: {
      default: null
    }
  },
  methods: {
    headerCellClassName(e, t) {
      let i = t ? " k-grid-header-sticky" : "";
      return this.$props.sort && this.$props.sort.filter((n) => n.field === e).length > 0 && (i += " k-sorted"), i;
    },
    setFilter(e, t, i, n) {
      const r = [];
      (e !== "" && e !== null || t !== "") && r.push({
        field: i,
        operator: t,
        value: e
      }), this.$props.filter && this.$props.filter.filters && (this.$props.filter.filters || []).forEach((o) => {
        const s = o;
        s && s.field !== i && r.push(s);
      });
      const a = r.length > 0 ? {
        logic: "and",
        filters: r
      } : null;
      this.$emit("filterchange", a, n);
    }
  },
  setup() {
    return {
      kendoLocalizationService: H("kendoLocalizationService", {})
    };
  },
  render() {
    const e = Z(this), t = this.$props.filter && this.$props.filter.filters || [], i = (s, l = null) => {
      const d = t.filter((c) => c.field === s)[0];
      return d ? d.value : l;
    }, n = (s) => {
      const l = t.filter((d) => d.field === s)[0];
      return l ? l.operator : null;
    };
    let r = 0, a = -1;
    const o = this.$props.columns.filter((s) => s.children.length === 0).map(function(s) {
      const l = (b) => {
        this.setFilter(b.value, b.operator, s.field, b);
      }, d = gl(s.filter), c = (s.title || s.field) + " " + R0(d, e), h = u(W0, {
        grid: this.$props.grid,
        field: s.field,
        title: s.filterTitle,
        value: i(s.field, d === "text" ? "" : null),
        operator: n(s.field),
        operators: ci(this.$props.filterOperators[d] || [], e),
        booleanValues: ci(cl, e),
        filterType: d,
        onChange: l,
        render: s.filterCell || this.$props.cellRender,
        "aria-label": c,
        size: this.$props.size
      }, null), p = s.declarationIndex >= 0 ? ++a : --r, g = {
        ariaLabel: s.filterable ? e.toLanguageString(Mr, te[Mr]) : void 0,
        ariaColumnIndex: s.ariaColumnIndex
      }, m = s.left !== void 0 ? this.$props.isRtl ? {
        left: s.right + "px",
        right: s.left + "px"
      } : {
        left: s.left + "px",
        right: s.right + "px"
      } : {}, f = u(ys, {
        key: p,
        role: "gridcell",
        columnId: K.getFilterColumnId(s.id),
        navigatable: s.navigatable,
        style: m,
        class: this.headerCellClassName(s.field, s.locked) || void 0,
        ariaColumnIndex: g.ariaColumnIndex,
        "aria-label": c
      }, U0(h) ? h : {
        default: () => [h]
      });
      return s.filterable && f || u(ys, {
        key: p,
        role: "gridcell",
        columnId: K.getFilterColumnId(s.id),
        navigatable: s.navigatable,
        style: m,
        class: this.headerCellClassName(s.field, s.locked) || void 0,
        ariaColumnIndex: g.ariaColumnIndex,
        "aria-label": c
      }, null);
    }, this);
    return u("tr", {
      class: "k-table-row k-filter-row",
      "aria-rowindex": this.ariaRowIndex,
      role: "row"
    }, [o]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const X0 = /* @__PURE__ */ k({
  props: {
    title: String,
    dir: String,
    onRemove: Function,
    onSortChange: Function,
    onPress: Function,
    onDrag: Function,
    onRelease: Function
  },
  mounted() {
    this.element = J(this, "indicatorContainer"), this.element && (this.draggable = this.$refs.draggable);
  },
  methods: {
    press(e) {
      this.element && this.$emit("press", e, this.element);
    },
    drag(e) {
      this.element && this.$emit("drag", e, this.element);
    },
    release(e) {
      this.element && this.$emit("release", e, this.element);
    },
    sortChange(e) {
      e.preventDefault();
      const t = this.$props.dir === "asc" ? "desc" : "asc";
      this.$emit("sortChange", e, t);
    },
    groupRemove(e) {
      e.preventDefault(), this.$emit("remove", e);
    }
  },
  setup() {
    return {
      indicatorContainerRef: V(null)
    };
  },
  render() {
    return u(qr, {
      onPress: this.press,
      onDrag: this.drag,
      onRelease: this.release,
      ref: "draggable"
    }, {
      default: () => [u("div", {
        class: "k-chip k-chip-md k-chip-solid k-chip-solid-base k-rounded-md",
        ref: he(this, "indicatorContainer")
      }, [u(ie, {
        name: "sort-" + this.$props.dir + "-small",
        class: "k-chip-icon",
        icon: this.$props.dir === "asc" ? Jr : Zr
      }, null), u("span", {
        class: "k-chip-content",
        tabindex: -1,
        onClick: this.sortChange
      }, [this.$props.title]), u("span", {
        class: "k-chip-actions"
      }, [u("span", {
        class: "k-chip-action k-chip-remove-action",
        tabindex: -1,
        onClick: this.groupRemove
      }, [u(ie, {
        name: "x-circle",
        icon: fd
      }, null)])])])]
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const J0 = /* @__PURE__ */ k({
  props: {
    group: Array,
    resolveTitle: Function,
    ariaControls: String,
    onPressHandler: Function,
    onDragHandler: Function,
    onReleaseHandler: Function,
    onGroupChange: Function
  },
  inject: {
    kendoLocalizationService: {
      default: null
    }
  },
  methods: {
    pressHandler(e, t) {
      this.$emit("pressHandler", e, t);
    },
    dragHandler(e, t) {
      this.$emit("dragHandler", e, t);
    },
    releaseHandler(e) {
      this.$emit("releaseHandler", e);
    },
    onGroupRemove(e, t) {
      const i = this.$props.group.slice();
      i.splice(t, 1), this.$emit("groupChange", i, e);
    },
    onGroupSortChange(e, t, i, n) {
      const r = Object.assign({}, i, {
        dir: n
      }), a = this.$props.group.slice();
      a.splice(t, 1, r), this.$emit("groupChange", a, e);
    }
  },
  setup() {
    return {
      kendoLocalizationService: H("kendoLocalizationService", {})
    };
  },
  render() {
    const e = this.$props.group || [], t = this.$props.ariaControls, i = e.map(function(r, a) {
      return u(X0, {
        key: a,
        dir: r.dir || "asc",
        title: this.$props.resolveTitle(r.field),
        onRemove: (o) => this.onGroupRemove(o, a),
        onSortChange: (o, s) => {
          this.onGroupSortChange(o, a, r, s);
        },
        onPress: this.pressHandler,
        onDrag: this.dragHandler,
        onRelease: this.releaseHandler
      }, null);
    }, this), n = Z(this).toLanguageString(Ar, te[Ar]);
    return u("div", {
      class: "k-grouping-header",
      role: "toolbar",
      "aria-label": n,
      "aria-controls": t
    }, [!!i.length && u("div", {
      class: "k-chip-list k-chip-list-md"
    }, [i]), u("div", {
      class: "k-grouping-drop-container"
    }, [!i.length && Z(this).toLanguageString(xr, te[xr])])]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Z0 = /* @__PURE__ */ k({
  name: "Footer",
  props: {
    staticHeaders: Boolean,
    row: Object,
    columnResize: Object,
    cols: Array,
    size: String
  },
  data() {
    return {
      scrollbarWidth: 0,
      rtl: !1,
      tableWidth: null
    };
  },
  computed: {
    tableClass() {
      const {
        size: e
      } = this.$props;
      return {
        "k-table": !0,
        "k-grid-footer-table": !0,
        [`k-table-${ye.sizeMap[e] || e}`]: e
      };
    },
    divStyle() {
      const e = this.$data.scrollbarWidth + "px", t = this.rtl ? 0 : e, i = this.rtl ? e : 0;
      return {
        padding: `0 ${t} 0 ${i}`
      };
    },
    tableStyle() {
      return this.tableWidth ? {
        width: this.tableWidth
      } : null;
    }
  },
  mounted() {
    this.rtl = nl(this.$el), this.$props.columnResize.colGroupFooter = J(this, "colGroupHeader"), this._footerWrap = J(this, "footerWrap");
  },
  methods: {
    setScrollLeft(e) {
      this._footerWrap && (this._footerWrap.scrollLeft = e);
    },
    setWidth(e) {
      this.$data.tableWidth = e + "px";
    }
  },
  setup() {
    const e = V(null);
    return {
      colGroupHeaderRef: V(null),
      footerWrapRef: e
    };
  },
  render() {
    return this.$props.staticHeaders ? u("div", {
      class: "k-grid-footer",
      style: this.divStyle,
      role: "presentation"
    }, [u("div", {
      class: "k-grid-footer-wrap",
      ref: he(this, "footerWrap"),
      role: "presentation"
    }, [u("table", {
      class: this.tableClass,
      style: this.tableStyle,
      role: "presentation"
    }, [u("colgroup", {
      ref: he(this, "colGroupHeader")
    }, [this.$props.cols]), u("tfoot", {
      class: "k-table-tfoot",
      role: "rowgroup"
    }, [this.$props.row])])])]) : u("tfoot", {
      class: "k-table-tfoot k-grid-footer",
      role: "rowgroup"
    }, [this.$props.row]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Q0 = /* @__PURE__ */ k({
  name: "FooterRow",
  props: {
    isRtl: Boolean,
    columns: Array,
    rowIndex: Number
  },
  methods: {
    columnStyles(e) {
      return e.left !== void 0 ? this.$props.isRtl ? {
        left: e.right + "px",
        right: e.left + "px"
      } : {
        left: e.left + "px",
        right: e.right + "px"
      } : {};
    }
  },
  render() {
    const e = function(t, i) {
      let n = null;
      const r = t.locked && t.left !== void 0 ? "k-grid-footer-sticky" : "", a = t.footerClassName ? `k-table-td ${t.footerClassName} ${r}` : "k-table-td " + r;
      return n = _.call(this, {
        h: M,
        template: t.footerCell,
        defaultRendering: null,
        additionalProps: {
          field: t.field,
          colSpan: t.colSpan !== 1 ? t.colSpan : void 0,
          defaultStyle: this.columnStyles(t)
        }
      }), u("td", {
        key: i,
        colspan: t.colSpan !== 1 ? t.colSpan : void 0,
        style: this.columnStyles(t),
        class: a,
        role: "gridcell"
      }, [n]);
    };
    return u("tr", {
      class: "k-table-row",
      role: "row",
      "aria-rowIndex": this.$props.rowIndex
    }, [r0(this.$props.columns).map(e, this)]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
class Un {
  constructor(t, i) {
    this.table = null, this.containerHeight = 0, this.topCacheCount = 0, this.attendedSkip = 0, this.propsSkip = 0, this.total = 0, this.scrollableVirtual = !1, this.realSkip = 0, this.pageSize = 0, this.fixedScroll = !1, this.askedSkip = void 0, this.tableTransform = "", this.prevScrollPos = 0, this.tableTranslate = 0, this.scrollSyncing = !1, this.topItems = (n, r) => {
      if (!this.container || r)
        return { topItemsCount: 0, topItemsHeight: 0 };
      const a = this.container.clientHeight, o = this.container.querySelectorAll(".k-group-footer").length, s = Math.ceil(a / n[0].line), l = Math.ceil(o / s), d = Math.max(l, Math.ceil((n.length - s) / 2));
      let c = 0;
      for (let g = 0; g < d; g++)
        c += n[g].line + n[g].acc;
      const h = l ? o / (1 + l) : 0, p = s + s / 2 + h;
      return {
        topItemsCount: d,
        topItemsHeight: c,
        itemsNeededOnScreen: p
      };
    }, this.horizontalScrollbarHeight = () => this.container ? this.container.offsetHeight - this.container.clientHeight : 0, t && (this.topCacheCount = i, this.attendedSkip = -this.topCacheCount), this.scrollHandler = this.scrollHandler.bind(this);
  }
  get container() {
    return this.containerRef;
  }
  /**
   * @return - The row heights in an array.
   */
  get rowHeights() {
    const t = [], i = this.tableBodyRef && this.tableBodyRef.children || [];
    let n = 0;
    for (let r = 0; r < i.length; r++) {
      if (i[r].className.indexOf("k-grouping-row") > -1) {
        n += i[r].scrollHeight;
        continue;
      }
      i[r].className.indexOf("k-detail-row") > -1 ? t[t.length - 1].line += i[r].scrollHeight : (t.push({
        line: i[r].scrollHeight,
        acc: n
      }), n = 0);
    }
    return t;
  }
  changePage(t, i) {
    this.attendedSkip = t - this.topCacheCount, this.PageChange(
      {
        skip: Math.max(0, t - this.topCacheCount),
        take: this.pageSize
      },
      i
    );
  }
  translate(t) {
    this.tableTranslate = t, this.scrollableVirtual && this.table && (this.table.style.transform = "translateY(" + t + "px)");
  }
  reset() {
    this.scrollSyncing = !0, !this.fixedScroll && (this.container && (this.container.scrollTop = 0), this.translate(0));
  }
  localScrollUp(t) {
    if (!this.container)
      return;
    const i = this.rowHeights, n = this.container.scrollTop;
    let r = this.tableTranslate, a = 0;
    const {
      topItemsCount: o,
      topItemsHeight: s,
      itemsNeededOnScreen: l
    } = this.topItems(i, !!this.topCacheCount), d = n - r;
    if (!(d > s || i.length <= l)) {
      for (; a < this.topCacheCount + this.attendedSkip - this.realSkip + o && this.propsSkip - a > 0 && !(r + (i[i.length - 1 - a].line + i[i.length - 1 - a].acc) + d <= n); )
        r -= i[i.length - 1 - a].line + i[i.length - 1 - a].acc, a++;
      if (a === 0 && this.topCacheCount === 0 && this.attendedSkip > 0 && (r = Math.max(r - i[0].line, 0), a = 1), this.propsSkip - a <= 0 && r > n) {
        this.translate(0), this.changePage(0, t), this.container.scrollTop = 0;
        return;
      }
      if (r > n && (r = n), r !== this.tableTranslate) {
        this.translate(Math.max(0, r - s));
        const c = Math.max(0, this.propsSkip - a - o);
        this.changePage(c, t);
      }
    }
  }
  localScrollDown(t) {
    if (!this.container)
      return;
    const i = this.rowHeights, n = this.container.scrollTop;
    let r = this.tableTranslate, a = 0;
    const {
      topItemsCount: o,
      topItemsHeight: s,
      itemsNeededOnScreen: l
    } = this.topItems(i, !!this.topCacheCount);
    for (; a < i.length - this.topCacheCount && !(r + i[a].line + i[a].acc > n); )
      r += i[a].line + i[a].acc, a++;
    o > this.propsSkip + a || i.length <= l || (a >= i.length - this.topCacheCount && this.propsSkip + a >= this.total ? (this.translate(r - s), this.changePage(this.total - 1 - o, t)) : r !== this.tableTranslate && this.propsSkip + a - o !== this.propsSkip && (this.translate(r - s), this.changePage(this.propsSkip + a - o, t)));
  }
  scrollNonStrict(t) {
    const i = this.total * this.prevScrollPos / this.containerHeight;
    let n = Math.floor(i);
    n >= this.total && (n = this.total - 1);
    const r = Math.min(i - n, 1);
    let a = 0;
    const o = n - this.propsSkip, s = this.rowHeights;
    o >= 0 && o <= 1 ? a = -((s[0].line + s[0].acc) * r) : o === -1 && (a = -((s[s.length - 1].line + s[s.length - 1].acc) * r));
    const {
      topItemsCount: l,
      topItemsHeight: d,
      itemsNeededOnScreen: c
    } = this.topItems(s, !!this.topCacheCount), h = Math.max(
      0,
      a - d - this.horizontalScrollbarHeight() + this.containerHeight * i / this.total
    );
    this.prevScrollPos < h && s.length <= c || (this.translate(h), this.changePage(n - l, t));
  }
  scrollHandler(t) {
    if (!this.scrollableVirtual)
      return;
    if (this.scrollSyncing || !this.container || !this.table) {
      this.scrollSyncing = !1;
      return;
    }
    const i = this.container.scrollTop, n = this.prevScrollPos;
    if (this.prevScrollPos = i, this.askedSkip !== void 0) {
      this.translate(this.containerHeight * this.askedSkip / this.total), this.changePage(this.askedSkip, t), this.prevScrollPos = i, this.askedSkip = void 0;
      return;
    }
    i - n < 0 && i > this.tableTranslate - this.table.scrollHeight / 10 ? this.localScrollUp(t) : i - n > 0 && i < this.tableTranslate + this.table.scrollHeight * 2 / 3 ? this.localScrollDown(t) : this.scrollNonStrict(t), this.prevScrollPos = i;
  }
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
let eb = class {
  constructor(t = 0, i, n, r) {
    this.total = t, this.offsets = [], this.heights = [];
    let a = 0;
    for (let o = 0; o < t; o++) {
      this.offsets.push(a);
      const s = r && r[o].expanded && r[o].rowType === "data" ? n : i;
      a += s, this.heights.push(s);
    }
  }
  height(t) {
    return this.heights[t];
  }
  index(t) {
    if (t < 0)
      return;
    const i = this.offsets.reduce(
      (n, r, a) => {
        if (n !== void 0)
          return n;
        if (r === t)
          return a;
        if (r > t)
          return a - 1;
      },
      void 0
    );
    return i === void 0 ? this.total - 1 : i;
  }
  offset(t) {
    return this.offsets[t];
  }
  totalHeight() {
    const t = this.offsets[this.offsets.length - 1], i = this.heights[this.heights.length - 1];
    return t + i;
  }
};
class tb {
  constructor(t) {
    this.table = null, this.containerHeight = 0, this.topCacheCount = 0, this.attendedSkip = 0, this.propsSkip = 0, this.total = 0, this.scrollableVirtual = !1, this.realSkip = 0, this.pageSize = 0, this.PageChange = null, this.fixedScroll = !1, this.askedSkip = void 0, this.tableTransform = "", this.scrollSyncing = !1, this.lastLoaded = 0, this.firstLoaded = 0, this.lastScrollTop = 0, this.firstLoaded = this.pageSize, this.lastLoaded = this.realSkip + this.pageSize, this.scrollHandler = this.scrollHandler.bind(this);
  }
  get container() {
    return this.containerRef;
  }
  translate(t) {
    this.scrollableVirtual && this.table && (this.table.style.transform = "translateY(" + t + "px)");
  }
  changePage(t, i) {
    this.PageChange && this.PageChange({ skip: Math.max(0, t), take: this.pageSize }, i);
  }
  reset() {
    this.scrollSyncing = !0, !this.fixedScroll && (this.container && (this.container.scrollTop = 0), this.translate(0));
  }
  scrollHandler(t) {
    if (!this.scrollableVirtual || !this.container || !this.table || !this.rowHeightService || !this.containerRef)
      return;
    if (this.scrollSyncing) {
      this.scrollSyncing = !1;
      return;
    }
    const i = this.container.scrollTop, n = this.lastScrollTop >= i, r = !n;
    this.lastScrollTop = i;
    let a = this.rowHeightService.index(i), o = this.rowHeightService.offset(a);
    const { offsetHeight: s } = this.containerRef, l = this.rowHeightService.index(i + s);
    if (r && l >= this.lastLoaded && this.lastLoaded < this.total) {
      const d = a + this.pageSize - this.total;
      d > 0 && (a = a - d, o = this.rowHeightService.offset(a)), this.firstLoaded = a, this.translate(o);
      const c = this.firstLoaded + this.pageSize;
      this.lastLoaded = Math.min(c, this.total), this.changePage(this.firstLoaded, t);
    } else if (n && a < this.firstLoaded) {
      const d = Math.floor(this.pageSize * 0.3);
      this.firstLoaded = Math.max(a - d, 0), this.translate(this.rowHeightService.offset(this.firstLoaded)), this.lastLoaded = Math.min(this.firstLoaded + this.pageSize, this.total), this.changePage(this.firstLoaded, t);
    }
  }
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
class ib {
  constructor(t) {
    this.resizable = !1, this.isRtl = !1, this.setIsRtl = (i) => {
      this.isRtl = i;
    }, this.onResize = t, this.dragHandler = this.dragHandler.bind(this);
  }
  dragHandler(t, i, n, r) {
    const a = t.originalEvent;
    r || (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation());
    const o = n.parentElement;
    if (!o || !o.parentElement)
      return;
    const s = o.clientWidth;
    let l;
    if (this.isRtl ? (l = n.getBoundingClientRect().right - n.offsetWidth / 2 - t.clientX, l += s) : l = s + t.clientX - n.getBoundingClientRect().left - n.offsetWidth / 2, !r && Math.abs(l - s) < 1)
      return;
    this.fixateInitialWidths(o.parentElement.clientWidth), this.setWidths(i, Math.floor(l) / s);
    const d = this.columns.filter((c) => !c.children.length).indexOf(i);
    this.onResize(d, s, l, a, r);
  }
  fixateInitialWidths(t) {
    const i = this.columns.filter((o) => !o.children.length);
    let n = 0;
    const r = this.colGroupMain ? this.colGroupMain.children : [];
    for (let o = 0; o < r.length; o++)
      r[o].width ? t -= parseFloat(r[o].width) : n++;
    if (n === 0)
      return;
    const a = Math.floor(t / n);
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      s.width || (s.width = a, i[o].width = a.toString(), this.colGroupHeader && (this.colGroupHeader.children[o].width = a), this.colGroupFooter && (this.colGroupFooter.children[o].width = a));
    }
  }
  setWidths(t, i) {
    const n = this.columns.indexOf(t), r = [];
    let a = t.children.length;
    for (let o = n + 1; a > 0 && o < this.columns.length; o++) {
      const s = this.columns[o];
      s.children.length ? a += s.children.length : r.push(s), a--;
    }
    r.length === 0 && r.push(t), r.forEach((o) => {
      let s = o.width ? parseFloat(o.width.toString()) * i : 0;
      const l = o.minResizableWidth === void 0 ? 10 : o.minResizableWidth;
      s < l && (s = l), o.width = s;
    }), this.updateColElements(r);
  }
  updateColElements(t) {
    const i = this.columns.filter((r) => !r.children.length);
    let n = 1e-10;
    for (let r = 0; r < t.length; r++) {
      const a = i.indexOf(t[r]), o = parseFloat((t[r].width || 0).toString());
      n += o - Math.floor(o);
      const s = Math.floor(o) + Math.floor(n);
      n -= Math.floor(n), this.colGroupMain && (this.colGroupMain.children[a].width = s + "px"), this.colGroupHeader && (this.colGroupHeader.children[a].width = s + "px"), this.colGroupFooter && this.colGroupFooter.children[a] && (this.colGroupFooter.children[a].width = s + "px");
    }
  }
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
class nb {
  constructor(t, i, n) {
    this.reorderable = !1, this.groupable = !1, this.dropElementClue = null, this.dragElementClue = null, this.startColumn = -1, this.startGroup = -1, this.currentColumn = -1, this.currentGroup = -1, this.groupPanelDivElement = null, this.refGroupPanelDiv = (r) => {
      this.groupPanelDivElement = r.children ? r.children[0] : r;
    }, this.refDropElementClue = (r) => {
      this.dropElementClue = r, this.dropElementClue && se && document.body.appendChild(this.dropElementClue.$el);
    }, this.refDragElementClue = (r) => {
      this.dragElementClue = r, this.dragElementClue && se && document.body.appendChild(this.dragElementClue.$el);
    }, this.pressHandler = (r, a) => {
      r.isTouch || r.originalEvent.preventDefault();
      const o = this.getColumnIndex(r, a);
      if (this.startGroup = this.getGroupIndex(r), o >= 0) {
        const s = this.columns[o];
        (s.reorderable && this.reorderable || s.groupable && this.groupable) && (this.startColumn = o);
      }
    }, this.dragHandler = (r, a) => {
      if (r.isTouch || r.originalEvent.preventDefault(), r.originalEvent.stopPropagation(), this.startColumn === -1 && this.startGroup === -1)
        return;
      this.currentColumn = this.getColumnIndex(r, a);
      const o = this.groupPanelDivElement && this.groupPanelDivElement.children;
      this.currentGroup = this.isTargetGroupingContainer(r) ? o && o.length ? o.length : 0 : this.getGroupIndex(r);
      const s = !this.isValid();
      s && (this.currentColumn = -1, this.currentGroup = -1);
      const l = this.currentColumn >= 0 ? a.children[this.columns[this.currentColumn].index] : this.isTargetGroupingContainer(r) ? r.originalEvent.target : this.groupPanelDivElement && this.groupPanelDivElement.children[this.currentGroup];
      this.updateDragElementClue(r, a, l, s), this.updateDropElementClue(r, a, l, s);
    }, this.releaseHandler = (r) => {
      const a = this.startColumn, o = this.currentColumn, s = this.startGroup, l = this.currentGroup;
      this.dropElementClue && (this.dropElementClue.visible = !1), this.dragElementClue && (this.dragElementClue.visible = !1);
      const d = this.isValid();
      this.startColumn = this.startGroup = this.currentColumn = this.currentGroup = -1, d && (a >= 0 && o >= 0 ? this.columnReorder(a, o, r.originalEvent) : s >= 0 && l >= 0 ? this.groupReorder(s, l, r.originalEvent) : a >= 0 && l >= 0 && this.columnToGroup(a, l, r.originalEvent));
    }, this.columnReorder = t, this.groupReorder = i, this.columnToGroup = n;
  }
  getColumnIndex(t, i) {
    if (!i || i.parentElement === this.groupPanelDivElement)
      return -1;
    const n = ws(t, i);
    if (n === -1)
      return -1;
    for (let r = 0; r < i.parentNode.children.length; r++)
      if (i.parentNode.children[r] === i)
        return this.columns.findIndex((a) => a.index === n && a.depth === r);
    return -1;
  }
  isTargetGroupingContainer(t) {
    const i = t.originalEvent.target;
    return i.className.indexOf && i.className.indexOf("k-grouping-drop-container") !== -1;
  }
  getGroupIndex(t) {
    return ws(t, this.groupPanelDivElement);
  }
  isValid() {
    return this.startGroup >= 0 ? this.currentGroup >= 0 && this.currentGroup !== this.startGroup : this.startColumn === -1 ? !1 : this.currentGroup >= 0 ? this.columns[this.startColumn].groupable === !0 && this.groupable === !0 : this.reorderable === !0 && this.currentColumn >= 0 && this.currentColumn !== this.startColumn && this.columns[this.startColumn].reorderable === !0 && this.columns[this.currentColumn].parentIndex === this.columns[this.startColumn].parentIndex;
  }
  updateDragElementClue(t, i, n, r) {
    if (!this.dragElementClue)
      return;
    const a = this.startColumn >= 0 ? i.children[this.columns[this.startColumn].index].innerText : i.innerText;
    this.dragElementClue.visible = !0, this.dragElementClue.top = t.pageY + 10, this.dragElementClue.left = t.pageX, this.dragElementClue.innerText = a, this.dragElementClue.status = r || !n ? "cancel" : "plus";
  }
  updateDropElementClue(t, i, n, r) {
    if (!this.dropElementClue)
      return;
    if (r || !n) {
      this.dropElementClue.visible = !1;
      return;
    }
    const a = n.getBoundingClientRect(), o = (n.closest(".k-grouping-header") || n).getBoundingClientRect();
    let s = a.left + t.pageX - t.clientX - 6;
    !this.isTargetGroupingContainer(t) && (this.currentColumn > this.startColumn || this.currentGroup > this.startGroup && this.startGroup !== -1) && (s += a.width);
    const l = o.top + t.pageY - t.clientY;
    this.dropElementClue.visible = !0, this.dropElementClue.top = l, this.dropElementClue.left = s, this.dropElementClue.height = this.currentColumn >= 0 ? i.clientHeight : o.height;
  }
}
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const rb = /* @__PURE__ */ k({
  data() {
    return {
      visible: !1,
      top: 0,
      left: 0,
      innerText: "",
      status: "cancel"
    };
  },
  render() {
    return this.visible && u("div", {
      class: "k-header k-drag-clue",
      style: {
        display: "block",
        position: "absolute",
        zIndex: 2e4,
        padding: "8px 12px",
        top: this.top + "px",
        left: this.left + "px"
      }
    }, [u(ie, {
      name: this.status,
      class: "k-drag-status",
      icon: this.status === "cancel" ? gd : Js
    }, null), this.innerText]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ab = /* @__PURE__ */ k({
  data() {
    return {
      height: 0,
      visible: !1,
      left: 0,
      top: 0
    };
  },
  render() {
    return this.visible && u("div", {
      class: "k-grouping-dropclue",
      style: {
        zIndex: 1e4,
        display: "block",
        top: this.top + "px",
        left: this.left + "px",
        height: this.height + "px"
      }
    }, null);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const sb = /* @__PURE__ */ k({
  name: "GridCell",
  inheritAttrs: !1,
  emits: {
    cellclick: null,
    cellkeydown: null
  },
  props: {
    id: String,
    field: String,
    dataItem: Object,
    format: String,
    readFormat: String,
    className: String,
    colSpan: Number,
    columnIndex: Number,
    columnsCount: Number,
    dataIndex: Number,
    rowType: String,
    level: Number,
    expanded: Boolean,
    type: String,
    editor: String,
    isSelected: Boolean,
    isHighlighted: Boolean,
    ariaColumnIndex: Number,
    render: [String, Function, Object],
    isRtl: Boolean,
    onEdit: Function,
    onSave: Function,
    onRemove: Function,
    onCancel: Function,
    onChange: Function,
    onSelectionchange: Function
  },
  inject: {
    kendoIntlService: {
      default: null
    },
    getKeyboardNavigationAttributes: {
      default: ke
    }
  },
  methods: {
    triggerClick() {
      this.$emit("cellclick", {
        dataItem: this.$props.dataItem,
        field: this.$props.field
      });
    },
    triggerKeydown(e) {
      this.$emit("cellkeydown", {
        event: e,
        dataItem: this.$props.dataItem,
        field: this.$props.field
      });
    },
    triggerEdit(e) {
      this.$emit("edit", e);
    },
    triggerAdd(e) {
      this.$emit("add", e);
    },
    triggerCancel(e) {
      this.$emit("cancel", e);
    },
    triggerSave(e) {
      this.$emit("save", e);
    },
    triggerRemove(e) {
      this.$emit("remove", e);
    }
  },
  created() {
    this._intl = xt(this);
  },
  computed: {
    tdClass() {
      const {
        className: e,
        isHighlighted: t
      } = this.$props;
      return {
        "k-table-td": !0,
        "k-highlighted": t,
        [e]: e
      };
    }
  },
  setup() {
    return {
      kendoIntlService: H("kendoIntlService", {})
    };
  },
  render() {
    let e = null;
    const t = this.getKeyboardNavigationAttributes(this.$props.id);
    if (this.$props.rowType === "groupFooter")
      e = u("td", {
        class: this.tdClass
      }, null);
    else if (this.$props.field !== void 0 && this.$props.rowType !== "groupHeader") {
      const i = mt(this.$props.field, this.$props.dataItem);
      let n = "";
      i != null && (n = this.$props.format ? this.$props.type ? this._intl.format(this.$props.format, a0[this.$props.type](i, this._intl, this.$props.readFormat)) : this._intl.format(this.$props.format, i) : i.toString()), e = u("td", {
        style: this.$attrs.style,
        colspan: this.$props.colSpan,
        class: this.tdClass,
        onKeydown: this.triggerKeydown,
        onClick: this.triggerClick,
        role: "gridcell",
        "aria-colindex": this.$props.ariaColumnIndex,
        "aria-selected": this.$props.isSelected,
        "data-grid-col-index": this.$props.columnIndex,
        tabindex: t.tabIndex,
        "data-keyboardnavlevel": t[be],
        "data-keyboardnavid": t[Ce]
      }, [n]);
    }
    return _.call(this, {
      h: M,
      template: this.$props.render,
      defaultRendering: e,
      additionalProps: this.$props,
      additionalListeners: {
        click: this.triggerClick,
        keydown: this.triggerKeydown,
        edit: this.triggerEdit,
        add: this.triggerAdd,
        cancel: this.triggerCancel,
        save: this.triggerSave,
        remove: this.triggerRemove
      }
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Ms = /* @__PURE__ */ k({
  name: "KendoGridGroupCell",
  inheritAttrs: !1,
  props: {
    id: String,
    field: String,
    dataItem: Object,
    format: String,
    type: String,
    colSpan: Number,
    className: String,
    columnIndex: Number,
    columnsCount: Number,
    rowType: String,
    level: Number,
    expanded: Boolean,
    editor: String,
    dataIndex: Number,
    isSelected: Boolean,
    isRtl: Boolean,
    ariaColumnIndex: Number,
    render: [String, Function, Object]
  },
  emits: {
    change: null,
    cellkeydown: null
  },
  inject: {
    kendoIntlService: {
      default: null
    },
    kendoLocalizationService: {
      default: null
    },
    getKeyboardNavigationAttributes: {
      default: ke
    }
  },
  computed: {
    tdClass() {
      const {
        className: e
      } = this.$props;
      return {
        "k-table-td": !0,
        [e]: e
      };
    }
  },
  methods: {
    triggerKeydown(e, t) {
      this.$emit("cellkeydown", {
        event: e,
        dataItem: this.$props.dataItem,
        dataIndex: this.$props.dataIndex,
        field: this.$props.field,
        expanded: this.$props.expanded
      }), !e.defaultPrevented && e.keyCode === O.enter && (e.preventDefault(), this.$emit("change", {
        dataItem: this.$props.dataItem,
        dataIndex: this.$props.dataIndex,
        event: e,
        level: this.$props.level,
        field: void 0,
        value: !t
      }));
    },
    clickHandler(e, t, i) {
      e.preventDefault(), this.$emit("change", {
        dataItem: t,
        dataIndex: this.$props.dataIndex,
        event: e,
        level: this.$props.level,
        field: void 0,
        value: !i
      });
    }
  },
  render() {
    let e = null;
    const {
      columnIndex: t,
      level: i,
      columnsCount: n,
      rowType: r,
      dataItem: a,
      field: o,
      expanded: s,
      render: l
    } = this.$props, d = this.getKeyboardNavigationAttributes(this.$props.id), c = Z(this).toLanguageString(_r, te[_r]), h = Z(this).toLanguageString(zr, te[zr]);
    return t === void 0 || i === void 0 || t < i || n === void 0 || r !== "groupHeader" || a[o] === void 0 ? e = u("td", {
      style: this.$attrs.style,
      key: "g" + t,
      class: "k-table-td k-group-cell"
    }, null) : t <= i && (e = u("td", {
      style: this.$attrs.style,
      onKeydown: (p) => {
        this.triggerKeydown(p, s);
      },
      key: "g-colspan",
      class: this.tdClass,
      colspan: n - t,
      role: "gridcell",
      "aria-colindex": this.$props.ariaColumnIndex,
      "aria-selected": this.$props.isSelected,
      "aria-expanded": s,
      "data-grid-col-index": this.$props.columnIndex,
      tabindex: d.tabIndex,
      "data-keyboardnavlevel": d[be],
      "data-keyboardnavid": d[Ce]
    }, [u("p", {
      class: "k-reset"
    }, [u("a", {
      onClick: (p) => {
        this.clickHandler(p, a, s);
      },
      href: "#",
      tabindex: -1,
      title: s ? c : h,
      "aria-label": s ? c : h
    }, [u(ie, {
      name: s ? "caret-alt-down" : this.isRtl ? "caret-alt-left" : "caret-alt-right",
      icon: s ? un : this.isRtl ? ir : tr
    }, null)]), a[o] ? a[o].toString() : ""])])), _.call(this, {
      h: M,
      template: l,
      defaultRendering: e,
      additionalProps: this.$props,
      additionalListeners: {
        keydown: this.triggerKeydown,
        click: this.clickHandler
      }
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ob = /* @__PURE__ */ k({
  name: "KendoGridRow",
  props: {
    rowType: String,
    dataItem: Object,
    isAltRow: Boolean,
    isHidden: Boolean,
    isHighlighted: Boolean,
    onClick: Function,
    isInEdit: Boolean,
    isSelected: Boolean,
    selectedField: String,
    rowHeight: Number,
    ariaRowIndex: Number,
    dataIndex: Number,
    render: [String, Function, Object],
    onRowclick: Function,
    onRowdblclick: Function
  },
  methods: {
    handleClick(e) {
      this.$emit("rowclick", e);
    },
    handleDoubleClick(e) {
      this.$emit("rowdblclick", e);
    }
  },
  computed: {
    trClass() {
      const {
        rowType: e,
        isAltRow: t,
        isInEdit: i,
        selectedField: n,
        isHighlighted: r
      } = this.$props;
      return {
        "k-table-row": !0,
        "k-selected": n !== void 0 && mt(n, this.$props.dataItem),
        "k-highlighted": r,
        "k-table-group-row": e === "groupHeader",
        "k-grouping-row": e === "groupHeader",
        "k-group-footer": e === "groupFooter",
        "k-master-row": e !== "groupHeader" && e !== "groupFooter",
        "k-table-alt-row": t,
        "k-edit-row": i
      };
    }
  },
  render() {
    const e = B(this), t = u("tr", {
      onClick: this.handleClick,
      onDblclick: this.handleDoubleClick,
      class: this.trClass,
      style: {
        height: this.$props.rowHeight ? this.$props.rowHeight + "px" : "",
        visibility: this.$props.isHidden ? "hidden" : ""
      },
      role: "row",
      "aria-rowindex": this.$props.ariaRowIndex,
      "data-grid-row-index": this.$props.rowType === "data" ? this.$props.dataIndex : void 0
    }, [e]);
    return _.call(this, {
      h: M,
      template: this.$props.render,
      defaultRendering: t,
      additionalProps: this.$props,
      additionalListeners: {
        click: this.handleClick
      },
      defaultSlots: e,
      swapDefaultSlots: !0
    });
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const lb = /* @__PURE__ */ k({
  props: {
    field: String,
    title: String,
    selectionValue: Boolean,
    render: [Object, Function, String]
  },
  created() {
    this.inputId = me();
  },
  inject: {
    kendoLocalizationService: {
      default: null
    }
  },
  methods: {
    changeHandle(e) {
      this.$emit("selectionchange", {
        field: this.$props.field,
        event: e
      });
    }
  },
  render() {
    const e = this.$props.render, t = Z(this).toLanguageString(br, te[br]), i = u("input", {
      checked: this.$props.selectionValue,
      id: this.inputId,
      type: "checkbox",
      class: "k-checkbox k-checkbox-md k-rounded-md",
      "aria-label": t,
      onChange: this.changeHandle
    }, null), n = _.call(this, {
      h: M,
      template: e,
      defaultRendering: i,
      additionalProps: {
        ...this.$props,
        selectAll: t
      },
      additionalListeners: {
        selectionchange: this.changeHandle
      }
    }), r = e ? n : u("span", {
      class: "k-checkbox-wrap"
    }, [n]);
    return u("span", {
      class: "k-link"
    }, [u("span", {
      class: "k-column-title"
    }, [r])]);
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const ub = /* @__PURE__ */ k({
  name: "GridNoRecords",
  inject: {
    kendoLocalizationService: {
      default: null
    }
  },
  setup() {
    return {
      kendoLocalizationService: H("kendoLocalizationService", {})
    };
  },
  render() {
    const e = B(this), t = Z(this).toLanguageString(vr, te[vr]);
    return e ? u("div", null, [e]) : t;
  }
});
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const Yn = {
  name: "@progress/kendo-vue-grid",
  productName: "Kendo UI for Vue",
  productCode: "KENDOUIVUE",
  productCodes: ["KENDOUIVUE"],
  publishDate: 1763478859,
  version: "7.0.2",
  licensingDocsUrl: "https://www.telerik.com/kendo-vue-ui/my-license/"
};
/**
 * @license
 *-------------------------------------------------------------------------------------------
 * Copyright © 2025 Progress Software Corporation. All rights reserved.
 * Licensed under commercial license. See LICENSE.md in the package root for more information
 *-------------------------------------------------------------------------------------------
 */
const db = /* @__PURE__ */ k({
  name: "KendoGrid",
  props: {
    topCacheCount: {
      type: Number,
      default: 0
    },
    collapsedGroups: {
      type: Array,
      default: function() {
        return [];
      }
    },
    uniqueField: String,
    totalGroupedHeight: Number,
    allGroupedItems: Object,
    alternatePerGroup: Boolean,
    columns: Array,
    columnVirtualization: Boolean,
    dataItems: [Array, Object],
    sortable: [Boolean, Object],
    sort: Array,
    filterable: Boolean,
    filterOperators: Object,
    filterCellRender: [String, Function, Object],
    headerCellRender: [String, Function, Object],
    loader: [String, Function, Object, Boolean],
    filter: Object,
    highlight: Object,
    pageable: [Boolean, Object],
    pageSize: Number,
    total: Number,
    skip: Number,
    take: Number,
    expandField: String,
    expandColumn: Object,
    selectedField: String,
    cellRender: [String, Function, Object],
    rowRender: [String, Function, Object],
    resizable: Boolean,
    reorderable: Boolean,
    group: Array,
    groupable: [Boolean, Object],
    editField: String,
    rowClass: Function,
    scrollable: {
      type: String,
      default: "scrollable"
    },
    size: {
      type: String,
      default: "medium",
      validator: function(e) {
        return ["small", "medium"].includes(e);
      }
    },
    pager: [String, Function, Object],
    rowHeight: Number,
    detailRowHeight: Number,
    detail: [String, Function, Object],
    columnMenu: [Boolean, String, Function, Object],
    columnMenuAnimate: {
      type: [Boolean, Object],
      default: function() {
        return !0;
      }
    },
    columnMenuIcon: Yr,
    dataItemKey: String,
    navigatable: {
      type: Boolean,
      default: !1
    },
    onItemchange: Function,
    onExpandchange: Function,
    onDatastatechange: Function,
    onPagechange: Function,
    onSortchange: Function,
    onFilterchange: Function,
    onGroupchange: Function
  },
  data() {
    return {
      isRtl: !1,
      context: void 0,
      navigation: void 0,
      showLicenseWatermark: !1,
      licenseMessage: void 0,
      notHiddenColumns: []
    };
  },
  watch: {
    skip: function(e, t) {
      this.onSkipChanged(e, t);
    },
    total: function(e, t) {
      this.onTotalChanged(e, t);
    },
    rowHeight: function(e, t) {
      this.onRowHeightChanged(e, t);
    }
  },
  created() {
    Ve(Yn), this.showLicenseWatermark = ad(Yn), this.licenseMessage = sd(Yn), this.initialHeight = null, this._columns = [];
    const e = this.currentGroupable, t = this.getVirtualScroll();
    this.vs = new t(e || this.$props.rowHeight === void 0 || this.$props.rowHeight === 0, this.$props.topCacheCount), this.dragLogic = new nb(this.columnReorder.bind(this), this.groupReorder.bind(this), this.columnToGroup.bind(this)), this.columnResize = new ib(this.onResize.bind(this)), this._columnsMap = [[]], this._header = null, this._footer = null, this.forceUpdateTimeout = void 0, this._gridId = me(), this._gridRoleElementId = me(), this.slicedCurrentData = void 0, this._prevTotal = void 0;
  },
  mounted() {
    this.setRefs();
    const e = tn(this._element);
    this._prevTotal = this.$props.total, this.isRtl = e, this.initialHeight = this._element.style ? this._element.style.height : null, this.resizeObserver = se && window.ResizeObserver && new ResizeObserver(this.calculateMedia), document != null && document.body && this.resizeObserver && this.resizeObserver.observe(document.body);
  },
  updated() {
    this.setRefs();
    const e = tn(this._element);
    this.isRtl = e, this._prevTotal = this.$props.total, this.vs.tableTransform && this.vs.table && (this.vs.table.style.transform = this.vs.tableTransform, this.vs.tableTransform = "");
  },
  unmounted() {
    this.gridUnmounted();
  },
  computed: {
    nonscrollableWrapperClass() {
      const {
        size: e
      } = this.$props;
      return {
        "k-grid": !0,
        "k-grid-md": !e,
        [`k-grid-${ye.sizeMap[e] || e}`]: e
      };
    },
    scrollableWrapperClass() {
      const {
        scrollable: e
      } = this.$props;
      return {
        ...this.nonscrollableWrapperClass,
        "k-grid-virtual": e === "virtual"
      };
    },
    gridTableClass() {
      const {
        size: e
      } = this.$props;
      return {
        "k-table": !0,
        "k-grid-table": !0,
        "k-grid-md": !e,
        [`k-table-${ye.sizeMap[e] || e}`]: e
      };
    },
    getCorrectHeight() {
      return this.$props.scrollable === "virtual" ? this.initialHeight || "450px" : null;
    },
    currentGroupable() {
      return this.$props.groupable === !0 && this.$props.group && this.$props.group.length || St(this.$props.groupable) && this.$props.groupable.enabled !== !1;
    },
    computedCollapsed() {
      let e = [];
      if (this.$props.group)
        for (let t = 0; t < this.$props.group.length; t++)
          this.$props.collapsedGroups[t] ? e.push(this.$props.collapsedGroups[t]) : e.push([]);
      return e;
    },
    // Calculates the value of the ariaRowcount attribute.
    getAriaRowCount() {
      const e = this.$props.dataItems, t = this.$props.total !== void 0 && this.$props.total || e != null && e.total !== void 0 && e.total || e != null && e.length !== void 0 && e.length || 0;
      return this.$props.detail ? this._columnsMap.length + (this.$props.filterable ? 1 : 0) + t * 2 + (this._columns.some((i) => !!i.footerCell) ? 1 : 0) : !this.$props.pageable && this.$props.scrollable === "scrollable" ? void 0 : this.$props.groupable ? -1 : this._columnsMap.length + (this.$props.filterable ? 1 : 0) + t + (this._columns.some((i) => !!i.footerCell) ? 1 : 0);
    },
    // Calculates the value of the ariaColcount attribute.
    // Based on the result of this method the ariaColIndex is rendered or not in the HeaderRow TH elements
    getAriaColCount() {
      const e = this.$props.columns, t = this.$props.columnVirtualization, i = e && e.filter((n) => n.hidden !== void 0).length !== 0;
      if (t || i)
        return e.length !== 0 ? e.length : -1;
    }
  },
  methods: {
    getColumnsEssentialProps(e) {
      return e && JSON.stringify(e.map((t) => ({
        id: t.id,
        field: t.field,
        title: t.title,
        children: t.children
      })));
    },
    calculateMedia() {
      const e = this.filterHiddenColumns(this.$props.columns || []);
      this.getColumnsEssentialProps(this.notHiddenColumns) !== this.getColumnsEssentialProps(e) && this.$forceUpdate();
    },
    filterHiddenColumns(e) {
      if (!e || e.length === 0)
        return e;
      const t = (i) => ({
        ...i,
        children: i.children && i.children.length > 0 ? this.filterHiddenColumns(i.children) : i.children
      });
      return [...e].filter((i) => !i.hidden).filter((i) => se && i && i.media ? window.matchMedia(i.media).matches : i).map((i) => t(i));
    },
    /**
     * A getter of the current columns. Gets the current column width or current columns,
     * or any other [`GridColumnProps`]({% slug api_grid_gridcolumnprops %}) for each defined column.
     * Can be used on each Grid instance. To obtain the instance of the rendered Grid, use the `ref`
     * callback. The following example demonstrates how to reorder the columns by dragging their handlers
     * and check the properties afterwards. You can check the result in the browser console.
     */
    getColumns() {
      const e = this._columns.filter((i) => i.declarationIndex >= 0 && i.parentIndex === -1), t = (i) => (i.sort((n, r) => n.declarationIndex - r.declarationIndex), i.map((n) => {
        const {
          declarationIndex: r,
          parentIndex: a,
          depth: o,
          colSpan: s,
          rowSpan: l,
          index: d,
          kFirst: c,
          children: h,
          ...p
        } = n;
        return h.length ? {
          children: t(h),
          ...p
        } : p;
      }));
      return t(e);
    },
    setRefs() {
      let e = "$el";
      const t = J(this, "gridNav");
      t && (this._element = t[e]);
      const i = J(this, "groupPanelDiv");
      if (i) {
        let a = i[e] || null;
        this.dragLogic.refGroupPanelDiv(a);
      }
      const n = J(this, "dropElementClue"), r = J(this, "dragElementClue");
      this.dragLogic.refDropElementClue(n), this.dragLogic.refDragElementClue(r), this.columnResize.colGroupMain = J(this, "colGroup"), this._header = J(this, "header"), this._footer = J(this, "footer"), this.vs.containerRef = J(this, "scrollContainer"), this.vs.table = J(this, "scrollTable"), this.resetTableWidth(), this.vs.tableBodyRef = J(this, "scrollTableBody");
    },
    gridUnmounted() {
      clearTimeout(this.forceUpdateTimeout), this.columnResize.columns = [], this.dragLogic.columns = [], this.dragLogic && this.dragLogic.dragElementClue && (this.dragLogic.dragElementClue.$el.remove(), this.dragLogic.dropElementClue.$el.remove()), this.currentData = [], this._columns = [], document != null && document.body && this.resizeObserver && this.resizeObserver.disconnect();
    },
    resetVirtual() {
      this.vs.PageChange = this.pageChangeHandler, this.vs.realSkip = this.$props.skip || 0, this.vs.pageSize = (this.$props.take !== void 0 ? this.$props.take : this.$props.pageSize) || 0, this.vs.scrollableVirtual = this.$props.scrollable === "virtual", this.vs.propsSkip = (this.$props.skip || 0) + (this.$props.scrollable === "virtual" ? this.vs.topCacheCount + (this.vs.attendedSkip - (this.$props.skip || 0)) : 0);
    },
    getVirtualScroll() {
      return Un;
    },
    isAllData() {
      const {
        dataItems: e,
        total: t
      } = this.$props;
      return Array.isArray(e) ? e.length === t : e ? t === e.total : !1;
    },
    initializeVirtualization(e) {
      if ((this.$props.total !== this._prevTotal || this.$props.scrollable === "virtual" !== this.vs.scrollableVirtual) && this.vs.reset(), this.resetVirtual(), this.vs.total = e, this.$props.rowHeight !== void 0 && this.$props.rowHeight > 0 && !this.currentGroupable)
        this.vs.containerHeight = Math.min(1533915, this.$props.rowHeight * (e || 0));
      else if (this.$props.totalGroupedHeight)
        this.vs.containerHeight = Math.min(1533915, this.$props.totalGroupedHeight);
      else if (this.$props.allGroupedItems && this.$props.allGroupedItems.data) {
        const t = this.totalGroupedRows(Ss(this.$props.allGroupedItems, this.computedCollapsed, this.$props.uniqueField).data);
        this.vs.containerHeight = Math.min(1533915, this.$props.rowHeight * t);
      } else
        this.vs.containerHeight = 1533915;
      if (this.slicedCurrentData = void 0, this.vs instanceof tb) {
        const {
          rowHeight: t = 0,
          detail: i,
          expandField: n
        } = this.$props;
        let {
          detailRowHeight: r = 0
        } = this.$props;
        r = i && n ? r : t, this.isAllData() ? (this.vs.total = this.currentData.length, this.slicedCurrentData = this.currentData.slice(this.vs.realSkip, this.vs.realSkip + this.vs.pageSize), this.vs.rowHeightService = this.rowHeightService(this.vs, this.currentData.length, t, r, this.currentData)) : this.vs.rowHeightService = new eb(e, t, r);
        const a = this.vs.rowHeightService.totalHeight();
        this.vs.containerHeight = s0 ? Math.min(o0, a) : a;
      }
    },
    onSkipChanged(e, t) {
      Math.max(0, this.vs.attendedSkip) !== e && e !== void 0 && (this.vs.attendedSkip = e, this.vs.propsSkip = (e || 0) + (this.$props.scrollable === "virtual" ? this.vs.topCacheCount + (this.vs.attendedSkip - (e || 0)) : 0));
    },
    onTotalChanged(e, t) {
      const i = this.currentGroupable;
      this.vs.reset(), this.vs = new Un(i || this.$props.rowHeight === void 0 || this.$props.rowHeight === 0, this.$props.topCacheCount), this.resetVirtual(), this.setRefs();
    },
    onRowHeightChanged(e, t) {
      const i = this.currentGroupable;
      this.vs.reset(), this.vs = new Un(i || this.$props.rowHeight === void 0 || this.$props.rowHeight === 0, this.$props.topCacheCount), this.resetVirtual(), this.setRefs();
    },
    scrollHandler(e) {
      clearTimeout(this.forceUpdateTimeout), this.$props.columnVirtualization && !this.vs.scrollableVirtual && (this.forceUpdateTimeout = setTimeout(() => {
        this.$forceUpdate();
      }, 0)), this._header && this._header.setScrollLeft(e.currentTarget.scrollLeft), this._footer && this._footer.setScrollLeft(e.currentTarget.scrollLeft), this.vs && this.vs.scrollHandler(e), this.$emit("scroll", e);
    },
    rowClick(e, t) {
      e.target.type !== "checkbox" && this.$emit("rowclick", {
        dataItem: t.dataItem,
        ...this.getArguments(e)
      });
    },
    rowDoubleClick(e, t) {
      e.target.type !== "checkbox" && this.$emit("rowdblclick", {
        dataItem: t.dataItem,
        ...this.getArguments(e)
      });
    },
    loopGroupedItems(e, t, i = 0, n = null) {
      return e.forEach((r) => {
        !n && t(r, i) && (n = r), r.items && r.items.length && !n && (n = this.loopGroupedItems(r.items, t, i + 1, n));
      }), n;
    },
    updateGroupCollapsed(e) {
      let t = this.computedCollapsed, i = t[e.level];
      const n = this.$props.uniqueField, r = function(s, l) {
        return s.value === e.dataItem.value && l === e.level;
      }, a = this.allGroupedItems ? this.loopGroupedItems(this.allGroupedItems.data, r, 0, null) : e.dataItem, o = on(a || e.dataItem, n);
      if (e.value) {
        if (i && i.length) {
          const s = i.indexOf(o);
          s > -1 && i.splice(s, 1);
        }
      } else
        i ? i.includes(o) || i.push(o) : i = [o];
      return t;
    },
    itemChange(e) {
      const t = it.call(this, "itemchange");
      if (e.field === this.$props.expandField || (this.$props.group || this.$props.detail) && e.field === void 0) {
        it.call(this, "expandchange") && e.dataItem && this.$emit("expandchange", {
          ...this.getArguments(e.event),
          collapsedGroups: this.updateGroupCollapsed(e),
          dataItem: e.dataItem,
          value: e.value
        });
        return;
      }
      t && this.$emit("itemchange", {
        ...this.getArguments(e.event),
        dataItem: e.dataItem,
        field: e.field,
        value: e.value
      });
    },
    cellClickHandler(e) {
      this.$emit("cellclick", {
        dataItem: e.dataItem,
        field: e.field
      });
    },
    cellKeydownHandler(e) {
      this.$emit("cellkeydown", e);
    },
    editHandler(e) {
      this.$emit("edit", {
        dataItem: e
      });
    },
    removeHandler(e) {
      this.$emit("remove", {
        dataItem: e
      });
    },
    saveHandler(e) {
      this.$emit("save", {
        dataItem: e
      });
    },
    cancelHandler(e) {
      this.$emit("cancel", {
        dataItem: e
      });
    },
    selectionChangeHandler(e) {
      const {
        event: t,
        dataItem: i,
        dataIndex: n,
        columnIndex: r
      } = e;
      this.$emit("selectionchange", {
        ...this.getArguments(t.event),
        dataItem: i,
        startColIndex: r,
        endColIndex: r,
        startRowIndex: n,
        endRowIndex: n,
        dataItems: this.getLeafDataItems(),
        altKey: !1,
        ctrlKey: !1,
        shiftKey: !1,
        metaKey: !1,
        isDrag: !1,
        componentId: this._gridId,
        selectedField: this.$props.selectedField || ""
      });
    },
    onHeaderSelectionChangeHandler(e) {
      this.$emit("headerselectionchange", {
        field: e.field,
        event: e.event,
        target: this
      });
    },
    pageChangeHandler(e, t) {
      this.raiseDataEvent("pagechange", {
        page: e,
        event: t
      }, {
        skip: e.skip,
        take: e.take
      }, t);
    },
    sortChangeHandler(e, t) {
      this.raiseDataEvent("sortchange", {
        sort: e
      }, {
        sort: e
      }, t);
    },
    filterChangeHandler(e, t) {
      this.raiseDataEvent("filterchange", {
        filter: e
      }, {
        filter: e,
        skip: 0
      }, t);
    },
    groupChangeHandler(e, t) {
      this.raiseDataEvent("groupchange", {
        group: e
      }, {
        group: e,
        skip: 0
      }, t);
    },
    raiseDataEvent(e, t, i, n) {
      it.call(this, e) ? this.$emit(e, {
        ...this.getArguments(n),
        ...t
      }) : it.call(this, "datastatechange") && this.$emit("datastatechange", {
        ...this.getArguments(n),
        data: {
          ...this.getDataState(),
          ...i
        }
      });
    },
    columnReorder(e, t, i) {
      const n = this._columns[e].depth, r = (s) => {
        do
          s++;
        while (s < this._columns.length && this._columns[s].depth > n);
        return s;
      }, a = this._columns.splice(e, r(e) - e);
      this._columns.splice(e < t ? r(t - a.length) : t, 0, ...a), this._columns.filter((s) => s.declarationIndex >= 0).forEach((s, l) => s.orderIndex = l);
      const o = this.getColumns();
      this.$emit("columnreorder", {
        target: this,
        columns: o,
        event: i,
        prev: e,
        next: t
      });
    },
    groupReorder(e, t, i) {
      if (this.$props.group === void 0)
        return;
      const n = this.$props.group.slice();
      n.splice(t, 0, ...n.splice(e, 1)), this.groupChangeHandler(n, i);
    },
    columnToGroup(e, t, i) {
      const n = this._columns[e].field;
      if (!n)
        return;
      const r = (this.$props.group || []).slice();
      r.splice(t, 0, {
        field: n
      }), this.groupChangeHandler(r, i);
    },
    resetTableWidth() {
      let e = 0;
      if (!this.columnResize.colGroupMain)
        return;
      const t = this.columnResize.colGroupMain.children;
      for (let i = 0; i < t.length; i++) {
        const n = t[i].width;
        if (!n)
          return;
        e += parseFloat(n.toString());
      }
      e = Math.round(e), this._header && this._header.setWidth(e), this._footer && this._footer.setWidth(e), this.vs.table && (this.vs.table.style.width = e + "px");
    },
    onResize(e, t, i, n, r) {
      this.resetTableWidth(), this.$emit("columnresize", {
        columns: this.getColumns(),
        index: e,
        event: n,
        newWidth: t,
        oldWidth: i,
        end: r,
        target: this
      });
    },
    initColumns(e, t) {
      const i = K.getIdPrefix(this.navigation);
      if (this._columns = al(e, this.getColumns(), {
        prevId: 0,
        idPrefix: i
      }), this._columns.length === 0) {
        const a = i0(this.$props.dataItems, this.$props.group, this.$props.expandField, {
          prevId: 0,
          idPrefix: i
        });
        this._columns = a;
      }
      this.$props.selectedField && this._columns.filter((a) => a.field === this.$props.selectedField).forEach((a) => {
        a.width = a.width || "50px", a.internalCell = ki(l0), a.internalHeaderCell = ki(lb);
      });
      const n = {
        id: "",
        resizable: !0,
        width: "32px",
        title: " ",
        declarationIndex: -1,
        orderIndex: -1,
        children: [],
        parentIndex: -1,
        depth: 0,
        colSpan: 0,
        rowSpan: 0,
        left: 0,
        right: 0,
        // position: 'sticky',
        index: 0,
        rightBorder: !1,
        ariaColumnIndex: 1,
        isAccessible: !0
      };
      let r = 0;
      this.$props.expandField && it.call(this, "expandchange") && this.$props.detail && (this._columns.unshift({
        ...n,
        internalCell: ki(w0),
        field: this.$props.expandField,
        headerClassName: "k-hierarchy-cell k-header",
        id: K.generateNavigatableId(`${this._columns.length}`, i, "column"),
        ...this.expandColumn
      }), r++);
      for (let a = 0; a < t; a++)
        this._columns.unshift({
          ...n,
          isAccessible: !1,
          internalCell: ki(Ms),
          field: "value"
        }), r++;
      this._columns.slice(r).forEach((a) => a.parentIndex >= 0 && (a.parentIndex += r)), this._columnsMap = t0(this._columns), this.columnResize.columns = this._columns, this.dragLogic.columns = this._columns;
    },
    resolveTitle(e) {
      const t = this.findColumnByField(e), i = t && (t.title || t.field);
      return i === void 0 ? e : i;
    },
    findColumnByField(e) {
      let t;
      return this.$props.columns.forEach((i) => {
        const n = this.searchColumn(i, e);
        n && (t = n);
      }), t;
    },
    searchColumn(e, t) {
      if (e.field === t)
        return e;
      if (e.children) {
        let i, n = null;
        for (i = 0; n == null && i < e.children.length; i++)
          n = this.searchColumn(e.children[i], t);
        return n;
      }
      return null;
    },
    getDataState() {
      return {
        filter: this.$props.filter,
        sort: this.$props.sort,
        skip: this.$props.skip,
        take: this.$props.take !== void 0 ? this.$props.take : this.$props.pageSize,
        group: this.$props.group
      };
    },
    getArguments(e) {
      return {
        event: e,
        target: this
      };
    },
    getLeafDataItems() {
      return this.currentData.filter((e) => e.rowType === "data").map((e) => e.dataItem);
    },
    totalGroupedRows(e) {
      let t = 0;
      return e && (t = this.addSubItems(e, t)), t;
    },
    addSubItems(e, t) {
      return e.forEach((i) => {
        t++, i.expanded !== !1 && i.items && (t = this.addSubItems(i.items, t)), this.group && this.group.length && (this.$props.groupable.footer === "always" || i.expanded !== !1 && i.items && this.$props.groupable.footer === "visible") && t++;
      }), t;
    }
  },
  setup() {
    const e = V(null), t = V(null), i = V(null), n = V(null), r = V(null), a = V(null), o = V(null), s = V(null), l = V(null), d = V(null);
    return {
      groupPanelDivRef: e,
      dropElementClueRef: t,
      dragElementClueRef: i,
      headerRef: n,
      footerRef: r,
      gridNavRef: a,
      colGroupRef: o,
      scrollContainerRef: s,
      scrollTableRef: l,
      scrollTableBodyRef: d
    };
  },
  render() {
    const e = B(this);
    let t = this.$props.total || 0;
    const i = K.getIdPrefix(this.navigation);
    let n = [];
    Array.isArray(this.$props.dataItems) ? n = this.$props.dataItems : this.$props.dataItems && (n = Ss(this.$props.dataItems, this.$props.collapsedGroups.length ? this.computedCollapsed : [], this.$props.uniqueField).data, t = t || this.$props.dataItems.total);
    const r = this.$props.groupable === !0 || St(this.$props.groupable) && this.$props.groupable.enabled !== !1;
    this.columnResize.resizable = this.$props.resizable || !1, this.dragLogic.reorderable = this.$props.reorderable || !1, this.dragLogic.groupable = r, this.initializeVirtualization(t);
    const a = St(this.$props.groupable) && this.$props.groupable.footer || "none";
    this.currentData = [];
    const o = il(this.currentData, n, a, {
      index: this.$props.skip || 0
    }, this.$props.group !== void 0, this.$props.expandField), s = e || [];
    this.notHiddenColumns = this.filterHiddenColumns(this.$props.columns), this.initColumns(this.notHiddenColumns, o);
    const l = s.filter((x) => x && x.tag && x.tag.toLowerCase().indexOf("toolbar") !== -1 || x.componentOptions && x.componentOptions.tag && x.componentOptions.tag.toLowerCase().indexOf("toolbar") !== -1 || x.type && x.type.name && x.type.name.toLowerCase().indexOf("toolbar") !== -1), d = s.filter((x) => x && x.tag && x.tag.toLowerCase().indexOf("records") !== -1 || x.componentOptions && x.componentOptions.tag && x.componentOptions.tag.toLowerCase().indexOf("records") !== -1 || x.type && x.type.name && x.type.name.toLowerCase().indexOf("records") !== -1), c = this._columns.filter((x) => x.children.length === 0), h = r && u(J0, {
      ref: (x) => {
        this.groupPanelDivRef = x;
      },
      group: this.$props.group || [],
      ariaControls: this._gridRoleElementId,
      onGroupChange: this.groupChangeHandler,
      onPressHandler: this.dragLogic.pressHandler,
      onDragHandler: this.dragLogic.dragHandler,
      onReleaseHandler: this.dragLogic.releaseHandler,
      resolveTitle: this.resolveTitle
    }, null), p = (this.dragLogic.reorderable || this.dragLogic.groupable) && se && document && document.body, g = [p && u(ab, {
      ref: (x) => {
        this.dropElementClueRef = x;
      }
    }, null), p && u(rb, {
      ref: (x) => {
        this.dragElementClueRef = x;
      }
    }, null)], m = u(M0, {
      size: this.$props.size,
      columnResize: this.columnResize,
      staticHeaders: this.$props.scrollable !== "none",
      ref: (x) => {
        this.headerRef = x;
      },
      headerRow: u(q0, {
        grid: this,
        sort: this.$props.sort,
        groupable: this.$props.groupable,
        reorderable: this.$props.reorderable,
        sortable: this.$props.sortable,
        onSortChange: this.sortChangeHandler,
        filter: this.$props.filter,
        filterable: this.$props.filterable,
        filterOperators: this.$props.filterOperators || Hr,
        onFilterChange: this.filterChangeHandler,
        columnMenu: this.$props.columnMenu,
        columnMenuIcon: this.$props.columnMenuIcon,
        columnMenuAnimate: this.$props.columnMenuAnimate,
        onSelectionchange: this.onHeaderSelectionChangeHandler,
        columns: this._columns,
        columnsInitial: this.$props.columns,
        columnResize: this.columnResize,
        onPressHandler: this.dragLogic.pressHandler,
        onDragHandler: this.dragLogic.dragHandler,
        onReleaseHandler: this.dragLogic.releaseHandler,
        columnsMap: this._columnsMap,
        cellRender: this.$props.headerCellRender,
        isRtl: this.isRtl,
        isColCountDefined: this.getAriaColCount !== void 0,
        filterRow: this.$props.filterable && u(Y0, {
          grid: this,
          size: this.$props.size,
          columns: this._columns,
          filter: this.$props.filter,
          filterOperators: this.$props.filterOperators || Hr,
          onFilterchange: this.filterChangeHandler,
          sort: this.$props.sort,
          cellRender: this.$props.filterCellRender,
          isRtl: this.isRtl,
          ariaRowIndex: this._columnsMap.length + 1
        }, null) || void 0
      }, null),
      cols: c.map(function(x, ae) {
        return u("col", {
          key: ae.toString(),
          width: x.width !== void 0 ? Math.floor(parseFloat(x.width.toString())) + "px" : void 0
        }, null);
      }, this)
    }, null), f = this._columns.some((x) => !!x.footerCell) ? u(Z0, {
      size: this.$props.size,
      columnResize: this.columnResize,
      staticHeaders: this.$props.scrollable !== "none",
      ref: (x) => {
        this.footerRef = x;
      },
      row: u(Q0, {
        isRtl: this.isRtl,
        rowIndex: this.getAriaRowCount + 1,
        columns: this._columns.map(function(x) {
          return {
            ...x,
            footerCell: P.call(this, x.footerCell, T.call(this))
          };
        }, this)
      }, null),
      cols: c.map(function(x, ae) {
        return u("col", {
          key: ae.toString(),
          width: x.width !== void 0 ? Math.floor(parseFloat(x.width.toString())) + "px" : void 0
        }, null);
      }, this)
    }, null) : u("span", null, null), b = P.call(this, this.$props.cellRender, T.call(this)), v = this.showLicenseWatermark ? u(hd, {
      message: this.licenseMessage
    }, null) : null, $ = this.$attrs.style, y = $ && St($) && $.width || "", C = parseFloat(y.toString()), D = this.vs && this.vs.container && this.vs.container.scrollLeft || 0, {
      colSpans: S,
      hiddenColumns: E
    } = Jv({
      enabled: this.$props.columnVirtualization,
      columns: this._columns,
      tableViewPortWidth: C,
      scrollLeft: D
    }), L = function(x, ae, qe) {
      let yt = !1;
      const ne = this.$props.selectedField, le = ne ? Da(ne, x.dataItem) : void 0, ce = this.$props.highlight && this.$props.dataItemKey && $n(this.$props.dataItemKey)(x.dataItem) !== void 0 ? this.$props.highlight[$n(this.$props.dataItemKey)(x.dataItem)] : void 0;
      return {
        row: this._columns.map(function(A, ue) {
          if (E[ue])
            return null;
          const $t = `${A.className ? A.className + " " : ""}${A.locked ? "k-grid-content-sticky" : ""}`, kt = A.left !== void 0 ? this.isRtl ? {
            left: A.right + "px",
            right: A.left + "px"
          } : {
            left: A.left + "px",
            right: A.right + "px"
          } : {};
          let lt = !1;
          if (A.editable && this.$props.editField) {
            const Le = Da(this.$props.editField, x.dataItem);
            (Le === !0 || Le === A.field) && (yt = !0, lt = !0);
          }
          let Te;
          A.cell && (Te = P.call(this, A.cell, T.call(this)));
          const $i = this.computedCollapsed && this.computedCollapsed[x.level] && this.computedCollapsed[x.level].some((Le) => Le === on(x.dataItem, this.$props.uniqueField)), yn = $i ? !$i : x.expanded;
          return A.internalCell ? u(A.internalCell, {
            key: ue,
            id: K.generateNavigatableId(`${ae}-${String(ue)}`, i),
            colSpan: S[ue],
            dataItem: x.dataItem,
            field: A.field || "",
            editor: A.editor,
            format: A.format,
            readFormat: A.readFormat,
            type: A.type,
            className: $t,
            render: Te || b,
            onChange: this.itemChange,
            onSelectionchange: (Le) => this.selectionChangeHandler({
              event: Le,
              dataItem: x.dataItem,
              dataIndex: qe,
              columnIndex: ue
            }),
            columnIndex: ue,
            columnsCount: this._columns.filter((Le) => !Le.children.length).length,
            rowType: x.rowType,
            level: x.level,
            expanded: yn,
            dataIndex: x.dataIndex,
            style: kt,
            ariaColumnIndex: A.ariaColumnIndex,
            isRtl: this.isRtl,
            isSelected: Array.isArray(le) && le.indexOf(ue) > -1,
            isHighlighted: !!(typeof ce != "boolean" && ce && A.field && ce[A.field] === !0)
          }, null) : lt ? u(I0, {
            id: K.generateNavigatableId(`${ae}-${String(ue)}`, i),
            key: ue,
            colSpan: S[ue],
            dataItem: x.dataItem,
            field: A.field || "",
            editor: A.editor,
            format: A.format,
            readFormat: A.readFormat,
            type: A.type,
            className: $t,
            render: Te || b,
            onEdit: this.editHandler,
            onRemove: this.removeHandler,
            onSave: this.saveHandler,
            onCancel: this.cancelHandler,
            onChange: this.itemChange,
            columnIndex: ue,
            columnsCount: this._columns.filter((Le) => !Le.children.length).length,
            rowType: x.rowType,
            level: x.level,
            expanded: yn,
            dataIndex: x.dataIndex,
            style: kt
          }, null) : u(sb, {
            key: ue,
            id: K.generateNavigatableId(`${ae}-${String(ue)}`, i),
            colSpan: S[ue],
            dataItem: x.dataItem,
            field: A.field || "",
            editor: A.editor,
            format: A.format,
            readFormat: A.readFormat,
            type: A.type,
            className: $t,
            render: Te || b,
            onCellclick: this.cellClickHandler,
            onCellkeydown: this.cellKeydownHandler,
            onEdit: this.editHandler,
            onRemove: this.removeHandler,
            onSave: this.saveHandler,
            onCancel: this.cancelHandler,
            onChange: this.itemChange,
            onSelectionchange: (Le) => this.selectionChangeHandler({
              event: Le,
              dataItem: x.dataItem,
              dataIndex: qe,
              columnIndex: ue
            }),
            columnIndex: ue,
            columnsCount: this._columns.filter((Le) => !Le.children.length).length,
            rowType: x.rowType,
            level: x.level,
            expanded: yn,
            dataIndex: x.dataIndex,
            style: kt,
            isSelected: Array.isArray(le) && le.indexOf(ue) > -1,
            isHighlighted: !!(typeof ce != "boolean" && ce && A.field && ce[A.field] === !0)
          }, null);
        }, this),
        isInEdit: yt,
        isSelected: typeof le == "boolean" && le,
        isHighlighted: typeof ce == "boolean" && ce
      };
    };
    let j = 0;
    if (this.$props.scrollable === "virtual" && this.totalGroupedRows(this.currentData) / 2 > this.$props.take) {
      const x = this.vs.topCacheCount + this.vs.attendedSkip - (this.$props.skip || 0);
      for (let ae = 0; ae < x; ) {
        const qe = this.currentData.shift();
        if (qe)
          this.currentData.push(qe), j++, qe.rowType === "groupHeader" && ae--;
        else
          break;
        ae++;
      }
    }
    const Q = (x) => x >= this.currentData.length - j, z = P.call(this, this.$props.detail, T.call(this));
    let Y = this.vs.propsSkip || 0;
    const q = this._columnsMap.length + (this.$props.filterable ? 1 : 0) + 1;
    let w, F = -1, ge = 0;
    const W = this.currentData.length && this.currentData.map(function(x, ae) {
      x.rowType === "data" && (Y++, F++), this.$props.alternatePerGroup && x.rowType === "groupHeader" && (Y = 0);
      const qe = Y % 2 === 0, yt = this.$props.dataItemKey && $n(this.$props.dataItemKey)(x.dataItem), ne = ae + (this.vs.propsSkip || 0), le = yt || "ai" + ne, ce = le + "_1";
      w = ne + q + ge;
      const A = P.call(this, this.$props.rowRender, T.call(this));
      let ue;
      this.$props.detail && x.rowType === "data" && x.expanded && (ue = c.length - (this.$props.expandField ? 1 : 0) - (this.$props.group ? this.$props.group.length : 0) || 1, ge++, w = ne + q + ge);
      const $t = ae * 2 + q, kt = ae * 2 + q + 1, lt = L.call(this, x, le, F);
      return [u(ob, {
        key: le,
        dataItem: x.dataItem,
        isAltRow: qe,
        isInEdit: lt.isInEdit,
        isSelected: lt.isSelected,
        isHighlighted: lt.isHighlighted,
        rowType: x.rowType,
        isHidden: Q(ae),
        onRowclick: (Te) => this.rowClick(Te, x),
        onRowdblclick: (Te) => this.rowDoubleClick(Te, x),
        selectedField: this.$props.selectedField,
        rowHeight: this.$props.rowHeight,
        render: A,
        ariaRowIndex: this.$props.detail ? $t : w,
        dataIndex: F,
        class: this.$props.rowClass ? this.$props.rowClass(x) : ""
      }, {
        default: () => [lt.row]
      }), this.$props.detail && x.rowType === "data" && x.expanded && u("tr", {
        key: ce,
        class: qe ? "k-table-row k-table-alt-row k-detail-row" : "k-table-row k-detail-row",
        style: {
          visibility: Q(ae) ? "hidden" : "",
          height: this.$props.detailRowHeight + "px"
        },
        role: "row",
        "aria-rowindex": this.$props.detail ? kt : w
      }, [this.$props.group && this.$props.group.map(function(Te, $i) {
        return u(Ms, {
          id: "",
          dataIndex: x.dataIndex,
          field: Te.field,
          dataItem: x.dataItem,
          key: $i
        }, null);
      }, this), this.$props.expandField && u(S0, {
        id: K.generateNavigatableId(`${ce}-dhcell`, i)
      }, null), u(C0, {
        dataItem: x.dataItem,
        dataIndex: x.dataIndex,
        colSpan: ue,
        ariaColIndex: 2 + (this.$props.group ? this.$props.group.length : 0),
        detail: this.$props.detail ? z : void 0,
        id: K.generateNavigatableId(`${ce}-dcell`, i)
      }, null)])];
    }, this) || u("tr", {
      class: "k-table-row k-grid-norecords"
    }, [u("td", {
      class: "k-table-td",
      colspan: this._columns.filter((x) => !x.children.length).length
    }, [d.length ? d : u(ub, null, null)])]), G = P.call(this, this.$props.pager, T.call(this)), De = this.$props.pageable && u(Mv, {
      class: "k-grid-pager",
      onPagesizechange: this.pageChangeHandler,
      onPagechange: this.pageChangeHandler,
      size: this.$props.size,
      total: t,
      skip: this.vs.propsSkip || 0,
      pageSize: (this.$props.take !== void 0 ? this.$props.take : this.$props.pageSize) || 10,
      messagesMap: Cs,
      settings: Vv(this.$props.pageable || {})
    }, null), Ae = _.call(this, {
      h: M,
      template: G,
      defaultRendering: De,
      additionalProps: {
        ...this.$props,
        skip: this.vs.propsSkip || 0,
        messagesMap: Cs
      },
      additionalListeners: {
        pagesizechange: this.pageChangeHandler,
        pagechange: this.pageChangeHandler
      }
    }), pt = (x) => this.$props.sort && this.$props.sort.filter((ae) => ae.field === x).length > 0, st = u("colgroup", {
      ref: he(this, "colGroup")
    }, [c.map(function(x, ae) {
      return u("col", {
        key: ae.toString(),
        class: pt(x.field) ? "k-sorted" : void 0,
        width: x.width !== void 0 ? x.width.toString().indexOf("%") !== -1 ? x.width : Math.floor(parseFloat(x.width.toString())) + "px" : void 0
      }, null);
    }, this)]), ot = {
      height: this.getCorrectHeight
    }, Ke = P.call(this, this.$props.loader, T.call(this)), yi = this.$props.loader && u("div", {
      class: "k-loader-container k-loader-container-md k-loader-top"
    }, [u("div", {
      class: "k-loader-container-overlay k-overlay-light"
    }, null), u("div", {
      class: "k-loader-container-inner"
    }, [u(Qv, {
      size: "large",
      type: "infinite-spinner"
    }, null)])]), Wt = _.call(this, {
      h: M,
      template: Ke,
      defaultRendering: yi
    });
    return this.$props.scrollable === "none" ? u(xs, {
      ref: "navRef",
      id: this._gridId,
      navigatable: this.$props.navigatable
    }, {
      default: () => [u(ks, {
        ref: (x) => {
          this.gridNavRef = x;
        },
        currentData: this.currentData,
        style: ot,
        class: this.nonscrollableWrapperClass
      }, {
        default: () => [l, h, u("div", {
          role: "grid",
          class: "k-grid-aria-root",
          id: this._gridRoleElementId,
          "aria-colcount": this.getAriaColCount,
          "aria-rowcount": this.getAriaRowCount
        }, [u("table", {
          class: "k-table",
          style: {
            tableLayout: "fixed"
          },
          role: "none"
        }, [st, m, u("tbody", {
          class: "k-table-tbody",
          "data-keyboardnavbody": !0
        }, [W, Wt]), f])]), Ae, g]
      })]
    }) : u(xs, {
      ref: "navRef",
      id: this._gridId,
      navigatable: this.$props.navigatable
    }, {
      default: () => [u(ks, {
        ref: (x) => {
          this.gridNavRef = x;
        },
        currentData: this.currentData,
        style: ot,
        class: this.scrollableWrapperClass
      }, {
        default: () => [l, h, u("div", {
          role: "grid",
          class: "k-grid-aria-root",
          id: this._gridRoleElementId,
          "aria-colcount": this.getAriaColCount,
          "aria-rowcount": this.getAriaRowCount
        }, [m, u("div", {
          class: "k-grid-container",
          role: "presentation"
        }, [u("div", {
          role: "presentation",
          ref: he(this, "scrollContainer"),
          class: "k-grid-content k-virtual-content",
          onScroll: this.scrollHandler
        }, [u("div", {
          class: "k-grid-table-wrap",
          role: "presentation"
        }, [u("table", {
          role: "none",
          class: this.gridTableClass,
          ref: he(this, "scrollTable")
        }, [st, u("tbody", {
          class: "k-table-tbody",
          role: "rowgroup",
          "data-keyboardnavbody": !0,
          ref: he(this, "scrollTableBody")
        }, [W])])]), u("div", {
          class: "k-height-container",
          role: "presentation"
        }, [u("div", {
          style: this.$props.scrollable === "virtual" ? {
            height: this.vs.containerHeight + "px"
          } : {}
        }, null)])]), Wt]), f, v]), Ae, g]
      })]
    });
  }
}), cb = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, r] of t)
    i[n] = r;
  return i;
}, hb = ["id"], pb = {
  key: 0,
  class: "k-toolbar k-grid-toolbar"
}, gb = ["onClick"], fb = {
  __name: "LegacyKendoGrid",
  props: {
    id: String,
    height: [String, Number],
    dataSourceRef: String,
    // ref به DataSource
    pageable: [Boolean, Object],
    sortable: [Boolean, Object],
    sortableMode: String,
    filterable: [Boolean, Object],
    editable: [Boolean, Object],
    navigatable: Boolean,
    resizable: Boolean,
    reorderable: Boolean,
    scrollable: Boolean,
    selectable: Boolean,
    toolbar: Array,
    noRecords: Boolean,
    excelFileName: String,
    excelAllPages: Boolean,
    allowCopy: Boolean
  },
  emits: [
    "databinding",
    "edit",
    "add",
    "save",
    "cancel",
    "commnet",
    "kavir-tran"
    /* ... تمام events سفارشی */
  ],
  setup(e, { expose: t, emit: i }) {
    var D;
    const n = e, r = i, a = H("legacyDataSource"), o = V(0), s = V(((D = n.pageable) == null ? void 0 : D.pageSize) || 20), l = V([]), d = V(null), c = ma(() => Iu(a.data, { skip: o.value, take: s.value, sort: l.value, filter: d.value }).data), h = V([]), p = ma(() => n.pageable || !1), g = () => r("add"), m = () => a.update({ data: { models: c.value } }), f = () => r("cancel"), b = () => {
    }, v = (S) => {
      n.edit && n.edit(S), r("itemchange", S);
    }, $ = (S) => {
      o.value = S.page.skip, s.value = S.page.take;
    }, y = (S) => l.value = S.sort, C = (S) => d.value = S.filter;
    return xl(() => {
      a.read(), h.value = Object.keys($slots).map((S) => ({
        field: S
        /* ... */
      }));
    }), t({
      kendoWidget: () => ({ dataSource: { read: a.read } }),
      // برای refresh
      refresh: () => a.read()
    }), (S, E) => (Ye(), Ue("div", {
      class: "legacy-kendo-grid",
      id: e.id
    }, [
      e.toolbar && e.toolbar.length ? (Ye(), Ue("div", pb, [
        (Ye(!0), Ue(va, null, yl(e.toolbar, (L, j) => (Ye(), Ue(va, { key: j }, [
          L.name === "create" ? (Ye(), Ue("button", {
            key: 0,
            class: "k-button",
            onClick: g
          }, Si(L.text || "Create"), 1)) : wi("", !0),
          L.name === "save" ? (Ye(), Ue("button", {
            key: 1,
            class: "k-button",
            onClick: m
          }, Si(L.text || "Save"), 1)) : wi("", !0),
          L.name === "cancel" ? (Ye(), Ue("button", {
            key: 2,
            class: "k-button",
            onClick: f
          }, Si(L.text || "Cancel"), 1)) : wi("", !0),
          L.name === "excel" ? (Ye(), Ue("button", {
            key: 3,
            class: "k-button",
            onClick: b
          }, "Excel")) : (Ye(), Ue("button", {
            key: 4,
            class: $l(`k-button k-grid-${L.name}`),
            onClick: (Q) => S.$emit(L.name.replace("-btn", ""))
          }, Si(L.text), 11, gb))
        ], 64))), 128))
      ])) : wi("", !0),
      u(ba(db), {
        ref: "nativeGrid",
        "data-items": c.value,
        columns: h.value,
        pageable: p.value,
        skip: o.value,
        take: s.value,
        total: ba(a).total,
        sortable: e.sortable,
        sort: l.value,
        onSortchange: y,
        filterable: e.filterable,
        filter: d.value,
        onFilterchange: C,
        editable: e.editable,
        onItemchange: v,
        resizable: e.resizable,
        reorderable: e.reorderable,
        scrollable: e.scrollable,
        selectable: e.selectable,
        height: e.height,
        onPagechange: $,
        onDatabinding: E[0] || (E[0] = (L) => S.$emit("databinding", L))
      }, {
        default: kl(() => [
          wl(S.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["data-items", "columns", "pageable", "skip", "take", "total", "sortable", "sort", "filterable", "filter", "editable", "resizable", "reorderable", "scrollable", "selectable", "height"])
    ], 8, hb));
  }
}, Tb = /* @__PURE__ */ cb(fb, [["__scopeId", "data-v-3aa4fd0f"]]), mb = { style: { display: "none" } }, Pb = {
  __name: "LegacyKendoGridColumn",
  props: {
    field: String,
    title: String,
    template: Function,
    filterable: [Boolean, Object],
    aggregates: Array,
    footerTemplate: Function,
    groupFooterTemplate: Function,
    command: Array
  },
  setup(e) {
    return (t, i) => (Ye(), Ue("div", mb));
  }
};
export {
  bb as LegacyKendoDatasource,
  Tb as LegacyKendoGrid,
  Pb as LegacyKendoGridColumn
};
