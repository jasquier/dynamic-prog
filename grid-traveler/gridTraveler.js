function gridTraveler(m, n) {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 1));
console.log(gridTraveler(1, 2));
console.log(gridTraveler(2, 2));
console.log(gridTraveler(2, 3));
// console.log(gridTraveler(18, 18).toLocaleString());
