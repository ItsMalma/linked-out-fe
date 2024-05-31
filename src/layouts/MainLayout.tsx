import {
  Anchor,
  Burger,
  Container,
  Divider,
  Drawer,
  Flex,
  Group,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout(props: MainLayoutProps) {
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
      <Flex direction="column">
        <Flex
          bg="white"
          pos="sticky"
          top={0}
          style={{
            zIndex: 100,
            borderBottom: "1px solid var(--mantine-color-gray-5)",
          }}
        >
          <Container
            fluid
            w="100%"
            h={60}
            px={{ base: "lg", md: "xl", xl: "3rem" }}
          >
            <Flex w="100%" h="100%" justify="space-between">
              <Group gap="xl">
                <Anchor
                  c="black"
                  tt="uppercase"
                  fw="500"
                  component={Link}
                  to="/jobs"
                  visibleFrom="md"
                >
                  Lowongan Kerja
                </Anchor>
                <Anchor
                  c="black"
                  tt="uppercase"
                  fw="500"
                  component={Link}
                  to="/companies"
                  visibleFrom="md"
                >
                  Perusahaan
                </Anchor>
              </Group>
              <Group gap="xl">
                <Burger hiddenFrom="md" onClick={openDrawer} />
                <Anchor
                  c="black"
                  tt="uppercase"
                  fw="500"
                  component={Link}
                  to="/register"
                  visibleFrom="md"
                >
                  Daftar
                </Anchor>
                <Anchor
                  c="black"
                  tt="uppercase"
                  fw="500"
                  component={Link}
                  to="/login"
                  visibleFrom="md"
                >
                  Masuk
                </Anchor>
              </Group>
            </Flex>
          </Container>
        </Flex>
        {props.children}
      </Flex>
    </>
  );
}
