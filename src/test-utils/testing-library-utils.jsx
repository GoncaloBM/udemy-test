import { render } from "@testing-library/react";
import { AppContextProvider } from "../contexts/appContext";

const renderWithContext = (ui, options) =>
    render(ui, { wrapper: AppContextProvider, ...options })

export * from '@testing-library/react';

export { renderWithContext as render }