import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Hi, I am Join Trums, a software developer.';
  const typingSpeed = 100; // Tốc độ hiển thị mỗi ký tự (ms)
  const delayBeforeLoop = 1000; // Thời gian chờ trước khi lặp lại (ms)

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval : any;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setText((prevText) => prevText + fullText[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(startDeleting, delayBeforeLoop);
        }
      }, typingSpeed);
    };

    const startDeleting = () => {
      let deletingInterval : any;
      deletingInterval = setInterval(() => {
        if (text.length === 0) {
          clearInterval(deletingInterval);
          setShowCursor(true);
          setTimeout(startTyping, delayBeforeLoop);
        } else {
          setText((prevText) => prevText.slice(0, -1));
        }
      }, typingSpeed / 2);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <Typography variant="body1">
      {text}
      {showCursor && <span style={{ borderBottom: '1px solid' }}>|</span>}
    </Typography>
  );
};

export default TypingEffect;
