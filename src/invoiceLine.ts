export class InvoiceLine {
    InvoiceLineId: number;
    Cost: number;
    Quantity: number;
    Description: string;

    constructor(InvoiceLineId = 0, Cost = 0, Quantity = 0, Description = "") {
        this.InvoiceLineId = InvoiceLineId;
        this.Cost = Cost;
        this.Quantity = Quantity;
        this.Description = Description;
    }
}
