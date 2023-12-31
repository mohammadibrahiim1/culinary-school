import React from "react";
import {
  createStyles,
  Group,
  Paper,
  SimpleGrid,
  Text,
  rem,
} from "@mantine/core";
import {
  IconUserPlus,
  IconDiscount2,
  IconReceipt2,
  IconCoin,
  IconArrowLeft,
  IconArrowRight,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
  },

  value: {
    fontSize: rem(24),
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

const icons = {
  user: IconUserPlus,
  discount: IconDiscount2,
  receipt: IconReceipt2,
  coin: IconCoin,
};

// interface StatsGridProps {
//   data: { title: string; icon: keyof typeof icons; value: string; diff: number }[];
// }

const data = [
  { label: "Features", link: "/" },
  { label: "Pricing", link: "/" },
  { label: "Learn", link: "/" },
  { label: "Community", link: "/" },
];

const Extra = () => {
  const { classes } = useStyles();
  const stats = data.map((stat) => {
    const Icon = icons[stat.icon];
    const DiffIcon = stat.diff > 0 ? IconArrowLeft : IconArrowRight;

    return (
      <div className={classes.root}>
        <Paper withBorder p="md" radius="md" key={stat.title}>
          <Group position="apart">
            <Text size="xs" color="dimmed" className={classes.title}>
              {stat.title}
            </Text>
            <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
          </Group>

          <Group align="flex-end" spacing="xs" mt={25}>
            <Text className={classes.value}>{stat.value}</Text>
            <Text
              color={stat.diff > 0 ? "teal" : "red"}
              fz="sm"
              fw={500}
              className={classes.diff}
            >
              <span>{stat.diff}%</span>
              <DiffIcon size="1rem" stroke={1.5} />
            </Text>
          </Group>

          <Text fz="xs" c="dimmed" mt={7}>
            Compared to previous month
          </Text>
        </Paper>
      </div>
    );
  });

  return (
    //     <div>
    <div className={classes.root}>
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "xs", cols: 1 },
        ]}
      >
        {stats}
      </SimpleGrid>
    </div>
    //     </div>
  );
};

export default Extra;
