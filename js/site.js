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

    let node;
    while (node = walker.nextNode()) {
        if (node.textContent.includes(searchText)) {
            node.textContent = node.textContent
                .replace(searchText, '')
                .trim();
    
            if (node.textContent === '') {
                node.parentNode.removeChild(node);
            }
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cleanInstruction);
} else {
    cleanInstruction();
}

setTimeout(cleanInstruction, 100);
setTimeout(cleanInstruction, 300);
setTimeout(cleanInstruction, 800);
setTimeout(cleanInstruction, 1500);

const observer = new MutationObserver(cleanInstruction);
observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
});

console.log('site.js загружен. Очистка инструкции запущена.');
