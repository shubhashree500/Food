const firebaseConfig = {
  apiKey: "AIzaSyD255Uv89pf7vfP8bIqgJRzkArKNAMRHhY",
  authDomain: "donation-app-6f0f3.firebaseapp.com",
  projectId: "donation-app-6f0f3",
  storageBucket: "donation-app-6f0f3.appspot.com",
  messagingSenderId: "856099815251",
  appId: "1:856099815251:web:e9d19ab5b437871e35eba6",
  measurementId: "G-0LZG88LWB9"
};
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
console.log(db);

const name = document.getElementById("name");
const num = document.getElementById("num");
const donation = document.getElementById("donate");
const address = document.getElementById("address");
const msg = document.getElementById("msg");
const submit = document.getElementById("submit-btn");

submit.addEventListener("click", function () {
  db.collection("food").add({
    name: name.value,
    mobile: num.value,
    DOW: donation.value,
    msg: msg.value,
    address: address.value,
  });
});

document.querySelectorAll(".image-container img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".pop-image").style.display = "block";
    document.querySelector(".pop-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".pop-image span").onclick = () => {
  document.querySelector(".pop-image").style.display = "none";
};
