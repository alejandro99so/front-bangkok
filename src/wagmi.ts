import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { celo, celoAlfajores, polygon, polygonAmoy } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: "45cfa9d92ef1e5640fa1f0dff43137ba",
  chains: [polygon, polygonAmoy, celo, celoAlfajores],
  ssr: true,
});
