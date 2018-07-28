$(function(){
  var $star = $('.star');
  var $circle = $('.section-1 .circle');
  var $square = $('.section-1 .square');
  var $section1 = $('.section-1');
  var $section2 = $('.section-2');
  var $question = $('.question');

  var answer = [];

  // 開場動畫
  function opening(){  
    TweenLite.to($star, 5, { rotation: 360, ease: Power2.easeInOut });    // 旋轉
    TweenLite.to($circle, 5, { rotation: 360, ease: Power2.easeInOut });  // 旋轉
    TweenLite.to($square, 5, { rotation: -360, ease: Power2.easeInOut }); // 旋轉

    TweenLite.to($circle, 2.5, { css: { scale: 1.1 } });            // 變大
    TweenLite.to($circle, 2.5, { css: { scale: 1 }, delay: 2.5 });  // 延遲縮小

    TweenLite.to($square, 1.6, { css: { scale: 8 }, ease: Power2.easeOut, delay: 5 - 0.75 });
    TweenLite.to($circle, 1.2, { css: { scale: 8 }, ease: Power2.easeOut, delay: 5 - 0.5 });
    TweenLite.to($star, 0.6, { css: { scale: 8 }, ease: Power2.easeOut, delay: 5 - 0.25, onComplete: function(){
        // 粉紅色淡出
        // 藍底淡入

      TweenLite.to($section1, 1, { css: { opacity: '0' }, ease: Power1.easeOut });
      TweenLite.to($section2, 1, { css: { opacity: '1' }, ease: Power1.easeOut, delay: 1 });
      TweenLite.to($question, 1, { css: { opacity: '1' }, ease: Power2.easeOut, delay: 1.5 });
        // $('.section-1').fadeOut(1000);
        // $('.section-2').animate({ opacity: '1' }, 1000); // #1469FF$('.section-2').fadeIn(1000);
        // $('.question').delay(1000).animate({ opacity: '1' }, 1000); // #1469FF$('.section-2').fadeIn(1000);
       
        option();
      }
      })
    }


  // show Q1
  function option(e){

    // 監聽選項被點擊
    $('.question-option .question-option-item').click(function(e){
      if (!value) return; // 沒有值離開
      var value = $(e.target).attr('data-value');
      answer.push(value);
    })
    
  }

  // 開場
  opening();

})