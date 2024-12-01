"use client";
import React from "react";
import { PinContainer } from "./pin";
import Heading from "./Heading"; // Import Heading component
import Button from "./Button";

// Benefits data without images, tailored for Web3 and crypto
export const benefits = [
  {
    id: "0",
    title: "Secure Registration and Authentication",
    text: "Log in with wallet integration or social accounts, ensuring secure and decentralized authentication.",
  },
  {
    id: "1",
    title: "Blockchain-Powered Group Management",
    text: "Create groups with smart contract-backed management, ensuring transparency and security.",
  },
  {
    id: "2",
    title: "Crypto Expense Logging",
    text: "Log expenses directly in crypto, with options to track transactions on-chain.",
  },
  {
    id: "3",
    title: "Decentralized Bill Splitting",
    text: "Split bills via smart contracts, ensuring fair and automated calculations.",
  },
  {
    id: "4",
    title: "Web3 Analytics Dashboard",
    text: "View detailed insights into your crypto spending, token usage, and on-chain activity.",
  },
  {
    id: "5",
    title: "Multi-Currency and Token Support",
    text: "Track and settle expenses in various cryptocurrencies and stablecoins.",
  },
  {
    id: "6",
    title: "Smart Notifications",
    text: "Receive blockchain-powered reminders and real-time notifications for pending dues.",
  },
];

// Component to render multiple cards
export function AnimatedPinDemo() {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <Heading
          className="md:max-w-md lg:max-w-2xl mb-12"
          title="Simplify Crypto Expense Management with CoinSplit"
        />
        {/* Cards */}
        <div className="h-auto w-full flex flex-wrap items-center justify-center gap-6">
          {benefits.map((benefit) => (
            <PinContainer key={benefit.id} title={benefit.title} href="#">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[16rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 mt-4">
                  {benefit.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">{benefit.text}</span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
              </div>
            </PinContainer>
          ))}
        </div>
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="https://coinsplit.vercel.app/">Explore Now</Button>
        </div>
      </div>
    </section>
  );
}

export default AnimatedPinDemo;
