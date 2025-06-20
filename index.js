const userNumberInput = prompt('Write down whole number');
const num = Number(userNumberInput);
debugger
if (!userNumberInput?.trim()) {
  alert('Error: nothing was entered');
} else if (!Number.isInteger(+userNumberInput)) {
  alert('Error: not a whole number');
} else if (+userNumberInput < 1) {
  alert('Error: number smaller than 1 ');
} else if (num === 2) {
  console.log(`${num} is a simple number`);
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(`${num} is a composite number`);
      i = num;
    } 
  } console.log(`${num} is a simple number`);
}