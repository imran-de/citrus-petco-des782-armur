// responsive card slider js
var splides = document.querySelectorAll(".cirtus_product_tabs_22");
if (splides.length) {
  for (var i = 0; i < splides.length; i++) {
    var splideElement = splides[i];
    var splideDefaultOptions = {
      rewind: true,
      type: "slide",
      autoplay: false,
      rewindSpeed: 500,
      speed: 500,
      pauseOnHover: true,
      perPage: 6,
      perMove: 2,
      width: "100%",
      breakpoints: {
        375: {
          perPage: 1,
        },
        576: {
          perPage: 2,
        },
        991: {
          perPage: 3,
        },
        992: {
          perPage: 3,
        },
        1024: {
          perPage: 6,
        },
        1200: {
          perPage: 6,
        },
      },
    };

    new Splide(splideElement, splideDefaultOptions).mount();
  }
}

/**-----------------------------------------
 * -------------------------------------------
 * -----------------------------------------------
 */

//for product tab switcher
filterProductShots("citrusPetIQ_dog");

function filterProductShots(c) {
  var x, i;
  x = document.getElementsByClassName("citrusPetIQfilterProductDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClassBestDog(x[i], "citrusTabshow");
    if (x[i].className.indexOf(c) > -1) AddClassDogBest(x[i], "citrusTabshow");
  }

  //   active tab class add
  const elemDog = document.getElementById("citrusPetIQ_dogTab");
  const elemCat = document.getElementById("citrusPetIQ_catTab");
  if (c === "citrusPetIQ_dog") {
    elemDog.className += " citrusPetIQ_product_tab_item_active";
    elemCat.classList.remove("citrusPetIQ_product_tab_item_active");
  } else if (c === "citrusPetIQ_cat") {
    console.log(elemCat);
    elemCat.className += " citrusPetIQ_product_tab_item_active";
    elemDog.classList.remove("citrusPetIQ_product_tab_item_active");
  }
}

function AddClassDogBest(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClassBestDog(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var productBtnContainer = document.getElementById("citrusPetIQ_productTabId");
var productBtns = productBtnContainer.getElementsByClassName(
  "citrusPetIQ_product_tab_item"
);
for (var i = 0; i < productBtns.length; i++) {
  productBtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName(
      "citrusPetIQ_product_tab_item_active"
    );
    current[0].className = current[0].className.replace(
      " citrusPetIQ_product_tab_item_active",
      ""
    );
    this.className += " citrusPetIQ_product_tab_item_active";
  });
}
//for product tab switcher

/**-----------------------------------------
 * -------------------------------------------
 * -----------------------------------------------
 */
