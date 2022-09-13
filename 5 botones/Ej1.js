document.addEventListener("DOMContentLoaded", () => {
    const btn1 = Array.from(document.getElementsByClassName("boton"))

    btn1.map((e) => {
        e.addEventListener("click", () => {
            console.log(e.id);
        })
    })

    btn1.filter((e) => e % 2 === 0).map(e => e.style.background = "lime");

    btn1.filter((e) => e % 2 !== 0).map(e => e.style.background = "red");
});