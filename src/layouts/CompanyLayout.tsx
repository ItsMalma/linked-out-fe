import {
  Anchor,
  Burger,
  Container,
  Divider,
  Drawer,
  Flex,
  Group,
  MantineColor,
  NavLink,
  StyleProp,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type CompanyLayoutProps = {
  children: ReactNode;
  bg?: StyleProp<MantineColor>;
};

export default function CompanyLayout({
  bg = "white",
  ...props
}: CompanyLayoutProps) {
  const { pathname } = useLocation();

  const [drawerOpened, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        bg="blue"
        color="blue"
        position="right"
        padding="0"
      >
        <NavLink
          component={Link}
          to="/login"
          tt="uppercase"
          label="Masuk"
          px="lg"
          fz="xl"
          lts="1px"
          styles={{
            label: {
              fontSize: "var(--mantine-font-size-xl)",
            },
          }}
        />
        <NavLink
          component={Link}
          to="/register"
          tt="uppercase"
          label="Daftar"
          px="lg"
          fz="xl"
          lts="1px"
          styles={{
            label: {
              fontSize: "var(--mantine-font-size-xl)",
            },
          }}
        />
        <Divider m="sm" color="black" size="sm" />
        <NavLink
          component={Link}
          to="/jobs"
          tt="uppercase"
          label="Lowongan Kerja"
          px="lg"
          fz="xl"
          lts="1px"
          styles={{
            label: {
              fontSize: "var(--mantine-font-size-xl)",
            },
          }}
        />
        <NavLink
          component={Link}
          to="/companies"
          tt="uppercase"
          label="Perusahaan"
          px="lg"
          fz="xl"
          lts="1px"
          styles={{
            label: {
              fontSize: "var(--mantine-font-size-xl)",
            },
          }}
        />
      </Drawer>
      <Flex direction="column" bg={bg}>
        <Flex
          bg="white"
          pos="sticky"
          top={0}
          style={{
            zIndex: 100,
            borderBottom: "1px solid var(--mantine-color-gray-5)",
          }}
        >
          <Container size="xl" w="100%" h={60}>
            <Flex w="100%" h="100%" justify="space-between">
              <Group gap="xl">
                <Anchor
                  c="black"
                  tt="uppercase"
                  fw="500"
                  component={Link}
                  to="/company/applications"
                  visibleFrom="md"
                  underline={
                    pathname == "/company/applications" ? "always" : "hover"
                  }
                >
                  Lamaran
                </Anchor>
                <Anchor
                  c="black"
                  tt="uppercase"
                  fw="500"
                  component={Link}
                  to="/company/jobs"
                  visibleFrom="md"
                  underline={pathname == "/company/jobs" ? "always" : "hover"}
                >
                  Lowongan
                </Anchor>
              </Group>
              <Group gap="xl">
                <Burger hiddenFrom="md" onClick={openDrawer} />
              </Group>
            </Flex>
          </Container>
        </Flex>
        {props.children}
      </Flex>
    </>
  );
}
