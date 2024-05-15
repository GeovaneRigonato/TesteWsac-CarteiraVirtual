import { PrismaService } from "src/prisma.service";
// import WalletEntity from "../entities/wallet.entity";
import { WalletInterface } from "./walletInterface";

export class WalletPrisma implements WalletInterface {
    constructor(private prisma:PrismaService) {}
    async createWalletUseCase(balance: number): Promise<any> {
        console.log('Creating wallet with balance: ', balance);
        const wallet = await this.prisma.wallet.create({
            data: {
                id : 1,
                balance: balance
            }
        });
        return wallet;
    }
}