
var pattern_description = /name="description"\scontent="(.+?)"/;  
var pattern_logo = /property="og:image"\scontent="(.+?)"/;  
var pattern_title =  /<title>(.+?)<\/title>/i;  
var scripts = document.getElementsByTagName('script');

for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (script.getAttribute('id') == 'widget-script') {
        var url = script.getAttribute('data-id');
    }
}

jsonlib.scrape('html head', url, function(data) { parse_data(data, url); });


function parse_data(data, url){
	var output = Array(url);
  output[1] = get_description(data, pattern_logo);
  output[2] = get_description(data, pattern_description);
  output[3] = get_description(data, pattern_title);
  $("#widget-profile").html('<a href="'+output[0]+'"><img width="25%" height="25%" src="'+output[1]+'" /><br />'+output[3]+": <br />  "+output[2]+'</a>');
}
function get_description(info, pattern){
  var matches = info.join(' ').match(pattern);
  return matches[1];
}
