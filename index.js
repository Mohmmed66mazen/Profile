const title = document.getElementById("title"); // just for testing
const bgTitle = document.getElementById("landingPage");
const names = document.getElementById("TextSvg");

// return number from 0 to 1 in postion befor next element
// to work this function currctle the element must have 200vh height
function postion() {
  return bgTitle.getBoundingClientRect().y / -window.innerHeight;
}

// to calculate background animtion from white to black when postion() is 85% and stope in 100%
function MathBlackColor() {
  return ((postion() * 100 - 60) * 100) / 40;
}

function MathOpacity() {
  return 0.6 * postion() + 0.4;
}

const ScrollAnmation = () => {
  names.style.opacity = MathOpacity();
  names.style.transform = `scale(${postion() * 24 + 1})`;
  if (postion() > 0.6) {
    names.style.background = `hsl(0 0% ${100 - MathBlackColor()}%)`;
  } else {
    names.style.background = "white";
  }
};

window.addEventListener("scroll", () => {
  if (postion() <= 1) {
    ScrollAnmation();
  } else {
    // style end animation
    names.style.background = "black";
    names.style.opacity = 1;
    names.style.transform = "scale(25)";
  }
});
