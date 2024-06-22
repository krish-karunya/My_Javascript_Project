// let qrText = document.getElementById("qrText");
// let qrimage = document.getElementById("qrimage");
// let imgBox = document.getElementById("imgBox");

// function generateQR() {
//   if (qrText.value.length > 0) {
//     qrimage.src =
//       " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
//       qrText.Value;
//     imgBox.classList.add("show-img");
//   } else {
//     qrText.classList.add("error");
//     setTimeout(() => {
//       qrText.classList.remove("error");
//     }, 1000);
//   }
// }

const obj = {
  ip: ["i", "iph", "iphone"],
  iph: ["i", "iph", "iphone"],
};
if (obj["ip"]) {
  console.log(obj["ip"]);
}
