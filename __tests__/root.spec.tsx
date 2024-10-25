import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { Root } from '@/root';

describe('Root', () => {
    it('renders the root component', () => {
        render(<Root />);
    });
});
