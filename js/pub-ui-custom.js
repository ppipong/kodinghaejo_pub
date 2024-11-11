/* pub-js */
fetch("/include/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("#header").innerHTML = data;

    /* header : 드롭다운 */
    if (document.querySelector(".main-navbar")) {
      document.addEventListener("mouseover", function (event) {
        if (
          event.target.closest(".main-list-item .nav-hover") ||
          event.target.closest(".main-nav-list-menu")
        ) {
          document.querySelector(".main-nav-list-menu").classList.add("active");
          document.querySelector(".main-nav-list-menu").style.zIndex = 1000;
        } else if (!event.target.closest(".main-navbar")) {
          document
            .querySelector(".main-nav-list-menu")
            .classList.remove("active");
          document.querySelector(".main-nav-list-menu").style.zIndex = 0;
        }
      });
    }
    /* // header : 드롭다운 */
  });

fetch("/include/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("#footer").innerHTML = data;
  });

// admin : nav
fetch("/page-admin/system.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("#system_menu").innerHTML = data;
  });

// mypageManu : nav
fetch("/page-member/mypage.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("#mypage_manu").innerHTML = data;
  });


// 로그인 쪽 모달 -- 나중 처리 
/* 
const loginView = (e) => {
  alert(e);
  const modalBackground = document.querySelector(".modal-background");
  if (e == 'open') {
    modalBackground.style.display = 'block';
    alert(e);
  }
  if (e == 'close') {
    modalBackground.style.display = 'none';
    alert(e);
  }
}
const loginChk = () => {};
*/

/* 문제 /problemCollect : 드롭다운 */
const rank_tab = document.getElementById('#rank_tab');
console.log(rank_tab);

function listDropdown() {
  const itemli = document.querySelectorAll('.toggle_btn');
  // const innerArea = document.querySelector('.list-box-content');
  
  itemli.forEach(function (item) {
    item.addEventListener('click', function () {
      // 현재 클릭한 요소에 'on' 클래스 토글
      this.classList.toggle('on');
  
      // 다른 요소들에서 'on' 클래스 제거
      itemli.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove('on');
        }
      });
    });
  });
}

document.addEventListener('click', function(event) {
  if (event.target.matches('.xi-bookmark-o') || event.target.matches('.xi-bookmark')) {
    event.target.classList.toggle("xi-bookmark-o");
    event.target.classList.toggle("xi-bookmark");
  }
});

document.addEventListener('click', function(event) {
  if (event.target.matches('.xi-heart-o') || event.target.matches('.xi-heart')) {
    event.target.classList.toggle("xi-heart-o");
    event.target.classList.toggle("xi-heart");
  }
});
