import {
  Anchor,
  Avatar,
  Container,
  Flex,
  Paper,
  Pill,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconCalendar,
  IconCircleDashedCheck,
  IconClock,
} from "@tabler/icons-react";
import MainLayout from "../layouts/MainLayout";

export default function ApplicationsPage() {
  return (
    <MainLayout>
      <Container w="100%" size="xl" py="xl">
        <Flex direction="column" gap="lg">
          <Flex w="100%" gap="md" align="start">
            <Stack w="100%">
              <Paper w="100%" withBorder p="md">
                <Flex direction="column" gap="sm">
                  <Flex gap="xs">
                    <Avatar radius="0" size="lg" />
                    <Flex direction="column">
                      <Text fz="h4" fw="600">
                        Backend Engineer
                      </Text>
                      <Flex gap="4" align="center">
                        <IconCircleDashedCheck
                          color="var(--mantine-color-blue-5)"
                          size="20"
                        />
                        <Anchor>PT Berjalan</Anchor>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Stack gap="2">
                    <Flex gap="xs" align="center">
                      <IconCalendar
                        color="var(--mantine-color-gray-6)"
                        size="20"
                      />
                      <Text>8 Juni 2024</Text>
                    </Flex>
                    <Flex gap="xs" align="center">
                      <IconClock
                        color="var(--mantine-color-gray-6)"
                        size="20"
                      />
                      <Text>06:30</Text>
                    </Flex>
                  </Stack>
                  <Pill.Group>
                    <Pill bg="gray.3">Menunggu</Pill>
                  </Pill.Group>
                </Flex>
              </Paper>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </MainLayout>
  );
}
