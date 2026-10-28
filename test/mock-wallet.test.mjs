import test from 'node:test';
import assert from 'node:assert/strict';
import { getMockWallet } from '../src/index.mjs';

test('returns simulated balances without credentials', () => {
  const wallet = getMockWallet();
  assert.equal(wallet.mode, 'simulation');
  assert.equal(wallet.address, 'DEMO-WALLET-NOT-REAL');
  assert.ok(wallet.balances.length > 0);
  assert.ok(wallet.balances.every(x => Number.isFinite(x.amount)));
});
