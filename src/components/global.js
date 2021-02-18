import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  // *,
  // *::after,
  // *::before {
  //   box-sizing: border-box;
  // }

  :root {
    --primary: ${({ theme }) => theme.primary};
    --primary-rgb: ${({ theme }) => theme.primary_rgb};
    --secondary: ${({ theme }) => theme.secondary};
    --secondary-rgb: ${({ theme }) => theme.secondary_rgb};
    --tertiary: ${({ theme }) => theme.tertiary};
    --tertiary-rgb: ${({ theme }) => theme.tertiary_rgb};
  }
`
