import { render, screen } from '../../test-utils/testing-library-utils';
import Options from '../Options';

describe('Options Components', () => {
    it('displays image for each scoop option from server', async () => {
        render(<Options options='scoops' />);

        // find images
        const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });

        expect(scoopImages).toHaveLength(2);

        const altText = scoopImages.map((element) => element.alt);

        expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
    })

    it('display images for toppings', async () => {
        render(<Options options='toppings' />);

        const toppingImages = await screen.findAllByRole('img', { name: /topping$/i });

        expect(toppingImages).toHaveLength(3);

        const altText = toppingImages.map(image => image.alt);

        expect(altText).toEqual(['Chocolate topping', 'Vanilla topping', 'Strawberry topping'])
    })
})