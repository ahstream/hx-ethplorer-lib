import { fetchHelper } from 'hx-lib';

// Exports -------------------------------------------------------

export async function getTopTokenHolders(contract, limit = 100, apiKey = 'freekey') {
  // https://api.ethplorer.io/getTopTokenHolders/0xf3Db5Fa2C66B7aF3Eb0C0b782510816cbe4813b8?apiKey=freekey&limit=100

  const url = `https://api.ethplorer.io/getTopTokenHolders/${contract}?apiKey=${apiKey}&limit=${limit}`;

  const result = await fetchHelper(url);
  // console.log(result?.data?.holders);
  if (!result?.data?.holders?.length) {
    return null;
  }
  return result.data.holders;
}

export async function getTokenInfo(contract, apiKey = 'freekey') {
  const url = `https://api.ethplorer.io/getTokenInfo/${contract}?apiKey=${apiKey}`;

  const result = await fetchHelper(url);
  //console.log(result);
  if (!result?.data) {
    return null;
  }
  return result.data;
}
