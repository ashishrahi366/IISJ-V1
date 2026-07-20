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
  Image,
  SimpleGrid,
} from "@mantine/core";

import { motion } from "framer-motion";

import { FaArrowDown } from "react-icons/fa";
import ecosystemChart from "../../../assets/home/ecosystemChart.png";

export default function EcosystemDiagram() {
  return (
    <Box
      py={120}
      style={{
        background: "linear-gradient(180deg,#fff7ed 0%,#ffffff 100%)",
      }}
    >
      <Container size="xl">
        <Stack align="center" mb={50}>
          <Badge color="orange" size="lg" radius="xl" variant="light">
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

          <Text ta="center" maw={900} size="lg" c="dimmed" lh={1.9}>
            IISJ provides the strategic vision, governance, research,
            international partnerships, and global platform that enable each
            flagship initiative to specialize while working toward one common
            mission of social justice.
          </Text>
        </Stack>
        {/* IISJ ORGANIZATION CHART */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card
            radius={36}
            shadow="xl"
            p="xl"
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,.06)",
              overflow: "hidden",
            }}
          >
            <Image
              src={ecosystemChart}
              alt="IISJ Ecosystem"
              fit="contain"
              radius="lg"
            />
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
}
