// actor.js
import { Actor, HttpAgent } from "@dfinity/agent";
import {
  idlFactory,
  canisterId,
} from "dfx-generated/contact_book";

const agent = new HttpAgent();
const actor = Actor.createActor(idlFactory, { agent, canisterId });

export default actor;