#!/bin/bash

# Script to setup the second git repository for the project
# The second git repository is used for the github action

git remote remove origin
git remote add origin git@github.com:EpitechMscProPromo2024/T-WEB-700-PAR_2.git
git remote set-url origin --add git@github.com:filoupegase/the_count_of_money.git
git remote -v
