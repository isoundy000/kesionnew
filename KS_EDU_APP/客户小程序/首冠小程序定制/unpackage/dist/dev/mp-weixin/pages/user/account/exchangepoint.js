(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/user/account/exchangepoint"],{

/***/ 614:
/*!***********************************************************************************************************!*\
  !*** J:/kesionEDU_APP/KS_EDU_APP/客户小程序/首冠小程序定制/main.js?{"page":"pages%2Fuser%2Faccount%2Fexchangepoint"} ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _exchangepoint = _interopRequireDefault(__webpack_require__(/*! ./pages/user/account/exchangepoint.vue */ 615));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_exchangepoint.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 615:
/*!**************************************************************************************!*\
  !*** J:/kesionEDU_APP/KS_EDU_APP/客户小程序/首冠小程序定制/pages/user/account/exchangepoint.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exchangepoint_vue_vue_type_template_id_1e60bbd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchangepoint.vue?vue&type=template&id=1e60bbd2&scoped=true& */ 616);
/* harmony import */ var _exchangepoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exchangepoint.vue?vue&type=script&lang=js& */ 618);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _exchangepoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _exchangepoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _exchangepoint_vue_vue_type_style_index_0_id_1e60bbd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exchangepoint.vue?vue&type=style&index=0&id=1e60bbd2&scoped=true&lang=css& */ 620);
/* harmony import */ var _HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _exchangepoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _exchangepoint_vue_vue_type_template_id_1e60bbd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _exchangepoint_vue_vue_type_template_id_1e60bbd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e60bbd2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "kesionEDU_APP/KS_EDU_APP/客户小程序/首冠小程序定制/pages/user/account/exchangepoint.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 616:
/*!*********************************************************************************************************************************!*\
  !*** J:/kesionEDU_APP/KS_EDU_APP/客户小程序/首冠小程序定制/pages/user/account/exchangepoint.vue?vue&type=template&id=1e60bbd2&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_template_id_1e60bbd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./exchangepoint.vue?vue&type=template&id=1e60bbd2&scoped=true& */ 617);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_template_id_1e60bbd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_template_id_1e60bbd2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 617:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!J:/kesionEDU_APP/KS_EDU_APP/客户小程序/首冠小程序定制/pages/user/account/exchangepoint.vue?vue&type=template&id=1e60bbd2&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 618:
/*!***************************************************************************************************************!*\
  !*** J:/kesionEDU_APP/KS_EDU_APP/客户小程序/首冠小程序定制/pages/user/account/exchangepoint.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./exchangepoint.vue?vue&type=script&lang=js& */ 619);
/* harmony import */ var _HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 619:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!J:/kesionEDU_APP/KS_EDU_APP/客户小程序/首冠小程序定制/pages/user/account/exchangepoint.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;









































































var _user = __webpack_require__(/*! api/user */ 17);var UniLoadMore = function UniLoadMore() {return __webpack_require__.e(/*! import() | components/uni/uni-load-more/uni-load-more */ "components/uni/uni-load-more/uni-load-more").then(__webpack_require__.bind(null, /*! components/uni/uni-load-more/uni-load-more */ 818));};var _default =
{
  components: {
    UniLoadMore: UniLoadMore },

  data: function data() {
    return {
      tabs: ['余额兑换', '积分兑换', '点券明细'],
      index: 0,
      state: {},
      data: {},
      value: '',
      list: [],
      page: 1,
      pageCount: 1,
      moreStatus: "" };

  },
  watch: {
    value: function value(val) {
      if (this.index == 0) {
        if (val > this.data.available_balance) {
          this.value = this.data.available_balance;
        }
      } else if (this.index == 1) {
        if (val > this.data.most_point) {
          this.value = this.data.most_point;
        }
      }

    } },

  /*滚动加载*/
  onReachBottom: function onReachBottom() {
    this.page++;
    if (this.page <= this.pageCount) {
      this.getList(this.page);
    }
  },
  methods: {
    getList: function getList() {var _this = this;var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.page = p;
      if (this.page == 1) {
        this.list = [];
      }
      this.moreStatus = 'loading';
      (0, _user.GetUserLogPointList)({
        page: this.page,
        pagesize: 15 }).
      then(function (res) {
        uni.stopPullDownRefresh();
        _this.pageCount = res.pagecount;
        if (_this.page >= _this.pageCount) {
          _this.moreStatus = 'noMore';
        } else {
          _this.moreStatus = 'more';
        }
        if (res.result) {
          _this.list = _this.list.concat(res.data);
        }
      });
    },
    changeTabs: function changeTabs(e) {
      this.value = '';
      if (this.index == 0) {
        this.getData();
      } else if (this.index == 1) {
        this.getScoreData();
      } else {
        this.getList();
      }
    },
    getData: function getData() {var _this2 = this;
      (0, _user.MoneyExchangePoint)().then(function (res) {
        if (res.result) {
          _this2.data = res.data;
        }
      });
    },
    getScoreData: function getScoreData() {var _this3 = this;
      (0, _user.ScoreExchangePoint)().then(function (res) {
        if (res.result) {
          _this3.data = res.data;
        }
      });
    },
    //余额兑换
    exchange: function exchange() {var _this4 = this;
      if (this.state.userInfo.Money - 1 > 0) {
        if (this.value > 0) {
          (0, _user.SaveMoneyExchangePoint)({
            point: this.value }).
          then(function (res) {
            if (res.result) {
              uni.showToast({
                title: '兑换成功',
                icon: 'none' });

              _this4.getData();
            } else {
              uni.showToast({
                title: res.msg,
                icon: 'none' });

            }
          });
        } else {
          uni.showToast({
            title: '输入兑换数量',
            icon: 'none' });

        }
      } else {
        uni.showToast({
          title: '余额不足',
          icon: 'none' });

      }
    },
    //积分兑换
    scoreexchange: function scoreexchange() {var _this5 = this;

      if (this.value > 0) {
        (0, _user.SaveScoreExchangePoint)({
          scorepoint: this.value }).
        then(function (res) {
          if (res.result) {
            uni.showToast({
              title: '兑换成功',
              icon: 'none' });

            _this5.getScoreData();
          } else {
            uni.showToast({
              title: res.msg,
              icon: 'none' });

          }
        });
      } else {
        uni.showToast({
          title: '输入兑换数量',
          icon: 'none' });

      }

    } },

  onLoad: function onLoad() {var _this6 = this;
    this.$store.ready(function (state) {
      _this6.state = state;
      _this6.getData();
    });
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 620:
/*!***********************************************************************************************************************************************!*\
  !*** J:/kesionEDU_APP/KS_EDU_APP/客户小程序/首冠小程序定制/pages/user/account/exchangepoint.vue?vue&type=style&index=0&id=1e60bbd2&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_style_index_0_id_1e60bbd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../软件/HBuilderX.1.9.4.20190426/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./exchangepoint.vue?vue&type=style&index=0&id=1e60bbd2&scoped=true&lang=css& */ 621);
/* harmony import */ var _HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_style_index_0_id_1e60bbd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_style_index_0_id_1e60bbd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_style_index_0_id_1e60bbd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_style_index_0_id_1e60bbd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_1_9_4_20190426_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_exchangepoint_vue_vue_type_style_index_0_id_1e60bbd2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 621:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!J:/kesionEDU_APP/KS_EDU_APP/客户小程序/首冠小程序定制/pages/user/account/exchangepoint.vue?vue&type=style&index=0&id=1e60bbd2&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[614,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/user/account/exchangepoint.js.map