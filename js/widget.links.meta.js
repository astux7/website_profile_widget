
var pattern_description = [/name="description"\scontent="(.+?)"/, /content="(.+?)"\sname="description"/]
// need to make any place
var pattern_logo = [/property="og:image"\scontent="(.+?)"/, /name="msapplication-TileImage"\scontent="(.+?)"/]; 
// anu img in meta 
var pattern_title =  [/<title>(.+?)<\/title>/i];  
var scripts = document.getElementsByTagName('script');

for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (script.getAttribute('id') == 'widget-script') {
        var url = script.getAttribute('data-id');
    }
}
//url = "http://www.codewars.com/users/astux7"
//url ="http://www.linkedin.com/in/astabevainyte"
jsonlib.scrape('html head', url, function(data) { parse_data(data, url); });



function parse_data(data, url){
	console.log(data);
	
	var title_place = get_description(data, pattern_title);
	
  var image_path = get_description(data, pattern_logo), image_place = "";
  if (image_path.length > 1){
    image_place = '<img alt="'+title_place+'" title="'+title_place+'" src="'
  	+image_path+'" />'
  }

  var description_place = get_description(data, pattern_description);
 
  
  $("#widget-profile").html('<a rel="nofollow" href="'
  	+url+
  	'">'+image_place+'<span><span class="profile-title">'+title_place+"</span><br />  "+description_place+'</span></a>');
  $("#widget-profile").css({ display: "block" });
}
function get_description(info, pattern){
  var matches = Array();
  for (var i = 0; i < pattern.length; i++){
       matches = info.join(' ').match(pattern[i]);
       console.log(matches);
  if (matches && matches.length > 1){
  	return matches[1];
  }
}
  return "";
}
