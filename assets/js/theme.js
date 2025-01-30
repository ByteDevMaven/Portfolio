const light = document.getElementById("lightbtn");
const dark = document.getElementById("darkbtn");
const system = document.getElementById("systembtn");

light.addEventListener("click", function () {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
});

dark.addEventListener("click", function () {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
});

system.addEventListener("click", function () {
    document.body.classList.remove('light');
    document.body.classList.remove('dark');
});