try {
    const t = localStorage.getItem('theme');
    if (t) document.documentElement.dataset.theme = t;
} catch (e) {
    console.log(e)
}