document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tabs__btn").forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll(".tabs-item").forEach(function (tabContent) {
        tabContent.classList.remove("tabs-item-active");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("tabs-item-active");
    });
  });
});

history.pushState("", document.title, window.location.pathname);

const element = document.querySelector("select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "  ",
});

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

new JustValidate(".map__form", {
  colorWrong: "#D11616",
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
  },

  messages: {
    name: "Недопустимый формат",
    tel: "Недопустимый формат",
  },
});

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [48.872185073737896, 2.3542025423278603],
    zoom: 15,
  });
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [48.872185073737896, 2.3542025423278603],
    },
  });

  var myPlacemark = new ymaps.Placemark(
    [48.872185073737896, 2.3542025423278603],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/location.svg",
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable(["scrollZoom"]);
}

tippy("#myButton1", {
  theme: "tomato",
  content: "Пример современных тенденций - современная методология разработки",
});

tippy("#myButton2", {
  theme: "tomato",
  content:
    "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции",
});

tippy("#myButton3", {
  theme: "tomato",
  content: "В стремлении повысить качество",
});

document.querySelectorAll(".dropbtn").forEach((item) => {
  item.addEventListener("click", function () {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".dropdown");

    document.querySelectorAll(".dropbtn").forEach((el) => {
      if (el != btn) {
        el.classList.remove("active-btn");
      }
    });

    document.querySelectorAll(".dropdown").forEach((el) => {
      if (el != dropdown) {
        el.classList.remove("active-dropdown");
      }
    });
    dropdown.classList.toggle("active-dropdown");
    btn.classList.toggle("active-btn");
  });
});

document.addEventListener("click", function (e) {
  let target = e.target;
  if (!target.closest(".navigation-bottom__link")) {
    document.querySelectorAll(".dropdown").forEach((el) => {
      el.classList.remove("active-dropdown");
    });
    document.querySelectorAll(".dropbtn").forEach((el) => {
      el.classList.remove("active-btn");
    });
  }
});

function createHoverImage() {
  document.querySelectorAll("[data-hover-src]").forEach((img) => {
    const src = img.getAttribute("src");
    const srcH = img.getAttribute("data-hover-src");

    img.addEventListener("mouseover", () => {
      img.src = srcH;
    });
    img.addEventListener("mouseout", () => {
      img.src = src;
    });
  });
}

createHoverImage();
