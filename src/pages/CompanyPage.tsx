import {
  Anchor,
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import JobItem from "../components/JobItem";
import MainLayout from "../layouts/MainLayout";

export default function CompanyPage() {
  return (
    <MainLayout>
      <Container w="100%" size="xl" py="xl">
        <Stack gap="md">
          <Flex gap="md" align="start">
            <Avatar radius="0" size="10rem" />
            <Stack gap="sm">
              <Stack gap={0}>
                <Text fz="h2" fw={700}>
                  PT Papan Berjalan
                </Text>
                <Text>
                  Consultancy and Managed Services for Web Development.
                </Text>
              </Stack>
              <SimpleGrid cols={2}>
                <Stack gap={0}>
                  <Title tt="uppercase" fz="h6">
                    Lokasi
                  </Title>
                  <Text>Jakarta Selatan, DKI Jakarta, Indonesia</Text>
                </Stack>
                <Stack gap={0}>
                  <Title tt="uppercase" fz="h6">
                    Situs
                  </Title>
                  <Anchor>https://papanberjalan.com</Anchor>
                </Stack>
                <Stack gap={0}>
                  <Title tt="uppercase" fz="h6">
                    Jurusan
                  </Title>
                  <Text>Rekayasa Perangkat Lunak</Text>
                </Stack>
                <Stack gap={0}>
                  <Title tt="uppercase" fz="h6">
                    Ukuran Perusahaan
                  </Title>
                  <Text>10 - 30 Karyawan</Text>
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
                  Tentang Perusahaan
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
                  Galeri
                </Title>
              }
              labelPosition="left"
              color="black"
            />
            <SimpleGrid cols={4}>
              <Image
                src={null}
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
              />
              <Image
                src={null}
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
              />
              <Image
                src={null}
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
              />
              <Image
                src={null}
                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
              />
            </SimpleGrid>
          </Flex>
          <Flex direction="column">
            <Divider
              size="sm"
              my="md"
              label={
                <Title tt="uppercase" order={2} fz="h4" c="black">
                  Lowongan
                </Title>
              }
              labelPosition="left"
              color="black"
            />
            <SimpleGrid cols={2}>
              <JobItem
                id="1"
                title="Frontend Engineer"
                salary="Rp3jt-Rp4jt"
                tags={[
                  "Kerja di kantor",
                  "Penuh waktu",
                  "1 - 3 tahun",
                  "Minimal Sarjana (S1)",
                ]}
                company="PT Papan Berjalan"
                location="Jakarta Selatan, DKI Jakarta"
              />
              <JobItem
                id="1"
                title="Backend Engineer"
                tags={[
                  "Kerja di kantor",
                  "Penuh waktu",
                  "1 - 3 tahun",
                  "Minimal Sarjana (S1)",
                ]}
                company="PT Papan Berjalan"
                location="Jakarta Selatan, DKI Jakarta"
              />
              <JobItem
                id="1"
                title="Frontend Engineer"
                salary="Rp3jt-Rp4jt"
                tags={[
                  "Kerja di kantor",
                  "Penuh waktu",
                  "1 - 3 tahun",
                  "Minimal Sarjana (S1)",
                ]}
                company="PT Papan Berjalan"
                location="Jakarta Selatan, DKI Jakarta"
              />
            </SimpleGrid>
          </Flex>
        </Stack>
      </Container>
    </MainLayout>
  );
}
