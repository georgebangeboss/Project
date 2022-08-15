// class Notification {
//     constructor(sender, message, rating, is_read) {
//         this.sender = sender;
//         this.message = message;
//         this.rating = rating;
//         this.is_read = is_read;
//     }
//     mark_read() {
//         this.is_read = true;
//     }
// }

// let notification1 = new Notification("Tonny Maisha", "Great Job, Sir", 4, false);
// let notification2 = new Notification("Calvin Bange", "Average", 3, false);
// let notification3 = new Notification("Stanley Mboga", "Excellent, Sir", 5, false);
// let notification4 = new Notification("Mark Loshilu", "Check on spelling", 2, false);
// let notification5 = new Notification("Nelson Oyunge", "I requested for the area not the perimeter", 2, false);
// let notification6 = new Notification("Maisha Tony", "Poor job, I'll report you so you are suspended", 1, false);
// let notification7 = new Notification("Val Nyerere", "Great Job, boy. I've sent a tip, check your email. Let's do this again", 5, false);

// let allNotifications = [notification1, notification2, notification3, notification4, notification5, notification6, notification7];

// let notifications_size = allNotifications.length;

// function buildNotificationElements() {
//     let list = document.getElementById("myList");

//     allNotifications.forEach((item) => {
//         let notification_template = document.createElement('template');
//         notification_template.innerHTML = `
//         <style>
//         .star {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .star i {
//   font-size: 10px;
//   color: rgb(216, 45, 45);
// }
//          </style>
//       <li class="notifications-list-item">
//       <div class="sender-profile">
//         <div class="sender-avatar-container">
//           <img
//             src="./images/user_avatar.svg"
//             alt=""
//             class="sender-avatar-icon"
//           />
//         </div>
//         <div class="sender-name-container">
//           <p class="sender-name">Sender Name</p>
//         </div>
//       </div>
//       <div class="sender-message">
//         <p id="sender_message"></p>
//       </div>
//       <div class="ratings-view-question">
//         <a href="questions.html" target="_blank">View Question</a>
//         <div class="ratings">
//           <div class="star">
//             <i class="fa fa-star"></i>
//           </div>
//           <div class="star">
//             <i class="fa fa-star"></i>
//           </div>
//           <div class="star">
//             <i class="fa fa-star"></i>
//           </div>
//           <div class="star">
//             <i class="fa fa-star"></i>
//           </div>
//           <div class="star">
//             <i class="fa fa-star"></i>
//           </div>
//         </div>
//       </div>
      
//     <script
//       src="https://kit.fontawesome.com/3f0e37b3e2.js"
//       crossorigin="anonymous"
//     ></script>
//     </li>
//         `;
//         // document.getElementById("sender_message").innerHTML = item.message;
//         list.appendChild(notification_template.content);
//     });
// }
// function openNotifications() {
//     allNotifications.forEach((item) => {
//         item.is_read = true;
//     });
//     notifications_size = 0;
// }
notifications_size = 7;