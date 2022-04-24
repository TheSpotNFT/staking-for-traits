const stakingABI = '[{"inputs":[{"internalType":"address","name":"_nftContract","type":"address"},{"internalType":"uint256","name":"_stakeTime","type":"uint256"},{"internalType":"address","name":"_rewardContract","type":"address"},{"internalType":"uint256","name":"_tokenID","type":"uint256"},{"internalType":"bool","name":"_active","type":"bool"}],"name":"addStakeItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"},{"internalType":"uint256","name":"_contractIndex","type":"uint256"}],"name":"claimStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_claimer","type":"address"},{"indexed":false,"internalType":"address","name":"_contract","type":"address"},{"indexed":false,"internalType":"uint256","name":"_index","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"setSpotAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"},{"internalType":"uint256","name":"_contractIndex","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_staker","type":"address"},{"indexed":false,"internalType":"address","name":"_contract","type":"address"},{"indexed":false,"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"StakeStarted","type":"event"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"bool","name":"_active","type":"bool"}],"name":"updateStakeActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"updateStakeTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"},{"internalType":"uint256[]","name":"_tokenIDs","type":"uint256[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"},{"internalType":"address","name":"_to","type":"address"}],"name":"withdrawERC1155","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"contractToIndexes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"getContractStakeItemsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeItemsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SPOT_CONTRACT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakeItems","outputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"rewardContract","type":"address"},{"internalType":"uint256","name":"contractIndex","type":"uint256"},{"internalType":"uint256","name":"stakeTime","type":"uint256"},{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"bool","name":"active","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_contract","type":"address"},{"internalType":"uint256","name":"_contractIndex","type":"uint256"}],"name":"timeUntilClaimable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userToIndexClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userToIndexStakeStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]';
const nftABI = '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"supply","type":"uint256"}],"name":"SupplyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"AVASHARKS_PROVENANCE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_AVASHARKS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"availableTokenCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"avasharksPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flipSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxAvaSharksPurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTeamSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"payments1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"payments2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"royaltyContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"royaltyValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newAvasharksPrice","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_payments1","type":"address"}],"name":"setPayments1","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_payments2","type":"address"}],"name":"setPayments2","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"provenanceHash","type":"string"}],"name":"setProvenanceHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxTeamMint","type":"uint256"}],"name":"setmaxTeamMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamIssued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"teamMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply_NFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]';
// web3 connect code borrowed from A-FTSO
// Thanks to ftso.alexdupre.com
let provider;
let signer;
let accounts;
let currentNetwork;
let activeStakes = [];
const { ethereum } = window;

const STAKING_ADDRESS = "0xD9784389FD08540D71b1387dd33Eae0255B024d0";
const SPOT_ADDRESS = "0x3f738a7dF29b735190f778362B2e445677Df1043";
const NFT1_ADDRESS = "0x4E5Cde644770D03187C0d81A7763E1F8B977cEf1";
const NFT2_ADDRESS = "0xb0611074924c55548F2668230CA9245D6114fD8c";

const defaultNetwork = '0xA869'
const networks = {
    '0xA869': {
        chainId: '0xA869',
        chainName: 'Fuji',
        nativeCurrency: { decimals: 18, symbol: 'AVAX' },
        rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
        blockExplorerUrls: ['https://testnet.snowtrace.io'],
    },
}

async function checkWeb3() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('Web3 provider is installed!')
        provider = new ethers.providers.Web3Provider(window.ethereum)
        signer = provider.getSigner()
        try {
            // check if already connected by getting the wallet address
            await signer.getAddress()
            await checkNetwork()
            await checkAccount()
            $("button#connectButton").html('Connected');
            $("button#connectButton").prop('disabled', true);
        } catch (err) {
            console.log(err)
        }
    } else {
        console.log('Please install MetaMask or another web3 provider!')
        alert('Please install MetaMask or another web3 provider!')
    }
}

async function connect() {
    console.log("Connecting...")

    $("button#connectButton").prop('disabled', true);
    try {
        // connect
        await ethereum.request({ method: 'eth_requestAccounts' });
        await checkNetwork();
        await checkAccount();
        $("button#connectButton").html('Connected');
    } catch (err) {
        $("button#connectButton").prop('disabled', false);
        if (err.code === 4001) {
            // user rejected the connection
            console.log('Please connect to MetaMask.');
        } else {
            console.error(err);
        }
    }
}

