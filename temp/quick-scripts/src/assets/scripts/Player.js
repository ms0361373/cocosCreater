"use strict";
cc._RF.push(module, '74b7bQD5HFPN6mvaLE/4ySU', 'Player');
// scripts/Player.js

"use strict"; // Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _a = cc._decorator,
    ccclass = _a.ccclass,
    property = _a.property;

var NewClass =
/** @class */
function (_super) {
  __extends(NewClass, _super);

  function NewClass() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.label = null;
    _this.text = 'hello';
    return _this; // update (dt) {}
  } // LIFE-CYCLE CALLBACKS:
  // onLoad () {}


  NewClass.prototype.start = function () {};

  __decorate([property(cc.Label)], NewClass.prototype, "label", void 0);

  __decorate([property], NewClass.prototype, "text", void 0);

  NewClass = __decorate([ccclass], NewClass);
  return NewClass;
}(cc.Component);

exports["default"] = NewClass;

cc._RF.pop();