import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { fetchHistory, fetchBalance } from "../../helpers/api";

import Transaction from "../Transaction";
import Spinner from "../Spinner";

const Transactions = () => {
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(0);
  const [historical, setHistorical] = useState([]);

  const fetchHistorical = async () => {
    const fetchedHistory = await fetchHistory();
    if (historical.length !== fetchedHistory.length)
      setHistorical(fetchedHistory);
  };

  const fetchCurrentBalance = async () => {
    const fetchedBalance = await fetchBalance();
    if (balance !== fetchedBalance) setBalance(fetchedBalance);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchHistorical();
      fetchCurrentBalance();
      loading && setLoading(false);
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <h2>Current balance: ${balance}</h2>
          {historical.length === 0 ? (
            <p>No transactions have been made yet</p>
          ) : (
            historical.map((t, i) => <Transaction key={`tran${i}`} {...t} />)
          )}
        </Container>
      )}
    </>
  );
};

export default Transactions;
