function selectText(ev) {
  $(ev.target).select();
}

function addFormNav(inputSelector) {
  $(inputSelector).keydown(function(ev) {
    var items = $('.item');
    var selected = items.filter('.active');
    var current;
    
    items.removeClass('active');
    
    if (ev.keyCode == 40 && items.length > 0) { // down arrow
      if (!selected.length || selected.is(':last-child') ) {
        current = items.first();
      }
      else {
        current = selected.next();
      }
    } else if (ev.keyCode == 38 && items.length > 0) { // up arrow
      if (!selected.length || selected.is(':first-child') ) {
        current = items.last();
      }
      else {
        current = selected.prev();
      }
    } else if (ev.keyCode == 13 && items.length > 0) { // enter
      $(selected).first().click();
    }
    
    $(current).addClass('active');
  });
}
