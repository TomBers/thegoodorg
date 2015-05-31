// Template.login.events({
//
//   'submit #login-form' : function(e, t){
//     e.preventDefault();
//     // retrieve the input field values
//     var email = t.find('#login-email').value
//       , password = t.find('#login-password').value;
//
//       // Trim and validate your fields here....
//
//       // If validation passes, supply the appropriate fields to the
//       // Meteor.loginWithPassword() function.
//       Meteor.loginWithPassword(email, password, function(err){
//       if (err)
//         // The user might not have been found, or their passwword
//         // could be incorrect. Inform the user that their
//         // login attempt has failed.
//       else
//         // The user has been logged in.
//     });
//        return false;
//     }
// });
//
// Template.register.events({
//   'submit #register-form' : function(e, t) {
//     e.preventDefault();
//     var email = t.find('#account-email').value
//       , password = t.find('#account-password').value;
//
//       // Trim and validate the input
//
//     Accounts.createUser({email: email, password : password}, function(err){
//         if (err) {
//           // Inform the user that account creation failed
//         } else {
//           // Success. Account has been created and the user
//           // has logged in successfully.
//         }
//
//       });
//
//     return false;
//   }
// });
//
// // trim helper
// var trimInput = function(val) {
//   return val.replace(/^\s*|\s*$/g, "");
// }
//
//
// var isValidPassword = function(val) {
//    return val.length &gt;= 6 ? true : false;
// }
//
// Meteor.autorun(function() {
//   // Whenever this session variable changes, run this function.
//   var message = Session.get('displayMessage');
//   if (message) {
//     var stringArray = message.split('&amp;');
//     ui.notify(stringArray[0], stringArray[1])
//       .effect('slide')
//       .closable();
//
//     Session.set('displayMessage', null);
//   }
// });
//
// var isValidPassword = function(val, field) {
//   if (val.length &gt;= 6) {
//     return true;
//   } else {
//     Session.set('displayMessage', 'Error &amp; Too short.')
//     return false;
//   }
// }
//
//
// Template.passwordRecovery.helpers({
//   resetPassword : function(t) {
//     return Session.get('resetPassword');
//   }
// });
//
// if (Accounts._resetPasswordToken) {
//   Session.set('resetPassword', Accounts._resetPasswordToken);
// }
//
//
//
// Template.passwordRecovery.events({
//
//       'submit #recovery-form' : function(e, t) {
//         e.preventDefault()
//         var email = trimInput(t.find('#recovery-email').value)
//
//         if (isNotEmpty(email) &amp;&amp; isEmail(email)) {
//           Session.set('loading', true);
//           Accounts.forgotPassword({email: email}, function(err){
//           if (err)
//             Session.set('displayMessage', 'Password Reset Error &amp; Doh')
//           else {
//             Session.set('displayMessage', 'Email Sent &amp; Please check your email.')
//           }
//           Session.set('loading', false);
//         });
//         }
//         return false;
//       },
//
//       'submit #new-password' : function(e, t) {
//         e.preventDefault();
//         var pw = t.find('#new-password-password').value;
//         if (isNotEmpty(pw) &amp;&amp; isValidPassword(pw)) {
//           Session.set('loading', true);
//           Accounts.resetPassword(Session.get('resetPassword'), pw, function(err){
//             if (err)
//               Session.set('displayMessage', 'Password Reset Error &amp; Sorry');
//             else {
//               Session.set('resetPassword', null);
//             }
//             Session.set('loading', false);
//           });
//         }
//       return false;
//       }
//   });
