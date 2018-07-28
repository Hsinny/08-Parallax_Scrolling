$(function(){
  var answer = [];  // 答案積分
  var isNext;

  // 開場動畫
  function opening(){
    var $section1 = $('.section-1');
    var $star = $('.star');
    var $circle = $('.section-1 .circle');
    var $square = $('.section-1 .square');

    // 1  
    TweenLite.to($star, 5, { rotation: 360, ease: Power2.easeInOut });    // 旋轉
    TweenLite.to($circle, 5, { rotation: 360, ease: Power2.easeInOut });  // 旋轉
    TweenLite.to($square, 5, { rotation: -360, ease: Power2.easeInOut }); // 旋轉

    TweenLite.to($circle, 2.5, { css: { scale: 1.1 } });            // 變大
    TweenLite.to($circle, 2.5, { css: { scale: 1 }, delay: 2.5 });  // 延遲縮小
    
    // 2  
    TweenLite.to($square, 1.6, { css: { scale: 8 }, ease: Power2.easeOut, delay: 5 - 0.75 });
    TweenLite.to($circle, 1.2, { css: { scale: 8 }, ease: Power2.easeOut, delay: 5 - 0.5 });
    TweenLite.to($star, 0.6, { css: { scale: 8 }, ease: Power2.easeOut, delay: 5 - 0.25, 
      onComplete: function(){
        // 粉紅色淡出
        // 藍底淡入
        TweenLite.to($section1, 1, { css: { opacity: '0' }, ease: Power1.easeOut });
        
        // $('.section-1').fadeOut(1000);
        // $('.section-2').animate({ opacity: '1' }, 1000); // #1469FF$('.section-2').fadeIn(1000);
        // $('.question').delay(1000).animate({ opacity: '1' }, 1000); // #1469FF$('.section-2').fadeIn(1000);
        question1();
      }})
    }

  
  // 紀錄分數
  function option(){
    // 監聽選項被點擊
    $('.question-option .question-option-item').click(function(e){
      // if (!value) return; // 沒有值離開
      var value = $(e.target).attr('data-value');
    })
  }
  
  function question1(){
    var $section2 = $('.section-2');
    var $question = $('.question');
    var $square = $('.section-2 .square');
    var $triangle = $('.section-2 .triangle');
    var $circle = $('.section-2 .circle');
    var $animateBox = $('.section-2 .animation');

    TweenLite.to($section2, 1, { css: { opacity: '1' }, ease: Power1.easeOut, delay: 1 });
    TweenLite.to($question, 1, { css: { opacity: '1' }, ease: Power2.easeOut, delay: 1.5 });

    // 動畫區塊滑入
    TweenLite.to($animateBox, 2, {
      transform: "translateX(0%)",
      ease: Power2.easeInOut
      // dalay: 2
    });

    // 幾何圖形 fadeIn
    TweenLite.to($square, 2, {
      transform: "translateY(0)",
      delay: 2,
      ease: Power1.easeOut,
    });

    TweenLite.to($triangle, 2, {
      transform: "translateY(0)",
      delay: 2
    });

    TweenLite.to($circle, 2, {
      transform: "translateY(0)",
      delay: 2
    });

    // 旋轉
    TweenLite.to($square, 4, {
      rotation: 360,
      delay: 4 - 0.4
    });

    TweenLite.to($triangle, 4, {
      rotation: 360,
      delay: 4 - 0.2
    });

    TweenLite.to($circle, 4, {
      x: '-=30',
      y: '-=30', 
      delay: 4
    })

    // option();
    // 監聽選項被點擊
    $('.question-option .question-option-item').click(function (e) {
      // if (!value) return; // 沒有值離開
      var value = $(e.target).attr('data-value');

      // 1. 所有形狀不見
      // 2. 題目淡出
      // 3. 右區塊往左邊覆蓋滑出
      TweenLite.to($square, 2, {
        transform: "translateY(-100vh)",
        opacity: 0
      });

      TweenLite.to($triangle, 2, {
        transform: "translateY(-100vh)",
        opacity: 0,
        delay: 0.25
      });

      TweenLite.to($circle, 2, {
        transform: "translateY(-200vh)",
        opacity: 0,
        delay: 0.5
      });

      TweenLite.to($question, 2, { 
        opacity: '0', 
        delay: 2
      });

      TweenLite.to($animateBox, 2, { 
        width: '100%',
        left: 0,
        delay: 2.1
      });

    })
  }

  // 開場
  opening();
  // question1();

})