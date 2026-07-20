import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import { motion } from "framer-motion";

import {
  FaGlobe,
  FaBookOpen,
  FaUsers,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

const MotionCard = motion(Card);

const reasons = [
  {
    icon: <FaUsers size={26} />,
    title: "Strategic Leadership",
    desc: "IISJ provides shared vision, governance, institutional leadership, and coordination across all flagship initiatives, ensuring they move together toward one common mission.",
  },
  {
    icon: <FaBookOpen size={26} />,
    title: "Research & Knowledge",
    desc: "Through research, evidence, publications, and policy engagement, IISJ transforms grassroots experiences into knowledge that influences national and global conversations.",
  },
  {
    icon: <FaLightbulb size={26} />,
    title: "Innovation & Leadership",
    desc: "From fellowships and education to entrepreneurship and community innovation, IISJ nurtures future leaders who can create sustainable social transformation.",
  },
  {
    icon: <FaGlobe size={26} />,
    title: "Global Partnerships",
    desc: "IISJ connects grassroots organizations with universities, foundations, governments, and international institutions to expand opportunities and collective impact.",
  },
];

export default function WhyIISJ() {
  return (
    <Box
      py={120}
      style={{
        background:
          "linear-gradient(180deg,#ffffff 0%,#fff8f3 50%,#ffffff 100%)",
      }}
    >
      <Container size="xl">
        {/* HEADER */}

        <Stack align="center" gap="md" mb={70}>
          <Badge color="orange" radius="xl" size="lg" variant="light">
            WHY IISJ?
          </Badge>

          <Title
            ta="center"
            fw={900}
            style={{
              fontSize: "clamp(38px,5vw,64px)",
              maxWidth: 900,
              lineHeight: 1.1,
            }}
          >
            Building One Global Institution
            <br />
            for Social Justice
          </Title>

          <Text ta="center" size="lg" c="dimmed" maw={900} lh={1.9}>
            Many organizations work on individual challenges. IISJ was
            established to bring these efforts together under one global
            institution—connecting grassroots action, education, leadership,
            research, entrepreneurship, and international partnerships to create
            lasting social change.
          </Text>
        </Stack>

        {/* MAIN SECTION */}

        <Grid gutter={60} align="center">
          {/* LEFT */}

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap="xl">
              <Title
                order={2}
                fw={900}
                style={{
                  lineHeight: 1.2,
                }}
              >
                Why was IISJ created?
              </Title>

              <Text size="lg" c="dimmed" lh={1.9}>
                Instead of operating as separate organizations, IISJ provides a
                shared vision, governance framework, research ecosystem, and
                international platform through which every initiative
                contributes its unique strengths.
              </Text>

              <Text size="lg" c="dimmed" lh={1.9}>
                By bringing together specialized institutions under one
                umbrella, IISJ strengthens collaboration, amplifies impact,
                attracts global partnerships, and creates sustainable solutions
                for historically marginalized communities.
              </Text>

              <Card
                radius={28}
                p="xl"
                style={{
                  background: "linear-gradient(135deg,#ff7b00,#ff9d3d)",
                  color: "#fff",
                }}
              >
                <Text fw={800} size="xl" mb="sm">
                  Our Vision
                </Text>

                <Text lh={1.8} size="lg">
                  "To unite education, research, leadership, entrepreneurship,
                  and community action through one institution that advances
                  dignity, equality, and justice worldwide."
                </Text>
              </Card>

              <Card
                radius={28}
                p="xl"
                style={{
                  background: "linear-gradient(135deg,#ff7b00,#ff9d3d)",
                  color: "#fff",
                }}
              >
                <Text fw={800} size="xl" mb="sm">
                  OUR PURPOSE
                </Text>

                <Text lh={1.8} size="lg">
                  "The International Institute for Social Justice (IISJ) is the
                  umbrella institution providing strategic leadership,
                  governance, research, and global partnerships for its flagship
                  initiatives: Movement for Scavenger Community (MSC), Avarna
                  Education and Training Foundation, and The Second Wind.
                  Together, these initiatives advance education, leadership,
                  entrepreneurship, and social justice for historically
                  marginalized communities."
                </Text>
              </Card>
            </Stack>
          </Grid.Col>

          {/* RIGHT */}

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap={40}>
              {reasons.map((item, index) => (
                <MotionCard
                  key={index}
                  radius={26}
                  p="xl"
                  shadow="md"
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  style={{
                    border: "1px solid rgba(255,123,0,.12)",
                  }}
                >
                  <Group align="flex-start" wrap="nowrap">
                    <ThemeIcon
                      size={70}
                      radius={22}
                      variant="gradient"
                      gradient={{
                        from: "orange",
                        to: "yellow",
                      }}
                    >
                      {item.icon}
                    </ThemeIcon>

                    <Box>
                      <Title order={3} mb={8}>
                        {item.title}
                      </Title>

                      <Text c="dimmed" lh={1.8}>
                        {item.desc}
                      </Text>
                    </Box>
                  </Group>
                </MotionCard>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>

        {/* TAGLINE */}

        {/* <Card
          radius={36}
          mt={100}
          py={45}
          px={50}
          style={{
            background: "linear-gradient(135deg,#111827,#1f2937)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Badge color="orange" variant="filled" radius="xl" size="lg" mb="lg">
            OUR PURPOSE
          </Badge>

          <Title order={2} fw={900} mb="md">
            One Institution. Many Initiatives. Shared Purpose.
          </Title>

          <Text maw={900} mx="auto" size="lg" c="gray.3" lh={1.9}>
            The International Institute for Social Justice (IISJ) is the
            umbrella institution providing strategic leadership, governance,
            research, and global partnerships for its flagship initiatives:
            Movement for Scavenger Community (MSC), Avarna Education and
            Training Foundation, and The Second Wind. Together, these
            initiatives advance education, leadership, entrepreneurship, and
            social justice for historically marginalized communities.
          </Text>
        </Card> */}
      </Container>
    </Box>
  );
}
