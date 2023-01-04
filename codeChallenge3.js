/*
Code Challenge 3

1 - calculate the avarage score for each team, using the test data below.
2 - compare the team's avarage scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same avarage score).
test data
dolphins score 96, 108 and 89;
koalas score 88, 91 and 110;


3 - BONUS 1: include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: use logical operator to test for minimum score, as well as multiple else-if blocks.
test data bonus 1:
dolphins 97, 112, 101
koalas 109, 95, 123


4 - BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no teams wins the trophy.
test bonus 2:
dolphins 97, 112, 101
koalas 109, 95, 106.
*/

/*
1 - calculate the avarage score for each team, using the test data below.
2 - compare the team's avarage scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same avarage score).
test data
dolphins score 96, 108 and 89;
koalas score 88, 91 and 110;
*/

//TEST DATA 1

/*
const dScore1 = 96;
const dScore2 = 108;
const dScore3 = 89;
const dolphinPoints = (dScore1 + dScore2 + dScore3) / 3;

const kScore1 = 88;
const kScore2 = 91;
const kScore3 = 110;
const koalasPoints = (kScore1 + kScore2 + kScore3) / 3;

if (dolphinPoints > koalasPoints) {
  console.log(
    `The Dolphin avarage score(${dolphinPoints}) is greater than Koalas avarage score(${koalasPoints}), so, the Dolphin Wins!`
  );
} else if (koalasPoints > dolphinPoints) {
  console.log(
    `The Koalas avarage score(${koalasPoints}) is greater than Dolphin avarage score(${dolphinPoints}), so, the Koalas Wins!`
  );
} else {
  console.log(
    `They have the same avarage score! Dolphin(${dolphinPoints}) and Koalas(${koalasPoints}). They Draw!`
  );
}

*/

/*
3 - BONUS 1: include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: use logical operator to test for minimum score, as well as multiple else-if blocks.
test data bonus 1:
dolphins 97, 112, 101
koalas 109, 95, 123

*/

// TEST DATA 2 (BONUS 1)

/*
const dScore1 = 97;
const dScore2 = 112;
const dScore3 = 101;

const dolphinPoints = (dScore1 + dScore2 + dScore3) / 3;

const kScore1 = 109;
const kScore2 = 95;
const kScore3 = 123;
const koalasPoints = (kScore1 + kScore2 + kScore3) / 3;

if (dolphinPoints > koalasPoints && dolphinPoints >= 100) {
  console.log(
    `The Dolphin avarage score(${dolphinPoints}) is greater than Koalas avarage score(${koalasPoints}), so, the Dolphin Wins!`
  );
} else if (koalasPoints > dolphinPoints && koalasPoints >= 100) {
  console.log(
    `The Koalas avarage score(${koalasPoints}) is greater than Dolphin avarage score(${dolphinPoints}), so, the Koalas Wins!`
  );
} else {
  console.log(
    `They have no minimum avarage score of 100! Dolphin(${dolphinPoints}) and Koalas(${koalasPoints}). No one Wins!`
  );
}

*/

/*
4 - BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no teams wins the trophy.
test bonus 2:
dolphins 97, 112, 101
koalas 109, 95, 106.
*/

//TEST DATA 3 (BONUS 2)

const dScore1 = 97;
const dScore2 = 112;
const dScore3 = 101;

const dolphinPoints = (dScore1 + dScore2 + dScore3) / 3;

const kScore1 = 109;
const kScore2 = 95;
const kScore3 = 106;
const koalasPoints = (kScore1 + kScore2 + kScore3) / 3;

if (dolphinPoints > koalasPoints && dolphinPoints >= 100) {
  console.log(
    `The Dolphin avarage score(${dolphinPoints}) is greater than Koalas avarage score(${koalasPoints}), so, the Dolphin Wins!`
  );
} else if (koalasPoints > dolphinPoints && koalasPoints >= 100) {
  console.log(
    `The Koalas avarage score(${koalasPoints}) is greater than Dolphin avarage score(${dolphinPoints}), so, the Koalas Wins!`
  );
} else if (
  dolphinPoints &&
  koalasPoints >= 100 &&
  dolphinPoints === koalasPoints
) {
  console.log(
    `They have the same score! Dolphin(${dolphinPoints}) and Koalas(${koalasPoints}). They Draw!`
  );
} else {
  console.log(
    `They have no minimum avarage score of 100! Dolphin(${dolphinPoints}) and Koalas(${koalasPoints}). No one Wins!`
  );
}

