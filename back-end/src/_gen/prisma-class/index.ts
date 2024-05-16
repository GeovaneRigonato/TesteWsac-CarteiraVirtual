import { Movement as _Movement } from './movement';
import { Category as _Category } from './category';
import { Wallet as _Wallet } from './wallet';

export namespace PrismaModel {
  export class Movement extends _Movement {}
  export class Category extends _Category {}
  export class Wallet extends _Wallet {}

  export const extraModels = [Movement, Category, Wallet];
}
