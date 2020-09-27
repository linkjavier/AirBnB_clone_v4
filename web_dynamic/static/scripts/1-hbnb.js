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
      const allamenichecked = amenichecked.join(', ');
      const fewamenities = allamenichecked.slice(0, 30)
      $('div.amenities > h4').text(fewamenities + '...');
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});
