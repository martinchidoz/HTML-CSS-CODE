define("discourse/plugins/discourse-checklist/discourse/initializers/checklist",["exports","discourse/lib/plugin-api","discourse/lib/ajax","discourse-common/lib/icon-library","I18n"],(function(e,n,t,c,s){"use strict"
function i(e){e.forEach((e=>e.classList.remove("readonly")))}function a(e,n){if(!n)return
const a=[...e.getElementsByClassName("chcklst-box")],o=n.widget,r=n.getModel()
r.can_edit&&a.forEach(((e,n)=>{e.onclick=function(e){const l=e.currentTarget,u=l.classList
if(u.contains("permanent")||u.contains("readonly"))return
const d=u.contains("checked")?"[ ]":"[x]",f=document.createElement("template")
f.innerHTML=(0,c.iconHTML)("spinner",{class:"fa-spin"}),l.insertAdjacentElement("afterend",f.content.firstChild),l.classList.add("hidden"),a.forEach((e=>e.classList.add("readonly"))),(0,t.ajax)("/posts/".concat(r.id),{type:"GET",cache:!1}).then((e=>{const t=[];[/`[^`\n]*\n?[^`\n]*`/gm,/^```[^]*?^```/gm,/\[code\][^]*?\[\/code\]/gm,/_(?=\S).*?\S_/gm,/~~(?=\S).*?\S~~/gm].forEach((n=>{let c
for(;null!=(c=n.exec(e.raw));)t.push([c.index,c.index+c[0].length])})),[/([^\[\n]|^)\*\S.+?\S\*(?=[^\]\n]|$)/gm].forEach((n=>{let c
for(;null!=(c=n.exec(e.raw));)t.push([c.index+1,c.index+c[0].length])}))
let c=-1,l=!1
const u=e.raw.replace(/\[(\s|\_|\-|\x|\\?\*)?\]/gi,((e,s,i)=>l?e:(c+=t.every((n=>n[0]>=i+e.length||i>n[1])),c===n?(l=!0,d):e))),f=r.save({raw:u,edit_reason:s.default.t("checklist.edit_reason")})
f&&f.then?f.then((()=>{o.attrs.isSaving=!1,o.scheduleRerender()})).finally((()=>i(a))):i(a)})).catch((()=>i(a)))}}))}Object.defineProperty(e,"__esModule",{value:!0}),e.checklistSyntax=a,e.default=void 0
var o={name:"checklist",initialize:function(){(0,n.withPluginApi)("0.1",(e=>function(e){e.container.lookup("site-settings:main").checklist_enabled&&e.decorateCookedElement(a,{id:"checklist"})}(e)))}}
e.default=o})),define("discourse/plugins/discourse-checklist/lib/discourse-markdown/checklist",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){e.registerOptions(((e,n)=>{e.features.checklist=!!n.checklist_enabled})),e.allowList(["span.chcklst-stroked","span.chcklst-box fa fa-square-o fa-fw","span.chcklst-box checked fa fa-check-square-o fa-fw","span.chcklst-box checked permanent fa fa-check-square fa-fw"]),e.registerPlugin((e=>e.core.ruler.push("checklist",s)))}
const n=/\[(\s?|x|X)\]/g
function t(e,n,t,c){const s=function(e){switch(e){case"x":return"checked fa fa-check-square-o fa-fw"
case"X":return"checked permanent fa fa-check-square fa-fw"
default:return"fa fa-square-o fa-fw"}}(t[1]),i=new c.Token("check_open","span",1)
i.attrs=[["class","chcklst-box ".concat(s)]],e.push(i)
const a=new c.Token("check_close","span",-1)
e.push(a)}function c(e,c){let s,i=null,a=0
for(;s=n.exec(e);){if(s.index>a){i=i||[]
const n=new c.Token("text","",0)
n.content=e.slice(a,s.index),i.push(n)}a=s.index+s[0].length,i=i||[],t(i,0,s,c)}if(i&&a<e.length){const n=new c.Token("text","",0)
n.content=e.slice(a),i.push(n)}return i}function s(e){let n,t,s,i,a,o=e.tokens,r=0
for(t=0,s=o.length;t<s;t++)if("inline"===o[t].type)for(i=o[t].children,n=i.length-1;n>=0;n--)if(a=i[n],r+=a.nesting,"text"===a.type&&0===r){const s=c(a.content,e)
s&&(o[t].children=i=e.md.utils.arrayReplaceAt(i,n,s))}}}))

//# sourceMappingURL=discourse-checklist-b19317646391ec87553dfd17a2d012ad6e1af2f9719860f6d10448f6143e8efc.map
//!

;
