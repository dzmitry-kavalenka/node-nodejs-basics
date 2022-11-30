const parseEnv = () => {
  let rssVariables = "";

  Object.entries(process.env).forEach(([key, value]) => {
    if (key.startsWith("RSS_")) {
      rssVariables += `${key}=${value}; `;
    }
  });

  console.log(rssVariables.slice(0, -2));
};

parseEnv();
