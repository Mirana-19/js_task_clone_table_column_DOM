'use strict';

const refs = {
  table: document.querySelector('table'),
};

const tableRows = refs.table.rows;

for (const row of tableRows) {
  for (let i = 0; i < row.children.length; i++) {
    if (i === 1) {
      const newTableData =
        row.parentElement.tagName === 'THEAD' ||
        row.parentElement.tagName === 'TFOOT'
          ? document.createElement('th')
          : document.createElement('td');

      newTableData.textContent = row.children[i].textContent;
      row.insertBefore(newTableData, row.lastElementChild);
    }
  }
}
