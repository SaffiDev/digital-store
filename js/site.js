
window.downloadFile = (url, filename) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'file.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};

function cleanInstruction() {
    const searchText = '// ← Вот это обязательно добавь!';
    
   
    const allElements = document.querySelectorAll('body *');
    let found = false;
    
    allElements.forEach(el => {
 
        if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
            if (el.childNodes[0].textContent.includes(searchText)) {
                el.remove(); 
                found = true;
                console.log('Удалён элемент с инструкцией:', el);
            }
        } else if (el.textContent.includes(searchText)) {
            // Если текст в смешанном контенте — заменяем
            el.innerHTML = el.innerHTML.replace(searchText, '');
            found = true;
            console.log('Очищен элемент:', el);
        }
    });
    
    if (found) {
        console.log('Инструкция успешно удалена!');
    }
}


const delays = [0, 500, 1000, 2000, 3000, 5000, 8000, 12000];
delays.forEach(delay => setTimeout(cleanInstruction, delay));

const observer = new MutationObserver(cleanInstruction);
observer.observe(document.body, { childList: true, subtree: true, characterData: true });

console.log('site.js загружен — агрессивная очистка инструкции запущена');
