import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  List,
  Pill,
  SimpleGrid,
  Stack,
  Text,
  Timeline,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import MainLayout from "../layouts/MainLayout";

export default function ProfilePage() {
  return (
    <MainLayout>
      <Container w="100%" size="xl" py="xl">
        <Stack gap="md">
          <Flex gap="md" align="start">
            <Avatar size="6rem" />
            <Stack gap="sm">
              <Stack gap={0}>
                <Text fz="lg" fw={600}>
                  Adam Akmal
                </Text>
                <Text>Fullstack Web Developer</Text>
              </Stack>
              <SimpleGrid cols={2}>
                <Stack gap={0}>
                  <Title tt="uppercase" fz="h6">
                    NOMOR WHATSAPP
                  </Title>
                  <Text>+6288214277094</Text>
                </Stack>
                <Stack gap={0}>
                  <Title tt="uppercase" fz="h6">
                    EMAIL
                  </Title>
                  <Text>adamakmal789@gmail.com</Text>
                </Stack>
                <Stack gap={0}>
                  <Title tt="uppercase" fz="h6">
                    LOKASI
                  </Title>
                  <Text>Tangerang, Banten</Text>
                </Stack>
                <Stack gap={0}>
                  <Title tt="uppercase" fz="h6">
                    USIA, JENIS KELAMIN
                  </Title>
                  <Text>18 Tahun, Pria</Text>
                </Stack>
                <Stack gap={0}>
                  <Title tt="uppercase" fz="h6">
                    PENDIDIKAN TERAKHIR
                  </Title>
                  <Text>SMA/SMK</Text>
                </Stack>
                <Stack gap={0}>
                  <Title tt="uppercase" fz="h6">
                    PENGALAMAN KERJA
                  </Title>
                  <Text>1 Tahun</Text>
                </Stack>
              </SimpleGrid>
            </Stack>
          </Flex>
          <Flex direction="column">
            <Divider
              size="sm"
              my="md"
              label={
                <Title tt="uppercase" order={2} fz="h4" c="black">
                  Tentang Saya
                </Title>
              }
              labelPosition="left"
              color="black"
            />
            <TypographyStylesProvider>
              <Box
                dangerouslySetInnerHTML={{
                  __html:
                    "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>",
                }}
              />
            </TypographyStylesProvider>
          </Flex>
          <Flex direction="column">
            <Divider
              size="sm"
              my="md"
              label={
                <Title tt="uppercase" order={2} fz="h4" c="black">
                  Pengalaman Kerja
                </Title>
              }
              labelPosition="left"
              color="black"
            />
            <Timeline active={1} bulletSize={24} lineWidth={4}>
              <Timeline.Item
                title={
                  <Title order={3} fz="h5" c="black">
                    Fullstack Web Developer
                  </Title>
                }
              >
                <Text>GTAP</Text>
                <Text fz="sm" c="gray.6">
                  Agustus 2023 - Sekarang
                </Text>
              </Timeline.Item>
            </Timeline>
          </Flex>
          <Flex direction="column">
            <Divider
              size="sm"
              my="md"
              label={
                <Title tt="uppercase" order={2} fz="h4" c="black">
                  Pendidikan
                </Title>
              }
              labelPosition="left"
              color="black"
            />
            <Timeline active={1} bulletSize={24} lineWidth={4}>
              <Timeline.Item
                title={
                  <Title order={3} fz="h5" c="black">
                    SMKN 4 Kota Tangerang
                  </Title>
                }
              >
                <Text>Rekayasa Perangkat Lunak</Text>
                <Text fz="sm" c="gray.6">
                  Juli 2022 - Juni 2025
                </Text>
              </Timeline.Item>
            </Timeline>
          </Flex>
          <Flex direction="column">
            <Divider
              size="sm"
              my="md"
              label={
                <Title tt="uppercase" order={2} fz="h4" c="black">
                  Keterampilan
                </Title>
              }
              labelPosition="left"
              color="black"
            />
            <Pill.Group>
              <Pill bg="gray.3">React</Pill>
              <Pill bg="gray.3">Next.js</Pill>
              <Pill bg="gray.3">Tailwind CSS</Pill>
              <Pill bg="gray.3">Mantine</Pill>
              <Pill bg="gray.3">TypeScript</Pill>
            </Pill.Group>
          </Flex>
          <Flex direction="column">
            <Divider
              size="sm"
              my="md"
              label={
                <Title tt="uppercase" order={2} fz="h4" c="black">
                  Minat & Preferensi Pekerjaan
                </Title>
              }
              labelPosition="left"
              color="black"
            />
            <Grid gutter="xl">
              <Grid.Col span={3}>
                <Text fw="bold">Bidang Pekerjaan</Text>
              </Grid.Col>
              <Grid.Col span={9}>
                <List
                  icon={
                    <IconCircleCheck
                      width={16}
                      height={16}
                      color="var(--mantine-color-gray-7)"
                    />
                  }
                  center
                  spacing="xs"
                >
                  <List.Item>Backend Developer</List.Item>
                  <List.Item>Frontend Developer</List.Item>
                  <List.Item>Web Developer</List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={3}>
                <Text fw="bold">Tipe Pekerjaan</Text>
              </Grid.Col>
              <Grid.Col span={9}>
                <List
                  icon={
                    <IconCircleCheck
                      width={16}
                      height={16}
                      color="var(--mantine-color-gray-7)"
                    />
                  }
                  center
                  spacing="xs"
                >
                  <List.Item>Penuh Waktu</List.Item>
                  <List.Item>Paruh Waktu</List.Item>
                  <List.Item>Magang</List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={3}>
                <Text fw="bold">Tempat Kerja</Text>
              </Grid.Col>
              <Grid.Col span={9}>
                <List
                  icon={
                    <IconCircleCheck
                      width={16}
                      height={16}
                      color="var(--mantine-color-gray-7)"
                    />
                  }
                  center
                  spacing="xs"
                >
                  <List.Item>Tangerang, Banten</List.Item>
                </List>
              </Grid.Col>
              <Grid.Col span={3}>
                <Text fw="bold">Bersedia Bekerja Remote</Text>
              </Grid.Col>
              <Grid.Col span={9}>
                <Text>Ya</Text>
              </Grid.Col>
            </Grid>
          </Flex>
        </Stack>
      </Container>
    </MainLayout>
  );
}
