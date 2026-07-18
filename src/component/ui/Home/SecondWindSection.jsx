import {
    Box,
    Container,
    Grid,
    Stack,
    Title,
    Text,
    Badge,
    Button,
    ThemeIcon,
    Group,
    Image,
  } from "@mantine/core";
  
  import { motion } from "framer-motion";
  import {
    FaArrowRight,
    FaRocket,
    FaLightbulb,
    FaHandshake,
    FaChartLine,
  } from "react-icons/fa";
  
  import { Link } from "react-router-dom";
  
  const MotionBox = motion(Box);
  
  export default function SecondWindSection() {
    return (
      <Box
        py={90}
        style={{
          background:
            "linear-gradient(135deg,#0f172a 0%,#111827 50%,#1e293b 100%)",
        }}
      >
        <Container size="xl">
          <Grid align="center" gutter={60}>
            {/* LEFT */}
  
            <Grid.Col span={{ base: 12, md: 5 }}>
              <MotionBox
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Box
                  p={50}
                  style={{
                    borderRadius: 32,
                    background: "rgba(255,255,255,.05)",
                    backdropFilter: "blur(15px)",
                    border: "1px solid rgba(255,255,255,.08)",
                    textAlign: "center",
                  }}
                >
                  <Image
                    src="https://dummyimage.com/220x220/ffffff/0f172a&text=The+Second+Wind"
                    w={180}
                    mx="auto"
                    mb={25}
                  />
  
                  <Badge
                    size="lg"
                    radius="xl"
                    color="green"
                  >
                    Flagship Initiative
                  </Badge>
  
                  <Title
                    c="white"
                    mt="lg"
                    order={2}
                  >
                    The Second Wind
                  </Title>
  
                  <Text
                    mt="md"
                    c="gray.3"
                    lh={1.8}
                  >
                    Empowering communities through innovation,
                    entrepreneurship, and sustainable social enterprise.
                  </Text>
                </Box>
              </MotionBox>
            </Grid.Col>
  
            {/* RIGHT */}
  
            <Grid.Col span={{ base: 12, md: 7 }}>
              <MotionBox
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Text
                  c="green.4"
                  fw={700}
                  tt="uppercase"
                  mb="sm"
                >
                  Innovation • Enterprise • Inclusion
                </Text>
  
                <Title
                  c="white"
                  order={1}
                  mb="lg"
                  style={{
                    fontSize: "clamp(34px,4vw,54px)",
                  }}
                >
                  Turning Ideas Into Sustainable Social Impact
                </Title>
  
                <Text
                  c="gray.3"
                  size="lg"
                  lh={1.9}
                  mb={35}
                >
                  The Second Wind is the innovation and enterprise initiative
                  under the International Institute for Social Justice (IISJ).
                  It supports entrepreneurs, changemakers, and organizations
                  building inclusive economic opportunities through innovation,
                  consulting, capacity building, and sustainable business models.
                </Text>
  
                <Stack gap="md">
                  <Group>
                    <ThemeIcon
                      size={46}
                      radius="xl"
                      color="green"
                    >
                      <FaRocket />
                    </ThemeIcon>
  
                    <Text c="white">
                      Social Entrepreneurship & Startup Support
                    </Text>
                  </Group>
  
                  <Group>
                    <ThemeIcon
                      size={46}
                      radius="xl"
                      color="green"
                    >
                      <FaLightbulb />
                    </ThemeIcon>
  
                    <Text c="white">
                      Innovation & Inclusive Business Models
                    </Text>
                  </Group>
  
                  <Group>
                    <ThemeIcon
                      size={46}
                      radius="xl"
                      color="green"
                    >
                      <FaHandshake />
                    </ThemeIcon>
  
                    <Text c="white">
                      Consulting & Strategic Partnerships
                    </Text>
                  </Group>
  
                  <Group>
                    <ThemeIcon
                      size={46}
                      radius="xl"
                      color="green"
                    >
                      <FaChartLine />
                    </ThemeIcon>
  
                    <Text c="white">
                      Sustainable Economic Development
                    </Text>
                  </Group>
                </Stack>
  
                <Button
                  component={Link}
                  to="/the-second-wind"
                  mt={45}
                  size="lg"
                  radius="xl"
                  color="green"
                  rightSection={<FaArrowRight />}
                >
                  Explore The Second Wind
                </Button>
              </MotionBox>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    );
  }