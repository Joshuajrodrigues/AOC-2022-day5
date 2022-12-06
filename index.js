//let stack1 = ["t","r","g","w","q","m","f","p"]
//let stack2 = ["r","f","h"]
//let stack3 =["d","s","h","g","v","r"]
`
[T]     [D]         [L]            
[R]     [S] [G]     [P]         [H]
[G]     [H] [W]     [R] [L]     [P]
[W]     [G] [F] [H] [S] [M]     [L]
[Q]     [V] [B] [J] [H] [N] [R] [N]
[M] [R] [R] [P] [M] [T] [H] [Q] [C]
[F] [F] [Z] [H] [S] [Z] [T] [D] [S]
[P] [H] [P] [Q] [P] [M] [P] [F] [D]
`;

let stack1 = ['z', 'n'];
let stack2 = ['m', 'c', 'd'];
let stack3 = ['p'];

let stackContainer = [stack1, stack2, stack3];
let instructionSet = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

let arrayfy = instructionSet.split('\n');

const instructionReader = ([itemCount, from, to]) => {
  let accumulator = [];
  for (let i = 0; i < itemCount; i++) {
    let poped = stackContainer[from - 1].pop();
    accumulator.push(poped);
  }
  stackContainer[to - 1] = [...stackContainer[to - 1], ...accumulator];
};

for (let index in arrayfy) {
  let set = arrayfy[index]
    .replace('move', '')
    .replace('from', ',')
    .replace('to', ',');

  instructionReader(set.split(',').map(Number));
}
for (let i in stackContainer) {
  console.log(stackContainer[i].at(-1));
}
