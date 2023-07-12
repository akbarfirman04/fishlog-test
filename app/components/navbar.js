import { Navbar, Text } from "@nextui-org/react";
export default function FloatingNavbar() {
  return (
    <Navbar variant={"sticky"} maxWidth={"xl"}>
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          Fishlog
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link isActive href="#" css={{ mr: "40px" }}>
          Button A
        </Navbar.Link>
        <Navbar.Link href="#" css={{ mr: "40px" }}>
          Button B
        </Navbar.Link>
        <Navbar.Link href="#" css={{ mr: "40px" }}>
          Button C
        </Navbar.Link>
        <Navbar.Link href="#" css={{ mr: "40px" }}>
          Button D
        </Navbar.Link>
        <Navbar.Link href="#" css={{ mr: "40px" }}>
          Button E
        </Navbar.Link>
        <Navbar.Link href="#" css={{ mr: "40px" }}>
          Button F
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
}
