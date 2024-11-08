import {
    Box,
    Container,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import Logo from '../logo/Logo';
import Link from 'next/link';
import { FaInstagram, FaTelegram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";


export default function Footer() {
    return (
        <Box bg='gray.100' py={8} color={'gray.700'} rounded='xl'>
            <Container
                display={{
                    base: 'block',
                    md: 'flex',
                }}
                maxW={'7xl'}
                gap={4}
                justifyContent={'space-between'}
                py={4}
            >
                <VStack alignItems={'flex-start'}>
                    <Logo />
                    <Text>Dept. of CSA, OUTR, Bhubaneswar.</Text>
                </VStack>
                <Stack direction={'column'}
                    gap={3}
                    my={{ base: '6', md: '0' }}
                >
                    <Link href='/codewars'>Codewars</Link>
                    <Link href='/gallery'>Gallery</Link>
                    {/* <Link href='/blogs'>Blogs</Link> */}
                </Stack>

                <Stack direction={'column'}
                    gap={3}
                    my={{ base: '6', md: '0' }}
                >
                    <Link href='/department'>Department</Link>
                    <Link href='/alumni'>Alumni</Link>
                    <Link href='/events'>Events</Link>
                    <Link href='/resources'>Resources</Link>
                    <Link href='/drafts'>Drafts</Link>
                </Stack>

                <Stack direction={'row'}
                gap={6}
                >
                    <Link href='https://www.instagram.com/zigbee.outr' target='_blank'
                    >
                        <FaInstagram size={'20'} />
                    </Link>
                    <Link href='https://t.me/joinchat/wgUy8eMWplM2MGQ1' target='_blank'>
                        <FaTelegram size={'20'} />
                    </Link>
                    <Link
                        href='https://www.linkedin.com/company/zigbeecetb/'
                        target='_blank'
                    >
                        <FaLinkedin size={'20'} />
                    </Link>
                    <Link
                        href='https://www.youtube.com/channel/UCD7i_7Mh1M1mPViCZIyQAJA'
                        target='_blank'
                    >
                        <FaYoutube size={'20'} />
                    </Link>
                    <Link href='https://www.facebook.com/zigbee.cetb' target='_blank'>
                        <FaFacebook size={'20'} />
                    </Link>
                    <Link href='https://twitter.com/zigbeecetb' target='_blank'>
                        <FaTwitter size={'20'} />
                    </Link>
                </Stack>
            </Container>
            <Container maxW={'7xl'} h={'2px'} bg={'gray.200'} m={'auto'}>
            </Container>

            <Text
                textAlign={'center'}
                mt={'6'}
            >
                © 2022 Zigbee Student Developers&apos; Club. All rights reserved
            </Text>
        </Box>
    );
}