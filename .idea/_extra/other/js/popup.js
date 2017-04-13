window.onload = function() {
    'use strict';
    document.getElementById('link').onclick = function(){
        var popup = window.open('NewPage.html', 'New Page');
        if ((popup !== null) && !popup.closed) {
            popup.focus();
        }
    }
}
