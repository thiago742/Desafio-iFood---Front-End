const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
document.querySelector("#sidebar").classList.toggle("expand");
});

document.getElementById("toggleButton").addEventListener("click", function() {
    var content = document.getElementById("hiddenContent");
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
});