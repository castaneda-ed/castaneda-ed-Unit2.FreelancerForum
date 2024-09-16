// A visitor enters the website and finds a list of available freelancers.
//  Each freelancer has a name, an occupation, and a starting price for 
// their services. They observe on the list Alice, the writer with a 
// starting price of $30, and Bob, who is a teacher, has a starting price 
// of $50.

// The visitor also finds a message that displays the average starting 
// price of all the freelancers. In this example, the average starting price
//  is $40.

// A few seconds later, a new listing appears for a freelancer
//  named Carol, who is a programmer and has a starting price of $70.
//   The average starting price is updated to $50.

// New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.

const freelancers = [
    { name: "Slice", price: 25, occupation: "gardener" },
    { name: "Pressure", price: 50, occupation: "programmer" },
    { name: "Possibility", price: 40, occupation: "teacher" },
    { name: "Prism", price: 80, occupation: "teacher" },
    { name: "Impulse", price: 45, occupation: "pilot" },
    { name: "Spark", price: 75, occupation: "dancer" },
    { name: "Wire", price: 45, occupation: "carpenter" },
    { name: "Goose", price: 70, occupation: "electrician" },
    { name: "Patricio", price: 35, occupation: "roofer" },
    { name: "Ganzo", price: 100, occupation: "gamer" },
  ];
const actualFreelancer = [

  ]

    
  const totalPrice = actualFreelancer.reduce((sum, freelancer) => 
    sum + freelancer.price, 0);

  const addfreelancerIntervalId = setInterval(selectFreelancer, 1500);

render()

function render() {
    const names = document.querySelector("#names");
    const availableName = actualFreelancer.map((person) => {
        const element = document.createElement("li");
        element.textContent = person.name;
        return element;
      });
      names.replaceChildren(...availableName);

const occupations = document.querySelector("#occupations");
const availableOccupation = actualFreelancer.map((person) => {
    const element = document.createElement("li");
    element.textContent = person.occupation;
    return element;
  });
  occupations.replaceChildren(...availableOccupation);

  const prices = document.querySelector("#prices");
const availablePrices = actualFreelancer.map((person) => {
    const element = document.createElement("li");
    element.textContent = person.price;
    return element;
  });
  prices.replaceChildren(...availablePrices);

  const totalPrice = actualFreelancer.reduce((sum, freelancer) => sum + freelancer.price, 0);
  const averagePrice = actualFreelancer.length > 0 ? (totalPrice / actualFreelancer.length) : 0;

  const average = document.querySelector('#average');
  average.textContent = averagePrice;
}

function selectFreelancer() {
    if (actualFreelancer.length >= 10) {
        clearInterval(addfreelancerIntervalId);
      }

      const availableFreelancers = freelancers.filter(free => 
        !actualFreelancer.includes(free) );

    const free = availableFreelancers[Math.floor(Math.random() * availableFreelancers.length)];
  
    actualFreelancer.push(free);
    render()
}


