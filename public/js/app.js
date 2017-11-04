function onClickButton() {
  var input = document.getElementById('input'),
    output = document.getElementById('output')
  if (!input || !output) return;
  output.value = convertLowerCaseToUpperCase(input.value);
}