// Here is for 1 point for each game win, not part of the original problem.
//TEST DATA 1

/*
const dolphinGame1 = 96;
const dolphinGame2 = 108;
const dolphinGame3 = 89;
let dolphinScore = 0;

const koalasGame1 = 88;
const koalasGame2 = 91;
const koalasGame3 = 110;
let koalasScore = 0;

if (dolphinGame1 > koalasGame1) {
  dolphinScore = dolphinScore + 1;
} else if (koalasGame1 > dolphinGame1) {
  koalasScore = koalasScore + 1;
}

if (dolphinGame2 > koalasGame2) {
  dolphinScore = dolphinScore + 1;
} else if (koalasGame2 > dolphinGame2) {
  koalasScore = koalasScore + 1;
}

if (dolphinGame3 > koalasGame3) {
  dolphinScore = dolphinScore + 1;
} else if (koalasGame3 > dolphinGame3) {
  koalasScore = koalasScore + 1;
}

console.log(
  `The Dolphin Team Score: ${dolphinScore}, Koalas Team Score: ${koalasScore}.`
);

if (dolphinScore > koalasScore) {
  console.log("The Dolphin Wins!");
} else if (koalasScore > dolphinScore) {
  console.log("The Koalas Wins!");
} else {
  console.log("They draw!");
}
*/

/*
3 - BONUS 1: include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: use logical operator to test for minimum score, as well as multiple else-if blocks.
test data bonus 1:
dolphins 97, 112, 101
koalas 109, 95, 123
*/

// TEST DATA 2

/*
const dolphinGame1 = 97;
const dolphinGame2 = 112;
const dolphinGame3 = 101;
let dolphinScore = 0;

const koalasGame1 = 109;
const koalasGame2 = 95;
const koalasGame3 = 123;
let koalasScore = 0;

if (dolphinGame1 > koalasGame1 && dolphinGame1 >= 100) {
  dolphinScore = dolphinScore + 1;
} else if (koalasGame1 > dolphinGame1 && koalasGame1 >= 100) {
  koalasScore = koalasScore + 1;
}

if (dolphinGame2 > koalasGame2 && dolphinGame2 >= 100) {
  dolphinScore = dolphinScore + 1;
} else if (koalasGame2 > dolphinGame2 && koalasGame2 >= 100) {
  koalasScore = koalasScore + 1;
}

if (dolphinGame3 > koalasGame3 && dolphinGame3 >= 100) {
  dolphinScore = dolphinScore + 1;
} else if (koalasGame3 > dolphinGame3 && koalasGame3 >= 100) {
  koalasScore = koalasScore + 1;
}

console.log(
  `The Dolphin Team Score: ${dolphinScore}, Koalas Team Score: ${koalasScore}.`
);

if (dolphinScore > koalasScore) {
  console.log("The Dolphin Wins!");
} else if (koalasScore > dolphinScore) {
  console.log("The Koalas Wins!");
} else {
  console.log("They draw!");
}
*/

/*
4 - BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no teams wins the trophy.
test bonus 2:
dolphins 97, 112, 101
koalas 109, 95, 106.
*/

// TEST DATA 3

/*
const dolphinGame1 = 97;
const dolphinGame2 = 112;
const dolphinGame3 = 101;
let dolphinScore = 0;

const koalasGame1 = 109;
const koalasGame2 = 95;
const koalasGame3 = 106;
let koalasScore = 0;

if (dolphinGame1 > koalasGame1 && dolphinGame1 >= 100) {
  dolphinScore = dolphinScore + 1;
} else if (koalasGame1 > dolphinGame1 && koalasGame1 >= 100) {
  koalasScore = koalasScore + 1;
}

if (dolphinGame2 > koalasGame2 && dolphinGame2 >= 100) {
  dolphinScore = dolphinScore + 1;
} else if (koalasGame2 > dolphinGame2 && koalasGame2 >= 100) {
  koalasScore = koalasScore + 1;
}

if (dolphinGame3 > koalasGame3 && dolphinGame3 >= 100) {
  dolphinScore = dolphinScore + 1;
} else if (koalasGame3 > dolphinGame3 && koalasGame3 >= 100) {
  koalasScore = koalasScore + 1;
}

console.log(
  `The Dolphin Team Score: ${dolphinScore}, Koalas Team Score: ${koalasScore}.`
);

if (dolphinScore > koalasScore) {
  console.log("The Dolphin Wins!");
} else if (koalasScore > dolphinScore) {
  console.log("The Koalas Wins!");
} else {
  console.log("They draw!");
}

*/
