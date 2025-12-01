// Your code here.

    function toggleMenu() {
        // taarget button and save as variable 
        //target ul el and save it as variable 
        // turn som classess on and off 4 those 2
        const burgerButton = document.querySelector('#menu-toggle')
        console.log(burgerButton)
        burgerButton.classList.toggle("active"); 

        const nav = document.querySelector('#nav-links')
        console.log(nav);
        nav.classList.toggle("active");
    }
