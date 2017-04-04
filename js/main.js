

function mangas(name, img, genre, rating, price){
    this.name = name
    this.img = img
    this.genre = genre
    this.rating = rating
    this.price = price

}

var onePunchMan = new mangas('One Punch Man','img/opMan.jpg', 'Action, Comedy', 9, 14.99)
var youjoSenki = new mangas('Youjo Senki','img/youjoSenki.jpg', 'Action, Drama', 7.5, 13.99)
var fairyTail = new mangas('Fairy Tail','img/fairytail.jpg', 'Action, Fantasy', 8, 14.99 )
var reZero = new mangas('Re:Zero', 'img/reZero.jpg', 'Action,Fantasy', 9, 14.99)
var gurrenLagann = new mangas('Gurren Lagann', 'img/gurrenLagann.jpg', 'Action, Sci-fi', 10, 19.99)
var toLoveRu = new mangas('ToLoveRu', 'img/toLoveRu.jpg', 'Ecchi', 9.5, 9.99 )
var sailorMoon = new mangas('Sailor Moon', 'img/sailorMoon.jpg', 'Fantasy, Drama', 9.5, 15.99 )
var samuraiChamploo = new mangas('Samurai Champloo', 'img/samuraiChamploo.jpg', 'Action, Drama', 9.75, 14.99)
var killLaKill = new mangas('Kill La Kill', 'img/killLaKill.jpg', 'Action, Comedy', 9, 14.99)
var flcl = new mangas('Fooly Cooly', 'img/flcl.jpg', 'Comedy, Sci-Fi', 9.75, 15.99)
var dragonBallz = new mangas('Dragonball Z', 'img/dragonBallz.jpg', 'Action, Fantasy', 9.9, 15.99)
var yuyuHakusho = new mangas('Yu Yu Hakusho', 'img/yuyuHakusho.jpg', 'Action, Fantasy', 9.9, 15.99)
var onePiece = new mangas('One Piece', 'img/onePiece.jpg', 'Action, Adventure', 9.9, 15.99)
var naruto = new mangas('Naruto', 'img/naruto.jpg', 'Action, Comedy', 9.8, 14.99)
var bleach = new mangas('Bleach', 'img/bleach.jpg', 'Action, Fantasy', 9.75, 13.99)
var yourLieInApril = new mangas('Your Lie in April', 'img/yourLieInApril.png', 'Romance, Drama', 9.8, 14.99)
var psychoPass = new mangas('Psycho Pass', 'img/psychoPass.png', 'Action, Suspense', 9.8, 14.99 )
var bokuNoHero = new mangas('Boku No Hero Academia', 'img/bokuNoHero.jpg', 'Action, Comedy', 9.9, 14.99)
var mardockScramble = new mangas('Mardock Scramble', 'img/mardockScramble.jpg', 'Psychological', 9.75, 13.99)
var acca13 = new mangas('Acca 13', 'img/acca13.jpg', 'Political', 9.75, 13.99)


var mangaArray = []

mangaArray.push(onePunchMan)
mangaArray.push(youjoSenki)
mangaArray.push(fairyTail)
mangaArray.push(reZero)
mangaArray.push(gurrenLagann)
mangaArray.push(toLoveRu)
mangaArray.push(sailorMoon)
mangaArray.push(samuraiChamploo)
mangaArray.push(killLaKill)
mangaArray.push(flcl)
mangaArray.push(dragonBallz)
mangaArray.push(yuyuHakusho)
mangaArray.push(onePiece)
mangaArray.push(naruto)
mangaArray.push(bleach)
mangaArray.push(yourLieInApril)
mangaArray.push(psychoPass)
mangaArray.push(bokuNoHero)
mangaArray.push(mardockScramble)
mangaArray.push(acca13)

for( i = 0; i < mangaArray.length; i++){
//CREATE ELEMENTS
  var body = document.getElementById('body')
  var newDiv = document.createElement('div')
  body.appendChild(newDiv)
  var newH1 = document.createElement('p')
  var img = document.createElement('img')
  var paragraph = document.createElement('p')
  var paragraph2 = document.createElement('p')
  var paragraph3 = document.createElement('p')
  var button = document.createElement('button')



//CLASSES
   newDiv.className = 'col-sm-3'
   newH1.className = 'newH1'
   img.className = 'imgClass'
   paragraph.className = 'mangaGenre'
   paragraph2.className = 'mangaRating'
   paragraph3.className = 'mangaPrice'
   img.className = 'mangaImg'
   button.className = 'button'

//IDS
    newDiv.setAttribute('id', 'newDiv')
    newH1.setAttribute('id', 'newH1')
    paragraph.setAttribute('id', 'paragraph')
    paragraph2.setAttribute('id', 'paragraph2')
    paragraph3.setAttribute('id', 'paragraph3')
    img.setAttribute('src', mangaArray[i].img)
    button.setAttribute('id', 'button')

//TEXT CONTENT
    var headingText = document.createTextNode(mangaArray[i].name);
    var paragraphText = document.createTextNode('Genre: ' + mangaArray[i].genre);
    var mangaRating = document.createTextNode('Regie Rating: ' + mangaArray[i].rating);
    var mangaPrice = document.createTextNode('Price: $' + mangaArray[i].price);
    button.innerHTML= 'Add to Cart'
    newDiv.appendChild(newH1)
    newH1.appendChild(headingText)
    newH1.appendChild(img)
    newH1.appendChild(paragraph)
    paragraph.appendChild(paragraphText)
    paragraph.appendChild(paragraph2)
    paragraph2.appendChild(mangaRating)
    paragraph2.appendChild(paragraph3)
    paragraph3.appendChild(mangaPrice)
    paragraph3.appendChild(button)










}
