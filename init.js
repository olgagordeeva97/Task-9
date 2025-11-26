window.onload = function() {
    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');

    const surnameOutput = document.getElementById('surnameOutput');
    const firstNameOutput = document.getElementById('firstNameOutput');
    const patronymicOutput = document.getElementById('patronymicOutput');
    const genderOutput = document.getElementById('genderOutput');
    const birthDayOutput = document.getElementById('birthDayOutput');
    const birthMonthOutput = document.getElementById('birthMonthOutput');
    const birthYearOutput = document.getElementById('birthYearOutput');
    const professionOutput = document.getElementById('professionOutput');

    function clearGenerated() {
        surnameOutput.innerText = 'Генерация фамилии';
        firstNameOutput.innerText = 'Имя';
        patronymicOutput.innerText = 'Отчество';
        genderOutput.innerText = 'Генерация пола';
        birthDayOutput.innerText = 'день';
        birthMonthOutput.innerText = 'месяц';
        birthYearOutput.innerText = 'год';
        professionOutput.innerText = 'Профессия';
    }

    function generatePerson() {
        const p = personGenerator.getPerson();

        surnameOutput.innerText = p.surname;
        firstNameOutput.innerText = p.firstName;
        patronymicOutput.innerText = p.patronymic;
        genderOutput.innerText = p.gender;
        birthDayOutput.innerText = p.birthDay;
        birthMonthOutput.innerText = p.birthMonth;
        birthYearOutput.innerText = p.birthYear;
        professionOutput.innerText = p.profession;
    }

    generateBtn.addEventListener('click', generatePerson);
    clearBtn.addEventListener('click', clearGenerated);

    clearGenerated();
};
