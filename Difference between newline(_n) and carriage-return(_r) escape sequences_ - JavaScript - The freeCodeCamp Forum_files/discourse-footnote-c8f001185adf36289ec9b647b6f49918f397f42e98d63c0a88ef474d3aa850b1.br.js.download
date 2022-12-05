define("discourse/plugins/discourse-footnote/initializers/inline-footnotes",["exports","@popperjs/core","discourse/lib/plugin-api","discourse-common/lib/icon-library"],(function(o,t,e,n){"use strict"
let i
function r(o){var e,n
null===(e=i)||void 0===e||e.destroy()
const r=document.getElementById("footnote-tooltip")
if(null==r||r.removeAttribute("data-show"),!o.target.classList.contains("expand-footnote"))return
o.preventDefault(),o.stopPropagation()
const s=o.target,l=s.closest(".cooked"),d=s.dataset.footnoteId,a=r.querySelector(".footnote-tooltip-content")
let c=l.querySelector(d)
a.innerHTML=c.innerHTML,r.dataset.show="",null===(n=i)||void 0===n||n.destroy(),i=(0,t.createPopper)(s,r,{modifiers:[{name:"arrow",options:{element:r.querySelector("#arrow")}},{name:"preventOverflow",options:{altAxis:!0,padding:5}},{name:"offset",options:{offset:[0,12]}}]})}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0
var s={name:"inline-footnotes",initialize(o){o.lookup("site-settings:main").display_footnotes_inline&&(document.documentElement.append(function(){let o='\n    <div id="footnote-tooltip" role="tooltip">\n      <div class="footnote-tooltip-content"></div>\n      <div id="arrow" data-popper-arrow></div>\n    </div>\n  ',t=document.createElement("template")
return o=o.trim(),t.innerHTML=o,t.content.firstChild}()),window.addEventListener("click",r),(0,e.withPluginApi)("0.8.9",(o=>{o.decorateCookedElement((o=>function(o){const t=o.querySelectorAll("sup.footnote-ref")
t.forEach((o=>{const t=o.querySelector("a")
if(!t)return
const e=document.createElement("a")
e.classList.add("expand-footnote"),e.innerHTML=(0,n.iconHTML)("ellipsis-h"),e.href="",e.role="button",e.dataset.footnoteId=t.getAttribute("href"),o.after(e)})),t.length&&o.classList.add("inline-footnotes")}(o)),{onlyStream:!0,id:"inline-footnotes"}),o.onPageChange((()=>{var o
null===(o=document.getElementById("footnote-tooltip"))||void 0===o||o.removeAttribute("data-show")}))})))},teardown(){var o,t
null===(o=i)||void 0===o||o.destroy(),window.removeEventListener("click",r),null===(t=document.getElementById("footnote-tooltip"))||void 0===t||t.remove()}}
o.default=s})),define("discourse/plugins/discourse-footnote/lib/discourse-markdown/footnotes",["exports"],(function(o){"use strict"
Object.defineProperty(o,"__esModule",{value:!0}),o.setup=function(o){o.registerOptions(((o,t)=>{o.features.footnotes=window.markdownitFootnote&&!!t.enable_markdown_footnotes})),o.allowList(["ol.footnotes-list","hr.footnotes-sep","li.footnote-item","a.footnote-backref","sup.footnote-ref"]),o.allowList({custom(o,t,e){if(("a"===o||"li"===o)&&"id"===t)return!!e.match(/^fn(ref)?\d+$/)}}),window.markdownitFootnote&&o.registerPlugin(window.markdownitFootnote)}}))

//# sourceMappingURL=discourse-footnote-e9749c777318b31064a867f2eba686a28a0805806644dc2f98515d027e9a6443.map
//!

;
