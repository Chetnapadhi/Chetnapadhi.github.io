import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

export function Dialog({ children, ...props }) {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
}

export function DialogTrigger({ children, ...props }) {
  return <DialogPrimitive.Trigger {...props}>{children}</DialogPrimitive.Trigger>;
}

export function DialogPortal({ children, ...props }) {
  return <DialogPrimitive.Portal {...props}>{children}</DialogPrimitive.Portal>;
}

export function DialogClose({ children, ...props }) {
  return <DialogPrimitive.Close {...props}>{children}</DialogPrimitive.Close>;
}

export function DialogOverlay({ className = '', ...props }) {
  return (
    <DialogPrimitive.Overlay
      className={`data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 ${className}`}
      {...props}
    />
  );
}

export function DialogContent({ 
  className = '', 
  children, 
  showCloseButton = true,
  ...props 
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        className={`bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-1rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg ${className}`}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

export function DialogHeader({ className = '', children, ...props }) {
  return (
    <div
      className={`flex flex-col gap-2 text-center sm:text-left ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function DialogFooter({ className = '', children, ...props }) {
  return (
    <div
      className={`flex flex-col-reverse gap-2 sm:flex-row sm:justify-end ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function DialogTitle({ className = '', children, ...props }) {
  return (
    <DialogPrimitive.Title
      className={`text-lg leading-none font-semibold ${className}`}
      {...props}
    >
      {children}
    </DialogPrimitive.Title>
  );
}

export function DialogDescription({ className = '', children, ...props }) {
  return (
    <DialogPrimitive.Description
      className={`text-muted-foreground text-sm ${className}`}
      {...props}
    >
      {children}
    </DialogPrimitive.Description>
  );
}
