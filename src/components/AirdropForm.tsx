"use client";

import { useState } from "react";
import InputField from "./InputField";

export default function AirdropForm() {
  const [tokenAddress, setTokenAddress] = useState("");
  const [recipients, setRecipients] = useState("");
  const [amounts, setAmounts] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    console.log(tokenAddress);
    console.log(recipients);
    console.log(amounts);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Token Airdrop
          </h1>
          <p className="text-gray-600">
            Send tokens to multiple recipients at once
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Token Address */}
              <InputField
                label="Token Address"
                placeholder="Enter token contract address (e.g., 0x...)"
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
                type="text"
              />

              {/* Recipients */}
              <div>
                <InputField
                  label="Recipients"
                  placeholder="0x123..., 0x456..."
                  value={recipients}
                  onChange={(e) => setRecipients(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter wallet addresses separated by commas
                </p>
              </div>

              {/* Amounts */}
              <div>
                <InputField
                  label="Amounts"
                  placeholder="100, 200, 300..."
                  value={amounts}
                  onChange={(e) => setAmounts(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter amounts separated by commas (must match recipient count)
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !tokenAddress || !recipients || !amounts}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none shadow-lg hover:shadow-xl disabled:shadow-none flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending Tokens...</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                    <span>Send Tokens</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Footer Info */}
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg
                  className="w-5 h-5 text-blue-500 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-medium mb-1">Important Notes:</p>
                <ul className="space-y-1 text-gray-500">
                  <li>• Ensure you have enough tokens and ETH for gas fees</li>
                  <li>• Double-check all addresses before sending</li>
                  <li>• Recipients and amounts must be in the same order</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Recipients</p>
                <p className="text-2xl font-bold text-gray-900">
                  {recipients ? recipients.split(",").length : 0}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-2xl font-bold text-gray-900">
                  {amounts
                    ? amounts
                        .split(",")
                        .reduce(
                          (sum, amount) => sum + parseFloat(amount.trim()) || 0,
                          0
                        )
                        .toLocaleString()
                    : 0}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="text-2xl font-bold text-gray-900">
                  {tokenAddress && recipients && amounts ? "Ready" : "Pending"}
                </p>
              </div>
              <div
                className={`p-3 rounded-lg ${
                  tokenAddress && recipients && amounts
                    ? "bg-green-100"
                    : "bg-yellow-100"
                }`}
              >
                <svg
                  className={`w-6 h-6 ${
                    tokenAddress && recipients && amounts
                      ? "text-green-600"
                      : "text-yellow-600"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
