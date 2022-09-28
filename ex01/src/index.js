const btns = document.querySelectorAll(".el");
let text;
const space = document.querySelector(".el-space");
const shift = document.querySelector(".el-shift");
const caps = document.querySelector(".el-caps");
const backSpace = document.querySelector(".el-back");
const ok = document.querySelector(".el-ok");

let shiftStatus = false;

if (document.body.contains(document.querySelector("textarea"))) {
    text = document.querySelector("textarea");
}
if (document.body.contains(document.querySelector("input"))) {
    text = document.querySelector("input");
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (shiftStatus === true) {
            text.append(btn.innerText);
            lowerCase();
            shift.classList.remove("opac");
            shiftStatus = false;
        } else {
            text.append(btn.innerText);
        }
    });
});

btns.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        btn.classList.add("opac");
    });
});

btns.forEach((btn) => {
    btn.addEventListener("mouseleave", () => {
        btn.classList.remove("opac");
    });
});

space.addEventListener("click", () => {
    text.append(" ");
});

shift.addEventListener("click", () => {
    btns.forEach((btn) => {
        btn.classList.add("uppercase");
        shift.classList.add("opac");
        shiftStatus = true;
    });
});

caps.addEventListener("click", () => {
    btns.forEach((btn) => {
        btn.classList.toggle("uppercase");
    });
});

backSpace.addEventListener("click", () => {
    let areaText = text.innerHTML;
    let newText = areaText.slice(0, -1);
    text.innerHTML = "";
    text.append(newText);
});

ok.addEventListener("click", () => {
    text.append("\n");
});

submit.addEventListener("click", () => {
    alert(text.innerHTML);
    text.innerHTML = "";
});

function lowerCase() {
    btns.forEach((btn) => {
        btn.classList.remove("uppercase");
    });
}
