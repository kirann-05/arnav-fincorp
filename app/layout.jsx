import { Outfit } from 'next/font/google';
import { ThemeProvider } from '../src/context/ThemeContext';
import { I18nProvider } from '../src/providers/I18nProvider';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Arnav Fincorp',
  description: 'Experience Seamless Banking with Arnav Fincorp',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <I18nProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
