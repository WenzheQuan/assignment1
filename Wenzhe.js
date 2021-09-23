function mm(id){
				return document.getElementById(id)
			}
			
			mm("btn").onclick=function(){
		        for (var i = 0; i < 1; i++) {
				var liobj=document.createElement("li");
				liobj.innerHTML="Unknown"
				mm("dv").appendChild(liobj);
				liobj.onmousemove=mouseroverHandle;
				liobj.onmouseout=onmouseoutHandle;
		          }
			   }
			   function mouseroverHandle(){}
			   function onmouseoutHandle(){}


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