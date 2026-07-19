import {
  Container,
  Group,
  Text,
  Button,
  Image,
  Burger,
  Drawer,
  Stack,
  Menu,
  Box,
  ScrollArea,
  Divider
} from "@mantine/core";

import { useDisclosure, useWindowScroll } from "@mantine/hooks";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import "../../styles/navbar.css";

import logo from "../../assets/Logomark_Digital.png";

import {
  FaArrowRight,
  FaChevronDown,
  FaImages,
  FaNewspaper,
  FaCalendarAlt,
  FaFileAlt,
  FaUser,
} from "react-icons/fa";

import { theme } from "../../theme";

function Navbar() {
  const navigate = useNavigate();

  const [opened, { toggle, close }] = useDisclosure(false);

  const [scroll] = useWindowScroll();

  const location = useLocation();

  // SCROLL

  const isScrolled = scroll.y > 20;

  // ACTIVE ROUTE

  const isActive = (path) => location.pathname === path;

  // NAV STYLE

  const navLinkStyle = (path) => ({
    position: "relative",
    color: isActive(path) ? theme.colors.orange[5] : "white",

    textDecoration: "none",

    fontWeight: 600,

    fontSize: "15px",

    transition: "0.3s ease",

    paddingBottom: "5px",
  });

  // UNDERLINE

  const renderUnderline = (path) =>
    isActive(path) && (
      <motion.div
        layoutId="navbar-underline"
        style={{
          position: "absolute",
          left: 0,
          bottom: -2,
          width: "100%",
          height: "2px",
          background: theme.colors.orange[5],
          borderRadius: "10px",
        }}
      />
    );

  return (
    <>
      {/* NAVBAR */}

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: isScrolled ? "rgba(7, 16, 35, 0.95)" : "transparent",

          backdropFilter: isScrolled ? "blur(12px)" : "none",

          borderBottom: isScrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "none",

          position: "fixed",

          width: "100%",

          top: 0,

          zIndex: 1000,

          transition: "0.3s ease",
        }}
      >
        <Container size="xl">
          <Group justify="space-between" py="md">
            {/* LOGO */}

            <Box
              component={Link}
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <motion.div whileHover={{ scale: 1.03 }}>
                <Group gap={10} align="center">
                  <Image
                    src={logo}
                    alt="IISJ Logo"
                    w={42}
                    h={42}
                    fit="contain"
                  />

                  <Text fw={800} size="xl"></Text>
                </Group>
              </motion.div>
            </Box>

            {/* DESKTOP MENU */}

            <Group gap={30} visibleFrom="md">
              {/* HOME */}

              <Box
                style={{
                  position: "relative",
                }}
              >
                <Link to="/" style={navLinkStyle("/")}>
                  Home
                </Link>

                {renderUnderline("/")}
              </Box>

              {/* ABOUT */}

              <Box
                style={{
                  position: "relative",
                }}
              >
                <Link to="/about" style={navLinkStyle("/about")}>
                  Our Work
                </Link>

                {renderUnderline("/about")}
              </Box>

              {/* INFORMATION */}

              <Menu
                trigger="hover"
                openDelay={100}
                closeDelay={200}
                shadow="xl"
                width={260}
                transitionProps={{
                  transition: "pop-top-right",

                  duration: 250,
                }}
              >
                <Menu.Target>
                  <Box
                    style={{
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    <Group gap={5}>
                      <Text
                        style={{
                          color:
                            location.pathname.includes("/iisj") ||
                            location.pathname.includes("/gallery") ||
                            location.pathname.includes("/blogs") ||
                            location.pathname.includes("/Vimal-Kumar") ||
                            location.pathname.includes("/What-We-Do") ||
                            location.pathname.includes("/Team") ||
                            location.pathname.includes("/Events")
                              ? theme.colors.orange[5]
                              : "white",

                          fontWeight: 600,

                          fontSize: "15px",

                          transition: "0.3s",
                        }}
                      >
                        About us
                      </Text>

                      <FaChevronDown
                        size={12}
                        color={
                          location.pathname.includes("/iisj") ||
                          location.pathname.includes("/gallery") ||
                          location.pathname.includes("/blogs") ||
                          location.pathname.includes("/Vimal-Kumar") ||
                          location.pathname.includes("/What-We-Do") ||
                          location.pathname.includes("/Team") ||
                          location.pathname.includes("/Events")
                            ? theme.colors.orange[5]
                            : "white"
                        }
                      />
                    </Group>
                  </Box>
                </Menu.Target>

                <Menu.Dropdown
                  style={{
                    background: "rgba(10, 18, 38, 0.96)",

                    backdropFilter: "blur(14px)",

                    border: "1px solid rgba(255,255,255,0.08)",

                    borderRadius: "24px",

                    padding: "12px",

                    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                  }}
                >
                  <Menu.Item
                    component={Link}
                    to="/IISJ"
                    className="navbar-dropdown-item"
                    leftSection={<FaFileAlt size={14} />}
                  >
                    IISJ
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/gallery"
                    className="navbar-dropdown-item"
                    leftSection={<FaImages size={14} />}
                  >
                    Gallery
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/blogs"
                    className="navbar-dropdown-item"
                    leftSection={<FaNewspaper size={14} />}
                  >
                    News & Stories
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/Vimal-Kumar"
                    className="navbar-dropdown-item"
                    leftSection={<FaCalendarAlt size={14} />}
                  >
                    About Founder
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/What-We-Do"
                    className="navbar-dropdown-item"
                    leftSection={<FaFileAlt size={14} />}
                  >
                    What We Do
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/Team"
                    className="navbar-dropdown-item"
                    leftSection={<FaUser size={14} />}
                  >
                    Team
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/Events"
                    className="navbar-dropdown-item"
                    leftSection={<FaCalendarAlt size={14} />}
                  >
                    Events
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {/* PROJECTS */}

              <Menu
                trigger="hover"
                openDelay={100}
                closeDelay={200}
                shadow="xl"
                width={280}
                transitionProps={{
                  transition: "pop-top-right",

                  duration: 250,
                }}
              >
                <Menu.Target>
                  <Box
                    style={{
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    <Group gap={5}>
                      <Text
                        style={{
                          color:
                            location.pathname.includes(
                              "/Community-Resource-Centers"
                            ) ||
                            location.pathname.includes(
                              "/Fellowship-Equality"
                            ) ||
                            // location.pathname.includes(
                            //   "/Fellowship-Program-app"
                            // ) ||
                            location.pathname.includes("/support-msc") ||
                            location.pathname.includes("/avarna") ||
                            location.pathname.includes("/MSC-Detail")
                              ? theme.colors.orange[5]
                              : "white",

                          fontWeight: 600,

                          fontSize: "15px",

                          transition: "0.3s",
                        }}
                      >
                        Our Projects
                      </Text>

                      <FaChevronDown
                        size={12}
                        color={
                          location.pathname.includes(
                            "/Community-Resource-Centers"
                          ) ||
                          location.pathname.includes("/Fellowship-Equality") ||
                          // location.pathname.includes(
                          //   "/Fellowship-Program-app"
                          // ) ||
                          location.pathname.includes("/support-msc") ||
                          location.pathname.includes("/avarna") ||
                          location.pathname.includes("/MSC-Detail")
                            ? theme.colors.orange[5]
                            : "white"
                        }
                      />
                    </Group>
                  </Box>
                </Menu.Target>

                <Menu.Dropdown
                  style={{
                    background: "rgba(10, 18, 38, 0.96)",

                    backdropFilter: "blur(14px)",

                    border: "1px solid rgba(255,255,255,0.08)",

                    borderRadius: "24px",

                    padding: "12px",

                    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                  }}
                >
                  <Menu.Item
                    component={Link}
                    to="/Community-Resource-Centers"
                    className="navbar-dropdown-item"
                  >
                    Community Resource Centers
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/Fellowship-Equality"
                    className="navbar-dropdown-item"
                  >
                    Fellows For Equality
                  </Menu.Item>

                  {/* <Menu.Item
                    component={Link}
                    to="/Fellowship-Program-app"
                    className="navbar-dropdown-item"
                  >
                    Fellowship Application
                  </Menu.Item> */}

                  <Menu.Item
                    component={Link}
                    to="/support-msc"
                    className="navbar-dropdown-item"
                  >
                    Support MSC
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/avarna"
                    className="navbar-dropdown-item"
                  >
                    AVARNA Foundation
                  </Menu.Item>

                  <Menu.Item
                    component={Link}
                    to="/MSC-Detail"
                    className="navbar-dropdown-item"
                  >
                    Scavenger Communities
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {/* CONTACT */}

              <Box
                style={{
                  position: "relative",
                }}
              >
                <Link to="/contact" style={navLinkStyle("/contact")}>
                  Contact
                </Link>

                {renderUnderline("/contact")}
              </Box>

              {/* BUTTON */}

              <Button
                onClick={() => navigate("/support-msc")}
                radius="xl"
                px={24}
                rightSection={<FaArrowRight size={13} />}
                style={{
                  background:
                    "linear-gradient(135deg, #ff7b00 0%, #ff9d3d 100%)",

                  border: "none",

                  cursor: "pointer",

                  boxShadow: "0 10px 25px rgba(249,115,22,0.35)",
                }}
              >
                Donate Now
              </Button>
            </Group>

            {/* MOBILE BURGER */}

            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="md"
              color="white"
            />
          </Group>
        </Container>
      </motion.div>

      {/* MOBILE DRAWER */}

      <Drawer
  opened={opened}
  onClose={close}
  withCloseButton={false}
  position="right"
  padding={0}
  size={{ base: "100%", xs: "90%", sm: "85%" }}
  scrollAreaComponent={ScrollArea.Autosize}
  styles={{
    content: {
      background:
        "linear-gradient(180deg,#071120 0%, #0d1d36 45%, #12284a 100%)",
      display: "flex",
      flexDirection: "column",
    },

    body: {
      padding: 0,
      flex: 1,
      overflow: "hidden",
    },
  }}
>
  {/* ================= HEADER ================= */}

  <Box
    px="lg"
    py="md"
    style={{
      borderBottom: "1px solid rgba(255,255,255,.08)",
      background: "rgba(255,255,255,.04)",
      backdropFilter: "blur(20px)",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}
  >
    <Group justify="space-between">
      <Group gap={12}>
        <Image
          src={logo}
          w={46}
          h={46}
          fit="contain"
        />

        <Box>
          <Text
            fw={900}
            size="lg"
            c="white"
          >
            <span style={{ color: "#ff7b00" }}>IISJ</span>{" "}
            Collective
          </Text>

          <Text
            size="xs"
            c="gray.5"
          >
            Social Justice • Leadership
          </Text>
        </Box>
      </Group>

      <Burger
        opened={opened}
        onClick={close}
        color="white"
      />
    </Group>
  </Box>

  {/* ================= MENU ================= */}

  <ScrollArea
    h="calc(100vh - 82px)"
    scrollbarSize={4}
    offsetScrollbars
    style={{
      WebkitOverflowScrolling: "touch",
    }}
  >
    <Stack
      gap="lg"
      p="lg"
      pb={120}
    >
      {/* MAIN MENU */}

      <Box>
        <Text
          mb="sm"
          size="xs"
          fw={700}
          c="orange"
          tt="uppercase"
        >
          Main Menu
        </Text>

        <Stack gap={10}>
          {[
            { label: "Home", path: "/" },
            { label: "Our Work", path: "/about" },
            { label: "Contact", path: "/contact" },
            { label: "News & Stories", path: "/blogs" },
          ].map((item) => (
            <Box
              key={item.path}
              component={Link}
              to={item.path}
              onClick={close}
              style={{
                textDecoration: "none",
              }}
            >
              <Box
                px="lg"
                py="md"
                style={{
                  borderRadius: 18,
                  cursor: "pointer",
                  transition: ".25s",

                  background:
                    location.pathname === item.path
                      ? "linear-gradient(135deg,#ff7b00,#ff9d3d)"
                      : "rgba(255,255,255,.05)",

                  border:
                    location.pathname === item.path
                      ? "none"
                      : "1px solid rgba(255,255,255,.06)",

                  color: "white",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider color="rgba(255,255,255,.08)" />

      {/* ABOUT */}

      <Box>
        <Text
          mb="sm"
          size="xs"
          fw={700}
          c="orange"
          tt="uppercase"
        >
          About Us
        </Text>

        <Stack gap={10}>
          {[
            { label: "IISJ", path: "/IISJ" },
            { label: "Gallery", path: "/gallery" },
            { label: "News & Stories", path: "/blogs" },
            { label: "Our Founder", path: "/Vimal-Kumar" },
            { label: "What We Do", path: "/What-We-Do" },
            { label: "Team", path: "/Team" },
            { label: "Events", path: "/Events" },
          ].map((item) => (
            <Box
              key={item.path}
              component={Link}
              to={item.path}
              onClick={close}
              style={{
                textDecoration: "none",
              }}
            >
              <Box
                px="md"
                py="sm"
                style={{
                  borderRadius: 16,
                  cursor: "pointer",
                  transition: ".25s",
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(255,255,255,.06)",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider color="rgba(255,255,255,.08)" />

      {/* PROJECTS */}

      <Box>
        <Text
          mb="sm"
          size="xs"
          fw={700}
          c="orange"
          tt="uppercase"
        >
          Our Projects
        </Text>

        <Stack gap={10}>
          {[
            {
              label: "Community Resource Centers",
              path: "/Community-Resource-Centers",
            },
            {
              label: "Fellows For Equality",
              path: "/Fellowship-Equality",
            },
            {
              label: "Support MSC",
              path: "/support-msc",
            },
            {
              label: "AVARNA Foundation",
              path: "/avarna",
            },
            {
              label: "Scavenger Communities",
              path: "/MSC-Detail",
            },
          ].map((item) => (
            <Box
              key={item.path}
              component={Link}
              to={item.path}
              onClick={close}
              style={{
                textDecoration: "none",
              }}
            >
              <Box
                px="md"
                py="sm"
                style={{
                  borderRadius: 16,
                  cursor: "pointer",
                  transition: ".25s",
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(255,255,255,.06)",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* DONATE */}

      <Button
        component={Link}
        to="/support-msc"
        onClick={close}
        size="lg"
        radius="xl"
        fullWidth
        rightSection={<FaArrowRight />}
        style={{
          marginTop: 20,
          background:
            "linear-gradient(135deg,#ff7b00 0%, #ff9d3d 100%)",
          boxShadow: "0 15px 35px rgba(255,123,0,.35)",
        }}
      >
        Donate Now
      </Button>
    </Stack>
  </ScrollArea>
</Drawer>
    </>
  );
}

export default Navbar;
