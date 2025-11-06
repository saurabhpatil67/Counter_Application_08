let count = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let elemetId = e.currentTarget.id;

    if (elemetId == "decrease") {
      count--;
    } else if (elemetId == "reset") {
      count = 0;
    } else {
      count++;
    }

    value.textContent = count;

    value.style.color = count > 0 ? "green" : 
                        count < 0 ? "red" : 
                        "#007bff";
  });
});

// -----------------------------------------------------------------------
// Logic Done By Me

// let count = 0;
// const mainValue = document.getElementById('value');
// const decreaseBtn = document.getElementById('decrease');
// const resetBtn = document.getElementById('reset');
// const increaseBtn = document.getElementById('increase');

// increaseBtn.addEventListener('click', () => {

//     let addValue = count += 1;
//     mainValue.textContent = addValue;

//     if (count >= 0) {
//         mainValue.style.color = 'green';
//     }
// });

// // resetBtn.addEventListener('click', () => {

// // });

// decreaseBtn.addEventListener('click', () => {

//     let addValue = count -= 1;
//     mainValue.textContent = addValue;

//     if (count < 0) {
//         mainValue.style.color = 'red';
//     }

// });
