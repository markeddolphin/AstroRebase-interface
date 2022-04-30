import Metamask from "assets/images/wallets/metamaskWallet.png";
import WalletConnect from "assets/images/wallets/wallet-connect.svg";

export const connectors = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "injected",
    priority: 1,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: "walletconnect",
    priority: 2,
  },
];
