// GSAP animations for text and images
gsap.to(".hero-text", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power2.out",
});

gsap.to(".image-container", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out",
});

// Mouse movement effect
document.addEventListener("mousemove", (event) => {
    const images = document.querySelectorAll(".hover-image");
    images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        img.style.transform = `scale(1.1) translate(${x * 15}px, ${y * 15}px)`;
    });
});
