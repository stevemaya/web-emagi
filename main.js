document.querySelector('#emagi-input').addEventListener('keyup', () => {
    const userInput = document.querySelector('#emagi-input').value;
    let result = 'encode';
    for (const radioButton of document.querySelectorAll('.radio-button')) {
        if (radioButton.checked) {
            result = radioButton.value;
        }
    }

    switch(result) {
        case 'encode':
            document.querySelector('#results').innerText = encode(userInput);
            break;

        case 'translate':
            document.querySelector('#results').innerText = translate(userInput);
            break;

        case 'madlib':
            document.querySelector('#results').innerText = madlib(userInput);
            break;

        case 'search':
            const matches = search(userInput);
            if (matches.length === 0) {
                document.querySelector('#results').innerText = 'Your search returned no emojis.';
            } else {
                const results = document.querySelector('#results');
                results.innerHTML = '';
                for (const match of matches) {
                    const emoji = document.createElement('p');
                    emoji.innerText = match.symbol;
                    results.appendChild(emoji);
                }
            }

            break;

        case 'random':
            if (getCategory(userInput).length === 0) {
                document.querySelector('#results').innerText = randomElement(emojis).symbol;
            } else {
                document.querySelector('#results').innerText = randomElement(getCategory(userInput)).symbol;
            }
            break;

        default:
            console.log('Bug!');
            break;
    }

})
