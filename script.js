const openCT = document.querySelector('#ReadTC')
const closeCT = document.querySelector('#closeCT')
const main_section = document.querySelector('#main_section')
const condition_section = document.querySelector('#condition_section')

const submit_form = document.querySelector('#submit_button')

closeCT.addEventListener('click',  () => {
    main_section.classList.remove("none");
    condition_section.classList.add("none");
})
openCT.addEventListener('click',  () => {
    main_section.classList.add("none");
    condition_section.classList.remove("none");
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})