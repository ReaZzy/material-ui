import * as React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function TypographyScales() {
  return (
    <Box>
      <Typography level="h1">h1</Typography>
      <Typography level="h2">h2</Typography>
      <Typography level="h3">h3</Typography>
      <Typography level="h4">h4</Typography>
      <Typography level="h5">h5</Typography>
      <Typography level="h6">h6</Typography>
      <Typography level="body1">body1: paragraph</Typography>
      <Typography level="body2">body2: paragraph</Typography>
      <Typography level="body3">body3: paragraph</Typography>
    </Box>
  );
}