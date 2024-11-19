// Main Index
// --- Imports
import generatedData from "./generated-data/projects.json"
import "./style.css";
import { sideBar } from "./ui/sidebar";
import { retrieveProjects } from "./ui/view-project";
// --- Get DOM
export const main = document.querySelector("main");
export const notesValueHTML = document.querySelector("#notes-value");
export const descriptionValueHTML = document.querySelector("#description-value")
export const tabTitleHTML = document.querySelector(".tab-title");
export let selectedNavList = "Project";

sideBar()
retrieveProjects(generatedData)


// ----- Templates
// Projects
{/* <div class="cards-container">
            <div class="card">
                <h2 class="card-title">
                    <label class="checkbox-container">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    Project Name
                </h2>
                <p class="card-description"> 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quidem ad voluptates reprehenderit ratione voluptatum quam aut odit! Sit facere itaque facilis harum sunt unde repellat laborum, impedit enim ut?
                </p>
                <div class="task-properties">
                    <div id="due-date">
                        Due Date:
                        <span id="due-date-value" class="low">MM/DD/YYYY</span>
                    </div>
                    <div id="priority-level">
                        Priority:
                        <span id="priority-level-value" class="low">Low</span>
                    </div>
                </div>
                <div class="card-btns">
                    <div class="btn btn-view">
                        Manage Task
                    </div>
                    <div class="btn btn-delete">
                        Delete Project
                    </div>
                </div>
            </div>            
            <div class="card project-complete">
                <h2 class="card-title">
                    <label class="checkbox-container">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    Project Name
                </h2>
                <p class="card-description"> 
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quidem ad voluptates reprehenderit ratione voluptatum quam aut odit! Sit facere itaque facilis harum sunt unde repellat laborum, impedit enim ut?
                </p>
                <div class="task-properties">
                    <div id="due-date">
                        <b>Due Date:</b>
                        <span id="due-date-value" class="low">MM/DD/YYYY</span>
                    </div>
                    <div id="priority-level">
                       <b>Priority:</b>
                        <span id="priority-level-value" class="low">Low</span>
                    </div>
                </div>
                <div class="card-btns">
                    <div class="btn btn-view">
                        Manage Task
                    </div>
                    <div class="btn btn-delete">
                        Delete Project
                    </div>
                </div>
            </div>               
        </div>     */}

// Listing Tasks
{/* <div class="listing-container">
            <div class="list list-complete">
                <div class="list-details">
                    <h3 class="list-title"> 
                        <label class="checkbox-container">
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                        <span class="list-title-value">list-title</span>
                    </h3>
                    <p class="list-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique aspernatur placeat vitae labore eum inventore dolor. Rem ad sit nisi iusto eos assumenda omnis deleniti, officiis quas illo labore non nostrum voluptatibus consequuntur est nam magnam nihil? Magnam, dolores? Voluptatibus quia minima labore, quisquam sunt consectetur! Eius rem doloribus nam. Praesentium provident numquam beatae hic quo dicta vitae minima quae reiciendis enim placeat assumenda alias labore et corporis pariatur, voluptatum non voluptates! At in aliquid illum facilis labore repudiandae nihil commodi modi, totam soluta nemo nesciunt, veritatis molestiae excepturi nostrum et maiores non ex sint voluptas nam provident deserunt cumque.</p>
                </div>          
                <div class="list-due-date">
                        Due Date:
                        <span id="manage-task-due-date-value" class="low due-date-value">MM/DD/YYYY</span>
                    </div>      
                <div class="list-btns">
                    <div class="btn-list-edit">
                        <img src="media/icons/note-edit-outline.svg" alt="edit">
                    </div>
                    <div class="btn-list-edit">
                        <img src="media/icons/delete-circle-outline.svg" alt="delete">
                    </div>
                </div>
            </div>

            <div class="list">
                <div class="list-details">
                    <h3 class="list-title"> 
                        <label class="checkbox-container">
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                        <span class="list-title-value">list-title</span>
                    </h3>
                    <p class="list-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique aspernatur placeat vitae labore eum inventore dolor. Rem ad sit nisi iusto eos assumenda omnis deleniti, officiis quas illo labore non nostrum voluptatibus consequuntur est nam magnam nihil? Magnam, dolores? Voluptatibus quia minima labore, quisquam sunt consectetur! Eius rem doloribus nam. Praesentium provident numquam beatae hic quo dicta vitae minima quae reiciendis enim placeat assumenda alias labore et corporis pariatur, voluptatum non voluptates! At in aliquid illum facilis labore repudiandae nihil commodi modi, totam soluta nemo nesciunt, veritatis molestiae excepturi nostrum et maiores non ex sint voluptas nam provident deserunt cumque.</p>
                </div>                
                <div class="list-due-date">
                        Due Date:
                        <span id="manage-task-due-date-value" class="low due-date-value">MM/DD/YYYY</span>
                    </div>
                <div class="list-btns">
                    <div class="btn-list-edit">
                        <img src="media/icons/note-edit-outline.svg" alt="edit">
                    </div>
                    <div class="btn-list-edit">
                        <img src="media/icons/delete-circle-outline.svg" alt="delete">
                    </div>
                </div>
            </div>
        </div> */}

