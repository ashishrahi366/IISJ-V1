import React from "react";
import {
  Box,
  Container,
  Stack,
  Title,
  Text,
  Card,
  ThemeIcon,
  Group,
  Badge,
  SimpleGrid,
} from "@mantine/core";

import { motion } from "framer-motion";

import {
  FaGlobe,
  FaUsers,
  FaGraduationCap,
  FaLightbulb,
  FaArrowDown,
} from "react-icons/fa";

const MotionCard = motion(Card);

const organizations = [
  {
    title: "MSC",
    subtitle: "Grassroots Justice",
    desc:
      "Ending manual scavenging, community empowerment, advocacy, and dignity.",
    icon: <FaUsers />,
    color: "#ff7b00",
  },
  {
    title: "Avarna",
    subtitle: "Education & Leadership",
    desc:
      "Fellowships, leadership development, education, and entrepreneurship.",
    icon: <FaGraduationCap />,
    color: "#2563eb",
  },
  {
    title: "The Second Wind",
    subtitle: "Innovation & Enterprise",
    desc:
      "Social innovation, consulting, entrepreneurship, and sustainable livelihoods.",
    icon: <FaLightbulb />,
    color: "#16a34a",
  },
];

export default function EcosystemDiagram() {
  return (
    <Box
      py={120}
      style={{
        background:
          "linear-gradient(180deg,#fff7ed 0%,#ffffff 100%)",
      }}
    >
      <Container size="xl">
        <Stack align="center" mb={70}>
          <Badge
            color="orange"
            size="lg"
            radius="xl"
            variant="light"
          >
            IISJ Ecosystem
          </Badge>

          <Title
            ta="center"
            fw={900}
            style={{
              fontSize: "clamp(36px,5vw,58px)",
            }}
          >
            One Institution.
            <br />
            Many Initiatives.
            <br />
            Shared Purpose.
          </Title>

          <Text
            ta="center"
            maw={900}
            size="lg"
            c="dimmed"
            lh={1.9}
          >
            IISJ provides the strategic vision, governance, research,
            international partnerships, and global platform that enable each
            flagship initiative to specialize while working toward one common
            mission of social justice.
          </Text>
        </Stack>

        {/* IISJ */}

        <MotionCard
          radius={40}
          shadow="xl"
          p={45}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            maxWidth: 760,
            margin: "0 auto",
            textAlign: "center",
            background:
              "linear-gradient(135deg,#ff7b00,#ff9d3d)",
            color: "#fff",
          }}
        >
          <ThemeIcon
            mx="auto"
            size={90}
            radius="xl"
            variant="white"
            color="orange"
          >
            <FaGlobe size={38} />
          </ThemeIcon>

          <Title mt={25}>International Institute for Social Justice</Title>

          <Text
            mt="md"
            style={{
              opacity: .95,
              lineHeight: 1.8,
            }}
          >
            Umbrella Institution providing Strategic Leadership, Research,
            Governance, International Collaboration and Global Partnerships.
          </Text>
        </MotionCard>

        <Group justify="center" my={35}>
          <ThemeIcon
            radius="xl"
            size={52}
            color="orange"
          >
            <FaArrowDown />
          </ThemeIcon>
        </Group>

        {/* Organizations */}

        <SimpleGrid
          cols={{ base: 1, md: 3 }}
          spacing={35}
        >
          {organizations.map((item, index) => (
            <MotionCard
              key={index}
              radius={32}
              shadow="lg"
              p="xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              style={{
                textAlign: "center",
                borderTop: `6px solid ${item.color}`,
              }}
            >
              <ThemeIcon
                size={74}
                radius="xl"
                mx="auto"
                color={item.color}
                variant="light"
              >
                {item.icon}
              </ThemeIcon>

              <Title
                order={3}
                mt={20}
              >
                {item.title}
              </Title>

              <Text
                fw={700}
                c={item.color}
                mt={6}
              >
                {item.subtitle}
              </Text>

              <Text
                mt={18}
                c="dimmed"
                lh={1.8}
              >
                {item.desc}
              </Text>
            </MotionCard>
          ))}
        </SimpleGrid>

        <Group justify="center" my={40}>
          <ThemeIcon
            radius="xl"
            size={52}
            color="orange"
          >
            <FaArrowDown />
          </ThemeIcon>
        </Group>

        {/* Final */}

        <MotionCard
          radius={40}
          p={45}
          shadow="xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            maxWidth: 820,
            margin: "0 auto",
            textAlign: "center",
            background: "#101828",
            color: "#fff",
          }}
        >
          <Title>
            Creating Social Justice Together
          </Title>

          <Text
            mt="lg"
            style={{
              opacity: .85,
              lineHeight: 1.9,
            }}
          >
            Each initiative has its own identity and expertise, while IISJ
            provides the common vision, governance, research ecosystem, and
            international platform that unite them into one movement for
            dignity, equality, education, leadership, innovation, and
            sustainable social transformation.
          </Text>
        </MotionCard>
      </Container>
    </Box>
  );
}