'use strict';

function thousands_separators(num) {
    var numString = buildNumString(num);
    var stringArray = buildStringArray(numString);

    return buildThousandsSeparator(numString, stringArray);
}

function buildNumString(num) {

    return num.toString();
}

function buildStringArray(numString) {

    return numString.split('');
}

function judgeNumString(numString) {

    return numString.search(/\D/);
}

function buildThousandsSeparator(numString, stringArray) {
    var thousandsSeparator;

    var judgement = judgeNumString(numString);
    if (judgement == -1) {
        thousandsSeparator = buildIntSeparator(stringArray);
    }
    else {
        thousandsSeparator = buildFloatSeparator(stringArray);
    }

    return thousandsSeparator;
}

function buildIntSeparator(stringArray) {
    for (var i = stringArray.length - 3; i > 0; i -= 3) {
        stringArray.splice(i, 0, ',');
    }

    return (stringArray.join(''));
}

function buildFloatSeparator(stringArray) {
    for (var i = stringArray.length - 1; stringArray[i] != '.'; i--);
    for (i = i - 3; i >= 0; i -= 3) {
        stringArray.splice(i, 0, ',');
    }

    return stringArray.join('');
}

module.exports = thousands_separators;
