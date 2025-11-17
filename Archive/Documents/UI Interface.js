// Dashboard.js
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc'; // Tailwind CSS for React Native
import { ethers } from 'ethers';

const Dashboard = () => {
  const [balance, setBalance] = useState('0');
  const [transactions, setTransactions] = useState([]);
  const walletAddress = "0xYourWalletAddressHere"; // Replace with dynamic wallet address
  
  useEffect(() => {
    // Configure Ethereum provider (using Infura as an example)
    const provider = new ethers.providers.InfuraProvider("mainnet", "YOUR_INFURA_API_KEY");
    
    // Fetch the current wallet balance
    provider.getBalance(walletAddress)
      .then(rawBalance => {
        const formattedBalance = ethers.utils.formatEther(rawBalance);
        setBalance(formattedBalance);
      })
      .catch(err => console.error("Error fetching balance:", err));

    // Subscribe to transaction events (this is a conceptual illustration)
    // In a real-world scenario, you'll likely filter or structure events as needed.
    provider.on("block", (blockNumber) => {
      console.log("New block:", blockNumber);
      // Append the block number to the transaction log for debugging/audit trail purposes.
      setTransactions(prevTx => [`Block: ${blockNumber}`, ...prevTx]);
    });

    // Cleanup subscription when the component unmounts
    return () => {
      provider.removeAllListeners("block");
    };
  }, []);
  
  return (
    <View style={tw`p-4 flex-1 bg-white`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Dashboard</Text>
      
      {/* Wallet Balance */}
      <View style={tw`mb-4 p-4 bg-blue-100 rounded-md`}>
        <Text style={tw`text-lg`}>Wallet Balance:</Text>
        <Text style={tw`text-2xl font-semibold`}>{balance} ETH</Text>
      </View>
      
      {/* Transaction Logs */}
      <View style={tw`mb-4`}>
        <Text style={tw`text-lg mb-2`}>Transaction Logs:</Text>
        <ScrollView style={tw`h-60 bg-gray-100 p-2 rounded-md`}>
          {transactions.map((tx, index) => (
            <Text key={index} style={tw`text-xs mb-1`}>{tx}</Text>
          ))}
        </ScrollView>
      </View>
      
      {/* Debug Console - For more advanced scenarios, integrate a separate error/log component */}
      <View style={tw`p-4 bg-red-100 rounded-md`}>
        <Text style={tw`text-xs text-red-800`}>Debug Console: See developer logs for more details.</Text>
      </View>
    </View>
  );
};

export default Dashboard;