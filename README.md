Question two :
Online Status Track
Implementing an online status tracker for a web. The tracker should display the current status of the user based on two conditions:

Whether the user is connected to the internet (online or offline).
Whether the user is actively interacting with the application (inactive if no activity for a certain amount of time).
You need to simulate the online status and user activity. Here are the requirements:

Requirements:
The user is considered online if their device is connected to the internet and offline if disconnected.
The user is considered active if they perform any of the following activities within the last 10 seconds:
Moving the mouse
Pressing any key on the keyboard
Scrolling the page
If the user does not perform any of the activities listed above for 10 seconds :offline
If the user becomes inactive, and their device is still online, the status should update to offline.
You should listen for the events and update the status based on these conditions.
Inputs:
The user can perform the following actions:
Mouse movement: Triggered by a mouse movement event.
Key press: Triggered by a keyboard event.
Scroll: Triggered by a scroll event.
Online/Offline event: Triggered by network status changes.
Outputs:
A string "Online" or "Offline" representing the user's network connection status.
A string "You are active" or "You are inactive" representing the user's activity status.
