
(function($) {
  const list = [];
let counter = 0;

$(() => {
   $('form').on('submit', event=> {
     event.preventDefault();
  let inputValue = $('#input-box').val()
  list.push(inputValue)

 render()
  counter++; 
   })

})

 
function render(){

// validation 
if(list[counter] == ""){
  alert("please input somthing ")
}else{
const leftList = $(".left-list");
      leftList.append("<li class='inputli'>"+"<p>"+list[counter] +"</p><button class='complete'>Complete</button</li>");
}

// value transfer to remove section 
      $(".inputli").click(function(e){

      let ind= $(".inputli").index(this);

       if(e.target.className == "complete"){

         const RightList = $(".right-list");
       RightList.append("<li class='removeli'>"+"<p>"+list[ind]+"</p><button class='remove'>Remove</button</li>");
        $(this).fadeOut();
       }
      remove();
      console.log("working")
}); 
 
  
}

// remove 
function remove(){
  $(".removeli").click(function(){
  $(this).fadeOut(); 
})

}



   



})(jQuery);

