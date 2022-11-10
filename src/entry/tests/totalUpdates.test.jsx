import { render, screen } from '../../test-utils/testing-library-utils';
import UserEvent from '@testing-library/user-event';
import Options from '../Options';

describe('totals updates', () => {
    it('update scoops total', async () => {
        const user = UserEvent.setup();
        render(<Options options={'scoops'} />);

        const scoopSubtotal = screen.getByText('Scoops total:', { exact: false });

        expect(scoopSubtotal).toHaveTextContent('0');

        const vanillaInput = await screen.findByTestId('scoop-tota-input-Vanilla');

        await user.type(vanillaInput, '1');

        expect(scoopSubtotal).toHaveTextContent('2');
    });

    it('updates toppings total', async () => {
        const user = UserEvent.setup();
        render(<Options options={'toppings'} />);

        const toppingsSubTotal = screen.getByText('toppings total:', { exact: false });
        expect(toppingsSubTotal).toHaveTextContent('0');

        const chocolateTopping = await screen.findByTestId('Chocolate Topping');
        const vanillaTopping = await screen.findByTestId('Vanilla Topping');

        expect(chocolateTopping).not.toBeChecked();
        expect(vanillaTopping).not.toBeChecked();

        await user.click(chocolateTopping);
        expect(chocolateTopping).toBeChecked();
        expect(toppingsSubTotal).toHaveTextContent('1.5');

        await user.click(vanillaTopping);
        expect(vanillaTopping).toBeChecked();
        expect(toppingsSubTotal).toHaveTextContent('3');

        await user.click(vanillaTopping);
        expect(vanillaTopping).not.toBeChecked();
        expect(toppingsSubTotal).toHaveTextContent('1.5');


    })
})