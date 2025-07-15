const hello = document.querySelector(".hello__div");
function hello__function() {
  hello.style.display = "none";
  setTimeout(function () {
    hello.style.display = "flex";
  }, 10);
}
