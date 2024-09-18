Testing is a ubiquitous and expensive software engineering activity
- Not unusual to spend 30-40% of total project effort on testing
- For big and/or life-critical systems (e.g., flight control), testing cost can be several times the cost of all other software engineering activities combined

[[JUnit]] is an industry-standard "framework" for testing Java code 

---

> [!NOTE] How Big is Big?
> - *Claim*: Boeing 787 Dreamliner avionics (flight control) software has about **6.5 million** lines of code.
> - *Claim*: Microsoft Windows 10 has about **50 million** lines of code
> - *Claim*: A modern car has about **100 million** lines of code

---

> [!NOTE] Best Practice
> Test individual *units* or *components* of software (one class, one method at a time); called **unit testing**

The unit being tested is known as **UUT**, or **unit under test**

> [!INFO] Designing a Test Plan
> - Test **boundary** cases: "smallest", "largest", "special" values based on contract
> - Test **routine** cases
> - Test **challenging** cases, i.e., ones that, if *you* were writing the code, you might find difficult or error-prone

---

> [!NOTE] Other Terms
> - **Integration testing** - testing what happens when multiple components are put together into a larger system
> - **System testing** - testing a whole end-user system

---

> [!TIP] THE GOAL OF TESTING
> Show that the method body does **not** correctly implement the contract, i.e., that is *defective*
> - In other words, testing is to **prove the method doesn't work** not to confirm it does

Testing is a **destructive** activity which primary goal is to "break" the software

> [!WARNING] Testing vs Debugging
> - Testing: ***Show* a defect** by executing it that it has  (i.e., there is at least one situation where the code’s actual behavior is not an allowed behavior)
> - Debugging: ***Given* a defect**, find the defect and repair it


> [!QUOTE] Severe Limitation of Testing
> “Program testing can be used to show the presence of bugs, but never to show their absence!” 
> \- Edsger W. Dijkstra (1972)


#SWE