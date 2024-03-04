// Import necessary modules and libraries
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

interface ConfirmationModalProps {
  // The content to be displayed inside the modal
  children: React.ReactNode;

  // The callback function to be called when the user confirms the action
  onConfirm: () => void;
}

// ConfirmationModal Component
export const ConfirmationModal = ({
  children, // Accept the children prop
  onConfirm, // Accept the onConfirm prop
}: ConfirmationModalProps) => {
  // Handle the confirmation event and stop propagation
  const handleConfirm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    onConfirm();
  };

  // Return the Confirmation Modal JSX
  return (
    <AlertDialog>
      {/* Trigger the AlertDialog with the given children */}
      <AlertDialogTrigger onClick={(e) => e.stopPropagation()} asChild>
        {children}
      </AlertDialogTrigger>

      {/* Define the content of the AlertDialog */}
      <AlertDialogContent>
        {/* Set up the AlertDialogHeader with title and description */}
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        {/* Set up the AlertDialogFooter with Cancel and Confirm buttons */}
        <AlertDialogFooter>
          {/* Cancel button with onClick event to stop propagation */}
          <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
            Cancel
          </AlertDialogCancel>

          {/* Confirm button with onClick event calling the handleConfirm function */}
          <AlertDialogAction onClick={handleConfirm}>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
