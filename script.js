let menu_state = 'closed';
const NAV_OPTIONS = document.getElementsByClassName('menu_option')

document.querySelector("#menu_access_btn").addEventListener("click", function() {
    if (menu_state == 'open') {
        console.log('closing menu...')
        menu_state = 'closed';
        document.querySelector('#menu_access_btn').classList.remove('openMenuIcon');
        document.querySelector('#menu_access_btn').classList.add('closeMenuIcon');
        document.querySelector('#menu').classList.remove('openMenuUl');
        document.querySelector('#menu').classList.add('closeMenuUl');
        for (option of NAV_OPTIONS) {
            option.classList.add('closeMenuOptions');
            option.classList.remove('openMenuOptions');
        }
    } else {
        console.log('opening menu...')
        menu_state = 'open';
        document.getElementById('menu_access_btn').classList.remove('closeMenuIcon');
        document.getElementById('menu_access_btn').classList.add('openMenuIcon');
        document.querySelector('#menu').classList.remove('closeMenuUl');
        document.querySelector('#menu').classList.add('openMenuUl');
        for (option of NAV_OPTIONS) {
            option.classList.add('openMenuOptions');
            option.classList.remove('closeMenuOptions');
        }
    }
});

for (i = 0; i < NAV_OPTIONS.length; i++) {
    NAV_OPTIONS[i].addEventListener("click", function(e) {
        console.log(`Scrolling for ${e.target.id}`)
        switch (e.target.id) {
            case "BotoxEduBtn":
                document.querySelector(`#BotoxEduArticle`).scrollIntoView({behavior: 'smooth'})
                break;
            case "AppointmentsBtn":
                document.querySelector(`#AppointmentsArticle`).scrollIntoView({behavior: 'smooth'})
                break;
            case "AboutTheOwnersBtn":
                document.querySelector(`#TheOwnersArticle`).scrollIntoView({behavior: 'smooth'})
                break;
            case "FAQBtn":
                document.querySelector(`#FAQArticle`).scrollIntoView({behavior: 'smooth'})
                break;
        }
    })
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}