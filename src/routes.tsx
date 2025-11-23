import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/AppLayout";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                lazy: async () => {
                    const { default: HomePage } = await import("./pages/HomePage");
                    return { Component: HomePage };
                },
            },
            {
                path: "/incoterms",
                lazy: async () => {
                    const { default: IncotermsPage } = await import("./pages/incoterms/IncotermsPage");
                    return { Component: IncotermsPage };
                },
            },
            {
                path: "/legislacion",
                lazy: async () => {
                    const { default: LegislacionPage } = await import("./pages/Legislación/LegislacionPage");
                    return { Component: LegislacionPage };
                },
            },
            {
                path: "/valoracion",
                lazy: async () => {
                    const { default: ValoracionPage } = await import("./pages/Valoración/ValoracionPage");
                    return { Component: ValoracionPage };
                },
            },
        ]
    }
]);

export default router;