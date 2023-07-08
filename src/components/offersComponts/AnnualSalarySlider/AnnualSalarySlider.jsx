import './AnnualSalarySlider.css';

import { Slider } from '@mui/material';

const marks = [
  { value: 10000, label: '10000' },
  { value: 50000, label: '50000' },
  { value: 100000, label: '100000' },
];

const AnnualSalarySlider = ({ value, onChange }) => (
  <Slider
    aria-label="Custom marks"
    value={value}
    onChange={onChange}
    step={1}
    min={10000}
    max={120000}
    marks={marks}
  />
);

export default AnnualSalarySlider;
