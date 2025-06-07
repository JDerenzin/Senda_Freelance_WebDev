const qtns = document.getElementsByClassName("qtn");
const anss = document.getElementsByClassName("ans");
qtns.forEach((qtn, i)) => {
    qtn.addEventListener("click", () => {
        qtn.classList.toggle("hidden")
    })
}