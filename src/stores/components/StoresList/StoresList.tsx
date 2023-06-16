import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography  from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PublicIcon from '@mui/icons-material/Public';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';

const cards = [
    {
        "storeName": "Mate Emporium",
        "city": "Berlin",
        "country": "Germany",
        "address": "Friedrichstraße 123, 10117 Berlin",
        "telephone": "+49 30 12345678",
        "instagram": "@mateemporium_berlin"
    },
    {
        "storeName": "Mate Oasis",
        "city": "Amsterdam",
        "country": "Netherlands",
        "address": "Keizersgracht 456, 1017 EG Amsterdam",
        "telephone": "+31 20 98765432",
        "instagram": "@mateoasis_amsterdam"
    },
    {
        "storeName": "Yerba Delight",
        "city": "Barcelona",
        "country": "Spain",
        "address": "Carrer de Mallorca 789, 08013 Barcelona",
        "telephone": "+34 93 24681357",
        "instagram": "@yerbadelight_barcelona"
    },
    {
        "storeName": "Mate Bliss",
        "city": "London",
        "country": "United Kingdom",
        "address": "Oxford Street 987, London W1D 2EU",
        "telephone": "+44 20 76543210",
        "instagram": "@matebliss_london"
    },
    {
        "storeName": "Mate Magic",
        "city": "Berlin",
        "country": "Germany",
        "address": "Potsdamer Platz 456, 10785 Berlin",
        "telephone": "+49 30 87654321",
        "instagram": "@matemagic_berlin"
    },
    {
        "storeName": "Yerba Haven",
        "city": "Amsterdam",
        "country": "Netherlands",
        "address": "Prinsengracht 789, 1017 JH Amsterdam",
        "telephone": "+31 20 54321678",
        "instagram": "@yerbahaven_amsterdam"
    },
    {
        "storeName": "Mate Paradise",
        "city": "Barcelona",
        "country": "Spain",
        "address": "Rambla de Catalunya 123, 08008 Barcelona",
        "telephone": "+34 93 13579246",
        "instagram": "@mateparadise_barcelona"
    },
    {
        "storeName": "Yerba Harmony",
        "city": "London",
        "country": "United Kingdom",
        "address": "Covent Garden 456, London WC2E 8RF",
        "telephone": "+44 20 12345678",
        "instagram": "@yerbaharmony_london"
    },
    {
        "storeName": "Yerba Magic",
        "city": "Munich",
        "country": "Germany",
        "address": "Marienplatz 789, 80331 Munich",
        "telephone": "+49 89 87654321",
        "instagram": "@yerbamagic_munich"
      }
];

function StoresList() {
    return (
        <div>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Store list
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Check all the registered stores around the world where you can get your yerba mate.
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained">Add a store</Button>
                        <Button variant="outlined">Secondary action</Button>
                    </Stack>
                </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="lg">
                <Grid container spacing={4}>
                    {cards.map(card => renderStoreCard(card))}
                </Grid>
            </Container>
        </div>
    );
}

interface StoreCard {
    storeName: string,
    city: string,
    country: string,
    address: string,
    telephone: string,
    instagram: string
}

const storeCardDescriptionFields = [
    {
        key: "country",
        icon: <PublicIcon />
    },
    {
        key: "city",
        icon: <LocationCityIcon />
    },
    {
        key: "address",
        icon: <HomeIcon />
    },
    {
        key: "telephone",
        icon: <PhoneIcon />
    },
    {
        key: "instagram",
        icon: <InstagramIcon />
    }
];

function renderStoreCard(card: StoreCard) {
    return (
        <Grid item key={card.storeName} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.storeName}
                    </Typography>
                    <Typography>
                        <List>
                            {storeCardDescriptionFields.map(field => (
                                <ListItem>
                                    <ListItemIcon>
                                        {field.icon}
                                    </ListItemIcon>
                                    <ListItemText>
                                        {card[field.key as keyof StoreCard]}
                                    </ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default StoresList;
