import * as React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";

const events: Record<string, string[]> = {
    "2025-08-24": ["Meeting with Bob", "Dinner with Alice"],
    "2025-08-25": ["Gym", "Project Deadline"],
};


export function CalendarWithEvents() {
    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined);
    const [open, setOpen] = React.useState(false);

    const handleSelect = (date: Date | undefined) => {
        if (!date) return;
        setSelectedDate(date);
        setOpen(true);
    };

    const dateKey = selectedDate?.toISOString().split("T")[0]; // e.g. "2025-08-24"

    return (
        <div>
            <Calendar
                mode="single"         // important for single-date selection
                onSelect={handleSelect}
            />

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogTitle>Events on {selectedDate?.toDateString()}</DialogTitle>
                    <ul className="mt-2 space-y-1">
                        {dateKey && events[dateKey] ? (
                            events[dateKey].map((e, i) => <li key={i}>{e}</li>)
                        ) : (
                            <li>No events</li>
                        )}
                    </ul>
                    <DialogClose className="mt-4">Close</DialogClose>
                </DialogContent>
            </Dialog>
        </div>
    );
}
