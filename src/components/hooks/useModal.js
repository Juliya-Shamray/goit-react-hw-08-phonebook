import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(prev => !prev);
  const open = item => {
    setIsOpen(true);
    setContent(item);
  };

  return { isOpen, close, open, toggle, content };
};

export default useModal;
