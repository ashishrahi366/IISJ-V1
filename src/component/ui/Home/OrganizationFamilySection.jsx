import React from "react";
import {
  Box,
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Image,
  Stack,
  Button,
  Badge,
  Group,
  ThemeIcon,
} from "@mantine/core";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBuilding,
  FaGraduationCap,
  FaLeaf,
} from "react-icons/fa";

import MSC_Back from "../../../assets/MSC/MSC_Back.jpg";
import Secondwindjpg from "../../../assets/home/Secondwindjpg.jpg";
import AvrnaLogo from "../../../assets/home/AvrnaLogo.jpeg";

const MotionCard = motion(Card);

const organizations = [
  {
    title: "Movement for Scavenger Community (MSC)",
    short: "Grassroots Justice",
    description:
      "Ending manual scavenging, advancing the rights of sanitation workers, strengthening communities, promoting dignity through education, advocacy, legal empowerment, and Community Resource Centres.",
    logo: MSC_Back,
    icon: <FaBuilding />,
    color: "#ff7b00",
    path: "/MSC-Detail",
  },
  {
    title: "Avarna Education & Training Foundation",
    short: "Education & Leadership",
    description:
      "Creating educational opportunities, fellowships, leadership development, entrepreneurship programmes, professional training, and youth empowerment for historically marginalized communities.",
    logo: AvrnaLogo,
    icon: <FaGraduationCap />,
    color: "#ff7b00",
    path: "/avarna",
  },
  {
    title: "The Second Wind",
    short: "Social Innovation",
    description:
      "Supporting inclusive entrepreneurship, innovation, consulting, and sustainable economic opportunities that generate long-term social impact for underserved communities.",
    logo: Secondwindjpg,
    icon: <FaLeaf />,
    color: "#ff7b00",
    path: "/Second-Wind",
  },
];

export default function OrganizationFamilySection() {
  return (
    <Box
      py={120}
      style={{
        background: "linear-gradient(180deg,#ffffff 0%,#f8fafc 100%)",
      }}
    >
      <Container size="xl">
        {/* Header */}

        <Stack align="center" mb={70}>
          {/* <Badge
            color="orange"
            size="lg"
            radius="xl"
            variant="light"
          >
            Our Family of Organizations
          </Badge> */}

          <Title
            ta="center"
            fw={900}
            style={{
              fontSize: "clamp(34px,5vw,58px)",
              lineHeight: 1.1,
            }}
          >
            One Mission.
            <br />
            Three Specialized Initiatives.
          </Title>

          <Text ta="center" maw={900} size="lg" c="dimmed" lh={1.9}>
            The{" "}
            <strong>International Institute for Social Justice (IISJ)</strong>{" "}
            serves as the umbrella institution providing strategic leadership,
            governance, research, partnerships, and international collaboration
            across its flagship initiatives. Each initiative has a distinct role
            while contributing to one shared mission of dignity, equality, and
            justice.
          </Text>
        </Stack>

        {/* Cards */}

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing={35}>
          {organizations.map((item, index) => (
            <MotionCard
              key={index}
              component={Link}
              to={item.path}
              radius={34}
              p="xl"
              shadow="xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              style={{
                textDecoration: "none",
                overflow: "hidden",
                position: "relative",
                background: "#fff",
                border: "1px solid rgba(0,0,0,.06)",
                height: "100%",
              }}
            >
              {/* Top Accent */}

              <Box
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 6,
                  background: item.color,
                }}
              />

              <Stack align="center" mt={10} h="100%">
                <Image src={item.logo} w={95} h={95} fit="contain" />

                {/* <ThemeIcon
                  size={54}
                  radius="xl"
                  variant="light"
                  color={item.color}
                >
                  {item.icon}
                </ThemeIcon> */}

                {/* <Badge
                  color="orange"
                  radius="xl"
                  variant="light"
                >
                  {item.short}
                </Badge> */}

                <Title
                  order={3}
                  ta="center"
                  fw={800}
                  style={{
                    minHeight: 85,
                  }}
                >
                  {item.title}
                </Title>

                <Text
                  ta="center"
                  c="dimmed"
                  lh={1.9}
                  style={{
                    flex: 1,
                  }}
                >
                  {item.description}
                </Text>

                <Button
                  mt="lg"
                  radius="xl"
                  color="orange"
                  rightSection={<FaArrowRight />}
                >
                  Learn More
                </Button>
              </Stack>
            </MotionCard>
          ))}
        </SimpleGrid>

        {/* Bottom Statement */}

        <Box
          mt={80}
          p={40}
          style={{
            borderRadius: 30,
            background: "linear-gradient(135deg,#ff7b00,#ff9d3d)",
            color: "white",
            textAlign: "center",
          }}
        >
          <Title order={2} fw={900}>
            Together We Create Social Justice
          </Title>

          <Text
            mt="md"
            size="lg"
            maw={900}
            mx="auto"
            style={{
              opacity: 0.95,
              lineHeight: 1.9,
            }}
          >
            While each organization focuses on a specialized area of impact,
            together they form one ecosystem under IISJ—connecting grassroots
            movements, education, leadership development, entrepreneurship,
            research, innovation, and global partnerships to create sustainable
            social change.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
