const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(e){o=setInterval(r,1e3),t.disabled=!0})),e.addEventListener("click",(function(e){clearInterval(o),t.disabled=!1}));let o=null;function r(){n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.db4cf02b.js.map