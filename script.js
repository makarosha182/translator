// База переводов с бумерского на зумерский
const translations = {
    boomerToZoomer: {
        // Приветствия
        "доброе утро": "йоу, чё как 🌅",
        "добрый день": "дарова 👋",
        "добрый вечер": "вечерочек в хату ✨",
        "здравствуйте": "хай, как сам? 👋",
        "привет": "прив, чё как",
        "как дела": "как жизнь, норм? 😎",
        "как поживаете": "как оно вообще? 🤔",
        
        // Прощания
        "до свидания": "пока, бб 👋",
        "всего доброго": "удачи, бро ✌️",
        "спокойной ночи": "споки, сладких снов 😴",
        
        // Благодарности
        "спасибо": "спс, красава 🙏",
        "большое спасибо": "дарова, респект 💯",
        "благодарю": "сенкс, топчик 🔥",
        
        // Согласие/несогласие
        "да": "агась, конечно 👍",
        "нет": "неа, не зашло 👎",
        "согласен": "факты, так и есть 💯",
        "не согласен": "кринж, не согласен ❌",
        "хорошо": "окей, найс 👌",
        "отлично": "вау, топчик 🔥",
        "плохо": "не зашло, кринж 😬",
        
        // Эмоции
        "я рад": "я в кайфе 😊",
        "я расстроен": "я в печали, грустно 😢",
        "я злюсь": "я в бешенстве, бомбит 😤",
        "мне смешно": "ору, смешно 😂",
        "мне скучно": "скукота, делать нечего 😴",
        
        // Оценки
        "молодец": "красавчик, респект 💪",
        "умница": "мозг, топ 🧠",
        "глупость": "кринж, фейл 🤦",
        "ерунда": "бред, не зашло 😬",
        "замечательно": "огонь, топчик 🔥",
        "ужасно": "жесть, кринж 😱",
        
        // Общение
        "позвони мне": "кинь звонок 📱",
        "напиши мне": "напиши в лс 💬",
        "встретимся": "увидимся, встретимся 🤝",
        "пойдём": "го, пошли 🚶",
        "подожди": "секунду, погоди ⏱️",
        
        // Работа/учёба
        "работа": "работка, движ 💼",
        "учёба": "учёбка, универ 📚",
        "начальник": "босс, шеф 👔",
        "коллега": "сотрудник, колега 🤝",
        "домашнее задание": "дз, домашка 📝",
        
        // Технологии
        "компьютер": "комп, пк 💻",
        "телефон": "телефон, мобила 📱",
        "интернет": "инет, онлайн 🌐",
        "фотография": "фотка, фото 📸",
        
        // Разное
        "деньги": "бабки, деньги 💰",
        "дорого": "дорого, не по карману 💸",
        "дешево": "дёшево, норм цена 💵",
        "красиво": "красиво, эстетично ✨",
        "некрасиво": "не эстетично, мимо 😬",
        "вкусно": "вкусно, топ 😋",
        "невкусно": "не зашло, фу 🤢",
        "быстро": "быстро, шустро ⚡",
        "медленно": "медленно, тормоза 🐌",
        "понятно": "понял, ясно 👌",
        "непонятно": "не понял, чё? 🤔",
    }
};

// Создаём обратный словарь для перевода с зумерского на бумерский
const zoomerToBoomer = {};
Object.entries(translations.boomerToZoomer).forEach(([boomer, zoomer]) => {
    // Убираем эмодзи из зумерского для обратного поиска
    const zoomerClean = zoomer.replace(/[^\wа-яА-ЯёЁ\s,]/g, '').trim().toLowerCase();
    zoomerToBoomer[zoomerClean] = boomer;
});

// Состояние приложения
let currentMode = 'boomerToZoomer';

// Элементы DOM
const boomerToZoomerBtn = document.getElementById('boomer-to-zoomer');
const zoomerToBoomerBtn = document.getElementById('zoomer-to-boomer');
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const translateBtn = document.getElementById('translate-btn');
const inputLabel = document.getElementById('input-label');
const outputLabel = document.getElementById('output-label');
const examplesGrid = document.getElementById('examples-grid');

