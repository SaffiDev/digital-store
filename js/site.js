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
                if (node.textContent?.includes('Вот это обязательно добавь')) {
                    node.textContent = node.textContent.replace('// ← Вот это обязательно добавь!', '');
                }
            });
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
});
