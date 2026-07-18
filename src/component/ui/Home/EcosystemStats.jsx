import {
    Box,
    Container,
    SimpleGrid,
    Card,
    Text,
    Title,
    ThemeIcon,
    Stack,
    Center,
  } from "@mantine/core";
  
  import { motion } from "framer-motion";
  
  import {
    FaUsers,
    FaGlobeAsia,
    FaBookOpen,
    FaHandshake,
    FaArrowUp,
  } from "react-icons/fa";
  
  const MotionCard = motion(Card);
  
  const stats = [
    {
      icon: <FaUsers size={28} />,
      number: "3",
      title: "Flagship Initiatives",
      description:
        "Independent institutions working together under the IISJ ecosystem.",
      color: "#ff7b00",
    },
    {
      icon: <FaBookOpen size={28} />,
      number: "4",
      title: "Core Focus Areas",
      description:
        "Education, Leadership, Research, Entrepreneurship & Social Justice.",
      color: "#2563eb",
    },
    {
      icon: <FaHandshake size={28} />,
      number: "Global",
      title: "Partnership Network",
      description:
        "Connecting communities, institutions, governments and changemakers.",
      color: "#16a34a",
    },
    {
      icon: <FaGlobeAsia size={28} />,
      number: "One",
      title: "Shared Vision",
      description:
        "Building dignity, equality and justice for historically marginalized communities.",
      color: "#7c3aed",
    },
  ];
  
  export default function EcosystemStats() {
    return (
      <Box
        py={120}
        style={{
          background:
            "linear-gradient(180deg,#ffffff 0%,#f8fafc 50%,#ffffff 100%)",
        }}
      >
        <Container size="xl">
          <Stack align="center" mb={70}>
            <Text
              fw={700}
              c="orange"
              tt="uppercase"
              size="sm"
              style={{ letterSpacing: 2 }}
            >
              IISJ Ecosystem
            </Text>
  
            <Title
              ta="center"
              fw={900}
              style={{
                fontSize: "clamp(34px,5vw,60px)",
                lineHeight: 1.1,
                maxWidth: 900,
              }}
            >
              One Institution.
              <br />
              Multiple Initiatives.
              <br />
              Shared Global Impact.
            </Title>
  
            <Text
              ta="center"
              c="dimmed"
              maw={780}
              size="lg"
              lh={1.9}
            >
              IISJ serves as the umbrella institution connecting specialized
              initiatives that advance education, leadership, research,
              entrepreneurship, and grassroots social justice through one shared
              vision.
            </Text>
          </Stack>
  
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
            {stats.map((item, index) => (
              <MotionCard
                key={index}
                radius={30}
                p="xl"
                shadow="lg"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                style={{
                  textAlign: "center",
                  border: "1px solid rgba(0,0,0,.06)",
                  background: "#fff",
                  height: "100%",
                }}
              >
                <Center mb={25}>
                  <ThemeIcon
                    radius="xl"
                    size={72}
                    style={{
                      background: item.color,
                      color: "#fff",
                      boxShadow: `0 20px 40px ${item.color}35`,
                    }}
                  >
                    {item.icon}
                  </ThemeIcon>
                </Center>
  
                <Title
                  order={1}
                  fw={900}
                  style={{
                    fontSize: "50px",
                    color: item.color,
                  }}
                >
                  {item.number}
                </Title>
  
                <Text
                  fw={700}
                  mt="sm"
                  size="lg"
                >
                  {item.title}
                </Text>
  
                <Text
                  c="dimmed"
                  mt="md"
                  lh={1.8}
                  size="sm"
                >
                  {item.description}
                </Text>
              </MotionCard>
            ))}
          </SimpleGrid>
  
          {/* Bottom Highlight */}
  
          <Card
            radius={34}
            mt={80}
            p={50}
            style={{
              background:
                "linear-gradient(135deg,#ff7b00 0%,#ff9d3d 50%,#ffb347 100%)",
              color: "#fff",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Center mb={20}>
              <ThemeIcon
                size={70}
                radius="xl"
                variant="white"
                color="orange"
              >
                <FaArrowUp size={28} />
              </ThemeIcon>
            </Center>
  
            <Stack gap="md" align="center">
              <Title
                ta="center"
                fw={900}
                style={{
                  fontSize: "clamp(28px,4vw,46px)",
                }}
              >
                Stronger Together
              </Title>
  
              <Text
                ta="center"
                maw={850}
                size="lg"
                lh={1.9}
              >
                Rather than operating as separate organizations, IISJ provides a
                shared vision, governance framework, research ecosystem, and
                international platform through which MSC, Avarna Education &
                Training Foundation, and The Second Wind contribute their unique
                strengths to create sustainable social change.
              </Text>
            </Stack>
          </Card>
        </Container>
      </Box>
    );
  }