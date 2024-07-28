function Menu(e) {
    let list = document.getElementById('menu');
    if (e.name === "menu") {
        e.name = "close";
        list.classList.add("top-[80px]", "opacity-100");
        list.classList.remove("top-[-400px]", "opacity-0");
    } else {
        e.name = "menu";
        list.classList.remove("top-[80px]", "opacity-100");
        list.classList.add("top-[-400px]", "opacity-0");
    }
}
