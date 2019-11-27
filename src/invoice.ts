import { InvoiceLine } from "./invoiceLine";

export class Invoice {

    InvoiceDate: Date;

    InvoiceNumber: string;

    LineItems: Array<InvoiceLine>;

    constructor(InvoiceDate = new Date(), InvoiceNumber = "", LineItems = []) {
        this.InvoiceDate = InvoiceDate;
        this.InvoiceNumber = InvoiceNumber;
        this.LineItems = LineItems;
    };

    /**
     * Adds a line to invoice
     * @param {Object} line - a line to add
    */
    AddInvoiceLine(line: InvoiceLine): void {
        this.LineItems.push(line);
    };

    /**
     * Remove a line base on the ID
     * @param id 
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

    /**
     * Get total cost of all lines
     */
    GetTotal(): number {
        return this.LineItems.reduce((total, item) => {
            return total + (item.Cost * item.Quantity);
        }, 0);
    };

    /**
     * Merge a new Invoice into current Invoice
     * @param newInvoice
     */
    MergeInvoices(newInvoice): void {
        newInvoice.LineItems.map((item) => {
            this.AddInvoiceLine(item);
        })
    };

    /**
     * Makes a deep clone of current Invoice
     */
    Clone(): Invoice {
        return new Invoice(
            this.InvoiceDate, this.InvoiceNumber,
            // Deep clone for each LineItem
            this.LineItems.map(item => item.Clone())
        );
    };

    toString(): string {
        return `InvoiceDate: ${this.InvoiceDate.toString()} \nInvoiceNumber: ${this.InvoiceNumber} \nLineItems: ${this.LineItems.toString()}`
    }
}
