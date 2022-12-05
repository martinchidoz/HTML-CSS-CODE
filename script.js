/*$(document).ready(function(){
 // $("#btn").click(function(){
 //   $("#img").attr( "src","./images/car1.jpg").hide(5000)
   // $("#img")
 // })
//})
$(".fa-sharp").click(function(){
 // $("#header").removeClass("toggler")
 $("#input"). attr ("type", "text")
})
 $("#btn").click(function(){
 $("#test").load("readme.txt")
 })
})*/

//$(document).ready(function () {
 // $("form").on("submit",)
  
//})

/*var formData = new formData (document.getElementsByName('yourForm')[0]);
$.ajax({
  type:"POST",
  url: "yourURL" ,// WHERE YOU WANNA POST
  data : formData ,
  processData : false,
  contentType: false ,
  error : function(jqXHR, textStatus, errorMessage) {
    console.log(errorMessage);
  },
  success: function(data){console.log(data)}
});
*/

function formSubmit(){
  var name  = document.getElementById("name").value;
  var message =document.getElementById("message").value;
  var dataSting = 'name='+ '&message=' + message;
  jQuery.ajax({
    url:"submit.php" ,
    data:dataString,
    type:"POST",
    success: function (data){
      $("#myForm").html(data);
    },
    error: function(){}
  });
  return true;
}
