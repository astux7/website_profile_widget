function parse_data(data){
	console.log(data)
  var pattern_description = /name="description"\scontent="(.+?)"/;  
  var pattern_logo = /property="og:image"\scontent="(.+?)"/;   
  get_description(data,pattern_logo);
  get_description(data,pattern_description)
}
function get_description(info, pattern){
  var matches = info.join(' ').match(pattern);
  console.log(matches[1]);
}

jsonlib.scrape('head meta', 'https://github.com/astux7', function(data) { parse_data(data); });
