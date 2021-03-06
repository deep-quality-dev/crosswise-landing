import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { flipAnimation } from '@/constants/animations';
import { SlideDropDown } from '../Slidedown';

import ImageFreddy from '@/assets/images/members/Freddy.png';
import ImageGreg from '@/assets/images/members/Greg.png';
import ImageDino from '@/assets/images/members/Dino.jpg';
import ImageHarry from '@/assets/images/members/Harry.jpg';
import ImageLeon from '@/assets/images/members/Leon.jpg';
import ImageJamesGao from '@/assets/images/members/JamesGao.jpg';
import ImageJamesYin from '@/assets/images/members/JamesYin.jpg';
import ImageBenWeider from '@/assets/images/members/BenWeider.jpg';
import { IconArrowDown, IconArrowUp, IconLinkedin } from '../Icons';
import Link from 'next/link';

const ref = React.createRef<HTMLButtonElement>();
type LinkProps = React.HTMLProps<HTMLElement>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ChildLink = React.forwardRef<HTMLElement, LinkProps>((props, ref) => (
  <>{props.children}</>
));
ChildLink.displayName = 'ChildLink';

interface MemberProps {
  image: StaticImageData;
  name: string;
  linkedIn: string;
  role: string;
  desc: string;
}

const Members: Array<MemberProps> = [
  {
    image: ImageFreddy,
    name: 'Frederic Beeg',
    linkedIn: 'https://www.linkedin.com/in/fbeeg/',
    role: 'CEO & Founder',
    desc: `Freddy is a long-time entrepreneur. At the age of 19, he set up what became  the leading European marketplace for video game distribution in 2013, which he later sold to a major competitor. In recent years he has focused on investing in crypto, building e-commerce platforms, and launching several brands on Amazon. He spends most of his time between Koh Phangan, Thailand and Canggu, Bali, Indonesia. Freddy is also an avid tennis player.`,
  },
  {
    image: ImageGreg,
    name: 'Gregory Khine',
    linkedIn: 'https://www.linkedin.com/in/gregory-khine/',
    role: 'Chief Operating Officer',
    desc: `Founded an award-winning web agency as well as popular online education resources in the late 90s. Greg fell down the crypto rabbit hole in 2015, and has since developed a particular interest in DeFi, both the technology and its transformative potential. He holds undergraduate and graduate degrees from the London School of Economics & Political Science.`,
  },
  {
    image: ImageDino,
    name: 'Dino Dzizic',
    linkedIn: 'https://www.linkedin.com/in/dino-dzizic-189a54191/',
    role: 'Chief Technology Officer',
    desc: `DeFi/Dapp/NFT specialist with a passion for blockchain technology. Dino has lead the crosswise development team since it's inception. He has over 5 years experience developing blockchain technology, including high-profile projects, and holds a Bachelor's degree in software engineering. In his free time he enjoys playing tennis and is a big fan of fellow Serbian Novak Djokovic.`,
  },
  {
    image: ImageHarry,
    name: 'Harry Liu',
    linkedIn: 'https://www.linkedin.com/in/harry-liu-192510191/',
    role: 'Senior Smart Contract Developer',
    desc: `Harry is a software engineer with strong background in decentralized 
      application architecture. He's a certified blockchain developer with expertise in smart contracts and decentralized applications development. He is most proficient in Solidity, C++, Golang and Rust programming languages. Harry has worked on numerous blockchain projects as a developer, lead and consultant. Harry earned a Bachelor's degree in Computer Software Engineering at the Hebei University of Technology. He is based in Canada. but is originally from China. In his free time, he enjoys swimming and as well as playing billiards and the piano.`,
  },
  {
    image: ImageLeon,
    name: 'Leon Jin',
    linkedIn: 'https://www.linkedin.com/in/leon-jin-7013011b9/',
    role: 'Senior Smart Contract Developer',
    desc: `In recent years Leon has focused on developing blockchain projects. He has an in-depth understanding of blockchain technology, with a particular focus on building decentralized applications, yield farming, and new proof methods. Leon is from Liaoning, China. In his spare time he enjoys playing football.`,
  },
  {
    image: ImageJamesGao,
    name: 'James Gao',
    linkedIn: 'https://www.linkedin.com/in/james-gao-49461a217/',
    role: 'Senior Smart Contract Developer',
    desc: `James is from Xiangtan, Hunan, China. He holds bachelor's degree in computer science and has a profound understanding of software engineering. He is a full stack developer who has contributed to several well-known DeFi projects. James also manages our servers. In his spare time he is an avid climber and has a particular interest in architecture.`,
  },
  {
    image: ImageJamesYin,
    name: 'James Yin',
    linkedIn: 'https://www.linkedin.com/in/yin-james-a303631b7/',
    role: 'Senior Back-End Developer',
    desc: `James specializes in smart contract and Dapp development at Crosswise. He is an accomplished back-end and front-end developer with over 8 years experience building web and mobile applications. He has accumulated extensive experience in blockchain development, contributing to a wide range of DeFi projects. James is a particularly creative and innovative developer.`,
  },
  {
    image: ImageBenWeider,
    name: 'Ben Weider',
    linkedIn: 'https://www.linkedin.com/in/ben-weider-411184211/',
    role: 'Lead Front-End Developer',
    desc: `Ben is a passionate blockchain and full stack Fintech developer who likes to build solutions combining blockchain technologies and financial trading systems. With over 9 years of experience, Ben leads the front-end development team. Ben has a particular talent for applying development best practices, methodologies and ensuring overall code quality. He loves to work together as part of a great team. In his free time he enjoys tennis and basketball, as well as technical trading on forex, futures and the crypto markets.`,
  },
];

