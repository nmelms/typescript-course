function combine(input1: number | string, input2: number | string) {
  let res;
  if (typeof input1 === "number" && typeof input2 === "number") {
    res = input1 + input2;
  } else if (typeof input1 === "string" && typeof input2 === "string") {
    res = input1 + input2;
  }

  return res;
}

const combinedAges = combine(20, 25);
console.log(combinedAges);
