import {
  Flex,
  Text,
  Button,
  Checkbox,
  Switch,
  Theme,
  Link,
  Box,
  Blockquote,
  Code,
  Em,
  Kbd,
  Quote,
  Strong,
  AlertDialog,
  AspectRatio,
  Avatar,
  Badge,
  Callout,
  Card,
  CheckboxGroup,
  CheckboxCards,
  ContextMenu,
  DataList,
  IconButton,
  Dialog,
  TextField,
  DropdownMenu,
  HoverCard,
  Heading,
  Inset,
  Popover,
  TextArea,
  Progress,
  Radio,
  RadioGroup,
  RadioCards,
  ScrollArea,
  SegmentedControl,
  Select,
  Separator,
  Skeleton,
  Slider,
  Spinner,
  Table,
  Tabs,
  TabNav,
  Tooltip,
} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

const Radix = () => {
  return (
    <div>
      <Theme accentColor="orange" radius="small" appearance="dark">
        <Flex gap="3" direction="column">
          <Text size="6">Text</Text>

          <Link href="#" size="4">
            Link
          </Link>

          <Blockquote>Цитаты</Blockquote>
          <Code>console.log()</Code>
          <Em truncate>Курсив</Em>
          <Kbd>Shift + Tab</Kbd>
          <Text>
            Текст <Quote>в кавычках</Quote>,тестовый.
          </Text>
          <Strong>Жирный</Strong>

          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Button color="red">Revoke access</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content maxWidth="450px">
              <AlertDialog.Title>Revoke access</AlertDialog.Title>
              <AlertDialog.Description size="2">
                Are you sure? This application will no longer be accessible and any existing sessions will be
                expired.
              </AlertDialog.Description>

              <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button variant="solid" color="red">
                    Revoke access
                  </Button>
                </AlertDialog.Action>
              </Flex>
            </AlertDialog.Content>
          </AlertDialog.Root>

          <AspectRatio ratio={16 / 9}>
            <img
              src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
              alt="A house in a forest"
              style={{ objectFit: "cover", width: "160px" }}
            />
          </AspectRatio>

          <Avatar
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
          <Avatar fallback="A" />

          <Badge size="1" color="orange" variant="solid">
            In progress
          </Badge>
          <Badge size="2" color="blue" variant="soft">
            In review
          </Badge>
          <Badge size="3" color="green" variant="surface">
            Complete
          </Badge>
          <Badge size="3" color="green" variant="outline">
            Complete
          </Badge>

          <Button>Button</Button>
          <Button asChild>
            <a href="#">Link</a>
          </Button>
          <Button disabled>Disabled</Button>
          <Button variant="ghost">Ghost button</Button>

          <Callout.Root>
            <Callout.Text>
              You will need admin privileges to install and access this application.
            </Callout.Text>
          </Callout.Root>

          <Callout.Root size="1" color="blue" variant="outline" highContrast>
            <Callout.Icon></Callout.Icon>
            <Callout.Text>
              You will need admin privileges to install and access this application.
            </Callout.Text>
          </Callout.Root>

          <Box maxWidth="240px">
            <Card>
              <Flex gap="3" align="center">
                <Avatar
                  size="3"
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  radius="full"
                  fallback="T"
                />
                <Box>
                  <Text as="div" size="2" weight="bold">
                    Teodros Girmay
                  </Text>
                  <Text as="div" size="2" color="gray">
                    Engineering
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Box>

          <Checkbox defaultChecked />
          <CheckboxGroup.Root defaultValue={["1"]} name="example" size="3" variant="soft" color="cyan">
            <CheckboxGroup.Item value="1">Fun</CheckboxGroup.Item>
            <CheckboxGroup.Item value="2" disabled>
              Serious
            </CheckboxGroup.Item>
            <CheckboxGroup.Item value="3">Smart</CheckboxGroup.Item>
          </CheckboxGroup.Root>

          <CheckboxGroup.Root defaultValue={["1"]} name="example">
            <CheckboxGroup.Item value="1">Fun</CheckboxGroup.Item>
            <CheckboxGroup.Item value="2">Serious</CheckboxGroup.Item>
            <CheckboxGroup.Item value="3">Smart</CheckboxGroup.Item>
          </CheckboxGroup.Root>

          <Box maxWidth="600px">
            <CheckboxCards.Root defaultValue={["1"]} columns={{ initial: "1", sm: "3" }}>
              <CheckboxCards.Item value="1">
                <Flex direction="column" width="100%">
                  <Text weight="bold">A1 Keyboard</Text>
                  <Text>US Layout</Text>
                </Flex>
              </CheckboxCards.Item>
              <CheckboxCards.Item value="2">
                <Flex direction="column" width="100%">
                  <Text weight="bold">Pro Mouse</Text>
                  <Text>Zero-lag wireless</Text>
                </Flex>
              </CheckboxCards.Item>
              <CheckboxCards.Item value="3">
                <Flex direction="column" width="100%">
                  <Text weight="bold">Lightning Mat</Text>
                  <Text>Wireless charging</Text>
                </Flex>
              </CheckboxCards.Item>
            </CheckboxCards.Root>
          </Box>

          <ContextMenu.Root>
            <ContextMenu.Trigger>
              <div style={{ height: 150, backgroundColor: "gray" }}>123</div>
            </ContextMenu.Trigger>
            <ContextMenu.Content>
              <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
              <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item>Move to project…</ContextMenu.Item>
                  <ContextMenu.Item>Move to folder…</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Advanced options…</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Separator />
              <ContextMenu.Item>Share</ContextMenu.Item>
              <ContextMenu.Item>Add to favorites</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item shortcut="⌘ ⌫" color="red">
                Delete
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu.Root>

          <DataList.Root>
            <DataList.Item align="center">
              <DataList.Label minWidth="88px">Status</DataList.Label>
              <DataList.Value>
                <Badge color="jade" variant="soft" radius="full">
                  Authorized
                </Badge>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">ID</DataList.Label>
              <DataList.Value>
                <Flex align="center" gap="2">
                  <Code variant="ghost">u_2J89JSA4GJ</Code>
                  <IconButton size="1" aria-label="Copy value" color="gray" variant="ghost">
                    {/* <CopyIcon /> */}
                    <span>copy</span>
                  </IconButton>
                </Flex>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Name</DataList.Label>
              <DataList.Value>Vlad Moroz</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Email</DataList.Label>
              <DataList.Value>
                <Link href="mailto:vlad@workos.com">vlad@workos.com</Link>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label minWidth="88px">Company</DataList.Label>
              <DataList.Value>
                <Link target="_blank" href="https://workos.com">
                  WorkOS
                </Link>
              </DataList.Value>
            </DataList.Item>
          </DataList.Root>

          <Dialog.Root>
            <Dialog.Trigger>
              <Button>Edit profile</Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description size="2" mb="4">
                Make changes to your profile.
              </Dialog.Description>

              <Flex direction="column" gap="3">
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Name
                  </Text>
                  <TextField.Root defaultValue="Freja Johnsen" placeholder="Enter your full name" />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Email
                  </Text>
                  <TextField.Root defaultValue="freja@example.com" placeholder="Enter your email" />
                </label>
              </Flex>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button>Save</Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="soft">
                Options
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                  <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator />
              <DropdownMenu.Item>Share</DropdownMenu.Item>
              <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>

          <Text>
            Follow{" "}
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link href="https://twitter.com/radix_ui" target="_blank">
                  @radix_ui
                </Link>
              </HoverCard.Trigger>
              <HoverCard.Content maxWidth="300px">
                <Flex gap="4">
                  <Avatar
                    size="3"
                    fallback="R"
                    radius="full"
                    src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
                  />
                  <Box>
                    <Heading size="3" as="h3">
                      Radix
                    </Heading>
                    <Text as="div" size="2" color="gray" mb="2">
                      @radix_ui
                    </Text>
                    <Text as="div" size="2">
                      React components, icons, and colors for building high-quality, accessible UI.
                    </Text>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>{" "}
            for updates.
          </Text>

          <Box maxWidth="240px">
            <Card size="2">
              <Inset clip="padding-box" side="top" pb="current">
                <img
                  src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Bold typography"
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
                />
              </Inset>
              <Text as="p" size="3">
                <Strong>Typography</Strong> is the art and technique of arranging type to make written
                language legible, readable and appealing when displayed.
              </Text>
            </Card>
          </Box>

          <Popover.Root>
            <Popover.Trigger>
              <Button variant="soft">
                {/* <ChatBubbleIcon width="16" height="16" /> */}
                Comment
              </Button>
            </Popover.Trigger>
            <Popover.Content width="360px">
              <Flex gap="3">
                <Avatar
                  size="2"
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                  fallback="A"
                  radius="full"
                />
                <Box flexGrow="1">
                  <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
                  <Flex gap="3" mt="3" justify="between">
                    <Flex align="center" gap="2" asChild>
                      <Text as="label" size="2">
                        <Checkbox />
                        <Text>Send to group</Text>
                      </Text>
                    </Flex>

                    <Popover.Close>
                      <Button size="1">Comment</Button>
                    </Popover.Close>
                  </Flex>
                </Box>
              </Flex>
            </Popover.Content>
          </Popover.Root>

          <Box maxWidth="300px">
            <Progress />
          </Box>

          <Flex align="start" direction="column" gap="1">
            <Flex asChild gap="2">
              <Text as="label" size="2">
                <Radio name="example" value="1" defaultChecked />
                Default
              </Text>
            </Flex>

            <Flex asChild gap="2">
              <Text as="label" size="2">
                <Radio name="example" value="2" />
                Comfortable
              </Text>
            </Flex>

            <Flex asChild gap="2">
              <Text as="label" size="2">
                <Radio name="example" value="3" />
                Compact
              </Text>
            </Flex>
          </Flex>

          <RadioGroup.Root defaultValue="1" name="example">
            <RadioGroup.Item value="1">Default</RadioGroup.Item>
            <RadioGroup.Item value="2">Comfortable</RadioGroup.Item>
            <RadioGroup.Item value="3">Compact</RadioGroup.Item>
          </RadioGroup.Root>

          <Box maxWidth="600px">
            <RadioCards.Root defaultValue="1" columns={{ initial: "1", sm: "3" }}>
              <RadioCards.Item value="1">
                <Flex direction="column" width="100%">
                  <Text weight="bold">8-core CPU</Text>
                  <Text>32 GB RAM</Text>
                </Flex>
              </RadioCards.Item>
              <RadioCards.Item value="2">
                <Flex direction="column" width="100%">
                  <Text weight="bold">6-core CPU</Text>
                  <Text>24 GB RAM</Text>
                </Flex>
              </RadioCards.Item>
              <RadioCards.Item value="3">
                <Flex direction="column" width="100%">
                  <Text weight="bold">4-core CPU</Text>
                  <Text>16 GB RAM</Text>
                </Flex>
              </RadioCards.Item>
            </RadioCards.Root>
          </Box>

          <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
            <Box p="2" pr="8">
              <Heading size="4" mb="2" trim="start">
                Principles of the typographic craft
              </Heading>
              <Flex direction="column" gap="4">
                <Text as="p">
                  Three fundamental aspects of typography are legibility, readability, and aesthetics.
                  Although in a non-technical sense “legible” and “readable” are often used synonymously,
                  typographically they are separate but related concepts.
                </Text>

                <Text as="p">
                  Legibility describes how easily individual characters can be distinguished from one another.
                  It is described by Walter Tracy as “the quality of being decipherable and recognisable”. For
                  instance, if a “b” and an “h”, or a “3” and an “8”, are difficult to distinguish at small
                  sizes, this is a problem of legibility.
                </Text>

                <Text as="p">
                  Typographers are concerned with legibility insofar as it is their job to select the correct
                  font to use. Brush Script is an example of a font containing many characters that might be
                  difficult to distinguish. The selection of cases influences the legibility of typography
                  because using only uppercase letters (all-caps) reduces legibility.
                </Text>
              </Flex>
            </Box>
          </ScrollArea>

          <Flex align="start" direction="column" gap="4">
            <SegmentedControl.Root defaultValue="inbox" size="1">
              <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
              <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
              <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
            </SegmentedControl.Root>

            <SegmentedControl.Root defaultValue="inbox" size="2">
              <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
              <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
              <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
            </SegmentedControl.Root>

            <SegmentedControl.Root defaultValue="inbox" size="3">
              <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
              <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
              <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
            </SegmentedControl.Root>

            <Select.Root defaultValue="apple">
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  <Select.Label>Fruits</Select.Label>
                  <Select.Item value="orange">Orange</Select.Item>
                  <Select.Item value="apple">Apple</Select.Item>
                  <Select.Item value="grape" disabled>
                    Grape
                  </Select.Item>
                </Select.Group>
                <Select.Separator />
                <Select.Group>
                  <Select.Label>Vegetables</Select.Label>
                  <Select.Item value="carrot">Carrot</Select.Item>
                  <Select.Item value="potato">Potato</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </Flex>

          <Select.Root defaultValue="apple">
            <Select.Trigger />
            <Select.Content>
              <Select.Group>
                <Select.Label>Fruits</Select.Label>
                <Select.Item value="orange">Orange</Select.Item>
                <Select.Item value="apple">Apple</Select.Item>
                <Select.Item value="grape" disabled>
                  Grape
                </Select.Item>
              </Select.Group>
              <Select.Separator />
              <Select.Group>
                <Select.Label>Vegetables</Select.Label>
                <Select.Item value="carrot">Carrot</Select.Item>
                <Select.Item value="potato">Potato</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select.Root>

          <Text size="2">
            Tools for building high-quality, accessible UI.
            <Separator my="3" size="4" />
            <Flex gap="3" align="center">
              Themes
              <Separator orientation="vertical" />
              Primitives
              <Separator orientation="vertical" />
              Icons
              <Separator orientation="vertical" />
              Colors
            </Flex>
          </Text>

          <Flex gap="4">
            <Skeleton loading={true}>
              <Switch defaultChecked />
            </Skeleton>

            <Skeleton loading={false}>
              <Switch defaultChecked />
            </Skeleton>
          </Flex>

          <Flex direction="column" gap="4" maxWidth="300px">
            <Slider defaultValue={[25]} size="1" />
            <Slider defaultValue={[50]} size="2" />
            <Slider defaultValue={[75]} size="3" />
          </Flex>

          <Flex align="center" gap="4">
            <Spinner size="1" />
            <Spinner size="2" />
            <Spinner size="3" />
          </Flex>

          <Switch defaultChecked />
          <Switch defaultChecked disabled />

          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                <Table.Cell>danilo@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                <Table.Cell>zahra@example.com</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                <Table.Cell>jasper@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>

          <Tabs.Root defaultValue="account">
            <Tabs.List>
              <Tabs.Trigger value="account">Account</Tabs.Trigger>
              <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
              <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
            </Tabs.List>

            <Box pt="3">
              <Tabs.Content value="account">
                <Text size="2">Make changes to your account.</Text>
              </Tabs.Content>

              <Tabs.Content value="documents">
                <Text size="2">Access and update your documents.</Text>
              </Tabs.Content>

              <Tabs.Content value="settings">
                <Text size="2">Edit your profile or update contact information.</Text>
              </Tabs.Content>
            </Box>
          </Tabs.Root>

          <TabNav.Root>
            <TabNav.Link href="#" active>
              Account
            </TabNav.Link>
            <TabNav.Link href="#">Documents</TabNav.Link>
            <TabNav.Link href="#">Settings</TabNav.Link>
          </TabNav.Root>

          <TextArea placeholder="Reply to comment…" />

          <TextField.Root placeholder="Search the docs…">
            <TextField.Slot></TextField.Slot>
          </TextField.Root>

          <Tooltip content="Add to library">
            <IconButton radius="full">+</IconButton>
          </Tooltip>
        </Flex>
      </Theme>
    </div>
  );
};

Radix.config = {
  hasContainer: false,
};

export default Radix;
