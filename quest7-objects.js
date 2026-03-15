const box = document.querySelector(".box");
box.style.backgroundColor = "tomato";
box.style.fontSize = "24px";
box.style.padding = "20px";
box.classList.add("highlight");
box.classList.remove("hidden");
box.classList.toggle("active");
console.log(box);
