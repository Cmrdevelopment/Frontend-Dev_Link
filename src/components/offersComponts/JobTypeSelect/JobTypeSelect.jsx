import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './JobTypeSelect.css'

const JobTypeSelect = ({ valueJobType, onChange }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="JobTypeSelect-label">Job Type</InputLabel>
            <Select
                labelId="JobTypeSelect-label"
                id="JobTypeSelect-select"
                value={valueJobType}
                label="Job Type"
                onChange={onChange}
            >
                <MenuItem value={"All"}>All</MenuItem>
                <MenuItem value={"Remote"}>Remote</MenuItem>
                <MenuItem value={"Office"}>Office</MenuItem>
                <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
            </Select>
        </FormControl>
    );
}


export default JobTypeSelect

