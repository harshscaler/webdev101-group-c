let allProjects = [];

function createProject(name){

    // initial state
    let newPoject = {
        name : name,
        tickets : []
    }

    allProjects.push(newPoject);
}

function validateName(name){
    // TODO
}
// dom
let patentProjects = document.querySelector(".projects");
let projectInput = document.querySelector(".project-name-input");
let createProjectBtn = document.querySelector(".add-project");

function createProjectNode(name){
    let projectNode = document.createElement("li");

    projectNode.innerText = name;

    return projectNode;
}

function addProjectInDom(name) {
    let projectNode = createProjectNode(name);
    patentProjects.appendChild(projectNode);

}

createProjectBtn.addEventListener("click" , () => {
    let projectName = projectInput.value;
    createProject(projectName);
    addProjectInDom(projectName);
})