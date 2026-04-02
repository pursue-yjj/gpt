const html = (window.__HTML_PARTS || []).join('');
document.open();
document.write(html);
document.close();
