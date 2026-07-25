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
import { useMediaQuery } from "@mantine/hooks";
import IISJ_OMG from "../../../assets/home/IISJ_OMG.jpeg";

const MotionBox = motion(Box);

export default function IISJHeroIntro() {
  const isMobile = useMediaQuery("(max-width: 768px)");
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
                    lineHeight: 1.1,
                  }}
                >
                  <Box component="span" display="block">
                    One Vision.
                  </Box>

                  <Box component="span" display="block" mt={8}>
                    Multiple Initiatives.
                  </Box>

                  <Box component="span" display="block" mt={8}>
                    Global Impact.
                  </Box>
                </Title>

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
                    <ThemeIcon radius="xl" color="orange" variant="light">
                      <FaUsers />
                    </ThemeIcon>

                    <div>
                      <Text fw={700}>Global Partnerships</Text>
                      <Text size="sm" c="dimmed">
                        Connecting institutions worldwide
                      </Text>
                    </div>
                  </Group>

                  <Group gap="sm">
                    <ThemeIcon radius="xl" color="orange" variant="light">
                      <FaGraduationCap />
                    </ThemeIcon>

                    <div>
                      <Text fw={700}>Leadership & Education</Text>
                      <Text size="sm" c="dimmed">
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
                  src={IISJ_OMG}
                  style={{
                    minHeight: isMobile ? 420 : "auto",
                    objectFit: "cover",
                  }}
                />

                {/* Floating Card */}
                <Box
                  p={isMobile ? "sm" : "lg"}
                  style={{
                    position: "absolute",

                    left: isMobile ? 12 : -30,
                    bottom: isMobile ? 12 : 30,

                    width: isMobile ? 180 : 260,

                    background: "rgba(255,255,255,.95)",
                    backdropFilter: "blur(20px)",
                    borderRadius: 22,
                    boxShadow: "0 20px 50px rgba(0,0,0,.12)",
                    zIndex: 2,
                  }}
                >
                  <Text fw={700} c="orange" size={isMobile ? "sm" : "md"}>
                    Umbrella Institution
                  </Text>

                  <Text
                    mt="xs"
                    size={isMobile ? "xs" : "sm"}
                    c="dimmed"
                    lh={1.6}
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
                    background: "linear-gradient(135deg,#ff7b00,#ff9d3d)",
                    color: "white",
                    borderRadius: 26,
                    boxShadow: "0 25px 60px rgba(255,123,0,.35)",
                  }}
                >
                  <Text fw={700} size="xl">
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
