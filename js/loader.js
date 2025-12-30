window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hide");
        document.getElementById("content").style.display = "block";
    }, 2000); // 2 seconds delay
});