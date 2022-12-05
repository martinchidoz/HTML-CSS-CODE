define("discourse/plugins/discourse-spoiler-alert/initializers/spoiler-alert",["exports","discourse/lib/plugin-api","discourse/controllers/composer","discourse/plugins/discourse-spoiler-alert/lib/apply-spoiler","discourse/lib/to-markdown"],(function(e,i,t,s,r){"use strict"
function l(e){e.querySelectorAll(".spoiler").forEach((e=>{e.classList.remove("spoiler"),e.classList.add("spoiled"),(0,s.default)(e)}))}function o(e){e.decorateCookedElement(l,{id:"spoiler-alert"}),e.addToolbarPopupMenuOptionsCallback((()=>({action:"insertSpoiler",icon:"magic",label:"spoiler.title"}))),t.default.reopen({actions:{insertSpoiler(){this.get("toolbarEvent").applySurround("[spoiler]","[/spoiler]","spoiler_text",{multiline:!1,useBlockMode:!0})}}}),(0,r.addTagDecorateCallback)((function(){"spoiled"===this.element.attributes.class&&(this.prefix="[spoiler]",this.suffix="[/spoiler]")})),(0,r.addBlockDecorateCallback)((function(e){const{name:i,attributes:t}=this.element
if("div"===i&&"spoiled"===t.class)return this.prefix="[spoiler]",this.suffix="[/spoiler]",e.trim()}))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initializeSpoiler=o
var a={name:"spoiler-alert",initialize(e){e.lookup("site-settings:main").spoiler_enabled&&(0,i.withPluginApi)("1.3.0",o)}}
e.default=a})),define("discourse/plugins/discourse-spoiler-alert/lib/apply-spoiler",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e){e.setAttribute("data-spoiler-state","blurred"),e.classList.add("spoiler-blurred"),e.addEventListener("click",(t=>{"blurred"===e.getAttribute("data-spoiler-state")?(e.setAttribute("data-spoiler-state","revealed"),e.classList.remove("spoiler-blurred"),t.preventDefault()):function(e){return e.defaultPrevented||e.target.closest(i)}(t)||(e.setAttribute("data-spoiler-state","blurred"),e.classList.add("spoiler-blurred"))}))}
const i=["a","area","audio","button","details","embed","iframe","img.animated","input","map","object","option","portal","select","textarea","track","video",".lightbox"].join(", ")})),define("discourse/plugins/discourse-spoiler-alert/lib/discourse-markdown/spoiler-alert",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){e.allowList(["span.spoiler","div.spoiler"]),e.markdownIt?function(e){e.registerOptions(((e,i)=>{e.features["spoiler-alert"]=!!i.spoiler_enabled})),e.registerPlugin((e=>{e.inline.bbcode.ruler.push("spoiler",{tag:"spoiler",wrap:"span.spoiler"}),e.block.bbcode.ruler.push("spoiler",{tag:"spoiler",wrap:"div.spoiler"})}))}(e):e.addPreProcessor(s)}
const i=/\n|<img|!\[[^\]]*\][(\[]/
function t(e,t){const s=i.test(t)?"div":"span"
return"<".concat(s," class='spoiler'>").concat(t,"</").concat(s,">")}function s(e){for(e=e||"";e!==(e=e.replace(/\[spoiler\]((?:(?!\[spoiler\]|\[\/spoiler\])[\S\s])*)\[\/spoiler\]/gi,t)););return e}}))

//# sourceMappingURL=discourse-spoiler-alert-2c7376b0531a7614c2c53a25dcd163f33030796abacb1f853e6d011d72b6f739.map
//!

;
