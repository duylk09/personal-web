import pandas as pd
import json

# Load the Excel file
excel_file = 'statistics.xlsx'

# Load the specific sheet into a DataFrame
sheet_name_d01 = 'Data_Occ_D01'
sheet_name_d02 = 'Data_Occ_D02'

df_d01 = pd.read_excel(excel_file, sheet_name=sheet_name_d01, header=1)
df_d02 = pd.read_excel(excel_file, sheet_name=sheet_name_d02, header=1)

# Filter the data where 'Visa type subgroup' is 'Skilled Worker' or 'Skilled Worker - Health & Care'
filtered_df_d01 = df_d01[df_d01['Visa type subgroup'].isin(['Skilled Worker', 'Skilled Worker - Health & Care'])]
filtered_df_d02 = df_d02[df_d02['Visa type subgroup'].isin(['Skilled Worker', 'Skilled Worker - Health & Care'])]

# Select only the desired columns
filtered_df_d01 = filtered_df_d01[['Year', 'Quarter', 'Nationality', 'Occupation', 'Industry', 'Applications']]
filtered_df_d02 = filtered_df_d02[['Year', 'Quarter', 'Nationality', 'Occupation', 'Industry', 'Grants']]

# Convert the filtered DataFrame to a list of dictionaries (array of objects)
merged_df = pd.merge(
    filtered_df_d01, 
    filtered_df_d02, 
    on=['Year', 'Quarter', 'Nationality', 'Occupation', 'Industry'], 
    how='left'
)

merged_df['Grants'].fillna(0, inplace=True)
merged_data = merged_df.to_json(orient='values')



# Save the merged data as a JSON file
output_file = 'data_occ_merged_d01_d02_with_defaults.json'
with open(output_file, 'w', encoding='utf-8') as json_file:
    json.dump(merged_data, json_file, ensure_ascii=False, indent=4)

print(f'Merged data has been saved to {output_file}')