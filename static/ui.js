$(document).ready(function() {
  selectNavLink();
  $('.nav-item').click(function(ev) {
    selectNavLink(ev);
  });
});

function selectText(ev) {
  $(ev.target).select();
}

function selectNavLink(ev=null) {
  $('.nav-item').removeClass('highlight'); // clear highlighted link
  var hrefArray = window.location.href.split('/');
  var page = hrefArray[hrefArray.length - 1];
  
  if (ev) { // user click
    $(ev.target).addClass('highlight');
  } else {
    $('.nav-item').each(function() {
      if ($(this).attr('id') == page) {
        $(this).addClass('highlight');
      }
    });
  }
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
    } else if ((ev.keyCode == 13 || ev.keyCode == 9) && items.length > 0) { // enter or tab
      $(selected).first().click();
    }
    
    $(current).addClass('active');
  });
}
