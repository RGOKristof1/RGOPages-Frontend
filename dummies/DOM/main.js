function refresh() {
    switch (mode) {
        case "light":
            document.getElementById("style").setAttribute("href","style.css");
            mode = "dark";
            break;

        case "dark":
            document.getElementById("style").removeAttribute("href");
            mode = "light";
            break;
    }
}
mode = "light"