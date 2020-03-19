  var link = document.querySelector(".write-us-button");
  var popup = document.querySelector(".write-us");
  var close = popup.querySelector(".modal-close");
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=login]");
  var email = popup.querySelector("[name=email]");
  var isStorageSupport = !0;
  var storage = "";
  try {
    storage = localStorage.getItem("login")
  } catch (err) {
    isStorageSupport = !1
  }
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage && login.value && email.value) {
      feedback.focus()
    } else {
      login.focus()
    }
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error")
  });
  form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error")
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value)
      }
    }
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error")
      }
    }
  })
