// Local simulation only. No network requests or real wallet connection.
export function getMockWallet() {
  return {
    mode: 'simulation',
    address: 'DEMO-WALLET-NOT-REAL',
    balances: [
      { asset: 'DEMO', amount: 1000 },
      { asset: 'TEST', amount: 25 },
    ],
  };
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  console.log(JSON.stringify(getMockWallet(), null, 2));
}
