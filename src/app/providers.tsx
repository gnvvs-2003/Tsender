"use client";

import {useState,useEffect} from "react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider,QueryClient } from "@tanstack/react-query";

import config from "@/rainbowKitConfig";

import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

export function Providers({children}:{children:React.ReactNode}){
    const [mounted,setMounted] = useState(false); // hydration check
    useEffect(()=>setMounted(true),[]);
    return(
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {
                        mounted ? children : null
                    }
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}