// Pseudocode: Request a nonce, sign it with wallet, then verify:
const nonce = await getNonceFromServer(userAddress);
const signature = await wallet.signMessage(nonce);
const isAuthenticated = await verifySignature(userAddress, signature);