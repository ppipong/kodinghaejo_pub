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
          document.querySelector(".main-nav-list-menu").classList.remove("active");
          document.querySelector(".main-nav-list-menu").style.zIndex = 0;
        }
      });
    }
    /* // header : 드롭다운 -- 타임리프 처리시 해더 영역에 복붙 */
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

// popbanner : 플로팅 팝업 배너 
fetch("/include/popBanner.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("#pop_banner").innerHTML = data;
  });

/* 스크롤 최상단 이동 버튼 */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* popbanner-close : pop-info x 버튼 이벤트 */
function popCloseEvent() {
  const closeBtn = document.querySelector('.xi-close');
  const popBannerImg = document.querySelector('.banner-img');
  
  closeBtn.addEventListener('click', function() {
    popBannerImg.style.display = 'none';
    closeBtn.parentElement.style.display = 'none';
  });
}

// 쿠키를 설정 함수 : setcookie_expires("쿠키명", "쿠키 값", 날짜일 수);
function setcookie_expires(name, value, expiredays) {
  let todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays); 
  document.cookie = name + '=' + encodeURIComponent(value) + '; path=/; expires=' + todayDate.toUTCString() + ';';
}

// 쿠키 값을 가져오는 함수
function getCookie(name) {
  let cookieArr = document.cookie.split(';');
  for (let i = 0; i < cookieArr.length; i++) {
      let cookiePair = cookieArr[i].split('=');
      if (cookiePair[0].trim() === name) {
          return decodeURIComponent(cookiePair[1]);
      }
  }
  return null;
}

// popbanner-close : pop-info 하루만 안보기
function dontShowAgain() {
  setcookie_expires("myCookie", "true", 1); 
  alert("광고를 하루 동안 보지 않습니다.");
  document.querySelector('.banner-img').style.display = 'none';
  document.querySelector('.pop-info').style.display = 'none';
}

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

/* 공통 - 페이지 네이션 : on class 이펙트 */
function pagenation() {
  const paginateContainers = document.querySelectorAll('.paginate');
  paginateContainers.forEach(container => {
    // 각 페이지네이션 컨테이너에서 페이지 번호 링크들만 선택
    const pageLinks = container.querySelectorAll('a');

    pageLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // 'on' 클래스를 제거하는 부분 (현재 페이지네이션에서만 처리)
        pageLinks.forEach(link => link.classList.remove('on'));

        // 클릭한 페이지 링크에 'on' 클래스를 추가
        this.classList.add('on');
      });
    });
  });

}

/* 문제 /problemCollect : 드롭다운 메뉴 */
function listDropdown() {
  let itemli = document.querySelectorAll('.toggle_btn');
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

/* 랭크 /rank : 탭 */
function toggleTab() {
  const btnMenu = document.querySelectorAll('.rank_tab_group li');
  const menuContent = document.querySelectorAll('.content-rank-main .content-rank-toggle-menu-item')
  let menuCount = '';
  
  for(let i = 0; i < btnMenu.length; i++){
    btnMenu[i].querySelector('.btn_tab_menu').addEventListener('click', function(e){
      e.preventDefault();
      for(let j = 0; j < btnMenu.length; j++){
        // 나머지 버튼 클래스 제거
        btnMenu[j].classList.remove('on');
        // 나머지 컨텐츠 display:none 처리
        menuContent[j].style.display = 'none';
      }
      // 버튼 관련 이벤트
      this.parentNode.classList.add('on');
      // 버튼 클릭시 컨텐츠 전환
      menuCount = this.getAttribute('href');
      document.querySelector(menuCount).style.display = 'block';
    });
  }

}

/* 채팅 사이드바 /chatView  */
function chatViewSideBar() {
  const sideBtn = document.querySelectorAll('.chat-nav-side-btn');
  const sideArea = document.querySelector('.chat-nav-side');
  
  sideBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (sideArea.style.display === 'none') {
        sideArea.style.display = 'block';
      } else {
        sideArea.style.display = 'none'; 
      }
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

// 벨 변경 --> 함수랑 같이 묶어서 
document.addEventListener('click', function(event) {
  if (event.target.matches('.xi-bell-o') || event.target.matches('.xi-bell')) {
    event.target.classList.toggle("xi-bell-o");
    event.target.classList.toggle("xi-bell");
  }
});