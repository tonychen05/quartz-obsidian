# readmatrix
> [!NOTE]
> The readmatrix function can be used to import data in matrix format from data stored in excel files as well as text files. It can read from filetypes: .xlsx, .csv, and .txt, among others.

> [!EXAMPLE]
> ```matlab
> SL_Data = readmatrix('Student_Loan_Data_Exercise.xlsx', 'sheet', 'sheet1')
> ```

# readcell
> [!NOTE] 
> The readcell function can be used similarly to readmatrix. readcell differs from readmatrix in that it will not only store the numerical values in a stored array, but also any text. It does this by creating what is known as a cell array, an array that can contain any type of data as its elements.

> [!EXAMPLE]
> ```matlab
> SL_Data_Cell = readcell('Student_Loan_Data_Exercise.xlsx')
> ```


#matlab/load
