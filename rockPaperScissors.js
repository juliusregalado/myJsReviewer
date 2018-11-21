console.log('RPS!')
console.log('call the rps function enter r, p, or s as an arguement')

function rps() {
    let user = gatherUserInput();
    let ai = gatherCompInput();

    function gatherUserInput() {
        let userInput = prompt('Rock, Paper or Scissors?').toLowerCase()
        if(userInput === 'rock' || userInput ===  'paper' || userInput === 'scissors') {
            return userInput;
        } else {
            alert('please enter valid input');
            gatherUserInput()
        }
    }

    function gatherCompInput() {
        let compRand = Math.round(Math.random() * 3)
        switch(compRand) {
            case 1:
                return 'rock'
                break;
            case 2:
                return 'paper'
                break;
            case 3:
                return 'scissors'
                break
            default:
                return 'undecided'
        } 
    }
    
    function match(user, ai) {
        console.log(`You chose ${user} | AI chose ${ai}`)
        if(user === 'rock' && ai === 'scissors' || user === 'scissors' && ai === 'paper' || user === 'paper' && ai === 'rock' ) {
            console.log('you win!')
        } else if (user === ai) {
            console.log('tie!')
        } else {
            console.log('you lose')
        }
    }
    match(user, ai)
}

rps()

