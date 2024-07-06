const form = document.getElementById('userForm');
console.log(form);


const firstNameInputByName = document.getElementsByName('firstname')[0];
const lastNameInputByName = document.getElementsByName('lastname')[0];
console.log(firstNameInputByName);
console.log(lastNameInputByName);


form.addEventListener('submit', function (event) {
    event.preventDefault();


    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();


    if (firstName === '' || lastName === '') {
        console.log('Please fill in both fields.');
        return;
    }


    const ul = document.querySelector('.usersAnswer');
    ul.innerHTML = '';

    const firstNameLi = document.createElement('li');
    firstNameLi.textContent = firstName;
    ul.appendChild(firstNameLi);

    const lastNameLi = document.createElement('li');
    lastNameLi.textContent = lastName;
    ul.appendChild(lastNameLi);
});
