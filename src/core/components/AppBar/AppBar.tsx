import MaterialAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RadarIcon from '@mui/icons-material/Radar';

function AppBar() {
    return (
        <MaterialAppBar position="relative">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    <RadarIcon sx={{ mr: 2 }} />
                    Yerba radar
                </Typography>
            </Toolbar>
        </MaterialAppBar>
    );
}

export default AppBar;
