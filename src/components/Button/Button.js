import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({variant,bgColor, color, label, onClick}) {
  return (
      <Button className="cmp-button" variant={variant} sx={{marginRight:'10px', backgroundColor:bgColor, color:color}} onClick={onClick}>{label}</Button>
  );
}