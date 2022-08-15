let msg_execute = "<p>Ha ejecutado</p>";
document.addEventListener("DOMContentLoaded", assignEvents);

function assignEvents() {
  let checks = document.querySelector(".checks");
  checks.addEventListener("click", (e) => {
    runChecks(e.target.dataset.cy);
  });

  let box_one = document.querySelector(".events__box");
  box_one.addEventListener("click", (e) => {
    runEvents(e.target.dataset.cy);
  });
}

function runChecks(cy) {
  let checksList = Array.from(document.querySelectorAll(".checks input"));
  switch (cy) {
    case "call":
      allChecks(cy, checksList);
      break;
    case "cone":
      anyChecks(cy, checksList);
      break;
    case "ctwo":
      anyChecks(cy, checksList);
      break;
  }
}

function allChecks(cy, checksList) {
  if (!document.querySelector(`[data-cy="${cy}"]`).checked)
    return checksList.forEach((e) => (e.checked = false));
  checksList.forEach((e) => (e.checked = true));
}
function anyChecks(cy, checksList) {
  let all = document.querySelector(`[data-cy="call"]`);
  let element = document.querySelector(`[data-cy="${cy}"]`);
  let checkedList = checksList.filter((e) => e.checked == true);

  if (!all.checked && checkedList.length == 2) return all.checked = true;
  if (!all.checked && checkedList.length == 1) return element.checked = true;
  all.checked = false;
  element.checked = false;
}
function runEvents(cy) {
  let result = document.querySelector(".result__box");
  switch (cy) {
    case "execute":
      execute(result);
      break;
    case "clear":
      clear(result);
      break;
    default:
      console.log(
        `Haz click en un botón.
¿Estaría bien controlar estos espacios y no comprobar el valor de cada click en cualquier parte de la caja?`
      );
      break;
  }
}

function execute(result) {
  result.innerHTML = msg_execute;
}

function clear(result) {
  result.innerHTML = "";
}

/*
import { execSync } from 'child_process';

document.addEventListener("DOMContentLoaded", assignEvents);

function assignEvents() {
    let execute = document.getElementById("execute");
    execute.addEventListener("click", executeTests);

}

function executeTests(){

}



const output = execSync('ls', { encoding: 'utf-8' });

console.log('The output is:');
console.log(output);



var objShell = new ActiveXObject("Shell.Application");
        objShell.ShellExecute("cmd.exe", "C: cd C:\\pr main.exe blablafile.txt auto", "C:\\WINDOWS\\system32", "open", "1");

*/
