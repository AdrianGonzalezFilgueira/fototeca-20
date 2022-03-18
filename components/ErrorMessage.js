import Alert from '@mui/material/Alert';


export default function ErrorMessage({children}) {
    return(
        
        <div style={{marginTop: '15px'}}>
            <Alert variant='filled' severity="error">{children}</Alert>
        </div>

    )
}