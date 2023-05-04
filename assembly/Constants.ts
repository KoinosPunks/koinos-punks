import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Koinos Punks";
  export const SYMBOL: string = "KPunks";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = false;
  export const MAX_SUPPLY: u64 = 200;
  export const URI: string = "https://bafybeieoh2yftzgbufqjpzbf323rvak7mlgmetadrws43js73k45bdceay.ipfs.nftstorage.link/";
  export const OWNER: Uint8Array = Base58.decode("19g4oTs39Lg3ZCjKs9w9B6NjQzswB69QwU");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("");
}
