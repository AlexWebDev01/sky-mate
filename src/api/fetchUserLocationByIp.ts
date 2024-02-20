export const fetchUserLocatioByIP = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_IP_API_URL}?token=${
      import.meta.env.VITE_IP_API_KEY
    }& fields = latitude,longitude`
  );

  const data = await response.json();

  return data;
};
