// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openTab(evt, tabName, tabNameUL) {
    // Declare all variables
    let i, tabContent, tabLinks, tabUnderLine;

    // Get all elements with class="tabcontent\info__tab-p" and hide them
    tabContent = document.getElementsByClassName("info__tab-p");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabUnderLine = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabUnderLine.length; i++) {
        tabUnderLine[i].style.backgroundColor = "rgba(255, 255, 255, 0)";
    }

    // Get all elements with class="tablinks\info__tab-button" and remove the class "active"
    tabLinks = document.getElementsByClassName("info__tab-button");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    document.getElementById(tabNameUL).style.backgroundColor = "rgba(255, 255, 255, 0.56)";
}