async function checkNetwork() {
    ethereum.on('chainChanged', handleChainChanged);
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    if (networks[chainId] !== undefined) {
        currentNetwork = networks[chainId]
        //await handleChainChanged(chainId)
    } else if (ethereum.isMetaMask) {
        await setupNetwork(defaultNetwork)
        if (chainId === await ethereum.request({ method: 'eth_chainId' }));
    } else {
        console.log('Please switch to one of the supported networks.')
    }
}

async function checkAccount() {
    accounts = await ethereum.request({ method: 'eth_accounts' })
    ethereum.on('accountsChanged', handleAccountsChanged)

}

async function setupNetwork(network) {
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: networks[network].chainId }],
        });
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
            try {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [networks[network]],
                });
            } catch (addError) {
                if (addError.code === 4001) {
                    console.log('Please approve the Avalanche network.')
                } else {
                    // handle other "add" errors
                    console.error(addError)
                }
            }
        } else if (switchError.code === 4001) {
            // user rejected the change
            console.log('Avalanche configuration already present.')
        } else {
            // handle other "switch" errors
            console.error(switchError)
        }
    }
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()
}


async function handleChainChanged(chainId) {
    //window.location.reload()
    console.log("Chain changed to " + chainId)
    currentNetwork = networks[chainId]
    // reload provider and signer on chain change
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()
    if (currentNetwork !== undefined) {
        // show main section
    } else {
        // reload or ask to change network
        console.log('Please switch to one of the supported networks.')
    }
}

async function handleAccountsChanged(accounts) {
    //window.location.reload()
    console.log('Account changed to ' + accounts)
    if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts
    }
}

const getBalances = async () => {
    const { ethereum } = window;

    const provider = new ethers.providers.Web3Provider(ethereum);
    const stakingContract = new ethers.Contract(STAKING_ADDRESS, stakingABI, provider);
    const spotContract = new ethers.Contract(SPOT_ADDRESS, nftABI, provider);
    const nft1Contract = new ethers.Contract(NFT1_ADDRESS, nftABI, provider);
    const nft2Contract = new ethers.Contract(NFT2_ADDRESS, nftABI, provider);

    let account = await signer.getAddress();
    let spotBalance = await spotContract.balanceOf(account);
    let nft1Balance = await nft1Contract.balanceOf(account);
    let nft2Balance = await nft2Contract.balanceOf(account);

    $("span#walletOneTokens").text(nft1Balance);
    $("span#walletTwoTokens").text(nft2Balance);
    $("span#walletSpotTokens").text(spotBalance);

    stakeCount = await stakingContract.getStakeItemsCount();

    for (let i = 0; i < stakeCount; i++) {
        let item = await stakingContract.stakeItems(i);

        if (item.active) {
            activeStakes.push(item);
        }
    }

    let start = Number(await stakingContract.userToIndexStakeStart(account, 0));
    if(start > 0) {
        let stakeTime1 = Number(await stakingContract.timeUntilClaimable(account, NFT1_ADDRESS, 0));
        let claimTime = await checkTime(stakeTime1);
        $("span#timeOneClaimable").text(`${claimTime}`);
    } else {
        $("span#timeOneClaimable").text(`Not Started.`);
    }


    let stakeTime2;

    if (activeStakes.length > 1) {
        let start2 = Number(await stakingContract.userToIndexStakeStart(account, 1))
        if (start2 > 0) {
            stakeTime2 = Number(await stakingContract.timeUntilClaimable(account, NFT2_ADDRESS, 0));
            let claimTime2 = await checkTime(stakeTime2);
            $("span#timeTwoClaimable").text(`${claimTime2}`);
        } else {
            $("span#timeTwoClaimable").text(`Not Started.`);
        }

    }

}

const claimOne = async () => {
    const { ethereum } = window;

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(STAKING_ADDRESS, stakingABI, signer);

    try {
        let claimTx = await connectedContract.claimStake(NFT1_ADDRESS, 0);
        await claimTx.wait();

        $("p#transaction1").text("Claiming...");
        await claimTx.wait();

        let txLink = `<a href='https://testnet.snowtrace.io/tx/${claimTx.hash}' target="_blank" rel="noreferrer">
                                      View Transaction</a>`;

        $("p#transaction1").html(`Successfully claimed: ${txLink}`);
        getBalances();
    } catch (error) {
        console.log(error)
        $("p#transaction1").text(`${error.data.message}`);
    }
}

