# Lottery Number Generator

This JavaScript program simulates a weekly lottery game where a player’s randomly generated lottery picks are compared against the weekly winning numbers. The program also identifies and displays any matching numbers between the player’s picks and the winning numbers.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Example Output](#example-output)
- [License](#license)

## Features
- Generates 6 unique random lottery numbers for the player and 6 unique winning numbers each week.
- Compares the player’s picks with the weekly winning numbers.
- Displays the player’s numbers, the winning numbers, and any matching numbers.

## Installation
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone or download the repository files to your local machine.

## Usage
1. Open a terminal and navigate to the directory where the file is saved.
2. Run the program with Node.js by entering:
   
       ```bash
        node lotteryNumberGenerator.js

## Functions

### lottoNums() 
Generates a random number between 1 and 53.

### weeklyLottoPicks()
Generates an array of 6 unique, sorted random numbers representing the weekly winning lottery numbers.

### playerAutoPicks()
Generates an array of 6 unique, sorted random numbers representing the player's lottery picks.

### comparePicksAndWinners()
Compares the player’s numbers with the winning numbers and stores any matches in an array.

### playTheLotto()
Runs the main lottery game:

* Generates the player's numbers and the weekly winning numbers.
* Compares them and displays the results in the console.

## Example Output
    Your numbers were: 3, 12, 25, 33, 47, 51
    The weekly winning numbers were: 5, 12, 23, 33, 46, 52
    Your matching numbers this week: 12, 33

If there are no matches, the program will indicate that as well:
   
    Your numbers were: 4, 13, 24, 36, 45, 50
    The weekly winning numbers were: 5, 15, 23, 33, 46, 51
    You did not have any matching numbers this week.

## License
This project is licensed under the MIT License.

---

