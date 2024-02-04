//your code here
 let totalRounds;
    let roundsLeft;
    let userPoints;
    let computerPoints;
    let computerChoose;

    document.getElementById('play-game').addEventListener('click', startGame);

    function startGame() {
      totalRounds = document.getElementById('game-number').value;
      roundsLeft = totalRounds;
      userPoints = 0;
      computerPoints = 0;
      document.getElementById('round-result').textContent = '';
      document.getElementById('rounds-left').textContent = `Rounds Left: ${roundsLeft}`;
      document.getElementById('user-points').textContent = `User Points: ${userPoints}`;
      document.getElementById('computer-points').textContent = `Computer Points: ${computerPoints}`;
      document.getElementById('game-result').textContent = '';

      // Computer randomly chooses
      computerChoose = Math.floor(Math.random() * 3); // 0, 1, or 2
    }

    function userChoice(choice) {
      if (roundsLeft > 0) {
        roundsLeft--;

        // Computer randomly chooses
        computerChoose = Math.floor(Math.random() * 3); // 0, 1, or 2

        // Compare choices and determine the round result
        const roundResult = getRoundResult(choice, computerChoose);

        // Update points and display results
        updatePoints(roundResult);
        displayResults(roundResult);

        document.getElementById('rounds-left').textContent = `Rounds Left: ${roundsLeft}`;

        if (roundsLeft === 0) {
          // Display final game result
          displayGameResult();
        }
      }
    }

    function getRoundResult(userChoice, computerChoice) {
      if (userChoice === computerChoice) {
        return 'TIE';
      } else if (
        (userChoice === 'rock' && computerChoice === 2) ||
        (userChoice === 'paper' && computerChoice === 0) ||
        (userChoice === 'scissors' && computerChoice === 1)
      ) {
        return 'WON';
      } else {
        return 'LOSE';
      }
    }

    function updatePoints(roundResult) {
      if (roundResult === 'WON') {
        userPoints++;
      } else if (roundResult === 'LOSE') {
        computerPoints++;
      }
      document.getElementById('user-points').textContent = `User Points: ${userPoints}`;
      document.getElementById('computer-points').textContent = `Computer Points: ${computerPoints}`;
    }

    function displayResults(roundResult) {
      const resultDisplay = document.getElementById('round-result');
      resultDisplay.textContent = `Round Result: ${roundResult}`;
    }

    function displayGameResult() {
      const gameResultDisplay = document.getElementById('game-result');
      if (userPoints > computerPoints) {
        gameResultDisplay.textContent = 'Game Result: WON';
      } else if (userPoints < computerPoints) {
        gameResultDisplay.textContent = 'Game Result: LOSE';
      } else {
        gameResultDisplay.textContent = 'Game Result: TIE';
      }
    }
