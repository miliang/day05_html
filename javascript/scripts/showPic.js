function showPic(whichPic) {
    /*获取a标签href下的图片路径*/
    var source = whichPic.getAttribute("href");
    /*获取显示图片的位置*/
    var placeholder = document.getElementById("placeholder");
    /*更改图片的路径*/
    placeholder.setAttribute("src",source);
    /*获取要显示图片的标题*/
    var text = whichPic.getAttribute("title");
    /*获取显示标题的位置*/
    var description = document.getElementById("description");
    /*更改p标签里的内容，让其显示当前图片的标题*/
    description.firstChild.nodeValue = text;
}
event = "JavaScript statement(s)";
function countBodyChildren() {
    /*获取body下节点的nodeType*/
    var body_element = document.body.nodeType;//1
    /*获取body下的所有子节点*/
    var body_element1 = document.body.childNodes;
    console.log(body_element1);
    console.log(body_element1.length);
    console.log(body_element);
}
window.onload = countBodyChildren;
