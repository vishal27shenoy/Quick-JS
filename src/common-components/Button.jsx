import { Flex,Box } from '@chakra-ui/react'
import React from 'react'

const Button = ({icon,title,onPress}) => {
  return (
    <Flex>
        <Box>
            {icon}
        </Box>
        <Box>
            {title}
        </Box>
    </Flex>
  )
}

export default Button