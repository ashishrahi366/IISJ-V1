import {
    Card,
    Box,
    Image,
    Title,
    Text,
    Badge,
    Button,
    Group,
    Stack,
    ThemeIcon,
  } from "@mantine/core";
  
  import { motion } from "framer-motion";
  import { Link } from "react-router-dom";
  import {
    FaArrowRight,
    FaArrowUpRightFromSquare,
  } from "react-icons/fa6";
  
  const MotionCard = motion(Card);
  
  export default function InitiativeCard({
    title,
    category,
    image,
    logo,
   description,
    highlights = [],
    color = "#ff7b00",
    path = "/",
  }) {
    return (
      <MotionCard
        component={Link}
        to={path}
        radius={34}
        p={0}
        shadow="md"
        whileHover={{
          y: -10,
        }}
        transition={{ duration: 0.35 }}
        style={{
          overflow: "hidden",
          textDecoration: "none",
          background: "#fff",
          border: "1px solid rgba(0,0,0,.07)",
          height: "100%",
        }}
      >
        {/* Decorative Banner */}
  
        <Box
          h={140}
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            src={image}
            h="100%"
            fit="cover"
          />
  
          <Box
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(0,0,0,.15), rgba(0,0,0,.55))",
            }}
          />
  
          {/* Accent */}
  
          <Box
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 6,
              background: color,
            }}
          />
        </Box>
  
        {/* Logo */}
  
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: -42,
            position: "relative",
            zIndex: 5,
          }}
        >
          <Box
            p={10}
            bg="white"
            radius="50%"
            style={{
              width: 84,
              height: 84,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "6px solid white",
              boxShadow: "0 12px 35px rgba(0,0,0,.15)",
            }}
          >
            <Image
              src={logo}
              w={50}
              fit="contain"
            />
          </Box>
        </Box>
  
        {/* Content */}
  
        <Stack
          p="xl"
          gap="md"
          style={{
            height: "100%",
          }}
        >
          <Badge
            color="orange"
            radius="xl"
            variant="light"
            mx="auto"
          >
            {category}
          </Badge>
  
          <Title
            ta="center"
            order={3}
            fw={800}
            style={{
              lineHeight: 1.25,
            }}
          >
            {title}
          </Title>
  
          <Text
            ta="center"
            c="dimmed"
            size="sm"
            lh={1.8}
          >
            {description}
          </Text>
  
          {/* Highlights */}
  
          <Group
            justify="center"
            mt="xs"
            gap={10}
          >
            {highlights.map((item) => (
              <Badge
                key={item}
                radius="xl"
                variant="dot"
                color="gray"
                size="md"
              >
                {item}
              </Badge>
            ))}
          </Group>
  
          {/* CTA */}
  
          <Button
            mt="auto"
            radius="xl"
            size="md"
            rightSection={<FaArrowUpRightFromSquare size={13} />}
            style={{
              background: color,
            }}
          >
            Explore Initiative
          </Button>
        </Stack>
      </MotionCard>
    );
  }