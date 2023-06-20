const sections = document.querySelectorAll(".section-el-text")
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
            if (entry.isIntersecting) observer.unobserve(entry.target)
        })
    }
)

sections.forEach(section => {
    observer.observe(section)
})