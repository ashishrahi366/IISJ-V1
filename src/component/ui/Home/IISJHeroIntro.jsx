import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  Image,
  ThemeIcon,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGlobe,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";

const MotionBox = motion(Box);

export default function IISJHeroIntro() {
  return (
    <Box
      py={100}
      style={{
        background:
          "linear-gradient(135deg,#fff8f1 0%, #ffffff 45%, #fff4e6 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative Background */}
      <Box
        style={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(255,123,0,.08)",
          filter: "blur(120px)",
        }}
      />

      <Container size="xl">
        <Grid align="center" gutter={70}>
          {/* LEFT CONTENT */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Stack gap="lg">
                <Group gap="sm">
                  <ThemeIcon
                    size={42}
                    radius="xl"
                    color="orange"
                    variant="light"
                  >
                    <FaGlobe />
                  </ThemeIcon>

                  <Text
                    fw={700}
                    tt="uppercase"
                    c="orange"
                    style={{
                      letterSpacing: 2,
                    }}
                  >
                    International Institute for Social Justice
                  </Text>
                </Group>

                <Title
                  fw={900}
                  style={{
                    fontSize: "clamp(42px,6vw,68px)",
                    lineHeight: 1.05,
                  }}
                >
                  One Vision.
                  <br />
                  <Text
                    span
                    c="orange"
                  >
                    Multiple Initiatives.
                  </Text>
                  <br />
                  Global Impact.
                </Title>

                <Text
                  size="lg"
                  c="dimmed"
                  style={{
                    lineHeight: 1.9,
                    maxWidth: 650,
                  }}
                >
                  The <strong>International Institute for Social Justice
                  (IISJ)</strong> is the umbrella institution bringing together
                  specialized initiatives advancing education, leadership,
                  research, entrepreneurship, and social justice for
                  historically marginalized communities across the world.
                </Text>

                <Text
                  size="lg"
                  c="dimmed"
                  style={{
                    lineHeight: 1.9,
                    maxWidth: 650,
                  }}
                >
                  Through its flagship initiatives —
                  <strong> Movement for Scavenger Community (MSC)</strong>,
                  <strong> Avarna Education & Training Foundation</strong>, and
                  <strong> The Second Wind</strong> — IISJ transforms grassroots
                  action into sustainable global impact.
                </Text>

                <Group mt="md">
                  <Button
                    component={Link}
                    to="/about"
                    size="xl"
                    radius="xl"
                    color="orange"
                    rightSection={<FaArrowRight />}
                  >
                    Explore Our Initiatives
                  </Button>

                  <Button
                    component={Link}
                    to="/IISJ"
                    size="xl"
                    radius="xl"
                    variant="light"
                    color="orange"
                  >
                    Learn About IISJ
                  </Button>
                </Group>

                {/* Quick Highlights */}

                <Group mt={35} gap="xl">
                  <Group gap="sm">
                    <ThemeIcon
                      radius="xl"
                      color="orange"
                      variant="light"
                    >
                      <FaUsers />
                    </ThemeIcon>

                    <div>
                      <Text fw={700}>Global Partnerships</Text>
                      <Text
                        size="sm"
                        c="dimmed"
                      >
                        Connecting institutions worldwide
                      </Text>
                    </div>
                  </Group>

                  <Group gap="sm">
                    <ThemeIcon
                      radius="xl"
                      color="orange"
                      variant="light"
                    >
                      <FaGraduationCap />
                    </ThemeIcon>

                    <div>
                      <Text fw={700}>Leadership & Education</Text>
                      <Text
                        size="sm"
                        c="dimmed"
                      >
                        Building future changemakers
                      </Text>
                    </div>
                  </Group>
                </Group>
              </Stack>
            </MotionBox>
          </Grid.Col>

          {/* RIGHT IMAGE */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                style={{
                  position: "relative",
                }}
              >
                <Image
                  radius={36}
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
                />

                {/* Floating Card */}

                <Box
                  p="lg"
                  style={{
                    position: "absolute",
                    left: -30,
                    bottom: 30,
                    width: 260,
                    background: "rgba(255,255,255,.95)",
                    backdropFilter: "blur(20px)",
                    borderRadius: 26,
                    boxShadow: "0 20px 50px rgba(0,0,0,.12)",
                  }}
                >
                  <Text
                    fw={700}
                    c="orange"
                  >
                    Umbrella Institution
                  </Text>

                  <Text
                    mt="xs"
                    size="sm"
                    c="dimmed"
                  >
                    Providing strategic leadership, governance, research,
                    collaboration, and global partnerships for all IISJ
                    initiatives.
                  </Text>
                </Box>

                <Box
                  p="lg"
                  style={{
                    position: "absolute",
                    right: -20,
                    top: 40,
                    width: 220,
                    background:
                      "linear-gradient(135deg,#ff7b00,#ff9d3d)",
                    color: "white",
                    borderRadius: 26,
                    boxShadow: "0 25px 60px rgba(255,123,0,.35)",
                  }}
                >
                  <Text
                    fw={700}
                    size="xl"
                  >
                    3
                  </Text>

                  <Text size="sm">
                    Flagship Initiatives
                    <br />
                    Working Together
                  </Text>
                </Box>
              </Box>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}