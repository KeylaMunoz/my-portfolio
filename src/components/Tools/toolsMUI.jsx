import { Box } from '@mui/material';
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import data from "../../data/data.js";
import IconsMUI from './IconsMUI.jsx';
import './toolsAnimation.css';

const ToolsMUI = () => {
  const [tools, setTools] = useState([]);

  const getTools = () => {
    const toolsData = collection(data, "skills");
    getDocs(toolsData)
      .then((toolsDb) => {
        const data = toolsDb.docs.map((tools) => {
          return { id: tools.id, ...tools.data() };
        });
        setTools(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => console.log("finalizado"));
  };

  useEffect(() => {
    getTools();
  }, []);

  return (
    <Box className="animation-container">
      <Box className="central-image">
        <Box
          component="img"
          src="/img/laptop.png"
          alt="laptop"
          className="laptop"
        />
      </Box>

      <Box className="orbit" sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2,}}>
        {tools.map((tool) => (
          <IconsMUI key={tool.id} tool={tool} />
        ))}
      </Box>
    </Box>
  );
};

export default ToolsMUI;
