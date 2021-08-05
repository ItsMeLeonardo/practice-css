/* ==== drop and drag ==== */

const dropItem = document.querySelector('#drop-item');
new Sortable(dropItem, {
  animation: 350,
  chosenClass: "sortable-chosen",
  dragClass: "sortable-drag",
});
