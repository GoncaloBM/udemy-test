import { render, screen, fireEvent, logRoles } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

describe('Summary Form', () => {
    test('Check default checkbox status', () => {
        render(<SummaryForm />)
        const checkbox = screen.getByRole('checkbox');
        const submitButton = screen.getByRole('button');
        expect(checkbox).not.toBeChecked();
        expect(submitButton).toBeDisabled();
    });

    test('Check Button Status', async () => {
        const user = userEvent.setup();
        render(<SummaryForm />)
        const checkbox = screen.getByRole('checkbox');
        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeDisabled();

        await user.click(checkbox);
        expect(submitButton).toBeEnabled();
        expect(checkbox).toBeChecked();

        await user.click(checkbox);
        expect(submitButton).toBeDisabled();
        expect(checkbox).not.toBeChecked();
    })

    test('popover response', async () => {
        const user = userEvent.setup();
        render(<SummaryForm />);
    
        const nullPopover = screen.queryByTestId('terms-popover-id');
        expect(nullPopover).not.toBeInTheDocument();

        const termsAndConditions = screen.getByTestId('terms-text-id');
        await user.hover(termsAndConditions);

        const popover = await screen.findByTestId('terms-popover-id');
        expect(popover).toBeInTheDocument();

        await user.unhover(termsAndConditions);
        expect(nullPopover).not.toBeInTheDocument();



    })
})