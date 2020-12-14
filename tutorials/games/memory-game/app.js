document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'apple',
            img: 'images/apple.png'
        },
        {
            name: 'banana',
            img: 'images/banana.png'
        },
        {
            name: 'fig',
            img: 'images/fig.png'
        },
        {
            name: 'lemon',
            img: 'images/lemon.png'
        },
        {
            name: 'mango',
            img: 'images/mango.png'
        },
        {
            name: 'pear',
            img: 'images/pear.png'
        },
        {
            name: 'apple',
            img: 'images/apple.png'
        },
        {
            name: 'banana',
            img: 'images/banana.png'
        },
        {
            name: 'fig',
            img: 'images/fig.png'
        },
        {
            name: 'lemon',
            img: 'images/lemon.png'
        },
        {
            name: 'mango',
            img: 'images/mango.png'
        },
        {
            name: 'pear',
            img: 'images/pear.png'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    // create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('You have clicked the same image!');
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            // alert("You found a match");
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cards[optionOneId].style.borderColor = "white";
            cards[optionTwoId].style.borderColor = "white";
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            // alert("Sorry, try again");
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congratulations! You found them all!";
        }
    }

    // flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 400);
        }
    }

    createBoard();
});

function restart() {
    location.reload();
}

const restartBtn = document.getElementById('restart');

restartBtn.addEventListener('click', restart);