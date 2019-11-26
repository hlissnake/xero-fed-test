import { CreateInvoiceWithMultipleItemsAndQuantities, RemoveItem, MergeInvoices, CloneInvoice } from './index'

it('Create Invoice With Multiple Items And Quantities', () => {
    expect(CreateInvoiceWithMultipleItemsAndQuantities()).toBe(77.10);
});

it('Remove item', () => {
    expect(RemoveItem()).toBe(54.95);
});

it('Merge Invoices', () => {
    expect(MergeInvoices()).toBe(41.36);
});

it('Clone Invoice', () => {
    expect(CloneInvoice()).toBe(25.93);
});
