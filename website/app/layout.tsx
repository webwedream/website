"use client";
import '@/styles/dist.css';
import { SessionProvider } from "next-auth/react";
import React from 'react';

export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  console.log("layout", { props }); // empty
  return (
    <html>
      <head></head>
      <body>
        <SessionProvider session={props.session}>{children}</SessionProvider> // session not exists
      </body>
    </html>
  );
}