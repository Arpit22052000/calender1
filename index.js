document.addEventListener("DOMContentLoaded", function () {
    let currentDate = moment().format("llll");
    document.getElementById("currentDate").innerHTML = currentDate;

});




let currentDay = moment('2024-12-14').date();

const date = document.querySelector('#currentDate');

date.addEventListener("click", function () {
    let new_type = document.getElementById("currentDate").innerHTML = moment().format('l');
});

//setting the selected day to null
let selectedDay = null;

let day = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < day.length; i++) {
    const btn = document.getElementById(`${day[i]}`);
    btn.addEventListener('click', function onClick() {
        // Highlighting the selected day
        // if the button is not clicked then it will be null and no styling will be given
        if (selectedDay !== null) {
            const prevBtn = document.getElementById(`${selectedDay}`);
            prevBtn.style.backgroundColor = '';
            prevBtn.style.color = '';
        }
        // for the selected i means selected index that will styled
        selectedDay = day[i];
        btn.style.backgroundColor = 'rgb(90, 90, 248)';
        btn.style.color = 'white';


    });
}


let firstDay = moment().startOf('week');
const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

function updateDays() {
    for (let i = 0; i < days.length; i++) {
        const day = days[i];
        const index = firstDay.clone().add(i, "days").format("D");
        document.querySelector(`.${day}`).innerText = index;
    }
}

updateDays()

// button previous 
const prev = document.querySelector('.previous');
prev.addEventListener("click", function () {
    firstDay = firstDay.subtract(7, 'days');
    updateDays();
});

// next button
const next1 = document.querySelector('.next');
next1.addEventListener("click", function () {
    firstDay = firstDay.add(7, 'days');
    updateDays();
});