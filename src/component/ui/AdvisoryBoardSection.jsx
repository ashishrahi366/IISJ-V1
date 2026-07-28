import React from "react";
import {
  Box,
  Container,
  Stack,
  Badge,
  Title,
  Text,
  SimpleGrid,
  Card,
  Image,
  Group,
  ActionIcon,
} from "@mantine/core";

import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

// import { advisoryBoardData } from "../../constants/advisoryBoardData";
import member1 from "../../assets/pages/Tee3.jpeg";
import member2 from "../../assets/pages/Tee3.jpeg";
import member3 from "../../assets/pages/Tee3.jpeg";
import member4 from "../../assets/pages/Tee3.jpeg";
import member5 from "../../assets/pages/Tee3.jpeg";
import member6 from "../../assets/pages/Tee3.jpeg";
import member7 from "../../assets/pages/Tee3.jpeg";
import member8 from "../../assets/pages/Tee3.jpeg";
import member9 from "../../assets/pages/Tee3.jpeg";
import member10 from "../../assets/pages/Tee3.jpeg";

const MotionCard = motion(Card);

export default function AdvisoryBoardSection() {
  const advisoryBoardData = [
    {
      id: 1,
      image: member1,
      name: "Dr. Sarah Johnson",
      designation: "Global Social Justice Advisor",
      desc: "Supporting international partnerships and strategic growth initiatives.",
      linkedin: "https://linkedin.com",
    },
    {
      id: 2,
      image: member2,
      name: "Prof. Michael Brown",
      designation: "Education & Research Advisor",
      desc: "Guiding educational innovation and research excellence.",
      linkedin: "https://linkedin.com",
    },
    {
      id: 3,
      image: member3,
      name: "Amit Verma",
      designation: "Leadership Development Advisor",
      desc: "Strengthening leadership pathways for emerging changemakers.",
      linkedin: "https://linkedin.com",
    },
    {
      id: 4,
      image: member4,
      name: "Dr. Rebecca Hall",
      designation: "Public Policy Advisor",
      desc: "Supporting policy engagement and institutional development.",
      linkedin: "https://linkedin.com",
    },
    {
      id: 5,
      image: member5,
      name: "James Wilson",
      designation: "Entrepreneurship Advisor",
      desc: "Promoting social enterprise and sustainable livelihoods.",
      linkedin: "https://linkedin.com",
    },
    {
      id: 6,
      image: member6,
      name: "Dr. Priya Sharma",
      designation: "Community Development Advisor",
      desc: "Advancing community-led solutions and inclusive growth.",
      linkedin: "https://linkedin.com",
    },
    {
      id: 7,
      image: member7,
      name: "David Anderson",
      designation: "International Partnerships Advisor",
      desc: "Building collaborative networks across countries and sectors.",
      linkedin: "https://linkedin.com",
    },
    {
      id: 8,
      image: member8,
      name: "Dr. Neha Kapoor",
      designation: "Fellowship Programs Advisor",
      desc: "Supporting youth leadership and fellowship initiatives.",
      linkedin: "https://linkedin.com",
    },
    {
      id: 9,
      image: member9,
      name: "John Matthews",
      designation: "Innovation Advisor",
      desc: "Driving innovation and impact-oriented organizational growth.",
      linkedin: "https://linkedin.com",
    },
    {
      id: 10,
      image: member10,
      name: "Anjali Singh",
      designation: "Social Impact Advisor",
      desc: "Strengthening impact measurement and strategic planning.",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <Box
      py={120}
      style={{
        background: "linear-gradient(180deg,#ffffff 0%,#f8fafc 100%)",
      }}
    >
      <Container size="xl">
        <Stack align="center" mb={70}>
          <Badge color="orange" size="lg" radius="xl" variant="light">
            Advisory Board
          </Badge>

          <Title
            ta="center"
            fw={900}
            style={{
              fontSize: "clamp(34px,5vw,58px)",
            }}
          >
            Advisors & Board Members
          </Title>

          <Text ta="center" maw={850} size="lg" c="dimmed" lh={1.8}>
            Our advisory board brings together distinguished leaders,
            researchers, educators, entrepreneurs, and social justice advocates
            who help guide the vision and strategic direction of IISJ.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
          {advisoryBoardData.map((member, index) => (
            <MotionCard
              key={member.id}
              radius={30}
              p={0}
              shadow="md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              style={{
                overflow: "hidden",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
                height: "100%",
              }}
            >
              {/* LARGE IMAGE */}

              <Box
                style={{
                  position: "relative",
                }}
              >
                <Image src={member.image} h={220} fit="cover" />

                {/* DESIGNATION BADGE */}

                <Badge
                  radius="xl"
                  color="orange"
                  size="md"
                  style={{
                    position: "absolute",
                    bottom: 15,
                    left: 15,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Advisory Board
                </Badge>
              </Box>

              {/* CONTENT */}

              <Box p="lg">
                <Title order={4} fw={800} lineClamp={2} mb={6}>
                  {member.name}
                </Title>

                <Text size="sm" fw={700} c="orange.6" lineClamp={2} mb="sm">
                  {member.designation}
                </Text>

                <Text size="sm" c="dimmed" lh={1.7} lineClamp={3}>
                  {member.desc}
                </Text>

                <Group justify="space-between" mt="lg">
                  <Text size="xs" fw={700} c="gray.6">
                    IISJ Advisory Council
                  </Text>

                  <ActionIcon
                    component="a"
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    size={44}
                    radius="xl"
                    variant="gradient"
                    gradient={{
                      from: "blue",
                      to: "cyan",
                    }}
                  >
                    <FaLinkedinIn size={18} />
                  </ActionIcon>
                </Group>
              </Box>
            </MotionCard>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
