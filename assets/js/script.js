// const questions = document.querySelectorAll(".questions__question-box");
// if (questions) {
//   questions.forEach((question) => {
//     question.addEventListener("click", () => {
//       const active = document.querySelector(".questions__question-box.active");
//       if (active && active !== question) {
//         active.classList.toggle("active");
//         active.nextElementSibling.style.maxHeight = 0;
//       }
//       question.classList.toggle("active");
//       const answer = question.nextElementSibling;
//       if (question.classList.contains("active")) {
//         answer.style.maxHeight = answer.scrollHeight + "px";
//       } else {
//         answer.style.maxHeight = 0;
//       }
//     });
//   });

//   if (document.querySelector(".questions__question-box.active")) {
//     let first = document.querySelector(".questions__question-box.active");
//     let second = first.nextElementSibling;
//     second.style.maxHeight = second.scrollHeight + "px";
//   }
// }
function stringChallenge(str) {
  const ChallengeToken = "47alhz90e25b";
  let stringWithDashes = "";

  for (let i = 0; i < str.length - 1; i++) {
    stringWithDashes += str[i];

    const currentNum = parseInt(str[i]);
    const nextNum = parseInt(str[i + 1]);

    if (currentNum % 2 !== 0 && nextNum % 2 !== 0) {
      stringWithDashes += "-";
    }
  }

  stringWithDashes += str[str.length - 1];
  const finalString = stringWithDashes + ChallengeToken;

  let stringWithUnderscores = "";

  for (let i = 0; i < finalString.length; i++) {
    if ((i + 1) % 4 === 0) {
      stringWithUnderscores += "_";
    } else {
      stringWithUnderscores += finalString[i];
    }
  }

  return stringWithUnderscores;
}

const inputString = "454793";
const outputString = stringChallenge(inputString);
alert(outputString);

let question = document.querySelectorAll(".drop-down__before-box");

question.forEach((question) => {
  question.addEventListener("click", (event) => {
    const active = document.querySelector(".drop-down__before-box.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});

const toggleActive = (el) =>
  document.getElementById(el).classList.toggle("active");

const addActive = (el) => document.getElementById(el).classList.add("active");
const removeActive = (el) =>
  document.getElementById(el).classList.remove("active");

// single product info section navigation

const showContent = (content, el) => {
  console.log(el);
  const contentEl = document.getElementById(content);
  if (!contentEl.classList.contains("active")) {
    const btns = document.querySelectorAll(".info-btn");
    const contents = document.querySelectorAll(".info-content");
    btns.forEach((btn) => btn.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));
    el.classList.add("active");
    contentEl.classList.add("active");
  }
};

///////////////////////////////////////////////////////////
// Set current year
if (document.querySelector(".year")) {
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
}

const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

// select state

const stateSelector = document.querySelector(".state-list");
if (stateSelector) {
  stateSelector.addEventListener("change", () => {
    const stateEl = document.getElementById(stateSelector.value);
    stateEl.parentNode.classList.toggle("active");
    stateEl.scrollIntoView();
  });
}

// updated states

const toggles = document.querySelectorAll(".state-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

//  ADVISOR

if (document.getElementById("start-questions")) {
  const startBtn = document.getElementById("start-questions");
  const questionarieForm = document.getElementById("questionarie");
  const contentSection = document.getElementById("content");
  const selectBtn = document.getElementById("form-select");
  const allStates = document.querySelectorAll(".select-state-input");
  const questions = document.querySelectorAll(".advisor__questions");
  const selectStatesEl = document.getElementById("select-state");
  let isChecked = 0;

  startBtn.addEventListener("click", () => {
    contentSection.classList.remove("active");
    questionarieForm.classList.add("active");
  });

  selectBtn.addEventListener("click", () => {
    allStates.forEach((state) => {
      if (state.checked === true) {
        selectStatesEl.classList.remove("active");
        questions.forEach((question) => {
          question.classList.add("active");
        });
        isChecked++;
      }
    });
    if (isChecked === 0) {
      alert("Pleace check the state you want.");
    }
  });
}
