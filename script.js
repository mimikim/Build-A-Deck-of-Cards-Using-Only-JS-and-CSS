var returnValue = '';

// cards
var cardValues = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// suits (suit name and associated unicode character)
var cardSuits = [{
    "suit": "hearts",
    "unicode": "&hearts;"
}, {
    "suit": "spades",
    "unicode": "&spades;"
}, {
    "suit": "diamonds",
    "unicode": "&diams;"
}, {
    "suit": "clubs",
    "unicode": "&clubs;"
}];

// function to assemble card div
var cardAssembling = function (value, unicode) {
    return '<div class="card">' +
    '<div class="value">' + value +
    '<div class="suit">' + unicode + '</div></div>' +
    '<div class="center suit">' + unicode + '</div>' +
    '<div class="value right">' + value +
    '<div class="suit">' + unicode + '</div></div>' +
    '</div>';
};

// for each suit,
for (var s in cardSuits) {
    var suit = cardSuits[s]['suit'],
        unicode = cardSuits[s]['unicode'];

    returnValue += '<div class="' + suit + '">';

    // loop through each card
    for (var v in cardValues) {
        var value = cardValues[v];
        returnValue += cardAssembling(value, unicode);
    }

    returnValue += '</div>';
}

document.body.innerHTML = returnValue;