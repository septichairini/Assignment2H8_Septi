const editButton = document.getElementById("tombolEdit");
const editForm = document.getElementById("editForm");
const updateForm = document.getElementById("updateForm");

// Toggle form visibility
editButton.addEventListener("click", () => {
  if (editForm.style.display === "none" || editForm.style.display === "") {
    editForm.style.display = "block";
    // isi form dan update
    document.getElementById("nama").value =
      document.getElementById("tempatNama").innerText;
    document.getElementById("role").value =
      document.getElementById("tempatSpesial").innerText;
    document.getElementById("availabilityInput").value =
      document.getElementById("availability").innerText;
    document.getElementById("ageInput").value =
      document.getElementById("age").innerText;
    document.getElementById("locationInput").value =
      document.getElementById("location").innerText;
    document.getElementById("experienceInput").value =
      document.getElementById("experience").innerText;
    document.getElementById("emailInput").value =
      document.getElementById("email").innerText;
  } else {
    editForm.style.display = "none";
  }
});

// Handle form submission
updateForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Update info profile
  document.getElementById("tempatNama").innerText =
    document.getElementById("nama").value;
  document.getElementById("tempatRole").innerText =
    document.getElementById("role").value;
  document.getElementById("availability").innerText =
    document.getElementById("availabilityInput").value;
  document.getElementById("age").innerText =
    document.getElementById("ageInput").value;
  document.getElementById("location").innerText =
    document.getElementById("locationInput").value;
  document.getElementById("experience").innerText =
    document.getElementById("experienceInput").value;
  document.getElementById("email").innerText =
    document.getElementById("emailInput").value;

  // Hide the form setelah submit
  editForm.style.display = "none";
});
