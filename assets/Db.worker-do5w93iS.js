(function(){let e=()=>{t(),m()},t=()=>{d();let e=u(`dispose`,`Symbol.dispose`),t=u(`asyncDispose`,`Symbol.asyncDispose`);typeof globalThis.DisposableStack!=`function`&&i(globalThis,`DisposableStack`,f(e)),typeof globalThis.AsyncDisposableStack!=`function`&&i(globalThis,`AsyncDisposableStack`,p(e,t))},n=`An error was suppressed during disposal.`,r=(e,t)=>`Cannot call ${e}.prototype.${t} on an already-disposed DisposableStack`,i=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:!0,value:n})},a=(e,t,n)=>{i(e,t,Object.getOwnPropertyDescriptor(e,n)?.value)},o=(e,t)=>{if(e)throw ReferenceError(t)},s=(e,t)=>new globalThis.SuppressedError(e,t,n),c=e=>{if((typeof e!=`object`||!e)&&typeof e!=`function`)throw TypeError(`Disposable value must be an object or function.`);return e},l=(e,t)=>{let n=e[t];if(n!==void 0){if(typeof n!=`function`)throw TypeError(`Disposable method must be a function.`);return n}},u=(e,t)=>{let n=globalThis.Symbol,r=Object.getOwnPropertyDescriptor(n,e)?.value,i=typeof r==`symbol`?r:void 0;if(i!=null)return i;let a=Symbol(t);return Object.defineProperty(n,e,{configurable:!1,enumerable:!1,writable:!1,value:a}),a},d=()=>{if(typeof globalThis.SuppressedError==`function`)return;class e extends Error{error;suppressed;constructor(e,t,r){super(r??n),this.name=`SuppressedError`,this.error=e,this.suppressed=t}}i(globalThis,`SuppressedError`,e)},f=e=>{class t{#e=!1;#t=[];get disposed(){return this.#e}use(t){if(o(this.#e,r(`DisposableStack`,`use`)),t==null)return t;let n=c(t),i=l(n,e);if(i==null)throw TypeError(`Resource does not implement Symbol.dispose.`);return this.#t.push({dispose:()=>{i.call(n)}}),t}adopt(e,t){if(o(this.#e,r(`DisposableStack`,`adopt`)),typeof t!=`function`)throw TypeError(`onDispose must be a function.`);return this.#t.push({dispose:()=>{t(e)}}),e}defer(e){if(o(this.#e,r(`DisposableStack`,`defer`)),typeof e!=`function`)throw TypeError(`onDispose must be a function.`);this.#t.push({dispose:()=>{e()}})}move(){o(this.#e,r(`DisposableStack`,`move`));let e=new t;return e.#t=this.#t,this.#t=[],this.#e=!0,e}dispose(){if(this.#e)return;this.#e=!0;let e=this.#t;this.#t=[];let t,n=!1;for(let r=e.length-1;r>=0;r--)try{e[r].dispose()}catch(e){t=n?s(e,t):e,n=!0}if(n)throw t}}return a(t.prototype,e,`dispose`),Object.defineProperty(t.prototype,Symbol.toStringTag,{configurable:!0,enumerable:!1,writable:!1,value:`DisposableStack`}),t},p=(e,t)=>{class n{#e=!1;#t=[];get disposed(){return this.#e}use(n){if(o(this.#e,r(`AsyncDisposableStack`,`use`)),n==null)return n;let i=c(n),a=l(i,t);if(a!=null)return this.#t.push({dispose:async()=>{await a.call(i)}}),n;let s=l(i,e);if(s!=null)return this.#t.push({dispose:()=>Promise.resolve().then(()=>{s.call(i)})}),n;throw TypeError(`Resource does not implement Symbol.asyncDispose or Symbol.dispose.`)}adopt(e,t){if(o(this.#e,r(`AsyncDisposableStack`,`adopt`)),typeof t!=`function`)throw TypeError(`onDisposeAsync must be a function.`);return this.#t.push({dispose:()=>Promise.resolve().then(()=>t(e))}),e}defer(e){if(o(this.#e,r(`AsyncDisposableStack`,`defer`)),typeof e!=`function`)throw TypeError(`onDisposeAsync must be a function.`);this.#t.push({dispose:()=>Promise.resolve().then(()=>e())})}move(){o(this.#e,r(`AsyncDisposableStack`,`move`));let e=new n;return e.#t=this.#t,this.#t=[],this.#e=!0,e}async disposeAsync(){if(this.#e)return;this.#e=!0;let e=this.#t;this.#t=[];let t,n=!1;for(let r=e.length-1;r>=0;r--)try{await e[r].dispose()}catch(e){t=n?s(e,t):e,n=!0}if(n)throw t}}return a(n.prototype,t,`disposeAsync`),Object.defineProperty(n.prototype,Symbol.toStringTag,{configurable:!0,enumerable:!1,writable:!1,value:`AsyncDisposableStack`}),n},m=()=>{let e=function(e,t){return this.has(e)||this.set(e,t),this.get(e)},t=function(e,t){return this.has(e)||this.set(e,t(e)),this.get(e)};typeof Map.prototype.getOrInsert!=`function`&&i(Map.prototype,`getOrInsert`,e),typeof Map.prototype.getOrInsertComputed!=`function`&&i(Map.prototype,`getOrInsertComputed`,t),typeof WeakMap.prototype.getOrInsert!=`function`&&i(WeakMap.prototype,`getOrInsert`,e),typeof WeakMap.prototype.getOrInsertComputed!=`function`&&i(WeakMap.prototype,`getOrInsertComputed`,t)},h=/*#__PURE__*/ Object.freeze(/*#__PURE__*/ Object.create(null)),g=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return t===null||t===h?!0:t===Object.prototype?`hasOwnProperty`in t&&`isPrototypeOf`in t:Object.getPrototypeOf(t)===null&&(Object.hasOwn(t,`hasOwnProperty`)&&Object.hasOwn(t,`isPrototypeOf`)||Object.isFrozen(t)&&Reflect.ownKeys(t).length===0)},_=e=>typeof e==`function`,v=e=>Object.entries(e),y=(e,t)=>{let n=Object.create(null);for(let r in e)n[r]=t(e[r],r);return n};function b(e){let t=Object.create(null);return e===void 0?t:Object.assign(t,e)}let x=(e,t)=>Object.hasOwn(e,t)?e[t]:void 0,S=(e,t)=>Object.is(e,t),C=(e,t)=>e===t||Object.is(e,t),w=S,T=S,E=e=>(t,n)=>{if(t===n)return!0;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(!e(t[r],n[r]))return!1;return!0},D=/*#__PURE__*/ E(S),O=/*#__PURE__*/ E(T),k=O,A=e=>(t,n)=>{if(t===n)return!0;for(let r in e)if(!e[r](t[r],n[r]))return!1;return!0},j=(e,t,n={})=>{if(e)return;let r=Object.hasOwn(n,`actual`)?n.actual:e,i=!Object.hasOwn(n,`expected`)||n.expected,a=n.operator??`==`,o=n.stackStartFn??j;if(M!==void 0){let e=new M.AssertionError({message:t,actual:r,expected:i,operator:n.diff===`full`?`deepStrictEqual`:a,diff:n.diff,stackStartFn:o});throw n.diff===`full`&&(e.operator=a),n.cause!==void 0&&Object.defineProperty(e,"cause",{configurable:!0,value:n.cause,writable:!0}),e}let s=Object.assign(Error(t,n.cause===void 0?void 0:{cause:n.cause}),{name:`AssertionError`,code:`ERR_ASSERTION`,actual:r,expected:i,generatedMessage:!1,operator:a});throw Error.captureStackTrace?.(s,o),s},M=globalThis.process?.getBuiltinModule?.(`node:assert/strict`),N=(e,t=`Expected value to be non-nullable.`)=>{j(e!=null,t,{actual:e,expected:null,operator:`!=`,stackStartFn:N})},P=(e,t=`Expected a non-empty readonly array.`)=>{j(e.length>0,t,{actual:e.length,expected:0,operator:`>`,stackStartFn:P})},F=e=>{j(!e.disposed,`Cannot use a disposed object.`,{actual:e.disposed,expected:!1,operator:`==`,stackStartFn:F})},ee=e=>{throw Error(`exhaustiveCheck unhandled case: ${JSON.stringify(e)}`)},I=e=>e;function L(e,t=null){let n=e,r=t?.move()??new DisposableStack;for(let[t,i]of Object.entries(e))_(i)&&(n[t]=(...e)=>(F(r),i(...e)));return r instanceof AsyncDisposableStack?e[Symbol.asyncDispose]=()=>r.disposeAsync():e[Symbol.dispose]=()=>r.dispose(),e}let te=/* @__PURE__ */ (e=>()=>e)(void 0),ne=[],re=e=>Array(e);function ie(e){return e.length>0}let ae=(e,t)=>[...e,t];function oe(e,t){return e.map(t)}function se(e){if(e.length===0)return ne;let t=Math.min(...oe(e,e=>e.length)),n=re(t);for(let r=0;r<t;r++)n[r]=oe(e,e=>e[r]);return n}let ce=e=>e[0];
/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */
function le(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}let ue=e=>e?`"${e}" `:``;function de(e,t=``){if(typeof e!=`boolean`)throw TypeError(ue(t)+`expected boolean, got type=`+typeof e);return e}function fe(e,t=``){if(typeof e!=`number`)throw TypeError(ue(t)+`expected number, got `+typeof e);if(!Number.isSafeInteger(e)||e<0)throw RangeError(ue(t)+`expected integer >= 0, got `+e);return e}function pe(e,t,n=``){if(le(e)&&(t===void 0||e.length===t))return e;t!==void 0&&fe(t,`length`);let r=le(e),i=t===void 0?``:` of length ${t}`,a=r?`length=${e.length}`:`type=${typeof e}`,o=ue(n)+`expected Uint8Array`+i+`, got `+a;throw r?RangeError(o):TypeError(o)}let me=(e,t)=>{if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError(t===`object`?`expected valid options object`:`"${t}" expected object, got type=${typeof e}`)};function he(e,t=!0){if(e.destroyed)throw Error(`hash was destroyed`);if(t&&e.finished)throw Error(`digest() was already called`)}function ge(e,t){pe(e,void 0,`output`);let n=t.outputLen;if(!(e.length>=n))throw RangeError(`"output" expected length >= `+n)}function _e(e){return new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4))}function ve(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function ye(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}let be=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function xe(e){return e<<24&4278190080|e<<8&16711680|e>>>8&65280|e>>>24&255}function Se(e){for(let t=0;t<e.length;t++)e[t]=xe(e[t]);return e}let Ce=be?e=>e:Se,we=typeof Uint8Array.from([]).toHex==`function`&&typeof Uint8Array.fromHex==`function`,Te=/* @__PURE__ */ Array.from({length:256},(e,t)=>t.toString(16).padStart(2,`0`));function Ee(e){if(pe(e),we)return e.toHex();let t=``;for(let n=0;n<e.length;n++)t+=Te[e[n]];return t}function De(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:void 0}function Oe(e){if(typeof e!=`string`)throw TypeError(`hex string expected, got `+typeof e);if(we)try{return Uint8Array.fromHex(e)}catch(e){throw e instanceof SyntaxError?RangeError(e.message):e}let t=e.length,n=t/2;if(t%2)throw RangeError(`hex string expected, got unpadded hex of length `+t);let r=new Uint8Array(n);for(let t=0,i=0;t<n;t++,i+=2){let n=De(e.charCodeAt(i)),a=De(e.charCodeAt(i+1));if(n===void 0||a===void 0){let t=e[i]+e[i+1];throw RangeError(`hex string expected, got non-hex character "`+t+`" at index `+i)}r[t]=n*16+a}return r}function ke(e){if(typeof e!=`string`)throw TypeError(`string expected`);return new Uint8Array(new TextEncoder().encode(e))}function Ae(e){return new TextDecoder().decode(e)}function je(e,t){return!e.byteLength||!t.byteLength?!1:e.buffer===t.buffer&&e.byteOffset<t.byteOffset+t.byteLength&&t.byteOffset<e.byteOffset+e.byteLength}function R(e,t){if(je(e,t)&&e.byteOffset<t.byteOffset)throw Error(`complex overlap of input and output is not supported`)}function Me(e,t){return me(e,`defaults`),me(t,`opts`),Object.assign(e,t)}function Ne(e,t){if(e=pe(e),t=pe(t),e.length!==t.length)return!1;let n=0;for(let r=0;r<e.length;r++)n|=e[r]^t[r];return n===0}function Pe(e,t,n){let r=t,i=n||(()=>[]),a=(e,t)=>r(t,...i(e)).update(e).digest(),o=r(new Uint8Array(e),...i(/* @__PURE__ */ new Uint8Array));return a.outputLen=o.outputLen,a.blockLen=o.blockLen,a.create=(e,...t)=>r(e,...t),a}let Fe=(e,t)=>{function n(n,...r){if(pe(n,void 0,`key`),e.nonceLength!==void 0){let t=r[0];pe(t,e.varSizeNonce?void 0:e.nonceLength,`nonce`)}let i=e.tagLength,a=e.nonceLength===void 0?0:1;if(!e.withAAD){for(let e=a;e<r.length;e++)if(le(r[e]))throw Error(`AAD not supported`)}e.withAAD&&r[a]!==void 0&&pe(r[a],void 0,`AAD`);let o=t(n,...r),s=(e,t)=>{if(t!==void 0){if(e!==2)throw Error(`cipher output not supported`);pe(t,void 0,`output`)}},c=!1;return{encrypt(e,t){if(c)throw Error(`cannot encrypt() twice with same key + nonce`);return c=!0,pe(e,void 0,`data`),s(o.encrypt.length,t),o.encrypt(e,t)},decrypt(e,t){if(pe(e,void 0,`data`),i&&e.length<i)throw Error(`"ciphertext" expected length >= tagLength=`+i);return s(o.decrypt.length,t),o.decrypt(e,t)}}}return Object.assign(n,e),n};function Ie(e,t,n=!0){if(t===void 0)return new Uint8Array(e);if(pe(t,e,`output`),n&&!Re(t))throw Error(`invalid output, must be aligned`);return t}function Le(e,t,n){fe(e),fe(t),de(n);let r=/* @__PURE__ */ new Uint8Array(16),i=ye(r);return i.setBigUint64(0,BigInt(t),n),i.setBigUint64(8,BigInt(e),n),r}function Re(e){return e.byteOffset%4==0}function ze(e){return Uint8Array.from(pe(e))}function z(e){return e===void 0?Be:{ok:!0,value:e}}let Be={ok:!0,value:void 0},B=e=>({ok:!1,error:e}),Ve=e=>{if(e.ok)return e.value;throw Error(`getOrThrow`,{cause:e.error})},He=e=>e.ok?e.value:null,Ue=e=>e.value;function V(e,t){try{return z(e())}catch(e){return B(t?t(e):e)}}async function We(e,t){try{return z(await e())}catch(e){return B(t?t(e):e)}}let Ge=/* @__PURE__ */ BigInt(2**32-1),Ke=/* @__PURE__ */ BigInt(32);function qe(e,t=!1){return t?{h:Number(e&Ge),l:Number(e>>Ke&Ge)}:{h:Number(e>>Ke&Ge)|0,l:Number(e&Ge)|0}}function Je(e,t=!1){let n=e.length,r=new Uint32Array(n),i=new Uint32Array(n);for(let a=0;a<n;a++){let{h:n,l:o}=qe(e[a],t);[r[a],i[a]]=[n,o]}return[r,i]}let Ye=e=>e/2**32|0,Xe=e=>e>>>0;function Ze(e,t,n,r){let i=Ye(n),a=Xe(n);e.setUint32(t,r?a:i,r),e.setUint32(t+4,r?i:a,r)}let Qe=(e,t,n)=>e>>>n,$e=(e,t,n)=>e<<32-n|t>>>n,et=(e,t,n)=>e>>>n|t<<32-n,tt=(e,t,n)=>e<<32-n|t>>>n,nt=(e,t,n)=>e<<64-n|t>>>n-32,rt=(e,t,n)=>e>>>n-32|t<<64-n;function it(e,t,n,r){let i=(t>>>0)+(r>>>0);return{h:e+n+(i/2**32|0)|0,l:i|0}}let at=(e,t,n)=>(e>>>0)+(t>>>0)+(n>>>0),ot=(e,t,n,r)=>t+n+r+(e/2**32|0)|0,st=(e,t,n,r)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0),ct=(e,t,n,r,i)=>t+n+r+i+(e/2**32|0)|0,lt=(e,t,n,r,i)=>(e>>>0)+(t>>>0)+(n>>>0)+(r>>>0)+(i>>>0),ut=(e,t,n,r,i,a)=>t+n+r+i+a+(e/2**32|0)|0;function dt(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&`BYTES_PER_ELEMENT`in e&&e.BYTES_PER_ELEMENT===1}let ft=e=>e?`"${e}" `:``;function pt(e,t=``){if(typeof e!=`number`)throw TypeError(ft(t)+`expected number, got `+typeof e);if(!Number.isSafeInteger(e)||e<0)throw RangeError(ft(t)+`expected integer >= 0, got `+e);return e}function mt(e,t,n=``){if(dt(e)&&(t===void 0||e.length===t))return e;t!==void 0&&pt(t,`length`);let r=dt(e),i=t===void 0?``:` of length ${t}`,a=r?`length=${e.length}`:`type=${typeof e}`,o=ft(n)+`expected Uint8Array`+i+`, got `+a;throw r?RangeError(o):TypeError(o)}function ht(e){if(typeof e!=`function`||typeof e.create!=`function`)throw TypeError(`expected hash wrapped by utils.createHasher`);if(pt(e.outputLen),pt(e.blockLen),e.outputLen<1||e.blockLen<1)throw Error(`hash blockLen / outputLen must be >= 1`)}let gt=(e,t)=>{if(typeof e!=`object`||!e||Array.isArray(e))throw TypeError((t===`object`?``:`"${t}" `)+`expected object, got type=`+typeof e)},_t=(e,t)=>{gt(e,t);let n=Object.getPrototypeOf(e);if(n!==Object.prototype&&n!==null)throw TypeError(`"${t}" expected plain object`);if(Object.hasOwn(e,`__proto__`))throw TypeError(`"${t}.__proto__" is not allowed`)};function vt(e,t=!0){if(e.destroyed)throw Error(`hash was destroyed`);if(t&&e.finished)throw Error(`digest() was already called`)}function yt(e,t){mt(e,void 0,`output`);let n=t.outputLen;if(!(e.length>=n))throw RangeError(`"output" expected length >= `+n)}function bt(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}function xt(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function St(e,t){return e<<32-t|e>>>t}function Ct(e){if(typeof e!=`string`)throw TypeError(`string expected`);let t=new TextEncoder().encode(e);try{return new Uint8Array(t)}finally{bt(t)}}function wt(e,t,n=`opts`){return _t(e,`defaults`),t!==void 0&&_t(t,n),Object.assign(Object.create(null),e,t)}function Tt(e,t={}){if(typeof e!=`function`)throw TypeError(`"hashCons" expected function, got type=`+typeof e);t=wt({},t,`info`);let n=(t,n)=>e(n).update(t).digest(),r=e(void 0);return n.outputLen=r.outputLen,n.blockLen=r.blockLen,n.canXOF=r.canXOF,n.create=t=>e(t),Object.assign(n,t),Object.freeze(n)}function Et(e=32){pt(e,`bytesLength`);let t=typeof globalThis==`object`?globalThis.crypto:null;if(typeof t?.getRandomValues!=`function`)throw Error(`crypto.getRandomValues must be defined`);if(e>65536)throw RangeError(`"bytesLength" expected <= 65536, got ${e}`);return t.getRandomValues(new Uint8Array(e))}let Dt=e=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,e])});function Ot(e,t,n){return e&t^~e&n}function kt(e,t,n){return e&t^e&n^t&n}var At=class{blockLen;outputLen;canXOF=!1;padOffset;isLE;buffer;view;finished=!1;length=0;pos=0;destroyed=!1;constructor(e,t,n,r){this.blockLen=e,this.outputLen=t,this.padOffset=n,this.isLE=r,this.buffer=new Uint8Array(e),this.view=xt(this.buffer)}update(e){vt(this),mt(e);let{view:t,buffer:n,blockLen:r}=this,i=e.length,a=!1;for(let o=0;o<i;){let s=Math.min(r-this.pos,i-o);if(s===r){let t=xt(e);for(;r<=i-o;o+=r)this.process(t,o);a=!0}else n.set(o===0&&s===i?e:e.subarray(o,o+s),this.pos),this.pos+=s,o+=s,this.pos===r&&(this.process(t,0),this.pos=0,a=!0)}return this.length+=e.length,a&&this.roundClean(),this}digestInto(e){vt(this),yt(e,this),this.finished=!0;let{buffer:t,view:n,blockLen:r,isLE:i}=this,{pos:a}=this;t[a++]=128,t.fill(0,a),this.padOffset>r-a&&(this.process(n,0),t.fill(0)),Ze(n,r-8,this.length*8,i),this.process(n,0),this.roundClean();let o=e===t?n:xt(e),s=this.outputLen,c=s/4,l=this.get();if(s%4||c>l.length)throw Error(`invalid outputLen`);for(let e=0;e<c;e++)o.setUint32(4*e,l[e],i)}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}_cloneIntoMeta(e){let{buffer:t,length:n,finished:r,destroyed:i,pos:a}=this;return e.destroyed=i,e.finished=r,e.length=n,e.pos=a,a&&e.buffer.set(t),e}clone(){return this._cloneInto()}};let jt=/* @__PURE__ */ Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Mt=/* @__PURE__ */ Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]),Nt=/* @__PURE__ */ Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Pt=/* @__PURE__ */ new Uint32Array(64);var Ft=class extends At{A=0;B=0;C=0;D=0;E=0;F=0;G=0;H=0;constructor(e,t){super(64,e,8,!1),this.A=t[0]|0,this.B=t[1]|0,this.C=t[2]|0,this.D=t[3]|0,this.E=t[4]|0,this.F=t[5]|0,this.G=t[6]|0,this.H=t[7]|0}get(){let{A:e,B:t,C:n,D:r,E:i,F:a,G:o,H:s}=this;return[e,t,n,r,i,a,o,s]}set(e,t,n,r,i,a,o,s){this.A=e|0,this.B=t|0,this.C=n|0,this.D=r|0,this.E=i|0,this.F=a|0,this.G=o|0,this.H=s|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)Pt[n]=e.getUint32(t,!1);for(let e=16;e<64;e++){let t=Pt[e-15],n=Pt[e-2],r=St(t,7)^St(t,18)^t>>>3,i=St(n,17)^St(n,19)^n>>>10;Pt[e]=i+Pt[e-7]+r+Pt[e-16]|0}let{A:n,B:r,C:i,D:a,E:o,F:s,G:c,H:l}=this;for(let e=0;e<64;e++){let t=St(o,6)^St(o,11)^St(o,25),u=l+t+Ot(o,s,c)+Nt[e]+Pt[e]|0,d=(St(n,2)^St(n,13)^St(n,22))+kt(n,r,i)|0;l=c,c=s,s=o,o=a+u|0,a=i,i=r,r=n,n=u+d|0}n=n+this.A|0,r=r+this.B|0,i=i+this.C|0,a=a+this.D|0,o=o+this.E|0,s=s+this.F|0,c=c+this.G|0,l=l+this.H|0,this.set(n,r,i,a,o,s,c,l)}roundClean(){bt(Pt)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),bt(this.buffer)}},It=class extends Ft{constructor(){super(32,jt)}};let Lt=/* @__PURE__ */ Je((/* @__PURE__ */ `0x428a2f98d728ae22.0x7137449123ef65cd.0xb5c0fbcfec4d3b2f.0xe9b5dba58189dbbc.0x3956c25bf348b538.0x59f111f1b605d019.0x923f82a4af194f9b.0xab1c5ed5da6d8118.0xd807aa98a3030242.0x12835b0145706fbe.0x243185be4ee4b28c.0x550c7dc3d5ffb4e2.0x72be5d74f27b896f.0x80deb1fe3b1696b1.0x9bdc06a725c71235.0xc19bf174cf692694.0xe49b69c19ef14ad2.0xefbe4786384f25e3.0x0fc19dc68b8cd5b5.0x240ca1cc77ac9c65.0x2de92c6f592b0275.0x4a7484aa6ea6e483.0x5cb0a9dcbd41fbd4.0x76f988da831153b5.0x983e5152ee66dfab.0xa831c66d2db43210.0xb00327c898fb213f.0xbf597fc7beef0ee4.0xc6e00bf33da88fc2.0xd5a79147930aa725.0x06ca6351e003826f.0x142929670a0e6e70.0x27b70a8546d22ffc.0x2e1b21385c26c926.0x4d2c6dfc5ac42aed.0x53380d139d95b3df.0x650a73548baf63de.0x766a0abb3c77b2a8.0x81c2c92e47edaee6.0x92722c851482353b.0xa2bfe8a14cf10364.0xa81a664bbc423001.0xc24b8b70d0f89791.0xc76c51a30654be30.0xd192e819d6ef5218.0xd69906245565a910.0xf40e35855771202a.0x106aa07032bbd1b8.0x19a4c116b8d2d0c8.0x1e376c085141ab53.0x2748774cdf8eeb99.0x34b0bcb5e19b48a8.0x391c0cb3c5c95a63.0x4ed8aa4ae3418acb.0x5b9cca4f7763e373.0x682e6ff3d6b2b8a3.0x748f82ee5defb2fc.0x78a5636f43172f60.0x84c87814a1f0ab72.0x8cc702081a6439ec.0x90befffa23631e28.0xa4506cebde82bde9.0xbef9a3f7b2c67915.0xc67178f2e372532b.0xca273eceea26619c.0xd186b8c721c0c207.0xeada7dd6cde0eb1e.0xf57d4f7fee6ed178.0x06f067aa72176fba.0x0a637dc5a2c898a6.0x113f9804bef90dae.0x1b710b35131c471b.0x28db77f523047d84.0x32caab7b40c72493.0x3c9ebe0a15c9bebc.0x431d67c49c100d4c.0x4cc5d4becb3e42b6.0x597f299cfc657e2a.0x5fcb6fab3ad6faec.0x6c44198c4a475817`.split(`.`)).map(e=>BigInt(e))),Rt=Lt[0],zt=Lt[1],Bt=/* @__PURE__ */ new Uint32Array(80),Vt=/* @__PURE__ */ new Uint32Array(80);var Ht=class extends At{Ah=0;Al=0;Bh=0;Bl=0;Ch=0;Cl=0;Dh=0;Dl=0;Eh=0;El=0;Fh=0;Fl=0;Gh=0;Gl=0;Hh=0;Hl=0;constructor(e,t){super(128,e,16,!1),this.Ah=t[0]|0,this.Al=t[1]|0,this.Bh=t[2]|0,this.Bl=t[3]|0,this.Ch=t[4]|0,this.Cl=t[5]|0,this.Dh=t[6]|0,this.Dl=t[7]|0,this.Eh=t[8]|0,this.El=t[9]|0,this.Fh=t[10]|0,this.Fl=t[11]|0,this.Gh=t[12]|0,this.Gl=t[13]|0,this.Hh=t[14]|0,this.Hl=t[15]|0}get(){let{Ah:e,Al:t,Bh:n,Bl:r,Ch:i,Cl:a,Dh:o,Dl:s,Eh:c,El:l,Fh:u,Fl:d,Gh:f,Gl:p,Hh:m,Hl:h}=this;return[e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h]}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.Ah=e|0,this.Al=t|0,this.Bh=n|0,this.Bl=r|0,this.Ch=i|0,this.Cl=a|0,this.Dh=o|0,this.Dl=s|0,this.Eh=c|0,this.El=l|0,this.Fh=u|0,this.Fl=d|0,this.Gh=f|0,this.Gl=p|0,this.Hh=m|0,this.Hl=h|0}_cloneInto(e){return(e||=new this.constructor).set(...this.get()),this._cloneIntoMeta(e)}process(e,t){for(let n=0;n<16;n++,t+=4)Bt[n]=e.getUint32(t),Vt[n]=e.getUint32(t+=4);for(let e=16;e<80;e++){let t=Bt[e-15]|0,n=Vt[e-15]|0,r=et(t,n,1)^et(t,n,8)^Qe(t,n,7),i=tt(t,n,1)^tt(t,n,8)^$e(t,n,7),a=Bt[e-2]|0,o=Vt[e-2]|0,s=et(a,o,19)^nt(a,o,61)^Qe(a,o,6),c=tt(a,o,19)^rt(a,o,61)^$e(a,o,6),l=st(i,c,Vt[e-7],Vt[e-16]),u=ct(l,r,s,Bt[e-7],Bt[e-16]);Bt[e]=u|0,Vt[e]=l|0}let{Ah:n,Al:r,Bh:i,Bl:a,Ch:o,Cl:s,Dh:c,Dl:l,Eh:u,El:d,Fh:f,Fl:p,Gh:m,Gl:h,Hh:g,Hl:_}=this;for(let e=0;e<80;e++){let t=et(u,d,14)^et(u,d,18)^nt(u,d,41),v=tt(u,d,14)^tt(u,d,18)^rt(u,d,41),y=u&f^~u&m,b=d&p^~d&h,x=lt(_,v,b,zt[e],Vt[e]),S=ut(x,g,t,y,Rt[e],Bt[e]),C=x|0,w=et(n,r,28)^nt(n,r,34)^nt(n,r,39),T=tt(n,r,28)^rt(n,r,34)^rt(n,r,39),E=n&i^n&o^i&o,D=r&a^r&s^a&s;g=m|0,_=h|0,m=f|0,h=p|0,f=u|0,p=d|0,{h:u,l:d}=it(c|0,l|0,S|0,C|0),c=o|0,l=s|0,o=i|0,s=a|0,i=n|0,a=r|0;let O=at(C,T,D);n=ot(O,S,w,E),r=O|0}({h:n,l:r}=it(this.Ah|0,this.Al|0,n|0,r|0)),{h:i,l:a}=it(this.Bh|0,this.Bl|0,i|0,a|0),{h:o,l:s}=it(this.Ch|0,this.Cl|0,o|0,s|0),{h:c,l}=it(this.Dh|0,this.Dl|0,c|0,l|0),{h:u,l:d}=it(this.Eh|0,this.El|0,u|0,d|0),{h:f,l:p}=it(this.Fh|0,this.Fl|0,f|0,p|0),{h:m,l:h}=it(this.Gh|0,this.Gl|0,m|0,h|0),{h:g,l:_}=it(this.Hh|0,this.Hl|0,g|0,_|0),this.set(n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_)}roundClean(){bt(Bt,Vt)}destroy(){this.destroyed=!0,bt(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},Ut=class extends Ht{constructor(){super(64,Mt)}};let Wt=/* @__PURE__ */ Tt(()=>new It,/* @__PURE__ */ Dt(1)),Gt=/* @__PURE__ */ Tt(()=>new Ut,/* @__PURE__ */ Dt(3));var Kt=class{oHash;iHash;blockLen;outputLen;canXOF=!1;finished=!1;destroyed=!1;constructor(e,t){if(ht(e),mt(t,void 0,`key`),this.iHash=e.create(),typeof this.iHash.update!=`function`)throw Error(`expected Hash instance`);this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let n=this.blockLen,r=new Uint8Array(n);r.set(t.length>n?e.create().update(t).digest():t);for(let e=0;e<r.length;e++)r[e]^=54;this.iHash.update(r),this.oHash=e.create();for(let e=0;e<r.length;e++)r[e]^=106;this.oHash.update(r),bt(r)}update(e){return vt(this),this.iHash.update(e),this}digestInto(e){vt(this),yt(e,this),this.finished=!0;let t=e.subarray(0,this.outputLen);this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||=Object.create(Object.getPrototypeOf(this),{});let{oHash:t,iHash:n,finished:r,destroyed:i,blockLen:a,outputLen:o,canXOF:s}=this;return e=e,e.finished=r,e.destroyed=i,e.blockLen=a,e.outputLen=o,e.canXOF=s,e.oHash=t._cloneInto(e.oHash),e.iHash=n._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}};let qt=/* @__PURE__ */ (()=>{let e=((e,t,n)=>new Kt(e,t).update(n).digest());return e.create=(e,t)=>new Kt(e,t),e})();
/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */
function Jt(e){for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(n>=55296&&n<=56319){if(t+1>=e.length)return!1;let n=e.charCodeAt(++t);if(n<56320||n>57343)return!1}else if(n>=56320&&n<=57343)return!1}return!0}function Yt(e){if(typeof e!=`string`)throw TypeError(`invalid mnemonic type: `+typeof e);if(!Jt(e))throw TypeError(`expected well-formed Unicode string`);return e.normalize(`NFKD`)}function Xt(e){let t=Yt(e),n=t.split(` `);if(![12,15,18,21,24].includes(n.length))throw Error(`Invalid mnemonic`);return{nfkd:t,words:n}}function Zt(e){if(mt(e),![16,20,24,28,32].includes(e.length))throw RangeError(`invalid entropy length`)}let Qt=e=>{let t=8-e.length/4;return Wt(e)[0]>>t<<t};function $t(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!=`string`)throw TypeError(`Wordlist: expected array of 2048 strings`);e.forEach(e=>{if(typeof e!=`string`)throw TypeError(`wordlist: non-string element: `+e);if(!Jt(e))throw TypeError(`wordlist: expected well-formed Unicode string`)})}function en(e,t){$t(t);let n=e.length/3*4,r=new Uint8Array(n+1),i=0,a=0,o=0;for(let n of e){let e=t.indexOf(n);if(e===-1)throw Error(`Unknown word: `+n);for(i=i<<11|e,a+=11;a>=8;)a-=8,r[o++]=i>>>a&255;i&=(1<<a)-1}a>0&&(r[o]=i<<8-a);let s=r.subarray(0,n);if(r[n]!==Qt(s))throw Error(`Invalid checksum`);return Uint8Array.from(s)}function tn(e,t){let{words:n}=Xt(e),r=en(n,t);return Zt(r),r}function nn(e,t){try{tn(e,t)}catch{return!1}return!0}let rn=/* @__PURE__ */ Object.freeze(`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`)),an=(e,t=2166136261)=>{for(let n=0;n<e.length;n++)t=Math.imul(t^e[n],16777619);return t>>>0},on=!(`HermesInternal`in globalThis)&&globalThis.Buffer!==void 0,H=e=>{if(typeof e==`string`)return JSON.stringify(e);if(typeof e!=`object`||!e)return String(e);try{let t=JSON.stringify(e);if(typeof t==`string`)return t}catch{}try{return String(e)}catch{return`[Unserializable value]`}},sn=e=>`A value ${H(e.value)} is not a ${e.expected.toLowerCase()}.`,cn=e=>e.kind===`NotObject`?`A value ${H(e.value)} is not an object.`:`The value is an object, but an Object Output must be a plain object or have a null prototype.`,ln=sn,un=sn,dn=sn,fn=sn,pn=e=>`A value ${H(e.value)} does not have the expected object tag ${H(e.expected)}.`,mn=e=>`The value ${H(e.value)} is not strictly equal to the expected literal: ${String(e.expected)}.`,hn=()=>`A value does not match any allowed variant.`,gn=e=>`The value ${H(e.value)} is not a canonical ISO date-time string.`,_n=e=>`The value ${H(e.value)} does not have the required length of ${e.exact}.`,vn=e=>`The value ${H(e.value)} is not a valid Base64Url string.`,yn=()=>`The value is not a valid English BIP39 mnemonic.`,bn=e=>`The value ${H(e.value)} is not a valid Id.`,xn=e=>`The value ${H(e.value)} must be non-negative (>= 0).`,Sn=e=>`The value ${H(e.value)} must be positive (> 0).`,Cn=e=>`The value ${H(e.value)} must be a safe integer.`,wn=e=>`The value ${H(e.value)} must be less than ${e.max}.`,Tn=e=>`The value ${H(e.value)} must be less than or equal to ${e.max}.`,En=()=>`The value must not be NaN.`,Dn=e=>`The value ${H(e.value)} must be finite.`,On=e=>{if(e.reason.kind===`NotRecord`)return`A value ${H(e.reason.value)} is not a Record.`;if(e.reason.kind===`NotPlainRecord`)return`The value is an object, but a Record Output must be a plain object or have a null prototype.`;let t=e.reason.issues[0];switch(t.kind){case`Key`:return`Property key ${H(t.key)} is invalid.`;case`Value`:return`The value of property ${H(t.key)} is invalid.`;case`Accessor`:return`A Record property ${H(t.key)} must be a data property.`;case`NonEnumerable`:return`A Record property ${H(t.key)} must be enumerable.`;case`Collision`:return`Record keys ${H(t.previousKey)} and ${H(t.key)} decode to the same key ${H(t.outputKey)}.`}},kn=e=>{if(e.reason.kind!==`Properties`)return cn(e.reason);let t=Reflect.ownKeys(e.reason.errors).at(0);N(t);let n=e.reason.errors[t];if(N(n),n.type===`ObjectPropertyAccess`)switch(n.reason){case`Accessor`:return`An Object property must be a data property. Materialize accessor values into plain data before using this Type or use a different Type.`;case`NonEnumerable`:return`An Object property must be enumerable. Make it enumerable or use a different Type.`}return n.type===`ObjectMissingProperty`?`The required property ${H(t)} is missing.`:typeof t==`symbol`?`An Object property key must be a string. Remove the symbol property or use a different Type.`:n.type===`ObjectExcessProperty`?`The property ${H(t)} is not allowed. Remove it or use a different Type.`:`The property ${H(t)} is invalid.`},An=e=>`The value ${H(e.value)} cannot be parsed into a JsonValue.`,jn=/*#__PURE__*/ globalThis.Symbol(),Mn=/*#__PURE__*/ globalThis.Symbol(),Nn=(e,t)=>{let n=re(e.length+1);for(let t=0;t<e.length;t++)n[t]=e[t];return n[e.length]=t,n},Pn=(e,t,n,r)=>[{name:e,error:t,path:r,formatError:n}],Fn=(e,t,n,r)=>(i,a,o)=>{let s=i.reason;if(s.kind!==t)return Pn(e,i,n,o);let c=s.issues,l=a===`first`?1:c.length,u=[];for(let s=0;s<l;s++){let d=c[s],f=Nn(o,`key`in d?d.key:d.index);if(d.error===void 0){u.push({name:e,error:a===`first`?i:{type:e,reason:{kind:t,issues:[d]}},path:f,formatError:n});continue}let p=r(d)[Mn](d.error,a,f);if(l===1)return p;for(let e of p)u.push(e)}return u},In=e=>e.formatError(e.error),Ln=(e,t=In)=>{let n=t(e);if(e.alternatives===void 0)return n;for(let{index:r,name:i,issues:a}of e.alternatives)for(let e of a){let a=``;for(let t of e.path)a+=typeof t==`string`?`[${JSON.stringify(t)}]`:`[${globalThis.String(t)}]`;let o=Ln(e,t);n+=`\n- ${r}: ${i}${a}: ${o.includes(`
`)?o.replaceAll(`
`,`
  `):o}`}return n};function Rn(e,t){if(e===void 0)return;let n=e,r=n[jn](t);r.ok||j(!1,`Expected ${n.name}.`,{cause:r.error,stackStartFn:Rn})}let zn=(e,t,n,r,i=Wn)=>{if(t(r))return;let a=n(r,i).error;j(!1,`Expected ${e}.`,{cause:a})};function Bn(e,t,n,r,i){if(typeof t==`function`){let r=Vn(t);return Hn(e,r,n,{check:e=>{let t=r(e);return t.ok?void 0:t.error}})}return Un(e,t,Vn(n),r,!1,i?.path)}let Vn=e=>t=>{let n=e(t);return n.ok&&j(globalThis.Object.is(n.value,t),`A Type refinement must return its input.`),n},Hn=(e,t,n,{getTypeIssues:r,isOutput:i,check:a}={})=>{let o=n,s=r??((t,n,r)=>Pn(t.type===`TypeOf`?e:t.type,t,o,r)),c=i??(a?e=>a(e,Wn)===void 0:e=>t(e).ok),l=(n,r=Wn)=>(zn(e,c,t,n,r),z(n)),u=n=>(zn(e,c,t,n),n);return{"~evolu/instance":`Type`,name:e,parent:null,fromUnknown:t,formatError:n,is:c,from:l,to:u,orThrow:(n,r=Wn)=>(zn(e,c,t,n,r),n),orNull:u,"~standard":{version:1,vendor:`evolu`,validate:e=>{let n=t(e,Gn);return n.ok?{value:n.value}:{issues:s(n.error,`all`,[]).map(e=>({message:Ln(e),path:e.path}))}}},[jn]:t,[qn]:z,[Kn]:I,[Mn]:s,[Zn]:a,[Qn]:void 0,[Yn]:void 0,[Xn]:void 0}},Un=(e,t,n,r,i=!1,a)=>{let o=t,s=r,c=r?(t,n,r)=>t.type===e?Pn(e,t,s,a?[...r,...a]:r):o[Mn](t,n,r):o[Mn],l=n,u=i?e=>{if(!e.ok)return e;let t=l(e.value);return t.ok?e:t}:e=>e.ok?l(e.value):e,d=o.fromUnknown,f=o[jn],p=o[qn],m=(e,t=Wn)=>u(p(e,t));p.parent&&(m.parent=nr(p.parent,e=>tr(e,u)));let h=rr(m),g=i?o[Qn]:void 0,_=g?[...g,l]:[l],v=_.length,y=o;if(i)for(;y[Qn];)y=y.parent;let b=y.is,x=e=>{if(!b(e))return!1;for(let t=0;t<v;t++){let n=_[t];if(!n(e).ok)return!1}return!0},S=y[Zn],C=S&&((e,t)=>{let n=S(e,t);if(n!==void 0)return n;for(let t=0;t<v;t++){let n=_[t],r=n(e);if(!r.ok)return r.error}}),w=y.fromUnknown,T=v>1?(e,t=Wn)=>{let n=w(e,t);if(!n.ok)return n;for(let e=0;e<v;e++){let t=_[e],r=t(n.value);if(!r.ok)return r}return n}:(e,t=Wn)=>u(d(e,t));return cr(e,o,T,x,f===d?T:(e,t=Wn)=>u(f(e,t)),h,I,c,{check:C,refinements:i?_:void 0})},Wn={errors:`first`},Gn={errors:`all`},Kn=/*#__PURE__*/ globalThis.Symbol(),qn=/*#__PURE__*/ globalThis.Symbol(),Jn=/*#__PURE__*/ globalThis.Symbol(),Yn=/*#__PURE__*/ globalThis.Symbol(),Xn=/*#__PURE__*/ globalThis.Symbol(),Zn=/*#__PURE__*/ globalThis.Symbol(),Qn=/*#__PURE__*/ globalThis.Symbol(),$n=e=>(t,n=Wn)=>{let r=e(t,n);return r===void 0?z(t):B(r)},er=e=>{let t=[];for(let n of e){let e=n[Zn];if(e===void 0)return;t.push(e)}return t},tr=(e,t)=>(n,r=Wn)=>t(e(n,r),r),nr=(e,t)=>{let n=t(e);return e.parent&&(n.parent=nr(e.parent,t)),n},rr=e=>{if(!e)return z;let t=e=>z(e);return t.parent=e,t},ir=e=>e.fromUnknown,ar=e=>e[jn],or=e=>e.is;function sr(e){for(;e.parent!=null;)e=e.parent;return e}let cr=(e,t,n,r,i,a,o,s,{additionalProperties:c,formatIssue:l=In,check:u,refinements:d}={})=>{let f=t,p=f?.[Kn],m=o;if(p){m=e=>p(o(e));let e=(e,t=Wn)=>o(e,t);p.parent&&(e.parent=nr(p.parent,e=>t=>e(o(t)))),m.parent=e}let h=f?.[Mn]===s?f.formatError:e=>Ln(s(e,`first`,[])[0],l),g=(t,n=Wn)=>(zn(e,r,i,t,n),a(t,n));a.parent&&(g.parent=lr(f,a.parent));let _=sr(g),v=t=>(zn(e,r,i,t),m(t));m.parent&&(v.parent=nr(m.parent,t=>n=>(zn(e,r,i,n),t(n))));let y={"~evolu/instance":`Type`,name:e,parent:t,fromUnknown:n,formatError:h,is:r,from:g,to:v,orThrow:(e,t=Wn)=>{let n=_(e,t);if(n.ok)return n.value;throw Error(h(n.error),{cause:n.error})},orNull:(e,t=Wn)=>He(_(e,t)),"~standard":{version:1,vendor:`evolu`,validate:e=>{let t=n(e,Gn);return t.ok?{value:t.value}:{issues:s(t.error,`all`,[]).map(e=>({message:Ln(e,l),path:e.path}))}}},[jn]:i,[qn]:a,[Kn]:m,[Mn]:s,[Zn]:u,[Qn]:d,[Yn]:void 0,[Xn]:void 0};return c!==void 0&&globalThis.Object.assign(y,c),y},lr=(e,t)=>{let{name:n,is:r}=e,i=e[jn],a=(e,a=Wn)=>(zn(n,r,i,e,a),t(e,a));return t.parent&&(a.parent=lr(e.parent,t.parent)),a},ur=/*#__PURE__*/ Hn(`Unknown`,z,I,{isOutput:()=>!0,check:()=>void 0}),dr=(e,t)=>{let n=e.toLowerCase();return Hn(e,t=>typeof t===n?z(t):B({type:`TypeOf`,expected:e,value:t}),t,{isOutput:e=>typeof e===n,check:t=>typeof t===n?void 0:{type:`TypeOf`,expected:e,value:t}})},fr=/*#__PURE__*/ dr(`String`,ln),pr=/*#__PURE__*/ dr(`Number`,un),mr=/*#__PURE__*/ dr(`BigInt`,dn),hr=/*#__PURE__*/ dr(`Boolean`,fn);function gr(e,t){let n=`[object ${e}]`;return t===void 0?Hn(e,t=>_r(t,n)?z(t):B({type:`ObjectTag`,expected:e,value:t}),pn,{isOutput:e=>_r(e,n),check:t=>_r(t,n)?void 0:{type:`ObjectTag`,expected:e,value:t}}):globalThis.Object.assign(Un(`ObjectTag`,t,t=>_r(t,n)?z(t):B({type:`ObjectTag`,expected:e,value:t}),pn),{expected:e})}let _r=(e,t)=>e!==null&&(typeof e==`object`||typeof e==`function`)&&globalThis.Object.prototype.toString.call(e)===t,vr=/*#__PURE__*/ gr(`Uint8Array`),yr=e=>{let t=e,n=typeof t==`string`?fr:typeof t==`number`?pr:typeof t==`bigint`?mr:typeof t==`boolean`?hr:null;return globalThis.Object.assign(n?Un(`Literal`,n,e=>e===t?z():B({type:`Literal`,expected:t,value:e}),mn,!0):Hn(`Literal`,e=>e===t?z(e):B({type:`Literal`,expected:t,value:e}),mn,{isOutput:e=>e===t,check:e=>e===t?void 0:{type:`Literal`,expected:t,value:e}}),{expected:t,[Jn]:!0})},br=/*#__PURE__*/ yr(null);function xr(...e){let t=e.map(e=>typeof e==`object`&&e?e:yr(e)),n=t.map(sr),r=wr(n),i=r?$n(r):Tr(n,ir),a=Sr(t),o=cr(`Union`,null,i,Cr(n),r?i:Tr(n,ar),z,I,Sr(n),{check:r}),s=e.every(e=>typeof e!=`object`||!e),c=t=>e.indexOf(t)!==-1,l=wr(t),u=l&&s?(e,t)=>c(e)?void 0:l(e,t):l,d=u?$n(u):Tr(t,ir),f=u?d:Tr(t,ar),p=Tr(t,(e,t)=>{let r=sr(e[qn]),i=n[t].is;return(e,t)=>i(e)?r(e,t):void 0}),m=e=>t.find(t=>t.is(e)),h=rr(p);return cr(`Union`,o,d,s?c:Cr(t),f,h,e=>{let t=m(e);return N(t),t[Kn](e)},a,{additionalProperties:{members:t,[Jn]:!0},check:u})}let Sr=e=>(t,n,r)=>[{name:`Union`,error:t,path:r,formatError:hn,alternatives:t.errors.map(({index:t,error:n})=>({index:t,name:e[t].name,issues:e[t][Mn](n,`all`,[])}))}],Cr=e=>{if(e.length===2){let t=e[0].is,n=e[1].is;return e=>t(e)||n(e)}let t;return n=>{let r=t??=e.map(or);for(let e=0;e<r.length;e++)if(r[e](n))return!0;return!1}},wr=e=>{let t=er(e);if(t!==void 0)return(e,n)=>{let r,i;for(let a=0;a<t.length;a++){let o=t[a](e,n);if(o===void 0)return;r===void 0?r={index:a,error:o}:n.errors===`all`&&(i??=[r]).push({index:a,error:o})}return N(r),{type:`Union`,errors:i??[r]}}},Tr=(e,t)=>{let n;return(r,i=Wn)=>{let a=n??=e.map(t),o,s;for(let e=0;e<a.length;e++){let t=a[e](r,i);if(t!==void 0){if(t.ok)return t;o===void 0?o={index:e,error:t.error}:i.errors===`all`&&(s??=[o]).push({index:e,error:t.error})}}return N(o),B({type:`Union`,errors:s??[o]})}},Er=e=>xr(e,br);function Dr(e,t,n,r,i){return Un(e,t,n??(()=>z()),r,!0,i?.path)}let Or=/*#__PURE__*/ Dr(`DateIso`,fr,e=>e.length===24&&new globalThis.Date(e).toJSON()===e?z():B({type:`DateIso`,value:e}),gn),kr=e=>t=>{let n=`Length${e}`;return Dr(n,t,t=>t.length===e?z():B({type:n,value:t,exact:e}),_n)},Ar={base64:{alphabet:`base64`,omitPadding:!1},base64url:{alphabet:`base64url`,omitPadding:!0}},jr=(e,t)=>{if(on)return globalThis.Buffer.from(e).toString(t);if(`toBase64`in globalThis.Uint8Array.prototype)return e.toBase64(Ar[t]);let n=Array.from(e,e=>globalThis.String.fromCodePoint(e)).join(``),r=btoa(n);return t===`base64`?r:r.replaceAll(`+`,`-`).replaceAll(`/`,`_`).replaceAll(`=`,``)},Mr=(e,t)=>{if(on){let n=globalThis.Buffer.from(e,t);return new globalThis.Uint8Array(n)}if(`fromBase64`in globalThis.Uint8Array)return globalThis.Uint8Array.fromBase64(e,Ar[t]);let n=e;if(t===`base64url`)for(n=e.replaceAll(`-`,`+`).replaceAll(`_`,`/`);n.length%4!=0;)n+=`=`;let r=atob(n);return globalThis.Uint8Array.from(r,e=>e.charCodeAt(0))},Nr=/*#__PURE__*/ Dr(`Base64Url`,fr,e=>{let t=V(()=>Mr(e,`base64url`));return t.ok&&jr(t.value,`base64url`)===e?z():B({type:`Base64Url`,value:e})},vn),Pr=e=>jr(e,`base64url`),Fr=e=>Mr(e,`base64url`),Ir=/*#__PURE__*/ Bn(`Mnemonic`,fr,e=>/^[a-z]+(?: [a-z]+)*$/u.test(e)&&nn(e,rn)?z(e):B({type:`Mnemonic`}),yn),Lr=/*#__PURE__*/ Dr(`Id`,fr,e=>e.length===22&&Nr.from.parent(e).ok?z():B({type:`Id`,value:e}),bn),Rr=(e,...t)=>Pr(e.randomBytes.create(16)),zr=/*#__PURE__*/ Dr(`IdBytes`,/*#__PURE__*/ kr(16)(vr)),Br=e=>Fr(e),Vr=e=>Pr(e),Hr=e=>Dr(`NonNegative`,e,e=>e>=0?z():B({type:`NonNegative`,value:e}),xn),Ur=e=>Dr(`Positive`,e,e=>e>0?z():B({type:`Positive`,value:e}),Sn),Wr=/*#__PURE__*/ (e=>Dr(`NonNaN`,e,e=>globalThis.Number.isNaN(e)?B({type:`NonNaN`,value:e}):z(),En))(pr),Gr=/*#__PURE__*/ (e=>Dr(`Finite`,e,e=>globalThis.Number.isFinite(e)?z():B({type:`Finite`,value:e}),Dn))(Wr),Kr=/*#__PURE__*/ Hr(/* @__PURE__ */ (e=>Dr(`Int`,e,e=>globalThis.Number.isSafeInteger(e)?z():B({type:`Int`,value:e}),Cn))(Gr)),qr=/*#__PURE__*/ Kr.orThrow(0),Jr=/*#__PURE__*/ Ur(Kr),Yr=/*#__PURE__*/ Jr.orThrow(1),Xr=e=>t=>{let n=`LessThan${e}`;return Dr(n,t,t=>t<e?z():B({type:n,value:t,max:e}),wn)},Zr=e=>t=>{let n=`LessThanOrEqualTo${e}`;return Dr(n,t,t=>t<=e?z():B({type:n,value:t,max:e}),Tn)},Qr=(e,t)=>(n,r,i)=>{let a=n;if(a.reason.kind!==`Properties`)return Pn(`Object`,n,kn,i);let o=a.reason.errors,s=Reflect.ownKeys(o);N(s[0]);let c=r===`first`?1:s.length,l=[];for(let a=0;a<c;a++){let u=s[a],d=o[u],f=typeof u==`string`&&e!==void 0&&globalThis.Object.hasOwn(e,u)?e[u]:void 0;if(d.type===`ObjectPropertyAccess`||d.type===`ObjectMissingProperty`||d.type===`ObjectExcessProperty`||f===void 0&&t===void 0){let e=n;if(r===`all`){let t=b();t[u]=d,e={type:`Object`,reason:{kind:`Properties`,errors:t}}}l.push({name:`Object`,error:e,path:Nn(i,u),formatError:kn});continue}let p=f===void 0?t[Mn](d,r,i.slice()):fi(f)[Mn](d,r,Nn(i,u));if(c===1)return p;for(let e of p)l.push(e)}return l},$r=e=>{let t=globalThis.Object.getOwnPropertyNames(e);return globalThis.Object.getOwnPropertySymbols(e).length===0?t:Reflect.ownKeys(e)},ei=e=>{let t=[];for(let n of Reflect.ownKeys(e)){if(typeof n!=`string`)break;t.push(n)}return t},ti=(e,t)=>{let n=e,r=t,i=(e,t,n,r)=>typeof e!=`object`||!e?B({type:`Record`,reason:{kind:`NotRecord`,value:e}}):g(e)?ni(e,t,n,r):B({type:`Record`,reason:{kind:`NotPlainRecord`,value:e}}),a=n[Zn],o=r[Zn],s=a&&o&&((e,t)=>{if(typeof e!=`object`||!e)return{type:`Record`,reason:{kind:`NotRecord`,value:e}};if(!g(e))return{type:`Record`,reason:{kind:`NotPlainRecord`,value:e}};let n;for(let r of $r(e)){let i=a(r,t);if(i!==void 0&&((n??=[]).push({kind:`Key`,key:r,error:i}),t.errors===`first`))break;let s=globalThis.Object.getOwnPropertyDescriptor(e,r);if(j(s!==void 0,`Record property descriptor is missing.`),!(`value`in s)){if((n??=[]).push({kind:`Accessor`,key:r}),t.errors===`first`)break}else if(s.enumerable){let e=o(s.value,t);if(e!==void 0&&((n??=[]).push({kind:`Value`,key:r,error:e}),t.errors===`first`))break}else if((n??=[]).push({kind:`NonEnumerable`,key:r}),t.errors===`first`)break}return n===void 0?void 0:{type:`Record`,reason:{kind:`Entries`,issues:n}}}),c=s?$n(s):(e,t=Wn)=>i(e,n.fromUnknown,r.fromUnknown,t),l=s?c:(e,t=Wn)=>i(e,n[jn],r[jn],t),u=sr(n),d=sr(r),f=u!==n||d!==r?ti(u,d):null,p=rr(f?(e,t=Wn)=>ni(e,sr(n[qn]),sr(r[qn]),t):void 0),m=n[Kn],h=r[Kn],_=m===I&&h===I?I:e=>{let t=b(),n=!1;for(let r of globalThis.Object.keys(e)){let i=e[r],a=m(r),o=h(i);j(!globalThis.Object.hasOwn(t,a),`Record key Type encoding must not produce duplicate keys.`),t[a]=o,r===a&&globalThis.Object.is(i,o)||(n=!0)}return n?t:e},v=e=>{if(typeof e!=`object`||!e||!g(e))return!1;let t=globalThis.Object.getOwnPropertySymbols(e).length!==0,i=t?ei(e):globalThis.Object.getOwnPropertyNames(e);for(let t=0;t<i.length;t++){let a=i[t];if(!n.is(a))return!1;let o=globalThis.Object.getOwnPropertyDescriptor(e,a);if(o===void 0||!(`value`in o)||!o.enumerable||!r.is(o.value))return!1}return!t},y=Fn(`Record`,`Entries`,On,e=>e.kind===`Key`?n:r);return cr(`Record`,f,c,v,l,p,_,y,{additionalProperties:{key:n,value:r},check:s})},ni=(e,t,n,r)=>{let i,a=b(),o=b(),s=!1;for(let c of $r(e)){let l=t(c,r);if(!l.ok&&((i??=[]).push({kind:`Key`,key:c,error:l.error}),r.errors===`first`))break;let u=globalThis.Object.getOwnPropertyDescriptor(e,c);j(u!==void 0,`Record property descriptor is missing.`);let d,f=!1;if(!(`value`in u)){if((i??=[]).push({kind:`Accessor`,key:c}),r.errors===`first`)break}else if(u.enumerable)d=u.value,f=!0;else if((i??=[]).push({kind:`NonEnumerable`,key:c}),r.errors===`first`)break;let p=f?n(d,r):void 0;if(p!==void 0&&!p.ok&&((i??=[]).push({kind:`Value`,key:c,error:p.error}),r.errors===`first`))break;if(!l.ok)continue;let m=l.value;if(globalThis.Object.hasOwn(o,m)){if((i??=[]).push({kind:`Collision`,key:c,previousKey:o[m],outputKey:m}),r.errors===`first`)break}else o[m]=c,f&&p?.ok&&(a[m]=p.value,c===m&&globalThis.Object.is(d,p.value)||(s=!0))}return i==null?z(s?a:e):B({type:`Record`,reason:{kind:`Entries`,issues:i}})},ri=e=>ai(e),ii=/*#__PURE__*/ globalThis.Symbol(),ai=e=>({type:e,[ii]:!0}),oi=/*#__PURE__*/ globalThis.Symbol();function si(e,t){return ci(li(e),t)}let ci=(e,t,n=globalThis.Object.keys(e))=>{let r=e,i=n.length,a=re(i),o=re(i);for(let s=0;s<i;s++){let i=r[n[s]];if(di(i))return i[oi].createObject(e,t);let c=ui(i),l=c?i.type:i;a[s]=l,o[s]=c}let s=a.map(e=>e[Zn]),c=t?.value[Zn],l=!s.includes(void 0)&&(t===void 0||c!==void 0),u,d=(e,u,d)=>{if(typeof e!=`object`||!e)return B({type:`Object`,reason:{kind:`NotObject`,value:e}});let p=e;if(!g(p))return B({type:`Object`,reason:{kind:`UnexpectedPrototype`,value:p}});let m=$r(p),h=l?void 0:re(i+m.length),_,v,y=m.length===i;for(let e=0;(_===void 0||u.errors!==`first`)&&e<i;e++){let t=n[e];y&&m[e]!==t&&(y=!1);let r=globalThis.Object.getOwnPropertyDescriptor(p,t);h!==void 0&&(h[e]=r);let i;if(r===void 0){if(o[e])continue;i={type:`ObjectMissingProperty`}}else if(!(`value`in r))i={type:`ObjectPropertyAccess`,reason:`Accessor`};else if(!r.enumerable)i={type:`ObjectPropertyAccess`,reason:`NonEnumerable`};else{let n=r.value,o=s[e];if(o!==void 0){let e=o(n,u);if(e===void 0){v!==void 0&&_===void 0&&(v[t]=n);continue}i=e}else{let r=d?a[e][jn](n,u):a[e].fromUnknown(n,u);if(r.ok){if(_!==void 0||d)continue;if(v===void 0){if(globalThis.Object.is(r.value,n))continue;v=f(h,m,e)}v[t]=r.value;continue}i=r.error}}_??=b(),_[t]=i}let x=y?0:m.length;for(let e=0;(_===void 0||u.errors!==`first`)&&e<x;e++){let a=m[e],o=i+e;if(typeof a==`string`&&(e<i&&a===n[e]||globalThis.Object.hasOwn(r,a))){h!==void 0&&(h[o]=void 0);continue}let s=globalThis.Object.getOwnPropertyDescriptor(p,a);j(s!==void 0,`Object property is missing.`),h!==void 0&&(h[o]=s);let l;if(t===void 0)l={type:`ObjectExcessProperty`};else if(typeof a!=`string`)l=pi({kind:`Key`,key:a,error:{type:`TypeOf`,expected:`String`,value:a}});else if(!(`value`in s))l={type:`ObjectPropertyAccess`,reason:`Accessor`};else if(!s.enumerable)l={type:`ObjectPropertyAccess`,reason:`NonEnumerable`};else{let e=s.value,n;if(c!==void 0){let t=c(e,u);if(t===void 0){v!==void 0&&_===void 0&&(v[a]=e);continue}n=t}else{let r=d?t.value[jn](e,u):t.value.fromUnknown(e,u);if(r.ok){if(_!==void 0||d)continue;if(v===void 0){if(globalThis.Object.is(r.value,e))continue;v=f(h,m,o)}v[a]=r.value;continue}n=r.error}l=pi({kind:`Value`,key:a,error:n})}_??=b(),_[a]=l}return _===void 0?v===void 0?void 0:z(v):B({type:`Object`,reason:{kind:`Properties`,errors:_}})},f=(e,t,r)=>{let a=globalThis.Object.create(null);for(let o=0;o<r;o++){let r=e[o];r!==void 0&&(a[o<i?n[o]:t[o-i]]=r.value)}return a},p=l?(e,t)=>{let n=d(e,t,!1);return n?.ok===!1?n.error:void 0}:void 0,m=(e,t=Wn)=>d(e,t,!1)??z(e),h=l?m:(e,t=Wn)=>d(e,t,!0)??z(e),_=!1,v=t===void 0||t.value[Kn]===I;for(let e=0;e<i;e++){let t=a[e];t[Kn]!==I&&(v=!1),t.parent!=null&&(_=!0)}let y=null;if(_||t?.parent){let e=b();for(let t=0;t<i;t++){let r=sr(a[t]);e[n[t]]=o[t]?ri(r):r}y=ci(e,t?.parent??t,n)}let x,S=t?sr(t.value[qn]):void 0,C=rr(y?(e,t=Wn)=>{let o=x??=a.map(e=>sr(e[qn])),s,c;for(let r=0;r<i;r++){let i=n[r];if(!globalThis.Object.hasOwn(e,i))continue;let a=e[i],l=o[r](a,t);if(l.ok)globalThis.Object.is(l.value,a)||((c??=b(e))[i]=l.value);else if((s??=b())[i]=l.error,t.errors===`first`)break}if(S!==void 0&&(s===void 0||t.errors===`all`))for(let n of globalThis.Object.keys(e)){if(globalThis.Object.hasOwn(r,n))continue;let i=e[n],a=S(i,t);if(a.ok)globalThis.Object.is(a.value,i)||((c??=b(e))[n]=a.value);else if((s??=b())[n]=pi({kind:`Value`,key:n,error:a.error}),t.errors===`first`)break}return s===void 0?z(c??e):B({type:`Object`,reason:{kind:`Properties`,errors:s}})}:void 0),w=v?I:e=>{let o;for(let t=0;t<i;t++){let r=n[t];if(!globalThis.Object.hasOwn(e,r))continue;let i=e[r],s=a[t][Kn](i);globalThis.Object.is(s,i)||((o??=b(e))[r]=s)}if(t)for(let n of globalThis.Object.keys(e)){if(globalThis.Object.hasOwn(r,n))continue;let i=e[n],a=t.value[Kn](i);globalThis.Object.is(i,a)||((o??=b(e))[n]=a)}return o??e},T=e=>{let t=u??=a.map(or);for(let r=0;r<i;r++){let i=globalThis.Object.getOwnPropertyDescriptor(e,n[r]);if(i===void 0){if(!o[r])return!1}else if(!(`value`in i)||!i.enumerable||!t[r](i.value))return!1}return!0},E=t===void 0?e=>{if(typeof e!=`object`||!e||!g(e)||!T(e))return!1;let t=globalThis.Object.getOwnPropertyNames(e);for(let e=0;e<t.length;e++){let a=t[e];if(!(e<i&&a===n[e])&&!globalThis.Object.hasOwn(r,a))return!1}return globalThis.Object.getOwnPropertySymbols(e).length===0}:e=>{if(typeof e!=`object`||!e||!g(e)||!T(e))return!1;let a=globalThis.Object.getOwnPropertySymbols(e).length!==0,o=a?ei(e):globalThis.Object.getOwnPropertyNames(e);for(let a=0;a<o.length;a++){let s=o[a];if(a<i&&s===n[a]||globalThis.Object.hasOwn(r,s))continue;let c=globalThis.Object.getOwnPropertyDescriptor(e,s);if(c===void 0||!(`value`in c)||!c.enumerable||!t.value.is(c.value))return!1}return!a},D=Qr(r,t);return cr(`Object`,y,m,E,h,C,w,D,{additionalProperties:t?{props:r,record:t}:{props:r},check:p})},li=(e,t=b())=>{let n=`Object schema properties must be own string-keyed data properties.`;j(g(e),n);for(let r of $r(e)){let i=globalThis.Object.getOwnPropertyDescriptor(e,r);j(typeof r==`string`&&i!==void 0&&`value`in i,n),t[r]=i.value}return t},ui=e=>ii in e,di=e=>oi in e,fi=e=>di(e)?e[oi].output:ui(e)?e.type:e,pi=e=>({type:`Record`,reason:{kind:`Entries`,issues:[e]}});function mi(e,t={},n){j(!globalThis.Object.hasOwn(t,`type`),`The "type" schema property is reserved by typed.`);let r=b();return r.type=yr(e),ci(li(t,r),n)}let hi=/*#__PURE__*/ globalThis.Object.freeze([]),gi=e=>{if(e===null)return hi;let t=[],n=e;for(;n!==null;)t.push(n.key),n=n.parent;return t.reverse(),globalThis.Object.freeze(t)},_i=(e,t)=>({parent:e,key:t}),vi=(e,t=Wn)=>{let n=[{kind:`Value`,value:e,path:null}],r=/* @__PURE__ */ new WeakMap,i,a=e=>((i??=[]).push(e),t.errors===`first`);for(;n.length>0;){let e=n.pop();if(e.kind===`Leave`){r.delete(e.value);continue}let{path:o,value:s}=e;if(s===null||typeof s==`string`||typeof s==`boolean`)continue;if(typeof s==`number`){if(!globalThis.Number.isFinite(s)&&a({kind:`NonFiniteNumber`,path:gi(o),value:s}))break;continue}if(typeof s!=`object`){if(a({kind:`InvalidType`,path:gi(o),value:s}))break;continue}let c=Array.isArray(s);if(!c&&!g(s)){if(a({kind:`UnexpectedPrototype`,path:gi(o),container:`Object`,value:s}))break;continue}if(r.has(s)){if(a({kind:`CircularReference`,path:gi(o),ancestorPath:gi(r.get(s))}))break;continue}let l=[];if(c){let e=Reflect.ownKeys(s);for(let t=0;t<e.length;t++){let n=e[t];if(n!==`length`){if(typeof n==`string`){if(n===globalThis.String(t)&&t<s.length)continue;let e=globalThis.Number(n)>>>0;if(e<s.length&&globalThis.String(e)===n)continue}if(a({kind:`ExcessProperty`,path:gi(_i(o,n))}))break}}if(i!==void 0&&t.errors===`first`)break;for(let e=0;e<s.length;e++){let t=_i(o,e),n=globalThis.Object.getOwnPropertyDescriptor(s,e);if(n===void 0){if(a({kind:`Hole`,path:gi(t)}))break}else if(`value`in n)l.push({kind:`Value`,value:n.value,path:t});else if(a({kind:`Accessor`,path:gi(t)}))break}}else for(let e of $r(s)){let t=_i(o,e);if(typeof e==`symbol`){if(a({kind:`SymbolProperty`,path:gi(t)}))break;continue}let n=globalThis.Object.getOwnPropertyDescriptor(s,e);if(!(`value`in n)){if(a({kind:`Accessor`,path:gi(t)}))break}else if(n.enumerable)l.push({kind:`Value`,value:n.value,path:t});else if(a({kind:`NonEnumerable`,path:gi(t)}))break}if(i!==void 0&&t.errors===`first`)break;r.set(s,o),n.push({kind:`Leave`,value:s});for(let e=l.length-1;e>=0;e--)n.push(l[e])}return i===void 0?z(e):B({type:`JsonValue`,reason:{kind:`Issues`,issues:globalThis.Object.freeze(i)}})},yi=e=>JSON.parse(e),bi=e=>{let t=V(()=>yi(e));return t.ok&&vi(t.value).ok?z(t.value):B({type:`Json`,value:e})},xi=/*#__PURE__*/ Dr(`Json`,fr,e=>{let t=bi(e);return t.ok?z():t},An),Si=e=>yi(e),Ci=Ee,wi=Oe,Ti=ke,Ei=Ae,Di=e=>{let t=0;for(let n of e)t+=n.length;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n};var Oi=class extends Error{constructor(e){super(e),this.name=`BufferError`}};let ki=e=>{let t=e?.length??0;ya(t,`arrayLike.length`);let n=e?new Uint8Array(e):/* @__PURE__ */ new Uint8Array(512),r=t;return{getCapacity:()=>n.length,getLength:()=>r,extend:e=>{let t=e.length;ya(t,`arg.length`);let i=r+t;if(ya(i,`Buffer length`),n.length<i){let e=n,t=Math.max(n.length*2,i);n=new Uint8Array(t),n.set(e)}n.set(e,r),r=i},shift:()=>{ba(r,1);let e=n[0];return n=n.subarray(1),r--,e},shiftN:e=>{ba(r,e);let t=n.subarray(0,e);return n=n.subarray(e),r-=e,t},truncate:e=>{if(e>r)throw new Oi(`Cannot truncate to a length greater than current`);r=e},reset:()=>{r=0},unwrap:()=>n.length===r?n:n.subarray(0,r)}},Ai=(e,t)=>{$i(e,t)},ji=e=>{let t=ea(e);if(typeof t!=`number`)throw new Oi(`Expected an encoded number.`);return t},Mi=(e,t)=>{let n=0;for(let e=0;e<t.length&&e<8;e++)t[e]&&(n|=1<<e);e.extend([n])},Ni=(e,t)=>{let n=e.shift(),r=Math.min(t,8),i=Array(r);for(let e=0;e<r;e++)i[e]=!!(n&1<<e);return i},Pi=(e,t)=>{if(t===0){e.extend([0]);return}let n=BigInt(t),r=[];for(;n!==0n;){let e=Number(n&127n);r.push(e),n>>=7n}for(let e=0;e<r.length-1;e++)r[e]|=128;e.extend(r)},Fi=e=>{let t=0n,n=0n,r=0;for(let i=0;i<8&&(r=e.shift(),t|=BigInt(r&127)<<n,r&128);i++)n+=7n;if(r&128)throw new Oi(`Variable-length quantity must terminate within 8 bytes.`);let i=Number(t);return ya(i,`Decoded integer`),i},Ii=(e,t)=>{ya(t.length,`Array-like length`),Pi(e,t.length)},Li=Fi,Ri=(e,t)=>{let n=Ti(t);Ii(e,n),e.extend(n)},zi=e=>{let t=Li(e),n=e.shiftN(t),r=Ei(n);return n[0]===239&&n[1]===187&&n[2]===191?`\uFEFF${r}`:r},Bi=e=>{let t=ki(),n=0,r=null,i=0;return{add:a=>{Object.is(a,r)?(i++,t.truncate(n)):(r=a,i=1),n=t.getLength(),e(t,a),Pi(t,i)},getLength:()=>t.getLength(),unwrap:()=>t.unwrap(),checkpoint:()=>{let a=n,o=r,s=i;return()=>{t.truncate(a),n=a,r=o,i=s,i>0&&(e(t,r),Pi(t,i))}}}},Vi=(e,t,n)=>{let r=Array(t),i=0;for(;i<t;){let a=n(),o=Fi(e);if(o===0)throw new Oi(`Invalid RLE encoding: runLength must be positive`);let s=t-i;if(o>s)throw new Oi(`Invalid RLE encoding: runLength ${o} exceeds remaining ${s}`);for(let e=0;e<o;e++)r[i]=a,i++}return r},Hi=1e3,U=/* @__PURE__ */ new Uint8Array(8192),Ui=new DataView(U.buffer),W=0,Wi=0,Gi=!1,Ki=/* @__PURE__ */ new Uint8Array,qi=new DataView(Ki.buffer),G=Ki,Ji=qi,K=0,Yi=0,Xi=0,Zi=globalThis.String.fromCharCode,Qi=Array.from({length:4096},()=>void 0),$i=(e,t)=>{if(Gi)throw new Oi(`Reentrant JSON encoding is not supported.`);Gi=!0,W=0;try{ta(t),e.extend(U.subarray(0,W))}finally{W=0,Wi=0,Gi=!1,U.length>1048576&&(U=/* @__PURE__ */ new Uint8Array(8192),Ui=new DataView(U.buffer))}},ea=e=>{let t=e.unwrap();G=t,Ji=new DataView(t.buffer,t.byteOffset,t.byteLength),K=0,Xi=t.length;try{let t=sa();return e.shiftN(K),t}catch(e){throw e instanceof Oi?e:new Oi(`Invalid MessagePack data`)}finally{G=Ki,Ji=qi,K=0,Yi=0,Xi=0}},ta=e=>{if(e===null)ia(192);else switch(typeof e){case`string`:na(e);return;case`number`:if(Object.is(e,-0)){aa(9),U[W++]=203,Ui.setFloat64(W,e),W+=8;return}if(e>>>0===e){e<128?ia(e):e<256?(aa(2),U[W++]=204,U[W++]=e):e<65536?(aa(3),U[W++]=205,Ui.setUint16(W,e),W+=2):(aa(5),U[W++]=206,Ui.setUint32(W,e),W+=4);return}if(Number.isInteger(e)&&e>=-2147483648&&e<0){e>=-32?ia(256+e):e>=-128?(aa(2),U[W++]=208,Ui.setInt8(W++,e)):e>=-32768?(aa(3),U[W++]=209,Ui.setInt16(W,e),W+=2):(aa(5),U[W++]=210,Ui.setInt32(W,e),W+=4);return}aa(9),U[W++]=203,Ui.setFloat64(W,e),W+=8;return;case`boolean`:ia(e?195:194);return;case`object`:{if(Wi>=Hi)throw new Oi(`JSON nesting exceeds the maximum depth of ${Hi}.`);if(Wi++,Array.isArray(e)){let t=e,n=t.length;ra(n,144,220,221);for(let e of t)ta(e);Wi--;return}let t=e,n=Object.keys(t);ra(n.length,128,222,223);for(let e of n)na(e),ta(t[e]);Wi--}}},na=e=>{let t=e.length,n=t<32?1:t<256?2:t<65536?3:5;aa(5+t*3);let r=W;W+=n;for(let n=0;n<t;n++){let t=e.charCodeAt(n);if(t<128)U[W++]=t;else if(t<2048)U[W++]=t>>6|192,U[W++]=t&63|128;else if((t&64512)==55296&&(e.charCodeAt(n+1)&64512)==56320){let r=e.charCodeAt(++n);t=65536+((t&1023)<<10)+(r&1023),U[W++]=t>>18|240,U[W++]=t>>12&63|128,U[W++]=t>>6&63|128,U[W++]=t&63|128}else U[W++]=t>>12|224,U[W++]=t>>6&63|128,U[W++]=t&63|128}let i=W-r-n;if(oa(i,`String byte length`),i<32)U[r]=160|i;else if(i<256)n===1&&(U.copyWithin(r+2,r+1,W),W++),U[r]=217,U[r+1]=i;else if(i<65536){if(n<3){let e=3-n;U.copyWithin(r+3,r+n,W),W+=e}U[r]=218,Ui.setUint16(r+1,i)}else{if(n<5){let e=5-n;U.copyWithin(r+5,r+n,W),W+=e}U[r]=219,Ui.setUint32(r+1,i)}},ra=(e,t,n,r)=>{oa(e,`Collection length`),e<16?ia(t|e):e<65536?(aa(3),U[W++]=n,Ui.setUint16(W,e),W+=2):(aa(5),U[W++]=r,Ui.setUint32(W,e),W+=4)},ia=e=>{aa(1),U[W++]=e},aa=e=>{let t=W+e;if(ya(t,`Encoded JSON value length`),t<=U.length)return;let n=Math.max(U.length*2,t);ya(n,`JSON encoder capacity`);let r=U;U=new Uint8Array(n),U.set(r.subarray(0,W)),Ui=new DataView(U.buffer)},oa=(e,t)=>{if(e>4294967295)throw new Oi(`${t} exceeds the MessagePack uint32 limit.`)},sa=()=>{let e=ha();if(e<=127)return e;if(e<=143)return da(e-128);if(e<=159)return ua(e-144);if(e<=191)return la(e-160);if(e>=224)return e-256;switch(e){case 192:return null;case 194:return!1;case 195:return!0;case 202:return ca(4);case 203:return ca(8);case 204:return ha();case 205:return ga();case 206:return _a();case 208:return va(1),Ji.getInt8(K++);case 209:{va(2);let e=Ji.getInt16(K);return K+=2,e}case 210:{va(4);let e=Ji.getInt32(K);return K+=4,e}case 217:return la(ha());case 218:return la(ga());case 219:return la(_a());case 220:return ua(ga());case 221:return ua(_a());case 222:return da(ga());case 223:return da(_a());default:throw new Oi(`Unsupported MessagePack marker 0x${e.toString(16).padStart(2,`0`)}.`)}},ca=e=>{va(e);let t=e===4?Ji.getFloat32(K):Ji.getFloat64(K);if(K+=e,!Number.isFinite(t))throw new Oi(`A decoded JSON number must be finite.`);return t},la=e=>{va(e);shortAscii:if(e<16){if(e===0)return``;let t=K,n=G[K++];if(n&128){K=t;break shortAscii}if(e===1)return Zi(n);let r=G[K++];if(r&128){K=t;break shortAscii}if(e===2)return Zi(n,r);let i=G[K++];if(i&128){K=t;break shortAscii}if(e===3)return Zi(n,r,i);let a=G[K++];if(a&128){K=t;break shortAscii}if(e===4)return Zi(n,r,i,a);let o=G[K++];if(o&128){K=t;break shortAscii}if(e===5)return Zi(n,r,i,a,o);let s=G[K++];if(s&128){K=t;break shortAscii}if(e===6)return Zi(n,r,i,a,o,s);let c=G[K++];if(c&128){K=t;break shortAscii}if(e===7)return Zi(n,r,i,a,o,s,c);let l=G[K++];if(l&128){K=t;break shortAscii}if(e===8)return Zi(n,r,i,a,o,s,c,l);let u=G[K++];if(u&128){K=t;break shortAscii}if(e===9)return Zi(n,r,i,a,o,s,c,l,u);let d=G[K++];if(d&128){K=t;break shortAscii}if(e===10)return Zi(n,r,i,a,o,s,c,l,u,d);let f=G[K++];if(f&128){K=t;break shortAscii}if(e===11)return Zi(n,r,i,a,o,s,c,l,u,d,f);let p=G[K++];if(p&128){K=t;break shortAscii}if(e===12)return Zi(n,r,i,a,o,s,c,l,u,d,f,p);let m=G[K++];if(m&128){K=t;break shortAscii}if(e===13)return Zi(n,r,i,a,o,s,c,l,u,d,f,p,m);let h=G[K++];if(h&128){K=t;break shortAscii}if(e===14)return Zi(n,r,i,a,o,s,c,l,u,d,f,p,m,h);let g=G[K++];if(g&128){K=t;break shortAscii}return Zi(n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}let t=K+e,n=[],r=``;for(;K<t;){let e=G[K++];if(e<128)n.push(e);else if(e>=194&&e<=223){ma(t,1);let r=pa();n.push((e&31)<<6|r)}else if(e>=224&&e<=239){ma(t,2);let r=G[K];if(e===224&&r<160)throw new Oi(`Invalid UTF-8 string encoding.`);let i=pa(),a=pa();n.push((e&15)<<12|i<<6|a)}else if(e>=240&&e<=244){ma(t,3);let r=G[K];if(e===240&&r<144||e===244&&r>143)throw new Oi(`Invalid UTF-8 string encoding.`);let i=pa(),a=pa(),o=pa(),s=((e&7)<<18|i<<12|a<<6|o)-65536;n.push(55296|s>>10,56320|s&1023)}else throw new Oi(`Invalid UTF-8 string encoding.`);n.length>=4096&&(r+=Zi(...n),n.length=0)}return n.length>0&&(r+=Zi(...n)),r},ua=e=>{if(Yi>=Hi)throw new Oi(`JSON nesting exceeds the maximum depth of ${Hi}.`);if(e>Xi)throw new Oi(`Buffer parse ended prematurely`);Xi-=e;let t=Array(e);Yi++;for(let n=0;n<e;n++)t[n]=sa();return Yi--,t},da=e=>{if(Yi>=Hi)throw new Oi(`JSON nesting exceeds the maximum depth of ${Hi}.`);if(e>(G.length-K)/2)throw new Oi(`Buffer parse ended prematurely`);let t={};Yi++;for(let n=0;n<e;n++){let e=ha(),n;if(e>=160&&e<=191)n=fa(e-160);else if(e===217)n=fa(ha());else if(e===218)n=fa(ga());else if(e===219)n=fa(_a());else throw K--,sa(),new Oi(`A decoded JSON object key must be a string.`);let r=sa();n===`__proto__`?Object.defineProperty(t,n,{value:r,configurable:!0,enumerable:!0,writable:!0}):t[n]=r}return Yi--,t},fa=e=>{if(e>32)return la(e);va(e);let t=K,n=t+e,r=e>1?Ji.getUint16(t):e===1?G[t]:0,i=(e<<5^r)&4095,a=Qi[i];if(a?.bytes.length===e){let r=0;for(;r<e&&a.bytes[r]===G[t+r];)r++;if(r===e)return K=n,a.value}let o=la(e);return Qi[i]={bytes:G.slice(t,n),value:o},o},pa=()=>{let e=G[K++];if((e&192)!=128)throw new Oi(`Invalid UTF-8 string encoding.`);return e&63},ma=(e,t)=>{if(e-K<t)throw new Oi(`Invalid UTF-8 string encoding.`)},ha=()=>(va(1),G[K++]),ga=()=>{va(2);let e=Ji.getUint16(K);return K+=2,e},_a=()=>{va(4);let e=Ji.getUint32(K);return K+=4,e},va=e=>{if(G.length-K<e)throw new Oi(`Buffer parse ended prematurely`)},ya=(e,t)=>{if(!Number.isSafeInteger(e)||e<0)throw new Oi(`${t} must be a non-negative safe integer.`)},ba=(e,t)=>{if(e<t)throw new Oi(`Buffer parse ended prematurely`)},xa=e=>{let t=e;return{get:()=>t,set:e=>{t=e},getAndSet:e=>{let n=t;return t=e,n},setAndGet:e=>(t=e,t),update:e=>{t=e(t)},getAndUpdate:e=>{let n=t;return t=e(t),n},updateAndGet:e=>(t=e(t),t),modify:e=>{let[n,r]=e(t);return t=r,n}}},Sa=(e,t)=>{let n=t??C,r=xa(e),i=/* @__PURE__ */ new Set,a=e=>{if(n(e,r.get()))return;let t=[];for(let e of i)try{e()}catch(e){t.push(e)}if(t.length===1)throw t[0];if(t.length>1)throw AggregateError(t,`Store listeners threw.`)};return{get:r.get,subscribe:e=>(i.add(e),()=>{i.delete(e)}),set:e=>{let t=r.get();r.set(e),a(t)},getAndSet:e=>{let t=r.getAndSet(e);return a(t),t},setAndGet:e=>{let t=r.get();return r.set(e),a(t),r.get()},update:e=>{let t=r.get();r.update(e),a(t)},getAndUpdate:e=>{let t=r.getAndUpdate(e);return a(t),t},updateAndGet:e=>{let t=r.get();return r.updateAndGet(e),a(t),r.get()},modify:e=>{let t=r.get(),n=r.modify(e);return a(t),n},[Symbol.dispose]:()=>{i.clear()}}},Ca=()=>{let e=Symbol(`Time`);function t(e){let t=Ea();return e===`DateIso`?ja(t):t}return{now:t,performance:{timeOrigin:performance.timeOrigin,now:()=>performance.now()},setTimeout:(t,n)=>wa(e,t,n),clearTimeout:t=>{Da(e,t)}}},wa=(e,t,n)=>{let r=Na(n),i=!1,a;if(r<=Ta)a=setTimeout(()=>{i||(i=!0,t())},r);else{let e=Ea()+r,n=()=>{if(i)return;let r=e-Ea();r>0?a=setTimeout(n,Math.min(r,Ta)):(i=!0,t())};a=setTimeout(n,Ta)}return{owner:e,clear:()=>{i=!0,clearTimeout(a)}}},Ta=2**31-1,Ea=()=>Oa.orThrow(Date.now()),Da=(e,t)=>{let n=t;j(n.owner===e,`TimeoutId was created by another Time instance`),n.clear()},Oa=/*#__PURE__*/ Dr(`Millis`,/*#__PURE__*/ Xr(0xffffffffffff)(Kr)),ka=/*#__PURE__*/ Ur(Oa),Aa=e=>Oa.orNull(Math.max(0,Math.round(e)))??0xfffffffffffe,ja=e=>new Date(e).toISOString(),Ma=(e,t)=>(j(t>=e,`Performance end time must not precede start time`),t-e);function Na(e){if(typeof e==`number`)return e;let t=parseFloat(e),n=e.endsWith(`ms`)?`ms`:e.at(-1);return j(n in Pa,`Unknown duration unit: ${n}`),Oa.orThrow(Math.round(t*Pa[n]))}let Pa={ms:1,s:1e3,m:6e4,h:36e5,d:864e5,w:6048e5,y:31536e6},Fa={trace:0,debug:1,log:2,info:3,warn:4,error:5,silent:6},Ia=({level:e=`log`,output:t=Ra(),path:n=[],formatter:r}={})=>La({getInheritedLevel:()=>e,output:t,path:n,formatter:r}),La=({getInheritedLevel:e,output:t,path:n,formatter:r})=>{let i=null,a=()=>i??e(),o=e=>Fa[e]>=Fa[a()],s=e=>(...i)=>{o(e)&&t.write({method:e,path:n,args:i},r)};return{getLevel:a,setLevel:e=>{i=e},hasOwnLevel:()=>i!==null,child:e=>La({getInheritedLevel:a,output:t,path:[...n,e],formatter:r}),trace:s(`trace`),debug:s(`debug`),log:s(`log`),info:s(`info`),warn:s(`warn`),error:s(`error`),write:e=>{o(e.method)&&t.write(e,r)}}},Ra=()=>({write:(e,t)=>{let n=t?t(e):e.args;globalThis.console[e.method===`trace`?`debug`:e.method](...n)}}),za=()=>{let e=Sa(null);return{write:e.set,entry:e}},Ba=e=>Uint8Array.from(e.split(``),e=>e.charCodeAt(0)),Va=/* @__PURE__ */ Ce(_e(Ba(`expand 16-byte k`))),Ha=/* @__PURE__ */ Ce(_e(Ba(`expand 32-byte k`)));function q(e,t){return e<<t|e>>>32-t}let Ua=2**32-1,Wa=/* @__PURE__ */ Uint32Array.of();function Ga(e,t,n,r,i,a,o,s){let c=i.length,l=/* @__PURE__ */ new Uint8Array(64),u=_e(l),d=be&&Re(i)&&Re(a),f=d?_e(i):Wa,p=d?_e(a):Wa;if(be)for(let m=0;m<c;o++){if(e(t,n,r,u,o,s),o>=Ua)throw Error(`arx: counter overflow`);let h=Math.min(64,c-m);if(d&&h===64){let e=m/4;if(m%4!=0)throw Error(`arx: invalid block position`);for(let t=0,n;t<16;t++)n=e+t,p[n]=f[n]^u[t];m+=64}else{for(let e=0,t;e<h;e++)t=m+e,a[t]=i[t]^l[e];m+=h}}else for(let d=0;d<c;o++){if(e(t,n,r,u,o,s),Ce(u),o>=Ua)throw Error(`arx: counter overflow`);let f=Math.min(64,c-d);for(let e=0,t;e<f;e++)t=d+e,a[t]=i[t]^l[e];d+=f}}function Ka(e,t){let{allowShortKeys:n,extendNonceFn:r,counterLength:i,counterRight:a,rounds:o}=Me({allowShortKeys:!1,counterLength:8,counterRight:!1,rounds:20},t);if(typeof e!=`function`)throw Error(`core must be a function`);return fe(i),fe(o),de(a),de(n),(t,s,c,l,u=0)=>{pe(t,void 0,`key`),pe(s,void 0,`nonce`),pe(c,void 0,`data`);let d=c.length,f=l!==void 0;if(l=Ie(d,l,!1),f&&R(c,l),fe(u),u<0||u>=Ua)throw Error(`arx: counter overflow`);let p=[],m=t.length,h,g;if(m===32)p.push(h=ze(t)),g=Ha;else if(m===16&&n)h=/* @__PURE__ */ new Uint8Array(32),h.set(t),h.set(t,16),g=Va,p.push(h);else throw pe(t,32,`arx key`),Error(`invalid key size`);be&&Re(s)||p.push(s=ze(s));let _=_e(h);if(r){if(s.length!==24)throw Error(`arx: extended nonce must be 24 bytes`);let e=s.subarray(0,16);if(be)r(g,_,_e(e),_);else{let t=Ce(Uint32Array.from(g));r(t,_,_e(e),_),ve(t),Ce(_)}s=s.subarray(16)}else be||Ce(_);let v=16-i;if(v!==s.length)throw Error(`arx: nonce must be ${v} or 16 bytes`);if(v!==12){let e=/* @__PURE__ */ new Uint8Array(12);e.set(s,a?0:12-s.length),s=e,p.push(s)}let y=Ce(_e(s));try{return Ga(e,g,_,y,c,l,u,o),l}finally{ve(...p)}}}function qa(e,t){return e[t++]&255|(e[t++]&255)<<8}var Ja=class{blockLen=16;outputLen=16;buffer=/* @__PURE__ */ new Uint8Array(16);r=/* @__PURE__ */ new Uint16Array(10);h=/* @__PURE__ */ new Uint16Array(10);pad=/* @__PURE__ */ new Uint16Array(8);pos=0;finished=!1;destroyed=!1;constructor(e){e=ze(pe(e,32,`key`));let t=qa(e,0),n=qa(e,2),r=qa(e,4),i=qa(e,6),a=qa(e,8),o=qa(e,10),s=qa(e,12),c=qa(e,14);this.r[0]=t&8191,this.r[1]=(t>>>13|n<<3)&8191,this.r[2]=(n>>>10|r<<6)&7939,this.r[3]=(r>>>7|i<<9)&8191,this.r[4]=(i>>>4|a<<12)&255,this.r[5]=a>>>1&8190,this.r[6]=(a>>>14|o<<2)&8191,this.r[7]=(o>>>11|s<<5)&8065,this.r[8]=(s>>>8|c<<8)&8191,this.r[9]=c>>>5&127;for(let t=0;t<8;t++)this.pad[t]=qa(e,16+2*t)}process(e,t,n=!1){let r=n?0:2048,{h:i,r:a}=this,o=a[0],s=a[1],c=a[2],l=a[3],u=a[4],d=a[5],f=a[6],p=a[7],m=a[8],h=a[9],g=qa(e,t+0),_=qa(e,t+2),v=qa(e,t+4),y=qa(e,t+6),b=qa(e,t+8),x=qa(e,t+10),S=qa(e,t+12),C=qa(e,t+14),w=i[0]+(g&8191),T=i[1]+((g>>>13|_<<3)&8191),E=i[2]+((_>>>10|v<<6)&8191),D=i[3]+((v>>>7|y<<9)&8191),O=i[4]+((y>>>4|b<<12)&8191),k=i[5]+(b>>>1&8191),A=i[6]+((b>>>14|x<<2)&8191),j=i[7]+((x>>>11|S<<5)&8191),M=i[8]+((S>>>8|C<<8)&8191),N=i[9]+(C>>>5|r),P=0,F=P+w*o+5*h*T+5*m*E+5*p*D+5*f*O;P=F>>>13,F&=8191,F+=5*d*k+5*u*A+5*l*j+5*c*M+5*s*N,P+=F>>>13,F&=8191;let ee=P+w*s+T*o+5*h*E+5*m*D+5*p*O;P=ee>>>13,ee&=8191,ee+=5*f*k+5*d*A+5*u*j+5*l*M+5*c*N,P+=ee>>>13,ee&=8191;let I=P+w*c+T*s+E*o+5*h*D+5*m*O;P=I>>>13,I&=8191,I+=5*p*k+5*f*A+5*d*j+5*u*M+5*l*N,P+=I>>>13,I&=8191;let L=P+w*l+T*c+E*s+D*o+5*h*O;P=L>>>13,L&=8191,L+=5*m*k+5*p*A+5*f*j+5*d*M+5*u*N,P+=L>>>13,L&=8191;let te=P+w*u+T*l+E*c+D*s+O*o;P=te>>>13,te&=8191,te+=5*h*k+5*m*A+5*p*j+5*f*M+5*d*N,P+=te>>>13,te&=8191;let ne=P+w*d+T*u+E*l+D*c+O*s;P=ne>>>13,ne&=8191,ne+=k*o+5*h*A+5*m*j+5*p*M+5*f*N,P+=ne>>>13,ne&=8191;let re=P+w*f+T*d+E*u+D*l+O*c;P=re>>>13,re&=8191,re+=k*s+A*o+5*h*j+5*m*M+5*p*N,P+=re>>>13,re&=8191;let ie=P+w*p+T*f+E*d+D*u+O*l;P=ie>>>13,ie&=8191,ie+=k*c+A*s+j*o+5*h*M+5*m*N,P+=ie>>>13,ie&=8191;let ae=P+w*m+T*p+E*f+D*d+O*u;P=ae>>>13,ae&=8191,ae+=k*l+A*c+j*s+M*o+5*h*N,P+=ae>>>13,ae&=8191;let oe=P+w*h+T*m+E*p+D*f+O*d;P=oe>>>13,oe&=8191,oe+=k*u+A*l+j*c+M*s+N*o,P+=oe>>>13,oe&=8191,P=(P<<2)+P|0,P=P+F|0,F=P&8191,P>>>=13,ee+=P,i[0]=F,i[1]=ee,i[2]=I,i[3]=L,i[4]=te,i[5]=ne,i[6]=re,i[7]=ie,i[8]=ae,i[9]=oe}finalize(){let{h:e,pad:t}=this,n=/* @__PURE__ */ new Uint16Array(10),r=e[1]>>>13;e[1]&=8191;for(let t=2;t<10;t++)e[t]+=r,r=e[t]>>>13,e[t]&=8191;e[0]+=r*5,r=e[0]>>>13,e[0]&=8191,e[1]+=r,r=e[1]>>>13,e[1]&=8191,e[2]+=r,n[0]=e[0]+5,r=n[0]>>>13,n[0]&=8191;for(let t=1;t<10;t++)n[t]=e[t]+r,r=n[t]>>>13,n[t]&=8191;n[9]-=8192;let i=(r^1)-1;for(let e=0;e<10;e++)n[e]&=i;i=~i;for(let t=0;t<10;t++)e[t]=e[t]&i|n[t];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let a=e[0]+t[0];e[0]=a&65535;for(let n=1;n<8;n++)a=(e[n]+t[n]|0)+(a>>>16)|0,e[n]=a&65535;ve(n)}update(e){he(this),pe(e),e=ze(e);let{buffer:t,blockLen:n}=this,r=e.length;for(let i=0;i<r;){let a=Math.min(n-this.pos,r-i);if(a===n)for(;n<=r-i;i+=n)this.process(e,i);else t.set(e.subarray(i,i+a),this.pos),this.pos+=a,i+=a,this.pos===n&&(this.process(t,0,!1),this.pos=0)}return this}destroy(){this.destroyed=!0,ve(this.h,this.r,this.buffer,this.pad)}digestInto(e){he(this),ge(e,this),this.finished=!0;let{buffer:t,h:n}=this,{pos:r}=this;if(r){for(t[r++]=1;r<16;r++)t[r]=0;this.process(t,0,!0)}this.finalize();let i=0;for(let t=0;t<8;t++)e[i++]=n[t]>>>0,e[i++]=n[t]>>>8}digest(){let{buffer:e,outputLen:t}=this;this.digestInto(e);let n=e.slice(0,t);return this.destroy(),n}};let Ya=/* @__PURE__ */ Pe(32,e=>new Ja(e));function Xa(e,t,n,r,i,a=20){let o=e[0],s=e[1],c=e[2],l=e[3],u=t[0],d=t[1],f=t[2],p=t[3],m=t[4],h=t[5],g=t[6],_=t[7],v=i,y=n[0],b=n[1],x=n[2],S=o,C=s,w=c,T=l,E=u,D=d,O=f,k=p,A=m,j=h,M=g,N=_,P=v,F=y,ee=b,I=x;for(let e=0;e<a;e+=2)S=S+E|0,P=q(P^S,16),A=A+P|0,E=q(E^A,12),S=S+E|0,P=q(P^S,8),A=A+P|0,E=q(E^A,7),C=C+D|0,F=q(F^C,16),j=j+F|0,D=q(D^j,12),C=C+D|0,F=q(F^C,8),j=j+F|0,D=q(D^j,7),w=w+O|0,ee=q(ee^w,16),M=M+ee|0,O=q(O^M,12),w=w+O|0,ee=q(ee^w,8),M=M+ee|0,O=q(O^M,7),T=T+k|0,I=q(I^T,16),N=N+I|0,k=q(k^N,12),T=T+k|0,I=q(I^T,8),N=N+I|0,k=q(k^N,7),S=S+D|0,I=q(I^S,16),M=M+I|0,D=q(D^M,12),S=S+D|0,I=q(I^S,8),M=M+I|0,D=q(D^M,7),C=C+O|0,P=q(P^C,16),N=N+P|0,O=q(O^N,12),C=C+O|0,P=q(P^C,8),N=N+P|0,O=q(O^N,7),w=w+k|0,F=q(F^w,16),A=A+F|0,k=q(k^A,12),w=w+k|0,F=q(F^w,8),A=A+F|0,k=q(k^A,7),T=T+E|0,ee=q(ee^T,16),j=j+ee|0,E=q(E^j,12),T=T+E|0,ee=q(ee^T,8),j=j+ee|0,E=q(E^j,7);let L=0;r[L++]=o+S|0,r[L++]=s+C|0,r[L++]=c+w|0,r[L++]=l+T|0,r[L++]=u+E|0,r[L++]=d+D|0,r[L++]=f+O|0,r[L++]=p+k|0,r[L++]=m+A|0,r[L++]=h+j|0,r[L++]=g+M|0,r[L++]=_+N|0,r[L++]=v+P|0,r[L++]=y+F|0,r[L++]=b+ee|0,r[L++]=x+I|0}function Za(e,t,n,r){let i=be?e:Ce(e.slice(0,4)),a=be?t:Ce(t.slice(0,8)),o=be?n:Ce(n.slice(0,4)),s=/* @__PURE__ */ new Uint32Array(16);Xa(i,a,o.subarray(1),s,o[0]);let c=0;r[c++]=s[0]-i[0]|0,r[c++]=s[1]-i[1]|0,r[c++]=s[2]-i[2]|0,r[c++]=s[3]-i[3]|0,r[c++]=s[12]-o[0]|0,r[c++]=s[13]-o[1]|0,r[c++]=s[14]-o[2]|0,r[c++]=s[15]-o[3]|0,Ce(r),be||ve(i,a,o),ve(s)}let Qa=/* @__PURE__ */ Ka(Xa,{counterRight:!1,counterLength:8,extendNonceFn:Za,allowShortKeys:!1}),$a=/* @__PURE__ */ new Uint8Array(16),eo=(e,t)=>{e.update(t);let n=t.length%16;n&&e.update($a.subarray(n))},to=/* @__PURE__ */ new Uint8Array(32);function no(e,t,n,r,i){i!==void 0&&pe(i,void 0,`AAD`);let a=e(t,n,to),o=Le(r.length,i?i.length:0,!0),s=Ya.create(a);i&&eo(s,i),eo(s,r),s.update(o);let c=s.digest();return ve(a,o),c}let ro=/* @__PURE__ */ Fe({blockSize:64,nonceLength:24,tagLength:16,withAAD:!0},/* @__PURE__ */ (e=>(t,n,r)=>({encrypt(i,a){let o=i.length;a=Ie(o+16,a,!1),a.set(i);let s=a.subarray(0,-16);e(t,n,s,s,1);let c=no(e,t,n,s,r);return a.set(c,o),ve(c),a},decrypt(i,a){a=Ie(i.length-16,a,!1);let o=i.subarray(0,-16),s=i.subarray(-16),c=no(e,t,n,o,r);if(!Ne(s,c))throw ve(c),Error(`invalid tag`);return a.set(i.subarray(0,-16)),e(t,n,a,a,1),ve(c),a}}))(Qa)),io=()=>({create:Et}),ao=(e,t)=>{let n=qt(Gt,Ct(`Symmetric key seed`),e);for(let e of t){let t=typeof e==`number`?e.toString():e;n=oo(t,n)}return n.slice(32,64)},oo=(e,t)=>{let n=Ct(e),r=new globalThis.Uint8Array(n.byteLength+1);return r[0]=0,r.set(n,1),qt(Gt,t.slice(0,32),r)},so=(e,t,n)=>V(()=>ro(n,t).decrypt(e),e=>({type:`DecryptWithXChaCha20Poly1305Error`,error:e})),co=()=>({encrypt:(e,t,n)=>ro(n,t).encrypt(e),decrypt:so}),lo=e=>{if(j(e<=2**53-2**46,`The length exceeds 2^53 - 2^46, whose padded length would exceed Number.MAX_SAFE_INTEGER.`),e===0)return qr;let t=Math.floor(e/2**32),n=t>0?63-Math.clz32(t):31-Math.clz32(e),r=32-Math.clz32(n),i=2**Math.max(0,n-r);return Math.ceil(e/i)*i},uo=e=>{let t=lo(e)-e;return new globalThis.Uint8Array(t)},fo={track:te,untrack:te},po=e=>e+1,mo=(e,t=16,n=2)=>{let r=t*n;if(j(Number.isSafeInteger(r),`numberOfBuckets times minNumberOfItemsPerBucket exceeds Number.MAX_SAFE_INTEGER.`),e<r)return B(r);let i=[],a=Math.floor(e/t),o=e%t,s=0;for(let e=0;e<t;e++){let t=a+ +(e<o);s+=t,i.push(s)}return z(i)},ho=()=>({next:()=>Math.random()}),go=/*#__PURE__*/ new Set;var _o=function(e,t,n){if(t!=null){if(typeof t!=`object`&&typeof t!=`function`)throw TypeError(`Object expected.`);var r,i;if(n){if(!Symbol.asyncDispose)throw TypeError(`Symbol.asyncDispose is not defined.`);r=t[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw TypeError(`Symbol.dispose is not defined.`);r=t[Symbol.dispose],n&&(i=r)}if(typeof r!=`function`)throw TypeError(`Object not disposable.`);i&&(r=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t},vo=(function(e){return function(t){function n(n){t.error=t.hasError?new e(n,t.error,`An error was suppressed during disposal.`):n,t.hasError=!0}var r,i=0;function a(){for(;r=t.stack.pop();)try{if(!r.async&&i===1)return i=0,t.stack.push(r),Promise.resolve().then(a);if(r.dispose){var e=r.dispose.call(r.value);if(r.async)return i|=2,Promise.resolve(e).then(a,function(e){return n(e),a()})}else i|=1}catch(e){n(e)}if(i===1)return t.hasError?Promise.reject(t.error):Promise.resolve();if(t.hasError)throw t.error}return a()}})(typeof SuppressedError==`function`?SuppressedError:function(e,t,n){var r=Error(n);return r.name=`SuppressedError`,r.error=e,r.suppressed=t,r});let yo=/*#__PURE__*/ mi(`AbortError`,{reason:/* @__PURE__ */ si({type:fr},/*#__PURE__*/ ti(fr,ur))}),bo=e=>({type:`AbortError`,reason:e}),xo=bo({type:`RunDisposedAbortReason`}),So={type:`ExplicitAbortReason`},Co=e=>({type:`PanicAbortReason`,defect:e}),wo=e=>{queueMicrotask(()=>{throw e})},To=({console:e=Ia()}={})=>({console:e,leakDetector:fo,nativeFetch:globalThis.fetch.bind(globalThis),randomBytes:io(),random:ho(),reportDefect:wo,time:Ca()}),Eo=e=>Ao({...To(e),...e}),Do=globalThis,Oo=Symbol(`evolu.Task.meta`),ko={type:`Running`},Ao=(e,t,n,r)=>{let i=r?.abortBehavior;i!==void 0&&i!==`unabortable`&&j(t?.restoreTokens.has(i.restoreToken)===!0,`restore is only valid inside the unabortableMask that created it`);let a=t?.abortMask??0,o=i===void 0?a:i===`unabortable`?po(a):i.abortMask,s=ko,c=s,l,u,d=/* @__PURE__ */ new Map,f=new AbortController,p=new AbortController,m,h,g,_=t=>{try{e.reportDefect(t)}catch(e){wo(AggregateError([t,e],`ReportDefect failed while reporting a defect`))}},v=t=>{try{if(!e.runConfig?.eventsEnabled.get())return;let n={id:T.id,timestamp:E.deps.time.now(),data:t};for(let e=T;e;e=e.parent)try{e.onEvent?.(n)}catch(e){_(e)}}catch(e){_(e)}},y=()=>{c!==s&&(c=s,v({type:`StateChanged`,state:s}))},b=()=>({request:f.signal.reason.reason,observed:p.signal.aborted?p.signal.reason.reason:null}),x=(e=So)=>{f.signal.aborted||(C(bo(e),o===0),y())},S=e=>{if(l??=e,m)return m;let t=()=>(l??=z(z()),s={type:`Settled`,abort:b(),exit:l},y(),l),n=h;m=n?Promise.all(d.values()).then(async()=>{try{await n.disposeAsync()}catch(e){g=jo(e)??E.panic(e),l??=B(g)}return t()}):Promise.all(d.values()).then(t);let r=l?.ok===!1?l.error:xo,{aborted:i}=p.signal;return C(r,!0),i||y(),m},C=(e,t)=>{f.signal.aborted||(s={type:`Aborted`,abort:{request:e.reason,observed:null}},f.abort(e)),t&&!p.signal.aborted&&(s={type:`Aborted`,abort:{request:f.signal.reason.reason,observed:e.reason}},p.abort(e))},w=t=>t===void 0?e:{console:e.console,leakDetector:e.leakDetector,nativeFetch:e.nativeFetch,randomBytes:e.randomBytes,random:e.random,reportDefect:e.reportDefect,time:e.time,...e.runConfig&&{runConfig:e.runConfig},...t},T=((e,t,{abortable:n=!1}={})=>{F({disposed:!!m});let r=e[Oo],i=Ao(w(t),T,E,r),a=Promise.withResolvers();d.set(i,a.promise),v({type:`ChildAdded`,childId:i.id});let o=()=>{i.requestAbort(T.requestAbortSignal.reason.reason)};T.requestAbortSignal.aborted?o():T.requestAbortSignal.addEventListener(`abort`,o,{once:!0,signal:i.requestAbortSignal});let s=(async()=>{let t;try{let n=r?.abortBehavior===`unabortable`?i.requestAbortSignal:i.signal,a=Do.scheduler,o;r?.priority&&a?.postTask?o=await a.postTask(()=>(n.throwIfAborted(),e(i)),{priority:r.priority,signal:n}):(n.throwIfAborted(),o=await e(i)),j(typeof o?.ok==`boolean`,`Task must return Result.`),t=z(o)}catch(e){t=B(jo(e)??E.panic(e))}let o=await i.dispose(t);if(d.delete(i),v({type:`ChildRemoved`,childId:i.id}),a.resolve(),o.ok)return o.value;if(n)return B(o.error);throw s.catch(te),o.error})();if(s.run=i,n){let e=s;e.abort=i.requestAbort,e[Symbol.asyncDispose]=async()=>{e.abort(),await e}}return s}),E=n??T;return T.orThrow=(async(e,t)=>Ve(await T(e,t))),T.ok=(async(e,t)=>Ue(await T(e,t))),T.abortable=((e,t)=>T(e,t,{abortable:!0})),T.daemon=((e,t)=>(F({disposed:!!m}),T.requestAbortSignal.throwIfAborted(),E.abortable(e,w(t)))),T.create=(e=>T.daemon(async e=>(await e.abortable(zo),z()),e).run),T.id=Rr(e),T.parent=t??null,T.deps=e,T.signal=p.signal,T.requestAbortSignal=f.signal,T.onAbort=e=>{let t=()=>{try{e(T.signal.reason)}catch(e){E.panic(e)}};return T.signal.aborted?(t(),null):(T.signal.addEventListener(`abort`,t,{once:!0}),{[Symbol.dispose]:()=>{T.signal.removeEventListener(`abort`,t)}})},T.getState=()=>s,T.snapshot=()=>{let e=Array.from(d.keys(),e=>e.snapshot());return u?.state===s&&D(u.children,e)||(u={id:T.id,state:s,children:e,abortMask:o}),u},T.onEvent=void 0,T.defer=e=>{F({disposed:!!m}),(h??=new AsyncDisposableStack).defer(e)},T.abort=(e=So)=>{m||S(B(bo(e)))},T.panic=e=>{let t=bo(Co(e));return _(t),E.dispose(B(t)),t},T[Symbol.dispose]=()=>{S()},T[Symbol.asyncDispose]=async()=>{if(await S(),g)throw g},T.abortMask=o,T.restoreTokens=t?.restoreTokens??go,T.requestAbort=x,T.dispose=S,T},jo=e=>{try{let t=[e];for(;t.length>0;){let e=t.pop();if(Mo(e))t.push(e.error,e.suppressed);else if(!yo.is(e))return null}let n=e;for(;Mo(n);)n=n.error;return n}catch{return null}},Mo=e=>Object.prototype.toString.call(e)===`[object Error]`&&e.name===`SuppressedError`,No=e=>t=>{let{promise:n,resolve:r,reject:i}=Promise.withResolvers(),a=e({run:t,resolve:r,reject:i});return t.onAbort(e=>{i(e),a?.()}),n},Po=e=>No(({run:{deps:t},resolve:n})=>{let r=t.time.setTimeout(()=>n(z()),e);return()=>t.time.clearTimeout(r)}),Fo=(e,t)=>Lo([e,async e=>(await e.ok(Po(t)),B(Io))]),Io={type:`TimeoutError`},Lo=e=>async t=>{let n;return await t(Ro(e,e=>(n=e,`stop`),{concurrency:e.length})),N(n),n},Ro=(e,t,n={})=>async r=>{let i={stack:[],error:void 0,hasError:!1};try{P(e);let a=new Promise(te),o=Promise.withResolvers();_o(i,r.onAbort(o.reject),!1);let s=!1,c=0,l=Math.min(n.concurrency??Yr,e.length),u=l;return await Promise.race([...Array.from({length:l},async()=>{try{for(;!s&&c<e.length;){let n=c;c+=1;let i=await r(e[n]);if(s)break;r.signal.throwIfAborted();let a=t(i,n);r.signal.throwIfAborted(),a===`stop`&&(s=!0,o.resolve())}}catch(e){throw s=!0,e}return--u,u===0&&o.resolve(),await a}),o.promise]),z()}catch(e){i.error=e,i.hasError=!0}finally{vo(i)}},zo=async e=>{let t={stack:[],error:void 0,hasError:!1};try{let n=Promise.withResolvers();return _o(t,e.onAbort(n.reject),!1),await n.promise}catch(e){t.error=e,t.hasError=!0}finally{vo(t)}},Bo=e=>{let t=/* @__PURE__ */ new Map,n=e=>{if(e instanceof Error)return r(e);if(Array.isArray(e)){let r=t.get(e);if(r!==void 0)return r;let i=[];t.set(e,i);for(let t of e)i.push(n(t));return i}try{return structuredClone(e),e}catch{return H(e)}},r=e=>{let r=t.get(e);if(r!==void 0)return r;let i={};t.set(e,i);for(let t of Object.getOwnPropertyNames(e)){let r=e[t];typeof r!=`function`&&(i[t]=n(r))}for(let t of[`name`,`message`,`stack`]){let n=e[t];n!==void 0&&!(t in i)&&(i[t]=n)}return i};if(e instanceof Error)return{type:`UnknownError`,error:r(e)};try{return{type:`UnknownError`,error:structuredClone(e)}}catch{try{return{type:`UnknownError`,error:String(e)}}catch{return{type:`UnknownError`,error:`[Unserializable Object]`}}}},Vo=e=>{let t=yo.is(e)&&e.reason.type===`PanicAbortReason`?e.reason.defect:e,n=Object.prototype.toString.call(t);if(n===`[object DOMException]`){let{name:e,message:n}=t;return Error(`${e}: ${n}`,{cause:t})}return t instanceof Error||n===`[object Error]`?t:Error(`Defect: ${H(t)}`,{cause:e})},Ho=e=>async t=>{let n=Promise.withResolvers(),r=Promise.withResolvers(),i=t.deps.lockManager.request(Go(e),{mode:`exclusive`,signal:t.signal},async()=>{t.signal.aborted?n.reject(t.signal.reason):(n.resolve(),await r.promise)});return i.catch(n.reject),await n.promise,z({[Symbol.asyncDispose]:async()=>{r.resolve(),await i}})},Uo=e=>(t,n)=>{let r=new AbortController,i=null;return e.lockManager.request(Go(t),{mode:`exclusive`,signal:r.signal},async()=>{if(r.signal.aborted)return;let e=Promise.withResolvers();i=e.resolve,n(),await e.promise}).catch(te),{[Symbol.dispose]:()=>{r.abort(),i?.()}}},Wo=e=>async t=>{let{held:n=[]}=await e.lockManager.query(),r=Go(t);return n.some(e=>e.name===r)},Go=e=>`evolu-leaderlock-${e}`;var Ko=function(e,t,n){if(t!=null){if(typeof t!=`object`&&typeof t!=`function`)throw TypeError(`Object expected.`);var r,i;if(n){if(!Symbol.asyncDispose)throw TypeError(`Symbol.asyncDispose is not defined.`);r=t[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw TypeError(`Symbol.dispose is not defined.`);r=t[Symbol.dispose],n&&(i=r)}if(typeof r!=`function`)throw TypeError(`Object not disposable.`);i&&(r=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t},qo=(function(e){return function(t){function n(n){t.error=t.hasError?new e(n,t.error,`An error was suppressed during disposal.`):n,t.hasError=!0}var r,i=0;function a(){for(;r=t.stack.pop();)try{if(!r.async&&i===1)return i=0,t.stack.push(r),Promise.resolve().then(a);if(r.dispose){var e=r.dispose.call(r.value);if(r.async)return i|=2,Promise.resolve(e).then(a,function(e){return n(e),a()})}else i|=1}catch(e){n(e)}if(i===1)return t.hasError?Promise.reject(t.error):Promise.resolve();if(t.hasError)throw t.error}return a()}})(typeof SuppressedError==`function`?SuppressedError:function(e,t,n){var r=Error(n);return r.name=`SuppressedError`,r.error=e,r.suppressed=t,r});let Jo=/*#__PURE__*/ xr(Gr,br,fr,vr),Yo=e=>{let[t,n,r]=JSON.parse(e),i=n.map(([e,t])=>e===`b`?wi(t):t),a=r.length?Object.fromEntries(r):void 0;return{sql:t,parameters:i,...a!==void 0&&{options:a}}},Xo=(e,t)=>async n=>{let r={stack:[],error:void 0,hasError:!1};try{let{createSqliteDriver:i,time:a}=n.deps,o=n.deps.console.child(`sql`),s=Ko(r,new AsyncDisposableStack,!0),c=s.use(await n.ok(i(e,t)));o.debug(`SQLite driver created`);let l=/* @__PURE__ */ new Map,u=/* @__PURE__ */ new Map;s.defer(()=>{let e={stack:[],error:void 0,hasError:!1};try{let t=Ko(e,new DisposableStack,!1);t.defer(()=>{l.clear(),u.clear()});for(let e of l.values())t.use(e);for(let e of u.values())for(let{statement:n}of e.values())t.use(n)}catch(t){e.error=t,e.hasError=!0}finally{qo(e)}});let d=(e,t)=>{let n=l.get(e);return n===void 0&&(n=c.prepare(e),l.set(e,n)),n.exec(t)},f=(e,t)=>{o.trace({query:e});let n=e.options?.logQueryExecutionTime===!0?a.performance.now():null,r=t();if(n!==null){let t=Ma(n,a.performance.now());o.log(`[logQueryExecutionTime]`,{query:e,duration:`${t.toFixed(3)}ms`})}if(e.options?.logExplainQueryPlan){let t=c.exec({...e,sql:`EXPLAIN QUERY PLAN ${e.sql}`});o.log(`[logExplainQueryPlan]`,e),o.log(Zo(t.rows))}return r};return z(L({exec:e=>{let t=f(e,()=>e.options?.prepare===!0?d(e.sql,e.parameters):c.exec(e));return o.trace({result:t}),t},prepared:(e,...t)=>{let n=[],r=``;for(let e=0;e<t.length;e++){let i=t[e];typeof i==`object`&&i&&`type`in i?r+=`${e}:${i.sql.length}:${i.sql}`:n.push(typeof i==`number`?Gr.orThrow(i):i)}let i=u.get(e),a=i?.get(r);if(a===void 0){let n=J(e,...t).sql;a={sql:n,statement:c.prepare(n)},i===void 0&&(i=/* @__PURE__ */ new Map,u.set(e,i)),i.set(r,a)}o.trace({query:{sql:a.sql,parameters:n}});let s=a.statement.exec(n);return o.trace({result:s}),s},iterate:(e,t)=>{f(e,()=>{c.iterate(e,t)})},transaction:(e=>{let t={stack:[],error:void 0,hasError:!1};try{o.trace(`begin`),d(`begin;`,[]);let n=Ko(t,new DisposableStack,!1),r=!0;n.defer(()=>{r&&(o.trace(`rollback`),d(`rollback;`,[]))});let i=e();return i!=null&&!i.ok||(o.trace(`commit`),d(`commit;`,[]),r=!1),i}catch(e){t.error=e,t.hasError=!0}finally{qo(t)}}),export:()=>c.export()},s))}catch(e){r.error=e,r.hasError=!0}finally{let e=qo(r);e&&await e}},Zo=e=>e.map(t=>{let n=t.parent,r=0;do{let t=e.find(e=>e.id===n);if(!t)break;n=t.parent,r++}while(1);return`${`  `.repeat(r)}${t.detail}`}).join(`
`),J=(e,...t)=>{let n=``,r=[];for(let i=0;i<e.length;i++)if(n+=e[i],i<t.length){let e=t[i];typeof e==`object`&&e&&`type`in e?n+=e.sql:(n+=`?`,r.push(typeof e==`number`?Gr.orThrow(e):e))}return{sql:n.trim(),parameters:r}};J.identifier=e=>({type:`SqlIdentifier`,sql:`"${e.replaceAll(`"`,`""`)}"`}),J.raw=e=>({type:`RawSql`,sql:e});let Qo=/*#__PURE__*/ A({name:w,sql:w}),$o=e=>({excludeIndexNamePrefix:t}={})=>{let n=b();e.sqlite.exec(J`
      select
        sqlite_master.name as tableName,
        table_info.name as columnName
      from sqlite_master
      join pragma_table_info(sqlite_master.name) as table_info;
    `).rows.forEach(({tableName:e,columnName:t})=>{(n[e]??=/* @__PURE__ */ new Set).add(t)});let r=t?.replaceAll(`'`,`''`),i=r==null?``:` and substr(name, 1, length('${r}')) <> '${r}'`;return{tables:n,indexes:e.sqlite.exec(J`
        select name, sql
        from sqlite_master
        where
          type = 'index'
          and substr(name, 1, 7) <> 'sqlite_'
          ${J.raw(i)};
      `).rows.map(e=>({name:e.name,sql:e.sql.replace(`CREATE INDEX`,`create index`).replace(`CREATE UNIQUE INDEX`,`create unique index`)}))}},es=/*#__PURE__*/ xr(0,1),ts=e=>+!!e,ns=e=>e===1,rs=e=>(t,n)=>t===n?0:e(t,n)?-1:1,is=/*#__PURE__*/ rs((e,t)=>e<t),as=/*#__PURE__*/ rs((e,t)=>e<t),os=(e,t)=>{if(e.byteLength>t.byteLength)return 1;if(e.byteLength<t.byteLength)return-1;for(let n=0;n<e.byteLength;n++){if(e[n]<t[n])return-1;if(e[n]>t[n])return 1}return 0},ss=/*#__PURE__*/ Dr(`OwnerId`,Lr),cs=/*#__PURE__*/ Dr(`OwnerIdBytes`,zr),ls=e=>Br(e),us=e=>Vr(e),ds=/*#__PURE__*/ Kr.orThrow(16),fs=e=>e.randomBytes.create(32),ps=e=>tn(e,rn),ms=e=>us(ao(e,[`Evolu`,`OwnerIdBytes`]).slice(0,16)),hs=`_evolu_appOwner`;function gs(e){return e===void 0||e===void 0}function _s(e){return typeof e==`string`}function vs(e){return typeof e==`number`}function ys(e){return typeof e==`boolean`}function bs(e){return e===null}function xs(e){return e instanceof Date}function Ss(e){return typeof e==`bigint`}function Cs(e){return typeof e==`function`}function ws(e){return typeof e==`object`&&!!e}function Y(e){return Object.freeze(e)}function Ts(e){return Es(e)?e:[e]}function Es(e){return Array.isArray(e)}function Ds(e){return e}function Os(e){return e instanceof Error?e.message:String(e)}let X=Y({is(e){return e.kind===`AlterTableNode`},create(e){return Y({kind:`AlterTableNode`,table:e})},cloneWithTableProps(e,t){return Y({...e,...t})},cloneWithColumnAlteration(e,t){return Y({...e,columnAlterations:e.columnAlterations?[...e.columnAlterations,t]:[t]})}}),Z=Y({is(e){return e.kind===`IdentifierNode`},create(e){return Y({kind:`IdentifierNode`,name:e})}}),ks=Y({is(e){return e.kind===`CreateIndexNode`},create(e){return Y({kind:`CreateIndexNode`,name:Z.create(e)})},cloneWith(e,t){return Y({...e,...t})},cloneWithColumns(e,t){return Y({...e,columns:[...e.columns||[],...t]})}}),As=Y({is(e){return e.kind===`CreateSchemaNode`},create(e,t){return Y({kind:`CreateSchemaNode`,schema:Z.create(e),...t})},cloneWith(e,t){return Y({...e,...t})}}),js=[`preserve rows`,`delete rows`,`drop`],Ms=Y({is(e){return e.kind===`CreateTableNode`},create(e){return Y({kind:`CreateTableNode`,table:e,columns:Y([])})},cloneWithColumn(e,t){return Y({...e,columns:Y([...e.columns,t])})},cloneWithConstraint(e,t){return Y({...e,constraints:e.constraints?Y([...e.constraints,t]):Y([t])})},cloneWithIndex(e,t){return Y({...e,indexes:e.indexes?Y([...e.indexes,t]):Y([t])})},cloneWithFrontModifier(e,t){return Y({...e,frontModifiers:e.frontModifiers?Y([...e.frontModifiers,t]):Y([t])})},cloneWithEndModifier(e,t){return Y({...e,endModifiers:e.endModifiers?Y([...e.endModifiers,t]):Y([t])})},cloneWith(e,t){return Y({...e,...t})}}),Ns=Y({is(e){return e.kind===`SchemableIdentifierNode`},create(e){return Y({kind:`SchemableIdentifierNode`,identifier:Z.create(e)})},createWithSchema(e,t){return Y({kind:`SchemableIdentifierNode`,schema:Z.create(e),identifier:Z.create(t)})}}),Ps=Y({is(e){return e.kind===`DropIndexNode`},create(e,t){return Y({kind:`DropIndexNode`,name:Ns.create(e),...t})},cloneWith(e,t){return Y({...e,...t})}}),Fs=Y({is(e){return e.kind===`DropSchemaNode`},create(e,t){return Y({kind:`DropSchemaNode`,schema:Z.create(e),...t})},cloneWith(e,t){return Y({...e,...t})}}),Is=Y({is(e){return e.kind===`DropTableNode`},create(e,t){return Y({kind:`DropTableNode`,table:e,...t})},cloneWith(e,t){return Y({...e,...t})}}),Ls=Y({is(e){return e.kind===`AliasNode`},create(e,t){return Y({kind:`AliasNode`,node:e,alias:t})}}),Rs=Y({is(e){return e.kind===`TableNode`},create(e){return Y({kind:`TableNode`,table:Ns.create(e)})},createWithSchema(e,t){return Y({kind:`TableNode`,table:Ns.createWithSchema(e,t)})}});function zs(e){return ws(e)&&Cs(e.toOperationNode)}function Bs(e){return ws(e)&&`expressionType`in e&&zs(e)}function Vs(e){return ws(e)&&`expression`in e&&_s(e.alias)&&zs(e)}let Hs=Y({is(e){return e.kind===`SelectModifierNode`},create(e,t){return Y({kind:`SelectModifierNode`,modifier:e,of:t})},createWithExpression(e){return Y({kind:`SelectModifierNode`,rawModifier:e})}}),Us=Y({is(e){return e.kind===`AndNode`},create(e,t){return Y({kind:`AndNode`,left:e,right:t})}}),Ws=Y({is(e){return e.kind===`OrNode`},create(e,t){return Y({kind:`OrNode`,left:e,right:t})}}),Gs=Y({is(e){return e.kind===`OnNode`},create(e){return Y({kind:`OnNode`,on:e})},cloneWithOperation(e,t,n){return Y({...e,on:t===`And`?Us.create(e.on,n):Ws.create(e.on,n)})}}),Ks=Y({is(e){return e.kind===`JoinNode`},create(e,t){return Y({kind:`JoinNode`,joinType:e,table:t,on:void 0})},createWithOn(e,t,n){return Y({kind:`JoinNode`,joinType:e,table:t,on:Gs.create(n)})},cloneWithOn(e,t){return Y({...e,on:e.on?Gs.cloneWithOperation(e.on,`And`,t):Gs.create(t)})}}),qs=Y({is(e){return e.kind===`BinaryOperationNode`},create(e,t,n){return Y({kind:`BinaryOperationNode`,leftOperand:e,operator:t,rightOperand:n})}}),Js=Y({"=":!0,"==":!0,"!=":!0,"<>":!0,">":!0,">=":!0,"<":!0,"<=":!0,in:!0,"not in":!0,is:!0,"is not":!0,like:!0,"not like":!0,match:!0,ilike:!0,"not ilike":!0,"@>":!0,"<@":!0,"^@":!0,"&&":!0,"?":!0,"?&":!0,"?|":!0,"!<":!0,"!>":!0,"<=>":!0,"!~":!0,"~":!0,"~*":!0,"!~*":!0,"@@":!0,"@@@":!0,"!!":!0,"<->":!0,regexp:!0,"is distinct from":!0,"is not distinct from":!0});Object.keys(Js);let Ys=Y({"+":!0,"-":!0,"*":!0,"/":!0,"%":!0,"^":!0,"&":!0,"|":!0,"#":!0,"<<":!0,">>":!0});Object.keys(Ys);let Xs=Y({"->":!0,"->>":!0}),Zs=Object.keys(Xs),Qs=Y({...Js,...Ys,"||":!0}),$s=Object.keys(Qs),ec=Y({exists:!0,"not exists":!0});Object.keys(ec);let tc=Y({...ec,"-":!0,not:!0}),nc=Object.keys(tc);[...$s,...Zs,...nc];let rc=Y({is(e){return e.kind===`OperatorNode`},create(e){return Y({kind:`OperatorNode`,operator:e})}});function ic(e){return _s(e)&&Qs[e]}function ac(e){return _s(e)&&Xs[e]}function oc(e){return _s(e)&&tc[e]}let sc=Y({is(e){return e.kind===`ColumnNode`},create(e){return Y({kind:`ColumnNode`,column:Z.create(e)})}}),cc=Y({is(e){return e.kind===`SelectAllNode`},create(){return Y({kind:`SelectAllNode`})}}),lc=Y({is(e){return e.kind===`ReferenceNode`},create(e,t){return Y({kind:`ReferenceNode`,table:t,column:e})},createSelectAll(e){return Y({kind:`ReferenceNode`,table:e,column:cc.create()})}});var uc=class{#e;get dynamicReference(){return this.#e}get refType(){}constructor(e){this.#e=e}toOperationNode(){return Ec(this.#e)}};function dc(e){return ws(e)&&zs(e)&&_s(e.dynamicReference)}let fc=Y({is(e){return e.kind===`OrderByItemNode`},create(e,t){return Y({kind:`OrderByItemNode`,orderBy:e,direction:t})},cloneWith(e,t){return Y({...e,...t})}}),pc=Y({is(e){return e.kind===`RawNode`},create(e,t){return Y({kind:`RawNode`,sqlFragments:Y(e),parameters:Y(t)})},createWithSql(e){return pc.create([e],[])},createWithChild(e){return pc.create([``,``],[e])},createWithChildren(e){return pc.create(Array(e.length+1).fill(``),e)}}),mc=Y({is(e){return e.kind===`CollateNode`},create(e){return Y({kind:`CollateNode`,collation:Z.create(e)})}});var hc=class e{#e;constructor(e){this.#e=Y(e)}desc(){return new e({node:fc.cloneWith(this.#e.node,{direction:pc.createWithSql(`desc`)})})}asc(){return new e({node:fc.cloneWith(this.#e.node,{direction:pc.createWithSql(`asc`)})})}nullsLast(){return new e({node:fc.cloneWith(this.#e.node,{nulls:`last`})})}nullsFirst(){return new e({node:fc.cloneWith(this.#e.node,{nulls:`first`})})}collate(t){return new e({node:fc.cloneWith(this.#e.node,{collation:mc.create(t)})})}toOperationNode(){return this.#e.node}};let gc=/* @__PURE__ */ new Set;function _c(e){gc.has(e)||(gc.add(e),console.log(e))}function vc(e){return e===`asc`||e===`desc`}function yc(e){if(e.length===2)return[bc(e[0],e[1])];if(e.length===1){let[t]=e;return Array.isArray(t)?(_c(`orderBy(array) is deprecated, use multiple orderBy calls instead.`),t.map(e=>bc(e))):[bc(t)]}throw Error(`Invalid number of arguments at order by! expected 1-2, received ${e.length}`)}function bc(e,t){let n=xc(e);if(fc.is(n)){if(t)throw Error(`Cannot specify direction twice!`);return n}return Sc(n,t)}function xc(e){if(Bd(e))return Rd(e);if(dc(e))return e.toOperationNode();let[t,n]=e.split(` `);return n?(_c("`orderBy('column asc')` is deprecated. Use `orderBy('column', 'asc')` instead."),Sc(Ac(t),n)):Ac(e)}function Sc(e,t){if(typeof t==`string`){if(!vc(t))throw Error(`Invalid order by direction: ${t}`);return fc.create(e,pc.createWithSql(t))}if(Bs(t))return _c("`orderBy(..., expr)` is deprecated. Use `orderBy(..., 'asc')` or `orderBy(..., (ob) => ...)` instead."),fc.create(e,t.toOperationNode());let n=fc.create(e);return t?t(new hc({node:n})).toOperationNode():n}let Cc=Y({is(e){return e.kind===`JSONReferenceNode`},create(e,t){return Y({kind:`JSONReferenceNode`,reference:e,traversal:t})},cloneWithTraversal(e,t){return Y({...e,traversal:t})}}),wc=Y({is(e){return e.kind===`JSONOperatorChainNode`},create(e){return Y({kind:`JSONOperatorChainNode`,operator:e,values:Y([])})},cloneWithValue(e,t){return Y({...e,values:Y([...e.values,t])})}}),Tc=Y({is(e){return e.kind===`JSONPathNode`},create(e){return Y({kind:`JSONPathNode`,inOperator:e,pathLegs:Y([])})},cloneWithLeg(e,t){return Y({...e,pathLegs:Y([...e.pathLegs,t])})}});function Ec(e){return _s(e)?Ac(e):e.toOperationNode()}function Dc(e){return Es(e)?e.map(e=>Oc(e)):[Oc(e)]}function Oc(e){return Bd(e)?Rd(e):Ec(e)}function kc(e,t){if(ac(t))return Cc.create(Ac(e),wc.create(rc.create(t)));if(t===`->$`||t===`->>$`)return Cc.create(Ac(e),Tc.create(rc.create(t.slice(0,-1))));throw Error(`Invalid JSON operator: ${t}`)}function Ac(e){if(!e.includes(`.`))return lc.create(sc.create(e));let t=e.split(`.`).map(Ic);if(t.length===3)return Pc(t);if(t.length===2)return Fc(t);throw Error(`invalid column reference ${e}`)}function jc(e){let t=` as `;if(e.includes(t)){let[n,r]=e.split(t).map(Ic);return Ls.create(Ac(n),Z.create(r))}return Ac(e)}function Mc(e){return sc.create(e)}function Nc(e){if(e.includes(` `)){let[t,n]=e.split(` `).map(Ic);if(!vc(n))throw Error(`invalid order direction "${n}" next to "${t}"`);return yc([t,n])[0]}return Mc(e)}function Pc(e){let[t,n,r]=e;return lc.create(sc.create(r),Rs.createWithSchema(t,n))}function Fc(e){let[t,n]=e;return lc.create(sc.create(n),Rs.create(t))}function Ic(e){return e.trim()}let Lc=Y({is(e){return e.kind===`PrimitiveValueListNode`},create(e){return Y({kind:`PrimitiveValueListNode`,values:Y([...e])})}}),Rc=Y({is(e){return e.kind===`ValueListNode`},create(e){return Y({kind:`ValueListNode`,values:Y(e)})}}),zc=Y({is(e){return e.kind===`ValueNode`},create(e){return Y({kind:`ValueNode`,value:e})},createImmediate(e){return Y({kind:`ValueNode`,value:e,immediate:!0})}});function Bc(e){return Es(e)?Wc(e):Vc(e)}function Vc(e){return Bd(e)?Rd(e):zc.create(e)}function Hc(e){return vs(e)||ys(e)||bs(e)}function Uc(e){if(!Hc(e))throw Error(`unsafe immediate value ${JSON.stringify(e)}`);return zc.createImmediate(e)}function Wc(e){return e.some(Bd)?Rc.create(e.map(e=>Vc(e))):Lc.create(e)}let Gc=Y({is(e){return e.kind===`ParensNode`},create(e){return Y({kind:`ParensNode`,node:e})}});function Kc(e){if(e.length===3)return qc(e[0],e[1],e[2]);if(e.length===1)return Vc(e[0]);throw Error(`invalid arguments: ${JSON.stringify(e)}`)}function qc(e,t,n){return Zc(t)&&Qc(n)?qs.create(Oc(e),$c(t),zc.createImmediate(n)):qs.create(Oc(e),$c(t),Bc(n))}function Jc(e,t,n){return qs.create(Oc(e),$c(t),Oc(n))}function Yc(e,t){return Xc(Object.entries(e).filter(([,e])=>!gs(e)).map(([e,t])=>qc(e,Qc(t)?`is`:`=`,t)),t)}function Xc(e,t,n=!0){let r=t===`and`?Us.create:Ws.create;if(e.length===0)return qs.create(zc.createImmediate(1),rc.create(`=`),zc.createImmediate(+(t===`and`)));let i=el(e[0]);for(let t=1;t<e.length;++t)i=r(i,el(e[t]));return e.length>1&&n?Gc.create(i):i}function Zc(e){return e===`is`||e===`is not`}function Qc(e){return bs(e)||ys(e)}function $c(e){if(ic(e))return rc.create(e);if(zs(e))return e.toOperationNode();throw Error(`invalid operator ${JSON.stringify(e)}`)}function el(e){return zs(e)?e.toOperationNode():e}let tl=Y({is(e){return e.kind===`OrderByNode`},create(e){return Y({kind:`OrderByNode`,items:Y([...e])})},cloneWithItems(e,t){return Y({...e,items:Y([...e.items,...t])})}}),nl=Y({is(e){return e.kind===`PartitionByNode`},create(e){return Y({kind:`PartitionByNode`,items:Y(e)})},cloneWithItems(e,t){return Y({...e,items:Y([...e.items,...t])})}}),rl=Y({is(e){return e.kind===`OverNode`},create(){return Y({kind:`OverNode`})},cloneWithOrderByItems(e,t){return Y({...e,orderBy:e.orderBy?tl.cloneWithItems(e.orderBy,t):tl.create(t)})},cloneWithPartitionByItems(e,t){return Y({...e,partitionBy:e.partitionBy?nl.cloneWithItems(e.partitionBy,t):nl.create(t)})}}),il=Y({is(e){return e.kind===`FromNode`},create(e){return Y({kind:`FromNode`,froms:Y(e)})},cloneWithFroms(e,t){return Y({...e,froms:Y([...e.froms,...t])})}}),al=Y({is(e){return e.kind===`GroupByNode`},create(e){return Y({kind:`GroupByNode`,items:Y(e)})},cloneWithItems(e,t){return Y({...e,items:Y([...e.items,...t])})}}),ol=Y({is(e){return e.kind===`HavingNode`},create(e){return Y({kind:`HavingNode`,having:e})},cloneWithOperation(e,t,n){return Y({...e,having:t===`And`?Us.create(e.having,n):Ws.create(e.having,n)})}}),sl=Y({is(e){return e.kind===`InsertQueryNode`},create(e,t,n){return Y({kind:`InsertQueryNode`,into:e,...t&&{with:t},replace:n})},createWithoutInto(){return Y({kind:`InsertQueryNode`})},cloneWith(e,t){return Y({...e,...t})}}),cl=Y({is(e){return e.kind===`ListNode`},create(e){return Y({kind:`ListNode`,items:Y(e)})}}),ll=Y({is(e){return e.kind===`UpdateQueryNode`},create(e,t){return Y({kind:`UpdateQueryNode`,table:e.length===1?e[0]:cl.create(e),...t&&{with:t}})},createWithoutTable(){return Y({kind:`UpdateQueryNode`})},cloneWithFromItems(e,t){return Y({...e,from:e.from?il.cloneWithFroms(e.from,t):il.create(t)})},cloneWithUpdates(e,t){return Y({...e,updates:e.updates?Y([...e.updates,...t]):t})},cloneWithLimit(e,t){return Y({...e,limit:t})}}),ul=Y({is(e){return e.kind===`UsingNode`},create(e){return Y({kind:`UsingNode`,tables:Y(e)})},cloneWithTables(e,t){return Y({...e,tables:Y([...e.tables,...t])})}}),dl=Y({is(e){return e.kind===`DeleteQueryNode`},create(e,t){return Y({kind:`DeleteQueryNode`,from:il.create(e),...t&&{with:t}})},cloneWithOrderByItems:(e,t)=>Q.cloneWithOrderByItems(e,t),cloneWithoutOrderBy:e=>Q.cloneWithoutOrderBy(e),cloneWithLimit(e,t){return Y({...e,limit:t})},cloneWithoutLimit(e){return Y({...e,limit:void 0})},cloneWithUsing(e,t){return Y({...e,using:e.using===void 0?ul.create(t):ul.cloneWithTables(e.using,t)})}}),fl=Y({is(e){return e.kind===`WhereNode`},create(e){return Y({kind:`WhereNode`,where:e})},cloneWithOperation(e,t,n){return Y({...e,where:t===`And`?Us.create(e.where,n):Ws.create(e.where,n)})}}),pl=Y({is(e){return e.kind===`ReturningNode`},create(e){return Y({kind:`ReturningNode`,selections:Y(e)})},cloneWithSelections(e,t){return Y({...e,selections:e.selections?Y([...e.selections,...t]):Y(t)})}}),ml=Y({is(e){return e.kind===`ExplainNode`},create(e,t){return Y({kind:`ExplainNode`,format:e,options:t})}}),hl=Y({is(e){return e.kind===`WhenNode`},create(e){return Y({kind:`WhenNode`,condition:e})},cloneWithResult(e,t){return Y({...e,result:t})}}),gl=Y({is(e){return e.kind===`MergeQueryNode`},create(e,t){return Y({kind:`MergeQueryNode`,into:e,...t&&{with:t}})},cloneWithUsing(e,t){return Y({...e,using:t})},cloneWithWhen(e,t){return Y({...e,whens:e.whens?Y([...e.whens,t]):Y([t])})},cloneWithThen(e,t){return Y({...e,whens:e.whens?Y([...e.whens.slice(0,-1),hl.cloneWithResult(e.whens[e.whens.length-1],t)]):void 0})}}),_l=Y({is(e){return e.kind===`OutputNode`},create(e){return Y({kind:`OutputNode`,selections:Y(e)})},cloneWithSelections(e,t){return Y({...e,selections:e.selections?Y([...e.selections,...t]):Y(t)})}}),Q=Y({is(e){return vl.is(e)||sl.is(e)||ll.is(e)||dl.is(e)||gl.is(e)},cloneWithEndModifier(e,t){return Y({...e,endModifiers:e.endModifiers?Y([...e.endModifiers,t]):Y([t])})},cloneWithWhere(e,t){return Y({...e,where:e.where?fl.cloneWithOperation(e.where,`And`,t):fl.create(t)})},cloneWithJoin(e,t){return Y({...e,joins:e.joins?Y([...e.joins,t]):Y([t])})},cloneWithReturning(e,t){return Y({...e,returning:e.returning?pl.cloneWithSelections(e.returning,t):pl.create(t)})},cloneWithoutReturning(e){return Y({...e,returning:void 0})},cloneWithoutWhere(e){return Y({...e,where:void 0})},cloneWithExplain(e,t,n){return Y({...e,explain:ml.create(t,n?.toOperationNode())})},cloneWithTop(e,t){return Y({...e,top:t})},cloneWithOutput(e,t){return Y({...e,output:e.output?_l.cloneWithSelections(e.output,t):_l.create(t)})},cloneWithOrderByItems(e,t){return Y({...e,orderBy:e.orderBy?tl.cloneWithItems(e.orderBy,t):tl.create(t)})},cloneWithoutOrderBy(e){return Y({...e,orderBy:void 0})}}),vl=Y({is(e){return e.kind===`SelectQueryNode`},create(e){return Y({kind:`SelectQueryNode`,...e&&{with:e}})},createFrom(e,t){return Y({kind:`SelectQueryNode`,from:il.create(e),...t&&{with:t}})},cloneWithSelections(e,t){return Y({...e,selections:e.selections?Y([...e.selections,...t]):Y(t)})},cloneWithDistinctOn(e,t){return Y({...e,distinctOn:e.distinctOn?Y([...e.distinctOn,...t]):Y(t)})},cloneWithFrontModifier(e,t){return Y({...e,frontModifiers:e.frontModifiers?Y([...e.frontModifiers,t]):Y([t])})},cloneWithOrderByItems:(e,t)=>Q.cloneWithOrderByItems(e,t),cloneWithGroupByItems(e,t){return Y({...e,groupBy:e.groupBy?al.cloneWithItems(e.groupBy,t):al.create(t)})},cloneWithLimit(e,t){return Y({...e,limit:t})},cloneWithOffset(e,t){return Y({...e,offset:t})},cloneWithFetch(e,t){return Y({...e,fetch:t})},cloneWithHaving(e,t){return Y({...e,having:e.having?ol.cloneWithOperation(e.having,`And`,t):ol.create(t)})},cloneWithSetOperations(e,t){return Y({...e,setOperations:e.setOperations?Y([...e.setOperations,...t]):Y([...t])})},cloneWithoutSelections(e){return Y({...e,selections:[]})},cloneWithoutLimit(e){return Y({...e,limit:void 0})},cloneWithoutOffset(e){return Y({...e,offset:void 0})},cloneWithoutOrderBy:e=>Q.cloneWithoutOrderBy(e),cloneWithoutGroupBy(e){return Y({...e,groupBy:void 0})}});var yl=class e{#e;constructor(e){this.#e=Y(e)}on(...t){return new e({...this.#e,joinNode:Ks.cloneWithOn(this.#e.joinNode,Kc(t))})}onRef(t,n,r){return new e({...this.#e,joinNode:Ks.cloneWithOn(this.#e.joinNode,Jc(t,n,r))})}onTrue(){return new e({...this.#e,joinNode:Ks.cloneWithOn(this.#e.joinNode,pc.createWithSql(`true`))})}$call(e){return e(this)}toOperationNode(){return this.#e.joinNode}};let bl=Y({is(e){return e.kind===`PartitionByItemNode`},create(e){return Y({kind:`PartitionByItemNode`,partitionBy:e})}});function xl(e){return Dc(e).map(bl.create)}var Sl=class e{#e;constructor(e){this.#e=Y(e)}orderBy(...t){return new e({overNode:rl.cloneWithOrderByItems(this.#e.overNode,yc(t))})}clearOrderBy(){return new e({overNode:Q.cloneWithoutOrderBy(this.#e.overNode)})}partitionBy(t){return new e({overNode:rl.cloneWithPartitionByItems(this.#e.overNode,xl(t))})}$call(e){return e(this)}toOperationNode(){return this.#e.overNode}};let Cl=Y({is(e){return e.kind===`SelectionNode`},create(e){return Y({kind:`SelectionNode`,selection:e})},createSelectAll(){return Y({kind:`SelectionNode`,selection:cc.create()})},createSelectAllFromTable(e){return Y({kind:`SelectionNode`,selection:lc.createSelectAll(e)})}});function wl(e){return Cs(e)?wl(e(Ld())):Es(e)?e.map(e=>Tl(e)):[Tl(e)]}function Tl(e){return _s(e)?Cl.create(jc(e)):dc(e)?Cl.create(e.toOperationNode()):Cl.create(zd(e))}function El(e){return e?Array.isArray(e)?e.map(Dl):[Dl(e)]:[Cl.createSelectAll()]}function Dl(e){if(_s(e))return Cl.createSelectAllFromTable(qd(e));throw Error(`invalid value selectAll expression: ${JSON.stringify(e)}`)}let Ol=Y({is(e){return e.kind===`ValuesNode`},create(e){return Y({kind:`ValuesNode`,values:Y(e)})}}),kl=Y({is(e){return e.kind===`DefaultInsertValueNode`},create(){return Y({kind:`DefaultInsertValueNode`})}});function Al(e){let t=Cs(e)?e(Ld()):e;return jl(Es(t)?t:Y([t]))}function jl(e){let t=Ml(e);return[Y([...t.keys()].map(sc.create)),Ol.create(e.map(e=>Nl(e,t)))]}function Ml(e){let t=/* @__PURE__ */ new Map;for(let n of e){let e=Object.keys(n);for(let r of e)!t.has(r)&&n[r]!==void 0&&t.set(r,t.size)}return t}function Nl(e,t){let n=Object.keys(e),r=Array.from({length:t.size}),i=!1,a=n.length;for(let o of n){let n=t.get(o);if(gs(n)){a--;continue}let s=e[o];(gs(s)||Bd(s))&&(i=!0),r[n]=s}if(a<t.size||i){let e=kl.create();return Rc.create(r.map(t=>gs(t)?e:Vc(t)))}return Lc.create(r)}let Pl=Y({is(e){return e.kind===`ColumnUpdateNode`},create(e,t){return Y({kind:`ColumnUpdateNode`,column:e,value:t})}});function Fl(...e){return e.length===2?[Pl.create(Oc(e[0]),Vc(e[1]))]:Il(e[0])}function Il(e){let t=Cs(e)?e(Ld()):e;return Object.entries(t).filter(([e,t])=>t!==void 0).map(([e,t])=>Pl.create(sc.create(e),Vc(t)))}let Ll=Y({is(e){return e.kind===`OnDuplicateKeyNode`},create(e){return Y({kind:`OnDuplicateKeyNode`,updates:e})}});var Rl=class{insertId;numInsertedOrUpdatedRows;constructor(e,t){this.insertId=e,this.numInsertedOrUpdatedRows=t}},zl=class extends Error{node;constructor(e){super(`no result`),this.node=e}};function Bl(e){return Object.prototype.hasOwnProperty.call(e,`prototype`)}let Vl=Y({is(e){return e.kind===`OnConflictNode`},create(){return Y({kind:`OnConflictNode`})},cloneWith(e,t){return Y({...e,...t})},cloneWithIndexWhere(e,t){return Y({...e,indexWhere:e.indexWhere?fl.cloneWithOperation(e.indexWhere,`And`,t):fl.create(t)})},cloneWithIndexOrWhere(e,t){return Y({...e,indexWhere:e.indexWhere?fl.cloneWithOperation(e.indexWhere,`Or`,t):fl.create(t)})},cloneWithUpdateWhere(e,t){return Y({...e,updateWhere:e.updateWhere?fl.cloneWithOperation(e.updateWhere,`And`,t):fl.create(t)})},cloneWithUpdateOrWhere(e,t){return Y({...e,updateWhere:e.updateWhere?fl.cloneWithOperation(e.updateWhere,`Or`,t):fl.create(t)})},cloneWithoutIndexWhere(e){return Y({...e,indexWhere:void 0})},cloneWithoutUpdateWhere(e){return Y({...e,updateWhere:void 0})}});var Hl=class e{#e;constructor(e){this.#e=Y(e)}column(t){let n=sc.create(t);return new e({...this.#e,onConflictNode:Vl.cloneWith(this.#e.onConflictNode,{columns:this.#e.onConflictNode.columns?Y([...this.#e.onConflictNode.columns,n]):Y([n])})})}columns(t){let n=t.map(sc.create);return new e({...this.#e,onConflictNode:Vl.cloneWith(this.#e.onConflictNode,{columns:this.#e.onConflictNode.columns?Y([...this.#e.onConflictNode.columns,...n]):Y(n)})})}constraint(t){return new e({...this.#e,onConflictNode:Vl.cloneWith(this.#e.onConflictNode,{constraint:Z.create(t)})})}expression(t){return new e({...this.#e,onConflictNode:Vl.cloneWith(this.#e.onConflictNode,{indexExpression:t.toOperationNode()})})}where(...t){return new e({...this.#e,onConflictNode:Vl.cloneWithIndexWhere(this.#e.onConflictNode,Kc(t))})}whereRef(t,n,r){return new e({...this.#e,onConflictNode:Vl.cloneWithIndexWhere(this.#e.onConflictNode,Jc(t,n,r))})}clearWhere(){return new e({...this.#e,onConflictNode:Vl.cloneWithoutIndexWhere(this.#e.onConflictNode)})}doNothing(){return new Ul({...this.#e,onConflictNode:Vl.cloneWith(this.#e.onConflictNode,{doNothing:!0})})}doUpdateSet(e){return new Wl({...this.#e,onConflictNode:Vl.cloneWith(this.#e.onConflictNode,{updates:Il(e)})})}$call(e){return e(this)}},Ul=class{#e;constructor(e){this.#e=Y(e)}toOperationNode(){return this.#e.onConflictNode}},Wl=class e{#e;constructor(e){this.#e=Y(e)}where(...t){return new e({...this.#e,onConflictNode:Vl.cloneWithUpdateWhere(this.#e.onConflictNode,Kc(t))})}whereRef(t,n,r){return new e({...this.#e,onConflictNode:Vl.cloneWithUpdateWhere(this.#e.onConflictNode,Jc(t,n,r))})}clearWhere(){return new e({...this.#e,onConflictNode:Vl.cloneWithoutUpdateWhere(this.#e.onConflictNode)})}$call(e){return e(this)}toOperationNode(){return this.#e.onConflictNode}};let Gl=Y({is(e){return e.kind===`TopNode`},create(e,t){return Y({kind:`TopNode`,expression:e,modifiers:t})}});function Kl(e,t){if(!vs(e)&&!Ss(e))throw Error(`Invalid top expression: ${e}`);if(!gs(t)&&!ql(t))throw Error(`Invalid top modifiers: ${t}`);return Gl.create(e,t)}function ql(e){return e===`percent`||e===`with ties`||e===`percent with ties`}let Jl=Y({is(e){return e.kind===`OrActionNode`},create(e){return Y({kind:`OrActionNode`,action:e})}});var Yl=class e{#e;constructor(e){this.#e=Y(e)}values(t){let[n,r]=Al(t);return new e({...this.#e,queryNode:sl.cloneWith(this.#e.queryNode,{columns:n,values:r})})}columns(t){return new e({...this.#e,queryNode:sl.cloneWith(this.#e.queryNode,{columns:Y(t.map(sc.create))})})}expression(t){return new e({...this.#e,queryNode:sl.cloneWith(this.#e.queryNode,{values:Rd(t)})})}defaultValues(){return new e({...this.#e,queryNode:sl.cloneWith(this.#e.queryNode,{defaultValues:!0})})}modifyEnd(t){return new e({...this.#e,queryNode:Q.cloneWithEndModifier(this.#e.queryNode,t.toOperationNode())})}ignore(){return new e({...this.#e,queryNode:sl.cloneWith(this.#e.queryNode,{orAction:Jl.create(`ignore`)})})}orIgnore(){return new e({...this.#e,queryNode:sl.cloneWith(this.#e.queryNode,{orAction:Jl.create(`ignore`)})})}orAbort(){return new e({...this.#e,queryNode:sl.cloneWith(this.#e.queryNode,{orAction:Jl.create(`abort`)})})}orFail(){return new e({...this.#e,queryNode:sl.cloneWith(this.#e.queryNode,{orAction:Jl.create(`fail`)})})}orReplace(){return new e({...this.#e,queryNode:sl.cloneWith(this.#e.queryNode,{orAction:Jl.create(`replace`)})})}orRollback(){return new e({...this.#e,queryNode:sl.cloneWith(this.#e.queryNode,{orAction:Jl.create(`rollback`)})})}top(t,n){return new e({...this.#e,queryNode:Q.cloneWithTop(this.#e.queryNode,Kl(t,n))})}onConflict(t){return new e({...this.#e,queryNode:sl.cloneWith(this.#e.queryNode,{onConflict:t(new Hl({onConflictNode:Vl.create()})).toOperationNode()})})}onDuplicateKeyUpdate(t){return new e({...this.#e,queryNode:sl.cloneWith(this.#e.queryNode,{onDuplicateKey:Ll.create(Il(t))})})}returning(t){return new e({...this.#e,queryNode:Q.cloneWithReturning(this.#e.queryNode,wl(t))})}returningAll(){return new e({...this.#e,queryNode:Q.cloneWithReturning(this.#e.queryNode,El())})}output(t){return new e({...this.#e,queryNode:Q.cloneWithOutput(this.#e.queryNode,wl(t))})}outputAll(t){return new e({...this.#e,queryNode:Q.cloneWithOutput(this.#e.queryNode,El(t))})}clearReturning(){return new e({...this.#e,queryNode:Q.cloneWithoutReturning(this.#e.queryNode)})}$call(e){return e(this)}$if(t,n){return t?n(this):new e({...this.#e})}$castTo(){return new e(this.#e)}$narrowType(){return new e(this.#e)}$assertType(){return new e(this.#e)}withPlugin(t){return new e({...this.#e,executor:this.#e.executor.withPlugin(t)})}toOperationNode(){return this.#e.executor.transformQuery(this.#e.queryNode,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){let t=this.compile(),n=await this.#e.executor.executeQuery(t,e),{adapter:r}=this.#e.executor,i=t.query;return i.returning&&r.supportsReturning||i.output&&r.supportsOutput?n.rows:[new Rl(n.insertId,n.numAffectedRows??BigInt(0))]}async executeTakeFirst(e){let[t]=await this.execute(e);return t}async executeTakeFirstOrThrow(e){typeof e==`function`&&(e={errorConstructor:e});let t=await this.executeTakeFirst(e);if(t===void 0){let t=e?.errorConstructor??zl;throw Bl(t)?new t(this.toOperationNode()):t(this.toOperationNode())}return t}async*stream(e){typeof e!=`object`&&(e={chunkSize:e});let t=this.compile(),n=this.#e.executor.stream(t,e.chunkSize??100,e);for await(let e of n)yield*e.rows}async explain(t,n){return await new e({...this.#e,queryNode:Q.cloneWithExplain(this.#e.queryNode,t,n)}).execute()}},Xl=class{numDeletedRows;constructor(e){this.numDeletedRows=e}};let Zl=Y({is(e){return e.kind===`LimitNode`},create(e){return Y({kind:`LimitNode`,limit:e})}});var Ql,$l=class{#e;constructor(e){this.#e=Y(e)}where(...e){return new Ql({...this.#e,queryNode:Q.cloneWithWhere(this.#e.queryNode,Kc(e))})}whereRef(e,t,n){return new Ql({...this.#e,queryNode:Q.cloneWithWhere(this.#e.queryNode,Jc(e,t,n))})}clearWhere(){return new Ql({...this.#e,queryNode:Q.cloneWithoutWhere(this.#e.queryNode)})}top(e,t){return new Ql({...this.#e,queryNode:Q.cloneWithTop(this.#e.queryNode,Kl(e,t))})}using(e){return new Ql({...this.#e,queryNode:dl.cloneWithUsing(this.#e.queryNode,Wd(e))})}innerJoin(...e){return this.#t(`InnerJoin`,e)}leftJoin(...e){return this.#t(`LeftJoin`,e)}rightJoin(...e){return this.#t(`RightJoin`,e)}fullJoin(...e){return this.#t(`FullJoin`,e)}#t(e,t){return new Ql({...this.#e,queryNode:Q.cloneWithJoin(this.#e.queryNode,qu(e,t))})}returning(e){return new Ql({...this.#e,queryNode:Q.cloneWithReturning(this.#e.queryNode,wl(e))})}returningAll(e){return new Ql({...this.#e,queryNode:Q.cloneWithReturning(this.#e.queryNode,El(e))})}output(e){return new Ql({...this.#e,queryNode:Q.cloneWithOutput(this.#e.queryNode,wl(e))})}outputAll(e){return new Ql({...this.#e,queryNode:Q.cloneWithOutput(this.#e.queryNode,El(e))})}clearReturning(){return new Ql({...this.#e,queryNode:Q.cloneWithoutReturning(this.#e.queryNode)})}clearLimit(){return new Ql({...this.#e,queryNode:dl.cloneWithoutLimit(this.#e.queryNode)})}orderBy(...e){return new Ql({...this.#e,queryNode:Q.cloneWithOrderByItems(this.#e.queryNode,yc(e))})}clearOrderBy(){return new Ql({...this.#e,queryNode:Q.cloneWithoutOrderBy(this.#e.queryNode)})}limit(e){return new Ql({...this.#e,queryNode:dl.cloneWithLimit(this.#e.queryNode,Zl.create(Vc(e)))})}modifyEnd(e){return new Ql({...this.#e,queryNode:Q.cloneWithEndModifier(this.#e.queryNode,e.toOperationNode())})}$call(e){return e(this)}$if(e,t){return e?t(this):new Ql({...this.#e})}$castTo(){return new Ql(this.#e)}$narrowType(){return new Ql(this.#e)}$assertType(){return new Ql(this.#e)}withPlugin(e){return new Ql({...this.#e,executor:this.#e.executor.withPlugin(e)})}toOperationNode(){return this.#e.executor.transformQuery(this.#e.queryNode,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){let t=this.compile(),n=await this.#e.executor.executeQuery(t,e),{adapter:r}=this.#e.executor,i=t.query;return i.returning&&r.supportsReturning||i.output&&r.supportsOutput?n.rows:[new Xl(n.numAffectedRows??BigInt(0))]}async executeTakeFirst(e){let[t]=await this.execute(e);return t}async executeTakeFirstOrThrow(e){typeof e==`function`&&(e={errorConstructor:e});let t=await this.executeTakeFirst(e);if(t===void 0){let t=e?.errorConstructor??zl;throw Bl(t)?new t(this.toOperationNode()):t(this.toOperationNode())}return t}async*stream(e){typeof e!=`object`&&(e={chunkSize:e});let t=this.compile(),n=this.#e.executor.stream(t,e.chunkSize??100,e);for await(let e of n)yield*e.rows}async explain(e,t){return await new Ql({...this.#e,queryNode:Q.cloneWithExplain(this.#e.queryNode,e,t)}).execute()}};Ql=$l;var eu=class{numUpdatedRows;numChangedRows;constructor(e,t){this.numUpdatedRows=e,this.numChangedRows=t}},tu,nu=class{#e;constructor(e){this.#e=Y(e)}where(...e){return new tu({...this.#e,queryNode:Q.cloneWithWhere(this.#e.queryNode,Kc(e))})}whereRef(e,t,n){return new tu({...this.#e,queryNode:Q.cloneWithWhere(this.#e.queryNode,Jc(e,t,n))})}clearWhere(){return new tu({...this.#e,queryNode:Q.cloneWithoutWhere(this.#e.queryNode)})}top(e,t){return new tu({...this.#e,queryNode:Q.cloneWithTop(this.#e.queryNode,Kl(e,t))})}from(e){return new tu({...this.#e,queryNode:ll.cloneWithFromItems(this.#e.queryNode,Wd(e))})}innerJoin(...e){return this.#t(`InnerJoin`,e)}leftJoin(...e){return this.#t(`LeftJoin`,e)}rightJoin(...e){return this.#t(`RightJoin`,e)}fullJoin(...e){return this.#t(`FullJoin`,e)}#t(e,t){return new tu({...this.#e,queryNode:Q.cloneWithJoin(this.#e.queryNode,qu(e,t))})}orderBy(...e){return new tu({...this.#e,queryNode:Q.cloneWithOrderByItems(this.#e.queryNode,yc(e))})}clearOrderBy(){return new tu({...this.#e,queryNode:Q.cloneWithoutOrderBy(this.#e.queryNode)})}limit(e){return new tu({...this.#e,queryNode:ll.cloneWithLimit(this.#e.queryNode,Zl.create(Vc(e)))})}set(...e){return new tu({...this.#e,queryNode:ll.cloneWithUpdates(this.#e.queryNode,Fl(...e))})}returning(e){return new tu({...this.#e,queryNode:Q.cloneWithReturning(this.#e.queryNode,wl(e))})}returningAll(e){return new tu({...this.#e,queryNode:Q.cloneWithReturning(this.#e.queryNode,El(e))})}output(e){return new tu({...this.#e,queryNode:Q.cloneWithOutput(this.#e.queryNode,wl(e))})}outputAll(e){return new tu({...this.#e,queryNode:Q.cloneWithOutput(this.#e.queryNode,El(e))})}modifyEnd(e){return new tu({...this.#e,queryNode:Q.cloneWithEndModifier(this.#e.queryNode,e.toOperationNode())})}clearReturning(){return new tu({...this.#e,queryNode:Q.cloneWithoutReturning(this.#e.queryNode)})}$call(e){return e(this)}$if(e,t){return e?t(this):new tu({...this.#e})}$castTo(){return new tu(this.#e)}$narrowType(){return new tu(this.#e)}$assertType(){return new tu(this.#e)}withPlugin(e){return new tu({...this.#e,executor:this.#e.executor.withPlugin(e)})}toOperationNode(){return this.#e.executor.transformQuery(this.#e.queryNode,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){let t=this.compile(),n=await this.#e.executor.executeQuery(t,e),{adapter:r}=this.#e.executor,i=t.query;return i.returning&&r.supportsReturning||i.output&&r.supportsOutput?n.rows:[new eu(n.numAffectedRows??BigInt(0),n.numChangedRows)]}async executeTakeFirst(e){let[t]=await this.execute(e);return t}async executeTakeFirstOrThrow(e){typeof e==`function`&&(e={errorConstructor:e});let t=await this.executeTakeFirst(e);if(t===void 0){let t=e?.errorConstructor??zl;throw Bl(t)?new t(this.toOperationNode()):t(this.toOperationNode())}return t}async*stream(e){typeof e!=`object`&&(e={chunkSize:e});let t=this.compile(),n=this.#e.executor.stream(t,e.chunkSize??100,e);for await(let e of n)yield*e.rows}async explain(e,t){return await new tu({...this.#e,queryNode:Q.cloneWithExplain(this.#e.queryNode,e,t)}).execute()}};tu=nu;let ru=Y({is(e){return e.kind===`CommonTableExpressionNameNode`},create(e,t){return Y({kind:`CommonTableExpressionNameNode`,table:Rs.create(e),columns:t?Y(t.map(sc.create)):void 0})}}),iu=Y({is(e){return e.kind===`CommonTableExpressionNode`},create(e,t){return Y({kind:`CommonTableExpressionNode`,name:e,expression:t})},cloneWith(e,t){return Y({...e,...t})}});var au=class e{#e;constructor(e){this.#e=Y(e)}materialized(){return new e({...this.#e,node:iu.cloneWith(this.#e.node,{materialized:!0})})}notMaterialized(){return new e({...this.#e,node:iu.cloneWith(this.#e.node,{materialized:!1})})}toOperationNode(){return this.#e.node}};function ou(e,t){let n=zs(t)?t.toOperationNode():t(Wu()).toOperationNode();return Cs(e)?e(su(n)).toOperationNode():iu.create(cu(e),n)}function su(e){return t=>new au({node:iu.create(cu(t),e)})}function cu(e){if(e.includes(`(`)){let t=e.split(/[\(\)]/),n=t[0],r=t[1].split(`,`).map(e=>e.trim());return ru.create(n,r)}return ru.create(e)}let lu=Y({is(e){return e.kind===`WithNode`},create(e,t){return Y({kind:`WithNode`,expressions:Y([e]),...t})},cloneWithExpression(e,t){return Y({...e,expressions:Y([...e.expressions,t])})}}),uu=/* @__PURE__ */ `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.split(``);function du(e){let t=``;for(let n=0;n<e;++n)t+=fu();return t}function fu(){return uu[~~(Math.random()*uu.length)]}function pu(){return new mu}var mu=class{#e;get queryId(){return this.#e===void 0&&(this.#e=du(8)),this.#e}},hu=class{nodeStack=[];#e=Y({AliasNode:this.transformAlias.bind(this),ColumnNode:this.transformColumn.bind(this),IdentifierNode:this.transformIdentifier.bind(this),SchemableIdentifierNode:this.transformSchemableIdentifier.bind(this),RawNode:this.transformRaw.bind(this),ReferenceNode:this.transformReference.bind(this),SelectQueryNode:this.transformSelectQuery.bind(this),SelectionNode:this.transformSelection.bind(this),TableNode:this.transformTable.bind(this),FromNode:this.transformFrom.bind(this),SelectAllNode:this.transformSelectAll.bind(this),AndNode:this.transformAnd.bind(this),OrNode:this.transformOr.bind(this),ValueNode:this.transformValue.bind(this),ValueListNode:this.transformValueList.bind(this),PrimitiveValueListNode:this.transformPrimitiveValueList.bind(this),ParensNode:this.transformParens.bind(this),JoinNode:this.transformJoin.bind(this),OperatorNode:this.transformOperator.bind(this),WhereNode:this.transformWhere.bind(this),InsertQueryNode:this.transformInsertQuery.bind(this),DeleteQueryNode:this.transformDeleteQuery.bind(this),ReturningNode:this.transformReturning.bind(this),CreateTableNode:this.transformCreateTable.bind(this),AddColumnNode:this.transformAddColumn.bind(this),ColumnDefinitionNode:this.transformColumnDefinition.bind(this),DropTableNode:this.transformDropTable.bind(this),DataTypeNode:this.transformDataType.bind(this),OrderByNode:this.transformOrderBy.bind(this),OrderByItemNode:this.transformOrderByItem.bind(this),GroupByNode:this.transformGroupBy.bind(this),GroupByItemNode:this.transformGroupByItem.bind(this),UpdateQueryNode:this.transformUpdateQuery.bind(this),ColumnUpdateNode:this.transformColumnUpdate.bind(this),LimitNode:this.transformLimit.bind(this),OffsetNode:this.transformOffset.bind(this),OnConflictNode:this.transformOnConflict.bind(this),OnDuplicateKeyNode:this.transformOnDuplicateKey.bind(this),CreateIndexNode:this.transformCreateIndex.bind(this),DropIndexNode:this.transformDropIndex.bind(this),ListNode:this.transformList.bind(this),PrimaryKeyConstraintNode:this.transformPrimaryKeyConstraint.bind(this),UniqueConstraintNode:this.transformUniqueConstraint.bind(this),ReferencesNode:this.transformReferences.bind(this),CheckConstraintNode:this.transformCheckConstraint.bind(this),WithNode:this.transformWith.bind(this),CommonTableExpressionNode:this.transformCommonTableExpression.bind(this),CommonTableExpressionNameNode:this.transformCommonTableExpressionName.bind(this),HavingNode:this.transformHaving.bind(this),CreateSchemaNode:this.transformCreateSchema.bind(this),DropSchemaNode:this.transformDropSchema.bind(this),AlterTableNode:this.transformAlterTable.bind(this),DropColumnNode:this.transformDropColumn.bind(this),RenameColumnNode:this.transformRenameColumn.bind(this),AlterColumnNode:this.transformAlterColumn.bind(this),ModifyColumnNode:this.transformModifyColumn.bind(this),AddConstraintNode:this.transformAddConstraint.bind(this),DropConstraintNode:this.transformDropConstraint.bind(this),RenameConstraintNode:this.transformRenameConstraint.bind(this),ForeignKeyConstraintNode:this.transformForeignKeyConstraint.bind(this),CreateViewNode:this.transformCreateView.bind(this),RefreshMaterializedViewNode:this.transformRefreshMaterializedView.bind(this),DropViewNode:this.transformDropView.bind(this),GeneratedNode:this.transformGenerated.bind(this),DefaultValueNode:this.transformDefaultValue.bind(this),OnNode:this.transformOn.bind(this),ValuesNode:this.transformValues.bind(this),SelectModifierNode:this.transformSelectModifier.bind(this),CreateTypeNode:this.transformCreateType.bind(this),DropTypeNode:this.transformDropType.bind(this),ExplainNode:this.transformExplain.bind(this),DefaultInsertValueNode:this.transformDefaultInsertValue.bind(this),AggregateFunctionNode:this.transformAggregateFunction.bind(this),OverNode:this.transformOver.bind(this),PartitionByNode:this.transformPartitionBy.bind(this),PartitionByItemNode:this.transformPartitionByItem.bind(this),SetOperationNode:this.transformSetOperation.bind(this),BinaryOperationNode:this.transformBinaryOperation.bind(this),UnaryOperationNode:this.transformUnaryOperation.bind(this),UsingNode:this.transformUsing.bind(this),FunctionNode:this.transformFunction.bind(this),CaseNode:this.transformCase.bind(this),WhenNode:this.transformWhen.bind(this),JSONReferenceNode:this.transformJSONReference.bind(this),JSONPathNode:this.transformJSONPath.bind(this),JSONPathLegNode:this.transformJSONPathLeg.bind(this),JSONOperatorChainNode:this.transformJSONOperatorChain.bind(this),TupleNode:this.transformTuple.bind(this),MergeQueryNode:this.transformMergeQuery.bind(this),MatchedNode:this.transformMatched.bind(this),AddIndexNode:this.transformAddIndex.bind(this),CastNode:this.transformCast.bind(this),FetchNode:this.transformFetch.bind(this),TopNode:this.transformTop.bind(this),OutputNode:this.transformOutput.bind(this),OrActionNode:this.transformOrAction.bind(this),CollateNode:this.transformCollate.bind(this),AlterTypeNode:this.transformAlterType.bind(this),AddValueNode:this.transformAddValue.bind(this),RenameValueNode:this.transformRenameValue.bind(this)});transformNode(e,t){if(!e)return e;this.nodeStack.push(e);let n=this.transformNodeImpl(e,t);return this.nodeStack.pop(),Y(n)}transformNodeImpl(e,t){return this.#e[e.kind](e,t)}transformNodeList(e,t){return e&&Y(e.map(e=>this.transformNode(e,t)))}transformSelectQuery(e,t){return{kind:`SelectQueryNode`,from:this.transformNode(e.from,t),selections:this.transformNodeList(e.selections,t),distinctOn:this.transformNodeList(e.distinctOn,t),joins:this.transformNodeList(e.joins,t),groupBy:this.transformNode(e.groupBy,t),orderBy:this.transformNode(e.orderBy,t),where:this.transformNode(e.where,t),frontModifiers:this.transformNodeList(e.frontModifiers,t),endModifiers:this.transformNodeList(e.endModifiers,t),limit:this.transformNode(e.limit,t),offset:this.transformNode(e.offset,t),with:this.transformNode(e.with,t),having:this.transformNode(e.having,t),explain:this.transformNode(e.explain,t),setOperations:this.transformNodeList(e.setOperations,t),fetch:this.transformNode(e.fetch,t),top:this.transformNode(e.top,t)}}transformSelection(e,t){return{kind:`SelectionNode`,selection:this.transformNode(e.selection,t)}}transformColumn(e,t){return{kind:`ColumnNode`,column:this.transformNode(e.column,t)}}transformAlias(e,t){return{kind:`AliasNode`,node:this.transformNode(e.node,t),alias:this.transformNode(e.alias,t)}}transformTable(e,t){return{kind:`TableNode`,table:this.transformNode(e.table,t)}}transformFrom(e,t){return{kind:`FromNode`,froms:this.transformNodeList(e.froms,t)}}transformReference(e,t){return{kind:`ReferenceNode`,column:this.transformNode(e.column,t),table:this.transformNode(e.table,t)}}transformAnd(e,t){return{kind:`AndNode`,left:this.transformNode(e.left,t),right:this.transformNode(e.right,t)}}transformOr(e,t){return{kind:`OrNode`,left:this.transformNode(e.left,t),right:this.transformNode(e.right,t)}}transformValueList(e,t){return{kind:`ValueListNode`,values:this.transformNodeList(e.values,t)}}transformParens(e,t){return{kind:`ParensNode`,node:this.transformNode(e.node,t)}}transformJoin(e,t){return{kind:`JoinNode`,joinType:e.joinType,table:this.transformNode(e.table,t),on:this.transformNode(e.on,t)}}transformRaw(e,t){return{kind:`RawNode`,sqlFragments:Y([...e.sqlFragments]),parameters:this.transformNodeList(e.parameters,t)}}transformWhere(e,t){return{kind:`WhereNode`,where:this.transformNode(e.where,t)}}transformInsertQuery(e,t){return{kind:`InsertQueryNode`,into:this.transformNode(e.into,t),columns:this.transformNodeList(e.columns,t),values:this.transformNode(e.values,t),returning:this.transformNode(e.returning,t),onConflict:this.transformNode(e.onConflict,t),onDuplicateKey:this.transformNode(e.onDuplicateKey,t),endModifiers:this.transformNodeList(e.endModifiers,t),with:this.transformNode(e.with,t),orAction:this.transformNode(e.orAction,t),replace:e.replace,explain:this.transformNode(e.explain,t),defaultValues:e.defaultValues,top:this.transformNode(e.top,t),output:this.transformNode(e.output,t)}}transformValues(e,t){return{kind:`ValuesNode`,values:this.transformNodeList(e.values,t)}}transformDeleteQuery(e,t){return{kind:`DeleteQueryNode`,from:this.transformNode(e.from,t),using:this.transformNode(e.using,t),joins:this.transformNodeList(e.joins,t),where:this.transformNode(e.where,t),returning:this.transformNode(e.returning,t),endModifiers:this.transformNodeList(e.endModifiers,t),with:this.transformNode(e.with,t),orderBy:this.transformNode(e.orderBy,t),limit:this.transformNode(e.limit,t),explain:this.transformNode(e.explain,t),top:this.transformNode(e.top,t),output:this.transformNode(e.output,t)}}transformReturning(e,t){return{kind:`ReturningNode`,selections:this.transformNodeList(e.selections,t)}}transformCreateTable(e,t){return{kind:`CreateTableNode`,table:this.transformNode(e.table,t),columns:this.transformNodeList(e.columns,t),constraints:this.transformNodeList(e.constraints,t),indexes:this.transformNodeList(e.indexes,t),temporary:e.temporary,ifNotExists:e.ifNotExists,onCommit:e.onCommit,frontModifiers:this.transformNodeList(e.frontModifiers,t),endModifiers:this.transformNodeList(e.endModifiers,t),selectQuery:this.transformNode(e.selectQuery,t)}}transformColumnDefinition(e,t){return{kind:`ColumnDefinitionNode`,column:this.transformNode(e.column,t),dataType:this.transformNode(e.dataType,t),references:this.transformNode(e.references,t),primaryKey:e.primaryKey,autoIncrement:e.autoIncrement,unique:e.unique,notNull:e.notNull,unsigned:e.unsigned,defaultTo:this.transformNode(e.defaultTo,t),check:this.transformNode(e.check,t),generated:this.transformNode(e.generated,t),frontModifiers:this.transformNodeList(e.frontModifiers,t),endModifiers:this.transformNodeList(e.endModifiers,t),nullsNotDistinct:e.nullsNotDistinct,identity:e.identity,ifNotExists:e.ifNotExists}}transformAddColumn(e,t){return{kind:`AddColumnNode`,column:this.transformNode(e.column,t)}}transformDropTable(e,t){return{kind:`DropTableNode`,table:this.transformNode(e.table,t),ifExists:e.ifExists,cascade:e.cascade,temporary:e.temporary}}transformOrderBy(e,t){return{kind:`OrderByNode`,items:this.transformNodeList(e.items,t)}}transformOrderByItem(e,t){return{kind:`OrderByItemNode`,orderBy:this.transformNode(e.orderBy,t),direction:this.transformNode(e.direction,t),collation:this.transformNode(e.collation,t),nulls:e.nulls}}transformGroupBy(e,t){return{kind:`GroupByNode`,items:this.transformNodeList(e.items,t)}}transformGroupByItem(e,t){return{kind:`GroupByItemNode`,groupBy:this.transformNode(e.groupBy,t)}}transformUpdateQuery(e,t){return{kind:`UpdateQueryNode`,table:this.transformNode(e.table,t),from:this.transformNode(e.from,t),joins:this.transformNodeList(e.joins,t),where:this.transformNode(e.where,t),updates:this.transformNodeList(e.updates,t),returning:this.transformNode(e.returning,t),endModifiers:this.transformNodeList(e.endModifiers,t),with:this.transformNode(e.with,t),explain:this.transformNode(e.explain,t),limit:this.transformNode(e.limit,t),top:this.transformNode(e.top,t),output:this.transformNode(e.output,t),orderBy:this.transformNode(e.orderBy,t)}}transformColumnUpdate(e,t){return{kind:`ColumnUpdateNode`,column:this.transformNode(e.column,t),value:this.transformNode(e.value,t)}}transformLimit(e,t){return{kind:`LimitNode`,limit:this.transformNode(e.limit,t)}}transformOffset(e,t){return{kind:`OffsetNode`,offset:this.transformNode(e.offset,t)}}transformOnConflict(e,t){return{kind:`OnConflictNode`,columns:this.transformNodeList(e.columns,t),constraint:this.transformNode(e.constraint,t),indexExpression:this.transformNode(e.indexExpression,t),indexWhere:this.transformNode(e.indexWhere,t),updates:this.transformNodeList(e.updates,t),updateWhere:this.transformNode(e.updateWhere,t),doNothing:e.doNothing}}transformOnDuplicateKey(e,t){return{kind:`OnDuplicateKeyNode`,updates:this.transformNodeList(e.updates,t)}}transformCreateIndex(e,t){return{kind:`CreateIndexNode`,name:this.transformNode(e.name,t),table:this.transformNode(e.table,t),columns:this.transformNodeList(e.columns,t),unique:e.unique,using:this.transformNode(e.using,t),ifNotExists:e.ifNotExists,where:this.transformNode(e.where,t),nullsNotDistinct:e.nullsNotDistinct}}transformList(e,t){return{kind:`ListNode`,items:this.transformNodeList(e.items,t)}}transformDropIndex(e,t){return{kind:`DropIndexNode`,name:this.transformNode(e.name,t),table:this.transformNode(e.table,t),ifExists:e.ifExists,cascade:e.cascade}}transformPrimaryKeyConstraint(e,t){return{kind:`PrimaryKeyConstraintNode`,columns:this.transformNodeList(e.columns,t),name:this.transformNode(e.name,t),deferrable:e.deferrable,initiallyDeferred:e.initiallyDeferred}}transformUniqueConstraint(e,t){return{kind:`UniqueConstraintNode`,columns:this.transformNodeList(e.columns,t),name:this.transformNode(e.name,t),nullsNotDistinct:e.nullsNotDistinct,deferrable:e.deferrable,initiallyDeferred:e.initiallyDeferred}}transformForeignKeyConstraint(e,t){return{kind:`ForeignKeyConstraintNode`,columns:this.transformNodeList(e.columns,t),references:this.transformNode(e.references,t),name:this.transformNode(e.name,t),onDelete:e.onDelete,onUpdate:e.onUpdate,deferrable:e.deferrable,initiallyDeferred:e.initiallyDeferred}}transformSetOperation(e,t){return{kind:`SetOperationNode`,operator:e.operator,expression:this.transformNode(e.expression,t),all:e.all}}transformReferences(e,t){return{kind:`ReferencesNode`,table:this.transformNode(e.table,t),columns:this.transformNodeList(e.columns,t),onDelete:e.onDelete,onUpdate:e.onUpdate}}transformCheckConstraint(e,t){return{kind:`CheckConstraintNode`,expression:this.transformNode(e.expression,t),name:this.transformNode(e.name,t)}}transformWith(e,t){return{kind:`WithNode`,expressions:this.transformNodeList(e.expressions,t),recursive:e.recursive}}transformCommonTableExpression(e,t){return{kind:`CommonTableExpressionNode`,name:this.transformNode(e.name,t),materialized:e.materialized,expression:this.transformNode(e.expression,t)}}transformCommonTableExpressionName(e,t){return{kind:`CommonTableExpressionNameNode`,table:this.transformNode(e.table,t),columns:this.transformNodeList(e.columns,t)}}transformHaving(e,t){return{kind:`HavingNode`,having:this.transformNode(e.having,t)}}transformCreateSchema(e,t){return{kind:`CreateSchemaNode`,schema:this.transformNode(e.schema,t),ifNotExists:e.ifNotExists}}transformDropSchema(e,t){return{kind:`DropSchemaNode`,schema:this.transformNode(e.schema,t),ifExists:e.ifExists,cascade:e.cascade}}transformAlterTable(e,t){return{kind:`AlterTableNode`,table:this.transformNode(e.table,t),renameTo:this.transformNode(e.renameTo,t),setSchema:this.transformNode(e.setSchema,t),columnAlterations:this.transformNodeList(e.columnAlterations,t),addConstraint:this.transformNode(e.addConstraint,t),dropConstraint:this.transformNode(e.dropConstraint,t),renameConstraint:this.transformNode(e.renameConstraint,t),addIndex:this.transformNode(e.addIndex,t),dropIndex:this.transformNode(e.dropIndex,t)}}transformDropColumn(e,t){return{kind:`DropColumnNode`,column:this.transformNode(e.column,t),ifExists:e.ifExists}}transformRenameColumn(e,t){return{kind:`RenameColumnNode`,column:this.transformNode(e.column,t),renameTo:this.transformNode(e.renameTo,t)}}transformAlterColumn(e,t){return{kind:`AlterColumnNode`,column:this.transformNode(e.column,t),dataType:this.transformNode(e.dataType,t),dataTypeExpression:this.transformNode(e.dataTypeExpression,t),setDefault:this.transformNode(e.setDefault,t),dropDefault:e.dropDefault,setNotNull:e.setNotNull,dropNotNull:e.dropNotNull}}transformModifyColumn(e,t){return{kind:`ModifyColumnNode`,column:this.transformNode(e.column,t)}}transformAddConstraint(e,t){return{kind:`AddConstraintNode`,constraint:this.transformNode(e.constraint,t)}}transformDropConstraint(e,t){return{kind:`DropConstraintNode`,constraintName:this.transformNode(e.constraintName,t),ifExists:e.ifExists,modifier:e.modifier}}transformRenameConstraint(e,t){return{kind:`RenameConstraintNode`,oldName:this.transformNode(e.oldName,t),newName:this.transformNode(e.newName,t)}}transformCreateView(e,t){return{kind:`CreateViewNode`,name:this.transformNode(e.name,t),temporary:e.temporary,orReplace:e.orReplace,ifNotExists:e.ifNotExists,materialized:e.materialized,columns:this.transformNodeList(e.columns,t),as:this.transformNode(e.as,t)}}transformRefreshMaterializedView(e,t){return{kind:`RefreshMaterializedViewNode`,name:this.transformNode(e.name,t),concurrently:e.concurrently,withNoData:e.withNoData}}transformDropView(e,t){return{kind:`DropViewNode`,name:this.transformNode(e.name,t),ifExists:e.ifExists,materialized:e.materialized,cascade:e.cascade}}transformGenerated(e,t){return{kind:`GeneratedNode`,byDefault:e.byDefault,always:e.always,identity:e.identity,stored:e.stored,expression:this.transformNode(e.expression,t)}}transformDefaultValue(e,t){return{kind:`DefaultValueNode`,defaultValue:this.transformNode(e.defaultValue,t)}}transformOn(e,t){return{kind:`OnNode`,on:this.transformNode(e.on,t)}}transformSelectModifier(e,t){return{kind:`SelectModifierNode`,modifier:e.modifier,rawModifier:this.transformNode(e.rawModifier,t),of:this.transformNodeList(e.of,t)}}transformCreateType(e,t){return{kind:`CreateTypeNode`,name:this.transformNode(e.name,t),enum:this.transformNode(e.enum,t)}}transformDropType(e,t){return{kind:`DropTypeNode`,name:this.transformNode(e.name,t),additionalNames:this.transformNodeList(e.additionalNames,t),cascade:e.cascade,ifExists:e.ifExists}}transformExplain(e,t){return{kind:`ExplainNode`,format:e.format,options:this.transformNode(e.options,t)}}transformSchemableIdentifier(e,t){return{kind:`SchemableIdentifierNode`,schema:this.transformNode(e.schema,t),identifier:this.transformNode(e.identifier,t)}}transformAggregateFunction(e,t){return{kind:`AggregateFunctionNode`,func:e.func,aggregated:this.transformNodeList(e.aggregated,t),distinct:e.distinct,orderBy:this.transformNode(e.orderBy,t),withinGroup:this.transformNode(e.withinGroup,t),filter:this.transformNode(e.filter,t),over:this.transformNode(e.over,t)}}transformOver(e,t){return{kind:`OverNode`,orderBy:this.transformNode(e.orderBy,t),partitionBy:this.transformNode(e.partitionBy,t)}}transformPartitionBy(e,t){return{kind:`PartitionByNode`,items:this.transformNodeList(e.items,t)}}transformPartitionByItem(e,t){return{kind:`PartitionByItemNode`,partitionBy:this.transformNode(e.partitionBy,t)}}transformBinaryOperation(e,t){return{kind:`BinaryOperationNode`,leftOperand:this.transformNode(e.leftOperand,t),operator:this.transformNode(e.operator,t),rightOperand:this.transformNode(e.rightOperand,t)}}transformUnaryOperation(e,t){return{kind:`UnaryOperationNode`,operator:this.transformNode(e.operator,t),operand:this.transformNode(e.operand,t)}}transformUsing(e,t){return{kind:`UsingNode`,tables:this.transformNodeList(e.tables,t)}}transformFunction(e,t){return{kind:`FunctionNode`,func:e.func,arguments:this.transformNodeList(e.arguments,t)}}transformCase(e,t){return{kind:`CaseNode`,value:this.transformNode(e.value,t),when:this.transformNodeList(e.when,t),else:this.transformNode(e.else,t),isStatement:e.isStatement}}transformWhen(e,t){return{kind:`WhenNode`,condition:this.transformNode(e.condition,t),result:this.transformNode(e.result,t)}}transformJSONReference(e,t){return{kind:`JSONReferenceNode`,reference:this.transformNode(e.reference,t),traversal:this.transformNode(e.traversal,t)}}transformJSONPath(e,t){return{kind:`JSONPathNode`,inOperator:this.transformNode(e.inOperator,t),pathLegs:this.transformNodeList(e.pathLegs,t)}}transformJSONPathLeg(e,t){return{kind:`JSONPathLegNode`,type:e.type,value:e.value}}transformJSONOperatorChain(e,t){return{kind:`JSONOperatorChainNode`,operator:this.transformNode(e.operator,t),values:this.transformNodeList(e.values,t)}}transformTuple(e,t){return{kind:`TupleNode`,values:this.transformNodeList(e.values,t)}}transformMergeQuery(e,t){return{kind:`MergeQueryNode`,into:this.transformNode(e.into,t),using:this.transformNode(e.using,t),whens:this.transformNodeList(e.whens,t),with:this.transformNode(e.with,t),top:this.transformNode(e.top,t),endModifiers:this.transformNodeList(e.endModifiers,t),output:this.transformNode(e.output,t),returning:this.transformNode(e.returning,t)}}transformMatched(e,t){return{kind:`MatchedNode`,not:e.not,bySource:e.bySource}}transformAddIndex(e,t){return{kind:`AddIndexNode`,name:this.transformNode(e.name,t),columns:this.transformNodeList(e.columns,t),unique:e.unique,using:this.transformNode(e.using,t),ifNotExists:e.ifNotExists}}transformCast(e,t){return{kind:`CastNode`,expression:this.transformNode(e.expression,t),dataType:this.transformNode(e.dataType,t)}}transformFetch(e,t){return{kind:`FetchNode`,rowCount:this.transformNode(e.rowCount,t),modifier:e.modifier}}transformTop(e,t){return{kind:`TopNode`,expression:e.expression,modifiers:e.modifiers}}transformOutput(e,t){return{kind:`OutputNode`,selections:this.transformNodeList(e.selections,t)}}transformAlterType(e,t){return{kind:`AlterTypeNode`,name:this.transformNode(e.name,t),addValue:this.transformNode(e.addValue,t),renameTo:this.transformNode(e.renameTo,t),renameValue:this.transformNode(e.renameValue,t),setSchema:this.transformNode(e.setSchema,t)}}transformAddValue(e,t){return{kind:`AddValueNode`,value:this.transformNode(e.value,t),ifNotExists:e.ifNotExists,isBefore:e.isBefore,neighborValue:this.transformNode(e.neighborValue,t)}}transformRenameValue(e,t){return{kind:`RenameValueNode`,oldValue:this.transformNode(e.oldValue,t),newValue:this.transformNode(e.newValue,t)}}transformDataType(e,t){return e}transformSelectAll(e,t){return e}transformIdentifier(e,t){return e}transformValue(e,t){return e}transformPrimitiveValueList(e,t){return e}transformOperator(e,t){return e}transformDefaultInsertValue(e,t){return e}transformOrAction(e,t){return e}transformCollate(e,t){return e}};function gu(e){return ws(e)&&_s(e.kind)}let _u={AlterTableNode:!0,AlterTypeNode:!0,CreateIndexNode:!0,CreateSchemaNode:!0,CreateTableNode:!0,CreateTypeNode:!0,CreateViewNode:!0,DeleteQueryNode:!0,DropIndexNode:!0,DropSchemaNode:!0,DropTableNode:!0,DropTypeNode:!0,RefreshMaterializedViewNode:!0,DropViewNode:!0,InsertQueryNode:!0,RawNode:!0,SelectQueryNode:!0,UpdateQueryNode:!0,MergeQueryNode:!0};function vu(e){return gu(e)&&_u[e.kind]===!0}let yu=Y({json_agg:!0,to_json:!0});var bu=class extends hu{#e;#t=/* @__PURE__ */ new Set;#n=/* @__PURE__ */ new Set;constructor(e){super(),this.#e=e}transformNodeImpl(e,t){if(!vu(e))return super.transformNodeImpl(e,t);let n=this.#a(e);for(let e of n)this.#n.add(e);let r=this.#i(e);for(let e of r)this.#t.add(e);let i=super.transformNodeImpl(e,t);for(let e of r)this.#t.delete(e);for(let e of n)this.#n.delete(e);return i}transformSchemableIdentifier(e,t){let n=super.transformSchemableIdentifier(e,t);return n.schema||!this.#t.has(e.identifier.name)?n:{...n,schema:Z.create(this.#e)}}transformReferences(e,t){let n=super.transformReferences(e,t);return n.table.table.schema?n:{...n,table:Rs.createWithSchema(this.#e,n.table.table.identifier.name)}}transformAggregateFunction(e,t){return{...super.transformAggregateFunction({...e,aggregated:[]},t),aggregated:this.#r(e,t,`aggregated`)}}transformFunction(e,t){return{...super.transformFunction({...e,arguments:[]},t),arguments:this.#r(e,t,`arguments`)}}transformSelectModifier(e,t){return{...super.transformSelectModifier({...e,of:void 0},t),of:e.of?.map(e=>Rs.is(e)&&!e.table.schema?{...e,table:this.transformIdentifier(e.table.identifier,t)}:this.transformNode(e,t))}}#r(e,t,n){return yu[e.func]?e[n].map(e=>!Rs.is(e)||e.table.schema?this.transformNode(e,t):{...e,table:this.transformIdentifier(e.table.identifier,t)}):this.transformNodeList(e[n],t)}#i(e){let t=/* @__PURE__ */ new Set;if(`name`in e&&e.name&&Ns.is(e.name)&&this.#s(e.name,t),`from`in e&&e.from)for(let n of e.from.froms)this.#o(n,t);if(`into`in e&&e.into&&this.#o(e.into,t),`table`in e&&e.table&&this.#o(e.table,t),`joins`in e&&e.joins)for(let n of e.joins)this.#o(n.table,t);return`using`in e&&e.using&&(Ks.is(e.using)?this.#o(e.using.table,t):this.#o(e.using,t)),t}#a(e){let t=/* @__PURE__ */ new Set;return`with`in e&&e.with&&this.#c(e.with,t),t}#o(e,t){if(Rs.is(e))return this.#s(e.table,t);if(Ls.is(e)&&Rs.is(e.node))return this.#s(e.node.table,t);if(cl.is(e))for(let n of e.items)this.#o(n,t);else if(ul.is(e))for(let n of e.tables)this.#o(n,t)}#s(e,t){let n=e.identifier.name;!this.#t.has(n)&&!this.#n.has(n)&&t.add(n)}#c(e,t){for(let n of e.expressions){let e=n.name.table.table.identifier.name;this.#n.has(e)||t.add(e)}}},xu=class{#e;constructor(e){this.#e=new bu(e)}transformQuery(e){return this.#e.transformNode(e.node,e.queryId)}async transformResult(e){return e.result}};let Su=Y({is(e){return e.kind===`MatchedNode`},create(e,t=!1){return Y({kind:`MatchedNode`,not:e,bySource:t})}});function Cu(e,t,n){return hl.create(Xc([Su.create(!e.isMatched,e.bySource),...t&&t.length>0?[t.length===3&&n?Jc(t[0],t[1],t[2]):Kc(t)]:[]],`and`,!1))}function wu(e){return _s(e)?pc.create([e],[]):zs(e)?e.toOperationNode():e}var Tu=class{#e;#t;#n;constructor(){this.#e=new Promise((e,t)=>{this.#n=t,this.#t=e})}get promise(){return this.#e}resolve=e=>{this.#t?.(e),this.#t=this.#n=void 0};reject=e=>{this.#n?.(e),this.#n=this.#t=void 0}};async function Eu(e,t){let n=new Tu,r=new Tu;return e.provideConnection(async e=>(n.resolve(e),await r.promise),t).catch(e=>n.reject(e)),Y({connection:await n.promise,release:r.resolve})}function Du(e=`ignore query`,t,n){if(e!==`ignore query`){if(e===`cancel query`){let r=t.cancelQuery;return r||(n(),Ou(e,t.killSession?`kill session`:void 0)),r.bind(t)}if(e===`kill session`){let r=t.killSession;return r||(n(),Ou(e,t.cancelQuery?`cancel query`:void 0)),r.bind(t)}throw n(),Error(`Unexpected \`inflightQueryAbortStrategy\`: "${e}"`)}}function Ou(e,t){throw Error(`This dialect doesn't support \`inflightQueryAbortStrategy\` "${e}". Use "ignore query"${t?` or "${t}"`:``} instead.`)}function ku(e,t,n){e?.aborted&&(n?.(),Au(e.reason,t))}function Au(e,t){throw Pu(e,t),e}let ju={};async function Mu(e,t,n,r){if(!t)return e;ku(t,`before ${n}`,r);let{promise:i,resolve:a}=new Tu,o=()=>a(ju);t.addEventListener(`abort`,o);try{ku(t,`before ${n}`,r);let a=await Promise.race([e,i]);if(a!==ju)return a;r?.(),Au(t.reason,`during ${n}`)}finally{t.removeEventListener(`abort`,o),a(ju)}}function Nu(e){return t=>console.error(`\`${e}\` failed in the background after abortion: ${Os(t)}`)}function Pu(e,t){typeof e==`object`&&e&&!Object.isFrozen(e)&&Object.defineProperty(e,"__kysely_timing__",{configurable:!0,enumerable:!1,value:t,writable:!1})}let Fu=Y([]);var Iu=class{#e;constructor(e=Fu){this.#e=e}get plugins(){return this.#e}transformQuery(e,t){for(let n of this.#e){let r=n.transformQuery({node:e,queryId:t});if(r.kind===e.kind)e=r;else throw Error([`KyselyPlugin.transformQuery must return a node`,`of the same kind that was given to it.`,`The plugin was given a ${e.kind}`,`but it returned a ${r.kind}`].join(` `))}return e}async executeQuery(e,t){let{inflightQueryAbortStrategy:n=`ignore query`,signal:r}=t||{};if(!r){let n=await this.provideConnection(async t=>await t.executeQuery(e),t);return await this.#t(n,e.queryId)}ku(r,`before query execution`),t=Y({signal:r});let{connection:i,release:a}=await Eu(this,t),o=this.provideConnection.bind(this),{promise:s,resolve:c}=new Tu,l=()=>c(ju);r.addEventListener(`abort`,l,{once:!0});try{ku(r,`before query execution`,a);let c=Du(n,i,a);if(c&&i.collectSessionInfo){ku(r,`before query execution`,a);let e=i.collectSessionInfo();await Promise.race([s,e]).catch(e=>{throw a(),e})===ju&&(e.catch(Nu(`collectSessionInfo`)).finally(a),Au(r.reason,`before query execution`))}let l=i.executeQuery(e,t),u=await Promise.race([s,l]).catch(e=>{throw a(),e});u===ju?(Promise.allSettled([l.catch(Nu(`query`)),c?.(o).catch(Nu(`inflightQueryAbortHandler`))]).finally(a),Au(r.reason,`during query execution`)):a();let d=this.#t(u,e.queryId,t),f=await Promise.race([s,d]);return f===ju&&(d.catch(Nu(`plugins.transformResult`)),Au(r.reason,`during result transformation`)),f}finally{c(ju),r.removeEventListener(`abort`,l)}}async*stream(e,t,n){let{signal:r}=n||{};if(!r){let{connection:r,release:i}=await Eu(this);try{for await(let i of r.streamQuery(e,t))yield await this.#t(i,e.queryId,n)}finally{i()}return}n=Y({signal:r}),ku(r,`before connection acquisition`);let{connection:i,release:a}=await Eu(this,n),{promise:o,resolve:s}=new Tu,c=()=>s(ju);r.addEventListener(`abort`,c,{once:!0});let l,u;ku(r,`before query streaming`,a);let{queryId:d}=e;try{for(l=i.streamQuery(e,t,n);;){ku(r,`during query streaming`);let e=l.next(),t=await Promise.race([o,e]);if(t===ju&&(u=e.catch(Nu(`iterator.next`)),Au(r.reason,`during query streaming`)),t.done)break;let i=this.#t(t.value,d,n),a=await Promise.race([o,i]);a===ju&&(u=i.catch(Nu(`plugins.transformResult`)),Au(r.reason,`during result transformation`)),yield a}}finally{s(ju),r.removeEventListener(`abort`,c);let e=(l?.return?.()||Promise.resolve()).finally(()=>u).finally(a);u||await e}}async#t(e,t,n){let{signal:r}=n||{};for(let n of this.#e)e=await n.transformResult(Y({queryId:t,result:e,signal:r}));return e}};let Lu=new class e extends Iu{get adapter(){throw Error(`this query cannot be compiled to SQL`)}compileQuery(){throw Error(`this query cannot be compiled to SQL`)}provideConnection(){throw Error(`this query cannot be executed`)}withConnectionProvider(){throw Error(`this query cannot have a connection provider`)}withPlugin(t){return new e([...this.plugins,t])}withPlugins(t){return new e([...this.plugins,...t])}withPluginAtFront(t){return new e([t,...this.plugins])}withoutPlugins(){return new e([])}};var Ru=class{numChangedRows;constructor(e){this.numChangedRows=e}},zu=class e{#e;constructor(e){this.#e=Y(e)}modifyEnd(t){return new e({...this.#e,queryNode:Q.cloneWithEndModifier(this.#e.queryNode,t.toOperationNode())})}top(t,n){return new e({...this.#e,queryNode:Q.cloneWithTop(this.#e.queryNode,Kl(t,n))})}using(...e){return new Bu({...this.#e,queryNode:gl.cloneWithUsing(this.#e.queryNode,qu(`Using`,e))})}returning(t){return new e({...this.#e,queryNode:Q.cloneWithReturning(this.#e.queryNode,wl(t))})}returningAll(t){return new e({...this.#e,queryNode:Q.cloneWithReturning(this.#e.queryNode,El(t))})}output(t){return new e({...this.#e,queryNode:Q.cloneWithOutput(this.#e.queryNode,wl(t))})}outputAll(t){return new e({...this.#e,queryNode:Q.cloneWithOutput(this.#e.queryNode,El(t))})}},Bu=class e{#e;constructor(e){this.#e=Y(e)}modifyEnd(t){return new e({...this.#e,queryNode:Q.cloneWithEndModifier(this.#e.queryNode,t.toOperationNode())})}top(t,n){return new e({...this.#e,queryNode:Q.cloneWithTop(this.#e.queryNode,Kl(t,n))})}whenMatched(){return this.#t([])}whenMatchedAnd(...e){return this.#t(e)}whenMatchedAndRef(e,t,n){return this.#t([e,t,n],!0)}#t(e,t){return new Vu({...this.#e,queryNode:gl.cloneWithWhen(this.#e.queryNode,Cu({isMatched:!0},e,t))})}whenNotMatched(){return this.#n([])}whenNotMatchedAnd(...e){return this.#n(e)}whenNotMatchedAndRef(e,t,n){return this.#n([e,t,n],!0)}whenNotMatchedBySource(){return this.#n([],!1,!0)}whenNotMatchedBySourceAnd(...e){return this.#n(e,!1,!0)}whenNotMatchedBySourceAndRef(e,t,n){return this.#n([e,t,n],!0,!0)}returning(t){return new e({...this.#e,queryNode:Q.cloneWithReturning(this.#e.queryNode,wl(t))})}returningAll(t){return new e({...this.#e,queryNode:Q.cloneWithReturning(this.#e.queryNode,El(t))})}output(t){return new e({...this.#e,queryNode:Q.cloneWithOutput(this.#e.queryNode,wl(t))})}outputAll(t){return new e({...this.#e,queryNode:Q.cloneWithOutput(this.#e.queryNode,El(t))})}#n(e,t=!1,n=!1){let r={...this.#e,queryNode:gl.cloneWithWhen(this.#e.queryNode,Cu({isMatched:!1,bySource:n},e,t))};return new(n?Vu:Hu)(r)}$call(e){return e(this)}$if(t,n){return t?n(this):new e({...this.#e})}toOperationNode(){return this.#e.executor.transformQuery(this.#e.queryNode,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){let t=this.compile(),n=await this.#e.executor.executeQuery(t,e),{adapter:r}=this.#e.executor,i=t.query;return i.returning&&r.supportsReturning||i.output&&r.supportsOutput?n.rows:[new Ru(n.numAffectedRows)]}async executeTakeFirst(e){let[t]=await this.execute(e);return t}async executeTakeFirstOrThrow(e){typeof e==`function`&&(e={errorConstructor:e});let t=await this.executeTakeFirst(e);if(t===void 0){let t=e?.errorConstructor??zl;throw Bl(t)?new t(this.toOperationNode()):t(this.toOperationNode())}return t}},Vu=class{#e;constructor(e){this.#e=Y(e)}thenDelete(){return new Bu({...this.#e,queryNode:gl.cloneWithThen(this.#e.queryNode,wu(`delete`))})}thenDoNothing(){return new Bu({...this.#e,queryNode:gl.cloneWithThen(this.#e.queryNode,wu(`do nothing`))})}thenUpdate(e){return new Bu({...this.#e,queryNode:gl.cloneWithThen(this.#e.queryNode,wu(e(new nu({queryId:this.#e.queryId,executor:Lu,queryNode:ll.createWithoutTable()}))))})}thenUpdateSet(...e){return this.thenUpdate(t=>t.set(...e))}},Hu=class{#e;constructor(e){this.#e=Y(e)}thenDoNothing(){return new Bu({...this.#e,queryNode:gl.cloneWithThen(this.#e.queryNode,wu(`do nothing`))})}thenInsertValues(e){let[t,n]=Al(e);return new Bu({...this.#e,queryNode:gl.cloneWithThen(this.#e.queryNode,wu(sl.cloneWith(sl.createWithoutInto(),{columns:t,values:n})))})}},Uu=class e{#e;constructor(e){this.#e=Y(e)}selectFrom(e){return ud({queryId:pu(),executor:this.#e.executor,queryNode:vl.createFrom(Wd(e),this.#e.withNode)})}selectNoFrom(e){return ud({queryId:pu(),executor:this.#e.executor,queryNode:vl.cloneWithSelections(vl.create(this.#e.withNode),wl(e))})}insertInto(e){return new Yl({queryId:pu(),executor:this.#e.executor,queryNode:sl.create(qd(e),this.#e.withNode)})}replaceInto(e){return new Yl({queryId:pu(),executor:this.#e.executor,queryNode:sl.create(qd(e),this.#e.withNode,!0)})}deleteFrom(e){return new $l({queryId:pu(),executor:this.#e.executor,queryNode:dl.create(Wd(e),this.#e.withNode)})}updateTable(e){return new nu({queryId:pu(),executor:this.#e.executor,queryNode:ll.create(Wd(e),this.#e.withNode)})}mergeInto(e){return new zu({queryId:pu(),executor:this.#e.executor,queryNode:gl.create(Kd(e),this.#e.withNode)})}with(t,n){let r=ou(t,n);return new e({...this.#e,withNode:this.#e.withNode?lu.cloneWithExpression(this.#e.withNode,r):lu.create(r)})}withRecursive(t,n){let r=ou(t,n);return new e({...this.#e,withNode:this.#e.withNode?lu.cloneWithExpression(this.#e.withNode,r):lu.create(r,{recursive:!0})})}withPlugin(t){return new e({...this.#e,executor:this.#e.executor.withPlugin(t)})}withoutPlugins(){return new e({...this.#e,executor:this.#e.executor.withoutPlugins()})}withSchema(t){return new e({...this.#e,executor:this.#e.executor.withPluginAtFront(new xu(t))})}};function Wu(){return new Uu({executor:Lu})}function Gu(e,t){return new yl({joinNode:Ks.create(e,Gd(t))})}function Ku(){return new Sl({overNode:rl.create()})}function qu(e,t){if(t.length===3)return Yu(e,t[0],t[1],t[2]);if(t.length===2)return Ju(e,t[0],t[1]);if(t.length===1)return Xu(e,t[0]);throw Error(`not implemented`)}function Ju(e,t,n){return n(Gu(e,t)).toOperationNode()}function Yu(e,t,n,r){return Ks.createWithOn(e,Gd(t),Jc(n,`=`,r))}function Xu(e,t){return Ks.create(e,Gd(t))}let Zu=Y({is(e){return e.kind===`OffsetNode`},create(e){return Y({kind:`OffsetNode`,offset:e})}}),Qu=Y({is(e){return e.kind===`GroupByItemNode`},create(e){return Y({kind:`GroupByItemNode`,groupBy:e})}});function $u(e){return e=Cs(e)?e(Ld()):e,Dc(e).map(Qu.create)}let ed=Y({is(e){return e.kind===`SetOperationNode`},create(e,t,n){return Y({kind:`SetOperationNode`,operator:e,expression:t,all:n})}});function td(e,t,n){return Cs(t)&&(t=t(Id())),Es(t)||(t=[t]),t.map(t=>ed.create(e,Rd(t),n))}var nd=class e{#e;constructor(e){this.#e=e}get expressionType(){}as(e){return new rd(this,e)}or(...e){return new id(Ws.create(this.#e,Kc(e)))}and(...e){return new ad(Us.create(this.#e,Kc(e)))}$castTo(){return new e(this.#e)}$notNull(){return new e(this.#e)}toOperationNode(){return this.#e}},rd=class{#e;#t;constructor(e,t){this.#e=e,this.#t=t}get expression(){return this.#e}get alias(){return this.#t}toOperationNode(){return Ls.create(this.#e.toOperationNode(),zs(this.#t)?this.#t.toOperationNode():Z.create(this.#t))}},id=class e{#e;constructor(e){this.#e=e}get expressionType(){}as(e){return new rd(this,e)}or(...t){return new e(Ws.create(this.#e,Kc(t)))}$castTo(){return new e(this.#e)}toOperationNode(){return Gc.create(this.#e)}},ad=class e{#e;constructor(e){this.#e=e}get expressionType(){}as(e){return new rd(this,e)}and(...t){return new e(Us.create(this.#e,Kc(t)))}$castTo(){return new e(this.#e)}toOperationNode(){return Gc.create(this.#e)}};let od=Y({is(e){return e.kind===`FetchNode`},create(e,t){return{kind:`FetchNode`,rowCount:zc.create(e),modifier:t}}});function sd(e,t){if(!vs(e)&&!Ss(e))throw Error(`Invalid fetch row count: ${e}`);if(!cd(t))throw Error(`Invalid fetch modifier: ${t}`);return od.create(e,t)}function cd(e){return e===`only`||e===`with ties`}var $,ld=class{#e;constructor(e){this.#e=Y(e)}get expressionType(){}get isSelectQueryBuilder(){return!0}where(...e){return new $({...this.#e,queryNode:Q.cloneWithWhere(this.#e.queryNode,Kc(e))})}whereRef(e,t,n){return new $({...this.#e,queryNode:Q.cloneWithWhere(this.#e.queryNode,Jc(e,t,n))})}having(...e){return new $({...this.#e,queryNode:vl.cloneWithHaving(this.#e.queryNode,Kc(e))})}havingRef(e,t,n){return new $({...this.#e,queryNode:vl.cloneWithHaving(this.#e.queryNode,Jc(e,t,n))})}select(e){return new $({...this.#e,queryNode:vl.cloneWithSelections(this.#e.queryNode,wl(e))})}distinctOn(e){return new $({...this.#e,queryNode:vl.cloneWithDistinctOn(this.#e.queryNode,Dc(e))})}modifyFront(e){return new $({...this.#e,queryNode:vl.cloneWithFrontModifier(this.#e.queryNode,Hs.createWithExpression(e.toOperationNode()))})}modifyEnd(e){return new $({...this.#e,queryNode:Q.cloneWithEndModifier(this.#e.queryNode,Hs.createWithExpression(e.toOperationNode()))})}distinct(){return new $({...this.#e,queryNode:vl.cloneWithFrontModifier(this.#e.queryNode,Hs.create(`Distinct`))})}forUpdate(e){return new $({...this.#e,queryNode:Q.cloneWithEndModifier(this.#e.queryNode,Hs.create(`ForUpdate`,e?Ts(e).map(qd):void 0))})}forShare(e){return new $({...this.#e,queryNode:Q.cloneWithEndModifier(this.#e.queryNode,Hs.create(`ForShare`,e?Ts(e).map(qd):void 0))})}forKeyShare(e){return new $({...this.#e,queryNode:Q.cloneWithEndModifier(this.#e.queryNode,Hs.create(`ForKeyShare`,e?Ts(e).map(qd):void 0))})}forNoKeyUpdate(e){return new $({...this.#e,queryNode:Q.cloneWithEndModifier(this.#e.queryNode,Hs.create(`ForNoKeyUpdate`,e?Ts(e).map(qd):void 0))})}skipLocked(){return new $({...this.#e,queryNode:Q.cloneWithEndModifier(this.#e.queryNode,Hs.create(`SkipLocked`))})}noWait(){return new $({...this.#e,queryNode:Q.cloneWithEndModifier(this.#e.queryNode,Hs.create(`NoWait`))})}selectAll(e){return new $({...this.#e,queryNode:vl.cloneWithSelections(this.#e.queryNode,El(e))})}innerJoin(...e){return this.#t(`InnerJoin`,e)}leftJoin(...e){return this.#t(`LeftJoin`,e)}rightJoin(...e){return this.#t(`RightJoin`,e)}fullJoin(...e){return this.#t(`FullJoin`,e)}crossJoin(...e){return this.#t(`CrossJoin`,e)}innerJoinLateral(...e){return this.#t(`LateralInnerJoin`,e)}leftJoinLateral(...e){return this.#t(`LateralLeftJoin`,e)}crossJoinLateral(...e){return this.#t(`LateralCrossJoin`,e)}crossApply(...e){return this.#t(`CrossApply`,e)}outerApply(...e){return this.#t(`OuterApply`,e)}#t(e,t){return new $({...this.#e,queryNode:Q.cloneWithJoin(this.#e.queryNode,qu(e,t))})}orderBy(...e){return new $({...this.#e,queryNode:Q.cloneWithOrderByItems(this.#e.queryNode,yc(e))})}groupBy(e){return new $({...this.#e,queryNode:vl.cloneWithGroupByItems(this.#e.queryNode,$u(e))})}limit(e){return new $({...this.#e,queryNode:vl.cloneWithLimit(this.#e.queryNode,Zl.create(Vc(e)))})}offset(e){return new $({...this.#e,queryNode:vl.cloneWithOffset(this.#e.queryNode,Zu.create(Vc(e)))})}fetch(e,t=`only`){return new $({...this.#e,queryNode:vl.cloneWithFetch(this.#e.queryNode,sd(e,t))})}top(e,t){return new $({...this.#e,queryNode:Q.cloneWithTop(this.#e.queryNode,Kl(e,t))})}union(e){return new $({...this.#e,queryNode:vl.cloneWithSetOperations(this.#e.queryNode,td(`union`,e,!1))})}unionAll(e){return new $({...this.#e,queryNode:vl.cloneWithSetOperations(this.#e.queryNode,td(`union`,e,!0))})}intersect(e){return new $({...this.#e,queryNode:vl.cloneWithSetOperations(this.#e.queryNode,td(`intersect`,e,!1))})}intersectAll(e){return new $({...this.#e,queryNode:vl.cloneWithSetOperations(this.#e.queryNode,td(`intersect`,e,!0))})}except(e){return new $({...this.#e,queryNode:vl.cloneWithSetOperations(this.#e.queryNode,td(`except`,e,!1))})}exceptAll(e){return new $({...this.#e,queryNode:vl.cloneWithSetOperations(this.#e.queryNode,td(`except`,e,!0))})}as(e){return new dd(this,e)}clearSelect(){return new $({...this.#e,queryNode:vl.cloneWithoutSelections(this.#e.queryNode)})}clearWhere(){return new $({...this.#e,queryNode:Q.cloneWithoutWhere(this.#e.queryNode)})}clearLimit(){return new $({...this.#e,queryNode:vl.cloneWithoutLimit(this.#e.queryNode)})}clearOffset(){return new $({...this.#e,queryNode:vl.cloneWithoutOffset(this.#e.queryNode)})}clearOrderBy(){return new $({...this.#e,queryNode:Q.cloneWithoutOrderBy(this.#e.queryNode)})}clearGroupBy(){return new $({...this.#e,queryNode:vl.cloneWithoutGroupBy(this.#e.queryNode)})}$call(e){return e(this)}$if(e,t){return e?t(this):new $({...this.#e})}$castTo(){return new $(this.#e)}$narrowType(){return new $(this.#e)}$assertType(){return new $(this.#e)}$asTuple(){return new nd(this.toOperationNode())}$asScalar(){return new nd(this.toOperationNode())}withPlugin(e){return new $({...this.#e,executor:this.#e.executor.withPlugin(e)})}toOperationNode(){return this.#e.executor.transformQuery(this.#e.queryNode,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){let t=this.compile();return(await this.#e.executor.executeQuery(t,e)).rows}async executeTakeFirst(e){let[t]=await this.execute(e);return t}async executeTakeFirstOrThrow(e){typeof e==`function`&&(e={errorConstructor:e});let t=await this.executeTakeFirst(e);if(t===void 0){let t=e?.errorConstructor??zl;throw Bl(t)?new t(this.toOperationNode()):t(this.toOperationNode())}return t}async*stream(e){typeof e!=`object`&&(e={chunkSize:e});let t=this.compile(),n=this.#e.executor.stream(t,e.chunkSize??100,e);for await(let e of n)yield*e.rows}async explain(e,t){return await new $({...this.#e,queryNode:Q.cloneWithExplain(this.#e.queryNode,e,t)}).execute()}};$=ld;function ud(e){return new ld(e)}var dd=class{#e;#t;constructor(e,t){this.#e=e,this.#t=t}get expression(){return this.#e}get alias(){return this.#t}get isAliasedSelectQueryBuilder(){return!0}toOperationNode(){return Ls.create(this.#e.toOperationNode(),Z.create(this.#t))}};let fd=Y({is(e){return e.kind===`AggregateFunctionNode`},create(e,t=[]){return Y({kind:`AggregateFunctionNode`,func:e,aggregated:t})},cloneWithDistinct(e){return Y({...e,distinct:!0})},cloneWithOrderBy(e,t,n=!1){let r=n?`withinGroup`:`orderBy`;return Y({...e,[r]:e[r]?tl.cloneWithItems(e[r],t):tl.create(t)})},cloneWithFilter(e,t){return Y({...e,filter:e.filter?fl.cloneWithOperation(e.filter,`And`,t):fl.create(t)})},cloneWithOrFilter(e,t){return Y({...e,filter:e.filter?fl.cloneWithOperation(e.filter,`Or`,t):fl.create(t)})},cloneWithOver(e,t){return Y({...e,over:t})}}),pd=Y({is(e){return e.kind===`FunctionNode`},create(e,t){return Y({kind:`FunctionNode`,func:e,arguments:t})}});var md=class e{#e;constructor(e){this.#e=Y(e)}get expressionType(){}as(e){return new hd(this,e)}distinct(){return new e({...this.#e,aggregateFunctionNode:fd.cloneWithDistinct(this.#e.aggregateFunctionNode)})}orderBy(...t){return new e({...this.#e,aggregateFunctionNode:Q.cloneWithOrderByItems(this.#e.aggregateFunctionNode,yc(t))})}clearOrderBy(){return new e({...this.#e,aggregateFunctionNode:Q.cloneWithoutOrderBy(this.#e.aggregateFunctionNode)})}withinGroupOrderBy(...t){return new e({...this.#e,aggregateFunctionNode:fd.cloneWithOrderBy(this.#e.aggregateFunctionNode,yc(t),!0)})}filterWhere(...t){return new e({...this.#e,aggregateFunctionNode:fd.cloneWithFilter(this.#e.aggregateFunctionNode,Kc(t))})}filterWhereRef(t,n,r){return new e({...this.#e,aggregateFunctionNode:fd.cloneWithFilter(this.#e.aggregateFunctionNode,Jc(t,n,r))})}over(t){let n=Ku();return new e({...this.#e,aggregateFunctionNode:fd.cloneWithOver(this.#e.aggregateFunctionNode,(t?t(n):n).toOperationNode())})}$call(e){return e(this)}$castTo(){return new e(this.#e)}$notNull(){return new e(this.#e)}toOperationNode(){return this.#e.aggregateFunctionNode}},hd=class{#e;#t;constructor(e,t){this.#e=e,this.#t=t}get expression(){return this.#e}get alias(){return this.#t}toOperationNode(){return Ls.create(this.#e.toOperationNode(),Z.create(this.#t))}};function gd(){let e=(e,t)=>new nd(pd.create(e,Dc(t??[]))),t=(e,t)=>new md({aggregateFunctionNode:fd.create(e,t?Dc(t):void 0)});return Object.assign(e,{agg:t,avg(e){return t(`avg`,[e])},coalesce(...t){return e(`coalesce`,t)},count(e){return t(`count`,[e])},countAll(e){return new md({aggregateFunctionNode:fd.create(`count`,El(e))})},max(e){return t(`max`,[e])},min(e){return t(`min`,[e])},sum(e){return t(`sum`,[e])},any(t){return e(`any`,[t])},jsonAgg(e){return new md({aggregateFunctionNode:fd.create(`json_agg`,[_s(e)?qd(e):e.toOperationNode()])})},toJson(e){return new nd(pd.create(`to_json`,[_s(e)?qd(e):e.toOperationNode()]))}})}let _d=Y({is(e){return e.kind===`UnaryOperationNode`},create(e,t){return Y({kind:`UnaryOperationNode`,operator:e,operand:t})}});function vd(e,t){if(oc(e))return _d.create(rc.create(e),Oc(t));throw Error(`invalid unary operator ${JSON.stringify(e)}`)}let yd=Y({is(e){return e.kind===`CaseNode`},create(e){return Y({kind:`CaseNode`,value:e})},cloneWithWhen(e,t){return Y({...e,when:Y(e.when?[...e.when,t]:[t])})},cloneWithThen(e,t){return Y({...e,when:e.when?Y([...e.when.slice(0,-1),hl.cloneWithResult(e.when[e.when.length-1],t)]):void 0})},cloneWith(e,t){return Y({...e,...t})}});var bd=class{#e;constructor(e){this.#e=Y(e)}when(...e){return new xd({...this.#e,node:yd.cloneWithWhen(this.#e.node,hl.create(Kc(e)))})}whenRef(e,t,n){return new xd({...this.#e,node:yd.cloneWithWhen(this.#e.node,hl.create(Jc(e,t,n)))})}},xd=class{#e;constructor(e){this.#e=Y(e)}then(e){return new Sd({...this.#e,node:yd.cloneWithThen(this.#e.node,Hc(e)?Uc(e):Vc(e))})}thenRef(e){return new Sd({...this.#e,node:yd.cloneWithThen(this.#e.node,Oc(e))})}},Sd=class{#e;constructor(e){this.#e=Y(e)}when(...e){return new xd({...this.#e,node:yd.cloneWithWhen(this.#e.node,hl.create(Kc(e)))})}whenRef(e,t,n){return new xd({...this.#e,node:yd.cloneWithWhen(this.#e.node,hl.create(Jc(e,t,n)))})}else(e){return new Cd({...this.#e,node:yd.cloneWith(this.#e.node,{else:Hc(e)?Uc(e):Vc(e)})})}elseRef(e){return new Cd({...this.#e,node:yd.cloneWith(this.#e.node,{else:Oc(e)})})}end(){return new nd(yd.cloneWith(this.#e.node,{isStatement:!1}))}endCase(){return new nd(yd.cloneWith(this.#e.node,{isStatement:!0}))}},Cd=class{#e;constructor(e){this.#e=Y(e)}end(){return new nd(yd.cloneWith(this.#e.node,{isStatement:!1}))}endCase(){return new nd(yd.cloneWith(this.#e.node,{isStatement:!0}))}};let wd=Y({is(e){return e.kind===`JSONPathLegNode`},create(e,t){return Y({kind:`JSONPathLegNode`,type:e,value:t})}}),Td=/^#-\d+$/;var Ed=class{#e;constructor(e){this.#e=e}at(e){if(typeof e!=`number`&&typeof e!=`string`||typeof e==`number`&&!Number.isInteger(e)||typeof e==`string`&&e!==`last`&&!Td.test(e))throw Error(`Unexpected index value in .at(...): ${e}`);return this.#t(`ArrayLocation`,e)}key(e){return this.#t(`Member`,e)}#t(e,t){return Cc.is(this.#e)?new Dd(Cc.cloneWithTraversal(this.#e,Tc.is(this.#e.traversal)?Tc.cloneWithLeg(this.#e.traversal,wd.create(e,t)):wc.cloneWithValue(this.#e.traversal,zc.createImmediate(t)))):new Dd(Tc.cloneWithLeg(this.#e,wd.create(e,t)))}},Dd=class e extends Ed{#e;constructor(e){super(e),this.#e=e}get expressionType(){}as(e){return new Od(this,e)}$castTo(){return new e(this.#e)}$notNull(){return new e(this.#e)}toOperationNode(){return this.#e}},Od=class{#e;#t;constructor(e,t){this.#e=e,this.#t=t}get expression(){return this.#e}get alias(){return this.#t}toOperationNode(){return Ls.create(this.#e.toOperationNode(),zs(this.#t)?this.#t.toOperationNode():Z.create(this.#t))}};let kd=Y({is(e){return e.kind===`TupleNode`},create(e){return Y({kind:`TupleNode`,values:Y(e)})}}),Ad=Y({bigint:!0,bigserial:!0,binary:!0,blob:!0,boolean:!0,bytea:!0,char:!0,date:!0,datemultirange:!0,daterange:!0,datetime:!0,datetime2:!0,decimal:!0,"double precision":!0,float4:!0,float8:!0,int2:!0,int4:!0,int4multirange:!0,int4range:!0,int8:!0,int8multirange:!0,int8range:!0,integer:!0,json:!0,jsonb:!0,numeric:!0,nummultirange:!0,numrange:!0,real:!0,serial:!0,smallint:!0,text:!0,time:!0,timestamp:!0,timestamptz:!0,timetz:!0,tsmultirange:!0,tsrange:!0,tstzmultirange:!0,tstzrange:!0,uuid:!0,varbinary:!0,varchar:!0}),jd=Y([/^varchar\(\d+\)$/,/^char\(\d+\)$/,/^decimal\(\d+, \d+\)$/,/^numeric\(\d+, \d+\)$/,/^binary\(\d+\)$/,/^datetime\(\d+\)$/,/^time\(\d+\)$/,/^timetz\(\d+\)$/,/^timestamp\(\d+\)$/,/^timestamptz\(\d+\)$/,/^datetime2\(\d+\)$/,/^varbinary\(\d+\)$/]),Md=Y({is(e){return e.kind===`DataTypeNode`},create(e){return Y({kind:`DataTypeNode`,dataType:e})}});function Nd(e){return Ad[e]||jd.some(t=>t.test(e))}function Pd(e){if(zs(e))return e.toOperationNode();if(Nd(e))return Md.create(e);throw Error(`invalid column data type ${JSON.stringify(e)}`)}let Fd=Y({is(e){return e.kind===`CastNode`},create(e,t){return Y({kind:`CastNode`,expression:e,dataType:t})}});function Id(e=Lu){function t(e,t,n){return new nd(qc(e,t,n))}function n(e,t){return new nd(vd(e,t))}let r=Object.assign(t,{fn:void 0,eb:void 0,selectFrom(t){return ud({queryId:pu(),executor:e,queryNode:vl.createFrom(Wd(t))})},case(e){return new bd({node:yd.create(gs(e)?void 0:Oc(e))})},ref(e,t){return gs(t)?new nd(Ac(e)):new Ed(kc(e,t))},jsonPath(){return new Ed(Tc.create())},table(e){return new nd(qd(e))},val(e){return new nd(Vc(e))},refTuple(...e){return new nd(kd.create(e.map(Oc)))},tuple(...e){return new nd(kd.create(e.map(Vc)))},lit(e){return new nd(Uc(e))},unary:n,not(e){return n(`not`,e)},exists(e){return n(`exists`,e)},neg(e){return n(`-`,e)},between(e,t,n){return new nd(qs.create(Oc(e),rc.create(`between`),Us.create(Vc(t),Vc(n))))},betweenSymmetric(e,t,n){return new nd(qs.create(Oc(e),rc.create(`between symmetric`),Us.create(Vc(t),Vc(n))))},and(e){return Es(e)?new nd(Xc(e,`and`)):new nd(Yc(e,`and`))},or(e){return Es(e)?new nd(Xc(e,`or`)):new nd(Yc(e,`or`))},parens(...e){let t=Kc(e);return Gc.is(t)?new nd(t):new nd(Gc.create(t))},cast(e,t){return new nd(Fd.create(Oc(e),Pd(t)))}});return r.fn=gd(),r.eb=r,r}function Ld(e){return Id()}function Rd(e){if(zs(e))return e.toOperationNode();if(Cs(e))return e(Ld()).toOperationNode();throw Error(`invalid expression: ${JSON.stringify(e)}`)}function zd(e){if(zs(e))return e.toOperationNode();if(Cs(e))return e(Ld()).toOperationNode();throw Error(`invalid aliased expression: ${JSON.stringify(e)}`)}function Bd(e){return Bs(e)||Vs(e)||Cs(e)}var Vd=class{#e;get table(){return this.#e}constructor(e){this.#e=e}as(e){return new Hd(this.#e,e)}},Hd=class{#e;#t;get table(){return this.#e}get alias(){return this.#t}constructor(e,t){this.#e=e,this.#t=t}toOperationNode(){return Ls.create(qd(this.#e),Z.create(this.#t))}};function Ud(e){return ws(e)&&zs(e)&&_s(e.table)&&_s(e.alias)}function Wd(e){return Es(e)?e.map(e=>Gd(e)):[Gd(e)]}function Gd(e){return _s(e)?Kd(e):Ud(e)?e.toOperationNode():zd(e)}function Kd(e){let t=` as `;if(e.includes(t)){let[n,r]=e.split(t).map(Jd);return Ls.create(qd(n),Z.create(r))}return qd(e)}function qd(e){if(e.includes(`.`)){let[t,n]=e.split(`.`).map(Jd);return Rs.createWithSchema(t,n)}return Rs.create(e)}function Jd(e){return e.trim()}let Yd=Y({is(e){return e.kind===`AddColumnNode`},create(e){return Y({kind:`AddColumnNode`,column:e})}}),Xd=Y({is(e){return e.kind===`ColumnDefinitionNode`},create(e,t){return Y({kind:`ColumnDefinitionNode`,column:sc.create(e),dataType:t})},cloneWithFrontModifier(e,t){return Y({...e,frontModifiers:e.frontModifiers?Y([...e.frontModifiers,t]):[t]})},cloneWithEndModifier(e,t){return Y({...e,endModifiers:e.endModifiers?Y([...e.endModifiers,t]):[t]})},cloneWith(e,t){return Y({...e,...t})}}),Zd=Y({is(e){return e.kind===`DropColumnNode`},create(e){return Y({kind:`DropColumnNode`,column:sc.create(e)})},cloneWith(e,t){return Y({...e,...t})}}),Qd=Y({is(e){return e.kind===`RenameColumnNode`},create(e,t){return Y({kind:`RenameColumnNode`,column:sc.create(e),renameTo:sc.create(t)})}}),$d=Y({is(e){return e.kind===`CheckConstraintNode`},create(e,t){return Y({kind:`CheckConstraintNode`,expression:e,name:t?Z.create(t):void 0})}}),ef=Y({cascade:!0,"no action":!0,restrict:!0,"set default":!0,"set null":!0});Object.keys(ef);let tf=Y({is(e){return e.kind===`ReferencesNode`},create(e,t){return Y({kind:`ReferencesNode`,table:e,columns:Y([...t])})},cloneWithOnDelete(e,t){return Y({...e,onDelete:t})},cloneWithOnUpdate(e,t){return Y({...e,onUpdate:t})}});function nf(e){return _s(e)&&ef[e]}function rf(e){return zs(e)?e.toOperationNode():zc.createImmediate(e)}let af=Y({is(e){return e.kind===`GeneratedNode`},create(e){return Y({kind:`GeneratedNode`,...e})},createWithExpression(e){return Y({kind:`GeneratedNode`,always:!0,expression:e})},cloneWith(e,t){return Y({...e,...t})}}),of=Y({is(e){return e.kind===`DefaultValueNode`},create(e){return Y({kind:`DefaultValueNode`,defaultValue:e})}});function sf(e){if(nf(e))return e;throw Error(`invalid OnModifyForeignAction ${e}`)}var cf=class e{#e;constructor(e){this.#e=e}autoIncrement(){return new e(Xd.cloneWith(this.#e,{autoIncrement:!0}))}identity(){return new e(Xd.cloneWith(this.#e,{identity:!0}))}primaryKey(){return new e(Xd.cloneWith(this.#e,{primaryKey:!0}))}references(t){let n=Ac(t);if(!n.table||cc.is(n.column))throw Error(`invalid call references('${t}'). The reference must have format table.column or schema.table.column`);return new e(Xd.cloneWith(this.#e,{references:tf.create(n.table,[n.column])}))}onDelete(t){if(!this.#e.references)throw Error(`on delete constraint can only be added for foreign keys`);return new e(Xd.cloneWith(this.#e,{references:tf.cloneWithOnDelete(this.#e.references,sf(t))}))}onUpdate(t){if(!this.#e.references)throw Error(`on update constraint can only be added for foreign keys`);return new e(Xd.cloneWith(this.#e,{references:tf.cloneWithOnUpdate(this.#e.references,sf(t))}))}unique(){return new e(Xd.cloneWith(this.#e,{unique:!0}))}notNull(){return new e(Xd.cloneWith(this.#e,{notNull:!0}))}unsigned(){return new e(Xd.cloneWith(this.#e,{unsigned:!0}))}defaultTo(t){return new e(Xd.cloneWith(this.#e,{defaultTo:of.create(rf(t))}))}check(t){return new e(Xd.cloneWith(this.#e,{check:$d.create(t.toOperationNode())}))}generatedAlwaysAs(t){return new e(Xd.cloneWith(this.#e,{generated:af.createWithExpression(t.toOperationNode())}))}generatedAlwaysAsIdentity(){return new e(Xd.cloneWith(this.#e,{generated:af.create({identity:!0,always:!0})}))}generatedByDefaultAsIdentity(){return new e(Xd.cloneWith(this.#e,{generated:af.create({identity:!0,byDefault:!0})}))}stored(){if(!this.#e.generated)throw Error(`stored() can only be called after generatedAlwaysAs`);return new e(Xd.cloneWith(this.#e,{generated:af.cloneWith(this.#e.generated,{stored:!0})}))}modifyFront(t){return new e(Xd.cloneWithFrontModifier(this.#e,t.toOperationNode()))}nullsNotDistinct(){return new e(Xd.cloneWith(this.#e,{nullsNotDistinct:!0}))}ifNotExists(){return new e(Xd.cloneWith(this.#e,{ifNotExists:!0}))}modifyEnd(t){return new e(Xd.cloneWithEndModifier(this.#e,t.toOperationNode()))}$call(e){return e(this)}toOperationNode(){return this.#e}};let lf=Y({is(e){return e.kind===`ModifyColumnNode`},create(e){return Y({kind:`ModifyColumnNode`,column:e})}}),uf=Y({is(e){return e.kind===`ForeignKeyConstraintNode`},create(e,t,n,r){return Y({kind:`ForeignKeyConstraintNode`,columns:e,references:tf.create(t,n),name:r?Z.create(r):void 0})},cloneWith(e,t){return Y({...e,...t})}});var df=class e{#e;constructor(e){this.#e=e}onDelete(t){return new e(uf.cloneWith(this.#e,{onDelete:sf(t)}))}onUpdate(t){return new e(uf.cloneWith(this.#e,{onUpdate:sf(t)}))}deferrable(){return new e(uf.cloneWith(this.#e,{deferrable:!0}))}notDeferrable(){return new e(uf.cloneWith(this.#e,{deferrable:!1}))}initiallyDeferred(){return new e(uf.cloneWith(this.#e,{initiallyDeferred:!0}))}initiallyImmediate(){return new e(uf.cloneWith(this.#e,{initiallyDeferred:!1}))}$call(e){return e(this)}toOperationNode(){return this.#e}};let ff=Y({is(e){return e.kind===`AddConstraintNode`},create(e){return Y({kind:`AddConstraintNode`,constraint:e})}}),pf=Y({is(e){return e.kind===`UniqueConstraintNode`},create(e,t,n){return _s(e.at(0))&&(_c("`UniqueConstraintNode.create(columns: string[], ...)` is deprecated - pass `ColumnNode[]` instead."),e=e.map(sc.create)),Y({kind:`UniqueConstraintNode`,columns:Y(e),name:t?Z.create(t):void 0,nullsNotDistinct:n})},cloneWith(e,t){return Y({...e,...t})}}),mf=Y({is(e){return e.kind===`DropConstraintNode`},create(e){return Y({kind:`DropConstraintNode`,constraintName:Z.create(e)})},cloneWith(e,t){return Y({...e,...t})}}),hf=Y({is(e){return e.kind===`AlterColumnNode`},create(e,t,n){return Y({kind:`AlterColumnNode`,column:sc.create(e),[t]:n})}});var gf=class{#e;constructor(e){this.#e=e}setDataType(e){return new _f(hf.create(this.#e,`dataType`,Pd(e)))}setDefault(e){return new _f(hf.create(this.#e,`setDefault`,rf(e)))}dropDefault(){return new _f(hf.create(this.#e,`dropDefault`,!0))}setNotNull(){return new _f(hf.create(this.#e,`setNotNull`,!0))}dropNotNull(){return new _f(hf.create(this.#e,`dropNotNull`,!0))}$call(e){return e(this)}},_f=class{#e;constructor(e){this.#e=e}toOperationNode(){return this.#e}},vf=class{#e;constructor(e){this.#e=Y(e)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}},yf=class e{#e;constructor(e){this.#e=Y(e)}onDelete(t){return new e({...this.#e,constraintBuilder:this.#e.constraintBuilder.onDelete(t)})}onUpdate(t){return new e({...this.#e,constraintBuilder:this.#e.constraintBuilder.onUpdate(t)})}deferrable(){return new e({...this.#e,constraintBuilder:this.#e.constraintBuilder.deferrable()})}notDeferrable(){return new e({...this.#e,constraintBuilder:this.#e.constraintBuilder.notDeferrable()})}initiallyDeferred(){return new e({...this.#e,constraintBuilder:this.#e.constraintBuilder.initiallyDeferred()})}initiallyImmediate(){return new e({...this.#e,constraintBuilder:this.#e.constraintBuilder.initiallyImmediate()})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(X.cloneWithTableProps(this.#e.node,{addConstraint:ff.create(this.#e.constraintBuilder.toOperationNode())}),this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}},bf=class e{#e;constructor(e){this.#e=Y(e)}ifExists(){return new e({...this.#e,node:X.cloneWithTableProps(this.#e.node,{dropConstraint:mf.cloneWith(this.#e.node.dropConstraint,{ifExists:!0})})})}cascade(){return new e({...this.#e,node:X.cloneWithTableProps(this.#e.node,{dropConstraint:mf.cloneWith(this.#e.node.dropConstraint,{modifier:`cascade`})})})}restrict(){return new e({...this.#e,node:X.cloneWithTableProps(this.#e.node,{dropConstraint:mf.cloneWith(this.#e.node.dropConstraint,{modifier:`restrict`})})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};let xf=Y({is(e){return e.kind===`PrimaryKeyConstraintNode`},create(e,t){return Y({kind:`PrimaryKeyConstraintNode`,columns:Y(e.map(sc.create)),name:t?Z.create(t):void 0})},cloneWith(e,t){return Y({...e,...t})}}),Sf=Y({is(e){return e.kind===`AddIndexNode`},create(e){return Y({kind:`AddIndexNode`,name:Z.create(e)})},cloneWith(e,t){return Y({...e,...t})},cloneWithColumns(e,t){return Y({...e,columns:[...e.columns||[],...t]})}});var Cf=class e{#e;constructor(e){this.#e=Y(e)}unique(){return new e({...this.#e,node:X.cloneWithTableProps(this.#e.node,{addIndex:Sf.cloneWith(this.#e.node.addIndex,{unique:!0})})})}column(t){return new e({...this.#e,node:X.cloneWithTableProps(this.#e.node,{addIndex:Sf.cloneWithColumns(this.#e.node.addIndex,[_s(t)?Nc(t):t.toOperationNode()])})})}columns(t){return new e({...this.#e,node:X.cloneWithTableProps(this.#e.node,{addIndex:Sf.cloneWithColumns(this.#e.node.addIndex,t.map(e=>_s(e)?Nc(e):e.toOperationNode()))})})}expression(t){return new e({...this.#e,node:X.cloneWithTableProps(this.#e.node,{addIndex:Sf.cloneWithColumns(this.#e.node.addIndex,[t.toOperationNode()])})})}using(t){return new e({...this.#e,node:X.cloneWithTableProps(this.#e.node,{addIndex:Sf.cloneWith(this.#e.node.addIndex,{using:pc.createWithSql(t)})})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}},wf=class e{#e;constructor(e){this.#e=e}nullsNotDistinct(){return new e(pf.cloneWith(this.#e,{nullsNotDistinct:!0}))}deferrable(){return new e(pf.cloneWith(this.#e,{deferrable:!0}))}notDeferrable(){return new e(pf.cloneWith(this.#e,{deferrable:!1}))}initiallyDeferred(){return new e(pf.cloneWith(this.#e,{initiallyDeferred:!0}))}initiallyImmediate(){return new e(pf.cloneWith(this.#e,{initiallyDeferred:!1}))}$call(e){return e(this)}toOperationNode(){return this.#e}},Tf=class e{#e;constructor(e){this.#e=e}deferrable(){return new e(xf.cloneWith(this.#e,{deferrable:!0}))}notDeferrable(){return new e(xf.cloneWith(this.#e,{deferrable:!1}))}initiallyDeferred(){return new e(xf.cloneWith(this.#e,{initiallyDeferred:!0}))}initiallyImmediate(){return new e(xf.cloneWith(this.#e,{initiallyDeferred:!1}))}$call(e){return e(this)}toOperationNode(){return this.#e}},Ef=class{#e;constructor(e){this.#e=e}$call(e){return e(this)}toOperationNode(){return this.#e}};let Df=Y({is(e){return e.kind===`RenameConstraintNode`},create(e,t){return Y({kind:`RenameConstraintNode`,oldName:Z.create(e),newName:Z.create(t)})}});var Of=class e{#e;constructor(e){this.#e=Y({...e})}ifExists(){return new e({...this.#e,node:Zd.cloneWith(this.#e.node,{ifExists:!0})})}toOperationNode(){return this.#e.node}},kf=class{#e;constructor(e){this.#e=Y(e)}renameTo(e){return new vf({...this.#e,node:X.cloneWithTableProps(this.#e.node,{renameTo:qd(e)})})}setSchema(e){return new vf({...this.#e,node:X.cloneWithTableProps(this.#e.node,{setSchema:Z.create(e)})})}alterColumn(e,t){let n=t(new gf(e));return new Af({...this.#e,node:X.cloneWithColumnAlteration(this.#e.node,n.toOperationNode())})}dropColumn(e,t=Ds){let n=t(new Of({node:Zd.create(e)}));return new Af({...this.#e,node:X.cloneWithColumnAlteration(this.#e.node,n.toOperationNode())})}renameColumn(e,t){return new Af({...this.#e,node:X.cloneWithColumnAlteration(this.#e.node,Qd.create(e,t))})}addColumn(e,t,n=Ds){let r=n(new cf(Xd.create(e,Pd(t))));return new Af({...this.#e,node:X.cloneWithColumnAlteration(this.#e.node,Yd.create(r.toOperationNode()))})}modifyColumn(e,t,n=Ds){let r=n(new cf(Xd.create(e,Pd(t))));return new Af({...this.#e,node:X.cloneWithColumnAlteration(this.#e.node,lf.create(r.toOperationNode()))})}addUniqueConstraint(e,t,n=Ds){let r=n(new wf(pf.create(t.map(e=>_s(e)?sc.create(e):Rd(e)),e)));return new vf({...this.#e,node:X.cloneWithTableProps(this.#e.node,{addConstraint:ff.create(r.toOperationNode())})})}addCheckConstraint(e,t,n=Ds){let r=n(new Ef($d.create(t.toOperationNode(),e)));return new vf({...this.#e,node:X.cloneWithTableProps(this.#e.node,{addConstraint:ff.create(r.toOperationNode())})})}addForeignKeyConstraint(e,t,n,r,i=Ds){let a=i(new df(uf.create(t.map(sc.create),qd(n),r.map(sc.create),e)));return new yf({...this.#e,constraintBuilder:a})}addPrimaryKeyConstraint(e,t,n=Ds){let r=n(new Tf(xf.create(t,e)));return new vf({...this.#e,node:X.cloneWithTableProps(this.#e.node,{addConstraint:ff.create(r.toOperationNode())})})}dropConstraint(e){return new bf({...this.#e,node:X.cloneWithTableProps(this.#e.node,{dropConstraint:mf.create(e)})})}renameConstraint(e,t){return new bf({...this.#e,node:X.cloneWithTableProps(this.#e.node,{renameConstraint:Df.create(e,t)})})}addIndex(e){return new Cf({...this.#e,node:X.cloneWithTableProps(this.#e.node,{addIndex:Sf.create(e)})})}dropIndex(e){return new vf({...this.#e,node:X.cloneWithTableProps(this.#e.node,{dropIndex:Ps.create(e)})})}$call(e){return e(this)}},Af=class e{#e;constructor(e){this.#e=Y(e)}alterColumn(t,n){let r=n(new gf(t));return new e({...this.#e,node:X.cloneWithColumnAlteration(this.#e.node,r.toOperationNode())})}dropColumn(t,n=Ds){let r=n(new Of({node:Zd.create(t)}));return new e({...this.#e,node:X.cloneWithColumnAlteration(this.#e.node,r.toOperationNode())})}renameColumn(t,n){return new e({...this.#e,node:X.cloneWithColumnAlteration(this.#e.node,Qd.create(t,n))})}addColumn(t,n,r=Ds){let i=r(new cf(Xd.create(t,Pd(n))));return new e({...this.#e,node:X.cloneWithColumnAlteration(this.#e.node,Yd.create(i.toOperationNode()))})}modifyColumn(t,n,r=Ds){let i=r(new cf(Xd.create(t,Pd(n))));return new e({...this.#e,node:X.cloneWithColumnAlteration(this.#e.node,lf.create(i.toOperationNode()))})}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}},jf=class extends hu{transformPrimitiveValueList(e){return Rc.create(e.values.map(zc.createImmediate))}transformValue(e){return zc.createImmediate(e.value)}},Mf=class e{#e;constructor(e){this.#e=Y(e)}ifNotExists(){return new e({...this.#e,node:ks.cloneWith(this.#e.node,{ifNotExists:!0})})}unique(){return new e({...this.#e,node:ks.cloneWith(this.#e.node,{unique:!0})})}nullsNotDistinct(){return new e({...this.#e,node:ks.cloneWith(this.#e.node,{nullsNotDistinct:!0})})}on(t){return new e({...this.#e,node:ks.cloneWith(this.#e.node,{table:qd(t)})})}column(t){return new e({...this.#e,node:ks.cloneWithColumns(this.#e.node,[_s(t)?Nc(t):t.toOperationNode()])})}columns(t){return new e({...this.#e,node:ks.cloneWithColumns(this.#e.node,t.map(e=>_s(e)?Nc(e):e.toOperationNode()))})}expression(t){return new e({...this.#e,node:ks.cloneWithColumns(this.#e.node,[t.toOperationNode()])})}using(t){return new e({...this.#e,node:ks.cloneWith(this.#e.node,{using:pc.createWithSql(t)})})}where(...t){let n=new jf;return new e({...this.#e,node:Q.cloneWithWhere(this.#e.node,n.transformNode(Kc(t),this.#e.queryId))})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}},Nf=class e{#e;constructor(e){this.#e=Y(e)}ifNotExists(){return new e({...this.#e,node:As.cloneWith(this.#e.node,{ifNotExists:!0})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};function Pf(e){if(js.includes(e))return e;throw Error(`invalid OnCommitAction ${e}`)}var Ff=class e{#e;constructor(e){this.#e=e}using(t){return new e(Sf.cloneWith(this.#e,{using:pc.createWithSql(t)}))}$call(e){return e(this)}toOperationNode(){return this.#e}},If=class e{#e;constructor(e){this.#e=Y(e)}temporary(){return new e({...this.#e,node:Ms.cloneWith(this.#e.node,{temporary:!0})})}onCommit(t){return new e({...this.#e,node:Ms.cloneWith(this.#e.node,{onCommit:Pf(t)})})}ifNotExists(){return new e({...this.#e,node:Ms.cloneWith(this.#e.node,{ifNotExists:!0})})}addColumn(t,n,r=Ds){let i=r(new cf(Xd.create(t,Pd(n))));return new e({...this.#e,node:Ms.cloneWithColumn(this.#e.node,i.toOperationNode())})}addPrimaryKeyConstraint(t,n,r=Ds){let i=r(new Tf(xf.create(n,t)));return new e({...this.#e,node:Ms.cloneWithConstraint(this.#e.node,i.toOperationNode())})}addUniqueConstraint(t,n,r=Ds){let i=r(new wf(pf.create(n.map(e=>_s(e)?sc.create(e):Rd(e)),t)));return new e({...this.#e,node:Ms.cloneWithConstraint(this.#e.node,i.toOperationNode())})}addIndex(t,n,r=Ds){let i=r(new Ff(Sf.cloneWithColumns(Sf.create(t),n.map(e=>_s(e)?sc.create(e):Rd(e)))));return new e({...this.#e,node:Ms.cloneWithIndex(this.#e.node,i.toOperationNode())})}addCheckConstraint(t,n,r=Ds){let i=r(new Ef($d.create(n.toOperationNode(),t)));return new e({...this.#e,node:Ms.cloneWithConstraint(this.#e.node,i.toOperationNode())})}addForeignKeyConstraint(t,n,r,i,a=Ds){let o=a(new df(uf.create(n.map(sc.create),qd(r),i.map(sc.create),t)));return new e({...this.#e,node:Ms.cloneWithConstraint(this.#e.node,o.toOperationNode())})}modifyFront(t){return new e({...this.#e,node:Ms.cloneWithFrontModifier(this.#e.node,t.toOperationNode())})}modifyEnd(t){return new e({...this.#e,node:Ms.cloneWithEndModifier(this.#e.node,t.toOperationNode())})}as(t){return new e({...this.#e,node:Ms.cloneWith(this.#e.node,{selectQuery:Rd(t)})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}},Lf=class e{#e;constructor(e){this.#e=Y(e)}on(t){return new e({...this.#e,node:Ps.cloneWith(this.#e.node,{table:qd(t)})})}ifExists(){return new e({...this.#e,node:Ps.cloneWith(this.#e.node,{ifExists:!0})})}cascade(){return new e({...this.#e,node:Ps.cloneWith(this.#e.node,{cascade:!0})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}},Rf=class e{#e;constructor(e){this.#e=Y(e)}ifExists(){return new e({...this.#e,node:Fs.cloneWith(this.#e.node,{ifExists:!0})})}cascade(){return new e({...this.#e,node:Fs.cloneWith(this.#e.node,{cascade:!0})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}},zf=class e{#e;constructor(e){this.#e=Y(e)}temporary(){return new e({...this.#e,node:Is.cloneWith(this.#e.node,{temporary:!0})})}ifExists(){return new e({...this.#e,node:Is.cloneWith(this.#e.node,{ifExists:!0})})}cascade(){return new e({...this.#e,node:Is.cloneWith(this.#e.node,{cascade:!0})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};let Bf=Y({is(e){return e.kind===`CreateViewNode`},create(e){return Y({kind:`CreateViewNode`,name:Ns.create(e)})},cloneWith(e,t){return Y({...e,...t})}});var Vf=class{#e=new jf;transformQuery(e){return this.#e.transformNode(e.node,e.queryId)}transformResult(e){return Promise.resolve(e.result)}},Hf=class e{#e;constructor(e){this.#e=Y(e)}temporary(){return new e({...this.#e,node:Bf.cloneWith(this.#e.node,{temporary:!0})})}materialized(){return new e({...this.#e,node:Bf.cloneWith(this.#e.node,{materialized:!0})})}ifNotExists(){return new e({...this.#e,node:Bf.cloneWith(this.#e.node,{ifNotExists:!0})})}orReplace(){return new e({...this.#e,node:Bf.cloneWith(this.#e.node,{orReplace:!0})})}columns(t){return new e({...this.#e,node:Bf.cloneWith(this.#e.node,{columns:t.map(Mc)})})}as(t){let n=t.withPlugin(new Vf).toOperationNode();return new e({...this.#e,node:Bf.cloneWith(this.#e.node,{as:n})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};let Uf=Y({is(e){return e.kind===`DropViewNode`},create(e){return Y({kind:`DropViewNode`,name:Ns.create(e)})},cloneWith(e,t){return Y({...e,...t})}});var Wf=class e{#e;constructor(e){this.#e=Y(e)}materialized(){return new e({...this.#e,node:Uf.cloneWith(this.#e.node,{materialized:!0})})}ifExists(){return new e({...this.#e,node:Uf.cloneWith(this.#e.node,{ifExists:!0})})}cascade(){return new e({...this.#e,node:Uf.cloneWith(this.#e.node,{cascade:!0})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};let Gf=Y({is(e){return e.kind===`CreateTypeNode`},create(e){return Y({kind:`CreateTypeNode`,name:e})},cloneWithEnum(e,t){return Y({...e,enum:Rc.create(t.map(zc.createImmediate))})}});var Kf=class e{#e;constructor(e){this.#e=Y(e)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}asEnum(t){return new e({...this.#e,node:Gf.cloneWithEnum(this.#e.node,t)})}$call(e){return e(this)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};let qf=Y({is(e){return e.kind===`DropTypeNode`},create(e){return Array.isArray(e)||(e=[e]),Y({kind:`DropTypeNode`,name:e[0],additionalNames:e.slice(1)})},cloneWith(e,t){return Y({...e,...t})}});var Jf=class e{#e;constructor(e){this.#e=Y(e)}ifExists(){return new e({...this.#e,node:qf.cloneWith(this.#e.node,{ifExists:!0})})}cascade(){return new e({...this.#e,node:qf.cloneWith(this.#e.node,{cascade:!0})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};function Yf(e){if(e.includes(`.`)){let t=e.split(`.`).map(Zf);if(t.length===2)return Ns.createWithSchema(t[0],t[1]);throw Error(`invalid schemable identifier ${e}`)}return Ns.create(e)}function Xf(e){return Array.isArray(e)||(e=[e]),e.map(Yf)}function Zf(e){return e.trim()}let Qf=Y({is(e){return e.kind===`RefreshMaterializedViewNode`},create(e){return Y({kind:`RefreshMaterializedViewNode`,name:Ns.create(e)})},cloneWith(e,t){return Y({...e,...t})}});var $f=class e{#e;constructor(e){this.#e=Y(e)}concurrently(){return new e({...this.#e,node:Qf.cloneWith(this.#e.node,{concurrently:!0,withNoData:!1})})}withData(){return new e({...this.#e,node:Qf.cloneWith(this.#e.node,{withNoData:!1})})}withNoData(){return new e({...this.#e,node:Qf.cloneWith(this.#e.node,{withNoData:!0,concurrently:!1})})}$call(e){return e(this)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){await this.#e.executor.executeQuery(this.compile(),e)}};let ep=Y({is(e){return e.kind===`AlterTypeNode`},create(e){return Y({kind:`AlterTypeNode`,name:e})},cloneWith(e,t){return Y({...e,...t})}}),tp=Y({is(e){return e.kind===`AddValueNode`},create(e){return Y({kind:`AddValueNode`,value:e})},cloneWith(e,t){return Y({...e,...t})}});var np=class{#e;constructor(e){this.#e=Y(e)}toOperationNode(){return this.#e.executor.transformQuery(this.#e.node,this.#e.queryId)}compile(){return this.#e.executor.compileQuery(this.toOperationNode(),this.#e.queryId)}async execute(e){return await this.#e.executor.executeQuery(this.compile(),e)}},rp,ip=class extends np{#e;constructor(e){super(e),this.#e=e}ifNotExists(){return new rp({...this.#e,node:ep.cloneWith(this.#e.node,{addValue:tp.cloneWith(this.#e.node.addValue,{ifNotExists:!0})})})}before(e){return this.#t(e,!0)}after(e){return this.#t(e,!1)}#t(e,t){return new rp({...this.#e,node:ep.cloneWith(this.#e.node,{addValue:tp.cloneWith(this.#e.node.addValue,{isBefore:t,neighborValue:zc.createImmediate(e)})})})}};rp=ip;let ap=Y({is(e){return e.kind===`RenameValueNode`},create(e,t){return Y({kind:`RenameValueNode`,oldValue:e,newValue:t})}});var op=class{#e;constructor(e){this.#e=Y(e)}addValue(e){return new ip({...this.#e,node:ep.cloneWith(this.#e.node,{addValue:tp.create(zc.createImmediate(e))})})}renameTo(e){return new np({...this.#e,node:ep.cloneWith(this.#e.node,{renameTo:Z.create(e)})})}renameValue(e,t){return new np({...this.#e,node:ep.cloneWith(this.#e.node,{renameValue:ap.create(zc.createImmediate(e),zc.createImmediate(t))})})}setSchema(e){return new np({...this.#e,node:ep.cloneWith(this.#e.node,{setSchema:Z.create(e)})})}},sp=class e{#e;constructor(e){this.#e=e}createTable(e){return new If({queryId:pu(),executor:this.#e,node:Ms.create(qd(e))})}dropTable(e){return new zf({queryId:pu(),executor:this.#e,node:Is.create(qd(e))})}createIndex(e){return new Mf({queryId:pu(),executor:this.#e,node:ks.create(e)})}dropIndex(e){return new Lf({queryId:pu(),executor:this.#e,node:Ps.create(e)})}createSchema(e){return new Nf({queryId:pu(),executor:this.#e,node:As.create(e)})}dropSchema(e){return new Rf({queryId:pu(),executor:this.#e,node:Fs.create(e)})}alterTable(e){return new kf({queryId:pu(),executor:this.#e,node:X.create(qd(e))})}createView(e){return new Hf({queryId:pu(),executor:this.#e,node:Bf.create(e)})}refreshMaterializedView(e){return new $f({queryId:pu(),executor:this.#e,node:Qf.create(e)})}dropView(e){return new Wf({queryId:pu(),executor:this.#e,node:Uf.create(e)})}createType(e){return new Kf({queryId:pu(),executor:this.#e,node:Gf.create(Yf(e))})}alterType(e){return new op({executor:this.#e,node:ep.create(Yf(e)),queryId:pu()})}dropType(e){return new Jf({queryId:pu(),executor:this.#e,node:qf.create(Xf(e))})}withPlugin(t){return new e(this.#e.withPlugin(t))}withoutPlugins(){return new e(this.#e.withoutPlugins())}withSchema(t){return new e(this.#e.withPluginAtFront(new xu(t)))}},cp=class{ref(e){return new uc(e)}table(e){return new Vd(e)}},lp=class{#e;constructor(e){this.#e=e}async provideConnection(e,t){let n=await this.#e.acquireConnection(t);try{return await e(n)}finally{await this.#e.releaseConnection(n,t)}}},up=class e extends Iu{#e;#t;#n;constructor(e,t,n,r=[]){super(r),this.#e=e,this.#t=t,this.#n=n}get adapter(){return this.#t}compileQuery(e,t){return this.#e.compileQuery(e,t)}provideConnection(e,t){return this.#n.provideConnection(e,t)}withPlugins(t){return new e(this.#e,this.#t,this.#n,[...this.plugins,...t])}withPlugin(t){return new e(this.#e,this.#t,this.#n,[...this.plugins,t])}withPluginAtFront(t){return new e(this.#e,this.#t,this.#n,[t,...this.plugins])}withConnectionProvider(t){return new e(this.#e,this.#t,t,[...this.plugins])}withoutPlugins(){return new e(this.#e,this.#t,this.#n,[])}};function dp(){return typeof performance<`u`&&Cs(performance.now)?performance.now():Date.now()}var fp=class{#e;#t;async obtainLock(){for(;this.#e;)await this.#e;this.#e=new Promise(e=>{this.#t=e})}releaseLock(){let e=this.#t;this.#e=void 0,this.#t=void 0,e?.()}},pp=class{#e;#t;#n;#r;#i;#a=/* @__PURE__ */ new WeakSet;#o;constructor(e,t,n){this.#e=e,this.#r=!1,this.#t=n,t.supportsMultipleConnections===!1&&(this.#o=new fp)}async init(e){if(this.#i)throw Error(`driver has already been destroyed`);this.#n??=this.#e.init(e).then(()=>{this.#r=!0}).catch(e=>{throw this.#n=void 0,e}),await Mu(this.#n,e?.signal,`init`)}async acquireConnection(e){if(this.#i)throw Error(`driver has already been destroyed`);if(this.#r||await this.init(e),this.#o){let t=this.#o.obtainLock();await Mu(t,e?.signal,`acquireConnection:mutex`,()=>t.then(()=>this.#o?.releaseLock()))}let t=this.#e.acquireConnection(e),n=await Mu(t,e?.signal,`acquireConnection:acquire`,()=>t?.then(e=>this.releaseConnection(e).catch(Nu(`driver.releaseConnection`))).catch(Nu(`driver.acquireConnection`)));return this.#a.has(n)||(this.#s()&&this.#c(n),this.#a.add(n)),n}async releaseConnection(e,t){await this.#e.releaseConnection(e,t),this.#o?.releaseLock()}async beginTransaction(e,t){return await this.#e.beginTransaction(e,t)}async commitTransaction(e){return await this.#e.commitTransaction(e)}async rollbackTransaction(e){return await this.#e.rollbackTransaction(e)}async savepoint(e,t,n){if(this.#e.savepoint)return await this.#e.savepoint(e,t,n);throw Error("The `savepoint` method is not supported by this driver")}async rollbackToSavepoint(e,t,n){if(this.#e.rollbackToSavepoint)return await this.#e.rollbackToSavepoint(e,t,n);throw Error("The `rollbackToSavepoint` method is not supported by this driver")}async releaseSavepoint(e,t,n){if(this.#e.releaseSavepoint)return await this.#e.releaseSavepoint(e,t,n);throw Error("The `releaseSavepoint` method is not supported by this driver")}async destroy(e){this.#n&&(await Mu(this.#n,e?.signal,`destroy:initPromise`),this.#i??=this.#e.destroy(e).catch(e=>{throw this.#i=void 0,e}),await Mu(this.#i,e?.signal,`destroy`))}#s(){return this.#t.isLevelEnabled(`query`)||this.#t.isLevelEnabled(`error`)}#c(e){let t=e.executeQuery,n=e.streamQuery,r=this;e.executeQuery=async(n,i)=>{let a,o=dp();try{return await t.call(e,n,i)}catch(e){throw a=e,await r.#l(e,n,o),e}finally{a||await r.#u(n,o)}},e.streamQuery=async function*(t,i,a){let o,s=dp();try{for await(let r of n.call(e,t,i,a))yield r}catch(e){throw o=e,await r.#l(e,t,s),e}finally{o||await r.#u(t,s,!0)}}}async#l(e,t,n){await this.#t.error(()=>({level:`error`,error:e,query:t,queryDurationMillis:this.#d(n)}))}async#u(e,t,n=!1){await this.#t.query(()=>({level:`query`,isStream:n,query:e,queryDurationMillis:this.#d(t)}))}#d(e){return dp()-e}};let mp=()=>{};var hp=class{#e;#t;constructor(e){this.#e=e}async provideConnection(e){for(;this.#t;)await this.#t.catch(mp);return this.#t=this.#n(e).finally(()=>{this.#t=void 0}),this.#t}async#n(e){return await e(this.#e)}};let gp=[`read only`,`read write`],_p=[`read uncommitted`,`read committed`,`repeatable read`,`serializable`,`snapshot`];function vp(e){if(e.accessMode&&!gp.includes(e.accessMode))throw Error(`invalid transaction access mode ${e.accessMode}`);if(e.isolationLevel&&!_p.includes(e.isolationLevel))throw Error(`invalid transaction isolation level ${e.isolationLevel}`)}Y([`query`,`error`]);var yp=class{#e;#t;constructor(e){Cs(e)?(this.#t=e,this.#e=Y({query:!0,error:!0})):(this.#t=bp,this.#e=Y({query:e.includes(`query`),error:e.includes(`error`)}))}isLevelEnabled(e){return this.#e[e]}async query(e){this.#e.query&&await this.#t(e())}async error(e){this.#e.error&&await this.#t(e())}};function bp(e){if(e.level===`query`){let t=`kysely:query:${e.isStream?`stream:`:``}`;console.log(`${t} ${e.query.sql}`),console.log(`${t} duration: ${e.queryDurationMillis.toFixed(1)}ms`)}else e.level===`error`&&(e.error instanceof Error?console.error(`kysely:error: ${e.error.stack??e.error.message}`):console.error(`kysely:error: ${JSON.stringify({error:e.error,query:e.query.sql,queryDurationMillis:e.queryDurationMillis})}`))}function xp(e){return ws(e)&&Cs(e.compile)}Symbol.asyncDispose??=Symbol(`Symbol.asyncDispose`);var Sp=class e extends Uu{#e;constructor(e){let t,n;if(wp(e))t={executor:e.executor},n={...e};else{let r=e.dialect,i=r.createDriver(),a=r.createQueryCompiler(),o=r.createAdapter(),s=new pp(i,o,new yp(e.log??[])),c=new up(a,o,new lp(s),e.plugins??[]);t={executor:c},n={config:e,executor:c,dialect:r,driver:s}}super(t),this.#e=Y(n)}get schema(){return new sp(this.#e.executor)}get dynamic(){return new cp}get introspection(){return this.#e.dialect.createIntrospector(this.withoutPlugins())}case(e){return new bd({node:yd.create(gs(e)?void 0:Rd(e))})}get fn(){return gd()}transaction(){return new Ep({...this.#e})}startTransaction(){return new Dp({...this.#e})}connection(){return new Tp({...this.#e})}withPlugin(t){return new e({...this.#e,executor:this.#e.executor.withPlugin(t)})}withoutPlugins(){return new e({...this.#e,executor:this.#e.executor.withoutPlugins()})}withSchema(t){return new e({...this.#e,executor:this.#e.executor.withPluginAtFront(new xu(t))})}$extendTables(){return new e({...this.#e})}$omitTables(){return new e({...this.#e})}$pickTables(){return new e({...this.#e})}withTables(){return this.$extendTables()}async destroy(){await this.#e.driver.destroy()}get isTransaction(){return!1}getExecutor(){return this.#e.executor}async executeQuery(e,t){let n=xp(e)?e.compile():e;return await this.#e.executor.executeQuery(n,t)}async[Symbol.asyncDispose](){await this.destroy()}},Cp=class e extends Sp{#e;constructor(e){super(e),this.#e=e}get isTransaction(){return!0}transaction(){throw Error(`calling the transaction method for a Transaction is not supported`)}startTransaction(){throw Error(`calling the controlled transaction method for a Transaction is not supported`)}connection(){throw Error(`calling the connection method for a Transaction is not supported`)}destroy(){throw Error(`calling the destroy method for a Transaction is not supported`)}withPlugin(t){return new e({...this.#e,executor:this.#e.executor.withPlugin(t)})}withoutPlugins(){return new e({...this.#e,executor:this.#e.executor.withoutPlugins()})}withSchema(t){return new e({...this.#e,executor:this.#e.executor.withPluginAtFront(new xu(t))})}withTables(){return new e({...this.#e})}$extendTables(){return new e({...this.#e})}$omitTables(){return new e({...this.#e})}$pickTables(){return new e({...this.#e})}};function wp(e){return ws(e)&&ws(e.config)&&ws(e.driver)&&ws(e.executor)&&ws(e.dialect)}var Tp=class{#e;constructor(e){this.#e=Y(e)}async execute(e,t){return this.#e.executor.provideConnection(async t=>{let n=this.#e.executor.withConnectionProvider(new hp(t));return await e(new Sp({...this.#e,executor:n}))},Y({signal:t?.signal}))}},Ep=class e{#e;constructor(e){this.#e=Y(e)}setAccessMode(t){return new e({...this.#e,accessMode:t})}setIsolationLevel(t){return new e({...this.#e,isolationLevel:t})}async execute(e){let{isolationLevel:t,accessMode:n,...r}=this.#e,i={isolationLevel:t,accessMode:n};return vp(i),this.#e.executor.provideConnection(async t=>{let n={isCommitted:!1,isRolledBack:!1},a=new jp(this.#e.executor.withConnectionProvider(new hp(t)),n),o=new Cp({...r,executor:a}),s=!1;try{await this.#e.driver.beginTransaction(t,i),s=!0;let r=await e(o);return await this.#e.driver.commitTransaction(t),n.isCommitted=!0,r}catch(e){throw s&&(await this.#e.driver.rollbackTransaction(t),n.isRolledBack=!0),e}})}},Dp=class e{#e;constructor(e){this.#e=Y(e)}setAccessMode(t){return new e({...this.#e,accessMode:t})}setIsolationLevel(t){return new e({...this.#e,isolationLevel:t})}async execute(){let{isolationLevel:e,accessMode:t,...n}=this.#e,r={isolationLevel:e,accessMode:t};vp(r);let i=await Eu(this.#e.executor);try{await this.#e.driver.beginTransaction(i.connection,r)}catch(e){throw i.release(),e}return new Op({...n,connection:i,state:{isCommitted:!1,isRolledBack:!1},executor:this.#e.executor.withConnectionProvider(new hp(i.connection))})}},Op=class e extends Cp{#e;#t;constructor(e){e={...e,executor:new jp(e.executor,e.state)};let{connection:t,state:n,...r}=e;super(r),this.#e=Y(e);let i=pu();this.#t=t=>e.executor.compileQuery(t,i)}get isCommitted(){return this.#e.state.isCommitted}get isRolledBack(){return this.#e.state.isRolledBack}commit(){return new kp(async()=>{await this.#e.executor.provideConnection(async e=>{await this.#e.driver.commitTransaction(e),this.#e.state.isCommitted=!0,this.#e.connection.release()})})}rollback(){return new kp(async()=>{await this.#e.executor.provideConnection(async e=>{try{await this.#e.driver.rollbackTransaction(e)}finally{this.#e.state.isRolledBack=!0,this.#e.connection.release()}})})}savepoint(t){return new kp(async()=>(await this.#e.executor.provideConnection(async e=>{await this.#e.driver.savepoint?.(e,t,this.#t)}),new e({...this.#e})))}rollbackToSavepoint(t){return new kp(async()=>(await this.#e.executor.provideConnection(async e=>{await this.#e.driver.rollbackToSavepoint?.(e,t,this.#t)}),new e({...this.#e})))}releaseSavepoint(t){return new kp(async()=>(await this.#e.executor.provideConnection(async e=>{await this.#e.driver.releaseSavepoint?.(e,t,this.#t)}),new e({...this.#e})))}withPlugin(t){return new e({...this.#e,executor:this.#e.executor.withPlugin(t)})}withoutPlugins(){return new e({...this.#e,executor:this.#e.executor.withoutPlugins()})}withSchema(t){return new e({...this.#e,executor:this.#e.executor.withPluginAtFront(new xu(t))})}withTables(){return new e({...this.#e})}$extendTables(){return new e({...this.#e})}$omitTables(){return new e({...this.#e})}$pickTables(){return new e({...this.#e})}},kp=class{#e;constructor(e){this.#e=e}async execute(){return await this.#e()}};function Ap(e){if(e.isCommitted)throw Error(`Transaction is already committed`);if(e.isRolledBack)throw Error(`Transaction is already rolled back`)}var jp=class e{#e;#t;constructor(t,n){this.#e=t instanceof e?t.#e:t,this.#t=n}get adapter(){return this.#e.adapter}get plugins(){return this.#e.plugins}transformQuery(e,t){return this.#e.transformQuery(e,t)}compileQuery(e,t){return this.#e.compileQuery(e,t)}provideConnection(e,t){return Ap(this.#t),this.#e.provideConnection(async t=>(Ap(this.#t),await e(t)),t)}executeQuery(e,t){return Ap(this.#t),this.#e.withConnectionProvider(this).executeQuery(e,t)}stream(e,t,n){return Ap(this.#t),this.#e.withConnectionProvider(this).stream(e,t,n)}withConnectionProvider(t){return new e(this.#e.withConnectionProvider(t),this.#t)}withPlugin(t){return new e(this.#e.withPlugin(t),this.#t)}withPlugins(t){return new e(this.#e.withPlugins(t),this.#t)}withPluginAtFront(t){return new e(this.#e.withPluginAtFront(t),this.#t)}withoutPlugins(){return new e(this.#e.withoutPlugins(),this.#t)}},Mp=class{nodeStack=[];get parentNode(){return this.nodeStack[this.nodeStack.length-2]}#e=Y({AliasNode:this.visitAlias.bind(this),ColumnNode:this.visitColumn.bind(this),IdentifierNode:this.visitIdentifier.bind(this),SchemableIdentifierNode:this.visitSchemableIdentifier.bind(this),RawNode:this.visitRaw.bind(this),ReferenceNode:this.visitReference.bind(this),SelectQueryNode:this.visitSelectQuery.bind(this),SelectionNode:this.visitSelection.bind(this),TableNode:this.visitTable.bind(this),FromNode:this.visitFrom.bind(this),SelectAllNode:this.visitSelectAll.bind(this),AndNode:this.visitAnd.bind(this),OrNode:this.visitOr.bind(this),ValueNode:this.visitValue.bind(this),ValueListNode:this.visitValueList.bind(this),PrimitiveValueListNode:this.visitPrimitiveValueList.bind(this),ParensNode:this.visitParens.bind(this),JoinNode:this.visitJoin.bind(this),OperatorNode:this.visitOperator.bind(this),WhereNode:this.visitWhere.bind(this),InsertQueryNode:this.visitInsertQuery.bind(this),DeleteQueryNode:this.visitDeleteQuery.bind(this),ReturningNode:this.visitReturning.bind(this),CreateTableNode:this.visitCreateTable.bind(this),AddColumnNode:this.visitAddColumn.bind(this),ColumnDefinitionNode:this.visitColumnDefinition.bind(this),DropTableNode:this.visitDropTable.bind(this),DataTypeNode:this.visitDataType.bind(this),OrderByNode:this.visitOrderBy.bind(this),OrderByItemNode:this.visitOrderByItem.bind(this),GroupByNode:this.visitGroupBy.bind(this),GroupByItemNode:this.visitGroupByItem.bind(this),UpdateQueryNode:this.visitUpdateQuery.bind(this),ColumnUpdateNode:this.visitColumnUpdate.bind(this),LimitNode:this.visitLimit.bind(this),OffsetNode:this.visitOffset.bind(this),OnConflictNode:this.visitOnConflict.bind(this),OnDuplicateKeyNode:this.visitOnDuplicateKey.bind(this),CreateIndexNode:this.visitCreateIndex.bind(this),DropIndexNode:this.visitDropIndex.bind(this),ListNode:this.visitList.bind(this),PrimaryKeyConstraintNode:this.visitPrimaryKeyConstraint.bind(this),UniqueConstraintNode:this.visitUniqueConstraint.bind(this),ReferencesNode:this.visitReferences.bind(this),CheckConstraintNode:this.visitCheckConstraint.bind(this),WithNode:this.visitWith.bind(this),CommonTableExpressionNode:this.visitCommonTableExpression.bind(this),CommonTableExpressionNameNode:this.visitCommonTableExpressionName.bind(this),HavingNode:this.visitHaving.bind(this),CreateSchemaNode:this.visitCreateSchema.bind(this),DropSchemaNode:this.visitDropSchema.bind(this),AlterTableNode:this.visitAlterTable.bind(this),DropColumnNode:this.visitDropColumn.bind(this),RenameColumnNode:this.visitRenameColumn.bind(this),AlterColumnNode:this.visitAlterColumn.bind(this),ModifyColumnNode:this.visitModifyColumn.bind(this),AddConstraintNode:this.visitAddConstraint.bind(this),DropConstraintNode:this.visitDropConstraint.bind(this),RenameConstraintNode:this.visitRenameConstraint.bind(this),ForeignKeyConstraintNode:this.visitForeignKeyConstraint.bind(this),CreateViewNode:this.visitCreateView.bind(this),RefreshMaterializedViewNode:this.visitRefreshMaterializedView.bind(this),DropViewNode:this.visitDropView.bind(this),GeneratedNode:this.visitGenerated.bind(this),DefaultValueNode:this.visitDefaultValue.bind(this),OnNode:this.visitOn.bind(this),ValuesNode:this.visitValues.bind(this),SelectModifierNode:this.visitSelectModifier.bind(this),CreateTypeNode:this.visitCreateType.bind(this),DropTypeNode:this.visitDropType.bind(this),ExplainNode:this.visitExplain.bind(this),DefaultInsertValueNode:this.visitDefaultInsertValue.bind(this),AggregateFunctionNode:this.visitAggregateFunction.bind(this),OverNode:this.visitOver.bind(this),PartitionByNode:this.visitPartitionBy.bind(this),PartitionByItemNode:this.visitPartitionByItem.bind(this),SetOperationNode:this.visitSetOperation.bind(this),BinaryOperationNode:this.visitBinaryOperation.bind(this),UnaryOperationNode:this.visitUnaryOperation.bind(this),UsingNode:this.visitUsing.bind(this),FunctionNode:this.visitFunction.bind(this),CaseNode:this.visitCase.bind(this),WhenNode:this.visitWhen.bind(this),JSONReferenceNode:this.visitJSONReference.bind(this),JSONPathNode:this.visitJSONPath.bind(this),JSONPathLegNode:this.visitJSONPathLeg.bind(this),JSONOperatorChainNode:this.visitJSONOperatorChain.bind(this),TupleNode:this.visitTuple.bind(this),MergeQueryNode:this.visitMergeQuery.bind(this),MatchedNode:this.visitMatched.bind(this),AddIndexNode:this.visitAddIndex.bind(this),CastNode:this.visitCast.bind(this),FetchNode:this.visitFetch.bind(this),TopNode:this.visitTop.bind(this),OutputNode:this.visitOutput.bind(this),OrActionNode:this.visitOrAction.bind(this),CollateNode:this.visitCollate.bind(this),AlterTypeNode:this.visitAlterType.bind(this),AddValueNode:this.visitAddValue.bind(this),RenameValueNode:this.visitRenameValue.bind(this)});visitNode=e=>{this.nodeStack.push(e),this.#e[e.kind](e),this.nodeStack.pop()}};let Np=/'/g,Pp=/['"]/g;var Fp=class extends Mp{#e=``;#t=[];get numParameters(){return this.#t.length}compileQuery(e,t){return this.#e=``,this.#t=[],this.nodeStack.splice(0,this.nodeStack.length),this.visitNode(e),Y({query:e,queryId:t,sql:this.getSql(),parameters:[...this.#t]})}getSql(){return this.#e}visitSelectQuery(e){let t=this.parentNode!==void 0&&!Gc.is(this.parentNode)&&!sl.is(this.parentNode)&&!Ms.is(this.parentNode)&&!Bf.is(this.parentNode)&&!ed.is(this.parentNode);this.parentNode===void 0&&e.explain&&(this.visitNode(e.explain),this.append(` `)),t&&this.append(`(`),e.with&&(this.visitNode(e.with),this.append(` `)),this.append(`select`),e.distinctOn&&(this.append(` `),this.compileDistinctOn(e.distinctOn)),e.frontModifiers?.length&&(this.append(` `),this.compileList(e.frontModifiers,` `)),e.top&&(this.append(` `),this.visitNode(e.top)),e.selections&&(this.append(` `),this.compileList(e.selections)),e.from&&(this.append(` `),this.visitNode(e.from)),e.joins&&(this.append(` `),this.compileList(e.joins,` `)),e.where&&(this.append(` `),this.visitNode(e.where)),e.groupBy&&(this.append(` `),this.visitNode(e.groupBy)),e.having&&(this.append(` `),this.visitNode(e.having)),e.setOperations&&(this.append(` `),this.compileList(e.setOperations,` `)),e.orderBy&&(this.append(` `),this.visitNode(e.orderBy)),e.limit&&(this.append(` `),this.visitNode(e.limit)),e.offset&&(this.append(` `),this.visitNode(e.offset)),e.fetch&&(this.append(` `),this.visitNode(e.fetch)),e.endModifiers?.length&&(this.append(` `),this.compileList(this.sortSelectModifiers(e.endModifiers),` `)),t&&this.append(`)`)}visitFrom(e){this.append(`from `),this.compileList(e.froms)}visitSelection(e){this.visitNode(e.selection)}visitColumn(e){this.visitNode(e.column)}compileDistinctOn(e){this.append(`distinct on (`),this.compileList(e),this.append(`)`)}compileList(e,t=`, `){let n=e.length-1;for(let r=0;r<=n;r++)this.visitNode(e[r]),r<n&&this.append(t)}visitWhere(e){this.append(`where `),this.visitNode(e.where)}visitHaving(e){this.append(`having `),this.visitNode(e.having)}visitInsertQuery(e){let t=this.parentNode!==void 0&&!Gc.is(this.parentNode)&&!pc.is(this.parentNode)&&!hl.is(this.parentNode);this.parentNode===void 0&&e.explain&&(this.visitNode(e.explain),this.append(` `)),t&&this.append(`(`),e.with&&(this.visitNode(e.with),this.append(` `)),this.append(e.replace?`replace`:`insert`),e.orAction&&(this.append(` `),this.visitNode(e.orAction)),e.top&&(this.append(` `),this.visitNode(e.top)),e.into&&(this.append(` into `),this.visitNode(e.into)),e.columns&&(this.append(` (`),this.compileList(e.columns),this.append(`)`)),e.output&&(this.append(` `),this.visitNode(e.output)),e.values&&(this.append(` `),this.visitNode(e.values)),e.defaultValues&&(this.append(` `),this.append(`default values`)),e.onConflict&&(this.append(` `),this.visitNode(e.onConflict)),e.onDuplicateKey&&(this.append(` `),this.visitNode(e.onDuplicateKey)),e.returning&&(this.append(` `),this.visitNode(e.returning)),t&&this.append(`)`),e.endModifiers?.length&&(this.append(` `),this.compileList(e.endModifiers,` `))}visitValues(e){this.append(`values `),this.compileList(e.values)}visitDeleteQuery(e){let t=this.parentNode!==void 0&&!Gc.is(this.parentNode)&&!pc.is(this.parentNode);this.parentNode===void 0&&e.explain&&(this.visitNode(e.explain),this.append(` `)),t&&this.append(`(`),e.with&&(this.visitNode(e.with),this.append(` `)),this.append(`delete `),e.top&&(this.visitNode(e.top),this.append(` `)),this.visitNode(e.from),e.output&&(this.append(` `),this.visitNode(e.output)),e.using&&(this.append(` `),this.visitNode(e.using)),e.joins&&(this.append(` `),this.compileList(e.joins,` `)),e.where&&(this.append(` `),this.visitNode(e.where)),e.returning&&(this.append(` `),this.visitNode(e.returning)),e.orderBy&&(this.append(` `),this.visitNode(e.orderBy)),e.limit&&(this.append(` `),this.visitNode(e.limit)),t&&this.append(`)`),e.endModifiers?.length&&(this.append(` `),this.compileList(e.endModifiers,` `))}visitReturning(e){this.append(`returning `),this.compileList(e.selections)}visitAlias(e){this.visitNode(e.node),this.append(` as `),this.visitNode(e.alias)}visitReference(e){e.table&&(this.visitNode(e.table),this.append(`.`)),this.visitNode(e.column)}visitSelectAll(e){this.append(`*`)}visitIdentifier(e){this.append(this.getLeftIdentifierWrapper()),this.compileUnwrappedIdentifier(e),this.append(this.getRightIdentifierWrapper())}compileUnwrappedIdentifier(e){if(!_s(e.name))throw Error(`a non-string identifier was passed to compileUnwrappedIdentifier.`);this.append(this.sanitizeIdentifier(e.name))}visitAnd(e){this.visitNode(e.left),this.append(` and `),this.visitNode(e.right)}visitOr(e){this.visitNode(e.left),this.append(` or `),this.visitNode(e.right)}visitValue(e){e.immediate?this.appendImmediateValue(e.value):this.appendValue(e.value)}visitValueList(e){this.append(`(`),this.compileList(e.values),this.append(`)`)}visitTuple(e){this.append(`(`),this.compileList(e.values),this.append(`)`)}visitPrimitiveValueList(e){this.append(`(`);let{values:t}=e;for(let e=0;e<t.length;++e)this.appendValue(t[e]),e!==t.length-1&&this.append(`, `);this.append(`)`)}visitParens(e){this.append(`(`),this.visitNode(e.node),this.append(`)`)}visitJoin(e){this.append(Rp[e.joinType]),this.append(` `),this.visitNode(e.table),e.on&&(this.append(` `),this.visitNode(e.on))}visitOn(e){this.append(`on `),this.visitNode(e.on)}visitRaw(e){let{sqlFragments:t,parameters:n}=e;for(let e=0;e<t.length;++e)this.append(t[e]),n.length>e&&this.visitNode(n[e])}visitOperator(e){this.append(e.operator)}visitTable(e){this.visitNode(e.table)}visitSchemableIdentifier(e){e.schema&&(this.visitNode(e.schema),this.append(`.`)),this.visitNode(e.identifier)}visitCreateTable(e){this.append(`create `),e.frontModifiers?.length&&(this.compileList(e.frontModifiers,` `),this.append(` `)),e.temporary&&this.append(`temporary `),this.append(`table `),e.ifNotExists&&this.append(`if not exists `),this.visitNode(e.table),e.selectQuery||(this.append(` (`),this.compileList([...e.columns,...e.constraints??[],...e.indexes??[]]),this.append(`)`)),e.onCommit&&(this.append(` on commit `),this.append(e.onCommit)),e.endModifiers?.length&&(this.append(` `),this.compileList(e.endModifiers,` `)),e.selectQuery&&(this.append(` as `),this.visitNode(e.selectQuery))}visitColumnDefinition(e){e.ifNotExists&&this.append(`if not exists `),this.visitNode(e.column),this.append(` `),this.visitNode(e.dataType),e.unsigned&&this.append(` unsigned`),e.frontModifiers&&e.frontModifiers.length>0&&(this.append(` `),this.compileList(e.frontModifiers,` `)),e.generated&&(this.append(` `),this.visitNode(e.generated)),e.identity&&this.append(` identity`),e.defaultTo&&(this.append(` `),this.visitNode(e.defaultTo)),e.notNull&&this.append(` not null`),e.unique&&this.append(` unique`),e.nullsNotDistinct&&this.append(` nulls not distinct`),e.primaryKey&&this.append(` primary key`),e.autoIncrement&&(this.append(` `),this.append(this.getAutoIncrement())),e.references&&(this.append(` `),this.visitNode(e.references)),e.check&&(this.append(` `),this.visitNode(e.check)),e.endModifiers&&e.endModifiers.length>0&&(this.append(` `),this.compileList(e.endModifiers,` `))}getAutoIncrement(){return`auto_increment`}visitReferences(e){this.append(`references `),this.visitNode(e.table),this.append(` (`),this.compileList(e.columns),this.append(`)`),e.onDelete&&(this.append(` on delete `),this.append(e.onDelete)),e.onUpdate&&(this.append(` on update `),this.append(e.onUpdate))}visitDropTable(e){this.append(`drop `),e.temporary&&this.append(`temporary `),this.append(`table `),e.ifExists&&this.append(`if exists `),this.visitNode(e.table),e.cascade&&this.append(` cascade`)}visitDataType(e){this.append(e.dataType)}visitOrderBy(e){this.append(`order by `),this.compileList(e.items)}visitOrderByItem(e){this.visitNode(e.orderBy),e.collation&&(this.append(` `),this.visitNode(e.collation)),e.direction&&(this.append(` `),this.visitNode(e.direction)),e.nulls&&(this.append(` nulls `),this.append(e.nulls))}visitGroupBy(e){this.append(`group by `),this.compileList(e.items)}visitGroupByItem(e){this.visitNode(e.groupBy)}visitUpdateQuery(e){let t=this.parentNode!==void 0&&!Gc.is(this.parentNode)&&!pc.is(this.parentNode)&&!hl.is(this.parentNode);if(this.parentNode===void 0&&e.explain&&(this.visitNode(e.explain),this.append(` `)),t&&this.append(`(`),e.with&&(this.visitNode(e.with),this.append(` `)),this.append(`update `),e.top&&(this.visitNode(e.top),this.append(` `)),e.table&&(this.visitNode(e.table),this.append(` `)),this.append(`set `),e.updates&&this.compileList(e.updates),e.output&&(this.append(` `),this.visitNode(e.output)),e.from&&(this.append(` `),this.visitNode(e.from)),e.joins){if(!e.from)throw Error(`Joins in an update query are only supported as a part of a PostgreSQL 'update set from join' query. If you want to create a MySQL 'update join set' query, see https://kysely.dev/docs/examples/update/my-sql-joins`);this.append(` `),this.compileList(e.joins,` `)}e.where&&(this.append(` `),this.visitNode(e.where)),e.returning&&(this.append(` `),this.visitNode(e.returning)),e.orderBy&&(this.append(` `),this.visitNode(e.orderBy)),e.limit&&(this.append(` `),this.visitNode(e.limit)),t&&this.append(`)`),e.endModifiers?.length&&(this.append(` `),this.compileList(e.endModifiers,` `))}visitColumnUpdate(e){this.visitNode(e.column),this.append(` = `),this.visitNode(e.value)}visitLimit(e){this.append(`limit `),this.visitNode(e.limit)}visitOffset(e){this.append(`offset `),this.visitNode(e.offset)}visitOnConflict(e){this.append(`on conflict`),e.columns?(this.append(` (`),this.compileList(e.columns),this.append(`)`)):e.constraint?(this.append(` on constraint `),this.visitNode(e.constraint)):e.indexExpression&&(this.append(` (`),this.visitNode(e.indexExpression),this.append(`)`)),e.indexWhere&&(this.append(` `),this.visitNode(e.indexWhere)),e.doNothing===!0?this.append(` do nothing`):e.updates&&(this.append(` do update set `),this.compileList(e.updates),e.updateWhere&&(this.append(` `),this.visitNode(e.updateWhere)))}visitOnDuplicateKey(e){this.append(`on duplicate key update `),this.compileList(e.updates)}visitCreateIndex(e){this.append(`create `),e.unique&&this.append(`unique `),this.append(`index `),e.ifNotExists&&this.append(`if not exists `),this.visitNode(e.name),e.table&&(this.append(` on `),this.visitNode(e.table)),e.using&&(this.append(` using `),this.visitNode(e.using)),e.columns&&(this.append(` (`),this.compileList(e.columns),this.append(`)`)),e.nullsNotDistinct&&this.append(` nulls not distinct`),e.where&&(this.append(` `),this.visitNode(e.where))}visitDropIndex(e){this.append(`drop index `),e.ifExists&&this.append(`if exists `),this.visitNode(e.name),e.table&&(this.append(` on `),this.visitNode(e.table)),e.cascade&&this.append(` cascade`)}visitCreateSchema(e){this.append(`create schema `),e.ifNotExists&&this.append(`if not exists `),this.visitNode(e.schema)}visitDropSchema(e){this.append(`drop schema `),e.ifExists&&this.append(`if exists `),this.visitNode(e.schema),e.cascade&&this.append(` cascade`)}visitPrimaryKeyConstraint(e){e.name&&(this.append(`constraint `),this.visitNode(e.name),this.append(` `)),this.append(`primary key (`),this.compileList(e.columns),this.append(`)`),this.buildDeferrable(e)}buildDeferrable(e){e.deferrable!==void 0&&(e.deferrable?this.append(` deferrable`):this.append(` not deferrable`)),e.initiallyDeferred!==void 0&&(e.initiallyDeferred?this.append(` initially deferred`):this.append(` initially immediate`))}visitUniqueConstraint(e){e.name&&(this.append(`constraint `),this.visitNode(e.name),this.append(` `)),this.append(`unique`),e.nullsNotDistinct&&this.append(` nulls not distinct`),this.append(` (`),this.compileList(e.columns),this.append(`)`),this.buildDeferrable(e)}visitCheckConstraint(e){e.name&&(this.append(`constraint `),this.visitNode(e.name),this.append(` `)),this.append(`check (`),this.visitNode(e.expression),this.append(`)`)}visitForeignKeyConstraint(e){e.name&&(this.append(`constraint `),this.visitNode(e.name),this.append(` `)),this.append(`foreign key (`),this.compileList(e.columns),this.append(`) `),this.visitNode(e.references),e.onDelete&&(this.append(` on delete `),this.append(e.onDelete)),e.onUpdate&&(this.append(` on update `),this.append(e.onUpdate)),this.buildDeferrable(e)}visitList(e){this.compileList(e.items)}visitWith(e){this.append(`with `),e.recursive&&this.append(`recursive `),this.compileList(e.expressions)}visitCommonTableExpression(e){this.visitNode(e.name),this.append(` as `),ys(e.materialized)&&(e.materialized||this.append(`not `),this.append(`materialized `)),this.visitNode(e.expression)}visitCommonTableExpressionName(e){this.visitNode(e.table),e.columns&&(this.append(`(`),this.compileList(e.columns),this.append(`)`))}visitAlterTable(e){this.append(`alter table `),this.visitNode(e.table),this.append(` `),e.renameTo&&(this.append(`rename to `),this.visitNode(e.renameTo)),e.setSchema&&(this.append(`set schema `),this.visitNode(e.setSchema)),e.addConstraint&&this.visitNode(e.addConstraint),e.dropConstraint&&this.visitNode(e.dropConstraint),e.renameConstraint&&this.visitNode(e.renameConstraint),e.columnAlterations&&this.compileColumnAlterations(e.columnAlterations),e.addIndex&&this.visitNode(e.addIndex),e.dropIndex&&this.visitNode(e.dropIndex)}visitAddColumn(e){this.append(`add column `),this.visitNode(e.column)}visitRenameColumn(e){this.append(`rename column `),this.visitNode(e.column),this.append(` to `),this.visitNode(e.renameTo)}visitDropColumn(e){this.append(`drop column `),e.ifExists&&this.append(`if exists `),this.visitNode(e.column)}visitAlterColumn(e){this.append(`alter column `),this.visitNode(e.column),this.append(` `),e.dataType&&(this.announcesNewColumnDataType()&&this.append(`type `),this.visitNode(e.dataType),e.dataTypeExpression&&(this.append(`using `),this.visitNode(e.dataTypeExpression))),e.setDefault&&(this.append(`set default `),this.visitNode(e.setDefault)),e.dropDefault&&this.append(`drop default`),e.setNotNull&&this.append(`set not null`),e.dropNotNull&&this.append(`drop not null`)}visitModifyColumn(e){this.append(`modify column `),this.visitNode(e.column)}visitAddConstraint(e){this.append(`add `),this.visitNode(e.constraint)}visitDropConstraint(e){this.append(`drop constraint `),e.ifExists&&this.append(`if exists `),this.visitNode(e.constraintName),e.modifier===`cascade`?this.append(` cascade`):e.modifier===`restrict`&&this.append(` restrict`)}visitRenameConstraint(e){this.append(`rename constraint `),this.visitNode(e.oldName),this.append(` to `),this.visitNode(e.newName)}visitSetOperation(e){this.append(e.operator),this.append(` `),e.all&&this.append(`all `),this.visitNode(e.expression)}visitCreateView(e){this.append(`create `),e.orReplace&&this.append(`or replace `),e.materialized&&this.append(`materialized `),e.temporary&&this.append(`temporary `),this.append(`view `),e.ifNotExists&&this.append(`if not exists `),this.visitNode(e.name),this.append(` `),e.columns&&(this.append(`(`),this.compileList(e.columns),this.append(`) `)),e.as&&(this.append(`as `),this.visitNode(e.as))}visitRefreshMaterializedView(e){this.append(`refresh materialized view `),e.concurrently&&this.append(`concurrently `),this.visitNode(e.name),e.withNoData?this.append(` with no data`):this.append(` with data`)}visitDropView(e){this.append(`drop `),e.materialized&&this.append(`materialized `),this.append(`view `),e.ifExists&&this.append(`if exists `),this.visitNode(e.name),e.cascade&&this.append(` cascade`)}visitGenerated(e){this.append(`generated `),e.always&&this.append(`always `),e.byDefault&&this.append(`by default `),this.append(`as `),e.identity&&this.append(`identity`),e.expression&&(this.append(`(`),this.visitNode(e.expression),this.append(`)`)),e.stored&&this.append(` stored`)}visitDefaultValue(e){this.append(`default `),this.visitNode(e.defaultValue)}visitSelectModifier(e){e.rawModifier?this.visitNode(e.rawModifier):this.append(Ip[e.modifier]),e.of&&(this.append(` of `),this.compileList(e.of,`, `))}visitCreateType(e){this.append(`create type `),this.visitNode(e.name),e.enum&&(this.append(` as enum `),this.visitNode(e.enum))}visitDropType(e){this.append(`drop type `),e.ifExists&&this.append(`if exists `),this.visitNode(e.name),e.additionalNames?.length&&(this.append(`, `),this.compileList(e.additionalNames)),e.cascade&&this.append(` cascade`)}visitAlterType(e){this.append(`alter type `),this.visitNode(e.name),this.append(` `),e.addValue?this.visitNode(e.addValue):e.renameTo?(this.append(`rename to `),this.visitNode(e.renameTo)):e.renameValue?this.visitNode(e.renameValue):e.setSchema&&(this.append(`set schema `),this.visitNode(e.setSchema))}visitAddValue(e){this.append(`add value `),e.ifNotExists&&this.append(`if not exists `),this.visitNode(e.value),e.neighborValue&&(this.append(e.isBefore?` before `:` after `),this.visitNode(e.neighborValue))}visitRenameValue(e){this.append(`rename value `),this.visitNode(e.oldValue),this.append(` to `),this.visitNode(e.newValue)}visitExplain(e){this.append(`explain`),(e.options||e.format)&&(this.append(` `),this.append(this.getLeftExplainOptionsWrapper()),e.options&&(this.visitNode(e.options),e.format&&this.append(this.getExplainOptionsDelimiter())),e.format&&(this.append(`format`),this.append(this.getExplainOptionAssignment()),this.append(e.format)),this.append(this.getRightExplainOptionsWrapper()))}visitDefaultInsertValue(e){this.append(`default`)}visitAggregateFunction(e){this.append(e.func),this.append(`(`),e.distinct&&this.append(`distinct `),this.compileList(e.aggregated),e.orderBy&&(this.append(` `),this.visitNode(e.orderBy)),this.append(`)`),e.withinGroup&&(this.append(` within group (`),this.visitNode(e.withinGroup),this.append(`)`)),e.filter&&(this.append(` filter(`),this.visitNode(e.filter),this.append(`)`)),e.over&&(this.append(` `),this.visitNode(e.over))}visitOver(e){this.append(`over(`),e.partitionBy&&(this.visitNode(e.partitionBy),e.orderBy&&this.append(` `)),e.orderBy&&this.visitNode(e.orderBy),this.append(`)`)}visitPartitionBy(e){this.append(`partition by `),this.compileList(e.items)}visitPartitionByItem(e){this.visitNode(e.partitionBy)}visitBinaryOperation(e){this.visitNode(e.leftOperand),this.append(` `),this.visitNode(e.operator),this.append(` `),this.visitNode(e.rightOperand)}visitUnaryOperation(e){this.visitNode(e.operator),this.isMinusOperator(e.operator)||this.append(` `),this.visitNode(e.operand)}isMinusOperator(e){return rc.is(e)&&e.operator===`-`}visitUsing(e){this.append(`using `),this.compileList(e.tables)}visitFunction(e){this.append(e.func),this.append(`(`),this.compileList(e.arguments),this.append(`)`)}visitCase(e){this.append(`case`),e.value&&(this.append(` `),this.visitNode(e.value)),e.when&&(this.append(` `),this.compileList(e.when,` `)),e.else&&(this.append(` else `),this.visitNode(e.else)),this.append(` end`),e.isStatement&&this.append(` case`)}visitWhen(e){this.append(`when `),this.visitNode(e.condition),e.result&&(this.append(` then `),this.visitNode(e.result))}visitJSONReference(e){this.visitNode(e.reference),this.visitNode(e.traversal)}visitJSONPath(e){e.inOperator&&this.visitNode(e.inOperator),this.append(`'$`);for(let t of e.pathLegs)this.visitNode(t);this.append(`'`)}visitJSONPathLeg(e){let t=e.type===`ArrayLocation`,n=String(e.value);t?(this.append(`[`),this.append(this.sanitizeStringLiteral(n)),this.append(`]`)):(this.append(`."`),this.append(this.sanitizeJSONPathMemberValue(n)),this.append(`"`))}visitJSONOperatorChain(e){for(let t=0,n=e.values.length;t<n;t++)t===n-1?this.visitNode(e.operator):this.append(`->`),this.visitNode(e.values[t])}visitMergeQuery(e){e.with&&(this.visitNode(e.with),this.append(` `)),this.append(`merge `),e.top&&(this.visitNode(e.top),this.append(` `)),this.append(`into `),this.visitNode(e.into),e.using&&(this.append(` `),this.visitNode(e.using)),e.whens&&(this.append(` `),this.compileList(e.whens,` `)),e.returning&&(this.append(` `),this.visitNode(e.returning)),e.output&&(this.append(` `),this.visitNode(e.output)),e.endModifiers?.length&&(this.append(` `),this.compileList(e.endModifiers,` `))}visitMatched(e){e.not&&this.append(`not `),this.append(`matched`),e.bySource&&this.append(` by source`)}visitAddIndex(e){this.parentNode&&Ms.is(this.parentNode)||this.append(`add `),e.unique&&this.append(`unique `),this.append(`index `),this.visitNode(e.name),e.columns&&(this.append(` (`),this.compileList(e.columns),this.append(`)`)),e.using&&(this.append(` using `),this.visitNode(e.using))}visitCast(e){this.append(`cast(`),this.visitNode(e.expression),this.append(` as `),this.visitNode(e.dataType),this.append(`)`)}visitFetch(e){this.append(`fetch next `),this.visitNode(e.rowCount),this.append(` rows ${e.modifier}`)}visitOutput(e){this.append(`output `),this.compileList(e.selections)}visitTop(e){this.append(`top(${e.expression})`),e.modifiers&&this.append(` ${e.modifiers}`)}visitOrAction(e){this.append(e.action)}visitCollate(e){this.append(`collate `),this.visitNode(e.collation)}append(e){this.#e+=e}appendValue(e){this.addParameter(e),this.append(this.getCurrentParameterPlaceholder())}getLeftIdentifierWrapper(){return`"`}getRightIdentifierWrapper(){return`"`}getCurrentParameterPlaceholder(){return`$`+this.numParameters}getLeftExplainOptionsWrapper(){return`(`}getExplainOptionAssignment(){return` `}getExplainOptionsDelimiter(){return`, `}getRightExplainOptionsWrapper(){return`)`}sanitizeIdentifier(e){let t=this.getLeftIdentifierWrapper(),n=this.getRightIdentifierWrapper(),r=``;for(let i of e)r+=i,i===t?r+=t:i===n&&(r+=n);return r}sanitizeStringLiteral(e){return e.replace(Np,`''`)}sanitizeJSONPathMemberValue(e){return e.replace(Pp,e=>e===`'`?`''`:`\\"`)}addParameter(e){this.#t.push(e)}appendImmediateValue(e){if(_s(e))this.appendStringLiteral(e);else if(vs(e)||ys(e)||Ss(e))this.append(e.toString());else if(bs(e))this.append(`null`);else if(xs(e))this.appendImmediateValue(e.toISOString());else throw Error(`invalid immediate value ${e}`)}appendStringLiteral(e){this.append(`'`),this.append(this.sanitizeStringLiteral(e)),this.append(`'`)}sortSelectModifiers(e){return Y(e.toSorted((e,t)=>e.modifier&&t.modifier?Lp[e.modifier]-Lp[t.modifier]:1))}compileColumnAlterations(e){this.compileList(e)}announcesNewColumnDataType(){return!0}};let Ip=Y({ForKeyShare:`for key share`,ForNoKeyUpdate:`for no key update`,ForUpdate:`for update`,ForShare:`for share`,NoWait:`nowait`,SkipLocked:`skip locked`,Distinct:`distinct`}),Lp=Y({ForKeyShare:1,ForNoKeyUpdate:1,ForUpdate:1,ForShare:1,NoWait:2,SkipLocked:2,Distinct:0}),Rp=Y({InnerJoin:`inner join`,LeftJoin:`left join`,RightJoin:`right join`,FullJoin:`full join`,CrossJoin:`cross join`,LateralInnerJoin:`inner join lateral`,LateralLeftJoin:`left join lateral`,LateralCrossJoin:`cross join lateral`,OuterApply:`outer apply`,CrossApply:`cross apply`,Using:`using`});var zp=class{async init(){}async acquireConnection(){return new Bp}async beginTransaction(){}async commitTransaction(){}async rollbackTransaction(){}async releaseConnection(){}async destroy(){}async releaseSavepoint(){}async rollbackToSavepoint(){}async savepoint(){}},Bp=class{async executeQuery(){return{rows:[]}}async*streamQuery(){}},Vp=class{get supportsCreateIfNotExists(){return!0}get supportsMultipleConnections(){return!0}get supportsTransactionalDdl(){return!1}get supportsReturning(){return!1}get supportsOutput(){return!1}};let Hp=/"/g,Up=/[\\'"]/g;var Wp=class extends Fp{visitOrAction(e){this.append(`or `),this.append(e.action)}getCurrentParameterPlaceholder(){return`?`}getLeftExplainOptionsWrapper(){return``}getRightExplainOptionsWrapper(){return``}getLeftIdentifierWrapper(){return`"`}getRightIdentifierWrapper(){return`"`}getAutoIncrement(){return`autoincrement`}sanitizeIdentifier(e){return e.replace(Hp,`""`)}sanitizeJSONPathMemberValue(e){return e.replace(Up,e=>e===`\\`?`\\\\`:e===`'`?`''`:`\\"`)}visitDefaultInsertValue(e){this.append(`null`)}},Gp=class extends Vp{get supportsMultipleConnections(){return!1}get supportsTransactionalDdl(){return!1}get supportsReturning(){return!0}async acquireMigrationLock(e,t){}async releaseMigrationLock(e,t){}};let Kp=/*#__PURE__*/ Dr(`Counter`,/*#__PURE__*/ Zr(65535)(Kr)),qp=`0000000000000000`,Jp=/*#__PURE__*/ Kr.orThrow(8),Yp=e=>wi(e),Xp=e=>Ci(e),Zp=/*#__PURE__*/ A({millis:T,counter:T,nodeId:w}),Qp=(e,t)=>as(e.millis,t.millis)||as(e.counter,t.counter)||is(e.nodeId,t.nodeId),$p=({millis:e=0,counter:t=0,nodeId:n=qp}={})=>({millis:e,counter:t,nodeId:n}),em=e=>{let t=Ci(e.randomBytes.create(8));return $p({nodeId:t})},tm=e=>(t,n)=>{let r=Math.max(n,t.millis),i=r===t.millis?po(t.counter):0;i>65535&&(r=Oa.orThrow(po(r)),i=0);let a={millis:r,counter:i,nodeId:t.nodeId};return rm(e)(r,n)?B({type:`TimestampDriftError`,timestamp:a,cause:`local`,now:n}):z(a)},nm=e=>(t,n,r)=>{if(rm(e)(n.millis,r))return B({type:`TimestampDriftError`,timestamp:n,cause:`remote`,now:r});let i=Qp(t,n)>=0?t:n;return tm(e)({...i,nodeId:t.nodeId},r)},rm=e=>(t,n)=>t-n>e.timestampConfig.maxDrift,im=/*#__PURE__*/ Dr(`TimestampBytes`,/*#__PURE__*/ kr(16)(vr),e=>e[0]===255&&e[1]===255&&e[2]===255&&e[3]===255&&e[4]===255&&e[5]===255?B({type:`TimestampBytes`,value:e}):z(),e=>`The millis part of ${Ci(e.value)} is 2^48 - 1, which Millis reserves for infinity.`),am=/*#__PURE__*/ Kr.orThrow(16),om=qp,sm=/*#__PURE__*/ new globalThis.Uint8Array(Jp),cm=e=>{let{millis:t,counter:n,nodeId:r}=e,i=new globalThis.Uint8Array(16),a=Math.floor(t/2**32);return i[0]=a>>8&255,i[1]=a&255,i[2]=t>>>24&255,i[3]=t>>>16&255,i[4]=t>>>8&255,i[5]=t&255,i[6]=n>>8&255,i[7]=n&255,r!==om&&(sm=Yp(r),om=r),i.set(sm,8),i},lm=e=>{let t=(e[0]<<8|e[1])*2**32+((e[2]<<24|e[3]<<16|e[4]<<8|e[5])>>>0),n=e[6]<<8|e[7],r=0;for(;r<Jp&&e[8+r]===sm[r];)r++;return r<Jp&&(sm=new globalThis.Uint8Array(e.subarray(8,16)),om=Xp(sm)),{millis:t,counter:n,nodeId:om}},um=os,dm=e=>e.startsWith(`_`),fm={Schema:0,TimestampDrift:1},pm={LocalMutation:0,ReceivedMessage:1},mm=/*#__PURE__*/ new Set(/*#__PURE__*/ Object.keys((/* @__PURE__ */ si({createdAt:Or,updatedAt:/*#__PURE__*/ Er(Or),isDeleted:/*#__PURE__*/ Er(es),ownerId:ss})).props)),hm=[...mm,`id`],gm=e=>(t,n)=>{let r=[];n??=_m(e)();for(let[e,i]of Object.entries(t.tables)){N(i);let t=x(n.tables,e);if(!t)r.push(ym(e,i));else for(let n of i.difference(t))r.push(J`
            alter table ${J.identifier(e)}
            add column ${J.identifier(n)} any;
          `);r.push(J`
        create index if not exists ${J.identifier(`evolu_${e}_id`)}
        on ${J.identifier(e)} ("id");
      `)}n.indexes.filter(e=>!t.indexes.some(t=>Qo(t,e))).forEach(e=>{r.push(J`drop index ${J.identifier(e.name)};`)}),t.indexes.filter(e=>!n.indexes.some(t=>Qo(e,t))).forEach(e=>{r.push({sql:`${e.sql};`,parameters:[]})});for(let t of r)e.sqlite.exec(t)},_m=e=>()=>$o(e)({excludeIndexNamePrefix:`evolu_`}),vm=/*#__PURE__*/ new Sp({dialect:{createAdapter:()=>new Gp,createDriver:()=>new zp,createIntrospector(){throw Error(`Not implemeneted`)},createQueryCompiler:()=>new Wp}});vm.schema.createIndex.bind(vm.schema);let ym=(e,t)=>J`
  create table ${J.identifier(e)} (
    "id" text,
    ${J.raw([...mm,...t].map(e=>`${J.identifier(e).sql} any`).join(`, `))},
    primary key ("ownerId", "id")
  )
  without rowid, strict;
`,bm=/*#__PURE__*/ Kr.orThrow(12),xm=/*#__PURE__*/ new Uint8Array(bm),Sm=/*#__PURE__*/ Symbol(`evolu.local-first.Storage.InfiniteUpperBound`),Cm={Fingerprint:1,Skip:0,Timestamps:2},wm=/*#__PURE__*/ si({table:fr,id:Lr,values:/* @__PURE__ */ Dr(`ValidDbChangeValues`,/* @__PURE__ */ ti(fr,Jo),e=>{let t=hm.filter(t=>t in e);return t.length>0?B({type:`ValidDbChangeValues`,value:e,invalidColumns:t}):z()},e=>`DbChange values contain reserved system columns: ${e.invalidColumns.join(`, `)}.`),isInsert:hr,isDelete:/*#__PURE__*/ Er(hr)}),Tm=e=>({insertTimestamp:(t,n)=>{let r=km(e),{rows:i}=e.sqlite.prepared`
      select evolu_skiplist_insert(
        ${t},
        ${n},
        ${r}
      ) as inserted;
    `;return i[0].inserted===1},getExistingTimestamps:(t,n)=>{let r=Di(n);return e.sqlite.prepared`
      with recursive
        split_timestamps(timestampBytes, pos) as (
          select
            substr(${r}, 1, 16),
            17 as pos
          union all
          select
            substr(${r}, pos, 16),
            pos + 16
          from split_timestamps
          where pos <= length(${r})
        )
      select s.timestampBytes
      from split_timestamps s
      cross join evolu_timestamp t
        on t.ownerId = ${t} and s.timestampBytes = t.t;
    `.rows.map(e=>e.timestampBytes)},getSize:t=>{let{rows:n}=e.sqlite.prepared`
      select evolu_skiplist_size(${t}) as size;
    `;return n[0].size},fingerprint:(t,n,r)=>(Em(n,r),Mm(e)(t,n,r)),fingerprintRanges:Nm(e),findLowerBound:(t,n,r,i)=>{if(Em(n,r),r===0||n===r||i===Sm)return r;let{rows:a}=e.sqlite.prepared`
      select evolu_skiplist_lower_bound(
        ${t},
        ${i}
      ) as lowerBound;
    `;return a[0].lowerBound??r},iterate:(t,n,r,i)=>{Em(n,r);let a=r-n;if(a===0)return;let o=Pm(e)(t,n);if(!i(o,n)||a===1)return;let s=n;e.sqlite.iterate(J`
        select t
        from evolu_timestamp
        where ownerId = ${t} and t > ${o}
        order by t
        limit ${a-1};
      `,e=>(s++,i(e.t,s)))},deleteOwner:t=>{e.sqlite.exec(J`
      delete from evolu_timestamp where ownerId = ${t};
    `),e.sqlite.exec(J`
      delete from evolu_usage where ownerId = ${t};
    `)}}),Em=(e,t)=>{j(e<=t,`invalid begin or end`)},Dm=e=>{for(let t of[J`
      create table evolu_timestamp (
        "ownerId" blob not null,
        "t" blob not null,
        "h1" integer,
        "h2" integer,
        "c" integer,
        "l" integer not null,
        primary key ("ownerId", "t")
      )
      strict;
    `,J`
      create index evolu_timestamp_index
      on evolu_timestamp ("ownerId", "l", "t", "h1", "h2", "c");
    `,J`
      create table evolu_usage (
        "ownerId" blob primary key,
        "storedBytes" integer not null,
        "firstTimestamp" blob,
        "lastTimestamp" blob
      )
      strict;
    `])e.sqlite.exec(t)},Om=(e,t,n)=>um(e,n)===1?[t,e]:um(e,t)===-1?[e,n]:[t,n],km=e=>{let t=1;for(;e.random.next()<=Am&&t<jm;)t+=1;return t},Am=.25,jm=10,Mm=e=>(t,n,r)=>r-n===0?xm:n===0?Nm(e)(t,[r])[0].fingerprint:Nm(e)(t,[n,r])[1].fingerprint,Nm=e=>(t,n,r=Sm)=>{let i=new Uint8Array(n.length*8),a=new DataView(i.buffer);for(let[e,t]of n.entries())a.setBigUint64(e*8,BigInt(t));let{rows:o}=e.sqlite.prepared`
      select evolu_skiplist_fingerprints(
        ${t},
        ${i}
      ) as ranges;
    `,{ranges:s}=o[0];return n.map((e,t)=>({type:Cm.Fingerprint,upperBound:t===n.length-1?r:s.slice(t*28+12,t*28+28),fingerprint:s.slice(t*28,t*28+12)}))},Pm=e=>(t,n)=>{let{rows:r}=e.sqlite.prepared`
      select evolu_skiplist_timestamp_at(${t}, ${n}) as t;
    `,{t:i}=r[0];return j(i,`index out of range`),i},Fm=e=>(t,n)=>{let r=e.sqlite.prepared`
      select storedBytes, firstTimestamp, lastTimestamp
      from evolu_usage
      where ownerId = ${t};
    `;if(!ie(r.rows))return{storedBytes:null,firstTimestamp:n,lastTimestamp:n};let i=ce(r.rows);return N(i.firstTimestamp),N(i.lastTimestamp),{storedBytes:i.storedBytes,firstTimestamp:i.firstTimestamp,lastTimestamp:i.lastTimestamp}},Im=e=>(t,n,r,i)=>{e.sqlite.prepared`
      insert into evolu_usage
        ("ownerId", "storedBytes", "firstTimestamp", "lastTimestamp")
      values
        (${t}, ${n}, ${r}, ${i})
      on conflict (ownerId) do update
        set
          storedBytes = ${n},
          firstTimestamp = ${r},
          lastTimestamp = ${i};
    `},Lm=Yr,Rm={Request:0,Response:1,Broadcast:2},zm={None:0,Subscribe:1,Unsubscribe:2},Bm={NoError:0,WriteKeyError:1,WriteError:2,QuotaError:3,SyncError:4},Vm=e=>(t,n)=>{let r=Hm(t,{messageType:Rm.Request,subscriptionFlag:n??zm.None}),i=ls(t),a=e.storage.getSize(i),o=$m(e)(i,qr,a,Sm);for(let e of o)r.addRange(e);return r.unwrap()},Hm=(e,t)=>{let{totalMaxSize:n=1e6,rangesMaxSize:r=3e4,version:i=Lm}=t,a={header:ki(),messages:{timestamps:Um(),dbChangeLengths:ki()},ranges:{timestamps:Um(),types:ki(),payloads:ki()}};if(Pi(a.header,i),a.header.extend(ls(e)),a.header.extend([t.messageType]),t.messageType===Rm.Request){t.writeKey?(a.header.extend([1]),a.header.extend(t.writeKey)):a.header.extend([0]);let e=t.subscriptionFlag??zm.None;a.header.extend([e])}else t.messageType===Rm.Response&&a.header.extend([t.errorCode]);let o=[],s=0,c=!1,l=!1,u=()=>d()<=n,d=()=>a.header.getLength()+a.messages.timestamps.getLength()+a.messages.dbChangeLengths.getLength()+s+f(),f=()=>a.ranges.timestamps.getCount()>0?a.ranges.timestamps.getLength()+a.ranges.types.getLength()+a.ranges.payloads.getLength():0;return{addMessage:e=>{a.messages.timestamps.add(e.timestamp),Ii(a.messages.dbChangeLengths,e.change),o.push(e.change),s+=e.change.length,j(l||u(),`the message is too big`)},addRange:e=>{switch(j(t.messageType!==Rm.Broadcast,`Cannot add a range into broadcast message`),j(!c,`Cannot add a range after an InfiniteUpperBound range`),c=e.upperBound===Sm,e.upperBound===Sm?a.ranges.timestamps.addInfinite():a.ranges.timestamps.add(lm(e.upperBound)),Pi(a.ranges.types,e.type),e.type){case Cm.Skip:break;case Cm.Fingerprint:a.ranges.payloads.extend(e.fingerprint);break;case Cm.Timestamps:e.timestamps.append(a.ranges.payloads)}j(l||u(),`the range ${e.type} is too big`)},tryWrite:(e,i=qr)=>{let u=a.messages.timestamps.checkpoint(),p=a.messages.dbChangeLengths.getLength(),m=o.length,h=s,g=a.ranges.timestamps.checkpoint(),_=a.ranges.types.getLength(),v=a.ranges.payloads.getLength(),y=c,b=l,x=!1;l=!0;try{e();let o=a.ranges.timestamps.getCount()+1;for(;o%128==0;)o/=128;let s=(t.messageType===Rm.Broadcast||c?0:1+bm+ +(o===1))+i;x=d()+s<=n&&f()+s<=r}finally{l=b,x||(u(),a.messages.dbChangeLengths.truncate(p),o.length=m,s=h,g(),a.ranges.types.truncate(_),a.ranges.payloads.truncate(v),c=y)}return x},unwrap:()=>{a.ranges.timestamps.getCount()>0&&j(c,`The last range's upperBound must be InfiniteUpperBound`);let e=new Uint8Array(d());e.set(a.header.unwrap());let t=a.header.getLength(),n=ki();a.messages.timestamps.append(n),e.set(n.unwrap(),t),t+=n.getLength();let r=a.messages.dbChangeLengths.unwrap(),i=0;for(let n of o){do e[t++]=r[i];while(r[i++]>=128);e.set(n,t),t+=n.length}if(a.ranges.timestamps.getCount()>0){let n=ki();a.ranges.timestamps.append(n),n.extend(a.ranges.types.unwrap()),n.extend(a.ranges.payloads.unwrap()),e.set(n.unwrap(),t),t+=n.getLength()}return j(t===e.length,`the frame size is exact`),e},getSize:d}},Um=()=>{let e=qr,t=ki(),n=()=>{t.reset(),Pi(t,e)};n();let r=ki(),i=0,a=Bi((e,t)=>{Pi(e,t)}),o=Bi((e,t)=>{e.extend(Yp(t))});return{add:t=>{let s=t.millis-i;Rn(Kr,s),e++,n(),i=t.millis,Pi(r,s),a.add(t.counter),o.add(t.nodeId)},addInfinite:()=>{e++,n()},getCount:()=>e,getLength:()=>t.getLength()+r.getLength()+a.getLength()+o.getLength(),append:e=>{e.extend(t.unwrap()),e.extend(r.unwrap()),e.extend(a.unwrap()),e.extend(o.unwrap())},checkpoint:()=>{let t=e,s=r.getLength(),c=i,l=a.checkpoint(),u=o.checkpoint();return()=>{e=t,n(),r.truncate(s),i=c,l(),u()}}}},Wm=(e,t={})=>async n=>{let{storage:r}=n.deps,i=t.version??Lm,a=Gm(e,i);if(!a.ok)return a;let o=a.value;if(o.type===`OtherVersion`)return B({type:`ProtocolVersionError`,version:o.version,isInitiator:i<o.version,ownerId:o.ownerId});if(o.type===`Request`)return B({type:`ProtocolInvalidDataError`,error:new Jm(`Expected a Response or a Broadcast`)});let{ownerId:s}=o;if(o.type===`ErrorResponse`)switch(o.errorCode){case Bm.WriteKeyError:return B({type:`ProtocolWriteKeyError`,ownerId:s});case Bm.WriteError:return B({type:`ProtocolWriteError`,ownerId:s});case Bm.QuotaError:return B({type:`ProtocolQuotaError`,ownerId:s});case Bm.SyncError:return B({type:`ProtocolSyncError`,ownerId:s})}let{messages:c}=o,l=ls(s);if(ie(c))try{let e=await n(r.writeMessages(l,c));if(!e.ok)return e}catch(e){if(yo.is(e))throw e;return n.deps.console.error(e),z({type:`Failed`,cause:`Write`})}if(o.type===`Broadcast`)return z({type:`Broadcast`});let u=t.writeKey;if(u==null)return z({type:`Readonly`});let{ranges:d}=o;if(!ie(d))return z({type:`Converged`});let f=()=>Hm(s,{messageType:Rm.Request,writeKey:u,rangesMaxSize:t.rangesMaxSize}),p=f(),m,h=Zm(n.deps)(d,p,l,{createEmptyOutput:f,onChangeTooLarge:t.onChangeTooLarge??n.deps.console.warn,onMessage:e=>{m??=Hm(s,{messageType:Rm.Broadcast}),m.addMessage(e)}});return h.ok?h.value?z({type:`Response`,message:p.unwrap(),...m&&{broadcast:m.unwrap()}}):z({type:`Converged`}):z({type:`Failed`,cause:`Sync`})},Gm=(e,t)=>{try{let n=ki(e),[r,i]=Km(n);if(r!==t)return z({type:`OtherVersion`,version:r,ownerId:i});switch(qm(n)){case Rm.Request:{let e=n.shift();if(e>1)throw new Jm(`Invalid hasWriteKey: ${e}`);let t=e===1?n.shiftN(ds):null,r=n.shift();switch(r){case zm.None:case zm.Subscribe:case zm.Unsubscribe:break;default:throw new Jm(`Invalid SubscriptionFlag: ${r}`)}let a=Ym(n);for(let{change:e}of a)if(e.length<Xm)throw new Jm(`EncryptedDbChange is too short`);return z({type:`Request`,ownerId:i,writeKey:t,subscriptionFlag:r,messages:a,ranges:th(n)})}case Rm.Response:{let e=n.shift();switch(e){case Bm.NoError:return z({type:`Response`,ownerId:i,messages:Ym(n),ranges:th(n)});case Bm.WriteKeyError:case Bm.WriteError:case Bm.QuotaError:case Bm.SyncError:return z({type:`ErrorResponse`,ownerId:i,errorCode:e});default:throw new Jm(`Invalid ProtocolErrorCode: ${e}`)}}case Rm.Broadcast:return z({type:`Broadcast`,ownerId:i,messages:Ym(n)})}}catch(e){return B({type:`ProtocolInvalidDataError`,error:e})}},Km=e=>[Fi(e),rh(e)],qm=e=>{let t=e.shift();switch(t){case Rm.Request:case Rm.Response:case Rm.Broadcast:return t;default:throw new Jm(`Invalid MessageType`)}};var Jm=class extends Error{constructor(e){super(e),this.name=`ProtocolDecodeError`}};let Ym=e=>{let t=nh(e),n=re(t.length);for(let r=0;r<t.length;r++){let i=t[r],a=Li(e),o=e.shiftN(a);n[r]={timestamp:i,change:o}}return n},Xm=41,Zm=e=>(t,n,r,{createEmptyOutput:i,onChangeTooLarge:a,onMessage:o})=>{let s=n.getSize(),c;try{c=e.storage.getSize(r)}catch(t){return e.console.error(t),B(Bm.SyncError)}let l=null,u=qr,d=qr,f=!1,p=!1,m=0,h=(e=1)=>m+e>8192?!1:(m+=e,!0),g=e=>{p&&e.upperBound===Sm?n.addRange({type:Cm.Skip,upperBound:Sm}):f=!0},_=(e,t)=>{let r=n.tryWrite(()=>{f&&(N(l,`prevUpperBound is null`),n.addRange({type:Cm.Skip,upperBound:l})),t()});return r&&(f=!1,p=!0,d=e),r},v=()=>{let t;try{t=e.storage.fingerprint(r,d,c)}catch(t){return e.console.error(t),B(Bm.SyncError)}return n.addRange({type:Cm.Fingerprint,upperBound:Sm,fingerprint:t}),z(!0)};for(let s of t){let t=s.upperBound;if(u<c&&t!==Sm&&!h())return v();let d=u,p;try{p=e.storage.findLowerBound(r,u,c,t)}catch(t){return e.console.error(t),B(Bm.SyncError)}switch(s.type){case Cm.Skip:g(s);break;case Cm.Fingerprint:{if(d<p&&!h())return v();let i;try{i=e.storage.fingerprint(r,d,p)}catch(t){return e.console.error(t),B(Bm.SyncError)}if(O(s.fingerprint,i)){g(s);break}if(p-d>=32&&!h(16))return v();let a;try{a=$m(e)(r,d,p,t)}catch(t){if(yo.is(t))throw t;return e.console.error(t),B(Bm.SyncError)}if(!_(p,()=>{for(let e of a)n.addRange(e)}))return v();break}case Cm.Timestamps:{if(d<p&&!h())return v();let c=t,l=new Map(s.timestamps.map(e=>[e.join(),!0])),u=Um(),m=!1,y=!1,b=f,x=null,S=[];try{e.storage.iterate(r,d,p,(t,a)=>{try{if(a>d&&(a-d)%32==0&&!h())return m=!0,c=t,p=a,!1;let s=t.join(),f=lm(t),g=null;if(l.has(s))l.delete(s);else try{g={timestamp:f,change:e.storage.readDbChange(r,t)}}catch(t){return e.console.error(t),y=!0,!1}let _=u.checkpoint();if(u.add(f),n.tryWrite(()=>{g&&n.addMessage(g)},Qm(u,b)))return g&&o?.(g),!0;if(_(),g){let e=i(),t=Um();if(t.add(g.timestamp),!e.tryWrite(()=>{e.addMessage(g)},Qm(t,!0))&&h(Math.ceil(g.change.length/131072)))return S.push({type:`ProtocolChangeTooLargeError`,timestamp:f,size:g.change.length}),!0}return m=!0,c=t,p=a,!1}catch(e){return x={error:e},!1}})}catch(t){e.console.error(t),y=!0}if(x)throw x.error;for(let e of S)a(e);if(y)return B(Bm.SyncError);let C=()=>_(p,()=>{n.addRange({type:Cm.Timestamps,upperBound:c,timestamps:u})});if(m)return C(),v();if(l.size>0){if(!C())return v()}else g(s);break}}u=p,l=t}return z(n.getSize()>s)},Qm=(e,t)=>e.getLength()+22+(t?22:0),$m=e=>(t,n,r,i)=>{let a=Kr.orThrow(r-n),o=mo(a);if(!o.ok){let a={type:Cm.Timestamps,upperBound:i,timestamps:Um()};return e.storage.iterate(t,n,r,e=>(a.timestamps.add(lm(e)),!0)),[a]}let s=n===0?o.value:[n,...o.value.map(e=>e+n)],c=e.storage.fingerprintRanges(t,s,i);return n>0?c.slice(1):c},eh=2e5,th=e=>{if(e.getLength()>eh)throw new Jm(`Ranges section exceeds ${eh} bytes`);if(e.getLength()===0)return[];let t=Fi(e);if(t===0)return[];let n=t-1,r=nh(e,n);for(let e=1;e<r.length;e++)if(Qp(r[e-1],r[e])>0)throw new Jm(`Range upper bounds must be non-decreasing`);let i=re(t);for(let n=0;n<t;n++){let t=Fi(e);switch(t){case Cm.Fingerprint:case Cm.Skip:case Cm.Timestamps:i[n]=t;break;default:throw new Jm(`Invalid RangeType: ${t}`)}}let a=re(t);for(let o=0;o<t;o++){let t=o<n?cm(r[o]):Sm;switch(i[o]){case Cm.Skip:a[o]={type:Cm.Skip,upperBound:t};break;case Cm.Fingerprint:{let n=e.shiftN(bm);a[o]={type:Cm.Fingerprint,upperBound:t,fingerprint:n};break}case Cm.Timestamps:{let n=nh(e).map(cm);a[o]={type:Cm.Timestamps,upperBound:t,timestamps:n};break}}}return a},nh=(e,t)=>{if(t??=Fi(e),t>e.getLength())throw new Jm(`Invalid timestamps count`);let n=0,r=re(t);for(let i=0;i<t;i++){let t=Fi(e),a=Oa.fromUnknown(n+t);if(!a.ok)throw new Jm(a.error.type);r[i]=a.value,n=a.value}let i=Vi(e,t,()=>{let t=Kp.fromUnknown(Fi(e));if(!t.ok)throw new Jm(t.error.type);return t.value}),a=Vi(e,t,()=>Xp(e.shiftN(Jp))),o=re(t);for(let e=0;e<t;e++)o[e]={millis:r[e],counter:i[e],nodeId:a[e]};return o},rh=e=>{let t=e.shiftN(16);return Vr(t)},ih=Yr,ah=e=>(t,n)=>{let r=ki();sh(r,t),r.extend(uo(r.getLength()));let i=e.randomBytes.create(24),a=e.xChaCha20Poly1305.encrypt(r.unwrap(),i,n);return r.reset(),r.extend(i),Ii(r,a),r.extend(a),r.unwrap()},oh=e=>{let t=ki();sh(t,e);let n=lo(t.getLength())+16;return t.reset(),Pi(t,n),24+t.getLength()+n},sh=(e,t)=>{Pi(e,ih),e.extend(cm(t.timestamp)),Mi(e,[t.change.isInsert,t.change.isDelete!=null,t.change.isDelete??!1]),Ri(e,t.change.table),e.extend(Br(t.change.id));let n=v(t.change.values);Ii(e,n);for(let[t,r]of n){Ri(e,t);let n=r;uh(e,Object.is(n,-0)?0:n)}},ch=e=>(t,n)=>{try{let r=ki(t.change),i=r.shiftN(24),a=r.shiftN(Li(r)),o=e.xChaCha20Poly1305.decrypt(a,i,n);if(!o.ok)return o;if(r.reset(),r.extend(o.value),Fi(r)>ih)throw new Jm(`Unsupported EncryptedDbChange version`);let s=im.fromUnknown(r.shiftN(am));if(!s.ok)throw new Jm(s.error.type);let c=lm(s.value);if(!Zp(c,t.timestamp))return B({type:`ProtocolTimestampMismatchError`,expected:t.timestamp,timestamp:c});let l=Ni(r,3),u=zi(r),d=rh(r),f=Li(r),p=b();for(let e=0;e<f;e++){let e=zi(r);p[e]=fh(r)}let m=wm.fromUnknown({table:u,id:d,values:p,isInsert:l[0],isDelete:l[1]?l[2]:null});if(!m.ok)throw new Jm(`Invalid DbChange`);return z(m.value)}catch(e){return B({type:`ProtocolInvalidDataError`,error:e})}},lh={String:/*#__PURE__*/ Kr.orThrow(20),Number:/*#__PURE__*/ Kr.orThrow(21),Null:/*#__PURE__*/ Kr.orThrow(22),Bytes:/*#__PURE__*/ Kr.orThrow(23),NonNegativeInt:/*#__PURE__*/ Kr.orThrow(30),EmptyString:/*#__PURE__*/ Kr.orThrow(31),Base64Url:/*#__PURE__*/ Kr.orThrow(32),Id:/*#__PURE__*/ Kr.orThrow(33),Json:/*#__PURE__*/ Kr.orThrow(34),DateIsoWithNonNegativeTime:/*#__PURE__*/ Kr.orThrow(35),DateIsoWithNegativeTime:/*#__PURE__*/ Kr.orThrow(36)},uh=(e,t)=>{if(t===null)Pi(e,lh.Null);else{switch(typeof t){case`string`:{if(t===``){Pi(e,lh.EmptyString);return}let n=Or.from.parent(t);if(n.ok){let t=new Date(n.value).getTime();Kr.is(t)?(Pi(e,lh.DateIsoWithNonNegativeTime),Pi(e,t)):(Pi(e,lh.DateIsoWithNegativeTime),Ai(e,t));return}let r=Lr.from.parent(t);if(r.ok){Pi(e,lh.Id),e.extend(Br(r.value));return}let i=t[0],a=t[t.length-1],o=i===`"`&&a===`"`||i===`[`&&a===`]`||i===`{`&&a===`}`,s=o?t.replaceAll(dh,`�`):t,c=o||(i===`-`||i>=`0`&&i<=`9`)&&a>=`0`&&a<=`9`||t===`true`||t===`false`||t===`null`?xi.from.parent(s):null;if(c?.ok&&!s.includes(`\\ud`)){let t=Si(c.value),n=ki();try{if($i(n,t),JSON.stringify(t)===s){let t=n.unwrap();Pi(e,lh.Json),Ii(e,t),e.extend(t);return}}catch(e){if(!(e instanceof Oi))throw e}}let l=Nr.from.parent(t);if(l.ok){Pi(e,lh.Base64Url);let t=Fr(l.value);Ii(e,t),e.extend(t);return}Pi(e,lh.String),Ri(e,t);return}case`number`:if(!Object.is(t,-0)&&Kr.is(t)){if(ph(t)){Pi(e,t);return}Pi(e,lh.NonNegativeInt),Pi(e,t);return}Pi(e,lh.Number),Ai(e,t);return}Pi(e,lh.Bytes),Ii(e,t),e.extend(t)}},dh=/[\uD800-\uDFFF]/gu,fh=e=>{let t=Fi(e);if(ph(t))return t;switch(t){case lh.String:return zi(e);case lh.Number:return ji(e);case lh.Null:return null;case lh.Bytes:{let t=Li(e);return e.shiftN(t)}case lh.Id:return rh(e);case lh.NonNegativeInt:return Fi(e);case lh.Json:{let t=Li(e),n=ki(e.shiftN(t)),r=ea(n);if(n.getLength()!==0)throw new Jm(`Invalid JSON MessagePack length`);return JSON.stringify(r)}case lh.DateIsoWithNonNegativeTime:case lh.DateIsoWithNegativeTime:{let n=t===lh.DateIsoWithNonNegativeTime?Fi(e):ji(e),r=Or.from.parent(new Date(n).toISOString());if(!r.ok)throw new Jm(r.error.type);return r.value}case lh.EmptyString:return``;case lh.Base64Url:{let t=Li(e),n=e.shiftN(t);return Pr(n)}default:throw new Jm(`invalid ProtocolValueType`)}},ph=e=>e>=0&&e<20,mh=(e,t)=>{V(()=>e.postMessage({type:`ConsoleEntry`,entry:t})).ok||e.postMessage({type:`ConsoleEntry`,entry:{...t,args:t.args.map(e=>V(()=>structuredClone(e)).ok?e:e instanceof Error?Bo(e).error:H(e))}})},hh=ka.orThrow(9e4);ka.orThrow(16*hh),ka.orThrow(hh+3e4),ka.orThrow(5e3);var gh=function(e,t,n){if(t!=null){if(typeof t!=`object`&&typeof t!=`function`)throw TypeError(`Object expected.`);var r,i;if(n){if(!Symbol.asyncDispose)throw TypeError(`Symbol.asyncDispose is not defined.`);r=t[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw TypeError(`Symbol.dispose is not defined.`);r=t[Symbol.dispose],n&&(i=r)}if(typeof r!=`function`)throw TypeError(`Object not disposable.`);i&&(r=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t},_h=(function(e){return function(t){function n(n){t.error=t.hasError?new e(n,t.error,`An error was suppressed during disposal.`):n,t.hasError=!0}var r,i=0;function a(){for(;r=t.stack.pop();)try{if(!r.async&&i===1)return i=0,t.stack.push(r),Promise.resolve().then(a);if(r.dispose){var e=r.dispose.call(r.value);if(r.async)return i|=2,Promise.resolve(e).then(a,function(e){return n(e),a()})}else i|=1}catch(e){n(e)}if(i===1)return t.hasError?Promise.reject(t.error):Promise.resolve();if(t.hasError)throw t.error}return a()}})(typeof SuppressedError==`function`?SuppressedError:function(e,t,n){var r=Error(n);return r.name=`SuppressedError`,r.error=e,r.suppressed=t,r});let vh=Jr.orThrow(2),yh=e=>async t=>{let n={stack:[],error:void 0,hasError:!1};try{let r=gh(n,new AsyncDisposableStack,!0);r.use(e);let{deps:i}=t,a=await t.ok(No(({resolve:t})=>{e.onMessage=e=>t(z(e))})),o=r.use(i.createMessagePort(a.port));try{i.console.setLevel(a.consoleLevel===`silent`?`error`:a.consoleLevel);let e=r.use(i.createBroadcastChannel(a.consoleEntryOrErrorChannelName));if(r.defer(i.consoleStoreOutputEntry.subscribe(()=>{let t=i.consoleStoreOutputEntry.get();t&&mh(e,t)})),a.mode===`Delete`){let e={stack:[],error:void 0,hasError:!1};try{if(!(await t(Fo(No(({resolve:e})=>{r.use(Uo(i)(a.name,()=>{e(z())}))}),`10s`))).ok)return o.postMessage({type:`DeleteFailed`,error:{type:`DatabaseHeldError`,name:a.name}}),z();let{evolu7:n}=a,{evolu7DatabaseExists:s}=i,c=gh(e,new AsyncDisposableStack,!0),l=null;if(n&&s){let e=await t(wh(n.name,c),{...i,evolu7DatabaseExists:s});if(!e.ok)return o.postMessage({type:`DeleteFailed`,error:e.error}),z();e.value?.appOwnerId===n.appOwnerId?l=e.value:await c.disposeAsync()}if(!await Wo(i)(a.attemptId))return z();let u=await t(i.deleteDatabaseFiles(a.name));if(!u.ok)return o.postMessage({type:`DeleteFailed`,error:u.error}),z();if(n&&l){if(await l.sqlite[Symbol.asyncDispose](),!await Wo(i)(a.attemptId))return z();let e=await t(i.deleteDatabaseFiles(n.name));if(!e.ok)return o.postMessage({type:`DeleteFailed`,error:e.error}),z()}return o.postMessage({type:`DatabaseDeleted`}),z()}catch(t){e.error=t,e.hasError=!0}finally{let t=_h(e);t&&await t}}if(r.use(await t.ok(Ho(a.name))),!await Wo(i)(a.gateId))return z();if(!a.memoryOnly&&i.waitForDatabaseRelease){let e=await t(i.waitForDatabaseRelease(a.name));if(!e.ok)return o.postMessage({type:`LeaderRefused`,error:e.error}),z()}let n=Xo(a.name,a.memoryOnly?{mode:`memory`}:{mode:`encrypted`,encryptionKey:a.encryptionKey}),s=r.use(await t.ok(n)),c=a.createFirstAppOwner?.evolu7Name??a.evolu7?.name,l=r.use(new AsyncDisposableStack),u=null,d=null;if(c!=null&&!a.memoryOnly&&i.evolu7DatabaseExists&&(a.evolu7!=null||s.exec(J`
            select 1 from pragma_table_info('evolu_version') limit 1;
          `).rows.length===0)){let e=await t(wh(c,l),{...i,evolu7DatabaseExists:i.evolu7DatabaseExists});if(!e.ok)return o.postMessage({type:`LeaderRefused`,error:e.error}),z();if(u=e.value,u&&a.createFirstAppOwner){let{rows:e}=u.sqlite.exec(J`select "appOwnerMnemonic" from evolu_config limit 1;`),t=e[0]?.appOwnerMnemonic;if(Ir.is(t)){let e=ps(t);ms(e)===u.appOwnerId&&(d=e)}}}let f=u&&u.appOwnerId===a.evolu7?.appOwnerId?u:null;f||await l.disposeAsync();let p=Tm({sqlite:s,...i}),m={...i,sqlite:s,sqliteSchema:a.sqliteSchema,baseSqliteStorage:p,timestampConfig:{maxDrift:3e5}};!a.memoryOnly&&s.exec(J`select 1 from sqlite_schema limit 1;`).rows.length===0&&(s.exec(J`pragma auto_vacuum = full;`),s.exec(J`vacuum;`));let h=s.transaction(()=>{let{rows:e}=s.exec(J`
            select "name" from pragma_table_info('evolu_version');
          `),t=new Set(e.map(e=>e.name)),n=t.size===0,r;if(n)r=em(m),Ch(m)(r);else{let e=xh(m)(t);if(!e.ok)return e;let{rows:n}=s.exec(J`
              select "clock" from evolu_config limit 1;
            `);P(n),r=lm(ce(n).clock)}if(gm(m)(a.sqliteSchema),n&&a.createFirstAppOwner){let e=d??fs(m);Rh(m)({ownerId:a.createFirstAppOwner.deviceOwnerId,...wm.orThrow({table:hs,id:ms(e),values:{secret:e},isInsert:!0,isDelete:null})},i.time.now())}f&&(kh(m)(f.sqlite,Math.max(i.time.now(),f.clock.millis)),Qp(f.clock,r)===1&&(r=f.clock,bh(m)(r)));let o=Mh(m)(r);return o&&(r=o,bh(m)(o)),jh(m),z(r)});if(!h.ok)return o.postMessage({type:`LeaderRefused`,error:h.error}),z();let g=h.value;if(f&&c!=null){await f.sqlite[Symbol.asyncDispose]();let e=await t(i.deleteDatabaseFiles(c));if(!e.ok)return o.postMessage({type:`LeaderRefused`,error:e.error}),z()}if(await l.disposeAsync(),!a.memoryOnly){let{rows:e}=s.exec(J`
          select
            (select auto_vacuum from pragma_auto_vacuum) as "autoVacuum",
            (
              (select page_count from pragma_page_count) -
                (select freelist_count from pragma_freelist_count)
            ) * (select page_size from pragma_page_size) as "size";
        `);if(e[0].autoVacuum!==1&&e[0].size<=104857600){try{s.exec(J`pragma auto_vacuum = full;`),s.exec(J`vacuum;`)}catch(e){i.console.warn(`The database keeps the pages deletions free, because switching it to auto_vacuum failed.`,e)}await s[Symbol.asyncDispose](),s=r.use(await t.ok(n)),p=Tm({sqlite:s,...i}),m={...m,sqlite:s,baseSqliteStorage:p}}}let _=Ih({...m,xChaCha20Poly1305:i.xChaCha20Poly1305??co()}),v=r.use(t.create({storage:_})),y=e=>V(()=>{let t=ls(e);s.transaction(()=>{let{rows:n}=s.exec(J`
              select m.name
              from sqlite_master as m
              join pragma_table_info(m.name) as c on c.name = 'ownerId'
              where
                m.type = 'table'
                and m.name not in
                  (
                    'evolu_history',
                    'evolu_message_quarantine',
                    'evolu_timestamp',
                    'evolu_usage'
                  );
            `);for(let{name:t}of n)s.exec(J`
                delete from ${J.identifier(t)}
                where "ownerId" = ${e};
              `);s.exec(J`
              delete from evolu_history
              where "ownerId" = ${t};
            `),s.exec(J`
              delete from evolu_message_quarantine
              where "ownerId" = ${t};
            `),p.deleteOwner(t)})},Bo),b=e=>V(()=>{let t=ls(e),{rows:n}=s.exec(J`
            select "storedBytes"
            from evolu_usage
            where "ownerId" = ${t};
          `);if(!ie(n))return null;let r=ce(n);if(r.storedBytes!==Bh)return{storedBytes:r.storedBytes};let i=Vh({sqlite:s})(t);return V(()=>s.exec(J`
              update evolu_usage
              set "storedBytes" = ${i}
              where "ownerId" = ${t};
            `)),{storedBytes:i}},Bo);return o.postMessage({type:`LeaderAcquired`,clock:g}),await t.ok(No(({resolve:e,reject:t})=>{o.onMessage=n=>{try{if(n.type===`Dispose`){e(z());return}let{attemptId:t}=n,r=e=>{o.postMessage({type:`OnQueuedResponse`,attemptId:t,response:e},e.type===`ForEvolu`&&e.message.type===`Export`?[e.message.file.buffer]:void 0)};if(`clock`in n){let{clock:e,now:t}=n,i=e,a={now:t,clock:{get:()=>i,set:e=>{i=e}}},o=n.request;if(o.type===`ForSharedWorker`){let{owner:e,inputMessage:t,continues:n}=o.message;v(async i=>{_.setRequestContext(e.encryptionKey,a);let o=await i(Wm(t,{...n&&{writeKey:e.writeKey},onChangeTooLarge:_.onChangeTooLarge}));return r({type:`ForSharedWorker`,message:{type:`ApplySyncMessage`,clock:a.clock.get(),ownerId:e.id,didWriteMessages:_.didWriteMessages(),skippedError:_.skippedError(),result:o}}),z()})}else{let e=V(()=>Lh({...m,clock:a.clock})(o.message,t),Bo);r({type:`ForEvolu`,id:o.id,message:e.ok?e.value:{type:`MutateFailed`,error:e.error}})}return}let a=n.request;if(a.type===`ForSharedWorker`){if(a.message.type===`HasAppOwner`){let{ownerId:e}=a.message,t=V(()=>s.exec(J`
                        select 1
                        from ${J.identifier(hs)}
                        where "id" = ${e};
                      `).rows.length>0,Bo);t.ok||i.console.error(t.error),r({type:`ForSharedWorker`,message:{type:`HasAppOwner`,result:t}});return}if(a.message.type===`DeleteOwner`){r({type:`ForSharedWorker`,message:{type:`DeleteOwner`,result:y(a.message.ownerId)}});return}let e=/* @__PURE__ */ new Map,t=/* @__PURE__ */ new Set;for(let n of a.message.owners){_.setRequestContext(n.encryptionKey);try{e.set(n.id,Vm({storage:_})(n.id,zm.Subscribe))}catch(e){i.console.error(e),t.add(n.id)}}r({type:`ForSharedWorker`,message:{type:`CreateSyncMessages`,protocolMessagesByOwnerId:e,failedOwnerIds:t}});return}if(a.message.type===`Query`){V(()=>s.prepared`begin;`);let e=Uh(m)(a.message.queries);V(()=>s.prepared`commit;`),r({type:`ForEvolu`,id:a.id,message:{type:`Query`,rowsByQuery:e}});return}if(a.message.type===`Export`){let e=V(()=>s.export(),Bo);r({type:`ForEvolu`,id:a.id,message:e.ok?{type:`Export`,file:e.value}:{type:`ExportFailed`,error:e.error}});return}if(a.message.type===`DeleteOwner`){let e=y(a.message.ownerId);r({type:`ForEvolu`,id:a.id,message:e.ok?{type:`OwnerDeleted`}:{type:`DeleteOwnerFailed`,error:e.error}});return}if(a.message.type===`LoadOwnerUsage`){let e=b(a.message.ownerId);r({type:`ForEvolu`,id:a.id,message:e.ok?{type:`OwnerUsage`,usage:e.value}:{type:`LoadOwnerUsageFailed`,error:e.error}});return}ee(a.message)}catch(e){t(e)}};let n=Uo(i)(a.sharedWorkerId,()=>e(z()));return()=>{o.onMessage=null,n[Symbol.dispose]()}})),z()}catch(e){throw yo.is(e)&&e.reason.type!==`PanicAbortReason`||o.postMessage({type:`LeaderRefused`,error:Bo(Vo(e))}),e}}catch(e){n.error=e,n.hasError=!0}finally{let e=_h(n);e&&await e}},bh=e=>t=>{let n=cm(t);e.sqlite.prepared`
      update evolu_config
      set "clock" = ${n}
      where "clock" < ${n};
    `},xh=({sqlite:e})=>t=>{t.has(`dbVersion`)||e.exec(J`
        alter table evolu_version
        rename column "protocolVersion" to "dbVersion";
      `);let{rows:n}=e.exec(J`
      select "dbVersion" from evolu_version;
    `),r=n[0].dbVersion;return r>vh?B({type:`UnsupportedDbVersionError`,storedVersion:r,supportedVersion:vh}):(r<vh&&(r<2&&Sh({sqlite:e}),e.exec(J`update evolu_version set "dbVersion" = ${vh};`)),z())},Sh=({sqlite:e})=>{for(let t of[J`
      alter table evolu_message_quarantine
      add column "reason" integer not null default ${J.raw(globalThis.String(fm.Schema))};
    `,J`
      alter table evolu_message_quarantine
      add column "origin" integer not null default ${J.raw(globalThis.String(pm.ReceivedMessage))};
    `,J`
      alter table evolu_message_quarantine
      add column "quarantinedAt" integer;
    `,J`
      create index evolu_message_quarantine_reason_timestamp
      on evolu_message_quarantine ("reason", "timestamp");
    `])e.exec(t)},Ch=({sqlite:e})=>t=>{for(let n of[J`
        create table evolu_version (
          "dbVersion" integer not null
        )
        strict;
      `,J`
        insert into evolu_version ("dbVersion")
        values (${vh});
      `,J`
        create table evolu_config (
          "clock" blob not null
        )
        strict;
      `,J`
        insert into evolu_config ("clock")
        values (${cm(t)});
      `,J`
        create table evolu_history (
          "ownerId" blob not null,
          "table" text not null,
          "id" blob not null,
          "column" text not null,
          "timestamp" blob not null,
          "value" any
        )
        strict;
      `,J`
        create index evolu_history_ownerId_timestamp
        on evolu_history ("ownerId", "timestamp");
      `,J`
        create unique index evolu_history_ownerId_table_id_column_timestampDesc
        on evolu_history ("ownerId", "table", "id", "column", "timestamp" desc);
      `,J`
        create table evolu_message_quarantine (
          "ownerId" blob not null,
          "timestamp" blob not null,
          "table" text not null,
          "id" blob not null,
          "column" text not null,
          "value" any,
          "reason" integer not null default ${J.raw(globalThis.String(fm.Schema))},
          "origin" integer not null default ${J.raw(globalThis.String(pm.ReceivedMessage))},
          "quarantinedAt" integer,
          primary key ("ownerId", "timestamp", "table", "id", "column")
        )
        strict;
      `])e.exec(n);Dm({sqlite:e}),e.exec(J`
      create index evolu_message_quarantine_reason_timestamp
      on evolu_message_quarantine ("reason", "timestamp");
    `)},wh=(e,t)=>async n=>{let{deps:r}=n;if(!(await n(Fo(No(({resolve:n})=>{let i=new AbortController,a=Promise.withResolvers(),o=r.lockManager.request(`evolu-sharedwebworker-${e}`,{signal:i.signal},async()=>{n(z()),await a.promise}).catch(te);t.defer(async()=>{i.abort(),a.resolve(),await o})}),`10s`))).ok)return B({type:`DatabaseHeldError`,name:e});let i=await n(r.evolu7DatabaseExists(e));if(!i.ok)return i;if(!i.value)return z(null);if(r.waitForDatabaseRelease){let t=await n(r.waitForDatabaseRelease(e));if(!t.ok)return t}let a=t.use(await n.ok(Xo(e)));return V(()=>Th(a),Bo)},Th=e=>{let{rows:t}=e.exec(J`
    select 1
    from pragma_table_info('evolu_config')
    where "name" = 'appOwnerId';
  `);if(t.length===0)return null;let{rows:n}=e.exec(J`
    select "clock", "appOwnerId" from evolu_config limit 1;
  `);P(n);let{clock:r,appOwnerId:i}=Ve(Eh.fromUnknown(ce(n)));return{sqlite:e,appOwnerId:i,clock:lm(r)}},Eh=/*#__PURE__*/ si({clock:im,appOwnerId:ss}),Dh=/*#__PURE__*/ si({ownerId:cs,timestamp:im,table:fr,id:zr,column:fr,value:ur}),Oh=/*#__PURE__*/ si({ownerId:ss,id:Lr}),kh=e=>(t,n)=>{let r=t.exec(J`
        select 1
        from sqlite_master
        where "type" = 'table' and "name" = 'evolu_message_quarantine';
      `).rows.length>0,i=null,a=null,o=[],s=[],c=()=>{if(!a||!ie(o))return;let e=wm.fromUnknown(Ah(o));e.ok&&s.push({timestamp:lm(a),change:e.value}),o=[]},l=()=>{i&&ie(s)&&(zh(e)(us(i),s,pm.ReceivedMessage,n),s=[])};t.iterate(r?J`
            select "ownerId", "timestamp", "table", "id", "column", "value"
            from evolu_history
            union all
            select "ownerId", "timestamp", "table", "id", "column", "value"
            from evolu_message_quarantine
            order by "ownerId", "timestamp";
          `:J`
            select "ownerId", "timestamp", "table", "id", "column", "value"
            from evolu_history
            order by "ownerId", "timestamp";
          `,e=>{let{ownerId:t,timestamp:n,table:r,id:u,column:d,value:f}=Ve(Dh.fromUnknown(e));return!i||!k(t,i)?(c(),l(),i=t,a=n):a&&k(n,a)||(c(),s.length>=1e3&&l(),a=n),(d===`isDeleted`||Jo.is(f))&&o.push({table:r,id:u,column:d,value:f}),!0}),c(),l();let u=[];for(let[e,n]of v($o({sqlite:t})().tables))N(n),dm(e)&&u.push([e,n]);if(!ie(u))return;let d=e=>e.replaceAll(/[A-Z]+/gu,e=>e.toLowerCase()),f=e=>new Set(Array.from(e,d)),p=f([`id`,...mm]),m=_m(e)(),h=new Map(v(m.tables).map(([e,t])=>(N(t),[d(e),{table:e,columns:f(t)}]))),g=new Map(u.map(([e,t])=>{let n=h.get(d(e)),r=new Set([...t].filter(e=>{let t=d(e);return!p.has(t)&&!n?.columns.has(t)}));return[e,{currentTable:n?.table??e,lacked:r}]}));gm(e)({tables:Object.fromEntries(Array.from(g.values(),({currentTable:e,lacked:t})=>[e,t])),indexes:m.indexes},m);let _=/* @__PURE__ */ new Set([`ownerId`,`id`]);for(let[n,r]of u){let i=J.identifier(n),a=[...r.difference(_)],o=g.get(n);N(o),t.iterate(J`select * from ${i};`,t=>{let{ownerId:n,id:r}=Ve(Oh.fromUnknown({ownerId:t.ownerId,id:t.id})),s=e.sqlite.prepared`
            insert into ${i} ("ownerId", "id")
            values (${n}, ${r})
            on conflict ("ownerId", "id") do nothing;
          `.changes>0;for(let c of a){if(!s&&!o.lacked.has(c))continue;let a=c===`createdAt`&&t.createdAt===null?t.updatedAt:t[c];a!==null&&Jo.is(a)&&e.sqlite.prepared`
            update ${i}
            set ${J.identifier(c)} = ${a}
            where "ownerId" = ${n} and "id" = ${r};
          `}return!0})}},Ah=e=>{let t=ce(e),n=b(),r=!1,i=null;for(let t of e)switch(t.column){case`createdAt`:r=!0;break;case`updatedAt`:r=!1;break;case`isDeleted`:i=es.is(t.value)?ns(t.value):t.value;break;default:n[t.column]=t.value}return{table:t.table,id:Vr(t.id),values:n,isInsert:r,isDelete:i}},jh=e=>{let{rows:t}=e.sqlite.exec(J`
    select "ownerId", "timestamp", "table", "id", "column", "value"
    from evolu_message_quarantine
    where "reason" = ${fm.Schema};
  `);for(let n of t)Nh(e)(n.table,n.column,n.value)&&(Fh(e)(n.ownerId,us(n.ownerId),n.table,n.id,Vr(n.id),n.column,n.value,n.timestamp),e.sqlite.prepared`
      delete from evolu_message_quarantine
      where
        "ownerId" = ${n.ownerId}
        and "timestamp" = ${n.timestamp}
        and "table" = ${n.table}
        and "id" = ${n.id}
        and "column" = ${n.column};
    `)},Mh=e=>t=>{let n=e.time.now(),r=n+Math.floor(e.timestampConfig.maxDrift);Rn(Wr,r);let i=cm({millis:Aa(r),counter:65535,nodeId:`ffffffffffffffff`}),{rows:a}=e.sqlite.exec(J`
      select distinct "timestamp"
      from evolu_message_quarantine
      where
        "reason" = ${fm.TimestampDrift}
        and "timestamp" <= ${i}
      order by "timestamp";
    `);if(a.length===0)return null;let o=nm(e),s=t;for(let{timestamp:e}of a){let t=lm(e),r=o(s,t,n);r.ok?s=r.value:(j(r.error.cause===`local`,`The query bound excludes remote drift at the captured time.`),s=r.error.timestamp)}return e.sqlite.exec(J`
      update evolu_message_quarantine
      set "reason" = ${fm.Schema}
      where
        "reason" = ${fm.TimestampDrift}
        and "timestamp" <= ${i};
    `),s},Nh=e=>(t,n,r)=>{if(dm(t))return!1;let i=x(e.sqliteSchema.tables,t);return i!=null&&(Ph.has(n)||i.has(n))},Ph=mm.difference(/* @__PURE__ */ new Set([`ownerId`])),Fh=e=>(t,n,r,i,a,o,s,c)=>{let l=o===`createdAt`||o===`updatedAt`;if(l||e.sqlite.prepared`
        with
          existingTimestamp as (
            select 1
            from evolu_history
            where
              "ownerId" = ${t}
              and "table" = ${r}
              and "id" = ${i}
              and "column" = ${o}
              and "timestamp" >= ${c}
            limit 1
          )
        insert into ${J.identifier(r)}
          ("ownerId", "id", ${J.identifier(o)})
        select ${n}, ${a}, ${s}
        where not exists (select 1 from existingTimestamp)
        on conflict ("ownerId", "id") do update
          set ${J.identifier(o)} = ${s}
          where not exists (select 1 from existingTimestamp);
      `,e.sqlite.prepared`
      insert into evolu_history
        ("ownerId", "table", "id", "column", "value", "timestamp")
      values
        (
          ${t},
          ${r},
          ${i},
          ${o},
          ${s},
          ${c}
        )
      on conflict do nothing;
    `,l){let{rows:o}=e.sqlite.prepared`
        with
          firstChange as (
            select *
            from (
              select *
              from (
                select "timestamp"
                from evolu_history
                where
                  "ownerId" = ${t}
                  and "table" = ${r}
                  and "id" = ${i}
                  and "column" = 'createdAt'
                order by "timestamp"
                limit 1
              )
              union all
              select *
              from (
                select "timestamp"
                from evolu_history
                where
                  "ownerId" = ${t}
                  and "table" = ${r}
                  and "id" = ${i}
                  and "column" = 'updatedAt'
                order by "timestamp"
                limit 1
              )
            )
            order by "timestamp"
            limit 1
          ),
          lastChange as (
            select *
            from (
              select *
              from (
                select "timestamp"
                from evolu_history
                where
                  "ownerId" = ${t}
                  and "table" = ${r}
                  and "id" = ${i}
                  and "column" = 'createdAt'
                order by "timestamp" desc
                limit 1
              )
              union all
              select *
              from (
                select "timestamp"
                from evolu_history
                where
                  "ownerId" = ${t}
                  and "table" = ${r}
                  and "id" = ${i}
                  and "column" = 'updatedAt'
                order by "timestamp" desc
                limit 1
              )
            )
            order by "timestamp" desc
            limit 1
          )
        select
          firstChange."timestamp" as firstTimestamp,
          lastChange."timestamp" as lastTimestamp
        from
          firstChange,
          lastChange;
      `,s=o[0];N(s);let{firstTimestamp:c,lastTimestamp:l}=s,u=ja(lm(c).millis),d=k(c,l)?null:ja(lm(l).millis);e.sqlite.prepared`
        insert into ${J.identifier(r)}
          ("ownerId", "id", "createdAt", "updatedAt")
        values (${n}, ${a}, ${u}, ${d})
        on conflict ("ownerId", "id") do update
          set
            "createdAt" = excluded."createdAt",
            "updatedAt" = excluded."updatedAt";
      `}},Ih=e=>{let t=null,n=!1,r=null,i,a=()=>(N(t,`ClientStorage encryption key must be set`),t);return{...e.baseSqliteStorage,setRequestContext:(e,a)=>{t=e,i=a,n=!1,r=null},didWriteMessages:()=>n,skippedError:()=>r,onChangeTooLarge:e=>{r??=e},writeMessages:(t,o)=>()=>{let s=[],c=a();for(let t of o){let n=ch(e)(t,c);n.ok?s.push({timestamp:t.timestamp,change:n.value}):r??=n.error}if(!ie(s))return z();N(i);let{clock:l,now:u}=i,d=l.get(),f=nm(e);for(let e of s){let t=f(d,e.timestamp,u);if(t.ok)d=t.value;else{if(t.error.cause===`remote`)continue;d=t.error.timestamp}}let p=!1,m=V(()=>{e.sqlite.transaction(()=>{p=zh(e)(us(t),s,pm.ReceivedMessage,u),bh(e)(d)})},Bo);return m.ok?(l.set(d),p&&(n=!0),z()):m},readDbChange:(t,n)=>{let{rows:r}=e.sqlite.prepared`
        select "table", "id", "column", "value"
        from evolu_history
        where "ownerId" = ${t} and "timestamp" = ${n}
        union all
        select "table", "id", "column", "value"
        from evolu_message_quarantine
        where "ownerId" = ${t} and "timestamp" = ${n};
      `;P(r,`Every timestamp must have rows`);let i={timestamp:lm(n),change:Ve(wm.fromUnknown(Ah(r)))};return ah(e)(i,a())}}},Lh=e=>(t,n)=>Ue(e.sqlite.transaction(()=>{let r=/* @__PURE__ */ new Map,i=e.clock.get();for(let a of t.changes){if(dm(a.table)){Rh(e)(a,n);continue}let t=tm(e)(i,n);i=t.ok?t.value:t.error.timestamp;let{ownerId:o,...s}=a,c={timestamp:i,change:s},l=r.get(o);l?l.push(c):r.set(o,[c])}for(let[t,i]of r)zh(e)(t,i,pm.LocalMutation,n);return r.size>0&&bh(e)(i),z({type:`Mutate`,clock:i,messagesByOwnerId:r,rowsByQuery:Uh(e)(t.subscribedQueries)})})),Rh=e=>(t,n)=>{let r=J.identifier(t.table),{ownerId:i,id:a}=t;if(t.onlyIf){let n=e.sqlite.prepared`
          select 1 from ${r} where "ownerId" = ${i} and "id" = ${a};
        `.rows.length>0;switch(t.onlyIf.type){case`RowAbsent`:if(n)return;break;case`RowMatches`:if(!n)return;for(let[n,o]of Object.entries(t.onlyIf.values)){let{rows:t}=e.sqlite.prepared`
              select 1
              from ${r}
              where
                "ownerId" = ${i}
                and "id" = ${a}
                and ${J.identifier(n)} is ${o};
            `;if(t.length===0)return}break;default:ee(t.onlyIf)}}if(t.isDelete){e.sqlite.prepared`
        delete from ${r}
        where "ownerId" = ${i} and "id" = ${a};
      `;return}let o=ja(n);t.isInsert?e.sqlite.prepared`
        insert into ${r} ("ownerId", "id", "createdAt")
        values (${i}, ${a}, ${o})
        on conflict ("ownerId", "id") do update
          set
            "createdAt" = coalesce("createdAt", "updatedAt", ${o}),
            "updatedAt" = case
              when "createdAt" = ${o} then "updatedAt"
              else ${o}
            end;
      `:e.sqlite.prepared`
        update ${r}
        set
          "createdAt" = coalesce("createdAt", "updatedAt", ${o}),
          "updatedAt" = case
            when "createdAt" = ${o} then "updatedAt"
            else ${o}
          end
        where "ownerId" = ${i} and "id" = ${a};
      `;for(let[n,o]of Hh(t))e.sqlite.prepared`
        update ${r}
        set ${J.identifier(n)} = ${o}
        where "ownerId" = ${i} and "id" = ${a};
      `},zh=e=>(t,n,r,i)=>{let a=ls(t),o=[],s=!1,c=Fm(e)(a,cm(ce(n).timestamp)),{firstTimestamp:l,lastTimestamp:u}=c,d=c.storedBytes??0,f=d!==Bh;for(let{timestamp:t,change:r}of n){let n=cm(t);if([l,u]=Om(n,l,u),!e.baseSqliteStorage.insertTimestamp(a,n))continue;s=!0,f&&(d+=oh({timestamp:t,change:r}));let c=rm(e)(t.millis,i);o.push({change:r,timestamp:t,timestampBytes:n,idBytes:Br(r.id),hasDrift:c})}o.sort((e,t)=>is(e.change.table,t.change.table)||os(e.idBytes,t.idBytes));for(let{change:n,timestamp:s,timestampBytes:c,idBytes:l,hasDrift:u}of o){let o=ae(Hh(n),[n.isInsert?`createdAt`:`updatedAt`,ja(s.millis)]);for(let[s,d]of o)!u&&Nh(e)(n.table,s,d)?Fh(e)(a,t,n.table,l,n.id,s,d,c):e.sqlite.prepared`
            insert into evolu_message_quarantine
              (
                "ownerId",
                "timestamp",
                "table",
                "id",
                "column",
                "value",
                "reason",
                "origin",
                "quarantinedAt"
              )
            values
              (
                ${a},
                ${c},
                ${n.table},
                ${l},
                ${s},
                ${d},
                ${u?fm.TimestampDrift:fm.Schema},
                ${r},
                ${i}
              )
            on conflict do nothing;
          `}return s&&Im(e)(a,d,l,u),s},Bh=1,Vh=e=>t=>{let n=0,r=null,i=[],a=()=>{if(!r||!ie(i))return;let e=wm.fromUnknown(Ah(i));e.ok&&(n+=oh({timestamp:lm(r),change:e.value})),i=[]};return e.sqlite.iterate(J`
        select "timestamp", "table", "id", "column", "value"
        from evolu_history
        where "ownerId" = ${t}
        union all
        select "timestamp", "table", "id", "column", "value"
        from evolu_message_quarantine
        where "ownerId" = ${t}
        order by "timestamp";
      `,e=>{let t=e.timestamp;return r&&k(t,r)||(a(),r=t),(e.column===`isDeleted`||Jo.is(e.value))&&i.push({table:e.table,id:e.id,column:e.column,value:e.value}),!0}),a(),n},Hh=e=>{let t=v(e.values);return e.isDelete==null?t:ae(t,[`isDeleted`,ts(e.isDelete)])},Uh=e=>t=>{let n=/* @__PURE__ */ new Map;for(let r of t)n.set(r,V(()=>e.sqlite.exec(Yo(r)).rows,Bo));return n},Wh=1034,Gh=1546,Kh=2570,qh={sizeof:88,members:{iVersion:{offset:0,signature:`i`},szOsFile:{offset:4,signature:`i`},mxPathname:{offset:8,signature:`i`},pNext:{offset:12,signature:`p`},zName:{offset:16,signature:`s`},pAppData:{offset:20,signature:`p`},xOpen:{offset:24,signature:`i(pppip)`},xDelete:{offset:28,signature:`i(ppi)`},xAccess:{offset:32,signature:`i(ppip)`},xFullPathname:{offset:36,signature:`i(ppip)`},xDlOpen:{offset:40,signature:`v(pp)`},xDlError:{offset:44,signature:`v(pip)`},xDlSym:{offset:48,signature:`p()`},xDlClose:{offset:52,signature:`v(pp)`},xRandomness:{offset:56,signature:`i(pip)`},xSleep:{offset:60,signature:`i(pi)`},xCurrentTime:{offset:64,signature:`i(pp)`},xGetLastError:{offset:68,signature:`i(pip)`},xCurrentTimeInt64:{offset:72,signature:`i(pp)`},xSetSystemCall:{offset:76,signature:`i(ppp)`},xGetSystemCall:{offset:80,signature:`p(pp)`},xNextSystemCall:{offset:84,signature:`p(pp)`}}},Jh={sizeof:76,members:{iVersion:{offset:0,signature:`i`},xClose:{offset:4,signature:`i(p)`},xRead:{offset:8,signature:`i(ppij)`},xWrite:{offset:12,signature:`i(ppij)`},xTruncate:{offset:16,signature:`i(pj)`},xSync:{offset:20,signature:`i(pi)`},xFileSize:{offset:24,signature:`i(pp)`},xLock:{offset:28,signature:`i(pi)`},xUnlock:{offset:32,signature:`i(pi)`},xCheckReservedLock:{offset:36,signature:`i(pp)`},xFileControl:{offset:40,signature:`i(pip)`},xSectorSize:{offset:44,signature:`i(p)`},xDeviceCharacteristics:{offset:48,signature:`i(p)`},xShmMap:{offset:52,signature:`i(piiip)`},xShmLock:{offset:56,signature:`i(piii)`},xShmBarrier:{offset:60,signature:`v(p)`},xShmUnmap:{offset:64,signature:`i(pi)`},xFetch:{offset:68,signature:`i(pjip)`},xUnfetch:{offset:72,signature:`i(pjp)`}}},Yh={sizeof:4,members:{pMethods:{offset:0,signature:`p`}}},Xh=e=>e.sqliteWasm.exports.sqlite3_free,Zh=e=>e.sqliteWasm.exports.sqlite3_open_v2,Qh=e=>e.sqliteWasm.exports.sqlite3_close_v2,$h=e=>e.sqliteWasm.exports.sqlite3_get_autocommit,eg=e=>e.sqliteWasm.exports.sqlite3_changes64,tg=e=>e.sqliteWasm.exports.sqlite3_total_changes64,ng=e=>e.sqliteWasm.exports.sqlite3_serialize,rg=e=>e.sqliteWasm.exports.sqlite3_errcode,ig=e=>e.sqliteWasm.exports.sqlite3_extended_errcode,ag=e=>e.sqliteWasm.exports.sqlite3_errmsg,og=e=>e.sqliteWasm.exports.sqlite3_errstr,sg=e=>e.sqliteWasm.exports.sqlite3_error_offset,cg=e=>e.sqliteWasm.exports.sqlite3_set_errmsg,lg=e=>e.sqliteWasm.exports.sqlite3_prepare_v3,ug=e=>e.sqliteWasm.exports.sqlite3_step,dg=e=>e.sqliteWasm.exports.sqlite3_reset,fg=e=>e.sqliteWasm.exports.sqlite3_finalize,pg=e=>e.sqliteWasm.exports.sqlite3_stmt_readonly,mg=e=>e.sqliteWasm.exports.sqlite3_stmt_status,hg=e=>e.sqliteWasm.exports.sqlite3_bind_parameter_count,gg=e=>e.sqliteWasm.exports.sqlite3_bind_null,_g=e=>e.sqliteWasm.exports.sqlite3_bind_int,vg=e=>e.sqliteWasm.exports.sqlite3_bind_int64,yg=e=>e.sqliteWasm.exports.sqlite3_bind_double,bg=e=>e.sqliteWasm.exports.sqlite3_bind_text,xg=e=>e.sqliteWasm.exports.sqlite3_bind_blob,Sg=e=>e.sqliteWasm.exports.sqlite3_clear_bindings,Cg=e=>e.sqliteWasm.exports.sqlite3_column_count,wg=e=>e.sqliteWasm.exports.sqlite3_column_name,Tg=e=>e.sqliteWasm.exports.sqlite3_column_type,Eg=e=>e.sqliteWasm.exports.sqlite3_column_double,Dg=e=>e.sqliteWasm.exports.sqlite3_column_text,Og=e=>e.sqliteWasm.exports.sqlite3_column_blob,kg=e=>e.sqliteWasm.exports.sqlite3_column_bytes,Ag=e=>e.sqliteWasm.exports.evolu_codec_register,jg=e=>e.sqliteWasm.exports.evolu_codec_open,Mg=e=>e.sqliteWasm.exports.evolu_codec_take_failure,Ng=e=>e.sqliteWasm.exports.evolu_core_register,Pg=e=>e.sqliteWasm.exports.evolu_skiplist_finalize;var Fg=function(e,t,n){if(t!=null){if(typeof t!=`object`&&typeof t!=`function`)throw TypeError(`Object expected.`);var r,i;if(n){if(!Symbol.asyncDispose)throw TypeError(`Symbol.asyncDispose is not defined.`);r=t[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw TypeError(`Symbol.dispose is not defined.`);r=t[Symbol.dispose],n&&(i=r)}if(typeof r!=`function`)throw TypeError(`Object not disposable.`);i&&(r=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t},Ig=(function(e){return function(t){function n(n){t.error=t.hasError?new e(n,t.error,`An error was suppressed during disposal.`):n,t.hasError=!0}var r,i=0;function a(){for(;r=t.stack.pop();)try{if(!r.async&&i===1)return i=0,t.stack.push(r),Promise.resolve().then(a);if(r.dispose){var e=r.dispose.call(r.value);if(r.async)return i|=2,Promise.resolve(e).then(a,function(e){return n(e),a()})}else i|=1}catch(e){n(e)}if(i===1)return t.hasError?Promise.reject(t.error):Promise.resolve();if(t.hasError)throw t.error}return a()}})(typeof SuppressedError==`function`?SuppressedError:function(e,t,n){var r=Error(n);return r.name=`SuppressedError`,r.error=e,r.suppressed=t,r});let Lg=/*#__PURE__*/ new TextEncoder,Rg=/*#__PURE__*/ new TextDecoder(`utf-8`,{ignoreBOM:!0}),zg=e=>t=>{let n=t>2147483647?0:e.sqliteWasm.exports.sqlite3_malloc(Math.max(1,t));return n===0?B({type:`SqliteNoMem`,byteLength:t}):z(n)},Bg=e=>t=>{let n=Lg.encode(t),r=zg(e)(n.length+1);if(!r.ok)return r;let i=r.value,a=e.sqliteWasm.getHeapU8();return a.set(n,i),a[i+n.length]=0,z(i)},Vg=e=>(t,n,r)=>Lg.encodeInto(t,e.sqliteWasm.getHeapU8().subarray(n,n+r)).written,Hg=e=>t=>{let n=e.sqliteWasm.getHeapU8();return Rg.decode(n.subarray(t,n.indexOf(0,t)))},Ug=e=>(t,n)=>Rg.decode(e.sqliteWasm.getHeapU8().subarray(t,t+n)),Wg=e=>(t,n)=>e.sqliteWasm.getHeapU8().slice(t,t+n),Gg=e=>(t,n)=>{e.sqliteWasm.getHeapU8().set(n,t)},Kg=e=>{let t={stack:[],error:void 0,hasError:!1};try{let n=zg(e)(16);if(!n.ok)return n;let r=null,i=0,a=Fg(t,new DisposableStack,!1);return a.defer(()=>{e.sqliteWasm.isBroken()||e.sqliteWasm.call(()=>{e.sqliteWasm.exports.sqlite3_free(n.value)})}),a.defer(()=>{let t=r;t!=null&&!e.sqliteWasm.isBroken()&&e.sqliteWasm.call(()=>{e.sqliteWasm.exports.sqlite3_free(t)})}),z(L({out:n.value,reserve:t=>{if(r!=null){if(t<=i)return z(r);e.sqliteWasm.exports.sqlite3_free(r),r=null}let n=Math.max(t,i*2),a=zg(e)(n);return!a.ok&&n>t&&(n=t,a=zg(e)(n)),a.ok?(r=a.value,i=n,z(r)):(i=0,a)}},a))}catch(e){t.error=e,t.hasError=!0}finally{Ig(t)}},qg=e=>Number.isInteger(e)&&e>=-2147483648&&e<=2147483647;var Jg=function(e,t,n){if(t!=null){if(typeof t!=`object`&&typeof t!=`function`)throw TypeError(`Object expected.`);var r,i;if(n){if(!Symbol.asyncDispose)throw TypeError(`Symbol.asyncDispose is not defined.`);r=t[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw TypeError(`Symbol.dispose is not defined.`);r=t[Symbol.dispose],n&&(i=r)}if(typeof r!=`function`)throw TypeError(`Object not disposable.`);i&&(r=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t},Yg=(function(e){return function(t){function n(n){t.error=t.hasError?new e(n,t.error,`An error was suppressed during disposal.`):n,t.hasError=!0}var r,i=0;function a(){for(;r=t.stack.pop();)try{if(!r.async&&i===1)return i=0,t.stack.push(r),Promise.resolve().then(a);if(r.dispose){var e=r.dispose.call(r.value);if(r.async)return i|=2,Promise.resolve(e).then(a,function(e){return n(e),a()})}else i|=1}catch(e){n(e)}if(i===1)return t.hasError?Promise.reject(t.error):Promise.resolve();if(t.hasError)throw t.error}return a()}})(typeof SuppressedError==`function`?SuppressedError:function(e,t,n){var r=Error(n);return r.name=`SuppressedError`,r.error=e,r.suppressed=t,r});let Xg=e=>async t=>{let n=e=>({type:`SqliteWasmCompileError`,cause:e}),r=await We(async()=>{if(e instanceof WebAssembly.Module)return e;if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return WebAssembly.compile(e);let t=await e;if(!t.ok)throw TypeError(`Fetching the SQLite wasm failed with HTTP status ${t.status}.`);return t.headers.get(`Content-Type`)===`application/wasm`?WebAssembly.compileStreaming(t):WebAssembly.compile(await t.arrayBuffer())},n);if(!r.ok)return r;let i=r.value,a=WebAssembly.Module.imports(i).filter(e=>!Object.hasOwn(i_,e.module)||!Object.hasOwn(i_[e.module],e.name)).map(e=>`${e.module}.${e.name}`);if(ie(a))return B({type:`SqliteWasmUnknownImport`,imports:a});let o=V(()=>new WebAssembly.Memory({initial:e_,maximum:t_}),n);if(!o.ok)return o;let s=o.value,c=new Uint8Array(s.buffer),l=new DataView(s.buffer),u=()=>(c.buffer!==s.buffer&&(c=new Uint8Array(s.buffer)),c),d=()=>(l.buffer!==s.buffer&&(l=new DataView(s.buffer)),l),f=null,p=()=>f!=null,m=()=>{if(f)throw Error(`The SQLite wasm instance is broken: an exception escaped a wasm call.`,{cause:f.error})},h={...t.deps,memory:s,getHeapU8:u,getHeapDataView:d,isBroken:p,refuseIfBroken:m},g=y(i_,e=>y(e,e=>e(h))),_=await We(async()=>{let e=await WebAssembly.instantiate(i,g);return $g(e,`emscripten_stack_init`),$g(e,`__set_stack_limits`,$g(e,`emscripten_stack_get_base`),$g(e,`emscripten_stack_get_end`)),$g(e,`__wasm_call_ctors`),e},n);if(!_.ok)return _;let v=_.value,b=$g(v,`sqlite3__wasm_enum_json`),x=u(),S=an(b===0?Uint8Array.of(0):x.subarray(b,x.indexOf(0,b)+1)),C=new TextEncoder;for(let e of WebAssembly.Module.exports(i).map(e=>e.name).toSorted())S=an(C.encode(`${e}\0`),S);if(S!==942866108)return B({type:`SqliteWasmBuildMismatch`,expectedHash:942866108,actualHash:S});let w=v.exports,T=w.sqlite3_initialize();if(T!==0)return B({type:`SqliteWasmInitializeError`,code:T});let E={exports:w,functionTable:v.exports.__indirect_function_table,getHeapU8:u,getHeapDataView:d,call:e=>{m();try{return e()}catch(e){throw f??={error:e},e}},isBroken:p},D=C.encode(`${Qg}\0`),O=zg({sqliteWasm:E})(qh.sizeof+D.length);if(!O.ok)return B({type:`SqliteWasmInitializeError`,code:7});let k=O.value,A=k+qh.sizeof,{members:j}=qh,M=[[`xAccess`,(e,t,n,r)=>(d().setInt32(r,0,!0),0)],[`xDelete`,()=>5898],[`xFullPathname`,()=>14],[`xRandomness`,(e,n,r)=>{for(let e=0;e<n;e+=65536){let i=t.deps.randomBytes.create(Math.min(65536,n-e));u().set(i,r+e)}return n}],[`xSleep`,()=>0],[`xGetLastError`,()=>0],[`xCurrentTime`,(e,t)=>(d().setFloat64(t,h.time.now()/864e5+2440587.5,!0),0)],[`xCurrentTimeInt64`,(e,t)=>(d().setBigInt64(t,BigInt(h.time.now())+210866760000000n,!0),0)]],N=V(()=>a_({...t.deps,sqliteWasm:E})(oe(M,([e,t])=>({signature:j[e].signature,fn:t}))),n);if(!N.ok)return N;let{pointers:P}=N.value;u().fill(0,k,A),u().set(D,A);let F=d();for(let[e,t]of[[`iVersion`,2],[`szOsFile`,Yh.sizeof],[`mxPathname`,1024],[`zName`,A]])F.setInt32(k+j[e].offset,t,!0);for(let[[e],t]of se([M,P]))F.setInt32(k+j[e].offset,t,!0);let ee=w.sqlite3_vfs_register(k,0);if(ee!==0)return B({type:`SqliteWasmInitializeError`,code:ee});let I=Zg({sqliteWasm:E})();return I.ok?z(E):I},Zg=e=>()=>e.sqliteWasm.call(()=>{let{exports:t}=e.sqliteWasm,n=t.sqlite3_initialize();if(n!==0)return B({type:`SqliteWasmInitializeError`,code:n});let r=Bg(e)(`${Qg}\0kvvfs`);if(!r.ok)return B({type:`SqliteWasmInitializeError`,code:7});let i=t.sqlite3_vfs_find(r.value),a=t.sqlite3_vfs_find(r.value+Qg.length+1);if(t.sqlite3_free(r.value),i===0)return B({type:`SqliteWasmInitializeError`,code:21});a!==0&&t.sqlite3_vfs_unregister(a);let o=t.sqlite3_vfs_register(i,1);return o===0?(t.sqlite3_randomness(0,0),z()):B({type:`SqliteWasmInitializeError`,code:o})}),Qg=`evolu-memory`,$g=(e,t,...n)=>{let r=e.exports[t];return typeof r==`function`?r(...n):0},e_=256,t_=32768,n_=()=>-52,r_=(e,t)=>{try{e(t)}catch(e){wo(AggregateError([t,e],`ReportDefect failed while reporting a defect`))}},i_={env:{__handle_stack_overflow:()=>()=>{throw new WebAssembly.RuntimeError(`SQLite's C stack overflowed.`)},__syscall_chmod:()=>n_,__syscall_faccessat:()=>n_,__syscall_fchmod:()=>n_,__syscall_fchown32:()=>n_,__syscall_fcntl64:()=>n_,__syscall_fstat64:()=>n_,__syscall_ftruncate64:()=>n_,__syscall_getcwd:()=>n_,__syscall_ioctl:()=>n_,__syscall_lstat64:()=>n_,__syscall_mkdirat:()=>n_,__syscall_newfstatat:()=>n_,__syscall_openat:()=>n_,__syscall_readlinkat:()=>n_,__syscall_rmdir:()=>n_,__syscall_stat64:()=>n_,__syscall_unlinkat:()=>n_,__syscall_utimensat:()=>n_,_localtime_js:({getHeapDataView:e})=>(t,n)=>{let r=/* @__PURE__ */ new Date(Number(t)*1e3);if(Number.isNaN(r.getTime()))return 1;let i=e();for(let[e,t]of[r.getSeconds(),r.getMinutes(),r.getHours(),r.getDate(),r.getMonth(),r.getFullYear()-1900,0,0,0,0].entries())i.setInt32(n+e*4,t,!0);return 0},_tzset_js:()=>()=>{},emscripten_date_now:({time:e})=>()=>e.now(),emscripten_get_now:({time:e})=>()=>e.performance.now(),emscripten_resize_heap:({memory:e})=>t=>{try{return e.grow(Math.ceil(((t>>>0)-e.buffer.byteLength)/65536)),1}catch{return 0}},memory:({memory:e})=>e},wasi_snapshot_preview1:{clock_time_get:({time:e,getHeapDataView:t})=>(n,r,i)=>{if(n<0||n>3)return 28;let a=n===0?e.now():e.performance.now();return t().setBigInt64(i,BigInt(Math.round(a*1e3))*1000n,!0),0},environ_get:()=>()=>0,environ_sizes_get:({getHeapDataView:e})=>(t,n)=>{let r=e();return r.setUint32(t,0,!0),r.setUint32(n,0,!0),0},fd_close:()=>()=>52,fd_fdstat_get:()=>()=>52,fd_read:()=>()=>52,fd_seek:()=>()=>52,fd_sync:()=>()=>52,fd_write:({console:e,getHeapU8:t,getHeapDataView:n})=>{let r=new Map([e.log,e.error].map((e,t)=>[t+1,{write:e,decoder:new TextDecoder,line:``}]));return(e,i,a,o)=>{let s=r.get(e);if(s==null)return 8;let c=n(),l=0;for(let e=0;e<a;e++){let n=c.getUint32(i+e*8,!0),r=c.getUint32(i+e*8+4,!0);s.line+=s.decoder.decode(t().subarray(n,n+r),{stream:!0}),l+=r}let u=s.line.split(`
`);s.line=u.pop();for(let e of u)s.write(e);return n().setUint32(o,l,!0),0}},random_get:({randomBytes:e,reportDefect:t,getHeapU8:n,isBroken:r,refuseIfBroken:i})=>(a,o)=>{try{let t=e.create(o);return i(),n().set(t,a),0}catch(e){if(e instanceof WebAssembly.RuntimeError||r())throw e;return r_(t,e),i(),29}}}},a_=e=>t=>{let n={stack:[],error:void 0,hasError:!1};try{let r=e.sqliteWasm.functionTable,i=o_.get(r)??[];o_.set(r,i);let a=t.map(({signature:e})=>{let t=/^([iv])\(([ipsjd]*)\)$/u.exec(e);if(t==null)throw Error(`Invalid wasm function signature: ${e}`);let[,n,r]=t;return[96,...m_(Array.from(r,e=>[f_[e]])),...m_(n===`v`?[]:[[f_.i]])]}),o=t.map((e,t)=>h_(String(t))),s=new WebAssembly.Module(Uint8Array.from([...s_,...g_(c_,a),...g_(l_,o.map((e,t)=>[...h_(``),...e,d_,...p_(t)])),...g_(u_,o.map((e,t)=>[...e,d_,...p_(t)]))])),c=t.map(({signature:t,fn:n})=>{let r=n,i=t.startsWith(`i`),a=i?1:void 0;return(...t)=>{try{let n=r(...t);if(e.sqliteWasm.isBroken()&&e.sqliteWasm.call(te),!i)return;if(n===void 0||typeof n==`number`)return n;throw TypeError(`A wasm function with an int result returned a ${typeof n}`)}catch(t){if(t instanceof WebAssembly.RuntimeError||e.sqliteWasm.isBroken())throw t;return r_(e.reportDefect,t),e.sqliteWasm.isBroken()&&e.sqliteWasm.call(te),a}}}),{exports:l}=new WebAssembly.Instance(s,{"":Object.fromEntries(c.entries())}),u=Jg(n,new DisposableStack,!1);return L({pointers:oe(t,(e,t)=>{let n=i.pop()??r.grow(1);return u.defer(()=>{r.set(n,null),i.push(n)}),r.set(n,l[t]),n})},u)}catch(e){n.error=e,n.hasError=!0}finally{Yg(n)}},o_=/*#__PURE__*/ new WeakMap,s_=[0,97,115,109,1,0,0,0],c_=1,l_=2,u_=7,d_=0,f_={i:127,p:127,s:127,j:126,d:124},p_=e=>{let t=[];do{let n=e&127;e>>>=7,t.push(e===0?n:n|128)}while(e!==0);return t},m_=e=>[...p_(e.length),...e.flat()],h_=e=>m_(Array.from(e,e=>[e.charCodeAt(0)])),g_=(e,t)=>{let n=m_(t);return[e,...p_(n.length),...n]};var __=function(e,t,n){if(t!=null){if(typeof t!=`object`&&typeof t!=`function`)throw TypeError(`Object expected.`);var r,i;if(n){if(!Symbol.asyncDispose)throw TypeError(`Symbol.asyncDispose is not defined.`);r=t[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw TypeError(`Symbol.dispose is not defined.`);r=t[Symbol.dispose],n&&(i=r)}if(typeof r!=`function`)throw TypeError(`Object not disposable.`);i&&(r=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t},v_=(function(e){return function(t){function n(n){t.error=t.hasError?new e(n,t.error,`An error was suppressed during disposal.`):n,t.hasError=!0}var r,i=0;function a(){for(;r=t.stack.pop();)try{if(!r.async&&i===1)return i=0,t.stack.push(r),Promise.resolve().then(a);if(r.dispose){var e=r.dispose.call(r.value);if(r.async)return i|=2,Promise.resolve(e).then(a,function(e){return n(e),a()})}else i|=1}catch(e){n(e)}if(i===1)return t.hasError?Promise.reject(t.error):Promise.resolve();if(t.hasError)throw t.error}return a()}})(typeof SuppressedError==`function`?SuppressedError:function(e,t,n){var r=Error(n);return r.name=`SuppressedError`,r.error=e,r.suppressed=t,r});let y_=({directory:e,heldTimeout:t})=>async n=>{let r={stack:[],error:void 0,hasError:!1};try{let{opfsRoot:i,random:a,sqliteWasm:o,time:s}=n.deps,c=`opfs-sahpool:${e.join(`/`)}`,l=D_.get(o.functionTable)??/* @__PURE__ */ new Set;if(D_.set(o.functionTable,l),l.has(c))return B({type:`SahPoolAlreadyOpenError`,directory:e});l.add(c);let u=__(r,new DisposableStack,!1);u.defer(()=>{l.delete(c)});let d=e=>({type:`SahPoolSetupError`,cause:e}),f=s.performance.now(),p=[];u.defer(()=>{for(let e of p)e.handle.close()});let m;for(let r=50;;r=Math.min(r*2,1e3)){let a=await We(async()=>{let t=await i.getDirectory();for(let n of e)t=await t.getDirectoryHandle(n,{create:!0});t=await t.getDirectoryHandle(C_,{create:!0});let n=[];for await(let e of t.values())e.kind===`file`&&n.push(e);return{opaque:t,files:n}},d);if(!a.ok)return a;let{files:o}=a.value,c=await Promise.allSettled(o.map(async e=>e.createSyncAccessHandle())),l=[];for(let[e,t]of se([o,c]))t.status===`fulfilled`?p.push({fileName:e.name,handle:t.value}):l.push({fileName:e.name,cause:t.reason});if(!ie(l)){m=a.value.opaque;break}let u=l.find(({cause:e})=>P_(e));if(u==null)return B(d(l[0].cause));if(t==null||Ma(f,s.performance.now())>=Na(t))return B({type:`SahPoolHeldError`,...u});for(let e of p.splice(0))e.handle.close();await n.ok(Po(r))}let h=/* @__PURE__ */ new Map,g=/* @__PURE__ */ new Set,_=/* @__PURE__ */ new Map,v=await We(async()=>{let e=[];for(let t of p){let n=/* @__PURE__ */ new Uint8Array(524),r=t.handle.getSize(),i=t.handle.read(n,{at:0}),a=Math.min(n.length,r);if(i<a)return B({type:`SahPoolShortHeaderRead`,requested:a,read:i});e.push({slot:t,size:r,header:n})}for(let{slot:t,size:n,header:r}of e){let e=new DataView(r.buffer).getUint32(512),i=r.subarray(0,516),a=w_(i,e),o=new Uint32Array(r.buffer,516,2),s=i.indexOf(0);if(!(s>0&&n>4096&&!(e&8))&&(s!==0&&(e&8||(e&S_)===0)||o[0]!==a[0]||o[1]!==a[1])){let e=A_(t.handle,``,0);if(!e.ok)return e;t.handle.flush(),t.handle.truncate(b_)}else if(s===0)t.handle.truncate(b_),g.add(t);else{let e=E_.decode(i.subarray(0,s)),n=h.get(e);n!=null&&_.set(n,e),h.set(e,t)}}for(;p.length<6;){let e=M_(a),t=await(await m.getFileHandle(e,{create:!0})).createSyncAccessHandle();p.push({fileName:e,handle:t}),t.truncate(b_)}return z()},B),y=v.ok?v.value:v.error;if(!y.ok)return B(d(y.error));let b=/* @__PURE__ */ new Map,x=/* @__PURE__ */ new Map,S=null,C=e=>{let t=b.get(e);return j(t!=null,`The file is not open.`),t},w=(e,t,n)=>{S??={type:`SqliteVfsFailure`,method:e,path:t,error:n}},T=(e,t,n,r)=>{try{return r(t.slot.handle)}catch(r){return w(e,t.path,r),n}},E=O_.get(o.functionTable)??/* @__PURE__ */ new Map;O_.set(o.functionTable,E);let D=E.get(c);if(D==null){let e=k_(n.deps,c);if(!e.ok)return B(d(e.error));D=e.value,E.set(c,D)}let{ioMethods:O}=D,k=()=>{for(let e of g){let t=V(()=>e.handle.flush(),e=>e);if(!t.ok)return t;g.delete(e)}return z()},A=e=>{let t=h.get(e);if(t==null)return z(!1);let n=[..._].filter(([,t])=>t===e).map(([e])=>e);n.push(t);for(let e of n){let t=k();if(!t.ok)return t;let n=A_(e.handle,``,0);if(!(n.ok||L_(n.error)&&n.error.written>0&&n.error.written<n.error.requested))return n;V(()=>e.handle.flush(),e=>e).ok||g.add(e),_.delete(e),V(()=>e.handle.truncate(b_),e=>e)}return h.delete(e),z(!0)},M=(e,t)=>{let n=C(e);if(n.lock<=t)return;let r=x.get(n.path);j(r!=null,`The path is not locked.`);let i=t===0?r.shared-1:r.shared;i===0?x.delete(n.path):x.set(n.path,{level:n.lock>1?1:r.level,shared:i}),b.set(e,{...n,lock:t})},N=e=>R_(Hg({sqliteWasm:o})(e));D.setMethods({xOpen:(e,t,n,r,i)=>{let a=Hg({sqliteWasm:o})(t),s=R_(a);if(!s.ok)return w(`xOpen`,null,s.error),14;let c=s.value,l=()=>(w(`xOpen`,c,{type:`SahPoolInvalidPath`,name:a}),14);if(r&256&&T_.encode(c).length>498)return l();let u=h.get(c);if(u!=null&&(r&20)==20)return 14;if(u==null&&r&4){if(!j_(c))return l();let e=/* @__PURE__ */ new Set([...h.values(),..._.keys()]);if(u=p.find(t=>!e.has(t)),u==null)return w(`xOpen`,c,{type:`SahPoolFull`,capacity:p.length}),14;let{handle:t}=u,n=V(()=>{t.getSize()>4096&&t.truncate(b_)},e=>e);if(!n.ok)return w(`xOpen`,c,n.error),I_(n.error)?13:14;g.add(u);let i=k();if(!i.ok)return w(`xOpen`,c,i.error),Wh;let a=A_(u.handle,c,r|x_);if(!a.ok)return w(`xOpen`,c,a.error),I_(a.error)?13:14;h.set(c,u)}if(u==null)return 14;b.set(n,{path:c,slot:u,lock:0});let d=o.getHeapDataView();return d.setInt32(n+Yh.members.pMethods.offset,O,!0),i!==0&&d.setInt32(i,r,!0),0},xDelete:(e,t,n)=>{let r=N(t);if(!r.ok)return w(`xDelete`,null,r.error),Kh;let i=A(r.value);if(!i.ok)return w(`xDelete`,r.value,i.error),Kh;if(n===0)return 0;let a=k();return a.ok?0:(w(`xDelete`,r.value,a.error),1290)},xAccess:(e,t,n,r)=>{let i=N(t);return o.getHeapDataView().setInt32(r,i.ok&&h.has(i.value)?1:0,!0),0},xClose:e=>(M(e,0),b.delete(e),0),xRead:(e,t,n,r)=>{let i=C(e);return T(`xRead`,i,266,e=>{let a=o.getHeapU8().subarray(t,t+n),s=b_+Number(r),c=e.read(a,{at:s});if(c===n)return 0;a.fill(0,c);let l=e.getSize();return s+c>=l?522:(w(`xRead`,i.path,{type:`SqliteShortRead`,requested:Math.min(n,l-s),read:c}),266)})},xWrite:(e,t,n,r)=>{let i=C(e),a=F_(i.slot.handle,o.getHeapU8().subarray(t,t+n),b_+Number(r));return a.ok?0:(w(`xWrite`,i.path,a.error),I_(a.error)?13:778)},xTruncate:(e,t)=>{let n=C(e),r=k();return r.ok?T(`xTruncate`,n,Gh,e=>(e.truncate(b_+Number(t)),0)):(w(`xTruncate`,n.path,r.error),Gh)},xSync:e=>T(`xSync`,C(e),Wh,e=>(e.flush(),0)),xFileSize:(e,t)=>T(`xFileSize`,C(e),1802,e=>{let n=e.getSize()-b_;return o.getHeapDataView().setBigInt64(t,BigInt(n),!0),0}),xLock:(e,t)=>{let n=C(e);if(n.lock>=t)return 0;let r=x.get(n.path)??{level:0,shared:0};return n.lock!==r.level&&(r.level>=3||t>1)?5:t===4&&r.shared>1?(n.lock===2&&(x.set(n.path,{...r,level:3}),b.set(e,{...n,lock:3})),5):(x.set(n.path,t===1?{level:r.level===0?t:r.level,shared:r.shared+1}:{...r,level:t}),b.set(e,{...n,lock:t}),0)},xUnlock:(e,t)=>(M(e,t),0),xCheckReservedLock:(e,t)=>{let n=x.get(C(e).path);return o.getHeapDataView().setInt32(t,+(n!=null&&n.level>1),!0),0}}),u.defer(()=>{D.setMethods(null)});let P=L({vfsName:c,getPaths:()=>[...h.keys()],read:(e,t,n)=>{let r=h.get(e);if(r==null)return B({type:`SahPoolFileNotFound`,path:e});let i=new Uint8Array(n),a=b_+t,o=e=>({type:`SqliteVfsIoError`,cause:e}),s=V(()=>r.handle.read(i,{at:a}),o);if(!s.ok)return s;if(s.value===n)return z(i);let c=V(()=>r.handle.getSize(),o);return c.ok?a+s.value>=c.value?z(i.slice(0,s.value)):B(o({type:`SqliteShortRead`,requested:Math.min(n,c.value-a),read:s.value})):c},unlink:e=>{let t=[e,`${e}-journal`,`${e}-wal`];for(let n of b.values())if(t.includes(n.path))throw Error(`Cannot unlink ${e}, which is open.`);let n=!1;for(let[e,r]of t.entries()){let t=A(r);if(!t.ok)return B({type:`SqliteVfsIoError`,cause:t.error});e===0&&(n=t.value)}return z(n)},getFailure:()=>S,clearFailure:()=>{S=null}},u);return z({...P,[Symbol.dispose]:()=>{if(b.size>0&&!o.isBroken())throw Error(`Cannot dispose a SahPool with an open file, because closing its handle would corrupt SQLite's state.`);P[Symbol.dispose]()}})}catch(e){r.error=e,r.hasError=!0}finally{v_(r)}},b_=4096,x_=128,S_=542976,C_=`.opaque`,w_=(e,t)=>{if(!(t&128))return/* @__PURE__ */ new Uint32Array(2);let n=3735928559,r=1103547991;for(let t of e)n=Math.imul(n^t,2654435761),r=Math.imul(r^t,104729);return Uint32Array.of(n>>>0,r>>>0)},T_=/*#__PURE__*/ new TextEncoder,E_=/*#__PURE__*/ new TextDecoder(`utf-8`,{ignoreBOM:!0}),D_=/*#__PURE__*/ new WeakMap,O_=/*#__PURE__*/ new WeakMap,k_=(e,t)=>{let{randomBytes:n,sqliteWasm:r,time:i}=e,a=null,o=(e,t)=>(j(a!=null,`The pool is paused.`),a[e](...t)),s=e=>(...t)=>o(e,t),{members:c}=qh,l=[[`xOpen`,(e,t,n,i,s)=>(r.getHeapDataView().setInt32(n+Yh.members.pMethods.offset,0,!0),a==null?14:o(`xOpen`,[e,t,n,i,s]))],[`xDelete`,(...e)=>a==null?Kh:o(`xDelete`,e)],[`xAccess`,(e,t,n,i)=>a==null?(r.getHeapDataView().setInt32(i,0,!0),0):o(`xAccess`,[e,t,n,i])],[`xFullPathname`,(e,t,n,i)=>{let a=r.getHeapU8(),o=a.indexOf(0,t)-t+1;return o>n?14:(a.copyWithin(i,t,t+o),0)}],[`xRandomness`,(e,t,i)=>{for(let e=0;e<t;e+=65536){let a=n.create(Math.min(65536,t-e));r.getHeapU8().set(a,i+e)}return t}],[`xSleep`,()=>0],[`xCurrentTime`,(e,t)=>(r.getHeapDataView().setFloat64(t,i.now()/864e5+2440587.5,!0),0)],[`xGetLastError`,()=>0],[`xCurrentTimeInt64`,(e,t)=>(r.getHeapDataView().setBigInt64(t,BigInt(i.now())+210866760000000n,!0),0)]],u=Jh.members,d=[[`xClose`,s(`xClose`)],[`xRead`,s(`xRead`)],[`xWrite`,s(`xWrite`)],[`xTruncate`,s(`xTruncate`)],[`xSync`,s(`xSync`)],[`xFileSize`,s(`xFileSize`)],[`xLock`,s(`xLock`)],[`xUnlock`,s(`xUnlock`)],[`xCheckReservedLock`,s(`xCheckReservedLock`)],[`xFileControl`,()=>12],[`xSectorSize`,()=>4096],[`xDeviceCharacteristics`,()=>0]],f=T_.encode(`evolu-raw:${t}\0`),p=r.call(()=>zg(e)(qh.sizeof+Jh.sizeof+f.length));if(!p.ok)return p;let m=r.call(()=>Bg(e)(t));if(!m.ok)return r.call(()=>{r.exports.sqlite3_free(p.value)}),m;let h=p.value,g=h+qh.sizeof,_=g+Jh.sizeof,v=a_(e)([...oe(l,([e,t])=>({signature:c[e].signature,fn:t})),...oe(d,([e,t])=>({signature:u[e].signature,fn:t}))]);return r.call(()=>{let t=r.getHeapU8();t.fill(0,h,_),t.set(f,_);let n=r.getHeapDataView();for(let[e,t]of[[`iVersion`,2],[`szOsFile`,Yh.sizeof],[`mxPathname`,512],[`zName`,_]])n.setInt32(h+c[e].offset,t,!0);for(let[[e],t]of se([l,v.pointers.slice(0,l.length)]))n.setInt32(h+c[e].offset,t,!0);n.setInt32(g+u.iVersion.offset,1,!0);for(let[[e],t]of se([d,v.pointers.slice(l.length)]))n.setInt32(g+u[e].offset,t,!0);let i=r.exports.sqlite3_vfs_register(h,0),o=i===0?Ag(e)(m.value,_):i;return i===0&&r.exports.sqlite3_vfs_unregister(h),r.exports.sqlite3_free(m.value),o===0?z({ioMethods:g,setMethods:e=>{a=e}}):(v[Symbol.dispose](),r.exports.sqlite3_free(p.value),B({type:`SqliteWasmInitializeError`,code:o}))})},A_=(e,t,n)=>{let r=/* @__PURE__ */ new Uint8Array(524);return T_.encodeInto(t,r.subarray(0,512)),new DataView(r.buffer).setUint32(512,n),r.set(new Uint8Array(w_(r.subarray(0,516),n).buffer),516),F_(e,r,0)},j_=e=>T_.encode(e).length<511,M_=e=>e.next().toString(36).slice(2),N_=(e,t)=>typeof e==`object`&&!!e&&`name`in e&&e.name===t,P_=e=>N_(e,`NoModificationAllowedError`)||N_(e,`InvalidStateError`),F_=(e,t,n)=>{let r=V(()=>e.write(t,{at:n}),e=>e);return r.ok?r.value===t.length?z():B({type:`SqliteShortWrite`,requested:t.length,written:r.value}):r},I_=e=>N_(e,`QuotaExceededError`)||L_(e),L_=e=>typeof e==`object`&&!!e&&`type`in e&&e.type===`SqliteShortWrite`,R_=e=>{let t=V(()=>[new URL(e,`file://localhost/`).pathname,new URL(`${e}-journal`,`file://localhost/`).pathname],e=>e);if(!t.ok)return t;let[n,r]=t.value;return r===`${n}-journal`?z(n):B({type:`SahPoolInvalidPath`,name:e})};var z_=function(e,t,n){if(t!=null){if(typeof t!=`object`&&typeof t!=`function`)throw TypeError(`Object expected.`);var r,i;if(n){if(!Symbol.asyncDispose)throw TypeError(`Symbol.asyncDispose is not defined.`);r=t[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw TypeError(`Symbol.dispose is not defined.`);r=t[Symbol.dispose],n&&(i=r)}if(typeof r!=`function`)throw TypeError(`Object not disposable.`);i&&(r=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t},B_=(function(e){return function(t){function n(n){t.error=t.hasError?new e(n,t.error,`An error was suppressed during disposal.`):n,t.hasError=!0}var r,i=0;function a(){for(;r=t.stack.pop();)try{if(!r.async&&i===1)return i=0,t.stack.push(r),Promise.resolve().then(a);if(r.dispose){var e=r.dispose.call(r.value);if(r.async)return i|=2,Promise.resolve(e).then(a,function(e){return n(e),a()})}else i|=1}catch(e){n(e)}if(i===1)return t.hasError?Promise.reject(t.error):Promise.resolve();if(t.hasError)throw t.error}return a()}})(typeof SuppressedError==`function`?SuppressedError:function(e,t,n){var r=Error(n);return r.name=`SuppressedError`,r.error=e,r.suppressed=t,r});let V_=e=>e&255,H_=/*#__PURE__*/ Dr(`SqliteVfsPath`,fr,e=>{let t=V(()=>new URL(e,`file://localhost/`).pathname,()=>null);return t.ok&&t.value===e&&e.length<=498?z():B({type:`SqliteVfsPath`,value:e})},e=>`The value ${H(e.value)} is not a valid SqliteVfsPath.`),U_=e=>t=>{let n={stack:[],error:void 0,hasError:!1};try{let{call:r}=e.sqliteWasm,i=t.type===`Memory`?null:t.vfs,a=0,o=e=>{a++;try{if(i==null)return r(e);let t=Q_.get(i)??0;t===0&&i.clearFailure(),Q_.set(i,t+1);try{return r(()=>(t===0&&ev(i),e()))}finally{Q_.set(i,t)}}finally{a--}},s=z_(n,new DisposableStack,!1);return o(()=>{let n=xg(e),c=yg(e),l=_g(e),u=vg(e),d=gg(e),f=hg(e),p=bg(e),m=eg(e),g=Sg(e),_=Qh(e),v=Og(e),y=kg(e),b=Cg(e),x=Eg(e),S=wg(e),C=Dg(e),w=Tg(e),T=rg(e),E=ag(e),D=sg(e),O=og(e),k=ig(e),A=fg(e),j=Xh(e),M=$h(e),N=lg(e),P=dg(e),F=ng(e),I=cg(e),ne=ug(e),re=pg(e),ie=mg(e),ae=tg(e),oe=jg(e),se=Mg(e),ce=Ng(e),le=Pg(e),ue=zg(e),de=Bg(e),fe=Wg(e),pe=Hg(e),me=Ug(e),he=Gg(e),ge=Vg(e),_e=/* @__PURE__ */ new Set,ve=t=>{e.sqliteWasm.isBroken()||r(()=>j(t))},ye=(e,t)=>{let n={stack:[],error:void 0,hasError:!1};try{return z_(n,new DisposableStack,!1).defer(()=>{ve(e)}),r(t)}catch(e){n.error=e,n.hasError=!0}finally{B_(n)}},be=(e,t)=>{let n=k(e),r=V_(n)===1&&(t===`prepare`||t===`exec`||t===`step`)?D(e):-1;return{type:`SqliteError`,operation:t,extendedCode:n,message:pe(E(e)),sqlOffset:r<0?null:r,cause:Oe(e)}},xe=(e,t)=>({type:`SqliteError`,operation:e,extendedCode:t,message:pe(O(t)),sqlOffset:null,cause:null}),Se=t=>e.sqliteWasm.getHeapDataView().getUint32(t,!0),Ce=Kg(e);if(!Ce.ok)return B(xe(`open`,7));let we=Ce.value;s.defer(()=>{we[Symbol.dispose]()});let Te=we.out+4,Ee=null,De=t=>{let n=we.out+8;if(se(t,n)!==0)return null;let r=e.sqliteWasm.getHeapDataView(),i=r.getInt32(n,!0);return i===1?{type:`SqlitePageAuthenticationError`,pageNumber:r.getUint32(n+4,!0)}:i===2?{type:`SqliteEncryptionUnsupported`}:i===3?{type:`SqliteRandomSourceError`}:null},Oe=e=>{if(i==null)return null;let t=De(e);return Ee??=t,i.getFailure()??(Ee==null?null:{type:`SqliteCodecFailure`,error:Ee})},ke=de(t.type===`Memory`?`:memory:`:`${t.path}\0${t.vfs.vfsName}`);if(!ke.ok)return B(xe(`open`,7));let Ae=ke.value,je;{let n={stack:[],error:void 0,hasError:!1};try{let i=z_(n,new DisposableStack,!1);if(t.type===`Memory`)je=ye(Ae,()=>Zh(e)(Ae,we.out,33554438,0));else{i.defer(()=>{ve(Ae)});let n=0;if(t.type===`EncryptedFile`){let{key:a}=t,o=r(()=>ue(a.length));if(!o.ok)return B(xe(`open`,7));let s=o.value;i.defer(()=>{ve(s)}),i.defer(()=>{e.sqliteWasm.getHeapU8().fill(0,s,s+a.length)}),e.sqliteWasm.getHeapU8().set(a,s),n=s}let a=e.sqliteWasm.getHeapU8().indexOf(0,Ae)+1;je=r(()=>oe(Ae,we.out,a,n,dv))}}catch(e){n.error=e,n.hasError=!0}finally{B_(n)}}let R=Se(we.out);if(je===0&&t.type===`Memory`&&(je=ce(R)),je!==0){let e=R!==0&&k(R)===je?be(R,`open`):{...xe(`open`,je),cause:R===0?null:Oe(R)};return r(()=>_(R)),B(e)}if(s.defer(()=>{r(()=>{le(R)}),r(()=>_(R))}),i!=null){let e=$_.get(i)??/* @__PURE__ */ new Set;$_.set(i,e);let t={drain:()=>{Ee=null,De(R)}};e.add(t),s.defer(()=>{e.delete(t)})}s.defer(()=>{if(!e.sqliteWasm.isBroken())for(let e of _e)e[Symbol.dispose]()});let Me=(t,n)=>{if(!Z_(t))return B({type:`SqliteInvalidSqlText`});let r=t.length*3,i=ue(r+1);if(!i.ok)return B(xe(`prepare`,7));let a=i.value;return ye(a,()=>{let i=ge(t,a,r);if(e.sqliteWasm.getHeapU8()[a+i]=0,N(R,a,i+1,n,we.out,Te)!==0)return B(be(R,`prepare`));let o=Se(we.out);return o===0?B({type:`SqliteEmptySqlError`}):tv(e.sqliteWasm.getHeapU8(),Se(Te),a+i)?z(o):(A(o),B({type:`SqliteMultipleStatementsError`}))})},Ne=t=>{let a=f(t),o=null,s=0,_=e=>{if(e.length!==a)return B({type:`SqliteParameterCountError`,expected:a,actual:e.length});let r=!1,i=null;for(let[a,o]of e.entries()){let e=a+1,s;if(o===null)s=d(t,e);else if(typeof o==`number`)s=qg(o)?l(t,e,o):Number.isSafeInteger(o)?u(t,e,BigInt(o)):c(t,e,o);else if(typeof o==`string`&&o.length*3<=mv){let n=we.reserve(o.length*3);if(!n.ok){i=xe(`bind`,7);break}let r=ge(o,n.value,o.length*3);s=p(t,e,n.value,r,-1)}else if(typeof o==`string`){let n=V(()=>hv.encode(o));if(!n.ok){i=xe(`bind`,7);break}let a=ue(n.value.length);if(!a.ok){i=xe(`bind`,7);break}he(a.value,n.value),r=!0,s=p(t,e,a.value,n.value.length,33)}else if(o.length<=mv){let r=we.reserve(o.length);if(!r.ok){i=xe(`bind`,7);break}he(r.value,o),s=n(t,e,r.value,o.length,-1)}else{let a=ue(o.length);if(!a.ok){i=xe(`bind`,7);break}he(a.value,o),r=!0,s=n(t,e,a.value,o.length,33)}if(s!==0){i=be(R,`bind`);break}}return i?(r&&g(t),B(i)):z(r)},E=e=>{let n=0,r;steps:for(;(r=ne(t))===100;){let r=n===0?ie(t,5,0):s;if(o==null||r!==s){let e=[];for(let n=0;n<b(t);n++){let r=S(t,n);if(r===0)break steps;e.push(pe(r))}o=e,s=r}let i=Object.create(h);for(let[e,n]of o.entries()){let r=w(t,e);switch(r){case 1:case 2:i[n]=x(t,e);break;case 3:{let r=C(t,e);if(r===0)break steps;let a=X_(me,r,y(t,e));if(a==null)break steps;i[n]=a;break}case 4:{let r=v(t,e);if(r!==0){let a=X_(fe,r,y(t,e));if(a==null)break steps;i[n]=a}else if(T(R)===7)break steps;else i[n]=/* @__PURE__ */ new Uint8Array;break}case 5:i[n]=null;break;default:ee(r)}}if(n++,!e(i))return null}return r===101?null:r===100?xe(`step`,7):be(R,`step`)},D=e=>{let n=P(t)===0?null:be(R,`step`);return e&&g(t),n};return{parameterCount:a,run:e=>{let n=_(e);if(!n.ok)return n;let r=ae(R),i=[],a=E(e=>(i.push(e),!0));return D(n.value),a?B(a):z({rows:i,changes:ae(R)===r||re(t)!==0?0:Number(m(R))})},iterate:(t,n)=>{let a=_(t);if(!a.ok)return{type:`Settled`,result:B(a.error)};let o=null,s=E(t=>{try{let a;if(i==null)a=n(t);else{let e=Q_.get(i);Q_.set(i,e-1);try{a=n(t),e===1&&(i.clearFailure(),r(()=>{ev(i)}))}finally{Q_.set(i,e)}}return e.sqliteWasm.isBroken()&&e.sqliteWasm.call(te),a}catch(t){if(e.sqliteWasm.isBroken())throw t;return o={error:t},!1}}),c=D(a.value);if(o)return{type:`Thrown`,error:o.error};let l=s??c;return{type:`Settled`,result:l?B(l):z()}}}},Pe=e=>{if(e.type===`Thrown`)throw e.error;return e.result},Fe=L({prepare:e=>o(()=>{let t={stack:[],error:void 0,hasError:!1};try{let n=Me(e,1);if(!n.ok)return n;let i=n.value,a=Ne(i),s=!1,c=z_(t,new DisposableStack,!1);c.defer(()=>{_e.delete(l),r(()=>A(i))});let l=L({parameterCount:a.parameterCount,run:e=>{if(s)throw Error(Y_);s=!0;try{return o(()=>a.run(e))}finally{s=!1}},iterate:(e,t)=>{if(s)throw Error(Y_);s=!0;try{return Pe(o(()=>a.iterate(e,t)))}finally{s=!1}}},c),u=l[Symbol.dispose];return l[Symbol.dispose]=()=>{if(s)throw Error(Y_);u()},_e.add(l),z(l)}catch(e){t.error=e,t.hasError=!0}finally{B_(t)}}),run:(e,t)=>o(()=>{let n=Me(e,0);if(!n.ok)return n;let r=Ne(n.value).run(t);return A(n.value),r}),iterate:(e,t,n)=>{let r=o(()=>{let r=Me(e,0);if(!r.ok)return{type:`Settled`,result:B(r.error)};let i=Ne(r.value).iterate(t,n);return A(r.value),i});return Pe(r)},exec:t=>o(()=>{if(!Z_(t))return B({type:`SqliteInvalidSqlText`});let n=V(()=>hv.encode(t));if(!n.ok)return B(xe(`exec`,7));let r=ue(n.value.length+1);if(!r.ok)return B(xe(`exec`,7));let i=r.value;return ye(i,()=>{he(i,n.value);let t=i+n.value.length+1;e.sqliteWasm.getHeapU8()[t-1]=0;let r=e=>{let t=be(R,`exec`);return t.sqlOffset==null?t:{...t,sqlOffset:e-i+t.sqlOffset}};for(let e=i;e<t-1;){if(N(R,e,t-e,0,we.out,Te)!==0)return B(r(e));let n=Se(we.out),i=e;if(e=Se(Te),n===0)continue;let a=f(n);if(a!==0)return A(n),B({type:`SqliteParameterCountError`,expected:a,actual:0});let o;for(;(o=ne(n))===100;);let s=o===101?null:r(i);if(A(n),s)return B(s)}return z()})}),export:()=>o(()=>{let t=ue(8);if(!t.ok)return B(xe(`export`,7));let n=t.value;return ye(n,()=>{I(R,0,0);let t=F(R,0,n,0),r=e.sqliteWasm.getHeapDataView().getBigInt64(n,!0);if(t===0)return T(R)===0?r===0n?z(/* @__PURE__ */ new Uint8Array):B(xe(`export`,7)):B(be(R,`export`));let i=X_(fe,t,Number(r));j(t);let a=Oe(R);return a==null?i==null?B(xe(`export`,7)):z(i):B({...xe(`export`,a.type===`SqliteCodecFailure`&&a.error.type===`SqlitePageAuthenticationError`?11:10),cause:a})})}),isAutocommit:()=>r(()=>M(R)!==0)},s),Ie=Fe[Symbol.dispose];return Fe[Symbol.dispose]=()=>{if(a>0)throw Error(`A SqliteDatabase cannot be disposed while one of its operations runs.`);Ie()},z(Fe)})}catch(e){n.error=e,n.hasError=!0}finally{B_(n)}},W_=e=>async t=>{let{vfs:n,path:r}=e,i=U_(t.deps),a=i(e);if(a.ok)return z({database:a.value,keyDerivation:`Raw`});if(!K_(a.error,e))return B(a.error);let o=n.read(r,0,fv);if(!o.ok)return j(o.error.type===`SqliteVfsIoError`,`The pool has the file the raw key failed to open.`),B(o.error);if(o.value.length<fv)return B(a.error);let s=[o.value],c=(e,t)=>{let i=n.read(`${r}-journal`,e,t);return i.ok?z(i.value.length===t?i.value:null):i.error.type===`SahPoolFileNotFound`?z(null):B(i.error)},l=e=>new DataView(e.buffer,e.byteOffset,e.byteLength);walk:{let e=c(0,28);if(!e.ok)return e;if(e.value==null)break walk;let t=l(e.value),n=t.getUint32(20),r=t.getUint32(24);if(t.getUint32(16)===0||!q_(n,32,65536)||!q_(r,512,65536))break walk;let i=Math.floor(1073741824/r)+1,a=r+8,u=0,d=0;for(;;){for(;d===0;){u=Math.ceil(u/n)*n;let e=c(u,n);if(!e.ok)return e;if(e.value==null||!k(e.value.subarray(0,8),pv))break walk;u+=n;let t=l(e.value).getUint32(8);d=t===4294967295?1/0:t}let e=c(u,a);if(!e.ok)return e;if(e.value==null)break walk;let t=l(e.value).getUint32(0);if(u+=a,d--,t===0||t===i)break walk;if(t===1){let t=e.value.slice(4,4+fv);k(t,o.value)||s.push(t);break walk}}}for(let n of s){let r=await t.ok(G_(e.key,n)),a;try{a=i({...e,key:r})}finally{r.fill(0)}if(a.ok)return z({database:a.value,keyDerivation:`Legacy224`});if(!K_(a.error,e))return B(a.error)}return B(a.error)},G_=(e,t)=>async n=>{let{subtleCrypto:r}=n.deps,i=new Uint8Array(2*e.length+3).fill(39);i[0]=120;for(let[t,n]of e.entries())i[2+2*t]=J_(n>>4),i[3+2*t]=J_(n&15);let a;try{a=await r.importKey(`raw`,i,`PBKDF2`,!1,[`deriveBits`])}finally{i.fill(0)}let o=await r.deriveBits({name:`PBKDF2`,hash:`SHA-512`,salt:new Uint8Array(t),iterations:256e3},a,256);return z(new Uint8Array(o))},K_=(e,{vfs:t,path:n})=>e.cause?.type===`SqliteCodecFailure`&&e.cause.error.type===`SqlitePageAuthenticationError`&&(e.cause.error.pageNumber===1||t.getPaths().includes(`${n}-journal`)),q_=(e,t,n)=>e>=t&&e<=n&&!(e&e-1),J_=e=>e<10?48+e:87+e,Y_=`A SqliteStatement cannot run or be disposed while it runs.`,X_=(e,t,n)=>{try{return e(t,n)}catch{return null}},Z_=e=>!e.includes(`\0`)&&e.isWellFormed(),Q_=/*#__PURE__*/ new WeakMap,$_=/*#__PURE__*/ new WeakMap,ev=e=>{for(let t of $_.get(e)??[])t.drain()},tv=(e,t,n)=>{let r=t;for(;r<n;)switch(e[r]){case uv:r++;break;case ov:case nv:case rv:case iv:case av:for(r++;r<n&&(e[r]===ov||e[r]>=nv&&e[r]<=av);)r++;break;case 239:if(r+2>=n||e[r+1]!==187||e[r+2]!==191)return!1;r+=3;break;case cv:if(r+1===n||e[r+1]!==cv)return!1;for(r+=2;r<n&&e[r]!==rv;)r++;break;case lv:{if(r+2>=n||e[r+1]!==sv)return!1;let t=r+2;for(;t+1<n&&(e[t]!==sv||e[t+1]!==lv);)t++;r=t+1<n?t+2:n;break}default:return!1}return!0},nv=9,rv=10,iv=12,av=13,ov=32,sv=42,cv=45,lv=47,uv=59,dv=2,fv=16,pv=/*#__PURE__*/ Uint8Array.of(217,213,5,249,32,161,99,215),mv=65536,hv=/*#__PURE__*/ new TextEncoder,gv=/*#__PURE__*/ new URL(new URL(`sqlite3-Cd6-Pjb9.wasm`,self.location.href).href,``+self.location.href);var _v=function(e,t,n){if(t!=null){if(typeof t!=`object`&&typeof t!=`function`)throw TypeError(`Object expected.`);var r,i;if(n){if(!Symbol.asyncDispose)throw TypeError(`Symbol.asyncDispose is not defined.`);r=t[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw TypeError(`Symbol.dispose is not defined.`);r=t[Symbol.dispose],n&&(i=r)}if(typeof r!=`function`)throw TypeError(`Object not disposable.`);i&&(r=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t},vv=(function(e){return function(t){function n(n){t.error=t.hasError?new e(n,t.error,`An error was suppressed during disposal.`):n,t.hasError=!0}var r,i=0;function a(){for(;r=t.stack.pop();)try{if(!r.async&&i===1)return i=0,t.stack.push(r),Promise.resolve().then(a);if(r.dispose){var e=r.dispose.call(r.value);if(r.async)return i|=2,Promise.resolve(e).then(a,function(e){return n(e),a()})}else i|=1}catch(e){n(e)}if(i===1)return t.hasError?Promise.reject(t.error):Promise.resolve();if(t.hasError)throw t.error}return a()}})(typeof SuppressedError==`function`?SuppressedError:function(e,t,n){var r=Error(n);return r.name=`SuppressedError`,r.error=e,r.suppressed=t,r});let yv=e=>e(Xg(e.deps.nativeFetch(gv)),e.deps),bv=e=>(t,n)=>async r=>{let i={stack:[],error:void 0,hasError:!1};try{let a=Dv(await e.sqliteWasmLoad),o={...e,sqliteWasm:a},s=!1,c=_v(i,new DisposableStack,!1),l=async()=>{let e=c.use(Dv(await r(Tv(t),o)));return c.defer(()=>{s&&Dv(e.unlink(Ev))}),e},u;switch(n?.mode){case`memory`:u=c.use(Dv(U_(o)({type:`Memory`})));break;case`encrypted`:{let e=Dv(await r(W_({type:`EncryptedFile`,vfs:await l(),path:Ev,key:n.encryptionKey}),o));u=c.use(e.database),Dv(u.exec(`pragma journal_size_limit = 0; pragma locking_mode = exclusive; begin exclusive; commit;`));break}case void 0:u=c.use(Dv(U_(o)({type:`File`,vfs:await l(),path:Ev})));break;default:ee(n)}let d=c.move();return z({exec:e=>Dv(u.run(e.sql,e.parameters)),prepare:e=>{let t={stack:[],error:void 0,hasError:!1};try{let n=_v(t,new DisposableStack,!1),r=n.use(Dv(u.prepare(e)));return L({exec:e=>Dv(r.run(e))},n)}catch(e){t.error=e,t.hasError=!0}finally{vv(t)}},iterate:(e,t)=>{Dv(u.iterate(e.sql,e.parameters,t))},export:()=>Dv(u.export()),deleteDatabase:()=>{s=!0,d.dispose()},[Symbol.dispose]:()=>{d.dispose()}})}catch(e){i.error=e,i.hasError=!0}finally{vv(i)}},xv=e=>t=>async n=>{let r={stack:[],error:void 0,hasError:!1};try{let i=Dv(await e.sqliteWasmLoad),a=await n(Tv(t,{heldTimeout:`10s`}),{...e,sqliteWasm:i});return!a.ok&&a.error.type===`SahPoolHeldError`?B({type:`DatabaseHeldError`,name:t}):(_v(r,Dv(a),!1),z())}catch(e){r.error=e,r.hasError=!0}finally{vv(r)}},Sv=e=>t=>async n=>{let r=`.${t}`,i=await We(()=>e.opfsRoot.getDirectory(),Bo);if(!i.ok)return i;let a=await We(()=>i.value.getDirectoryHandle(r),e=>wv(e)?z():B(Bo(e)));if(!a.ok)return a.error;let o=await e.sqliteWasmLoad;if(!o.ok)return B(Bo(o.error));let s=await n(Tv(t,{heldTimeout:`10s`}),{...e,sqliteWasm:o.value});if(!s.ok)return B(s.error.type===`SahPoolHeldError`?{type:`DatabaseHeldError`,name:t}:Bo(s.error));let c=s.value,l=V(()=>c.unlink(Ev),Bo),u=V(()=>{c[Symbol.dispose]()},Bo);if(!l.ok)return l;if(!l.value.ok)return B(Bo(l.value.error));if(!u.ok)return u;let d=await We(()=>i.value.removeEntry(r,{recursive:!0}),e=>wv(e)?z():B(Bo(e)));return d.ok?z():d.error},Cv=e=>t=>{let n=`.${t}`;return()=>We(async()=>{let t=await e.opfsRoot.getDirectory();for await(let e of t.values())if(e.kind===`directory`&&e.name===n)return!0;return!1},Bo)},wv=e=>e instanceof DOMException&&e.name===`NotFoundError`,Tv=(e,t)=>y_({...t,directory:[`.${e}`]}),Ev=/*#__PURE__*/ H_.orThrow(`/evolu1.db`),Dv=e=>{if(e.ok)return e.value;let{error:t}=e;throw Error(`message`in t&&typeof t.message==`string`?t.message:t.type,{cause:t})};function Ov(e){let t=e=>{reportError(Vo(e))};return Eo(e===void 0?{reportDefect:t}:{reportDefect:t,...e})}var kv=function(e,t,n){if(t!=null){if(typeof t!=`object`&&typeof t!=`function`)throw TypeError(`Object expected.`);var r,i;if(n){if(!Symbol.asyncDispose)throw TypeError(`Symbol.asyncDispose is not defined.`);r=t[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw TypeError(`Symbol.dispose is not defined.`);r=t[Symbol.dispose],n&&(i=r)}if(typeof r!=`function`)throw TypeError(`Object not disposable.`);i&&(r=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t},Av=(function(e){return function(t){function n(n){t.error=t.hasError?new e(n,t.error,`An error was suppressed during disposal.`):n,t.hasError=!0}var r,i=0;function a(){for(;r=t.stack.pop();)try{if(!r.async&&i===1)return i=0,t.stack.push(r),Promise.resolve().then(a);if(r.dispose){var e=r.dispose.call(r.value);if(r.async)return i|=2,Promise.resolve(e).then(a,function(e){return n(e),a()})}else i|=1}catch(e){n(e)}if(i===1)return t.hasError?Promise.reject(t.error):Promise.resolve();if(t.hasError)throw t.error}return a()}})(typeof SuppressedError==`function`?SuppressedError:function(e,t,n){var r=Error(n);return r.name=`SuppressedError`,r.error=e,r.suppressed=t,r});let jv=()=>{let e={stack:[],error:void 0,hasError:!1};try{let t=new globalThis.MessageChannel,n=kv(e,new DisposableStack,!1),r=n.use(Iv(t.port1)),i=n.use(Iv(t.port2)),a=n.move();return{port1:r,port2:i,[Symbol.dispose]:()=>a.dispose()}}catch(t){e.error=t,e.hasError=!0}finally{Av(e)}},Mv=e=>Iv(e),Nv=e=>{let t={stack:[],error:void 0,hasError:!1};try{let n=new globalThis.BroadcastChannel(e),r=kv(t,new DisposableStack,!1),i=!1;r.defer(()=>{i=!0,n.onmessage=null,n.close()});let a=null;return L({postMessage:e=>{n.postMessage(e)},get onMessage(){return i?null:a},set onMessage(e){i||(a=e,n.onmessage=e?t=>{e(t.data)}:null)}},r)}catch(e){t.error=e,t.hasError=!0}finally{Av(t)}},Pv=e=>Iv(e),Fv=()=>{let e=za();return{console:Ia({output:e}),consoleStoreOutputEntry:e.entry,createBroadcastChannel:Nv,createMessageChannel:jv,createMessagePort:Mv}},Iv=e=>{let t=null;return{postMessage:(t,n)=>{n==null?e.postMessage(t):Lv(e,t,n)},get onMessage(){return t},set onMessage(n){t=n,e.onmessage=n?e=>{n(e.data)}:null},native:e,[Symbol.dispose]:()=>{e.onmessage=null,Rv.has(e)||(`terminate`in e?e.terminate():e.close())}}},Lv=(e,t,n)=>{let r=[...n];e.postMessage(t,r);for(let e of r)Rv.add(e)},Rv=/* @__PURE__ */ new WeakSet;e();let zv=Ov({...Fv(),lockManager:navigator.locks,randomBytes:io()}),Bv={opfsRoot:navigator.storage,sqliteWasmLoad:zv(yv),subtleCrypto:crypto.subtle};zv(yh(Pv(self)),{...zv.deps,createSqliteDriver:bv(Bv),evolu7DatabaseExists:Cv(Bv),deleteDatabaseFiles:Sv(Bv),waitForDatabaseRelease:xv(Bv)}),self.postMessage(null)})();