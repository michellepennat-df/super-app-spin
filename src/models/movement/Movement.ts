export type Movement = {
    entity: string,
    date: string,
    points: number,
    operation: 'used' | 'earned',
    transactionNo: string,
    id: number,
    expiryDate?: string,
    giftCode?: string
}