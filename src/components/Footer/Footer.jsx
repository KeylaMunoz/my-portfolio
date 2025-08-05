import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.34)',
        width: '100%',
        py: 2,
        px: 3,
        mt: 'auto',
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        textAlign={{ xs: 'center', sm: 'left' }}
      >
        {/* Contacto */}
        <Grid item xs={12} sm={4}>
          <Typography variant="body2">{t('contactame')}</Typography>
          <Typography variant="body2">keyla.keyla.munoz@gmail.com</Typography>
          <Typography variant="body2">+54 9 381 3644789</Typography>
        </Grid>

        {/* Íconos de redes */}
        <Grid item xs={12} sm={4} display="flex" justifyContent="center" gap={1}>
          <IconButton
            component={Link}
            href="https://github.com/KeylaMunoz"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component={Link}
            href="https://www.linkedin.com/in/keyla-abigail-mu%C3%B1oz-1b1755287/"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <LinkedInIcon />
          </IconButton>
        </Grid>

        {/* Marca y derechos */}
        <Grid item xs={12} sm={4}>
          <Typography variant="body2">{t('marca')}</Typography>
          <Typography variant="body2">{t('derechos')}</Typography>
          <Typography variant="body2">Argentina.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
