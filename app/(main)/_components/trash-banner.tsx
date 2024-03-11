"use client";

import { ConfirmationModal } from "@/components/modals/confirmation-modal";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface TrashBannerProps {
  documentId: Id<"documents">;
}

export const TrashBanner = ({ documentId }: TrashBannerProps) => {
  const router = useRouter();

  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const onRemove = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Removing...",
      success: `Document removed.`,
      error: `Failed to remove document.`,
    });

    router.push("/documents");
  };

  const onRestore = () => {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "Restoring...",
      success: `Document restored.`,
      error: `Failed to restore document.`,
    });
  };

  return (
    <div className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center">
      <p>This page is currently in the Trash.</p>
      <Button
        size="sm"
        onClick={onRestore}
        variant={"outline"}
        className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
      >
        Restore
      </Button>
      <ConfirmationModal onConfirm={onRemove}>
        <Button
          size="sm"
          onClick={onRemove}
          variant={"outline"}
          className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
        >
          Delete Permanently
        </Button>
      </ConfirmationModal>
    </div>
  );
};
