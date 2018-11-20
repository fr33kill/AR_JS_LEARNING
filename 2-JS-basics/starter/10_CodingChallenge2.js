var johnScore1, johnScore2, johnScore3, mikeScore1, mikeScore2, mikeScore3, maryScore1, maryScore2, maryScore3, johnAvgScore, mikeAvgScore, maryAvgScore;

johnScore1 = 89;
johnScore2 = 120;
johnScore3 = 103;

johnAvgScore = (johnScore1 + johnScore2 + johnScore3) / 3;
console.log('johnAvgScore - ' + johnAvgScore);

mikeScore1 = 116;
mikeScore2 = 94;
mikeScore3 = 123;

mikeAvgScore = (mikeScore1 + mikeScore2 + mikeScore3) / 3;
console.log('mikeAvgScore - ' + mikeAvgScore);

maryScore1 = 97;
maryScore2 = 134;
maryScore3 = 105;

maryAvgScore = (maryScore1 + maryScore2 + maryScore3) / 3;
console.log('maryAvgScore - ' + maryAvgScore);

if (johnAvgScore > mikeAvgScore) {
    console.log('John is the winner with ' + johnAvgScore);
} else if (johnAvgScore < mikeAvgScore) {
    console.log('Mike is the winner with ' + mikeAvgScore);
} else {
    console.log('There was a draw with equal ' + mikeAvgScore + ' points');
}

switch(true) {
    case (johnAvgScore > mikeAvgScore) && (johnAvgScore > maryAvgScore):
        console.log('John is the winner with ' + johnAvgScore);
        break;
    case (mikeAvgScore > johnAvgScore) && (mikeAvgScore > maryAvgScore):
        console.log('Mike is the winner with ' + mikeAvgScore);
        break;
    case (maryAvgScore > johnAvgScore) && (maryAvgScore > mikeAvgScore):
        console.log('Mary is the winner with ' + maryAvgScore);
        break;
    default:
        console.log('There was a draw with equal ' + mikeAvgScore + ' points');
        break;

}