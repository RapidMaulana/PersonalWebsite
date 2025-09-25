document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navigation a")
  const sections = document.querySelectorAll(".section")

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Adjust as needed
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active")
          }
        })
      }
    })
  }, observerOptions)

  sections.forEach((section) => {
    observer.observe(section)
  })

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href").substring(1)
      const targetSection = document.getElementById(targetId)

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20, 
          behavior: "smooth",
        })
      }
    })
  })
})
