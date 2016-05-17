$(function () {
  $('.slide-list').wrap('<div class="slideshow"></div>');
  $('.slideshow').prepend('<div class="img-lg"><img /><div class="img-cap"></div></div>');
  $('.slide-list > li:first-child').addClass('active');
  $('.slideshow .img-lg img').filter(function() {
    var $this = $(this),
        $firstImg = $this.parent().siblings('.slide-list').find('li:first-child').children('img'),
        $firstImgSrc = $firstImg.prop('src'),
        $firstImgAlt = $firstImg.prop('alt');
    $this.prop('src',$firstImgSrc);
    $this.siblings('.img-cap').text($firstImgAlt);
  });
  $('.slide-list > li').click(function () {
    var $this = $(this),
        $lgImg = $this.parents('.slideshow').find('.img-lg img'),
        $lgCap = $this.parents('.slideshow').find('.img-lg .img-cap'),
        $whichImg = $this.children('img').prop('src'),
        $whichAlt = $this.children('img').prop('alt');
    $lgImg.prop('src', $whichImg);
    $lgImg.prop('alt', $whichAlt);
    $lgCap.text($whichAlt);
    $this.siblings('li').removeAttr('class');
    $this.addClass('active');
  });
});