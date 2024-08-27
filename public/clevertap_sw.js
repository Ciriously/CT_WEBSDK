// Log the form values
importScripts(
  "https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js"
);

// Add an event listener for the 'push' event

self.addEventListener("push", function (event) {
  console.log("Push event received", event);
  // Initialize an empty data object
  var data = {};
  if (event.data) {
    try {
      // Try to parse the data as JSON
      data = event.data.json();
    } catch (e) {
      // If parsing the data as JSON fails, use default values

      data = {
        title: "Default Title",
        body: "Default body text",
      };
    }
  }
  // Get the title from the data, or use a default title

  var title = data.title || "Default Title";

  // Get the title from the data, or use a default title
  var options = {
    body: data.body || "Default body text",
  };

  // Show the notification

  event.waitUntil(self.registration.showNotification(title, options));
});


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("clevertap_sw.js").then(
      function (registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}