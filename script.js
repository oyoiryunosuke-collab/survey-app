document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // DOM取得
    // ===============================
    const slider = document.getElementById("slider");
    const img = document.getElementById("morphImage");
    const alphaText = document.getElementById("alphaValue");
    const submitBtn = document.getElementById("submitBtn");
  
    const nameInput = document.getElementById("name");
    const genderSelect = document.getElementById("gender");
    const ageSelect = document.getElementById("age");
    const adjectiveSelect = document.getElementById("adjective");
  
    const nationalitySelect = document.getElementById("nationality");
    const nationalityOtherInput = document.getElementById("nationality_other");
  
    // ===============================
    // スライダー操作（輪郭変更）
    // ===============================
    slider.oninput = () => {
      alphaText.textContent = slider.value;
      img.src = `morph_frames/morph_${String(slider.value).padStart(3, "0")}.png`;
    };
  
    // ===============================
    // 国籍：その他を選んだら入力欄表示
    // ===============================
    nationalitySelect.onchange = () => {
      if (nationalitySelect.value === "その他") {
        nationalityOtherInput.style.display = "block";
      } else {
        nationalityOtherInput.style.display = "none";
        nationalityOtherInput.value = "";
      }
    };
  
    // ===============================
    // 送信処理
    // ===============================
    submitBtn.onclick = () => {
  
      const alpha = slider.value;
      const name = nameInput.value;
      const gender = genderSelect.value;
      const age = ageSelect.value;
      const adjective = adjectiveSelect.value;
  
      const nationality =
        nationalitySelect.value === "その他"
          ? nationalityOtherInput.value
          : nationalitySelect.value;
  
      // 入力チェック
      if (!name || !gender || !age || !nationality || !adjective) {
        alert("すべての項目に回答してください。\nPlease answer all questions.");
        return;
      }
  
      // Googleフォーム送信URL
      const formUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLScZVpW-JOWAQhF7QFdypK_TjTjDm3vWAptT5UxrAwVLUJ8b2A/formResponse";
  
      const formData = new FormData();
      formData.append("entry.694318826", name);
      formData.append("entry.238313639", gender);
      formData.append("entry.953704070", age);
      formData.append("entry..356466293", nationality);
      formData.append("entry.965325963", alpha);
      formData.append("entry.2049649696", adjective);
      
  
      fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });
  
      alert("ご協力ありがとうございました！\nThank you for your participation!");
    };
  
  });
  
