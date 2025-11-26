const personGenerator = {

    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Анна",
            "id_2": "Мария",
            "id_3": "Елена",
            "id_4": "Дарья",
            "id_5": "Полина",
            "id_6": "Ольга",
            "id_7": "Алина",
            "id_8": "Наталья",
            "id_9": "Ксения",
            "id_10": "Татьяна"
        }
    }`,

    patronymicMaleJson: `{
        "count": 8,
        "list": {
            "id_1": "Александрович",
            "id_2": "Дмитриевич",
            "id_3": "Николаевич",
            "id_4": "Михайлович",
            "id_5": "Петрович",
            "id_6": "Иванович",
            "id_7": "Сергеевич",
            "id_8": "Андреевич"
        }
    }`,

    patronymicFemaleJson: `{
        "count": 8,
        "list": {
            "id_1": "Александровна",
            "id_2": "Дмитриевна",
            "id_3": "Николаевна",
            "id_4": "Михайловна",
            "id_5": "Петровна",
            "id_6": "Ивановна",
            "id_7": "Сергеевна",
            "id_8": "Андреевна"
        }
    }`,

    professionMaleJson: `{
        "count": 6,
        "list": {
            "id_1": "слесарь",
            "id_2": "шахтёр",
            "id_3": "солдат",
            "id_4": "водитель",
            "id_5": "строитель",
            "id_6": "программист"
        }
    }`,

    professionFemaleJson: `{
        "count": 6,
        "list": {
            "id_1": "медсестра",
            "id_2": "учительница",
            "id_3": "парикмахер",
            "id_4": "воспитательница",
            "id_5": "бухгалтер",
            "id_6": "дизайнер"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber(max = 1, min = 0) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    randomValue(json) {
        const obj = JSON.parse(json);
        const id = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[id];
    },

    randomGender() {
        return this.randomIntNumber(1, 0) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName(gender) {
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurname(gender) {
        const surname = this.randomValue(this.surnameJson);
        if (gender === this.GENDER_MALE) {
            return surname;
        } else {
            return surname + "а";
        }
    },

    randomPatronymic(gender) {
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.patronymicMaleJson);
        } else {
            return this.randomValue(this.patronymicFemaleJson);
        }
    },

    randomProfession(gender) {
        if (gender === this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    randomBirthYear() {
        return this.randomIntNumber(2010, 1950);
    },

    randomBirthMonth() {
        const months = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
        return months[this.randomIntNumber(11, 0)];
    },

    randomBirthDay(monthName) {
        let maxDays = 31;
        if (monthName === "февраля") maxDays = 28;
        if (["апреля","июня","сентября","ноября"].includes(monthName)) maxDays = 30;
        return this.randomIntNumber(maxDays, 1);
    },

    getPerson() {
        const gender = this.randomGender();
        const month = this.randomBirthMonth();
        return {
            gender: gender,
            firstName: this.randomFirstName(gender),
            surname: this.randomSurname(gender),
            patronymic: this.randomPatronymic(gender),
            profession: this.randomProfession(gender),
            birthYear: this.randomBirthYear(),
            birthMonth: month,
            birthDay: this.randomBirthDay(month)
        };
    }
};
