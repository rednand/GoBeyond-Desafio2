function addRow() {
  var table = document.getElementById("table");
  var row = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  td1.innerHTML = document.getElementById("name").value;
  td2.innerHTML = document.getElementById("vendas").value * 0.15 + 1500;
  row.appendChild(td1);
  row.appendChild(td2);
  table.children[0].appendChild(row);
}