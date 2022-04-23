for (let i = 0; i < document.getElementsByClassName("ldr-dot")[0].children.length; i++) {
    val = document.getElementsByClassName("ldr-dot")[0].children[i].children[0].getAttribute("value") * 1;
    for (let x = 0; x < val; x++)
        document.getElementsByClassName("ldr-dot")[0].children[i].children[0].children[x].style.background = "rgba(255,255,255,1)";
};
for (let i = 0; i < document.getElementsByClassName("ldr-lin")[0].children.length; i++) {
    val = document.getElementsByClassName("ldr-lin")[0].children[i].children[0].getAttribute("value") * 1;
    document.getElementsByClassName("ldr-lin")[0].children[i].children[0].children[0].style.width = val + "%";
};