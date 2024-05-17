import { Movement as _Movement } from './movement';
import { Wallet as _Wallet } from './wallet';

export namespace PrismaModel {
  export class Movement extends _Movement {}
  export class Wallet extends _Wallet {}

  export const extraModels = [Movement, Wallet];
}
