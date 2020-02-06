const list = [];
let counter = 0;
$(() => {
   $('form').on('submit', event=> {
     event.preventDefault();
  const inputValue = $('#input-box').val()
  console.log(inputValue);
  list.push(inputValue)
  render()
console.log(list)
  counter++;

   })
})


const render = () => {
    const leftList = $(".left-list");
      leftList.append("<li>"+"<p>"+list[counter]+"</p><button class='complete'>Complete</button</li>");


    console.log(counter)
    // appending the list item to the ul
    
   
}


