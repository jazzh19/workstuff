var factPlaceholder = document.getElementById("cat-fact");
var showFact = document.getElementById("show-fact");
var showCat = document.getElementById("cat-image");
/* Facts from this API: https://fact.birb.pw/api/v1/cat */

var catFacts = ["The ancient Egyptians were the first to tame the cat (in about 3000 BC), and used them to control pests.",
               "Cats share 95.6% of their DNA with tigers.",
               "Cats are asleep for 70% of their lives.",
               "Cat kidneys are super efficient, they can rehydrate by drinking seawater.",
               "Kittens who are taken along on short, trouble-free car trips to town tend to make good passengers when they get older. They get used to the sounds and motions of traveling and make less connection between the car and the visits to the vet.",
               "Cats can jump approximately seven times their height",
               "A group of kittens is called a kindle, and a group of cats is called a clowder",
               "A cat has 230 bones - even more than a human!",
               "Cats greet one another by touching noses-boop!"]

var catImages = ["assets/Cat1.png","assets/Cat2.png","assets/Cat3.png","assets/Cat4.png","assets/Cat5.png","assets/Cat6.png","assets/Cat7.png","assets/Cat8.png","assets/Cat9.png"]

var factNumber;

function randomFact(){
  return catFacts[factNumber];
}

function randomImage() {
  return catImages[imageNumber];
}

showFact.addEventListener('click', function(){
  factNumber = Math.floor(Math.random()*catFacts.length);
  imageNumber = Math.floor(Math.random()*catImages.length);

  factPlaceholder.textContent = randomFact();
  showCat.src = randomImage();
});
