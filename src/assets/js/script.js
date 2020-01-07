let x=0;
  let time =1000 ;
  let img =[x];
  img[0]='assets/imges/ph21.jpg';
  img[1]='assets/imges/ph22.jpg';
  img[2]='assets/imges/ph23.jpg';
  img[3]='assets/imges/ph24.jpg';
  img[4]='assets/imges/ph25.jpg';
  img[4]='assets/imges/ph26.jpg';
  function changeImg(){
    document.slide.src=img[x];
    if(x<img.length-1){
      x++;
    }else{
     x=0;
    }
    setTimeout("changeImg()",time);
  }
 window.onload = changeImg;