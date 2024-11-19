// Get Img
import getRJLogo from "./../media/rj-logo-3-nobg.png";
import getMenuIcon from "./../media/icons/menu.svg";
import { selectedNavList, tabTitleHTML } from "..";

// GET DOM
const sidebarHTML = document.querySelector("#side-bar");


// Initialize
const navLists = ["Projects", "Routines", "Listing", "Schedules", "AllTasks", "Completed"];
const portfolioLink = "https://rommjames.github.io/About-Me/";

function sideBar(){
    const sideBarBtns = document.createElement("div");
    sideBarBtns.setAttribute("id", "side-bar-btns");
    const labelMenuIcon = document.createElement("label");
    labelMenuIcon.setAttribute("for", "lbl-menu-icon");
    const menuIconImg = document.createElement("img");
    menuIconImg.src = getMenuIcon;
    menuIconImg.alt = "menu-icon";
    menuIconImg.id = "menu-icon";
    labelMenuIcon.appendChild(menuIconImg);
    const navTag = document.createElement("nav");
    const ulTag = document.createElement("ul");

    navLists.forEach(list => {
        const createList = document.createElement("li");
        createList.textContent = list;  
        createList.addEventListener("click", ()=> clickNavList(ulTag, createList, list));   
        ulTag.append(createList);
    });

    navTag.appendChild(ulTag);
    sideBarBtns.append(labelMenuIcon, navTag);

    const sidebarFooter = document.createElement("footer");
    const linkImg = document.createElement("a");
    linkImg.href = portfolioLink;
    linkImg.target = "_blank"
    const rjLogo = document.createElement("img");
    rjLogo.src = getRJLogo;
    rjLogo.alt = "my-logo";
    rjLogo.classList.add("logo")
    linkImg.append(rjLogo);
    sidebarFooter.appendChild(linkImg);

    sidebarHTML.append(sideBarBtns, sidebarFooter);    
}

function clickNavList(parentList, createdList, selectedList){
    const allHTMLlist = Array.from(parentList.children);    
    const getSiblingsList = allHTMLlist.filter(element=>element.textContent !== selectedList);

    navLists.forEach(list => {
        
        if(list === selectedList){
            createdList.classList.add("li-active");
            // selectedNavList = selectedList;
            tabTitleHTML.textContent = selectedList;
        }

    });

    getSiblingsList.forEach(list => {
        list.classList.remove("li-active");
    })

}



export {sideBar}

