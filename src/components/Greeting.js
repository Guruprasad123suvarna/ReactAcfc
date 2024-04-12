import React, { useEffect, useState } from "react";

function Greeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentTime = new Date().getHours();
    let newGreeting;

    if (currentTime < 12) {
      newGreeting = "Good Morning...`!";
    } else if (currentTime < 18) {
      newGreeting = "Good Afternoon...`!";
    } else {
      newGreeting = "Good Evening...`!";
    }

    setGreeting(newGreeting);
  }, []);

  return <h>{greeting}</h>;
}

export default Greeting;
