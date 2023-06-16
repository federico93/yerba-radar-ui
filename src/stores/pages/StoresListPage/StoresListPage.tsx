import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import AppBar from "../../../core/components/AppBar";
import StoresList from "../../components/StoresList";
import Copyright from '../../../core/components/Copyright';

const theme = createTheme();

function StoresListPage() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar />
            <main>
                <StoresList />
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}

export default StoresListPage;
