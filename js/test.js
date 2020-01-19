let age = prompt("Input your age");

let whoAreYou;

switch (true) {
  case 0 < age <= 12:
    whoAreYou = "A child";
    break;
  case 12 < age <= 18:
    whoAreYou = "A teenager";
    break;
}

console.log(whoAreYou);