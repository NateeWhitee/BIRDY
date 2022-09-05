let operating_hours = ['CLOSED','10am - 5pm', '10am - 5pm', '10am - 5pm', '10am - 5pm', '10am - 5pm', 'CLOSED'];
for (i = 0; i < operating_hours.length; i++) {
    document.querySelector(`#operating_hours${i}`).innerHTML = `${operating_hours[i]}`
}

document.addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        switch (e.target.id) {
            case 'Home_Button':
                document.querySelector('#Home_Article').scrollIntoView({ behavior: 'smooth'})
                break;
            case 'Hours_Button':
                document.querySelector('#Hours_Article').scrollIntoView({ behavior: 'smooth'})
                break;
            case 'Quotes_Button':
                document.querySelector('#Quotes_Article').scrollIntoView({ behavior: 'smooth'})
                break;
            case 'Mission_Button':
                document.querySelector('#Mission_Article').scrollIntoView({ behavior: 'smooth'})
                break;
            case 'FAQ_Button':
                document.querySelector('#FAQ_Article').scrollIntoView({ behavior: 'smooth'})
                break;
        }
    }
    if (e.target.id == 'Scroll_To_Top_Button') {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
});

document.addEventListener('scroll', (e) => {
    let scrollY = window.scrollY;
    if (scrollY > 100) {
        document.querySelector('#Scroll_To_Top_Button').style.display = 'block';
    } else {
        document.querySelector('#Scroll_To_Top_Button').style.display = 'none';
    }
});