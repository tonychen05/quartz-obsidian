
# java.util.Random
```java
import java.util.Random;

int seed = Integer.parseInt(input.nextLine());
Random rnd = new Random(seed);
int x = rnd.nextInt(10); // for numbers 0 - 9
int y = rnd.nextInt(20) + 1; // for numbers 1 - 20
int z = rnd.nextInt(10) + 90; // for numbers 90 - 99

```

# Math.random()
- gives a value 0.0 -> 1.0
- to mimic java.util.Random: `low + Math.random()*(high-low)`

#Java/package/random 