// Manage Task
{/* <div id="manage-task-container">
            <div class="manage-task-header">
                <div class="manage-task-title">
                    <label class="checkbox-container">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                    <h1 class="manage-task-title-value">Project Name?</h1>
                </div>
                <div class="list-btns">
                    <div class="btn-list-edit">
                        <img src="media/icons/note-edit-outline.svg" alt="edit">
                    </div>
                    <div class="btn-list-delete">
                        <img src="media/icons/delete-circle-outline.svg" alt="delete">
                    </div>
                </div>
            </div>
            <div class="task-properties">
                <div id="due-date">
                    Due Date:
                    <span id="due-date-value" class="low">MM/DD/YYYY</span>
                </div>
                <div id="priority-level">
                    Priority:
                    <span id="priority-level-value" class="low">Low</span>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae in unde esse aspernatur, quisquam facilis iure pariatur aliquid quod vel illum commodi modi ex enim, non doloremque voluptate maiores.</p>
        
            <div class="manage-task-list">
                <h2>All Tasks</h2>
                <div class="list list-complete">
                    <div class="list-details">
                        <h3 class="list-title"> 
                            <label class="checkbox-container">
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <span class="list-title-value">list-title</span>
                        </h3>
                        <p class="list-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique aspernatur placeat vitae labore eum inventore dolor. Rem ad sit nisi iusto eos assumenda omnis deleniti, officiis quas illo labore non nostrum voluptatibus consequuntur est nam magnam nihil? Magnam, dolores? Voluptatibus quia minima labore, quisquam sunt consectetur! Eius rem doloribus nam. Praesentium provident numquam beatae hic quo dicta vitae minima quae reiciendis enim placeat assumenda alias labore et corporis pariatur, voluptatum non voluptates! At in aliquid illum facilis labore repudiandae nihil commodi modi, totam soluta nemo nesciunt, veritatis molestiae excepturi nostrum et maiores non ex sint voluptas nam provident deserunt cumque.</p>
                    </div>      
                    <div class="list-due-date">
                        Due Date:
                        <span id="manage-task-due-date-value" class="low due-date-value">MM/DD/YYYY</span>
                    </div>          
                    <div class="list-btns">
                        <div class="btn-list-edit">
                            <img src="media/icons/note-edit-outline.svg" alt="edit">
                        </div>
                        <div class="btn-list-edit">
                            <img src="media/icons/delete-circle-outline.svg" alt="delete">
                        </div>
                    </div>
                </div>
    
                <div class="list">
                    <div class="list-details">
                        <h3 class="list-title"> 
                            <label class="checkbox-container">
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                            <span class="list-title-value">list-title</span>
                        </h3>
                        <p class="list-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique aspernatur placeat vitae labore eum inventore dolor. Rem ad sit nisi iusto eos assumenda omnis deleniti, officiis quas illo labore non nostrum voluptatibus consequuntur est nam magnam nihil? Magnam, dolores? Voluptatibus quia minima labore, quisquam sunt consectetur! Eius rem doloribus nam. Praesentium provident numquam beatae hic quo dicta vitae minima quae reiciendis enim placeat assumenda alias labore et corporis pariatur, voluptatum non voluptates! At in aliquid illum facilis labore repudiandae nihil commodi modi, totam soluta nemo nesciunt, veritatis molestiae excepturi nostrum et maiores non ex sint voluptas nam provident deserunt cumque.</p>
                    </div>                
                    <div class="list-due-date">
                        Due Date:
                        <span id="manage-task-due-date-value" class="low due-date-value">MM/DD/YYYY</span>
                    </div>
                    <div class="list-btns">
                        <div class="btn-list-edit">
                            <img src="media/icons/note-edit-outline.svg" alt="edit">
                        </div>
                        <div class="btn-list-delete">
                            <img src="media/icons/delete-circle-outline.svg" alt="delete">
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
          */}

