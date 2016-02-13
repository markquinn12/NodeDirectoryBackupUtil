# NodeDirectoryBackupUtil
Node.js utility to backup directories read from a .json file

####Pre-requisites
You will need to install Node.js to run the utility and also GIT to be able to download from my repository. I use [chocolatey](https://chocolatey.org/) where available:

`choco install nodejs.install`

`choco install git.install`

Git will also need to be added to the env PATH of your machine. For my machine I added the following directory to the PATH:
`C:\Program Files (x86)\Git\cmd;`

##Utility installation
Run the below command to install globally. This will install the files checked into this project on GITHUB and allow us to run the utility using the keyword: deletedirs

`npm install markquinn12/NodeDirectoryBackupUtil -g`

##Directory/Path explaination
We can save as many directories as we need in the [toCopy.json](toCopy.json) file. 

##Utility usage
- Once installed locate the toCopy.json file. On my machine this is located at: C:\Users\mark\AppData\Roaming\npm\node_modules\directory-backup
- Edit the [toCopy.json](toCopy.json).
- Open the command prompt anywhere
- Run the following command: `backupdirs`
- You will then see some output.
- Done!

Just keep a shortcut to  [toCopy.json](toCopy.json) somewhere accessible so you can edit the file quickly. I can quickly open the file using a hotkey which I have mapped using autohotkey!
