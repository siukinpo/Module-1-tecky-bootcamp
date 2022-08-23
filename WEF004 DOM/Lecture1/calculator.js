const display = document.querySelector("div#display");
// const one = document.querySelector("button#but1");
// one.addEventListener("click", function (event) {
//   //console.log(event);
//   display.innerHTML = "1";
// });
let left = undefined;
let ops = undefined;
// let shouldReset = false;

function calculation(left, ops, right) {
  switch (ops) {
    case "add":
      return left + right;
    case "sub":
      return left - right;
    case "multiple":
      return left * right;
    case "divide":
      return left / right;
    default:
      return 0;
  }
}

function setupCalculatorFunc(button) {
  const id = button.id;
  switch (id) {
    case "add":
      button.addEventListener("click", function (event) {
        if (!left /*false*/) {
          left = parseInt(display.innerHTML);
          display.innerHTML = "";
          ops = id;
        }
      });
      //const left = parseInt(display.innerHTML);
      break;
    case "sub":
      button.addEventListener("click", function (event) {
        if (!left /*false*/) {
          left = parseInt(display.innerHTML);
          display.innerHTML = "";
          ops = id;
        }
      });
      break;
    case "multiple":
      button.addEventListener("click", function (event) {
        if (!left /*false*/) {
          left = parseInt(display.innerHTML);
          display.innerHTML = "";
          ops = id;
        }
      });
      break;
    case "divide":
      button.addEventListener("click", function (event) {
        if (!left /*false*/) {
          left = parseInt(display.innerHTML);
          display.innerHTML = "";
          ops = id;
        }
      });
      break;
    case "reset":
      button.addEventListener("click", function (event) {
        display.innerHTML = "";
        left = undefined;
      });
      break;
    case "result":
      button.addEventListener("click", function (event) {
        const right = parseInt(display.innerHTML);
        const result = calculation(left, ops, right);
        switch (ops) {
          case "add":
            display.innerHTML = `${left} + ${right} = ${result}`;
            shouldReset = true;
            ops = id;
            break;
          case "sub":
            display.innerHTML = `${left} - ${right} = ${result}`;
            shouldReset = true;
            ops = id;
            break;
          case "multiple":
            display.innerHTML = `${left} * ${right} = ${result}`;
            shouldReset = true;
            ops = id;
            break;
          case "divide":
            display.innerHTML = `${left} / ${right} = ${result}`;
            shouldReset = true;
            ops = id;
            break;
          default:
            break;
        }
      });
      break;
    default:
      break;
  }
}

const buttons = document.querySelectorAll("div#panelContainer > button");
console.log(buttons);
for (let button of buttons) {
  const btnID = button.id;
  const id = btnID.replace("but", "");
  console.log(id);

  if (isNaN(id)) {
    setupCalculatorFunc(button);
  } else {
    button.addEventListener("click", function (event) {
      //   if (shouldReset) {
      //     display.innerHTML = id;
      //     shouldReset = false;
      //   } else {
      display.innerHTML = display.innerHTML + id;
    });
  }
}
