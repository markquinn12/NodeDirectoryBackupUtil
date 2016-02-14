# NodeDirectoryBackupUtil
Node.js utility to backup directories read from a .json file

I periodically backup certain directories to dropbox or google drive shared folders. I sometimes get the annoying "File path too long" error. This utility is a way of getting around this error and also a quick way of backing up files.

####Pre-requisites
You will need to install Node.js to run the utility and also GIT to be able to download from my repository. I use [chocolatey](https://chocolatey.org/) where available:

`choco install nodejs.install`

`choco install git.install`

Git will also need to be added to the env PATH of your machine. For my machine I added the following directory to the PATH:
`C:\Program Files (x86)\Git\cmd;`

##Utility installation
Run the below command to install globally. This will install the files checked into this project on GITHUB and allow us to run the utility using the keyword: backupdirs

`npm install markquinn12/NodeDirectoryBackupUtil -g`

##toCopy.json file explanation
We can save as many directories as we need in the [toCopy.json](toCopy.json) file. The json contains an array of elements with 3 fields:

- source: The source directory to be copied. All files and folders in this directory will be copied.
- destination: The destination which everything in 'source' is copied to.
- description: This is used when copying. Whatever is entered here will be used to name the directory within the destination folder. The utility autmoatically adds a datetime stampt to the end of the folder to avoid conflicts.

##Utility usage
- Once installed locate the toCopy.json file. On my machine this is located at: C:\Users\mark\AppData\Roaming\npm\node_modules\directory-backup
- Edit the [toCopy.json](toCopy.json) file.
- Open the command prompt anywhere
- Run the following command: `backupdirs`
- You will then see some output.
- Done!

Just keep a shortcut to  [toCopy.json](toCopy.json) somewhere accessible so you can edit the file quickly. I can quickly open the file using a hotkey which I have mapped using autohotkey!
