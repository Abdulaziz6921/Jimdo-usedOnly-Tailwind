// Opening and Closing Slider Functions____________

let opens = false;
let right = document.querySelector("#right_slider");
const Open = () => {
  if (opens === false) {
    right.className = `flex flex-col justify-between duration-[0.3s] z-20 translate-x-0 absolute left-0 top-0 w-full h-[100vh] bg-white`;
    right.parentElement.parentElement.parentElement.className = `overflow-hidden`;
  } else {
    right.className = `translate-x-[700px] `;
    right.parentElement.parentElement.parentElement.className = `overflow-auto`;
    opens = false;
  }
};

const Close = () => {
  right.className = `translate-x-[700px] absolute`;
  right.parentElement.parentElement.parentElement.className = `overflow-auto`;
  opens = false;
};
