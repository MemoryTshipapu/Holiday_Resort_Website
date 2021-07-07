
element=document.getElementById('poolView');
function Changeimage() {
    if (element.src.match("images/poolView1")) {
        element.src="images/poolView3.jpg";
    }

    else {
        element.src="images/poolView1.jpg";
    }
};