var jq = jQuery;
jq(window).ready(function() {
  jq(".m_home_slick").slick({
    dots: true,
    arrows: false,
    speed: 100,
    autoplay: true
  });
  jq(".m_submis_slick").slick({
    dots: false,
    arrows: false,
    speed: 100,
    autoplay: true
  });
  jq(".m_rule_slick").slick({
    dots: false,
    arrows: false,
    speed: 100,
    autoplay: true
  });
});