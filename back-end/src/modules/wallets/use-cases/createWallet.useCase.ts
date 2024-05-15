import { Inject, Injectable } from '@nestjs/common';
import WalletEntity from '../entities/wallet.entity';
import { WalletInterface } from '../prisma-config/walletInterface';

@Injectable()
export class CreateWalletUseCase {
  constructor(@Inject('WalletPersistence') private walletPersistence:WalletInterface) {}
  async execute(balance:number): Promise<WalletEntity> {
    if(balance < 0) throw new Error('Balance cannot be negative');
    const wallet = new WalletEntity(balance);
    try {
      await this.walletPersistence.createWalletUseCase(balance);
    } catch (error) {
      throw new Error('Error creating wallet');
    }
    return wallet;
  }
}
