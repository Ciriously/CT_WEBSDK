var clevertap = {
  event: [],
  profile: [],
  account: [],
  onUserLogin: [],
  region: "",
  notifications: [],
  privacy: [],
};

// Push account ID to CleverTap account array

clevertap.account.push({ id: "TEST-464-8KW-ZR7Z" });

// Set privacy options for CleverTap

clevertap.privacy.push({ optOut: false });
clevertap.privacy.push({ useIP: false });

(function () {
  var wzrk = document.createElement("script");
  wzrk.type = "text/javascript";
  wzrk.async = true;

  // Set the source of the script to the CleverTap library

  wzrk.src =
    ("https:" == document.location.protocol
      ? "https://d2r1yp2w7bby2u.cloudfront.net"
      : "http://static.clevertap.com") + "/js/clevertap.min.js";

  // Insert the script element into the DOM

  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(wzrk, s);
})();

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();


 // Get the form values
 var name = document.getElementById("name").value;
 var email = document.getElementById("email").value;
 var phone = document.getElementById("phone").value;
 var dob = document.getElementById("dob").value;
 var ID = document.getElementById("ID").value; // Fetch ID field value

 // Log the form values
 console.log("Name:", name);
 console.log("Email:", email);
 console.log("Phone:", phone);
 console.log("DOB:", dob);
 console.log("ID:", ID); // Log ID value


    //Validate the Phone Number

    var phoneRegex = /^\+\d+$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number should be formatted as +[country code][number]");
      return;
    }

   // Push data to CleverTap onUserLogin array
   clevertap.onUserLogin.push({
    Site: {
        Name: name,
        Email: email,
        Phone: phone,
        DOB: new Date(dob),
        Identity: ID  // Add ID field to the data pushed to onUserLogin
    },
});
    console.log("Data sent to CleverTap");
  });

document
  .getElementById("profilePush")
  .addEventListener("click", function (event) {
    // get the values of the name, email, and phone fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var ID = document.getElementById("ID").value

    // check the format of the phone number
    var phoneRegex = /^\+\d+$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number should be formatted as +[country code][number]");
      return;
    }

    try {
      // call the CleverTap function
      clevertap.profile.push({
        Site: {
          Name: name,
          Email: email,
          Phone: phone,
          DOB: new Date(dob),
          ID: ID
        },
      });

      console.log("Profile data pushed to CleverTap");
    } catch (error) {
      console.error("Error pushing profile data to CleverTap:", error);
    }
  });

document
  .getElementById("askForPush")
  .addEventListener("click", function (event) {
    try {
      // call the CleverTap function
      clevertap.notifications.push({
        titleText: "Would you like to receive Push Notifications?",
        bodyText:
          "We promise to only send you relevant content and give you updates on your transactions",
        okButtonText: "Sign me up!",
        rejectButtonText: "No thanks",
        askAgainTimeInSeconds: 5,
        okButtonColor: "#f28046",
      });

      console.log("Push notification request sent to CleverTap");
    } catch (error) {
      console.error(
        "Error sending push notification request to CleverTap:",
        error
      );
    }
  });

document
  .getElementById("eventButton")
  .addEventListener("click", function (event) {
    // define the event properties
    var eventProperties = {
      "Property 1": "Value 1", // string property
      "Property 2": 123, // integer property
      "Property 3": 45.67, // float property
      "Property 4": new Date(), // date-time property
    };

    try {
      // call the CleverTap function
      clevertap.event.push("Event button clicked", eventProperties);

      console.log("Event pushed to CleverTap");
    } catch (error) {
      console.error("Error pushing event to CleverTap:", error);
    }
  });

//  ------------------------------------------------------------------------------------------------

// UI Scripts for the main page

var mainTexts = [
  "Be yourself; everyone else is already taken. ",
  "You only live once, but if you do it right, once is enough. ",
  "Be the change that you wish to see in the world.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ",
  "In three words I can sum up everything I've learned about life: it goes on.",
];

var subTexts = [
  "- Oscar Wilde",
  "- Mae West",
  "- Mahatma Gandhi",
  "- Albert Einstein",
  "- Robert Frost",
];

var mainTextElement = document.getElementById("mainText");
var subTextElement = document.getElementById("subText");

// Get the index from localStorage, or default to 0 if it's not set
var index = parseInt(localStorage.getItem("index")) || 0;

