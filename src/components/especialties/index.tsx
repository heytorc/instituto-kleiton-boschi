import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Box,
  Image,
  Card,
  CardBody,
  Container,
  Text,
  SimpleGrid,
  Heading,
  VStack,
} from "@chakra-ui/react";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Especialties: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Container maxW={"container.md"} centerContent py={10}>
      <motion.div
        ref={ref}
        animate={controls}
        className="container"
        variants={container}
        initial="hidden"
      >
        <Heading textAlign={"center"} mb={10}>
          Conheça Nossas Especialidades
        </Heading>

        <SimpleGrid columns={[2, null, 4]} spacing={10}>
          {[1, 2, 3, 4].map((i) => (
            <motion.div key={i} variants={item}>
              <VStack alignItems={"center"} role="group">
                <Image
                  rounded={"full"}
                  width={130}
                  height={130}
                  objectFit={'fill'}
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Chakra UI"
                  style={{ transition: "ease-in-out .3s" }}
                  _groupHover={{
                    transition: "ease-in-out .3s",
                    objectFit: 'cover'
                  }}
                />
                <Text
                  textAlign={"center"}
                  style={{ transition: "ease-in-out .3s" }}
                  _groupHover={{  }}
                >
                  Especialidade {i}
                </Text>
              </VStack>
            </motion.div>
          ))}
        </SimpleGrid>
      </motion.div>
    </Container>
  );
};

export default Especialties;
