function my$(id) {
            return document.getElementById(id);
              }
           
              my$("btn").onclick = function () {
           
 
       
               if (my$("dv").className != "cls") {
     
                my$("dv").className = "cls";
                 this.value = "more";
               } else {

                  my$("dv").className = "";
                this.value = "hide";
              }
             };



             window.onload = function () {

             	var text = "";
                var possible = "abcdefghijklmnopqrstuvwxyz";

                for (var i = 0; i < 4; i++)
               text += possible.charAt(Math.floor(Math.random() * possible.length));
              var d = document.getElementById('d');
     
              var c=document.getElementsByClassName('Web');
              for (var i = 0;i<c.length;i++ ){
               c[i].innerText=text;
               }
              }