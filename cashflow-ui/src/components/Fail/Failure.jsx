import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Heading,
  Image,
} from '@chakra-ui/react';
import { Navigate } from 'react-router';

export default function Failure(module_name) {
    const navigate = useNavigate();
    console.log(module_name.module_name)
    function handleRestart() {
      location.reload()
    }
    function handleExit() {
      navigate('/')
    }
    return (
    <>
    <Box
      left={"12%"}
      position={"absolute"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="800px"
      zIndex="10"
    >
      <Box mt={20}>
      <Image src='/gary.png' position={'absolute'} top={'-50px'} ml={'500px'} h={500} zIndex={'1'}/>
      <Box position={'relative'} height={'800px'} width={'1500px'} overflow={'inherit'} borderRadius={'3xl'} color={'var(--midnight)'} backgroundColor={'var(--lightblue)'}>

        {/* Menu Icon */}
        <IconButton
          aria-label="start"
          variant="ghost"
          position="absolute"
          transform={'translate(0%, -50%)'}
          zIndex={2}
          mt={700}
          icon={<Image src="/menu.png" maxH={'300px'} />}
         onClick={handleExit}

        />
        {/* Start Icon */}
        <IconButton
          aria-label="start"
          variant="ghost"
          position="absolute"
          transform={'translate(0%, -50%)'}
          zIndex={2}
          mt={700}
          ml={1200}
          icon={<Image src="/start.png" maxH={'330px'} />}
          onClick={handleRestart}
        />

        <Box pt={300}>
        <Heading display={'flex'} size={'4xl'} justifyContent={'center'} >YOU GOT THIS, TRY AGAIN!</Heading>
        {/* TODO: Insert explanation  */}
        <Heading pt={100} display={'flex'} justifyContent={'center'} >YOU HAVE NOT EARNED ENOUGH POINTS TO COMPLETE</Heading>
        {/* TODO: Insert points  */}
        <Heading display={'flex'} justifyContent={'center'} >THIS MODULE. TRY ASKING CASHBOT FOR MORE HELP!</Heading>
        </Box>
      </Box>
      </Box>
    </Box>

    </>
  );

}