const MemberCard = ({
  member,
  animate,
}: {
  member: MemberProps;
  animate: boolean;
}) => {
  // const boxTextColor = useColorModeValue('black', 'gray.300');
  const [expand, setExpand] = useState(false);
  const descColor = useColorModeValue('black', 'gray.300');

  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <Stack
      direction={'column'}
      p={{ base: 5 }}
      bg={useColorModeValue(
        'linear-gradient(89.98deg, #F5F7FA 0.02%, #FFFFFF 50%, #FFFFFF 99.99%)',
        'linear-gradient(89.98deg, rgba(245, 247, 250, 0.12) 0.02%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0) 99.99%);'
      )}
      borderRadius={'10'}
      boxShadow={'0 .5rem 1rem rgb(0 0 0/15%) !important'}
      height={'fit-content'}
      animation={animate ? flipAnimation : ''}
    >
      <Stack spacing={{ base: '17px' }} direction={'row'} alignItems={'center'}>
        <Box position={'relative'}>
          <Image
            src={member.image}
            alt={member.name}
            width={'80px'}
            height={'80px'}
            className={'border-circle'}
          />
          <Link href={member.linkedIn} passHref>
            <ChildLink ref={ref}>
              <Icon
                as={IconLinkedin}
                width={'27px'}
                height={'27px'}
                position={'absolute'}
                right={'0px'}
                top={'0px'}
                cursor={'pointer'}
              />
            </ChildLink>
          </Link>
        </Box>
        <Flex flex={1} flexDirection={'column'} justifyContent={'center'}>
          <Text fontWeight={{ base: '400' }}>{member.name}</Text>
          <Text color={'#8E8FA0'}>{member.role}</Text>
        </Flex>
      </Stack>

      <SlideDropDown open={expand}>
        <Text color={descColor}>{member.desc}</Text>
      </SlideDropDown>

      <Flex justifyContent={'flex-end'}>
        <Box p={'4px'} onClick={handleExpand} cursor={'pointer'}>
          <Icon
            as={expand === true ? IconArrowUp : IconArrowDown}
            width={'20px'}
            height={'20px'}
          />
        </Box>
      </Flex>
    </Stack>
  );
};

const CoreTeam = () => {
  const color = useColorModeValue('gray.100', '#282A2E');
  const [ref, inView] = useInView();
  return (
    <Box bg={color}>
      <Stack
        as={Container}
        maxW={'7xl'}
        minH={550}
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 5 }}
        direction={{ base: 'column' }}
        alignItems={'center'}
        ref={ref}
      >
        <Heading
          as={'h3'}
          fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl' }}
          maxW={'2xl'}
          fontWeight={{ base: '400' }}
          textAlign={'center'}
        >
          Core Team
        </Heading>

        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2, lg: 4 }}
          pt={{ base: 10, lg: 24 }}
          spacing={{ base: 8 }}
        >
          {Members.map((member) => (
            <MemberCard key={member.name} member={member} animate={inView} />
          ))}
        </SimpleGrid>
      </Stack>

      <Box position={'absolute'} bg={color}></Box>
    </Box>
  );
};

export default CoreTeam;
