"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";  // config import
import {anvil,zksync,mainnet} from "wagmi/chains";          // chains

const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;    // project id

if(!walletConnectProjectId){
    throw new Error("Error in connection");
}

const config = getDefaultConfig(
    {
        appName : "Tsender",
        projectId : walletConnectProjectId,
        chains : [anvil,zksync,mainnet],
        ssr : false,
    }
);

export default config;