import React, { createContext, useContext, useMemo, useState } from 'react';

export type ToastVariant = 'default' | 'success' | 'error' | 'info';

interface ToastItem {
  id: number;
  message: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  show: (message: string, variant?: ToastVariant, durationMs?: number) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const show = (message: string, variant: ToastVariant = 'default', durationMs = 2500) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, variant }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, durationMs);
  };

  const value = useMemo(() => ({ show }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/* Toast container */}
      <div className="fixed bottom-4 right-4 z-[1000] space-y-2 w-[90vw] sm:w-80">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={
              `px-4 py-3 rounded-lg shadow-lg border text-sm font-medium transition-all ` +
              (t.variant === 'success'
                ? 'bg-green-600 text-white border-green-700'
                : t.variant === 'error'
                ? 'bg-red-600 text-white border-red-700'
                : t.variant === 'info'
                ? 'bg-blue-600 text-white border-blue-700'
                : 'bg-slate-900 text-white border-slate-800')
            }
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');
  return ctx;
}
