import"./main-ClcFLARY.js";document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("video-modal"),e=document.getElementById("modal-video"),d=o.querySelector(".close");function c(t){const n=t.currentTarget.getAttribute("data-playback-id");e.setAttribute("playback-id",n),e.load(),e.addEventListener("loadeddata",()=>{console.log(213123),i(e)},{once:!0}),o.classList.add("show")}function i(t){t.play().catch(n=>{console.error("Error trying to play video:",n)})}function a(){o.classList.remove("show"),e.pause(),e.currentTime=0,e.removeAttribute("playback-id")}d.addEventListener("click",a),document.querySelectorAll('.video-thumbnail[id^="featured-thumbnail-"]').forEach(t=>{t.addEventListener("click",c)}),window.addEventListener("click",function(t){t.target==o&&a()})});
