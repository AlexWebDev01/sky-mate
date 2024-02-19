export const fetchUserLocatioByIP = async () => {
  return await fetch(
    `${import.meta.env.VITE_IP_API_URL}?token=${
      import.meta.env.VITE_IP_API_KEY
    }& fields = latitude,longitude`
  );
};
