const projetos = [
    <h2>Links</h2>
    <a href="https://github.com/seuusuario" target="_blank"> GitHub
    </a>
    <br>
    <a href="https://linkedin.com/in/seuusuario" target="_blank"> LinkedIn
    </a>
    "App de Tarefas em JavaScript",
    "Calculadora Web"
];
const lista = document.getElementById("projetos");

projetos.forEach(projeto => {
    const item = document.createElement("li");
    item.textContent = projeto;
    lista.appendChild(item);
});
