let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".anime-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });
  //e này sử dụng JavaScript và thư viện Swiper để thiết lập slider trên trang web.



/*`let menu = document.querySelector('#menu-bars');`: lấy DOM element với id là `menu-bars` và gán vào biến `menu`.



`let navbar = document.querySelector('.navbar');`: lấy DOM element với class là `navbar` và gán vào biến `navbar`.



`menu.onclick`: tự động thực hiện khi `menu` được click.



`menu.classList.toggle('fa-times')`: thêm hoặc xóa class `fa-times` cho `menu` khi `menu` được click để đổi icon`menu`.



`navbar.classList.toggle('active')`: thêm hoặc xóa class `active` cho `navbar` khi `menu` được click để hiển thị hoặc ẩn `navbar`.



Tạo một swiper mới cho slider với class là `.home-slider`


`spaceBetween`: Khoảng cách giữa các slide là 30px.
`centeredSlides`: Các slide sẽ được điều chỉnh về giữa
`autoplay`: Tự động chuyển slide với thời gian mỗi slide là 7500ms.
`pagination`: Thiết lập thanh trượt phân trang cho swiper, có thể click vào thanh trượt để chuyển slide.
`loop`: Tự động lặp lại swiper.


Tạo một swiper mới cho slider với class là `.anime-slider`


`slidesPerView`: Số lượng slide được hiển thị trên mỗi lần chuyển đến.
`spaceBetween`: Khoảng cách giữa các slide là 30px.
`centeredSlides`: Các slide sẽ được điều chỉnh về giữa
`autoplay`: Tự động chuyển slide với thời gian mỗi slide là 4500ms.
`pagination`: Thiết lập thanh trượt phân trang cho swiper, có thể click vào thanh trượt để chuyển slide.
`loop`: Tự động lặp lại swiper.*/


  var swiper = new Swiper(".action-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  
  var swiper = new Swiper(".child-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  var swiper = new Swiper(".family-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });
  //dang nhap
  // validation form login
