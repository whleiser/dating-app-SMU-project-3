import React from "react";
import {
  Text,
  Box
} from 'rebass';


function NoMatch() {
  return (
    <Box
    sx={{
    maxWidth: 512,
    mx: 'auto',
    px: 3,
    }}>
    <Text>404 Page Not Found</Text>
    <span role="img" aria-label="Face With Rolling Eyes Emoji">
      🙄
    </span>
    </Box>
  );
}

export default NoMatch;
