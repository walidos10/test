let red = document.getElementsByClassName("fa-heart");


for(let i of red){
  
  i.addEventListener("click",function() {
    i.style.backgroundColor="red"    
    ;
    i.addEventListener("click",function() {
      i.style.backgroundColor="white"    
      });
    
    
    });
    }










           var parentElem = Array.from(document.getElementsByClassName('panier'));
           let childElem = Array.from(document.getElementsByClassName('artic1'));
           let sup=document.getElementsByClassName("fa-trash-alt");
           var parentDelet=document.getElementsByClassName("delet-favor-som");
          //  var childElem = document.getElementsByClassName('artic1');

           for(let i=0;i<sup.length;i++){

  sup[i].addEventListener("click", function(){
    
    childElem[i].remove()   
     
  
  });
}

  const nbr=document.getElementsByClassName("valuer-nb");

  const plus=document.getElementsByClassName("plus");

  const moins= Array.from(document.getElementsByClassName("moins"));

  const somme=document.getElementsByClassName("som-art")[0];

  const prix=Array.from(document.getElementsByClassName("prix"));

  

  const total=document.getElementsByClassName("sou-total")[0];

  
 

 
function calculPlus(){
  let nbr=Array.from(document.getElementsByClassName("valuer-nb"));
  let prix=Array.from(document.getElementsByClassName("prix"));
  const total=document.getElementsByClassName("sou-total")[0];

let sum = 0
  for(let i=0;i<prix.length;i++){
  sum += prix[i].value* nbr[i].value;
  }
  return total.value = sum;
}

 
 
for(let btn of plus){
  

  btn.addEventListener("click",function(){
    
    btn.previousElementSibling.value++;
    somme.value++;
    
    calculPlus()
   
  }
  )
  }


    for(let btn of moins){
      

     if( btn.nextElementSibling.value==0
      ){


     
      btn.addEventListener("click",function(){
        if(btn.nextElementSibling.value>0){
          btn.nextElementSibling.value--;
          somme.value--;
          calculPlus()




        }
  
    
    
    

  
  }
  )
  }
    }
 



  


  


 





