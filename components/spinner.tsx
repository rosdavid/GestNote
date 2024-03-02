// Import the Loader component from Lucide React
import { Loader } from "lucide-react";

// Import cva (class variation authority) and VariantProps from class-variance-authority
// Import cn (class names) from @/lib/utils
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define spinnerVariants using cva, passing in the base styles and variants
const spinnerVariants = cva("text-muted-foreground animate-spin", {
  // Define the size variant with options for default, sm, md, and icon
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-2 w-2",
      md: "h-6 w-6",
      icon: "h10 w-10",
    },
  },
  // Set the default size to "default"
  defaultVariants: {
    size: "default",
  },
});

// Define the SpinnerProps interface, extending VariantProps<typeof spinnerVariants>
interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

// Export the Spinner component, which receives size as a prop and uses it in spinnerVariants
export const Spinner = ({ size }: SpinnerProps) => {
  return <Loader className={cn(spinnerVariants({ size }))} />;
};
