const actions = [
    {
        title: 'Wake up',
        time: { hour: 7, minute: 20 },
        icon: ''
    },
    {
        title: 'Breakfast',
        time: { hour: 7, minute: 50 },
        icon: ''
    },
    {
        title: 'Brush teeth',
        time: { hour: 8, minute: 20 },
        icon: ''
    },
    {
        title: 'Go to school',
        time: { hour: 8, minute: 30 },
        icon: ''
    },
    {
        title: 'Homework',
        time: { hour: 15, minute: 0 },
        icon: ''
    },
    {
        title: 'Cartoons',
        time: { hour: 17, minute: 10 },
        icon: ''
    },
    {
        title: 'Dinner',
        time: { hour: 17, minute: 30 },
        icon: ''
    },
    {
        title: 'Brush teeth',
        time: { hour: 20, minute: 30 },
        icon: ''
    },
    {
        title: 'Reading in bed',
        time: { hour: 20, minute: 40 },
        icon: ''
    },
    {
        title: 'Good night',
        time: { hour: 21, minute: 30 },
        icon: ''
    },
];

function renderSchedule (elementId, actions, currentTime) {
    const containerEl = document.getElementById(elementId);
    for (let i=0; i < actions.length; i++) {
        const actionEl = createActionElement(actions[i]);
        containerEl.appendChild(actionEl);
    }
}

function timeString (action) {
    return `${action.time.hour}:${action.time.minute}`;
}

function createActionElement (action) {
    const div = document.createElement('div');
    const time = timeString(action);
    div.innerHTML = `
        <i class="${action.icon}" />
        <label>${action.title} ${time}</label>
    `;
    return div;
}