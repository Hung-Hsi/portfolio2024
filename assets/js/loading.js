Splitting();

var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.75 });
tl
    .from(".vertical-flip .cell", {
        scale: 0,
        transformOrigin: "center",
        x: "1.5rem",
        duration: 0.25,
        ease: "circ.out",
        stagger: {
            amount: 3,
            from: "start"
        }
    })
    .to(
        ".vertical-flip .cell",
        {
            scale: 0,
            xPercent: -900,
            duration: 0.5,
            stagger: { amount: 0.75, from: "start" }
        },
        "+=0.5"
    );

setTimeout(function () {
    let loading = document.querySelector(".loading");
    loading.classList.add("end");
}, 2500); // 模擬 3秒的請求時間