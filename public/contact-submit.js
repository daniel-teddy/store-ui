const openCT = document.querySelector('#ReadTC')
const closeCT = document.querySelector('#closeCT')
const main_section = document.querySelector('#main_section')
const condition_section = document.querySelector('#condition_section')


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

function validateSection() {
    const inputs = main_section.querySelectorAll('input[required]');

    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
        }
    });

    if (isValid) {
        // All fields are filled correctly
        alert('Section is valid! Processing...');
        // Add your logic for processing the section data here
    } else {
        alert('Please fill in all required fields.');
    }
}