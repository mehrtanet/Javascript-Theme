let themes = document.querySelector(".themes")
let selection = document.querySelector("#selection")

// define default theme , if we havn't theme our default them be dark
let selectedTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
selection.textContent = selectedTheme
document.body.className = selectedTheme

Array.from(themes.children).forEach(theme => {
    theme.addEventListener("click", e => {
        let color = e.target.dataset.color
        document.body.className = color
        selection.textContent = color
            // save theme in local Storage
        localStorage.setItem("theme", color)
    })
})