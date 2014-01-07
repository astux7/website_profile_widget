// Asta B (C) 2014 meta tags widget
//url = "http://www.codewars.com/users/astux7";
//url ="http://www.linkedin.com/in/astabevainyte";
//url ="https://github.com/astux7";
var widgetUrl = $('#widget-script').attr("data-url");
jsonlib.scrape('html head', widgetUrl, function(data) {parse_data(data, widgetUrl); });

function parse_data(data, url){
  var  domData  = $($(data)[0]);            
	var title_place = $(domData).filter('title').text();
  var description_place = getAtrributeContent(domData,"description");
  var image_path = getImagePath(domData);
  
  format_output(title_place,description_place,image_path)
}

function format_output(title_place,description_place,image_path){
  var image_place = "";
  if (image_path.length > 1){
    image_place = '<img alt="'+title_place+'" title="'+title_place+'" src="'+ image_path + '" />'
  }

  $("#widget-profile").html('<a rel="nofollow" href="' + widgetUrl +'">' 
    + image_place + '<span><span class="profile-title">' + title_place + "</span><br />"
    + description_place + '</span></a>');
  $("#widget-profile").css({ display: "block" });
}

function getImagePath(domData){
  var img = $(domData).filter("meta[property$='image']").attr('content');
  if(img === undefined){ img = $(domData).filter("meta[content$='png']").attr('content');}
  if(img != undefined){ return img;}
  return "";
}

function getAtrributeContent(data, attributeName){
  var attributeTag =  $(data).filter( function(){
    if($(this).attr('name') === attributeName){
      return $(this).attr('content');
    }
  });
  return attributeTag.attr('content');
}

