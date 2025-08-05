import { Box } from '@mui/material';
import './toolsAnimation.css';

const IconsMUI = ({ tool }) => {
  return (
    <Box className="tools-icon" sx={{width: { xs: '20%', sm: '20%', lg: '15%' }}}>
      <Box
        component="img"
        src={tool.img}
        alt={tool.name}
        className="tools-img"
        sx={{width: {xs: "7vh", sm:"8vh", lg: "14vh"}}}
      />
    </Box>
  );
};

export default IconsMUI;

