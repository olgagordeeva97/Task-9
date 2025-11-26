<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Генератор случайных пользователей</title>
    <link rel="stylesheet" href="style.css" type="text/css"/>
</head>
<body>
<div class="container">
    <div class="card text-center">
        <div class="card-header">
            Окно результатов генерации
        </div>
        <div class="card-body">
            <h3 class="card-title">
                <span id="surnameOutput">Генерация фамилии</span>
            </h3>
            <h4>Имя: <span id="firstNameOutput">Иван</span></h4>
            <h4>Отчество: <span id="patronymicOutput">Иванович</span></h4>
            <p>
                Пол: <span id="genderOutput">Генерация пола</span>,<br>
                Дата рождения: <span id="birthDayOutput">День</span> 
                <span id="birthMonthOutput">Месяц</span> 
                <span id="birthYearOutput">Год</span>
            </p>
            <p>Профессия: <span id="professionOutput">Генерация профессии</span></p>
            <button id="generateBtn">Сгенерировать</button>
            <button id="clearBtn">Очистить</button>
        </div>
    </div>
</div>

<script src="personGenerator.js"></script>
<script src="init.js"></script>
</body>
</html>
