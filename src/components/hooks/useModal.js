import { useEffect, useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(prev => !prev);
  const open = item => {
    setIsOpen(true);
    setContent(item);
  };
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return { isOpen, close, open, toggle, content };
};

export default useModal;
