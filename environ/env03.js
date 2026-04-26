let environmentTitle = "Peaceful Galaxy";

let environmentElements = ["aliens", "stars", "planets", "sun"];

let mainEntity = {
  name: "aliens",
  type: "extraterrestrial lifeforms",
  mood: ["faint","strong","unstable","clear","blinking","abnormal","changing","dangerous","strange"],
  isMoving: true
};
let count = 0;

$("#lifebutton").click(function () {

  count++;

  $(this).html(`Scanned for life ${count} times`);

  let lifeforms = count + 2;

  let index = count % mainEntity.mood.length;
  let currentMood = mainEntity.mood[index];

 $("#output").html(`
  <p class="scan-text">${lifeforms} lifeforms have been identified.</p>
  <p class="scan-text">The signal is ${currentMood}.</p>
`);
});
$("#playBtn").click(function () {
  let audio = $("#sound")[0];

  if (audio.paused) {
    audio.play();
    $(this).text("Pause Sound");
  } else {
    audio.pause();
    $(this).text("Play Sound");
  }
});
  if (audio.paused) {
    audio.play();
    $(this).text("Pause Sound");
  } else {
    audio.pause();
    $(this).text("Play Sound");
  }
  
let sunFacts = [
  "The Sun is about 93 million miles from Earth.",
  "The Sun made mostly of hydrogen and helium.",
  "The Sun accounts for 99.8% of the solar system’s mass.",
  "Light from the Sun takes about 8 minutes to reach Earth.",
  "The core of the Sun is about 15 million °C.",
  "The Sun produces energy through nuclear fusion."
];

$("#sunBtn").click(function () {

  let randomIndex = Math.floor(Math.random() * sunFacts.length);
  let fact = sunFacts[randomIndex];

  $("#output").html(`
    <p class="scan-text">${fact}</p>
  `);

});