// console.log("Yes, it is working!!!");
// console.log(window);
// console.log(document);

//first grab the element which you want to change

// const elm = document.getElementById("first");

// const elm = document.getElementsByClassName("info1");

// const elm = document.getElementsByTagName("div");

// const elm = document.querySelector("p");   // gets the first element while looking from top to bottom

// const elm = document.querySelectorAll("p");   // gets all element while looking from top to bottom

// const elm = document.querySelector("#first");

// console.log(elm.innerText);

// const str = elm.innerText;
// console.log(str);

// const nameElm = document.getElementsByClassName("display");
// console.log(nameElm);

// const nameElm = document.querySelector(".display");

// nameElm.innerText = "ARM";
// nameElm.innerHTML = "<h2>ARM</h2>";
// const val = nameElm.innerHTML;
// const val1 = nameElm.innerText;
// console.log(val);
// console.log(val1);
// console.log(nameElm.innerHTML);

// ==========================
// const elm = document.getElementsByTagName("a")[0];
// console.log(elm);

// const val = elm.getAttribute("href");
// console.log(val);

// // elm.setAttribute("href", "https://www.google.com");

// elm.removeAttribute("href");
// ==========================
// ==========================

///////////////////////////
//Style

// const elm = document.getElementsByTagName("a")[0];
// console.log(elm);

// elm.style.color = "red";
// elm.style.fontSize = "4rem";
// elm.style.textDecoration = "none";
// ==========================
// ==========================

// /// class name

// const messageElm = document.querySelector(".message");
// // console.log(messageElm);

// messageElm.classList.add("danger");
// messageElm.classList.add("sjdgfjlk");
// messageElm.classList.remove("message");
// console.log(messageElm.classList);

// messageElm.classList.toggle("server");
// console.log(messageElm.classList);

// messageElm.classList.toggle("server");
// console.log(messageElm.classList);

// const checkUsingClassList = messageElm.classList.contains("dflk");
// console.log(checkUsingClassList);
// ==========================
// ==========================

//adding the elements using JS
// const messageElm = document.querySelector(".message");
// console.log(messageElm);

// const addElem = document.createElement("div");
// addElem.innerHTML = "Hello is the message child";
// // messageElm.append(addElem);
// messageElm.appendChild(addElem);
// addElem.style.color = "red";
// messageElm.remove(addElem);

// ==========================
// ==========================

// const displayelem = document.querySelector(".display");
// const decorate = () => {
//   displayelem.style.color = "red";
//   displayelem.style.fontSize = "4rem";
//   displayelem.style.background = "grey";
// };
// // decorate();

// displayelem.addEventListener("click", decorate);
// ==========================
// or
//call back function
// ==========================
// displayelem.addEventListener("click", () => {
//   displayelem.style.color = "red";
//   displayelem.style.fontSize = "4rem";
//   displayelem.style.background = "grey";
// });
// decorate();

// //////////////////////////////

const elem = document.querySelector(".display");

// const changedElem = document.querySelector(".changed");

// elem.style.fontSize = "4rem";
// elem.style.background = "green";
// elem.style.padding = "0 0 0 20px";

// console.log(elem);

elem.addEventListener("click", () => {
  //   elem.style.background = elem.style.background !== "green" ? "green" : "none";
  elem.classList.toggle("changed");
  console.log("clicked");
});
