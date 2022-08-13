const anchors = document.querySelectorAll("a[href^='#']");

const scrollToAnchor = (e) => {
  e.preventDefault();
  const href = e.target.href;
  const blockId = href.substring(href.indexOf("#") + 1);
  const neededBlock = document.getElementById(blockId);
  neededBlock.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};


anchors.forEach((el) => el.addEventListener("click", scrollToAnchor));
