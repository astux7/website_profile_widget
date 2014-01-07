// Asta B (C) 2014 meta tags widget

function renderWidget(url) {
  if(url === undefined){
    widgetUrl = $('#widget-script').attr("data-url");}
  else{
    widgetUrl = url;
  }
  jsonlib.scrape('html head', widgetUrl, function(data) {parse_data(data, widgetUrl); });
}

function parse_data(data, url){
  var  domData  = $($(data)[0]);            
	var title_place = $(domData).filter('title').text();
  if(title_place === undefined){title_place = "";}
  var description_place = getAtrributeContent(domData,"description");
  if(description_place === undefined){description_place = "";}
  var image_path = getImagePath(domData);
  
  format_output(title_place,description_place,image_path)
};

function format_output(title_place,description_place,image_path){
  $("#widget-profile").css("display","block");
  if(title_place == "" && description_place == ""){
    $("#widget-profile").html("<span class='before-load'>No internet connection or link is bad?!</span>");
    return "";
  }
  var image_place = "";
  if (image_path.length > 1){
    if(!image_path.match(/^(?:http:\/\/|https:\/\/)/)) {
      image_path = "http://" + image_path;
    }
    image_place = '<img alt="'+title_place+'" title="'+title_place+'" src="'+ image_path + '" />'
  }

  $("#widget-profile").html('<a rel="nofollow" href="' + widgetUrl +'">' 
    + image_place + '<span><span class="profile-title">' + title_place + "</span><br />"
    + description_place + '</span></a>');
};

function getImagePath(domData){
  var img = $(domData).filter("meta[property$='image']").attr('content');
  if(img === undefined){img = $(domData).filter("meta[content$='png']").attr('content');}
  if(img === undefined){img = "";}
  return img;
};

function getAtrributeContent(data, attributeName){
  var attributeTag =  $(data).filter( function(){
    if($(this).attr('name') === attributeName){
      return $(this).attr('content');
    }
  });
  return attributeTag.attr('content');
};

$(document).ready(function(){
  renderWidget();
});
