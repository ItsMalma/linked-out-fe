import {
  Anchor,
  Avatar,
  Container,
  Flex,
  Pagination,
  Paper,
  SimpleGrid,
  Stack,
  TagsInput,
  Text,
  Title,
} from "@mantine/core";
import { IconBriefcase, IconBuilding, IconSearch } from "@tabler/icons-react";
import MainLayout from "../layouts/MainLayout";

export default function CompaniesPage() {
  return (
    <MainLayout>
      <Container w="100%" size="xl" py="xl">
        <Flex direction="column" gap="lg">
          <Flex w="100%" gap="md">
            <TagsInput
              flex="1 1 0"
              leftSection={<IconSearch />}
              placeholder="Masukkan kata kunci"
            />
          </Flex>
          <SimpleGrid cols={3}>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex gap="xs">
                  <Avatar radius="0" size="lg" />
                  <Flex direction="column" gap="2">
                    <Title fz="h4" fw="600">
                      PT. Carissa Mega Pesona
                    </Title>
                    <Text c="gray" fz="sm">
                      Surabaya, Jawa Timur
                    </Text>
                  </Flex>
                </Flex>
                <Stack gap="2">
                  <Flex gap="xs" align="center">
                    <IconBuilding
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Text>Cosmetics</Text>
                  </Flex>
                  <Flex gap="xs" align="center">
                    <IconBriefcase
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Text c="gray.7">Sedang tidak ada lowongan</Text>
                  </Flex>
                </Stack>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex gap="xs">
                  <Avatar radius="0" size="lg" />
                  <Flex direction="column" gap="2">
                    <Title fz="h4" fw="600">
                      Universitas Multimedia Nusantara
                    </Title>
                    <Text c="gray" fz="sm">
                      Tangerang, Banten
                    </Text>
                  </Flex>
                </Flex>
                <Stack gap="2">
                  <Flex gap="xs" align="center">
                    <IconBuilding
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Text>Higher Education</Text>
                  </Flex>
                  <Flex gap="xs" align="center">
                    <IconBriefcase
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Anchor>3 lowongan</Anchor>
                  </Flex>
                </Stack>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex gap="xs">
                  <Avatar radius="0" size="lg" />
                  <Flex direction="column" gap="2">
                    <Title fz="h4" fw="600">
                      CV Maulana Berkah Mulia
                    </Title>
                    <Text c="gray" fz="sm">
                      Bekasi, Jawa Barat
                    </Text>
                  </Flex>
                </Flex>
                <Stack gap="2">
                  <Flex gap="xs" align="center">
                    <IconBuilding
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Text>Retail</Text>
                  </Flex>
                  <Flex gap="xs" align="center">
                    <IconBriefcase
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Anchor>2 lowongan</Anchor>
                  </Flex>
                </Stack>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex gap="xs">
                  <Avatar radius="0" size="lg" />
                  <Flex direction="column" gap="2">
                    <Title fz="h4" fw="600">
                      PT. Carissa Mega Pesona
                    </Title>
                    <Text c="gray" fz="sm">
                      Surabaya, Jawa Timur
                    </Text>
                  </Flex>
                </Flex>
                <Stack gap="2">
                  <Flex gap="xs" align="center">
                    <IconBuilding
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Text>Cosmetics</Text>
                  </Flex>
                  <Flex gap="xs" align="center">
                    <IconBriefcase
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Text c="gray.7">Sedang tidak ada lowongan</Text>
                  </Flex>
                </Stack>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex gap="xs">
                  <Avatar radius="0" size="lg" />
                  <Flex direction="column" gap="2">
                    <Title fz="h4" fw="600">
                      Universitas Multimedia Nusantara
                    </Title>
                    <Text c="gray" fz="sm">
                      Tangerang, Banten
                    </Text>
                  </Flex>
                </Flex>
                <Stack gap="2">
                  <Flex gap="xs" align="center">
                    <IconBuilding
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Text>Higher Education</Text>
                  </Flex>
                  <Flex gap="xs" align="center">
                    <IconBriefcase
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Anchor>3 lowongan</Anchor>
                  </Flex>
                </Stack>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex gap="xs">
                  <Avatar radius="0" size="lg" />
                  <Flex direction="column" gap="2">
                    <Title fz="h4" fw="600">
                      CV Maulana Berkah Mulia
                    </Title>
                    <Text c="gray" fz="sm">
                      Bekasi, Jawa Barat
                    </Text>
                  </Flex>
                </Flex>
                <Stack gap="2">
                  <Flex gap="xs" align="center">
                    <IconBuilding
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Text>Retail</Text>
                  </Flex>
                  <Flex gap="xs" align="center">
                    <IconBriefcase
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Anchor>2 lowongan</Anchor>
                  </Flex>
                </Stack>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex gap="xs">
                  <Avatar radius="0" size="lg" />
                  <Flex direction="column" gap="2">
                    <Title fz="h4" fw="600">
                      PT. Carissa Mega Pesona
                    </Title>
                    <Text c="gray" fz="sm">
                      Surabaya, Jawa Timur
                    </Text>
                  </Flex>
                </Flex>
                <Stack gap="2">
                  <Flex gap="xs" align="center">
                    <IconBuilding
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Text>Cosmetics</Text>
                  </Flex>
                  <Flex gap="xs" align="center">
                    <IconBriefcase
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Text c="gray.7">Sedang tidak ada lowongan</Text>
                  </Flex>
                </Stack>
              </Flex>
            </Paper>
            <Paper withBorder p="md">
              <Flex direction="column" gap="sm">
                <Flex gap="xs">
                  <Avatar radius="0" size="lg" />
                  <Flex direction="column" gap="2">
                    <Title fz="h4" fw="600">
                      Universitas Multimedia Nusantara
                    </Title>
                    <Text c="gray" fz="sm">
                      Tangerang, Banten
                    </Text>
                  </Flex>
                </Flex>
                <Stack gap="2">
                  <Flex gap="xs" align="center">
                    <IconBuilding
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Text>Higher Education</Text>
                  </Flex>
                  <Flex gap="xs" align="center">
                    <IconBriefcase
                      color="var(--mantine-color-gray-6)"
                      size="20"
                    />
                    <Anchor>3 lowongan</Anchor>
                  </Flex>
                </Stack>
              </Flex>
            </Paper>
          </SimpleGrid>
          <Flex align="center" justify="right">
            <Pagination total={10} />
          </Flex>
        </Flex>
      </Container>
    </MainLayout>
  );
}
