function getList(inputList) {
  let numList = inputList
    .toString()
    .split(",")
    .map((value) => parseInt(value));
  return numList;
}

function calculateMedia(numList) {
  const sumaLista = numList.reduce(function (
    valorAcumulado = 0,
    nuevoElemento
  ) {
    return valorAcumulado + nuevoElemento;
  });

  const media = sumaLista / numList.length;
  return media;
}

function onClickButtonCalculateMedia() {
  const inputList = document.getElementById("inputMedia").value;
  let numList = getList(inputList);
  numList.sort((a, b) => {
    return a - b;
  });
  const media = calculateMedia(numList);

  alert(`Media from ${numList} is ${media}`);
}
