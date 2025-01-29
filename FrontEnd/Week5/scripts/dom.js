window.addEventListener("DOMContentLoaded", function () {
  let body = this.document.body;

  body.addEventListener("mousemove", function (e) {
    // console.log("body clicked");

    // console.log(e.clientX, e.clientY);

    document.querySelector("#xPos").innerText = `${e.clientX}`;

    document.querySelector("#yPos").innerText = e.clientY;

    e.stopPropagation();
  });

  let cat = this.document.querySelector("#cat");
  cat.addEventListener("click", function (evt) {
    console.log("cat clicked");
    console.log(evt);
    evt.stopPropagation();
  });
});
