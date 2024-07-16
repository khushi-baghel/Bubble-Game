let hitVal;
let score = 0;
function makeBubble() {
    let clutter = "";
    for (let i=1; i<=133; i++) {
        let rdm = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rdm}</div>`;
    };

    let pbtm = document.querySelector(".pbtm");
    pbtm.innerHTML = clutter;
}
function decreaseTime() {
    let timmer = document.querySelector("#timmer");
    let time = 60;
    let interval = setInterval(() => {
        if (time >= 0) {
            timmer.innerText = time;
            time--;
        } else {
            clearInterval(interval);
            document.querySelector(".pbtm").innerHTML = `<h1>Game Ended Your Score is:${score} <br>
                <button id="btn"> Restart</button>`;
                let btn = document.querySelector("button");
                let heading = document.querySelector("h1");
                heading.classList.add("heading");
                btn.classList.add("btn");
                btn.addEventListener("click", () => {
                    makeBubble();
                    decreaseTime();
                    getHit();
                    getTarget();
                })
        }
    }, 1000);
}
function getHit() {
    let hit = document.querySelector("#hit");
    hitVal = Math.floor(Math.random() * 10);
    hit.innerText = hitVal;
}
function getTarget() {
    let pbtm = document.querySelector(".pbtm");
    pbtm.addEventListener("click", (details) => {
    let target = Number(details.target.innerText);
    if (target == hitVal) {
        increaseScore();
        makeBubble();
        getHit();
    }
    })
}
function increaseScore() {
    let sc = document.querySelector("#score");
    score += 10;
    sc.innerText = score;
}
makeBubble();
decreaseTime();
getHit();
getTarget();

