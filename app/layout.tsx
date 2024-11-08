import '@/styles/global.css';
import { Provider } from "@/components/ui/provider";
import { Nunito, Sacramento } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '900'],
  display: 'swap',
  variable: '--font-nunito',
});

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-sacramento',
});

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  
  return (
    <html suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${sacramento.variable}`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
