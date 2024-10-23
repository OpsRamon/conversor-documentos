document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        document.getElementById('result').innerText = `Arquivo ${file.name} pronto para conversão!`;
    } else {
        document.getElementById('result').innerText = 'Por favor, selecione um arquivo.';
    }
});