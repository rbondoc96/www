import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layouts/root-layout';
import { ROUTE_ROOT, ROUTE_WORK } from '@/routes/_names';
import { Root } from '@/routes/root';
import { Work } from '@/routes/work';

export const router = createBrowserRouter([
    {
        Component: RootLayout,
        children: [
            {
                path: ROUTE_ROOT.path,
                Component: Root,
            },
            {
                path: ROUTE_WORK.path,
                Component: Work,
            },
        ],
    },
]);
