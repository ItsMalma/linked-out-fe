import { Anchor, Avatar, Flex, Paper, Pill, Text } from "@mantine/core";
import { IconCircleDashedCheck, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";

type JobProps = {
  id: string;
  title: string;
  salary?: string;
  tags: string[];
  company: string;
  location: string;
};

export default function JobItem(props: JobProps) {
  return (
    <Paper c="black" component={Link} to={`/job/${props.id}`} withBorder p="md">
      <Flex direction="column" gap="sm">
        <Flex justify="space-between">
          <Text fz="h4" fw="600">
            {props.title}
          </Text>
          <Text c={props.salary ? "blue" : "gray.7"} fw="500">
            {props.salary ? props.salary : "Gaji tidak ditemukan"}
          </Text>
        </Flex>
        <Pill.Group>
          {props.tags.map((tag) => (
            <Pill bg="gray.3" key={tag}>
              {tag}
            </Pill>
          ))}
        </Pill.Group>
        <Flex gap="xs">
          <Avatar />
          <Flex direction="column" gap="2">
            <Flex gap="4" align="center">
              <IconCircleDashedCheck
                color="var(--mantine-color-blue-5)"
                size="20"
              />
              <Anchor>{props.company}</Anchor>
            </Flex>
            <Flex gap="4" align="center">
              <IconMapPin color="var(--mantine-color-gray-7)" size="20" />
              <Text>{props.location}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Paper>
  );
}
