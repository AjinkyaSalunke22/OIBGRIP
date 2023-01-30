const calculator = document.querySelector("#calculator");
    const buttons = document.querySelector("#buttons");
    const display = document.querySelector("#display");
    
    buttons.addEventListener("click", e => {
      if (e.target.tagName === "BUTTON") {
        const buttonValue = e.target.innerText;
        if (buttonValue === "C") {
          display.innerText = "0";
        } else if (buttonValue === "CE") {
          display.innerText = display.innerText.slice(0, -1);
        } else if (buttonValue === "=") {
          display.innerText = eval(display.innerText);
        } else {
          if (display.innerText === "0") {
            display.innerText = "";
          }
          display.innerText += buttonValue;
        }
      }
    });