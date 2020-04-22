const BASE_URL = "http://localhost:3001";
const TRANSACTIONS = "/transactions";

export const fetchBalance = async () => {
  const res = await fetch(`${BASE_URL}`);
  const { data } = await res.json();
  return data;
};

export const fetchHistory = async () => {
  const res = await fetch(`${BASE_URL}${TRANSACTIONS}`);
  const { data } = await res.json();
  return data;
};
