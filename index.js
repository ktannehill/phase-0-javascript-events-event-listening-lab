// function addingEventListener() {
//     const input = document.getElementById('button');

//     function clickAlert() {
//         alert('I was clicked!');
//     }

//     input.addEventListener('click', clickAlert);
// }

// addingEventListener();



// phase 1 take 2

const input = document.getElementById('button');

const addingEventListener = function() {
    input.addEventListener('click', clickAlert);
}

function clickAlert() {
  alert('I was clicked!');
}

