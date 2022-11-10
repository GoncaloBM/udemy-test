import { render, screen, waitFor } from "@testing-library/react";
import UserEvent from '@testing-library/user-event';
import App from '../App';

it.only('complete test flow', async () => {
    const user = UserEvent.setup();
    // render app
    render(<App />);
    const flavorTitle = screen.getByText('Flavor Page');
    expect(flavorTitle).toBeInTheDocument();
    // add scoop and topping
    let vanillaScoop;
    let chocolateScoop;
    let strawberryTopping;
    let scoopTotal;
    await waitFor(async () => {
        vanillaScoop = await screen.findByTestId('Vanilla-scoop-input');
        chocolateScoop = await screen.findByTestId('Chocolate-scoop-input');
        strawberryTopping = await screen.findByTestId('Strawberry-topping,check');
        scoopTotal = await screen.findByText('Scoops total:', { exact: false });
    }, { timeout: 2000 });

    await user.type(vanillaScoop, '2');
    await user.type(chocolateScoop, '4');
    expect(scoopTotal).toHaveTextContent('10');

    expect(strawberryTopping).not.toBeChecked();
    await user.click(strawberryTopping);
    expect(strawberryTopping).toBeChecked();
    expect(scoopTotal).toHaveTextContent('11.5');

    // find and click order button
    const goToSummaryButton = screen.getByRole('button', { name: '/go to summary/i' });
    await user.click(goToSummaryButton);

    // check summary information baswd on order
    const summaryTitle = screen.getByText('Summary Page', { exact: false });
    expect(summaryTitle).toBeInTheDocument();
    const total = screen.getByText('total', { exact: false });
    expect(total).toHaveTextContent('11.5');

    // accept terms
    const confirmOrderButton = screen.getByRole('button', { name: '/confirm order/i' });
    const termsCheckbox = screen.getByTestId('terms-checkbox');

    expect(confirmOrderButton).toBeDisabled();
    expect(termsCheckbox).not.toBeChecked();

    await user.click(termsCheckbox);
    expect(confirmOrderButton).toBeEnabled();
    expect(termsCheckbox).toBeChecked();

    await user.click(confirmOrderButton);

    // confirm order number on confirmation page
    await waitFor(async () => {
        const confirmationTitle = screen.getByText('Confirmation Page', { exact: false });
        expect(confirmationTitle).toBeInTheDocument();
    })

    const orderId = await screen.findByTestId('order-id-test');
    expect(orderId).toHaveTextContent('11111');

    // click new order on c page
    const newOrderButton = screen.getByRole('button',{name:'New Order'});
    await user.click(newOrderButton);
    expect(flavorTitle).toBeInTheDocument();

    // check scoops and toppings are 0
})