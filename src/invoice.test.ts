import { Invoice } from './invoice';
import { InvoiceLine } from './invoiceLine';

it('should create Invoice with multiple items and quantities', () => {
    const invoice = new Invoice();
    invoice.AddInvoiceLine(new InvoiceLine(1, 10.31, 4, "Banana"));
    invoice.AddInvoiceLine(new InvoiceLine(2, 7.22, 1, "Orange"));
    invoice.AddInvoiceLine(new InvoiceLine(3, 6.29, 3, "Pineapple"));

    expect(invoice.GetTotal()).toBe(67.33);
});

it('Should remove items base on provided IDs', () => {
    const invoice = new Invoice();

    invoice.AddInvoiceLine(new InvoiceLine(1, 10.21, 1, "Orange"));
    invoice.AddInvoiceLine(new InvoiceLine(2, 10.99, 5, "Banana"));
    invoice.AddInvoiceLine(new InvoiceLine(3, 4.99, 3, "Apple"));

    invoice.RemoveInvoiceLine(1);
    expect(invoice.GetTotal()).toBe(69.92);
    expect(invoice.LineItems.length).toBe(2);

    invoice.RemoveInvoiceLine(3);
    expect(invoice.GetTotal()).toBe(54.95);
    expect(invoice.LineItems.length).toBe(1);
});

it('Should merge Invoices', () => {
    const invoiceA = new Invoice();

    invoiceA.AddInvoiceLine(new InvoiceLine(1, 10.21, 1, "Blueberries"));

    const invoiceB = new Invoice();

    invoiceB.AddInvoiceLine(new InvoiceLine(2, 5.29, 4, "Orange"));
    invoiceB.AddInvoiceLine(new InvoiceLine(3, 7.99, 1, "Banana"));

    invoiceA.MergeInvoices(invoiceB);
    expect(invoiceA.GetTotal()).toBe(39.36);
    expect(invoiceA.LineItems.length).toBe(3);
});

it('Should deep clone Invoice', () => {
    const invoice = new Invoice();
    const Onion: InvoiceLine = new InvoiceLine(1, 0.99, 5, "Onion");

    invoice.AddInvoiceLine(Onion);
    invoice.AddInvoiceLine(new InvoiceLine(2, 10.49, 2, "Watermelon"));

    const ClonedInvoice = invoice.Clone();
    expect(ClonedInvoice.InvoiceDate).toBe(invoice.InvoiceDate);
    expect(ClonedInvoice.InvoiceNumber).toBe(invoice.InvoiceNumber);
    expect(ClonedInvoice.GetTotal()).toBe(25.93);

    // Change property of InvoiceLine object reference
    Onion.Cost = 2;
    expect(invoice.GetTotal()).toBe(30.98);
    expect(ClonedInvoice.GetTotal()).toBe(25.93);
});
