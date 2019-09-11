function selectText(ev) {
  $(ev.target).select();
}

function addFormNav(inputSelector) {
  $(inputSelector).keydown(function(ev) {
    console.log(inputSelector, ev.keyCode);
    var items = $('.item');
    var selected = items.filter('.active');
    var current;
    
    if (!items.length > 0) { return false; }
    items.removeClass('active');
    
    if (ev.keyCode == 40) { // down arrow
      if (!selected.length || selected.is(':last-child') ) {
        current = items.first();
      }
      else {
        current = selected.next();
      }
    } else if (ev.keyCode == 38) { // up arrow
      if (!selected.length || selected.is(':first-child') ) {
        current = items.last();
      }
      else {
        current = selected.prev();
      }
    } else if (ev.keyCode == 13) { // enter
      $(selected).first().click();
    } else {
      return false;
    }
    
    $(current).addClass('.active');
  });
}
