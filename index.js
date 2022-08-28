function anh1(){
    var  anh1=document.getElementById("anh");
      anh1.src= "anh1.webp"
  }

  function anh2(){
    var  anh2=document.getElementById("anh");
      anh2.src= "anh2.webp"
  }
  function anh3(){
    var  anh3=document.getElementById("anh");
      anh3.src= "anh3.webp"
  }
  function anh4(){
    var  anh4=document.getElementById("anh");
      anh4.src= "anh4.webp"
  }

  

  var index = 1;

  function next(){
    var  imgs = ["anh1.webp","anh2.webp","anh3.webp","anh4.webp"]

    document.getElementById("anh").src=imgs[index];
    index++;
    if(index==4){
        index=0;
    }
  }

  function back(){
    var  imgs = ["anh4.webp","anh3.webp","anh2.webp","anh1.webp"]

    document.getElementById("anh").src=imgs[index];
    index++;
    if(index==4){
     index=0;
}
    }
    setInterval(next,5000)

    function prev1() {
        var myimg = document.getElementById("diving");
        var child = myimg.children[0];

        myimg.removeChild(child);
        myimg.appendChild(child);
    }

    function next1() {
        var myimg = document.getElementById("diving");
        var child = myimg.children[0];

        myimg.removeChild(child);
        myimg.appendChild(child);
    }
    

    
    function mo(){
        document.getElementById("st_form").style.display = "block";
    }
    function dong(){
        document.getElementById("st_form").style.display = "none";
    }

    function one() {
       document.getElementById("show").src = "p1.webp";
       
       document.getElementById("st1").style.display = "block"
     
      document.getElementById("buy1").style.display = "block"
      document.getElementById("buy2").style.display = "none"
      document.getElementById("buy3").style.display = "none"
      document.getElementById("buy4").style.display = "none"
      document.getElementById("buy5").style.display = "none"
      document.getElementById("buy6").style.display = "none"
      document.getElementById("buy7").style.display = "none"
      document.getElementById("buy8").style.display = "none"
      }

    function two() {
      document.getElementById("show").src = "p2.webp";
      
      document.getElementById("st1").style.display = "block"
      
      document.getElementById("buy1").style.display = "none"
      document.getElementById("buy2").style.display = "block"
      document.getElementById("buy3").style.display = "none"
      document.getElementById("buy4").style.display = "none"
      document.getElementById("buy5").style.display = "none"
      document.getElementById("buy6").style.display = "none"
      document.getElementById("buy7").style.display = "none"
      document.getElementById("buy8").style.display = "none"
    }

   function three() {
    document.getElementById("show").src = "p3.webp";
    
    document.getElementById("st1").style.display = "block"
    
      document.getElementById("buy1").style.display = "none"
      document.getElementById("buy2").style.display = "none"
      document.getElementById("buy3").style.display = "block"
      document.getElementById("buy4").style.display = "none"
      document.getElementById("buy5").style.display = "none"
      document.getElementById("buy6").style.display = "none"
      document.getElementById("buy7").style.display = "none"
      document.getElementById("buy8").style.display = "none"
  }

 function four() {
  document.getElementById("show").src = "p4.webp";
  
  document.getElementById("st1").style.display = "block"
  
      document.getElementById("buy1").style.display = "none"
      document.getElementById("buy2").style.display = "none"
      document.getElementById("buy3").style.display = "none"
      document.getElementById("buy4").style.display = "block"
      document.getElementById("buy5").style.display = "none"
      document.getElementById("buy6").style.display = "none"
      document.getElementById("buy7").style.display = "none"
      document.getElementById("buy8").style.display = "none"
}

function five() {
  document.getElementById("show").src = "p5.webp";
  
  document.getElementById("st1").style.display = "block"
      
      document.getElementById("buy1").style.display = "none"
      document.getElementById("buy2").style.display = "none"
      document.getElementById("buy3").style.display = "none"
      document.getElementById("buy4").style.display = "none"
      document.getElementById("buy5").style.display = "block"
      document.getElementById("buy6").style.display = "none"
      document.getElementById("buy7").style.display = "none"
      document.getElementById("buy8").style.display = "none"
}

function six() {
  document.getElementById("show").src = "p6.webp";
  
  document.getElementById("st1").style.display = "block"
       
      document.getElementById("buy1").style.display = "none"
      document.getElementById("buy2").style.display = "none"
      document.getElementById("buy3").style.display = "none"
      document.getElementById("buy4").style.display = "none"
      document.getElementById("buy5").style.display = "none"
      document.getElementById("buy6").style.display = "block"
      document.getElementById("buy7").style.display = "none"
      document.getElementById("buy8").style.display = "none"
}

function seven() {
  document.getElementById("show").src = "p7.webp";
  
  document.getElementById("st1").style.display = "block"

      document.getElementById("buy1").style.display = "none"
      document.getElementById("buy2").style.display = "none"
      document.getElementById("buy3").style.display = "none"
      document.getElementById("buy4").style.display = "none"
      document.getElementById("buy5").style.display = "none"
      document.getElementById("buy6").style.display = "none"
      document.getElementById("buy7").style.display = "block"
      document.getElementById("buy8").style.display = "none"
} 

function eight() {
  document.getElementById("show").src = "p8.webp";
  
  document.getElementById("st1").style.display = "block"
    
      document.getElementById("buy1").style.display = "none"
      document.getElementById("buy2").style.display = "none"
      document.getElementById("buy3").style.display = "none"
      document.getElementById("buy4").style.display = "none"
      document.getElementById("buy5").style.display = "none"
      document.getElementById("buy6").style.display = "none"
      document.getElementById("buy7").style.display = "none"
      document.getElementById("buy8").style.display = "block"
}



function cls() {
      document.getElementById("st1").style.display = "none"
       
}

function validone(){
  var a = document.getElementById("firstname");
            if(a.value.length == 0){
                alert("please give me information about first name");
                
            }

            var b = document.getElementById("lastname");
            if(b.value.length == 0){
                alert("please give me information about last name");
                
            }

            var email= document.getElementById("email");
                var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

            if(email.value.length == 0){
                alert("please give me information about email");
                
            }

            if(!filter.test(email.value)){
                alert("Invalid email format");
                
            }

            var c = document.getElementById("phone");

            if(c.value.length == 0){
                alert("please give me information about phone");
                
            }

            if(c.value.length != 11){
                alert("phone has 11 number");
                
            }
            var arr = document.getElementsByName("basket");
                var dem=0;
                for(var i=0; i<arr.length; i++){
                    if(arr[i].checked ==true) dem++;
                }
                if(dem==0){
                    alert("gplease give me information about option")
                }
}