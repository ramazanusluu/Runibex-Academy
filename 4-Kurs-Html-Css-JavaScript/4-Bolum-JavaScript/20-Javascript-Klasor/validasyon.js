function denetle() {
  let elementler = document.getElementsByClassName("zorunlu");
  console.log(elementler);
  let uygunmu = false;
  for (let i = 0; i < elementler.length; i++) {
    uygunmu = elementDoluMu(elementler[i].id);
  }
  return uygunmu;
}
function elementDoluMu(id) {
  let donecekDeger = false;
  let inputElement = document.getElementById(id);
  let deger = inputElement.value;

  if (deger === "") {
    let hataMesajı = inputElement.getAttribute("data-mesaj");
    let hedef = inputElement.getAttribute("data-hedef");
    document.getElementById(hedef).innerText = hataMesajı;
    inputElement.addEventListener("change", function () {
      document.getElementById(hedef).innerText = "";
    });
    donecekDeger = false;
  } else {
    donecekDeger = true;
  }
  return donecekDeger;
}
