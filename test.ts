import { CreateInvoiceWithMultipleItemsAndQuantities, RemoveItem, MergeInvoices, CloneInvoice } from './src/index'

it('Create Invoice With Multiple Items And Quantities', () => {
    expect(CreateInvoiceWithMultipleItemsAndQuantities()).toBe(11);
});

it('Remove item', () => {
    expect(RemoveItem()).toBe(22);
});

it('Merge Invoices', () => {
    expect(MergeInvoices()).toBe(22);
});

it('Clone Invoice', () => {
    expect(CloneInvoice()).toBe(22);
});
