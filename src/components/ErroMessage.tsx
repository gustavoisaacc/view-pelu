import { ReactNode } from "react";

export default function ErrorMessage({ children }: { children: ReactNode }) {
  return (
    <p className="mt-2 bg-red-300 text-white p-2 rounded-sm">
      {children}{" "}
      <span role="img" aria-label="sad face">
        ��
      </span>
    </p>
  );
}
