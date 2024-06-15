import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export default function Translate() {
    return (
        <div>
            <h1 style={{ "font-family": "Brush Script MT", }} >TRANSLATE</h1>
            <hr />
            <div className='text-center'>
                <TextField
                    id="filled-search"
                    label="Text to Translate"
                    type="search"
                    variant="filled"
                />
                <br /><br />
                <Button variant="contained">Click Here to Translate</Button>
                <br /><br />
            </div>
        </div>
    )
}
