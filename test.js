// Тестовые данные
const testCases = [
    // Приветствия
    {
        name: 'Перевод "Доброе утро"',
        input: 'доброе утро',
        mode: 'boomerToZoomer',
        expectedContains: ['йоу', 'чё', 'как']
    },
    {
        name: 'Перевод "Привет"',
        input: 'привет',
        mode: 'boomerToZoomer',
        expectedContains: ['прив']
    },
    {
        name: 'Перевод "Здравствуйте"',
        input: 'здравствуйте',
        mode: 'boomerToZoomer',
        expectedContains: ['хай']
    },
    
    // Прощания
    {
        name: 'Перевод "До свидания"',
        input: 'до свидания',
        mode: 'boomerToZoomer',
        expectedContains: ['пока', 'бб']
    },
    {
        name: 'Перевод "Спокойной ночи"',
        input: 'спокойной ночи',
        mode: 'boomerToZoomer',
        expectedContains: ['споки']
    },
    
    // Благодарности
    {
        name: 'Перевод "Спасибо"',
        input: 'спасибо',
        mode: 'boomerToZoomer',
        expectedContains: ['спс']
    },
    {
        name: 'Перевод "Большое спасибо"',
        input: 'большое спасибо',
        mode: 'boomerToZoomer',
        expectedContains: ['респект']
    },
    
    // Согласие/несогласие
    {
        name: 'Перевод "Да"',
        input: 'да',
        mode: 'boomerToZoomer',
        expectedContains: ['агась']
    },
    {
        name: 'Перевод "Нет"',
        input: 'нет',
        mode: 'boomerToZoomer',
        expectedContains: ['неа']
    },
    {
        name: 'Перевод "Хорошо"',
        input: 'хорошо',
        mode: 'boomerToZoomer',
        expectedContains: ['окей', 'найс']
    },
    {
        name: 'Перевод "Отлично"',
        input: 'отлично',
        mode: 'boomerToZoomer',
        expectedContains: ['топчик']
    },
    
    // Эмоции
    {
        name: 'Перевод "Я рад"',
        input: 'я рад',
        mode: 'boomerToZoomer',
        expectedContains: ['кайф']
    },
    {
        name: 'Перевод "Мне смешно"',
        input: 'мне смешно',
        mode: 'boomerToZoomer',
        expectedContains: ['ору']
    },
    {
        name: 'Перевод "Я злюсь"',
        input: 'я злюсь',
        mode: 'boomerToZoomer',
        expectedContains: ['бомбит']
    },
    
    // Оценки
    {
        name: 'Перевод "Молодец"',
        input: 'молодец',
        mode: 'boomerToZoomer',
        expectedContains: ['красавчик', 'респект']
    },
    {
        name: 'Перевод "Глупость"',
        input: 'глупость',
        mode: 'boomerToZoomer',
        expectedContains: ['кринж']
    },
    {
        name: 'Перевод "Замечательно"',
        input: 'замечательно',
        mode: 'boomerToZoomer',
        expectedContains: ['огонь', 'топчик']
    },
    
    // Действия
    {
        name: 'Перевод "Пойдём"',
        input: 'пойдём',
        mode: 'boomerToZoomer',
        expectedContains: ['го']
    },
    {
        name: 'Перевод "Подожди"',
        input: 'подожди',
        mode: 'boomerToZoomer',
        expectedContains: ['секунду', 'погоди']
    },
    {
        name: 'Перевод "Позвони мне"',
        input: 'позвони мне',
        mode: 'boomerToZoomer',
        expectedContains: ['кинь', 'звонок']
    },
    
    // Работа и учёба
    {
        name: 'Перевод "Работа"',
        input: 'работа',
        mode: 'boomerToZoomer',
        expectedContains: ['работка', 'движ']
    },
    {
        name: 'Перевод "Домашнее задание"',
        input: 'домашнее задание',
        mode: 'boomerToZoomer',
        expectedContains: ['дз', 'домашка']
    },
    
    // Технологии
    {
        name: 'Перевод "Компьютер"',
        input: 'компьютер',
        mode: 'boomerToZoomer',
        expectedContains: ['комп']
    },
    {
        name: 'Перевод "Интернет"',
        input: 'интернет',
        mode: 'boomerToZoomer',
        expectedContains: ['инет']
    },
    
    // Деньги
    {
        name: 'Перевод "Деньги"',
        input: 'деньги',
        mode: 'boomerToZoomer',
        expectedContains: ['бабки']
    },
    {
        name: 'Перевод "Дорого"',
        input: 'дорого',
        mode: 'boomerToZoomer',
        expectedContains: ['дорого', 'карману']
    },
    
    // Скорость
    {
        name: 'Перевод "Быстро"',
        input: 'быстро',
        mode: 'boomerToZoomer',
        expectedContains: ['быстро', 'шустро']
    },
    {
        name: 'Перевод "Медленно"',
        input: 'медленно',
        mode: 'boomerToZoomer',
        expectedContains: ['медленно', 'тормоза']
    },
    
    // Понимание
    {
        name: 'Перевод "Понятно"',
        input: 'понятно',
        mode: 'boomerToZoomer',
        expectedContains: ['понял', 'ясно']
    },
    {
        name: 'Перевод "Не знаю"',
        input: 'не знаю',
        mode: 'boomerToZoomer',
        expectedContains: ['хз']
    },
    
    // Комплексные фразы
    {
        name: 'Комплексная фраза 1',
        input: 'доброе утро, как дела?',
        mode: 'boomerToZoomer',
        expectedContains: ['йоу']
    },
    {
        name: 'Комплексная фраза 2',
        input: 'спасибо большое, до свидания',
        mode: 'boomerToZoomer',
        expectedContains: ['спс', 'бб']
    }
];

