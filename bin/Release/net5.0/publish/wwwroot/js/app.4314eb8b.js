(function(e){function t(t){for(var n,c,s=t[0],i=t[1],l=t[2],u=0,d=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},c={app:0},r={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d83e7":"9822f3f7","chunk-2d0e19ff":"857db91f","chunk-567091b5":"72637387","chunk-68baa02c":"d954efe9"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-567091b5":1,"chunk-68baa02c":1};c[e]?t.push(c[e]):0!==c[e]&&a[e]&&t.push(c[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0d83e7":"31d6cfe0","chunk-2d0e19ff":"31d6cfe0","chunk-567091b5":"5cfcb97b","chunk-68baa02c":"dac4f1e0"}[e]+".css",r=i.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete c[e],p.parentNode.removeChild(p),a(o)},p.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){c[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",d.name="ChunkLoadError",d.type=n,d.request=c,a[1](d)}r[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0b02":function(e,t,a){"use strict";a("3180")},"24cc":function(e,t,a){"use strict";a("fd55")},"2b20":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a("bc3a"),c=a.n(n);const r=window.location.origin.includes("localhost")?"https://localhost:5001":"",o=c.a.create({baseURL:r,timeout:8e3}),s=function(e){o.defaults.headers.authorization=e}},"30b4":function(e,t,a){},3180:function(e,t,a){},"41cb":function(e,t,a){"use strict";var n=a("6c02"),c=a("8816");function r(e){return()=>a("a2f9")(`./${e}.vue`)}const o=[{path:"/",name:"Home",component:r("HomePage")},{path:"/profile",name:"Profile",component:r("ProfilePage"),beforeEnter:c["a"]},{path:"/userprofile/:id",name:"UserProfile",component:r("UserProfilePage")},{path:"/activevault/:id",name:"ActiveVault",component:r("ActiveVaultPage")}],s=Object(n["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(n["b"])(),routes:o});t["a"]=s},"4b57":function(e,t,a){"use strict";a("ee18")},"51b1":function(e,t,a){"use strict";a("746a")},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("7a23");const c=Object(n["h"])("footer",null,[Object(n["h"])("div",{class:"bg-dark text-light text-center p-4"}," Keepr ")],-1);function r(e,t,a,r,o,s){const i=Object(n["y"])("Navbar"),l=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["h"])("header",null,[Object(n["h"])(i)]),Object(n["h"])("main",null,[Object(n["h"])(l,null,{default:Object(n["G"])(({Component:e})=>[Object(n["h"])(n["b"],{name:"route",mode:"out-in"},{default:Object(n["G"])(()=>[(Object(n["r"])(),Object(n["e"])(Object(n["z"])(e)))]),_:2},1024)]),_:1})]),c],64)}var o=a("83fc"),s={name:"App",setup(){return{appState:Object(n["c"])(()=>o["a"])}}};a("24cc");s.render=r;var i=s;function l(e){const t=a("ccc2");t.keys().forEach(a=>{const n=t(a),c=n.default||n,r=c.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(r,c)})}var u=a("41cb"),d=a("4989"),p=a.n(d),b=a("1157"),f=a.n(b),v=a("f0bd");const h=Object(n["d"])(i);l(h),h.use(u["a"],p.a,f.a,v["default"]).mount("#app")},"67ee":function(e,t,a){},"6c3f":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("83fc"),c=a("8a4e"),r=a("2b20");class o{async getProfile(){try{const e=await r["a"].get("/profile");n["a"].profile=e.data}catch(e){c["a"].error("HAVE YOU STARTED YOUR SERVER YET???",e)}}async getUserProfile(e){try{const t=await r["a"].get("/profile/"+e);n["a"].userProfile=t.data}catch(t){c["a"].error(t)}}async getVaultsByProfile(e){try{const t=await r["a"].get("profile/"+e+"/vaults");n["a"].vaults=t.data}catch(t){c["a"].log(t)}}}const s=new o},"6c96":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("2b20"),c=a("83fc"),r=a("8a4e"),o=a("3d20"),s=a.n(o);class i{async getAllKeeps(){try{const e=await n["a"].get("api/keeps");c["a"].keeps=e.data}catch(e){r["a"].log(e)}}async getActiveKeep(e){try{const t=await n["a"].get("api/keeps/"+e);c["a"].activeKeep=t.data}catch(t){r["a"].error(t)}}async getProfileKeeps(){try{const e=await n["a"].get(`profile/${c["a"].profile.id}/keeps`);c["a"].keeps=e.data}catch(e){r["a"].error(e)}}async getUserProfileKeeps(e){try{const t=await n["a"].get("profile/"+e+"/keeps");c["a"].keeps=t.data}catch(t){r["a"].error(t)}}async addKeep(e){try{await n["a"].post("api/keeps",e),this.getProfileKeeps()}catch(t){r["a"].log(t)}}async deleteKeep(e){const t=s.a.mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async a=>{if(a.isConfirmed){try{await n["a"].delete("api/keeps/"+e),this.getProfileKeeps()}catch(c){r["a"].log(c)}t.fire("Deleted!","Your keep has been deleted.","success")}else a.dismiss===s.a.DismissReason.cancel&&t.fire("Cancelled","Your keep is safe :)","error")})}}const l=new i},"746a":function(e,t,a){},"83fc":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("7a23");const c=Object(n["v"])({user:{},profile:{},keeps:[],vaults:[],userVaults:[],activeKeep:{},activeVault:{},userProfile:{}})},"8a4e":function(e,t,a){"use strict";function n(e,t){window.location.origin.includes("localhost")&&console[e](...t)}a.d(t,"a",(function(){return c}));const c={log(){n("log",arguments)},error(){n("error",arguments)},warn(){n("warn",arguments)},assert(){n("assert",arguments)},trace(){n("trace",arguments)}}},"93dc":function(e,t,a){"use strict";a("30b4")},"971b":function(e,t,a){"use strict";a("67ee")},"9d8d":function(e,t,a){"use strict";a.r(t);var n=a("7a23");const c=Object(n["J"])("data-v-bbb381e4");Object(n["u"])("data-v-bbb381e4");const r={class:"navbar navbar-expand-lg navbar-dark bg-dark"},o=Object(n["h"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),s={class:"collapse navbar-collapse",id:"navbarText"},i={class:"navbar-nav mr-auto"},l={class:"nav-item"},u=Object(n["g"])(" Home "),d={class:"navbar-text"},p={key:1,class:"dropdown"},b={class:"mx-3"},f=Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable"}," Profile ",-1);Object(n["s"])();const v=c((function(e,t,a,v,h,O){const m=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["e"])("nav",r,[o,Object(n["h"])("div",s,[Object(n["h"])("ul",i,[Object(n["h"])("li",l,[Object(n["h"])(m,{to:{name:"Home"},class:"nav-link"},{default:c(()=>[u]),_:1})])]),Object(n["h"])("span",d,[v.user.isAuthenticated?(Object(n["r"])(),Object(n["e"])("div",p,[Object(n["h"])("div",{class:"dropdown-toggle",onClick:t[2]||(t[2]=e=>v.state.dropOpen=!v.state.dropOpen)},[Object(n["h"])("img",{src:v.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(n["h"])("span",b,Object(n["B"])(v.user.name),1)]),Object(n["h"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:v.state.dropOpen}],onClick:t[4]||(t[4]=e=>v.state.dropOpen=!1)},[Object(n["h"])(m,{to:{name:"Profile"}},{default:c(()=>[f]),_:1}),Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[3]||(t[3]=(...e)=>v.logout(...e))}," logout ")],2)])):(Object(n["r"])(),Object(n["e"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:t[1]||(t[1]=(...e)=>v.login(...e))}," Login "))])])])}));var h=a("8816"),O=a("83fc");const m="dev-koe5rbqq.us.auth0.com",g="NakkVCMWYCYzjxCDNt8H5efdOrEZin50",j="https://rtkanbanapi/";var k=a("41cb"),y=a("2b20"),w=a("6c3f"),P=a("d10d");const C=Object(h["b"])({domain:m,clientId:g,audience:j,onRedirectCallback:e=>{k["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});C.on(C.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(y["b"])(C.bearer),await w["a"].getProfile(),O["a"].user=C.user,P["a"].getUserVaults(O["a"].profile.id)}));var K={name:"Navbar",setup(){const e=Object(n["v"])({dropOpen:!1});return{state:e,user:Object(n["c"])(()=>O["a"].user),async login(){C.loginWithPopup()},async logout(){await C.logout({returnTo:window.location.origin})}}}};a("4b57");K.render=v,K.__scopeId="data-v-bbb381e4";t["default"]=K},a2f9:function(e,t,a){var n={"./ActiveVaultPage.vue":["79f5","chunk-2d0d83e7"],"./HomePage.vue":["78a7","chunk-567091b5"],"./ProfilePage.vue":["1a3e","chunk-68baa02c"],"./UserProfilePage.vue":["7adc","chunk-2d0e19ff"]};function c(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],c=t[0];return a.e(t[1]).then((function(){return a(c)}))}c.keys=function(){return Object.keys(n)},c.id="a2f9",e.exports=c},a613:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("2b20"),c=a("8a4e"),r=a("83fc"),o=a("3d20"),s=a.n(o);class i{async addKeepToVault(e,t){try{const a={keepId:t,vaultId:e};await n["a"].post("api/vaultkeeps",a);const c=r["a"].keeps.findIndex(e=>e.id===t),o=r["a"].keeps[c];o.keeps++,o.views=r["a"].activeKeep.views,r["a"].activeKeep=o}catch(a){c["a"].log(a)}}async removeKeepFromVault(e,t){const a=s.a.mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async r=>{if(r.isConfirmed){try{await n["a"].delete("api/vaultkeeps/"+e),this.getKeepsByVault(t)}catch(o){c["a"].error(o)}a.fire("Deleted!","This keep has been removed from the vault","success")}else r.dismiss===s.a.DismissReason.cancel&&a.fire("Cancelled","The keep is still in the vault","error")})}async getKeepsByVault(e){try{const t=await n["a"].get("api/vaults/"+e+"/keeps");r["a"].keeps=t.data}catch(t){c["a"].error(t)}}}const l=new i},b62d:function(e,t,a){"use strict";a.r(t);var n=a("7a23");const c=Object(n["J"])("data-v-f35d968e"),r=c((function(e,t,a,c,r,o){return Object(n["r"])(),Object(n["e"])("div",{onClick:t[2]||(t[2]=Object(n["I"])(e=>c.goToActiveVault(c.vault.id),["stop"])),class:"userprofile-vault-component col-3 border rounded shadow-lg pointer"},[Object(n["h"])("h3",null,Object(n["B"])(c.vault.name),1),Object(n["h"])("p",null,Object(n["B"])(c.vault.description),1),c.vault.creatorId==c.profile.id?(Object(n["r"])(),Object(n["e"])("button",{key:0,onClick:t[1]||(t[1]=Object(n["I"])(e=>c.deleteVault(c.vault.id,c.profile.id),["stop"])),class:"btn btn-danger"}," Delete ")):Object(n["f"])("",!0)])}));var o=a("d10d"),s=a("83fc"),i=a("6c02"),l={name:"UserprofileVaultComponent",props:{vaultProp:Object},setup(e){const t=Object(i["d"])();return{profile:Object(n["c"])(()=>s["a"].profile),vault:Object(n["c"])(()=>e.vaultProp),deleteVault(e,t){o["a"].deleteVault(e,t)},goToActiveVault(e){t.push({name:"ActiveVault",params:{id:e}})}}},components:{}};a("93dc");l.render=r,l.__scopeId="data-v-f35d968e";t["default"]=l},ccc2:function(e,t,a){var n={"./HomeKeepComponent.vue":"d3e1","./ProfileKeepComponent.vue":"f277","./UserProfileKeepComponent.vue":"d6c2","./UserProfileVaultComponent.vue":"b62d","./navbar.vue":"9d8d"};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id="ccc2"},d10d:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("2b20"),c=a("83fc"),r=a("8a4e"),o=a("3d20"),s=a.n(o);class i{async getUserProfileVaults(e){try{const t=await n["a"].get("profile/"+e+"/vaults/");c["a"].vaults=t.data}catch(t){r["a"].log(t)}}async getUserVaults(e){try{const t=await n["a"].get("profile/"+e+"/vaults/");c["a"].userVaults=t.data}catch(t){r["a"].log(t)}}async getActiveVault(e){try{const t=await n["a"].get("api/vaults/"+e);c["a"].activeVault=t.data}catch(t){r["a"].error(t)}}async addVault(e,t){try{await n["a"].post("api/vaults",e),this.getUserProfileVaults(t)}catch(a){r["a"].log(a)}}async deleteVault(e,t){const a=s.a.mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0}).then(async c=>{if(c.isConfirmed){try{await n["a"].delete("api/vaults/"+e),this.getUserProfileVaults(t)}catch(o){r["a"].error(o)}a.fire("Deleted!","The vault has been deleted.","success")}else c.dismiss===s.a.DismissReason.cancel&&a.fire("Cancelled","The vault has not been deleted","error")})}}const l=new i},d3e1:function(e,t,a){"use strict";a.r(t);var n=a("7a23");const c=Object(n["J"])("data-v-7a257eda");Object(n["u"])("data-v-7a257eda");const r={class:"card-body"},o={class:"modal-dialog",role:"document"},s={class:"modal-content"},i={class:"modal-header"},l=Object(n["h"])("span",null,"||",-1),u=Object(n["h"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(n["h"])("span",{"aria-hidden":"true"},"×")],-1),d={class:"modal-body"},p={class:"modal-footer"},b=Object(n["h"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close ",-1),f={key:1,class:"dropdown"},v=Object(n["h"])("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Add to Vault ",-1),h={class:"dropdown-menu","aria-labelledby":"dropdownMenu2"};Object(n["s"])();const O=c((function(e,t,a,c,O,m){return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["h"])("div",{onClick:t[2]||(t[2]=e=>c.getActiveKeep(c.keep.id)),class:"home-keep-component card pointer","data-toggle":"modal","data-target":"#keepModal"+c.keep.id},[Object(n["h"])("img",{class:"card-img-top img-fluid",src:c.keep.img,alt:"keep img",style:{width:"100%"}},null,8,["src"]),Object(n["h"])("div",r,[Object(n["h"])("h3",null,Object(n["B"])(c.keep.name),1),Object(n["h"])("img",{onClick:t[1]||(t[1]=Object(n["I"])(e=>c.goToUserProfile(c.keep.creator.id),["stop"])),class:"avatar",src:c.keep.creator.picture,alt:"keep img"},null,8,["src"])])],8,["data-target"]),Object(n["h"])("div",{class:"modal fade",id:"keepModal"+c.keep.id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[Object(n["h"])("div",o,[Object(n["h"])("div",s,[Object(n["h"])("div",i,[Object(n["h"])("h5",null," views: "+Object(n["B"])(c.activeKeep.views),1),l,Object(n["h"])("h5",null," keeps: "+Object(n["B"])(c.activeKeep.keeps),1),u]),Object(n["h"])("div",d,[Object(n["h"])("img",{class:"img-fluid",src:c.keep.img,alt:""},null,8,["src"]),Object(n["h"])("p",null,Object(n["B"])(c.keep.description),1)]),Object(n["h"])("div",p,[Object(n["h"])("img",{class:"img-fluid avatar",src:c.keep.creator.picture,alt:"keep img"},null,8,["src"]),Object(n["h"])("h5",null,Object(n["B"])(c.keep.creator.name),1),b,c.profile.id==c.keep.creatorId?(Object(n["r"])(),Object(n["e"])("button",{key:0,onClick:t[3]||(t[3]=Object(n["I"])(e=>c.deleteKeep(c.keep.id),["stop"])),class:"btn btn-danger"}," Delete ")):Object(n["f"])("",!0),c.profile.id?(Object(n["r"])(),Object(n["e"])("div",f,[v,Object(n["h"])("div",h,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(c.vaults,e=>(Object(n["r"])(),Object(n["e"])("button",{key:e.id,class:"dropdown-item",type:"button",onClick:Object(n["I"])(t=>c.addKeepToVault(e.id,c.keep.id),["stop"])},Object(n["B"])(e.name),9,["onClick"]))),128))]),c.keep.vaultKeepId&&c.vault.creatorId==c.profile.id?(Object(n["r"])(),Object(n["e"])("button",{key:0,onClick:t[4]||(t[4]=Object(n["I"])(e=>c.removeKeepFromVault(c.keep.vaultKeepId,c.vault.id,c.profile.id),["stop"])),class:"btn btn-danger"}," Remove from Vault ")):Object(n["f"])("",!0)])):Object(n["f"])("",!0)])])])],8,["id"])],64)}));var m=a("6c02"),g=a("83fc"),j=a("a613"),k=a("6c96"),y={name:"HomeKeepComponent",props:{keepProp:Object},setup(e){const t=Object(m["d"])();return{keep:Object(n["c"])(()=>e.keepProp),profile:Object(n["c"])(()=>g["a"].profile),vaults:Object(n["c"])(()=>g["a"].userVaults),vault:Object(n["c"])(()=>g["a"].activeVault),activeKeep:Object(n["c"])(()=>g["a"].activeKeep),goToUserProfile(e){t.push({name:"UserProfile",params:{id:e}})},addKeepToVault(e,t){j["a"].addKeepToVault(e,t)},deleteKeep(e){k["a"].deleteKeep(e)},async removeKeepFromVault(e,t,a){await j["a"].removeKeepFromVault(e,t)},getActiveKeep(e){k["a"].getActiveKeep(e)}}},components:{}};a("51b1");y.render=O,y.__scopeId="data-v-7a257eda";t["default"]=y},d6c2:function(e,t,a){"use strict";a.r(t);var n=a("7a23");const c=Object(n["J"])("data-v-456e9430");Object(n["u"])("data-v-456e9430");const r={class:"userprofile-keep-component col-3 border rounded shadow-lg"},o={class:"image-box"},s={class:"bottom-left"};Object(n["s"])();const i=c((function(e,t,a,c,i,l){return Object(n["r"])(),Object(n["e"])("div",r,[Object(n["h"])("div",o,[Object(n["h"])("img",{class:"img-fluid max-height",src:c.keep.img,alt:"keep img",style:{width:"100%"}},null,8,["src"]),Object(n["h"])("h3",s,Object(n["B"])(c.keep.name),1),c.profile.id==c.keep.creatorId?(Object(n["r"])(),Object(n["e"])("button",{key:0,onClick:t[1]||(t[1]=Object(n["I"])(e=>c.deleteKeep(c.keep.id),["stop"])),class:"btn btn-danger bottom-right"}," Delete ")):Object(n["f"])("",!0)])])}));var l=a("6c96"),u=a("83fc"),d={name:"UserprofileKeepComponent",props:{keepProp:Object},setup(e){return{keep:Object(n["c"])(()=>e.keepProp),profile:Object(n["c"])(()=>u["a"].profile),deleteKeep(e){l["a"].deleteKeep(e)}}},components:{}};a("0b02");d.render=i,d.__scopeId="data-v-456e9430";t["default"]=d},ee18:function(e,t,a){},f277:function(e,t,a){"use strict";a.r(t);var n=a("7a23");const c=Object(n["J"])("data-v-22f9a37c");Object(n["u"])("data-v-22f9a37c");const r={class:"profile-keep-component col-3"},o={class:"image-box pointer"},s={class:"bottom-left"};Object(n["s"])();const i=c((function(e,t,a,c,i,l){return Object(n["r"])(),Object(n["e"])("div",r,[Object(n["h"])("div",o,[Object(n["h"])("img",{class:"img-fluid max-height",src:c.keep.img,alt:"keep img",style:{width:"100%"}},null,8,["src"]),Object(n["h"])("h3",s,Object(n["B"])(c.keep.name),1),Object(n["h"])("button",{onClick:t[1]||(t[1]=Object(n["I"])(e=>c.deleteKeep(c.keep.id),["stop"])),class:"btn btn-danger bottom-right"}," Delete ")])])}));var l=a("6c96"),u={name:"ProfileKeepComponent",props:{keepProp:Object},setup(e){return{keep:Object(n["c"])(()=>e.keepProp),deleteKeep(e){l["a"].deleteKeep(e)}}},components:{}};a("971b");u.render=i,u.__scopeId="data-v-22f9a37c";t["default"]=u},fd55:function(e,t,a){}});