let menu_state = 'open';
const NAV_OPTIONS = document.getElementsByClassName('menu_option')

document.querySelector("#menu_access_btn").addEventListener("click", function() {
    if (menu_state == 'open') {
        console.log('closing menu...')
        menu_state = 'closed';
        window.navigator.vibrate(10, 10, 10, 10, 10);
        document.getElementById('menu_access_btn').classList.remove('open_menu_icon');
        document.getElementById('menu_access_btn').classList.add('close_menu_icon');
        document.querySelector('main').classList.add('close_menu_main');
        document.querySelector('main').classList.remove('open_menu_main');
        for (option of NAV_OPTIONS) {
            option.classList.add('close_menu_buttons');
            option.classList.remove('open_menu_buttons');
        }
    } else {
        console.log('opening menu...')
        menu_state = 'open';
        window.navigator.vibrate(10, 10, 10, 10, 10);
        document.getElementById('menu_access_btn').classList.remove('close_menu_icon');
        document.getElementById('menu_access_btn').classList.add('open_menu_icon');
        document.querySelector('main').classList.add('open_menu_main');
        document.querySelector('main').classList.remove('close_menu_main');
        for (option of NAV_OPTIONS) {
            option.classList.add('open_menu_buttons');
            option.classList.remove('close_menu_buttons');
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
        window.navigator.vibrate(10, 10, 10);
    })
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    window.navigator.vibrate(10, 10, 10);
}