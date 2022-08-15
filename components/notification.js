// class NotificationElement extends HTMLElement {
//     constructor() {
//         super();
//     }

//     connectedCallback() {
//         this.innerHTML = `
//         <styles>
//         .notifications-list-item {
//   border: 2px solid blue;
//   display: flex;
//   flex-direction: column;
//   margin: 0px 15px 15px 15px;
//   padding: 15px 15px 15px 15px;
//   border: none;
//   height: 120px;
//   justify-content: space-between;
//   list-style-type: none;
//   box-shadow: 1px 1px 2px rgb(36, 231, 36);
//   background-color: #f0f0f0;
//   border-radius: 5px;
// }

// .sender-profile {
//   display: flex;
//   flex-direction: row;
// }
// .sender-avatar-container {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 14px;
//   border-radius: 15px;
//   padding: 8px;
//   background-color: white;
// }
// .sender-avatar-icon {
//   width: 100%;
// }
// .sender-name-container {
//   display: flex;
//   align-items: center;
//   justify-content: start;
//   padding-left: 10px;
//   padding-right: 20px;
// }
// .sender-name {
//   font-size: 12px;
//   font-weight: bold;
// }
// .sender-message {
//   display: flex;
//   align-items: start;  
// }
// .sender-message p {
//   font-size: 13px;
//   font-weight: normal;
//   padding: 5px 10px 5px 10px;
//   overflow-wrap: break-all;
//   background-color: rgb(250, 249, 249);
//   width: 100%;
//   height: 50px;
//   border-radius: 4px;
// }
// .ratings-view-question {
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   padding-left: 40px;
//   padding-right: 40px;
// }
// .ratings {
//   padding: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 10px;
// }

// .ratings-view-question a {
//   font-size: 13px;
// }

// .star {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .star i {
//   font-size: 10px;
//   color: rgb(216, 45, 45);
// }

//         </styles>
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
//         <p>good</p>
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
      
//     </li>
//     `;
//     }
// }

// customElements.define('notification', NotificationElement);