const claimTwo = async () => {
    const { ethereum } = window;

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(STAKING_ADDRESS, stakingABI, signer);

    let item = await connectedContract.stakeItems(1);
    let index = Number(item.contractIndex);

    try {
        let claimTx = await connectedContract.claimStake(NFT2_ADDRESS, index);
        await claimTx.wait();

        $("p#transaction2").text("Claiming...");
        await claimTx.wait();

        let txLink = `<a href='https://testnet.snowtrace.io/tx/${claimTx.hash}' target="_blank" rel="noreferrer">
                                      View Transaction</a>`;

        $("p#transaction2").html(`Successfully claimed: ${txLink}`);
        getBalances();
    } catch (error) {
        console.log(error)
        $("p#transaction2").text(`${error.data.message}`);
    }
}

const stakeOne = async () => {
    const { ethereum } = window;

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(STAKING_ADDRESS, stakingABI, signer);

    try {
        let claimTx = await connectedContract.stake(NFT1_ADDRESS, 0);
        await claimTx.wait();

        $("p#transaction1").text("Staking...");
        await claimTx.wait();

        let txLink = `<a href='https://testnet.snowtrace.io/tx/${claimTx.hash}' target="_blank" rel="noreferrer">
                                      View Transaction</a>`;

        $("p#transaction1").html(`Successfully staked: ${txLink}`);
        getBalances();
    } catch (error) {
        console.log(error)
        $("p#transaction1").text(`${error.data.message}`);
    }
}

const stakeTwo = async () => {
    const { ethereum } = window;

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(STAKING_ADDRESS, stakingABI, signer);

    let item = await connectedContract.stakeItems(1);
    let index = Number(item.contractIndex);

    try {
        let claimTx = await connectedContract.stake(NFT2_ADDRESS, index);
        await claimTx.wait();

        $("p#transaction2").text("Staking...");
        await claimTx.wait();

        let txLink = `<a href='https://testnet.snowtrace.io/tx/${claimTx.hash}' target="_blank" rel="noreferrer">
                                      View Transaction</a>`;

        $("p#transaction2").html(`Successfully staked: ${txLink}`);
        getBalances();
    } catch (error) {
        console.log(error)
        $("p#transaction2").text(`${error.data.message}`);
    }
}

const addStakingItem = async () => {
    const { ethereum } = window;

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const connectedContract = new ethers.Contract(STAKING_ADDRESS, stakingABI, signer);

    let contract = $("input#contract").val().toString();
    let time = $("input#time").val();
    let rewardContract = $("input#rewardContract").val().toString();
    let tokenID = $("input#tokenID").val();

    try {
        let addTx = await connectedContract.addStakeItem(contract, time, rewardContract, tokenID, true);
        await addTx.wait();

        $("p#transaction3").text("Claiming...");
        await addTx.wait();

        let txLink = `<a href='https://testnet.snowtrace.io/tx/${addTx.hash}' target="_blank" rel="noreferrer">
                                      View Transaction</a>`;

        $("p#transaction3").html(`Successfully claimed: ${txLink}`);
        getBalances();
    } catch (error) {
        console.log(error)
        $("p#transaction3").text(`${error.data.message}`);
    }

}

const checkTime = async (seconds) => {

    // Time calculations for days, hours, minutes and seconds
    let d = Math.floor(seconds / (3600*24));
    let h = Math.floor(seconds % (3600*24) / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 60);

    if (h > 0 || m > 0 || s > 0) {
        return `${d}d:${h}h:${m}m:${s}s`;
    } else {
        return 'Ready To Claim!'
    }

}

$(function() {
    checkWeb3();
    getBalances();
    $("button#connectButton").on("click", connect);
    $("button#stakeButton1").off().on("click", function(event){
        event.preventDefault();
        stakeOne();
    });
    $("button#claimButton1").off().on("click", function(event){
        event.preventDefault();
        claimOne();
    });
    $("button#stakeButton2").off().on("click", function(event){
        event.preventDefault();
        stakeTwo();
    });
    $("button#claimButton2").off().on("click", function(event){
        event.preventDefault();
        claimTwo();
    });
    $("button#addItem").off().on("click", function(event){
        event.preventDefault();
        addStakingItem();
    });
})


