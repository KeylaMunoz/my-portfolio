import React from 'react';
import { Box, Grid, Avatar, Typography, Link, Paper } from '@mui/material';

    const Contact = () => {
        
    return (
        <section>
            <Box sx={{mt:"3%", mb: "5% "}}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    
                    sx={{
                    maxWidth: '1200px',
                    mx: "auto",
                    width: "100%",
                    flexWrap: {xs: "wrap", md: "nowrap"}
                    }}
                >
                    <Grid item xs={12} md={5} sx={{display: 'flex', justifyContent: "center", width: "60%"}}>
                        <Avatar
                            alt="Keyla Muñoz"
                            src="/img/yo2.jpg" 
                            sx={{ width: "18rem", height: "18rem", boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' }}
                        />
                    </Grid>
                    <Grid item xs={12} md={7} >
                        <Grid container spacing={2} sx={{flexDirection: "row", width: "100%", justifyContent: "center", pt: "5%"}}>
                            {[
                            {
                                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s',
                                label: 'LinkedIn',
                                text: 'Keyla Muñoz',
                                link: 'https://www.linkedin.com/in/keyla-abigail-mu%C3%B1oz-1b1755287/',
                            },
                            {
                                icon: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png',
                                label: 'GitHub',
                                text: 'KeylaMuñoz',
                                link: 'https://github.com/KeylaMunoz',
                            },
                            {
                                icon: 'https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png',
                                label: 'Email',
                                text: 'keyla.keyla.munoz@gmail.com',
                            },
                            {
                                icon: 'https://cdn-icons-png.freepik.com/256/3536/3536445.png',
                                label: 'WhatsApp',
                                text: '+54 9 3813644789',
                                link: 'https://wa.me/5493813644789?text=Hola%20Keyla%20Mu%C3%B1oz%2C%20estoy%20interesado%20en%20tu%20perfil',
                            },
                            ].map(({ icon, label, text, link }, index) => (
                            <Grid item xs={12} sm={6} key={index}>
                                <Paper
                                elevation={2}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    p: 3,
                                    backgroundColor: '#ffffff46',
                                    borderRadius: 3,
                                    color: "#000000ff",
                                    fontSize: "1rem",
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                    transform: 'scale(1.03)',
                                    },
                                }}
                                >
                                <Avatar src={icon} alt={label} sx={{ width: 45, height: 45, mr: 2 }} />
                                    <Box sx={{width: "40vh"}}>
                                        <Typography variant="h3">{label}</Typography>
                                        {link ? (
                                        <Link
                                            href={link}
                                            target="_blank"
                                            rel="noopener"
                                            color="inherit"
                                            underline="hover"
                                            sx={{fontSize: "1rem", fontWeight: "500"}}
                                        >
                                            {text}
                                        </Link>
                                        ) : (
                                        <Typography variant="h3" sx={{fontSize: "1rem", fontWeight: "500"}}>{text}</Typography>
                                        )}
                                    </Box>
                                </Paper>
                            </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </section>
    )
}

export default Contact