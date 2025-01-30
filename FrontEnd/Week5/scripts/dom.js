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

  let currentCatIndex = 0;
  function nextImageUrl() {
    currentCatIndex++;
    if (currentCatIndex === cats.length - 1) {
      currentCatIndex = 0;
    }

    return cats[currentCatIndex];
  }
  cat.addEventListener("click", function (evt) {
    // console.log("cat clicked");
    // console.log(evt);
    cat.src = nextImageUrl();

    evt.stopPropagation();
  });

  let btn1 = this.document.querySelector("#btn1");

  btn1.addEventListener("click", function () {
    btn1.remove();
    cat.remove();

    let div = document.querySelector("#list");
    /* 
    <div id = "list">
    <ol>
    <li>url...cats file </li>
    ...

    ..
    </ol>
    </div>
    */

    let ol = document.createElement("ol");

    /* 
<li>url..,/li>
<li>...</ul>

    */
    let i = 0;
    cats.forEach(function (url) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.innerHTML = `Image- 0${i++}`;
      li.appendChild(a);

      ol.appendChild(li);
    });
    div.appendChild(ol);
  });
  // Timer functions...
  this.setInterval(function () {
    cat.src = nextImageUrl();
  }, 3000);

  this.setTimeout(function () {
    alert("5 seconds gone");
  }, 5000);
});

// these urls should be linked to themselves like when I click on them they should open the respective picture in a new tab....
