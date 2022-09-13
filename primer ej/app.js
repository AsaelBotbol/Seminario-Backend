document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("si");
    const span = document.getElementById("no");

    input.addEventListener("keydown", () => {
        span.innerHTML = input.value.length;

    })

})