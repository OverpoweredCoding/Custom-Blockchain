const crypto = require("crypto");


class Blockchain {
    constructor() {
        this.chain = [];
        this.pendingTransactions = [];
        this.newBlock();
        this.peers = new Set();
    }

    addPeer(host) {
        this.peers.add(host);
    }

    getPeers() {
        return Array.from(this.peers);
    }

    newBlock(previousHash, nonce = null) {
        let block = {
            index: this.chain.length,
            timestamp: new Date().toISOString(),
            transactions: this.pendingTransactions,
            previousHash,
            nonce
        };

        block.hash = Blockchain.hash(block);

        console.log(`Created block ${block.index}`);

        this.chain.push(block);

        this.pendingTransactions = [];
    }

    static hash(block) {
        const blockString = JSON.stringify(block, Object.keys(block).sort());
        return crypto.createHash("sha256").update(blockString).digest("hex");
    }

    lastBlock() {
        return this.chain.length && this.chain[this.chain.length - 1];
    }

    static powIsAcceptable(hashOfBlock, difficulty) {
        return hashOfBlock.slice(0, difficulty) === "0".repeat(difficulty);
    }

    static nonce() {
        return crypto.createHash("sha256").update(crypto.randomBytes(32)).digest("hex");
    }

    mine(blockToMine = null, difficulty = 4) {
        const block = blockToMine || this.lastBlock();

        while (true) {
            block.nonce = Blockchain.nonce();
            if (Blockchain.powIsAcceptable(Blockchain.hash(block), difficulty)) {
                console.log("We mined a block!")
                console.log(` - Block hash: ${Blockchain.hash(block)}`);
                console.log(` - nonce:      ${block.nonce}`);
                return block;
            }
        }
    }
}

module.exports = Blockchain;
