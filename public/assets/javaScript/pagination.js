const ulTag = document.querySelector(".pag-list");
const allMovie = document.querySelector(".allMovie");
let nextBtnValue = "";
const productBox = document.querySelector(".totalPagebox");
let totalPage = +productBox.dataset.totalpage;
const currentPagebox = document.querySelector(".currentPagebox");
let currentPage = +currentPagebox.dataset.currentpage;
function element(page) {
  let liTag = "";
  let beforePages = page - 1;
  let afterPages = page + 1;
  let activeLi;

  if (page > 2) {
    liTag += `<li class="numb" onclick = "element(1)"><span>
      <a class="text-decoration-none text-dark d-block w-100 h-100" href=/admin/applications?page=1>1</a>
    </span></li>`;
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  // before

  if (page == totalPage) {
    beforePages = beforePages - 2;
  } else if (page == totalPage - 1) {
    beforePages = beforePages - 1;
  }

  // after

  if (page == 1) {
    afterPages = afterPages + 2;
  } else if (page == 2) {
    afterPages = afterPages + 1;
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength > totalPage) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }

    if (page == pageLength) {
      activeLi = "actived";
    } else {
      activeLi = "";
    }

    liTag += `<li class="numb ${activeLi}" onclick = "element(${pageLength})"><span><a class="text-decoration-none text-dark d-block w-100 h-100" href=/admin/applications?page=${pageLength}>
    ${pageLength}</a></span></li>`;
  }
  if (page < totalPage - 1) {
    if (page < totalPage - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="numb" onclick = "element(${totalPage})"><span><a class="text-decoration-none text-dark d-block w-100 h-100" href=/admin/applications?page=${totalPage}>
    ${totalPage}</a></span></li>`;
  }

  ulTag.innerHTML = liTag;
}

element(currentPage);

let listBtn = document.querySelector(".numb");

// ulTag.addEventListener('click', (e) => {
//     let a = e.target.textContent;
//     paginationFor(a)
// })