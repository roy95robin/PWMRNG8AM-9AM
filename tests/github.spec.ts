// Github details: 
/*

github/gitlab/bitbucket--- used for version control

version control tools are used to manage the changes in the code and keep track of it.

git -- distributed version system, that allowes more people to work on the project at the same time. 
bitbucket -- is a web based version control tools
gitlab -- is web based devops lifecysle tools 

// Install the git in your system: 
// you should have an account created at github

after the download is done, check the version inside command prompt

// Assume there is no branch present in the github: 
1. create the branch inside the github
2. in terminal provide the command as git init
3. git add .
4. git commit -m "first commit"
5. git branch -M main
6. git remote add origin https://github.com/roy95robin/PWMRNG8AM-9AM.git
7. git push -u origin main (push all the changes to repository)

//:::: When repository is already created inside your organisation::::

1. clone the repository inside your local system:using below command 
    git clone <repository url>  (https://github.com/roy95robin/PWMRNG8AM-9AM.git)
2. After clone is done, we need to download all the dependencies. 
    install playwright, intall npm, 
3. Create a new branch (secondary branch) name like TS01LoginPage and use the below command 
    git checkout -b TS01LoginPage
4. check if the branch is created using git branch
5. Make the changes to the file, and save the file 
6. git status - to check the status of the file
7. git add . 
8. git commit -m "new changes"
9. git push -- you will see the error along with suggested command , copy that command 
10 git push --set-upstream origin BranchName






*/