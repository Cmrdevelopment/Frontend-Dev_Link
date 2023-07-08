import './OfferTypeSelect.css';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const OfferTypeSelect = ({ valueOfferType, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="OfferTypeSelect-label">Offer Type</InputLabel>
      <Select
        labelId="OfferTypeSelect-label"
        id="OfferTypeSelect-select"
        value={valueOfferType}
        label="Offer Type"
        onChange={onChange}
      >
        <MenuItem value={'All'}>All</MenuItem>
        <MenuItem value={'CompanyOffer'}>Company</MenuItem>
        <MenuItem value={'FreelandOffer'}>Freeland</MenuItem>
      </Select>
    </FormControl>
  );
};

export default OfferTypeSelect;
