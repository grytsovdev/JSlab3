function fill() {
  var array = "";
  var table = document.getElementById("numbers");
  var output = document.getElementById("out");
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++) {
      array += table.rows[i].cells[j].innerHTML + " ";
    }
  }

  var result = array.trimEnd().split(" ");
  output.innerHTML = result.sort();
}
