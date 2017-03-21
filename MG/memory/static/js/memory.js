/**
 * Created by itc_user on 3/21/2017.
 */
/**
 * Created by itc_user on 1/29/2017.
 */

memoryGame = {};



memoryGame.array=['http://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-10.jpg',
    'http://cdn77.sadanduseless.com/wp-content/uploads/2016/05/funny-animals12.jpg',
    'http://i.upworthy.com/nugget/57ee80d644c6d1001b00005c/attachments/ComedyAnimalPhotos1-6c824d975bf9f10caad0e001eefa0d8a.jpg',
    'https://i.ytimg.com/vi/SF6McpBnu5A/maxresdefault.jpg',
    'http://imgs.abduzeedo.com/files/articles/baby-animals/Baby-Animals-011.jpg',
    'http://1funny.com/wp-content/uploads/2012/12/these_funny_animals_1099_640_01.jpg']




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
            card.style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/736x/9c/51/09/9c5109accff769196e3cbb9acabeb62f.jpg')";
            row.appendChild(card);
        }
        gameBoard.appendChild(row);
    }
    document.body.appendChild(gameBoard);

};

memoryGame.start = function () {
    memoryGame.generateBoard();
    memoryGame.array = memoryGame.doubleArray(memoryGame.array);
    memoryGame.array = memoryGame.shuffle(memoryGame.array);
};