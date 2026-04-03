// axios.get('https://swapi.dev/api/people/1/')
//     .then(res => {
//         console.log('RESPONSE!', res);
//     })
//     .catch(e => {
//         console.log('ERROR!!!', e);
//     });

const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log('ERROR', e)
    }
}

// getStarWarsPerson(5);
// getStarWarsPerson(10);

// axios.get('https://swapi.dev/api/people/1/')
//      .then((res) => {
//         console.log('RESPONSE!', res);
//      })
//      .catch((e) => {
//         console.log('ERROR!!!', e);
//      });

// const getStarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch (e) {
//         console.log('ERROR', e)
//     }
// }

// getStarWarsPerson(5);
// getStarWarsPerson(10);

const jokes = document.querySelector('#jokes');

const getDadJoke = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        console.log(res.data);
    } catch (e) {
        console.log('ERROR', e);
    }
    
    return res.data.joke;
}

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.innerText = jokeText;
    jokes.append(newLI);
}