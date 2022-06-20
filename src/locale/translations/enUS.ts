import localeKeys from "../localeKeys";
const enUs = {
  [localeKeys.welcomeToReact]: "Welcome To React 👏",
  [localeKeys.messagesCounter]: `Hello {{user}}, <strong>you've</strong> got {{counter}} messages.`,
  [localeKeys.canaryNetwork]: `Canary Network of {Darwinia}`,
  [localeKeys.darwiniaIntroData]: `Darwinia Network provides a light client-based, programmable, universal cross-chain message Network for DApp developers.`,
  [localeKeys.buildOnCrab]: `Build on Crab`,
  [localeKeys.goToDarwinia]: `Go to Darwinia >`,
  [localeKeys.apps]: `apps`,
  [localeKeys.startBuilding]: `Start Building`,
  [localeKeys.crossChainMessaging]: `Universal Cross-Chain Message Network`,
  [localeKeys.devWithDarwinia]: `Develop with Darwinia >`,
  [localeKeys.learnMore]: `Learn More >`,
  [localeKeys.whatIsDarwinia]: `What is <span class="text-primary">Darwinia</span>`,
  [localeKeys.programmable]: `Programmable`,
  [localeKeys.crossChain]: `Cross-Chain Message Network`,
  [localeKeys.ultraLight]: `Ultra Light Client`,
  [localeKeys.programmableText]: `Darwinia smart contract platform is a programmable container for diversified cross-chain assets.`,
  [localeKeys.crossChainText]: `Darwinia provides user-friendly and reliable universal cross-chain services for DApp developers.`,
  [localeKeys.ultraLightText]: `Darwinia can provide ultra-light client-based redundant security verification services for various asset bridges.`,
  [localeKeys.lightClientTitle]: `how the <span class="text-primary">Light-Client Based Cross-Chain Messaging Protocol</span>(LCMP) Works`,
  [localeKeys.lightClientSubTitle]: `Cross-Chain Message Workflow`,
  [localeKeys.lightClientText]: `A DApp on the Application Layer calls send_message on the Message Layer to initiate a cross-chain operation. After send_message is executed, the Relayer forwards the message to the Target Chain, where the Truth Layer verifies the message, and executes the tasks carried within. Once complete, the Relayer forwards a confirmation message back to the source chain.`,
  [localeKeys.darwiniaPromoTitle]: `Build on <span class="text-primary">Darwinia</span>`,
  [localeKeys.darwiniaPromoSubTitle]: `Darwinia Universal Cross-Chain Message SDK`,
  [localeKeys.darwiniaPromoContent]: `Build Cross-Chain DApps Such As:`,
  [localeKeys.darwiniaPromoContentText1]: `Cross-Chain DEX: Allow users to exchange assets across multiple chains in a single transaction.`,
  [localeKeys.darwiniaPromoContentText2]: `Lending: Allow users to pledge collateral on one chain and borrow assets on other chains.`,
  [localeKeys.darwiniaPromoContentText3]: `Cross-Chain Asset Bridge: Development of Cross-Chain Asset Bridge integrating Darwinia Universal Cross-Chain Message SDK.`,
  [localeKeys.darwiniaPromoContentText4]: `NFT Market: Bid on auctions taking place on another chain.`,
  [localeKeys.darwiniaPromoContentText5]: `DAO Governance: Allow for a unified multi-chain governance mechanism without needing to move assets to a central voting chain.`,
  [localeKeys.darwiniaPromoContentText6]: `Multi-Chain Gaming: Allow users to transfer NFTs across multiple chains.`,
  [localeKeys.ecosystemProjects]: `<span class="text-primary">Ecosystem Projects</span>`,
  [localeKeys.helixBridge]: `Helix Bridge`,
  [localeKeys.helixBridgeIntro]: `Helix has integrated Darwinia Universal Cross-Chain Message SDK to create a safe community tool for cross-chain assets.`,
  [localeKeys.evolutionLand]: `Evolution Land`,
  [localeKeys.evolutionLandIntro]: `Evolution Land will integrate Darwinia Universal Cross-Chain Message SDK to allow users to exchange virtual items on multiple chains.`,
  [localeKeys.poweringDarwinia]: `powering the <span class="text-primary">darwinia ecosystem</span>`,
  [localeKeys.staking]: `Staking`,
  [localeKeys.stakingIntro]: `Stake RING/KTON, which secures Darwinia Network and captures network value.`,
  [localeKeys.partner]: `Partner`,
  [localeKeys.partnerIntro]: `Support and partnership with teams and developers that provide tools, infrastructure, and other ecosystem services.`,
  [localeKeys.integration]: `Integration`,
  [localeKeys.integrationIntro]: `Support teams and developers that want to integrate with and connect to Darwinia Network.`,
  [localeKeys.startStake]: `Start Stake >`,
  [localeKeys.runValidator]: `Run A Validator >`,
  [localeKeys.sdkDoc]: `SDK Doc >`,
  [localeKeys.contactUs]: `Contact Us >`,
  [localeKeys.talkToExpert]: `Talk to An Expert >`,
  [localeKeys.yourEmailHere]: `Your Mail Here`,
  [localeKeys.subscribe]: `subscribe`,
  [localeKeys.wrongEmail]: `wrong email`,
  [localeKeys.subscriptionSuccessful]: `thank you for subscribing!`,
  [localeKeys.developers]: `Developers`,
  [localeKeys.developerDocs]: `Developer Docs`,
  [localeKeys.developerResources]: `Developer Resources`,
  [localeKeys.useCases]: `Use Cases`,
  [localeKeys.overview]: `Overview`,
  [localeKeys.crossChainDex]: `Cross-Chain DEX`,
  [localeKeys.lending]: `Lending`,
  [localeKeys.crossChainAssetBridge]: `Cross-Chain Asset Bridge`,
  [localeKeys.nftMarket]: `NFT Market`,
  [localeKeys.daoGovernance]: `DAO Governance`,
  [localeKeys.multiChainGaming]: `Multi-Chain Gaming`,
  [localeKeys.resources]: `Papers`,
  [localeKeys.wiki]: `Wiki`,
  [localeKeys.roadmap]: `Roadmap`,
  [localeKeys.blog]: `Blog`,
  [localeKeys.telemetry]: `Telemetry`,
  [localeKeys.cooperation]: `Cooperation`,
  [localeKeys.careers]: `Careers`,
  [localeKeys.brand]: `Brand`,
  [localeKeys.collaboration]: `Collaboration`,
  [localeKeys.substrateBuildersProgram]: `Substrate Builders Program`,
  [localeKeys.web3Foundation]: `Web3 Foundation`,
  [localeKeys.web3Bootcamp]: `Web3 Bootcamp`,
  [localeKeys.polkadot]: `Polkadot`,
  [localeKeys.darwiniaNetworkCopyright]: `@ {{year}} Darwinia Network`,
  [localeKeys.sendMessage]: `send message`,
  [localeKeys.crossChainFilter]: `cross-chain filter`,
  [localeKeys.callback]: `callback`,
  [localeKeys.startBuildingWithDarwinia]: `start building with <span class="text-primary">darwinia</span>`,
  [localeKeys.buildUserFriendly]: `Build Use-Friendly Cross-Chain DApps Quickly.`,
  [localeKeys.developWithDarwinia]: `Develop with darwinia`,
  [localeKeys.introduction]: `introduction`,
  [localeKeys.getStarted]: `Get Started >`,
  [localeKeys.glossary]: `Glossary >`,
  [localeKeys.smartChainWithMetamask]: `Use Smart Chain with MetaMask >`,
  [localeKeys.yourCrossChainStatus]: `Know your cross-chain status >`,
  [localeKeys.firstCrossChainDApp]: `Build your first cross-chain dApp on Crab >`,
  [localeKeys.solidityForSmartChain]: `Solidity API for Smart Chain >`,
  [localeKeys.demoRMRK]: `Demo: RMRK >`,
  [localeKeys.demoCallback]: `Demo: Callback >`,
  [localeKeys.demoCrossChainFilter]: `Demo: Cross-Chain Filter >`,
  [localeKeys.findTechSolution]: `Find Your <span class="text-primary block lg:inline-block">Tech Solutions</span>`,
  [localeKeys.techSolutionIntro]: `Chat with other developers in the Developer Community, share your ideas and get answers to your technical questions.`,
  [localeKeys.devTelegram]: `Developers Telegram >`,
  [localeKeys.darwiniaEconomicModel]: `Darwinia Economic Model`,
  [localeKeys.internetOfTokens]: `Internet Of Tokens, Connected!`,
  [localeKeys.howToStake]: `How to Stake >`,
  [localeKeys.tokens]: `tokens`,
  [localeKeys.tokensIntro]: `RING is the native token of Darwinia Network. KTON is a derivative commitment token of RING (Darwinia Network Native Token), which encourages long-term involvement.`,
  [localeKeys.ring]: `ring`,
  [localeKeys.kTon]: `kton`,
  [localeKeys.initialSupply]: `initial supply`,
  [localeKeys.circulatingSupply]: `Circulating Supply`,
  [localeKeys.totalSupply]: `total supply`,
  [localeKeys.stakingModel]: `staking model`,
  [localeKeys.stakingModelIntro]: `The Darwinia Network will distribute RING as an incentive to the participants of Staking. The process of Staking can also be understood as the POS mining process, where the miner obtains Staking energy by pledging tokens for POS mining. According to complexity, Staking can be divided into basic and advanced versions.`,
  [localeKeys.ringInflationModel]: `RING Inflation Model`,
  [localeKeys.ringInflationInfo]: `After the Darwinia Network goes live, the total cap of the block reward is adjusted once a year. The total number of hard-cap for RING is 10 billion. The following figure shows the RING’s inflation model.`,
  [localeKeys.ringInflationNote]: `Note: The block reward of year N is 1 - (99/100)^sqrt(N) of total remaining issuable`,
  [localeKeys.welcomeToDarwiniaCommunity]: `Welcome to the <span class="text-primary block">Darwinia Community</span>`,
  [localeKeys.darwiniaCommunityIntro]: `The Darwinia community is home to hundreds of thousands of developers, technologists, validators, token holders, creators, builders, and believers alike - everyone is welcome aboard!`,
  [localeKeys.darwiniaNetwork]: `darwinia network`,
  [localeKeys.stakingApps]: `staking apps`,
  [localeKeys.onChainGovernance]: `On-Chain Governance`,
  [localeKeys.polkadotParachainAuction]: `Polkadot Parachain Auction`,
  [localeKeys.subscanExplorer]: `Subscan Explorer`,
  [localeKeys.crabNetwork]: `Crab Network`,
  [localeKeys.kusamaParachainAuction]: `Kusama Parachain Auction`,
  [localeKeys.subviewExplorer]: `Subview Explorer`,
  [localeKeys.networks]: `networks`,
  [localeKeys.darwinia]: `darwinia`,
  [localeKeys.crab]: `crab`,
  [localeKeys.community]: `community`,
};

export default enUs;
