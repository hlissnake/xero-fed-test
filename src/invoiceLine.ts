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

    /**
     * Deep clone for Invoice line
     */
    Clone(): InvoiceLine {
        return new InvoiceLine(this.InvoiceLineId, this.Cost, this.Quantity, this.Description);
    }

    toString(): string {
        return `{InvoiceLineId: ${this.InvoiceLineId}, Cost: ${this.Cost}, Quantity: ${this.Quantity}, Description: ${this.Description}}`;
    }
}
