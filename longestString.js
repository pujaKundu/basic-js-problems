/*
    take an array as parameter that contains names,return the longest name in that array
*/
//array of names 
const friends = ['Mohsena', 'Luni', 'Erina', 'Mina', 'Diba', 'Leen'];

function bestFriend(names) {
    const longestName = names[0];
    for (const name of names) {
        if (name.length > longestName) {
            longestName = name;
        }
    }
    return longestName;
}

const longestName = bestFriend(friends);
console.log(`Longest name is ${longestName}`);