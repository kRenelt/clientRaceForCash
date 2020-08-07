// May need to adjust array of model in future implementation
interface Payout {
    id: number;
    amount: number;
}

export interface Race {
    id: number;
    name: string;
    startTime: Date;
    payout: Array<Payout>;
}