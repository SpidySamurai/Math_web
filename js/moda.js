function getList(inputList) {
  let numList = inputList
    .toString()
    .split(",")
    .map((value) => parseInt(value));
  return numList;
}

function calculateModa(numList) {
  let numListCount = {};

  numList.map(function (element) {
    if (numListCount[element]) {
      numListCount[element] += 1;
    } else {
      numListCount[element] = 1;
    }
  });

  const listArray = Object.entries(numListCount).sort(
    (elementoA, elementoB) => {
      return elementoA[1] - elementoB[1];
    }
  );

  const moda = listArray[listArray.length - 1];
  return moda;
}

function onClickButtonCalculateModa() {
  const inputList = document.getElementById("inputModa").value;
  let numList = getList(inputList);
  numList.sort((a, b) => {
    return a - b;
  });
  const moda = calculateModa(numList);

  alert(`Moda from ${numList} is ${moda[0]} with ${moda[1]} repetitions`);
}
