const { ok } = require("assert");

const $ = window.$;
$(document).ready(function () {
  const amenities = {};
  $('input[type=checkbox]').change(function () {
    if (this.checked) {
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    const amenichecked = Object.values(amenities);
    if (amenichecked.length > 0) {
    $('div.amenities > h4').text(Object.values(amenities).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});
$.get("http://0.0.0.0:5001/api/v1/status/", function (data) {
    if (data.status === "OK") {
      $('DIV#api_status').addClass('available')
    } else {
      $('DIV#api_status').removeClass('available') 
    }
});
