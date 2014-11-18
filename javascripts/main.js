var lean = {
  init: function() {
    $('a[href="#fade_modal"]').leanModal({
      overlay : 0.7,
      position: 700,
      animate_type:"fade",
      speed_overlay: 200,
      speed_modal: 200,
    });


    $('a[href="#fade_scale_modal"]').leanModal({
      overlay : 0.7,
      position: 700,
      animate_type:"fade_scale",
      speed_overlay: 200,
      speed_modal: 200,
    });

  }
}

lean.init();
