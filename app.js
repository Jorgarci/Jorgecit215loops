let writerEle = document.body.querySelector(".box");
let animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
let randomEle = document.querySelector(".random");

for (let i=0; i<animals.length; i++) {
    let ele = document.createElement("div");
    if (animals[i] === "dog") {
        ele.innerHTML = "borf borf";
    }else  if (animals[i]==="cat") {
        ele.innerHTML = "I am a cat";
    }else{
        ele.innerHTML="I'm an animal";
    }
    writerEle.appendChild(ele);
}

animals.sort(() => Math.random() - 0.5)

randomEle.addEventListener("click", function (){
    writerEle.innerHTML = "";
    for (let i=0; i<animals.length; i++) {
        let ele = document.createElement("div");
        if (animals[i] === "dog") {
            ele.innerHTML = "borf borf";
        }else  if (animals[i]==="cat") {
            ele.innerHTML = "I am a cat";
        }else{
            ele.innerHTML="I'm an animal";
        }
        writerEle.appendChild(ele);
    } }
);

