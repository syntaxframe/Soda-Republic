const checkboxes = document.body.querySelectorAll('.catalog_categories-selection_chechox_container input')
const lemonadeCategory = document.body.querySelector('#lemonadeCategory');
const tonicCategory = document.body.querySelector('#tonicCategory');
const noneCategorySelected = document.body.querySelector('#none_category_selected');

// Добавить надпись что ничего не выбрано если ни один чекбокс не активирован
function checkboxChange(checkbox) {
    checkbox.addEventListener('change', () => {
        // Проверка на то,выбран ли чекбокс
        if (checkbox.checked) {
            if (checkbox.value === 'lemonade') {
                lemonadeCategory.style.display = 'grid'
                noneCategorySelected.style.display = 'none'
            }
    
            else if (checkbox.value === 'tonic') {
                tonicCategory.style.display = 'grid'
                noneCategorySelected.style.display = 'none'
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
            if (tonicCategory.style.display == 'none' && lemonadeCategory.style.display == 'none')
            {
                noneCategorySelected.style.display = 'flex'
            }
        }
    })
}
// Добавить кнопку всё

// Вызов функции для проверки чекбоксов
checkboxes.forEach(checkboxChange)

