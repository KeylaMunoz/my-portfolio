import { useTranslation } from 'react-i18next';
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import '@fontsource/dm-serif-text';
import Button from '@mui/material/Button';

const AboutMe = () => {
        const { t } = useTranslation();

    return(
        <div>
            <Box sx={{ flexGrow: 1,  p: 2, pb: "0", backgroundColor: "#0000004f",boxShadow: "1px" }}>
                <Grid container spacing={2} sx={{ justifyContent:"center", flexWrap: "wrap", alignItems: "end"}}>
                    <Grid item xs={12}  md={4} 
                    sx={{ justifyContent: "center"}} >
                        <Box sx={{mb: { xs: '4vh', lg: '30vh' }, }}>
                            <Typography variant="h2" color="primary.dark" 
                            sx={{ fontWeight: "600", fontSize: "6vh"}}>{t('bienvenidos')}</Typography>
                            <Typography variant="h1"
                            sx={{ fontFamily: 'DM Serif Text', fontWeight: "500", fontSize: '9.5vh'}}>{t('nombre')}</Typography>
                            <Typography variant="h3"
                            sx={{ fontWeight: "400", letterSpacing: "0.2vw"}} gutterBottom>{t('titulo')}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} >
                        <Box sx={{ width: '300px', height: '400px', overflow: 'hidden' }}>
                            <Box
                                component="img"
                                src="/img/yo.png"
                                sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'bottom',
                                filter: 'drop-shadow(2px 2px 10px rgba(255, 255, 255, 0.61))',
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2}>
                            <Box sx={{display: "flex", flexDirection: "column", maxWidth: '45vh'}}> 
                                <Typography variant="h2" color= "primary.dark" sx={{ fontWeight: "600"}}>{t('sobreMi')}</Typography>
                                <Typography variant="body1" gutterBottom>{t('descripcion')}</Typography>
                            </Box>
                            <Button
                            variant="contained"
                            color="primary" 
                            href="https://drive.google.com/file/d/19e65tFQ0R0EOC8QVVD4nyM-V4cMEZWtN/view?usp=sharing"  target='_blank'
                            sx={{
                                mb: "4%"
                            }}
                            >
                                {t('cv')}  
                            </Button> 
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default AboutMe