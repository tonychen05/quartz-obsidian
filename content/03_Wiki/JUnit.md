**JUnit** is an industry-standard "framework" for [[testing]] Java code
- A *framework* is one ore more components with "holes" in them, i.e., some missing code
- Programmer writes classes following particular conventions to fill in the missing code
- Result of combining the framework code with the programmer's code is a complete product

## Using JUnit

> [!EXAMPLE] Importing JUnit
> ```java
> import static org.junit.Assert.*;
> import org.junit.Test;
> ```
> 

> [!NOTE] Static Import
> The use of a *static import* allows you to call the static methods of `org.junit.Assert` without qualifying their names (e.g., `assertEquals` in upcoming code) 

---
A test plan or **test fixture** is a *public class* with one method per test case; a collection of test cases
	`public class NaturalNumberRootTest`

Each **test case** is a *public void* method with no parameters
	`public void test1327Root3()`

Each test case has an `@Test` **annotation** before it

## Execution Model
Separate instances (objects) are created from the JUnit test fixture
- **JUnit creates one instance per test case**
Do not rely on order of test cases
- Test case listed first in JUnit test fixture is not guaranteed to be executed first

## JUnit Assertions
Two most useful static methods in `org.junit.Assert` to check actual results against allowed results:
	`assertEquals(expected, actual);`
	`assertTrue(expression);`
There is rarely a reason to use any of the dozens of other assertion static methods in `org.junit.Assert`

> [!TIP] Infinite Loops
> If you're worried about infinite loops:
> - Parametrize `@Test` with a *timeout*: number of milliseconds before the test case is terminated for running too long
> 	`@Test(timeout=100)`

### Best Practices
- Keep JUnit test fixtures in the same Eclipse project as the code, but in a separate source folder (i.e. regular code in "src", test classes/fixtures in "test")
	- Tests are then included when project is "built"
	- Helps keeps test fixtures consistent with other code
- Name test fixtures consistently
	- Example: class `NaturalNumberRootTest` tests class `NaturalNumberRoot`
- Name test cases consistently
	- Example: method `testFoo13` tests method `foo` with input `13`

> [!EXAMPLE] Recommended Test Case Style
> ```java
> public class NaturalNumberRootTest {
> 	@Test
> 	public void test1327Root3() {
> 		/*
> 		* Set up variables and call method under test
> 		*/
> 		NaturalNumber n = new NaturalNumber2(1327);
> 		NaturalNumber nExpected = new NaturalNumber2(1327);
> 		NaturalNumber r = new NaturalNumber2(3);
> 		NaturalNumber rExpected = new NaturalNumber2(3);
> 		NaturalNumber rt = NaturalNumberRoot.root(n, r);
> 		NaturalNumber rtExpected = new NaturalNumber2(10);
> 		/*
> 		* Assert that values of variables match expectations
> 		*/
> 		assertEquals(nExpected, n);
> 		assertEquals(rExpected, r);
> 		assertEquals(rtExpected, rt);
> 	}
> }
> ```


> [!NOTE] Redirect to Method under Test
> This way you can replace the implementation under test by simply changing the name of the class in the body of the method above. This is an example of the application of a fundamental principle in software design known as _single point of control over change_. The idea is to design software so that a change in a design decision can be effected by a change in a single place in the code.
```java
/**
 * Calls the method under test.
 * 
 * @param n
 *            the number to pass to the method under test
 * @return the {@code String} returned by the method under test
 * @ensures <pre>
 * redirectToMethodUnderTest = [String returned by the method under test]
 * </pre>
 */
private static String redirectToMethodUnderTest(NaturalNumber n) {
    return NNtoStringWithCommas1.toStringWithCommas(n);
}
```



#java