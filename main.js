
function showDetails(a, b, c) {
    const name = typeof a === 'string' ? a : typeof b === 'string' ? b : c;
    const age = typeof a === 'number' ? a : typeof b === 'number' ? b : c;
    const status = typeof a === 'boolean' ? a : typeof b === 'boolean' ? b : c;

    const hireStatus = status ? 'You Are Available For Hire' : 'You Are Not Available For Hire';

    return `Hello ${name}, Your Age Is ${age}, ${hireStatus}`;
}

console.log(showDetails("Mostafa" , 20 , true));
console.log(showDetails(20,"Mostafa" , true));
console.log(showDetails( false , 20 , "Mostafa"));
console.log("hello world");

let name;
name = "Mostafa";
console.log(name);
