import React from 'react';
import Web3 from 'web3';
import { useState, useEffect } from 'react';

const Wallet = () => {
  const [account, setAccount] = useState('');

  const [web3, setWeb3] = useState();
  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      // window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  const connectWallet = async () => {
    let accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setAccount(accounts[0]);
  };
  return (
    <div>
      <button
        className="metaConnect"
        onClick={() => {
          connectWallet();
        }}
      >
        connect to MetaMask
      </button>
      <div className="userInfo">주소: {account}</div> // 연결된 계정 주소를
      화면에 출력합니다
    </div>
  );
};

export default Wallet;
