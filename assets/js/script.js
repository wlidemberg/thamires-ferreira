class Mobile {
    constructor(nav, btn, navList, navItem){
        this.nav = document.querySelector(nav);
        this.btn = document.querySelector(btn);
        this.navList = document.querySelector(navList);
        this.navItem = document.querySelectorAll(navItem);
        this.activeClass = 'active';

        this.handleClick = this.handleClick.bind(this);
        this.handleNavItemClick = this.handleNavItemClick.bind(this);
    }

    animateLinks(){
        console.log(this.navItem);
        this.navItem.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navItemAnimate 0.5s ease forwards 0.3s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
        
    }

    handleNavItemClick(){
        this.navList.classList.remove(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        console.log(this);
        this.btn.addEventListener('click', this.handleClick);
    }

    addNavItemClickEvents(){
        this.navItem.forEach(item => {
            item.addEventListener('click', this.handleNavItemClick);
        });
    }


    Init(){
        if(this.btn){
            this.addClickEvent();
            this.addNavItemClickEvents();
        }
        return this;
    }
}



const mobile = new Mobile(
    ".navigation",
    ".btn-mobile",
    ".nav-list",
    ".nav-item",
);
mobile.Init();