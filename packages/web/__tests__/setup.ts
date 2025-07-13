import { vi } from 'vitest';

vi.mock('next/font/google', () => ({
    Orbitron: vi.fn().mockReturnValue({ className: 'orbitron' }),
    Sora: vi.fn().mockReturnValue({ className: 'sora' }),
}));
