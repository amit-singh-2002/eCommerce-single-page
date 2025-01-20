"use client";

import { CssBaseline, Box } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <Box component="main">
          {children}
        </Box>
      </body>
    </html>
  );
}