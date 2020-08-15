function OpenNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  UpdateArrowButton(true);
}

function CloseNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  UpdateArrowButton(false);
}

function UpdateArrowButton(showLeftArrow){
  if(showLeftArrow){
    document.getElementById("arrow").onclick = CloseNav;
    document.getElementById("arrow").style = 'transform: rotate(180deg)';
    console.log("UpdateArrowButton called (left).");
    return;
  }
  document.getElementById("arrow").onclick = OpenNav;
  document.getElementById("arrow").style = 'transform: rotate(0deg)';
  console.log("UpdateArrowButton called (right).");
}
