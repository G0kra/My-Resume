const projetos = [
    <a href="https://github.com/G0kra" target="_blank">GitHub</a>,
    "App de Tarefas em JavaScript",
    "Calculadora Web"
];

const lista = document.getElementById("projetos");

projetos.forEach(projeto => {
    const item = document.createElement("li");
    item.textContent = projeto;
    lista.appendChild(item);
});
