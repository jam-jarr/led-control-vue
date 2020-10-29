const functions = {
  post(data) {
    fetch("http://192.168.0.65:8080/led_control", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};

export default functions;
