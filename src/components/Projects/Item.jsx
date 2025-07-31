import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';

const Item = ({ project }) => {
  const { t } = useTranslation();

  const handleRedirect = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Card
      sx={{
        width: { xs: '80%', sm: '40%', md: '18%' }, 
        height: {xs: "auto", sm: "auto", md: "auto"},
        display: 'flex',
        flexDirection: 'column',
        px: "5px",
        pt: "5px",
        m:"3% 0%",
        backgroundColor: "rgba(255, 255, 255, 0.38)"
      }}
    >
      <CardActionArea onClick={() => handleRedirect(project.link)}>
        <CardMedia
        />
        <Box
        component="img"
        src={project.img}
        alt={project.title}
        sx={{
            objectFit: 'cover', 
            objectPosition: "top",   
            height: '20vh',
            width: '100%',          
            display: 'block',          
            borderRadius: 1,
            boxShadow: 1       
        }}


        >

        </Box>
        <CardContent>
          <Typography variant="body1" color="secondary.dark" sx={{fontWeight:"800", textAlign: "center", fontSize: "140%"}}  gutterBottom>
            {project.title}
          </Typography>
           <Typography variant="body2" sx={{ mb: 1 }}>
            {project.description}
          </Typography> 
          <Box sx={{ mb: 1 }}>
            <img
              src={project.skills}
              alt="tools"
              style={{ width: '100%', maxHeight: '40%', objectFit: 'contain'}}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
