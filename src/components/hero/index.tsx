import { Box, Flex, Text } from "@chakra-ui/react";
import { Parallax } from "react-parallax";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: StaticImageData;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl }) => {
  const imageUrlString = imageUrl.src;

  return (
    <Box minHeight="100vh">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={imageUrlString}
        strength={400}
        style={{ backgroundPosition: "top center", backgroundSize: 'cover'}}
      >
        <Box height="100vh">
          <Flex alignItems="center" justify="center" height="100%">
            <Box textAlign="center">
              <Text fontSize="6xl" fontWeight="bold" color="white">
                {title}
              </Text>
              <Text fontSize="3xl" color="white">
                {subtitle}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Parallax>
    </Box>
  );
};

export default Hero;
