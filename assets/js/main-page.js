$('.pre-header__slider').slick({
    infinite: true,
    arrows: true,
    dots: true,
    prevArrow: $('.pre-header-prev'),
    nextArrow: $('.pre-header-next'),
    appendDots: $('.pre-header__navigation-dots')
});



const saleSliders = document.querySelectorAll('.sale-slider');

saleSliders.forEach(slider => {
    const sliderName = slider.getAttribute('data-slider-name');
    $('.' + sliderName).slick({
        infinite: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: $('.' + sliderName + '-prev'),
        nextArrow: $('.' + sliderName + '-next'),
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
});

const saleButton = document.querySelectorAll('.sale-js-button');
const sliderList = document.querySelectorAll('.sale__slider-list__unit');

saleButton.forEach( button => {
    button.addEventListener('click', () => {
        const activeButton = button.closest('.sale__button-list').querySelector('.active')
        activeButton.classList.remove('active');
        button.classList.add('active');
        const activeSlider = button.closest('.sale').querySelector('.sale__slider-list').querySelector('.active');
        activeSlider.classList.remove('active');
        const buttonName = button.getAttribute('data-sale-slider')
        sliderList.forEach( slider => {
            const sliderName = slider.getAttribute('data-sale-slider')
            sliderName === buttonName ? slider.classList.add('active') : ' ';
        })
    })
})

const previewSlider = document.querySelectorAll('.preview-slider');

previewSlider.forEach(slider => {
    const sliderName = slider.getAttribute('data-day-product-slider');
    $('.' + sliderName).slick({
        infinite: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.' + sliderName + '-prev'),
        nextArrow: $('.' + sliderName + '-next'),
    })
});

const colorButton = document.querySelectorAll('.day-product__slider-slide__right-color__list-unit');

colorButton.forEach( button => {
    button.addEventListener('click', () => {
        const allButtons = button.closest('.day-product__slider-slide__right-color__list').querySelector('.active');
        button.classList.toggle('active');
        allButtons ? allButtons.classList.remove('active') : '';
    })
})

$('.day-product__slider').slick({
    infinite: false,
    arrows: true,
    dots: false,
    draggable: false,
    speed: 500,
    prevArrow: $('.day-product__navigation-prev'),
    nextArrow: $('.day-product__navigation-next'),
});