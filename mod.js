// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function i(e){return"number"==typeof e}function n(e){var t,i="";for(t=0;t<e;t++)i+="0";return i}function r(e,t,i){var r=!1,s=t-e.length;return s<0||(function(e){return"-"===e[0]}(e)&&(r=!0,e=e.substr(1)),e=i?e+n(s):n(s)+e,r&&(e="-"+e)),e}var s=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function a(e){var t,n,a;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=e.arg,a=parseInt(n,10),!isFinite(a)){if(!i(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===e.specifier||10!==t)&&(a=4294967295+a+1),a<0?(n=(-a).toString(t),e.precision&&(n=r(n,e.precision,e.padRight)),n="-"+n):(n=a.toString(t),a||e.precision?e.precision&&(n=r(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===t&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):s.call(n)),8===t&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function _(e){return"string"==typeof e}var c=Math.abs,u=String.prototype.toLowerCase,h=String.prototype.toUpperCase,d=String.prototype.replace,p=/e\+(\d)$/,l=/e-(\d)$/,f=/^(\d+)$/,g=/^(\d+)e/,m=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function k(e){var t,n,r=parseFloat(e.arg);if(!isFinite(r)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+n);r=e.arg}switch(e.specifier){case"e":case"E":n=r.toExponential(e.precision);break;case"f":case"F":n=r.toFixed(e.precision);break;case"g":case"G":c(r)<1e-4?((t=e.precision)>0&&(t-=1),n=r.toExponential(t)):n=r.toPrecision(e.precision),e.alternate||(n=d.call(n,v,"$1e"),n=d.call(n,w,"e"),n=d.call(n,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=d.call(n,p,"e+0$1"),n=d.call(n,l,"e-0$1"),e.alternate&&(n=d.call(n,f,"$1."),n=d.call(n,g,"$1.e")),r>=0&&e.sign&&(n=e.sign+n),n=e.specifier===h.call(e.specifier)?h.call(n):u.call(n)}function S(e){var t,i="";for(t=0;t<e;t++)i+=" ";return i}function q(e,t,i){var n=t-e.length;return n<0?e:e=i?e+S(n):S(n)+e}var x=String.fromCharCode,b=isNaN,y=Array.isArray;function L(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function I(e){var t,i,n,s,o,c,u,h,d;if(!y(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",u=1,h=0;h<e.length;h++)if(_(n=e[h]))c+=n;else{if(t=void 0!==n.precision,!(n=L(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+h+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),i=n.flags,d=0;d<i.length;d++)switch(s=i.charAt(d)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=i.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+s)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,b(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,b(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!b(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=b(o)?String(n.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=r(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=q(n.arg,n.width,n.padRight)),c+=n.arg||"",u+=1}return c}var E=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function R(e){var t,i,n,r;for(i=[],r=0,n=E.exec(e);n;)(t=e.slice(r,E.lastIndex-n[0].length)).length&&i.push(t),i.push(C(n)),r=E.lastIndex,n=E.exec(e);return(t=e.slice(r)).length&&i.push(t),i}function W(e){return"string"==typeof e}function N(e){var t,i,n;if(!W(e))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=R(e),(i=new Array(arguments.length))[0]=t,n=1;n<i.length;n++)i[n]=arguments[n];return I.apply(null,i)}var O,D=Object.prototype,V=D.toString,A=D.__defineGetter__,F=D.__defineSetter__,Q=D.__lookupGetter__,P=D.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,i){var n,r,s,o;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===V.call(i))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((r="value"in i)&&(Q.call(e,t)||P.call(e,t)?(n=e.__proto__,e.__proto__=D,delete e[t],e[t]=i.value,e.__proto__=n):e[t]=i.value),s="get"in i,o="set"in i,r&&(s||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&A&&A.call(e,t,i.get),o&&F&&F.call(e,t,i.set),e};var T=O;function j(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var i=function e(){if(this instanceof e){var i=[null];i.push.apply(i,arguments);var n=Function.bind.apply(t,i);return new n}return t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),i}var B=j(Object.freeze({__proto__:null,default:()=>()=>{}}));function $(e,t,i){T(e,t,{configurable:!1,enumerable:!1,writable:!1,value:i})}var G=Boolean;function U(e){return"string"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return Z&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"";var K=z()?function(e){var t,i,n,r,s;if(null==e)return M.call(e);i=e[J],s=J,t=null!=(r=e)&&X.call(r,s);try{e[J]=void 0}catch(t){return M.call(e)}return n=M.call(e),t?e[J]=i:delete e[J],n}:function(e){return M.call(e)},Y=String.prototype.valueOf;var ee=z();function te(e){return"object"==typeof e&&(e instanceof String||(ee?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function ie(e){return U(e)||te(e)}$(ie,"isPrimitive",U),$(ie,"isObject",te);var ne=/[-\/\\^$*+?.()|[\]{}]/g;function re(e){var t,i;if(!U(e))throw new TypeError(N("invalid argument. Must provide a regular expression string. Value: `%s`.",e));if("/"===e[0])for(i=e.length-1;i>=0&&"/"!==e[i];i--);return void 0===i||i<=0?e.replace(ne,"\\$&"):(t=(t=e.substring(1,i)).replace(ne,"\\$&"),e=e[0]+t+e.substring(i))}function se(e,t,i){return e.replace(t,i)}function oe(){}function ae(e){throw e}function _e(){return{comment:"",delimiter:",",doublequote:!0,escape:"",ltrim:!1,maxRows:1e308,newline:"\r\n",onClose:oe,onColumn:oe,onComment:null,onError:ae,onRow:oe,onSkip:null,onWarn:null,quote:'"',quoting:!0,rowBuffer:[],rtrim:!1,skip:"",skipBlankRows:!1,skipRow:null,strict:!0,trimComment:!0,whitespace:[" "]}}var ce=["closed","comment","escape","error","field","init","invalid_quote_end","quote_end","quoted_escape","quoted_field","skip","skipped_comment","skipped_escape","skipped_field","skipped_invalid_quote_end","skipped_quote_end","skipped_quoted_escape","skipped_quoted_field"];var ue=function(){var e,t;for(e={},t=0;t<ce.length;t++)e[ce[t]]=t;return e}(),he=ue.closed;var de=B("state:comment"),pe=ue.init;var le=ue.error;function fe(e,t){return e<t?t:e}var ge=B("state:escape"),me=ue.error,we=ue.field;var ve=B("state:field"),ke=ue.escape,Se=ue.field,qe=ue.init,xe=ue.quoted_field;var be=B("state:init"),ye=ue.comment,Le=ue.field,Ie=ue.escape,Ee=ue.init,Ce=ue.quoted_field,Re=ue.skip;var We=B("state:invalid_quote_end"),Ne=ue.error,Oe=ue.field,De=ue.init;function Ve(e,t){e._isWhitespace(e._qidx+1,e._cursor)?e._raiseWarning("INVALID_CLOSING_QUOTE")._rewind(e._cursor-e._qidx)._changeState(t):(We("Error."),e._setErrorState("INVALID_CLOSING_QUOTE")._changeState(Ne))}var Ae=B("state:quote_end"),Fe=ue.error,Qe=ue.field,Pe=ue.init,Te=ue.invalid_quote_end,je=ue.quoted_field;var Be=B("state:quoted_escape"),$e=ue.error,Ge=ue.quoted_field;var Ue=B("state:quoted_field"),Ze=ue.quote_end,ze=ue.quoted_escape;var Me=B("state:skip"),Xe=ue.init,He=ue.skip,Je=ue.skipped_comment,Ke=ue.skipped_field,Ye=ue.skipped_escape,et=ue.skipped_quoted_field;var tt=B("state:skipped_comment"),it=ue.init;var nt=B("state:skipped_escape"),rt=ue.skipped_field;var st=B("state:skipped_field"),ot=ue.init,at=ue.skipped_escape,_t=ue.skipped_field,ct=ue.skipped_quoted_field;var ut=B("state:skipped_invalid_quote_end"),ht=ue.skipped_field,dt=ue.init;var pt=B("state:skipped_quote_end"),lt=ue.init,ft=ue.skipped_field,gt=ue.skipped_invalid_quote_end,mt=ue.skipped_quoted_field;var wt=B("state:skipped_quoted_escape"),vt=ue.skipped_quoted_field;var kt=B("state:skipped_quoted_field"),St=ue.skipped_quote_end,qt=ue.skipped_quoted_escape;var xt={closed:function(e){return function(){e._changeState(he)}},comment:function(e){var t,i;return t=e._newlineLastIndex,i=e._newline,function(n){if(de("Char: %s",n),n===i[t]&&e._scan(i,t))return de("Newline."),void e._rewind(t)._changeState(pe);e._push(n)}},escape:function(e){var t,i,n,r,s,o,a,_,c,u,h,d,p;return t=e._delimiterLastIndex,a=e._delimiter,i=e._newlineLastIndex,_=e._newline,n=e._commentLastIndex,c=e._comment,s=e._skipLastIndex,d=e._skip,r=e._escapeLastIndex,o=e._escapeLength,u=e._escape,h=e._strict,p=fe(fe(t,i),r),function(l){var f=e._cursor,g=e._eidx,m=f-g;if(ge("Char: %s",l),m===t&&l===a[t]&&e._scan(a,t))return ge("Delimiter."),void e._copyWithin(g-r,g+1,t)._rewind(o)._push(l)._changeState(we);if(m===i&&l===_[i]&&e._scan(_,i))return ge("Newline."),void e._copyWithin(g-r,g+1,i)._rewind(o)._push(l)._changeState(we);if(m===r&&l===u[r]&&e._scan(u,r))return ge("Escape."),void e._copyWithin(g-r,g+1,r)._rewind(o)._push(l)._changeState(we);if(c&&f-n==0&&l===c[n]&&e._scan(c,n))return ge("Comment."),void e._copyWithin(g-n,g+1,n)._rewind(o)._push(l)._changeState(we);if(d&&f-s==0&&l===d[s]&&e._scan(d,s))return ge("Skip."),void e._copyWithin(g-s,g+1,s)._rewind(o)._push(l)._changeState(we);if(m>=p)return h?(ge("Error."),void e._setErrorState("INVALID_ESCAPE")._changeState(me)):(ge("Escape sequence is not followed by a special character sequence."),void e._raiseWarning("INVALID_ESCAPE")._push(l)._changeState(we));e._push(l)}},error:function(e){return function(){e._changeState(le)}},field:function(e){var t,i,n,r,s,o,a,_,c,u;return n=e._escapeLastIndex,_=e._escape,r=e._quoteLastIndex,u=e._quote,t=e._delimiterLastIndex,s=e._delimiter,i=e._newlineLastIndex,o=e._newline,a=e._quoting,c=e._strict,function(h){var d=e._cursor-e._cidx+1;if(ve("Char: %s",h),h===_[n]&&e._scan(_,n))return ve("Escape."),void e._push(h)._changeState(ke);if(d-r==0&&h===u[r]&&e._scan(u,r))return a?(ve("Quote."),void e._rewind(r)._changeState(xe)):void e._push(h);if(!1===c&&h===u[r]&&e._scan(u,r))return a&&e._isWhitespace(e._cidx,e._cursor-r)?(ve("Quote."),void e._raiseWarning("INVALID_OPENING_QUOTE")._rewind(d)._changeState(xe)):void e._push(h);if(h===s[t]&&e._scan(s,t))return ve("Delimiter."),void e._rewind(t)._changeState(Se);if(h===o[i]&&e._scan(o,i))return ve("Newline."),void e._rewind(i)._changeState(qe);e._push(h)}},init:function(e){var t,i,n,r,s,o,a,_,c,u,h,d,p,l;return n=e._commentLastIndex,c=e._comment,o=e._skipLastIndex,l=e._skip,r=e._escapeLastIndex,h=e._escape,s=e._quoteLastIndex,p=e._quote,t=e._delimiterLastIndex,a=e._delimiter,i=e._newlineLastIndex,_=e._newline,u=e._quoting,d=e._strict,function(f){var g=e._cursor+1;if(be("Char: %s",f),c&&g-n==0&&f===c[n]&&e._scan(c,n))return be("Comment."),void e._rewind(n)._changeState(ye);if(l&&g-o==0&&f===l[o]&&e._scan(l,o))return be("Skip."),void e._rewind(o)._changeState(Re);if(f===h[r]&&e._scan(h,r))return be("Escape."),void e._push(f)._changeState(Ie);if(g-s==0&&f===p[s]&&e._scan(p,s))return u?(be("Quote."),void e._rewind(s)._changeState(Ce)):void e._push(f);if(!1===d&&f===p[s]&&e._scan(p,s))return u&&e._isWhitespace(0,e._cursor-s)?(be("Quote."),void e._raiseWarning("INVALID_OPENING_QUOTE")._rewind(g)._changeState(Ce)):void e._push(f);if(f===a[t]&&e._scan(a,t))return be("Delimiter."),void e._rewind(t)._changeState(Le);if(f===_[i]&&e._scan(_,i))return be("Newline."),void e._rewind(i)._changeState(Ee);e._push(f)}},invalid_quote_end:function(e){var t,i,n,r;return t=e._delimiterLastIndex,n=e._delimiter,i=e._newlineLastIndex,r=e._newline,function(s){if(We("Char: %s",s),s===n[t]&&e._scan(n,t))return We("Delimiter."),e._rewind(t),void Ve(e,Oe);if(s===r[i]&&e._scan(r,i))return We("Newline."),e._rewind(i),void Ve(e,De);e._push(s)}},quote_end:function(e){var t,i,n,r,s,o,a,_,c;return t=e._delimiterLastIndex,s=e._delimiter,i=e._newlineLastIndex,o=e._newline,n=e._quoteLastIndex,_=e._quote,r=e._doublequote,a=e._strict,c=fe(fe(t,i),n),function(u){if(Ae("Char: %s",u),r&&u===_[n]&&e._scan(_,n))return Ae("Double quote."),void e._push(u)._changeState(je);if(u===s[t]&&e._scan(s,t))return Ae("Delimiter."),void e._rewind(t)._changeState(Qe);if(u===o[i]&&e._scan(o,i))return Ae("Newline."),void e._rewind(i)._changeState(Pe);if(e._cursor-e._qidx>=c)return a?(Ae("Error."),void e._setErrorState("INVALID_CLOSING_QUOTE")._changeState(Fe)):(Ae("Invalid closing quote."),void e._push(u)._changeState(Te));e._push(u)}},quoted_escape:function(e){var t,i,n,r,s;return i=e._quoteLastIndex,s=e._quote,t=e._escapeLastIndex,n=e._escapeLength,r=e._strict,function(o){var a=e._cursor,_=e._eidx,c=a-_;if(Be("Char: %s",o),c===i&&o===s[i]&&e._scan(s,i))return Be("Quote."),void e._copyWithin(_-t,_+1,i)._rewind(n)._push(o)._changeState(Ge);if(c>=i)return r?(Be("Error."),void e._setErrorState("INVALID_QUOTED_ESCAPE")._changeState($e)):(Be("Escape sequence is not followed by a quote sequence."),void e._raiseWarning("INVALID_QUOTED_ESCAPE")._push(o)._changeState(Ge));e._push(o)}},quoted_field:function(e){var t,i,n,r,s;return t=e._escapeLastIndex,r=e._escape,i=e._quoteLastIndex,s=e._quote,n=e._doublequote,function(o){if(Ue("Char: %s",o),!1===n&&o===r[t]&&e._scan(r,t))return Ue("Escape."),void e._push(o)._changeState(ze);if(o===s[i]&&e._scan(s,i))return Ue("Quote."),void e._rewind(i)._changeState(Ze);e._push(o)}},skip:function(e){var t,i,n,r,s,o,a,_,c,u,h,d,p,l;return n=e._commentLastIndex,c=e._comment,o=e._skipLastIndex,l=e._skip,r=e._escapeLastIndex,h=e._escape,s=e._quoteLastIndex,p=e._quote,t=e._delimiterLastIndex,a=e._delimiter,i=e._newlineLastIndex,_=e._newline,u=e._quoting,d=e._strict,function(f){var g=e._cursor+1;if(Me("Char: %s",f),c&&g-n==0&&f===c[n]&&e._scan(c,n))return Me("Comment."),void e._push(f)._changeState(Je);if(l&&g-o==0&&f===l[o]&&e._scan(l,o))return Me("Skip."),void e._push(f)._changeState(He);if(f===h[r]&&e._scan(h,r))return Me("Escape."),void e._push(f)._changeState(Ye);if(g-s==0&&f===p[s]&&e._scan(p,s))return u?(Me("Quote."),void e._push(f)._changeState(et)):void e._push(f);if(!1===d&&f===p[s]&&e._scan(p,s))return u&&e._isWhitespace(0,e._cursor-s)?(Me("Quote."),void e._push(f)._changeState(et)):void e._push(f);if(f===a[t]&&e._scan(a,t))return Me("Delimiter."),void e._push(f)._changeState(Ke);if(f===_[i]&&e._scan(_,i))return Me("Newline."),void e._rewind(i)._changeState(Xe);e._push(f)}},skipped_comment:function(e){var t,i;return t=e._newlineLastIndex,i=e._newline,function(n){if(tt("Char: %s",n),n===i[t]&&e._scan(i,t))return tt("Newline."),void e._rewind(t)._changeState(it);e._push(n)}},skipped_escape:function(e){var t,i,n,r,s,o,a,_,c,u,h;return t=e._delimiterLastIndex,o=e._delimiter,i=e._newlineLastIndex,a=e._newline,n=e._commentLastIndex,_=e._comment,s=e._skipLastIndex,u=e._skip,r=e._escapeLastIndex,c=e._escape,h=fe(fe(t,i),r),function(d){var p=e._cursor,l=e._eidx,f=p-l;if(nt("Char: %s",d),f===t&&d===o[t]&&e._scan(o,t))return nt("Delimiter."),void e._push(d)._changeState(rt);if(f===i&&d===a[i]&&e._scan(a,i))return nt("Newline."),void e._push(d)._changeState(rt);if(f===r&&d===c[r]&&e._scan(c,r))return nt("Escape."),void e._push(d)._changeState(rt);if(_&&p-n==0&&d===_[n]&&e._scan(_,n))return nt("Comment."),void e._push(d)._changeState(rt);if(u&&p-s==0&&d===u[s]&&e._scan(u,s))return nt("Skip."),void e._push(d)._changeState(rt);if(f>=h)return nt("Normal character sequence."),void e._push(d)._changeState(rt);e._push(d)}},skipped_field:function(e){var t,i,n,r,s,o,a,_,c,u;return n=e._escapeLastIndex,_=e._escape,r=e._quoteLastIndex,u=e._quote,t=e._delimiterLastIndex,s=e._delimiter,i=e._newlineLastIndex,o=e._newline,a=e._quoting,c=e._strict,function(h){var d=e._cursor-e._cidx+1;if(st("Char: %s",h),h===_[n]&&e._scan(_,n))return st("Escape."),void e._push(h)._changeState(at);if(d-r==0&&h===u[r]&&e._scan(u,r))return e._push(h),a?(st("Quote."),void e._changeState(ct)):void 0;if(!1===c&&h===u[r]&&e._scan(u,r))return e._push(h),a&&e._isWhitespace(e._cidx,e._cursor-r)?(st("Quote."),void e._changeState(ct)):void 0;if(h===s[t]&&e._scan(s,t))return st("Delimiter."),void e._push(h)._changeState(_t);if(h===o[i]&&e._scan(o,i))return st("Newline."),void e._rewind(i)._changeState(ot);e._push(h)}},skipped_invalid_quote_end:function(e){var t,i,n,r;return t=e._delimiterLastIndex,n=e._delimiter,i=e._newlineLastIndex,r=e._newline,function(s){if(ut("Char: %s",s),s===n[t]&&e._scan(n,t))return ut("Delimiter."),void e._push(s)._changeState(ht);if(s===r[i]&&e._scan(r,i))return ut("Newline."),void e._rewind(i)._changeState(dt);e._push(s)}},skipped_quote_end:function(e){var t,i,n,r,s,o,a,_;return t=e._delimiterLastIndex,s=e._delimiter,i=e._newlineLastIndex,o=e._newline,n=e._quoteLastIndex,a=e._quote,r=e._doublequote,_=fe(fe(t,i),n),function(c){if(pt("Char: %s",c),r&&c===a[n]&&e._scan(a,n))return pt("Double quote."),void e._push(c)._changeState(mt);if(c===s[t]&&e._scan(s,t))return pt("Delimiter."),void e._push(c)._changeState(ft);if(c===o[i]&&e._scan(o,i))return pt("Newline."),void e._rewind(i)._changeState(lt);if(e._cursor-e._qidx>=_)return pt("Invalid closing quote."),void e._push(c)._changeState(gt);e._push(c)}},skipped_quoted_escape:function(e){var t,i;return t=e._quoteLastIndex,i=e._quote,function(n){var r=e._cursor,s=e._eidx,o=r-s;if(wt("Char: %s",n),o===t&&n===i[t]&&e._scan(i,t))return wt("Quote."),void e._push(n)._changeState(vt);if(o>=t)return wt("Escape sequence is not followed by a quote sequence."),void e._push(n)._changeState(vt);e._push(n)}},skipped_quoted_field:function(e){var t,i,n,r,s;return t=e._escapeLastIndex,r=e._escape,i=e._quoteLastIndex,s=e._quote,n=e._doublequote,function(o){if(kt("Char: %s",o),!1===n&&o===r[t]&&e._scan(r,t))return kt("Escape."),void e._push(o)._changeState(qt);if(o===s[i]&&e._scan(s,i))return kt("Quote."),void e._push(o)._changeState(St);e._push(o)}}};function bt(e){var t,i;for(t=[],i=0;i<ce.length;i++)t.push(xt[ce[i]](e));return t}var yt,Lt=B("parser"),It=ue.closed,Et=ue.comment,Ct=ue.error,Rt=ue.escape,Wt=ue.field,Nt=ue.init,Ot=ue.invalid_quote_end,Dt=ue.quote_end,Vt=ue.quoted_escape,At=ue.quoted_field,Ft=ue.skip;function Qt(e){var t,i;for(t="(?:",i=0;i<e.length-1;i++)t+=re(e[i])+"|";return t+re(e[i])+")"}function Pt(e){var t;return this instanceof Pt?(e=e||{},t=_e(),this._buffer=[],this._cursor=-1,this._cidx=0,this._qidx=-1,this._eidx=-1,this._rowBufferFLG=G(e.rowBuffer),this._rowBuffer=e.rowBuffer||t.rowBuffer,this._col=0,this._row=0,this._line=0,this._commented=!1,this._skipped=!1,this._errname="",this._comment=e.comment||t.comment,this._delimiter=e.delimiter||t.delimiter,this._doublequote=void 0===e.doublequote?t.doublequote:e.doublequote,this._escape=e.escape||t.escape,this._ltrim=void 0===e.ltrim?t.ltrim:e.ltrim,this._maxRows=void 0===e.maxRows?t.maxRows:e.maxRows,this._newline=e.newline||t.newline,this._quote=e.quote||t.quote,this._quoting=void 0===e.quoting?t.quoting:e.quoting,this._rtrim=void 0===e.rtrim?t.rtrim:e.rtrim,this._skip=e.skip||t.skip,this._skipBlankRows=void 0===e.skipBlankRows?t.skipBlankRows:e.skipBlankRows,this._skipRow=e.skipRow||t.skipRow,this._strict=void 0===e.strict?t.strict:e.strict,this._trimComment=void 0===e.trimComment?t.trimComment:e.trimComment,this._whitespace=Qt(e.whitespace||t.whitespace),this._reWhitespace=new RegExp("^"+this._whitespace+"*([\\S\\s]*?)"+this._whitespace+"*$"),this._reWhitespaceLeft=new RegExp("^"+this._whitespace+"*"),this._reWhitespaceRight=new RegExp(this._whitespace+"*$"),this._onClose=e.onClose||t.onClose,this._onColumn=e.onColumn||t.onColumn,this._onComment=e.onComment||t.onComment,this._onRow=e.onRow||t.onRow,this._onSkip=e.onSkip||t.onSkip,this._onError=e.onError||t.onError,this._onWarn=e.onWarn||t.onWarn,this._commentLength=this._comment.length,this._commentLastIndex=this._commentLength-1,this._delimiterLength=this._delimiter.length,this._delimiterLastIndex=this._delimiterLength-1,this._escapeLength=this._escape.length,this._escapeLastIndex=this._escapeLength-1,this._newlineLength=this._newline.length,this._newlineLastIndex=this._newlineLength-1,this._quoteLength=this._quote.length,this._quoteLastIndex=this._quoteLength-1,this._skipLength=this._skip.length,this._skipLastIndex=this._skipLength-1,this._skipRow&&this._skipRow(0,0)?(this._state=Ft,this._skipped=!0):this._state=Nt,this._states=bt(this),this):arguments.length?new Pt(e):new Pt}ue.skipped_comment,ue.skipped_escape,ue.skipped_field,ue.skipped_invalid_quote_end,ue.skipped_quote_end,ue.skipped_quoted_escape,ue.skipped_quoted_field,$(Pt.prototype,"_push",(function(e){var t=this._buffer;return this._cursor+=1,this._cursor>=t.length?(t.push(e),Lt("Internal buffer size increased. Length: %d.",t.length)):t[this._cursor]=e,Lt("Cursor: %d. Push: %s",this._cursor,e),this})),$(Pt.prototype,"_rewind",(function(e){return this._cursor-=e,Lt("Rewind: %d. Cursor: %d.",e,this._cursor),this})),$(Pt.prototype,"_copyWithin",(function(e,t,i){var n,r;for(n=this._buffer,r=0;r<i;r++)n[e+r]=n[t+r];return this})),$(Pt.prototype,"_slice",(function(e,t){return this._buffer.slice(e,t+1).join("")})),$(Pt.prototype,"_isWhitespace",(function(e,t){return""===se(this._slice(e,t),this._reWhitespaceLeft,"")})),$(Pt.prototype,"_reset",(function(){return this._col=0,this._cidx=0,this._qidx=-1,this._eidx=-1,this._skipRow&&this._skipRow(this._row,this._line)?(this._state=Ft,this._skipped=!0):(this._state=Nt,this._skipped=!1),this._commented=!1,this._cursor=-1,Lt("Parser reset."),this})),$(Pt.prototype,"_setField",(function(e,t){var i=this._rowBuffer;return t>=i.length?(i.push(e),Lt("Row buffer size increased. Length: %d.",i.length)):i[t]=e,this})),$(Pt.prototype,"_getField",(function(e,t){var i=this._slice(e,t);return this._ltrim?this._rtrim?se(i,this._reWhitespace,"$1"):se(i,this._reWhitespaceLeft,""):this._rtrim?se(i,this._reWhitespaceRight,""):i})),$(Pt.prototype,"_getRow",(function(){return this._rowBufferFLG?this._rowBuffer:this._rowBuffer.slice(0,this._col)})),$(Pt.prototype,"_scan",(function(e,t){var i,n,r;for(i=this._buffer,n=this._cursor-t+1,r=0;r<t&&i[n+r]===e[r];r++);return r===t})),$(Pt.prototype,"_onField",(function(){var e=this._getField(this._cidx,this._cursor);return this._setField(e,this._col),this._onColumn(e,this._row,this._col,this._line),Lt("Field. Line: %d. Row: %d. Column: %d. Value: %s",this._line,this._row,this._col,e),this._col+=1,this._cidx=this._cursor+1,this._qidx=-1,this._eidx=-1,this})),$(Pt.prototype,"_onRecord",(function(){var e;return e=this._getField(this._cidx,this._cursor),!this._skipBlankRows||0!==this._col||""!==e&&""!==se(e,this._reWhitespaceLeft,"")?(this._setField(e,this._col),this._onColumn(e,this._row,this._col,this._line),this._col+=1,this._onRow(this._getRow(),this._row,this._col,this._line),Lt("Record. Line: %d. Fields: %d.",this._line,this._col),this._row+=1,this._line+=1,this._reset(),this._row>=this._maxRows&&this._changeState(It),this):this._onSkippedRow()})),$(Pt.prototype,"_onCommentedRow",(function(){var e;return this._onComment?(e=this._slice(0,this._cursor),this._trimComment&&(e=se(e,this._reWhitespaceLeft,"")),this._onComment(e,this._line),Lt("Comment. Line: %d. Value: %s",this._line,e)):Lt("Comment. Line: %d.",this._line),this._line+=1,this._reset(),this})),$(Pt.prototype,"_onSkippedRow",(function(){var e;return this._onSkip?(e=this._slice(0,this._cursor),this._onSkip(e,this._line),Lt("Skipped row. Line: %d. Value: %s",this._line,e)):Lt("Skipped row. Line: %d.",this._line),this._line+=1,this._reset(),this})),$(Pt.prototype,"_onClosingQuote",(function(){return this._qidx=this._cursor,this})),$(Pt.prototype,"_onEscape",(function(){return this._eidx=this._cursor,this})),$(Pt.prototype,"_createException",(function(e){var t;switch(e){case"INVALID_CLOSING_QUOTE":t=new Error(N("unexpected error. Encountered an invalid record. Field %d on line %d contains a closing quote which is not immediately followed by a delimiter or newline.",this._col,this._line));break;case"INVALID_OPENING_QUOTE":t=new Error(N("unexpected error. Encountered an invalid record. Field %d on line %d contains an opening quote which does not immediately follow a delimiter or newline.",this._col,this._line));break;case"INVALID_ESCAPE":t=new Error(N("unexpected error. Encountered an invalid record. Field %d on line %d contains an escape sequence which is not immediately followed by a special character sequence.",this._col,this._line));break;case"INVALID_QUOTED_ESCAPE":t=new Error(N("unexpected error. Encountered an invalid record. Field %d on line %d contains an escape sequence within a quoted field which is not immediately followed by a quote sequence.",this._col,this._line));break;case"CLOSED":t=new Error("invalid operation. Parser is unable to parse new chunks, as the parser has been closed. To parse new chunks, create a new parser instance.");break;default:t=new Error("invalid operation. Parser is in an unrecoverable error state. To parse new chunks, create a new parser instance.")}return t})),$(Pt.prototype,"_raiseWarning",(function(e){var t;return this._onWarn&&(t=this._createException(e),Lt("Warning: %s",t.message),this._onWarn(t)),this})),$(Pt.prototype,"_raiseException",(function(){var e=this._createException(this._errname);return Lt("Error: %s",e.message),this._onError(e),this})),$(Pt.prototype,"_changeState",(function(e){switch(Lt("State transition: %s -> %s.",ce[this._state],ce[e]),e){case It:this._close();break;case Et:this._commented=!0;break;case Ct:this._raiseException();break;case Rt:this._onEscape();break;case Wt:this._state!==Rt&&this._onField();break;case Nt:this._commented?this._onCommentedRow():this._skipped?this._onSkippedRow():this._onRecord();break;case Ot:break;case Dt:this._onClosingQuote();break;case Vt:this._onEscape();break;case At:break;case Ft:this._skipped=!0}return this._state=e,this})),$(Pt.prototype,"_setErrorState",(function(e){return e?Lt("Error: %s.",e):Lt("Reset error state."),this._errname=e,this})),$(Pt.prototype,"_close",(function(){var e,t;return this.done?(this._setErrorState(It)._changeState(Ct),this):(this._cursor>=0?(e=this._state)===Nt||e===Wt||e===Dt?this._changeState(Nt)._onClose():(this._col&&this._onRow(this._getRow(),this._row,this._col),t=this._slice(this._cidx,this._cursor),Lt("Flush: %s",t),this._onClose(t)):this._onClose(),Lt("Closed."),this)})),$(Pt.prototype,"next",(function(e){var t,i;if(Lt("Chunk: %s",e),this.done)return this._setErrorState(It)._changeState(Ct),this;for(t=this._states,i=0;i<e.length;i++)if(t[this._state](e[i]),this._state===It||this._state===Ct)return this;return this})),$(Pt.prototype,"close",(function(){return this.done||this._changeState(It),this})),yt=Pt.prototype,T(yt,"done",{configurable:!1,enumerable:!1,get:function(){return this._state===It||this._state===Ct}});var Tt={};!function(e,t,i){T(e,t,{configurable:!1,enumerable:!0,writable:!1,value:i})}(Tt,"parse",Pt);export{Tt as default,Pt as parse};
//# sourceMappingURL=mod.js.map