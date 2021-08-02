function getList(inputList) {
  let numList = inputList
    .toString()
    .split(",")
    .map((value) => parseInt(value));
  return numList;
}

function calculateMediana(numList) {
  const numListHalf = parseInt(numList.length / 2);

  if (numList.length % 2 === 0) {
    const numberA = numList[numListHalf];
    const numberB = numList[numListHalf - 1];

    const promedioAB = (numberA + numberB) / 2;

    mediana = promedioAB;
  } else {
    mediana = numList[numListHalf];
  }

  return mediana;
}

function onClickButtonCalculateMediana() {
  const inputList = document.getElementById("inputMediana").value;
  let numList = getList(inputList);
  numList.sort((a, b) => {
    return a - b;
  });
  const mediana = calculateMediana(numList);

  alert(`Mediana from ${numList} is ${mediana}`);
}
