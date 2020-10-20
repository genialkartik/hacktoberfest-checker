# Hacktoberfest Checker

Helpful to know how close are you to get a tee/tshirt or why you're PRs are invalid according to the latest policy of [Hacktoberfest](https://hacktoberfest.digitalocean.com/hacktoberfest-update).

Check Your Hacktoberfest Status: **[hacktoberfest.gitfork.tech](https://hacktoberfest.gitfork.tech)**

![Screenshot_2020-10-20 React App](https://user-images.githubusercontent.com/32240906/96621479-4909dc00-1326-11eb-9740-43915339d345.png)

### Why to develop another Hacktoberfest Checker, when there are pre-existing checkers already?

Well, I developed this another, but not alike, hacktoberfest checker because [Hacktoberfest's policy and guidlines of contribution](https://hacktoberfest.digitalocean.com/hacktoberfest-update) has recently been changed.

### What's new in Update?

According to the new policy & update, `Hacktoberfest is now officially opt-in only for projects and maintainers`,
which mean only the PRs specified as contribution toward Hacktoberfest will only be counted as valid.

### How to know whether a Pull Request is valid or not?

This question is the answer of creation of **[Hacktoberfest-Checker](https://hacktoberfest.gitfork.tech)**.
A PR will be counted as invalid and the user will get the tee/tshirt only when:
- Submitted during the `month of October`
- Submitted in a `public repo`
- The PR is labelled as `hacktoberfest-accepted` by a maintainer OR ubmitted in a repo with the `acktoberfest topic`
- The PR is `merged` OR the PR has been `approved`

## Requirements

* Node v10+
* create-react-app 3.4.1

## Run on Localhost:

* Before Start you must check your Github API rate limit (https://api.github.com/rate_limit) without Github Oauth and API Token.
* To increase API rate limit [Generate a GitHub personal access token](https://github.com/settings/tokens/new?scopes=&description=Hacktoberfest%20Checker) using Github Oauth or [Basic Authorization](https://docs.github.com/en/free-pro-team@latest/rest/reference/rate-limit)

* clone repo: `git clone https://github.com/genialkartik/hacktobefest-checker`

* For frontend:
  * `$ cd frontend`
  * `$ npm i`
  * `$ npm start
  *  goto `http://localhost:3000`

* For Backend
  * `$ cd backend`
  * `$ npm i`
  * `$ npm run dev`
  *  goto: `http://localhost:2020`
  
 ### Contribute
 
 Open an Issue with label [here](https://github.com/genialkartik/hacktoberfest-checker/issues)
 
 Or Open a Pull Request
 
  *  `git add .`
  *  `git commit -m 'message'`
  *  `git push -u origin master`
  
## A big THANKS to Contributors

  - [Ankur Jarial](https://github.com/JarialAnkur)
  - [Madan Lal](https://github.com/NorinMp143)

## License

MIT © 2015-2020 [Kartik Tyagi](https://github.com/genialkartik)
