/* Add custom Js code below */ 
// JavaScript-only Countdown Popup with Image

// Create and style the popup
function createCountdownPopup() {
    // Popup container
    const popup = document.createElement("div");
    popup.id = "countdownPopup";
    popup.style.position = "fixed";
    popup.style.top = "0";
    popup.style.left = "0";
    popup.style.width = "100%";
    popup.style.height = "100%";
    popup.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    popup.style.display = "flex";
    popup.style.alignItems = "center";
    popup.style.justifyContent = "center";
    popup.style.zIndex = "1000";
    
    // Popup content box
    const popupContent = document.createElement("div");
    popupContent.style.backgroundColor = "#fff";
    popupContent.style.padding = "20px";
    popupContent.style.width = "80%";
    popupContent.style.maxWidth = "400px";
    popupContent.style.textAlign = "center";
    popupContent.style.borderRadius = "10px";
    popupContent.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.2)";
    
    // Close button
    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.style.float = "right";
    closeBtn.style.fontSize = "24px";
    closeBtn.style.cursor = "pointer";
    closeBtn.onclick = closePopup;
    
    // Title
    const title = document.createElement("h3");
    title.textContent = "العرض سينتهي خلال:";
    
    // Countdown container
    const countdown = document.createElement("div");
    countdown.id = "countdown";
    countdown.style.fontSize = "24px";
    countdown.style.color = "#e74c3c";
    
    // Image element
    const image = document.createElement("img");
    image.src = "https://cdn.salla.sa/form-builder/647pNMaUBeN4JsDepffAWxT0luBE2EmFUQCw43ja.png";
    image.style.width = "100%";
    image.style.maxWidth = "350px";
    image.style.marginBottom = "15px";
  
    // Additional info
    const viewers = document.createElement("p");
    viewers.textContent = "17 شخصًا يشاهدون هذا المنتج الآن";
    
    const sales = document.createElement("p");
    sales.textContent = "تم بيع 18 قطعة خلال 22 ساعة الماضية";
    
    // Append elements
    popupContent.appendChild(closeBtn);
    popupContent.appendChild(image);  // Append the image before the counter
    popupContent.appendChild(title);
    popupContent.appendChild(countdown);
    popupContent.appendChild(viewers);
    popupContent.appendChild(sales);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
    
    // Set the countdown end time (6 hours from now)
    const countdownEnd = new Date(new Date().getTime() + 6 * 60 * 60 * 1000);
  
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = countdownEnd - now;
  
      if (distance < 0) {
        countdown.innerHTML = "انتهى العرض!";
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdown.innerHTML = `${days} أيام ${hours} ساعات ${minutes} دقائق ${seconds} ثواني`;
    }
  
    // Open the popup and start the countdown
    popup.style.display = "flex";
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById("countdownPopup").style.display = "none";
  }
  
  // Show the popup after a delay (e.g., 2 seconds after page load)
  window.onload = function () {
    setTimeout(createCountdownPopup, 200);
  };