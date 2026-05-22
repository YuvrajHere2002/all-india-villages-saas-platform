import pandas as pd
import psycopg2
import os



# DATABASE CONNECTION

conn = psycopg2.connect(
    host="localhost",
    database="village_db",
    user="postgres",
    password="postgres"
)



cur = conn.cursor()



# DATASET FOLDER

dataset_folder = r"C:\Users\mishr\OneDrive\Desktop\SABKUCH\VS CODE\Capstone Project\datasets"



# LOOP THROUGH ALL FILES

for file_name in os.listdir(dataset_folder):



    # ONLY EXCEL/ODS FILES

    if file_name.endswith(".xls") or file_name.endswith(".xlsx") or file_name.endswith(".ods"):



        file_path = os.path.join(dataset_folder, file_name)



        print(f"\nIMPORTING FILE: {file_name}")



        # READ FILE

        df = pd.read_excel(file_path)



        print("Dataset Loaded Successfully")



        # LOOP THROUGH ROWS

        for index, row in df.iterrows():



            try:

                state_code = row['MDDS STC']
                state_name = row['STATE NAME']

                district_code = row['MDDS DTC']
                district_name = row['DISTRICT NAME']

                subdistrict_code = row['MDDS Sub_DT']
                subdistrict_name = row['SUB-DISTRICT NAME']

                village_code = row['MDDS PLCN']
                village_name = row['Area Name']



                # INSERT STATE

                cur.execute("""

                    INSERT INTO states
                    (state_code, state_name)

                    VALUES (%s, %s)

                    ON CONFLICT (state_code)

                    DO NOTHING

                """, (state_code, state_name))



                # GET STATE ID

                cur.execute("""

                    SELECT id FROM states

                    WHERE state_code = %s

                """, (state_code,))

                state_id = cur.fetchone()[0]



                # INSERT DISTRICT

                cur.execute("""

                    INSERT INTO districts
                    (district_code, district_name, state_id)

                    VALUES (%s, %s, %s)

                    ON CONFLICT (district_code)

                    DO NOTHING

                """, (district_code, district_name, state_id))



                # GET DISTRICT ID

                cur.execute("""

                    SELECT id FROM districts

                    WHERE district_code = %s

                """, (district_code,))

                district_id = cur.fetchone()[0]



                # INSERT SUBDISTRICT

                cur.execute("""

                    INSERT INTO subdistricts
                    (subdistrict_code, subdistrict_name, district_id)

                    VALUES (%s, %s, %s)

                    ON CONFLICT (subdistrict_code)

                    DO NOTHING

                """, (subdistrict_code, subdistrict_name, district_id))



                # GET SUBDISTRICT ID

                cur.execute("""

                    SELECT id FROM subdistricts

                    WHERE subdistrict_code = %s

                """, (subdistrict_code,))

                subdistrict_id = cur.fetchone()[0]



                # INSERT VILLAGE

                cur.execute("""

                    INSERT INTO villages
                    (village_code, village_name, subdistrict_id)

                    VALUES (%s, %s, %s)

                    ON CONFLICT (village_code)

                    DO NOTHING

                """, (village_code, village_name, subdistrict_id))



                print(f"Inserted: {village_name}")



            except Exception as row_error:

                print(f"ERROR IN ROW: {row_error}")



        conn.commit()



        print(f"\nCOMPLETED FILE: {file_name}")



cur.close()
conn.close()



print("\nALL INDIA DATA IMPORT COMPLETED SUCCESSFULLY")