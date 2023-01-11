const name = prompt('What is your name')
const school = prompt('What is your school name')
const time = prompt('What time do you woke up')
const scare = prompt('What is something you are afraid of')
const class1 = prompt('What class do you have on first period')
const class2 = prompt('What class do you have on second period')
const class3 = prompt('What class do you have on third period')

document.write (`<p class='firstMsg'> ${name} woke up at ${time} and went to ${school}. The first class that ${name} has is ${class1}. During a pop quiz, a ${scare} pop out on ${name}'s paper and followed him from ${class2} to class ${class3}</p>`)
