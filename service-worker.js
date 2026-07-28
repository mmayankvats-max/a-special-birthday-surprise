self.addEventListener("push", function (event) {
  let data = {};

  try {
    data = event.data ? event.data.json() : {};
  } catch (error) {
    data = {
      title: "🎂 Happy Birthday Soni Khudi ❤️",
      body: "Your special birthday surprise is waiting for you! 🎁"
    };
  }

  const title =
    data.title || "🎂 Happy Birthday Soni Khudi ❤️";

  const options = {
    body:
      data.body ||
      "Your special birthday surprise is waiting for you! 🎁",

    icon: "/static/images/girlfriend.jpg",

    badge: "/static/images/girlfriend.jpg",

    data: {
      url:
        data.url ||
        "https://a-special-birthday-surprise.onrender.com"
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});


self.addEventListener("notificationclick", function (event) {

  event.notification.close();

  const url =
    event.notification.data?.url ||
    "https://a-special-birthday-surprise.onrender.com";

  event.waitUntil(
    clients.matchAll({
      type: "window",
      includeUncontrolled: true
    }).then(function (clientList) {

      for (const client of clientList) {
        if ("focus" in client) {
          return client.focus();
        }
      }

      if (clients.openWindow) {
        return clients.openWindow(url);
      }

    })
  );

});
