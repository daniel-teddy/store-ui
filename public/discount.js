/* show hide language btn */

/* contact form  */

// Get all input fields
const inputFields = document.querySelectorAll('input');

// Get all textareas
const textareas = document.querySelectorAll('textarea');

// Get all select elements
const selectElements = document.querySelectorAll('select');

// Extract and store the names in an array
const fieldNames = [];

inputFields.forEach((input) => {
  if (input.name) {
    fieldNames.push(input.name);
  }
});

textareas.forEach((textarea) => {
  if (textarea.name) {
    fieldNames.push(textarea.name);
  }
});

selectElements.forEach((select) => {
  if (select.name) {
    fieldNames.push(select.name);
  }
});

// Display the field names
console.log('Input fields, textareas, and select elements names:', fieldNames);



// const dataItems = [
//     "f_name",
//     "l_name",
//     "email",
//     "birth_date",
//     "company",
//     "phone",
//     "street",
//     "building_name",
//     "building_number",
//     "floor",
//     "post_code",
//     "school_name",
//     "department",
//     "academic_year",
//     "student_number",
//     "student_mail",
//     "std_id",
//     "ntl_id",
//     "ntl_id_num",
//     "accept_tc",
//     "country",
//     "gender",
//     "pay_method"
// ]

// console.log(dataItems)

  












