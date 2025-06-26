// components/UnderwaterBackground.tsx
'use client';

export default function UnderwaterBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/reflections.gif')] bg-cover bg-top opacity-30 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#071c3d] via-[#0a1f63] to-[#030c20]" />
    </div>
  );
}
