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










function sendData() {
    var form = document.getElementById('myform'); // Replace 'yourFormId' with your actual form's ID
  
    var formData = new FormData(form);
  
    formData.forEach(function(value, key) {
      console.log(key, ":", value);
    });
  
    var scriptUrl = 'https://script.google.com/macros/s/AKfycbw_AE0KaZOWb-G8_cHizJmJ4yaK6P3mgBU1pqv4wihIa7bRCotjRZM2JkXZndQZdDv78A/exec';
  
    fetch(scriptUrl, {
      method: 'POST',
      body: formData
    })
    .then(function(response) {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Request failed.');
      }
    })
    .then(function(data) {
      console.log('Response:', data);
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
  }
  

submit_form.addEventListener('click', () => {
    sendData();
})
// submit_form.addEventListener('click', () => {
    // const inputs = main_section.querySelectorAll('input');

    // let isValid = true;

    // inputs.forEach(input => {
    //     if (!input.value.trim()) {
    //         isValid = false;
    //     }
    // });

    // sendData()
    // if (isValid) {
    //     // All fields are filled correctly
    // } else {
    //     alert('Please fill in all required fields. make sure you upload all ID images');
    // }
// })

