// import WalletEntity from "../entities/wallet.entity";

export interface WalletInterface {
    createWalletUseCase(balance: number): Promise<any>
}