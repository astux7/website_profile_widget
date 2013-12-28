function parse_data(data, url){
	var output = Array(url);
  var pattern_description = /name="description"\scontent="(.+?)"/;  
  var pattern_logo = /property="og:image"\scontent="(.+?)"/;  
  var pattern_title =  /<title>(.+?)<\/title>/i;  
  output[1] = get_description(data, pattern_logo);
  output[2] = get_description(data, pattern_description);
  output[3] = get_description(data, pattern_title);
  console.log(data);

  $("#profile-widget").html('<a href="'+output[0]+'"><img width="25%" height="25%" src="'+output[1]+'" /><br />'+output[3]+": <br />  "+output[2]+'</a>');
}

function get_description(info, pattern){
  var matches = info.join(' ').match(pattern);
  return matches[1];
}

var url =  'https://github.com/astux7'
jsonlib.scrape('html head', url, function(data) { parse_data(data, url); });