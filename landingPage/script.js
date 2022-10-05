/* ==================== wait function ======================= */
// function to wait for time "delay" millisec
const wait = (DELAY) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // document.body.style.margin = "0";
      // console.log("In wait function....")
      resolve();
      return;
    }, DELAY);
  });
};
/* ========================================================== */

/* ======== Logic for text appearing on home page =========*/
const tagline = document.getElementById("tagline");
const taglineText = tagline.textContent;
const taglineLen = taglineText.length;
var ch;
const taglineSpeed = 80
const taglineRetypeDelay = 3000
/* function to type text dynamically */
const dynamicAddText = (ele, text, len, speed, retypeDelay, once = false) => {
  if (ch <= len) {
    ele.textContent += text.charAt(ch);
    ch++;
    setTimeout(dynamicAddText.bind(null, ele, text, len, speed, retypeDelay, once), speed);
  } else if (ch >= len) {
    if (once) return;
    wait(retypeDelay)
      .then(() => {
        // console.log("Yeah you are going right")
        ch = 0;
        ele.textContent = "";
        dynamicAddText(ele, text, len, speed, retypeDelay, once);
      })
      .catch(() => {
        console.log("error");
      });
    return;
  }
};


const contentSpeed = 50

const line1 = document.getElementById("line1")
const line1Text = line1.textContent;
const line1Len = line1Text.length;
line1.textContent = ""

const line2 = document.getElementById("line2")
const line2Text = line2.textContent;
const line2Len = line2Text.length;
line2.textContent = ""

const line3 = document.getElementById("line3")
const line3Text = line3.textContent;
const line3Len = line3Text.length;
line3.textContent = ""


const typeText = (ele, text, len, isTagline = false) => {
  if (isTagline) {
    ch = 0
    ele.textContent = ""
    dynamicAddText(ele, text, len, taglineSpeed, taglineRetypeDelay);
    return;
  }
  ch = 0;
  dynamicAddText(ele, text, len, contentSpeed, 0, true);
  return;
}

const homeBtn = document.getElementById("home-btn");
const showbtn = (btn) => {
  homeBtn.style.visibility = "visible";
  homeBtn.style.opacity = "1";
}

document.addEventListener("DOMContentLoaded", () => {
  wait(1500)
    .then(() => {
      typeText(line1, line1Text, line1Len);
      setTimeout(typeText.bind(null, line2, line2Text, line2Len), 22 * contentSpeed);
      setTimeout(typeText.bind(null, line3, line3Text, line3Len), 60 * contentSpeed);
      setTimeout(typeText.bind(null, tagline, taglineText, taglineLen, true), 150 * contentSpeed);
      setTimeout(showbtn.bind(null, homeBtn), 118 * contentSpeed);
    })
    .catch((err) => {
      console.log("error", err);
    });
});