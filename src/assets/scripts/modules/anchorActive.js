export default function anchorActive() {
  const links = document.querySelectorAll(".nav-blog__link");
  const articles = document.querySelectorAll(".blog__article");

  let positionArticles = [];

  window.addEventListener("load", init);

  function init() {
    positionArticles = setPositionArticles(articles);

    window.addEventListener("resize", () => {
      positionArticles = setPositionArticles(articles);
    });

    window.addEventListener("scroll", scrollActiveClass);
  }

  function scrollActiveClass() {
    positionArticles.forEach((el, i) => {
      let currentEl = links[i];

      if (isVisible(el, currentEl)) {
        removeActiveClass();
        currentEl.classList.add("is-active");
      }
    });
  }

  function removeActiveClass() {
    for (const iter of links) {
      iter.classList.remove("is-active");
    }
  }

  function isVisible(element, current) {
    let scroll = window.pageYOffset;

    return scroll >= element.top - 5 && scroll < element.bottom;
  }

  function setPositionArticles(elements) {
    let position = [];
    Array.from(elements).forEach((item, i) => {
      position[i] = {};
      position[i].item = item;
      position[i].top = item.getBoundingClientRect().top + window.pageYOffset;
      position[i].bottom =
        item.getBoundingClientRect().bottom + window.pageYOffset;
    });
    return position;
  }
}
