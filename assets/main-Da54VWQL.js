import"./main-DBsysqFD.js";document.getElementById("menu-toggle").addEventListener("click",function(){document.getElementById("nav-menu").classList.toggle("active")});document.addEventListener("DOMContentLoaded",function(){function l(t,r="visible"){const e=document.querySelectorAll(t);if(e.length===0){console.warn(`No elements found for selector: ${t}`);return}e.forEach(n=>{n.getBoundingClientRect().top<window.innerHeight&&setTimeout(()=>{n.classList.add(r)},100)});const o=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting?s.target.classList.add(r):s.target.classList.remove(r)})});e.forEach(n=>o.observe(n))}[".section",".home",".about__content",".staff__member",".reps__column"].forEach(t=>l(t));const c={"rollover-ld":"28Uost7cn00fb68bWNsQNkv02Vr00KVh166008pI7n1hQSI","rollover-ag":"r801XMYbB1jpCi7f02C7Y5xsOhRYdN201Fy96Oc9z8tauw","rollover-km":"rquHm85TsO3A2LlDNegc02VHNgjZ02ymU00x4duyIxah2A","rollover-bw":"a1TEMiqsBMFoG8pcfiq9vK1oiPThJFLH01Plz1Tis7q8","rollover-zw":"jb3J01mwbm02Qa8Lmh53ShhzGSz02UeNtDLOh01J02FPyYD8"},i=document.getElementById("reel-video");if(!i){console.error("Mux player element not found");return}Object.keys(c).forEach(t=>{const r=c[t],e=document.createElement("mux-player");e.setAttribute("playback-id",r),e.setAttribute("muted",""),e.setAttribute("loop",""),e.setAttribute("autoplay",""),e.style.position="absolute",e.style.opacity="0",e.style.transition="opacity 0.5s ease",e.style.width="100%",e.style.height="100%",e.style.aspectRatio="9 / 16",e.setAttribute("data-id",t),i.parentElement.appendChild(e),e.play().catch(n=>{console.error(`Error playing video for ${t}:`,n)});const o=document.getElementById(t);o?(o.addEventListener("mouseenter",()=>{e.style.opacity="1"}),o.addEventListener("mouseleave",()=>{e.style.opacity="0"})):console.error(`Element with id ${t} not found`)}),document.querySelectorAll(".header__link").forEach(t=>{t.addEventListener("click",function(r){r.preventDefault();const e=this.getAttribute("href"),o=document.querySelector(e);o&&o.scrollIntoView({behavior:"smooth"})})})});
