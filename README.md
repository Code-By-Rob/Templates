# Welcome to my Templates folder
This templates folder will include the following:

- MERN + Tailwind Template
- MERN + Bootstrap Template
- MEAN + Tailwind Template
- MEAN + Bootstrap Template

I plan to continue expanding on thsi folder as long as I keep learning & enjoying developing in different frameworks, tools, and languages.

*To be updated.*

<a href="https://www.markdownguide.org/cheat-sheet/">Markdown Cheatsheet</a>

## The Command line git process:

1. Create working directory
```sh
mkdir "New Directory"
```
```sh
cd "New Directory"
```
```sh
touch example-file.txt
```
2. Initialise the working directory
    - To see the files use 'ls -a'
    - Check to see if there is a .git file present in the working directory.
```sh
git init
```
3. Make your first commit to the staging area (before pushing to the repo).
```sh
git commit -m "First Commit - 'Actions'"
```
4. Set the branch that you are working on.
```sh
git branch -M main
```
5. Set the repository that you will be pushing to (the repo you have created on github).
    - Replace username with your github username
    - Replace Repository with the repository you have created.
```sh
git remote add origin https://github.com/Username/Repository
```
6. Finally, push the files to the remote repository with any commits made locally to the branch.
```sh
git push -u origin main
```

### Common command structures & meaning:

- ```git add . && git commit -m "X Commit - Actions" && git push```
    - Used to add all files to the staging area, add a message to the commit, and push to the github repository.
- ```git status```
    - Used to showcase branch & which files aren't added or are new.
- ```git log```
    - Used to see the previous commits.