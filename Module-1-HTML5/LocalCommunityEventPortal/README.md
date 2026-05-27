### Local Community Event Portal ###

## Project Overview

This project is developed as part of the Cognizant Digital Nurture HTML5 learning exercises. The Local Community Event Portal is designed to help residents register for local events, view event information, give feedback, watch event videos, save preferences, and find nearby events.

---

## Module 1: HTML5 Exercises

### Task 1: Create HTML5 Basic Template
**Objective:** Ensure semantic structure and browser compatibility.

**Implemented:**
- Used `<!DOCTYPE html>`
- Added HTML5 semantic structure
- Created navigation, main, and footer sections
- Opened project in Chrome and inspected using DevTools

---

### Task 2: Navigation and Linking
**Objective:** Create navigation between sections.

**Implemented:**
- Added navigation links:
  - Home
  - Gallery
  - Contact
- Used anchor links for page navigation

---

### Task 3: Welcome Message with Styling
**Objective:** Display welcome content using styling and IDs/classes.

**Implemented:**
- Created welcome banner
- Added highlighted message
- Used:
  - `id`
  - `class`
  - inline styling

---

### Task 4: Community Event Image Gallery
**Objective:** Display community event images.

**Implemented:**
- Added image gallery with:
  - Community Rally
  - Music Event
  - Food Festival
  - Sports Event
  - Tree Plantation
  - Health Checkup Camp
- Used:
  - `alt`
  - `title`
  - image resizing
- Added double-click image enlargement functionality

---

### Task 5: Event Registration Form
**Objective:** Collect user registration details.

**Implemented:**
- Added registration form fields:
  - Name
  - Email
  - Event Date
  - Event Type
  - Message
- Added registration button
- Displayed event fee during registration

---

### Task 6: Event Feedback with Event Handling
**Objective:** Practice JavaScript event handling.

**Implemented:**
- Used `onblur` for phone validation
- Used `onclick` for feedback submission
- Used `ondblclick` for image enlargement
- Used keyboard events for character counting
- Added event selection in feedback form

---

### Task 7: Video Invite with Media Events
**Objective:** Work with HTML5 video and media events.

**Implemented:**
- Added event promo video
- Used `<video>` tag with controls
- Used `oncanplay`
- Added browser leave warning using `onbeforeunload`

---

### Task 8: Saving User Preferences
**Objective:** Store user preferences.

**Implemented:**
- Used `localStorage`
- Used `sessionStorage`
- Saved preferred event type
- Retrieved saved preference on reload
- Added clear preference option

---

### Task 9: Geolocation for Event Mapping
**Objective:** Get user location.

**Implemented:**
- Added "Find Nearby Events" button
- Used `getCurrentPosition()`
- Displayed coordinates
- Added permission and timeout handling
- Enabled high accuracy location

---

### Task 10: Debugging with Chrome DevTools
**Objective:** Debug webpage and scripts.

**Implemented:**
- Used Inspect Element
- Tested layout changes
- Used Console tab for logs
- Added JavaScript debugging logs
- Used breakpoints for testing

---

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Chrome DevTools
- VS Code

---

## Folder Structure

```text
LocalCommunityEventPortal/
├── index.html
├── images/
│   ├── event1.jpg
│   ├── event2.jpg
│   ├── event3.jpg
│   ├── event4.jpg
│   ├── event5.jpg
│   └── event6.jpg
├── media/
│   └── event-video.mp4
└── README.md
```
