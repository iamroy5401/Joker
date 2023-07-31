let jokes = [`What do you call a noodle that is fake ?     An im-pasta. Foodies of all ages will also love these pasta puns that all spice up your daily rotini`,
`Why did the toddler toss the butter out the window?      So she could see a butter-fly. For more foodie fun, check out these hilarious food jokes for kids.`,
`What’s one way we know the ocean is friendly?            It waves.`,
  `Why is Cinderella so bad at playing football?          She runs away from the ball.`,
`What kind of shoes does a banana peel love wearing?      Slippers.`]


let ab=document.getElementById("jo");
index = Math.floor((Math.random()*jokes.length));

ab.innerHTML = jokes[index]

function ChangeJokes(){
  index = Math.floor((Math.random()*jokes.length));
  ab.innerHTML = jokes[index]
}