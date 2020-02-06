
(function($) {
  const list = [];
let counter = 0;
$(() => {
   $('form').on('submit', event=> {
     event.preventDefault();
  const inputValue = $('#input-box').val()
  list.push(inputValue)
  render()
  
 counter++; 
add();

   })
})


const render = (e) => {
    const leftList = $(".left-list");
      leftList.append("<li>"+"<p>"+list[counter] +"</p><button class='complete'>Complete</button</li>");  
}

function call(){
  $(".removeli").click(function(){
  $(this).fadeOut(); 
})
   
}


function add(){
  $(".complete").click(function(e){
  e.preventDefault();
      let store= $(e.target).prev('p').text();
     const RightList = $(".right-list");
      RightList.append("<li class='removeli'>"+"<p>"+store+"</p><button class='remove'>Remove</button</li>");
      $(e.target).parent().fadeOut();
call();
}); 

       
}
 



})(jQuery);