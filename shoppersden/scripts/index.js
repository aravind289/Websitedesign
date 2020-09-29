var content = document.getElementById("display")

console.log(content)
var bookButton = document.getElementById("books")
bookButton.addEventListener('click',ajaxFunction)

function ajaxFunction(){ 
    var ajaxRequest; 
    try{ 
    ajaxRequest = new XMLHttpRequest(); 
    } catch (e){
     try{ 
     ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP3.0"); }
      catch (e){alert("Your browser broke!"); 				return false; 
      } 
  } 

 ajaxRequest.onreadystatechange = function(){ 
 if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){    
     var resultObj = JSON.parse(ajaxRequest.responseText)
     resultObj.items.map(item=>{
          var img = document.createElement("img")
        //   img.setAttribute.height = "25px"
        //   img.setAttribute.width = "25px"
          img.className="bookImg"
          img.src = item.volumeInfo.imageLinks.smallThumbnail
          content.appendChild(img)
      })      
     } 
     } 

 ajaxRequest.open("GET", "https://www.googleapis.com/books/v1/volumes?q=oracle", true); 
 ajaxRequest.send(null); 
}


var countryList = document.getElementById("countrynames")

var account = document.getElementById("accounts")
account.addEventListener('click',countryajaxFunction)

function countryajaxFunction(){ 
    var ajaxRequest; 
    try{ 
    ajaxRequest = new XMLHttpRequest(); 
    } catch (e){
     try{ 
     ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP3.0"); }
      catch (e){alert("Your browser broke!"); 				return false; 
      } 
  } 

 ajaxRequest.onreadystatechange = function(){ 
 if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){    
     var resultObj = JSON.parse(ajaxRequest.responseText)
    
 resultObj.map(item=>{
     var optionElem = document.createElement("option")
     optionElem.value = item.name
     countryList.appendChild(optionElem)
   })  
    
     } 
     } 

 ajaxRequest.open("GET", "https://restcountries.eu/rest/v2/all", true); 
 ajaxRequest.send(null); 
}





