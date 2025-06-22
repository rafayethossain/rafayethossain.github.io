---
layout: post
title: "Basic Git Commands"
subtitle: "Git Command You Will Ever Need as a Programmer"
date: 2018-07-07
author: "Rafayet Hossain"
description: "A comprehensive guide to essential Git commands for programmers, covering setup, usage, and best practices for version control."
tags: [git, version control, programming]
categories: [development, tools]
cover-img: /assets/img/cover.jpg
thumbnail-img: /assets/img/diary.png
share-img: /assets/img/path.jpg
image: /assets/img/cover.jpg
bigimg: /assets/img/cover.jpg
permalink: /basic-git-commands/
canonical_url: https://rafayethossain.github.io/basic-git-commands/
meta_keywords: "git, version control, git commands, programming, software development"
---

Git is a free, open-source version control system that helps you track code changes, collaborate with others, and manage projects of any size. Whether you’re new to Git or want a quick refresher, this guide covers the essential Git commands every developer should know.

---

## Why Use Git?
- **Track changes:** Keep a history of your code and easily revert mistakes.
- **Collaborate:** Work with others without overwriting each other’s work.
- **Backup:** Store your code safely, both locally and in the cloud.

---

## Getting Started with Git
- Download and install Git from the [official site](https://git-scm.com/downloads).
- Prefer a visual interface? Try [GitHub Desktop](https://desktop.github.com/).

---

## The Git Workflow: 4 Simple Steps
1. **Working Directory:** Edit your files here.
2. **Staging Area:** Prepare files for commit.
3. **Repository:** Store committed snapshots.
4. **Remote:** Sync with others (push/pull).

---

## Essential Git Commands (with Examples)

### 1. Set Up Your Identity
Configure your name and email for commits:
```bash
git config --global user.name "Your Name"
git config --global user.email youremail@example.com
```

### 2. Initialize a Repository
Start tracking a project:
```bash
git init
```

### 3. Clone a Repository
Copy a remote project to your computer:
```bash
git clone https://github.com/rafayethossain/rafayethossain.github.io.git
```

### 4. Check Status
See which files have changed:
```bash
git status
```

### 5. Stage Changes
Prepare files for commit:
```bash
git add .
```
- Stage all files: `git add .`
- Stage a specific file: `git add filename.txt`
- Stage by extension: `git add *.py`

### 6. Commit Changes
Save a snapshot of your work:
```bash
git commit -m "Describe your changes"
```

### 7. Push to Remote
Upload your commits to a remote repository:
```bash
git push
```

### 8. Pull from Remote
Download and merge changes from the remote:
```bash
git pull
```

---

## More Useful Git Commands
- `git reset` – Unstage files or undo commits.
- `git rm filename` – Remove a file from the repo.
- `git branch` – List, create, or delete branches.
- `git checkout branchname` – Switch branches.
- `git merge branchname` – Merge another branch into your current one.
- `git fetch` – Download new data from remote without merging.
- `git log` – View commit history.
- `git diff` – See changes between commits or working directory.

---

## Common Terminal Commands (Windows)
- `touch filename` – Create a new file.
- `mkdir foldername` – Create a new folder.
- `cd foldername` – Change directory.
- `pwd` – Show current directory.
- `ls` – List files in directory.

---

## Pro Tips for Mastering Git
- Practice these commands regularly to build confidence.
- Use clear commit messages to describe your changes.
- Don’t be afraid to experiment—mistakes are part of learning.

---

## Ready to Level Up Your Git Skills?
Git is a must-have tool for every developer. Start using these commands in your daily workflow and watch your confidence grow. If you found this guide helpful, share it with your friends or team. Have questions or want to share your own Git tips? Leave a comment or connect with me on [LinkedIn](https://www.linkedin.com/in/rafayethossain/).

Happy coding—and may your commits always be clean!

---
{% include blog-footer.html %}
