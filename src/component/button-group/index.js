import React, { useState } from 'react';
import useMedia from '../../hooks/use-media';
import Button from '../button';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ButtonGroups({ buttons, autoClose = false }) {
  const [open, setOpen] = useState(false);
  const isMobile = useMedia(500);

  const prepareButtons = buttons.map((button, index) => {
    const attributes = { ...button.attributes };

    if (autoClose) {
      attributes.onClick = (e) => {
        setOpen(false);
        button?.attributes?.onClick?.(e);
      };
    }

    return (
      <Button key={index} {...attributes}>
        {button.title}
      </Button>
    );
  });

  if (isMobile) {
    return (
      <>
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex items-center justify-center text-zinc-600 -mr-2 rounded-full bg-zinc-100"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </button>
        <Modal
          isOpen={open}
          onRequestClose={() => setOpen(false)}
          style={{
            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
            content: {
              bottom: '0',
              left: '0',
              right: '0',
              top: 'auto',
              borderRadius: '12px',
              padding: '1rem',
              width: '100%',
              maxWidth: '400px',
              margin: '0 auto',
            },
          }}
        >
          <nav className="grid p-4 gap-y-2">{prepareButtons}</nav>
        </Modal>
      </>
    );
  }

  return <nav className="flex gap-2.5">{prepareButtons}</nav>;
}
