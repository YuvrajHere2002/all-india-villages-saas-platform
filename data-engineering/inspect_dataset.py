import pandas as pd



file_path = r"C:\Users\mishr\OneDrive\Desktop\SABKUCH\VS CODE\Capstone Project\datasets\Rdir_2011_27_MAHARASHTRA.xls"



df = pd.read_excel(file_path)



print("\n FIRST 5 ROWS:\n")

print(df.head())



print("\n COLUMN NAMES:\n")

print(df.columns)



print("\n DATA TYPES:\n")

print(df.dtypes)



print("\n TOTAL ROWS:\n")

print(len(df))
