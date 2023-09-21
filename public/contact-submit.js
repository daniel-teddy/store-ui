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

submit_form.addEventListener('click', () => {
    const inputs = main_section.querySelectorAll('input');

    let isValid = true;

    // inputs.forEach(input => {
    //     if (!input.value.trim()) {
    //         isValid = false;
    //     }
    // });

    if (isValid) {
        // All fields are filled correctly
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzBGBNUEiRXEZ_yNeyXFc5liDfZcARlbM9KKozu6g8kHzXTYaM1-2xNUCBDC3i2zSecMQ/exec'
      const form = document.forms['myform']

      submit_form.addEventListener('click', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => alert("Thank you! your form is submitted successfully."))
          .then(() => { window.location.reload(); })
          .catch(error => console.error('Error!', error.message))
      })
    } else {
        alert('Please fill in all required fields. make sure you upload all ID images');
    }
})

