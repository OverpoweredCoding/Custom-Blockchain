## Custom-Blockchain
A custom blockchain (feel free to contribute)

## IF ALL ELSE FAILS: RTFM (Read the fucking manual)

# Credit
Huge shoutout to https://github.com/dvf/blockchain?ref=hackernoon.com for making the tutorial on this! :)

## Installation (pip)

1. Make sure you have python v3.6 or above installed
2. Install pipenv

`$ pip install pipenv`

3. Install requirements

`$ pipenv install`

4. Run the server:

```
$ pipenv run python blockchain.py
$ pipenv run python blockchain.py -p 5001
$ pipenv run python blockchain.py --port 5002
```
    
## Installation (docker)

Another option for running this blockchain program is to use Docker.  Follow the instructions below to create a local Docker container:

1. Clone this repository
2. Build the docker container

`$ docker build -t blockchain .`

3. Run the container

`$ docker run --rm -p 80:5000 blockchain`

4. To add more instances, vary the public port number before the colon:

```
$ docker run --rm -p 81:5000 blockchain
$ docker run --rm -p 82:5000 blockchain
$ docker run --rm -p 83:5000 blockchain
```

## Installation (c#)

1. Install Visual Studio IDE

2. Open the solution file (BlockChain.sln) using the File > Open > Project/Solution menu options within Visual Studio.

3. From within the "Solution Explorer", right click the BlockChain.Console project and select the "Set As Startup Project" option.

4. Click the "Start" button, or hit F5 to run. The program executes in a console window, and is controlled via HTTP with the same commands as the Python version.


## Contributing

Contributions are welcome and appreciated! Please feel free to submit a Pull Request.
