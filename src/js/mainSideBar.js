const $foldBtn = document.querySelector(".fold-btn");
const $main = document.querySelector("main");

function toggleSideBar() {
  const $sideBar = document.querySelector(".side-bar");
  const $resultTable = $main.querySelector(".sec-result table");
  //추가코드
  const $resultSection = $main.querySelector(".sec-result");

  $sideBar.classList.toggle("foldActive");
  $main.classList.toggle("foldActive-wrap");
  $resultTable.classList.toggle("foldActive-wrap");
  $resultSection.classList.toggle("stretch");
  $foldBtn.classList.toggle("fold-btn-toggle");
}

$foldBtn.addEventListener("click", toggleSideBar);
