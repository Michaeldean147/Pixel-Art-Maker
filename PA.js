var size = {
  width:40,
  height:30
}

var colorArray = ["000000","000080","0000FF","00FF00","FF0000","330000","FFFFFF","erase"]

window.onload = function(){
  createGrid(size);
  createPalatte();
}

function createGrid(size){
  var board = document.createElement('div');
  board.className = "board";
  for(i = 0; i < size.width; i++){
    var column = document.createElement('ul');
    column.className = "column";
    for(j = 0; j < size.height; j++){
      var block =  document.createElement('li');
      block.className = "block"
      block.addEventListener('click',function(){
        colorPixel(this);
      });
      column.appendChild(block);
    }
    board.appendChild(column);
  }
  document.getElementsByTagName('body')[0].appendChild(board);
}

function createPalatte(){
 var column = document.createElement('ul')
 column.className = "column"
 for(i = 0; i < colorArray.length; i++){
   var block = document.createElement('li')
   block.style.background = "#" + colorArray[i];
   if (colorArray[i] === "erase"){
     block.innerHTML = "X"
   }
   block.className = "block"
   block.addEventListener('click', function(){
     setColor(this.style.background)
   })
   column.appendChild(block);
 }
 var colorPicker = document.createElement("input");
 colorPicker.setAttribute('type','color')
 colorPicker.addEventListener('change', function(){
   setColor(this.value)
 })
 column.appendChild(colorPicker);
 document.getElementsByTagName('body')[0].appendChild(column);
}


function colorPixel(element){
 if (color === 'erase'){
   element.className = "block";
   element.setAttribute("style",'')
  }
  else{
    element.className = "selected block";
    element.setAttribute('style','background:' + color)
  }

}

function setColor(colorRGB){
  if (colorRGB){
    color = colorRGB
  }
  else{
    color = 'erase'
  }
}
