window.addEventListener("DOMContentLoaded", function () {
  let heading = document.querySelector("#first");
  heading.addEventListener("click", function () {
    //   alert("Annoying alert");
    heading.innerText = "Bye Bye";
    let li = document.querySelector("#item1");
    li.innerText = "Hello Keyin";
    let pic = document.querySelector("#pic1");
    pic.src = "./images/image3.jpg";

    let newPic = document.createElement("img");
    newPic.src = "./images/image2.jpg";
    newPic.alt = "SOme tree";
    newPic.width = "300";
    document.querySelector("#d1").appendChild(newPic);
  });

  let image = this.document.querySelector("#pic1");
  image.addEventListener("click", function () {
    image.src = "./images/image3.jpg";
  });

  let image2 = this.document.querySelector("#pic2");

  image2.addEventListener("click", handlePic);

  function handlePic() {
    alert("annyoing alert");
  }
});
