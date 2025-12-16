const slider = document.getElementById("slider");
const img = document.getElementById("morphImage");
const alphaText = document.getElementById("alphaValue");
const submitBtn = document.getElementById("submitBtn");

// スライダー操作
slider.oninput = () => {
  alphaText.textContent = slider.value;
  img.src = `morph_frames/morph_${String(slider.value).padStart(3, "0")}.png`;
};

// 送信処理
submitBtn.onclick = () => {
  const alpha = slider.value;
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  const adjective = document.getElementById("adjective").value;

  if (!name || !gender || !age || !adjective) {
    alert("すべての項目に回答してください。\nPlease answer all questions.");
;
    return;
  }

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScZVpW-JOWAQhF7QFdypK_TjTjDm3vWAptT5UxrAwVLUJ8b2A/formResponse";

  const formData = new FormData();
    formData.append("entry.694318826", name);
    formData.append("entry.238313639", gender);
    formData.append("entry.953704070", age);
    formData.append("entry.965325963", alpha);
    formData.append("entry.2049649696", adjective);

  fetch(formUrl, {
    method: "POST",
    mode: "no-cors",
    body: formData
  });

  alert("ご協力ありがとうございました！\nThank you for your participation!");
;
};
