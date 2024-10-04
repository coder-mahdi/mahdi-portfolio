import React, { useEffect, useState } from 'react';
import AnimatedText from './AnimatedText'; // اضافه کردن کامپوننت انیمیشن

function Home() {
  const [initialMessage, setInitialMessage] = useState(""); // متن بی‌معنی
  const [finalMessage, setFinalMessage] = useState(""); // متن اصلی
  const [welcomeMessage, setWelcomeMessage] = useState(""); // متن خوش‌آمدگویی

  useEffect(() => {
    // لود کردن داده‌ها از فایل JSON
    fetch('/data/homeData.json')
      .then((response) => response.json())
      .then((data) => {
        setInitialMessage(data.initialMessage); // متن بی‌معنی
        setFinalMessage(data.helloMessage); // متن معرفی
        setWelcomeMessage(data.welcomeMessage); // متن خوش‌آمدگویی
      })
      .catch((error) => console.error('Error loading home data:', error));
  }, []);

  return (
    <div className="home-container">
      {/* انیمیشن اولیه برای نمایش متن معرفی */}
      <AnimatedText initialMessage={initialMessage} finalMessage={finalMessage} duration={400} />

      {/* نمایش متن خوش‌آمدگویی پس از انیمیشن */}
      <p className="welcome-message">{welcomeMessage}</p>
    </div>
  );
}

export default Home;
