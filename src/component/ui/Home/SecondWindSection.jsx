import {
  Box,
  Container,
  Grid,
  Stack,
  Title,
  Text,
  Badge,
  ThemeIcon,
  Group,
  Image,
} from "@mantine/core";

import { motion } from "framer-motion";
import {
  FaRocket,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaLeaf,
  FaSeedling,
  FaHandsHelping,
} from "react-icons/fa";

import Secondwindjpg from "../../../assets/home/Secondwindjpg.jpg";
import Tee1 from "../../../assets/pages/Tee1.jpeg";
import Tee2 from "../../../assets/pages/Tee2.jpeg";
import Tee3 from "../../../assets/pages/Tee3.jpeg";

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
                <Image src={Secondwindjpg} w={180} mx="auto" mb={25} />

                <Badge size="lg" radius="xl" color="green">
                  Flagship Initiative
                </Badge>

                <Title c="white" mt="lg" order={2}>
                  The Second Wind
                </Title>

                <Text mt="md" c="gray.3" lh={1.8}>
                  Empowering communities through innovation, entrepreneurship,
                  and sustainable social enterprise.
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
              <Text c="green.4" fw={700} tt="uppercase" mb="sm">
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

              <Text c="gray.3" size="lg" lh={1.9} mb={35}>
                The Second Wind is the innovation and enterprise initiative
                under the International Institute for Social Justice (IISJ). It
                supports entrepreneurs, changemakers, and organizations building
                inclusive economic opportunities through innovation, consulting,
                capacity building, and sustainable business models.
              </Text>

              <Stack gap="md">
                <Group>
                  <ThemeIcon size={46} radius="xl" color="green">
                    <FaRocket />
                  </ThemeIcon>

                  <Text c="white">
                    Social Entrepreneurship & Startup Support
                  </Text>
                </Group>

                <Group>
                  <ThemeIcon size={46} radius="xl" color="green">
                    <FaLightbulb />
                  </ThemeIcon>

                  <Text c="white">Innovation & Inclusive Business Models</Text>
                </Group>

                <Group>
                  <ThemeIcon size={46} radius="xl" color="green">
                    <FaHandshake />
                  </ThemeIcon>

                  <Text c="white">Consulting & Strategic Partnerships</Text>
                </Group>

                <Group>
                  <ThemeIcon size={46} radius="xl" color="green">
                    <FaChartLine />
                  </ThemeIcon>

                  <Text c="white">Sustainable Economic Development</Text>
                </Group>
              </Stack>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>

      <Container size="xl" mt={90}>
        <Grid align="center" gutter={60}>
          {/* LEFT CONTENT */}

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Badge
                size="lg"
                radius="xl"
                color="green"
                variant="light"
                mb="lg"
              >
                🌿 First Social Enterprise Product
              </Badge>

              <Title
                fw={900}
                style={{
                  fontSize: "clamp(36px,5vw,58px)",
                  lineHeight: 1.15,
                  color: "#fff",
                }}
              >
                Avarna Tea
                {/* <br />
                From the Tea Gardens of Assam */}
              </Title>

              <Text mt="xl" size="lg" c="dimmed" lh={1.9}>
                Avarna Tea is the first flagship social enterprise product of
                <strong> The Second Wind</strong>, carefully sourced from the
                renowned tea gardens of Assam. Every cup represents quality,
                sustainability, and a commitment to creating meaningful
                opportunities for communities through ethical entrepreneurship.
              </Text>

              <Text mt="md" size="lg" c="dimmed" lh={1.9}>
                More than just premium tea, Avarna Tea reflects our vision of
                connecting local producers with wider markets while promoting
                dignity, livelihoods, and inclusive economic growth.
              </Text>

              <Stack mt={35} gap="lg">
                <Group>
                  <ThemeIcon color="green" radius="xl" size={42}>
                    <FaLeaf />
                  </ThemeIcon>

                  <Text fw={600} style={{ color: "#fff" }}>
                    Premium Assam Tea sourced from trusted tea gardens.
                  </Text>
                </Group>

                <Group>
                  <ThemeIcon color="green" radius="xl" size={42}>
                    <FaSeedling />
                  </ThemeIcon>

                  <Text fw={600} style={{ color: "#fff" }}>
                    Sustainable production supporting local communities.
                  </Text>
                </Group>

                <Group>
                  <ThemeIcon color="green" radius="xl" size={42}>
                    <FaHandsHelping />
                  </ThemeIcon>

                  <Text fw={600} style={{ color: "#fff" }}>
                    Every purchase contributes towards inclusive social impact.
                  </Text>
                </Group>
              </Stack>

              {/* <Button
                mt={45}
                radius="xl"
                size="lg"
                color="green"
                rightSection={<FaArrowRight />}
              >
                Discover Avarna Tea
              </Button> */}
            </MotionBox>
          </Grid.Col>

          {/* RIGHT IMAGES */}

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Grid gutter="md">
                <Grid.Col span={12}>
                  <Image
                    radius={30}
                    h={320}
                    fit="cover"
                    src={Tee2}
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <Image
                    radius={24}
                    h={220}
                    fit="cover"
                    src={Tee1}
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <Image
                    radius={24}
                    h={220}
                    fit="cover"
                    src={Tee3}
                  />
                </Grid.Col>
              </Grid>
            </MotionBox>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
