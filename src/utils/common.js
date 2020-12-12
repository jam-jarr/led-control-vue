const functions = {
  post(data, path) {
    fetch("http://192.168.0.65:8080/" + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};

export default functions;
