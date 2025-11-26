window.onload = function() {
    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');

    generateBtn.addEventListener('click', generatePerson);
    clearBtn.addEventListener('click', clearPerson);
};

function generatePerson() {
    const person = personGenerator.getPerson();

    document.getElementById('firstNameOutput').innerText = person.firstName;
    document.getElementById('surnameOutput').innerText = person.surname;
    document.getElementById('patronymicOutput').innerText = person.patronymic;
    document.getElementById('genderOutput').innerText = person.gender;
    document.getElementById('birthDayOutput').innerText = person.birthDay;
    document.getElementById('birthMonthOutput').innerText = person.birthMonth;
    document.getElementById('birthYearOutput').innerText = person.birthYear;
    document.getElementById('professionOutput').innerText = person.profession;
}

function clearPerson() {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthDayOutput').innerText = '';
    document.getElementById('birthMonthOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
}
