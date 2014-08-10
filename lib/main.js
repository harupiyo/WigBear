var data = require("sdk/self").data;

var text_entry = require("sdk/panel").Panel({
    width: 600,
    height: 550,
    contentURL: data.url("announce.html")
});

require("sdk/tabs").on( 'ready', function(tab){
    if( is_ssl( tab.url ) ){
        if( ! require("sdk/private-browsing").isPrivate(tab) ){
            text_entry.show();
        }
    }
});

function is_ssl( url ){
    return /^https:/.test( url );
}
