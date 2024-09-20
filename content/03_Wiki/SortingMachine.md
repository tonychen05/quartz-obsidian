The `SortingMachine` component family allows you to add elements of type `T` to a collection of such elements, and then remove them one at a time in *sorted order* according to a client-supplied ordering

Queue and Stack support removal in FIFO and LIFO order (*time-based*), respectively while a `SortingMachine` uses a *value-based* ordering

> [!QUESTION] What's the difference between `SortingMachine` and `Queue.sort()`?
> Suppose you want to sort 50,000 GPAs to find the 50 highest. 
> - Code using `sort` method spends time to sort all GPAs just to find the top 50. 
> - Code based on `SortingMachine` can be *much* more efficient because you don't necessarily need to pay for sorting every element

The contract for `SortingMachineKernel` does not tell the client when "sorting" occurs so an implementation of `SortingMachineKernel` may pay the cost of comparing elements to each other:
- During `add` ([[insertion sort]])
- During `changeToExtractionMode` ([[quicksort]] or any other [[sorting algorithm]])
- During `removeFirst` ([[selection sort]])


> [!NOTE] Performance vs. `Queue.sort()`
> - If all elements are *already sorted* by the end of `changeToExtractionMode`, then there is **no difference** in performance compared to using `sort`.
> - If all elements are *not already sorted* by the end of `changeToExtractionMode`, then there **can be a performance advantage** if you don't need to remove all the elements.
> 
> Examples will come later...


#osu/cse/components 