(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.easyBeautiful = factory());
}(this, (function () { 'use strict';

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    var script = {
      name: 'eb-button',
      props: {
        icon: {
          type: String,
          default: ''
        },
        round: {
          type: Boolean,
          default: false
        },
        type: {
          type: String,
          default: 'default'
        },
        isPlain: {
          type: Boolean,
          default: false
        },
        isCircle: {
          type: Boolean,
          default: false
        }
      },
      methods: {
        handleClick: function handleClick(e) {
          this.$emit('click', e);
        }
      }
    };

    function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
        if (typeof shadowMode !== 'boolean') {
            createInjectorSSR = createInjector;
            createInjector = shadowMode;
            shadowMode = false;
        }
        // Vue.extend constructor export interop.
        const options = typeof script === 'function' ? script.options : script;
        // render functions
        if (template && template.render) {
            options.render = template.render;
            options.staticRenderFns = template.staticRenderFns;
            options._compiled = true;
            // functional template
            if (isFunctionalTemplate) {
                options.functional = true;
            }
        }
        // scopedId
        if (scopeId) {
            options._scopeId = scopeId;
        }
        let hook;
        if (moduleIdentifier) {
            // server build
            hook = function (context) {
                // 2.3 injection
                context =
                    context || // cached call
                        (this.$vnode && this.$vnode.ssrContext) || // stateful
                        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
                // 2.2 with runInNewContext: true
                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                    context = __VUE_SSR_CONTEXT__;
                }
                // inject component styles
                if (style) {
                    style.call(this, createInjectorSSR(context));
                }
                // register component module identifier for async chunk inference
                if (context && context._registeredComponents) {
                    context._registeredComponents.add(moduleIdentifier);
                }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook;
        }
        else if (style) {
            hook = shadowMode
                ? function (context) {
                    style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
                }
                : function (context) {
                    style.call(this, createInjector(context));
                };
        }
        if (hook) {
            if (options.functional) {
                // register for functional component in vue file
                const originalRender = options.render;
                options.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            }
            else {
                // inject component registration as beforeCreate hook
                const existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
        }
        return script;
    }

    const isOldIE = typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    function createInjector(context) {
        return (id, style) => addStyle(id, style);
    }
    let HEAD;
    const styles = {};
    function addStyle(id, css) {
        const group = isOldIE ? css.media || 'default' : id;
        const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
        if (!style.ids.has(id)) {
            style.ids.add(id);
            let code = css.source;
            if (css.map) {
                // https://developer.chrome.com/devtools/docs/javascript-debugging
                // this makes source maps inside style tags work properly in Chrome
                code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
                // http://stackoverflow.com/a/26603875
                code +=
                    '\n/*# sourceMappingURL=data:application/json;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                        ' */';
            }
            if (!style.element) {
                style.element = document.createElement('style');
                style.element.type = 'text/css';
                if (css.media)
                    style.element.setAttribute('media', css.media);
                if (HEAD === undefined) {
                    HEAD = document.head || document.getElementsByTagName('head')[0];
                }
                HEAD.appendChild(style.element);
            }
            if ('styleSheet' in style.element) {
                style.styles.push(code);
                style.element.styleSheet.cssText = style.styles
                    .filter(Boolean)
                    .join('\n');
            }
            else {
                const index = style.ids.size - 1;
                const textNode = document.createTextNode(code);
                const nodes = style.element.childNodes;
                if (nodes[index])
                    style.element.removeChild(nodes[index]);
                if (nodes.length)
                    style.element.insertBefore(textNode, nodes[index]);
                else
                    style.element.appendChild(textNode);
            }
        }
    }

    /* script */
    const __vue_script__ = script;

    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c(
        "button",
        {
          staticClass: "el-button",
          class: [
            "el-button--" + _vm.type,
            { "is-plain": _vm.isPlain },
            { "is-circle": _vm.isCircle },
            { "is-round": _vm.round }
          ],
          on: { click: _vm.handleClick }
        },
        [
          _vm.icon
            ? _c("i", { staticClass: "el-icon", class: ["el-icon-" + _vm.icon] })
            : _vm._e(),
          _vm._v(" "),
          _vm.$slots.default ? _c("span", [_vm._t("default")], 2) : _vm._e()
        ]
      )
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      const __vue_inject_styles__ = function (inject) {
        if (!inject) return
        inject("data-v-11fc7647_0", { source: "@import '../assets/font-awesome.min.css';\n.el-button[data-v-11fc7647] {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #FFF;\n  border: 1px solid #DCDFE6;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  outline: 0;\n  margin: 0;\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  font-weight: 500;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  padding: 12px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.el-button + .el-button[data-v-11fc7647] {\n  margin-left: 10px;\n}\n.el-button[data-v-11fc7647]:focus,\n.el-button[data-v-11fc7647]:hover {\n  color: #409EFF;\n  border-color: #c6e2ff;\n  background-color: #ecf5ff;\n}\n.el-button[data-v-11fc7647]:active {\n  color: #3a8ee6;\n  border-color: #3a8ee6;\n  outline: 0;\n}\n.el-button[data-v-11fc7647]::-moz-focus-inner {\n  border: 0;\n}\n.el-button [class*=el-icon-] + span[data-v-11fc7647] {\n  margin-left: 5px;\n}\n.el-button.is-plain[data-v-11fc7647]:focus,\n.el-button.is-plain[data-v-11fc7647]:hover {\n  background: #FFF;\n  border-color: #409EFF;\n  color: #409EFF;\n}\n.el-button.is-active[data-v-11fc7647],\n.el-button.is-plain[data-v-11fc7647]:active {\n  color: #3a8ee6;\n  border-color: #3a8ee6;\n}\n.el-button.is-plain[data-v-11fc7647]:active {\n  background: #FFF;\n  outline: 0;\n}\n.el-button.is-disabled[data-v-11fc7647],\n.el-button.is-disabled[data-v-11fc7647]:focus,\n.el-button.is-disabled[data-v-11fc7647]:hover {\n  color: #C0C4CC;\n  cursor: not-allowed;\n  background-image: none;\n  background-color: #FFF;\n  border-color: #EBEEF5;\n}\n.el-button.is-disabled.el-button--text[data-v-11fc7647] {\n  background-color: transparent;\n}\n.el-button.is-disabled.is-plain[data-v-11fc7647],\n.el-button.is-disabled.is-plain[data-v-11fc7647]:focus,\n.el-button.is-disabled.is-plain[data-v-11fc7647]:hover {\n  background-color: #FFF;\n  border-color: #EBEEF5;\n  color: #C0C4CC;\n}\n.el-button.is-loading[data-v-11fc7647] {\n  position: relative;\n  pointer-events: none;\n}\n.el-button.is-loading[data-v-11fc7647]:before {\n  pointer-events: none;\n  content: '';\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  border-radius: inherit;\n  background-color: rgba(255, 255, 255, 0.35);\n}\n.el-button.is-round[data-v-11fc7647] {\n  border-radius: 20px;\n  padding: 12px 23px;\n}\n.el-button.is-circle[data-v-11fc7647] {\n  border-radius: 50%;\n  padding: 12px;\n}\n.el-button--primary[data-v-11fc7647] {\n  color: #FFF;\n  background-color: #409EFF;\n  border-color: #409EFF;\n}\n.el-button--primary[data-v-11fc7647]:focus,\n.el-button--primary[data-v-11fc7647]:hover {\n  background: #66b1ff;\n  border-color: #66b1ff;\n  color: #FFF;\n}\n.el-button--primary.is-active[data-v-11fc7647],\n.el-button--primary[data-v-11fc7647]:active {\n  background: #3a8ee6;\n  border-color: #3a8ee6;\n  color: #FFF;\n}\n.el-button--primary[data-v-11fc7647]:active {\n  outline: 0;\n}\n.el-button--primary.is-disabled[data-v-11fc7647],\n.el-button--primary.is-disabled[data-v-11fc7647]:active,\n.el-button--primary.is-disabled[data-v-11fc7647]:focus,\n.el-button--primary.is-disabled[data-v-11fc7647]:hover {\n  color: #FFF;\n  background-color: #a0cfff;\n  border-color: #a0cfff;\n}\n.el-button--primary.is-plain[data-v-11fc7647] {\n  color: #409EFF;\n  background: #ecf5ff;\n  border-color: #b3d8ff;\n}\n.el-button--primary.is-plain[data-v-11fc7647]:focus,\n.el-button--primary.is-plain[data-v-11fc7647]:hover {\n  background: #409EFF;\n  border-color: #409EFF;\n  color: #FFF;\n}\n.el-button--primary.is-plain[data-v-11fc7647]:active {\n  background: #3a8ee6;\n  border-color: #3a8ee6;\n  color: #FFF;\n  outline: 0;\n}\n.el-button--primary.is-plain.is-disabled[data-v-11fc7647],\n.el-button--primary.is-plain.is-disabled[data-v-11fc7647]:active,\n.el-button--primary.is-plain.is-disabled[data-v-11fc7647]:focus,\n.el-button--primary.is-plain.is-disabled[data-v-11fc7647]:hover {\n  color: #8cc5ff;\n  background-color: #ecf5ff;\n  border-color: #d9ecff;\n}\n.el-button--success[data-v-11fc7647] {\n  color: #FFF;\n  background-color: #67C23A;\n  border-color: #67C23A;\n}\n.el-button--success[data-v-11fc7647]:focus,\n.el-button--success[data-v-11fc7647]:hover {\n  background: #85ce61;\n  border-color: #85ce61;\n  color: #FFF;\n}\n.el-button--success.is-active[data-v-11fc7647],\n.el-button--success[data-v-11fc7647]:active {\n  background: #5daf34;\n  border-color: #5daf34;\n  color: #FFF;\n}\n.el-button--success[data-v-11fc7647]:active {\n  outline: 0;\n}\n.el-button--success.is-disabled[data-v-11fc7647],\n.el-button--success.is-disabled[data-v-11fc7647]:active,\n.el-button--success.is-disabled[data-v-11fc7647]:focus,\n.el-button--success.is-disabled[data-v-11fc7647]:hover {\n  color: #FFF;\n  background-color: #b3e19d;\n  border-color: #b3e19d;\n}\n.el-button--success.is-plain[data-v-11fc7647] {\n  color: #67C23A;\n  background: #f0f9eb;\n  border-color: #c2e7b0;\n}\n.el-button--success.is-plain[data-v-11fc7647]:focus,\n.el-button--success.is-plain[data-v-11fc7647]:hover {\n  background: #67C23A;\n  border-color: #67C23A;\n  color: #FFF;\n}\n.el-button--success.is-plain[data-v-11fc7647]:active {\n  background: #5daf34;\n  border-color: #5daf34;\n  color: #FFF;\n  outline: 0;\n}\n.el-button--success.is-plain.is-disabled[data-v-11fc7647],\n.el-button--success.is-plain.is-disabled[data-v-11fc7647]:active,\n.el-button--success.is-plain.is-disabled[data-v-11fc7647]:focus,\n.el-button--success.is-plain.is-disabled[data-v-11fc7647]:hover {\n  color: #a4da89;\n  background-color: #f0f9eb;\n  border-color: #e1f3d8;\n}\n.el-button--warning[data-v-11fc7647] {\n  color: #FFF;\n  background-color: #E6A23C;\n  border-color: #E6A23C;\n}\n.el-button--warning[data-v-11fc7647]:focus,\n.el-button--warning[data-v-11fc7647]:hover {\n  background: #ebb563;\n  border-color: #ebb563;\n  color: #FFF;\n}\n.el-button--warning.is-active[data-v-11fc7647],\n.el-button--warning[data-v-11fc7647]:active {\n  background: #cf9236;\n  border-color: #cf9236;\n  color: #FFF;\n}\n.el-button--warning[data-v-11fc7647]:active {\n  outline: 0;\n}\n.el-button--warning.is-disabled[data-v-11fc7647],\n.el-button--warning.is-disabled[data-v-11fc7647]:active,\n.el-button--warning.is-disabled[data-v-11fc7647]:focus,\n.el-button--warning.is-disabled[data-v-11fc7647]:hover {\n  color: #FFF;\n  background-color: #f3d19e;\n  border-color: #f3d19e;\n}\n.el-button--warning.is-plain[data-v-11fc7647] {\n  color: #E6A23C;\n  background: #fdf6ec;\n  border-color: #f5dab1;\n}\n.el-button--warning.is-plain[data-v-11fc7647]:focus,\n.el-button--warning.is-plain[data-v-11fc7647]:hover {\n  background: #E6A23C;\n  border-color: #E6A23C;\n  color: #FFF;\n}\n.el-button--warning.is-plain[data-v-11fc7647]:active {\n  background: #cf9236;\n  border-color: #cf9236;\n  color: #FFF;\n  outline: 0;\n}\n.el-button--warning.is-plain.is-disabled[data-v-11fc7647],\n.el-button--warning.is-plain.is-disabled[data-v-11fc7647]:active,\n.el-button--warning.is-plain.is-disabled[data-v-11fc7647]:focus,\n.el-button--warning.is-plain.is-disabled[data-v-11fc7647]:hover {\n  color: #f0c78a;\n  background-color: #fdf6ec;\n  border-color: #faecd8;\n}\n.el-button--danger[data-v-11fc7647] {\n  color: #FFF;\n  background-color: #F56C6C;\n  border-color: #F56C6C;\n}\n.el-button--danger[data-v-11fc7647]:focus,\n.el-button--danger[data-v-11fc7647]:hover {\n  background: #f78989;\n  border-color: #f78989;\n  color: #FFF;\n}\n.el-button--danger.is-active[data-v-11fc7647],\n.el-button--danger[data-v-11fc7647]:active {\n  background: #dd6161;\n  border-color: #dd6161;\n  color: #FFF;\n}\n.el-button--danger[data-v-11fc7647]:active {\n  outline: 0;\n}\n.el-button--danger.is-disabled[data-v-11fc7647],\n.el-button--danger.is-disabled[data-v-11fc7647]:active,\n.el-button--danger.is-disabled[data-v-11fc7647]:focus,\n.el-button--danger.is-disabled[data-v-11fc7647]:hover {\n  color: #FFF;\n  background-color: #fab6b6;\n  border-color: #fab6b6;\n}\n.el-button--danger.is-plain[data-v-11fc7647] {\n  color: #F56C6C;\n  background: #fef0f0;\n  border-color: #fbc4c4;\n}\n.el-button--danger.is-plain[data-v-11fc7647]:focus,\n.el-button--danger.is-plain[data-v-11fc7647]:hover {\n  background: #F56C6C;\n  border-color: #F56C6C;\n  color: #FFF;\n}\n.el-button--danger.is-plain[data-v-11fc7647]:active {\n  background: #dd6161;\n  border-color: #dd6161;\n  color: #FFF;\n  outline: 0;\n}\n.el-button--danger.is-plain.is-disabled[data-v-11fc7647],\n.el-button--danger.is-plain.is-disabled[data-v-11fc7647]:active,\n.el-button--danger.is-plain.is-disabled[data-v-11fc7647]:focus,\n.el-button--danger.is-plain.is-disabled[data-v-11fc7647]:hover {\n  color: #f9a7a7;\n  background-color: #fef0f0;\n  border-color: #fde2e2;\n}\n.el-button--info[data-v-11fc7647] {\n  color: #FFF;\n  background-color: #909399;\n  border-color: #909399;\n}\n.el-button--info[data-v-11fc7647]:focus,\n.el-button--info[data-v-11fc7647]:hover {\n  background: #a6a9ad;\n  border-color: #a6a9ad;\n  color: #FFF;\n}\n.el-button--info.is-active[data-v-11fc7647],\n.el-button--info[data-v-11fc7647]:active {\n  background: #82848a;\n  border-color: #82848a;\n  color: #FFF;\n}\n.el-button--info[data-v-11fc7647]:active {\n  outline: 0;\n}\n.el-button--info.is-disabled[data-v-11fc7647],\n.el-button--info.is-disabled[data-v-11fc7647]:active,\n.el-button--info.is-disabled[data-v-11fc7647]:focus,\n.el-button--info.is-disabled[data-v-11fc7647]:hover {\n  color: #FFF;\n  background-color: #c8c9cc;\n  border-color: #c8c9cc;\n}\n.el-button--info.is-plain[data-v-11fc7647] {\n  color: #909399;\n  background: #f4f4f5;\n  border-color: #d3d4d6;\n}\n.el-button--info.is-plain[data-v-11fc7647]:focus,\n.el-button--info.is-plain[data-v-11fc7647]:hover {\n  background: #909399;\n  border-color: #909399;\n  color: #FFF;\n}\n.el-button--info.is-plain[data-v-11fc7647]:active {\n  background: #82848a;\n  border-color: #82848a;\n  color: #FFF;\n  outline: 0;\n}\n.el-button--info.is-plain.is-disabled[data-v-11fc7647],\n.el-button--info.is-plain.is-disabled[data-v-11fc7647]:active,\n.el-button--info.is-plain.is-disabled[data-v-11fc7647]:focus,\n.el-button--info.is-plain.is-disabled[data-v-11fc7647]:hover {\n  color: #bcbec2;\n  background-color: #f4f4f5;\n  border-color: #e9e9eb;\n}\n.el-button--text[data-v-11fc7647],\n.el-button--text.is-disabled[data-v-11fc7647],\n.el-button--text.is-disabled[data-v-11fc7647]:focus,\n.el-button--text.is-disabled[data-v-11fc7647]:hover,\n.el-button--text[data-v-11fc7647]:active {\n  border-color: transparent;\n}\n.el-button--medium[data-v-11fc7647] {\n  padding: 10px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.el-button--mini[data-v-11fc7647],\n.el-button--small[data-v-11fc7647] {\n  font-size: 12px;\n  border-radius: 3px;\n}\n.el-button--medium.is-round[data-v-11fc7647] {\n  padding: 10px 20px;\n}\n.el-button--medium.is-circle[data-v-11fc7647] {\n  padding: 10px;\n}\n.el-button--small[data-v-11fc7647],\n.el-button--small.is-round[data-v-11fc7647] {\n  padding: 9px 15px;\n}\n.el-button--small.is-circle[data-v-11fc7647] {\n  padding: 9px;\n}\n.el-button--mini[data-v-11fc7647],\n.el-button--mini.is-round[data-v-11fc7647] {\n  padding: 7px 15px;\n}\n.el-button--mini.is-circle[data-v-11fc7647] {\n  padding: 7px;\n}\n.el-button--text[data-v-11fc7647] {\n  color: #409EFF;\n  background: 0 0;\n  padding-left: 0;\n  padding-right: 0;\n}\n.el-button--text[data-v-11fc7647]:focus,\n.el-button--text[data-v-11fc7647]:hover {\n  color: #66b1ff;\n  border-color: transparent;\n  background-color: transparent;\n}\n.el-button--text[data-v-11fc7647]:active {\n  color: #3a8ee6;\n  background-color: transparent;\n}\n.el-button [class*=el-icon-] + span[data-v-11fc7647] {\n  margin-left: 10px;\n}\n", map: {"version":3,"sources":["Button.vue","/Users/gengchenlong/git/my-components/src/components/Button.vue"],"names":[],"mappings":"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","file":"Button.vue","sourcesContent":["@import '../assets/font-awesome.min.css';\n.el-button {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #FFF;\n  border: 1px solid #DCDFE6;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  outline: 0;\n  margin: 0;\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  font-weight: 500;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  padding: 12px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.el-button + .el-button {\n  margin-left: 10px;\n}\n.el-button:focus,\n.el-button:hover {\n  color: #409EFF;\n  border-color: #c6e2ff;\n  background-color: #ecf5ff;\n}\n.el-button:active {\n  color: #3a8ee6;\n  border-color: #3a8ee6;\n  outline: 0;\n}\n.el-button::-moz-focus-inner {\n  border: 0;\n}\n.el-button [class*=el-icon-] + span {\n  margin-left: 5px;\n}\n.el-button.is-plain:focus,\n.el-button.is-plain:hover {\n  background: #FFF;\n  border-color: #409EFF;\n  color: #409EFF;\n}\n.el-button.is-active,\n.el-button.is-plain:active {\n  color: #3a8ee6;\n  border-color: #3a8ee6;\n}\n.el-button.is-plain:active {\n  background: #FFF;\n  outline: 0;\n}\n.el-button.is-disabled,\n.el-button.is-disabled:focus,\n.el-button.is-disabled:hover {\n  color: #C0C4CC;\n  cursor: not-allowed;\n  background-image: none;\n  background-color: #FFF;\n  border-color: #EBEEF5;\n}\n.el-button.is-disabled.el-button--text {\n  background-color: transparent;\n}\n.el-button.is-disabled.is-plain,\n.el-button.is-disabled.is-plain:focus,\n.el-button.is-disabled.is-plain:hover {\n  background-color: #FFF;\n  border-color: #EBEEF5;\n  color: #C0C4CC;\n}\n.el-button.is-loading {\n  position: relative;\n  pointer-events: none;\n}\n.el-button.is-loading:before {\n  pointer-events: none;\n  content: '';\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  border-radius: inherit;\n  background-color: rgba(255, 255, 255, 0.35);\n}\n.el-button.is-round {\n  border-radius: 20px;\n  padding: 12px 23px;\n}\n.el-button.is-circle {\n  border-radius: 50%;\n  padding: 12px;\n}\n.el-button--primary {\n  color: #FFF;\n  background-color: #409EFF;\n  border-color: #409EFF;\n}\n.el-button--primary:focus,\n.el-button--primary:hover {\n  background: #66b1ff;\n  border-color: #66b1ff;\n  color: #FFF;\n}\n.el-button--primary.is-active,\n.el-button--primary:active {\n  background: #3a8ee6;\n  border-color: #3a8ee6;\n  color: #FFF;\n}\n.el-button--primary:active {\n  outline: 0;\n}\n.el-button--primary.is-disabled,\n.el-button--primary.is-disabled:active,\n.el-button--primary.is-disabled:focus,\n.el-button--primary.is-disabled:hover {\n  color: #FFF;\n  background-color: #a0cfff;\n  border-color: #a0cfff;\n}\n.el-button--primary.is-plain {\n  color: #409EFF;\n  background: #ecf5ff;\n  border-color: #b3d8ff;\n}\n.el-button--primary.is-plain:focus,\n.el-button--primary.is-plain:hover {\n  background: #409EFF;\n  border-color: #409EFF;\n  color: #FFF;\n}\n.el-button--primary.is-plain:active {\n  background: #3a8ee6;\n  border-color: #3a8ee6;\n  color: #FFF;\n  outline: 0;\n}\n.el-button--primary.is-plain.is-disabled,\n.el-button--primary.is-plain.is-disabled:active,\n.el-button--primary.is-plain.is-disabled:focus,\n.el-button--primary.is-plain.is-disabled:hover {\n  color: #8cc5ff;\n  background-color: #ecf5ff;\n  border-color: #d9ecff;\n}\n.el-button--success {\n  color: #FFF;\n  background-color: #67C23A;\n  border-color: #67C23A;\n}\n.el-button--success:focus,\n.el-button--success:hover {\n  background: #85ce61;\n  border-color: #85ce61;\n  color: #FFF;\n}\n.el-button--success.is-active,\n.el-button--success:active {\n  background: #5daf34;\n  border-color: #5daf34;\n  color: #FFF;\n}\n.el-button--success:active {\n  outline: 0;\n}\n.el-button--success.is-disabled,\n.el-button--success.is-disabled:active,\n.el-button--success.is-disabled:focus,\n.el-button--success.is-disabled:hover {\n  color: #FFF;\n  background-color: #b3e19d;\n  border-color: #b3e19d;\n}\n.el-button--success.is-plain {\n  color: #67C23A;\n  background: #f0f9eb;\n  border-color: #c2e7b0;\n}\n.el-button--success.is-plain:focus,\n.el-button--success.is-plain:hover {\n  background: #67C23A;\n  border-color: #67C23A;\n  color: #FFF;\n}\n.el-button--success.is-plain:active {\n  background: #5daf34;\n  border-color: #5daf34;\n  color: #FFF;\n  outline: 0;\n}\n.el-button--success.is-plain.is-disabled,\n.el-button--success.is-plain.is-disabled:active,\n.el-button--success.is-plain.is-disabled:focus,\n.el-button--success.is-plain.is-disabled:hover {\n  color: #a4da89;\n  background-color: #f0f9eb;\n  border-color: #e1f3d8;\n}\n.el-button--warning {\n  color: #FFF;\n  background-color: #E6A23C;\n  border-color: #E6A23C;\n}\n.el-button--warning:focus,\n.el-button--warning:hover {\n  background: #ebb563;\n  border-color: #ebb563;\n  color: #FFF;\n}\n.el-button--warning.is-active,\n.el-button--warning:active {\n  background: #cf9236;\n  border-color: #cf9236;\n  color: #FFF;\n}\n.el-button--warning:active {\n  outline: 0;\n}\n.el-button--warning.is-disabled,\n.el-button--warning.is-disabled:active,\n.el-button--warning.is-disabled:focus,\n.el-button--warning.is-disabled:hover {\n  color: #FFF;\n  background-color: #f3d19e;\n  border-color: #f3d19e;\n}\n.el-button--warning.is-plain {\n  color: #E6A23C;\n  background: #fdf6ec;\n  border-color: #f5dab1;\n}\n.el-button--warning.is-plain:focus,\n.el-button--warning.is-plain:hover {\n  background: #E6A23C;\n  border-color: #E6A23C;\n  color: #FFF;\n}\n.el-button--warning.is-plain:active {\n  background: #cf9236;\n  border-color: #cf9236;\n  color: #FFF;\n  outline: 0;\n}\n.el-button--warning.is-plain.is-disabled,\n.el-button--warning.is-plain.is-disabled:active,\n.el-button--warning.is-plain.is-disabled:focus,\n.el-button--warning.is-plain.is-disabled:hover {\n  color: #f0c78a;\n  background-color: #fdf6ec;\n  border-color: #faecd8;\n}\n.el-button--danger {\n  color: #FFF;\n  background-color: #F56C6C;\n  border-color: #F56C6C;\n}\n.el-button--danger:focus,\n.el-button--danger:hover {\n  background: #f78989;\n  border-color: #f78989;\n  color: #FFF;\n}\n.el-button--danger.is-active,\n.el-button--danger:active {\n  background: #dd6161;\n  border-color: #dd6161;\n  color: #FFF;\n}\n.el-button--danger:active {\n  outline: 0;\n}\n.el-button--danger.is-disabled,\n.el-button--danger.is-disabled:active,\n.el-button--danger.is-disabled:focus,\n.el-button--danger.is-disabled:hover {\n  color: #FFF;\n  background-color: #fab6b6;\n  border-color: #fab6b6;\n}\n.el-button--danger.is-plain {\n  color: #F56C6C;\n  background: #fef0f0;\n  border-color: #fbc4c4;\n}\n.el-button--danger.is-plain:focus,\n.el-button--danger.is-plain:hover {\n  background: #F56C6C;\n  border-color: #F56C6C;\n  color: #FFF;\n}\n.el-button--danger.is-plain:active {\n  background: #dd6161;\n  border-color: #dd6161;\n  color: #FFF;\n  outline: 0;\n}\n.el-button--danger.is-plain.is-disabled,\n.el-button--danger.is-plain.is-disabled:active,\n.el-button--danger.is-plain.is-disabled:focus,\n.el-button--danger.is-plain.is-disabled:hover {\n  color: #f9a7a7;\n  background-color: #fef0f0;\n  border-color: #fde2e2;\n}\n.el-button--info {\n  color: #FFF;\n  background-color: #909399;\n  border-color: #909399;\n}\n.el-button--info:focus,\n.el-button--info:hover {\n  background: #a6a9ad;\n  border-color: #a6a9ad;\n  color: #FFF;\n}\n.el-button--info.is-active,\n.el-button--info:active {\n  background: #82848a;\n  border-color: #82848a;\n  color: #FFF;\n}\n.el-button--info:active {\n  outline: 0;\n}\n.el-button--info.is-disabled,\n.el-button--info.is-disabled:active,\n.el-button--info.is-disabled:focus,\n.el-button--info.is-disabled:hover {\n  color: #FFF;\n  background-color: #c8c9cc;\n  border-color: #c8c9cc;\n}\n.el-button--info.is-plain {\n  color: #909399;\n  background: #f4f4f5;\n  border-color: #d3d4d6;\n}\n.el-button--info.is-plain:focus,\n.el-button--info.is-plain:hover {\n  background: #909399;\n  border-color: #909399;\n  color: #FFF;\n}\n.el-button--info.is-plain:active {\n  background: #82848a;\n  border-color: #82848a;\n  color: #FFF;\n  outline: 0;\n}\n.el-button--info.is-plain.is-disabled,\n.el-button--info.is-plain.is-disabled:active,\n.el-button--info.is-plain.is-disabled:focus,\n.el-button--info.is-plain.is-disabled:hover {\n  color: #bcbec2;\n  background-color: #f4f4f5;\n  border-color: #e9e9eb;\n}\n.el-button--text,\n.el-button--text.is-disabled,\n.el-button--text.is-disabled:focus,\n.el-button--text.is-disabled:hover,\n.el-button--text:active {\n  border-color: transparent;\n}\n.el-button--medium {\n  padding: 10px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.el-button--mini,\n.el-button--small {\n  font-size: 12px;\n  border-radius: 3px;\n}\n.el-button--medium.is-round {\n  padding: 10px 20px;\n}\n.el-button--medium.is-circle {\n  padding: 10px;\n}\n.el-button--small,\n.el-button--small.is-round {\n  padding: 9px 15px;\n}\n.el-button--small.is-circle {\n  padding: 9px;\n}\n.el-button--mini,\n.el-button--mini.is-round {\n  padding: 7px 15px;\n}\n.el-button--mini.is-circle {\n  padding: 7px;\n}\n.el-button--text {\n  color: #409EFF;\n  background: 0 0;\n  padding-left: 0;\n  padding-right: 0;\n}\n.el-button--text:focus,\n.el-button--text:hover {\n  color: #66b1ff;\n  border-color: transparent;\n  background-color: transparent;\n}\n.el-button--text:active {\n  color: #3a8ee6;\n  background-color: transparent;\n}\n.el-button [class*=el-icon-] + span {\n  margin-left: 10px;\n}\n","<template>\n    <button class='el-button' @click=\"handleClick\" :class='[`el-button--${type}`,\n            {\"is-plain\":isPlain},\n            {\"is-circle\":isCircle},\n            {\"is-round\":round},\n        ]'\n    >\n        <i v-if='icon' class=\"el-icon\" :class='[`el-icon-${icon}`]'></i>\n        <span v-if=\"$slots.default\"><slot></slot></span>\n    </button>\n</template>\n\n<script>\n\n    export default {\n        name: 'eb-button',\n        props:{\n            icon:{\n                type: String,\n                default: ''\n            },\n            round: {\n                type: Boolean,\n                default: false\n            },\n            type:{\n                type: String,\n                default: 'default'\n            },\n            isPlain: {\n                type: Boolean,\n                default: false\n            },\n            isCircle: {\n                type: Boolean,\n                default: false\n            }\n        },\n        methods:{\n            handleClick(e) {\n                this.$emit('click', e)\n            }\n        }\n    }\n</script>\n\n<style lang=\"less\" scoped>\n@import '../assets/font-awesome.min.css';\n.el-button {\n    display: inline-block;\n    line-height: 1;\n    white-space: nowrap;\n    cursor: pointer;\n    background: #FFF;\n    border: 1px solid #DCDFE6;\n    color: #606266;\n    -webkit-appearance: none;\n    text-align: center;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    outline: 0;\n    margin: 0;\n    -webkit-transition: .1s;\n    transition: .1s;\n    font-weight: 500;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    padding: 12px 20px;\n    font-size: 14px;\n    border-radius: 4px\n}\n\n.el-button+.el-button {\n    margin-left: 10px\n}\n\n.el-button:focus,\n.el-button:hover {\n    color: #409EFF;\n    border-color: #c6e2ff;\n    background-color: #ecf5ff\n}\n\n.el-button:active {\n    color: #3a8ee6;\n    border-color: #3a8ee6;\n    outline: 0\n}\n\n.el-button::-moz-focus-inner {\n    border: 0\n}\n\n.el-button [class*=el-icon-]+span {\n    margin-left: 5px\n}\n\n.el-button.is-plain:focus,\n.el-button.is-plain:hover {\n    background: #FFF;\n    border-color: #409EFF;\n    color: #409EFF\n}\n\n.el-button.is-active,\n.el-button.is-plain:active {\n    color: #3a8ee6;\n    border-color: #3a8ee6\n}\n\n.el-button.is-plain:active {\n    background: #FFF;\n    outline: 0\n}\n\n.el-button.is-disabled,\n.el-button.is-disabled:focus,\n.el-button.is-disabled:hover {\n    color: #C0C4CC;\n    cursor: not-allowed;\n    background-image: none;\n    background-color: #FFF;\n    border-color: #EBEEF5\n}\n\n.el-button.is-disabled.el-button--text {\n    background-color: transparent\n}\n\n.el-button.is-disabled.is-plain,\n.el-button.is-disabled.is-plain:focus,\n.el-button.is-disabled.is-plain:hover {\n    background-color: #FFF;\n    border-color: #EBEEF5;\n    color: #C0C4CC\n}\n\n.el-button.is-loading {\n    position: relative;\n    pointer-events: none\n}\n\n.el-button.is-loading:before {\n    pointer-events: none;\n    content: '';\n    position: absolute;\n    left: -1px;\n    top: -1px;\n    right: -1px;\n    bottom: -1px;\n    border-radius: inherit;\n    background-color: rgba(255, 255, 255, .35)\n}\n\n.el-button.is-round {\n    border-radius: 20px;\n    padding: 12px 23px\n}\n\n.el-button.is-circle {\n    border-radius: 50%;\n    padding: 12px\n}\n\n.el-button--primary {\n    color: #FFF;\n    background-color: #409EFF;\n    border-color: #409EFF\n}\n\n.el-button--primary:focus,\n.el-button--primary:hover {\n    background: #66b1ff;\n    border-color: #66b1ff;\n    color: #FFF\n}\n\n.el-button--primary.is-active,\n.el-button--primary:active {\n    background: #3a8ee6;\n    border-color: #3a8ee6;\n    color: #FFF\n}\n\n.el-button--primary:active {\n    outline: 0\n}\n\n.el-button--primary.is-disabled,\n.el-button--primary.is-disabled:active,\n.el-button--primary.is-disabled:focus,\n.el-button--primary.is-disabled:hover {\n    color: #FFF;\n    background-color: #a0cfff;\n    border-color: #a0cfff\n}\n\n.el-button--primary.is-plain {\n    color: #409EFF;\n    background: #ecf5ff;\n    border-color: #b3d8ff\n}\n\n.el-button--primary.is-plain:focus,\n.el-button--primary.is-plain:hover {\n    background: #409EFF;\n    border-color: #409EFF;\n    color: #FFF\n}\n\n.el-button--primary.is-plain:active {\n    background: #3a8ee6;\n    border-color: #3a8ee6;\n    color: #FFF;\n    outline: 0\n}\n\n.el-button--primary.is-plain.is-disabled,\n.el-button--primary.is-plain.is-disabled:active,\n.el-button--primary.is-plain.is-disabled:focus,\n.el-button--primary.is-plain.is-disabled:hover {\n    color: #8cc5ff;\n    background-color: #ecf5ff;\n    border-color: #d9ecff\n}\n\n.el-button--success {\n    color: #FFF;\n    background-color: #67C23A;\n    border-color: #67C23A\n}\n\n.el-button--success:focus,\n.el-button--success:hover {\n    background: #85ce61;\n    border-color: #85ce61;\n    color: #FFF\n}\n\n.el-button--success.is-active,\n.el-button--success:active {\n    background: #5daf34;\n    border-color: #5daf34;\n    color: #FFF\n}\n\n.el-button--success:active {\n    outline: 0\n}\n\n.el-button--success.is-disabled,\n.el-button--success.is-disabled:active,\n.el-button--success.is-disabled:focus,\n.el-button--success.is-disabled:hover {\n    color: #FFF;\n    background-color: #b3e19d;\n    border-color: #b3e19d\n}\n\n.el-button--success.is-plain {\n    color: #67C23A;\n    background: #f0f9eb;\n    border-color: #c2e7b0\n}\n\n.el-button--success.is-plain:focus,\n.el-button--success.is-plain:hover {\n    background: #67C23A;\n    border-color: #67C23A;\n    color: #FFF\n}\n\n.el-button--success.is-plain:active {\n    background: #5daf34;\n    border-color: #5daf34;\n    color: #FFF;\n    outline: 0\n}\n\n.el-button--success.is-plain.is-disabled,\n.el-button--success.is-plain.is-disabled:active,\n.el-button--success.is-plain.is-disabled:focus,\n.el-button--success.is-plain.is-disabled:hover {\n    color: #a4da89;\n    background-color: #f0f9eb;\n    border-color: #e1f3d8\n}\n\n.el-button--warning {\n    color: #FFF;\n    background-color: #E6A23C;\n    border-color: #E6A23C\n}\n\n.el-button--warning:focus,\n.el-button--warning:hover {\n    background: #ebb563;\n    border-color: #ebb563;\n    color: #FFF\n}\n\n.el-button--warning.is-active,\n.el-button--warning:active {\n    background: #cf9236;\n    border-color: #cf9236;\n    color: #FFF\n}\n\n.el-button--warning:active {\n    outline: 0\n}\n\n.el-button--warning.is-disabled,\n.el-button--warning.is-disabled:active,\n.el-button--warning.is-disabled:focus,\n.el-button--warning.is-disabled:hover {\n    color: #FFF;\n    background-color: #f3d19e;\n    border-color: #f3d19e\n}\n\n.el-button--warning.is-plain {\n    color: #E6A23C;\n    background: #fdf6ec;\n    border-color: #f5dab1\n}\n\n.el-button--warning.is-plain:focus,\n.el-button--warning.is-plain:hover {\n    background: #E6A23C;\n    border-color: #E6A23C;\n    color: #FFF\n}\n\n.el-button--warning.is-plain:active {\n    background: #cf9236;\n    border-color: #cf9236;\n    color: #FFF;\n    outline: 0\n}\n\n.el-button--warning.is-plain.is-disabled,\n.el-button--warning.is-plain.is-disabled:active,\n.el-button--warning.is-plain.is-disabled:focus,\n.el-button--warning.is-plain.is-disabled:hover {\n    color: #f0c78a;\n    background-color: #fdf6ec;\n    border-color: #faecd8\n}\n\n.el-button--danger {\n    color: #FFF;\n    background-color: #F56C6C;\n    border-color: #F56C6C\n}\n\n.el-button--danger:focus,\n.el-button--danger:hover {\n    background: #f78989;\n    border-color: #f78989;\n    color: #FFF\n}\n\n.el-button--danger.is-active,\n.el-button--danger:active {\n    background: #dd6161;\n    border-color: #dd6161;\n    color: #FFF\n}\n\n.el-button--danger:active {\n    outline: 0\n}\n\n.el-button--danger.is-disabled,\n.el-button--danger.is-disabled:active,\n.el-button--danger.is-disabled:focus,\n.el-button--danger.is-disabled:hover {\n    color: #FFF;\n    background-color: #fab6b6;\n    border-color: #fab6b6\n}\n\n.el-button--danger.is-plain {\n    color: #F56C6C;\n    background: #fef0f0;\n    border-color: #fbc4c4\n}\n\n.el-button--danger.is-plain:focus,\n.el-button--danger.is-plain:hover {\n    background: #F56C6C;\n    border-color: #F56C6C;\n    color: #FFF\n}\n\n.el-button--danger.is-plain:active {\n    background: #dd6161;\n    border-color: #dd6161;\n    color: #FFF;\n    outline: 0\n}\n\n.el-button--danger.is-plain.is-disabled,\n.el-button--danger.is-plain.is-disabled:active,\n.el-button--danger.is-plain.is-disabled:focus,\n.el-button--danger.is-plain.is-disabled:hover {\n    color: #f9a7a7;\n    background-color: #fef0f0;\n    border-color: #fde2e2\n}\n\n.el-button--info {\n    color: #FFF;\n    background-color: #909399;\n    border-color: #909399\n}\n\n.el-button--info:focus,\n.el-button--info:hover {\n    background: #a6a9ad;\n    border-color: #a6a9ad;\n    color: #FFF\n}\n\n.el-button--info.is-active,\n.el-button--info:active {\n    background: #82848a;\n    border-color: #82848a;\n    color: #FFF\n}\n\n.el-button--info:active {\n    outline: 0\n}\n\n.el-button--info.is-disabled,\n.el-button--info.is-disabled:active,\n.el-button--info.is-disabled:focus,\n.el-button--info.is-disabled:hover {\n    color: #FFF;\n    background-color: #c8c9cc;\n    border-color: #c8c9cc\n}\n\n.el-button--info.is-plain {\n    color: #909399;\n    background: #f4f4f5;\n    border-color: #d3d4d6\n}\n\n.el-button--info.is-plain:focus,\n.el-button--info.is-plain:hover {\n    background: #909399;\n    border-color: #909399;\n    color: #FFF\n}\n\n.el-button--info.is-plain:active {\n    background: #82848a;\n    border-color: #82848a;\n    color: #FFF;\n    outline: 0\n}\n\n.el-button--info.is-plain.is-disabled,\n.el-button--info.is-plain.is-disabled:active,\n.el-button--info.is-plain.is-disabled:focus,\n.el-button--info.is-plain.is-disabled:hover {\n    color: #bcbec2;\n    background-color: #f4f4f5;\n    border-color: #e9e9eb\n}\n\n.el-button--text,\n.el-button--text.is-disabled,\n.el-button--text.is-disabled:focus,\n.el-button--text.is-disabled:hover,\n.el-button--text:active {\n    border-color: transparent\n}\n\n.el-button--medium {\n    padding: 10px 20px;\n    font-size: 14px;\n    border-radius: 4px\n}\n\n.el-button--mini,\n.el-button--small {\n    font-size: 12px;\n    border-radius: 3px\n}\n\n.el-button--medium.is-round {\n    padding: 10px 20px\n}\n\n.el-button--medium.is-circle {\n    padding: 10px\n}\n\n.el-button--small,\n.el-button--small.is-round {\n    padding: 9px 15px\n}\n\n.el-button--small.is-circle {\n    padding: 9px\n}\n\n.el-button--mini,\n.el-button--mini.is-round {\n    padding: 7px 15px\n}\n\n.el-button--mini.is-circle {\n    padding: 7px\n}\n\n.el-button--text {\n    color: #409EFF;\n    background: 0 0;\n    padding-left: 0;\n    padding-right: 0\n}\n\n.el-button--text:focus,\n.el-button--text:hover {\n    color: #66b1ff;\n    border-color: transparent;\n    background-color: transparent\n}\n\n.el-button--text:active {\n    color: #3a8ee6;\n    background-color: transparent\n}\n.el-button [class*=el-icon-]+span{\n    margin-left: 10px;\n}\n</style>"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__ = "data-v-11fc7647";
      /* module identifier */
      const __vue_module_identifier__ = undefined;
      /* functional template */
      const __vue_is_functional_template__ = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__ = /*#__PURE__*/normalizeComponent(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        false,
        createInjector,
        undefined,
        undefined
      );

    function install(Vue) {
      Vue.component(__vue_component__.name, __vue_component__);
    }

    return install;

})));
