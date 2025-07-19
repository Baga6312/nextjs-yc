import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"

const workSans = localFont( {
  src: [
    {
      path: './fonts/workSans-Black.ttf',
      weight: '900', 
      style: 'noraml',
    }, 
    {
      path: './fonts/workSans-ExtraBold.ttf',
      weight: '800', 
      style: 'noraml',
    }, 
    {
      path: './fonts/workSans-Bold.ttf',
      weight: '700', 
      style: 'noraml',
    }, 
    {
      path: './fonts/workSans-SemiBold.ttf',
      weight: '600', 
      style: 'noraml',
    }, 
    {
      path: './fonts/workSans-Medium.ttf',
      weight: '500', 
      style: 'noraml',
    }, 
    {
      path: './fonts/workSans-Regular.ttf',
      weight: '400', 
      style: 'noraml',
    }, 
    {
      path: './fonts/workSans-Thin.ttf',
      weight: '200', 
      style: 'noraml',
    }, 
    {
      path: './fonts/workSans-ExtraLight.ttf',
      weight: '100', 
      style: 'noraml',
    }
  ], variable : '--font-work-sans'
})

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={workSans.variable}
      >
        {children}
      </body>
    </html>
  );
}
