const checkboxes = document.body.querySelectorAll('.catalog_categories-selection_chechox_container input')
const lemonadeCategory = document.body.querySelector('#lemonadeCategory');
const tonicCategory = document.body.querySelector('#tonicCategory');


// Добавить надпись что ничего не выбрано если ни один чекбокс не активирован
function checkboxChange(checkbox) {
    checkbox.addEventListener('change', () => {
        // Проверка на то,выбран ли чекбокс
        if (checkbox.checked) {
            if (checkbox.value === 'lemonade') {
                lemonadeCategory.style.display = 'grid'
            }
    
            else if (checkbox.value === 'tonic') {
                tonicCategory.style.display = 'grid'
            }
        }
        // Проверка на то, что чекбокс не активирован
        else {
            if (checkbox.value === 'lemonade') {
                lemonadeCategory.style.display = 'none'
            }
    
            else if (checkbox.value === 'tonic') {
                tonicCategory.style.display = 'none'
            }
        }
    })
}
// Добавить кнопку всё

// Вызов функции для проверки чекбоксов
checkboxes.forEach(checkboxChange)