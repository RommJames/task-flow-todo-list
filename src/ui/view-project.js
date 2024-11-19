import generatedData from "./../generated-data/projects.json"
import { main, notesValueHTML } from "..";

function retrieveProjects(){
    const sampleData = generatedData;
    
    const cardsContainer = document.createElement("div");
    cardsContainer.classList.add("cards-container");    
    sampleData.forEach(project=>{        
        const projectCard = document.createElement("div");
        projectCard.classList.add("card");    

        const cardTitle = document.createElement("h2");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = project.title;
        const generateCheckbox = createCheckbox(project.completion, projectCard);
        cardTitle.prepend(generateCheckbox);     
        

        const cardDescription = document.createElement("p");
        cardDescription.classList.add("card-description");
        cardDescription.textContent = project.description;

        const cardTaskProperties = document.createElement("div");
        cardTaskProperties.classList.add("task-properties");

        const dueDate = document.createElement("div");
        const dueDateLabel = document.createElement("b");
        dueDateLabel.textContent = "Due Date: ";
        dueDate.appendChild(dueDateLabel);
        const dueDateValue = document.createElement("span");
        dueDateValue.classList.add("due-date-value");
        dueDateValue.classList.add(`${project.priority.toLowerCase()}`)
        dueDateValue.textContent = project.dueDate;
        dueDate.appendChild(dueDateValue);

        const priorityLevel = document.createElement("div");
        const priorityLevelLabel = document.createElement("b");
        priorityLevelLabel.textContent = "Priority: ";
        priorityLevel.appendChild(priorityLevelLabel);
        const priorityLevelValue = document.createElement("div");
        priorityLevelValue.classList.add("priority-level-value");
        priorityLevelValue.classList.add(`${project.priority.toLowerCase()}`);
        priorityLevelValue.textContent = project.priority;
        priorityLevel.appendChild(priorityLevelValue);

        cardTaskProperties.append(dueDate, priorityLevel);

        const cardBtns = document.createElement("div");
        cardBtns.classList.add("card-btns");
        const ManageTaskBtn = document.createElement("div");
        ManageTaskBtn.classList.add("btn");
        ManageTaskBtn.classList.add("btn-view");
        ManageTaskBtn.textContent = "Manage Task";
        const DeleteProjectBtn = document.createElement("div");
        DeleteProjectBtn.classList.add("btn");
        DeleteProjectBtn.classList.add("btn-delete");
        DeleteProjectBtn.textContent = "Delete Project";
        cardBtns.append(ManageTaskBtn, DeleteProjectBtn);

        projectCard.append(cardTitle,
            cardDescription, 
            cardTaskProperties, 
            cardBtns
        );        
        cardsContainer.appendChild(projectCard);

    })
    
    main.prepend(cardsContainer)    
}

function createCheckbox(projectCompletion, projectContainer){
    const label = document.createElement("label");
    label.classList.add("checkbox-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    checkStatus()
    inputCheckbox.addEventListener("input", function(){
        projectCompletion = projectCompletion == true ? false : true;
        checkStatus()
    })
    const checkmark = document.createElement("span");
    checkmark.classList.add("checkmark");
    label.append(inputCheckbox, checkmark);

    function checkStatus(){
        if(projectCompletion == true){
            inputCheckbox.checked = "true"
            projectContainer.classList.add("project-complete");
        }else{
            inputCheckbox.removeAttribute("checked");
            projectContainer.classList.remove("project-complete");
        }
    }

    return label
}

export {retrieveProjects, createCheckbox}