//   Notes Container

{/* <div id="notes-container">            
            <div id="notes-board">
                <div class="notes-header">
                    <div class="notes-title-header">
                        <div class="btn-add-notes">
                            <img src="media/icons/plus-circle.svg" alt="add notes">
                        </div>
                        <h2 class="notes-title-header-value">Notes - Project Name</h2>
                    </div>                    
                    <div class="list-btns">
                        <div class="btn-list-delete">
                            <img src="media/icons/close-circle-outline.svg" alt="delete">
                        </div>
                    </div>
                </div>
                <div id="notes-board-list">
                    <div class="notes">
                        <div class="list-btns">
                            <div class="btn-list-edit">
                                <img src="media/icons/note-edit-outline.svg" alt="edit">
                            </div>
                            <div class="btn-list-delete">
                                <img src="media/icons/delete-circle-outline.svg" alt="delete">
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores alias esse aperiam veniam aspernatur, cumque voluptate aliquam deleniti nulla consectetur, hic enim nesciunt odit, numquam libero illo a aliquid!</p>
                    </div>               
                </div>                                
            </div>
        </div> */}

        // Add Project Form
        // <div id="add-project-container">
        //     <form class="add-form">
        //         <h1 id="add-project-title">Add Project</h1>
        //         <div class="input-container">
        //             <label for="input-project-name">
        //                 <b>Project Name</b>
        //             </label>
        //             <input type="text" id="input-project-name" placeholder="Enter Project Name..." required>
        //         </div>
        //         <div class="input-container">
        //             <label for="input-project-name">
        //                 <b>Project Description</b>
        //             </label>
        //             <textarea id="input-project-description" placeholder="Enter Description..."></textarea>
        //         </div>  
        //         <div class="task-properties">
        //             <div id="due-date">
        //                 <b>Due Date:</b>
        //                 <input type="date" id="input-date-task">
        //             </div>
        //             <div id="priority-level">
        //                 <b>Priority:</b>
        //                 <input type="radio" name="priority-level" id="input-priority-low">
        //                 <label for="input-priority-low" class="low priority-level-option">                            
        //                     Low
        //                 </label>
        //                 <input type="radio" name="priority-level" id="input-priority-medium">
        //                 <label for="input-priority-medium" class="medium priority-level-option">
        //                     Medium
        //                 </label>               
        //                 <input type="radio" name="priority-level" id="input-priority-high">         
        //                 <label for="input-priority-high" class="high priority-level-option">                            
        //                     High
        //                 </label>                                                
        //             </div>
        //         </div>
        //         <div class="card-btns">
        //             <input type="submit" class="btn btn-view" value="Add">                                            
        //             <input type="button" class="btn btn-delete" value="Cancel">                        
        //         </div>              
        //     </form>
        // </div>

// -- Side Nav Bar
    //     <div id="side-bar-btns">
    //     <label for="lbl-menu-icon">
    //         <img src="media/icons/menu.svg" alt="menu-icon" id="menu-icon">
    //     </label>            
    //     <nav>
    //         <ul>
    //             <li id="li-projects" class="li-active"> Projects </li>
    //             <li id="li-routines">Routines</li>
    //             <li id="li-listing">Listing</li>
    //             <li id="li-schedules">Schedules</li>
    //             <li id="li-all-tasks">All Tasks</li>
    //         </ul>
    //     </nav>
    // </div>
    // <footer>
    //     <a href="https://rommjames.github.io/About-Me/" target="_blank">
    //         <img src="media/rj-logo-3-nobg.png" alt="my-logo" class="logo">
    //     </a>
    // </footer>