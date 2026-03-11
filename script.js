const projetos = [
    "Site de Portfólio",
    "App de Tarefas em JavaScript",
    "Calculadora Web"
];

const lista = document.getElementById("projetos");

projetos.forEach(projeto => {
    const item = document.createElement("li");
    item.textContent = projeto;
    lista.appendChild(item);
});