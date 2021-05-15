$(document).ready(function() {
  /* For the sticky navigation */
  $('.js--section-steps').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}, {
  offset: '60px;'
});
});

// Create the type of element you pass in the parameters
function createTrainer(element)
{
  return document.createElement(element);
}
// Append the second parameter(element) to the first one
function append(parent, el)
{
  return parent.appendChild(el);
}
// Get the list where we will place our trainers
const ul = document.getElementById("trainers")

// Get 3 random users
const url = 'https://randomuser.me/api/?results=3';

// Call the fetch function passing the url of the API as a parameter
fetch(url)
.then((resp) => resp.json()) // Transform the data into json
.then(function (data){
  let trainers = data.results;
  return trainers.map(function (trainer) {
    let li = createTrainer('li'),
    img = createTrainer('img'),
    p = createTrainer('p');
    img.src = trainer.picture.medium;
    p.innerHTML = `${trainer.name.first} ${trainer.name.last}`;
    append(li, img);
    append(li, p);
    append(ul, li);
  })

})
.catch(function (error){
console.log(JSON.stringify(error));
});