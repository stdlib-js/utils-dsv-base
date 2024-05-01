// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function i(e){return"number"==typeof e}function n(e){var t,i="";for(t=0;t<e;t++)i+="0";return i}function r(e,t,i){var r=!1,s=t-e.length;return s<0||(function(e){return"-"===e[0]}(e)&&(r=!0,e=e.substr(1)),e=i?e+n(s):n(s)+e,r&&(e="-"+e)),e}var s=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function a(e){var t,n,a;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=e.arg,a=parseInt(n,10),!isFinite(a)){if(!i(n))throw new Error("invalid integer. Value: "+n);a=0}return a<0&&("u"===e.specifier||10!==t)&&(a=4294967295+a+1),a<0?(n=(-a).toString(t),e.precision&&(n=r(n,e.precision,e.padRight)),n="-"+n):(n=a.toString(t),a||e.precision?e.precision&&(n=r(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===t&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):s.call(n)),8===t&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var _=Math.abs,c=String.prototype.toLowerCase,u=String.prototype.toUpperCase,h=String.prototype.replace,d=/e\+(\d)$/,p=/e-(\d)$/,l=/^(\d+)$/,f=/^(\d+)e/,g=/\.0$/,m=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var t,n,r=parseFloat(e.arg);if(!isFinite(r)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+n);r=e.arg}switch(e.specifier){case"e":case"E":n=r.toExponential(e.precision);break;case"f":case"F":n=r.toFixed(e.precision);break;case"g":case"G":_(r)<1e-4?((t=e.precision)>0&&(t-=1),n=r.toExponential(t)):n=r.toPrecision(e.precision),e.alternate||(n=h.call(n,w,"$1e"),n=h.call(n,m,"e"),n=h.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=h.call(n,d,"e+0$1"),n=h.call(n,p,"e-0$1"),e.alternate&&(n=h.call(n,l,"$1."),n=h.call(n,f,"$1.e")),r>=0&&e.sign&&(n=e.sign+n),n=e.specifier===u.call(e.specifier)?u.call(n):c.call(n)}function k(e){var t,i="";for(t=0;t<e;t++)i+=" ";return i}var S=String.fromCharCode,q=isNaN,x=Array.isArray;function b(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function L(e){var t,i,n,s,o,_,c,u,h,d,p,l,f;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(_="",c=1,u=0;u<e.length;u++)if(n=e[u],"string"==typeof n)_+=n;else{if(t=void 0!==n.precision,!(n=b(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),i=n.flags,h=0;h<i.length;h++)switch(s=i.charAt(h)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=i.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+s)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,q(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,q(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!q(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=q(o)?String(n.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=r(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(d=n.arg,p=n.width,l=n.padRight,f=void 0,(f=p-d.length)<0?d:d=l?d+k(f):k(f)+d)),_+=n.arg||"",c+=1}return _}var y=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function E(e){var t,i,n,r;for(i=[],r=0,n=y.exec(e);n;)(t=e.slice(r,y.lastIndex-n[0].length)).length&&i.push(t),i.push(I(n)),r=y.lastIndex,n=y.exec(e);return(t=e.slice(r)).length&&i.push(t),i}function C(e){var t,i;if("string"!=typeof e)throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[E(e)],i=1;i<arguments.length;i++)t.push(arguments[i]);return L.apply(null,t)}var R,W=Object.prototype,N=W.toString,O=W.__defineGetter__,D=W.__defineSetter__,V=W.__lookupGetter__,A=W.__lookupSetter__;R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,i){var n,r,s,o;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===N.call(i))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((r="value"in i)&&(V.call(e,t)||A.call(e,t)?(n=e.__proto__,e.__proto__=W,delete e[t],e[t]=i.value,e.__proto__=n):e[t]=i.value),s="get"in i,o="set"in i,r&&(s||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&O&&O.call(e,t,i.get),o&&D&&D.call(e,t,i.set),e};var F=R;function Q(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var i=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),i}var P=Q(Object.freeze({__proto__:null,default:()=>()=>{}}));function T(e,t,i){F(e,t,{configurable:!1,enumerable:!1,writable:!1,value:i})}var j=Boolean;function B(e){return"string"==typeof e}var $="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return $&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;var z="function"==typeof Symbol?Symbol:void 0,M="function"==typeof z?z.toStringTag:"";var X=G()?function(e){var t,i,n,r,s;if(null==e)return U.call(e);i=e[M],s=M,t=null!=(r=e)&&Z.call(r,s);try{e[M]=void 0}catch(t){return U.call(e)}return n=U.call(e),t?e[M]=i:delete e[M],n}:function(e){return U.call(e)},H=String.prototype.valueOf;var J=G();function K(e){return"object"==typeof e&&(e instanceof String||(J?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object String]"===X(e)))}function Y(e){return B(e)||K(e)}T(Y,"isPrimitive",B),T(Y,"isObject",K);var ee=/[-\/\\^$*+?.()|[\]{}]/g;function te(e){var t,i;if(!B(e))throw new TypeError(C("invalid argument. Must provide a regular expression string. Value: `%s`.",e));if("/"===e[0])for(i=e.length-1;i>=0&&"/"!==e[i];i--);return void 0===i||i<=0?e.replace(ee,"\\$&"):(t=(t=e.substring(1,i)).replace(ee,"\\$&"),e=e[0]+t+e.substring(i))}function ie(e,t,i){return e.replace(t,i)}function ne(){}function re(e){throw e}var se=["closed","comment","escape","error","field","init","invalid_quote_end","quote_end","quoted_escape","quoted_field","skip","skipped_comment","skipped_escape","skipped_field","skipped_invalid_quote_end","skipped_quote_end","skipped_quoted_escape","skipped_quoted_field"];var oe=function(){var e,t;for(e={},t=0;t<se.length;t++)e[se[t]]=t;return e}(),ae=oe.closed;var _e=P("state:comment"),ce=oe.init;var ue=oe.error;function he(e,t){return e<t?t:e}var de=P("state:escape"),pe=oe.error,le=oe.field;var fe=P("state:field"),ge=oe.escape,me=oe.field,we=oe.init,ve=oe.quoted_field;var ke=P("state:init"),Se=oe.comment,qe=oe.field,xe=oe.escape,be=oe.init,Le=oe.quoted_field,ye=oe.skip;var Ie=P("state:invalid_quote_end"),Ee=oe.error,Ce=oe.field,Re=oe.init;function We(e,t){e._isWhitespace(e._qidx+1,e._cursor)?e._raiseWarning("INVALID_CLOSING_QUOTE")._rewind(e._cursor-e._qidx)._changeState(t):(Ie("Error."),e._setErrorState("INVALID_CLOSING_QUOTE")._changeState(Ee))}var Ne=P("state:quote_end"),Oe=oe.error,De=oe.field,Ve=oe.init,Ae=oe.invalid_quote_end,Fe=oe.quoted_field;var Qe=P("state:quoted_escape"),Pe=oe.error,Te=oe.quoted_field;var je=P("state:quoted_field"),Be=oe.quote_end,$e=oe.quoted_escape;var Ge=P("state:skip"),Ue=oe.init,Ze=oe.skip,ze=oe.skipped_comment,Me=oe.skipped_field,Xe=oe.skipped_escape,He=oe.skipped_quoted_field;var Je=P("state:skipped_comment"),Ke=oe.init;var Ye=P("state:skipped_escape"),et=oe.skipped_field;var tt=P("state:skipped_field"),it=oe.init,nt=oe.skipped_escape,rt=oe.skipped_field,st=oe.skipped_quoted_field;var ot=P("state:skipped_invalid_quote_end"),at=oe.skipped_field,_t=oe.init;var ct=P("state:skipped_quote_end"),ut=oe.init,ht=oe.skipped_field,dt=oe.skipped_invalid_quote_end,pt=oe.skipped_quoted_field;var lt=P("state:skipped_quoted_escape"),ft=oe.skipped_quoted_field;var gt=P("state:skipped_quoted_field"),mt=oe.skipped_quote_end,wt=oe.skipped_quoted_escape;var vt={closed:function(e){return function(){e._changeState(ae)}},comment:function(e){var t,i;return t=e._newlineLastIndex,i=e._newline,function(n){if(_e("Char: %s",n),n===i[t]&&e._scan(i,t))return _e("Newline."),void e._rewind(t)._changeState(ce);e._push(n)}},escape:function(e){var t,i,n,r,s,o,a,_,c,u,h,d,p;return t=e._delimiterLastIndex,a=e._delimiter,i=e._newlineLastIndex,_=e._newline,n=e._commentLastIndex,c=e._comment,s=e._skipLastIndex,d=e._skip,r=e._escapeLastIndex,o=e._escapeLength,u=e._escape,h=e._strict,p=he(he(t,i),r),function(l){var f=e._cursor,g=e._eidx,m=f-g;if(de("Char: %s",l),m===t&&l===a[t]&&e._scan(a,t))return de("Delimiter."),void e._copyWithin(g-r,g+1,t)._rewind(o)._push(l)._changeState(le);if(m===i&&l===_[i]&&e._scan(_,i))return de("Newline."),void e._copyWithin(g-r,g+1,i)._rewind(o)._push(l)._changeState(le);if(m===r&&l===u[r]&&e._scan(u,r))return de("Escape."),void e._copyWithin(g-r,g+1,r)._rewind(o)._push(l)._changeState(le);if(c&&f-n==0&&l===c[n]&&e._scan(c,n))return de("Comment."),void e._copyWithin(g-n,g+1,n)._rewind(o)._push(l)._changeState(le);if(d&&f-s==0&&l===d[s]&&e._scan(d,s))return de("Skip."),void e._copyWithin(g-s,g+1,s)._rewind(o)._push(l)._changeState(le);if(m>=p)return h?(de("Error."),void e._setErrorState("INVALID_ESCAPE")._changeState(pe)):(de("Escape sequence is not followed by a special character sequence."),void e._raiseWarning("INVALID_ESCAPE")._push(l)._changeState(le));e._push(l)}},error:function(e){return function(){e._changeState(ue)}},field:function(e){var t,i,n,r,s,o,a,_,c,u;return n=e._escapeLastIndex,_=e._escape,r=e._quoteLastIndex,u=e._quote,t=e._delimiterLastIndex,s=e._delimiter,i=e._newlineLastIndex,o=e._newline,a=e._quoting,c=e._strict,function(h){var d=e._cursor-e._cidx+1;if(fe("Char: %s",h),h===_[n]&&e._scan(_,n))return fe("Escape."),void e._push(h)._changeState(ge);if(d-r==0&&h===u[r]&&e._scan(u,r))return a?(fe("Quote."),void e._rewind(r)._changeState(ve)):void e._push(h);if(!1===c&&h===u[r]&&e._scan(u,r))return a&&e._isWhitespace(e._cidx,e._cursor-r)?(fe("Quote."),void e._raiseWarning("INVALID_OPENING_QUOTE")._rewind(d)._changeState(ve)):void e._push(h);if(h===s[t]&&e._scan(s,t))return fe("Delimiter."),void e._rewind(t)._changeState(me);if(h===o[i]&&e._scan(o,i))return fe("Newline."),void e._rewind(i)._changeState(we);e._push(h)}},init:function(e){var t,i,n,r,s,o,a,_,c,u,h,d,p,l;return n=e._commentLastIndex,c=e._comment,o=e._skipLastIndex,l=e._skip,r=e._escapeLastIndex,h=e._escape,s=e._quoteLastIndex,p=e._quote,t=e._delimiterLastIndex,a=e._delimiter,i=e._newlineLastIndex,_=e._newline,u=e._quoting,d=e._strict,function(f){var g=e._cursor+1;if(ke("Char: %s",f),c&&g-n==0&&f===c[n]&&e._scan(c,n))return ke("Comment."),void e._rewind(n)._changeState(Se);if(l&&g-o==0&&f===l[o]&&e._scan(l,o))return ke("Skip."),void e._rewind(o)._changeState(ye);if(f===h[r]&&e._scan(h,r))return ke("Escape."),void e._push(f)._changeState(xe);if(g-s==0&&f===p[s]&&e._scan(p,s))return u?(ke("Quote."),void e._rewind(s)._changeState(Le)):void e._push(f);if(!1===d&&f===p[s]&&e._scan(p,s))return u&&e._isWhitespace(0,e._cursor-s)?(ke("Quote."),void e._raiseWarning("INVALID_OPENING_QUOTE")._rewind(g)._changeState(Le)):void e._push(f);if(f===a[t]&&e._scan(a,t))return ke("Delimiter."),void e._rewind(t)._changeState(qe);if(f===_[i]&&e._scan(_,i))return ke("Newline."),void e._rewind(i)._changeState(be);e._push(f)}},invalid_quote_end:function(e){var t,i,n,r;return t=e._delimiterLastIndex,n=e._delimiter,i=e._newlineLastIndex,r=e._newline,function(s){if(Ie("Char: %s",s),s===n[t]&&e._scan(n,t))return Ie("Delimiter."),e._rewind(t),void We(e,Ce);if(s===r[i]&&e._scan(r,i))return Ie("Newline."),e._rewind(i),void We(e,Re);e._push(s)}},quote_end:function(e){var t,i,n,r,s,o,a,_,c;return t=e._delimiterLastIndex,s=e._delimiter,i=e._newlineLastIndex,o=e._newline,n=e._quoteLastIndex,_=e._quote,r=e._doublequote,a=e._strict,c=he(he(t,i),n),function(u){if(Ne("Char: %s",u),r&&u===_[n]&&e._scan(_,n))return Ne("Double quote."),void e._push(u)._changeState(Fe);if(u===s[t]&&e._scan(s,t))return Ne("Delimiter."),void e._rewind(t)._changeState(De);if(u===o[i]&&e._scan(o,i))return Ne("Newline."),void e._rewind(i)._changeState(Ve);if(e._cursor-e._qidx>=c)return a?(Ne("Error."),void e._setErrorState("INVALID_CLOSING_QUOTE")._changeState(Oe)):(Ne("Invalid closing quote."),void e._push(u)._changeState(Ae));e._push(u)}},quoted_escape:function(e){var t,i,n,r,s;return i=e._quoteLastIndex,s=e._quote,t=e._escapeLastIndex,n=e._escapeLength,r=e._strict,function(o){var a=e._cursor,_=e._eidx,c=a-_;if(Qe("Char: %s",o),c===i&&o===s[i]&&e._scan(s,i))return Qe("Quote."),void e._copyWithin(_-t,_+1,i)._rewind(n)._push(o)._changeState(Te);if(c>=i)return r?(Qe("Error."),void e._setErrorState("INVALID_QUOTED_ESCAPE")._changeState(Pe)):(Qe("Escape sequence is not followed by a quote sequence."),void e._raiseWarning("INVALID_QUOTED_ESCAPE")._push(o)._changeState(Te));e._push(o)}},quoted_field:function(e){var t,i,n,r,s;return t=e._escapeLastIndex,r=e._escape,i=e._quoteLastIndex,s=e._quote,n=e._doublequote,function(o){if(je("Char: %s",o),!1===n&&o===r[t]&&e._scan(r,t))return je("Escape."),void e._push(o)._changeState($e);if(o===s[i]&&e._scan(s,i))return je("Quote."),void e._rewind(i)._changeState(Be);e._push(o)}},skip:function(e){var t,i,n,r,s,o,a,_,c,u,h,d,p,l;return n=e._commentLastIndex,c=e._comment,o=e._skipLastIndex,l=e._skip,r=e._escapeLastIndex,h=e._escape,s=e._quoteLastIndex,p=e._quote,t=e._delimiterLastIndex,a=e._delimiter,i=e._newlineLastIndex,_=e._newline,u=e._quoting,d=e._strict,function(f){var g=e._cursor+1;if(Ge("Char: %s",f),c&&g-n==0&&f===c[n]&&e._scan(c,n))return Ge("Comment."),void e._push(f)._changeState(ze);if(l&&g-o==0&&f===l[o]&&e._scan(l,o))return Ge("Skip."),void e._push(f)._changeState(Ze);if(f===h[r]&&e._scan(h,r))return Ge("Escape."),void e._push(f)._changeState(Xe);if(g-s==0&&f===p[s]&&e._scan(p,s))return u?(Ge("Quote."),void e._push(f)._changeState(He)):void e._push(f);if(!1===d&&f===p[s]&&e._scan(p,s))return u&&e._isWhitespace(0,e._cursor-s)?(Ge("Quote."),void e._push(f)._changeState(He)):void e._push(f);if(f===a[t]&&e._scan(a,t))return Ge("Delimiter."),void e._push(f)._changeState(Me);if(f===_[i]&&e._scan(_,i))return Ge("Newline."),void e._rewind(i)._changeState(Ue);e._push(f)}},skipped_comment:function(e){var t,i;return t=e._newlineLastIndex,i=e._newline,function(n){if(Je("Char: %s",n),n===i[t]&&e._scan(i,t))return Je("Newline."),void e._rewind(t)._changeState(Ke);e._push(n)}},skipped_escape:function(e){var t,i,n,r,s,o,a,_,c,u,h;return t=e._delimiterLastIndex,o=e._delimiter,i=e._newlineLastIndex,a=e._newline,n=e._commentLastIndex,_=e._comment,s=e._skipLastIndex,u=e._skip,r=e._escapeLastIndex,c=e._escape,h=he(he(t,i),r),function(d){var p=e._cursor,l=e._eidx,f=p-l;if(Ye("Char: %s",d),f===t&&d===o[t]&&e._scan(o,t))return Ye("Delimiter."),void e._push(d)._changeState(et);if(f===i&&d===a[i]&&e._scan(a,i))return Ye("Newline."),void e._push(d)._changeState(et);if(f===r&&d===c[r]&&e._scan(c,r))return Ye("Escape."),void e._push(d)._changeState(et);if(_&&p-n==0&&d===_[n]&&e._scan(_,n))return Ye("Comment."),void e._push(d)._changeState(et);if(u&&p-s==0&&d===u[s]&&e._scan(u,s))return Ye("Skip."),void e._push(d)._changeState(et);if(f>=h)return Ye("Normal character sequence."),void e._push(d)._changeState(et);e._push(d)}},skipped_field:function(e){var t,i,n,r,s,o,a,_,c,u;return n=e._escapeLastIndex,_=e._escape,r=e._quoteLastIndex,u=e._quote,t=e._delimiterLastIndex,s=e._delimiter,i=e._newlineLastIndex,o=e._newline,a=e._quoting,c=e._strict,function(h){var d=e._cursor-e._cidx+1;if(tt("Char: %s",h),h===_[n]&&e._scan(_,n))return tt("Escape."),void e._push(h)._changeState(nt);if(d-r==0&&h===u[r]&&e._scan(u,r))return e._push(h),a?(tt("Quote."),void e._changeState(st)):void 0;if(!1===c&&h===u[r]&&e._scan(u,r))return e._push(h),a&&e._isWhitespace(e._cidx,e._cursor-r)?(tt("Quote."),void e._changeState(st)):void 0;if(h===s[t]&&e._scan(s,t))return tt("Delimiter."),void e._push(h)._changeState(rt);if(h===o[i]&&e._scan(o,i))return tt("Newline."),void e._rewind(i)._changeState(it);e._push(h)}},skipped_invalid_quote_end:function(e){var t,i,n,r;return t=e._delimiterLastIndex,n=e._delimiter,i=e._newlineLastIndex,r=e._newline,function(s){if(ot("Char: %s",s),s===n[t]&&e._scan(n,t))return ot("Delimiter."),void e._push(s)._changeState(at);if(s===r[i]&&e._scan(r,i))return ot("Newline."),void e._rewind(i)._changeState(_t);e._push(s)}},skipped_quote_end:function(e){var t,i,n,r,s,o,a,_;return t=e._delimiterLastIndex,s=e._delimiter,i=e._newlineLastIndex,o=e._newline,n=e._quoteLastIndex,a=e._quote,r=e._doublequote,_=he(he(t,i),n),function(c){if(ct("Char: %s",c),r&&c===a[n]&&e._scan(a,n))return ct("Double quote."),void e._push(c)._changeState(pt);if(c===s[t]&&e._scan(s,t))return ct("Delimiter."),void e._push(c)._changeState(ht);if(c===o[i]&&e._scan(o,i))return ct("Newline."),void e._rewind(i)._changeState(ut);if(e._cursor-e._qidx>=_)return ct("Invalid closing quote."),void e._push(c)._changeState(dt);e._push(c)}},skipped_quoted_escape:function(e){var t,i;return t=e._quoteLastIndex,i=e._quote,function(n){var r=e._cursor,s=e._eidx,o=r-s;if(lt("Char: %s",n),o===t&&n===i[t]&&e._scan(i,t))return lt("Quote."),void e._push(n)._changeState(ft);if(o>=t)return lt("Escape sequence is not followed by a quote sequence."),void e._push(n)._changeState(ft);e._push(n)}},skipped_quoted_field:function(e){var t,i,n,r,s;return t=e._escapeLastIndex,r=e._escape,i=e._quoteLastIndex,s=e._quote,n=e._doublequote,function(o){if(gt("Char: %s",o),!1===n&&o===r[t]&&e._scan(r,t))return gt("Escape."),void e._push(o)._changeState(wt);if(o===s[i]&&e._scan(s,i))return gt("Quote."),void e._push(o)._changeState(mt);e._push(o)}}};var kt,St=P("parser"),qt=oe.closed,xt=oe.comment,bt=oe.error,Lt=oe.escape,yt=oe.field,It=oe.init,Et=oe.invalid_quote_end,Ct=oe.quote_end,Rt=oe.quoted_escape,Wt=oe.quoted_field,Nt=oe.skip;function Ot(e){var t;return this instanceof Ot?(e=e||{},t={comment:"",delimiter:",",doublequote:!0,escape:"",ltrim:!1,maxRows:1e308,newline:"\r\n",onClose:ne,onColumn:ne,onComment:null,onError:re,onRow:ne,onSkip:null,onWarn:null,quote:'"',quoting:!0,rowBuffer:[],rtrim:!1,skip:"",skipBlankRows:!1,skipRow:null,strict:!0,trimComment:!0,whitespace:[" "]},this._buffer=[],this._cursor=-1,this._cidx=0,this._qidx=-1,this._eidx=-1,this._rowBufferFLG=j(e.rowBuffer),this._rowBuffer=e.rowBuffer||t.rowBuffer,this._col=0,this._row=0,this._line=0,this._commented=!1,this._skipped=!1,this._errname="",this._comment=e.comment||t.comment,this._delimiter=e.delimiter||t.delimiter,this._doublequote=void 0===e.doublequote?t.doublequote:e.doublequote,this._escape=e.escape||t.escape,this._ltrim=void 0===e.ltrim?t.ltrim:e.ltrim,this._maxRows=void 0===e.maxRows?t.maxRows:e.maxRows,this._newline=e.newline||t.newline,this._quote=e.quote||t.quote,this._quoting=void 0===e.quoting?t.quoting:e.quoting,this._rtrim=void 0===e.rtrim?t.rtrim:e.rtrim,this._skip=e.skip||t.skip,this._skipBlankRows=void 0===e.skipBlankRows?t.skipBlankRows:e.skipBlankRows,this._skipRow=e.skipRow||t.skipRow,this._strict=void 0===e.strict?t.strict:e.strict,this._trimComment=void 0===e.trimComment?t.trimComment:e.trimComment,this._whitespace=function(e){var t,i;for(t="(?:",i=0;i<e.length-1;i++)t+=te(e[i])+"|";return t+te(e[i])+")"}(e.whitespace||t.whitespace),this._reWhitespace=new RegExp("^"+this._whitespace+"*([\\S\\s]*?)"+this._whitespace+"*$"),this._reWhitespaceLeft=new RegExp("^"+this._whitespace+"*"),this._reWhitespaceRight=new RegExp(this._whitespace+"*$"),this._onClose=e.onClose||t.onClose,this._onColumn=e.onColumn||t.onColumn,this._onComment=e.onComment||t.onComment,this._onRow=e.onRow||t.onRow,this._onSkip=e.onSkip||t.onSkip,this._onError=e.onError||t.onError,this._onWarn=e.onWarn||t.onWarn,this._commentLength=this._comment.length,this._commentLastIndex=this._commentLength-1,this._delimiterLength=this._delimiter.length,this._delimiterLastIndex=this._delimiterLength-1,this._escapeLength=this._escape.length,this._escapeLastIndex=this._escapeLength-1,this._newlineLength=this._newline.length,this._newlineLastIndex=this._newlineLength-1,this._quoteLength=this._quote.length,this._quoteLastIndex=this._quoteLength-1,this._skipLength=this._skip.length,this._skipLastIndex=this._skipLength-1,this._skipRow&&this._skipRow(0,0)?(this._state=Nt,this._skipped=!0):this._state=It,this._states=function(e){var t,i;for(t=[],i=0;i<se.length;i++)t.push(vt[se[i]](e));return t}(this),this):arguments.length?new Ot(e):new Ot}oe.skipped_comment,oe.skipped_escape,oe.skipped_field,oe.skipped_invalid_quote_end,oe.skipped_quote_end,oe.skipped_quoted_escape,oe.skipped_quoted_field,T(Ot.prototype,"_push",(function(e){var t=this._buffer;return this._cursor+=1,this._cursor>=t.length?(t.push(e),St("Internal buffer size increased. Length: %d.",t.length)):t[this._cursor]=e,St("Cursor: %d. Push: %s",this._cursor,e),this})),T(Ot.prototype,"_rewind",(function(e){return this._cursor-=e,St("Rewind: %d. Cursor: %d.",e,this._cursor),this})),T(Ot.prototype,"_copyWithin",(function(e,t,i){var n,r;for(n=this._buffer,r=0;r<i;r++)n[e+r]=n[t+r];return this})),T(Ot.prototype,"_slice",(function(e,t){return this._buffer.slice(e,t+1).join("")})),T(Ot.prototype,"_isWhitespace",(function(e,t){return""===ie(this._slice(e,t),this._reWhitespaceLeft,"")})),T(Ot.prototype,"_reset",(function(){return this._col=0,this._cidx=0,this._qidx=-1,this._eidx=-1,this._skipRow&&this._skipRow(this._row,this._line)?(this._state=Nt,this._skipped=!0):(this._state=It,this._skipped=!1),this._commented=!1,this._cursor=-1,St("Parser reset."),this})),T(Ot.prototype,"_setField",(function(e,t){var i=this._rowBuffer;return t>=i.length?(i.push(e),St("Row buffer size increased. Length: %d.",i.length)):i[t]=e,this})),T(Ot.prototype,"_getField",(function(e,t){var i=this._slice(e,t);return this._ltrim?this._rtrim?ie(i,this._reWhitespace,"$1"):ie(i,this._reWhitespaceLeft,""):this._rtrim?ie(i,this._reWhitespaceRight,""):i})),T(Ot.prototype,"_getRow",(function(){return this._rowBufferFLG?this._rowBuffer:this._rowBuffer.slice(0,this._col)})),T(Ot.prototype,"_scan",(function(e,t){var i,n,r;for(i=this._buffer,n=this._cursor-t+1,r=0;r<t&&i[n+r]===e[r];r++);return r===t})),T(Ot.prototype,"_onField",(function(){var e=this._getField(this._cidx,this._cursor);return this._setField(e,this._col),this._onColumn(e,this._row,this._col,this._line),St("Field. Line: %d. Row: %d. Column: %d. Value: %s",this._line,this._row,this._col,e),this._col+=1,this._cidx=this._cursor+1,this._qidx=-1,this._eidx=-1,this})),T(Ot.prototype,"_onRecord",(function(){var e;return e=this._getField(this._cidx,this._cursor),!this._skipBlankRows||0!==this._col||""!==e&&""!==ie(e,this._reWhitespaceLeft,"")?(this._setField(e,this._col),this._onColumn(e,this._row,this._col,this._line),this._col+=1,this._onRow(this._getRow(),this._row,this._col,this._line),St("Record. Line: %d. Fields: %d.",this._line,this._col),this._row+=1,this._line+=1,this._reset(),this._row>=this._maxRows&&this._changeState(qt),this):this._onSkippedRow()})),T(Ot.prototype,"_onCommentedRow",(function(){var e;return this._onComment?(e=this._slice(0,this._cursor),this._trimComment&&(e=ie(e,this._reWhitespaceLeft,"")),this._onComment(e,this._line),St("Comment. Line: %d. Value: %s",this._line,e)):St("Comment. Line: %d.",this._line),this._line+=1,this._reset(),this})),T(Ot.prototype,"_onSkippedRow",(function(){var e;return this._onSkip?(e=this._slice(0,this._cursor),this._onSkip(e,this._line),St("Skipped row. Line: %d. Value: %s",this._line,e)):St("Skipped row. Line: %d.",this._line),this._line+=1,this._reset(),this})),T(Ot.prototype,"_onClosingQuote",(function(){return this._qidx=this._cursor,this})),T(Ot.prototype,"_onEscape",(function(){return this._eidx=this._cursor,this})),T(Ot.prototype,"_createException",(function(e){var t;switch(e){case"INVALID_CLOSING_QUOTE":t=new Error(C("unexpected error. Encountered an invalid record. Field %d on line %d contains a closing quote which is not immediately followed by a delimiter or newline.",this._col,this._line));break;case"INVALID_OPENING_QUOTE":t=new Error(C("unexpected error. Encountered an invalid record. Field %d on line %d contains an opening quote which does not immediately follow a delimiter or newline.",this._col,this._line));break;case"INVALID_ESCAPE":t=new Error(C("unexpected error. Encountered an invalid record. Field %d on line %d contains an escape sequence which is not immediately followed by a special character sequence.",this._col,this._line));break;case"INVALID_QUOTED_ESCAPE":t=new Error(C("unexpected error. Encountered an invalid record. Field %d on line %d contains an escape sequence within a quoted field which is not immediately followed by a quote sequence.",this._col,this._line));break;case"CLOSED":t=new Error("invalid operation. Parser is unable to parse new chunks, as the parser has been closed. To parse new chunks, create a new parser instance.");break;default:t=new Error("invalid operation. Parser is in an unrecoverable error state. To parse new chunks, create a new parser instance.")}return t})),T(Ot.prototype,"_raiseWarning",(function(e){var t;return this._onWarn&&(t=this._createException(e),St("Warning: %s",t.message),this._onWarn(t)),this})),T(Ot.prototype,"_raiseException",(function(){var e=this._createException(this._errname);return St("Error: %s",e.message),this._onError(e),this})),T(Ot.prototype,"_changeState",(function(e){switch(St("State transition: %s -> %s.",se[this._state],se[e]),e){case qt:this._close();break;case xt:this._commented=!0;break;case bt:this._raiseException();break;case Lt:this._onEscape();break;case yt:this._state!==Lt&&this._onField();break;case It:this._commented?this._onCommentedRow():this._skipped?this._onSkippedRow():this._onRecord();break;case Et:break;case Ct:this._onClosingQuote();break;case Rt:this._onEscape();break;case Wt:break;case Nt:this._skipped=!0}return this._state=e,this})),T(Ot.prototype,"_setErrorState",(function(e){return e?St("Error: %s.",e):St("Reset error state."),this._errname=e,this})),T(Ot.prototype,"_close",(function(){var e,t;return this.done?(this._setErrorState(qt)._changeState(bt),this):(this._cursor>=0?(e=this._state)===It||e===yt||e===Ct?this._changeState(It)._onClose():(this._col&&this._onRow(this._getRow(),this._row,this._col),t=this._slice(this._cidx,this._cursor),St("Flush: %s",t),this._onClose(t)):this._onClose(),St("Closed."),this)})),T(Ot.prototype,"next",(function(e){var t,i;if(St("Chunk: %s",e),this.done)return this._setErrorState(qt)._changeState(bt),this;for(t=this._states,i=0;i<e.length;i++)if(t[this._state](e[i]),this._state===qt||this._state===bt)return this;return this})),T(Ot.prototype,"close",(function(){return this.done||this._changeState(qt),this})),kt=Ot.prototype,F(kt,"done",{configurable:!1,enumerable:!1,get:function(){return this._state===qt||this._state===bt}});var Dt={};!function(e,t,i){F(e,t,{configurable:!1,enumerable:!0,writable:!1,value:i})}(Dt,"parse",Ot);export{Dt as default,Ot as parse};
//# sourceMappingURL=mod.js.map
