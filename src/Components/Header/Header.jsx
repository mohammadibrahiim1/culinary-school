import {
  Button,
  Container,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import { Overlay } from "react-bootstrap";

const Header = () => {
  const useStyles = createStyles((theme) => ({
    wrapper: {
      position: "relative",
      paddingTop: rem(220),
      paddingBottom: rem(130),
      backgroundImage:
        "url(https://i.ibb.co/b1ZPrgw/pexels-malidate-van-784633.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat:"no-repeat",
      opacity:"1",
      height: "700px",

      [theme.fn.smallerThan("xs")]: {
        paddingTop: rem(120),
        paddingBottom: rem(50),
        height:"500px"
      },
      [theme.fn.smallerThan("md")]: {
        paddingTop: rem(120),
        paddingBottom: rem(50),
        height:"500px"
      },
    },

    inner: {
      position: "relative",
      zIndex: 1,
    },

    title: {
      fontWeight: 800,
      fontSize: rem(40),
      letterSpacing: rem(-1),
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      color: theme.white,
      marginBottom: theme.spacing.xs,
      textAlign: "center",
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [theme.fn.smallerThan("xs")]: {
        fontSize: rem(28),
        textAlign: "left",
      },
    },

    highlight: {
      color: theme.colors[theme.primaryColor][4],
    },

    description: {
      color: theme.colors.gray[0],
      textAlign: "center",

      [theme.fn.smallerThan("xs")]: {
        fontSize: theme.fontSizes.md,
        textAlign: "left",
      },
    },

    controls: {
      marginTop: `calc(${theme.spacing.xl} * 1.5)`,
      display: "flex",
      justifyContent: "center",
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,

      [theme.fn.smallerThan("xs")]: {
        flexDirection: "column",
      },
    },

    control: {
      height: rem(42),
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginLeft: theme.spacing.md,
      },

      [theme.fn.smallerThan("xs")]: {
        "&:not(:first-of-type)": {
          marginTop: theme.spacing.md,
          marginLeft: 0,
        },
      },
    },

    secondaryControl: {
      color: theme.white,
      backgroundColor: "rgba(255, 255, 255, .4)",

      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, .45) !important",
      },
    },
  }));

  const { classes, cx } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />
      {/* <video src="https://assets-global.website-files.com/5fe81966f6f5aa31b7c17439/623aad975b4acdee29126123_ICCA_PH-transcode.mp4"></video> */}

      <div className={classes.inner}>
        <Title className={classes.title}>
          Become A Professional{" "}
          <Text component="span" inherit className={classes.highlight}>
            Chef!
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained
            to detect lazy developers who do nothing and just complain on
            Twitter.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
          <Button
            className={cx(classes.control, classes.secondaryControl)}
            size="lg"
          >
            Live demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
