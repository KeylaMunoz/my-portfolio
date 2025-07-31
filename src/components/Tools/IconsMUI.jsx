import { Box } from '@mui/material';
import './toolsAnimation.css';

const IconsMUI = ({ tool }) => {
  return (
    <Box className="tools-icon" sx={{width: { xs: '45%', sm: '20%', lg: '8%' }}}>
      <Box
        component="img"
        src={tool.img}
        alt={tool.name}
        className="tools-img"
      />
    </Box>
  );
};

export default IconsMUI;

