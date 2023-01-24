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

productCard.forEach(card => {
    let mouseLeave = false;
    card.addEventListener('mouseleave', () => {
        mouseLeave = true;
        const dropdown = document.querySelectorAll('.dropdown')
        dropdown.forEach(list => {
            if (mouseLeave) {
                list.classList.remove('active');
            }
        })
    })
})

const coloredDropdownSelected = document.querySelectorAll('.dropdown__selected');

coloredDropdownSelected.forEach(selected => {
    selected.addEventListener('click', () => {

        let selectedDropdown = selected.closest('.dropdown');

        const dropdown = document.querySelectorAll('.dropdown');
        if (selectedDropdown.classList.contains('active')) {
            selectedDropdown.classList.remove('active')
        } else {
            dropdown.forEach(list => {
                list.classList.remove('active')
                selectedDropdown.classList.add('active')
                document.addEventListener('click', (e) => {
                    const target = e.target;
                    const itsDropdown = target === list || list.contains(target);
                    if (!itsDropdown) {
                        list.classList.remove('active')
                    }
                })
            })
        }
    })
})


const allOptions = document.querySelectorAll('.dropdown__list-unit');
allOptions.forEach(option => {
    option.addEventListener('click', () => {
        option.closest('.dropdown__list').querySelectorAll('.dropdown__list-unit').forEach(selected => {
            selected.classList.remove('selected');
        })
        option.classList.add('selected');
        let newSelectedOption = option.textContent;
        let currentSelectedOption = option.closest('.dropdown').querySelector('.dropdown__selected').querySelector('.dropdown__selected-option');
        currentSelectedOption.textContent = newSelectedOption;
    })
})

const likeIcon = document.querySelectorAll('.like-icon');

likeIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('active');
        const iconButton = icon.closest('.like-button');
        iconButton && iconButton.classList.contains('active') ? iconButton.classList.add('active') : '';
    })
})

const likeButton = document.querySelectorAll('.like-button');

likeButton.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const icon = button.querySelector('.like-icon');
        icon && icon.classList.contains('active') ? icon.classList.remove('active') : '';
    })
})

const burgerButton = document.querySelector('.header__burger');
const header = document.querySelector('header');
const headerBackground = document.querySelector('.header__background')

burgerButton.addEventListener('click', () => {
    burgerButton.closest('header').classList.toggle('active');
})

document.addEventListener('click', (e) => {
    const target = e.target;
    const itsBurgerButton = target === burgerButton || burgerButton.contains(target);
    const itsHeader = target === header || header.contains(target)
    const itsHeaderBackground = target === headerBackground || headerBackground.contains(target)
    if (!itsBurgerButton && !itsHeader || itsHeaderBackground) {
        header.classList.remove('active')
    }
})