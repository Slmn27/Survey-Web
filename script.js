function submitForm(e) {
  e.preventDefault();
  const url = "AKfycbywp69Bq0alVttJ4cEcjf0or2I4Nr-KFFGHYZemo1Y"; // Ganti dengan URL dari web app
  const formData = new FormData(document.getElementById("survey-form"));

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("response-message").textContent = "Your response has been recorded.";
      document.getElementById("survey-form").reset();
    })
    .catch((error) => {
      document.getElementById("response-message").textContent = "There was an error submitting your response.";
      console.error("Error:", error);
    });
}
