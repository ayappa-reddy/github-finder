class Github {
  constructor() {
    this.client_id = keys.client_id;
    this.client_secret = keys.client_secret;
    this.repos_sort = "created: asc";
    this.repos_count = 5;
  }

  async getUser(userName) {
    const userResponse = await fetch(
      `https://api.github.com/users/${userName}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${userName}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const user = await userResponse.json();
    const repos = await repoResponse.json();

    return {
      user,
      repos
    };
  }
}
