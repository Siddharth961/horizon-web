gsap.defaults({ease:"none", duration:2})


let tl = gsap.timeline({scrollTrigger:{
	trigger:".demoWrapper",
	start:"top 0%",
  end:"+=600",
	toggleActions:"restart none none reverse",
	markers:true,
  scrub:1,
  pin:true
}})

.from(".sky", {y:0})
.from(".bgAura", {y:50}, 0)
.from(".sunshine", {y:80}, 0)
.from(".mountainLeft", {x:-50, y:100}, 0)
.from(".mountainRight", {x:50, y:100}, 0)
.from(".sun", {y:80}, 0)
.from(".sea", {y:140}, 0)
.from(".leftSky", {x:-80, y:0}, 0)
.from(".rightSky", {x:80, y:0}, 0)
.from(".rightBushBg", {y:170, rotate:30}, 0)
.from(".rightBushLeft", {y:170, rotate:45}, 0)
.from(".rightBushRight", {y:170, rotate:45}, 0)
.from(".treeLeft", {x:-50, y:220, rotate:-5}, 0)
.from(".treeRight", {x:50, y:220, rotate:5}, 0)
.from(".leftBush", {y:240, x:-70}, 0)
.from(".leftStone", {y:250, x:-80}, 0)
.from(".topBird", {x:70, y:280}, 0)
.from(".bottomBird", {x:-80, y:280}, 0)
