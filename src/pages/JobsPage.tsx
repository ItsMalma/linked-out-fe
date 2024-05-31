import {
  Anchor,
  Avatar,
  Button,
  Container,
  Flex,
  Pagination,
  Paper,
  Pill,
  SimpleGrid,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import {
  IconCircleDashedCheck,
  IconMapPin,
  IconSearch,
} from "@tabler/icons-react";
import MainLayout from "../layouts/MainLayout";

export default function JobsPage() {
  return (
    <MainLayout>
      <Container w="100%" size="xl" py="xl">
        <Flex direction="column" gap="lg">
          <Flex w="100%" gap="md">
            <TextInput
              flex="1 1 0"
              leftSection={<IconSearch />}
              placeholder="Cari lowongan"
            />
            <Button tt="uppercase" w="8rem">
              Cari
            </Button>
          </Flex>
          <SimpleGrid cols={3}>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex justify="space-between">
                  <Title fz="h4" fw="600">
                    Backend Engineer
                  </Title>
                  <Text c="gray.7" fw="500">
                    Gaji tidak ditampilkan
                  </Text>
                </Flex>
                <Pill.Group>
                  <Pill>Kerja di kantor</Pill>
                  <Pill>Penuh waktu</Pill>
                  <Pill>1 - 3 tahun</Pill>
                  <Pill>Minimal Sarjana (S1)</Pill>
                </Pill.Group>
                <Flex gap="xs">
                  <Avatar />
                  <Flex direction="column" gap="2">
                    <Flex gap="4" align="center">
                      <IconCircleDashedCheck
                        color="var(--mantine-color-blue-5)"
                        size="20"
                      />
                      <Anchor>Agile Technica</Anchor>
                    </Flex>
                    <Flex gap="4" align="center">
                      <IconMapPin
                        color="var(--mantine-color-gray-7)"
                        size="20"
                      />
                      <Text>Tangerang, Banten</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex justify="space-between">
                  <Title fz="h4" fw="600">
                    Frontend Engineer
                  </Title>
                  <Text c="blue" fw="500">
                    Rp3jt-Rp4jt
                  </Text>
                </Flex>
                <Pill.Group>
                  <Pill>Kerja di kantor</Pill>
                  <Pill>Penuh waktu</Pill>
                  <Pill>1 - 3 tahun</Pill>
                  <Pill>Minimal Sarjana (S1)</Pill>
                </Pill.Group>
                <Flex gap="xs">
                  <Avatar />
                  <Flex direction="column" gap="2">
                    <Flex gap="4" align="center">
                      <IconCircleDashedCheck
                        color="var(--mantine-color-blue-5)"
                        size="20"
                      />
                      <Anchor>Dabu Digital Agency</Anchor>
                    </Flex>
                    <Flex gap="4" align="center">
                      <IconMapPin
                        color="var(--mantine-color-gray-7)"
                        size="20"
                      />
                      <Text>Jakarta Barat, DKI Jakarta</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex justify="space-between">
                  <Title fz="h4" fw="600">
                    Telemarketing
                  </Title>
                  <Text c="blue" fw="500">
                    Rp3,2jt-Rp8,1jt
                  </Text>
                </Flex>
                <Pill.Group>
                  <Pill>Remote/Dari rumah</Pill>
                  <Pill>Penuh waktu</Pill>
                  <Pill>1 - 3 tahun</Pill>
                  <Pill>Minimal Diploma (D3)</Pill>
                </Pill.Group>
                <Flex gap="xs">
                  <Avatar />
                  <Flex direction="column" gap="2">
                    <Flex gap="4" align="center">
                      <IconCircleDashedCheck
                        color="var(--mantine-color-blue-5)"
                        size="20"
                      />
                      <Anchor>Algorithmic Global FZE</Anchor>
                    </Flex>
                    <Flex gap="4" align="center">
                      <IconMapPin
                        color="var(--mantine-color-gray-7)"
                        size="20"
                      />
                      <Text>Kelapa Dua, Banten</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex justify="space-between">
                  <Title fz="h4" fw="600">
                    Backend Engineer
                  </Title>
                  <Text c="gray.7" fw="500">
                    Gaji tidak ditampilkan
                  </Text>
                </Flex>
                <Pill.Group>
                  <Pill>Kerja di kantor</Pill>
                  <Pill>Penuh waktu</Pill>
                  <Pill>1 - 3 tahun</Pill>
                  <Pill>Minimal Sarjana (S1)</Pill>
                </Pill.Group>
                <Flex gap="xs">
                  <Avatar />
                  <Flex direction="column" gap="2">
                    <Flex gap="4" align="center">
                      <IconCircleDashedCheck
                        color="var(--mantine-color-blue-5)"
                        size="20"
                      />
                      <Anchor>Agile Technica</Anchor>
                    </Flex>
                    <Flex gap="4" align="center">
                      <IconMapPin
                        color="var(--mantine-color-gray-7)"
                        size="20"
                      />
                      <Text>Tangerang, Banten</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex justify="space-between">
                  <Title fz="h4" fw="600">
                    Frontend Engineer
                  </Title>
                  <Text c="blue" fw="500">
                    Rp3jt-Rp4jt
                  </Text>
                </Flex>
                <Pill.Group>
                  <Pill>Kerja di kantor</Pill>
                  <Pill>Penuh waktu</Pill>
                  <Pill>1 - 3 tahun</Pill>
                  <Pill>Minimal Sarjana (S1)</Pill>
                </Pill.Group>
                <Flex gap="xs">
                  <Avatar />
                  <Flex direction="column" gap="2">
                    <Flex gap="4" align="center">
                      <IconCircleDashedCheck
                        color="var(--mantine-color-blue-5)"
                        size="20"
                      />
                      <Anchor>Dabu Digital Agency</Anchor>
                    </Flex>
                    <Flex gap="4" align="center">
                      <IconMapPin
                        color="var(--mantine-color-gray-7)"
                        size="20"
                      />
                      <Text>Jakarta Barat, DKI Jakarta</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex justify="space-between">
                  <Title fz="h4" fw="600">
                    Telemarketing
                  </Title>
                  <Text c="blue" fw="500">
                    Rp3,2jt-Rp8,1jt
                  </Text>
                </Flex>
                <Pill.Group>
                  <Pill>Remote/Dari rumah</Pill>
                  <Pill>Penuh waktu</Pill>
                  <Pill>1 - 3 tahun</Pill>
                  <Pill>Minimal Diploma (D3)</Pill>
                </Pill.Group>
                <Flex gap="xs">
                  <Avatar />
                  <Flex direction="column" gap="2">
                    <Flex gap="4" align="center">
                      <IconCircleDashedCheck
                        color="var(--mantine-color-blue-5)"
                        size="20"
                      />
                      <Anchor>Algorithmic Global FZE</Anchor>
                    </Flex>
                    <Flex gap="4" align="center">
                      <IconMapPin
                        color="var(--mantine-color-gray-7)"
                        size="20"
                      />
                      <Text>Kelapa Dua, Banten</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex justify="space-between">
                  <Title fz="h4" fw="600">
                    Backend Engineer
                  </Title>
                  <Text c="gray.7" fw="500">
                    Gaji tidak ditampilkan
                  </Text>
                </Flex>
                <Pill.Group>
                  <Pill>Kerja di kantor</Pill>
                  <Pill>Penuh waktu</Pill>
                  <Pill>1 - 3 tahun</Pill>
                  <Pill>Minimal Sarjana (S1)</Pill>
                </Pill.Group>
                <Flex gap="xs">
                  <Avatar />
                  <Flex direction="column" gap="2">
                    <Flex gap="4" align="center">
                      <IconCircleDashedCheck
                        color="var(--mantine-color-blue-5)"
                        size="20"
                      />
                      <Anchor>Agile Technica</Anchor>
                    </Flex>
                    <Flex gap="4" align="center">
                      <IconMapPin
                        color="var(--mantine-color-gray-7)"
                        size="20"
                      />
                      <Text>Tangerang, Banten</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex justify="space-between">
                  <Title fz="h4" fw="600">
                    Frontend Engineer
                  </Title>
                  <Text c="blue" fw="500">
                    Rp3jt-Rp4jt
                  </Text>
                </Flex>
                <Pill.Group>
                  <Pill>Kerja di kantor</Pill>
                  <Pill>Penuh waktu</Pill>
                  <Pill>1 - 3 tahun</Pill>
                  <Pill>Minimal Sarjana (S1)</Pill>
                </Pill.Group>
                <Flex gap="xs">
                  <Avatar />
                  <Flex direction="column" gap="2">
                    <Flex gap="4" align="center">
                      <IconCircleDashedCheck
                        color="var(--mantine-color-blue-5)"
                        size="20"
                      />
                      <Anchor>Dabu Digital Agency</Anchor>
                    </Flex>
                    <Flex gap="4" align="center">
                      <IconMapPin
                        color="var(--mantine-color-gray-7)"
                        size="20"
                      />
                      <Text>Jakarta Barat, DKI Jakarta</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex justify="space-between">
                  <Title fz="h4" fw="600">
                    Telemarketing
                  </Title>
                  <Text c="blue" fw="500">
                    Rp3,2jt-Rp8,1jt
                  </Text>
                </Flex>
                <Pill.Group>
                  <Pill>Remote/Dari rumah</Pill>
                  <Pill>Penuh waktu</Pill>
                  <Pill>1 - 3 tahun</Pill>
                  <Pill>Minimal Diploma (D3)</Pill>
                </Pill.Group>
                <Flex gap="xs">
                  <Avatar />
                  <Flex direction="column" gap="2">
                    <Flex gap="4" align="center">
                      <IconCircleDashedCheck
                        color="var(--mantine-color-blue-5)"
                        size="20"
                      />
                      <Anchor>Algorithmic Global FZE</Anchor>
                    </Flex>
                    <Flex gap="4" align="center">
                      <IconMapPin
                        color="var(--mantine-color-gray-7)"
                        size="20"
                      />
                      <Text>Kelapa Dua, Banten</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex justify="space-between">
                  <Title fz="h4" fw="600">
                    Backend Engineer
                  </Title>
                  <Text c="gray.7" fw="500">
                    Gaji tidak ditampilkan
                  </Text>
                </Flex>
                <Pill.Group>
                  <Pill>Kerja di kantor</Pill>
                  <Pill>Penuh waktu</Pill>
                  <Pill>1 - 3 tahun</Pill>
                  <Pill>Minimal Sarjana (S1)</Pill>
                </Pill.Group>
                <Flex gap="xs">
                  <Avatar />
                  <Flex direction="column" gap="2">
                    <Flex gap="4" align="center">
                      <IconCircleDashedCheck
                        color="var(--mantine-color-blue-5)"
                        size="20"
                      />
                      <Anchor>Agile Technica</Anchor>
                    </Flex>
                    <Flex gap="4" align="center">
                      <IconMapPin
                        color="var(--mantine-color-gray-7)"
                        size="20"
                      />
                      <Text>Tangerang, Banten</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex justify="space-between">
                  <Title fz="h4" fw="600">
                    Frontend Engineer
                  </Title>
                  <Text c="blue" fw="500">
                    Rp3jt-Rp4jt
                  </Text>
                </Flex>
                <Pill.Group>
                  <Pill>Kerja di kantor</Pill>
                  <Pill>Penuh waktu</Pill>
                  <Pill>1 - 3 tahun</Pill>
                  <Pill>Minimal Sarjana (S1)</Pill>
                </Pill.Group>
                <Flex gap="xs">
                  <Avatar />
                  <Flex direction="column" gap="2">
                    <Flex gap="4" align="center">
                      <IconCircleDashedCheck
                        color="var(--mantine-color-blue-5)"
                        size="20"
                      />
                      <Anchor>Dabu Digital Agency</Anchor>
                    </Flex>
                    <Flex gap="4" align="center">
                      <IconMapPin
                        color="var(--mantine-color-gray-7)"
                        size="20"
                      />
                      <Text>Jakarta Barat, DKI Jakarta</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Paper>
          </SimpleGrid>
          <Flex align="center" justify="center">
            <Pagination total={10} />
          </Flex>
        </Flex>
      </Container>
    </MainLayout>
  );
}
