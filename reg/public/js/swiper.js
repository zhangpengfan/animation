var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      if (index < 5) {  // 前四张图片使用与原代码相同的图片
        return '<span class="' + className + '"><img src="./images/guidaodong' + (index+1) + '.jpg" /></span>';
      } else if (index == 5) {  // 第5张图片输出鬼刀两个字
        return '<span class="' + className + '">鬼刀</span>';
      }
      // 如果 index > 5，返回一个空 span 标签
      return '<span class="' + className + '"></span>';
    },
  },
  autoplay: {
    delay: 2000, // 设置间隔时间为 2s
    disableOnInteraction: false // 用户操作后不停止自动切换
  }
});