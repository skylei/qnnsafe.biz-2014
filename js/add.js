;(function($) {
  $(function() {
    $('.hover-dropdown').hover(function() {
      $(this).addClass('open');
    }, function() {
      $(this).removeClass('open');
    });
    $('.sbutton').magnificPopup({
      type: "image",
      zoom: {
        enabled: true,
        duration: 300,
        opener: function(element) {
          return element;
        }
      }
    });

    if ($('#district_selector').length == 1) {
      $.getJSON('/assets/districts.tree.json', function(districts){
        var province = $('<select />', { id: 'province', name: 'province', 'class': 'form_select' });
        province.append('<option value="">请选择地区</option>');
        $.each(districts, function(a, b){
          province.append('<option value="' + a + '">' + a + '</option>');
        });
        province.change(function(){
          $('option[value=""]', this).remove();
          $(this).nextAll().remove();
          var p = $(this).val();
          var city = $('<select />', { id: 'city', name: 'city', 'class': 'form_select' });
          $.each(districts[p], function(a, b){
            city.append('<option value="' + a + '">' + a + '</option>');
          });
          city.data('province', p);
          $('#district_selector').append(city);
          city.change(function(){
            $(this).nextAll().remove();
            var p = $(this).data('province'), c = $(this).val();
            if (districts[p][c] instanceof Array && districts[p][c].length > 0) {
              var district = $('<select />', { id: 'district', name: 'district', 'class': 'form_select' });
              $.each(districts[p][c], function(a, b){
                district.append('<option value="' + b + '">' + b + '</option>');
              });
              $('#district_selector').append(district);
            }
          }).trigger('change');
        });
        $('#district_selector').append(province);
      });
    }

    $('#sform').submit(function() {
      $(this).find('.subm').val('发送中...').prop('disabled', true);
    });


    1 == $("#newsslider").length && $("#newsslider").sliderkit({
        auto: !0,
        autospeed: 5000,
        circular: !0,
        shownavitems: 1,
        panelfx: "sliding",
        panelfxspeed: 500,
        verticalnav: !0,
        verticalslide: !0
    });

  });
})(jQuery);
