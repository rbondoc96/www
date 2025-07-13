import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Page from '@/app/page';

describe('/', () => {
    it('renders the Page component', () => {
        render(<Page />);
    });
});
