const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    alert("test")
})

const scores = document.querySelectorAll(".circle");

scores.forEach((score) => (
    score.addEventListener("click", () => {
        score.classList.toggle("active")
    })
))