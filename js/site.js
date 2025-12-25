window.downloadFile = (url, filename) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'file.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
document.addEventListener('DOMContentLoaded', () => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
                    const text = node.textContent || '';
                    if (text.includes('Вот это обязательно добавь')) {
                        console.log('Нашёл узел:', node, 'Текст:', text);
                        node.textContent = text.replace('// ← Вот это обязательно добавь!', '');
                    }
                }
            });
        });
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
});
