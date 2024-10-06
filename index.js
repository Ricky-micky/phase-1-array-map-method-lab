const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = skiSchool.map(function (student) {
  return student + " the skier";
});
const robots = [
  { name: "Johnny 5", modes: 5, isActivated: false },
  { name: "C3PO", modes: 3, isActivated: false },
  { name: "Sonny", modes: 2.5, isActivated: false },
  { name: "Baymax", modes: 1.5, isActivated: false },
];

const activatedRobots = robots.map((robot) => {
  return Object.assign({}, robot, {
    modes: robot.modes * 2,
    isActivated: true,
  });
});

console.log(activatedRobots);
const tutorials = [
   "What Does The This Keyword Mean?",
    "What Is The Constructor OO Pattern?",
   "Implementing Blockchain Web API",
  'The Test Driven Development Workflow',
   "What Is NaN And How Can We Check For It",
       "What Is The Difference Between StopPropagation And PreventDefault?",
      "Immutable State And Pure Functions",
       "What Is The Difference Between == And ===?",
       "What Is The Difference Between Event Capturing And Bubbling?",
      "What Is JSONP?",
];

const titleCased = () => {
  return tutorials
}
