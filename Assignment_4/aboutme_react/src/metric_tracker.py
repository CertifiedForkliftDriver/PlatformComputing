import time
import csv
from selenium import webdriver
from selenium.webdriver.common.by import By

# Initialize browser
driver = webdriver.Chrome()

# Navigate to your website 
driver.get("http://localhost:3000/")

metrics = []
num_clicks = 0
# Track presence time 
start_time = time.time()
presence_time = start_time
while int(presence_time) != 10: # seconds
    #track time
    current_time = time.time()
    presence_time = current_time - start_time
    print(f"Presence time: {presence_time} seconds")
    
    # Track scrolling
    scroll_height = driver.execute_script("return document.body.scrollHeight")  
    current_scroll = driver.execute_script("return window.pageYOffset")
    print(f"Scrolled {current_scroll}/{scroll_height} pixels")
    
    time.sleep(2) 

    #title 
    title = driver.title
    print(title)

    #github link
    button = driver.find_element(By.CLASS_NAME, value="git_link")

# Extract data to write to CSV
data_to_write = [
    ["Presence Time", presence_time],
    ["Scroll Height", scroll_height],
    ["Current Scroll", current_scroll]
]

# Write data to CSV file
csv_filename = "metrics.csv"
with open(csv_filename, "w", newline="", encoding="utf-8") as csvfile:
    csv_writer = csv.writer(csvfile)
    csv_writer.writerows(data_to_write)

# Close the browser
driver.quit()
