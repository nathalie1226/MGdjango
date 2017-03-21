/**
 * Created by itc_user on 3/21/2017.
 */
/**
 * Created by itc_user on 1/29/2017.
 */

memoryGame = {};
memoryGame.cardClicked = 0;
memoryGame.trueChoice = 0;
memoryGame.gamePaused=false;

memoryGame.array = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg'];
memoryGame.array = ['https://www.google.co.il/imgres?imgurl=http%3A%2F%2Fcdn77.sadanduseless.com%2Fwp-content%2Fuploads%2F2016%2F05%2Ffunny-animals12.jpg&imgrefurl=http%3A%2F%2Fwww.sadanduseless.com%2F2016%2F05%2Funflattering-animal-pictures%2F&docid=t493_Ar_Pnb1-M&tbnid=3n8NYMFCi2SYOM%3A&vet=1&w=660&h=495&bih=530&biw=1093&ved=0ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwgcKAIwAg&iact=c&ictx=1#h=495&imgrc=3n8NYMFCi2SYOM:&vet=1&w=660',
'https://www.google.co.il/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSF6McpBnu5A%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSF6McpBnu5A&docid=WKbjvEZA0CUsfM&tbnid=bZKQHjfxLeLmnM%3A&vet=10ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwgfKAUwBQ..i&w=1280&h=720&bih=530&biw=1093&q=animal%20pics&ved=0ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwgfKAUwBQ&iact=mrc&uact=8#h=720&imgrc=bZKQHjfxLeLmnM:&vet=10ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwgfKAUwBQ..i&w=1280',
'https://www.google.co.il/imgres?imgurl=http%3A%2F%2Fi.upworthy.com%2Fnugget%2F57ee80d644c6d1001b00005c%2Fattachments%2FComedyAnimalPhotos1-6c824d975bf9f10caad0e001eefa0d8a.jpg&imgrefurl=http%3A%2F%2Fwww.upworthy.com%2Fa-contest-was-held-to-find-this-years-funniest-animal-photo-here-are-15-of-the-best&docid=1QdB8T9vyIJiGM&tbnid=zfZbImzkMI7LvM%3A&vet=10ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwghKAcwBw..i&w=750&h=390&bih=530&biw=1093&q=animal%20pics&ved=0ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwghKAcwBw&iact=mrc&uact=8#h=390&imgrc=zfZbImzkMI7LvM:&vet=10ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwghKAcwBw..i&w=750',
'https://www.google.co.il/imgres?imgurl=http%3A%2F%2Fstatic.boredpanda.com%2Fblog%2Fwp-content%2Fuuuploads%2Fcute-baby-animals%2Fcute-baby-animals-10.jpg&imgrefurl=http%3A%2F%2Fwww.boredpanda.com%2Fcute-baby-animals%2F&docid=KWMCD_mZpaR2UM&tbnid=YEZiPqnaGVuz-M%3A&vet=10ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwg6KBYwFg..i&w=605&h=422&itg=1&bih=530&biw=1093&q=animal%20pics&ved=0ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwg6KBYwFg&iact=mrc&uact=8#h=422&imgrc=YEZiPqnaGVuz-M:&vet=10ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwg6KBYwFg..i&w=605',
'https://www.google.co.il/imgres?imgurl=http%3A%2F%2Fwww.shunvmall.com%2Fdata%2Fout%2F9%2F47829211-animal-pic.jpg&imgrefurl=http%3A%2F%2Fwww.shunvmall.com%2Fanimal-pic.html&docid=sDEvCywNTGP-VM&tbnid=asH4KvDOFFJ3dM%3A&vet=10ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwg-KBowGg..i&w=670&h=440&bih=530&biw=1093&q=animal%20pics&ved=0ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwg-KBowGg&iact=mrc&uact=8#h=440&imgrc=asH4KvDOFFJ3dM:&vet=10ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwg-KBowGg..i&w=670',
    'https://www.google.co.il/imgres?imgurl=http%3A%2F%2Fimgs.abduzeedo.com%2Ffiles%2Farticles%2Fbaby-animals%2FBaby-Animals-011.jpg&imgrefurl=http%3A%2F%2Fabduzeedo.com%2F50-incredibly-cute-baby-animal-pictures-around-world&docid=LWcu4DqjYUdZYM&tbnid=BgshQFdxp5LWqM%3A&vet=10ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwhQKCwwLA..i&w=580&h=580&bih=530&biw=1093&q=animal%20pics&ved=0ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwhQKCwwLA&iact=mrc&uact=8#h=580&imgrc=BgshQFdxp5LWqM:&vet=10ahUKEwjMjIj2iefSAhUEOsAKHXpMDUAQMwhQKCwwLA..i&w=580'
];

memoryGame.doubleArray = function (arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i]);
        result.push(arr[i]);

    }
    return result
};

memoryGame.shuffle = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

memoryGame.generateBoard = function () {
    var gameBoard = document.getElementById('game-board');
    for (var i = 0; i < 3; i++) {
        var row = document.createElement('div');
        row.className = 'row';
        for (var j = 0; j < 4; j++) {
            var card = document.createElement('div');
            card.className = 'card';
            card.id = (3 * j + i);
            card.style.backgroundImage = "url('https://www.google.co.il/imgres?imgurl=http%3A%2F%2Fopengameart.org%2Fsites%2Fdefault%2Ffiles%2Fcard%2520back%2520blue.png&imgrefurl=http%3A%2F%2Fopengameart.org%2Fcontent%2Fcolorful-poker-card-back&docid=RH6TGEgaNHWqCM&tbnid=I5R6yhnAJjtnpM%3A&vet=10ahUKEwipj-qhjOfSAhVlCsAKHZf_DMkQMwgpKAIwAg..i&w=686&h=976&bih=530&biw=1093&q=back%20card%20&ved=0ahUKEwipj-qhjOfSAhVlCsAKHZf_DMkQMwgpKAIwAg&iact=mrc&uact=8#h=976&imgrc=I5R6yhnAJjtnpM:&vet=10ahUKEwipj-qhjOfSAhVlCsAKHZf_DMkQMwgpKAIwAg..i&w=686')";
            card.addEventListener("click", memoryGame.showCard);
            row.appendChild(card);
        }
        gameBoard.appendChild(row);
    }
    document.body.appendChild(gameBoard);

};
var card1;
var card2;
memoryGame.showCard = function (event) {
    if(!memoryGame.paused){
    var card = event.target;
    var cardId = card.id;
    card.style.backgroundImage = "url(" + memoryGame.array[cardId] + ")";

    if (memoryGame.cardClicked == 0) {
        card1 = card;
        memoryGame.cardClicked = 1;
    }
    else {
        card2 = card;

        if (card1.style.backgroundImage == card2.style.backgroundImage) {
            memoryGame.trueChoice++;
            memoryGame.cardClicked = 0;
        }
        else {
            memoryGame.paused=true;
            setTimeout(function () {
                card1.style.backgroundImage = "url('static/images/sideA1.jpg')";
                card2.style.backgroundImage = "url('static/images/sideA1.jpg')";
                memoryGame.cardClicked = 0;
                memoryGame.paused=false;
            }, 1000)
        }

        if (memoryGame.trueChoice === 6) {
            console.log('you won');
            location.reload();
        }
    }

    }
};

memoryGame.start = function () {
    memoryGame.generateBoard();
    memoryGame.array = memoryGame.doubleArray(memoryGame.array);
    memoryGame.array = memoryGame.shuffle(memoryGame.array);
};