import { Carousel } from "@mantine/carousel";
import {
  Avatar,
  Button,
  Center,
  Container,
  Flex,
  Image,
  Paper,
  Select,
  SimpleGrid,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconMapPin, IconSearch } from "@tabler/icons-react";
import MainLayout from "../layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <Carousel withIndicators loop height={300} slideGap="0">
        <Carousel.Slide>
          <Image
            src={null}
            h={300}
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src={null}
            h={300}
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src={null}
            h={300}
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image
            src={null}
            h={300}
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          />
        </Carousel.Slide>
      </Carousel>
      <Container w="100%" py="lg">
        <Flex direction="column" gap="5rem">
          <Flex direction="column" gap="sm">
            <Text ta="center" fz="h3" fw="bold" c="gray.9">
              Cari 1,000+ loker di Indonesia
            </Text>
            <Flex gap="sm">
              <TextInput flex="1 1 0" leftSection={<IconSearch />} />
              <Select flex="1 1 0" leftSection={<IconMapPin />} clearable />
              <Button>Cari</Button>
            </Flex>
          </Flex>
          <Flex direction="column" gap="sm">
            <Title c="gray.9" fz="h3">
              Kategori pekerjaan populer
            </Title>
            <SimpleGrid cols={{ base: 3, md: 4 }}>
              <Paper withBorder radius="md" shadow="lg" py="lg">
                <Text ta="center" fw="bold" c="gray.8">
                  Admin
                </Text>
              </Paper>
              <Paper withBorder radius="md" shadow="lg" py="lg">
                <Text ta="center" fw="bold" c="gray.8">
                  Admin
                </Text>
              </Paper>
              <Paper withBorder radius="md" shadow="lg" py="lg">
                <Text ta="center" fw="bold" c="gray.8">
                  Admin
                </Text>
              </Paper>
              <Paper withBorder radius="md" shadow="lg" py="lg">
                <Text ta="center" fw="bold" c="gray.8">
                  Admin
                </Text>
              </Paper>
              <Paper withBorder radius="md" shadow="lg" py="lg">
                <Text ta="center" fw="bold" c="gray.8">
                  Admin
                </Text>
              </Paper>
              <Paper withBorder radius="md" shadow="lg" py="lg">
                <Text ta="center" fw="bold" c="gray.8">
                  Admin
                </Text>
              </Paper>
              <Paper withBorder radius="md" shadow="lg" py="lg">
                <Text ta="center" fw="bold" c="gray.8">
                  Admin
                </Text>
              </Paper>
              <Paper withBorder radius="md" shadow="lg" py="lg">
                <Text ta="center" fw="bold" c="gray.8">
                  Admin
                </Text>
              </Paper>
              <Paper withBorder radius="md" shadow="lg" py="lg">
                <Text ta="center" fw="bold" c="gray.8">
                  Admin
                </Text>
              </Paper>
              <Paper withBorder radius="md" shadow="lg" py="lg">
                <Text ta="center" fw="bold" c="gray.8">
                  Admin
                </Text>
              </Paper>
              <Paper withBorder radius="md" shadow="lg" py="lg">
                <Text ta="center" fw="bold" c="gray.8">
                  Admin
                </Text>
              </Paper>
              <Paper withBorder radius="md" shadow="lg" py="lg">
                <Text ta="center" fw="bold" c="gray.8">
                  Admin
                </Text>
              </Paper>
            </SimpleGrid>
          </Flex>
        </Flex>
      </Container>
      <Container size="md" w="100%" py="5rem" mt="xl">
        <Flex direction="column" gap="xl">
          <Flex direction="column" gap="4">
            <Text ta="center" fz="1.9rem" fw="800" c="gray.9">
              2 ribu talenta dapat kerja via LinkedOut
            </Text>
            <Text ta="center">
              Simak kisah mereka dapat pekerjaan via LinkedOut. Kini giliranmu!
            </Text>
          </Flex>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <Paper withBorder radius="lg" shadow="lg" p="lg">
              <Flex direction="column" gap="lg">
                <Center>
                  <Avatar size="8rem" top="0" pos="sticky" />
                </Center>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur facilis maiores accusantium labore iste, quo at
                </Text>
                <Flex direction="column">
                  <Text c="gray" fw="500" fz="h6">
                    Alfonsius Tolanhera, 18 tahun
                  </Text>
                  <Text c="gray" fw="500" fz="h6">
                    Social Media Strategist
                  </Text>
                </Flex>
              </Flex>
            </Paper>
            <Paper withBorder radius="lg" shadow="lg" p="lg">
              <Flex direction="column" gap="lg">
                <Center>
                  <Avatar size="8rem" top="0" pos="sticky" />
                </Center>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur facilis maiores accusantium labore iste, quo at
                </Text>
                <Flex direction="column">
                  <Text c="gray" fw="500" fz="h6">
                    Alfonsius Tolanhera, 18 tahun
                  </Text>
                  <Text c="gray" fw="500" fz="h6">
                    Social Media Strategist
                  </Text>
                </Flex>
              </Flex>
            </Paper>
            <Paper withBorder radius="lg" shadow="lg" p="lg">
              <Flex direction="column" gap="lg">
                <Center>
                  <Avatar size="8rem" top="0" pos="sticky" />
                </Center>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur facilis maiores accusantium labore iste, quo at
                </Text>
                <Flex direction="column">
                  <Text c="gray" fw="500" fz="h6">
                    Alfonsius Tolanhera, 18 tahun
                  </Text>
                  <Text c="gray" fw="500" fz="h6">
                    Social Media Strategist
                  </Text>
                </Flex>
              </Flex>
            </Paper>
          </SimpleGrid>
        </Flex>
      </Container>
    </MainLayout>
  );
}
