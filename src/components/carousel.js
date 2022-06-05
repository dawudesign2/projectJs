const carousel = () => {
    const delay = 3000;
    const slides = document.querySelector(".slides");
    const count = slides.childElementCount;
    const maxLeft = (count - 1) * 100 * -1;

    let current = 0;
    const changeSlide = (next = true) => {
        if(next) {
            current += current > maxLeft ? -100 : current * -1;
        } else {
            current -= current < 0 ? current + 100 : maxLeft;
        }
        slides.style.left = current + "%";
    }
    let auto = setInterval(changeSlide, delay);
    const restart = () => {
        clearInterval(auto);
        auto = setInterval(changeSlide, delay);
    }
    document.querySelector('.control-next').addEventListener('click', () => {
        changeSlide();
        restart();
    });
    document.querySelector('.control-prev').addEventListener('click', () => {
        changeSlide(false);
        restart();
    });
}

export default carousel;