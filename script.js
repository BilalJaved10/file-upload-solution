const API = "http://localhost:5000/api/files";

/* ===================== UPLOAD ===================== */
document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById("fileInput");

  if (!fileInput.files.length) {
    alert("Select a file first");
    return;
  }

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  try {
    const res = await fetch(`${API}/upload`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Upload failed");

    alert("Upload successful ✅");

    fileInput.value = "";
    loadFiles();

  } catch (err) {
    console.error(err);
    alert("Upload failed ❌");
  }
});


/* ===================== LOAD FILES ===================== */
async function loadFiles() {
  try {
    const res = await fetch(API);

    if (!res.ok) throw new Error("Cannot fetch files");

    const files = await res.json();

    const list = document.getElementById("fileList");
    list.innerHTML = "";

    files.forEach((file) => {
      const li = document.createElement("li");

      li.innerHTML = `
        <a href="http://localhost:5000${file.url}" target="_blank">
          ${file.filename}
        </a>
        <button class="delete" onclick="deleteFile('${file.filename}')">
          Delete
        </button>
      `;

      list.appendChild(li);
    });

  } catch (err) {
    console.error(err);
  }
}


/* ===================== DELETE ===================== */
async function deleteFile(filename) {
  try {
    await fetch(`${API}/${encodeURIComponent(filename)}`, {
      method: "DELETE",
    });

    loadFiles();

  } catch (err) {
    console.error(err);
  }
}

loadFiles();
