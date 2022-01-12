## Custom-Blockchain
A custom blockchain (feel free to contribute)

## IF ALL ELSE FAILS: RTFM (Read the fucking manual)

# Credit
Huge shoutout to https://github.com/dvf/blockchain?ref=hackernoon.com for making a tutorial on this. This repo is dedicated to continuting their work and making a fully-fledged blockchain

## Installation (js)
1. Install requirements

`$ npm i`

2. Run the server:

`$ node .` or `$ node index.js`

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

## Donations
Donations are greatly appretiated and will motivate me to continue development of this project.

Crypto:
ARRR: zs1eed2nf83u5ptralw3lvk3l63m7s9hgfhfygltv76lk4hdmvjqz5aanke7g4u5y5d7mnzghy9qsw
SOL: GNWK9LpTnEWRQiHMo1bkVUDQy9d4mu2XPpCe2NTQbqQL
Coinbase: 0x2feA4E5F43Ae121EB6D060C5DA89018c4c657a1a
