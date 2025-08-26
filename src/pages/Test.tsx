import React from "react";

// Example imports (adjust to your folder structure)
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
// import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
// import { Form } from "@/components/ui/form";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
// import { InputOTP } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar";
import { NavigationMenu, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
// import { Pagination } from "@/components/ui/pagination";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// import { Sidebar, useSidebar } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ToastProvider, Toast, ToastViewport } from "@/components/ui/toast";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { CalendarWithEvents } from '@/components/ui/EventsCalendar';
import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import LoadingSpinner from '../components/LoadingSpinner';
// import { usePrayerTimes } from '@/hooks/usePrayerContext';

export default function ComponentTestPage() {
    //const { school, setSchool, nextPrayer, prayerTimes, currentPrayer } = usePrayerTimes();
    return (
        <div className="p-8 space-y-8">
            <h1 className="text-2xl font-bold">Component Test Page</h1>

            <CalendarWithEvents />
            <LoadingSpinner />

            <div className="space-y-12 p-6 bg-gray-50 min-h-screen">
                {/* Small Container */}
                <Container size="sm" className="bg-white p-4 rounded-lg shadow-md">
                    <Typography variant="h1" className="mb-2">
                        Small Container - H1 Heading
                    </Typography>
                    <Typography variant="subtitle" className="mb-2">
                        Subtitle text for small container
                    </Typography>
                    <Typography variant="body" className="mb-2">
                        Body text to demonstrate spacing and font styling.
                    </Typography>
                    <Typography variant="caption" className="mb-2">
                        Caption text
                    </Typography>
                    <Button variant="primary">Primary Button</Button>
                </Container>

                {/* Medium Container */}
                <Container size="md" className="bg-white p-6 rounded-lg shadow-md">
                    <Typography variant="h2" className="mb-2">
                        Medium Container - H2 Heading
                    </Typography>
                    <Typography variant="body" className="mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                        odio. Praesent libero.
                    </Typography>
                    <Typography variant="caption" className="mb-2">
                        Some caption text
                    </Typography>
                    <Button variant="secondary">Secondary Button</Button>
                </Container>

                {/* Large Container */}
                <Container size="lg" className="bg-white p-8 rounded-lg shadow-md">
                    <Typography variant="h3" className="mb-2">
                        Large Container - H3 Heading
                    </Typography>
                    <Typography variant="body" className="mb-2">
                        Body text showing how Container centers and pads content nicely.
                    </Typography>
                    <Typography variant="subtitle" className="mb-2">
                        Subtitle text example
                    </Typography>
                    <Typography variant="caption" className="mb-2">
                        Caption example
                    </Typography>
                </Container>
            </div>

            <Button>Button</Button>
            <Input placeholder="Input" />

            <Dialog>
                <DialogTrigger asChild><Button>Open Dialog</Button></DialogTrigger>
                <DialogContent>
                    <DialogTitle>Dialog Title</DialogTitle>
                    <p>Dialog content works</p>
                </DialogContent>
            </Dialog>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Accordion Item</AccordionTrigger>
                    <AccordionContent>Accordion Content</AccordionContent>
                </AccordionItem>
            </Accordion>

            <Alert>
                <AlertTitle>Alert Title</AlertTitle>
                <AlertDescription>Alert description here</AlertDescription>
            </Alert>

            <AlertDialog>
                <AlertDialogTrigger asChild><Button>Open Alert Dialog</Button></AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogContent>
            </AlertDialog>

            <Avatar>
                <AvatarImage src="/avatar.png" />
                <AvatarFallback>AB</AvatarFallback>
            </Avatar>

            <Badge>Badge</Badge>

            <Breadcrumb>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Page</BreadcrumbItem>
            </Breadcrumb>

            <Calendar />

            <Card>
                <CardHeader>Card Header</CardHeader>
                <CardContent>Card Content</CardContent>
                <CardFooter>Card Footer</CardFooter>
            </Card>

            <Carousel>
                <CarouselItem>Slide 1</CarouselItem>
                <CarouselItem>Slide 2</CarouselItem>
            </Carousel>

            <Collapsible>
                <CollapsibleTrigger asChild><Button>Open Collapsible</Button></CollapsibleTrigger>
                <CollapsibleContent>Hidden content</CollapsibleContent>
            </Collapsible>

            <ContextMenu>
                <ContextMenuTrigger>Right click me</ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem>Option 1</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>

            <Drawer>
                <DrawerTrigger asChild><Button>Open Drawer</Button></DrawerTrigger>
                <DrawerContent>Drawer Content</DrawerContent>
            </Drawer>

            <DropdownMenu>
                <DropdownMenuTrigger asChild><Button>Open Menu</Button></DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Item 1</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <HoverCard>
                <HoverCardTrigger>Hover me</HoverCardTrigger>
                <HoverCardContent>Hover card content</HoverCardContent>
            </HoverCard>


            <Label htmlFor="test">Label Example</Label>

            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>Menu</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Item 1</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

            <NavigationMenu>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Nav</NavigationMenuTrigger>
                    <NavigationMenuContent>Content</NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenu>

            <Popover>
                <PopoverTrigger asChild><Button>Open Popover</Button></PopoverTrigger>
                <PopoverContent>Popover content</PopoverContent>
            </Popover>

            <Progress value={50} />

            <RadioGroup defaultValue="1">
                <RadioGroupItem value="1" /> Option 1
                <RadioGroupItem value="2" /> Option 2
            </RadioGroup>

            <ScrollArea className="h-24 w-48">
                <p>Scrollable content here...</p>
            </ScrollArea>

            <Separator />

            <Sheet>
                <SheetTrigger asChild><Button>Open Sheet</Button></SheetTrigger>
                <SheetContent>Sheet content</SheetContent>
            </Sheet>

            <Skeleton className="h-6 w-32" />

            <Slider defaultValue={[50]} max={100} step={1} />

            <Switch />

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableCell>Header</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Cell</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Tabs defaultValue="tab1">
                <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">Content 1</TabsContent>
                <TabsContent value="tab2">Content 2</TabsContent>
            </Tabs>

            <Textarea placeholder="Textarea" />

            <ToastProvider>
                <Toast>Example Toast</Toast>
                <ToastViewport />
            </ToastProvider>

            <ToggleGroup type="single">
                <ToggleGroupItem value="1">Option</ToggleGroupItem>
            </ToggleGroup>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild><Button>Hover</Button></TooltipTrigger>
                    <TooltipContent>Tooltip text</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}
