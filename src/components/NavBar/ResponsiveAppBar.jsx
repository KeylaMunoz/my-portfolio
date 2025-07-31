
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';


const ResponsiveAppBar = ( {changeLanguage} ) => {
  const { t } =  useTranslation();

  const pages = [
    { label: t('sobreMi'), id: 'aboutMe' },
      { label: t('proyectos'), id: 'projects' },
      { label: t('herramientas'), id: 'tools' },
      { label: t('contacto'), id: 'contact' }
    ];
//Menu responsive
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElLan, setAnchorElLan] = useState(null);

  //abrir y cerrar Menu
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

  //abrir y cerrar Language
    const handleOpenLangMenu = (event) => {
      setAnchorElLan(event.currentTarget);
    };

    const handleCloseLanMenu = () => {
      setAnchorElLan(null);
    };


    return (
        <AppBar position="static" color='transparent' sx={{ height: '44px', boxShadow: "none", backgroundColor: "#0000004f"}}>
            <Container maxWidth="xl"  >
                <Toolbar disableGutters  >
                  <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 800,
              fontSize: "3vh",
              textDecoration: 'none',
            }}
          >
            KEYLA MUÑOZ
          </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'}, justifyContent:'flex-end' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                          >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorElNav}
                          open={Boolean(anchorElNav)}
                          onClose={handleCloseNavMenu}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                          }}
                          sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                              <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                <a href={`#${page.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                  <Typography textAlign="center">{page.label}</Typography>
                                </a>
                              </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent: 'flex-end'}}>
                        {pages.map((page) => (
                            <Button
                              key={page.id}
                              onClick={handleCloseNavMenu}
                              href={`#${page.id}`}
                              sx={{ my: 2, color: 'black', display: 'block'}}
                            >
                              {page.label}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                color="inherit"
                                aria-label="cambiar idioma"
                                onClick={handleOpenLangMenu}
                            >
                                <LanguageIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElLan}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right',
                            }}
                            open={Boolean(anchorElLan)}
                            onClose={handleCloseLanMenu}
                        >
                            <MenuItem onClick={() => changeLanguage('es')}>ES</MenuItem>
                            <MenuItem onClick={() => changeLanguage('en')}>EN</MenuItem>
                        </Menu>
                  </Box>
              </Toolbar>
            </Container>
        </AppBar>
    );
  }
export default ResponsiveAppBar;
