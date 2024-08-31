const avatarCharacters = [
    {
        name: "Aang",
        age: 112,
        element: "Air"
    },
    {
        name: "Katara",
        age: 16,
        element: "Water"
    },
    {
        name: "Sokka",
        age: 17,
        element: "Non-bender"
    },
    {
        name: "Zuko",
        age: 17,
        element: "Fire"
    },
    {
        name: "Toph",
        age: 12,
        element: "Earth"
    },
    {
        name: "Iroh",
        age: 60,
        element: "Fire"
    },
    {
        name: "Azula",
        age: 14,
        element: "Fire"
    },
    {
        name: "Mai",
        age: 15,
        element: "Non-bender"
    },
    {
        name: "Ty Lee",
        age: 15,
        element: "Non-bender"
    },
    {
        name: "Suki",
        age: 16,
        element: "Non-bender"
    },
    {
        name: "King Bumi",
        age: 112,
        element: "Earth"
    },
    {
        name: "Ozai",
        age: 43,
        element: "Fire"
    },
    {
        name: "Gran Gran",
        age: 85,
        element: "Water"
    },
    {
        name: "Pakku",
        age: 70,
        element: "Water"
    },
    {
        name: "Jeong Jeong",
        age: 70,
        element: "Fire"
    },
    {
        name: "Hakoda",
        age: 40,
        element: "Non-bender"
    },
    {
        name: "Bato",
        age: 45,
        element: "Non-bender"
    },
    {
        name: "Jet",
        age: 16,
        element: "Non-bender"
    },
    {
        name: "Long Feng",
        age: 55,
        element: "Non-bender"
    },
    {
        name: "Haru",
        age: 16,
        element: "Earth"
    }
];

// ==================== TASK 1 ====================

const taskA = document.querySelector('#task-a')
const taskB = document.querySelector('#task-b')
const taskC = document.querySelector('#task-c')

// A) What kind of 'element' is what Zuko bends?
let elem = "";
const zukoCharacter = avatarCharacters.find((z_Element) => z_Element.name === "Zuko");
if (zukoCharacter) {
    elem = zukoCharacter.element;
}
taskA.innerText = `Zuko bends: ${elem}`;


// B) Are all characters adults (older than 18 years)? Display, 'Yes.' or 'No.' into the given field.

const old = avatarCharacters.every((e) => e.age > 18);
const s = old ? "Yes" : "No";
taskB.innerText = `Are All Characters adults: ${s}`;



// C) List the names of waterbenders!

const Names = avatarCharacters
  .filter((char) => char.element === "Water")
  .map((char) => char.name)
 

taskC.innerText = `Names of waterbenders: ${Names}`;



// ==================== TASK 2 ====================

let selected = []
const t_select = document.querySelector('table')

 /* A) YOU SHOULD INSERT YOUR SOLUTION HERE */
 t_select.addEventListener('click', (e) => {
    if (e.target.tagName === 'TD') {
      if (selected.length === 4) {
        selected = []
        Array.from(document.querySelectorAll('td')).forEach(td => td.style.backgroundColor = 'unset')
      }
      e.target.style.backgroundColor = 'lightgreen'
      selected.push(e.target.innerText)
    }
  })

document.querySelector('button').addEventListener('click', (e) => {
    if(selected.length == 4){
        // generate an unordered list (ul) out of the selected array! 
        // First create a `ul` and then append list items `li`-s inside of it.
        // After that, append the created ul to the div with the id `#answers`
        /* B) YOU SHOULD INSERT YOUR SOLUTION HERE */
        const ul = document.createElement('ul')
        selected.forEach(item => {
          const li = document.createElement('li')
          li.innerText = item
          ul.appendChild(li)
        })
        document.querySelector('#answers').appendChild(ul)
        
        const p = document.createElement("p")
        if(checkElementInQuartets()){
            p.classList.add('good')
            p.innerHTML = 'YEEES! Nice job! 😊'
        } else {
            p.classList.add('bad')
            p.innerHTML = 'Try again 😭'
        }
        ul.append(p)
    }
})
function checkElementInQuartets() {
    const goodies = [
        ["Dog", "Cat", "Hen", "Rabbit"],
        ["Cheese", "Meat", "Rice", "Eggs"],
        ["Watermelon", "Cherry", "Lemon", "Grapes"],
        ["Socks", "Gloves", "Scarf", "Boots"]
    ];
    let isGood = false;
    for (let i = 0; i < goodies.length; i++) {
        const quartet = goodies[i];
        let foundAll = true;
        for (let j = 0; j < selected.length; j++) {
            if (!quartet.includes(selected[j])) {
                foundAll = false;
                break;
            }
        }
        if (foundAll) {
            isGood = true;
            break;
        }
    }
    return isGood;
}

