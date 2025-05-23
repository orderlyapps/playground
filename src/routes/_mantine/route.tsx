import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { AppShell, Burger, createTheme, MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/code-highlight/styles.css";
import { useDisclosure } from "@mantine/hooks";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export const Route = createFileRoute("/_mantine")({
  component: RouteComponent,
});

function RouteComponent() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header p="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Link to="/">{"HOME"}</Link>
          <strong style={{ marginLeft: "1rem" }}>Mantine</strong>
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <Link to="/mantine/buttons">Buttons</Link>
          <Link to="/mantine/text">Text</Link>
        </AppShell.Navbar>

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
