
import { ComponentChildren } from "preact";

interface LayoutProps {
  children?: ComponentChildren;
}

export default function PrivateLayout({ children }: LayoutProps) {
  return (
    <div class="min-h-screen bg-purple-800">
      {children}
    </div>
  );
}
