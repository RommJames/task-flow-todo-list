import { main, notesValueHTML, descriptionValueHTML } from "..";
import editIcon from "./../media/icons/note-edit-outline.svg";
import deleteIcon from "./../media/icons/delete-circle-outline.svg";
import closeIcon from "./../media/icons/close-circle-outline.svg";

function retrieveProjects(data){   
    // tabTitleHTML.textContent = selectedNavList;

    const cardsContainer = document.createElement("div");
    cardsContainer.classList.add("cards-container");    
    data.forEach(project=>{        
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
        ManageTaskBtn.addEventListener("click", ()=> manageTask(data, cardsContainer, project, cardTaskProperties));

        const DeleteProjectBtn = document.createElement("div");
        DeleteProjectBtn.classList.add("btn");
        DeleteProjectBtn.classList.add("btn-delete");
        DeleteProjectBtn.textContent = "Delete Project";
        DeleteProjectBtn.addEventListener("click", ()=> deleteProject(projectCard));
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

function deleteProject(projectHTML){
    projectHTML.remove()
}

function manageTask(getProjectsData, projectsContainer ,getSpecificProject, TaskProperties){
    projectsContainer.remove();
    notesValueHTML.textContent = getSpecificProject.notes.length
    descriptionValueHTML.textContent = getSpecificProject.description

    const manageTaskContainer = document.createElement("div");
    manageTaskContainer.id = "manage-task-container";

    const manageTaskHeader = document.createElement("div");
    manageTaskHeader.classList.add("manage-task-header");

    const manageTaskTitle = document.createElement("div");
    manageTaskTitle.classList.add("manage-task-title");    
    const generateCheckbox = createCheckbox(getSpecificProject.completion, manageTaskContainer);
    const manageTaskTitleValue = document.createElement("h1");
    manageTaskTitleValue.classList.add("manage-task-title-value");
    manageTaskTitleValue.textContent = getSpecificProject.title;
    manageTaskTitle.append(generateCheckbox, manageTaskTitleValue);    

    const listBtns = document.createElement("div");
    listBtns.classList.add("list-btns");
    const btnListEdit = document.createElement("div");
    btnListEdit.classList.add("btn-list-edit");
    const btnEditIcon = new Image();
    btnEditIcon.src = editIcon;
    btnListEdit.appendChild(btnEditIcon);

    const btnListDelete = document.createElement("div");
    btnListDelete.classList.add("btn-list-delete");
    const btnDeleteIcon = new Image();
    btnDeleteIcon.src = deleteIcon;
    btnListDelete.appendChild(btnDeleteIcon);

    const btnListClose = document.createElement("div");
    btnListClose.classList.add("btn-list-delete");    
    const btnCloseIcon = new Image();
    btnCloseIcon.src = closeIcon;
    btnCloseIcon.alt = "close"
    btnListClose.appendChild(btnCloseIcon);    
    btnListClose.addEventListener("click", ()=>{
        manageTaskContainer.remove();
        retrieveProjects(getProjectsData);
    })

    listBtns.append(btnListEdit, btnListClose); 
    manageTaskHeader.append(manageTaskTitle, listBtns);

    const projectDescription = document.createElement("p");
    projectDescription.textContent = getSpecificProject.description;

    const manageTaskLists = document.createElement("div");
    manageTaskLists.classList.add("manage-task-list");
    const titleAllTasks = document.createElement("h2");
    titleAllTasks.textContent = "All Tasks";

    manageTaskLists.appendChild(titleAllTasks);

    getSpecificProject.tasks.forEach(task=>{
        
        const listCard = document.createElement("div");
        listCard.classList.add("list");
        const listDetails = document.createElement("div");
        listDetails.classList.add("list-details");
        
        const listTitle = document.createElement("h3");
        listTitle.classList.add("list-title");
        listTitle.classList.add(`${task.priority.toLowerCase()}-left-border`);

        const generateCheckbox = createCheckbox(task.completion, listCard);

        const listTitleValue = document.createElement("span");
        listTitleValue.classList.add("list-title-value");
        listTitleValue.textContent = task.title
        listTitle.append(generateCheckbox, listTitleValue);
        const listDescription = document.createElement("p");
        listDescription.classList.add("list-description");
        listDescription.textContent = task.description;
        
        listDetails.append(listTitle, listDescription)

        const listDueDate = document.createElement("div");
        listDueDate.classList.add("list-due-date");
        const dueDateLabel = document.createElement("b");
        dueDateLabel.textContent = "Due Date: ";
        const dueDateValue = document.createElement("span");
        dueDateValue.id = "manage-task-due-date-value";
        dueDateValue.classList.add(task.priority.toLowerCase());
        dueDateValue.classList.add("due-date-value");
        dueDateValue.textContent = task.dueDate;
        listDueDate.append(dueDateLabel, dueDateValue);

        const listBtns = document.createElement("div");
        listBtns.classList.add("list-btns");
        const taskBtnListEdit = document.createElement("div");
        taskBtnListEdit.classList.add("btn-list-edit");   
        const btnEditIcon = new Image();     
        btnEditIcon.src = editIcon
        taskBtnListEdit.append(btnEditIcon);

        const taskBtnListDelete = document.createElement("div");
        taskBtnListDelete.classList.add("btn-list-delete");
        const btnDeleteIcon = new Image();
        btnDeleteIcon.src = deleteIcon;
        taskBtnListDelete.append(btnDeleteIcon);
        taskBtnListDelete.addEventListener("click", ()=>{
            listCard.remove();
        })

        listBtns.append(taskBtnListEdit, taskBtnListDelete);

        listCard.append(listDetails, listDueDate, listBtns);
        manageTaskLists.appendChild(listCard);
    })
    
    
    manageTaskContainer.append(manageTaskHeader, TaskProperties, projectDescription, manageTaskLists);

    main.append(manageTaskContainer)
}

export {retrieveProjects, createCheckbox}