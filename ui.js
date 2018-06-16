class UI {
  constructor() {
    this.userProfile = document.querySelector(".user-profile");
    this.userRepos = document.querySelector(".user-repos");
  }

  displayUser(user) {
    console.log(user);

    let html = `
      <div class="image-box">
        <img class="user-image" src=${user.avatar_url} alt="Github User"></img>
        <a class="user-link" href=${
          user.html_url
        } target="_blank">View Profile</a>
      </div>
      <div class="user-details">
        <div class="profile-badges">
          <span class="badge badge-primary">Public Repos: ${
            user.public_repos
          }</span>
          <span class="badge badge-secondary">Public Gists: ${
            user.public_gists
          }</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
        </div>
        <div class="user-info">
          <ul class="info-list">
            <li class="info-item">Company: ${user.company}</li>
            <li class="info-item">Website/Blog: ${user.blog}</li>
            <li class="info-item">Location: ${user.location}</li>
            <li class="info-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
      <br>
    `;

    this.userProfile.innerHTML = html;
  }

  displayRepos(repos) {
    let output = '<h3 class="repo-heading">Latest Repos</h3>';
    output += '<ul class="repo-list">';

    repos.forEach(repo => {
      output += `        
          <li class="repo-item">
            <a class="repo-link" href=${repo.html_url} target="_blank">${
        repo.full_name
      }
            </a>
            <div class="repo-badges">
              <span class="badge badge-primary">
              Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${
                repo.watchers_count
              }</span>
              <span class="badge badge-success">Forks: ${
                repo.forks_count
              }</span>
            </div>
        </li>
      `;
    });

    this.userRepos.innerHTML = output;
  }

  showAlert(msg) {
    if (!document.querySelector(".error")) {
      const header = document.querySelector(".header");
      const container = document.querySelector(".container");
      const errorDiv = document.createElement("div");
      errorDiv.className = "error";
      errorDiv.appendChild(document.createTextNode(msg));

      container.insertBefore(errorDiv, header);

      setTimeout(() => {
        document.querySelector(".error").remove();
      }, 2000);
    }
  }

  clearUser() {
    while (this.userProfile.firstChild) {
      this.userProfile.removeChild(this.userProfile.firstChild);
    }

    while (this.userRepos.firstChild) {
      this.userRepos.removeChild(this.userRepos.firstChild);
    }
  }
}
