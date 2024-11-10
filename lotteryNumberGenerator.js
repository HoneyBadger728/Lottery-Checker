const lottoNums = () => {

 return Math.floor(Math.random() * 53 + 1)
}

const winningNums = []

const weeklyLottoPicks = () => {
    winningNums.length = 0;
    while (winningNums.length < 6) {
        let num = lottoNums();
        if (!winningNums.includes(num)) {
            let i = 0;
            while (i < winningNums.length && winningNums[i] < num) {
                i++;
            }
            winningNums.splice(i, 0, num)
        }
    }

    return winningNums
}



const playerPicks = []

const playerAutoPicks = () => {
    playerPicks.length = 0;
    while (playerPicks.length < 6) {
        let pick = lottoNums();
        if (!playerPicks.includes(pick)) {
            let i = 0;
            while (i < playerPicks.length && playerPicks[i] < pick) {
                i++;
            }
            playerPicks.splice(i, 0, pick)
        }
        
    }
    return playerPicks
} 


const matchingNums = []

const comparePicksAndWinners = () => {
    matchingNums.length = 0;
    for (let i = 0; i < playerPicks.length; i++) {

        if (winningNums.includes(playerPicks[i])) {
            matchingNums.push(playerPicks[i])
        }
    }
    return matchingNums
}


const playTheLotto = () => {
    playerAutoPicks();
    weeklyLottoPicks();
    console.log(`Your numbers were: ${playerPicks.join(`, `)}`);
    console.log(`The weekly winning numbers were: ${winningNums.join(`, `)}`);
    
    comparePicksAndWinners()
    
    if (matchingNums.length > 0) {
        console.log(`Your matching numbers this week: ${matchingNums.join(`, `)}`)
    } else {
        console.log(`You did not have any matching numbers this week.`)
    }
}

playTheLotto()