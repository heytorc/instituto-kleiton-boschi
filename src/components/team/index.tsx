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

const Team: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Container maxWidth={'container.lg'}>
      <motion.div
        ref={ref}
        animate={controls}
        className="container"
        variants={container}
        initial="hidden"
      >
        <SimpleGrid minChildWidth="250px" spacing="20px" py={20}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div key={i} variants={item}>
              <Card
                height={{ base: "full", md: "600px", lg: "600px", xs: "full" }}
              >
                <CardBody p={0}>
                  <Image
                    objectFit="cover"
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Chakra UI"
                    borderTopRadius={3}
                  />
                  <Box p={3}>
                    <Text textAlign={"center"}>Nome do Médico</Text>
                    <Text textAlign={"center"} color={"gray.400"}>
                      Especialidade
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </motion.div>
    </Container>
  );
};

export default Team;
