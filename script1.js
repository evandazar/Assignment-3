// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

for (let j = 1; j <= 4; j++) {
  let pound = "";
  for(let h = 1; h <= j; h++)
  {
        pound += "#";
  }
  console.log(pound);
}
for (let i = 3; i >= 1; i--) {
    let pound = "";
    for(let h = 1; h <= i; h++)
    {
          pound += "#";
    }
    console.log(pound);
}
