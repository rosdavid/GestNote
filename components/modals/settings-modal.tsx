import { useSettings } from "@/hooks/use-settings";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { Label } from "../ui/label";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import Link from "next/link";

export const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My Settings</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how GestNote looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Account Settings</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Change your account information
            </span>
          </div>
          <div className="flex flex-col gap-y-1">
            <Button variant="outline">
              <Link href="https://tidy-reindeer-89.accounts.dev/user">
                Account Settings
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
