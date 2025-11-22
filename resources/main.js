import { handleDropdowns } from './js/dropdown.js'
import { toggleSideBar } from './js/toggleSideBar.js'
import { loadPage } from './js/router.js'

function app() {
    handleDropdowns()
    
    // Sidebar Toggle
    const sidebarToggle = document.getElementById("sidebar-toggle");
    if (sidebarToggle) {
        sidebarToggle.addEventListener("click", toggleSideBar);
    }

    // Setup "Focus" Button
    const focusButton = document.querySelector(".focus-button");
    if (focusButton) {
        focusButton.addEventListener("click", () => {
            loadPage('./pages/focus.html');
        });
    }

}

app()