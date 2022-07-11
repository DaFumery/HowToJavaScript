const nombreFavori = Number(prompt("Quel est ton nombre favori mec?"));
console.log(nombreFavori);
console.log(typeof nombreFavori);

if (nombreFavori === 23) {
  console.log("Excellent, quel super nombre, chapeau");
} else if (nombreFavori === 7) {
  console.log("7 c'est pas mal aussi mais moins bien que 23");
} else {
  console.log("T'as aucune allure mec");
}
