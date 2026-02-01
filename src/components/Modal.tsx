import { useEffect, useRef } from "react";

interface ModalProps {
  id: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const Modal = ({ id, children, onClose }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onClose?.();
    };

    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose]);

  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <dialog
      ref={dialogRef}
      id={id}
      className="backdrop:bg-black/50 backdrop:backdrop-blur-sm rounded-lg p-0 border-0 shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
    >
      <div className="relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>
        <div className="p-6">
          {children}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;