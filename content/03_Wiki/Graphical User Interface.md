---
aliases:
  - GUI
---
Commonly abbreviated as *GUI*.

# Terminology
**Event**: act of a user manipulating a widget
**Subject**: the widget the user has manipulated (the **subject** of the interaction)
**Observers/Listeners**: object in program that need to do something in response to the events for a particular subject
# Polling
The main program continuously **polls** each possible subject to ask whether any events have occurred. This is cumbersome and resource-intensive.

```psuedocode
while (true) {
	if (subject 0 has experienced event) {
		if (event is event 0) {
			respond to it
		}
		else if (event is event 1) {
		respond to it
		}
		else {...}
	}
	else if (subject 1 has experienced event) {
		...
	}
}
```

# Callback
Each observer registers its interest in a subject's events, and then waits until the subject **calls it back** to tell it there has been an event.


