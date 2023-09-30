console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = 'Rubens'
    console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Mario'
    console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// Iteration 3: Loops

    console.log(hacker1.toUpperCase());

let reverse =""
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverse += hacker2[i];
    }
    console.log(reverse);

if (hacker1.localeCompare(hacker2) == 1) {
    console.log("The navigator goes first, definitely.");
} else if (hacker1.localeCompare(hacker2) == -1) {
    console.log("The driver's name goes first.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus#1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mattis felis. Sed quis enim at diam vehicula mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum condimentum massa ut aliquam tristique. Ut eu augue vestibulum, sodales turpis sed, bibendum lectus. Donec ac aliquet massa. Aliquam aliquet tempor lacus, a pulvinar neque tincidunt eu. Nam sit amet lectus nisl. Quisque blandit porta odio, eu tempus purus ullamcorper ac. Integer luctus sit amet magna sit amet tincidunt. Nam bibendum, nunc et facilisis tempor, tortor libero pretium massa, at suscipit ligula velit vitae tortor."
"In vitae pulvinar urna. Morbi vel turpis magna. Vestibulum in orci non et enim vulputate mattis vel eu nulla. Nam condimentum augue erat, sed fermentum odio tincidunt scelerisque. Nulla lobortis metus a aliquet interdum. Nunc eros metus, finibus et volutpat quis, ultricies vitae quam. Aliquam vel lacinia ante, at pulvinar velit. Curabitur blandit lacus nec risus luctus, sit amet condimentum diam euismod. Praesent dignissim libero id quam ultricies, vel congue orci feugiat. Donec fringilla dui nulla, id scelerisque sapien egestas eget. Suspendisse non arcu tempor, placerat turpis sed, posuere purus."
"Suspendisse potenti. Maecenas egestas porttitor mi, vel porta libero cursus porta. Donec feugiat consectetur purus, sagittis vulputate eros porttitor id. Proin leo odio, dapibus sed sem vel, interdum suscipit magna. Sed convallis auctor turpis, rhoncus volutpat lorem commodo nec. Vivamus finibus commodo lorem in aliquam. Maecenas congue, lacus quis porta vulputate, felis lacus posuere ex, quis posuere ex est at lectus. Curabitur justo erat, molestie ut neque quis, sagittis luctus risus. Suspendisse aliquam enim efficitur, varius est vitae, vulputate lorem. Sed urna massa, placerat vel scelerisque sit amet, molestie a nulla. Nulla facilisi."

    console.log(longText.length);
    console.log(longText.indexOf("et"));

// Bonus#2

let phraseToCheck = "rotomotor"
let reversed =""
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
    reversed += phraseToCheck[i];
}

if (reversed == phraseToCheck) {
    console.log ("It's a Palindrome")
} else {
    console.log ("It's not a Palindrome")
}