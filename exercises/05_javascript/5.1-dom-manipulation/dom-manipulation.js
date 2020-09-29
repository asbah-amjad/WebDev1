/**
 * Sort table rows alphabetically based on the values in a column
 *
 * @param {Number} col column index (zero based)
 * @param {HTMLTableElement} table the table to be sorted
 */
function sortTableByColumn(col, table) {
  // TODO: Implement this function
  var i, switching;
  var rows = table.rows,
    rlen = rows.length;
  var arr = new Array();

  for (i = 1; i < rlen - 1; i++) {
    //cells = rows[i].cells;
    // clen = cells.length;
    arr[i] = new Array();
  }
  arr.sort(function (a, b) {
    if (a.localeCompare(b) > 0) switching = true;
  });
  for (i = 1; i < rlen - 1; i++) {
    if (switching) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    }
  }
}

/**
 * DO NOT EDIT THE CODE BELOW!
 *
 * The code below is there just to make it easier to test the code.
 *
 * If your function works correctly you should be able to sort the table
 * simply by clicking any column heading and the table should be immediately
 * sorted by values in that column.
 */

// find the table element
const table = document.getElementById("sortable");

// attach an event listener to each th element's click event
table.querySelectorAll("thead th").forEach((th, i) =>
  th.addEventListener("click", () => {
    sortTableByColumn(i, table);
  })
);