// Переключение режима перевода
boomerToZoomerBtn.addEventListener('click', () => {
    currentMode = 'boomerToZoomer';
    boomerToZoomerBtn.classList.add('active');
    zoomerToBoomerBtn.classList.remove('active');
    inputLabel.textContent = 'Введите текст на бумерском:';
    outputLabel.textContent = 'Перевод на зумерский:';
    inputText.placeholder = 'Например: Доброе утро, как дела?';
    inputText.value = '';
    outputText.textContent = 'Результат появится здесь...';
    outputText.classList.remove('translated');
    updateExamples();
});

zoomerToBoomerBtn.addEventListener('click', () => {
    currentMode = 'zoomerToBoomer';
    zoomerToBoomerBtn.classList.add('active');
    boomerToZoomerBtn.classList.remove('active');
    inputLabel.textContent = 'Введите текст на зумерском:';
    outputLabel.textContent = 'Перевод на бумерский:';
    inputText.placeholder = 'Например: йоу, чё как';
    inputText.value = '';
    outputText.textContent = 'Результат появится здесь...';
    outputText.classList.remove('translated');
    updateExamples();
});

// Функция перевода
function translate(text, mode) {
    const dict = mode === 'boomerToZoomer' ? translations.boomerToZoomer : zoomerToBoomer;
    
    let result = text.toLowerCase();
    
    // Сортируем ключи по длине (сначала длинные фразы)
    const sortedKeys = Object.keys(dict).sort((a, b) => b.length - a.length);
    
    // Заменяем найденные фразы
    sortedKeys.forEach(key => {
        const regex = new RegExp('\\b' + key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
        result = result.replace(regex, dict[key]);
    });
    
    // Если ничего не изменилось, добавляем сообщение
    if (result.toLowerCase() === text.toLowerCase()) {
        if (mode === 'boomerToZoomer') {
            return result + ' (уже звучит по-зумерски, бро! 😎)';
        } else {
            return result + ' (уже звучит по-бумерски! 👴)';
        }
    }
    
    // Первая буква заглавная
    result = result.charAt(0).toUpperCase() + result.slice(1);
    
    return result;
}

// Обработчик кнопки перевода
translateBtn.addEventListener('click', () => {
    const input = inputText.value.trim();
    
    if (!input) {
        outputText.textContent = 'Введите текст для перевода! 📝';
        outputText.classList.remove('translated');
        return;
    }
    
    const translated = translate(input, currentMode);
    outputText.textContent = translated;
    outputText.classList.add('translated');
});

// Enter для перевода
inputText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        translateBtn.click();
    }
});

// Обновление примеров
function updateExamples() {
    examplesGrid.innerHTML = '';
    
    const dict = currentMode === 'boomerToZoomer' ? translations.boomerToZoomer : zoomerToBoomer;
    const examples = Object.entries(dict).slice(0, 6);
    
    examples.forEach(([from, to]) => {
        const card = document.createElement('div');
        card.className = 'example-card';
        
        const fromDiv = document.createElement('div');
        fromDiv.className = 'from';
        fromDiv.textContent = currentMode === 'boomerToZoomer' ? from : to;
        
        const arrow = document.createElement('div');
        arrow.textContent = '↓';
        arrow.style.textAlign = 'center';
        arrow.style.margin = '5px 0';
        
        const toDiv = document.createElement('div');
        toDiv.className = 'to';
        toDiv.textContent = currentMode === 'boomerToZoomer' ? to : from;
        
        card.appendChild(fromDiv);
        card.appendChild(arrow);
        card.appendChild(toDiv);
        
        // Клик по примеру заполняет поле ввода
        card.addEventListener('click', () => {
            inputText.value = currentMode === 'boomerToZoomer' ? from : to;
            inputText.focus();
        });
        
        examplesGrid.appendChild(card);
    });
}

// Инициализация
updateExamples();

