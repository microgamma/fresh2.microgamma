import { ComponentChildren } from "preact";

interface LayoutProps {
  children?: ComponentChildren;
}

export default function ShareLayout({ children }: LayoutProps) {
  return (
    <div class="min-h-screen bg-gray-900">
      <main id="main-content">
        {children}
      </main>
    </div>
  );
}
