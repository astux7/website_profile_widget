<h1>Website profile widget</h1>

<h4> Intro </h4>
I wanted to try to create same thing as using linkedin, facebook ect. when you put any url you see meta tags (description and logo) and title in nice box which links to added url.

Lets give an explanation and examples about this widget.

<h4> Examples </h4>

Github profile (you get this using this widget and link https://github.com/username)
![alt tag](https://lh4.googleusercontent.com/-Y8hQrw_w_W0/Ur9c3Gx07nI/AAAAAAAAInA/kkv5TErRgus/w1916-h732-no/github.png)

Linkedin profile (you get this using this widget and link http://uk.linkedin.com/in/username)
![alt tag](https://lh4.googleusercontent.com/-HK2dwuv5EQw/Ur9c3MSwt4I/AAAAAAAAImw/67mzCbUKmq4/w1348-h676-no/linkedin.png)

and more website profiles ...

<h4> Demo of this widget</h4>
Download the files from github (or clone/fork) and in root directory of this project you can find ./demo folder
inside where is index.html to run !

![alt tag](https://lh4.googleusercontent.com/-HJT6quCjars/UsxIYyr2rII/AAAAAAAAIow/mB510dliBKs/w451-h250-no/widget_demo.png)

put the link and click the button!

<h4>How to set up?</h4>
you dont need to change just copy:
./css/ folder with file "widget.links.meta.css"
./js/ folder with files "jsonlib.js" and "widget.links.meta.js" and if you don't use in your website jQuery also add "jquery.min.js"

open index.html file in project root dir:

don't forget to add the url here 
``` html data-url="ADD_URL_YOU_WANT_TO_EXTRACT_INFO" ```
look in code below

```html
<html>
<head>
  <meta charset="utf-8">
  <title>Website meta tags widget</title>

  <!-- begin header to copy -->
  <!-- need to have own jQuery lib (any here I am using mini) -->
  <script src="js/jquery.min.js"></script>
  <!-- css file which need to get the shape of the box of website -->
  <link rel="stylesheet" type="text/css" href="css/widget.links.meta.css">
  <!-- this is lib which is called for request of link meta tags data (cross domain append) -->
  <script src="js/jsonlib.js"></script>
  <!-- end header to copy -->

</head>
<body>
<h1> Website meta tags widget</h1>

<!-- begin body to copy -->
<!-- this box need to put any you want in body of you website -->
<div id="widget-profile" style=""></div>
<!-- this script can be added to before </body> tag or next to this-->
<!-- i.e. data-url="https://github.com/astux7" here you can change the url of the website 
which meta info you want to extract and show in box -->
<script src="js/widget.links.meta.js" id="widget-script" data-url="ADD_URL_YOU_WANT_TO_EXTRACT_INFO"></script>
<!-- end body to copy -->

</body>
</html>
```

Good Luck! 


<h4> What is using in this widget</h4>
Mostly I strugle to get the meta tags info from client scripts (js, jQuery) of <i>..cross domain JS Uncaught SyntaxError: Unexpected token &lt; </i> I find amazing <a href="http://call.jsonlib.com/examples.html">JS lib </a> to make my life so easy!
Moreover when i get the meta tags I parse them with simple <a href="http://rubular.com/">regular expression </a> and I found amazing <a href="http://jsfiddle.net/" >JS simulator for testing</a>. But regular expression is not good way cause meta tags property name.. can change possition in tag - thats the problem! the other thing would be nice to find the image via website tag! Lets keep working!
