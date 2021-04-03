function get_dark_theme() {
    //get a dark theme when the user interact
    var element = style.css ;
    element.classList.toggle("dark_theme");  
}
///saving notes
notesarray = []
//to save notes on
function saving_title() {
    //save the title to be displayed
    if(typeof(Storage)!= 'undefined'){
        var messageInput = document.getElementById('blank for now').value;
        localStorage.setItem('blank for now');
        document.getElementById('blank for now').value = localStorage.getItem('blank for now');
    }
}
///same process for the note saving parts

function saving_note() {
    //save the notes when the user done typing
    if(typeof(Storage)!= 'undefined'){
        var messageInput = document.getElementById('blank for now').value;
        localStorage.setItem('blank for now');
        document.getElementById('blank for now').value = localStorage.getItem('blank for now');
    }
}
///the slider menu should prob be interactive now
function openslider() {
    ///for opening slider
  document.getElementById("mySidenav").style.width = "to be determined px";
}

function closeslider() {
    ///for closing slider
  document.getElementById("mySidenav").style.width = "0px";
}
