import { ReactNode } from "react";

export default function studentLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <aside className="bg-orange-500 w-80 flex justify-center items-center">
        aside
      </aside>
      <main>{children}</main>
    </>
  );
}
