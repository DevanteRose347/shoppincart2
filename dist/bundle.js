(()=>{"use strict";const t={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let o;const r=new Uint8Array(16);function e(){if(!o&&(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(r)}const n=[];for(let t=0;t<256;++t)n.push((t+256).toString(16).slice(1));const c=function(o,r,c){if(t.randomUUID&&!r&&!o)return t.randomUUID();const s=(o=o||{}).random||(o.rng||e)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,r){c=c||0;for(let t=0;t<16;++t)r[c+t]=s[t];return r}return function(t,o=0){return n[t[o+0]]+n[t[o+1]]+n[t[o+2]]+n[t[o+3]]+"-"+n[t[o+4]]+n[t[o+5]]+"-"+n[t[o+6]]+n[t[o+7]]+"-"+n[t[o+8]]+n[t[o+9]]+"-"+n[t[o+10]]+n[t[o+11]]+n[t[o+12]]+n[t[o+13]]+n[t[o+14]]+n[t[o+15]]}(s)};class s{constructor(t,o,r,e){this.id=c(),this.name=t,this.price=o,this.quantity=r,this.description=e}}class a{constructor(t,o){this.id=c(),this.name=t,this.age=o,this.cart=[]}addToCart(t){this.cart.push(t)}static loginInUser(){const t=document.getElementById("name"),o=document.getElementById("age");if(t&&o){const r=t.value,e=parseInt(o.value);if(r&&e)return new a(r,e)}return null}removeFromCart(t){for(let o=this.cart.length-1;o>=0;o--)this.cart[o].id===t.id&&this.cart.splice(o,1)}removeQuantityFromCart(t,o){for(let r of this.cart)r==t&&(t.quantity-=o)}cartTotal(){let t=0;for(const o of this.cart)t+=o.price;return t}printCart(){console.log(this.cart)}}let i=c();function l(t,o){return new a(t,o)}console.log(i);const u=l("John Doe",25);console.log(u);const d=new s("milk",25.99,4,"good");console.log(d),console.log(function(){const t=l("Mike Doe",22);console.log(t);const o=new s("juice",5.06,2,"great"),r=new s("bread",6.07,2,"scrumptious"),e=new s("rice",9,1,"tasty");t.addToCart(o),console.log(t.printCart()),t.addToCart(r),t.addToCart(e),console.log(t.printCart()),console.log(t.cartTotal()),t.removeFromCart(e),t.removeFromCart(o),t.removeFromCart(r),console.log(t.printCart()),console.log(t.cartTotal())}())})();