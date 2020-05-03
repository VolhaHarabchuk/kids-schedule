const MAX_UPCOMING_ACTIONS = 3;

const actions = [
    {
        title: 'Wake up',
        time: { hour: 7, minute: 20 },
        icon: 'far fa-clock'
    },
    {
        title: 'Breakfast',
        time: { hour: 7, minute: 50 },
        icon: 'fas fa-coffee'
    },
    {
        title: 'Brush teeth',
        time: { hour: 8, minute: 20 },
        icon: 'far fa-tooth'
    },
    {
        title: 'Go to school',
        time: { hour: 8, minute: 30 },
        icon: 'fas fa-graduation-cap'
    },
    {
        title: 'Homework',
        time: { hour: 15, minute: 0 },
        icon: 'fas fa-book-reader'
    },
    {
        title: 'Cartoons',
        time: { hour: 17, minute: 10 },
        icon: 'fas fa-tv'
    },
    {
        title: 'Dinner',
        time: { hour: 17, minute: 30 },
        icon: 'fas fa-utensils'
    },
    {
        title: 'Brush teeth',
        time: { hour: 20, minute: 30 },
        icon: 'far fa-tooth'
    },
    {
        title: 'Reading in bed',
        time: { hour: 20, minute: 40 },
        icon: 'fas fa-book-reader'
    },
    {
        title: 'Good night',
        time: { hour: 21, minute: 30 },
        icon: 'far fa-moon'
    },
];

function renderSchedule (elementId, actions, currentTime) {
    const containerEl = document.getElementById(elementId);
    containerEl.innerHTML = '';
    let shownItems = 0;
    for (let i=0; i < actions.length; i++) {
        if (isUpcomingAction(actions[i], currentTime)) {
            const actionEl = createActionElement(actions[i]);
            containerEl.appendChild(actionEl);
            shownItems += 1;
        }
        if (shownItems >= MAX_UPCOMING_ACTIONS) {
            break;
        }
    }
}

function isUpcomingAction(action, currentTime) {
    if (action.time.hour > currentTime.getHours() ||  
        (action.time.hour === currentTime.getHours() && action.time.minute >= currentTime.getMinutes())){
        return true;
    }
    return false;
}

function timeString (action) {
    return `${action.time.hour}:${action.time.minute}`;
}

function renderTime(elementId, currentTime) {
    const containerEl = document.getElementById(elementId);
    containerEl.innerText = `${currentTime.getHours()}:${currentTime.getMinutes()}`;
}

function createActionElement (action) {
    const div = document.createElement('div');
    const time = timeString(action);
    div.innerHTML = `
        <i class="${action.icon}"></i>
        <label>${action.title} ${time}</label>
    `;
    return div;
}