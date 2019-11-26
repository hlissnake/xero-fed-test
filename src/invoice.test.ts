import { Invoice } from './invoice';
import { InvoiceLine } from './invoiceLine';

it('Create Invoice With Multiple Items And Quantities', () => {
    const invoice = new Invoice();
    invoice.AddInvoiceLine(new InvoiceLine(1, 10.31, 4, "Banana"));
    invoice.AddInvoiceLine(new InvoiceLine(2, 7.22, 1, "Orange"));
    invoice.AddInvoiceLine(new InvoiceLine(3, 6.29, 3, "Pineapple"));

    expect(invoice.GetTotal()).toBe(67.33);
});

it('Remove item', () => {
    const invoice = new Invoice();

    invoice.AddInvoiceLine(new InvoiceLine(1, 10.21, 1, "Orange"));
    invoice.AddInvoiceLine(new InvoiceLine(2, 10.99, 5, "Banana"));

    invoice.RemoveInvoiceLine(1);
    expect(invoice.GetTotal()).toBe(54.95);
});

it('Merge Invoices', () => {
    const invoiceA = new Invoice();

    invoiceA.AddInvoiceLine(new InvoiceLine(1, 10.21, 1, "Blueberries"));

    const invoiceB = new Invoice();

    invoiceB.AddInvoiceLine(new InvoiceLine(2, 5.29, 4, "Orange"));
    invoiceB.AddInvoiceLine(new InvoiceLine(3, 9.99, 1, "Banana"));

    invoiceA.MergeInvoices(invoiceB);
    expect(invoiceA.GetTotal()).toBe(41.36);
});

it('Clone Invoice', () => {
    const invoice = new Invoice();

    invoice.AddInvoiceLine(new InvoiceLine(1, 0.99, 5, "Onion"));
    invoice.AddInvoiceLine(new InvoiceLine(2, 10.49, 2, "Watermelon"));

    const ClonedInvoice = invoice.Clone();
    expect(ClonedInvoice.GetTotal()).toBe(25.93);
});
