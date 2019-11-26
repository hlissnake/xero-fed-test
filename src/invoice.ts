import { InvoiceLine } from "./invoiceLine";

export class Invoice {

    InvoiceDate: Date;

    InvoiceNumber: string;

    LineItems: InvoiceLine[];

    constructor(InvoiceDate = new Date(), InvoiceNumber = "", LineItems = []) {
        this.InvoiceDate = InvoiceDate;
        this.InvoiceNumber = InvoiceNumber;
        this.LineItems = LineItems;
    }

    /**
     * Adds a line to invoice
     * @param {Object} line - a line to add
    */
    AddInvoiceLine(line: InvoiceLine): void {
        this.LineItems.push(line);
    };

    /**
     * Removes a line
    */
    RemoveInvoiceLine(id): InvoiceLine[] {
        let itemIndex: number;
        this.LineItems.some((item, index) => {
            if (item.InvoiceLineId === id) {
                itemIndex = index;
                return true;
            }
        });
        return this.LineItems.splice(itemIndex, 1);
    };

    GetTotal(): number {
        return this.LineItems.reduce((total, item) => {
            return total + (item.Cost * item.Quantity);
        }, 0);
    };

    MergeInvoices(newInvoice): void {
        newInvoice.LineItems.map((item) => {
            this.AddInvoiceLine(item);
        })
    }

    Clone(): Invoice {
        return new Invoice(this.InvoiceDate, this.InvoiceNumber, [...this.LineItems]);
    };
}