function updateText() {
  mainTextElement.textContent = mainTexts[index];
  subTextElement.textContent = subTexts[index];

  // Add the fade-in class to the elements
  mainTextElement.classList.add("fade-in");
  subTextElement.classList.add("fade-in");

  // Increment the index and store it in localStorage
  index = (index + 1) % mainTexts.length;
  localStorage.setItem("index", index);
}

// Update the text immediately when the page loads
updateText();


// Carousel variables
let currentSlide = 0;

// Function to show a specific slide
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index; // Set currentSlide to index if it's within bounds
    
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Function to go to the next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Function to go to the previous slide
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Function to close the carousel
function closeCarousel() {
    document.querySelector('.carousel').style.display = 'none';
}

// Function to render cart drop-off personalization campaign
function renderCartDropOffPersonalisationCampaign(data) {
	const name = data.kv.Name;
  const product = data.kv.Cart;
  const containerEl = document.getElementById('container')
  const userNameEl = containerEl.getElementById('user-name')
  usernameEl.innerText = name
  const productNameEl = containerEl.getElementById('product-name')
  productNameEl.innerText = product 
  clevertap.renderNotificationViewed(data);
  containerEl.addEventListener('click', () => {
  	clevertap.renderNotificationClicked(data)
  });
}

// Function to handle different topics and call the appropriate rendering logic
function handlePersonalization(data) {
    const topic = data.kv.topic;
    switch (topic) {
        case "Cart drop-off":
            renderCartDropOffPersonalisationCampaign(data);
            break;
        // Add more cases here for different topics
        default:
            console.log('No rendering logic defined for topic:', topic);
    }
}

// Initialize the carousel when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide); // Initialize carousel to show the first slide
});

// Add event listener for CleverTap event
document.addEventListener('CT_web_native_display', function(event) {
    const data = event.detail;
    handlePersonalization(data);
});

// notifications

// Check if Notification API is available and request permission
if ("Notification" in window) {
  Notification.requestPermission().then(function (permission) {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.log("Notification permission denied.");
    }
  });
} else {
  console.error("Notifications are not supported in this browser.");
}

// Function to show and log a web notification
function showNotification(title, options) {
  if (Notification.permission === "granted") {
    const notification = new Notification(title, options);

    // Log notification display
    console.log(`Notification displayed: ${title}`, options);

    notification.onclick = function () {
      console.log(`Notification clicked: ${title}`);
      // Example action on click
      window.open("https://www.example.com");
      if (typeof clevertap !== 'undefined') {
        clevertap.renderNotificationClicked({
          title: title,
          ...options
        });
      }
    };

    notification.onclose = function () {
      console.log(`Notification closed: ${title}`);
      if (typeof clevertap !== 'undefined') {
        clevertap.renderNotificationViewed({
          title: title,
          ...options
        });
      }
    };
  } else {
    console.error("Notification permission is not granted.");
  }
}

// Example usage of showNotification
// Call this function wherever you need to show a notification
showNotification("New Message", { body: "You have a new message!",
  //  icon: "icon.png"
   });

// Function to raise a CleverTap event
function raiseCleverTapEvent(eventName, eventData) {
  if (typeof clevertap !== 'undefined') {
    clevertap.event.push(eventName, eventData);
    console.log(`CleverTap event raised: ${eventName}`, eventData);
  } else {
    console.error("CleverTap SDK is not defined.");
  }
}

// Example usage of raiseCleverTapEvent
// Call this function wherever you need to raise a CleverTap event
raiseCleverTapEvent("UserSignup", {
  name: "John Doe",
  email: "john.doe@example.com"
});

function handleNativeDisplayEvent(event) {
  console.log("CT_web_native_display event occurred:", event);
}

// Add event listener for CT_web_native_display
document.addEventListener("CT_web_native_display", handleNativeDisplayEvent);


 // Function to log 'page viewed' event
 function logPageViewedEvent() {
  clevertap.event.push("Page Viewed", {
    "Page URL": window.location.href,
    "Title": document.title
  });
}

// Event listener for page load
window.addEventListener("load", function() {
  // Log 'page viewed' event on page load
  logPageViewedEvent();
});

// Event listener for page reload (F5, Ctrl+R, etc.)
window.addEventListener("beforeunload", function() {
  // Log 'page viewed' event on page reload
  logPageViewedEvent();
});

document.getElementById("getStartedButton").addEventListener("click", function() {
  if (typeof clevertap !== 'undefined') {
    clevertap.event.push("banner_display_web", {
      buttonClicked: "Get Started"
    });
    console.log("banner_display_web event logged for 'Get Started' button click");
  } else {
    console.error("CleverTap SDK is not defined.");
  }
});