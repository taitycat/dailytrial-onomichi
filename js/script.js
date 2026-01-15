jQuery(function () {
  jQuery(".header-drawer").on("click", function () {
    jQuery(".header-right").toggleClass("is-open");
  });
  jQuery(".header-right").on("click", function () {
    jQuery(".header-right").removeClass("is-open");
  });
});

// Q AND Aアコーディオン
jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if (jQuery(this).parent().hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
});

// 尾道ギャラリー
const gallerySwiper = new Swiper(".gallery-swiper", {
  loop: true,
  slidesPerView: 7,
  spaceBetween: 0,
  freeMode: true,
  speed: 4000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: false,
});

// スポット
const spotSwiper = new Swiper(".spot-swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 32,
  centeredSlides: false,

  navigation: {
    nextEl: ".spot-swiper-button-next",
    prevEl: ".spot-swiper-button-prev",
  },
  keyboard: { enabled: true },
});

$(function () {
  $(".js-modal-open").on("click", function (e) {
    const index = $(this).data("modal");

    const targetModal = $(".modal").eq(index);

    if (targetModal.length > 0) {
      targetModal.css("display", "flex").hide().fadeIn();

      $("body").css("overflow", "hidden");
    }
  });

  // 2. 閉じる処理（閉じるボタンをクリック）
  $(".js-modal-close").on("click", function (e) {
    e.preventDefault();
    $(".modal").fadeOut(function () {
      // アニメーションが終わったらスクロールを再開
      $("body").css("overflow", "auto");
    });
  });

  // 3. 背景（黒い部分）をクリックしても閉じるようにする
  $(".modal").on("click", function (e) {
    if (!$(e.target).closest(".modal-content, .modal-inner").length) {
      $(this).fadeOut(function () {
        $("body").css("overflow", "auto");
      });
    }
  });
});

const pagetopBtn = document.querySelector("#js-pagetop");

// 1. スクロールイベント：300px以上でボタンを表示
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    pagetopBtn.classList.add("is-show");
  } else {
    pagetopBtn.classList.remove("is-show");
  }
});

// 2. クリックイベント：最上部へスムーズに移動
pagetopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // これだけでアニメーション移動になります
  });
});
