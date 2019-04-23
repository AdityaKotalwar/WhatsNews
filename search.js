function func(){

    var searchinput = document.getElementById("searchview")
    var input = searchinput.value.toUpperCase();
	var list = document.getElementById("list");
	var innerlist = list.getElementsByTagName("li");
	for(var i = 0; i < innerlist.length; i++){
	    var a = innerlist[i].getElementsByTagName("a")[0];
        var txtValue = a.textContent;
        if (txtValue.toUpperCase().indexOf(input) != -1) {
            innerlist[i].style.display = "block";
        } else {
            innerlist[i].style.display = "none";
        }

	}

 }
 function openlink(){

    window.open("https://stackoverflow.com/questions/16131988/making-an-image-act-like-a-button");
 }