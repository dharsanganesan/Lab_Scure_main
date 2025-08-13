Lab_Scure_main
MongoDB Setup Guide

1. Install MongoDB
Windows

Go to: https://www.mongodb.com/try/download/community

Download the MSI package and install with the Complete setup.

Check “Install MongoDB as a Service”.

Add the MongoDB bin folder to PATH (usually C:\Program Files\MongoDB\Server\<version>\bin).

macOS

Open terminal and run:

brew tap mongodb/brew

brew install mongodb-community

Linux (Ubuntu/Debian)

Install gnupg and import MongoDB public key.

Add MongoDB repository to sources list.

Update packages and install mongodb-org.

2. Run MongoDB
Start MongoDB Server

Run mongod in terminal.

If /data/db (Linux/Mac) or C:\data\db (Windows) doesn’t exist, create it.

Open Mongo Shell

Open a new terminal and run mongosh.

3. Basic Commands
show dbs → List databases.

use myDatabase → Create or switch to a database.

db.myCollection.insertOne({ name: "John", age: 25 }) → Insert data.

db.myCollection.find() → View data.

4. Stop MongoDB
If running in terminal: Press CTRL + C.

If installed as a service:

Windows: net stop MongoDB

macOS: brew services stop mongodb-community

Linux: sudo systemctl stop mongod

