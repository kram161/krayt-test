const sliders = document.querySelectorAll('.product-card__unit-slider');

sliders.forEach(slider => {
    const sliderName = slider.getAttribute('data-slider-name');
    $('.' + sliderName + '-slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
    });

})

const productCard = document.querySelectorAll('.product-card__unit')

productCard.forEach( card => {
    let mouseLeave = false;
    card.addEventListener('mouseleave', () => {
        mouseLeave = true;
        const dropdown = document.querySelectorAll('.dropdown')
        dropdown.forEach( list => {
            if(mouseLeave){
                list.classList.remove('active');
            }
        })
    })
})

const coloredDropdownSelected = document.querySelectorAll('.colored-dropdown__selected');

coloredDropdownSelected.forEach( selected => {
    selected.addEventListener('click', () => {
        const dropdown = document.querySelectorAll('.dropdown');
        dropdown.forEach( list => {
            list.classList.remove('active');
        })
        selected.closest('.colored-dropdown').classList.toggle('active');
    })
} )



const allOptions = document.querySelectorAll('.colored-dropdown__list-unit');
allOptions.forEach( option => {
    option.addEventListener('click', () => {
        option.closest('.colored-dropdown__list').querySelectorAll('.colored-dropdown__list-unit').forEach( selected => {
            selected.classList.remove('selected');
        })
        option.classList.add('selected');
        let newSelectedOption = option.textContent;
        let currentSelectedOption = option.closest('.colored-dropdown').querySelector('.colored-dropdown__selected').querySelector('.colored-dropdown__selected-option');
        currentSelectedOption.textContent = newSelectedOption;
    })
})
