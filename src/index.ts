
/*
    Welcome to the Xero technical excercise!
    ---------------------------------------------------------------------------------
    The test consists of a small invoice application that has a number of issues.
    Your job is to fix them and make sure you can perform the functions in each method below.
    Note your first job is to get the solution to execute! 
	
    Rules
    ---------------------------------------------------------------------------------
    * The entire solution must be written in Javascript.
    * Feel free to use ECMA2015 (ES6) syntax
    * You can modify any of the code in this solution, split out classes etc
    * You can modify Invoice and InvoiceLine, rename and add methods, change property types (hint) 
    * Feel free to use any libraries or frameworks you like
    * Feel free to write tests (hint) 
    * Show off your skills! 
    Good luck :) 
    When you have finished the solution please zip it up and email it back to the recruiter or developer who sent it to you
*/

import { Invoice } from './invoice';
import { InvoiceLine } from './invoiceLine';

const Main = () => {
    console.log("Welcome to Xero Tech Test!");

    CreateInvoiceWithOneItem();
    CreateInvoiceWithMultipleItemsAndQuantities();
    RemoveItem();
    MergeInvoices();
    CloneInvoice();
    InvoiceToString();
}

export function CreateInvoiceWithOneItem() {
    const invoice = new Invoice();
    invoice.AddInvoiceLine(new InvoiceLine(1, 6.99, 1, "Apple"));
    console.log(invoice.LineItems);
}

export function CreateInvoiceWithMultipleItemsAndQuantities() {
    const invoice = new Invoice();
    invoice.AddInvoiceLine(new InvoiceLine(1, 10.21, 4, "Banana"));
    invoice.AddInvoiceLine(new InvoiceLine(2, 5.21, 1, "Orange"));
    invoice.AddInvoiceLine(new InvoiceLine(3, 6.21, 5, "Pineapple"));

    const total = invoice.GetTotal();
    console.log(total);
    return total;
}

export function RemoveItem() {
    const invoice = new Invoice();

    invoice.AddInvoiceLine(new InvoiceLine(1, 10.21, 1, "Orange"));
    invoice.AddInvoiceLine(new InvoiceLine(2, 10.99, 5, "Banana"));

    invoice.RemoveInvoiceLine(1);

    const total = invoice.GetTotal();
    console.log(total);
    return total;
}

export function MergeInvoices() {
    const invoice1 = new Invoice();

    invoice1.AddInvoiceLine(new InvoiceLine(1, 10.21, 1, "Blueberries"));

    const invoice2 = new Invoice();

    invoice2.AddInvoiceLine(new InvoiceLine(2, 5.29, 4, "Orange"));
    invoice2.AddInvoiceLine(new InvoiceLine(3, 9.99, 1, "Banana"));

    invoice1.MergeInvoices(invoice2);

    const total = invoice1.GetTotal();
    console.log(total);
    return total;
}

export function CloneInvoice() {
    const invoice = new Invoice();

    invoice.AddInvoiceLine(new InvoiceLine(1, 0.99, 5, "Onion"));
    invoice.AddInvoiceLine(new InvoiceLine(2, 10.49, 2, "Watermelon"));

    const ClonedInvoice = invoice.Clone();

    const total = ClonedInvoice.GetTotal();
    console.log(total);
    return total;
}

export function InvoiceToString() {
    const invoice = new Invoice(
        new Date(),
        "1000",
        [
            new InvoiceLine(1, 1.99, 20, "Peer")
        ]
    );

    console.log(invoice);
}

Main();