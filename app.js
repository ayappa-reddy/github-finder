const github = new Github(),
  ui = new UI();

const userNameInputEl = document.querySelector(".username-input");

userNameInputEl.addEventListener("keyup", getUserAndRepos);

function getUserAndRepos(e) {
  let userName = e.target.value;

  if (userName !== "") {
    let user = github.getUser(userName);

    user.then(data => {
      // data.user.message = 'Not Found'
      if (data.user.message) {
        ui.showAlert("User Not Found");
      } else {
        ui.displayUser(data.user);
        ui.displayRepos(data.repos);
      }
    });
  } else {
    ui.clearUser();
  }
}
