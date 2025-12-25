
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
    
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let found = false;
    let node;
    while (node = walker.nextNode()) {
        if (node.textContent.includes(searchText)) {
            node.textContent = node.textContent.replace(searchText, '').trim();
            found = true;
            console.log('Инструкция удалена из:', node);
        }
    }
    
    if (found) {
        console.log('Очистка выполнена успешно');
    }
}


document.addEventListener('DOMContentLoaded', () => {
 
    const attempts = [0, 500, 1000, 2000, 4000, 6000, 8000, 10000];
    attempts.forEach(delay => {
        setTimeout(cleanInstruction, delay);
    });
    
  
    const observer = new MutationObserver(cleanInstruction);
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });
    
    console.log('site.js загружен. Ожидание рендера Blazor и очистка запущены.');
});
