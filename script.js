const btn = document.querySelector("button");

const rating_wrapper = document.querySelector(".rating-wrapper");
const thankyou_wrapper = document.querySelector(".thanks-wrapper");

const selected_score_tab = document.getElementById("selected")

const toggle_window = () => {
    rating_wrapper.classList.toggle("inactive")
    thankyou_wrapper.classList.toggle("inactive");

}


const scores = document.querySelectorAll(".circle");

scores.forEach((score) => (
    score.addEventListener("click", () => {
        active_element = document.getElementsByClassName("active")[0];
        if (active_element) {
            active_element.className = "circle"
        }
        score.classList.toggle("active")
    })
))

btn.addEventListener("click", () => {
    active_element = document.getElementsByClassName("active")[0];
    if (!active_element) {
        alert("Please select a rating")
        return
    }
    console.log(active_element)
    toggle_window();
    selected_score_tab.textContent = `You selected ${active_element.textContent} out of 5`


})