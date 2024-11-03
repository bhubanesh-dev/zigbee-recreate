"use client";
import { Button, Container, Flex, Spacer, useMediaQuery, } from '@chakra-ui/react';

import Link from 'next/link';
import NavItemsGroup from './NavItemsGroup';
import Logo from '@/ui/logo/Logo';

import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerBody,
  DrawerCloseTrigger,
} from '@/components/ui/drawer';
// import { HamburgerIcon } from '@chakra-ui/icons';

function Navbar() {
  const [isMobile] = useMediaQuery(["(max-width: 900px)"], { fallback: [false] });
   // No fallback needed


  // const btnRef = useRef();

  return (
    <Container maxW={'7xl'}>
      <Flex py='4' alignItems={'center'}>
        <Link href='/'>
          <Logo />
        </Link>
        <Spacer />
        {isMobile ? (
          <>
            <DrawerRoot>
              <DrawerBackdrop />
              <DrawerTrigger asChild>
                <Button variant="outline" size="sm">
                 any
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>
                    <Button
                      variant='ghost'
                      colorScheme='blue'
                      color='#5879f1'
                      size='md'
                      className='logo'
                      p='16px'
                    >
                     <Logo/>
                    </Button>
                  </DrawerTitle>
                </DrawerHeader>

                <DrawerBody>
                  <NavItemsGroup />
                </DrawerBody>
                <DrawerCloseTrigger />
              </DrawerContent>
            </DrawerRoot>
          </>
        ) : (
          <NavItemsGroup />
        )}
      </Flex>
    </Container>
  );
}

export default Navbar;
