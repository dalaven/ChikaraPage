import{u as n,r as c,j as r}from"./index-3c1c4c06.js";let o=!1;const d=()=>{if(o)return;const t=document.createElement("script");t.src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js",t.async=!0,t.onload=()=>{const e=document.createElement("script");e.innerHTML=`
      kofiWidgetOverlay.draw('chikaraoficial', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support me',
        'floating-chat.donateButton.background-color': '#fd0215',
        'floating-chat.donateButton.text-color': '#ffffff'
      });
    `,e.id="kofi-inline-script",document.body.appendChild(e),o=!0},t.id="kofi-script",document.body.appendChild(t)},a=()=>{const t=document.getElementById("kofi-script"),e=document.getElementById("kofi-inline-script");t&&t.remove(),e&&e.remove();const i=document.querySelector('[id^="kofi-widget"]');i&&i.remove(),o=!1},f=()=>{const{pathname:t}=n();return c.useEffect(()=>(t==="/"&&d(),()=>{a()}),[t]),r.jsx("div",{id:"kofiWidget"})};export{f as default};
