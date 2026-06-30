import {
  Modal,
  Avatar,
  Stack,
  Title,
  Text,
  Badge,
  Group,
  Button,
  ThemeIcon,
  Divider,
  List,
  Box,
  Paper,
  ActionIcon,
  ScrollArea,
} from "@mantine/core";

import { motion } from "framer-motion";

import { FaLinkedin, FaCheckCircle, FaTimes, FaUserTie } from "react-icons/fa";

import { teamMembers } from "../../constants/comon";

const MotionBox = motion(Box);

export default function LeaderProfileModal({ opened, onClose, leaderId }) {
  const leader = teamMembers.find((item) => item.id === leaderId);

  if (!leader) return null;

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      centered
      size="1050px"
      radius={30}
      padding={0}
      withinPortal
      zIndex={99999}
      yOffset={30}
      overlayProps={{
        blur: 8,
        backgroundOpacity: 0.55,
      }}
      scrollAreaComponent={ScrollArea.Autosize}
      styles={{
        content: {
          overflow: "visible",
          background: "linear-gradient(180deg,#ffffff 0%,#fafafa 100%)",
          border: "1px solid rgba(0,0,0,.06)",
        },
        body: {
          padding: 0,
        },
      }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.35,
        }}
      >
        {/* CLOSE BUTTON */}
        <ActionIcon
          onClick={onClose}
          radius="xl"
          size={46}
          variant="filled"
          color="dark"
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            zIndex: 1000,
            boxShadow: "0 15px 40px rgba(0,0,0,.25)",
          }}
        >
          <FaTimes size={15} color="white" />
        </ActionIcon>
        {/* HEADER */}
        <Box
          h={170}
          style={{
            background: "linear-gradient(135deg,#ff7b00,#ff9d3d)",
          }}
        />
        {/* CONTENT */}
        <Box px={{ base: 25, md: 50 }} pb={50}>
          {/* PROFILE */}

          <Stack align="center" mt={-70}>
            <Avatar
              src={leader.image}
              size={150}
              radius={150}
              style={{
                border: "6px solid white",
                boxShadow: "0 20px 50px rgba(0,0,0,.18)",
              }}
            />

            <Badge color="orange" radius="xl" size="lg" variant="light">
              Leadership Team
            </Badge>

            <Title
              order={2}
              ta="center"
              style={{
                fontSize: "clamp(28px,4vw,42px)",
              }}
            >
              {leader.name}
            </Title>

            <Text ta="center" fw={700} size="lg" c="orange">
              {leader.role}
            </Text>
          </Stack>

          <Divider my={40} />

          {/* DESIGNATION */}

          <Paper withBorder radius={24} p="xl" shadow="xs">
            <Group mb="lg">
              <ThemeIcon size={50} radius="xl" color="orange" variant="light">
                <FaUserTie size={22} />
              </ThemeIcon>

              <div>
                <Title order={3}>Designation</Title>

                <Text size="sm" c="dimmed">
                  Current roles and responsibilities
                </Text>
              </div>
            </Group>

            <List
              spacing="md"
              size="md"
              icon={
                <ThemeIcon radius="xl" color="orange" size={24}>
                  <FaCheckCircle size={12} />
                </ThemeIcon>
              }
            >
              {leader.designation?.map((item, index) => (
                <List.Item key={index}>{item}</List.Item>
              ))}
            </List>
          </Paper>

          {/* ABOUT */}

          <Paper withBorder radius={24} p="xl" mt={30} shadow="xs">
            <Group mb="lg">
              <ThemeIcon size={50} radius="xl" color="orange" variant="light">
                <FaUserTie size={22} />
              </ThemeIcon>

              <div>
                <Title order={3}>About</Title>

                <Text size="sm" c="dimmed">
                  Leadership journey and contribution
                </Text>
              </div>
            </Group>

            <Text
              c="dimmed"
              lh={2}
              size="md"
              style={{
                textAlign: "justify",
              }}
            >
              {leader.longDescription}
            </Text>

            {leader.linkedin && leader.linkedin !== "#" && (
              <Group mt={35}>
                <Button
                  component="a"
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  radius="xl"
                  size="md"
                  color="blue"
                  leftSection={<FaLinkedin size={18} />}
                >
                  Connect on LinkedIn
                </Button>
              </Group>
            )}
          </Paper>
        </Box>
        f
      </MotionBox>
    </Modal>
  );
}
