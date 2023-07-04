import { Slider } from '@mui/material';
import './ExperienceYearsSlider.css'

const marks = [


  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 6, label: '5' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },

];

const ExperienceYearsSlider = ({ value, onChange }) =>
  <Slider
    aria-label="Custom marks"
    value={value}
    onChange={onChange}
    step={1}
    min={1}
    max={10}
    marks={marks}
  />

export default ExperienceYearsSlider