// Статистика
let stats = {
    total: 0,
    passed: 0,
    failed: 0
};

// Функция запуска одного теста
async function runTest(testCase) {
    try {
        // Используем словарный перевод для тестов
        const originalUseAI = useAI;
        useAI = false;
        
        const result = await translate(testCase.input, testCase.mode);
        
        useAI = originalUseAI;
        
        // Проверяем результат
        const resultLower = result.toLowerCase();
        const passed = testCase.expectedContains.some(expected => 
            resultLower.includes(expected.toLowerCase())
        );
        
        return {
            passed,
            result,
            expected: testCase.expectedContains.join(' или ')
        };
    } catch (error) {
        return {
            passed: false,
            result: null,
            error: error.message
        };
    }
}

// Функция отображения результата теста
function displayTestResult(testCase, testResult) {
    const resultsDiv = document.getElementById('test-results');
    const testItem = document.createElement('div');
    testItem.className = `test-item ${testResult.passed ? 'passed' : 'failed'}`;
    
    const icon = testResult.passed ? '✅' : '❌';
    const status = testResult.passed ? 'PASSED' : 'FAILED';
    
    let html = `
        <div class="test-name">${icon} ${testCase.name} - ${status}</div>
        <div class="test-details">
            <strong>Вход:</strong> "${testCase.input}"<br>
            <strong>Результат:</strong> "${testResult.result || 'N/A'}"<br>
            <strong>Ожидалось:</strong> ${testResult.expected}
        </div>
    `;
    
    if (testResult.error) {
        html += `<div class="test-error">Ошибка: ${testResult.error}</div>`;
    }
    
    testItem.innerHTML = html;
    resultsDiv.appendChild(testItem);
}

// Обновление статистики
function updateStats() {
    document.getElementById('total-tests').textContent = stats.total;
    document.getElementById('passed-tests').textContent = stats.passed;
    document.getElementById('failed-tests').textContent = stats.failed;
}

// Обновление прогресс-бара
function updateProgress(current, total) {
    const progressBar = document.getElementById('progress-bar');
    const progressFill = document.getElementById('progress-fill');
    
    progressBar.style.display = 'block';
    const percentage = (current / total) * 100;
    progressFill.style.width = percentage + '%';
    
    if (current === total) {
        setTimeout(() => {
            progressBar.style.display = 'none';
        }, 1000);
    }
}

// Запуск всех тестов
async function runAllTests() {
    // Сброс статистики
    stats = { total: 0, passed: 0, failed: 0 };
    clearResults();
    
    const resultsDiv = document.getElementById('test-results');
    resultsDiv.innerHTML = '<p style="text-align: center; color: #666;">Запуск тестов...</p>';
    
    stats.total = testCases.length;
    updateStats();
    
    // Запускаем тесты последовательно
    for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i];
        
        if (i === 0) {
            resultsDiv.innerHTML = '';
        }
        
        const result = await runTest(testCase);
        
        if (result.passed) {
            stats.passed++;
        } else {
            stats.failed++;
        }
        
        displayTestResult(testCase, result);
        updateStats();
        updateProgress(i + 1, testCases.length);
        
        // Небольшая задержка между тестами для визуализации
        await new Promise(resolve => setTimeout(resolve, 50));
    }
    
    // Итоговое сообщение
    const summary = document.createElement('div');
    summary.style.cssText = 'margin-top: 20px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px; text-align: center; font-size: 1.2em; font-weight: 600;';
    
    const passRate = ((stats.passed / stats.total) * 100).toFixed(1);
    summary.innerHTML = `
        🎉 Тестирование завершено!<br>
        <span style="font-size: 0.9em; margin-top: 10px; display: block;">
            Успешность: ${passRate}% (${stats.passed}/${stats.total})
        </span>
    `;
    
    resultsDiv.appendChild(summary);
}

// Очистка результатов
function clearResults() {
    document.getElementById('test-results').innerHTML = '';
    stats = { total: 0, passed: 0, failed: 0 };
    updateStats();
    document.getElementById('progress-bar').style.display = 'none';
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    console.log('Автотесты готовы к запуску!');
    console.log(`Всего тестов: ${testCases.length}`);
});

