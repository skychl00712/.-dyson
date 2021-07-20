
// 헤더 GNB

$(function(){
  $('header > nav > ul > li').hover(function(){
    $(this)
    .find('.depth2')
    .stop()
    .fadeIn();
  },
  function(){
    $(this)
    .find('.depth2')
    .stop()
    .fadeOut();
  }
  );
});

















// 겔러리
 $(function () {
    var img_width = 1034; // 이미지 폭
    var img_num = 0; // 이미지 번호
    var pos = -1034 * img_num; // 공식
  

    function changeGallery(imgNum) {
      pos = -1034 * imgNum; // 공식
      // 1.CSS를 사용하는 경우
      $('.gallery').css('left', pos);
    }

    // 자동재생 기능
    setInterval(function () {
      img_num = img_num + 1; // 다음 이미지 번호
      // 마지막 이미지면 처음 이미지로
      if (img_num > 1) { img_num = 0; }
      changeGallery(img_num);
    }, 7000);
  })