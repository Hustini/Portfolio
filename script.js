function Menu(e) {
    console.log("debug thing");
    let list = document.querySelector("ul");
    if (e.name === "menu") {
        e.name = "close";
        list.classList.add("top-[80px]");
        list.classList.add("opacity-100");
        list.classList.remove("top-[-400px]");
        list.classList.remove("opacity-0");
    } else {
        e.name = "menu";
        list.classList.remove("top-[80px]");
        list.classList.remove("opacity-100");
        list.classList.add("top-[-400px]");
        list.classList.add("opacity-0");
    }
}
