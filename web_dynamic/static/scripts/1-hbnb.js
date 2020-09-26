$(document).ready(function () {
  const amenities = {};
  $('input[type=checkbox]').change(function () {
    if (this.checked) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    const amenichecked = Object.values(amenities);
    $('div.amenities > h4').text(amenichecked.join(', '));
  });
});
