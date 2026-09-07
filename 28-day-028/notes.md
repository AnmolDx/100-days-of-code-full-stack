# Notes

## What is Git?

Free & open source version control system.

## What is Github?

Website where we host repositories online.

## Basic Commands

### Clone

use to clone your github repo to your local machine.

### Status

display the state of the code.

- add - adds new or changed files in your working directory to the Git staging area.

- commit - it is the record of change.

- push - upload local repo content to remote repo.

### init

to make your starting repo in your local machine.

`git remote add origin <link>`

`git remote -v` (to verify remote)

`git branch` (to check branch)

`git branch -M main` (to rename branch)

`git push origin main`

### Pull

used to fetch and download content from a remote repo and immediately update the local repo to match that content.

`git reset` - to unadd file/unstage file

`git reset HEAD~1` - uncommited changes (for one commit)

### to reset multiple commits

`git reset <-commit hash->`

`git reset --hard <-commit hash->`

commit hash can get by `git log`

## What is Forking?

A fork is a new repository that shares code and visibility settings with the original "upstream" repository.
