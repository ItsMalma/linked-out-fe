import {
  Anchor,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Group,
  List,
  Pill,
  Stack,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import {
  IconBriefcase,
  IconBuilding,
  IconBuildingCommunity,
  IconCircleDashedCheck,
  IconClock,
  IconCurrencyDollar,
  IconHourglass,
  IconSchool,
} from "@tabler/icons-react";
import MainLayout from "../layouts/MainLayout";
export default function JobPage() {
  return (
    <MainLayout>
      <Container w="100%" size="xl" py="xl">
        <Flex gap="md" align="start">
          <Avatar radius="md" size="lg" />
          <Stack gap="0">
            <Text fz="lg" fw={600}>
              Job Title
            </Text>
            <Flex gap="xs" align="center">
              <IconCircleDashedCheck
                color="var(--mantine-color-blue-5)"
                size="20"
              />
              <Anchor>Company</Anchor>
            </Flex>
            <List center spacing={4} mt="md">
              <List.Item
                icon={
                  <IconCurrencyDollar
                    color="var(--mantine-color-gray-7)"
                    size="20"
                  />
                }
              >
                IDR 5.000.000 - 10.000.000 / Bulan
              </List.Item>
              <List.Item
                icon={
                  <IconBuilding color="var(--mantine-color-gray-7)" size="20" />
                }
              >
                Rekayasa Perangkat Lunak
              </List.Item>
              <List.Item
                icon={
                  <IconBuildingCommunity
                    color="var(--mantine-color-gray-7)"
                    size="20"
                  />
                }
              >
                Kerja di Kantor
              </List.Item>
              <List.Item
                icon={
                  <IconClock color="var(--mantine-color-gray-7)" size="20" />
                }
              >
                Penuh Waktu
              </List.Item>
              <List.Item
                icon={
                  <IconSchool color="var(--mantine-color-gray-7)" size="20" />
                }
              >
                Minimal SMA/SMK
              </List.Item>
              <List.Item
                icon={
                  <IconBriefcase
                    color="var(--mantine-color-gray-7)"
                    size="20"
                  />
                }
              >
                1 - 3 Tahun Pengalaman
              </List.Item>
              <List.Item
                icon={
                  <IconHourglass
                    color="var(--mantine-color-gray-7)"
                    size="20"
                  />
                }
              >
                25 - 30 Tahun
              </List.Item>
            </List>
            <Group mt="md">
              <Button tt="uppercase">Lamar</Button>
            </Group>
          </Stack>
        </Flex>
        <Divider size="sm" my="md" />
        <Stack gap="lg">
          <Stack gap={4}>
            <Title order={5}>Keterampilan</Title>
            <Pill.Group>
              <Pill bg="gray.3">PHP</Pill>
              <Pill bg="gray.3">JavaScript</Pill>
              <Pill bg="gray.3">React</Pill>
              <Pill bg="gray.3">Node.js</Pill>
              <Pill bg="gray.3">Express</Pill>
              <Pill bg="gray.3">MySQL</Pill>
              <Pill bg="gray.3">PostgreSQL</Pill>
            </Pill.Group>
          </Stack>
          <Stack gap={4}>
            <Title order={5}>Deskripsi</Title>
            <TypographyStylesProvider>
              <Box
                dangerouslySetInnerHTML={{
                  __html:
                    "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>",
                }}
              />
            </TypographyStylesProvider>
          </Stack>
        </Stack>
      </Container>
    </MainLayout>
  );
}
